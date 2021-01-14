import {Storage} from '../storage.js';
import {CANVAS_WIDTH, CANVAS_HEIGHT, Point, Points, Line, Circle, Rect, Heatmap} from '../geo.js';
import {REPLAY_FPS} from '../eye.js';
import {Fixation, GazePoint, GazeWindow} from '../eye.js';
import {FIXATION_COLOR, SACCADE_COLOR, LOW_LOAD_COLOR, MEDIUM_LOAD_COLOR, HIGH_LOAD_COLOR} from '../color.js';

import {Algorithm} from '../algorithm.js';

import {MDCSnackbar} from '@material/snackbar';

const snackbar = MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));

import {render as renderTmpl} from 'lit-html';
import {DateTime, Duration} from 'luxon';

import {template} from './template.js';

const BUFFER_SIZE = 24;
const POOL_SIZE = 1;

let frames = [];

function WorkerPool(spec = {n: POOL_SIZE}) {
  let {n} = spec;
  let workers = new Array(n);

  let init = function(callback) {
    workers.fill(undefined);
    for (let i = 0; i < workers.length; i++) {
      workers[i] = new Worker('/buffer.js');

      workers[i].onmessage = function(e) {
        console.log("bufferMessage", e.data);
        e.data.forEach(frame => {
          const div = document.createElement('div');
          div.id = 'frame' + frame.id;
          div.style['background-image'] = 'url(' + frame.img + ')';
          delete frame.img;
          document.body.appendChild(div);
        });
        frames.push(...e.data);
        callback();
      }
    }
  }

  let work = function(start) {
    for (let i = 0; i < workers.length; i++) {
      console.log('buffering ...', start + BUFFER_SIZE * i);
      workers[i].postMessage({
        start: start + BUFFER_SIZE * i
      });
    }
  }

  let terminateAll = function() {
    workers.forEach(worker => worker.terminate());
  }

  return Object.freeze({
    init,
    work,
    terminateAll
  })
}

export function Replay(spec) {
  let lastFixatedEl = undefined;
  let lastImg = undefined;
  let gazeHistory = [];
  let dataPoints = [];
  let fixationCount = 0;
  let prevFixation = undefined;
  let storage = Storage({});
  let surface = Rect({x: 0, y: 0, width: CANVAS_WIDTH, height: CANVAS_HEIGHT});
  let tiles = surface.tiles().map(t => Rect(t));
  let heatmap = Heatmap({tiles: tiles});
  let context;
  let algorithm = Algorithm({});

  let toggleShowHeatmap = function() {
    spec.showHeatmap = !spec.showHeatmap;
  }

  let toggleExportToVideo = function() {
    if (spec.playing) {
      if (spec.exportToVideo) {
        mediaRecorder.stop();
      } else {
        mediaRecorder.start();
      }
    }
    spec.exportToVideo = !spec.exportToVideo;
    render(spec);
  }

  let tf = undefined;
  let requestId = undefined;

  let fps;

  let play = function() {
    console.log("playing", spec.playing);
    if (spec.playing) {
      if (spec.exportToVideo) { mediaRecorder.stop(); }
      cancelAnimationFrame(requestId);
    } else {
      if (spec.exportToVideo) { mediaRecorder.start(); }
      requestId = requestAnimationFrame(replay);
    }
    spec.playing = !spec.playing;
    render(spec);
  }

  let seekStyle = function() {
    return "background-image:-webkit-linear-gradient(left, #b91f1f " + spec.position/spec.max*100 + "%, #a5a5a5 " + spec.position/spec.max*100 + "%, #a5a5a5 " + (frames.length+spec.position)/spec.max*100 + "%, #757575 " + (frames.length+spec.position)/spec.max*100 + "%)";
  }

  let seekStart = 0;

  let seek = function() {
    let prevPosition = spec.position;
    spec.position = +document.getElementById("seek").value;
    seekStart = spec.position;
    console.log(prevPosition, spec.position);
    spec.bufferingDetails = Array(Math.ceil((spec.max - seekStart) / BUFFER_SIZE)).fill(false);
    heatmap.reset();
    frames = [];
    load(spec.position);
    spec.preloadedFrames = frames.length;
    render(spec);
  }

  let render = data => {
    renderTmpl(template({...data, seekStyle: seekStyle()}), document.getElementById('view'));
  }

  let init = () => {
    Object.assign(spec, {
      loaded: false,
      buffering: false,
      bufferingDetails: [],
      preloadedFrames: 0,
      playing: false,
      position: 0,
      time: '00:00:00',
      totalTime: '--:--:--',
      max: 1000,
      play,
      seek,
      seekStyle: seekStyle(),
      showHeatmap: false,
      exportToVideo: false,
      toggleShowHeatmap,
      toggleExportToVideo
    });
    render(spec);
  }

  init();

  let t0;
  let ti;

  let replay = function(timestamp) {
    console.log("replay", frames.length, BUFFER_SIZE*POOL_SIZE, spec.position, spec.max, (spec.position + BUFFER_SIZE*POOL_SIZE) % BUFFER_SIZE*POOL_SIZE);
    if (!spec.buffering && (spec.position - seekStart + BUFFER_SIZE*POOL_SIZE) % BUFFER_SIZE*POOL_SIZE === 0) {
      load(spec.position + (BUFFER_SIZE*POOL_SIZE));
    }
    if (spec.position === spec.max) {
      console.log("no frame");
      spec.playing = !spec.playing;
      spec.position = 0;
      seekStart = 0;
      spec.bufferingDetails = Array(Math.ceil(spec.max / BUFFER_SIZE)).fill(false);
      heatmap.reset();
      frames = [];
      spec.time = Duration.fromMillis(0).toFormat("hh:mm:ss");
      load(spec.position);
      spec.preloadedFrames = frames.length;
      render(spec);
      return;
    }
    //console.log(timestamp, ti, timestamp - ti, fps, 1000 / fps);
    if (!t0) {
      t0 = timestamp;
      ti = t0;
    }

    if (timestamp - ti > 1000 / (9 || fps)) {
      let frame = frames.shift();

      if (frame) {
        let fixation = Fixation({x: frame.x, y: frame.y});

        let count = heatmap.getCountArr();
        let gaze_buffer = new ArrayBuffer(2*4);
        let gaze = new Float32Array(gaze_buffer);
        gaze[0] = fixation.getX();
        gaze[1] = fixation.getY();

        if (heatmap.getCountArr().buffer.byteLength !== 0) {
          worker.postMessage({count: count, gaze: gaze_buffer}, [count.buffer, gaze_buffer]);
        }
        context.drawImage(document.getElementById('frame' + frame.id).attributeStyleMap.get('background-image'), 0, 0, context.canvas.width, context.canvas.height);
        if (spec.showHeatmap) { heatmap.render(context); }
        document.getElementById('frame' + frame.id).remove();

        let normalizedDuration = algorithm.normalize(frame.duration, 100, 400) * 50;
        console.log('durationr', normalizedDuration);
        Circle({x: fixation.getX(), y: fixation.getY(), r: normalizedDuration || 20}).render(context, FIXATION_COLOR);

        //Circle({x: fixation.getX(), y: fixation.getY(), r: 20}).render(context, FIXATION_COLOR);

        if (prevFixation) {
          Line({x1: prevFixation.getX(), y1: prevFixation.getY(), x2: fixation.getX(), y2: fixation.getY()}).render(context, SACCADE_COLOR);
        }
        prevFixation = fixation;

        spec.time = Duration.fromMillis((frame.timestamp - tf)).toFormat("hh:mm:ss");
        spec.position++;

        spec.preloadedFrames = frames.length;
        const bufferCtx = document.getElementById('buffer').getContext('2d');
        const buffer_health = spec.preloadedFrames / (BUFFER_SIZE * 2);
        const color = buffer_health > 0.9 ? HIGH_LOAD_COLOR : buffer_health > 0.8 ? MEDIUM_LOAD_COLOR : LOW_LOAD_COLOR;
        Rect({x: 0, y: 0, width: bufferCtx.canvas.width, height: bufferCtx.canvas.height}).clear(bufferCtx);
        Rect({x: 0, y: (1 - buffer_health) * bufferCtx.canvas.height, width: bufferCtx.canvas.width, height: buffer_health * bufferCtx.canvas.height}).render(bufferCtx, undefined, color);
        render(spec);
        ti = timestamp;
      }
    }

    requestId = requestAnimationFrame(replay);
  }

  let load = function(start) {
    console.log('bufferingDetails', spec.bufferingDetails, start, seekStart, (start - seekStart) / BUFFER_SIZE);
    if (spec.bufferingDetails[(start - seekStart) / BUFFER_SIZE]) {
      return;
    }
    spec.buffering = true;
    spec.preloadedFrames = frames.length;
    spec.bufferingDetails[(start - seekStart) / BUFFER_SIZE] = true;
    render(spec);
    workerPool.work(start);
  }

  let worker = undefined;
  let workerPool = undefined;
  let mediaRecorder = undefined;
  let chunks = [];

  let connect = function(c) {
    context = c;
    Rect({x: 0, y: 0, width: context.canvas.width, height: context.canvas.height}).clear(context);
    const bufferCtx = document.getElementById('buffer').getContext('2d');
    Rect({x: 0, y: 0, width: bufferCtx.canvas.width, height: bufferCtx.canvas.height}).clear(bufferCtx);

    worker = new Worker("/heatmap.js");
    worker.onmessage = function(e) {
      //console.log("onmessage", e.data);
      heatmap.setCountArr(e.data);
      heatmap.clone();
    }
    worker.onerror = function(e) { console.log("onerror", e); }

    workerPool = WorkerPool();
    workerPool.init(() => {
      spec.loaded = true;
      spec.buffering = false;
      spec.preloadedFrames = frames.length;
      render(spec);
    });

    mediaRecorder = new MediaRecorder(context.canvas.captureStream(60), { mimeType: "video/webm; codecs=vp9" });
    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
      console.log('chunks', e.data);
    };
    mediaRecorder.onstop = function(e) {
      const video = document.getElementById('captured-video');
      /*video.onloadedmetadata = function() {
        video.currentTime = Number.MAX_SAFE_INTEGER;
        console.log(video.duration);
      }*/
      video.src = URL.createObjectURL(new Blob(chunks, { 'type' : 'video/webm' }));
      chunks = [];
    };

    storage.getKeys("gaze", (keys) => {
      spec.max = keys.length;
      if (spec.max === 0) {
        snackbar.labelText = 'No data found. Record or import new data.';
        snackbar.open();
      }
      console.log("max", spec.max);

      storage.get(0, (first) => {
        if (first) {
          tf = first.timestamp;
          storage.get(spec.max-1, (last) => {
            if (last) {
              const tl = last.timestamp;
              spec.totalTime = Duration.fromMillis(tl - tf).toFormat("hh:mm:ss");
              spec.bufferingDetails = Array(Math.ceil(spec.max / BUFFER_SIZE)).fill(false);
              spec.preloadedFrames = frames.length;
              render(spec);
              load(0);
            }
          })
        }
      });
    });
  }

  let disconnect = () => {};

  return Object.freeze({
    connect,
    disconnect
  });
}
