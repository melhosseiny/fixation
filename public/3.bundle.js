(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/***/ "./app/js/record/record.js":
/*!*********************************!*\
  !*** ./app/js/record/record.js ***!
  \*********************************/
/*! exports provided: Record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.js */ "./app/js/storage.js");
/* harmony import */ var _geo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geo.js */ "./app/js/geo.js");
/* harmony import */ var _eye_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eye.js */ "./app/js/eye.js");
/* harmony import */ var _material_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/snackbar */ "./node_modules/@material/snackbar/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template.js */ "./app/js/record/template.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const snackbar = _material_snackbar__WEBPACK_IMPORTED_MODULE_3__["MDCSnackbar"].attachTo(document.querySelector('.mdc-snackbar'));





function WorkerPool(spec = {
  n: 10
}) {
  let {
    n
  } = spec;
  let workers = new Array(n);
  let load = new Array(n);

  let init = function () {
    workers.fill(undefined);
    load.fill(0);

    for (let i = 0; i < workers.length; i++) {
      workers[i] = new Worker('/storage.js');

      workers[i].onmessage = function (e) {
        //console.log("onmessage load", e.data);
        load[i] = e.data; //console.log(load);
      };
    }
  };

  let getWorkerWithMinLoad = function () {
    let minIndex = 0;

    for (let i = 0; i < load.length; i++) {
      if (load[i] < load[minIndex]) {
        minIndex = i;
      }
    } //console.log(minIndex, load);


    return workers[minIndex];
  };

  let terminateAll = function () {
    workers.forEach(worker => worker.terminate());
  };

  return Object.freeze({
    init,
    getWorkerWithMinLoad,
    terminateAll
  });
}

function Record(spec) {
  let socket = undefined;
  let lastFixatedEl = undefined;
  let dataPoints = [];
  let fixationCount = 0;
  let prevFixation = undefined;
  let fixationWindow = _eye_js__WEBPACK_IMPORTED_MODULE_2__["INIT_FIXATION_WINDOW"];
  let storage = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["Storage"])({});
  let start = undefined;

  let toggleRecord = function () {
    if (!spec.recording) {
      start = luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].local();
    } else {
      spec.elapsed = luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].local().diff(start).toFormat("hh:mm:ss");
    }

    spec.recording = !spec.recording;
    render(spec);
  };

  let render = data => {
    Object(lit_html__WEBPACK_IMPORTED_MODULE_5__["render"])(Object(_template_js__WEBPACK_IMPORTED_MODULE_7__["template"])(data), document.getElementById('view'));
  };

  let init = () => {
    _extends(spec, {
      toggleRecord,
      recording: false,
      connected: false,
      id: 0
    });

    render(spec);
  };

  init();

  let connect = function (context) {
    let offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = 1280;
    offscreenCanvas.height = 720;
    let offscreenContext = offscreenCanvas.getContext('2d');
    let workerPool = WorkerPool();
    workerPool.init();
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default.a.connect('http://localhost');
    socket.on('connect', function () {
      spec.connected = true;
      render(spec);
      console.log('eye connect');
    });
    socket.on('disconnect', function () {
      workerPool.terminateAll();
      console.log('terminated all workers');
    });
    socket.on('news', function (data) {
      data.X = data.X / _geo_js__WEBPACK_IMPORTED_MODULE_1__["DEVICE_WIDTH"];
      data.Y = data.Y / _geo_js__WEBPACK_IMPORTED_MODULE_1__["DEVICE_HEIGHT"];

      if (spec.recording) {
        let gp = Object(_eye_js__WEBPACK_IMPORTED_MODULE_2__["GazePoint"])({
          x: data.X,
          y: data.Y,
          t: data.Timestamp
        });
        dataPoints.push(gp);

        if (dataPoints.length === fixationWindow) {
          let fixation = Object(_eye_js__WEBPACK_IMPORTED_MODULE_2__["GazeWindow"])({
            points: dataPoints
          }).detector();

          if (fixation) {
            fixationCount += 1;
            offscreenContext.drawImage(document.getElementById('player'), 0, 0, offscreenContext.canvas.width, offscreenContext.canvas.height);
            let pxls = offscreenContext.getImageData(0, 0, offscreenContext.canvas.width, offscreenContext.canvas.height);
            workerPool.getWorkerWithMinLoad().postMessage({
              x: fixation.getX(),
              y: fixation.getY(),
              id: spec.id,
              timestamp: fixation.getTimestamp(),
              pxls: pxls.data.buffer
            }, [pxls.data.buffer]);
            spec.id++;

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
            fixationWindow = _eye_js__WEBPACK_IMPORTED_MODULE_2__["INIT_FIXATION_WINDOW"];
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
  };

  let disconnect = function () {
    socket.disconnect();
    console.log("disconnect from record");
  };

  return Object.freeze({
    connect,
    disconnect
  });
}

/***/ }),

/***/ "./app/js/record/template.js":
/*!***********************************!*\
  !*** ./app/js/record/template.js ***!
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
      <div class="mdc-layout-grid__cell--span-4"></div>
      <div class="mdc-layout-grid__cell--span-4">
        <video id="player" playsinline autoplay loop muted></video>
        ${getRecordButton(data)}
        ${data.elapsed}
      </div>
      <div class="mdc-layout-grid__cell--span-4"></div>
    </div>
  </div>
`;

let getRecordButton = function (data) {
  //console.log("inspect", data.recording)
  if (!data.recording) {
    return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <button @click="${data.toggleRecord}" ?disabled="${!data.connected}" class="mdc-button mdc-button--unelevated record-button">
        <i class="material-icons mdc-button__icon" aria-hidden="true">fiber_manual_record</i>
        <span class="mdc-button__label">Record</span>
      </button>`;
  } else {
    return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <button @click="${data.toggleRecord}" class="mdc-button mdc-button--unelevated">
        <i class="material-icons mdc-button__icon" aria-hidden="true">stop</i>
        <span class="mdc-button__label">Stop</span>
      </button>
    `;
  }
};

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

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvYWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FwcC9qcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvanMvZXllLmpzIiwid2VicGFjazovLy8uL2FwcC9qcy9nZW8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2pzL3JlY29yZC9yZWNvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2pzL3JlY29yZC90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvanMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbIkFsZ29yaXRobSIsInNwZWMiLCJyZWxhdGl2ZSIsImEiLCJ4IiwiYiIsImxpbWl0Iiwibm9ybWFsaXplIiwibWluIiwibWF4IiwiT2JqZWN0IiwiZnJlZXplIiwiUkFXX0RBVEFfQ09MT1IiLCJGSVhBVElPTl9DT0xPUiIsIlNBQ0NBREVfQ09MT1IiLCJDTEVBUl9DT0xPUiIsIkRJRkZFUkVOVF9DT0xPUlMiLCJIRUFUTUFQX0NPTE9SUyIsImhzdjJoc2wiLCJodWUiLCJzYXQiLCJ2YWwiLCJpIiwiaCIsInMiLCJ2IiwiTWF0aCIsInNxcnQiLCJoc2wiLCJwdXNoIiwicm91bmQiLCJDb2xvciIsImFsZ29yaXRobSIsImhlYXQiLCJyZWwiLCJkIiwibGVuZ3RoIiwiRElTUEVSU0lPTl9USFJFU0hPTEQiLCJEVVJBVElPTl9USFJFU0hPTEQiLCJJTklUX0ZJWEFUSU9OX1dJTkRPVyIsIlJFUExBWV9GUFMiLCJHYXplUG9pbnQiLCJ5IiwidCIsImdldFgiLCJnZXRZIiwiZ2V0VGltZXN0YW1wIiwiRml4YXRpb24iLCJnZXREdXJhdGlvbiIsImdldEZpeGF0aW9uIiwiR2F6ZVdpbmRvdyIsInBvaW50cyIsImRpc3BlcnNpb24iLCJwb2ludHNYIiwibWFwIiwicCIsIkRFVklDRV9XSURUSCIsInBvaW50c1kiLCJERVZJQ0VfSEVJR0hUIiwiY2VudHJvaWQiLCJyZWR1Y2UiLCJ0b0ZpeGVkIiwiZGV0ZWN0b3IiLCJ3aW5kb3ciLCJzY3JlZW4iLCJ3aWR0aCIsImRldmljZVBpeGVsUmF0aW8iLCJoZWlnaHQiLCJjb2xvciIsIlBvaW50IiwicmVuZGVyIiwiY29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY2FudmFzIiwiUG9pbnRzIiwiZm9yRWFjaCIsInJlbmRlclRpbWVsaW5lIiwiYXhpcyIsImRpbSIsIkxpbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiQ2lyY2xlIiwiciIsImdldFIiLCJhcmMiLCJQSSIsImZpbGwiLCJHVF9CQVNFIiwiR1RfQ09OU0lERVIiLCJSZWN0IiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJjbGVhciIsImNvbnRhaW5zUG9pbnQiLCJweCIsInB5IiwidyIsInRpbGVzIiwidGlsZVNpemUiLCJzdGFydCIsInNoaWZ0IiwicmVjdGFuZ2xlIiwic3Ryb2tlUmVjdCIsIkhlYXRtYXAiLCJjb3VudCIsIlVpbnQxNkFycmF5IiwiQXJyYXlCdWZmZXIiLCJjb3VudENsb25lIiwiZ2V0Q291bnQiLCJzZXRDb3VudCIsImMiLCJnZXRDb3VudEFyciIsInNldENvdW50QXJyIiwicmVzZXQiLCJjb3VudDIiLCJidWZmZXIiLCJieXRlTGVuZ3RoIiwiZ2xvYmFsX21heCIsInRpbGUiLCJ1bmRlZmluZWQiLCJzbGljZSIsIkVhc2UiLCJsaW5lYXIiLCJlIiwic25hY2tiYXIiLCJNRENTbmFja2JhciIsImF0dGFjaFRvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiV29ya2VyUG9vbCIsIm4iLCJ3b3JrZXJzIiwiQXJyYXkiLCJsb2FkIiwiaW5pdCIsIldvcmtlciIsIm9ubWVzc2FnZSIsImRhdGEiLCJnZXRXb3JrZXJXaXRoTWluTG9hZCIsIm1pbkluZGV4IiwidGVybWluYXRlQWxsIiwid29ya2VyIiwidGVybWluYXRlIiwiUmVjb3JkIiwic29ja2V0IiwibGFzdEZpeGF0ZWRFbCIsImRhdGFQb2ludHMiLCJmaXhhdGlvbkNvdW50IiwicHJldkZpeGF0aW9uIiwiZml4YXRpb25XaW5kb3ciLCJzdG9yYWdlIiwiU3RvcmFnZSIsInRvZ2dsZVJlY29yZCIsInJlY29yZGluZyIsIkRhdGVUaW1lIiwibG9jYWwiLCJlbGFwc2VkIiwiZGlmZiIsInRvRm9ybWF0IiwicmVuZGVyVG1wbCIsInRlbXBsYXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25uZWN0ZWQiLCJpZCIsImNvbm5lY3QiLCJvZmZzY3JlZW5DYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwib2Zmc2NyZWVuQ29udGV4dCIsImdldENvbnRleHQiLCJ3b3JrZXJQb29sIiwiaW8iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJYIiwiWSIsImdwIiwiVGltZXN0YW1wIiwiZml4YXRpb24iLCJkcmF3SW1hZ2UiLCJweGxzIiwiZ2V0SW1hZ2VEYXRhIiwicG9zdE1lc3NhZ2UiLCJ0aW1lc3RhbXAiLCJlcnIiLCJsYWJlbFRleHQiLCJvcGVuIiwiZGlzY29ubmVjdCIsImh0bWwiLCJnZXRSZWNvcmRCdXR0b24iLCJmdWxsc2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4iLCJwdXQiLCJjYWNoZXMiLCJ0aGVuIiwiY2FjaGUiLCJvcHRpb25zIiwiaGVhZGVycyIsIlJlc3BvbnNlIiwiZ2V0IiwiY2FsbGJhY2siLCJyZXNwb25zZSIsIm1hdGNoIiwiUmVxdWVzdCIsImpzb24iLCJ2YWx1ZSIsImNhY2hlTmFtZSIsImRlbGV0ZSIsImRlbGV0ZWQiLCJnZXRLZXlzIiwia2V5cyIsInVzYWdlIiwibmF2aWdhdG9yIiwiZXN0aW1hdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sU0FBU0EsU0FBVCxDQUFtQkMsSUFBSSxHQUFHLEVBQTFCLEVBQThCO0FBQ25DLE1BQUlDLFFBQVEsR0FBRyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUMvQixXQUFPLENBQUNELENB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QUFHLE1BQU1GLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZb0IsU0FBWixDQUFwQjtBQUNBWCxTQUFLLENBQUNlLElBQU4sR0FBYWhCLElBQWIsQ0FBbUJnQixJQUFELElBQVVWLFFBQVEsQ0FBQ1UsSUFBRCxDQUFwQztBQUNELEdBSEQ7O0FBS0EsTUFBSUMsS0FBSyxHQUFHLFVBQVNYLFFBQVQsRUFBbUI7QUFDN0IsV0FBT1ksU0FBUyxDQUFDOUQsT0FBVixDQUFrQitELFFBQWxCLEVBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU9wTixNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQjhMLE9BRG1CO0FBRW5CTyxPQUZtQjtBQUduQjNHLFNBSG1CO0FBSW5CcUgsV0FKbUI7QUFLbkJFO0FBTG1CLEdBQWQsQ0FBUDtBQU9ELEM7Ozs7Ozs7Ozs7O0FDOUNELGUiLCJmaWxlIjoiMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gQWxnb3JpdGhtKHNwZWMgPSB7fSkge1xyXG4gIGxldCByZWxhdGl2ZSA9IGZ1bmN0aW9uKGEsIHgsIGIpIHtcclxuICAgIHJldHVybiAoeCAtIGEpIC8gKGIgLSBhKTtcclxuICB9XHJcblxyXG4gIGxldCBsaW1pdCA9IGZ1bmN0aW9uKGEsIHgsIGIpIHtcclxuICAgIGlmKHggPCBhKSByZXR1cm4gYTtcclxuICAgIGlmKHggPiBiKSByZXR1cm4gYjtcclxuICAgIHJldHVybiB4O1xyXG4gIH1cclxuXHJcbiAgbGV0IG5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHgsIG1pbiwgbWF4KSB7XHJcbiAgICBpZiAoeCA8IG1pbikgeyB4ID0gbWluOyB9XHJcbiAgICBpZiAoeCA+IG1heCkgeyB4ID0gbWF4OyB9XHJcbiAgICByZXR1cm4gKHggLSBtaW4pIC8gKG1heCAtIG1pbik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICByZWxhdGl2ZSxcclxuICAgIGxpbWl0LFxyXG4gICAgbm9ybWFsaXplXHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHtBbGdvcml0aG19IGZyb20gJy4vYWxnb3JpdGhtLmpzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBV19EQVRBX0NPTE9SID0gJ3JnYmEoMjAwLDAsMCwwLjg1KSc7XHJcbmV4cG9ydCBjb25zdCBGSVhBVElPTl9DT0xPUiA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuODUpJztcclxuZXhwb3J0IGNvbnN0IFNBQ0NBREVfQ09MT1IgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjg1KSc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9DT0xPUiA9ICdyZ2IoMCwwLDApJztcclxuXHJcbmV4cG9ydCBjb25zdCBESUZGRVJFTlRfQ09MT1JTID0gW107XHJcbmV4cG9ydCBjb25zdCBIRUFUTUFQX0NPTE9SUyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gaHN2MmhzbChodWUsc2F0LHZhbCkge1xyXG4gIHJldHVybiBbXHJcbiAgICBodWUsXHJcbiAgICBzYXQqdmFsLygoaHVlPSgyLXNhdCkqdmFsKTwxP2h1ZToyLWh1ZSksXHJcbiAgICBodWUvMlxyXG4gIF1cclxufVxyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgdmFyIGggPSAoaSAqIDAuNjE4MDMzOTg4NzQ5ODk1KSAlIDEuMDtcclxuICB2YXIgcyA9IDAuNTtcclxuICB2YXIgdiA9IE1hdGguc3FydCgxLjAgLSAoKGkgKiAwLjYxODAzMzk4ODc0OTg5NSkgJSAwLjUpKTtcclxuICB2YXIgYSA9IDAuNTtcclxuXHJcbiAgdmFyIGhzbCA9IGhzdjJoc2woaCxzLHYpO1xyXG5cclxuICBESUZGRVJFTlRfQ09MT1JTLnB1c2goJ2hzbGEoJyArIE1hdGgucm91bmQoaHNsWzBdKjI1NSkgKyAnLCcgKyBNYXRoLnJvdW5kKGhzbFsxXSoxMDApICsgJyUsJyArIE1hdGgucm91bmQoaHNsWzJdKjEwMCkgKyAnJSwnICsgYSArICcpJyk7XHJcbn1cclxuXHJcbmZvciAobGV0IGggPSAwOyBoIDwgMjEwOyBoKyspIHtcclxuICBIRUFUTUFQX0NPTE9SUy5wdXNoKCdoc2xhKCcgKyAoMjA5IC0gaCkgKyAnLCA1MCUsIDUwJSwnKyAwLjUgKycpJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb2xvcihzcGVjID0ge30pIHtcclxuICBsZXQgYWxnb3JpdGhtID0gQWxnb3JpdGhtKHt9KTtcclxuXHJcbiAgbGV0IGhlYXQgPSBmdW5jdGlvbihyZWwpIHtcclxuICAgIGxldCBkID0gYWxnb3JpdGhtLmxpbWl0KDAsIHJlbCwgMSlcclxuICAgIGlmIChyZWwgPT09IDApIHJldHVybiAncmdiYSgwLDAsMCwwKSc7XHJcbiAgICByZXR1cm4gSEVBVE1BUF9DT0xPUlNbTWF0aC5yb3VuZCgoZCAqIChIRUFUTUFQX0NPTE9SUy5sZW5ndGggLSAxKSkpXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGhlYXRcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQge0RFVklDRV9XSURUSCwgREVWSUNFX0hFSUdIVH0gZnJvbSAnLi9nZW8uanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJU1BFUlNJT05fVEhSRVNIT0xEID0gNTA7IC8vIHBpeGVsc1xyXG5leHBvcnQgY29uc3QgRFVSQVRJT05fVEhSRVNIT0xEID0gMTUwOyAvLyBtc1xyXG5leHBvcnQgY29uc3QgSU5JVF9GSVhBVElPTl9XSU5ET1cgPSAxMDsgLy8gfjAuMTUgKiA3MEh6XHJcblxyXG5leHBvcnQgY29uc3QgUkVQTEFZX0ZQUyA9IDU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2F6ZVBvaW50KHNwZWMgPSB7eDogMCwgeTogMCwgdDogMH0pIHtcclxuICBsZXQge3gseSx0fSA9IHNwZWNcclxuXHJcbiAgbGV0IGdldFggPSBmdW5jdGlvbigpIHsgcmV0dXJuIHg7IH1cclxuICBsZXQgZ2V0WSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4geTsgfVxyXG4gIGxldCBnZXRUaW1lc3RhbXAgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHQ7IH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xyXG4gICAgZ2V0WCxcclxuICAgIGdldFksXHJcbiAgICBnZXRUaW1lc3RhbXBcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRml4YXRpb24oc3BlYyA9IHt4OiAwLCB5OiAwLCB0OiAwLCBkOiAwfSkge1xyXG4gIGxldCB7eCx5LHQsZH0gPSBzcGVjO1xyXG5cclxuICBsZXQgZ2V0WCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4geDsgfVxyXG4gIGxldCBnZXRZID0gZnVuY3Rpb24oKSB7IHJldHVybiB5OyB9XHJcbiAgbGV0IGdldFRpbWVzdGFtcCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdDsgfVxyXG4gIGxldCBnZXREdXJhdGlvbiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZDsgfVxyXG5cclxuICBsZXQgZ2V0Rml4YXRpb24gPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7eDogeCwgeTogeX07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBnZXRYLFxyXG4gICAgZ2V0WSxcclxuICAgIGdldFRpbWVzdGFtcCxcclxuICAgIGdldER1cmF0aW9uLFxyXG4gICAgZ2V0Rml4YXRpb25cclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2F6ZVdpbmRvdyhzcGVjID0ge3BvaW50czogW119KSB7XHJcbiAgbGV0IHtwb2ludHN9ID0gc3BlYztcclxuXHJcbiAgbGV0IGRpc3BlcnNpb24gPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCBwb2ludHNYID0gcG9pbnRzLm1hcChwID0+IHAuZ2V0WCgpICogREVWSUNFX1dJRFRIKTtcclxuICAgIGxldCBwb2ludHNZID0gcG9pbnRzLm1hcChwID0+IHAuZ2V0WSgpICogREVWSUNFX0hFSUdIVCk7XHJcblxyXG4gICAgcmV0dXJuIChNYXRoLm1heCguLi5wb2ludHNYKSAtIE1hdGgubWluKC4uLnBvaW50c1gpKSArIChNYXRoLm1heCguLi5wb2ludHNZKSAtIE1hdGgubWluKC4uLnBvaW50c1kpKTtcclxuICB9XHJcblxyXG4gIGxldCBjZW50cm9pZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHBvaW50c1ggPSBwb2ludHMubWFwKHAgPT4gcC5nZXRYKCkpO1xyXG4gICAgbGV0IHBvaW50c1kgPSBwb2ludHMubWFwKHAgPT4gcC5nZXRZKCkpO1xyXG5cclxuICAgIHJldHVybiBGaXhhdGlvbih7XHJcbiAgICAgIHg6ICsocG9pbnRzWC5yZWR1Y2UoKGEsYikgPT4gYStiKSAvIHBvaW50c1gubGVuZ3RoKS50b0ZpeGVkKDYpLFxyXG4gICAgICB5OiArKHBvaW50c1kucmVkdWNlKChhLGIpID0+IGErYikgLyBwb2ludHNZLmxlbmd0aCkudG9GaXhlZCg2KSxcclxuICAgICAgdDogKyhwb2ludHNbMF0uZ2V0VGltZXN0YW1wKCkpLnRvRml4ZWQoNiksXHJcbiAgICAgIGQ6ICsocG9pbnRzW3BvaW50cy5sZW5ndGgtMV0uZ2V0VGltZXN0YW1wKCkgLSBwb2ludHNbMF0uZ2V0VGltZXN0YW1wKCkpLnRvRml4ZWQoNilcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgZGV0ZWN0b3IgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChkaXNwZXJzaW9uKCkgPiBESVNQRVJTSU9OX1RIUkVTSE9MRCkge1xyXG4gICAgICByZXR1cm4gY2VudHJvaWQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGRldGVjdG9yXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQge0NMRUFSX0NPTE9SfSBmcm9tICcuL2NvbG9yLmpzJztcclxuaW1wb3J0IHtDb2xvcn0gZnJvbSAnLi9jb2xvci5qcyc7XHJcbmltcG9ydCB7QWxnb3JpdGhtfSBmcm9tICcuL2FsZ29yaXRobS5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgREVWSUNFX1dJRFRIID0gd2luZG93LnNjcmVlbi53aWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG5leHBvcnQgY29uc3QgREVWSUNFX0hFSUdIVCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG5sZXQgY29sb3IgPSBDb2xvcih7fSk7XHJcbmxldCBhbGdvcml0aG0gPSBBbGdvcml0aG0oe30pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvaW50KHNwZWMgPSB7eDogMCwgeTogMH0pIHtcclxuICBsZXQge3gsIHl9ID0gc3BlYztcclxuXHJcbiAgbGV0IGdldFggPSBmdW5jdGlvbigpIHsgcmV0dXJuIHg7IH1cclxuICBsZXQgZ2V0WSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4geTsgfVxyXG5cclxuICBsZXQgcmVuZGVyID0gZnVuY3Rpb24oY29udGV4dCwgZmlsbFN0eWxlKSB7XHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcclxuICAgIGNvbnRleHQuZmlsbFJlY3QoeCpjb250ZXh0LmNhbnZhcy53aWR0aCwgeSpjb250ZXh0LmNhbnZhcy5oZWlnaHQsIDAuMDA1KmNvbnRleHQuY2FudmFzLndpZHRoLCAwLjAwNSpjb250ZXh0LmNhbnZhcy53aWR0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBnZXRYLFxyXG4gICAgZ2V0WSxcclxuICAgIHJlbmRlclxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9pbnRzKHNwZWMgPSB7cG9pbnRzOiBbXX0pIHtcclxuICBsZXQge3BvaW50c30gPSBzcGVjO1xyXG5cclxuICBsZXQgcmVuZGVyID0gZnVuY3Rpb24oY29udGV4dCwgZmlsbFN0eWxlKSB7XHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcclxuICAgIHBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcclxuICAgICAgcC5yZW5kZXIoY29udGV4dCwgZmlsbFN0eWxlKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgcmVuZGVyVGltZWxpbmUgPSBmdW5jdGlvbihjb250ZXh0LCBheGlzLCBmaWxsU3R5bGUpIHtcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgcG9pbnRzLmZvckVhY2goZnVuY3Rpb24ocCwgaSkge1xyXG4gICAgICBsZXQgZGltID0gYXhpcyA9PT0gMD8gcC5nZXRYKCkgOiBwLmdldFkoKTtcclxuICAgICAgY29udGV4dC5maWxsUmVjdCgoaS8zMCkqY29udGV4dC5jYW52YXMud2lkdGgsICgxLWRpbSkqY29udGV4dC5jYW52YXMuaGVpZ2h0LCBjb250ZXh0LmNhbnZhcy53aWR0aC8zMCwgMSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xyXG4gICAgcmVuZGVyLFxyXG4gICAgcmVuZGVyVGltZWxpbmVcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpbmUoc3BlYyA9IHt4MTogMCwgeTE6IDAsIHgyOiAwLCB5MjogMH0pIHtcclxuICBsZXQge3gxLCB5MSwgeDIsIHkyfSA9IHNwZWM7XHJcblxyXG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbihjb250ZXh0LCBzdHJva2VTdHlsZSkge1xyXG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlXHJcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgY29udGV4dC5tb3ZlVG8oeDEqY29udGV4dC5jYW52YXMud2lkdGgsIHkxKmNvbnRleHQuY2FudmFzLmhlaWdodCk7XHJcbiAgICBjb250ZXh0LmxpbmVUbyh4Mipjb250ZXh0LmNhbnZhcy53aWR0aCwgeTIqY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICByZW5kZXJcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENpcmNsZShzcGVjID0ge3g6IDAsIHk6IDAsIHI6IDB9KSB7XHJcbiAgbGV0IHt4LCB5LCByfSA9IHNwZWM7XHJcblxyXG4gIGxldCBnZXRYID0gZnVuY3Rpb24oKSB7IHJldHVybiB4OyB9XHJcbiAgbGV0IGdldFkgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHk7IH1cclxuICBsZXQgZ2V0UiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcjsgfVxyXG5cclxuICBsZXQgcmVuZGVyID0gZnVuY3Rpb24oY29udGV4dCwgc3Ryb2tlU3R5bGUsIGZpbGxTdHlsZSkge1xyXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIGNvbnRleHQuYXJjKHgqY29udGV4dC5jYW52YXMud2lkdGgsIHkqY29udGV4dC5jYW52YXMuaGVpZ2h0LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICBpZiAoZmlsbFN0eWxlKSB7XHJcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgICBjb250ZXh0LmZpbGwoKTtcclxuICAgIH1cclxuICAgIGlmIChzdHJva2VTdHlsZSkge1xyXG4gICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XHJcbiAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBnZXRYLFxyXG4gICAgZ2V0WSxcclxuICAgIGdldFIsXHJcbiAgICByZW5kZXJcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgR1RfQkFTRSA9IFszMCwgMTVdXHJcbmNvbnN0IEdUX0NPTlNJREVSID0gWzIwLCAyMF1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWN0KHNwZWMgPSB7eDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH0pIHtcclxuICBsZXQge3gsIHksIHdpZHRoLCBoZWlnaHR9ID0gc3BlYztcclxuXHJcbiAgbGV0IGdldFggPSBmdW5jdGlvbigpIHsgcmV0dXJuIHg7IH1cclxuICBsZXQgZ2V0WSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4geTsgfVxyXG4gIGxldCBnZXRXaWR0aCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gd2lkdGg7IH1cclxuICBsZXQgZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7IHJldHVybiBoZWlnaHQ7IH1cclxuXHJcbiAgbGV0IGNsZWFyID0gZnVuY3Rpb24oY29udGV4dCwgZmlsbFN0eWxlKSB7XHJcbiAgICBpZiAoZmlsbFN0eWxlKSBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcclxuICAgIGVsc2UgY29udGV4dC5maWxsU3R5bGUgPSBDTEVBUl9DT0xPUjtcclxuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBsZXQgY29udGFpbnNQb2ludCA9IGZ1bmN0aW9uKHB4LCBweSkge1xyXG4gICAgbGV0IHcgPSB3aWR0aDtcclxuICAgIGxldCBoID0gaGVpZ2h0O1xyXG5cclxuICAgIC8vIEF0IGxlYXN0IG9uZSBvZiB0aGUgZGltZW5zaW9ucyBpcyBuZWdhdGl2ZVxyXG4gICAgaWYgKCh3IHwgaCkgPCAwKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgIC8vIE5vdGU6IGlmIGVpdGhlciBkaW1lbnNpb24gaXMgemVybywgdGVzdHMgYmVsb3cgbXVzdCByZXR1cm4gZmFsc2VcclxuICAgIGlmIChweCA8IHggfHwgcHkgPCB5KSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgdyArPSB4O1xyXG4gICAgaCArPSB5O1xyXG4gICAgLy8gb3ZlcmZsb3cgfHwgaW50ZXJzZWN0XHJcbiAgICByZXR1cm4gKCh3IDwgeCB8fCB3ID4gcHgpICYmIChoIDwgeSB8fCBoID4gcHkpKTtcclxuICB9XHJcblxyXG4gIGxldCB0aWxlcyA9IGZ1bmN0aW9uKHRpbGVTaXplID0gR1RfQkFTRSkge1xyXG4gICAgbGV0IHRpbGVzID0gW107XHJcbiAgICBsZXQgc3RhcnQgPSB7eDogeCwgeTogeX07XHJcbiAgICBsZXQgc2hpZnQgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAoc3RhcnQueSA8IHkgKyBoZWlnaHQpIHtcclxuICAgICAgbGV0IHJlY3RhbmdsZSA9IHt4OiBzdGFydC54LCB5OiBzdGFydC55LCB3aWR0aDogdGlsZVNpemVbMF0sIGhlaWdodDogdGlsZVNpemVbMV19O1xyXG4gICAgICB0aWxlcy5wdXNoKHJlY3RhbmdsZSk7XHJcblxyXG4gICAgICBzdGFydC54ID0gcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGg7XHJcblxyXG4gICAgICBpZihzdGFydC54ID49IHggKyB3aWR0aCkge1xyXG4gICAgICAgIHNoaWZ0ID0gIXNoaWZ0O1xyXG4gICAgICAgIHN0YXJ0LnkgKz0gdGlsZVNpemVbMV07XHJcbiAgICAgICAgc3RhcnQueCA9IHNoaWZ0ID8geCAtICh0aWxlU2l6ZVswXSAvIDIpIDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aWxlcztcclxuICB9XHJcblxyXG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbihjb250ZXh0LCBzdHJva2VTdHlsZSwgZmlsbFN0eWxlKSB7XHJcbiAgICBpZiAoc3Ryb2tlU3R5bGUpIHtcclxuICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xyXG4gICAgICBjb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsbFN0eWxlKSB7XHJcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xyXG4gICAgZ2V0WCxcclxuICAgIGdldFksXHJcbiAgICBnZXRXaWR0aCxcclxuICAgIGdldEhlaWdodCxcclxuICAgIGNsZWFyLFxyXG4gICAgdGlsZXMsXHJcbiAgICBjb250YWluc1BvaW50LFxyXG4gICAgcmVuZGVyXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWF0bWFwKHNwZWMgPSB7dGlsZXM6IFtdfSkge1xyXG4gIGxldCB7dGlsZXN9ID0gc3BlYztcclxuICBsZXQgY291bnQgPSBuZXcgVWludDE2QXJyYXkobmV3IEFycmF5QnVmZmVyKHRpbGVzLmxlbmd0aCoyKSk7XHJcbiAgbGV0IGNvdW50Q2xvbmUgPSBuZXcgVWludDE2QXJyYXkobmV3IEFycmF5QnVmZmVyKHRpbGVzLmxlbmd0aCoyKSk7XHJcblxyXG4gIGxldCBnZXRDb3VudCA9IGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGNvdW50W2ldOyB9XHJcbiAgbGV0IHNldENvdW50ID0gZnVuY3Rpb24oaSwgYykgeyBjb3VudFtpXSA9IGM7IH1cclxuICBsZXQgZ2V0Q291bnRBcnIgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvdW50OyB9XHJcbiAgbGV0IHNldENvdW50QXJyID0gZnVuY3Rpb24oYykgeyBjb3VudCA9IGM7IH1cclxuXHJcbiAgbGV0IHJlc2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjb3VudCA9IG5ldyBVaW50MTZBcnJheShuZXcgQXJyYXlCdWZmZXIodGlsZXMubGVuZ3RoKjIpKTtcclxuICAgIGNvdW50Q2xvbmUgPSBuZXcgVWludDE2QXJyYXkobmV3IEFycmF5QnVmZmVyKHRpbGVzLmxlbmd0aCoyKSk7XHJcbiAgfVxyXG5cclxuICBsZXQgcmVuZGVyID0gZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgbGV0IGNvdW50MiA9IGNvdW50LmJ1ZmZlci5ieXRlTGVuZ3RoICE9PSAwPyBjb3VudCA6IGNvdW50Q2xvbmU7XHJcbiAgICBsZXQgZ2xvYmFsX21heCA9IE1hdGgubWF4KC4uLmNvdW50Mik7XHJcblxyXG4gICAgaWYgKGdsb2JhbF9tYXggIT09IDApIHtcclxuICAgICAgdGlsZXMuZm9yRWFjaChmdW5jdGlvbih0aWxlLCBpKSB7XHJcbiAgICAgICAgaWYgKGNvdW50MltpXSkge1xyXG4gICAgICAgICAgbGV0IGggPSBjb2xvci5oZWF0KGFsZ29yaXRobS5yZWxhdGl2ZSgwLGNvdW50MltpXSxnbG9iYWxfbWF4KSk7XHJcbiAgICAgICAgICB0aWxlLnJlbmRlcihjb250ZXh0LCB1bmRlZmluZWQsIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvdW50LmJ1ZmZlci5ieXRlTGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvdW50Q2xvbmUgPSBjb3VudC5zbGljZSgwKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBnZXRDb3VudCxcclxuICAgIHNldENvdW50LFxyXG4gICAgZ2V0Q291bnRBcnIsXHJcbiAgICBzZXRDb3VudEFycixcclxuICAgIHJlc2V0LFxyXG4gICAgcmVuZGVyXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qIEFOSU1BVElPTiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRWFzZShzcGVjID0ge30pIHtcclxuICBsZXQgbGluZWFyID0gZnVuY3Rpb24odCxiLGUsZCkge1xyXG4gICAgcmV0dXJuIChlLWIpKnQvZCArIGI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBsaW5lYXJcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQge1N0b3JhZ2V9IGZyb20gJy4uL3N0b3JhZ2UuanMnXHJcbmltcG9ydCB7REVWSUNFX1dJRFRILCBERVZJQ0VfSEVJR0hUfSBmcm9tICcuLi9nZW8uanMnO1xyXG5pbXBvcnQge0lOSVRfRklYQVRJT05fV0lORE9XfSBmcm9tICcuLi9leWUuanMnO1xyXG5pbXBvcnQge0ZpeGF0aW9uLCBHYXplUG9pbnQsIEdhemVXaW5kb3d9IGZyb20gJy4uL2V5ZS5qcydcclxuXHJcbmltcG9ydCB7TURDU25hY2tiYXJ9IGZyb20gJ0BtYXRlcmlhbC9zbmFja2Jhcic7XHJcblxyXG5jb25zdCBzbmFja2JhciA9IE1EQ1NuYWNrYmFyLmF0dGFjaFRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtc25hY2tiYXInKSk7XHJcblxyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcbmltcG9ydCB7cmVuZGVyIGFzIHJlbmRlclRtcGx9IGZyb20gJ2xpdC1odG1sJztcclxuaW1wb3J0IHtEYXRlVGltZSwgRHVyYXRpb259IGZyb20gJ2x1eG9uJztcclxuXHJcbmltcG9ydCB7dGVtcGxhdGV9IGZyb20gJy4vdGVtcGxhdGUuanMnXHJcblxyXG5mdW5jdGlvbiBXb3JrZXJQb29sKHNwZWMgPSB7bjogMTB9KSB7XHJcbiAgbGV0IHtufSA9IHNwZWM7XHJcbiAgbGV0IHdvcmtlcnMgPSBuZXcgQXJyYXkobik7XHJcbiAgbGV0IGxvYWQgPSBuZXcgQXJyYXkobik7XHJcblxyXG4gIGxldCBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB3b3JrZXJzLmZpbGwodW5kZWZpbmVkKTtcclxuICAgIGxvYWQuZmlsbCgwKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29ya2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB3b3JrZXJzW2ldID0gbmV3IFdvcmtlcignL3N0b3JhZ2UuanMnKTtcclxuXHJcbiAgICAgIHdvcmtlcnNbaV0ub25tZXNzYWdlID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJvbm1lc3NhZ2UgbG9hZFwiLCBlLmRhdGEpO1xyXG4gICAgICAgIGxvYWRbaV0gPSBlLmRhdGE7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsb2FkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGdldFdvcmtlcldpdGhNaW5Mb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgbWluSW5kZXggPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2FkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChsb2FkW2ldIDwgbG9hZFttaW5JbmRleF0pIHtcclxuICAgICAgICBtaW5JbmRleCA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2cobWluSW5kZXgsIGxvYWQpO1xyXG4gICAgcmV0dXJuIHdvcmtlcnNbbWluSW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgbGV0IHRlcm1pbmF0ZUFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgd29ya2Vycy5mb3JFYWNoKHdvcmtlciA9PiB3b3JrZXIudGVybWluYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xyXG4gICAgaW5pdCxcclxuICAgIGdldFdvcmtlcldpdGhNaW5Mb2FkLFxyXG4gICAgdGVybWluYXRlQWxsXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlY29yZChzcGVjKSB7XHJcbiAgbGV0IHNvY2tldCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgbGV0IGxhc3RGaXhhdGVkRWwgPSB1bmRlZmluZWQ7XHJcbiAgbGV0IGRhdGFQb2ludHMgPSBbXTtcclxuICBsZXQgZml4YXRpb25Db3VudCA9IDA7XHJcbiAgbGV0IHByZXZGaXhhdGlvbiA9IHVuZGVmaW5lZDtcclxuICBsZXQgZml4YXRpb25XaW5kb3cgPSBJTklUX0ZJWEFUSU9OX1dJTkRPVztcclxuICBsZXQgc3RvcmFnZSA9IFN0b3JhZ2Uoe30pO1xyXG5cclxuICBsZXQgc3RhcnQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGxldCB0b2dnbGVSZWNvcmQgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghc3BlYy5yZWNvcmRpbmcpIHtcclxuICAgICAgc3RhcnQgPSBEYXRlVGltZS5sb2NhbCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3BlYy5lbGFwc2VkID0gRGF0ZVRpbWUubG9jYWwoKS5kaWZmKHN0YXJ0KS50b0Zvcm1hdChcImhoOm1tOnNzXCIpO1xyXG4gICAgfVxyXG4gICAgc3BlYy5yZWNvcmRpbmcgPSAhc3BlYy5yZWNvcmRpbmc7XHJcbiAgICByZW5kZXIoc3BlYyk7XHJcbiAgfVxyXG5cclxuICBsZXQgcmVuZGVyID0gZGF0YSA9PiB7XHJcbiAgICByZW5kZXJUbXBsKHRlbXBsYXRlKGRhdGEpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldycpKTtcclxuICB9XHJcblxyXG4gIGxldCBpbml0ID0gKCkgPT4ge1xyXG4gICAgT2JqZWN0LmFzc2lnbihzcGVjLCB7XHJcbiAgICAgIHRvZ2dsZVJlY29yZCxcclxuICAgICAgcmVjb3JkaW5nOiBmYWxzZSxcclxuICAgICAgY29ubmVjdGVkOiBmYWxzZSxcclxuICAgICAgaWQ6IDBcclxuICAgIH0pO1xyXG4gICAgcmVuZGVyKHNwZWMpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICBsZXQgY29ubmVjdCA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICAgIGxldCBvZmZzY3JlZW5DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIG9mZnNjcmVlbkNhbnZhcy53aWR0aCA9IDEyODA7XHJcbiAgICBvZmZzY3JlZW5DYW52YXMuaGVpZ2h0ID0gNzIwO1xyXG4gICAgbGV0IG9mZnNjcmVlbkNvbnRleHQgPSBvZmZzY3JlZW5DYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBsZXQgd29ya2VyUG9vbCA9IFdvcmtlclBvb2woKTtcclxuICAgIHdvcmtlclBvb2wuaW5pdCgpO1xyXG5cclxuICAgIHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly9sb2NhbGhvc3QnKTtcclxuXHJcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcclxuICAgICAgc3BlYy5jb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICByZW5kZXIoc3BlYyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdleWUgY29ubmVjdCcpXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB3b3JrZXJQb29sLnRlcm1pbmF0ZUFsbCgpO1xyXG4gICAgICBjb25zb2xlLmxvZygndGVybWluYXRlZCBhbGwgd29ya2VycycpO1xyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oJ25ld3MnLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICBkYXRhLlggPSBkYXRhLlggLyBERVZJQ0VfV0lEVEg7XHJcbiAgICAgIGRhdGEuWSA9IGRhdGEuWSAvIERFVklDRV9IRUlHSFQ7XHJcbiAgICAgIGlmIChzcGVjLnJlY29yZGluZykge1xyXG4gICAgICAgIGxldCBncCA9IEdhemVQb2ludCh7eDogZGF0YS5YLCB5OiBkYXRhLlksIHQ6IGRhdGEuVGltZXN0YW1wfSk7XHJcbiAgICAgICAgZGF0YVBvaW50cy5wdXNoKGdwKTtcclxuICAgICAgICBpZiAoZGF0YVBvaW50cy5sZW5ndGggPT09IGZpeGF0aW9uV2luZG93KSB7XHJcbiAgICAgICAgICBsZXQgZml4YXRpb24gPSBHYXplV2luZG93KHtwb2ludHM6IGRhdGFQb2ludHN9KS5kZXRlY3RvcigpO1xyXG4gICAgICAgICAgaWYgKGZpeGF0aW9uKSB7XHJcbiAgICAgICAgICAgIGZpeGF0aW9uQ291bnQgKz0gMTtcclxuXHJcbiAgICAgICAgICAgIG9mZnNjcmVlbkNvbnRleHQuZHJhd0ltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKSwwLDAsb2Zmc2NyZWVuQ29udGV4dC5jYW52YXMud2lkdGgsb2Zmc2NyZWVuQ29udGV4dC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgbGV0IHB4bHMgPSBvZmZzY3JlZW5Db250ZXh0LmdldEltYWdlRGF0YSgwLDAsb2Zmc2NyZWVuQ29udGV4dC5jYW52YXMud2lkdGgsb2Zmc2NyZWVuQ29udGV4dC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIHdvcmtlclBvb2wuZ2V0V29ya2VyV2l0aE1pbkxvYWQoKS5wb3N0TWVzc2FnZSh7eDogZml4YXRpb24uZ2V0WCgpLCB5OiBmaXhhdGlvbi5nZXRZKCksIGlkOiBzcGVjLmlkLCB0aW1lc3RhbXA6IGZpeGF0aW9uLmdldFRpbWVzdGFtcCgpLCBweGxzOiBweGxzLmRhdGEuYnVmZmVyfSwgW3B4bHMuZGF0YS5idWZmZXJdKTtcclxuICAgICAgICAgICAgc3BlYy5pZCsrO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpeGF0aW9uQ291bnQgPT09IDIwKSB7XHJcbiAgICAgICAgICAgICAgZml4YXRpb25Db3VudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGZpeGF0aW9uLmdldFgoKSwgZml4YXRpb24uZ2V0WSgpKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICBpZiAobGFzdEZpeGF0ZWRFbCkge1xyXG4gICAgICAgICAgICAgICAgbGFzdEZpeGF0ZWRFbC5jbGFzc0xpc3QucmVtb3ZlKFwiZml4YXRlZFwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGFzdEZpeGF0ZWRFbCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgbGFzdEZpeGF0ZWRFbC5jbGFzc0xpc3QuYWRkKFwiZml4YXRlZFwiKTtcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIGRhdGFQb2ludHMgPSBbXTtcclxuICAgICAgICAgICAgZml4YXRpb25XaW5kb3cgPSBJTklUX0ZJWEFUSU9OX1dJTkRPVztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpeGF0aW9uV2luZG93Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3RfZXJyb3InLCBlcnIgPT4ge1xyXG4gICAgICBzbmFja2Jhci5sYWJlbFRleHQgPSAnQ2FuXFwndCBjb25uZWN0IHRvIGV5ZSB0cmFja2VyLic7XHJcbiAgICAgIHNuYWNrYmFyLm9wZW4oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbGV0IGRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcclxuICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImRpc2Nvbm5lY3QgZnJvbSByZWNvcmRcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBjb25uZWN0LFxyXG4gICAgZGlzY29ubmVjdFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7aHRtbH0gZnJvbSAnbGl0LWh0bWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gKGRhdGEpID0+IGh0bWxgXHJcbiAgPGRpdiBjbGFzcz1cIm1kYy1sYXlvdXQtZ3JpZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1kYy1sYXlvdXQtZ3JpZF9faW5uZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1sYXlvdXQtZ3JpZF9fY2VsbC0tc3Bhbi00XCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtbGF5b3V0LWdyaWRfX2NlbGwtLXNwYW4tNFwiPlxyXG4gICAgICAgIDx2aWRlbyBpZD1cInBsYXllclwiIHBsYXlzaW5saW5lIGF1dG9wbGF5IGxvb3AgbXV0ZWQ+PC92aWRlbz5cclxuICAgICAgICAke2dldFJlY29yZEJ1dHRvbihkYXRhKX1cclxuICAgICAgICAke2RhdGEuZWxhcHNlZH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtbGF5b3V0LWdyaWRfX2NlbGwtLXNwYW4tNFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5sZXQgZ2V0UmVjb3JkQnV0dG9uID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gIC8vY29uc29sZS5sb2coXCJpbnNwZWN0XCIsIGRhdGEucmVjb3JkaW5nKVxyXG4gIGlmICghZGF0YS5yZWNvcmRpbmcpIHtcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8YnV0dG9uIEBjbGljaz1cIiR7ZGF0YS50b2dnbGVSZWNvcmR9XCIgP2Rpc2FibGVkPVwiJHshZGF0YS5jb25uZWN0ZWR9XCIgY2xhc3M9XCJtZGMtYnV0dG9uIG1kYy1idXR0b24tLXVuZWxldmF0ZWQgcmVjb3JkLWJ1dHRvblwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbWRjLWJ1dHRvbl9faWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPmZpYmVyX21hbnVhbF9yZWNvcmQ8L2k+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtYnV0dG9uX19sYWJlbFwiPlJlY29yZDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+YFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIke2RhdGEudG9nZ2xlUmVjb3JkfVwiIGNsYXNzPVwibWRjLWJ1dHRvbiBtZGMtYnV0dG9uLS11bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZGMtYnV0dG9uX19pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+c3RvcDwvaT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1kYy1idXR0b25fX2xhYmVsXCI+U3RvcDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICBgXHJcbiAgfVxyXG59XHJcblxyXG5sZXQgZnVsbHNjcmVlbiA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYScpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgY29udGV4dC5jYW52YXMud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4oKVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBTdG9yYWdlKHNwZWMgPSB7fSkge1xyXG4gIGxldCBpZCA9IDA7XHJcblxyXG4gIGxldCBwdXQgPSBmdW5jdGlvbihkb2N1bWVudCkge1xyXG4gICAgY2FjaGVzLm9wZW4oJ2dhemUnKS50aGVuKChjYWNoZSkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2FjaGUucHV0KCcvZ2F6ZS8nICsgaWQsIG5ldyBSZXNwb25zZShkb2N1bWVudCkpO1xyXG4gICAgICBpZCA9IGlkICsgMTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgZ2V0ID0gYXN5bmMgZnVuY3Rpb24oaWQsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKCdnYXplJyk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhY2hlLm1hdGNoKG5ldyBSZXF1ZXN0KCcvZ2F6ZS8nICsgaWQpKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKHZhbHVlKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBjbGVhciA9IGFzeW5jIGZ1bmN0aW9uKGNhY2hlTmFtZSwgY2FsbGJhY2spIHtcclxuICAgIGNhY2hlcy5kZWxldGUoY2FjaGVOYW1lKS50aGVuKChkZWxldGVkKSA9PiBjYWxsYmFjayhkZWxldGVkKSk7XHJcbiAgfVxyXG5cclxuICBsZXQgZ2V0S2V5cyA9IGFzeW5jIGZ1bmN0aW9uKGNhY2hlTmFtZSwgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4oY2FjaGVOYW1lKTtcclxuICAgIGNhY2hlLmtleXMoKS50aGVuKChrZXlzKSA9PiBjYWxsYmFjayhrZXlzKSk7XHJcbiAgfVxyXG5cclxuICBsZXQgdXNhZ2UgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci5zdG9yYWdlLmVzdGltYXRlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBwdXQsXHJcbiAgICBnZXQsXHJcbiAgICBjbGVhcixcclxuICAgIGdldEtleXMsXHJcbiAgICB1c2FnZVxyXG4gIH0pXHJcbn1cclxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==