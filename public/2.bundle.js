(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./app/js/algorithm.js":
/*!*****************************!*\
  !*** ./app/js/algorithm.js ***!
  \*****************************/
/*! exports provided: Algorithm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Algorithm", function() { return Algorithm; });
function Algorithm(spec = {}) {
  let relative = function (a, x, b) {
    return (x - a) / (b - a);
  };

  let limit = function (a, x, b) {
    if (x < a) return a;
    if (x > b) return b;
    return x;
  };

  let normalize = function (x, min, max) {
    if (x < min) {
      x = min;
    }

    if (x > max) {
      x = max;
    }

    return (x - min) / (max - min);
  };

  return Object.freeze({
    relative,
    limit,
    normalize
  });
}

/***/ }),

/***/ "./app/js/color.js":
/*!*************************!*\
  !*** ./app/js/color.js ***!
  \*************************/
/*! exports provided: RAW_DATA_COLOR, FIXATION_COLOR, SACCADE_COLOR, CLEAR_COLOR, DIFFERENT_COLORS, HEATMAP_COLORS, Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RAW_DATA_COLOR", function() { return RAW_DATA_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIXATION_COLOR", function() { return FIXATION_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SACCADE_COLOR", function() { return SACCADE_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_COLOR", function() { return CLEAR_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIFFERENT_COLORS", function() { return DIFFERENT_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEATMAP_COLORS", function() { return HEATMAP_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var _algorithm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithm.js */ "./app/js/algorithm.js");

const RAW_DATA_COLOR = 'rgba(200,0,0,0.85)';
const FIXATION_COLOR = 'rgba(255,255,255,0.85)';
const SACCADE_COLOR = 'rgba(255,255,255,0.85)';
const CLEAR_COLOR = 'rgb(0,0,0)';
const DIFFERENT_COLORS = [];
const HEATMAP_COLORS = [];

function hsv2hsl(hue, sat, val) {
  return [hue, sat * val / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue), hue / 2];
}

for (var i = 0; i < 10; i++) {
  var h = i * 0.618033988749895 % 1.0;
  var s = 0.5;
  var v = Math.sqrt(1.0 - i * 0.618033988749895 % 0.5);
  var a = 0.5;
  var hsl = hsv2hsl(h, s, v);
  DIFFERENT_COLORS.push('hsla(' + Math.round(hsl[0] * 255) + ',' + Math.round(hsl[1] * 100) + '%,' + Math.round(hsl[2] * 100) + '%,' + a + ')');
}

for (let h = 0; h < 210; h++) {
  HEATMAP_COLORS.push('hsla(' + (209 - h) + ', 50%, 50%,' + 0.5 + ')');
}

function Color(spec = {}) {
  let algorithm = Object(_algorithm_js__WEBPACK_IMPORTED_MODULE_0__["Algorithm"])({});

  let heat = function (rel) {
    let d = algorithm.limit(0, rel, 1);
    if (rel === 0) return 'rgba(0,0,0,0)';
    return HEATMAP_COLORS[Math.round(d * (HEATMAP_COLORS.length - 1))];
  };

  return Object.freeze({
    heat
  });
}

/***/ }),

/***/ "./app/js/eye.js":
/*!***********************!*\
  !*** ./app/js/eye.js ***!
  \***********************/
/*! exports provided: DISPERSION_THRESHOLD, DURATION_THRESHOLD, INIT_FIXATION_WINDOW, REPLAY_FPS, GazePoint, Fixation, GazeWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPERSION_THRESHOLD", function() { return DISPERSION_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DURATION_THRESHOLD", function() { return DURATION_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_FIXATION_WINDOW", function() { return INIT_FIXATION_WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPLAY_FPS", function() { return REPLAY_FPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GazePoint", function() { return GazePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fixation", function() { return Fixation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GazeWindow", function() { return GazeWindow; });
/* harmony import */ var _geo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geo.js */ "./app/js/geo.js");

const DISPERSION_THRESHOLD = 50; // pixels

const DURATION_THRESHOLD = 150; // ms

const INIT_FIXATION_WINDOW = 10; // ~0.15 * 70Hz

const REPLAY_FPS = 5;
function GazePoint(spec = {
  x: 0,
  y: 0,
  t: 0
}) {
  let {
    x,
    y,
    t
  } = spec;

  let getX = function () {
    return x;
  };

  let getY = function () {
    return y;
  };

  let getTimestamp = function () {
    return t;
  };

  return Object.freeze({
    getX,
    getY,
    getTimestamp
  });
}
function Fixation(spec = {
  x: 0,
  y: 0,
  t: 0,
  d: 0
}) {
  let {
    x,
    y,
    t,
    d
  } = spec;

  let getX = function () {
    return x;
  };

  let getY = function () {
    return y;
  };

  let getTimestamp = function () {
    return t;
  };

  let getDuration = function () {
    return d;
  };

  let getFixation = function () {
    return {
      x: x,
      y: y
    };
  };

  return Object.freeze({
    getX,
    getY,
    getTimestamp,
    getDuration,
    getFixation
  });
}
function GazeWindow(spec = {
  points: []
}) {
  let {
    points
  } = spec;

  let dispersion = function () {
    let pointsX = points.map(p => p.getX() * _geo_js__WEBPACK_IMPORTED_MODULE_0__["DEVICE_WIDTH"]);
    let pointsY = points.map(p => p.getY() * _geo_js__WEBPACK_IMPORTED_MODULE_0__["DEVICE_HEIGHT"]);
    return Math.max(...pointsX) - Math.min(...pointsX) + (Math.max(...pointsY) - Math.min(...pointsY));
  };

  let centroid = function () {
    let pointsX = points.map(p => p.getX());
    let pointsY = points.map(p => p.getY());
    return Fixation({
      x: +(pointsX.reduce((a, b) => a + b) / pointsX.length).toFixed(6),
      y: +(pointsY.reduce((a, b) => a + b) / pointsY.length).toFixed(6),
      t: +points[0].getTimestamp().toFixed(6),
      d: +(points[points.length - 1].getTimestamp() - points[0].getTimestamp()).toFixed(6)
    });
  };

  let detector = function () {
    if (dispersion() > DISPERSION_THRESHOLD) {
      return centroid();
    }

    return false;
  };

  return Object.freeze({
    detector
  });
}

/***/ }),

/***/ "./app/js/geo.js":
/*!***********************!*\
  !*** ./app/js/geo.js ***!
  \***********************/
/*! exports provided: DEVICE_WIDTH, DEVICE_HEIGHT, Point, Points, Line, Circle, Rect, Heatmap, Ease */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE_WIDTH", function() { return DEVICE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE_HEIGHT", function() { return DEVICE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Points", function() { return Points; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heatmap", function() { return Heatmap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return Ease; });
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./app/js/color.js");
/* harmony import */ var _algorithm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithm.js */ "./app/js/algorithm.js");



const DEVICE_WIDTH = window.screen.width * window.devicePixelRatio;
const DEVICE_HEIGHT = window.screen.height * window.devicePixelRatio;
let color = Object(_color_js__WEBPACK_IMPORTED_MODULE_0__["Color"])({});
let algorithm = Object(_algorithm_js__WEBPACK_IMPORTED_MODULE_1__["Algorithm"])({});
function Point(spec = {
  x: 0,
  y: 0
}) {
  let {
    x,
    y
  } = spec;

  let getX = function () {
    return x;
  };

  let getY = function () {
    return y;
  };

  let render = function (context, fillStyle) {
    context.fillStyle = fillStyle;
    context.fillRect(x * context.canvas.width, y * context.canvas.height, 0.005 * context.canvas.width, 0.005 * context.canvas.width);
  };

  return Object.freeze({
    getX,
    getY,
    render
  });
}
function Points(spec = {
  points: []
}) {
  let {
    points
  } = spec;

  let render = function (context, fillStyle) {
    context.fillStyle = fillStyle;
    points.forEach(function (p) {
      p.render(context, fillStyle);
    });
  };

  let renderTimeline = function (context, axis, fillStyle) {
    context.fillStyle = fillStyle;
    points.forEach(function (p, i) {
      let dim = axis === 0 ? p.getX() : p.getY();
      context.fillRect(i / 30 * context.canvas.width, (1 - dim) * context.canvas.height, context.canvas.width / 30, 1);
    });
  };

  return Object.freeze({
    render,
    renderTimeline
  });
}
function Line(spec = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
}) {
  let {
    x1,
    y1,
    x2,
    y2
  } = spec;

  let render = function (context, strokeStyle) {
    context.strokeStyle = strokeStyle;
    context.beginPath();
    context.moveTo(x1 * context.canvas.width, y1 * context.canvas.height);
    context.lineTo(x2 * context.canvas.width, y2 * context.canvas.height);
    context.stroke();
  };

  return Object.freeze({
    render
  });
}
function Circle(spec = {
  x: 0,
  y: 0,
  r: 0
}) {
  let {
    x,
    y,
    r
  } = spec;

  let getX = function () {
    return x;
  };

  let getY = function () {
    return y;
  };

  let getR = function () {
    return r;
  };

  let render = function (context, strokeStyle, fillStyle) {
    context.beginPath();
    context.arc(x * context.canvas.width, y * context.canvas.height, r, 0, 2 * Math.PI);

    if (fillStyle) {
      context.fillStyle = fillStyle;
      context.fill();
    }

    if (strokeStyle) {
      context.strokeStyle = strokeStyle;
      context.stroke();
    }
  };

  return Object.freeze({
    getX,
    getY,
    getR,
    render
  });
}
const GT_BASE = [30, 15];
const GT_CONSIDER = [20, 20];
function Rect(spec = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
}) {
  let {
    x,
    y,
    width,
    height
  } = spec;

  let getX = function () {
    return x;
  };

  let getY = function () {
    return y;
  };

  let getWidth = function () {
    return width;
  };

  let getHeight = function () {
    return height;
  };

  let clear = function (context, fillStyle) {
    if (fillStyle) context.fillStyle = fillStyle;else context.fillStyle = _color_js__WEBPACK_IMPORTED_MODULE_0__["CLEAR_COLOR"];
    context.fillRect(0, 0, width, height);
  };

  let containsPoint = function (px, py) {
    let w = width;
    let h = height; // At least one of the dimensions is negative

    if ((w | h) < 0) {
      return false;
    } // Note: if either dimension is zero, tests below must return false


    if (px < x || py < y) {
      return false;
    }

    w += x;
    h += y; // overflow || intersect

    return (w < x || w > px) && (h < y || h > py);
  };

  let tiles = function (tileSize = GT_BASE) {
    let tiles = [];
    let start = {
      x: x,
      y: y
    };
    let shift = false;

    while (start.y < y + height) {
      let rectangle = {
        x: start.x,
        y: start.y,
        width: tileSize[0],
        height: tileSize[1]
      };
      tiles.push(rectangle);
      start.x = rectangle.x + rectangle.width;

      if (start.x >= x + width) {
        shift = !shift;
        start.y += tileSize[1];
        start.x = shift ? x - tileSize[0] / 2 : 0;
      }
    }

    return tiles;
  };

  let render = function (context, strokeStyle, fillStyle) {
    if (strokeStyle) {
      context.strokeStyle = strokeStyle;
      context.strokeRect(x, y, width, height);
    }

    if (fillStyle) {
      context.fillStyle = fillStyle;
      context.fillRect(x, y, width, height);
    }
  };

  return Object.freeze({
    getX,
    getY,
    getWidth,
    getHeight,
    clear,
    tiles,
    containsPoint,
    render
  });
}
function Heatmap(spec = {
  tiles: []
}) {
  let {
    tiles
  } = spec;
  let count = new Uint16Array(new ArrayBuffer(tiles.length * 2));
  let countClone = new Uint16Array(new ArrayBuffer(tiles.length * 2));

  let getCount = function (i) {
    return count[i];
  };

  let setCount = function (i, c) {
    count[i] = c;
  };

  let getCountArr = function () {
    return count;
  };

  let setCountArr = function (c) {
    count = c;
  };

  let reset = function () {
    count = new Uint16Array(new ArrayBuffer(tiles.length * 2));
    countClone = new Uint16Array(new ArrayBuffer(tiles.length * 2));
  };

  let render = function (context) {
    let count2 = count.buffer.byteLength !== 0 ? count : countClone;
    let global_max = Math.max(...count2);

    if (global_max !== 0) {
      tiles.forEach(function (tile, i) {
        if (count2[i]) {
          let h = color.heat(algorithm.relative(0, count2[i], global_max));
          tile.render(context, undefined, h);
        }
      });
    }

    if (count.buffer.byteLength !== 0) {
      countClone = count.slice(0);
    }

    ;
  };

  return Object.freeze({
    getCount,
    setCount,
    getCountArr,
    setCountArr,
    reset,
    render
  });
}
/* ANIMATION */

function Ease(spec = {}) {
  let linear = function (t, b, e, d) {
    return (e - b) * t / d + b;
  };

  return Object.freeze({
    linear
  });
}

/***/ }),

/***/ "./app/js/replay/replay.js":
/*!*********************************!*\
  !*** ./app/js/replay/replay.js ***!
  \*********************************/
/*! exports provided: Replay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replay", function() { return Replay; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.js */ "./app/js/storage.js");
/* harmony import */ var _geo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geo.js */ "./app/js/geo.js");
/* harmony import */ var _eye_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eye.js */ "./app/js/eye.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color.js */ "./app/js/color.js");
/* harmony import */ var _material_snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/snackbar */ "./node_modules/@material/snackbar/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var pixelmatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pixelmatch */ "./node_modules/pixelmatch/index.js");
/* harmony import */ var pixelmatch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pixelmatch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template.js */ "./app/js/replay/template.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const snackbar = _material_snackbar__WEBPACK_IMPORTED_MODULE_4__["MDCSnackbar"].attachTo(document.querySelector('.mdc-snackbar'));





function Replay(spec) {
  let socket = undefined;
  let lastFixatedEl = undefined;
  let lastImg = undefined;
  let gazeHistory = [];
  let dataPoints = [];
  let fixationCount = 0;
  let prevFixation = undefined;
  let storage = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["Storage"])({});
  let surface = Object(_geo_js__WEBPACK_IMPORTED_MODULE_1__["Rect"])({
    x: 0,
    y: 0,
    width: 1280,
    height: 720
  });
  let tiles = surface.tiles().map(t => Object(_geo_js__WEBPACK_IMPORTED_MODULE_1__["Rect"])(t));
  let heatmap = Object(_geo_js__WEBPACK_IMPORTED_MODULE_1__["Heatmap"])({
    tiles: tiles
  });
  let context;
  let frames = [];
  let heatmapVisible = false;

  let showHeatmap = function () {
    heatmapVisible = !heatmapVisible;
  };

  let firstTimestamp = undefined;
  let requestId = undefined;
  let fps = _eye_js__WEBPACK_IMPORTED_MODULE_2__["REPLAY_FPS"];
  let now = undefined;
  let then = Date.now();
  let interval = 1000 / fps;
  let delta = undefined;

  let play = function () {
    console.log("playing", spec.playing);

    if (spec.playing) {
      cancelAnimationFrame(requestId);
    } else {
      requestId = requestAnimationFrame(replay);
    }

    spec.playing = !spec.playing;
    render(spec);
  };

  let seekStyle = function () {
    return "background-image:-webkit-linear-gradient(left, #b91f1f " + spec.position / spec.max * 100 + "%, #a5a5a5 " + spec.position / spec.max * 100 + "%, #a5a5a5 " + (frames.length + spec.position) / spec.max * 100 + "%, #757575 " + (frames.length + spec.position) / spec.max * 100 + "%)";
  };

  let seek = function () {
    let prevPosition = spec.position;
    spec.position = +document.getElementById("seek").value;
    console.log(prevPosition, spec.position);
    heatmap.reset();

    if (spec.position < prevPosition) {
      frames = [];
      load(spec.position);
    } else if (spec.position > prevPosition) {
      let diff = spec.position - prevPosition;
      Array(diff).fill().forEach(function () {
        frames.shift();
      });
    }

    render(spec);
  };

  let render = data => {
    Object(lit_html__WEBPACK_IMPORTED_MODULE_6__["render"])(Object(_template_js__WEBPACK_IMPORTED_MODULE_9__["template"])({ ...data,
      seekStyle: seekStyle()
    }), document.getElementById('view'));
  };

  let init = () => {
    _extends(spec, {
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
  };

  init();

  let replay = function () {
    if (spec.position === spec.max) {
      console.log("no frame");
      spec.playing = !spec.playing;
      spec.position = 0;
      load(spec.position);
      spec.time = luxon__WEBPACK_IMPORTED_MODULE_8__["Duration"].fromMillis(0).toFormat("hh:mm:ss");
      render(spec);
      return;
    }

    now = Date.now();
    delta = now - then;

    if (delta > interval) {
      then = now - delta % interval;
      let context = document.getElementById('a').getContext('2d');
      let frame = frames.shift();

      if (frame) {
        let fixation = Object(_eye_js__WEBPACK_IMPORTED_MODULE_2__["Fixation"])({
          x: frame.x,
          y: frame.y
        });
        let count = heatmap.getCountArr();
        let gaze_buffer = new ArrayBuffer(2 * 4);
        let gaze = new Float32Array(gaze_buffer);
        gaze[0] = fixation.getX();
        gaze[1] = fixation.getY();

        if (heatmap.getCountArr().buffer.length !== 0) {
          worker.postMessage({
            count: count,
            gaze: gaze_buffer
          }, [count.buffer, gaze_buffer]);
        } //console.log("value", frame);


        let img = new Image();

        img.onload = function () {
          context.drawImage(img, 0, 0, 1280, 720);
          Object(_geo_js__WEBPACK_IMPORTED_MODULE_1__["Circle"])({
            x: fixation.getX(),
            y: fixation.getY(),
            r: 20
          }).render(context, _color_js__WEBPACK_IMPORTED_MODULE_3__["FIXATION_COLOR"]);

          if (prevFixation) {
            Object(_geo_js__WEBPACK_IMPORTED_MODULE_1__["Line"])({
              x1: prevFixation.getX(),
              y1: prevFixation.getY(),
              x2: fixation.getX(),
              y2: fixation.getY()
            }).render(context, _color_js__WEBPACK_IMPORTED_MODULE_3__["SACCADE_COLOR"]);
          }

          prevFixation = fixation;

          if (heatmapVisible) {
            heatmap.render(context);
          }

          spec.time = luxon__WEBPACK_IMPORTED_MODULE_8__["Duration"].fromMillis(frame.timestamp - firstTimestamp).toFormat("hh:mm:ss");
          spec.position++;
        };

        img.src = frame.img;
      }

      render(spec);
    }

    requestId = requestAnimationFrame(replay);
  };

  let load = function (start) {
    for (let frame = start; frame <= spec.max; frame++) {
      storage.get(frame, v => {
        if (v) {
          frames.push(v); //console.log(frames.length);

          if (frames.length === spec.max) {
            spec.totalTime = luxon__WEBPACK_IMPORTED_MODULE_8__["Duration"].fromMillis(frames[spec.max - 1].timestamp - frames[0].timestamp).toFormat("hh:mm:ss");
            firstTimestamp = frames[0].timestamp;
          }

          spec.loaded = true;
          render(spec);
        }
      });
    }
  };

  let worker = undefined;

  let connect = function (context) {
    context = context;
    Object(_geo_js__WEBPACK_IMPORTED_MODULE_1__["Rect"])({
      x: 0,
      y: 0,
      width: context.canvas.width,
      height: context.canvas.height
    }).clear(context);
    worker = new Worker("/heatmap.js");

    worker.onmessage = function (e) {
      //console.log("onmessage", e.data);
      heatmap.setCountArr(e.data);
    };

    worker.onerror = function (e) {
      console.log("onerror", e);
    };

    storage.getKeys("gaze", keys => {
      spec.max = keys.length;

      if (spec.max === 0) {
        snackbar.labelText = 'No data found. Record or import new data.';
        snackbar.open();
      }

      console.log("max", spec.max);
      load(0);
    }); //for (let i=0; i < 200; i++) {
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
  };

  let disconnect = () => {};

  return Object.freeze({
    connect,
    disconnect
  });
}

/***/ }),

/***/ "./app/js/replay/template.js":
/*!***********************************!*\
  !*** ./app/js/replay/template.js ***!
  \***********************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");

const template = data => lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-8">
        <canvas @click="${fullscreen}" id="a" width="1280" height="720"></canvas>
        <div id="canvas-ctrl">
          <button @click="${data.play}" ?disabled="${!data.loaded}" class="mdc-icon-button material-icons">${data.playing ? lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`stop` : lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`play_arrow`}</button>
          <input id="seek" @input="${data.seek}" .value="${data.position}" max="${data.max}" type="range" style="${data.seekStyle}">
          <span id="time">${data.time}</span>
          <span id="total-time">&nbsp;/ ${data.totalTime}</span>
        </div>
      </div>
      <div class="mdc-layout-grid__cell--span-4">
        <div class="mdc-switch">
          <div class="mdc-switch__track"></div>
          <div class="mdc-switch__thumb-underlay">
            <div class="mdc-switch__thumb">
              <input @click="${data.showHeatmap}" type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch">
            </div>
          </div>
        </div>
        <label for="basic-switch">Show Heatmap</label>
      </div>
    </div>
  </div>
`;

let fullscreen = function () {
  const context = document.getElementById('a').getContext('2d');
  context.canvas.webkitRequestFullScreen();
};

/***/ }),

/***/ "./app/js/storage.js":
/*!***************************!*\
  !*** ./app/js/storage.js ***!
  \***************************/
/*! exports provided: Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
function Storage(spec = {}) {
  let id = 0;

  let put = function (document) {
    caches.open('gaze').then(cache => {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      cache.put('/gaze/' + id, new Response(document));
      id = id + 1;
    });
  };

  let get = async function (id, callback) {
    const cache = await caches.open('gaze');
    const response = await cache.match(new Request('/gaze/' + id));

    if (response) {
      response.json().then(value => callback(value));
    } else {
      callback(undefined);
    }
  };

  let clear = async function (cacheName, callback) {
    caches.delete(cacheName).then(deleted => callback(deleted));
  };

  let getKeys = async function (cacheName, callback) {
    const cache = await caches.open(cacheName);
    cache.keys().then(keys => callback(keys));
  };

  let usage = function (callback) {
    return navigator.storage.estimate();
  };

  return Object.freeze({
    put,
    get,
    clear,
    getKeys,
    usage
  });
}

/***/ }),

/***/ "./node_modules/pixelmatch/index.js":
/*!******************************************!*\
  !*** ./node_modules/pixelmatch/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

module.exports = pixelmatch;
const defaultOptions = {
  threshold: 0.1,
  // matching threshold (0 to 1); smaller is more sensitive
  includeAA: false,
  // whether to skip anti-aliasing detection
  alpha: 0.1,
  // opacity of original image in diff ouput
  aaColor: [255, 255, 0],
  // color of anti-aliased pixels in diff output
  diffColor: [255, 0, 0],
  // color of different pixels in diff output
  diffColorAlt: null,
  // whether to detect dark on light differences between img1 and img2 and set an alternative color to differentiate between the two
  diffMask: false // draw the diff over a transparent background (a mask)

};

function pixelmatch(img1, img2, output, width, height, options) {
  if (!isPixelData(img1) || !isPixelData(img2) || output && !isPixelData(output)) throw new Error('Image data: Uint8Array, Uint8ClampedArray or Buffer expected.');
  if (img1.length !== img2.length || output && output.length !== img1.length) throw new Error('Image sizes do not match.');
  if (img1.length !== width * height * 4) throw new Error('Image data size does not match width/height.');
  options = _extends({}, defaultOptions, options); // check if images are identical

  const len = width * height;
  const a32 = new Uint32Array(img1.buffer, img1.byteOffset, len);
  const b32 = new Uint32Array(img2.buffer, img2.byteOffset, len);
  let identical = true;

  for (let i = 0; i < len; i++) {
    if (a32[i] !== b32[i]) {
      identical = false;
      break;
    }
  }

  if (identical) {
    // fast path if identical
    if (output && !options.diffMask) {
      for (let i = 0; i < len; i++) drawGrayPixel(img1, 4 * i, options.alpha, output);
    }

    return 0;
  } // maximum acceptable square distance between two colors;
  // 35215 is the maximum possible value for the YIQ difference metric


  const maxDelta = 35215 * options.threshold * options.threshold;
  let diff = 0; // compare each pixel of one image against the other one

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pos = (y * width + x) * 4; // squared YUV distance between colors at this pixel position, negative if the img2 pixel is darker

      const delta = colorDelta(img1, img2, pos, pos); // the color difference is above the threshold

      if (Math.abs(delta) > maxDelta) {
        // check it's a real rendering difference or just anti-aliasing
        if (!options.includeAA && (antialiased(img1, x, y, width, height, img2) || antialiased(img2, x, y, width, height, img1))) {
          // one of the pixels is anti-aliasing; draw as yellow and do not count as difference
          // note that we do not include such pixels in a mask
          if (output && !options.diffMask) drawPixel(output, pos, ...options.aaColor);
        } else {
          // found substantial difference not caused by anti-aliasing; draw it as such
          if (output) {
            drawPixel(output, pos, ...(delta < 0 && options.diffColorAlt || options.diffColor));
          }

          diff++;
        }
      } else if (output) {
        // pixels are similar; draw background as grayscale image blended with white
        if (!options.diffMask) drawGrayPixel(img1, pos, options.alpha, output);
      }
    }
  } // return the number of different pixels


  return diff;
}

function isPixelData(arr) {
  // work around instanceof Uint8Array not working properly in some Jest environments
  return ArrayBuffer.isView(arr) && arr.constructor.BYTES_PER_ELEMENT === 1;
} // check if a pixel is likely a part of anti-aliasing;
// based on "Anti-aliased Pixel and Intensity Slope Detector" paper by V. Vysniauskas, 2009


function antialiased(img, x1, y1, width, height, img2) {
  const x0 = Math.max(x1 - 1, 0);
  const y0 = Math.max(y1 - 1, 0);
  const x2 = Math.min(x1 + 1, width - 1);
  const y2 = Math.min(y1 + 1, height - 1);
  const pos = (y1 * width + x1) * 4;
  let zeroes = x1 === x0 || x1 === x2 || y1 === y0 || y1 === y2 ? 1 : 0;
  let min = 0;
  let max = 0;
  let minX, minY, maxX, maxY; // go through 8 adjacent pixels

  for (let x = x0; x <= x2; x++) {
    for (let y = y0; y <= y2; y++) {
      if (x === x1 && y === y1) continue; // brightness delta between the center pixel and adjacent one

      const delta = colorDelta(img, img, pos, (y * width + x) * 4, true); // count the number of equal, darker and brighter adjacent pixels

      if (delta === 0) {
        zeroes++; // if found more than 2 equal siblings, it's definitely not anti-aliasing

        if (zeroes > 2) return false; // remember the darkest pixel
      } else if (delta < min) {
        min = delta;
        minX = x;
        minY = y; // remember the brightest pixel
      } else if (delta > max) {
        max = delta;
        maxX = x;
        maxY = y;
      }
    }
  } // if there are no both darker and brighter pixels among siblings, it's not anti-aliasing


  if (min === 0 || max === 0) return false; // if either the darkest or the brightest pixel has 3+ equal siblings in both images
  // (definitely not anti-aliased), this pixel is anti-aliased

  return hasManySiblings(img, minX, minY, width, height) && hasManySiblings(img2, minX, minY, width, height) || hasManySiblings(img, maxX, maxY, width, height) && hasManySiblings(img2, maxX, maxY, width, height);
} // check if a pixel has 3+ adjacent pixels of the same color.


function hasManySiblings(img, x1, y1, width, height) {
  const x0 = Math.max(x1 - 1, 0);
  const y0 = Math.max(y1 - 1, 0);
  const x2 = Math.min(x1 + 1, width - 1);
  const y2 = Math.min(y1 + 1, height - 1);
  const pos = (y1 * width + x1) * 4;
  let zeroes = x1 === x0 || x1 === x2 || y1 === y0 || y1 === y2 ? 1 : 0; // go through 8 adjacent pixels

  for (let x = x0; x <= x2; x++) {
    for (let y = y0; y <= y2; y++) {
      if (x === x1 && y === y1) continue;
      const pos2 = (y * width + x) * 4;
      if (img[pos] === img[pos2] && img[pos + 1] === img[pos2 + 1] && img[pos + 2] === img[pos2 + 2] && img[pos + 3] === img[pos2 + 3]) zeroes++;
      if (zeroes > 2) return true;
    }
  }

  return false;
} // calculate color difference according to the paper "Measuring perceived color difference
// using YIQ NTSC transmission color space in mobile applications" by Y. Kotsarenko and F. Ramos


function colorDelta(img1, img2, k, m, yOnly) {
  let r1 = img1[k + 0];
  let g1 = img1[k + 1];
  let b1 = img1[k + 2];
  let a1 = img1[k + 3];
  let r2 = img2[m + 0];
  let g2 = img2[m + 1];
  let b2 = img2[m + 2];
  let a2 = img2[m + 3];
  if (a1 === a2 && r1 === r2 && g1 === g2 && b1 === b2) return 0;

  if (a1 < 255) {
    a1 /= 255;
    r1 = blend(r1, a1);
    g1 = blend(g1, a1);
    b1 = blend(b1, a1);
  }

  if (a2 < 255) {
    a2 /= 255;
    r2 = blend(r2, a2);
    g2 = blend(g2, a2);
    b2 = blend(b2, a2);
  }

  const y1 = rgb2y(r1, g1, b1);
  const y2 = rgb2y(r2, g2, b2);
  const y = y1 - y2;
  if (yOnly) return y; // brightness difference only

  const i = rgb2i(r1, g1, b1) - rgb2i(r2, g2, b2);
  const q = rgb2q(r1, g1, b1) - rgb2q(r2, g2, b2);
  const delta = 0.5053 * y * y + 0.299 * i * i + 0.1957 * q * q; // encode whether the pixel lightens or darkens in the sign

  return y1 > y2 ? -delta : delta;
}

function rgb2y(r, g, b) {
  return r * 0.29889531 + g * 0.58662247 + b * 0.11448223;
}

function rgb2i(r, g, b) {
  return r * 0.59597799 - g * 0.27417610 - b * 0.32180189;
}

function rgb2q(r, g, b) {
  return r * 0.21147017 - g * 0.52261711 + b * 0.31114694;
} // blend semi-transparent color with white


function blend(c, a) {
  return 255 + (c - 255) * a;
}

function drawPixel(output, pos, r, g, b) {
  output[pos + 0] = r;
  output[pos + 1] = g;
  output[pos + 2] = b;
  output[pos + 3] = 255;
}

function drawGrayPixel(img, i, alpha, output) {
  const r = img[i + 0];
  const g = img[i + 1];
  const b = img[i + 2];
  const val = blend(rgb2y(r, g, b), alpha * img[i + 3] / 255);
  drawPixel(output, i, val, val, val);
}

/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvYWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FwcC9qcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvanMvZXllLmpzIiwid2VicGFjazovLy8uL2FwcC9qcy9nZW8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2pzL3JlcGxheS9yZXBsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2pzL3JlcGxheS90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvanMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGl4ZWxtYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbIkFsZ29yaXRobSIsInNwZWMiLCJyZWxhdGl2ZSIsImEiLCJ4IiwiYiIsImxpbWl0Iiwibm9ybWFsaXplIiwibWluIiwibWF4IiwiT2JqZWN0IiwiZnJlZXplIiwiUkFXX0RBVEFfQ09MT1IiLCJGSVhBVElPTl9DT0xPUiIsIlNBQ0NBREVfQ09MT1IiLCJDTEVBUl9DT0xPUiIsIkRJRkZFUkVOVF9DT0xPUlMiLCJIRUFUTUFQX0NPTE9SUyIsImhzdjJoc2wiLCJodWUiLCJzYXQiLCJ2YWwiLCJpIiwiaCIsInMiLCJ2IiwiTWF0aCIsInNxcnQiLCJoc2wiLCJwdXNoIiwicm91bmQiLCJDb2xvciIsImFsZ29yaXRobSIsImhlYXQiLCJyZWwiLCJkIiwibGVuZ3RoIiwiRElTUEVSU0lPTl9USFJFU0hPTEQiLCJEVVJBVElPTl9USFJFU0hPTEQiLCJJTklUX0ZJWEFUSU9OX1dJTkRPVyIsIlJFUExBWV9GUFMiLCJHYXplUG9pbnQiLCJ5IiwidCIsImdldFgiLCJnZXRZIiwiZ2V0VGltZXN0YW1wIiwiRml4YXRpb24iLCJnZXREdXJhdGlvbiIsImdldEZpeGF0aW9uIiwiR2F6ZVdpbmRvdyIsInBvaW50cyIsImRpc3BlcnNpb24iLCJwb2ludHNYIiwibWFwIiwicCIsIkRFVklDRV9XSURUSCIsInBvaW50c1kiLCJERVZJQ0VfSEVJR0hUIiwiY2VudHJvaWQiLCJyZWR1Y2UiLCJ0b0ZpeGVkIiwiZGV0ZWN0b3IiLCJ3aW5kb3ciLCJzY3JlZW4iLCJ3aWR0aCIsImRldmljZVBpeGVsUmF0aW8iLCJoZWlnaHQiLCJjb2xvciIsIlBvaW50IiwicmVuZGVyIiwiY29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY2FudmFzIiwiUG9pbnRzIiwiZm9yRWFjaCIsInJlbmRlclRpbWVsaW5lIiwiYXhpcyIsImRpbSIsIkxpbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiQ2lyY2xlIiwiciIsImdldFIiLCJhcmMiLCJQSSIsImZpbGwiLCJHVF9CQVNFIiwiR1RfQ09OU0lERVIiLCJSZWN0IiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJjbGVhciIsImNvbnRhaW5zUG9pbnQiLCJweCIsInB5IiwidyIsInRpbGVzIiwidGlsZVNpemUiLCJzdGFydCIsInNoaWZ0IiwicmVjdGFuZ2xlIiwic3Ryb2tlUmVjdCIsIkhlYXRtYXAiLCJjb3VudCIsIlVpbnQxNkFycmF5IiwiQXJyYXlCdWZmZXIiLCJjb3VudENsb25lIiwiZ2V0Q291bnQiLCJzZXRDb3VudCIsImMiLCJnZXRDb3VudEFyciIsInNldENvdW50QXJyIiwicmVzZXQiLCJjb3VudDIiLCJidWZmZXIiLCJieXRlTGVuZ3RoIiwiZ2xvYmFsX21heCIsInRpbGUiLCJ1bmRlZmluZWQiLCJzbGljZSIsIkVhc2UiLCJsaW5lYXIiLCJlIiwic25hY2tiYXIiLCJNRENTbmFja2JhciIsImF0dGFjaFRvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiUmVwbGF5Iiwic29ja2V0IiwibGFzdEZpeGF0ZWRFbCIsImxhc3RJbWciLCJnYXplSGlzdG9yeSIsImRhdGFQb2ludHMiLCJmaXhhdGlvbkNvdW50IiwicHJldkZpeGF0aW9uIiwic3RvcmFnZSIsIlN0b3JhZ2UiLCJzdXJmYWNlIiwiaGVhdG1hcCIsImZyYW1lcyIsImhlYXRtYXBWaXNpYmxlIiwic2hvd0hlYXRtYXAiLCJmaXJzdFRpbWVzdGFtcCIsInJlcXVlc3RJZCIsImZwcyIsIm5vdyIsInRoZW4iLCJEYXRlIiwiaW50ZXJ2YWwiLCJkZWx0YSIsInBsYXkiLCJjb25zb2xlIiwibG9nIiwicGxheWluZyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVwbGF5Iiwic2Vla1N0eWxlIiwicG9zaXRpb24iLCJzZWVrIiwicHJldlBvc2l0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImxvYWQiLCJkaWZmIiwiQXJyYXkiLCJkYXRhIiwicmVuZGVyVG1wbCIsInRlbXBsYXRlIiwiaW5pdCIsImxvYWRlZCIsInRpbWUiLCJ0b3RhbFRpbWUiLCJEdXJhdGlvbiIsImZyb21NaWxsaXMiLCJ0b0Zvcm1hdCIsImdldENvbnRleHQiLCJmcmFtZSIsImZpeGF0aW9uIiwiZ2F6ZV9idWZmZXIiLCJnYXplIiwiRmxvYXQzMkFycmF5Iiwid29ya2VyIiwicG9zdE1lc3NhZ2UiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsImRyYXdJbWFnZSIsInRpbWVzdGFtcCIsInNyYyIsImdldCIsImNvbm5lY3QiLCJXb3JrZXIiLCJvbm1lc3NhZ2UiLCJvbmVycm9yIiwiZ2V0S2V5cyIsImtleXMiLCJsYWJlbFRleHQiLCJvcGVuIiwiZGlzY29ubmVjdCIsImh0bWwiLCJmdWxsc2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4iLCJpZCIsInB1dCIsImNhY2hlcyIsImNhY2hlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJSZXNwb25zZSIsImNhbGxiYWNrIiwicmVzcG9uc2UiLCJtYXRjaCIsIlJlcXVlc3QiLCJqc29uIiwiY2FjaGVOYW1lIiwiZGVsZXRlIiwiZGVsZXRlZCIsInVzYWdlIiwibmF2aWdhdG9yIiwiZXN0aW1hdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicGl4ZWxtYXRjaCIsImRlZmF1bHRPcHRpb25zIiwidGhyZXNob2xkIiwiaW5jbHVkZUFBIiwiYWxwaGEiLCJhYUNvbG9yIiwiZGlmZkNvbG9yIiwiZGlmZkNvbG9yQWx0IiwiZGlmZk1hc2siLCJpbWcxIiwiaW1nMiIsIm91dHB1dCIsImlzUGl4ZWxEYXRhIiwiRXJyb3IiLCJsZW4iLCJhMzIiLCJVaW50MzJBcnJheSIsImJ5dGVPZmZzZXQiLCJiMzIiLCJpZGVudGljYWwiLCJkcmF3R3JheVBpeGVsIiwibWF4RGVsdGEiLCJwb3MiLCJjb2xvckRlbHRhIiwiYWJzIiwiYW50aWFsaWFzZWQiLCJkcmF3UGl4ZWwiLCJhcnIiLCJpc1ZpZXciLCJjb25zdHJ1Y3RvciIsIkJZVEVTX1BFUl9FTEVNRU5UIiwieDAiLCJ5MCIsInplcm9lcyIsIm1pblgiLCJtaW5ZIiwibWF4WCIsIm1heFkiLCJoYXNNYW55U2libGluZ3MiLCJwb3MyIiwiayIsIm0iLCJ5T25seSIsInIxIiwiZzEiLCJiMSIsImExIiwicjIiLCJnMiIsImIyIiwiYTIiLCJibGVuZCIsInJnYjJ5IiwicmdiMmkiLCJxIiwicmdiMnEiLCJnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPLFNBQVNBLFNBQVQsQ0FBbUJDLElBQUksR0FBRyxFQUExQixFQUE4QjtBQUNuQyxNQUFJQyxRQUFRLEdBQUcsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0I7QUFDL0IsV0FBTyxDQUFDRCxDQUFDLEdBQUdELENBQUwsS0FBV0UsQ0FBQyxHQUFHRixDQUFmLENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQUlHLEtBQUssR0FBRyxVQUFTSCxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUM1QixRQUFHRCxDQUFDLEdBQUdELENBQVAsRUFBVSxPQUFPQSxDQUFQO0FBQ1YsUUFBR0MsQ0FBQyxHQUFHQyxDQUFQLEVBQVUsT0FBT0EsQ0FBUDtBQUNWLFdBQU9ELENBQVA7QUFDRCxHQUpEOztBQU1BLE1BQUlHLFNBQVMsR0FBRyxVQUFTSCxDQUFULEVBQVlJLEdBQVosRUFBaUJDLEdBQWpCLEVBQXNCO0FBQ3BDLFFBQUlMLENBQUMsR0FBR0ksR0FBUixFQUFhO0FBQUVKLE9BQUMsR0FBR0ksR0FBSjtBQUFVOztBQUN6QixRQUFJSixDQUFDLEdBQUdLLEdBQVIsRUFBYTtBQUFFTCxPQUFDLEdBQUdLLEdBQUo7QUFBVTs7QUFDekIsV0FBTyxDQUFDTCxDQUFDLEdBQUdJLEdBQUwsS0FBYUMsR0FBRyxHQUFHRCxHQUFuQixDQUFQO0FBQ0QsR0FKRDs7QUFNQSxTQUFPRSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQlQsWUFEbUI7QUFFbkJJLFNBRm1CO0FBR25CQztBQUhtQixHQUFkLENBQVA7QUFLRCxDOzs7Ozs7Ozs7Ozs7QUN0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNSyxjQUFjLEdBQUcsb0JBQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLHdCQUF2QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyx3QkFBdEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsWUFBcEI7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxFQUF6QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxFQUF2Qjs7QUFFUCxTQUFTQyxPQUFULENBQWlCQyxHQUFqQixFQUFxQkMsR0FBckIsRUFBeUJDLEdBQXpCLEVBQThCO0FBQzVCLFNBQU8sQ0FDTEYsR0FESyxFQUVMQyxHQUFHLEdBQUNDLEdBQUosSUFBUyxDQUFDRixHQUFHLEdBQUMsQ0FBQyxJQUFFQyxHQUFILElBQVFDLEdBQWIsSUFBa0IsQ0FBbEIsR0FBb0JGLEdBQXBCLEdBQXdCLElBQUVBLEdBQW5DLENBRkssRUFHTEEsR0FBRyxHQUFDLENBSEMsQ0FBUDtBQUtEOztBQUVELEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQixNQUFJQyxDQUFDLEdBQUlELENBQUMsR0FBRyxpQkFBTCxHQUEwQixHQUFsQztBQUNBLE1BQUlFLENBQUMsR0FBRyxHQUFSO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxNQUFRTCxDQUFDLEdBQUcsaUJBQUwsR0FBMEIsR0FBM0MsQ0FBUjtBQUNBLE1BQUluQixDQUFDLEdBQUcsR0FBUjtBQUVBLE1BQUl5QixHQUFHLEdBQUdWLE9BQU8sQ0FBQ0ssQ0FBRCxFQUFHQyxDQUFILEVBQUtDLENBQUwsQ0FBakI7QUFFQVQsa0JBQWdCLENBQUNhLElBQWpCLENBQXNCLFVBQVVILElBQUksQ0FBQ0ksS0FBTCxDQUFXRixHQUFHLENBQUMsQ0FBRCxDQUFILEdBQU8sR0FBbEIsQ0FBVixHQUFtQyxHQUFuQyxHQUF5Q0YsSUFBSSxDQUFDSSxLQUFMLENBQVdGLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBTyxHQUFsQixDQUF6QyxHQUFrRSxJQUFsRSxHQUF5RUYsSUFBSSxDQUFDSSxLQUFMLENBQVdGLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBTyxHQUFsQixDQUF6RSxHQUFrRyxJQUFsRyxHQUF5R3pCLENBQXpHLEdBQTZHLEdBQW5JO0FBQ0Q7O0FBRUQsS0FBSyxJQUFJb0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxHQUFwQixFQUF5QkEsQ0FBQyxFQUExQixFQUE4QjtBQUM1Qk4sZ0JBQWMsQ0FBQ1ksSUFBZixDQUFvQixXQUFXLE1BQU1OLENBQWpCLElBQXNCLGFBQXRCLEdBQXFDLEdBQXJDLEdBQTBDLEdBQTlEO0FBQ0Q7O0FBRU0sU0FBU1EsS0FBVCxDQUFlOUIsSUFBSSxHQUFHLEVBQXRCLEVBQTBCO0FBQy9CLE1BQUkrQixTQUFTLEdBQUdoQywrREFBUyxDQUFDLEVBQUQsQ0FBekI7O0FBRUEsTUFBSWlDLElBQUksR0FBRyxVQUFTQyxHQUFULEVBQWM7QUFDdkIsUUFBSUMsQ0FBQyxHQUFHSCxTQUFTLENBQUMxQixLQUFWLENBQWdCLENBQWhCLEVBQW1CNEIsR0FBbkIsRUFBd0IsQ0FBeEIsQ0FBUjtBQUNBLFFBQUlBLEdBQUcsS0FBSyxDQUFaLEVBQWUsT0FBTyxlQUFQO0FBQ2YsV0FBT2pCLGNBQWMsQ0FBQ1MsSUFBSSxDQUFDSSxLQUFMLENBQVlLLENBQUMsSUFBSWxCLGNBQWMsQ0FBQ21CLE1BQWYsR0FBd0IsQ0FBNUIsQ0FBYixDQUFELENBQXJCO0FBQ0QsR0FKRDs7QUFNQSxTQUFPMUIsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDbkJzQjtBQURtQixHQUFkLENBQVA7QUFHRCxDOzs7Ozs7Ozs7Ozs7QUM3Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNSSxvQkFBb0IsR0FBRyxFQUE3QixDLENBQWlDOztBQUNqQyxNQUFNQyxrQkFBa0IsR0FBRyxHQUEzQixDLENBQWdDOztBQUNoQyxNQUFNQyxvQkFBb0IsR0FBRyxFQUE3QixDLENBQWlDOztBQUVqQyxNQUFNQyxVQUFVLEdBQUcsQ0FBbkI7QUFFQSxTQUFTQyxTQUFULENBQW1CeEMsSUFBSSxHQUFHO0FBQUNHLEdBQUMsRUFBRSxDQUFKO0FBQU9zQyxHQUFDLEVBQUUsQ0FBVjtBQUFhQyxHQUFDLEVBQUU7QUFBaEIsQ0FBMUIsRUFBOEM7QUFDbkQsTUFBSTtBQUFDdkMsS0FBRDtBQUFHc0MsS0FBSDtBQUFLQztBQUFMLE1BQVUxQyxJQUFkOztBQUVBLE1BQUkyQyxJQUFJLEdBQUcsWUFBVztBQUFFLFdBQU94QyxDQUFQO0FBQVcsR0FBbkM7O0FBQ0EsTUFBSXlDLElBQUksR0FBRyxZQUFXO0FBQUUsV0FBT0gsQ0FBUDtBQUFXLEdBQW5DOztBQUNBLE1BQUlJLFlBQVksR0FBRyxZQUFXO0FBQUUsV0FBT0gsQ0FBUDtBQUFXLEdBQTNDOztBQUVBLFNBQU9qQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQmlDLFFBRG1CO0FBRW5CQyxRQUZtQjtBQUduQkM7QUFIbUIsR0FBZCxDQUFQO0FBS0Q7QUFFTSxTQUFTQyxRQUFULENBQWtCOUMsSUFBSSxHQUFHO0FBQUNHLEdBQUMsRUFBRSxDQUFKO0FBQU9zQyxHQUFDLEVBQUUsQ0FBVjtBQUFhQyxHQUFDLEVBQUUsQ0FBaEI7QUFBbUJSLEdBQUMsRUFBRTtBQUF0QixDQUF6QixFQUFtRDtBQUN4RCxNQUFJO0FBQUMvQixLQUFEO0FBQUdzQyxLQUFIO0FBQUtDLEtBQUw7QUFBT1I7QUFBUCxNQUFZbEMsSUFBaEI7O0FBRUEsTUFBSTJDLElBQUksR0FBRyxZQUFXO0FBQUUsV0FBT3hDLENBQVA7QUFBVyxHQUFuQzs7QUFDQSxNQUFJeUMsSUFBSSxHQUFHLFlBQVc7QUFBRSxXQUFPSCxDQUFQO0FBQVcsR0FBbkM7O0FBQ0EsTUFBSUksWUFBWSxHQUFHLFlBQVc7QUFBRSxXQUFPSCxDQUFQO0FBQVcsR0FBM0M7O0FBQ0EsTUFBSUssV0FBVyxHQUFHLFlBQVc7QUFBRSxXQUFPYixDQUFQO0FBQVcsR0FBMUM7O0FBRUEsTUFBSWMsV0FBVyxHQUFHLFlBQVc7QUFDM0IsV0FBTztBQUFDN0MsT0FBQyxFQUFFQSxDQUFKO0FBQU9zQyxPQUFDLEVBQUVBO0FBQVYsS0FBUDtBQUNELEdBRkQ7O0FBSUEsU0FBT2hDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ25CaUMsUUFEbUI7QUFFbkJDLFFBRm1CO0FBR25CQyxnQkFIbUI7QUFJbkJFLGVBSm1CO0FBS25CQztBQUxtQixHQUFkLENBQVA7QUFPRDtBQUVNLFNBQVNDLFVBQVQsQ0FBb0JqRCxJQUFJLEdBQUc7QUFBQ2tELFFBQU0sRUFBRTtBQUFULENBQTNCLEVBQXlDO0FBQzlDLE1BQUk7QUFBQ0E7QUFBRCxNQUFXbEQsSUFBZjs7QUFFQSxNQUFJbUQsVUFBVSxHQUFHLFlBQVc7QUFDMUIsUUFBSUMsT0FBTyxHQUFHRixNQUFNLENBQUNHLEdBQVAsQ0FBV0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNYLElBQUYsS0FBV1ksb0RBQTNCLENBQWQ7QUFDQSxRQUFJQyxPQUFPLEdBQUdOLE1BQU0sQ0FBQ0csR0FBUCxDQUFXQyxDQUFDLElBQUlBLENBQUMsQ0FBQ1YsSUFBRixLQUFXYSxxREFBM0IsQ0FBZDtBQUVBLFdBQVFoQyxJQUFJLENBQUNqQixHQUFMLENBQVMsR0FBRzRDLE9BQVosSUFBdUIzQixJQUFJLENBQUNsQixHQUFMLENBQVMsR0FBRzZDLE9BQVosQ0FBeEIsSUFBaUQzQixJQUFJLENBQUNqQixHQUFMLENBQVMsR0FBR2dELE9BQVosSUFBdUIvQixJQUFJLENBQUNsQixHQUFMLENBQVMsR0FBR2lELE9BQVosQ0FBeEUsQ0FBUDtBQUNELEdBTEQ7O0FBT0EsTUFBSUUsUUFBUSxHQUFHLFlBQVc7QUFDeEIsUUFBSU4sT0FBTyxHQUFHRixNQUFNLENBQUNHLEdBQVAsQ0FBV0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNYLElBQUYsRUFBaEIsQ0FBZDtBQUNBLFFBQUlhLE9BQU8sR0FBR04sTUFBTSxDQUFDRyxHQUFQLENBQVdDLENBQUMsSUFBSUEsQ0FBQyxDQUFDVixJQUFGLEVBQWhCLENBQWQ7QUFFQSxXQUFPRSxRQUFRLENBQUM7QUFDZDNDLE9BQUMsRUFBRSxDQUFDLENBQUNpRCxPQUFPLENBQUNPLE1BQVIsQ0FBZSxDQUFDekQsQ0FBRCxFQUFHRSxDQUFILEtBQVNGLENBQUMsR0FBQ0UsQ0FBMUIsSUFBK0JnRCxPQUFPLENBQUNqQixNQUF4QyxFQUFnRHlCLE9BQWhELENBQXdELENBQXhELENBRFU7QUFFZG5CLE9BQUMsRUFBRSxDQUFDLENBQUNlLE9BQU8sQ0FBQ0csTUFBUixDQUFlLENBQUN6RCxDQUFELEVBQUdFLENBQUgsS0FBU0YsQ0FBQyxHQUFDRSxDQUExQixJQUErQm9ELE9BQU8sQ0FBQ3JCLE1BQXhDLEVBQWdEeUIsT0FBaEQsQ0FBd0QsQ0FBeEQsQ0FGVTtBQUdkbEIsT0FBQyxFQUFFLENBQUVRLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUwsWUFBVixFQUFELENBQTJCZSxPQUEzQixDQUFtQyxDQUFuQyxDQUhVO0FBSWQxQixPQUFDLEVBQUUsQ0FBQyxDQUFDZ0IsTUFBTSxDQUFDQSxNQUFNLENBQUNmLE1BQVAsR0FBYyxDQUFmLENBQU4sQ0FBd0JVLFlBQXhCLEtBQXlDSyxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVMLFlBQVYsRUFBMUMsRUFBb0VlLE9BQXBFLENBQTRFLENBQTVFO0FBSlUsS0FBRCxDQUFmO0FBTUQsR0FWRDs7QUFZQSxNQUFJQyxRQUFRLEdBQUcsWUFBVztBQUN4QixRQUFJVixVQUFVLEtBQUtmLG9CQUFuQixFQUF5QztBQUN2QyxhQUFPc0IsUUFBUSxFQUFmO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFQO0FBQ0QsR0FMRDs7QUFPQSxTQUFPakQsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDbkJtRDtBQURtQixHQUFkLENBQVA7QUFHRCxDOzs7Ozs7Ozs7Ozs7QUMzRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTU4sWUFBWSxHQUFHTyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxHQUFzQkYsTUFBTSxDQUFDRyxnQkFBbEQ7QUFDQSxNQUFNUixhQUFhLEdBQUdLLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRyxNQUFkLEdBQXVCSixNQUFNLENBQUNHLGdCQUFwRDtBQUVQLElBQUlFLEtBQUssR0FBR3JDLHVEQUFLLENBQUMsRUFBRCxDQUFqQjtBQUNBLElBQUlDLFNBQVMsR0FBR2hDLCtEQUFTLENBQUMsRUFBRCxDQUF6QjtBQUVPLFNBQVNxRSxLQUFULENBQWVwRSxJQUFJLEdBQUc7QUFBQ0csR0FBQyxFQUFFLENBQUo7QUFBT3NDLEdBQUMsRUFBRTtBQUFWLENBQXRCLEVBQW9DO0FBQ3pDLE1BQUk7QUFBQ3RDLEtBQUQ7QUFBSXNDO0FBQUosTUFBU3pDLElBQWI7O0FBRUEsTUFBSTJDLElBQUksR0FBRyxZQUFXO0FBQUUsV0FBT3hDLENBQVA7QUFBVyxHQUFuQzs7QUFDQSxNQUFJeUMsSUFBSSxHQUFHLFlBQVc7QUFBRSxXQUFPSCxDQUFQO0FBQVcsR0FBbkM7O0FBRUEsTUFBSTRCLE1BQU0sR0FBRyxVQUFTQyxPQUFULEVBQWtCQyxTQUFsQixFQUE2QjtBQUN4Q0QsV0FBTyxDQUFDQyxTQUFSLEdBQW9CQSxTQUFwQjtBQUNBRCxXQUFPLENBQUNFLFFBQVIsQ0FBaUJyRSxDQUFDLEdBQUNtRSxPQUFPLENBQUNHLE1BQVIsQ0FBZVQsS0FBbEMsRUFBeUN2QixDQUFDLEdBQUM2QixPQUFPLENBQUNHLE1BQVIsQ0FBZVAsTUFBMUQsRUFBa0UsUUFBTUksT0FBTyxDQUFDRyxNQUFSLENBQWVULEtBQXZGLEVBQThGLFFBQU1NLE9BQU8sQ0FBQ0csTUFBUixDQUFlVCxLQUFuSDtBQUNELEdBSEQ7O0FBS0EsU0FBT3ZELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ25CaUMsUUFEbUI7QUFFbkJDLFFBRm1CO0FBR25CeUI7QUFIbUIsR0FBZCxDQUFQO0FBS0Q7QUFFTSxTQUFTSyxNQUFULENBQWdCMUUsSUFBSSxHQUFHO0FBQUNrRCxRQUFNLEVBQUU7QUFBVCxDQUF2QixFQUFxQztBQUMxQyxNQUFJO0FBQUNBO0FBQUQsTUFBV2xELElBQWY7O0FBRUEsTUFBSXFFLE1BQU0sR0FBRyxVQUFTQyxPQUFULEVBQWtCQyxTQUFsQixFQUE2QjtBQUN4Q0QsV0FBTyxDQUFDQyxTQUFSLEdBQW9CQSxTQUFwQjtBQUNBckIsVUFBTSxDQUFDeUIsT0FBUCxDQUFlLFVBQVNyQixDQUFULEVBQVk7QUFDekJBLE9BQUMsQ0FBQ2UsTUFBRixDQUFTQyxPQUFULEVBQWtCQyxTQUFsQjtBQUNELEtBRkQ7QUFHRCxHQUxEOztBQU9BLE1BQUlLLGNBQWMsR0FBRyxVQUFTTixPQUFULEVBQWtCTyxJQUFsQixFQUF3Qk4sU0FBeEIsRUFBbUM7QUFDdERELFdBQU8sQ0FBQ0MsU0FBUixHQUFvQkEsU0FBcEI7QUFDQXJCLFVBQU0sQ0FBQ3lCLE9BQVAsQ0FBZSxVQUFTckIsQ0FBVCxFQUFZakMsQ0FBWixFQUFlO0FBQzVCLFVBQUl5RCxHQUFHLEdBQUdELElBQUksS0FBSyxDQUFULEdBQVl2QixDQUFDLENBQUNYLElBQUYsRUFBWixHQUF1QlcsQ0FBQyxDQUFDVixJQUFGLEVBQWpDO0FBQ0EwQixhQUFPLENBQUNFLFFBQVIsQ0FBa0JuRCxDQUFDLEdBQUMsRUFBSCxHQUFPaUQsT0FBTyxDQUFDRyxNQUFSLENBQWVULEtBQXZDLEVBQThDLENBQUMsSUFBRWMsR0FBSCxJQUFRUixPQUFPLENBQUNHLE1BQVIsQ0FBZVAsTUFBckUsRUFBNkVJLE9BQU8sQ0FBQ0csTUFBUixDQUFlVCxLQUFmLEdBQXFCLEVBQWxHLEVBQXNHLENBQXRHO0FBQ0QsS0FIRDtBQUlELEdBTkQ7O0FBUUEsU0FBT3ZELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ25CMkQsVUFEbUI7QUFFbkJPO0FBRm1CLEdBQWQsQ0FBUDtBQUlEO0FBRU0sU0FBU0csSUFBVCxDQUFjL0UsSUFBSSxHQUFHO0FBQUNnRixJQUFFLEVBQUUsQ0FBTDtBQUFRQyxJQUFFLEVBQUUsQ0FBWjtBQUFlQyxJQUFFLEVBQUUsQ0FBbkI7QUFBc0JDLElBQUUsRUFBRTtBQUExQixDQUFyQixFQUFtRDtBQUN4RCxNQUFJO0FBQUNILE1BQUQ7QUFBS0MsTUFBTDtBQUFTQyxNQUFUO0FBQWFDO0FBQWIsTUFBbUJuRixJQUF2Qjs7QUFFQSxNQUFJcUUsTUFBTSxHQUFHLFVBQVNDLE9BQVQsRUFBa0JjLFdBQWxCLEVBQStCO0FBQzFDZCxXQUFPLENBQUNjLFdBQVIsR0FBc0JBLFdBQXRCO0FBQ0FkLFdBQU8sQ0FBQ2UsU0FBUjtBQUNBZixXQUFPLENBQUNnQixNQUFSLENBQWVOLEVBQUUsR0FBQ1YsT0FBTyxDQUFDRyxNQUFSLENBQWVULEtBQWpDLEVBQXdDaUIsRUFBRSxHQUFDWCxPQUFPLENBQUNHLE1BQVIsQ0FBZVAsTUFBMUQ7QUFDQUksV0FBTyxDQUFDaUIsTUFBUixDQUFlTCxFQUFFLEdBQUNaLE9BQU8sQ0FBQ0csTUFBUixDQUFlVCxLQUFqQyxFQUF3Q21CLEVBQUUsR0FBQ2IsT0FBTyxDQUFDRyxNQUFSLENBQWVQLE1BQTFEO0FBQ0FJLFdBQU8sQ0FBQ2tCLE1BQVI7QUFDRCxHQU5EOztBQVFBLFNBQU8vRSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQjJEO0FBRG1CLEdBQWQsQ0FBUDtBQUdEO0FBRU0sU0FBU29CLE1BQVQsQ0FBZ0J6RixJQUFJLEdBQUc7QUFBQ0csR0FBQyxFQUFFLENBQUo7QUFBT3NDLEdBQUMsRUFBRSxDQUFWO0FBQWFpRCxHQUFDLEVBQUU7QUFBaEIsQ0FBdkIsRUFBMkM7QUFDaEQsTUFBSTtBQUFDdkYsS0FBRDtBQUFJc0MsS0FBSjtBQUFPaUQ7QUFBUCxNQUFZMUYsSUFBaEI7O0FBRUEsTUFBSTJDLElBQUksR0FBRyxZQUFXO0FBQUUsV0FBT3hDLENBQVA7QUFBVyxHQUFuQzs7QUFDQSxNQUFJeUMsSUFBSSxHQUFHLFlBQVc7QUFBRSxXQUFPSCxDQUFQO0FBQVcsR0FBbkM7O0FBQ0EsTUFBSWtELElBQUksR0FBRyxZQUFXO0FBQUUsV0FBT0QsQ0FBUDtBQUFXLEdBQW5DOztBQUVBLE1BQUlyQixNQUFNLEdBQUcsVUFBU0MsT0FBVCxFQUFrQmMsV0FBbEIsRUFBK0JiLFNBQS9CLEVBQTBDO0FBQ3JERCxXQUFPLENBQUNlLFNBQVI7QUFDQWYsV0FBTyxDQUFDc0IsR0FBUixDQUFZekYsQ0FBQyxHQUFDbUUsT0FBTyxDQUFDRyxNQUFSLENBQWVULEtBQTdCLEVBQW9DdkIsQ0FBQyxHQUFDNkIsT0FBTyxDQUFDRyxNQUFSLENBQWVQLE1BQXJELEVBQTZEd0IsQ0FBN0QsRUFBZ0UsQ0FBaEUsRUFBbUUsSUFBSWpFLElBQUksQ0FBQ29FLEVBQTVFOztBQUNBLFFBQUl0QixTQUFKLEVBQWU7QUFDYkQsYUFBTyxDQUFDQyxTQUFSLEdBQW9CQSxTQUFwQjtBQUNBRCxhQUFPLENBQUN3QixJQUFSO0FBQ0Q7O0FBQ0QsUUFBSVYsV0FBSixFQUFpQjtBQUNmZCxhQUFPLENBQUNjLFdBQVIsR0FBc0JBLFdBQXRCO0FBQ0FkLGFBQU8sQ0FBQ2tCLE1BQVI7QUFDRDtBQUNGLEdBWEQ7O0FBYUEsU0FBTy9FLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ25CaUMsUUFEbUI7QUFFbkJDLFFBRm1CO0FBR25CK0MsUUFIbUI7QUFJbkJ0QjtBQUptQixHQUFkLENBQVA7QUFNRDtBQUVELE1BQU0wQixPQUFPLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFoQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQXBCO0FBRU8sU0FBU0MsSUFBVCxDQUFjakcsSUFBSSxHQUFHO0FBQUNHLEdBQUMsRUFBRSxDQUFKO0FBQU9zQyxHQUFDLEVBQUUsQ0FBVjtBQUFhdUIsT0FBSyxFQUFFLENBQXBCO0FBQXVCRSxRQUFNLEVBQUU7QUFBL0IsQ0FBckIsRUFBd0Q7QUFDN0QsTUFBSTtBQUFDL0QsS0FBRDtBQUFJc0MsS0FBSjtBQUFPdUIsU0FBUDtBQUFjRTtBQUFkLE1BQXdCbEUsSUFBNUI7O0FBRUEsTUFBSTJDLElBQUksR0FBRyxZQUFXO0FBQUUsV0FBT3hDLENBQVA7QUFBVyxHQUFuQzs7QUFDQSxNQUFJeUMsSUFBSSxHQUFHLFlBQVc7QUFBRSxXQUFPSCxDQUFQO0FBQVcsR0FBbkM7O0FBQ0EsTUFBSXlELFFBQVEsR0FBRyxZQUFXO0FBQUUsV0FBT2xDLEtBQVA7QUFBZSxHQUEzQzs7QUFDQSxNQUFJbUMsU0FBUyxHQUFHLFlBQVc7QUFBRSxXQUFPakMsTUFBUDtBQUFnQixHQUE3Qzs7QUFFQSxNQUFJa0MsS0FBSyxHQUFHLFVBQVM5QixPQUFULEVBQWtCQyxTQUFsQixFQUE2QjtBQUN2QyxRQUFJQSxTQUFKLEVBQWVELE9BQU8sQ0FBQ0MsU0FBUixHQUFvQkEsU0FBcEIsQ0FBZixLQUNLRCxPQUFPLENBQUNDLFNBQVIsR0FBb0J6RCxxREFBcEI7QUFDTHdELFdBQU8sQ0FBQ0UsUUFBUixDQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QlIsS0FBdkIsRUFBOEJFLE1BQTlCO0FBQ0QsR0FKRDs7QUFNQSxNQUFJbUMsYUFBYSxHQUFHLFVBQVNDLEVBQVQsRUFBYUMsRUFBYixFQUFpQjtBQUNuQyxRQUFJQyxDQUFDLEdBQUd4QyxLQUFSO0FBQ0EsUUFBSTFDLENBQUMsR0FBRzRDLE1BQVIsQ0FGbUMsQ0FJbkM7O0FBQ0EsUUFBSSxDQUFDc0MsQ0FBQyxHQUFHbEYsQ0FBTCxJQUFVLENBQWQsRUFBaUI7QUFBRSxhQUFPLEtBQVA7QUFBZSxLQUxDLENBT25DOzs7QUFDQSxRQUFJZ0YsRUFBRSxHQUFHbkcsQ0FBTCxJQUFVb0csRUFBRSxHQUFHOUQsQ0FBbkIsRUFBc0I7QUFBRSxhQUFPLEtBQVA7QUFBZTs7QUFDdkMrRCxLQUFDLElBQUlyRyxDQUFMO0FBQ0FtQixLQUFDLElBQUltQixDQUFMLENBVm1DLENBV25DOztBQUNBLFdBQVEsQ0FBQytELENBQUMsR0FBR3JHLENBQUosSUFBU3FHLENBQUMsR0FBR0YsRUFBZCxNQUFzQmhGLENBQUMsR0FBR21CLENBQUosSUFBU25CLENBQUMsR0FBR2lGLEVBQW5DLENBQVI7QUFDRCxHQWJEOztBQWVBLE1BQUlFLEtBQUssR0FBRyxVQUFTQyxRQUFRLEdBQUdYLE9BQXBCLEVBQTZCO0FBQ3ZDLFFBQUlVLEtBQUssR0FBRyxFQUFaO0FBQ0EsUUFBSUUsS0FBSyxHQUFHO0FBQUN4RyxPQUFDLEVBQUVBLENBQUo7QUFBT3NDLE9BQUMsRUFBRUE7QUFBVixLQUFaO0FBQ0EsUUFBSW1FLEtBQUssR0FBRyxLQUFaOztBQUVBLFdBQU9ELEtBQUssQ0FBQ2xFLENBQU4sR0FBVUEsQ0FBQyxHQUFHeUIsTUFBckIsRUFBNkI7QUFDM0IsVUFBSTJDLFNBQVMsR0FBRztBQUFDMUcsU0FBQyxFQUFFd0csS0FBSyxDQUFDeEcsQ0FBVjtBQUFhc0MsU0FBQyxFQUFFa0UsS0FBSyxDQUFDbEUsQ0FBdEI7QUFBeUJ1QixhQUFLLEVBQUUwQyxRQUFRLENBQUMsQ0FBRCxDQUF4QztBQUE2Q3hDLGNBQU0sRUFBRXdDLFFBQVEsQ0FBQyxDQUFEO0FBQTdELE9BQWhCO0FBQ0FELFdBQUssQ0FBQzdFLElBQU4sQ0FBV2lGLFNBQVg7QUFFQUYsV0FBSyxDQUFDeEcsQ0FBTixHQUFVMEcsU0FBUyxDQUFDMUcsQ0FBVixHQUFjMEcsU0FBUyxDQUFDN0MsS0FBbEM7O0FBRUEsVUFBRzJDLEtBQUssQ0FBQ3hHLENBQU4sSUFBV0EsQ0FBQyxHQUFHNkQsS0FBbEIsRUFBeUI7QUFDdkI0QyxhQUFLLEdBQUcsQ0FBQ0EsS0FBVDtBQUNBRCxhQUFLLENBQUNsRSxDQUFOLElBQVdpRSxRQUFRLENBQUMsQ0FBRCxDQUFuQjtBQUNBQyxhQUFLLENBQUN4RyxDQUFOLEdBQVV5RyxLQUFLLEdBQUd6RyxDQUFDLEdBQUl1RyxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWMsQ0FBdEIsR0FBMkIsQ0FBMUM7QUFDRDtBQUNGOztBQUVELFdBQU9ELEtBQVA7QUFDRCxHQW5CRDs7QUFxQkEsTUFBSXBDLE1BQU0sR0FBRyxVQUFTQyxPQUFULEVBQWtCYyxXQUFsQixFQUErQmIsU0FBL0IsRUFBMEM7QUFDckQsUUFBSWEsV0FBSixFQUFpQjtBQUNmZCxhQUFPLENBQUNjLFdBQVIsR0FBc0JBLFdBQXRCO0FBQ0FkLGFBQU8sQ0FBQ3dDLFVBQVIsQ0FBbUIzRyxDQUFuQixFQUFzQnNDLENBQXRCLEVBQXlCdUIsS0FBekIsRUFBZ0NFLE1BQWhDO0FBQ0Q7O0FBQ0QsUUFBSUssU0FBSixFQUFlO0FBQ2JELGFBQU8sQ0FBQ0MsU0FBUixHQUFvQkEsU0FBcEI7QUFDQUQsYUFBTyxDQUFDRSxRQUFSLENBQWlCckUsQ0FBakIsRUFBb0JzQyxDQUFwQixFQUF1QnVCLEtBQXZCLEVBQThCRSxNQUE5QjtBQUNEO0FBQ0YsR0FURDs7QUFXQSxTQUFPekQsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDbkJpQyxRQURtQjtBQUVuQkMsUUFGbUI7QUFHbkJzRCxZQUhtQjtBQUluQkMsYUFKbUI7QUFLbkJDLFNBTG1CO0FBTW5CSyxTQU5tQjtBQU9uQkosaUJBUG1CO0FBUW5CaEM7QUFSbUIsR0FBZCxDQUFQO0FBVUQ7QUFFTSxTQUFTMEMsT0FBVCxDQUFpQi9HLElBQUksR0FBRztBQUFDeUcsT0FBSyxFQUFFO0FBQVIsQ0FBeEIsRUFBcUM7QUFDMUMsTUFBSTtBQUFDQTtBQUFELE1BQVV6RyxJQUFkO0FBQ0EsTUFBSWdILEtBQUssR0FBRyxJQUFJQyxXQUFKLENBQWdCLElBQUlDLFdBQUosQ0FBZ0JULEtBQUssQ0FBQ3RFLE1BQU4sR0FBYSxDQUE3QixDQUFoQixDQUFaO0FBQ0EsTUFBSWdGLFVBQVUsR0FBRyxJQUFJRixXQUFKLENBQWdCLElBQUlDLFdBQUosQ0FBZ0JULEtBQUssQ0FBQ3RFLE1BQU4sR0FBYSxDQUE3QixDQUFoQixDQUFqQjs7QUFFQSxNQUFJaUYsUUFBUSxHQUFHLFVBQVMvRixDQUFULEVBQVk7QUFBRSxXQUFPMkYsS0FBSyxDQUFDM0YsQ0FBRCxDQUFaO0FBQWtCLEdBQS9DOztBQUNBLE1BQUlnRyxRQUFRLEdBQUcsVUFBU2hHLENBQVQsRUFBWWlHLENBQVosRUFBZTtBQUFFTixTQUFLLENBQUMzRixDQUFELENBQUwsR0FBV2lHLENBQVg7QUFBZSxHQUEvQzs7QUFDQSxNQUFJQyxXQUFXLEdBQUcsWUFBVztBQUFFLFdBQU9QLEtBQVA7QUFBZSxHQUE5Qzs7QUFDQSxNQUFJUSxXQUFXLEdBQUcsVUFBU0YsQ0FBVCxFQUFZO0FBQUVOLFNBQUssR0FBR00sQ0FBUjtBQUFZLEdBQTVDOztBQUVBLE1BQUlHLEtBQUssR0FBRyxZQUFXO0FBQ3JCVCxTQUFLLEdBQUcsSUFBSUMsV0FBSixDQUFnQixJQUFJQyxXQUFKLENBQWdCVCxLQUFLLENBQUN0RSxNQUFOLEdBQWEsQ0FBN0IsQ0FBaEIsQ0FBUjtBQUNBZ0YsY0FBVSxHQUFHLElBQUlGLFdBQUosQ0FBZ0IsSUFBSUMsV0FBSixDQUFnQlQsS0FBSyxDQUFDdEUsTUFBTixHQUFhLENBQTdCLENBQWhCLENBQWI7QUFDRCxHQUhEOztBQUtBLE1BQUlrQyxNQUFNLEdBQUcsVUFBU0MsT0FBVCxFQUFrQjtBQUM3QixRQUFJb0QsTUFBTSxHQUFHVixLQUFLLENBQUNXLE1BQU4sQ0FBYUMsVUFBYixLQUE0QixDQUE1QixHQUErQlosS0FBL0IsR0FBdUNHLFVBQXBEO0FBQ0EsUUFBSVUsVUFBVSxHQUFHcEcsSUFBSSxDQUFDakIsR0FBTCxDQUFTLEdBQUdrSCxNQUFaLENBQWpCOztBQUVBLFFBQUlHLFVBQVUsS0FBSyxDQUFuQixFQUFzQjtBQUNwQnBCLFdBQUssQ0FBQzlCLE9BQU4sQ0FBYyxVQUFTbUQsSUFBVCxFQUFlekcsQ0FBZixFQUFrQjtBQUM5QixZQUFJcUcsTUFBTSxDQUFDckcsQ0FBRCxDQUFWLEVBQWU7QUFDYixjQUFJQyxDQUFDLEdBQUc2QyxLQUFLLENBQUNuQyxJQUFOLENBQVdELFNBQVMsQ0FBQzlCLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBcUJ5SCxNQUFNLENBQUNyRyxDQUFELENBQTNCLEVBQStCd0csVUFBL0IsQ0FBWCxDQUFSO0FBQ0FDLGNBQUksQ0FBQ3pELE1BQUwsQ0FBWUMsT0FBWixFQUFxQnlELFNBQXJCLEVBQWdDekcsQ0FBaEM7QUFDRDtBQUNGLE9BTEQ7QUFNRDs7QUFFRCxRQUFJMEYsS0FBSyxDQUFDVyxNQUFOLENBQWFDLFVBQWIsS0FBNEIsQ0FBaEMsRUFBbUM7QUFDakNULGdCQUFVLEdBQUdILEtBQUssQ0FBQ2dCLEtBQU4sQ0FBWSxDQUFaLENBQWI7QUFDRDs7QUFBQTtBQUNGLEdBaEJEOztBQWtCQSxTQUFPdkgsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDbkIwRyxZQURtQjtBQUVuQkMsWUFGbUI7QUFHbkJFLGVBSG1CO0FBSW5CQyxlQUptQjtBQUtuQkMsU0FMbUI7QUFNbkJwRDtBQU5tQixHQUFkLENBQVA7QUFRRDtBQUVEOztBQUNPLFNBQVM0RCxJQUFULENBQWNqSSxJQUFJLEdBQUcsRUFBckIsRUFBeUI7QUFDOUIsTUFBSWtJLE1BQU0sR0FBRyxVQUFTeEYsQ0FBVCxFQUFXdEMsQ0FBWCxFQUFhK0gsQ0FBYixFQUFlakcsQ0FBZixFQUFrQjtBQUM3QixXQUFPLENBQUNpRyxDQUFDLEdBQUMvSCxDQUFILElBQU1zQyxDQUFOLEdBQVFSLENBQVIsR0FBWTlCLENBQW5CO0FBQ0QsR0FGRDs7QUFJQSxTQUFPSyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQndIO0FBRG1CLEdBQWQsQ0FBUDtBQUdELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1FLFFBQVEsR0FBR0MsOERBQVcsQ0FBQ0MsUUFBWixDQUFxQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQXJCLENBQWpCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLFNBQVNDLE1BQVQsQ0FBZ0J6SSxJQUFoQixFQUFzQjtBQUMzQixNQUFJMEksTUFBTSxHQUFHWCxTQUFiO0FBRUEsTUFBSVksYUFBYSxHQUFHWixTQUFwQjtBQUNBLE1BQUlhLE9BQU8sR0FBR2IsU0FBZDtBQUNBLE1BQUljLFdBQVcsR0FBRyxFQUFsQjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBLE1BQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNBLE1BQUlDLFlBQVksR0FBR2pCLFNBQW5CO0FBQ0EsTUFBSWtCLE9BQU8sR0FBR0MsMkRBQU8sQ0FBQyxFQUFELENBQXJCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHbEQsb0RBQUksQ0FBQztBQUFDOUYsS0FBQyxFQUFFLENBQUo7QUFBT3NDLEtBQUMsRUFBRSxDQUFWO0FBQWF1QixTQUFLLEVBQUUsSUFBcEI7QUFBMEJFLFVBQU0sRUFBRTtBQUFsQyxHQUFELENBQWxCO0FBQ0EsTUFBSXVDLEtBQUssR0FBRzBDLE9BQU8sQ0FBQzFDLEtBQVIsR0FBZ0JwRCxHQUFoQixDQUFvQlgsQ0FBQyxJQUFJdUQsb0RBQUksQ0FBQ3ZELENBQUQsQ0FBN0IsQ0FBWjtBQUNBLE1BQUkwRyxPQUFPLEdBQUdyQyx1REFBTyxDQUFDO0FBQUNOLFNBQUssRUFBRUE7QUFBUixHQUFELENBQXJCO0FBQ0EsTUFBSW5DLE9BQUo7QUFDQSxNQUFJK0UsTUFBTSxHQUFHLEVBQWI7QUFFQSxNQUFJQyxjQUFjLEdBQUcsS0FBckI7O0FBRUEsTUFBSUMsV0FBVyxHQUFHLFlBQVc7QUFDM0JELGtCQUFjLEdBQUcsQ0FBQ0EsY0FBbEI7QUFDRCxHQUZEOztBQUlBLE1BQUlFLGNBQWMsR0FBR3pCLFNBQXJCO0FBQ0EsTUFBSTBCLFNBQVMsR0FBRzFCLFNBQWhCO0FBRUEsTUFBSTJCLEdBQUcsR0FBR25ILGtEQUFWO0FBQ0EsTUFBSW9ILEdBQUcsR0FBRzVCLFNBQVY7QUFDQSxNQUFJNkIsSUFBSSxHQUFHQyxJQUFJLENBQUNGLEdBQUwsRUFBWDtBQUNBLE1BQUlHLFFBQVEsR0FBRyxPQUFLSixHQUFwQjtBQUNBLE1BQUlLLEtBQUssR0FBR2hDLFNBQVo7O0FBRUEsTUFBSWlDLElBQUksR0FBRyxZQUFXO0FBQ3BCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCbEssSUFBSSxDQUFDbUssT0FBNUI7O0FBQ0EsUUFBSW5LLElBQUksQ0FBQ21LLE9BQVQsRUFBa0I7QUFDaEJDLDBCQUFvQixDQUFDWCxTQUFELENBQXBCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGVBQVMsR0FBR1kscUJBQXFCLENBQUNDLE1BQUQsQ0FBakM7QUFDRDs7QUFDRHRLLFFBQUksQ0FBQ21LLE9BQUwsR0FBZSxDQUFDbkssSUFBSSxDQUFDbUssT0FBckI7QUFDQTlGLFVBQU0sQ0FBQ3JFLElBQUQsQ0FBTjtBQUNELEdBVEQ7O0FBV0EsTUFBSXVLLFNBQVMsR0FBRyxZQUFXO0FBQ3pCLFdBQU8sNERBQTREdkssSUFBSSxDQUFDd0ssUUFBTCxHQUFjeEssSUFBSSxDQUFDUSxHQUFuQixHQUF1QixHQUFuRixHQUF5RixhQUF6RixHQUF5R1IsSUFBSSxDQUFDd0ssUUFBTCxHQUFjeEssSUFBSSxDQUFDUSxHQUFuQixHQUF1QixHQUFoSSxHQUFzSSxhQUF0SSxHQUFzSixDQUFDNkksTUFBTSxDQUFDbEgsTUFBUCxHQUFjbkMsSUFBSSxDQUFDd0ssUUFBcEIsSUFBOEJ4SyxJQUFJLENBQUNRLEdBQW5DLEdBQXVDLEdBQTdMLEdBQW1NLGFBQW5NLEdBQW1OLENBQUM2SSxNQUFNLENBQUNsSCxNQUFQLEdBQWNuQyxJQUFJLENBQUN3SyxRQUFwQixJQUE4QnhLLElBQUksQ0FBQ1EsR0FBbkMsR0FBdUMsR0FBMVAsR0FBZ1EsSUFBdlE7QUFDRCxHQUZEOztBQUlBLE1BQUlpSyxJQUFJLEdBQUcsWUFBVztBQUNwQixRQUFJQyxZQUFZLEdBQUcxSyxJQUFJLENBQUN3SyxRQUF4QjtBQUNBeEssUUFBSSxDQUFDd0ssUUFBTCxHQUFnQixDQUFDakMsUUFBUSxDQUFDb0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsS0FBakQ7QUFDQVgsV0FBTyxDQUFDQyxHQUFSLENBQVlRLFlBQVosRUFBMEIxSyxJQUFJLENBQUN3SyxRQUEvQjtBQUNBcEIsV0FBTyxDQUFDM0IsS0FBUjs7QUFDQSxRQUFJekgsSUFBSSxDQUFDd0ssUUFBTCxHQUFnQkUsWUFBcEIsRUFBa0M7QUFDaENyQixZQUFNLEdBQUcsRUFBVDtBQUNBd0IsVUFBSSxDQUFDN0ssSUFBSSxDQUFDd0ssUUFBTixDQUFKO0FBQ0QsS0FIRCxNQUdPLElBQUl4SyxJQUFJLENBQUN3SyxRQUFMLEdBQWdCRSxZQUFwQixFQUFpQztBQUN0QyxVQUFJSSxJQUFJLEdBQUc5SyxJQUFJLENBQUN3SyxRQUFMLEdBQWdCRSxZQUEzQjtBQUNBSyxXQUFLLENBQUNELElBQUQsQ0FBTCxDQUFZaEYsSUFBWixHQUFtQm5CLE9BQW5CLENBQTJCLFlBQVc7QUFBRTBFLGNBQU0sQ0FBQ3pDLEtBQVA7QUFBaUIsT0FBekQ7QUFDRDs7QUFDRHZDLFVBQU0sQ0FBQ3JFLElBQUQsQ0FBTjtBQUNELEdBYkQ7O0FBZUEsTUFBSXFFLE1BQU0sR0FBRzJHLElBQUksSUFBSTtBQUNuQkMsMkRBQVUsQ0FBQ0MsNkRBQVEsQ0FBQyxFQUFDLEdBQUdGLElBQUo7QUFBVVQsZUFBUyxFQUFFQSxTQUFTO0FBQTlCLEtBQUQsQ0FBVCxFQUE4Q2hDLFFBQVEsQ0FBQ29DLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBOUMsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsTUFBSVEsSUFBSSxHQUFHLE1BQU07QUFDZixhQUFjbkwsSUFBZCxFQUFvQjtBQUNsQm9MLFlBQU0sRUFBRSxLQURVO0FBRWxCakIsYUFBTyxFQUFFLEtBRlM7QUFHbEJLLGNBQVEsRUFBRSxDQUhRO0FBSWxCYSxVQUFJLEVBQUUsVUFKWTtBQUtsQkMsZUFBUyxFQUFFLFVBTE87QUFNbEI5SyxTQUFHLEVBQUUsSUFOYTtBQU9sQndKLFVBUGtCO0FBUWxCUyxVQVJrQjtBQVNsQkYsZUFBUyxFQUFFQSxTQUFTLEVBVEY7QUFVbEJoQjtBQVZrQixLQUFwQjs7QUFZQWxGLFVBQU0sQ0FBQ3JFLElBQUQsQ0FBTjtBQUNELEdBZEQ7O0FBZ0JBbUwsTUFBSTs7QUFFSixNQUFJYixNQUFNLEdBQUcsWUFBVztBQUN0QixRQUFJdEssSUFBSSxDQUFDd0ssUUFBTCxLQUFrQnhLLElBQUksQ0FBQ1EsR0FBM0IsRUFBZ0M7QUFDOUJ5SixhQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0FsSyxVQUFJLENBQUNtSyxPQUFMLEdBQWUsQ0FBQ25LLElBQUksQ0FBQ21LLE9BQXJCO0FBQ0FuSyxVQUFJLENBQUN3SyxRQUFMLEdBQWdCLENBQWhCO0FBQ0FLLFVBQUksQ0FBQzdLLElBQUksQ0FBQ3dLLFFBQU4sQ0FBSjtBQUNBeEssVUFBSSxDQUFDcUwsSUFBTCxHQUFZRSw4Q0FBUSxDQUFDQyxVQUFULENBQW9CLENBQXBCLEVBQXVCQyxRQUF2QixDQUFnQyxVQUFoQyxDQUFaO0FBQ0FwSCxZQUFNLENBQUNyRSxJQUFELENBQU47QUFDQTtBQUNEOztBQUVEMkosT0FBRyxHQUFHRSxJQUFJLENBQUNGLEdBQUwsRUFBTjtBQUNBSSxTQUFLLEdBQUdKLEdBQUcsR0FBR0MsSUFBZDs7QUFDQSxRQUFJRyxLQUFLLEdBQUdELFFBQVosRUFBc0I7QUFDcEJGLFVBQUksR0FBR0QsR0FBRyxHQUFJSSxLQUFLLEdBQUdELFFBQXRCO0FBQ0EsVUFBSXhGLE9BQU8sR0FBR2lFLFFBQVEsQ0FBQ29DLGNBQVQsQ0FBd0IsR0FBeEIsRUFBNkJlLFVBQTdCLENBQXdDLElBQXhDLENBQWQ7QUFFQSxVQUFJQyxLQUFLLEdBQUd0QyxNQUFNLENBQUN6QyxLQUFQLEVBQVo7O0FBRUEsVUFBSStFLEtBQUosRUFBVztBQUNULFlBQUlDLFFBQVEsR0FBRzlJLHdEQUFRLENBQUM7QUFBQzNDLFdBQUMsRUFBRXdMLEtBQUssQ0FBQ3hMLENBQVY7QUFBYXNDLFdBQUMsRUFBRWtKLEtBQUssQ0FBQ2xKO0FBQXRCLFNBQUQsQ0FBdkI7QUFFQSxZQUFJdUUsS0FBSyxHQUFHb0MsT0FBTyxDQUFDN0IsV0FBUixFQUFaO0FBQ0EsWUFBSXNFLFdBQVcsR0FBRyxJQUFJM0UsV0FBSixDQUFnQixJQUFFLENBQWxCLENBQWxCO0FBQ0EsWUFBSTRFLElBQUksR0FBRyxJQUFJQyxZQUFKLENBQWlCRixXQUFqQixDQUFYO0FBQ0FDLFlBQUksQ0FBQyxDQUFELENBQUosR0FBVUYsUUFBUSxDQUFDakosSUFBVCxFQUFWO0FBQ0FtSixZQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVGLFFBQVEsQ0FBQ2hKLElBQVQsRUFBVjs7QUFFQSxZQUFJd0csT0FBTyxDQUFDN0IsV0FBUixHQUFzQkksTUFBdEIsQ0FBNkJ4RixNQUE3QixLQUF3QyxDQUE1QyxFQUErQztBQUM3QzZKLGdCQUFNLENBQUNDLFdBQVAsQ0FBbUI7QUFBQ2pGLGlCQUFLLEVBQUVBLEtBQVI7QUFBZThFLGdCQUFJLEVBQUVEO0FBQXJCLFdBQW5CLEVBQXNELENBQUM3RSxLQUFLLENBQUNXLE1BQVAsRUFBZWtFLFdBQWYsQ0FBdEQ7QUFDRCxTQVhRLENBWVQ7OztBQUNBLFlBQUlLLEdBQUcsR0FBRyxJQUFJQyxLQUFKLEVBQVY7O0FBQ0FELFdBQUcsQ0FBQ0UsTUFBSixHQUFhLFlBQVc7QUFDdEI5SCxpQkFBTyxDQUFDK0gsU0FBUixDQUFrQkgsR0FBbEIsRUFBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsRUFBMEIsSUFBMUIsRUFBK0IsR0FBL0I7QUFFQXpHLGdFQUFNLENBQUM7QUFBQ3RGLGFBQUMsRUFBRXlMLFFBQVEsQ0FBQ2pKLElBQVQsRUFBSjtBQUFxQkYsYUFBQyxFQUFFbUosUUFBUSxDQUFDaEosSUFBVCxFQUF4QjtBQUF5QzhDLGFBQUMsRUFBRTtBQUE1QyxXQUFELENBQU4sQ0FBd0RyQixNQUF4RCxDQUErREMsT0FBL0QsRUFBd0UxRCx3REFBeEU7O0FBRUEsY0FBSW9JLFlBQUosRUFBa0I7QUFDaEJqRSxnRUFBSSxDQUFDO0FBQUNDLGdCQUFFLEVBQUVnRSxZQUFZLENBQUNyRyxJQUFiLEVBQUw7QUFBMEJzQyxnQkFBRSxFQUFFK0QsWUFBWSxDQUFDcEcsSUFBYixFQUE5QjtBQUFtRHNDLGdCQUFFLEVBQUUwRyxRQUFRLENBQUNqSixJQUFULEVBQXZEO0FBQXdFd0MsZ0JBQUUsRUFBRXlHLFFBQVEsQ0FBQ2hKLElBQVQ7QUFBNUUsYUFBRCxDQUFKLENBQW1HeUIsTUFBbkcsQ0FBMEdDLE9BQTFHLEVBQW1IekQsdURBQW5IO0FBQ0Q7O0FBQ0RtSSxzQkFBWSxHQUFHNEMsUUFBZjs7QUFFQSxjQUFJdEMsY0FBSixFQUFvQjtBQUFFRixtQkFBTyxDQUFDL0UsTUFBUixDQUFlQyxPQUFmO0FBQTBCOztBQUNoRHRFLGNBQUksQ0FBQ3FMLElBQUwsR0FBWUUsOENBQVEsQ0FBQ0MsVUFBVCxDQUFxQkcsS0FBSyxDQUFDVyxTQUFOLEdBQWtCOUMsY0FBdkMsRUFBd0RpQyxRQUF4RCxDQUFpRSxVQUFqRSxDQUFaO0FBQ0F6TCxjQUFJLENBQUN3SyxRQUFMO0FBQ0QsU0FiRDs7QUFjQTBCLFdBQUcsQ0FBQ0ssR0FBSixHQUFVWixLQUFLLENBQUNPLEdBQWhCO0FBQ0Q7O0FBQ0Q3SCxZQUFNLENBQUNyRSxJQUFELENBQU47QUFDRDs7QUFDRHlKLGFBQVMsR0FBR1kscUJBQXFCLENBQUNDLE1BQUQsQ0FBakM7QUFDRCxHQXBERDs7QUFzREEsTUFBSU8sSUFBSSxHQUFHLFVBQVNsRSxLQUFULEVBQWdCO0FBQ3pCLFNBQUssSUFBSWdGLEtBQUssR0FBQ2hGLEtBQWYsRUFBc0JnRixLQUFLLElBQUkzTCxJQUFJLENBQUNRLEdBQXBDLEVBQXlDbUwsS0FBSyxFQUE5QyxFQUFrRDtBQUNoRDFDLGFBQU8sQ0FBQ3VELEdBQVIsQ0FBWWIsS0FBWixFQUFvQm5LLENBQUQsSUFBTztBQUN4QixZQUFJQSxDQUFKLEVBQU87QUFDTDZILGdCQUFNLENBQUN6SCxJQUFQLENBQVlKLENBQVosRUFESyxDQUVMOztBQUNBLGNBQUk2SCxNQUFNLENBQUNsSCxNQUFQLEtBQWtCbkMsSUFBSSxDQUFDUSxHQUEzQixFQUFnQztBQUM5QlIsZ0JBQUksQ0FBQ3NMLFNBQUwsR0FBaUJDLDhDQUFRLENBQUNDLFVBQVQsQ0FBcUJuQyxNQUFNLENBQUNySixJQUFJLENBQUNRLEdBQUwsR0FBUyxDQUFWLENBQU4sQ0FBbUI4TCxTQUFuQixHQUErQmpELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVWlELFNBQTlELEVBQTBFYixRQUExRSxDQUFtRixVQUFuRixDQUFqQjtBQUNBakMsMEJBQWMsR0FBR0gsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVaUQsU0FBM0I7QUFDRDs7QUFDRHRNLGNBQUksQ0FBQ29MLE1BQUwsR0FBYyxJQUFkO0FBQ0EvRyxnQkFBTSxDQUFDckUsSUFBRCxDQUFOO0FBQ0Q7QUFDRixPQVhEO0FBWUQ7QUFDRixHQWZEOztBQWlCQSxNQUFJZ00sTUFBTSxHQUFHakUsU0FBYjs7QUFFQSxNQUFJMEUsT0FBTyxHQUFHLFVBQVNuSSxPQUFULEVBQWtCO0FBQzlCQSxXQUFPLEdBQUdBLE9BQVY7QUFDQTJCLHdEQUFJLENBQUM7QUFBQzlGLE9BQUMsRUFBRSxDQUFKO0FBQU9zQyxPQUFDLEVBQUUsQ0FBVjtBQUFhdUIsV0FBSyxFQUFFTSxPQUFPLENBQUNHLE1BQVIsQ0FBZVQsS0FBbkM7QUFBMENFLFlBQU0sRUFBRUksT0FBTyxDQUFDRyxNQUFSLENBQWVQO0FBQWpFLEtBQUQsQ0FBSixDQUErRWtDLEtBQS9FLENBQXFGOUIsT0FBckY7QUFFQTBILFVBQU0sR0FBRyxJQUFJVSxNQUFKLENBQVcsYUFBWCxDQUFUOztBQUNBVixVQUFNLENBQUNXLFNBQVAsR0FBbUIsVUFBU3hFLENBQVQsRUFBWTtBQUM3QjtBQUNBaUIsYUFBTyxDQUFDNUIsV0FBUixDQUFvQlcsQ0FBQyxDQUFDNkMsSUFBdEI7QUFDRCxLQUhEOztBQUlBZ0IsVUFBTSxDQUFDWSxPQUFQLEdBQWlCLFVBQVN6RSxDQUFULEVBQVk7QUFBRThCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUIvQixDQUF2QjtBQUE0QixLQUEzRDs7QUFFQWMsV0FBTyxDQUFDNEQsT0FBUixDQUFnQixNQUFoQixFQUF5QkMsSUFBRCxJQUFVO0FBQ2hDOU0sVUFBSSxDQUFDUSxHQUFMLEdBQVdzTSxJQUFJLENBQUMzSyxNQUFoQjs7QUFDQSxVQUFJbkMsSUFBSSxDQUFDUSxHQUFMLEtBQWEsQ0FBakIsRUFBb0I7QUFDbEI0SCxnQkFBUSxDQUFDMkUsU0FBVCxHQUFxQiwyQ0FBckI7QUFDQTNFLGdCQUFRLENBQUM0RSxJQUFUO0FBQ0Q7O0FBQ0QvQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CbEssSUFBSSxDQUFDUSxHQUF4QjtBQUNBcUssVUFBSSxDQUFDLENBQUQsQ0FBSjtBQUNELEtBUkQsRUFYOEIsQ0FxQjlCO0FBQ0U7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0Y7QUFDQTtBQUNGO0FBQ0QsR0EvREQ7O0FBaUVBLE1BQUlvQyxVQUFVLEdBQUcsTUFBTSxDQUFFLENBQXpCOztBQUVBLFNBQU94TSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQitMLFdBRG1CO0FBRW5CUTtBQUZtQixHQUFkLENBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7QUNwUEQ7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNL0IsUUFBUSxHQUFJRixJQUFELElBQVVrQyw2Q0FBSzs7OzswQkFJYkMsVUFBVzs7NEJBRVRuQyxJQUFJLENBQUNoQixJQUFLLGdCQUFlLENBQUNnQixJQUFJLENBQUNJLE1BQU8sNENBQTJDSixJQUFJLENBQUNiLE9BQUwsR0FBYytDLDZDQUFLLE1BQW5CLEdBQTBCQSw2Q0FBSyxZQUFZO3FDQUNuSGxDLElBQUksQ0FBQ1AsSUFBSyxhQUFZTyxJQUFJLENBQUNSLFFBQVMsVUFBU1EsSUFBSSxDQUFDeEssR0FBSSx5QkFBd0J3SyxJQUFJLENBQUNULFNBQVU7NEJBQ3RHUyxJQUFJLENBQUNLLElBQUs7MENBQ0lMLElBQUksQ0FBQ00sU0FBVTs7Ozs7Ozs7K0JBUTFCTixJQUFJLENBQUN6QixXQUFZOzs7Ozs7OztDQWpCekM7O0FBMkJQLElBQUk0RCxVQUFVLEdBQUcsWUFBVztBQUMxQixRQUFNN0ksT0FBTyxHQUFHaUUsUUFBUSxDQUFDb0MsY0FBVCxDQUF3QixHQUF4QixFQUE2QmUsVUFBN0IsQ0FBd0MsSUFBeEMsQ0FBaEI7QUFDQXBILFNBQU8sQ0FBQ0csTUFBUixDQUFlMkksdUJBQWY7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQU8sU0FBU2xFLE9BQVQsQ0FBaUJsSixJQUFJLEdBQUcsRUFBeEIsRUFBNEI7QUFDakMsTUFBSXFOLEVBQUUsR0FBRyxDQUFUOztBQUVBLE1BQUlDLEdBQUcsR0FBRyxVQUFTL0UsUUFBVCxFQUFtQjtBQUMzQmdGLFVBQU0sQ0FBQ1AsSUFBUCxDQUFZLE1BQVosRUFBb0JwRCxJQUFwQixDQUEwQjRELEtBQUQsSUFBVztBQUNsQyxZQUFNQyxPQUFPLEdBQUc7QUFDZEMsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCO0FBRFQ7QUFESyxPQUFoQjtBQUtBRixXQUFLLENBQUNGLEdBQU4sQ0FBVSxXQUFXRCxFQUFyQixFQUF5QixJQUFJTSxRQUFKLENBQWFwRixRQUFiLENBQXpCO0FBQ0E4RSxRQUFFLEdBQUdBLEVBQUUsR0FBRyxDQUFWO0FBQ0QsS0FSRDtBQVNELEdBVkQ7O0FBWUEsTUFBSWIsR0FBRyxHQUFHLGdCQUFlYSxFQUFmLEVBQW1CTyxRQUFuQixFQUE2QjtBQUNyQyxVQUFNSixLQUFLLEdBQUcsTUFBTUQsTUFBTSxDQUFDUCxJQUFQLENBQVksTUFBWixDQUFwQjtBQUNBLFVBQU1hLFFBQVEsR0FBRyxNQUFNTCxLQUFLLENBQUNNLEtBQU4sQ0FBWSxJQUFJQyxPQUFKLENBQVksV0FBV1YsRUFBdkIsQ0FBWixDQUF2Qjs7QUFFQSxRQUFJUSxRQUFKLEVBQWM7QUFDWkEsY0FBUSxDQUFDRyxJQUFULEdBQWdCcEUsSUFBaEIsQ0FBc0JnQixLQUFELElBQVdnRCxRQUFRLENBQUNoRCxLQUFELENBQXhDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xnRCxjQUFRLENBQUM3RixTQUFELENBQVI7QUFDRDtBQUNGLEdBVEQ7O0FBV0EsTUFBSTNCLEtBQUssR0FBRyxnQkFBZTZILFNBQWYsRUFBMEJMLFFBQTFCLEVBQW9DO0FBQzlDTCxVQUFNLENBQUNXLE1BQVAsQ0FBY0QsU0FBZCxFQUF5QnJFLElBQXpCLENBQStCdUUsT0FBRCxJQUFhUCxRQUFRLENBQUNPLE9BQUQsQ0FBbkQ7QUFDRCxHQUZEOztBQUlBLE1BQUl0QixPQUFPLEdBQUcsZ0JBQWVvQixTQUFmLEVBQTBCTCxRQUExQixFQUFvQztBQUNoRCxVQUFNSixLQUFLLEdBQUcsTUFBTUQsTUFBTSxDQUFDUCxJQUFQLENBQVlpQixTQUFaLENBQXBCO0FBQ0FULFNBQUssQ0FBQ1YsSUFBTixHQUFhbEQsSUFBYixDQUFtQmtELElBQUQsSUFBVWMsUUFBUSxDQUFDZCxJQUFELENBQXBDO0FBQ0QsR0FIRDs7QUFLQSxNQUFJc0IsS0FBSyxHQUFHLFVBQVNSLFFBQVQsRUFBbUI7QUFDN0IsV0FBT1MsU0FBUyxDQUFDcEYsT0FBVixDQUFrQnFGLFFBQWxCLEVBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU83TixNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQjRNLE9BRG1CO0FBRW5CZCxPQUZtQjtBQUduQnBHLFNBSG1CO0FBSW5CeUcsV0FKbUI7QUFLbkJ1QjtBQUxtQixHQUFkLENBQVA7QUFPRCxDOzs7Ozs7Ozs7Ozs7QUM5Q1k7Ozs7QUFFYkcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxVQUFqQjtBQUVBLE1BQU1DLGNBQWMsR0FBRztBQUNuQkMsV0FBUyxFQUFFLEdBRFE7QUFDSztBQUN4QkMsV0FBUyxFQUFFLEtBRlE7QUFFSztBQUN4QkMsT0FBSyxFQUFFLEdBSFk7QUFHSztBQUN4QkMsU0FBTyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxDQUFYLENBSlU7QUFJSztBQUN4QkMsV0FBUyxFQUFFLENBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxDQUFULENBTFE7QUFLSztBQUN4QkMsY0FBWSxFQUFFLElBTks7QUFNSztBQUN4QkMsVUFBUSxFQUFFLEtBUFMsQ0FPSzs7QUFQTCxDQUF2Qjs7QUFVQSxTQUFTUixVQUFULENBQW9CUyxJQUFwQixFQUEwQkMsSUFBMUIsRUFBZ0NDLE1BQWhDLEVBQXdDcEwsS0FBeEMsRUFBK0NFLE1BQS9DLEVBQXVEdUosT0FBdkQsRUFBZ0U7QUFFNUQsTUFBSSxDQUFDNEIsV0FBVyxDQUFDSCxJQUFELENBQVosSUFBc0IsQ0FBQ0csV0FBVyxDQUFDRixJQUFELENBQWxDLElBQTZDQyxNQUFNLElBQUksQ0FBQ0MsV0FBVyxDQUFDRCxNQUFELENBQXZFLEVBQ0ksTUFBTSxJQUFJRSxLQUFKLENBQVUsK0RBQVYsQ0FBTjtBQUVKLE1BQUlKLElBQUksQ0FBQy9NLE1BQUwsS0FBZ0JnTixJQUFJLENBQUNoTixNQUFyQixJQUFnQ2lOLE1BQU0sSUFBSUEsTUFBTSxDQUFDak4sTUFBUCxLQUFrQitNLElBQUksQ0FBQy9NLE1BQXJFLEVBQ0ksTUFBTSxJQUFJbU4sS0FBSixDQUFVLDJCQUFWLENBQU47QUFFSixNQUFJSixJQUFJLENBQUMvTSxNQUFMLEtBQWdCNkIsS0FBSyxHQUFHRSxNQUFSLEdBQWlCLENBQXJDLEVBQXdDLE1BQU0sSUFBSW9MLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBRXhDN0IsU0FBTyxHQUFHLFNBQWMsRUFBZCxFQUFrQmlCLGNBQWxCLEVBQWtDakIsT0FBbEMsQ0FBVixDQVY0RCxDQVk1RDs7QUFDQSxRQUFNOEIsR0FBRyxHQUFHdkwsS0FBSyxHQUFHRSxNQUFwQjtBQUNBLFFBQU1zTCxHQUFHLEdBQUcsSUFBSUMsV0FBSixDQUFnQlAsSUFBSSxDQUFDdkgsTUFBckIsRUFBNkJ1SCxJQUFJLENBQUNRLFVBQWxDLEVBQThDSCxHQUE5QyxDQUFaO0FBQ0EsUUFBTUksR0FBRyxHQUFHLElBQUlGLFdBQUosQ0FBZ0JOLElBQUksQ0FBQ3hILE1BQXJCLEVBQTZCd0gsSUFBSSxDQUFDTyxVQUFsQyxFQUE4Q0gsR0FBOUMsQ0FBWjtBQUNBLE1BQUlLLFNBQVMsR0FBRyxJQUFoQjs7QUFFQSxPQUFLLElBQUl2TyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHa08sR0FBcEIsRUFBeUJsTyxDQUFDLEVBQTFCLEVBQThCO0FBQzFCLFFBQUltTyxHQUFHLENBQUNuTyxDQUFELENBQUgsS0FBV3NPLEdBQUcsQ0FBQ3RPLENBQUQsQ0FBbEIsRUFBdUI7QUFBRXVPLGVBQVMsR0FBRyxLQUFaO0FBQW1CO0FBQVE7QUFDdkQ7O0FBQ0QsTUFBSUEsU0FBSixFQUFlO0FBQUU7QUFDYixRQUFJUixNQUFNLElBQUksQ0FBQzNCLE9BQU8sQ0FBQ3dCLFFBQXZCLEVBQWlDO0FBQzdCLFdBQUssSUFBSTVOLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdrTyxHQUFwQixFQUF5QmxPLENBQUMsRUFBMUIsRUFBOEJ3TyxhQUFhLENBQUNYLElBQUQsRUFBTyxJQUFJN04sQ0FBWCxFQUFjb00sT0FBTyxDQUFDb0IsS0FBdEIsRUFBNkJPLE1BQTdCLENBQWI7QUFDakM7O0FBQ0QsV0FBTyxDQUFQO0FBQ0gsR0ExQjJELENBNEI1RDtBQUNBOzs7QUFDQSxRQUFNVSxRQUFRLEdBQUcsUUFBUXJDLE9BQU8sQ0FBQ2tCLFNBQWhCLEdBQTRCbEIsT0FBTyxDQUFDa0IsU0FBckQ7QUFDQSxNQUFJN0QsSUFBSSxHQUFHLENBQVgsQ0EvQjRELENBaUM1RDs7QUFDQSxPQUFLLElBQUlySSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUIsTUFBcEIsRUFBNEJ6QixDQUFDLEVBQTdCLEVBQWlDO0FBQzdCLFNBQUssSUFBSXRDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2RCxLQUFwQixFQUEyQjdELENBQUMsRUFBNUIsRUFBZ0M7QUFFNUIsWUFBTTRQLEdBQUcsR0FBRyxDQUFDdE4sQ0FBQyxHQUFHdUIsS0FBSixHQUFZN0QsQ0FBYixJQUFrQixDQUE5QixDQUY0QixDQUk1Qjs7QUFDQSxZQUFNNEosS0FBSyxHQUFHaUcsVUFBVSxDQUFDZCxJQUFELEVBQU9DLElBQVAsRUFBYVksR0FBYixFQUFrQkEsR0FBbEIsQ0FBeEIsQ0FMNEIsQ0FPNUI7O0FBQ0EsVUFBSXRPLElBQUksQ0FBQ3dPLEdBQUwsQ0FBU2xHLEtBQVQsSUFBa0IrRixRQUF0QixFQUFnQztBQUM1QjtBQUNBLFlBQUksQ0FBQ3JDLE9BQU8sQ0FBQ21CLFNBQVQsS0FBdUJzQixXQUFXLENBQUNoQixJQUFELEVBQU8vTyxDQUFQLEVBQVVzQyxDQUFWLEVBQWF1QixLQUFiLEVBQW9CRSxNQUFwQixFQUE0QmlMLElBQTVCLENBQVgsSUFDQWUsV0FBVyxDQUFDZixJQUFELEVBQU9oUCxDQUFQLEVBQVVzQyxDQUFWLEVBQWF1QixLQUFiLEVBQW9CRSxNQUFwQixFQUE0QmdMLElBQTVCLENBRGxDLENBQUosRUFDMEU7QUFDdEU7QUFDQTtBQUNBLGNBQUlFLE1BQU0sSUFBSSxDQUFDM0IsT0FBTyxDQUFDd0IsUUFBdkIsRUFBaUNrQixTQUFTLENBQUNmLE1BQUQsRUFBU1csR0FBVCxFQUFjLEdBQUd0QyxPQUFPLENBQUNxQixPQUF6QixDQUFUO0FBRXBDLFNBTkQsTUFNTztBQUNIO0FBQ0EsY0FBSU0sTUFBSixFQUFZO0FBQ1JlLHFCQUFTLENBQUNmLE1BQUQsRUFBU1csR0FBVCxFQUFjLElBQUloRyxLQUFLLEdBQUcsQ0FBUixJQUFhMEQsT0FBTyxDQUFDdUIsWUFBckIsSUFBcUN2QixPQUFPLENBQUNzQixTQUFqRCxDQUFkLENBQVQ7QUFDSDs7QUFDRGpFLGNBQUk7QUFDUDtBQUVKLE9BaEJELE1BZ0JPLElBQUlzRSxNQUFKLEVBQVk7QUFDZjtBQUNBLFlBQUksQ0FBQzNCLE9BQU8sQ0FBQ3dCLFFBQWIsRUFBdUJZLGFBQWEsQ0FBQ1gsSUFBRCxFQUFPYSxHQUFQLEVBQVl0QyxPQUFPLENBQUNvQixLQUFwQixFQUEyQk8sTUFBM0IsQ0FBYjtBQUMxQjtBQUNKO0FBQ0osR0FoRTJELENBa0U1RDs7O0FBQ0EsU0FBT3RFLElBQVA7QUFDSDs7QUFFRCxTQUFTdUUsV0FBVCxDQUFxQmUsR0FBckIsRUFBMEI7QUFDdEI7QUFDQSxTQUFPbEosV0FBVyxDQUFDbUosTUFBWixDQUFtQkQsR0FBbkIsS0FBMkJBLEdBQUcsQ0FBQ0UsV0FBSixDQUFnQkMsaUJBQWhCLEtBQXNDLENBQXhFO0FBQ0gsQyxDQUVEO0FBQ0E7OztBQUVBLFNBQVNMLFdBQVQsQ0FBcUJoRSxHQUFyQixFQUEwQmxILEVBQTFCLEVBQThCQyxFQUE5QixFQUFrQ2pCLEtBQWxDLEVBQXlDRSxNQUF6QyxFQUFpRGlMLElBQWpELEVBQXVEO0FBQ25ELFFBQU1xQixFQUFFLEdBQUcvTyxJQUFJLENBQUNqQixHQUFMLENBQVN3RSxFQUFFLEdBQUcsQ0FBZCxFQUFpQixDQUFqQixDQUFYO0FBQ0EsUUFBTXlMLEVBQUUsR0FBR2hQLElBQUksQ0FBQ2pCLEdBQUwsQ0FBU3lFLEVBQUUsR0FBRyxDQUFkLEVBQWlCLENBQWpCLENBQVg7QUFDQSxRQUFNQyxFQUFFLEdBQUd6RCxJQUFJLENBQUNsQixHQUFMLENBQVN5RSxFQUFFLEdBQUcsQ0FBZCxFQUFpQmhCLEtBQUssR0FBRyxDQUF6QixDQUFYO0FBQ0EsUUFBTW1CLEVBQUUsR0FBRzFELElBQUksQ0FBQ2xCLEdBQUwsQ0FBUzBFLEVBQUUsR0FBRyxDQUFkLEVBQWlCZixNQUFNLEdBQUcsQ0FBMUIsQ0FBWDtBQUNBLFFBQU02TCxHQUFHLEdBQUcsQ0FBQzlLLEVBQUUsR0FBR2pCLEtBQUwsR0FBYWdCLEVBQWQsSUFBb0IsQ0FBaEM7QUFDQSxNQUFJMEwsTUFBTSxHQUFHMUwsRUFBRSxLQUFLd0wsRUFBUCxJQUFheEwsRUFBRSxLQUFLRSxFQUFwQixJQUEwQkQsRUFBRSxLQUFLd0wsRUFBakMsSUFBdUN4TCxFQUFFLEtBQUtFLEVBQTlDLEdBQW1ELENBQW5ELEdBQXVELENBQXBFO0FBQ0EsTUFBSTVFLEdBQUcsR0FBRyxDQUFWO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLENBQVY7QUFDQSxNQUFJbVEsSUFBSixFQUFVQyxJQUFWLEVBQWdCQyxJQUFoQixFQUFzQkMsSUFBdEIsQ0FUbUQsQ0FXbkQ7O0FBQ0EsT0FBSyxJQUFJM1EsQ0FBQyxHQUFHcVEsRUFBYixFQUFpQnJRLENBQUMsSUFBSStFLEVBQXRCLEVBQTBCL0UsQ0FBQyxFQUEzQixFQUErQjtBQUMzQixTQUFLLElBQUlzQyxDQUFDLEdBQUdnTyxFQUFiLEVBQWlCaE8sQ0FBQyxJQUFJMEMsRUFBdEIsRUFBMEIxQyxDQUFDLEVBQTNCLEVBQStCO0FBQzNCLFVBQUl0QyxDQUFDLEtBQUs2RSxFQUFOLElBQVl2QyxDQUFDLEtBQUt3QyxFQUF0QixFQUEwQixTQURDLENBRzNCOztBQUNBLFlBQU04RSxLQUFLLEdBQUdpRyxVQUFVLENBQUM5RCxHQUFELEVBQU1BLEdBQU4sRUFBVzZELEdBQVgsRUFBZ0IsQ0FBQ3ROLENBQUMsR0FBR3VCLEtBQUosR0FBWTdELENBQWIsSUFBa0IsQ0FBbEMsRUFBcUMsSUFBckMsQ0FBeEIsQ0FKMkIsQ0FNM0I7O0FBQ0EsVUFBSTRKLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IyRyxjQUFNLEdBRE8sQ0FFYjs7QUFDQSxZQUFJQSxNQUFNLEdBQUcsQ0FBYixFQUFnQixPQUFPLEtBQVAsQ0FISCxDQUtqQjtBQUNDLE9BTkQsTUFNTyxJQUFJM0csS0FBSyxHQUFHeEosR0FBWixFQUFpQjtBQUNwQkEsV0FBRyxHQUFHd0osS0FBTjtBQUNBNEcsWUFBSSxHQUFHeFEsQ0FBUDtBQUNBeVEsWUFBSSxHQUFHbk8sQ0FBUCxDQUhvQixDQUt4QjtBQUNDLE9BTk0sTUFNQSxJQUFJc0gsS0FBSyxHQUFHdkosR0FBWixFQUFpQjtBQUNwQkEsV0FBRyxHQUFHdUosS0FBTjtBQUNBOEcsWUFBSSxHQUFHMVEsQ0FBUDtBQUNBMlEsWUFBSSxHQUFHck8sQ0FBUDtBQUNIO0FBQ0o7QUFDSixHQXRDa0QsQ0F3Q25EOzs7QUFDQSxNQUFJbEMsR0FBRyxLQUFLLENBQVIsSUFBYUMsR0FBRyxLQUFLLENBQXpCLEVBQTRCLE9BQU8sS0FBUCxDQXpDdUIsQ0EyQ25EO0FBQ0E7O0FBQ0EsU0FBUXVRLGVBQWUsQ0FBQzdFLEdBQUQsRUFBTXlFLElBQU4sRUFBWUMsSUFBWixFQUFrQjVNLEtBQWxCLEVBQXlCRSxNQUF6QixDQUFmLElBQW1ENk0sZUFBZSxDQUFDNUIsSUFBRCxFQUFPd0IsSUFBUCxFQUFhQyxJQUFiLEVBQW1CNU0sS0FBbkIsRUFBMEJFLE1BQTFCLENBQW5FLElBQ0M2TSxlQUFlLENBQUM3RSxHQUFELEVBQU0yRSxJQUFOLEVBQVlDLElBQVosRUFBa0I5TSxLQUFsQixFQUF5QkUsTUFBekIsQ0FBZixJQUFtRDZNLGVBQWUsQ0FBQzVCLElBQUQsRUFBTzBCLElBQVAsRUFBYUMsSUFBYixFQUFtQjlNLEtBQW5CLEVBQTBCRSxNQUExQixDQUQxRTtBQUVILEMsQ0FFRDs7O0FBQ0EsU0FBUzZNLGVBQVQsQ0FBeUI3RSxHQUF6QixFQUE4QmxILEVBQTlCLEVBQWtDQyxFQUFsQyxFQUFzQ2pCLEtBQXRDLEVBQTZDRSxNQUE3QyxFQUFxRDtBQUNqRCxRQUFNc00sRUFBRSxHQUFHL08sSUFBSSxDQUFDakIsR0FBTCxDQUFTd0UsRUFBRSxHQUFHLENBQWQsRUFBaUIsQ0FBakIsQ0FBWDtBQUNBLFFBQU15TCxFQUFFLEdBQUdoUCxJQUFJLENBQUNqQixHQUFMLENBQVN5RSxFQUFFLEdBQUcsQ0FBZCxFQUFpQixDQUFqQixDQUFYO0FBQ0EsUUFBTUMsRUFBRSxHQUFHekQsSUFBSSxDQUFDbEIsR0FBTCxDQUFTeUUsRUFBRSxHQUFHLENBQWQsRUFBaUJoQixLQUFLLEdBQUcsQ0FBekIsQ0FBWDtBQUNBLFFBQU1tQixFQUFFLEdBQUcxRCxJQUFJLENBQUNsQixHQUFMLENBQVMwRSxFQUFFLEdBQUcsQ0FBZCxFQUFpQmYsTUFBTSxHQUFHLENBQTFCLENBQVg7QUFDQSxRQUFNNkwsR0FBRyxHQUFHLENBQUM5SyxFQUFFLEdBQUdqQixLQUFMLEdBQWFnQixFQUFkLElBQW9CLENBQWhDO0FBQ0EsTUFBSTBMLE1BQU0sR0FBRzFMLEVBQUUsS0FBS3dMLEVBQVAsSUFBYXhMLEVBQUUsS0FBS0UsRUFBcEIsSUFBMEJELEVBQUUsS0FBS3dMLEVBQWpDLElBQXVDeEwsRUFBRSxLQUFLRSxFQUE5QyxHQUFtRCxDQUFuRCxHQUF1RCxDQUFwRSxDQU5pRCxDQVFqRDs7QUFDQSxPQUFLLElBQUloRixDQUFDLEdBQUdxUSxFQUFiLEVBQWlCclEsQ0FBQyxJQUFJK0UsRUFBdEIsRUFBMEIvRSxDQUFDLEVBQTNCLEVBQStCO0FBQzNCLFNBQUssSUFBSXNDLENBQUMsR0FBR2dPLEVBQWIsRUFBaUJoTyxDQUFDLElBQUkwQyxFQUF0QixFQUEwQjFDLENBQUMsRUFBM0IsRUFBK0I7QUFDM0IsVUFBSXRDLENBQUMsS0FBSzZFLEVBQU4sSUFBWXZDLENBQUMsS0FBS3dDLEVBQXRCLEVBQTBCO0FBRTFCLFlBQU0rTCxJQUFJLEdBQUcsQ0FBQ3ZPLENBQUMsR0FBR3VCLEtBQUosR0FBWTdELENBQWIsSUFBa0IsQ0FBL0I7QUFDQSxVQUFJK0wsR0FBRyxDQUFDNkQsR0FBRCxDQUFILEtBQWE3RCxHQUFHLENBQUM4RSxJQUFELENBQWhCLElBQ0E5RSxHQUFHLENBQUM2RCxHQUFHLEdBQUcsQ0FBUCxDQUFILEtBQWlCN0QsR0FBRyxDQUFDOEUsSUFBSSxHQUFHLENBQVIsQ0FEcEIsSUFFQTlFLEdBQUcsQ0FBQzZELEdBQUcsR0FBRyxDQUFQLENBQUgsS0FBaUI3RCxHQUFHLENBQUM4RSxJQUFJLEdBQUcsQ0FBUixDQUZwQixJQUdBOUUsR0FBRyxDQUFDNkQsR0FBRyxHQUFHLENBQVAsQ0FBSCxLQUFpQjdELEdBQUcsQ0FBQzhFLElBQUksR0FBRyxDQUFSLENBSHhCLEVBR29DTixNQUFNO0FBRTFDLFVBQUlBLE1BQU0sR0FBRyxDQUFiLEVBQWdCLE9BQU8sSUFBUDtBQUNuQjtBQUNKOztBQUVELFNBQU8sS0FBUDtBQUNILEMsQ0FFRDtBQUNBOzs7QUFFQSxTQUFTVixVQUFULENBQW9CZCxJQUFwQixFQUEwQkMsSUFBMUIsRUFBZ0M4QixDQUFoQyxFQUFtQ0MsQ0FBbkMsRUFBc0NDLEtBQXRDLEVBQTZDO0FBQ3pDLE1BQUlDLEVBQUUsR0FBR2xDLElBQUksQ0FBQytCLENBQUMsR0FBRyxDQUFMLENBQWI7QUFDQSxNQUFJSSxFQUFFLEdBQUduQyxJQUFJLENBQUMrQixDQUFDLEdBQUcsQ0FBTCxDQUFiO0FBQ0EsTUFBSUssRUFBRSxHQUFHcEMsSUFBSSxDQUFDK0IsQ0FBQyxHQUFHLENBQUwsQ0FBYjtBQUNBLE1BQUlNLEVBQUUsR0FBR3JDLElBQUksQ0FBQytCLENBQUMsR0FBRyxDQUFMLENBQWI7QUFFQSxNQUFJTyxFQUFFLEdBQUdyQyxJQUFJLENBQUMrQixDQUFDLEdBQUcsQ0FBTCxDQUFiO0FBQ0EsTUFBSU8sRUFBRSxHQUFHdEMsSUFBSSxDQUFDK0IsQ0FBQyxHQUFHLENBQUwsQ0FBYjtBQUNBLE1BQUlRLEVBQUUsR0FBR3ZDLElBQUksQ0FBQytCLENBQUMsR0FBRyxDQUFMLENBQWI7QUFDQSxNQUFJUyxFQUFFLEdBQUd4QyxJQUFJLENBQUMrQixDQUFDLEdBQUcsQ0FBTCxDQUFiO0FBRUEsTUFBSUssRUFBRSxLQUFLSSxFQUFQLElBQWFQLEVBQUUsS0FBS0ksRUFBcEIsSUFBMEJILEVBQUUsS0FBS0ksRUFBakMsSUFBdUNILEVBQUUsS0FBS0ksRUFBbEQsRUFBc0QsT0FBTyxDQUFQOztBQUV0RCxNQUFJSCxFQUFFLEdBQUcsR0FBVCxFQUFjO0FBQ1ZBLE1BQUUsSUFBSSxHQUFOO0FBQ0FILE1BQUUsR0FBR1EsS0FBSyxDQUFDUixFQUFELEVBQUtHLEVBQUwsQ0FBVjtBQUNBRixNQUFFLEdBQUdPLEtBQUssQ0FBQ1AsRUFBRCxFQUFLRSxFQUFMLENBQVY7QUFDQUQsTUFBRSxHQUFHTSxLQUFLLENBQUNOLEVBQUQsRUFBS0MsRUFBTCxDQUFWO0FBQ0g7O0FBRUQsTUFBSUksRUFBRSxHQUFHLEdBQVQsRUFBYztBQUNWQSxNQUFFLElBQUksR0FBTjtBQUNBSCxNQUFFLEdBQUdJLEtBQUssQ0FBQ0osRUFBRCxFQUFLRyxFQUFMLENBQVY7QUFDQUYsTUFBRSxHQUFHRyxLQUFLLENBQUNILEVBQUQsRUFBS0UsRUFBTCxDQUFWO0FBQ0FELE1BQUUsR0FBR0UsS0FBSyxDQUFDRixFQUFELEVBQUtDLEVBQUwsQ0FBVjtBQUNIOztBQUVELFFBQU0xTSxFQUFFLEdBQUc0TSxLQUFLLENBQUNULEVBQUQsRUFBS0MsRUFBTCxFQUFTQyxFQUFULENBQWhCO0FBQ0EsUUFBTW5NLEVBQUUsR0FBRzBNLEtBQUssQ0FBQ0wsRUFBRCxFQUFLQyxFQUFMLEVBQVNDLEVBQVQsQ0FBaEI7QUFDQSxRQUFNalAsQ0FBQyxHQUFHd0MsRUFBRSxHQUFHRSxFQUFmO0FBRUEsTUFBSWdNLEtBQUosRUFBVyxPQUFPMU8sQ0FBUCxDQS9COEIsQ0ErQnBCOztBQUVyQixRQUFNcEIsQ0FBQyxHQUFHeVEsS0FBSyxDQUFDVixFQUFELEVBQUtDLEVBQUwsRUFBU0MsRUFBVCxDQUFMLEdBQW9CUSxLQUFLLENBQUNOLEVBQUQsRUFBS0MsRUFBTCxFQUFTQyxFQUFULENBQW5DO0FBQ0EsUUFBTUssQ0FBQyxHQUFHQyxLQUFLLENBQUNaLEVBQUQsRUFBS0MsRUFBTCxFQUFTQyxFQUFULENBQUwsR0FBb0JVLEtBQUssQ0FBQ1IsRUFBRCxFQUFLQyxFQUFMLEVBQVNDLEVBQVQsQ0FBbkM7QUFFQSxRQUFNM0gsS0FBSyxHQUFHLFNBQVN0SCxDQUFULEdBQWFBLENBQWIsR0FBaUIsUUFBUXBCLENBQVIsR0FBWUEsQ0FBN0IsR0FBaUMsU0FBUzBRLENBQVQsR0FBYUEsQ0FBNUQsQ0FwQ3lDLENBc0N6Qzs7QUFDQSxTQUFPOU0sRUFBRSxHQUFHRSxFQUFMLEdBQVUsQ0FBQzRFLEtBQVgsR0FBbUJBLEtBQTFCO0FBQ0g7O0FBRUQsU0FBUzhILEtBQVQsQ0FBZW5NLENBQWYsRUFBa0J1TSxDQUFsQixFQUFxQjdSLENBQXJCLEVBQXdCO0FBQUUsU0FBT3NGLENBQUMsR0FBRyxVQUFKLEdBQWlCdU0sQ0FBQyxHQUFHLFVBQXJCLEdBQWtDN1IsQ0FBQyxHQUFHLFVBQTdDO0FBQTBEOztBQUNwRixTQUFTMFIsS0FBVCxDQUFlcE0sQ0FBZixFQUFrQnVNLENBQWxCLEVBQXFCN1IsQ0FBckIsRUFBd0I7QUFBRSxTQUFPc0YsQ0FBQyxHQUFHLFVBQUosR0FBaUJ1TSxDQUFDLEdBQUcsVUFBckIsR0FBa0M3UixDQUFDLEdBQUcsVUFBN0M7QUFBMEQ7O0FBQ3BGLFNBQVM0UixLQUFULENBQWV0TSxDQUFmLEVBQWtCdU0sQ0FBbEIsRUFBcUI3UixDQUFyQixFQUF3QjtBQUFFLFNBQU9zRixDQUFDLEdBQUcsVUFBSixHQUFpQnVNLENBQUMsR0FBRyxVQUFyQixHQUFrQzdSLENBQUMsR0FBRyxVQUE3QztBQUEwRCxDLENBRXBGOzs7QUFDQSxTQUFTd1IsS0FBVCxDQUFldEssQ0FBZixFQUFrQnBILENBQWxCLEVBQXFCO0FBQ2pCLFNBQU8sTUFBTSxDQUFDb0gsQ0FBQyxHQUFHLEdBQUwsSUFBWXBILENBQXpCO0FBQ0g7O0FBRUQsU0FBU2lRLFNBQVQsQ0FBbUJmLE1BQW5CLEVBQTJCVyxHQUEzQixFQUFnQ3JLLENBQWhDLEVBQW1DdU0sQ0FBbkMsRUFBc0M3UixDQUF0QyxFQUF5QztBQUNyQ2dQLFFBQU0sQ0FBQ1csR0FBRyxHQUFHLENBQVAsQ0FBTixHQUFrQnJLLENBQWxCO0FBQ0EwSixRQUFNLENBQUNXLEdBQUcsR0FBRyxDQUFQLENBQU4sR0FBa0JrQyxDQUFsQjtBQUNBN0MsUUFBTSxDQUFDVyxHQUFHLEdBQUcsQ0FBUCxDQUFOLEdBQWtCM1AsQ0FBbEI7QUFDQWdQLFFBQU0sQ0FBQ1csR0FBRyxHQUFHLENBQVAsQ0FBTixHQUFrQixHQUFsQjtBQUNIOztBQUVELFNBQVNGLGFBQVQsQ0FBdUIzRCxHQUF2QixFQUE0QjdLLENBQTVCLEVBQStCd04sS0FBL0IsRUFBc0NPLE1BQXRDLEVBQThDO0FBQzFDLFFBQU0xSixDQUFDLEdBQUd3RyxHQUFHLENBQUM3SyxDQUFDLEdBQUcsQ0FBTCxDQUFiO0FBQ0EsUUFBTTRRLENBQUMsR0FBRy9GLEdBQUcsQ0FBQzdLLENBQUMsR0FBRyxDQUFMLENBQWI7QUFDQSxRQUFNakIsQ0FBQyxHQUFHOEwsR0FBRyxDQUFDN0ssQ0FBQyxHQUFHLENBQUwsQ0FBYjtBQUNBLFFBQU1ELEdBQUcsR0FBR3dRLEtBQUssQ0FBQ0MsS0FBSyxDQUFDbk0sQ0FBRCxFQUFJdU0sQ0FBSixFQUFPN1IsQ0FBUCxDQUFOLEVBQWlCeU8sS0FBSyxHQUFHM0MsR0FBRyxDQUFDN0ssQ0FBQyxHQUFHLENBQUwsQ0FBWCxHQUFxQixHQUF0QyxDQUFqQjtBQUNBOE8sV0FBUyxDQUFDZixNQUFELEVBQVMvTixDQUFULEVBQVlELEdBQVosRUFBaUJBLEdBQWpCLEVBQXNCQSxHQUF0QixDQUFUO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUMzT0QsZSIsImZpbGUiOiIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBBbGdvcml0aG0oc3BlYyA9IHt9KSB7XHJcbiAgbGV0IHJlbGF0aXZlID0gZnVuY3Rpb24oYSwgeCwgYikge1xyXG4gICAgcmV0dXJuICh4IC0gYSkgLyAoYiAtIGEpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGxpbWl0ID0gZnVuY3Rpb24oYSwgeCwgYikge1xyXG4gICAgaWYoeCA8IGEpIHJldHVybiBhO1xyXG4gICAgaWYoeCA+IGIpIHJldHVybiBiO1xyXG4gICAgcmV0dXJuIHg7XHJcbiAgfVxyXG5cclxuICBsZXQgbm9ybWFsaXplID0gZnVuY3Rpb24oeCwgbWluLCBtYXgpIHtcclxuICAgIGlmICh4IDwgbWluKSB7IHggPSBtaW47IH1cclxuICAgIGlmICh4ID4gbWF4KSB7IHggPSBtYXg7IH1cclxuICAgIHJldHVybiAoeCAtIG1pbikgLyAobWF4IC0gbWluKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIHJlbGF0aXZlLFxyXG4gICAgbGltaXQsXHJcbiAgICBub3JtYWxpemVcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQge0FsZ29yaXRobX0gZnJvbSAnLi9hbGdvcml0aG0uanMnXHJcblxyXG5leHBvcnQgY29uc3QgUkFXX0RBVEFfQ09MT1IgPSAncmdiYSgyMDAsMCwwLDAuODUpJztcclxuZXhwb3J0IGNvbnN0IEZJWEFUSU9OX0NPTE9SID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC44NSknO1xyXG5leHBvcnQgY29uc3QgU0FDQ0FERV9DT0xPUiA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuODUpJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0NPTE9SID0gJ3JnYigwLDAsMCknO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJRkZFUkVOVF9DT0xPUlMgPSBbXTtcclxuZXhwb3J0IGNvbnN0IEhFQVRNQVBfQ09MT1JTID0gW107XHJcblxyXG5mdW5jdGlvbiBoc3YyaHNsKGh1ZSxzYXQsdmFsKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIGh1ZSxcclxuICAgIHNhdCp2YWwvKChodWU9KDItc2F0KSp2YWwpPDE/aHVlOjItaHVlKSxcclxuICAgIGh1ZS8yXHJcbiAgXVxyXG59XHJcblxyXG5mb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICB2YXIgaCA9IChpICogMC42MTgwMzM5ODg3NDk4OTUpICUgMS4wO1xyXG4gIHZhciBzID0gMC41O1xyXG4gIHZhciB2ID0gTWF0aC5zcXJ0KDEuMCAtICgoaSAqIDAuNjE4MDMzOTg4NzQ5ODk1KSAlIDAuNSkpO1xyXG4gIHZhciBhID0gMC41O1xyXG5cclxuICB2YXIgaHNsID0gaHN2MmhzbChoLHMsdik7XHJcblxyXG4gIERJRkZFUkVOVF9DT0xPUlMucHVzaCgnaHNsYSgnICsgTWF0aC5yb3VuZChoc2xbMF0qMjU1KSArICcsJyArIE1hdGgucm91bmQoaHNsWzFdKjEwMCkgKyAnJSwnICsgTWF0aC5yb3VuZChoc2xbMl0qMTAwKSArICclLCcgKyBhICsgJyknKTtcclxufVxyXG5cclxuZm9yIChsZXQgaCA9IDA7IGggPCAyMTA7IGgrKykge1xyXG4gIEhFQVRNQVBfQ09MT1JTLnB1c2goJ2hzbGEoJyArICgyMDkgLSBoKSArICcsIDUwJSwgNTAlLCcrIDAuNSArJyknKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbG9yKHNwZWMgPSB7fSkge1xyXG4gIGxldCBhbGdvcml0aG0gPSBBbGdvcml0aG0oe30pO1xyXG5cclxuICBsZXQgaGVhdCA9IGZ1bmN0aW9uKHJlbCkge1xyXG4gICAgbGV0IGQgPSBhbGdvcml0aG0ubGltaXQoMCwgcmVsLCAxKVxyXG4gICAgaWYgKHJlbCA9PT0gMCkgcmV0dXJuICdyZ2JhKDAsMCwwLDApJztcclxuICAgIHJldHVybiBIRUFUTUFQX0NPTE9SU1tNYXRoLnJvdW5kKChkICogKEhFQVRNQVBfQ09MT1JTLmxlbmd0aCAtIDEpKSldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xyXG4gICAgaGVhdFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7REVWSUNFX1dJRFRILCBERVZJQ0VfSEVJR0hUfSBmcm9tICcuL2dlby5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgRElTUEVSU0lPTl9USFJFU0hPTEQgPSA1MDsgLy8gcGl4ZWxzXHJcbmV4cG9ydCBjb25zdCBEVVJBVElPTl9USFJFU0hPTEQgPSAxNTA7IC8vIG1zXHJcbmV4cG9ydCBjb25zdCBJTklUX0ZJWEFUSU9OX1dJTkRPVyA9IDEwOyAvLyB+MC4xNSAqIDcwSHpcclxuXHJcbmV4cG9ydCBjb25zdCBSRVBMQVlfRlBTID0gNTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYXplUG9pbnQoc3BlYyA9IHt4OiAwLCB5OiAwLCB0OiAwfSkge1xyXG4gIGxldCB7eCx5LHR9ID0gc3BlY1xyXG5cclxuICBsZXQgZ2V0WCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4geDsgfVxyXG4gIGxldCBnZXRZID0gZnVuY3Rpb24oKSB7IHJldHVybiB5OyB9XHJcbiAgbGV0IGdldFRpbWVzdGFtcCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdDsgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBnZXRYLFxyXG4gICAgZ2V0WSxcclxuICAgIGdldFRpbWVzdGFtcFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGaXhhdGlvbihzcGVjID0ge3g6IDAsIHk6IDAsIHQ6IDAsIGQ6IDB9KSB7XHJcbiAgbGV0IHt4LHksdCxkfSA9IHNwZWM7XHJcblxyXG4gIGxldCBnZXRYID0gZnVuY3Rpb24oKSB7IHJldHVybiB4OyB9XHJcbiAgbGV0IGdldFkgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHk7IH1cclxuICBsZXQgZ2V0VGltZXN0YW1wID0gZnVuY3Rpb24oKSB7IHJldHVybiB0OyB9XHJcbiAgbGV0IGdldER1cmF0aW9uID0gZnVuY3Rpb24oKSB7IHJldHVybiBkOyB9XHJcblxyXG4gIGxldCBnZXRGaXhhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHt4OiB4LCB5OiB5fTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGdldFgsXHJcbiAgICBnZXRZLFxyXG4gICAgZ2V0VGltZXN0YW1wLFxyXG4gICAgZ2V0RHVyYXRpb24sXHJcbiAgICBnZXRGaXhhdGlvblxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYXplV2luZG93KHNwZWMgPSB7cG9pbnRzOiBbXX0pIHtcclxuICBsZXQge3BvaW50c30gPSBzcGVjO1xyXG5cclxuICBsZXQgZGlzcGVyc2lvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHBvaW50c1ggPSBwb2ludHMubWFwKHAgPT4gcC5nZXRYKCkgKiBERVZJQ0VfV0lEVEgpO1xyXG4gICAgbGV0IHBvaW50c1kgPSBwb2ludHMubWFwKHAgPT4gcC5nZXRZKCkgKiBERVZJQ0VfSEVJR0hUKTtcclxuXHJcbiAgICByZXR1cm4gKE1hdGgubWF4KC4uLnBvaW50c1gpIC0gTWF0aC5taW4oLi4ucG9pbnRzWCkpICsgKE1hdGgubWF4KC4uLnBvaW50c1kpIC0gTWF0aC5taW4oLi4ucG9pbnRzWSkpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNlbnRyb2lkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcG9pbnRzWCA9IHBvaW50cy5tYXAocCA9PiBwLmdldFgoKSk7XHJcbiAgICBsZXQgcG9pbnRzWSA9IHBvaW50cy5tYXAocCA9PiBwLmdldFkoKSk7XHJcblxyXG4gICAgcmV0dXJuIEZpeGF0aW9uKHtcclxuICAgICAgeDogKyhwb2ludHNYLnJlZHVjZSgoYSxiKSA9PiBhK2IpIC8gcG9pbnRzWC5sZW5ndGgpLnRvRml4ZWQoNiksXHJcbiAgICAgIHk6ICsocG9pbnRzWS5yZWR1Y2UoKGEsYikgPT4gYStiKSAvIHBvaW50c1kubGVuZ3RoKS50b0ZpeGVkKDYpLFxyXG4gICAgICB0OiArKHBvaW50c1swXS5nZXRUaW1lc3RhbXAoKSkudG9GaXhlZCg2KSxcclxuICAgICAgZDogKyhwb2ludHNbcG9pbnRzLmxlbmd0aC0xXS5nZXRUaW1lc3RhbXAoKSAtIHBvaW50c1swXS5nZXRUaW1lc3RhbXAoKSkudG9GaXhlZCg2KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxldCBkZXRlY3RvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGRpc3BlcnNpb24oKSA+IERJU1BFUlNJT05fVEhSRVNIT0xEKSB7XHJcbiAgICAgIHJldHVybiBjZW50cm9pZCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xyXG4gICAgZGV0ZWN0b3JcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCB7Q0xFQVJfQ09MT1J9IGZyb20gJy4vY29sb3IuanMnO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tICcuL2NvbG9yLmpzJztcclxuaW1wb3J0IHtBbGdvcml0aG19IGZyb20gJy4vYWxnb3JpdGhtLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBERVZJQ0VfV0lEVEggPSB3aW5kb3cuc2NyZWVuLndpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbmV4cG9ydCBjb25zdCBERVZJQ0VfSEVJR0hUID0gd2luZG93LnNjcmVlbi5oZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbmxldCBjb2xvciA9IENvbG9yKHt9KTtcclxubGV0IGFsZ29yaXRobSA9IEFsZ29yaXRobSh7fSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9pbnQoc3BlYyA9IHt4OiAwLCB5OiAwfSkge1xyXG4gIGxldCB7eCwgeX0gPSBzcGVjO1xyXG5cclxuICBsZXQgZ2V0WCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4geDsgfVxyXG4gIGxldCBnZXRZID0gZnVuY3Rpb24oKSB7IHJldHVybiB5OyB9XHJcblxyXG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmaWxsU3R5bGUpIHtcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgY29udGV4dC5maWxsUmVjdCh4KmNvbnRleHQuY2FudmFzLndpZHRoLCB5KmNvbnRleHQuY2FudmFzLmhlaWdodCwgMC4wMDUqY29udGV4dC5jYW52YXMud2lkdGgsIDAuMDA1KmNvbnRleHQuY2FudmFzLndpZHRoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGdldFgsXHJcbiAgICBnZXRZLFxyXG4gICAgcmVuZGVyXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQb2ludHMoc3BlYyA9IHtwb2ludHM6IFtdfSkge1xyXG4gIGxldCB7cG9pbnRzfSA9IHNwZWM7XHJcblxyXG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmaWxsU3R5bGUpIHtcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgcG9pbnRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xyXG4gICAgICBwLnJlbmRlcihjb250ZXh0LCBmaWxsU3R5bGUpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxldCByZW5kZXJUaW1lbGluZSA9IGZ1bmN0aW9uKGNvbnRleHQsIGF4aXMsIGZpbGxTdHlsZSkge1xyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XHJcbiAgICBwb2ludHMuZm9yRWFjaChmdW5jdGlvbihwLCBpKSB7XHJcbiAgICAgIGxldCBkaW0gPSBheGlzID09PSAwPyBwLmdldFgoKSA6IHAuZ2V0WSgpO1xyXG4gICAgICBjb250ZXh0LmZpbGxSZWN0KChpLzMwKSpjb250ZXh0LmNhbnZhcy53aWR0aCwgKDEtZGltKSpjb250ZXh0LmNhbnZhcy5oZWlnaHQsIGNvbnRleHQuY2FudmFzLndpZHRoLzMwLCAxKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICByZW5kZXIsXHJcbiAgICByZW5kZXJUaW1lbGluZVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGluZShzcGVjID0ge3gxOiAwLCB5MTogMCwgeDI6IDAsIHkyOiAwfSkge1xyXG4gIGxldCB7eDEsIHkxLCB4MiwgeTJ9ID0gc3BlYztcclxuXHJcbiAgbGV0IHJlbmRlciA9IGZ1bmN0aW9uKGNvbnRleHQsIHN0cm9rZVN0eWxlKSB7XHJcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGVcclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBjb250ZXh0Lm1vdmVUbyh4MSpjb250ZXh0LmNhbnZhcy53aWR0aCwgeTEqY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGNvbnRleHQubGluZVRvKHgyKmNvbnRleHQuY2FudmFzLndpZHRoLCB5Mipjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgY29udGV4dC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIHJlbmRlclxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2lyY2xlKHNwZWMgPSB7eDogMCwgeTogMCwgcjogMH0pIHtcclxuICBsZXQge3gsIHksIHJ9ID0gc3BlYztcclxuXHJcbiAgbGV0IGdldFggPSBmdW5jdGlvbigpIHsgcmV0dXJuIHg7IH1cclxuICBsZXQgZ2V0WSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4geTsgfVxyXG4gIGxldCBnZXRSID0gZnVuY3Rpb24oKSB7IHJldHVybiByOyB9XHJcblxyXG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbihjb250ZXh0LCBzdHJva2VTdHlsZSwgZmlsbFN0eWxlKSB7XHJcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgY29udGV4dC5hcmMoeCpjb250ZXh0LmNhbnZhcy53aWR0aCwgeSpjb250ZXh0LmNhbnZhcy5oZWlnaHQsIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgIGlmIChmaWxsU3R5bGUpIHtcclxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XHJcbiAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0cm9rZVN0eWxlKSB7XHJcbiAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcclxuICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGdldFgsXHJcbiAgICBnZXRZLFxyXG4gICAgZ2V0UixcclxuICAgIHJlbmRlclxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBHVF9CQVNFID0gWzMwLCAxNV1cclxuY29uc3QgR1RfQ09OU0lERVIgPSBbMjAsIDIwXVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlY3Qoc3BlYyA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfSkge1xyXG4gIGxldCB7eCwgeSwgd2lkdGgsIGhlaWdodH0gPSBzcGVjO1xyXG5cclxuICBsZXQgZ2V0WCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4geDsgfVxyXG4gIGxldCBnZXRZID0gZnVuY3Rpb24oKSB7IHJldHVybiB5OyB9XHJcbiAgbGV0IGdldFdpZHRoID0gZnVuY3Rpb24oKSB7IHJldHVybiB3aWR0aDsgfVxyXG4gIGxldCBnZXRIZWlnaHQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhlaWdodDsgfVxyXG5cclxuICBsZXQgY2xlYXIgPSBmdW5jdGlvbihjb250ZXh0LCBmaWxsU3R5bGUpIHtcclxuICAgIGlmIChmaWxsU3R5bGUpIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgZWxzZSBjb250ZXh0LmZpbGxTdHlsZSA9IENMRUFSX0NPTE9SO1xyXG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGxldCBjb250YWluc1BvaW50ID0gZnVuY3Rpb24ocHgsIHB5KSB7XHJcbiAgICBsZXQgdyA9IHdpZHRoO1xyXG4gICAgbGV0IGggPSBoZWlnaHQ7XHJcblxyXG4gICAgLy8gQXQgbGVhc3Qgb25lIG9mIHRoZSBkaW1lbnNpb25zIGlzIG5lZ2F0aXZlXHJcbiAgICBpZiAoKHcgfCBoKSA8IDApIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG4gICAgLy8gTm90ZTogaWYgZWl0aGVyIGRpbWVuc2lvbiBpcyB6ZXJvLCB0ZXN0cyBiZWxvdyBtdXN0IHJldHVybiBmYWxzZVxyXG4gICAgaWYgKHB4IDwgeCB8fCBweSA8IHkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICB3ICs9IHg7XHJcbiAgICBoICs9IHk7XHJcbiAgICAvLyBvdmVyZmxvdyB8fCBpbnRlcnNlY3RcclxuICAgIHJldHVybiAoKHcgPCB4IHx8IHcgPiBweCkgJiYgKGggPCB5IHx8IGggPiBweSkpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHRpbGVzID0gZnVuY3Rpb24odGlsZVNpemUgPSBHVF9CQVNFKSB7XHJcbiAgICBsZXQgdGlsZXMgPSBbXTtcclxuICAgIGxldCBzdGFydCA9IHt4OiB4LCB5OiB5fTtcclxuICAgIGxldCBzaGlmdCA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlIChzdGFydC55IDwgeSArIGhlaWdodCkge1xyXG4gICAgICBsZXQgcmVjdGFuZ2xlID0ge3g6IHN0YXJ0LngsIHk6IHN0YXJ0LnksIHdpZHRoOiB0aWxlU2l6ZVswXSwgaGVpZ2h0OiB0aWxlU2l6ZVsxXX07XHJcbiAgICAgIHRpbGVzLnB1c2gocmVjdGFuZ2xlKTtcclxuXHJcbiAgICAgIHN0YXJ0LnggPSByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aDtcclxuXHJcbiAgICAgIGlmKHN0YXJ0LnggPj0geCArIHdpZHRoKSB7XHJcbiAgICAgICAgc2hpZnQgPSAhc2hpZnQ7XHJcbiAgICAgICAgc3RhcnQueSArPSB0aWxlU2l6ZVsxXTtcclxuICAgICAgICBzdGFydC54ID0gc2hpZnQgPyB4IC0gKHRpbGVTaXplWzBdIC8gMikgOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRpbGVzO1xyXG4gIH1cclxuXHJcbiAgbGV0IHJlbmRlciA9IGZ1bmN0aW9uKGNvbnRleHQsIHN0cm9rZVN0eWxlLCBmaWxsU3R5bGUpIHtcclxuICAgIGlmIChzdHJva2VTdHlsZSkge1xyXG4gICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XHJcbiAgICAgIGNvbnRleHQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGlmIChmaWxsU3R5bGUpIHtcclxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XHJcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBnZXRYLFxyXG4gICAgZ2V0WSxcclxuICAgIGdldFdpZHRoLFxyXG4gICAgZ2V0SGVpZ2h0LFxyXG4gICAgY2xlYXIsXHJcbiAgICB0aWxlcyxcclxuICAgIGNvbnRhaW5zUG9pbnQsXHJcbiAgICByZW5kZXJcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhlYXRtYXAoc3BlYyA9IHt0aWxlczogW119KSB7XHJcbiAgbGV0IHt0aWxlc30gPSBzcGVjO1xyXG4gIGxldCBjb3VudCA9IG5ldyBVaW50MTZBcnJheShuZXcgQXJyYXlCdWZmZXIodGlsZXMubGVuZ3RoKjIpKTtcclxuICBsZXQgY291bnRDbG9uZSA9IG5ldyBVaW50MTZBcnJheShuZXcgQXJyYXlCdWZmZXIodGlsZXMubGVuZ3RoKjIpKTtcclxuXHJcbiAgbGV0IGdldENvdW50ID0gZnVuY3Rpb24oaSkgeyByZXR1cm4gY291bnRbaV07IH1cclxuICBsZXQgc2V0Q291bnQgPSBmdW5jdGlvbihpLCBjKSB7IGNvdW50W2ldID0gYzsgfVxyXG4gIGxldCBnZXRDb3VudEFyciA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY291bnQ7IH1cclxuICBsZXQgc2V0Q291bnRBcnIgPSBmdW5jdGlvbihjKSB7IGNvdW50ID0gYzsgfVxyXG5cclxuICBsZXQgcmVzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvdW50ID0gbmV3IFVpbnQxNkFycmF5KG5ldyBBcnJheUJ1ZmZlcih0aWxlcy5sZW5ndGgqMikpO1xyXG4gICAgY291bnRDbG9uZSA9IG5ldyBVaW50MTZBcnJheShuZXcgQXJyYXlCdWZmZXIodGlsZXMubGVuZ3RoKjIpKTtcclxuICB9XHJcblxyXG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgICBsZXQgY291bnQyID0gY291bnQuYnVmZmVyLmJ5dGVMZW5ndGggIT09IDA/IGNvdW50IDogY291bnRDbG9uZTtcclxuICAgIGxldCBnbG9iYWxfbWF4ID0gTWF0aC5tYXgoLi4uY291bnQyKTtcclxuXHJcbiAgICBpZiAoZ2xvYmFsX21heCAhPT0gMCkge1xyXG4gICAgICB0aWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHRpbGUsIGkpIHtcclxuICAgICAgICBpZiAoY291bnQyW2ldKSB7XHJcbiAgICAgICAgICBsZXQgaCA9IGNvbG9yLmhlYXQoYWxnb3JpdGhtLnJlbGF0aXZlKDAsY291bnQyW2ldLGdsb2JhbF9tYXgpKTtcclxuICAgICAgICAgIHRpbGUucmVuZGVyKGNvbnRleHQsIHVuZGVmaW5lZCwgaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY291bnQuYnVmZmVyLmJ5dGVMZW5ndGggIT09IDApIHtcclxuICAgICAgY291bnRDbG9uZSA9IGNvdW50LnNsaWNlKDApO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGdldENvdW50LFxyXG4gICAgc2V0Q291bnQsXHJcbiAgICBnZXRDb3VudEFycixcclxuICAgIHNldENvdW50QXJyLFxyXG4gICAgcmVzZXQsXHJcbiAgICByZW5kZXJcclxuICB9KTtcclxufVxyXG5cclxuLyogQU5JTUFUSU9OICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFYXNlKHNwZWMgPSB7fSkge1xyXG4gIGxldCBsaW5lYXIgPSBmdW5jdGlvbih0LGIsZSxkKSB7XHJcbiAgICByZXR1cm4gKGUtYikqdC9kICsgYjtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGxpbmVhclxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7U3RvcmFnZX0gZnJvbSAnLi4vc3RvcmFnZS5qcyc7XHJcbmltcG9ydCB7UG9pbnQsIFBvaW50cywgTGluZSwgQ2lyY2xlLCBSZWN0LCBIZWF0bWFwfSBmcm9tICcuLi9nZW8uanMnO1xyXG5pbXBvcnQge1JFUExBWV9GUFN9IGZyb20gJy4uL2V5ZS5qcyc7XHJcbmltcG9ydCB7Rml4YXRpb24sIEdhemVQb2ludCwgR2F6ZVdpbmRvd30gZnJvbSAnLi4vZXllLmpzJztcclxuaW1wb3J0IHtGSVhBVElPTl9DT0xPUiwgU0FDQ0FERV9DT0xPUn0gZnJvbSAnLi4vY29sb3IuanMnO1xyXG5cclxuaW1wb3J0IHtNRENTbmFja2Jhcn0gZnJvbSAnQG1hdGVyaWFsL3NuYWNrYmFyJztcclxuXHJcbmNvbnN0IHNuYWNrYmFyID0gTURDU25hY2tiYXIuYXR0YWNoVG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy1zbmFja2JhcicpKTtcclxuXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IHtyZW5kZXIgYXMgcmVuZGVyVG1wbH0gZnJvbSAnbGl0LWh0bWwnO1xyXG5pbXBvcnQge3BpeGVsbWF0Y2h9IGZyb20gJ3BpeGVsbWF0Y2gnO1xyXG5pbXBvcnQge0RhdGVUaW1lLCBEdXJhdGlvbn0gZnJvbSAnbHV4b24nO1xyXG5cclxuaW1wb3J0IHt0ZW1wbGF0ZX0gZnJvbSAnLi90ZW1wbGF0ZS5qcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXBsYXkoc3BlYykge1xyXG4gIGxldCBzb2NrZXQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGxldCBsYXN0Rml4YXRlZEVsID0gdW5kZWZpbmVkO1xyXG4gIGxldCBsYXN0SW1nID0gdW5kZWZpbmVkO1xyXG4gIGxldCBnYXplSGlzdG9yeSA9IFtdO1xyXG4gIGxldCBkYXRhUG9pbnRzID0gW107XHJcbiAgbGV0IGZpeGF0aW9uQ291bnQgPSAwO1xyXG4gIGxldCBwcmV2Rml4YXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgbGV0IHN0b3JhZ2UgPSBTdG9yYWdlKHt9KTtcclxuICBsZXQgc3VyZmFjZSA9IFJlY3Qoe3g6IDAsIHk6IDAsIHdpZHRoOiAxMjgwLCBoZWlnaHQ6IDcyMH0pO1xyXG4gIGxldCB0aWxlcyA9IHN1cmZhY2UudGlsZXMoKS5tYXAodCA9PiBSZWN0KHQpKTtcclxuICBsZXQgaGVhdG1hcCA9IEhlYXRtYXAoe3RpbGVzOiB0aWxlc30pO1xyXG4gIGxldCBjb250ZXh0O1xyXG4gIGxldCBmcmFtZXMgPSBbXTtcclxuXHJcbiAgbGV0IGhlYXRtYXBWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIGxldCBzaG93SGVhdG1hcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaGVhdG1hcFZpc2libGUgPSAhaGVhdG1hcFZpc2libGU7XHJcbiAgfVxyXG5cclxuICBsZXQgZmlyc3RUaW1lc3RhbXAgPSB1bmRlZmluZWQ7XHJcbiAgbGV0IHJlcXVlc3RJZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgbGV0IGZwcyA9IFJFUExBWV9GUFM7XHJcbiAgbGV0IG5vdyA9IHVuZGVmaW5lZDtcclxuICBsZXQgdGhlbiA9IERhdGUubm93KCk7XHJcbiAgbGV0IGludGVydmFsID0gMTAwMC9mcHM7XHJcbiAgbGV0IGRlbHRhID0gdW5kZWZpbmVkO1xyXG5cclxuICBsZXQgcGxheSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJwbGF5aW5nXCIsIHNwZWMucGxheWluZyk7XHJcbiAgICBpZiAoc3BlYy5wbGF5aW5nKSB7XHJcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVwbGF5KTtcclxuICAgIH1cclxuICAgIHNwZWMucGxheWluZyA9ICFzcGVjLnBsYXlpbmc7XHJcbiAgICByZW5kZXIoc3BlYyk7XHJcbiAgfVxyXG5cclxuICBsZXQgc2Vla1N0eWxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gXCJiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNiOTFmMWYgXCIgKyBzcGVjLnBvc2l0aW9uL3NwZWMubWF4KjEwMCArIFwiJSwgI2E1YTVhNSBcIiArIHNwZWMucG9zaXRpb24vc3BlYy5tYXgqMTAwICsgXCIlLCAjYTVhNWE1IFwiICsgKGZyYW1lcy5sZW5ndGgrc3BlYy5wb3NpdGlvbikvc3BlYy5tYXgqMTAwICsgXCIlLCAjNzU3NTc1IFwiICsgKGZyYW1lcy5sZW5ndGgrc3BlYy5wb3NpdGlvbikvc3BlYy5tYXgqMTAwICsgXCIlKVwiO1xyXG4gIH1cclxuXHJcbiAgbGV0IHNlZWsgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCBwcmV2UG9zaXRpb24gPSBzcGVjLnBvc2l0aW9uO1xyXG4gICAgc3BlYy5wb3NpdGlvbiA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlZWtcIikudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhwcmV2UG9zaXRpb24sIHNwZWMucG9zaXRpb24pO1xyXG4gICAgaGVhdG1hcC5yZXNldCgpO1xyXG4gICAgaWYgKHNwZWMucG9zaXRpb24gPCBwcmV2UG9zaXRpb24pIHtcclxuICAgICAgZnJhbWVzID0gW107XHJcbiAgICAgIGxvYWQoc3BlYy5wb3NpdGlvbik7XHJcbiAgICB9IGVsc2UgaWYgKHNwZWMucG9zaXRpb24gPiBwcmV2UG9zaXRpb24pe1xyXG4gICAgICBsZXQgZGlmZiA9IHNwZWMucG9zaXRpb24gLSBwcmV2UG9zaXRpb247XHJcbiAgICAgIEFycmF5KGRpZmYpLmZpbGwoKS5mb3JFYWNoKGZ1bmN0aW9uKCkgeyBmcmFtZXMuc2hpZnQoKTsgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoc3BlYyk7XHJcbiAgfVxyXG5cclxuICBsZXQgcmVuZGVyID0gZGF0YSA9PiB7XHJcbiAgICByZW5kZXJUbXBsKHRlbXBsYXRlKHsuLi5kYXRhLCBzZWVrU3R5bGU6IHNlZWtTdHlsZSgpfSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3JykpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBPYmplY3QuYXNzaWduKHNwZWMsIHtcclxuICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgcGxheWluZzogZmFsc2UsXHJcbiAgICAgIHBvc2l0aW9uOiAwLFxyXG4gICAgICB0aW1lOiAnMDA6MDA6MDAnLFxyXG4gICAgICB0b3RhbFRpbWU6ICctLTotLTotLScsXHJcbiAgICAgIG1heDogMTAwMCxcclxuICAgICAgcGxheSxcclxuICAgICAgc2VlayxcclxuICAgICAgc2Vla1N0eWxlOiBzZWVrU3R5bGUoKSxcclxuICAgICAgc2hvd0hlYXRtYXBcclxuICAgIH0pO1xyXG4gICAgcmVuZGVyKHNwZWMpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICBsZXQgcmVwbGF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoc3BlYy5wb3NpdGlvbiA9PT0gc3BlYy5tYXgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJubyBmcmFtZVwiKTtcclxuICAgICAgc3BlYy5wbGF5aW5nID0gIXNwZWMucGxheWluZztcclxuICAgICAgc3BlYy5wb3NpdGlvbiA9IDA7XHJcbiAgICAgIGxvYWQoc3BlYy5wb3NpdGlvbik7XHJcbiAgICAgIHNwZWMudGltZSA9IER1cmF0aW9uLmZyb21NaWxsaXMoMCkudG9Gb3JtYXQoXCJoaDptbTpzc1wiKTtcclxuICAgICAgcmVuZGVyKHNwZWMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgIGRlbHRhID0gbm93IC0gdGhlbjtcclxuICAgIGlmIChkZWx0YSA+IGludGVydmFsKSB7XHJcbiAgICAgIHRoZW4gPSBub3cgLSAoZGVsdGEgJSBpbnRlcnZhbCk7XHJcbiAgICAgIGxldCBjb250ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2EnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgbGV0IGZyYW1lID0gZnJhbWVzLnNoaWZ0KCk7XHJcblxyXG4gICAgICBpZiAoZnJhbWUpIHtcclxuICAgICAgICBsZXQgZml4YXRpb24gPSBGaXhhdGlvbih7eDogZnJhbWUueCwgeTogZnJhbWUueX0pO1xyXG5cclxuICAgICAgICBsZXQgY291bnQgPSBoZWF0bWFwLmdldENvdW50QXJyKCk7XHJcbiAgICAgICAgbGV0IGdhemVfYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDIqNCk7XHJcbiAgICAgICAgbGV0IGdhemUgPSBuZXcgRmxvYXQzMkFycmF5KGdhemVfYnVmZmVyKTtcclxuICAgICAgICBnYXplWzBdID0gZml4YXRpb24uZ2V0WCgpO1xyXG4gICAgICAgIGdhemVbMV0gPSBmaXhhdGlvbi5nZXRZKCk7XHJcblxyXG4gICAgICAgIGlmIChoZWF0bWFwLmdldENvdW50QXJyKCkuYnVmZmVyLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtjb3VudDogY291bnQsIGdhemU6IGdhemVfYnVmZmVyfSwgW2NvdW50LmJ1ZmZlciwgZ2F6ZV9idWZmZXJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInZhbHVlXCIsIGZyYW1lKTtcclxuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLDAsMCwxMjgwLDcyMCk7XHJcblxyXG4gICAgICAgICAgQ2lyY2xlKHt4OiBmaXhhdGlvbi5nZXRYKCksIHk6IGZpeGF0aW9uLmdldFkoKSwgcjogMjB9KS5yZW5kZXIoY29udGV4dCwgRklYQVRJT05fQ09MT1IpO1xyXG5cclxuICAgICAgICAgIGlmIChwcmV2Rml4YXRpb24pIHtcclxuICAgICAgICAgICAgTGluZSh7eDE6IHByZXZGaXhhdGlvbi5nZXRYKCksIHkxOiBwcmV2Rml4YXRpb24uZ2V0WSgpLCB4MjogZml4YXRpb24uZ2V0WCgpLCB5MjogZml4YXRpb24uZ2V0WSgpfSkucmVuZGVyKGNvbnRleHQsIFNBQ0NBREVfQ09MT1IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJldkZpeGF0aW9uID0gZml4YXRpb247XHJcblxyXG4gICAgICAgICAgaWYgKGhlYXRtYXBWaXNpYmxlKSB7IGhlYXRtYXAucmVuZGVyKGNvbnRleHQpOyB9XHJcbiAgICAgICAgICBzcGVjLnRpbWUgPSBEdXJhdGlvbi5mcm9tTWlsbGlzKChmcmFtZS50aW1lc3RhbXAgLSBmaXJzdFRpbWVzdGFtcCkpLnRvRm9ybWF0KFwiaGg6bW06c3NcIik7XHJcbiAgICAgICAgICBzcGVjLnBvc2l0aW9uKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZy5zcmMgPSBmcmFtZS5pbWc7XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyKHNwZWMpO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcGxheSk7XHJcbiAgfVxyXG5cclxuICBsZXQgbG9hZCA9IGZ1bmN0aW9uKHN0YXJ0KSB7XHJcbiAgICBmb3IgKGxldCBmcmFtZT1zdGFydDsgZnJhbWUgPD0gc3BlYy5tYXg7IGZyYW1lKyspIHtcclxuICAgICAgc3RvcmFnZS5nZXQoZnJhbWUsICh2KSA9PiB7XHJcbiAgICAgICAgaWYgKHYpIHtcclxuICAgICAgICAgIGZyYW1lcy5wdXNoKHYpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhmcmFtZXMubGVuZ3RoKTtcclxuICAgICAgICAgIGlmIChmcmFtZXMubGVuZ3RoID09PSBzcGVjLm1heCkge1xyXG4gICAgICAgICAgICBzcGVjLnRvdGFsVGltZSA9IER1cmF0aW9uLmZyb21NaWxsaXMoKGZyYW1lc1tzcGVjLm1heC0xXS50aW1lc3RhbXAgLSBmcmFtZXNbMF0udGltZXN0YW1wKSkudG9Gb3JtYXQoXCJoaDptbTpzc1wiKTtcclxuICAgICAgICAgICAgZmlyc3RUaW1lc3RhbXAgPSBmcmFtZXNbMF0udGltZXN0YW1wO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3BlYy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgcmVuZGVyKHNwZWMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgd29ya2VyID0gdW5kZWZpbmVkO1xyXG5cclxuICBsZXQgY29ubmVjdCA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgUmVjdCh7eDogMCwgeTogMCwgd2lkdGg6IGNvbnRleHQuY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuY2FudmFzLmhlaWdodH0pLmNsZWFyKGNvbnRleHQpO1xyXG5cclxuICAgIHdvcmtlciA9IG5ldyBXb3JrZXIoXCIvaGVhdG1hcC5qc1wiKTtcclxuICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJvbm1lc3NhZ2VcIiwgZS5kYXRhKTtcclxuICAgICAgaGVhdG1hcC5zZXRDb3VudEFycihlLmRhdGEpO1xyXG4gICAgfVxyXG4gICAgd29ya2VyLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7IGNvbnNvbGUubG9nKFwib25lcnJvclwiLCBlKTsgfVxyXG5cclxuICAgIHN0b3JhZ2UuZ2V0S2V5cyhcImdhemVcIiwgKGtleXMpID0+IHtcclxuICAgICAgc3BlYy5tYXggPSBrZXlzLmxlbmd0aDtcclxuICAgICAgaWYgKHNwZWMubWF4ID09PSAwKSB7XHJcbiAgICAgICAgc25hY2tiYXIubGFiZWxUZXh0ID0gJ05vIGRhdGEgZm91bmQuIFJlY29yZCBvciBpbXBvcnQgbmV3IGRhdGEuJztcclxuICAgICAgICBzbmFja2Jhci5vcGVuKCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJtYXhcIiwgc3BlYy5tYXgpO1xyXG4gICAgICBsb2FkKDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9mb3IgKGxldCBpPTA7IGkgPCAyMDA7IGkrKykge1xyXG4gICAgICAvL1JlY3Qoe3g6IDAsIHk6IDAsIHdpZHRoOiBjb250ZXh0LmNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjb250ZXh0LmNhbnZhcy5oZWlnaHR9KS5jbGVhcihjb250ZXh0KTtcclxuICAgICAgLy9sZXQgcCA9IFBvaW50KHt4OiB2YWx1ZS54LCB5OiB2YWx1ZS55fSk7XHJcbiAgICAgIC8vcC5yZW5kZXIoY29udGV4dCwgJ3JnYmEoMjAwLDAsMCwwLjg1KScpO1xyXG5cclxuICAgICAgLy9pZiAoZ2F6ZUhpc3RvcnkubGVuZ3RoID09PSAzMCkgeyBnYXplSGlzdG9yeS5zaGlmdCgpOyB9XHJcbiAgICAgIC8vZ2F6ZUhpc3RvcnkucHVzaChwKTtcclxuXHJcbiAgICAgIC8vUmVjdCh7eDogMCwgeTogMCwgd2lkdGg6IGNvbnRleHQuY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuY2FudmFzLmhlaWdodH0pLmNsZWFyKGNvbnRleHQpO1xyXG4gICAgICAvL2ZpeGF0aW9uQ291bnQgPSAwO1xyXG4gICAgICAvL2ZpeGF0aW9uID0gZml4YXRpb24uZ2V0Rml4YXRpb24oKTtcclxuICAgICAgLy9DaXJjbGUoe3g6IGZpeGF0aW9uLngsIHk6IGZpeGF0aW9uLnksIHI6IDIwfSkucmVuZGVyKGNvbnRleHQsICdyZ2JhKDI1NSwyNTUsMjU1LDAuODUpJyk7XHJcblxyXG4gICAgICAvL2lmIChwcmV2Rml4YXRpb24pIHtcclxuICAgICAgLy8gIExpbmUoe3gxOiBwcmV2Rml4YXRpb24ueCwgeTE6IHByZXZGaXhhdGlvbi55LCB4MjogZml4YXRpb24ueCwgeTI6IGZpeGF0aW9uLnl9KS5yZW5kZXIoY29udGV4dCwgJ3JnYmEoMjU1LDI1NSwyNTUsMC44NSknKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vcHJldkZpeGF0aW9uID0gZml4YXRpb247XHJcblxyXG4gICAgICAvL2ZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgLy8gIGlmICh0aWxlc1tpXS5jb250YWluc1BvaW50KGZpeGF0aW9uLngsIGZpeGF0aW9uLnkpKSB7XHJcbiAgICAgIC8vICAgIGhlYXRtYXAuc2V0Q291bnQoaSwgaGVhdG1hcC5nZXRDb3VudChpKSsxKTtcclxuICAgICAgLy8gIH1cclxuICAgICAgLy99XHJcblxyXG4gICAgICAvL2hlYXRtYXAucmVuZGVyKGNvbnRleHQpO1xyXG5cclxuICAgICAgLy9Qb2ludHMoe3BvaW50czogZ2F6ZUhpc3Rvcnl9KS5yZW5kZXIoY29udGV4dCwgJ3JnYmEoMjAwLDAsMCwwLjg1KScpO1xyXG4gICAgICAvL3RpbGVzLmZvckVhY2godCA9PiB0LnJlbmRlcihjb250ZXh0LCAncmdiYSgyNTUsMjU1LDI1NSwwLjg1KScpKTtcclxuXHJcbiAgICAgIC8vY29uc3QgY2FudmFzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAvL2NhbnZhczIud2lkdGggPSAxMDA7XHJcbiAgICAgIC8vY2FudmFzMi5oZWlnaHQgPSAxMDA7XHJcbiAgICAgIC8vY29uc3QgY29udGV4dDIgPSBjYW52YXMyLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAvL2NvbnRleHQyLmRyYXdJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJyksIDAsIDAsIGNhbnZhczIud2lkdGgsIGNhbnZhczIuaGVpZ2h0KTtcclxuICAgICAgLy9sZXQgaW1nMiA9IHVuZGVmaW5lZDtcclxuICAgICAgLy9pZiAobGFzdEltZykge1xyXG4gICAgICAvLyAgaW1nMiA9IGNvbnRleHQyLmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMyLndpZHRoLCBjYW52YXMyLmhlaWdodCk7XHJcbiAgICAgICAgLy9waXhlbG1hdGNoKGxhc3RJbWcuZGF0YSwgaW1nMi5kYXRhLCBudWxsLCBjYW52YXMyLndpZHRoLCBjYW52YXMyLmhlaWdodCwge3RocmVzaG9sZDogMC4xfSk7XHJcbiAgICAgIC8vfVxyXG4gICAgICAvL2xhc3RJbWcgPSBjb250ZXh0Mi5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzMi53aWR0aCwgY2FudmFzMi5oZWlnaHQpO1xyXG4gICAgLy99XHJcbiAgfVxyXG5cclxuICBsZXQgZGlzY29ubmVjdCA9ICgpID0+IHt9O1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBjb25uZWN0LFxyXG4gICAgZGlzY29ubmVjdFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7aHRtbH0gZnJvbSAnbGl0LWh0bWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gKGRhdGEpID0+IGh0bWxgXHJcbiAgPGRpdiBjbGFzcz1cIm1kYy1sYXlvdXQtZ3JpZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1kYy1sYXlvdXQtZ3JpZF9faW5uZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1sYXlvdXQtZ3JpZF9fY2VsbC0tc3Bhbi04XCI+XHJcbiAgICAgICAgPGNhbnZhcyBAY2xpY2s9XCIke2Z1bGxzY3JlZW59XCIgaWQ9XCJhXCIgd2lkdGg9XCIxMjgwXCIgaGVpZ2h0PVwiNzIwXCI+PC9jYW52YXM+XHJcbiAgICAgICAgPGRpdiBpZD1cImNhbnZhcy1jdHJsXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIiR7ZGF0YS5wbGF5fVwiID9kaXNhYmxlZD1cIiR7IWRhdGEubG9hZGVkfVwiIGNsYXNzPVwibWRjLWljb24tYnV0dG9uIG1hdGVyaWFsLWljb25zXCI+JHtkYXRhLnBsYXlpbmc/IGh0bWxgc3RvcGA6IGh0bWxgcGxheV9hcnJvd2B9PC9idXR0b24+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWVrXCIgQGlucHV0PVwiJHtkYXRhLnNlZWt9XCIgLnZhbHVlPVwiJHtkYXRhLnBvc2l0aW9ufVwiIG1heD1cIiR7ZGF0YS5tYXh9XCIgdHlwZT1cInJhbmdlXCIgc3R5bGU9XCIke2RhdGEuc2Vla1N0eWxlfVwiPlxyXG4gICAgICAgICAgPHNwYW4gaWQ9XCJ0aW1lXCI+JHtkYXRhLnRpbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gaWQ9XCJ0b3RhbC10aW1lXCI+Jm5ic3A7LyAke2RhdGEudG90YWxUaW1lfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtbGF5b3V0LWdyaWRfX2NlbGwtLXNwYW4tNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXN3aXRjaF9fdHJhY2tcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoX190aHVtYi11bmRlcmxheVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXN3aXRjaF9fdGh1bWJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgQGNsaWNrPVwiJHtkYXRhLnNob3dIZWF0bWFwfVwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmFzaWMtc3dpdGNoXCIgY2xhc3M9XCJtZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbFwiIHJvbGU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiYmFzaWMtc3dpdGNoXCI+U2hvdyBIZWF0bWFwPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuYDtcclxuXHJcbmxldCBmdWxsc2NyZWVuID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhJykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICBjb250ZXh0LmNhbnZhcy53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbigpXHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIFN0b3JhZ2Uoc3BlYyA9IHt9KSB7XHJcbiAgbGV0IGlkID0gMDtcclxuXHJcbiAgbGV0IHB1dCA9IGZ1bmN0aW9uKGRvY3VtZW50KSB7XHJcbiAgICBjYWNoZXMub3BlbignZ2F6ZScpLnRoZW4oKGNhY2hlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjYWNoZS5wdXQoJy9nYXplLycgKyBpZCwgbmV3IFJlc3BvbnNlKGRvY3VtZW50KSk7XHJcbiAgICAgIGlkID0gaWQgKyAxO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxldCBnZXQgPSBhc3luYyBmdW5jdGlvbihpZCwgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4oJ2dhemUnKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGUubWF0Y2gobmV3IFJlcXVlc3QoJy9nYXplLycgKyBpZCkpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbigodmFsdWUpID0+IGNhbGxiYWNrKHZhbHVlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjayh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGNsZWFyID0gYXN5bmMgZnVuY3Rpb24oY2FjaGVOYW1lLCBjYWxsYmFjaykge1xyXG4gICAgY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpLnRoZW4oKGRlbGV0ZWQpID0+IGNhbGxiYWNrKGRlbGV0ZWQpKTtcclxuICB9XHJcblxyXG4gIGxldCBnZXRLZXlzID0gYXN5bmMgZnVuY3Rpb24oY2FjaGVOYW1lLCBjYWxsYmFjaykge1xyXG4gICAgY29uc3QgY2FjaGUgPSBhd2FpdCBjYWNoZXMub3BlbihjYWNoZU5hbWUpO1xyXG4gICAgY2FjaGUua2V5cygpLnRoZW4oKGtleXMpID0+IGNhbGxiYWNrKGtleXMpKTtcclxuICB9XHJcblxyXG4gIGxldCB1c2FnZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLnN0b3JhZ2UuZXN0aW1hdGUoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIHB1dCxcclxuICAgIGdldCxcclxuICAgIGNsZWFyLFxyXG4gICAgZ2V0S2V5cyxcclxuICAgIHVzYWdlXHJcbiAgfSlcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcGl4ZWxtYXRjaDtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGhyZXNob2xkOiAwLjEsICAgICAgICAgLy8gbWF0Y2hpbmcgdGhyZXNob2xkICgwIHRvIDEpOyBzbWFsbGVyIGlzIG1vcmUgc2Vuc2l0aXZlXG4gICAgaW5jbHVkZUFBOiBmYWxzZSwgICAgICAgLy8gd2hldGhlciB0byBza2lwIGFudGktYWxpYXNpbmcgZGV0ZWN0aW9uXG4gICAgYWxwaGE6IDAuMSwgICAgICAgICAgICAgLy8gb3BhY2l0eSBvZiBvcmlnaW5hbCBpbWFnZSBpbiBkaWZmIG91cHV0XG4gICAgYWFDb2xvcjogWzI1NSwgMjU1LCAwXSwgLy8gY29sb3Igb2YgYW50aS1hbGlhc2VkIHBpeGVscyBpbiBkaWZmIG91dHB1dFxuICAgIGRpZmZDb2xvcjogWzI1NSwgMCwgMF0sIC8vIGNvbG9yIG9mIGRpZmZlcmVudCBwaXhlbHMgaW4gZGlmZiBvdXRwdXRcbiAgICBkaWZmQ29sb3JBbHQ6IG51bGwsICAgICAvLyB3aGV0aGVyIHRvIGRldGVjdCBkYXJrIG9uIGxpZ2h0IGRpZmZlcmVuY2VzIGJldHdlZW4gaW1nMSBhbmQgaW1nMiBhbmQgc2V0IGFuIGFsdGVybmF0aXZlIGNvbG9yIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiB0aGUgdHdvXG4gICAgZGlmZk1hc2s6IGZhbHNlICAgICAgICAgLy8gZHJhdyB0aGUgZGlmZiBvdmVyIGEgdHJhbnNwYXJlbnQgYmFja2dyb3VuZCAoYSBtYXNrKVxufTtcblxuZnVuY3Rpb24gcGl4ZWxtYXRjaChpbWcxLCBpbWcyLCBvdXRwdXQsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcblxuICAgIGlmICghaXNQaXhlbERhdGEoaW1nMSkgfHwgIWlzUGl4ZWxEYXRhKGltZzIpIHx8IChvdXRwdXQgJiYgIWlzUGl4ZWxEYXRhKG91dHB1dCkpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltYWdlIGRhdGE6IFVpbnQ4QXJyYXksIFVpbnQ4Q2xhbXBlZEFycmF5IG9yIEJ1ZmZlciBleHBlY3RlZC4nKTtcblxuICAgIGlmIChpbWcxLmxlbmd0aCAhPT0gaW1nMi5sZW5ndGggfHwgKG91dHB1dCAmJiBvdXRwdXQubGVuZ3RoICE9PSBpbWcxLmxlbmd0aCkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW1hZ2Ugc2l6ZXMgZG8gbm90IG1hdGNoLicpO1xuXG4gICAgaWYgKGltZzEubGVuZ3RoICE9PSB3aWR0aCAqIGhlaWdodCAqIDQpIHRocm93IG5ldyBFcnJvcignSW1hZ2UgZGF0YSBzaXplIGRvZXMgbm90IG1hdGNoIHdpZHRoL2hlaWdodC4nKTtcblxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAvLyBjaGVjayBpZiBpbWFnZXMgYXJlIGlkZW50aWNhbFxuICAgIGNvbnN0IGxlbiA9IHdpZHRoICogaGVpZ2h0O1xuICAgIGNvbnN0IGEzMiA9IG5ldyBVaW50MzJBcnJheShpbWcxLmJ1ZmZlciwgaW1nMS5ieXRlT2Zmc2V0LCBsZW4pO1xuICAgIGNvbnN0IGIzMiA9IG5ldyBVaW50MzJBcnJheShpbWcyLmJ1ZmZlciwgaW1nMi5ieXRlT2Zmc2V0LCBsZW4pO1xuICAgIGxldCBpZGVudGljYWwgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoYTMyW2ldICE9PSBiMzJbaV0pIHsgaWRlbnRpY2FsID0gZmFsc2U7IGJyZWFrOyB9XG4gICAgfVxuICAgIGlmIChpZGVudGljYWwpIHsgLy8gZmFzdCBwYXRoIGlmIGlkZW50aWNhbFxuICAgICAgICBpZiAob3V0cHV0ICYmICFvcHRpb25zLmRpZmZNYXNrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSBkcmF3R3JheVBpeGVsKGltZzEsIDQgKiBpLCBvcHRpb25zLmFscGhhLCBvdXRwdXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIG1heGltdW0gYWNjZXB0YWJsZSBzcXVhcmUgZGlzdGFuY2UgYmV0d2VlbiB0d28gY29sb3JzO1xuICAgIC8vIDM1MjE1IGlzIHRoZSBtYXhpbXVtIHBvc3NpYmxlIHZhbHVlIGZvciB0aGUgWUlRIGRpZmZlcmVuY2UgbWV0cmljXG4gICAgY29uc3QgbWF4RGVsdGEgPSAzNTIxNSAqIG9wdGlvbnMudGhyZXNob2xkICogb3B0aW9ucy50aHJlc2hvbGQ7XG4gICAgbGV0IGRpZmYgPSAwO1xuXG4gICAgLy8gY29tcGFyZSBlYWNoIHBpeGVsIG9mIG9uZSBpbWFnZSBhZ2FpbnN0IHRoZSBvdGhlciBvbmVcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuXG4gICAgICAgICAgICBjb25zdCBwb3MgPSAoeSAqIHdpZHRoICsgeCkgKiA0O1xuXG4gICAgICAgICAgICAvLyBzcXVhcmVkIFlVViBkaXN0YW5jZSBiZXR3ZWVuIGNvbG9ycyBhdCB0aGlzIHBpeGVsIHBvc2l0aW9uLCBuZWdhdGl2ZSBpZiB0aGUgaW1nMiBwaXhlbCBpcyBkYXJrZXJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY29sb3JEZWx0YShpbWcxLCBpbWcyLCBwb3MsIHBvcyk7XG5cbiAgICAgICAgICAgIC8vIHRoZSBjb2xvciBkaWZmZXJlbmNlIGlzIGFib3ZlIHRoZSB0aHJlc2hvbGRcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPiBtYXhEZWx0YSkge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGl0J3MgYSByZWFsIHJlbmRlcmluZyBkaWZmZXJlbmNlIG9yIGp1c3QgYW50aS1hbGlhc2luZ1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5pbmNsdWRlQUEgJiYgKGFudGlhbGlhc2VkKGltZzEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGltZzIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW50aWFsaWFzZWQoaW1nMiwgeCwgeSwgd2lkdGgsIGhlaWdodCwgaW1nMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uZSBvZiB0aGUgcGl4ZWxzIGlzIGFudGktYWxpYXNpbmc7IGRyYXcgYXMgeWVsbG93IGFuZCBkbyBub3QgY291bnQgYXMgZGlmZmVyZW5jZVxuICAgICAgICAgICAgICAgICAgICAvLyBub3RlIHRoYXQgd2UgZG8gbm90IGluY2x1ZGUgc3VjaCBwaXhlbHMgaW4gYSBtYXNrXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXQgJiYgIW9wdGlvbnMuZGlmZk1hc2spIGRyYXdQaXhlbChvdXRwdXQsIHBvcywgLi4ub3B0aW9ucy5hYUNvbG9yKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvdW5kIHN1YnN0YW50aWFsIGRpZmZlcmVuY2Ugbm90IGNhdXNlZCBieSBhbnRpLWFsaWFzaW5nOyBkcmF3IGl0IGFzIHN1Y2hcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhd1BpeGVsKG91dHB1dCwgcG9zLCAuLi4oZGVsdGEgPCAwICYmIG9wdGlvbnMuZGlmZkNvbG9yQWx0IHx8IG9wdGlvbnMuZGlmZkNvbG9yKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGlmZisrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAvLyBwaXhlbHMgYXJlIHNpbWlsYXI7IGRyYXcgYmFja2dyb3VuZCBhcyBncmF5c2NhbGUgaW1hZ2UgYmxlbmRlZCB3aXRoIHdoaXRlXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmRpZmZNYXNrKSBkcmF3R3JheVBpeGVsKGltZzEsIHBvcywgb3B0aW9ucy5hbHBoYSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVudCBwaXhlbHNcbiAgICByZXR1cm4gZGlmZjtcbn1cblxuZnVuY3Rpb24gaXNQaXhlbERhdGEoYXJyKSB7XG4gICAgLy8gd29yayBhcm91bmQgaW5zdGFuY2VvZiBVaW50OEFycmF5IG5vdCB3b3JraW5nIHByb3Blcmx5IGluIHNvbWUgSmVzdCBlbnZpcm9ubWVudHNcbiAgICByZXR1cm4gQXJyYXlCdWZmZXIuaXNWaWV3KGFycikgJiYgYXJyLmNvbnN0cnVjdG9yLkJZVEVTX1BFUl9FTEVNRU5UID09PSAxO1xufVxuXG4vLyBjaGVjayBpZiBhIHBpeGVsIGlzIGxpa2VseSBhIHBhcnQgb2YgYW50aS1hbGlhc2luZztcbi8vIGJhc2VkIG9uIFwiQW50aS1hbGlhc2VkIFBpeGVsIGFuZCBJbnRlbnNpdHkgU2xvcGUgRGV0ZWN0b3JcIiBwYXBlciBieSBWLiBWeXNuaWF1c2thcywgMjAwOVxuXG5mdW5jdGlvbiBhbnRpYWxpYXNlZChpbWcsIHgxLCB5MSwgd2lkdGgsIGhlaWdodCwgaW1nMikge1xuICAgIGNvbnN0IHgwID0gTWF0aC5tYXgoeDEgLSAxLCAwKTtcbiAgICBjb25zdCB5MCA9IE1hdGgubWF4KHkxIC0gMSwgMCk7XG4gICAgY29uc3QgeDIgPSBNYXRoLm1pbih4MSArIDEsIHdpZHRoIC0gMSk7XG4gICAgY29uc3QgeTIgPSBNYXRoLm1pbih5MSArIDEsIGhlaWdodCAtIDEpO1xuICAgIGNvbnN0IHBvcyA9ICh5MSAqIHdpZHRoICsgeDEpICogNDtcbiAgICBsZXQgemVyb2VzID0geDEgPT09IHgwIHx8IHgxID09PSB4MiB8fCB5MSA9PT0geTAgfHwgeTEgPT09IHkyID8gMSA6IDA7XG4gICAgbGV0IG1pbiA9IDA7XG4gICAgbGV0IG1heCA9IDA7XG4gICAgbGV0IG1pblgsIG1pblksIG1heFgsIG1heFk7XG5cbiAgICAvLyBnbyB0aHJvdWdoIDggYWRqYWNlbnQgcGl4ZWxzXG4gICAgZm9yIChsZXQgeCA9IHgwOyB4IDw9IHgyOyB4KyspIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IHkwOyB5IDw9IHkyOyB5KyspIHtcbiAgICAgICAgICAgIGlmICh4ID09PSB4MSAmJiB5ID09PSB5MSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGJyaWdodG5lc3MgZGVsdGEgYmV0d2VlbiB0aGUgY2VudGVyIHBpeGVsIGFuZCBhZGphY2VudCBvbmVcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY29sb3JEZWx0YShpbWcsIGltZywgcG9zLCAoeSAqIHdpZHRoICsgeCkgKiA0LCB0cnVlKTtcblxuICAgICAgICAgICAgLy8gY291bnQgdGhlIG51bWJlciBvZiBlcXVhbCwgZGFya2VyIGFuZCBicmlnaHRlciBhZGphY2VudCBwaXhlbHNcbiAgICAgICAgICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHplcm9lcysrO1xuICAgICAgICAgICAgICAgIC8vIGlmIGZvdW5kIG1vcmUgdGhhbiAyIGVxdWFsIHNpYmxpbmdzLCBpdCdzIGRlZmluaXRlbHkgbm90IGFudGktYWxpYXNpbmdcbiAgICAgICAgICAgICAgICBpZiAoemVyb2VzID4gMikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAvLyByZW1lbWJlciB0aGUgZGFya2VzdCBwaXhlbFxuICAgICAgICAgICAgfSBlbHNlIGlmIChkZWx0YSA8IG1pbikge1xuICAgICAgICAgICAgICAgIG1pbiA9IGRlbHRhO1xuICAgICAgICAgICAgICAgIG1pblggPSB4O1xuICAgICAgICAgICAgICAgIG1pblkgPSB5O1xuXG4gICAgICAgICAgICAvLyByZW1lbWJlciB0aGUgYnJpZ2h0ZXN0IHBpeGVsXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlbHRhID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gZGVsdGE7XG4gICAgICAgICAgICAgICAgbWF4WCA9IHg7XG4gICAgICAgICAgICAgICAgbWF4WSA9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSBhcmUgbm8gYm90aCBkYXJrZXIgYW5kIGJyaWdodGVyIHBpeGVscyBhbW9uZyBzaWJsaW5ncywgaXQncyBub3QgYW50aS1hbGlhc2luZ1xuICAgIGlmIChtaW4gPT09IDAgfHwgbWF4ID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBpZiBlaXRoZXIgdGhlIGRhcmtlc3Qgb3IgdGhlIGJyaWdodGVzdCBwaXhlbCBoYXMgMysgZXF1YWwgc2libGluZ3MgaW4gYm90aCBpbWFnZXNcbiAgICAvLyAoZGVmaW5pdGVseSBub3QgYW50aS1hbGlhc2VkKSwgdGhpcyBwaXhlbCBpcyBhbnRpLWFsaWFzZWRcbiAgICByZXR1cm4gKGhhc01hbnlTaWJsaW5ncyhpbWcsIG1pblgsIG1pblksIHdpZHRoLCBoZWlnaHQpICYmIGhhc01hbnlTaWJsaW5ncyhpbWcyLCBtaW5YLCBtaW5ZLCB3aWR0aCwgaGVpZ2h0KSkgfHxcbiAgICAgICAgICAgKGhhc01hbnlTaWJsaW5ncyhpbWcsIG1heFgsIG1heFksIHdpZHRoLCBoZWlnaHQpICYmIGhhc01hbnlTaWJsaW5ncyhpbWcyLCBtYXhYLCBtYXhZLCB3aWR0aCwgaGVpZ2h0KSk7XG59XG5cbi8vIGNoZWNrIGlmIGEgcGl4ZWwgaGFzIDMrIGFkamFjZW50IHBpeGVscyBvZiB0aGUgc2FtZSBjb2xvci5cbmZ1bmN0aW9uIGhhc01hbnlTaWJsaW5ncyhpbWcsIHgxLCB5MSwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHgwID0gTWF0aC5tYXgoeDEgLSAxLCAwKTtcbiAgICBjb25zdCB5MCA9IE1hdGgubWF4KHkxIC0gMSwgMCk7XG4gICAgY29uc3QgeDIgPSBNYXRoLm1pbih4MSArIDEsIHdpZHRoIC0gMSk7XG4gICAgY29uc3QgeTIgPSBNYXRoLm1pbih5MSArIDEsIGhlaWdodCAtIDEpO1xuICAgIGNvbnN0IHBvcyA9ICh5MSAqIHdpZHRoICsgeDEpICogNDtcbiAgICBsZXQgemVyb2VzID0geDEgPT09IHgwIHx8IHgxID09PSB4MiB8fCB5MSA9PT0geTAgfHwgeTEgPT09IHkyID8gMSA6IDA7XG5cbiAgICAvLyBnbyB0aHJvdWdoIDggYWRqYWNlbnQgcGl4ZWxzXG4gICAgZm9yIChsZXQgeCA9IHgwOyB4IDw9IHgyOyB4KyspIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IHkwOyB5IDw9IHkyOyB5KyspIHtcbiAgICAgICAgICAgIGlmICh4ID09PSB4MSAmJiB5ID09PSB5MSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHBvczIgPSAoeSAqIHdpZHRoICsgeCkgKiA0O1xuICAgICAgICAgICAgaWYgKGltZ1twb3NdID09PSBpbWdbcG9zMl0gJiZcbiAgICAgICAgICAgICAgICBpbWdbcG9zICsgMV0gPT09IGltZ1twb3MyICsgMV0gJiZcbiAgICAgICAgICAgICAgICBpbWdbcG9zICsgMl0gPT09IGltZ1twb3MyICsgMl0gJiZcbiAgICAgICAgICAgICAgICBpbWdbcG9zICsgM10gPT09IGltZ1twb3MyICsgM10pIHplcm9lcysrO1xuXG4gICAgICAgICAgICBpZiAoemVyb2VzID4gMikgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIGNhbGN1bGF0ZSBjb2xvciBkaWZmZXJlbmNlIGFjY29yZGluZyB0byB0aGUgcGFwZXIgXCJNZWFzdXJpbmcgcGVyY2VpdmVkIGNvbG9yIGRpZmZlcmVuY2Vcbi8vIHVzaW5nIFlJUSBOVFNDIHRyYW5zbWlzc2lvbiBjb2xvciBzcGFjZSBpbiBtb2JpbGUgYXBwbGljYXRpb25zXCIgYnkgWS4gS290c2FyZW5rbyBhbmQgRi4gUmFtb3NcblxuZnVuY3Rpb24gY29sb3JEZWx0YShpbWcxLCBpbWcyLCBrLCBtLCB5T25seSkge1xuICAgIGxldCByMSA9IGltZzFbayArIDBdO1xuICAgIGxldCBnMSA9IGltZzFbayArIDFdO1xuICAgIGxldCBiMSA9IGltZzFbayArIDJdO1xuICAgIGxldCBhMSA9IGltZzFbayArIDNdO1xuXG4gICAgbGV0IHIyID0gaW1nMlttICsgMF07XG4gICAgbGV0IGcyID0gaW1nMlttICsgMV07XG4gICAgbGV0IGIyID0gaW1nMlttICsgMl07XG4gICAgbGV0IGEyID0gaW1nMlttICsgM107XG5cbiAgICBpZiAoYTEgPT09IGEyICYmIHIxID09PSByMiAmJiBnMSA9PT0gZzIgJiYgYjEgPT09IGIyKSByZXR1cm4gMDtcblxuICAgIGlmIChhMSA8IDI1NSkge1xuICAgICAgICBhMSAvPSAyNTU7XG4gICAgICAgIHIxID0gYmxlbmQocjEsIGExKTtcbiAgICAgICAgZzEgPSBibGVuZChnMSwgYTEpO1xuICAgICAgICBiMSA9IGJsZW5kKGIxLCBhMSk7XG4gICAgfVxuXG4gICAgaWYgKGEyIDwgMjU1KSB7XG4gICAgICAgIGEyIC89IDI1NTtcbiAgICAgICAgcjIgPSBibGVuZChyMiwgYTIpO1xuICAgICAgICBnMiA9IGJsZW5kKGcyLCBhMik7XG4gICAgICAgIGIyID0gYmxlbmQoYjIsIGEyKTtcbiAgICB9XG5cbiAgICBjb25zdCB5MSA9IHJnYjJ5KHIxLCBnMSwgYjEpO1xuICAgIGNvbnN0IHkyID0gcmdiMnkocjIsIGcyLCBiMik7XG4gICAgY29uc3QgeSA9IHkxIC0geTI7XG5cbiAgICBpZiAoeU9ubHkpIHJldHVybiB5OyAvLyBicmlnaHRuZXNzIGRpZmZlcmVuY2Ugb25seVxuXG4gICAgY29uc3QgaSA9IHJnYjJpKHIxLCBnMSwgYjEpIC0gcmdiMmkocjIsIGcyLCBiMik7XG4gICAgY29uc3QgcSA9IHJnYjJxKHIxLCBnMSwgYjEpIC0gcmdiMnEocjIsIGcyLCBiMik7XG5cbiAgICBjb25zdCBkZWx0YSA9IDAuNTA1MyAqIHkgKiB5ICsgMC4yOTkgKiBpICogaSArIDAuMTk1NyAqIHEgKiBxO1xuXG4gICAgLy8gZW5jb2RlIHdoZXRoZXIgdGhlIHBpeGVsIGxpZ2h0ZW5zIG9yIGRhcmtlbnMgaW4gdGhlIHNpZ25cbiAgICByZXR1cm4geTEgPiB5MiA/IC1kZWx0YSA6IGRlbHRhO1xufVxuXG5mdW5jdGlvbiByZ2IyeShyLCBnLCBiKSB7IHJldHVybiByICogMC4yOTg4OTUzMSArIGcgKiAwLjU4NjYyMjQ3ICsgYiAqIDAuMTE0NDgyMjM7IH1cbmZ1bmN0aW9uIHJnYjJpKHIsIGcsIGIpIHsgcmV0dXJuIHIgKiAwLjU5NTk3Nzk5IC0gZyAqIDAuMjc0MTc2MTAgLSBiICogMC4zMjE4MDE4OTsgfVxuZnVuY3Rpb24gcmdiMnEociwgZywgYikgeyByZXR1cm4gciAqIDAuMjExNDcwMTcgLSBnICogMC41MjI2MTcxMSArIGIgKiAwLjMxMTE0Njk0OyB9XG5cbi8vIGJsZW5kIHNlbWktdHJhbnNwYXJlbnQgY29sb3Igd2l0aCB3aGl0ZVxuZnVuY3Rpb24gYmxlbmQoYywgYSkge1xuICAgIHJldHVybiAyNTUgKyAoYyAtIDI1NSkgKiBhO1xufVxuXG5mdW5jdGlvbiBkcmF3UGl4ZWwob3V0cHV0LCBwb3MsIHIsIGcsIGIpIHtcbiAgICBvdXRwdXRbcG9zICsgMF0gPSByO1xuICAgIG91dHB1dFtwb3MgKyAxXSA9IGc7XG4gICAgb3V0cHV0W3BvcyArIDJdID0gYjtcbiAgICBvdXRwdXRbcG9zICsgM10gPSAyNTU7XG59XG5cbmZ1bmN0aW9uIGRyYXdHcmF5UGl4ZWwoaW1nLCBpLCBhbHBoYSwgb3V0cHV0KSB7XG4gICAgY29uc3QgciA9IGltZ1tpICsgMF07XG4gICAgY29uc3QgZyA9IGltZ1tpICsgMV07XG4gICAgY29uc3QgYiA9IGltZ1tpICsgMl07XG4gICAgY29uc3QgdmFsID0gYmxlbmQocmdiMnkociwgZywgYiksIGFscGhhICogaW1nW2kgKyAzXSAvIDI1NSk7XG4gICAgZHJhd1BpeGVsKG91dHB1dCwgaSwgdmFsLCB2YWwsIHZhbCk7XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9