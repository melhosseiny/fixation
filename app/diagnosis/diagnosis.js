import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../geo.js';
import {Point, Points, Line, Circle, Rect, Ease} from '../geo.js';
import {INIT_FIXATION_WINDOW} from '../eye.js';
import {Fixation, GazePoint, GazeWindow} from '../eye.js';
import {RAW_DATA_COLOR, FIXATION_COLOR, SACCADE_COLOR} from '../color.js';
import {Algorithm} from '../algorithm.js';

import {MDCSnackbar} from '@material/snackbar';

const snackbar = MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));

import { io } from 'socket.io-client';
import {render as renderTmpl} from 'lit-html';

import {template} from './template.js'

export function Diagnosis(spec) {
  let socket = undefined;

  let gazeHistory = [];
  let dataPoints = [];
  let calibrationPoints = [];
  let fixationCount = 0;
  let prevFixation = undefined;
  let fixationWindow = INIT_FIXATION_WINDOW;
  let detectFixations = false;
  let algorithm = Algorithm({});
  let calibrating = false;

  let setMode = function() {
    detectFixations = !detectFixations;
  }

  let r = 24;
  let interval = undefined;
  let t = 0;
  let ts = 0;
  let tsi = 0;
  let d = 600;
  let ds = 200;
  let dsi = 100;
  let cx = 0;
  let cy = 0;

  let px = 0;
  let py = 0;

  let tPoints = [[0.1,0.1], [0.9,0.1], [0.5,0.5], [0.1,0.9], [0.9,0.9]];
  let calibration = [];

  let getCalibration = function(context) {
    let diffX = [];
    let diffY = [];
    Rect({x: 0, y: 0, width: context.canvas.width, height: context.canvas.height}).clear(context, "#ccc");
    calibration.forEach(function(calibrationPoint, i) {
      context.lineWidth = 0.005*context.canvas.height;
      Circle({x:  tPoints[i][0], y: tPoints[i][1], r: 10}).render(context, 'rgba(0,0,0,0.25)');
      calibrationPoint.forEach(function(point) {
        context.lineWidth = 0.001*context.canvas.height;

        context.strokeStyle = '#95c45d';
        context.beginPath();
        context.moveTo(tPoints[i][0]*context.canvas.width, tPoints[i][1]*context.canvas.height);
        context.lineTo(point.getX()*context.canvas.width, point.getY()*context.canvas.height);
        diffX.push(tPoints[i][0] - point.getX());
        diffY.push(tPoints[i][1] - point.getY());
        context.stroke();
      })
    })
    let absErrX = Math.abs(diffX.reduce(function(a,b) { return a + b;}) / diffX.length);
    let absErrY = Math.abs(diffY.reduce(function(a,b) { return a + b;}) / diffY.length);
    console.log("erorr",(1 - (absErrX + absErrY))*100);
  }

  let animatePoint = function(context, x, y, i) {
    if (r < 24) {
      r = Ease({}).linear(tsi, 5, 24, dsi);
    }
    if (tsi === dsi) {
      cx = Ease({}).linear(t, px, x, d);
      cy = Ease({}).linear(t, py, y, d);
      if (t === d) {
        r = Ease({}).linear(ts, 24, 6, ds);
        if (ts === ds) {
          clearInterval(interval);
          ts = 0;
          tsi = 0;
          console.log("calibration end", calibrationPoints);
          setTimeout(function() {
            calibrationPoints = gazeHistory.slice(20,gazeHistory.length);
            calibration.push(calibrationPoints);
            calibrationPoints = [];
          }, 1000);
        }
      }
    }

    Circle({x:  cx, y: cy, r: r}).render(context, undefined, '#e36056');
    Circle({x:  cx, y: cy, r: 5}).render(context, undefined, '#000');
  }

  let drawPoint = function(context, x, y, i) {
    px = cx;
    py = cy;
    t = 0;

    interval = setInterval(function() {
      Rect({x: 0, y: 0, width: context.canvas.width, height: context.canvas.height}).clear(context, "#ccc");
      animatePoint(context, x, y, i);
      if (tsi === dsi) {
          if (t === d) { ts += 10; }
          else { t += 10; }
      } else { tsi += 10; }
    }, 10)
  }

  let calibrate = function() {
    render(spec);
    let context = document.getElementById('a').getContext('2d');
    calibrating = true;
    context.canvas.focus();
    context.canvas.webkitRequestFullScreen();
    context.save()
    Rect({x: 0, y: 0, width: context.canvas.width, height: context.canvas.height}).clear(context, "#ccc");

    let timeout = 0;
    tPoints.forEach(function(point, i) {
      setTimeout(function () { drawPoint(context,point[0],point[1], i) }, timeout)
        timeout += 2000
    });

    setTimeout(function() {
      getCalibration(context);
    }, 2000*tPoints.length)

    context.restore()
  }

  let render = data => {
    renderTmpl(template(data), document.getElementById('view'));
  }

  let init = () => {
    Object.assign(spec, {
      setMode,
      calibrate
    });
    render(spec);
  }

  init();

  let connect = function (context) {
    Rect({x: 0, y: 0, width: context.canvas.width, height: context.canvas.height}).clear(context);
    socket = io.connect('http://localhost');

    socket.on('news', function (data) {
      data.X = data.X / DEVICE_WIDTH;
      data.Y = data.Y / DEVICE_HEIGHT;

      let p = Point({x: data.X, y: data.Y});
      if (gazeHistory.length === 30) { gazeHistory.shift(); }
      gazeHistory.push(p);

      if (!calibrating) {
        if (detectFixations) {
          let gp = GazePoint({x: data.X, y: data.Y, t: data.Timestamp});
          dataPoints.push(gp);
          if (dataPoints.length === fixationWindow) {
            let fixation = GazeWindow({points: dataPoints}).detector();
            if (fixation) {
              fixationCount += 1;
              if (fixationCount === 20) {
                Rect({x: 0, y: 0, width: context.canvas.width, height: context.canvas.height}).clear(context);
                fixationCount = 0;
              }

              let normalizedDuration = algorithm.normalize(fixation.getDuration(), 100, 400) * 50;
              Circle({x: fixation.getX(), y: fixation.getY(), r: normalizedDuration}).render(context, FIXATION_COLOR);

              if (prevFixation) {
                Line({x1: prevFixation.getX(), y1: prevFixation.getY(), x2: fixation.getX(), y2: fixation.getY()}).render(context, SACCADE_COLOR);
              }
              prevFixation = fixation;

              dataPoints = [];
              fixationWindow = INIT_FIXATION_WINDOW;
            } else {
              fixationWindow++;
            }
          }
        } else {
          Rect({x: 0, y: 0, width: context.canvas.width, height: context.canvas.height}).clear(context);
          p.render(context, RAW_DATA_COLOR);
          Points({points: gazeHistory}).render(context, RAW_DATA_COLOR);
        }

        let gazeXCtx = document.getElementById("gaze-x").getContext('2d');
        let gazeYCtx = document.getElementById("gaze-y").getContext('2d');

        Rect({x: 0, y: 0, width: gazeXCtx.canvas.width, height: gazeXCtx.canvas.height}).clear(gazeXCtx);
        Rect({x: 0, y: 0, width: gazeYCtx.canvas.width, height: gazeYCtx.canvas.height}).clear(gazeYCtx);

        Points({points: gazeHistory}).renderTimeline(gazeXCtx, 0, RAW_DATA_COLOR);
        Points({points: gazeHistory}).renderTimeline(gazeYCtx, 1, RAW_DATA_COLOR);
      }
    });

    socket.io.on('error', err => {
      snackbar.labelText = `Can\'t connect to eye tracker.`;
      snackbar.open();
    })
  }

  let disconnect = function() {
    socket.disconnect();
    console.log("disconnect from diagnosis");
  }

  return Object.freeze({
    connect,
    disconnect
  });
}
