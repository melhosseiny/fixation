import {Storage} from '../storage.js';
import {CANVAS_WIDTH, CANVAS_HEIGHT, Point, Points, Line, Circle, Rect, Heatmap} from '../geo.js';
import {REPLAY_FPS} from '../eye.js';
import {Fixation, GazePoint, GazeWindow} from '../eye.js';
import {FIXATION_COLOR, SACCADE_COLOR} from '../color.js';

import {Algorithm} from '../algorithm.js';

import {MDCSnackbar} from '@material/snackbar';

const snackbar = MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));

import {render as renderTmpl} from 'lit-html';
//import {pixelmatch} from 'pixelmatch';
import {DateTime, Duration} from 'luxon';

import {template} from './template.js'

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
  let frames = [];
  let algorithm = Algorithm({});

  let toggleShowHeatmap = function() {
    spec.showHeatmap = !spec.showHeatmap;
  }

  let toggleExportToVideo = function() {
    spec.exportToVideo = !spec.exportToVideo;
    if (spec.playing) {
      mediaRecorder.start();
    }
    render(spec);
  }

  let firstTimestamp = undefined;
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

  let seek = function() {
    let prevPosition = spec.position;
    spec.position = +document.getElementById("seek").value;
    console.log(prevPosition, spec.position);
    heatmap.reset();
    if (spec.position < prevPosition) {
      frames = [];
      load(spec.position);
    } else if (spec.position > prevPosition){
      let diff = spec.position - prevPosition;
      Array(diff).fill().forEach(function() { frames.shift(); });
    }
    render(spec);
  }

  let render = data => {
    renderTmpl(template({...data, seekStyle: seekStyle()}), document.getElementById('view'));
  }

  let init = () => {
    Object.assign(spec, {
      loaded: false,
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
    if (spec.position === spec.max) {
      console.log("no frame");
      spec.playing = !spec.playing;
      spec.position = 0;
      load(spec.position);
      spec.time = Duration.fromMillis(0).toFormat("hh:mm:ss");
      render(spec);
      return;
    }
    //console.log(timestamp, ti, timestamp - ti, fps, 1000 / fps);
    if (!t0) {
      t0 = timestamp;
      ti = t0;
    }

    if (timestamp - ti > 1000 / (8 || (fps*1.5))) {
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
        context.drawImage(frame.preloadedImg, 0, 0, context.canvas.width, context.canvas.height);
        if (spec.showHeatmap) { heatmap.render(context); }

        let normalizedDuration = algorithm.normalize(frame.duration, 100, 400) * 50;
        console.log('durationr', normalizedDuration);
        Circle({x: fixation.getX(), y: fixation.getY(), r: normalizedDuration}).render(context, FIXATION_COLOR);

        //Circle({x: fixation.getX(), y: fixation.getY(), r: 20}).render(context, FIXATION_COLOR);

        if (prevFixation) {
          Line({x1: prevFixation.getX(), y1: prevFixation.getY(), x2: fixation.getX(), y2: fixation.getY()}).render(context, SACCADE_COLOR);
        }
        prevFixation = fixation;

        spec.time = Duration.fromMillis((frame.timestamp - firstTimestamp)).toFormat("hh:mm:ss");
        spec.position++;

        render(spec);
        ti = timestamp;
      }
    }

    requestId = requestAnimationFrame(replay);
  }

  let load = function(start) {
    for (let frame=start; frame <= spec.max; frame++) {
      storage.get(frame, (v) => {
        if (v) {
          frames.push(v);
          //console.log(frames.length);
          if (frames.length === spec.max) {
            spec.totalTime = Duration.fromMillis((frames[spec.max-1].timestamp - frames[0].timestamp)).toFormat("hh:mm:ss");
            firstTimestamp = frames[0].timestamp;
            //console.log(frames);
            snackbar.labelText = 'Preloading frames';
            snackbar.open();
            preloadImages();
          }
          render(spec);
        }
      });
    }
  }

  let preloadImages = () => {
    for (let i = 0; i < frames.length; i++) {
      let img = new Image();
      img.onload = function() {
        frames[i].preloadedImg = img;
        //console.log(i, frames.length);
        if (i === frames.length - 1) {
          console.log('preloaded all images');
          frames = frames.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1);
          console.log('sorted all frames');
          const intrinsicFPS = frames.length * 1000 / (frames[spec.max-1].timestamp - frames[0].timestamp);
          console.log('intrisic fps', intrinsicFPS);
          fps = intrinsicFPS;

          snackbar.labelText = `Preloaded all frames (FPS = ${Math.round(fps * 1.5)})`;
          snackbar.open();

          spec.loaded = true;
          render(spec);
        }
      }
      img.src = frames[i].img;

      /*if (frames[i+1] && frames[i+1].timestamp < frames[i].timestamp) {
        console.log('found 1!!', frames[i+1].timestamp, frames[i].timestamp);
        console.log('found 1!!', frames[i+1].id, frames[i].id);
      }*/
    }
  }

  let worker = undefined;
  let mediaRecorder = undefined;
  let chunks = [];

  let connect = function(c) {
    context = c;
    Rect({x: 0, y: 0, width: context.canvas.width, height: context.canvas.height}).clear(context);

    worker = new Worker("/heatmap.js");
    worker.onmessage = function(e) {
      //console.log("onmessage", e.data);
      heatmap.setCountArr(e.data);
      heatmap.clone();
    }
    worker.onerror = function(e) { console.log("onerror", e); }

    mediaRecorder = new MediaRecorder(context.canvas.captureStream(30));
    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    };
    mediaRecorder.onstop = function(e) {
      const video = document.getElementById('captured-video');
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
      load(0);
    });

    //for (let i=0; i < 200; i++) {
      //Rect({x: 0, y: 0, width: context.canvas.width, height: context.canvas.height}).clear(context);
      //let p = Point({x: value.x, y: value.y});
      //p.render(context, 'rgba(200,0,0,0.85)');

      //if (gazeHistory.length === 30) { gazeHistory.shift(); }
      //gazeHistory.push(p);

      //Rect({x: 0, y: 0, width: context.canvas.width, height: context.canvas.height}).clear(context);
      //fixationCount = 0;
      //fixation = fixation.getFixation();
      //Circle({x: fixation.x, y: fixation.y, r: 20}).render(context, 'rgba(255,255,255,0.85)');

      //if (prevFixation) {
      //  Line({x1: prevFixation.x, y1: prevFixation.y, x2: fixation.x, y2: fixation.y}).render(context, 'rgba(255,255,255,0.85)');
      //}
      //prevFixation = fixation;

      //for (let i = 0; i < tiles.length; i++) {
      //  if (tiles[i].containsPoint(fixation.x, fixation.y)) {
      //    heatmap.setCount(i, heatmap.getCount(i)+1);
      //  }
      //}

      //heatmap.render(context);

      //Points({points: gazeHistory}).render(context, 'rgba(200,0,0,0.85)');
      //tiles.forEach(t => t.render(context, 'rgba(255,255,255,0.85)'));

      //const canvas2 = document.createElement('canvas');
      //canvas2.width = 100;
      //canvas2.height = 100;
      //const context2 = canvas2.getContext('2d');

      //context2.drawImage(document.getElementById('player'), 0, 0, canvas2.width, canvas2.height);
      //let img2 = undefined;
      //if (lastImg) {
      //  img2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
        //pixelmatch(lastImg.data, img2.data, null, canvas2.width, canvas2.height, {threshold: 0.1});
      //}
      //lastImg = context2.getImageData(0, 0, canvas2.width, canvas2.height);
    //}
  }

  let disconnect = () => {};

  return Object.freeze({
    connect,
    disconnect
  });
}
