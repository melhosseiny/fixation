import {Storage} from '../storage.js';
import {Point, Points, Line, Circle, Rect, Heatmap} from '../geo.js';
import {REPLAY_FPS} from '../eye.js';
import {Fixation, GazePoint, GazeWindow} from '../eye.js';
import {FIXATION_COLOR, SACCADE_COLOR} from '../color.js';

import {MDCSnackbar} from '@material/snackbar';

const snackbar = MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));

import io from 'socket.io-client';
import {render as renderTmpl} from 'lit-html';
import {pixelmatch} from 'pixelmatch';
import {DateTime, Duration} from 'luxon';

import {template} from './template.js'

export function Replay(spec) {
  let socket = undefined;

  let lastFixatedEl = undefined;
  let lastImg = undefined;
  let gazeHistory = [];
  let dataPoints = [];
  let fixationCount = 0;
  let prevFixation = undefined;
  let storage = Storage({});
  let surface = Rect({x: 0, y: 0, width: 1280, height: 720});
  let tiles = surface.tiles().map(t => Rect(t));
  let heatmap = Heatmap({tiles: tiles});
  let context;
  let frames = [];

  let heatmapVisible = false;

  let showHeatmap = function() {
    heatmapVisible = !heatmapVisible;
  }

  let firstTimestamp = undefined;
  let requestId = undefined;

  let fps = REPLAY_FPS;
  let now = undefined;
  let then = Date.now();
  let interval = 1000/fps;
  let delta = undefined;

  let play = function() {
    console.log("playing", spec.playing);
    if (spec.playing) {
      cancelAnimationFrame(requestId);
    } else {
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
      showHeatmap
    });
    render(spec);
  }

  init();

  let replay = function() {
    if (spec.position === spec.max) {
      console.log("no frame");
      spec.playing = !spec.playing;
      spec.position = 0;
      load(spec.position);
      spec.time = Duration.fromMillis(0).toFormat("hh:mm:ss");
      render(spec);
      return;
    }

    now = Date.now();
    delta = now - then;
    if (delta > interval) {
      then = now - (delta % interval);
      let context = document.getElementById('a').getContext('2d');

      let frame = frames.shift();

      if (frame) {
        let fixation = Fixation({x: frame.x, y: frame.y});

        let count = heatmap.getCountArr();
        let gaze_buffer = new ArrayBuffer(2*4);
        let gaze = new Float32Array(gaze_buffer);
        gaze[0] = fixation.getX();
        gaze[1] = fixation.getY();

        if (heatmap.getCountArr().buffer.length !== 0) {
          worker.postMessage({count: count, gaze: gaze_buffer}, [count.buffer, gaze_buffer]);
        }
        //console.log("value", frame);
        let img = new Image();
        img.onload = function() {
          context.drawImage(img,0,0,1280,720);

          Circle({x: fixation.getX(), y: fixation.getY(), r: 20}).render(context, FIXATION_COLOR);

          if (prevFixation) {
            Line({x1: prevFixation.getX(), y1: prevFixation.getY(), x2: fixation.getX(), y2: fixation.getY()}).render(context, SACCADE_COLOR);
          }
          prevFixation = fixation;

          if (heatmapVisible) { heatmap.render(context); }
          spec.time = Duration.fromMillis((frame.timestamp - firstTimestamp)).toFormat("hh:mm:ss");
          spec.position++;
        }
        img.src = frame.img;
      }
      render(spec);
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
          }
          spec.loaded = true;
          render(spec);
        }
      });
    }
  }

  let worker = undefined;

  let connect = function(context) {
    context = context;
    Rect({x: 0, y: 0, width: context.canvas.width, height: context.canvas.height}).clear(context);

    worker = new Worker("/heatmap.js");
    worker.onmessage = function(e) {
      //console.log("onmessage", e.data);
      heatmap.setCountArr(e.data);
    }
    worker.onerror = function(e) { console.log("onerror", e); }

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
