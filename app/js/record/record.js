import {Storage} from '../storage.js'
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../geo.js';
import {INIT_FIXATION_WINDOW} from '../eye.js';
import {Fixation, GazePoint, GazeWindow} from '../eye.js'

import io from 'socket.io-client';
import {render as renderTmpl} from 'lit-html';
import {DateTime, Duration} from 'luxon';

import {template} from './template.js'

export function Record(spec) {
  let socket = undefined;

  let lastFixatedEl = undefined;
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
    });
    render(spec);
  }

  init();

  let connect = function(context) {
    let offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = 1280;
    offscreenCanvas.height = 720;
    let offscreenContext = offscreenCanvas.getContext('2d');

    let worker = new Worker("/storage.js");

    socket = io.connect('http://localhost');
    socket.on('news', function (data) {
      data.X = data.X / DEVICE_WIDTH;
      data.Y = data.Y / DEVICE_HEIGHT;
      if (spec.recording) {
        let gp = GazePoint({x: data.X, y: data.Y, t: data.Timestamp});
        dataPoints.push(gp);
        if (dataPoints.length === fixationWindow) {
          let fixation = GazeWindow({points: dataPoints}).detector();
          if (fixation) {
            fixationCount += 1;

            offscreenContext.drawImage(document.getElementById('player'),0,0,offscreenContext.canvas.width,offscreenContext.canvas.height);
            let pxls = offscreenContext.getImageData(0,0,offscreenContext.canvas.width,offscreenContext.canvas.height);
            //console.log(pxls);
            //console.log(JSON.stringify({x: fixation.getX(), y: fixation.getY(), img: offscreenContext.canvas.toDataURL('image/webp', 0.5).length  }));
            //console.log("timestamp", fixation.getTimestamp());
            worker.postMessage({x: fixation.getX(), y: fixation.getY(), timestamp: fixation.getTimestamp(), pxls: pxls.data.buffer}, [pxls.data.buffer]);
            //storage.put(JSON.stringify({x: fixation.getX(), y: fixation.getY(), img: context.canvas.toDataURL('image/webp', 0.5)}));
            if (fixationCount === 20) {
              fixationCount = 0;
            }

            /*let element = document.elementFromPoint(fixation.getX(), fixation.getY());
            if (element) {
              if (lastFixatedEl) {
                lastFixatedEl.classList.remove("fixated");
              }
              lastFixatedEl = element;
              lastFixatedEl.classList.add("fixated");
            }*/
            dataPoints = [];
            fixationWindow = INIT_FIXATION_WINDOW;
          } else {
            fixationWindow++;
          }
        }
      }
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
