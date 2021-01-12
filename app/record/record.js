import {Storage} from '../storage.js'
import {CANVAS_WIDTH, CANVAS_HEIGHT, Rect, Points, Point} from '../geo.js';
import {INIT_FIXATION_WINDOW} from '../eye.js';
import {Fixation, GazePoint, GazeWindow} from '../eye.js'
import {LOW_LOAD_COLOR, MEDIUM_LOAD_COLOR, HIGH_LOAD_COLOR} from '../color.js';

import {MDCSnackbar} from '@material/snackbar';

const snackbar = MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));

import io from 'socket.io-client';
import {render as renderTmpl} from 'lit-html';
import {DateTime, Duration} from 'luxon';

import {template} from './template.js';

function WorkerPool(spec = {n: 10}) {
  let {n} = spec;
  let workers = new Array(n);
  let load = new Array(n);


  let loadCtx = document.getElementById('load').getContext('2d');

  let init = function() {
    workers.fill(undefined);
    load.fill(0);
    for (let i = 0; i < workers.length; i++) {
      workers[i] = new Worker('/storage.js');

      workers[i].onmessage = function(e) {
        //console.log("onmessage load", e.data);
        load[i] = e.data;
        //console.log(load);
      }
    }
  }

  let getWorkerWithMinLoad = function() {
    let minIndex = 0;
    for (let i = 0; i < load.length; i++) {
      if (load[i] < load[minIndex]) {
        minIndex = i;
      }
    }

    const maxLoad = Math.max(10, ...load);
    const color = Math.max(...load) > 7.5 ? HIGH_LOAD_COLOR : (Math.max(...load) > 2.5 ? MEDIUM_LOAD_COLOR : LOW_LOAD_COLOR);
    Rect({x: 0, y: 0, width: loadCtx.canvas.width, height: loadCtx.canvas.height}).clear(loadCtx);
    Points({points: load.map((l,i) => Point({x: i, y: l / maxLoad}))}).renderTimeline(loadCtx, 1, color);

    return workers[minIndex];
  }

  let terminateAll = function() {
    workers.forEach(worker => worker.terminate());
  }

  return Object.freeze({
    init,
    getWorkerWithMinLoad,
    terminateAll
  })
}

export function Record(spec) {
  let socket = undefined;

  let dataPoints = [];
  let fixationCount = 0;
  let prevFixation = undefined;
  let fixationWindow = INIT_FIXATION_WINDOW;
  let storage = Storage({});

  let start = undefined;

  let toggleRecord = function() {
    if (!spec.recording) {
      start = DateTime.local();
    } else {
      spec.elapsed = DateTime.local().diff(start).toFormat("hh:mm:ss");
    }
    spec.recording = !spec.recording;
    render(spec);
  }

  let render = data => {
    renderTmpl(template(data), document.getElementById('view'));
  }

  let init = () => {
    Object.assign(spec, {
      toggleRecord,
      recording: false,
      connected: false,
      id: 0
    });
    render(spec);
  }

  init();

  let connect = function(context) {
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = CANVAS_WIDTH;
    offscreenCanvas.height = CANVAS_HEIGHT;
    const offscreenContext = offscreenCanvas.getContext('2d');

    let workerPool = WorkerPool();
    workerPool.init();

    socket = io.connect('http://localhost');

    socket.on('connect', function() {
      spec.connected = true;
      render(spec);
      console.log('eye connect')
    })

    socket.on('disconnect', function() {
      workerPool.terminateAll();
      console.log('terminated all workers');
    })

    socket.on('news', function (data) {
      if (spec.recording) {
        let gp = GazePoint({x: data.X, y: data.Y, t: data.Timestamp});
        dataPoints.push(gp);
        if (dataPoints.length === fixationWindow) {
          let fixation = GazeWindow({points: dataPoints}).detector();
          if (fixation) {
            fixationCount += 1;

            offscreenContext.drawImage(document.getElementById('player'),0,0,offscreenContext.canvas.width,offscreenContext.canvas.height);
            let pxls = offscreenContext.getImageData(0,0,offscreenContext.canvas.width,offscreenContext.canvas.height);

            workerPool.getWorkerWithMinLoad().postMessage({x: fixation.getX(), y: fixation.getY(), duration: fixation.getDuration(), id: spec.id, timestamp: fixation.getTimestamp(), pxls: pxls.data.buffer}, [pxls.data.buffer]);
            spec.id++;

            if (fixationCount === 20) {
              fixationCount = 0;
            }

            dataPoints = [];
            fixationWindow = INIT_FIXATION_WINDOW;
          } else {
            fixationWindow++;
          }
        }
      }
    });

    socket.on('connect_error', err => {
      snackbar.labelText = 'Can\'t connect to eye tracker.';
      snackbar.open();
    });
  }

  let disconnect = function() {
    socket.disconnect();
    console.log("disconnect from record");
  }

  return Object.freeze({
    connect,
    disconnect
  });
}
