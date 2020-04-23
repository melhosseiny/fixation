(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./app/js/diagnosis/diagnosis.js":
/*!***************************************!*\
  !*** ./app/js/diagnosis/diagnosis.js ***!
  \***************************************/
/*! exports provided: Diagnosis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diagnosis", function() { return Diagnosis; });
/* harmony import */ var _geo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geo.js */ "./app/js/geo.js");
/* harmony import */ var _eye_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../eye.js */ "./app/js/eye.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color.js */ "./app/js/color.js");
/* harmony import */ var _algorithm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithm.js */ "./app/js/algorithm.js");
/* harmony import */ var _material_snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/snackbar */ "./node_modules/@material/snackbar/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template.js */ "./app/js/diagnosis/template.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const snackbar = _material_snackbar__WEBPACK_IMPORTED_MODULE_4__["MDCSnackbar"].attachTo(document.querySelector('.mdc-snackbar'));



function Diagnosis(spec) {
  let socket = undefined;
  let gazeHistory = [];
  let dataPoints = [];
  let calibrationPoints = [];
  let fixationCount = 0;
  let prevFixation = undefined;
  let fixationWindow = _eye_js__WEBPACK_IMPORTED_MODULE_1__["INIT_FIXATION_WINDOW"];
  let detectFixations = false;
  let algorithm = Object(_algorithm_js__WEBPACK_IMPORTED_MODULE_3__["Algorithm"])({});
  let calibrating = false;

  let setMode = function () {
    detectFixations = !detectFixations;
  };

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
  let tPoints = [[0.1, 0.1], [0.9, 0.1], [0.5, 0.5], [0.1, 0.9], [0.9, 0.9]];
  let calibration = [];

  let getCalibration = function (context) {
    let diffX = [];
    let diffY = [];
    Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Rect"])({
      x: 0,
      y: 0,
      width: context.canvas.width,
      height: context.canvas.height
    }).clear(context, "#ccc");
    calibration.forEach(function (calibrationPoint, i) {
      context.lineWidth = 0.005 * context.canvas.height;
      Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Circle"])({
        x: tPoints[i][0],
        y: tPoints[i][1],
        r: 10
      }).render(context, 'rgba(0,0,0,0.25)');
      calibrationPoint.forEach(function (point) {
        context.lineWidth = 0.001 * context.canvas.height;
        context.strokeStyle = '#95c45d';
        context.beginPath();
        context.moveTo(tPoints[i][0] * context.canvas.width, tPoints[i][1] * context.canvas.height);
        context.lineTo(point.getX() * context.canvas.width, point.getY() * context.canvas.height);
        diffX.push(tPoints[i][0] - point.getX());
        diffY.push(tPoints[i][1] - point.getY());
        context.stroke();
      });
    });
    let absErrX = Math.abs(diffX.reduce(function (a, b) {
      return a + b;
    }) / diffX.length);
    let absErrY = Math.abs(diffY.reduce(function (a, b) {
      return a + b;
    }) / diffY.length);
    console.log("erorr", (1 - (absErrX + absErrY)) * 100);
  };

  let animatePoint = function (context, x, y, i) {
    if (r < 24) {
      r = Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Ease"])({}).linear(tsi, 5, 24, dsi);
    }

    if (tsi === dsi) {
      cx = Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Ease"])({}).linear(t, px, x, d);
      cy = Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Ease"])({}).linear(t, py, y, d);

      if (t === d) {
        r = Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Ease"])({}).linear(ts, 24, 6, ds);

        if (ts === ds) {
          clearInterval(interval);
          ts = 0;
          tsi = 0;
          console.log("calibration end", calibrationPoints);
          setTimeout(function () {
            calibrationPoints = gazeHistory.slice(20, gazeHistory.length);
            calibration.push(calibrationPoints);
            calibrationPoints = [];
          }, 1000);
        }
      }
    }

    Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Circle"])({
      x: cx,
      y: cy,
      r: r
    }).render(context, undefined, '#e36056');
    Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Circle"])({
      x: cx,
      y: cy,
      r: 5
    }).render(context, undefined, '#000');
  };

  let drawPoint = function (context, x, y, i) {
    px = cx;
    py = cy;
    t = 0;
    interval = setInterval(function () {
      Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Rect"])({
        x: 0,
        y: 0,
        width: context.canvas.width,
        height: context.canvas.height
      }).clear(context, "#ccc");
      animatePoint(context, x, y, i);

      if (tsi === dsi) {
        if (t === d) {
          ts += 10;
        } else {
          t += 10;
        }
      } else {
        tsi += 10;
      }
    }, 10);
  };

  let calibrate = function () {
    render(spec);
    let context = document.getElementById('a').getContext('2d');
    calibrating = true;
    context.canvas.focus();
    context.canvas.webkitRequestFullScreen();
    context.save();
    Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Rect"])({
      x: 0,
      y: 0,
      width: context.canvas.width,
      height: context.canvas.height
    }).clear(context, "#ccc");
    let timeout = 0;
    tPoints.forEach(function (point, i) {
      setTimeout(function () {
        drawPoint(context, point[0], point[1], i);
      }, timeout);
      timeout += 2000;
    });
    setTimeout(function () {
      getCalibration(context);
    }, 2000 * tPoints.length);
    context.restore();
  };

  let render = data => {
    Object(lit_html__WEBPACK_IMPORTED_MODULE_6__["render"])(Object(_template_js__WEBPACK_IMPORTED_MODULE_7__["template"])(data), document.getElementById('view'));
  };

  let init = () => {
    _extends(spec, {
      setMode,
      calibrate
    });

    render(spec);
  };

  init();

  let connect = function (context) {
    Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Rect"])({
      x: 0,
      y: 0,
      width: context.canvas.width,
      height: context.canvas.height
    }).clear(context);
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default.a.connect('http://localhost');
    socket.on('news', function (data) {
      data.X = data.X / _geo_js__WEBPACK_IMPORTED_MODULE_0__["DEVICE_WIDTH"];
      data.Y = data.Y / _geo_js__WEBPACK_IMPORTED_MODULE_0__["DEVICE_HEIGHT"];
      let p = Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Point"])({
        x: data.X,
        y: data.Y
      });

      if (gazeHistory.length === 30) {
        gazeHistory.shift();
      }

      gazeHistory.push(p);

      if (!calibrating) {
        if (detectFixations) {
          let gp = Object(_eye_js__WEBPACK_IMPORTED_MODULE_1__["GazePoint"])({
            x: data.X,
            y: data.Y,
            t: data.Timestamp
          });
          dataPoints.push(gp);

          if (dataPoints.length === fixationWindow) {
            let fixation = Object(_eye_js__WEBPACK_IMPORTED_MODULE_1__["GazeWindow"])({
              points: dataPoints
            }).detector();

            if (fixation) {
              fixationCount += 1;

              if (fixationCount === 20) {
                Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Rect"])({
                  x: 0,
                  y: 0,
                  width: context.canvas.width,
                  height: context.canvas.height
                }).clear(context);
                fixationCount = 0;
              }

              let normalizedDuration = algorithm.normalize(fixation.getDuration(), 100, 400) * 50;
              Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Circle"])({
                x: fixation.getX(),
                y: fixation.getY(),
                r: normalizedDuration
              }).render(context, _color_js__WEBPACK_IMPORTED_MODULE_2__["FIXATION_COLOR"]);

              if (prevFixation) {
                Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Line"])({
                  x1: prevFixation.getX(),
                  y1: prevFixation.getY(),
                  x2: fixation.getX(),
                  y2: fixation.getY()
                }).render(context, _color_js__WEBPACK_IMPORTED_MODULE_2__["SACCADE_COLOR"]);
              }

              prevFixation = fixation;
              dataPoints = [];
              fixationWindow = _eye_js__WEBPACK_IMPORTED_MODULE_1__["INIT_FIXATION_WINDOW"];
            } else {
              fixationWindow++;
            }
          }
        } else {
          Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Rect"])({
            x: 0,
            y: 0,
            width: context.canvas.width,
            height: context.canvas.height
          }).clear(context);
          p.render(context, _color_js__WEBPACK_IMPORTED_MODULE_2__["RAW_DATA_COLOR"]);
          Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Points"])({
            points: gazeHistory
          }).render(context, _color_js__WEBPACK_IMPORTED_MODULE_2__["RAW_DATA_COLOR"]);
        }

        let gazeXCtx = document.getElementById("gaze-x").getContext('2d');
        let gazeYCtx = document.getElementById("gaze-y").getContext('2d');
        Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Rect"])({
          x: 0,
          y: 0,
          width: gazeXCtx.canvas.width,
          height: gazeXCtx.canvas.height
        }).clear(gazeXCtx);
        Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Rect"])({
          x: 0,
          y: 0,
          width: gazeYCtx.canvas.width,
          height: gazeYCtx.canvas.height
        }).clear(gazeYCtx);
        Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Points"])({
          points: gazeHistory
        }).renderTimeline(gazeXCtx, 0, _color_js__WEBPACK_IMPORTED_MODULE_2__["RAW_DATA_COLOR"]);
        Object(_geo_js__WEBPACK_IMPORTED_MODULE_0__["Points"])({
          points: gazeHistory
        }).renderTimeline(gazeYCtx, 1, _color_js__WEBPACK_IMPORTED_MODULE_2__["RAW_DATA_COLOR"]);
      }
    });
    socket.on('connect_error', err => {
      snackbar.labelText = 'Can\'t connect to eye tracker.';
      snackbar.open();
    });
  };

  let disconnect = function () {
    socket.disconnect();
    console.log("disconnect from diagnosis");
  };

  return Object.freeze({
    connect,
    disconnect
  });
}

/***/ }),

/***/ "./app/js/diagnosis/template.js":
/*!**************************************!*\
  !*** ./app/js/diagnosis/template.js ***!
  \**************************************/
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
      </div>
      <div class="mdc-layout-grid__cell--span-4">
        <div class="mdc-switch">
          <div class="mdc-switch__track"></div>
          <div class="mdc-switch__thumb-underlay">
            <div class="mdc-switch__thumb">
              <input @click="${data.setMode}" type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch">
            </div>
          </div>
        </div>
        <label for="basic-switch">Detect fixations</label>
        <h5>Timeline</h5>
        <canvas id="gaze-x" width="100" height="30"></canvas>
        <canvas id="gaze-y" width="100" height="30"></canvas>
        <h5>Calibration</h5>
        <button @click="${data.calibrate}" class="mdc-button mdc-button--unelevated">
          <i class="material-icons mdc-button__icon" aria-hidden="true">adjust</i>
          <span class="mdc-button__label">Inspect calibration</span>
        </button>
      </div>
    </div>
  </div>
`;

let fullscreen = function () {
  const context = document.getElementById('a').getContext('2d');
  context.canvas.webkitRequestFullScreen();
};

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

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvYWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FwcC9qcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvanMvZGlhZ25vc2lzL2RpYWdub3Npcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvanMvZGlhZ25vc2lzL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9qcy9leWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2pzL2dlby5qcyIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbIkFsZ29yaXRobSIsInNwZWMiLCJyZWxhdGl2ZSIsImEiLCJ4IiwiYiIsImxpbWl0Iiwibm9ybWFsaXplIiwibWluIiwibWF4IiwiT2JqZWN0IiwiZnJlZXplIiwiUkFXX0RBVEFfQ09MT1IiLCJGSVhBVElPTl9DT0xPUiIsIlNBQ0NBREVfQ09MT1IiLCJDTEVBUl9DT0xPUiIsIkRJRkZFUkVOVF9DT0xPUlMiLCJIRUFUTUFQX0NPTE9SUyIsImhzdjJoc2wiLCJodWUiLCJzYXQiLCJ2YWwiLCJpIiwiaCIsInMiLCJ2IiwiTWF0aCIsInNxcnQiLCJoc2wiLCJwdXNoIiwicm91bmQiLCJDb2xvciIsImFsZ29yaXRobSIsImhlYXQiLCJyZWwiLCJkIiwibGVuZ3RoIiwic25hY2tiYXIiLCJNRENTbmFja2JhciIsImF0dGFjaFRvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRGlhZ25vc2lzIiwic29ja2V0IiwidW5kZWZpbmVkIiwiZ2F6ZUhpc3RvcnkiLCJkYXRhUG9pbnRzIiwiY2FsaWJyYXRpb25Qb2ludHMiLCJmaXhhdGlvbkNvdW50IiwicHJldkZpeGF0aW9uIiwiZml4YXRpb25XaW5kb3ciLCJJTklUX0ZJWEFUSU9OX1dJTkRPVyIsImRldGVjdEZpeGF0aW9ucyIsImNhbGlicmF0aW5nIiwic2V0TW9kZSIsInIiLCJpbnRlcnZhbCIsInQiLCJ0cyIsInRzaSIsImRzIiwiZHNpIiwiY3giLCJjeSIsInB4IiwicHkiLCJ0UG9pbnRzIiwiY2FsaWJyYXRpb24iLCJnZXRDYWxpYnJhdGlvbiIsImNvbnRleHQiLCJkaWZmWCIsImRpZmZZIiwiUmVjdCIsInkiLCJ3aWR0aCIsImNhbnZhcyIsImhlaWdodCIsImNsZWFyIiwiZm9yRWFjaCIsImNhbGlicmF0aW9uUG9pbnQiLCJsaW5lV2lkdGgiLCJDaXJjbGUiLCJyZW5kZXIiLCJwb2ludCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZ2V0WCIsImdldFkiLCJzdHJva2UiLCJhYnNFcnJYIiwiYWJzIiwicmVkdWNlIiwiYWJzRXJyWSIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlUG9pbnQiLCJFYXNlIiwibGluZWFyIiwiY2xlYXJJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJzbGljZSIsImRyYXdQb2ludCIsInNldEludGVydmFsIiwiY2FsaWJyYXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiZm9jdXMiLCJ3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbiIsInNhdmUiLCJ0aW1lb3V0IiwicmVzdG9yZSIsImRhdGEiLCJyZW5kZXJUbXBsIiwidGVtcGxhdGUiLCJpbml0IiwiY29ubmVjdCIsImlvIiwib24iLCJYIiwiREVWSUNFX1dJRFRIIiwiWSIsIkRFVklDRV9IRUlHSFQiLCJwIiwiUG9pbnQiLCJzaGlmdCIsImdwIiwiR2F6ZVBvaW50IiwiVGltZXN0YW1wIiwiZml4YXRpb24iLCJHYXplV2luZG93IiwicG9pbnRzIiwiZGV0ZWN0b3IiLCJub3JtYWxpemVkRHVyYXRpb24iLCJnZXREdXJhdGlvbiIsIkxpbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIlBvaW50cyIsImdhemVYQ3R4IiwiZ2F6ZVlDdHgiLCJyZW5kZXJUaW1lbGluZSIsImVyciIsImxhYmVsVGV4dCIsIm9wZW4iLCJkaXNjb25uZWN0IiwiaHRtbCIsImZ1bGxzY3JlZW4iLCJESVNQRVJTSU9OX1RIUkVTSE9MRCIsIkRVUkFUSU9OX1RIUkVTSE9MRCIsIlJFUExBWV9GUFMiLCJnZXRUaW1lc3RhbXAiLCJGaXhhdGlvbiIsImdldEZpeGF0aW9uIiwiZGlzcGVyc2lvbiIsInBvaW50c1giLCJtYXAiLCJwb2ludHNZIiwiY2VudHJvaWQiLCJ0b0ZpeGVkIiwid2luZG93Iiwic2NyZWVuIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJheGlzIiwiZGltIiwiZ2V0UiIsImFyYyIsIlBJIiwiZmlsbCIsIkdUX0JBU0UiLCJHVF9DT05TSURFUiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiY29udGFpbnNQb2ludCIsInciLCJ0aWxlcyIsInRpbGVTaXplIiwic3RhcnQiLCJyZWN0YW5nbGUiLCJzdHJva2VSZWN0IiwiSGVhdG1hcCIsImNvdW50IiwiVWludDE2QXJyYXkiLCJBcnJheUJ1ZmZlciIsImNvdW50Q2xvbmUiLCJnZXRDb3VudCIsInNldENvdW50IiwiYyIsImdldENvdW50QXJyIiwic2V0Q291bnRBcnIiLCJyZXNldCIsImNvdW50MiIsImJ1ZmZlciIsImJ5dGVMZW5ndGgiLCJnbG9iYWxfbWF4IiwidGlsZSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sU0FBU0EsU0FBVCxDQUFtQkMsSUFBSSxHQUFHLEVBQTFCLEVBQThCO0FBQ25DLE1BQUlDLFFBQVEsR0FBRyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUMvQixXQUFPLENBQUNELENBQUMsR0FBR0QsQ0FBTCxLQUFXRSxDQUFDLEdBQUdGLENBQWYsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBSUcsS0FBSyxHQUFHLFVBQVNILENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0FBQzVCLFFBQUdELENBQUMsR0FBR0QsQ0FBUCxFQUFVLE9BQU9BLENBQVA7QUFDVixRQUFHQyxDQUFDLEdBQUdDLENBQVAsRUFBVSxPQUFPQSxDQUFQO0FBQ1YsV0FBT0QsQ0FBUDtBQUNELEdBSkQ7O0FBTUEsTUFBSUcsU0FBUyxHQUFHLFVBQVNILENBQVQsRUFBWUksR0FBWixFQUFpQkMsR0FBakIsRUFBc0I7QUFDcEMsUUFBSUwsQ0FBQyxHQUFHSSxHQUFSLEVBQWE7QUFBRUosT0FBQyxHQUFHSSxHQUFKO0FBQVU7O0FBQ3pCLFFBQUlKLENBQUMsR0FBR0ssR0FBUixFQUFhO0FBQUVMLE9BQUMsR0FBR0ssR0FBSjtBQUFVOztBQUN6QixXQUFPLENBQUNMLENBQUMsR0FBR0ksR0FBTCxLQUFhQyxHQUFHLEdBQUdELEdBQW5CLENBQVA7QUFDRCxHQUpEOztBQU1BLFNBQU9FLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ25CVCxZQURtQjtBQUVuQkksU0FGbUI7QUFHbkJDO0FBSG1CLEdBQWQsQ0FBUDtBQUtELEM7Ozs7Ozs7Ozs7OztBQ3RCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1LLGNBQWMsR0FBRyxvQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsd0JBQXZCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLHdCQUF0QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxZQUFwQjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLEVBQXpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLEVBQXZCOztBQUVQLFNBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXFCQyxHQUFyQixFQUF5QkMsR0FBekIsRUFBOEI7QUFDNUIsU0FBTyxDQUNMRixHQURLLEVBRUxDLEdBQUcsR0FBQ0MsR0FBSixJQUFTLENBQUNGLEdBQUcsR0FBQyxDQUFDLElBQUVDLEdBQUgsSUFBUUMsR0FBYixJQUFrQixDQUFsQixHQUFvQkYsR0FBcEIsR0FBd0IsSUFBRUEsR0FBbkMsQ0FGSyxFQUdMQSxHQUFHLEdBQUMsQ0FIQyxDQUFQO0FBS0Q7O0FBRUQsS0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCLE1BQUlDLENBQUMsR0FBSUQsQ0FBQyxHQUFHLGlCQUFMLEdBQTBCLEdBQWxDO0FBQ0EsTUFBSUUsQ0FBQyxHQUFHLEdBQVI7QUFDQSxNQUFJQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLE1BQVFMLENBQUMsR0FBRyxpQkFBTCxHQUEwQixHQUEzQyxDQUFSO0FBQ0EsTUFBSW5CLENBQUMsR0FBRyxHQUFSO0FBRUEsTUFBSXlCLEdBQUcsR0FBR1YsT0FBTyxDQUFDSyxDQUFELEVBQUdDLENBQUgsRUFBS0MsQ0FBTCxDQUFqQjtBQUVBVCxrQkFBZ0IsQ0FBQ2EsSUFBakIsQ0FBc0IsVUFBVUgsSUFBSSxDQUFDSSxLQUFMLENBQVdGLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBTyxHQUFsQixDQUFWLEdBQW1DLEdBQW5DLEdBQXlDRixJQUFJLENBQUNJLEtBQUwsQ0FBV0YsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFPLEdBQWxCLENBQXpDLEdBQWtFLElBQWxFLEdBQXlFRixJQUFJLENBQUNJLEtBQUwsQ0FBV0YsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFPLEdBQWxCLENBQXpFLEdBQWtHLElBQWxHLEdBQXlHekIsQ0FBekcsR0FBNkcsR0FBbkk7QUFDRDs7QUFFRCxLQUFLLElBQUlvQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEdBQXBCLEVBQXlCQSxDQUFDLEVBQTFCLEVBQThCO0FBQzVCTixnQkFBYyxDQUFDWSxJQUFmLENBQW9CLFdBQVcsTUFBTU4sQ0FBakIsSUFBc0IsYUFBdEIsR0FBcUMsR0FBckMsR0FBMEMsR0FBOUQ7QUFDRDs7QUFFTSxTQUFTUSxLQUFULENBQWU5QixJQUFJLEdBQUcsRUFBdEIsRUFBMEI7QUFDL0IsTUFBSStCLFNBQVMsR0FBR2hDLCtEQUFTLENBQUMsRUFBRCxDQUF6Qjs7QUFFQSxNQUFJaUMsSUFBSSxHQUFHLFVBQVNDLEdBQVQsRUFBYztBQUN2QixRQUFJQyxDQUFDLEdBQUdILFNBQVMsQ0FBQzFCLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUI0QixHQUFuQixFQUF3QixDQUF4QixDQUFSO0FBQ0EsUUFBSUEsR0FBRyxLQUFLLENBQVosRUFBZSxPQUFPLGVBQVA7QUFDZixXQUFPakIsY0FBYyxDQUFDUyxJQUFJLENBQUNJLEtBQUwsQ0FBWUssQ0FBQyxJQUFJbEIsY0FBYyxDQUFDbUIsTUFBZixHQUF3QixDQUE1QixDQUFiLENBQUQsQ0FBckI7QUFDRCxHQUpEOztBQU1BLFNBQU8xQixNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQnNCO0FBRG1CLEdBQWQsQ0FBUDtBQUdELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNSSxRQUFRLEdBQUdDLDhEQUFXLENBQUNDLFFBQVosQ0FBcUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFyQixDQUFqQjtBQUVBO0FBQ0E7QUFFQTtBQUVPLFNBQVNDLFNBQVQsQ0FBbUJ6QyxJQUFuQixFQUF5QjtBQUM5QixNQUFJMEMsTUFBTSxHQUFHQyxTQUFiO0FBRUEsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxNQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxNQUFJQyxZQUFZLEdBQUdMLFNBQW5CO0FBQ0EsTUFBSU0sY0FBYyxHQUFHQyw0REFBckI7QUFDQSxNQUFJQyxlQUFlLEdBQUcsS0FBdEI7QUFDQSxNQUFJcEIsU0FBUyxHQUFHaEMsK0RBQVMsQ0FBQyxFQUFELENBQXpCO0FBQ0EsTUFBSXFELFdBQVcsR0FBRyxLQUFsQjs7QUFFQSxNQUFJQyxPQUFPLEdBQUcsWUFBVztBQUN2QkYsbUJBQWUsR0FBRyxDQUFDQSxlQUFuQjtBQUNELEdBRkQ7O0FBSUEsTUFBSUcsQ0FBQyxHQUFHLEVBQVI7QUFDQSxNQUFJQyxRQUFRLEdBQUdaLFNBQWY7QUFDQSxNQUFJYSxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUlDLEVBQUUsR0FBRyxDQUFUO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLENBQVY7QUFDQSxNQUFJeEIsQ0FBQyxHQUFHLEdBQVI7QUFDQSxNQUFJeUIsRUFBRSxHQUFHLEdBQVQ7QUFDQSxNQUFJQyxHQUFHLEdBQUcsR0FBVjtBQUNBLE1BQUlDLEVBQUUsR0FBRyxDQUFUO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLENBQVQ7QUFFQSxNQUFJQyxFQUFFLEdBQUcsQ0FBVDtBQUNBLE1BQUlDLEVBQUUsR0FBRyxDQUFUO0FBRUEsTUFBSUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFELEVBQVksQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFaLEVBQXVCLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FBdkIsRUFBa0MsQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFsQyxFQUE2QyxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQTdDLENBQWQ7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7O0FBRUEsTUFBSUMsY0FBYyxHQUFHLFVBQVNDLE9BQVQsRUFBa0I7QUFDckMsUUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxRQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBQyx3REFBSSxDQUFDO0FBQUNwRSxPQUFDLEVBQUUsQ0FBSjtBQUFPcUUsT0FBQyxFQUFFLENBQVY7QUFBYUMsV0FBSyxFQUFFTCxPQUFPLENBQUNNLE1BQVIsQ0FBZUQsS0FBbkM7QUFBMENFLFlBQU0sRUFBRVAsT0FBTyxDQUFDTSxNQUFSLENBQWVDO0FBQWpFLEtBQUQsQ0FBSixDQUErRUMsS0FBL0UsQ0FBcUZSLE9BQXJGLEVBQThGLE1BQTlGO0FBQ0FGLGVBQVcsQ0FBQ1csT0FBWixDQUFvQixVQUFTQyxnQkFBVCxFQUEyQnpELENBQTNCLEVBQThCO0FBQ2hEK0MsYUFBTyxDQUFDVyxTQUFSLEdBQW9CLFFBQU1YLE9BQU8sQ0FBQ00sTUFBUixDQUFlQyxNQUF6QztBQUNBSyw0REFBTSxDQUFDO0FBQUM3RSxTQUFDLEVBQUc4RCxPQUFPLENBQUM1QyxDQUFELENBQVAsQ0FBVyxDQUFYLENBQUw7QUFBb0JtRCxTQUFDLEVBQUVQLE9BQU8sQ0FBQzVDLENBQUQsQ0FBUCxDQUFXLENBQVgsQ0FBdkI7QUFBc0NpQyxTQUFDLEVBQUU7QUFBekMsT0FBRCxDQUFOLENBQXFEMkIsTUFBckQsQ0FBNERiLE9BQTVELEVBQXFFLGtCQUFyRTtBQUNBVSxzQkFBZ0IsQ0FBQ0QsT0FBakIsQ0FBeUIsVUFBU0ssS0FBVCxFQUFnQjtBQUN2Q2QsZUFBTyxDQUFDVyxTQUFSLEdBQW9CLFFBQU1YLE9BQU8sQ0FBQ00sTUFBUixDQUFlQyxNQUF6QztBQUVBUCxlQUFPLENBQUNlLFdBQVIsR0FBc0IsU0FBdEI7QUFDQWYsZUFBTyxDQUFDZ0IsU0FBUjtBQUNBaEIsZUFBTyxDQUFDaUIsTUFBUixDQUFlcEIsT0FBTyxDQUFDNUMsQ0FBRCxDQUFQLENBQVcsQ0FBWCxJQUFjK0MsT0FBTyxDQUFDTSxNQUFSLENBQWVELEtBQTVDLEVBQW1EUixPQUFPLENBQUM1QyxDQUFELENBQVAsQ0FBVyxDQUFYLElBQWMrQyxPQUFPLENBQUNNLE1BQVIsQ0FBZUMsTUFBaEY7QUFDQVAsZUFBTyxDQUFDa0IsTUFBUixDQUFlSixLQUFLLENBQUNLLElBQU4sS0FBYW5CLE9BQU8sQ0FBQ00sTUFBUixDQUFlRCxLQUEzQyxFQUFrRFMsS0FBSyxDQUFDTSxJQUFOLEtBQWFwQixPQUFPLENBQUNNLE1BQVIsQ0FBZUMsTUFBOUU7QUFDQU4sYUFBSyxDQUFDekMsSUFBTixDQUFXcUMsT0FBTyxDQUFDNUMsQ0FBRCxDQUFQLENBQVcsQ0FBWCxJQUFnQjZELEtBQUssQ0FBQ0ssSUFBTixFQUEzQjtBQUNBakIsYUFBSyxDQUFDMUMsSUFBTixDQUFXcUMsT0FBTyxDQUFDNUMsQ0FBRCxDQUFQLENBQVcsQ0FBWCxJQUFnQjZELEtBQUssQ0FBQ00sSUFBTixFQUEzQjtBQUNBcEIsZUFBTyxDQUFDcUIsTUFBUjtBQUNELE9BVkQ7QUFXRCxLQWREO0FBZUEsUUFBSUMsT0FBTyxHQUFHakUsSUFBSSxDQUFDa0UsR0FBTCxDQUFTdEIsS0FBSyxDQUFDdUIsTUFBTixDQUFhLFVBQVMxRixDQUFULEVBQVdFLENBQVgsRUFBYztBQUFFLGFBQU9GLENBQUMsR0FBR0UsQ0FBWDtBQUFjLEtBQTNDLElBQStDaUUsS0FBSyxDQUFDbEMsTUFBOUQsQ0FBZDtBQUNBLFFBQUkwRCxPQUFPLEdBQUdwRSxJQUFJLENBQUNrRSxHQUFMLENBQVNyQixLQUFLLENBQUNzQixNQUFOLENBQWEsVUFBUzFGLENBQVQsRUFBV0UsQ0FBWCxFQUFjO0FBQUUsYUFBT0YsQ0FBQyxHQUFHRSxDQUFYO0FBQWMsS0FBM0MsSUFBK0NrRSxLQUFLLENBQUNuQyxNQUE5RCxDQUFkO0FBQ0EyRCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQW9CLENBQUMsS0FBS0wsT0FBTyxHQUFHRyxPQUFmLENBQUQsSUFBMEIsR0FBOUM7QUFDRCxHQXRCRDs7QUF3QkEsTUFBSUcsWUFBWSxHQUFHLFVBQVM1QixPQUFULEVBQWtCakUsQ0FBbEIsRUFBcUJxRSxDQUFyQixFQUF3Qm5ELENBQXhCLEVBQTJCO0FBQzVDLFFBQUlpQyxDQUFDLEdBQUcsRUFBUixFQUFZO0FBQ1ZBLE9BQUMsR0FBRzJDLG9EQUFJLENBQUMsRUFBRCxDQUFKLENBQVNDLE1BQVQsQ0FBZ0J4QyxHQUFoQixFQUFxQixDQUFyQixFQUF3QixFQUF4QixFQUE0QkUsR0FBNUIsQ0FBSjtBQUNEOztBQUNELFFBQUlGLEdBQUcsS0FBS0UsR0FBWixFQUFpQjtBQUNmQyxRQUFFLEdBQUdvQyxvREFBSSxDQUFDLEVBQUQsQ0FBSixDQUFTQyxNQUFULENBQWdCMUMsQ0FBaEIsRUFBbUJPLEVBQW5CLEVBQXVCNUQsQ0FBdkIsRUFBMEIrQixDQUExQixDQUFMO0FBQ0E0QixRQUFFLEdBQUdtQyxvREFBSSxDQUFDLEVBQUQsQ0FBSixDQUFTQyxNQUFULENBQWdCMUMsQ0FBaEIsRUFBbUJRLEVBQW5CLEVBQXVCUSxDQUF2QixFQUEwQnRDLENBQTFCLENBQUw7O0FBQ0EsVUFBSXNCLENBQUMsS0FBS3RCLENBQVYsRUFBYTtBQUNYb0IsU0FBQyxHQUFHMkMsb0RBQUksQ0FBQyxFQUFELENBQUosQ0FBU0MsTUFBVCxDQUFnQnpDLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLENBQXhCLEVBQTJCRSxFQUEzQixDQUFKOztBQUNBLFlBQUlGLEVBQUUsS0FBS0UsRUFBWCxFQUFlO0FBQ2J3Qyx1QkFBYSxDQUFDNUMsUUFBRCxDQUFiO0FBQ0FFLFlBQUUsR0FBRyxDQUFMO0FBQ0FDLGFBQUcsR0FBRyxDQUFOO0FBQ0FvQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JqRCxpQkFBL0I7QUFDQXNELG9CQUFVLENBQUMsWUFBVztBQUNwQnRELDZCQUFpQixHQUFHRixXQUFXLENBQUN5RCxLQUFaLENBQWtCLEVBQWxCLEVBQXFCekQsV0FBVyxDQUFDVCxNQUFqQyxDQUFwQjtBQUNBK0IsdUJBQVcsQ0FBQ3RDLElBQVosQ0FBaUJrQixpQkFBakI7QUFDQUEsNkJBQWlCLEdBQUcsRUFBcEI7QUFDRCxXQUpTLEVBSVAsSUFKTyxDQUFWO0FBS0Q7QUFDRjtBQUNGOztBQUVEa0MsMERBQU0sQ0FBQztBQUFDN0UsT0FBQyxFQUFHMEQsRUFBTDtBQUFTVyxPQUFDLEVBQUVWLEVBQVo7QUFBZ0JSLE9BQUMsRUFBRUE7QUFBbkIsS0FBRCxDQUFOLENBQThCMkIsTUFBOUIsQ0FBcUNiLE9BQXJDLEVBQThDekIsU0FBOUMsRUFBeUQsU0FBekQ7QUFDQXFDLDBEQUFNLENBQUM7QUFBQzdFLE9BQUMsRUFBRzBELEVBQUw7QUFBU1csT0FBQyxFQUFFVixFQUFaO0FBQWdCUixPQUFDLEVBQUU7QUFBbkIsS0FBRCxDQUFOLENBQThCMkIsTUFBOUIsQ0FBcUNiLE9BQXJDLEVBQThDekIsU0FBOUMsRUFBeUQsTUFBekQ7QUFDRCxHQXpCRDs7QUEyQkEsTUFBSTJELFNBQVMsR0FBRyxVQUFTbEMsT0FBVCxFQUFrQmpFLENBQWxCLEVBQXFCcUUsQ0FBckIsRUFBd0JuRCxDQUF4QixFQUEyQjtBQUN6QzBDLE1BQUUsR0FBR0YsRUFBTDtBQUNBRyxNQUFFLEdBQUdGLEVBQUw7QUFDQU4sS0FBQyxHQUFHLENBQUo7QUFFQUQsWUFBUSxHQUFHZ0QsV0FBVyxDQUFDLFlBQVc7QUFDaENoQywwREFBSSxDQUFDO0FBQUNwRSxTQUFDLEVBQUUsQ0FBSjtBQUFPcUUsU0FBQyxFQUFFLENBQVY7QUFBYUMsYUFBSyxFQUFFTCxPQUFPLENBQUNNLE1BQVIsQ0FBZUQsS0FBbkM7QUFBMENFLGNBQU0sRUFBRVAsT0FBTyxDQUFDTSxNQUFSLENBQWVDO0FBQWpFLE9BQUQsQ0FBSixDQUErRUMsS0FBL0UsQ0FBcUZSLE9BQXJGLEVBQThGLE1BQTlGO0FBQ0E0QixrQkFBWSxDQUFDNUIsT0FBRCxFQUFVakUsQ0FBVixFQUFhcUUsQ0FBYixFQUFnQm5ELENBQWhCLENBQVo7O0FBQ0EsVUFBSXFDLEdBQUcsS0FBS0UsR0FBWixFQUFpQjtBQUNiLFlBQUlKLENBQUMsS0FBS3RCLENBQVYsRUFBYTtBQUFFdUIsWUFBRSxJQUFJLEVBQU47QUFBVyxTQUExQixNQUNLO0FBQUVELFdBQUMsSUFBSSxFQUFMO0FBQVU7QUFDcEIsT0FIRCxNQUdPO0FBQUVFLFdBQUcsSUFBSSxFQUFQO0FBQVk7QUFDdEIsS0FQcUIsRUFPbkIsRUFQbUIsQ0FBdEI7QUFRRCxHQWJEOztBQWVBLE1BQUk4QyxTQUFTLEdBQUcsWUFBVztBQUN6QnZCLFVBQU0sQ0FBQ2pGLElBQUQsQ0FBTjtBQUNBLFFBQUlvRSxPQUFPLEdBQUc3QixRQUFRLENBQUNrRSxjQUFULENBQXdCLEdBQXhCLEVBQTZCQyxVQUE3QixDQUF3QyxJQUF4QyxDQUFkO0FBQ0F0RCxlQUFXLEdBQUcsSUFBZDtBQUNBZ0IsV0FBTyxDQUFDTSxNQUFSLENBQWVpQyxLQUFmO0FBQ0F2QyxXQUFPLENBQUNNLE1BQVIsQ0FBZWtDLHVCQUFmO0FBQ0F4QyxXQUFPLENBQUN5QyxJQUFSO0FBQ0F0Qyx3REFBSSxDQUFDO0FBQUNwRSxPQUFDLEVBQUUsQ0FBSjtBQUFPcUUsT0FBQyxFQUFFLENBQVY7QUFBYUMsV0FBSyxFQUFFTCxPQUFPLENBQUNNLE1BQVIsQ0FBZUQsS0FBbkM7QUFBMENFLFlBQU0sRUFBRVAsT0FBTyxDQUFDTSxNQUFSLENBQWVDO0FBQWpFLEtBQUQsQ0FBSixDQUErRUMsS0FBL0UsQ0FBcUZSLE9BQXJGLEVBQThGLE1BQTlGO0FBRUEsUUFBSTBDLE9BQU8sR0FBRyxDQUFkO0FBQ0E3QyxXQUFPLENBQUNZLE9BQVIsQ0FBZ0IsVUFBU0ssS0FBVCxFQUFnQjdELENBQWhCLEVBQW1CO0FBQ2pDK0UsZ0JBQVUsQ0FBQyxZQUFZO0FBQUVFLGlCQUFTLENBQUNsQyxPQUFELEVBQVNjLEtBQUssQ0FBQyxDQUFELENBQWQsRUFBa0JBLEtBQUssQ0FBQyxDQUFELENBQXZCLEVBQTRCN0QsQ0FBNUIsQ0FBVDtBQUF5QyxPQUF4RCxFQUEwRHlGLE9BQTFELENBQVY7QUFDRUEsYUFBTyxJQUFJLElBQVg7QUFDSCxLQUhEO0FBS0FWLGNBQVUsQ0FBQyxZQUFXO0FBQ3BCakMsb0JBQWMsQ0FBQ0MsT0FBRCxDQUFkO0FBQ0QsS0FGUyxFQUVQLE9BQUtILE9BQU8sQ0FBQzlCLE1BRk4sQ0FBVjtBQUlBaUMsV0FBTyxDQUFDMkMsT0FBUjtBQUNELEdBcEJEOztBQXNCQSxNQUFJOUIsTUFBTSxHQUFHK0IsSUFBSSxJQUFJO0FBQ25CQywyREFBVSxDQUFDQyw2REFBUSxDQUFDRixJQUFELENBQVQsRUFBaUJ6RSxRQUFRLENBQUNrRSxjQUFULENBQXdCLE1BQXhCLENBQWpCLENBQVY7QUFDRCxHQUZEOztBQUlBLE1BQUlVLElBQUksR0FBRyxNQUFNO0FBQ2YsYUFBY25ILElBQWQsRUFBb0I7QUFDbEJxRCxhQURrQjtBQUVsQm1EO0FBRmtCLEtBQXBCOztBQUlBdkIsVUFBTSxDQUFDakYsSUFBRCxDQUFOO0FBQ0QsR0FORDs7QUFRQW1ILE1BQUk7O0FBRUosTUFBSUMsT0FBTyxHQUFHLFVBQVNoRCxPQUFULEVBQWtCO0FBQzlCRyx3REFBSSxDQUFDO0FBQUNwRSxPQUFDLEVBQUUsQ0FBSjtBQUFPcUUsT0FBQyxFQUFFLENBQVY7QUFBYUMsV0FBSyxFQUFFTCxPQUFPLENBQUNNLE1BQVIsQ0FBZUQsS0FBbkM7QUFBMENFLFlBQU0sRUFBRVAsT0FBTyxDQUFDTSxNQUFSLENBQWVDO0FBQWpFLEtBQUQsQ0FBSixDQUErRUMsS0FBL0UsQ0FBcUZSLE9BQXJGO0FBQ0ExQixVQUFNLEdBQUcyRSx1REFBRSxDQUFDRCxPQUFILENBQVcsa0JBQVgsQ0FBVDtBQUNBMUUsVUFBTSxDQUFDNEUsRUFBUCxDQUFVLE1BQVYsRUFBa0IsVUFBVU4sSUFBVixFQUFnQjtBQUNoQ0EsVUFBSSxDQUFDTyxDQUFMLEdBQVNQLElBQUksQ0FBQ08sQ0FBTCxHQUFTQyxvREFBbEI7QUFDQVIsVUFBSSxDQUFDUyxDQUFMLEdBQVNULElBQUksQ0FBQ1MsQ0FBTCxHQUFTQyxxREFBbEI7QUFFQSxVQUFJQyxDQUFDLEdBQUdDLHFEQUFLLENBQUM7QUFBQ3pILFNBQUMsRUFBRTZHLElBQUksQ0FBQ08sQ0FBVDtBQUFZL0MsU0FBQyxFQUFFd0MsSUFBSSxDQUFDUztBQUFwQixPQUFELENBQWI7O0FBQ0EsVUFBSTdFLFdBQVcsQ0FBQ1QsTUFBWixLQUF1QixFQUEzQixFQUErQjtBQUFFUyxtQkFBVyxDQUFDaUYsS0FBWjtBQUFzQjs7QUFDdkRqRixpQkFBVyxDQUFDaEIsSUFBWixDQUFpQitGLENBQWpCOztBQUVBLFVBQUksQ0FBQ3ZFLFdBQUwsRUFBa0I7QUFDaEIsWUFBSUQsZUFBSixFQUFxQjtBQUNuQixjQUFJMkUsRUFBRSxHQUFHQyx5REFBUyxDQUFDO0FBQUM1SCxhQUFDLEVBQUU2RyxJQUFJLENBQUNPLENBQVQ7QUFBWS9DLGFBQUMsRUFBRXdDLElBQUksQ0FBQ1MsQ0FBcEI7QUFBdUJqRSxhQUFDLEVBQUV3RCxJQUFJLENBQUNnQjtBQUEvQixXQUFELENBQWxCO0FBQ0FuRixvQkFBVSxDQUFDakIsSUFBWCxDQUFnQmtHLEVBQWhCOztBQUNBLGNBQUlqRixVQUFVLENBQUNWLE1BQVgsS0FBc0JjLGNBQTFCLEVBQTBDO0FBQ3hDLGdCQUFJZ0YsUUFBUSxHQUFHQywwREFBVSxDQUFDO0FBQUNDLG9CQUFNLEVBQUV0RjtBQUFULGFBQUQsQ0FBVixDQUFpQ3VGLFFBQWpDLEVBQWY7O0FBQ0EsZ0JBQUlILFFBQUosRUFBYztBQUNabEYsMkJBQWEsSUFBSSxDQUFqQjs7QUFDQSxrQkFBSUEsYUFBYSxLQUFLLEVBQXRCLEVBQTBCO0FBQ3hCd0Isb0VBQUksQ0FBQztBQUFDcEUsbUJBQUMsRUFBRSxDQUFKO0FBQU9xRSxtQkFBQyxFQUFFLENBQVY7QUFBYUMsdUJBQUssRUFBRUwsT0FBTyxDQUFDTSxNQUFSLENBQWVELEtBQW5DO0FBQTBDRSx3QkFBTSxFQUFFUCxPQUFPLENBQUNNLE1BQVIsQ0FBZUM7QUFBakUsaUJBQUQsQ0FBSixDQUErRUMsS0FBL0UsQ0FBcUZSLE9BQXJGO0FBQ0FyQiw2QkFBYSxHQUFHLENBQWhCO0FBQ0Q7O0FBRUQsa0JBQUlzRixrQkFBa0IsR0FBR3RHLFNBQVMsQ0FBQ3pCLFNBQVYsQ0FBb0IySCxRQUFRLENBQUNLLFdBQVQsRUFBcEIsRUFBNEMsR0FBNUMsRUFBaUQsR0FBakQsSUFBd0QsRUFBakY7QUFDQXRELG9FQUFNLENBQUM7QUFBQzdFLGlCQUFDLEVBQUU4SCxRQUFRLENBQUMxQyxJQUFULEVBQUo7QUFBcUJmLGlCQUFDLEVBQUV5RCxRQUFRLENBQUN6QyxJQUFULEVBQXhCO0FBQXlDbEMsaUJBQUMsRUFBRStFO0FBQTVDLGVBQUQsQ0FBTixDQUF3RXBELE1BQXhFLENBQStFYixPQUEvRSxFQUF3RnhELHdEQUF4Rjs7QUFFQSxrQkFBSW9DLFlBQUosRUFBa0I7QUFDaEJ1RixvRUFBSSxDQUFDO0FBQUNDLG9CQUFFLEVBQUV4RixZQUFZLENBQUN1QyxJQUFiLEVBQUw7QUFBMEJrRCxvQkFBRSxFQUFFekYsWUFBWSxDQUFDd0MsSUFBYixFQUE5QjtBQUFtRGtELG9CQUFFLEVBQUVULFFBQVEsQ0FBQzFDLElBQVQsRUFBdkQ7QUFBd0VvRCxvQkFBRSxFQUFFVixRQUFRLENBQUN6QyxJQUFUO0FBQTVFLGlCQUFELENBQUosQ0FBbUdQLE1BQW5HLENBQTBHYixPQUExRyxFQUFtSHZELHVEQUFuSDtBQUNEOztBQUNEbUMsMEJBQVksR0FBR2lGLFFBQWY7QUFFQXBGLHdCQUFVLEdBQUcsRUFBYjtBQUNBSSw0QkFBYyxHQUFHQyw0REFBakI7QUFDRCxhQWpCRCxNQWlCTztBQUNMRCw0QkFBYztBQUNmO0FBQ0Y7QUFDRixTQTFCRCxNQTBCTztBQUNMc0IsOERBQUksQ0FBQztBQUFDcEUsYUFBQyxFQUFFLENBQUo7QUFBT3FFLGFBQUMsRUFBRSxDQUFWO0FBQWFDLGlCQUFLLEVBQUVMLE9BQU8sQ0FBQ00sTUFBUixDQUFlRCxLQUFuQztBQUEwQ0Usa0JBQU0sRUFBRVAsT0FBTyxDQUFDTSxNQUFSLENBQWVDO0FBQWpFLFdBQUQsQ0FBSixDQUErRUMsS0FBL0UsQ0FBcUZSLE9BQXJGO0FBQ0F1RCxXQUFDLENBQUMxQyxNQUFGLENBQVNiLE9BQVQsRUFBa0J6RCx3REFBbEI7QUFDQWlJLGdFQUFNLENBQUM7QUFBQ1Qsa0JBQU0sRUFBRXZGO0FBQVQsV0FBRCxDQUFOLENBQThCcUMsTUFBOUIsQ0FBcUNiLE9BQXJDLEVBQThDekQsd0RBQTlDO0FBQ0Q7O0FBRUQsWUFBSWtJLFFBQVEsR0FBR3RHLFFBQVEsQ0FBQ2tFLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLFVBQWxDLENBQTZDLElBQTdDLENBQWY7QUFDQSxZQUFJb0MsUUFBUSxHQUFHdkcsUUFBUSxDQUFDa0UsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsVUFBbEMsQ0FBNkMsSUFBN0MsQ0FBZjtBQUVBbkMsNERBQUksQ0FBQztBQUFDcEUsV0FBQyxFQUFFLENBQUo7QUFBT3FFLFdBQUMsRUFBRSxDQUFWO0FBQWFDLGVBQUssRUFBRW9FLFFBQVEsQ0FBQ25FLE1BQVQsQ0FBZ0JELEtBQXBDO0FBQTJDRSxnQkFBTSxFQUFFa0UsUUFBUSxDQUFDbkUsTUFBVCxDQUFnQkM7QUFBbkUsU0FBRCxDQUFKLENBQWlGQyxLQUFqRixDQUF1RmlFLFFBQXZGO0FBQ0F0RSw0REFBSSxDQUFDO0FBQUNwRSxXQUFDLEVBQUUsQ0FBSjtBQUFPcUUsV0FBQyxFQUFFLENBQVY7QUFBYUMsZUFBSyxFQUFFcUUsUUFBUSxDQUFDcEUsTUFBVCxDQUFnQkQsS0FBcEM7QUFBMkNFLGdCQUFNLEVBQUVtRSxRQUFRLENBQUNwRSxNQUFULENBQWdCQztBQUFuRSxTQUFELENBQUosQ0FBaUZDLEtBQWpGLENBQXVGa0UsUUFBdkY7QUFFQUYsOERBQU0sQ0FBQztBQUFDVCxnQkFBTSxFQUFFdkY7QUFBVCxTQUFELENBQU4sQ0FBOEJtRyxjQUE5QixDQUE2Q0YsUUFBN0MsRUFBdUQsQ0FBdkQsRUFBMERsSSx3REFBMUQ7QUFDQWlJLDhEQUFNLENBQUM7QUFBQ1QsZ0JBQU0sRUFBRXZGO0FBQVQsU0FBRCxDQUFOLENBQThCbUcsY0FBOUIsQ0FBNkNELFFBQTdDLEVBQXVELENBQXZELEVBQTBEbkksd0RBQTFEO0FBQ0Q7QUFDRixLQWxERDtBQW9EQStCLFVBQU0sQ0FBQzRFLEVBQVAsQ0FBVSxlQUFWLEVBQTJCMEIsR0FBRyxJQUFJO0FBQ2hDNUcsY0FBUSxDQUFDNkcsU0FBVCxHQUFxQixnQ0FBckI7QUFDQTdHLGNBQVEsQ0FBQzhHLElBQVQ7QUFDRCxLQUhEO0FBSUQsR0EzREQ7O0FBNkRBLE1BQUlDLFVBQVUsR0FBRyxZQUFXO0FBQzFCekcsVUFBTSxDQUFDeUcsVUFBUDtBQUNBckQsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7QUFDRCxHQUhEOztBQUtBLFNBQU90RixNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQjBHLFdBRG1CO0FBRW5CK0I7QUFGbUIsR0FBZCxDQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7O0FDOU5EO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTWpDLFFBQVEsR0FBSUYsSUFBRCxJQUFVb0MsNkNBQUs7Ozs7MEJBSWJDLFVBQVc7Ozs7Ozs7K0JBT05yQyxJQUFJLENBQUMzRCxPQUFROzs7Ozs7Ozs7MEJBU2xCMkQsSUFBSSxDQUFDUixTQUFVOzs7Ozs7O0NBcEJsQzs7QUE2QlAsSUFBSTZDLFVBQVUsR0FBRyxZQUFXO0FBQzFCLFFBQU1qRixPQUFPLEdBQUc3QixRQUFRLENBQUNrRSxjQUFULENBQXdCLEdBQXhCLEVBQTZCQyxVQUE3QixDQUF3QyxJQUF4QyxDQUFoQjtBQUNBdEMsU0FBTyxDQUFDTSxNQUFSLENBQWVrQyx1QkFBZjtBQUNELENBSEQsQzs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTTBDLG9CQUFvQixHQUFHLEVBQTdCLEMsQ0FBaUM7O0FBQ2pDLE1BQU1DLGtCQUFrQixHQUFHLEdBQTNCLEMsQ0FBZ0M7O0FBQ2hDLE1BQU1yRyxvQkFBb0IsR0FBRyxFQUE3QixDLENBQWlDOztBQUVqQyxNQUFNc0csVUFBVSxHQUFHLENBQW5CO0FBRUEsU0FBU3pCLFNBQVQsQ0FBbUIvSCxJQUFJLEdBQUc7QUFBQ0csR0FBQyxFQUFFLENBQUo7QUFBT3FFLEdBQUMsRUFBRSxDQUFWO0FBQWFoQixHQUFDLEVBQUU7QUFBaEIsQ0FBMUIsRUFBOEM7QUFDbkQsTUFBSTtBQUFDckQsS0FBRDtBQUFHcUUsS0FBSDtBQUFLaEI7QUFBTCxNQUFVeEQsSUFBZDs7QUFFQSxNQUFJdUYsSUFBSSxHQUFHLFlBQVc7QUFBRSxXQUFPcEYsQ0FBUDtBQUFXLEdBQW5DOztBQUNBLE1BQUlxRixJQUFJLEdBQUcsWUFBVztBQUFFLFdBQU9oQixDQUFQO0FBQVcsR0FBbkM7O0FBQ0EsTUFBSWlGLFlBQVksR0FBRyxZQUFXO0FBQUUsV0FBT2pHLENBQVA7QUFBVyxHQUEzQzs7QUFFQSxTQUFPL0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDbkI2RSxRQURtQjtBQUVuQkMsUUFGbUI7QUFHbkJpRTtBQUhtQixHQUFkLENBQVA7QUFLRDtBQUVNLFNBQVNDLFFBQVQsQ0FBa0IxSixJQUFJLEdBQUc7QUFBQ0csR0FBQyxFQUFFLENBQUo7QUFBT3FFLEdBQUMsRUFBRSxDQUFWO0FBQWFoQixHQUFDLEVBQUUsQ0FBaEI7QUFBbUJ0QixHQUFDLEVBQUU7QUFBdEIsQ0FBekIsRUFBbUQ7QUFDeEQsTUFBSTtBQUFDL0IsS0FBRDtBQUFHcUUsS0FBSDtBQUFLaEIsS0FBTDtBQUFPdEI7QUFBUCxNQUFZbEMsSUFBaEI7O0FBRUEsTUFBSXVGLElBQUksR0FBRyxZQUFXO0FBQUUsV0FBT3BGLENBQVA7QUFBVyxHQUFuQzs7QUFDQSxNQUFJcUYsSUFBSSxHQUFHLFlBQVc7QUFBRSxXQUFPaEIsQ0FBUDtBQUFXLEdBQW5DOztBQUNBLE1BQUlpRixZQUFZLEdBQUcsWUFBVztBQUFFLFdBQU9qRyxDQUFQO0FBQVcsR0FBM0M7O0FBQ0EsTUFBSThFLFdBQVcsR0FBRyxZQUFXO0FBQUUsV0FBT3BHLENBQVA7QUFBVyxHQUExQzs7QUFFQSxNQUFJeUgsV0FBVyxHQUFHLFlBQVc7QUFDM0IsV0FBTztBQUFDeEosT0FBQyxFQUFFQSxDQUFKO0FBQU9xRSxPQUFDLEVBQUVBO0FBQVYsS0FBUDtBQUNELEdBRkQ7O0FBSUEsU0FBTy9ELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ25CNkUsUUFEbUI7QUFFbkJDLFFBRm1CO0FBR25CaUUsZ0JBSG1CO0FBSW5CbkIsZUFKbUI7QUFLbkJxQjtBQUxtQixHQUFkLENBQVA7QUFPRDtBQUVNLFNBQVN6QixVQUFULENBQW9CbEksSUFBSSxHQUFHO0FBQUNtSSxRQUFNLEVBQUU7QUFBVCxDQUEzQixFQUF5QztBQUM5QyxNQUFJO0FBQUNBO0FBQUQsTUFBV25JLElBQWY7O0FBRUEsTUFBSTRKLFVBQVUsR0FBRyxZQUFXO0FBQzFCLFFBQUlDLE9BQU8sR0FBRzFCLE1BQU0sQ0FBQzJCLEdBQVAsQ0FBV25DLENBQUMsSUFBSUEsQ0FBQyxDQUFDcEMsSUFBRixLQUFXaUMsb0RBQTNCLENBQWQ7QUFDQSxRQUFJdUMsT0FBTyxHQUFHNUIsTUFBTSxDQUFDMkIsR0FBUCxDQUFXbkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNuQyxJQUFGLEtBQVdrQyxxREFBM0IsQ0FBZDtBQUVBLFdBQVFqRyxJQUFJLENBQUNqQixHQUFMLENBQVMsR0FBR3FKLE9BQVosSUFBdUJwSSxJQUFJLENBQUNsQixHQUFMLENBQVMsR0FBR3NKLE9BQVosQ0FBeEIsSUFBaURwSSxJQUFJLENBQUNqQixHQUFMLENBQVMsR0FBR3VKLE9BQVosSUFBdUJ0SSxJQUFJLENBQUNsQixHQUFMLENBQVMsR0FBR3dKLE9BQVosQ0FBeEUsQ0FBUDtBQUNELEdBTEQ7O0FBT0EsTUFBSUMsUUFBUSxHQUFHLFlBQVc7QUFDeEIsUUFBSUgsT0FBTyxHQUFHMUIsTUFBTSxDQUFDMkIsR0FBUCxDQUFXbkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNwQyxJQUFGLEVBQWhCLENBQWQ7QUFDQSxRQUFJd0UsT0FBTyxHQUFHNUIsTUFBTSxDQUFDMkIsR0FBUCxDQUFXbkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNuQyxJQUFGLEVBQWhCLENBQWQ7QUFFQSxXQUFPa0UsUUFBUSxDQUFDO0FBQ2R2SixPQUFDLEVBQUUsQ0FBQyxDQUFDMEosT0FBTyxDQUFDakUsTUFBUixDQUFlLENBQUMxRixDQUFELEVBQUdFLENBQUgsS0FBU0YsQ0FBQyxHQUFDRSxDQUExQixJQUErQnlKLE9BQU8sQ0FBQzFILE1BQXhDLEVBQWdEOEgsT0FBaEQsQ0FBd0QsQ0FBeEQsQ0FEVTtBQUVkekYsT0FBQyxFQUFFLENBQUMsQ0FBQ3VGLE9BQU8sQ0FBQ25FLE1BQVIsQ0FBZSxDQUFDMUYsQ0FBRCxFQUFHRSxDQUFILEtBQVNGLENBQUMsR0FBQ0UsQ0FBMUIsSUFBK0IySixPQUFPLENBQUM1SCxNQUF4QyxFQUFnRDhILE9BQWhELENBQXdELENBQXhELENBRlU7QUFHZHpHLE9BQUMsRUFBRSxDQUFFMkUsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVc0IsWUFBVixFQUFELENBQTJCUSxPQUEzQixDQUFtQyxDQUFuQyxDQUhVO0FBSWQvSCxPQUFDLEVBQUUsQ0FBQyxDQUFDaUcsTUFBTSxDQUFDQSxNQUFNLENBQUNoRyxNQUFQLEdBQWMsQ0FBZixDQUFOLENBQXdCc0gsWUFBeEIsS0FBeUN0QixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVzQixZQUFWLEVBQTFDLEVBQW9FUSxPQUFwRSxDQUE0RSxDQUE1RTtBQUpVLEtBQUQsQ0FBZjtBQU1ELEdBVkQ7O0FBWUEsTUFBSTdCLFFBQVEsR0FBRyxZQUFXO0FBQ3hCLFFBQUl3QixVQUFVLEtBQUtOLG9CQUFuQixFQUF5QztBQUN2QyxhQUFPVSxRQUFRLEVBQWY7QUFDRDs7QUFDRCxXQUFPLEtBQVA7QUFDRCxHQUxEOztBQU9BLFNBQU92SixNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQjBIO0FBRG1CLEdBQWQsQ0FBUDtBQUdELEM7Ozs7Ozs7Ozs7OztBQzNFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNWixZQUFZLEdBQUcwQyxNQUFNLENBQUNDLE1BQVAsQ0FBYzFGLEtBQWQsR0FBc0J5RixNQUFNLENBQUNFLGdCQUFsRDtBQUNBLE1BQU0xQyxhQUFhLEdBQUd3QyxNQUFNLENBQUNDLE1BQVAsQ0FBY3hGLE1BQWQsR0FBdUJ1RixNQUFNLENBQUNFLGdCQUFwRDtBQUVQLElBQUlDLEtBQUssR0FBR3ZJLHVEQUFLLENBQUMsRUFBRCxDQUFqQjtBQUNBLElBQUlDLFNBQVMsR0FBR2hDLCtEQUFTLENBQUMsRUFBRCxDQUF6QjtBQUVPLFNBQVM2SCxLQUFULENBQWU1SCxJQUFJLEdBQUc7QUFBQ0csR0FBQyxFQUFFLENBQUo7QUFBT3FFLEdBQUMsRUFBRTtBQUFWLENBQXRCLEVBQW9DO0FBQ3pDLE1BQUk7QUFBQ3JFLEtBQUQ7QUFBSXFFO0FBQUosTUFBU3hFLElBQWI7O0FBRUEsTUFBSXVGLElBQUksR0FBRyxZQUFXO0FBQUUsV0FBT3BGLENBQVA7QUFBVyxHQUFuQzs7QUFDQSxNQUFJcUYsSUFBSSxHQUFHLFlBQVc7QUFBRSxXQUFPaEIsQ0FBUDtBQUFXLEdBQW5DOztBQUVBLE1BQUlTLE1BQU0sR0FBRyxVQUFTYixPQUFULEVBQWtCa0csU0FBbEIsRUFBNkI7QUFDeENsRyxXQUFPLENBQUNrRyxTQUFSLEdBQW9CQSxTQUFwQjtBQUNBbEcsV0FBTyxDQUFDbUcsUUFBUixDQUFpQnBLLENBQUMsR0FBQ2lFLE9BQU8sQ0FBQ00sTUFBUixDQUFlRCxLQUFsQyxFQUF5Q0QsQ0FBQyxHQUFDSixPQUFPLENBQUNNLE1BQVIsQ0FBZUMsTUFBMUQsRUFBa0UsUUFBTVAsT0FBTyxDQUFDTSxNQUFSLENBQWVELEtBQXZGLEVBQThGLFFBQU1MLE9BQU8sQ0FBQ00sTUFBUixDQUFlRCxLQUFuSDtBQUNELEdBSEQ7O0FBS0EsU0FBT2hFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ25CNkUsUUFEbUI7QUFFbkJDLFFBRm1CO0FBR25CUDtBQUhtQixHQUFkLENBQVA7QUFLRDtBQUVNLFNBQVMyRCxNQUFULENBQWdCNUksSUFBSSxHQUFHO0FBQUNtSSxRQUFNLEVBQUU7QUFBVCxDQUF2QixFQUFxQztBQUMxQyxNQUFJO0FBQUNBO0FBQUQsTUFBV25JLElBQWY7O0FBRUEsTUFBSWlGLE1BQU0sR0FBRyxVQUFTYixPQUFULEVBQWtCa0csU0FBbEIsRUFBNkI7QUFDeENsRyxXQUFPLENBQUNrRyxTQUFSLEdBQW9CQSxTQUFwQjtBQUNBbkMsVUFBTSxDQUFDdEQsT0FBUCxDQUFlLFVBQVM4QyxDQUFULEVBQVk7QUFDekJBLE9BQUMsQ0FBQzFDLE1BQUYsQ0FBU2IsT0FBVCxFQUFrQmtHLFNBQWxCO0FBQ0QsS0FGRDtBQUdELEdBTEQ7O0FBT0EsTUFBSXZCLGNBQWMsR0FBRyxVQUFTM0UsT0FBVCxFQUFrQm9HLElBQWxCLEVBQXdCRixTQUF4QixFQUFtQztBQUN0RGxHLFdBQU8sQ0FBQ2tHLFNBQVIsR0FBb0JBLFNBQXBCO0FBQ0FuQyxVQUFNLENBQUN0RCxPQUFQLENBQWUsVUFBUzhDLENBQVQsRUFBWXRHLENBQVosRUFBZTtBQUM1QixVQUFJb0osR0FBRyxHQUFHRCxJQUFJLEtBQUssQ0FBVCxHQUFZN0MsQ0FBQyxDQUFDcEMsSUFBRixFQUFaLEdBQXVCb0MsQ0FBQyxDQUFDbkMsSUFBRixFQUFqQztBQUNBcEIsYUFBTyxDQUFDbUcsUUFBUixDQUFrQmxKLENBQUMsR0FBQyxFQUFILEdBQU8rQyxPQUFPLENBQUNNLE1BQVIsQ0FBZUQsS0FBdkMsRUFBOEMsQ0FBQyxJQUFFZ0csR0FBSCxJQUFRckcsT0FBTyxDQUFDTSxNQUFSLENBQWVDLE1BQXJFLEVBQTZFUCxPQUFPLENBQUNNLE1BQVIsQ0FBZUQsS0FBZixHQUFxQixFQUFsRyxFQUFzRyxDQUF0RztBQUNELEtBSEQ7QUFJRCxHQU5EOztBQVFBLFNBQU9oRSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQnVFLFVBRG1CO0FBRW5COEQ7QUFGbUIsR0FBZCxDQUFQO0FBSUQ7QUFFTSxTQUFTUixJQUFULENBQWN2SSxJQUFJLEdBQUc7QUFBQ3dJLElBQUUsRUFBRSxDQUFMO0FBQVFDLElBQUUsRUFBRSxDQUFaO0FBQWVDLElBQUUsRUFBRSxDQUFuQjtBQUFzQkMsSUFBRSxFQUFFO0FBQTFCLENBQXJCLEVBQW1EO0FBQ3hELE1BQUk7QUFBQ0gsTUFBRDtBQUFLQyxNQUFMO0FBQVNDLE1BQVQ7QUFBYUM7QUFBYixNQUFtQjNJLElBQXZCOztBQUVBLE1BQUlpRixNQUFNLEdBQUcsVUFBU2IsT0FBVCxFQUFrQmUsV0FBbEIsRUFBK0I7QUFDMUNmLFdBQU8sQ0FBQ2UsV0FBUixHQUFzQkEsV0FBdEI7QUFDQWYsV0FBTyxDQUFDZ0IsU0FBUjtBQUNBaEIsV0FBTyxDQUFDaUIsTUFBUixDQUFlbUQsRUFBRSxHQUFDcEUsT0FBTyxDQUFDTSxNQUFSLENBQWVELEtBQWpDLEVBQXdDZ0UsRUFBRSxHQUFDckUsT0FBTyxDQUFDTSxNQUFSLENBQWVDLE1BQTFEO0FBQ0FQLFdBQU8sQ0FBQ2tCLE1BQVIsQ0FBZW9ELEVBQUUsR0FBQ3RFLE9BQU8sQ0FBQ00sTUFBUixDQUFlRCxLQUFqQyxFQUF3Q2tFLEVBQUUsR0FBQ3ZFLE9BQU8sQ0FBQ00sTUFBUixDQUFlQyxNQUExRDtBQUNBUCxXQUFPLENBQUNxQixNQUFSO0FBQ0QsR0FORDs7QUFRQSxTQUFPaEYsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDbkJ1RTtBQURtQixHQUFkLENBQVA7QUFHRDtBQUVNLFNBQVNELE1BQVQsQ0FBZ0JoRixJQUFJLEdBQUc7QUFBQ0csR0FBQyxFQUFFLENBQUo7QUFBT3FFLEdBQUMsRUFBRSxDQUFWO0FBQWFsQixHQUFDLEVBQUU7QUFBaEIsQ0FBdkIsRUFBMkM7QUFDaEQsTUFBSTtBQUFDbkQsS0FBRDtBQUFJcUUsS0FBSjtBQUFPbEI7QUFBUCxNQUFZdEQsSUFBaEI7O0FBRUEsTUFBSXVGLElBQUksR0FBRyxZQUFXO0FBQUUsV0FBT3BGLENBQVA7QUFBVyxHQUFuQzs7QUFDQSxNQUFJcUYsSUFBSSxHQUFHLFlBQVc7QUFBRSxXQUFPaEIsQ0FBUDtBQUFXLEdBQW5DOztBQUNBLE1BQUlrRyxJQUFJLEdBQUcsWUFBVztBQUFFLFdBQU9wSCxDQUFQO0FBQVcsR0FBbkM7O0FBRUEsTUFBSTJCLE1BQU0sR0FBRyxVQUFTYixPQUFULEVBQWtCZSxXQUFsQixFQUErQm1GLFNBQS9CLEVBQTBDO0FBQ3JEbEcsV0FBTyxDQUFDZ0IsU0FBUjtBQUNBaEIsV0FBTyxDQUFDdUcsR0FBUixDQUFZeEssQ0FBQyxHQUFDaUUsT0FBTyxDQUFDTSxNQUFSLENBQWVELEtBQTdCLEVBQW9DRCxDQUFDLEdBQUNKLE9BQU8sQ0FBQ00sTUFBUixDQUFlQyxNQUFyRCxFQUE2RHJCLENBQTdELEVBQWdFLENBQWhFLEVBQW1FLElBQUk3QixJQUFJLENBQUNtSixFQUE1RTs7QUFDQSxRQUFJTixTQUFKLEVBQWU7QUFDYmxHLGFBQU8sQ0FBQ2tHLFNBQVIsR0FBb0JBLFNBQXBCO0FBQ0FsRyxhQUFPLENBQUN5RyxJQUFSO0FBQ0Q7O0FBQ0QsUUFBSTFGLFdBQUosRUFBaUI7QUFDZmYsYUFBTyxDQUFDZSxXQUFSLEdBQXNCQSxXQUF0QjtBQUNBZixhQUFPLENBQUNxQixNQUFSO0FBQ0Q7QUFDRixHQVhEOztBQWFBLFNBQU9oRixNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQjZFLFFBRG1CO0FBRW5CQyxRQUZtQjtBQUduQmtGLFFBSG1CO0FBSW5CekY7QUFKbUIsR0FBZCxDQUFQO0FBTUQ7QUFFRCxNQUFNNkYsT0FBTyxHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFwQjtBQUVPLFNBQVN4RyxJQUFULENBQWN2RSxJQUFJLEdBQUc7QUFBQ0csR0FBQyxFQUFFLENBQUo7QUFBT3FFLEdBQUMsRUFBRSxDQUFWO0FBQWFDLE9BQUssRUFBRSxDQUFwQjtBQUF1QkUsUUFBTSxFQUFFO0FBQS9CLENBQXJCLEVBQXdEO0FBQzdELE1BQUk7QUFBQ3hFLEtBQUQ7QUFBSXFFLEtBQUo7QUFBT0MsU0FBUDtBQUFjRTtBQUFkLE1BQXdCM0UsSUFBNUI7O0FBRUEsTUFBSXVGLElBQUksR0FBRyxZQUFXO0FBQUUsV0FBT3BGLENBQVA7QUFBVyxHQUFuQzs7QUFDQSxNQUFJcUYsSUFBSSxHQUFHLFlBQVc7QUFBRSxXQUFPaEIsQ0FBUDtBQUFXLEdBQW5DOztBQUNBLE1BQUl3RyxRQUFRLEdBQUcsWUFBVztBQUFFLFdBQU92RyxLQUFQO0FBQWUsR0FBM0M7O0FBQ0EsTUFBSXdHLFNBQVMsR0FBRyxZQUFXO0FBQUUsV0FBT3RHLE1BQVA7QUFBZ0IsR0FBN0M7O0FBRUEsTUFBSUMsS0FBSyxHQUFHLFVBQVNSLE9BQVQsRUFBa0JrRyxTQUFsQixFQUE2QjtBQUN2QyxRQUFJQSxTQUFKLEVBQWVsRyxPQUFPLENBQUNrRyxTQUFSLEdBQW9CQSxTQUFwQixDQUFmLEtBQ0tsRyxPQUFPLENBQUNrRyxTQUFSLEdBQW9CeEoscURBQXBCO0FBQ0xzRCxXQUFPLENBQUNtRyxRQUFSLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCOUYsS0FBdkIsRUFBOEJFLE1BQTlCO0FBQ0QsR0FKRDs7QUFNQSxNQUFJdUcsYUFBYSxHQUFHLFVBQVNuSCxFQUFULEVBQWFDLEVBQWIsRUFBaUI7QUFDbkMsUUFBSW1ILENBQUMsR0FBRzFHLEtBQVI7QUFDQSxRQUFJbkQsQ0FBQyxHQUFHcUQsTUFBUixDQUZtQyxDQUluQzs7QUFDQSxRQUFJLENBQUN3RyxDQUFDLEdBQUc3SixDQUFMLElBQVUsQ0FBZCxFQUFpQjtBQUFFLGFBQU8sS0FBUDtBQUFlLEtBTEMsQ0FPbkM7OztBQUNBLFFBQUl5QyxFQUFFLEdBQUc1RCxDQUFMLElBQVU2RCxFQUFFLEdBQUdRLENBQW5CLEVBQXNCO0FBQUUsYUFBTyxLQUFQO0FBQWU7O0FBQ3ZDMkcsS0FBQyxJQUFJaEwsQ0FBTDtBQUNBbUIsS0FBQyxJQUFJa0QsQ0FBTCxDQVZtQyxDQVduQzs7QUFDQSxXQUFRLENBQUMyRyxDQUFDLEdBQUdoTCxDQUFKLElBQVNnTCxDQUFDLEdBQUdwSCxFQUFkLE1BQXNCekMsQ0FBQyxHQUFHa0QsQ0FBSixJQUFTbEQsQ0FBQyxHQUFHMEMsRUFBbkMsQ0FBUjtBQUNELEdBYkQ7O0FBZUEsTUFBSW9ILEtBQUssR0FBRyxVQUFTQyxRQUFRLEdBQUdQLE9BQXBCLEVBQTZCO0FBQ3ZDLFFBQUlNLEtBQUssR0FBRyxFQUFaO0FBQ0EsUUFBSUUsS0FBSyxHQUFHO0FBQUNuTCxPQUFDLEVBQUVBLENBQUo7QUFBT3FFLE9BQUMsRUFBRUE7QUFBVixLQUFaO0FBQ0EsUUFBSXFELEtBQUssR0FBRyxLQUFaOztBQUVBLFdBQU95RCxLQUFLLENBQUM5RyxDQUFOLEdBQVVBLENBQUMsR0FBR0csTUFBckIsRUFBNkI7QUFDM0IsVUFBSTRHLFNBQVMsR0FBRztBQUFDcEwsU0FBQyxFQUFFbUwsS0FBSyxDQUFDbkwsQ0FBVjtBQUFhcUUsU0FBQyxFQUFFOEcsS0FBSyxDQUFDOUcsQ0FBdEI7QUFBeUJDLGFBQUssRUFBRTRHLFFBQVEsQ0FBQyxDQUFELENBQXhDO0FBQTZDMUcsY0FBTSxFQUFFMEcsUUFBUSxDQUFDLENBQUQ7QUFBN0QsT0FBaEI7QUFDQUQsV0FBSyxDQUFDeEosSUFBTixDQUFXMkosU0FBWDtBQUVBRCxXQUFLLENBQUNuTCxDQUFOLEdBQVVvTCxTQUFTLENBQUNwTCxDQUFWLEdBQWNvTCxTQUFTLENBQUM5RyxLQUFsQzs7QUFFQSxVQUFHNkcsS0FBSyxDQUFDbkwsQ0FBTixJQUFXQSxDQUFDLEdBQUdzRSxLQUFsQixFQUF5QjtBQUN2Qm9ELGFBQUssR0FBRyxDQUFDQSxLQUFUO0FBQ0F5RCxhQUFLLENBQUM5RyxDQUFOLElBQVc2RyxRQUFRLENBQUMsQ0FBRCxDQUFuQjtBQUNBQyxhQUFLLENBQUNuTCxDQUFOLEdBQVUwSCxLQUFLLEdBQUcxSCxDQUFDLEdBQUlrTCxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWMsQ0FBdEIsR0FBMkIsQ0FBMUM7QUFDRDtBQUNGOztBQUVELFdBQU9ELEtBQVA7QUFDRCxHQW5CRDs7QUFxQkEsTUFBSW5HLE1BQU0sR0FBRyxVQUFTYixPQUFULEVBQWtCZSxXQUFsQixFQUErQm1GLFNBQS9CLEVBQTBDO0FBQ3JELFFBQUluRixXQUFKLEVBQWlCO0FBQ2ZmLGFBQU8sQ0FBQ2UsV0FBUixHQUFzQkEsV0FBdEI7QUFDQWYsYUFBTyxDQUFDb0gsVUFBUixDQUFtQnJMLENBQW5CLEVBQXNCcUUsQ0FBdEIsRUFBeUJDLEtBQXpCLEVBQWdDRSxNQUFoQztBQUNEOztBQUNELFFBQUkyRixTQUFKLEVBQWU7QUFDYmxHLGFBQU8sQ0FBQ2tHLFNBQVIsR0FBb0JBLFNBQXBCO0FBQ0FsRyxhQUFPLENBQUNtRyxRQUFSLENBQWlCcEssQ0FBakIsRUFBb0JxRSxDQUFwQixFQUF1QkMsS0FBdkIsRUFBOEJFLE1BQTlCO0FBQ0Q7QUFDRixHQVREOztBQVdBLFNBQU9sRSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQjZFLFFBRG1CO0FBRW5CQyxRQUZtQjtBQUduQndGLFlBSG1CO0FBSW5CQyxhQUptQjtBQUtuQnJHLFNBTG1CO0FBTW5Cd0csU0FObUI7QUFPbkJGLGlCQVBtQjtBQVFuQmpHO0FBUm1CLEdBQWQsQ0FBUDtBQVVEO0FBRU0sU0FBU3dHLE9BQVQsQ0FBaUJ6TCxJQUFJLEdBQUc7QUFBQ29MLE9BQUssRUFBRTtBQUFSLENBQXhCLEVBQXFDO0FBQzFDLE1BQUk7QUFBQ0E7QUFBRCxNQUFVcEwsSUFBZDtBQUNBLE1BQUkwTCxLQUFLLEdBQUcsSUFBSUMsV0FBSixDQUFnQixJQUFJQyxXQUFKLENBQWdCUixLQUFLLENBQUNqSixNQUFOLEdBQWEsQ0FBN0IsQ0FBaEIsQ0FBWjtBQUNBLE1BQUkwSixVQUFVLEdBQUcsSUFBSUYsV0FBSixDQUFnQixJQUFJQyxXQUFKLENBQWdCUixLQUFLLENBQUNqSixNQUFOLEdBQWEsQ0FBN0IsQ0FBaEIsQ0FBakI7O0FBRUEsTUFBSTJKLFFBQVEsR0FBRyxVQUFTekssQ0FBVCxFQUFZO0FBQUUsV0FBT3FLLEtBQUssQ0FBQ3JLLENBQUQsQ0FBWjtBQUFrQixHQUEvQzs7QUFDQSxNQUFJMEssUUFBUSxHQUFHLFVBQVMxSyxDQUFULEVBQVkySyxDQUFaLEVBQWU7QUFBRU4sU0FBSyxDQUFDckssQ0FBRCxDQUFMLEdBQVcySyxDQUFYO0FBQWUsR0FBL0M7O0FBQ0EsTUFBSUMsV0FBVyxHQUFHLFlBQVc7QUFBRSxXQUFPUCxLQUFQO0FBQWUsR0FBOUM7O0FBQ0EsTUFBSVEsV0FBVyxHQUFHLFVBQVNGLENBQVQsRUFBWTtBQUFFTixTQUFLLEdBQUdNLENBQVI7QUFBWSxHQUE1Qzs7QUFFQSxNQUFJRyxLQUFLLEdBQUcsWUFBVztBQUNyQlQsU0FBSyxHQUFHLElBQUlDLFdBQUosQ0FBZ0IsSUFBSUMsV0FBSixDQUFnQlIsS0FBSyxDQUFDakosTUFBTixHQUFhLENBQTdCLENBQWhCLENBQVI7QUFDQTBKLGNBQVUsR0FBRyxJQUFJRixXQUFKLENBQWdCLElBQUlDLFdBQUosQ0FBZ0JSLEtBQUssQ0FBQ2pKLE1BQU4sR0FBYSxDQUE3QixDQUFoQixDQUFiO0FBQ0QsR0FIRDs7QUFLQSxNQUFJOEMsTUFBTSxHQUFHLFVBQVNiLE9BQVQsRUFBa0I7QUFDN0IsUUFBSWdJLE1BQU0sR0FBR1YsS0FBSyxDQUFDVyxNQUFOLENBQWFDLFVBQWIsS0FBNEIsQ0FBNUIsR0FBK0JaLEtBQS9CLEdBQXVDRyxVQUFwRDtBQUNBLFFBQUlVLFVBQVUsR0FBRzlLLElBQUksQ0FBQ2pCLEdBQUwsQ0FBUyxHQUFHNEwsTUFBWixDQUFqQjs7QUFFQSxRQUFJRyxVQUFVLEtBQUssQ0FBbkIsRUFBc0I7QUFDcEJuQixXQUFLLENBQUN2RyxPQUFOLENBQWMsVUFBUzJILElBQVQsRUFBZW5MLENBQWYsRUFBa0I7QUFDOUIsWUFBSStLLE1BQU0sQ0FBQy9LLENBQUQsQ0FBVixFQUFlO0FBQ2IsY0FBSUMsQ0FBQyxHQUFHK0ksS0FBSyxDQUFDckksSUFBTixDQUFXRCxTQUFTLENBQUM5QixRQUFWLENBQW1CLENBQW5CLEVBQXFCbU0sTUFBTSxDQUFDL0ssQ0FBRCxDQUEzQixFQUErQmtMLFVBQS9CLENBQVgsQ0FBUjtBQUNBQyxjQUFJLENBQUN2SCxNQUFMLENBQVliLE9BQVosRUFBcUJ6QixTQUFyQixFQUFnQ3JCLENBQWhDO0FBQ0Q7QUFDRixPQUxEO0FBTUQ7O0FBRUQsUUFBSW9LLEtBQUssQ0FBQ1csTUFBTixDQUFhQyxVQUFiLEtBQTRCLENBQWhDLEVBQW1DO0FBQ2pDVCxnQkFBVSxHQUFHSCxLQUFLLENBQUNyRixLQUFOLENBQVksQ0FBWixDQUFiO0FBQ0Q7O0FBQUE7QUFDRixHQWhCRDs7QUFrQkEsU0FBTzVGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ25Cb0wsWUFEbUI7QUFFbkJDLFlBRm1CO0FBR25CRSxlQUhtQjtBQUluQkMsZUFKbUI7QUFLbkJDLFNBTG1CO0FBTW5CbEg7QUFObUIsR0FBZCxDQUFQO0FBUUQ7QUFFRDs7QUFDTyxTQUFTZ0IsSUFBVCxDQUFjakcsSUFBSSxHQUFHLEVBQXJCLEVBQXlCO0FBQzlCLE1BQUlrRyxNQUFNLEdBQUcsVUFBUzFDLENBQVQsRUFBV3BELENBQVgsRUFBYXFNLENBQWIsRUFBZXZLLENBQWYsRUFBa0I7QUFDN0IsV0FBTyxDQUFDdUssQ0FBQyxHQUFDck0sQ0FBSCxJQUFNb0QsQ0FBTixHQUFRdEIsQ0FBUixHQUFZOUIsQ0FBbkI7QUFDRCxHQUZEOztBQUlBLFNBQU9LLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ25Cd0Y7QUFEbUIsR0FBZCxDQUFQO0FBR0QsQzs7Ozs7Ozs7Ozs7QUNoT0QsZSIsImZpbGUiOiI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBBbGdvcml0aG0oc3BlYyA9IHt9KSB7XHJcbiAgbGV0IHJlbGF0aXZlID0gZnVuY3Rpb24oYSwgeCwgYikge1xyXG4gICAgcmV0dXJuICh4IC0gYSkgLyAoYiAtIGEpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGxpbWl0ID0gZnVuY3Rpb24oYSwgeCwgYikge1xyXG4gICAgaWYoeCA8IGEpIHJldHVybiBhO1xyXG4gICAgaWYoeCA+IGIpIHJldHVybiBiO1xyXG4gICAgcmV0dXJuIHg7XHJcbiAgfVxyXG5cclxuICBsZXQgbm9ybWFsaXplID0gZnVuY3Rpb24oeCwgbWluLCBtYXgpIHtcclxuICAgIGlmICh4IDwgbWluKSB7IHggPSBtaW47IH1cclxuICAgIGlmICh4ID4gbWF4KSB7IHggPSBtYXg7IH1cclxuICAgIHJldHVybiAoeCAtIG1pbikgLyAobWF4IC0gbWluKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIHJlbGF0aXZlLFxyXG4gICAgbGltaXQsXHJcbiAgICBub3JtYWxpemVcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQge0FsZ29yaXRobX0gZnJvbSAnLi9hbGdvcml0aG0uanMnXHJcblxyXG5leHBvcnQgY29uc3QgUkFXX0RBVEFfQ09MT1IgPSAncmdiYSgyMDAsMCwwLDAuODUpJztcclxuZXhwb3J0IGNvbnN0IEZJWEFUSU9OX0NPTE9SID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC44NSknO1xyXG5leHBvcnQgY29uc3QgU0FDQ0FERV9DT0xPUiA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuODUpJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0NPTE9SID0gJ3JnYigwLDAsMCknO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJRkZFUkVOVF9DT0xPUlMgPSBbXTtcclxuZXhwb3J0IGNvbnN0IEhFQVRNQVBfQ09MT1JTID0gW107XHJcblxyXG5mdW5jdGlvbiBoc3YyaHNsKGh1ZSxzYXQsdmFsKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIGh1ZSxcclxuICAgIHNhdCp2YWwvKChodWU9KDItc2F0KSp2YWwpPDE/aHVlOjItaHVlKSxcclxuICAgIGh1ZS8yXHJcbiAgXVxyXG59XHJcblxyXG5mb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICB2YXIgaCA9IChpICogMC42MTgwMzM5ODg3NDk4OTUpICUgMS4wO1xyXG4gIHZhciBzID0gMC41O1xyXG4gIHZhciB2ID0gTWF0aC5zcXJ0KDEuMCAtICgoaSAqIDAuNjE4MDMzOTg4NzQ5ODk1KSAlIDAuNSkpO1xyXG4gIHZhciBhID0gMC41O1xyXG5cclxuICB2YXIgaHNsID0gaHN2MmhzbChoLHMsdik7XHJcblxyXG4gIERJRkZFUkVOVF9DT0xPUlMucHVzaCgnaHNsYSgnICsgTWF0aC5yb3VuZChoc2xbMF0qMjU1KSArICcsJyArIE1hdGgucm91bmQoaHNsWzFdKjEwMCkgKyAnJSwnICsgTWF0aC5yb3VuZChoc2xbMl0qMTAwKSArICclLCcgKyBhICsgJyknKTtcclxufVxyXG5cclxuZm9yIChsZXQgaCA9IDA7IGggPCAyMTA7IGgrKykge1xyXG4gIEhFQVRNQVBfQ09MT1JTLnB1c2goJ2hzbGEoJyArICgyMDkgLSBoKSArICcsIDUwJSwgNTAlLCcrIDAuNSArJyknKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbG9yKHNwZWMgPSB7fSkge1xyXG4gIGxldCBhbGdvcml0aG0gPSBBbGdvcml0aG0oe30pO1xyXG5cclxuICBsZXQgaGVhdCA9IGZ1bmN0aW9uKHJlbCkge1xyXG4gICAgbGV0IGQgPSBhbGdvcml0aG0ubGltaXQoMCwgcmVsLCAxKVxyXG4gICAgaWYgKHJlbCA9PT0gMCkgcmV0dXJuICdyZ2JhKDAsMCwwLDApJztcclxuICAgIHJldHVybiBIRUFUTUFQX0NPTE9SU1tNYXRoLnJvdW5kKChkICogKEhFQVRNQVBfQ09MT1JTLmxlbmd0aCAtIDEpKSldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xyXG4gICAgaGVhdFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7REVWSUNFX1dJRFRILCBERVZJQ0VfSEVJR0hUfSBmcm9tICcuLi9nZW8uanMnO1xyXG5pbXBvcnQge1BvaW50LCBQb2ludHMsIExpbmUsIENpcmNsZSwgUmVjdCwgRWFzZX0gZnJvbSAnLi4vZ2VvLmpzJztcclxuaW1wb3J0IHtJTklUX0ZJWEFUSU9OX1dJTkRPV30gZnJvbSAnLi4vZXllLmpzJztcclxuaW1wb3J0IHtGaXhhdGlvbiwgR2F6ZVBvaW50LCBHYXplV2luZG93fSBmcm9tICcuLi9leWUuanMnO1xyXG5pbXBvcnQge1JBV19EQVRBX0NPTE9SLCBGSVhBVElPTl9DT0xPUiwgU0FDQ0FERV9DT0xPUn0gZnJvbSAnLi4vY29sb3IuanMnO1xyXG5pbXBvcnQge0FsZ29yaXRobX0gZnJvbSAnLi4vYWxnb3JpdGhtLmpzJztcclxuXHJcbmltcG9ydCB7TURDU25hY2tiYXJ9IGZyb20gJ0BtYXRlcmlhbC9zbmFja2Jhcic7XHJcblxyXG5jb25zdCBzbmFja2JhciA9IE1EQ1NuYWNrYmFyLmF0dGFjaFRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtc25hY2tiYXInKSk7XHJcblxyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcbmltcG9ydCB7cmVuZGVyIGFzIHJlbmRlclRtcGx9IGZyb20gJ2xpdC1odG1sJztcclxuXHJcbmltcG9ydCB7dGVtcGxhdGV9IGZyb20gJy4vdGVtcGxhdGUuanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGlhZ25vc2lzKHNwZWMpIHtcclxuICBsZXQgc29ja2V0ID0gdW5kZWZpbmVkO1xyXG5cclxuICBsZXQgZ2F6ZUhpc3RvcnkgPSBbXTtcclxuICBsZXQgZGF0YVBvaW50cyA9IFtdO1xyXG4gIGxldCBjYWxpYnJhdGlvblBvaW50cyA9IFtdO1xyXG4gIGxldCBmaXhhdGlvbkNvdW50ID0gMDtcclxuICBsZXQgcHJldkZpeGF0aW9uID0gdW5kZWZpbmVkO1xyXG4gIGxldCBmaXhhdGlvbldpbmRvdyA9IElOSVRfRklYQVRJT05fV0lORE9XO1xyXG4gIGxldCBkZXRlY3RGaXhhdGlvbnMgPSBmYWxzZTtcclxuICBsZXQgYWxnb3JpdGhtID0gQWxnb3JpdGhtKHt9KTtcclxuICBsZXQgY2FsaWJyYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgbGV0IHNldE1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgIGRldGVjdEZpeGF0aW9ucyA9ICFkZXRlY3RGaXhhdGlvbnM7XHJcbiAgfVxyXG5cclxuICBsZXQgciA9IDI0O1xyXG4gIGxldCBpbnRlcnZhbCA9IHVuZGVmaW5lZDtcclxuICBsZXQgdCA9IDA7XHJcbiAgbGV0IHRzID0gMDtcclxuICBsZXQgdHNpID0gMDtcclxuICBsZXQgZCA9IDYwMDtcclxuICBsZXQgZHMgPSAyMDA7XHJcbiAgbGV0IGRzaSA9IDEwMDtcclxuICBsZXQgY3ggPSAwO1xyXG4gIGxldCBjeSA9IDA7XHJcblxyXG4gIGxldCBweCA9IDA7XHJcbiAgbGV0IHB5ID0gMDtcclxuXHJcbiAgbGV0IHRQb2ludHMgPSBbWzAuMSwwLjFdLCBbMC45LDAuMV0sIFswLjUsMC41XSwgWzAuMSwwLjldLCBbMC45LDAuOV1dO1xyXG4gIGxldCBjYWxpYnJhdGlvbiA9IFtdO1xyXG5cclxuICBsZXQgZ2V0Q2FsaWJyYXRpb24gPSBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgICBsZXQgZGlmZlggPSBbXTtcclxuICAgIGxldCBkaWZmWSA9IFtdO1xyXG4gICAgUmVjdCh7eDogMCwgeTogMCwgd2lkdGg6IGNvbnRleHQuY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuY2FudmFzLmhlaWdodH0pLmNsZWFyKGNvbnRleHQsIFwiI2NjY1wiKTtcclxuICAgIGNhbGlicmF0aW9uLmZvckVhY2goZnVuY3Rpb24oY2FsaWJyYXRpb25Qb2ludCwgaSkge1xyXG4gICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDAuMDA1KmNvbnRleHQuY2FudmFzLmhlaWdodDtcclxuICAgICAgQ2lyY2xlKHt4OiAgdFBvaW50c1tpXVswXSwgeTogdFBvaW50c1tpXVsxXSwgcjogMTB9KS5yZW5kZXIoY29udGV4dCwgJ3JnYmEoMCwwLDAsMC4yNSknKTtcclxuICAgICAgY2FsaWJyYXRpb25Qb2ludC5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50KSB7XHJcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAwLjAwMSpjb250ZXh0LmNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIzk1YzQ1ZCc7XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0Lm1vdmVUbyh0UG9pbnRzW2ldWzBdKmNvbnRleHQuY2FudmFzLndpZHRoLCB0UG9pbnRzW2ldWzFdKmNvbnRleHQuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8ocG9pbnQuZ2V0WCgpKmNvbnRleHQuY2FudmFzLndpZHRoLCBwb2ludC5nZXRZKCkqY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBkaWZmWC5wdXNoKHRQb2ludHNbaV1bMF0gLSBwb2ludC5nZXRYKCkpO1xyXG4gICAgICAgIGRpZmZZLnB1c2godFBvaW50c1tpXVsxXSAtIHBvaW50LmdldFkoKSk7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBsZXQgYWJzRXJyWCA9IE1hdGguYWJzKGRpZmZYLnJlZHVjZShmdW5jdGlvbihhLGIpIHsgcmV0dXJuIGEgKyBiO30pIC8gZGlmZlgubGVuZ3RoKTtcclxuICAgIGxldCBhYnNFcnJZID0gTWF0aC5hYnMoZGlmZlkucmVkdWNlKGZ1bmN0aW9uKGEsYikgeyByZXR1cm4gYSArIGI7fSkgLyBkaWZmWS5sZW5ndGgpO1xyXG4gICAgY29uc29sZS5sb2coXCJlcm9yclwiLCgxIC0gKGFic0VyclggKyBhYnNFcnJZKSkqMTAwKTtcclxuICB9XHJcblxyXG4gIGxldCBhbmltYXRlUG9pbnQgPSBmdW5jdGlvbihjb250ZXh0LCB4LCB5LCBpKSB7XHJcbiAgICBpZiAociA8IDI0KSB7XHJcbiAgICAgIHIgPSBFYXNlKHt9KS5saW5lYXIodHNpLCA1LCAyNCwgZHNpKTtcclxuICAgIH1cclxuICAgIGlmICh0c2kgPT09IGRzaSkge1xyXG4gICAgICBjeCA9IEVhc2Uoe30pLmxpbmVhcih0LCBweCwgeCwgZCk7XHJcbiAgICAgIGN5ID0gRWFzZSh7fSkubGluZWFyKHQsIHB5LCB5LCBkKTtcclxuICAgICAgaWYgKHQgPT09IGQpIHtcclxuICAgICAgICByID0gRWFzZSh7fSkubGluZWFyKHRzLCAyNCwgNiwgZHMpO1xyXG4gICAgICAgIGlmICh0cyA9PT0gZHMpIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgdHMgPSAwO1xyXG4gICAgICAgICAgdHNpID0gMDtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FsaWJyYXRpb24gZW5kXCIsIGNhbGlicmF0aW9uUG9pbnRzKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNhbGlicmF0aW9uUG9pbnRzID0gZ2F6ZUhpc3Rvcnkuc2xpY2UoMjAsZ2F6ZUhpc3RvcnkubGVuZ3RoKTtcclxuICAgICAgICAgICAgY2FsaWJyYXRpb24ucHVzaChjYWxpYnJhdGlvblBvaW50cyk7XHJcbiAgICAgICAgICAgIGNhbGlicmF0aW9uUG9pbnRzID0gW107XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBDaXJjbGUoe3g6ICBjeCwgeTogY3ksIHI6IHJ9KS5yZW5kZXIoY29udGV4dCwgdW5kZWZpbmVkLCAnI2UzNjA1NicpO1xyXG4gICAgQ2lyY2xlKHt4OiAgY3gsIHk6IGN5LCByOiA1fSkucmVuZGVyKGNvbnRleHQsIHVuZGVmaW5lZCwgJyMwMDAnKTtcclxuICB9XHJcblxyXG4gIGxldCBkcmF3UG9pbnQgPSBmdW5jdGlvbihjb250ZXh0LCB4LCB5LCBpKSB7XHJcbiAgICBweCA9IGN4O1xyXG4gICAgcHkgPSBjeTtcclxuICAgIHQgPSAwO1xyXG5cclxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgIFJlY3Qoe3g6IDAsIHk6IDAsIHdpZHRoOiBjb250ZXh0LmNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjb250ZXh0LmNhbnZhcy5oZWlnaHR9KS5jbGVhcihjb250ZXh0LCBcIiNjY2NcIik7XHJcbiAgICAgIGFuaW1hdGVQb2ludChjb250ZXh0LCB4LCB5LCBpKTtcclxuICAgICAgaWYgKHRzaSA9PT0gZHNpKSB7XHJcbiAgICAgICAgICBpZiAodCA9PT0gZCkgeyB0cyArPSAxMDsgfVxyXG4gICAgICAgICAgZWxzZSB7IHQgKz0gMTA7IH1cclxuICAgICAgfSBlbHNlIHsgdHNpICs9IDEwOyB9XHJcbiAgICB9LCAxMClcclxuICB9XHJcblxyXG4gIGxldCBjYWxpYnJhdGUgPSBmdW5jdGlvbigpIHtcclxuICAgIHJlbmRlcihzcGVjKTtcclxuICAgIGxldCBjb250ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2EnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY2FsaWJyYXRpbmcgPSB0cnVlO1xyXG4gICAgY29udGV4dC5jYW52YXMuZm9jdXMoKTtcclxuICAgIGNvbnRleHQuY2FudmFzLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcbiAgICBjb250ZXh0LnNhdmUoKVxyXG4gICAgUmVjdCh7eDogMCwgeTogMCwgd2lkdGg6IGNvbnRleHQuY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuY2FudmFzLmhlaWdodH0pLmNsZWFyKGNvbnRleHQsIFwiI2NjY1wiKTtcclxuXHJcbiAgICBsZXQgdGltZW91dCA9IDA7XHJcbiAgICB0UG9pbnRzLmZvckVhY2goZnVuY3Rpb24ocG9pbnQsIGkpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGRyYXdQb2ludChjb250ZXh0LHBvaW50WzBdLHBvaW50WzFdLCBpKSB9LCB0aW1lb3V0KVxyXG4gICAgICAgIHRpbWVvdXQgKz0gMjAwMFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgZ2V0Q2FsaWJyYXRpb24oY29udGV4dCk7XHJcbiAgICB9LCAyMDAwKnRQb2ludHMubGVuZ3RoKVxyXG5cclxuICAgIGNvbnRleHQucmVzdG9yZSgpXHJcbiAgfVxyXG5cclxuICBsZXQgcmVuZGVyID0gZGF0YSA9PiB7XHJcbiAgICByZW5kZXJUbXBsKHRlbXBsYXRlKGRhdGEpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldycpKTtcclxuICB9XHJcblxyXG4gIGxldCBpbml0ID0gKCkgPT4ge1xyXG4gICAgT2JqZWN0LmFzc2lnbihzcGVjLCB7XHJcbiAgICAgIHNldE1vZGUsXHJcbiAgICAgIGNhbGlicmF0ZVxyXG4gICAgfSk7XHJcbiAgICByZW5kZXIoc3BlYyk7XHJcbiAgfVxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gIGxldCBjb25uZWN0ID0gZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgUmVjdCh7eDogMCwgeTogMCwgd2lkdGg6IGNvbnRleHQuY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuY2FudmFzLmhlaWdodH0pLmNsZWFyKGNvbnRleHQpO1xyXG4gICAgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cDovL2xvY2FsaG9zdCcpO1xyXG4gICAgc29ja2V0Lm9uKCduZXdzJywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgZGF0YS5YID0gZGF0YS5YIC8gREVWSUNFX1dJRFRIO1xyXG4gICAgICBkYXRhLlkgPSBkYXRhLlkgLyBERVZJQ0VfSEVJR0hUO1xyXG5cclxuICAgICAgbGV0IHAgPSBQb2ludCh7eDogZGF0YS5YLCB5OiBkYXRhLll9KTtcclxuICAgICAgaWYgKGdhemVIaXN0b3J5Lmxlbmd0aCA9PT0gMzApIHsgZ2F6ZUhpc3Rvcnkuc2hpZnQoKTsgfVxyXG4gICAgICBnYXplSGlzdG9yeS5wdXNoKHApO1xyXG5cclxuICAgICAgaWYgKCFjYWxpYnJhdGluZykge1xyXG4gICAgICAgIGlmIChkZXRlY3RGaXhhdGlvbnMpIHtcclxuICAgICAgICAgIGxldCBncCA9IEdhemVQb2ludCh7eDogZGF0YS5YLCB5OiBkYXRhLlksIHQ6IGRhdGEuVGltZXN0YW1wfSk7XHJcbiAgICAgICAgICBkYXRhUG9pbnRzLnB1c2goZ3ApO1xyXG4gICAgICAgICAgaWYgKGRhdGFQb2ludHMubGVuZ3RoID09PSBmaXhhdGlvbldpbmRvdykge1xyXG4gICAgICAgICAgICBsZXQgZml4YXRpb24gPSBHYXplV2luZG93KHtwb2ludHM6IGRhdGFQb2ludHN9KS5kZXRlY3RvcigpO1xyXG4gICAgICAgICAgICBpZiAoZml4YXRpb24pIHtcclxuICAgICAgICAgICAgICBmaXhhdGlvbkNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgaWYgKGZpeGF0aW9uQ291bnQgPT09IDIwKSB7XHJcbiAgICAgICAgICAgICAgICBSZWN0KHt4OiAwLCB5OiAwLCB3aWR0aDogY29udGV4dC5jYW52YXMud2lkdGgsIGhlaWdodDogY29udGV4dC5jYW52YXMuaGVpZ2h0fSkuY2xlYXIoY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBmaXhhdGlvbkNvdW50ID0gMDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGxldCBub3JtYWxpemVkRHVyYXRpb24gPSBhbGdvcml0aG0ubm9ybWFsaXplKGZpeGF0aW9uLmdldER1cmF0aW9uKCksIDEwMCwgNDAwKSAqIDUwO1xyXG4gICAgICAgICAgICAgIENpcmNsZSh7eDogZml4YXRpb24uZ2V0WCgpLCB5OiBmaXhhdGlvbi5nZXRZKCksIHI6IG5vcm1hbGl6ZWREdXJhdGlvbn0pLnJlbmRlcihjb250ZXh0LCBGSVhBVElPTl9DT0xPUik7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChwcmV2Rml4YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIExpbmUoe3gxOiBwcmV2Rml4YXRpb24uZ2V0WCgpLCB5MTogcHJldkZpeGF0aW9uLmdldFkoKSwgeDI6IGZpeGF0aW9uLmdldFgoKSwgeTI6IGZpeGF0aW9uLmdldFkoKX0pLnJlbmRlcihjb250ZXh0LCBTQUNDQURFX0NPTE9SKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcHJldkZpeGF0aW9uID0gZml4YXRpb247XHJcblxyXG4gICAgICAgICAgICAgIGRhdGFQb2ludHMgPSBbXTtcclxuICAgICAgICAgICAgICBmaXhhdGlvbldpbmRvdyA9IElOSVRfRklYQVRJT05fV0lORE9XO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGZpeGF0aW9uV2luZG93Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgUmVjdCh7eDogMCwgeTogMCwgd2lkdGg6IGNvbnRleHQuY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuY2FudmFzLmhlaWdodH0pLmNsZWFyKGNvbnRleHQpO1xyXG4gICAgICAgICAgcC5yZW5kZXIoY29udGV4dCwgUkFXX0RBVEFfQ09MT1IpO1xyXG4gICAgICAgICAgUG9pbnRzKHtwb2ludHM6IGdhemVIaXN0b3J5fSkucmVuZGVyKGNvbnRleHQsIFJBV19EQVRBX0NPTE9SKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBnYXplWEN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2F6ZS14XCIpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgbGV0IGdhemVZQ3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYXplLXlcIikuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgUmVjdCh7eDogMCwgeTogMCwgd2lkdGg6IGdhemVYQ3R4LmNhbnZhcy53aWR0aCwgaGVpZ2h0OiBnYXplWEN0eC5jYW52YXMuaGVpZ2h0fSkuY2xlYXIoZ2F6ZVhDdHgpO1xyXG4gICAgICAgIFJlY3Qoe3g6IDAsIHk6IDAsIHdpZHRoOiBnYXplWUN0eC5jYW52YXMud2lkdGgsIGhlaWdodDogZ2F6ZVlDdHguY2FudmFzLmhlaWdodH0pLmNsZWFyKGdhemVZQ3R4KTtcclxuXHJcbiAgICAgICAgUG9pbnRzKHtwb2ludHM6IGdhemVIaXN0b3J5fSkucmVuZGVyVGltZWxpbmUoZ2F6ZVhDdHgsIDAsIFJBV19EQVRBX0NPTE9SKTtcclxuICAgICAgICBQb2ludHMoe3BvaW50czogZ2F6ZUhpc3Rvcnl9KS5yZW5kZXJUaW1lbGluZShnYXplWUN0eCwgMSwgUkFXX0RBVEFfQ09MT1IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3RfZXJyb3InLCBlcnIgPT4ge1xyXG4gICAgICBzbmFja2Jhci5sYWJlbFRleHQgPSAnQ2FuXFwndCBjb25uZWN0IHRvIGV5ZSB0cmFja2VyLic7XHJcbiAgICAgIHNuYWNrYmFyLm9wZW4oKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZGlzY29ubmVjdCBmcm9tIGRpYWdub3Npc1wiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGNvbm5lY3QsXHJcbiAgICBkaXNjb25uZWN0XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHtodG1sfSBmcm9tICdsaXQtaHRtbCc7XHJcblxyXG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSAoZGF0YSkgPT4gaHRtbGBcclxuICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkX19pbm5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkX19jZWxsLS1zcGFuLThcIj5cclxuICAgICAgICA8Y2FudmFzIEBjbGljaz1cIiR7ZnVsbHNjcmVlbn1cIiBpZD1cImFcIiB3aWR0aD1cIjEyODBcIiBoZWlnaHQ9XCI3MjBcIj48L2NhbnZhcz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtbGF5b3V0LWdyaWRfX2NlbGwtLXNwYW4tNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXN3aXRjaF9fdHJhY2tcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoX190aHVtYi11bmRlcmxheVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXN3aXRjaF9fdGh1bWJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgQGNsaWNrPVwiJHtkYXRhLnNldE1vZGV9XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJiYXNpYy1zd2l0Y2hcIiBjbGFzcz1cIm1kYy1zd2l0Y2hfX25hdGl2ZS1jb250cm9sXCIgcm9sZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJiYXNpYy1zd2l0Y2hcIj5EZXRlY3QgZml4YXRpb25zPC9sYWJlbD5cclxuICAgICAgICA8aDU+VGltZWxpbmU8L2g1PlxyXG4gICAgICAgIDxjYW52YXMgaWQ9XCJnYXplLXhcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjMwXCI+PC9jYW52YXM+XHJcbiAgICAgICAgPGNhbnZhcyBpZD1cImdhemUteVwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMzBcIj48L2NhbnZhcz5cclxuICAgICAgICA8aDU+Q2FsaWJyYXRpb248L2g1PlxyXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwiJHtkYXRhLmNhbGlicmF0ZX1cIiBjbGFzcz1cIm1kYy1idXR0b24gbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZFwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZGMtYnV0dG9uX19pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+YWRqdXN0PC9pPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtYnV0dG9uX19sYWJlbFwiPkluc3BlY3QgY2FsaWJyYXRpb248L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5sZXQgZnVsbHNjcmVlbiA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYScpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgY29udGV4dC5jYW52YXMud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4oKVxyXG59XHJcbiIsImltcG9ydCB7REVWSUNFX1dJRFRILCBERVZJQ0VfSEVJR0hUfSBmcm9tICcuL2dlby5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgRElTUEVSU0lPTl9USFJFU0hPTEQgPSA1MDsgLy8gcGl4ZWxzXHJcbmV4cG9ydCBjb25zdCBEVVJBVElPTl9USFJFU0hPTEQgPSAxNTA7IC8vIG1zXHJcbmV4cG9ydCBjb25zdCBJTklUX0ZJWEFUSU9OX1dJTkRPVyA9IDEwOyAvLyB+MC4xNSAqIDcwSHpcclxuXHJcbmV4cG9ydCBjb25zdCBSRVBMQVlfRlBTID0gNTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYXplUG9pbnQoc3BlYyA9IHt4OiAwLCB5OiAwLCB0OiAwfSkge1xyXG4gIGxldCB7eCx5LHR9ID0gc3BlY1xyXG5cclxuICBsZXQgZ2V0WCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4geDsgfVxyXG4gIGxldCBnZXRZID0gZnVuY3Rpb24oKSB7IHJldHVybiB5OyB9XHJcbiAgbGV0IGdldFRpbWVzdGFtcCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdDsgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBnZXRYLFxyXG4gICAgZ2V0WSxcclxuICAgIGdldFRpbWVzdGFtcFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGaXhhdGlvbihzcGVjID0ge3g6IDAsIHk6IDAsIHQ6IDAsIGQ6IDB9KSB7XHJcbiAgbGV0IHt4LHksdCxkfSA9IHNwZWM7XHJcblxyXG4gIGxldCBnZXRYID0gZnVuY3Rpb24oKSB7IHJldHVybiB4OyB9XHJcbiAgbGV0IGdldFkgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHk7IH1cclxuICBsZXQgZ2V0VGltZXN0YW1wID0gZnVuY3Rpb24oKSB7IHJldHVybiB0OyB9XHJcbiAgbGV0IGdldER1cmF0aW9uID0gZnVuY3Rpb24oKSB7IHJldHVybiBkOyB9XHJcblxyXG4gIGxldCBnZXRGaXhhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHt4OiB4LCB5OiB5fTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGdldFgsXHJcbiAgICBnZXRZLFxyXG4gICAgZ2V0VGltZXN0YW1wLFxyXG4gICAgZ2V0RHVyYXRpb24sXHJcbiAgICBnZXRGaXhhdGlvblxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYXplV2luZG93KHNwZWMgPSB7cG9pbnRzOiBbXX0pIHtcclxuICBsZXQge3BvaW50c30gPSBzcGVjO1xyXG5cclxuICBsZXQgZGlzcGVyc2lvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHBvaW50c1ggPSBwb2ludHMubWFwKHAgPT4gcC5nZXRYKCkgKiBERVZJQ0VfV0lEVEgpO1xyXG4gICAgbGV0IHBvaW50c1kgPSBwb2ludHMubWFwKHAgPT4gcC5nZXRZKCkgKiBERVZJQ0VfSEVJR0hUKTtcclxuXHJcbiAgICByZXR1cm4gKE1hdGgubWF4KC4uLnBvaW50c1gpIC0gTWF0aC5taW4oLi4ucG9pbnRzWCkpICsgKE1hdGgubWF4KC4uLnBvaW50c1kpIC0gTWF0aC5taW4oLi4ucG9pbnRzWSkpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNlbnRyb2lkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcG9pbnRzWCA9IHBvaW50cy5tYXAocCA9PiBwLmdldFgoKSk7XHJcbiAgICBsZXQgcG9pbnRzWSA9IHBvaW50cy5tYXAocCA9PiBwLmdldFkoKSk7XHJcblxyXG4gICAgcmV0dXJuIEZpeGF0aW9uKHtcclxuICAgICAgeDogKyhwb2ludHNYLnJlZHVjZSgoYSxiKSA9PiBhK2IpIC8gcG9pbnRzWC5sZW5ndGgpLnRvRml4ZWQoNiksXHJcbiAgICAgIHk6ICsocG9pbnRzWS5yZWR1Y2UoKGEsYikgPT4gYStiKSAvIHBvaW50c1kubGVuZ3RoKS50b0ZpeGVkKDYpLFxyXG4gICAgICB0OiArKHBvaW50c1swXS5nZXRUaW1lc3RhbXAoKSkudG9GaXhlZCg2KSxcclxuICAgICAgZDogKyhwb2ludHNbcG9pbnRzLmxlbmd0aC0xXS5nZXRUaW1lc3RhbXAoKSAtIHBvaW50c1swXS5nZXRUaW1lc3RhbXAoKSkudG9GaXhlZCg2KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxldCBkZXRlY3RvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGRpc3BlcnNpb24oKSA+IERJU1BFUlNJT05fVEhSRVNIT0xEKSB7XHJcbiAgICAgIHJldHVybiBjZW50cm9pZCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xyXG4gICAgZGV0ZWN0b3JcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCB7Q0xFQVJfQ09MT1J9IGZyb20gJy4vY29sb3IuanMnO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tICcuL2NvbG9yLmpzJztcclxuaW1wb3J0IHtBbGdvcml0aG19IGZyb20gJy4vYWxnb3JpdGhtLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBERVZJQ0VfV0lEVEggPSB3aW5kb3cuc2NyZWVuLndpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbmV4cG9ydCBjb25zdCBERVZJQ0VfSEVJR0hUID0gd2luZG93LnNjcmVlbi5oZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbmxldCBjb2xvciA9IENvbG9yKHt9KTtcclxubGV0IGFsZ29yaXRobSA9IEFsZ29yaXRobSh7fSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9pbnQoc3BlYyA9IHt4OiAwLCB5OiAwfSkge1xyXG4gIGxldCB7eCwgeX0gPSBzcGVjO1xyXG5cclxuICBsZXQgZ2V0WCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4geDsgfVxyXG4gIGxldCBnZXRZID0gZnVuY3Rpb24oKSB7IHJldHVybiB5OyB9XHJcblxyXG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmaWxsU3R5bGUpIHtcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgY29udGV4dC5maWxsUmVjdCh4KmNvbnRleHQuY2FudmFzLndpZHRoLCB5KmNvbnRleHQuY2FudmFzLmhlaWdodCwgMC4wMDUqY29udGV4dC5jYW52YXMud2lkdGgsIDAuMDA1KmNvbnRleHQuY2FudmFzLndpZHRoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGdldFgsXHJcbiAgICBnZXRZLFxyXG4gICAgcmVuZGVyXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQb2ludHMoc3BlYyA9IHtwb2ludHM6IFtdfSkge1xyXG4gIGxldCB7cG9pbnRzfSA9IHNwZWM7XHJcblxyXG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmaWxsU3R5bGUpIHtcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgcG9pbnRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xyXG4gICAgICBwLnJlbmRlcihjb250ZXh0LCBmaWxsU3R5bGUpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxldCByZW5kZXJUaW1lbGluZSA9IGZ1bmN0aW9uKGNvbnRleHQsIGF4aXMsIGZpbGxTdHlsZSkge1xyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XHJcbiAgICBwb2ludHMuZm9yRWFjaChmdW5jdGlvbihwLCBpKSB7XHJcbiAgICAgIGxldCBkaW0gPSBheGlzID09PSAwPyBwLmdldFgoKSA6IHAuZ2V0WSgpO1xyXG4gICAgICBjb250ZXh0LmZpbGxSZWN0KChpLzMwKSpjb250ZXh0LmNhbnZhcy53aWR0aCwgKDEtZGltKSpjb250ZXh0LmNhbnZhcy5oZWlnaHQsIGNvbnRleHQuY2FudmFzLndpZHRoLzMwLCAxKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICByZW5kZXIsXHJcbiAgICByZW5kZXJUaW1lbGluZVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGluZShzcGVjID0ge3gxOiAwLCB5MTogMCwgeDI6IDAsIHkyOiAwfSkge1xyXG4gIGxldCB7eDEsIHkxLCB4MiwgeTJ9ID0gc3BlYztcclxuXHJcbiAgbGV0IHJlbmRlciA9IGZ1bmN0aW9uKGNvbnRleHQsIHN0cm9rZVN0eWxlKSB7XHJcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGVcclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBjb250ZXh0Lm1vdmVUbyh4MSpjb250ZXh0LmNhbnZhcy53aWR0aCwgeTEqY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGNvbnRleHQubGluZVRvKHgyKmNvbnRleHQuY2FudmFzLndpZHRoLCB5Mipjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgY29udGV4dC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIHJlbmRlclxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2lyY2xlKHNwZWMgPSB7eDogMCwgeTogMCwgcjogMH0pIHtcclxuICBsZXQge3gsIHksIHJ9ID0gc3BlYztcclxuXHJcbiAgbGV0IGdldFggPSBmdW5jdGlvbigpIHsgcmV0dXJuIHg7IH1cclxuICBsZXQgZ2V0WSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4geTsgfVxyXG4gIGxldCBnZXRSID0gZnVuY3Rpb24oKSB7IHJldHVybiByOyB9XHJcblxyXG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbihjb250ZXh0LCBzdHJva2VTdHlsZSwgZmlsbFN0eWxlKSB7XHJcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgY29udGV4dC5hcmMoeCpjb250ZXh0LmNhbnZhcy53aWR0aCwgeSpjb250ZXh0LmNhbnZhcy5oZWlnaHQsIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgIGlmIChmaWxsU3R5bGUpIHtcclxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XHJcbiAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0cm9rZVN0eWxlKSB7XHJcbiAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcclxuICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGdldFgsXHJcbiAgICBnZXRZLFxyXG4gICAgZ2V0UixcclxuICAgIHJlbmRlclxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBHVF9CQVNFID0gWzMwLCAxNV1cclxuY29uc3QgR1RfQ09OU0lERVIgPSBbMjAsIDIwXVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlY3Qoc3BlYyA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfSkge1xyXG4gIGxldCB7eCwgeSwgd2lkdGgsIGhlaWdodH0gPSBzcGVjO1xyXG5cclxuICBsZXQgZ2V0WCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4geDsgfVxyXG4gIGxldCBnZXRZID0gZnVuY3Rpb24oKSB7IHJldHVybiB5OyB9XHJcbiAgbGV0IGdldFdpZHRoID0gZnVuY3Rpb24oKSB7IHJldHVybiB3aWR0aDsgfVxyXG4gIGxldCBnZXRIZWlnaHQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhlaWdodDsgfVxyXG5cclxuICBsZXQgY2xlYXIgPSBmdW5jdGlvbihjb250ZXh0LCBmaWxsU3R5bGUpIHtcclxuICAgIGlmIChmaWxsU3R5bGUpIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgZWxzZSBjb250ZXh0LmZpbGxTdHlsZSA9IENMRUFSX0NPTE9SO1xyXG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGxldCBjb250YWluc1BvaW50ID0gZnVuY3Rpb24ocHgsIHB5KSB7XHJcbiAgICBsZXQgdyA9IHdpZHRoO1xyXG4gICAgbGV0IGggPSBoZWlnaHQ7XHJcblxyXG4gICAgLy8gQXQgbGVhc3Qgb25lIG9mIHRoZSBkaW1lbnNpb25zIGlzIG5lZ2F0aXZlXHJcbiAgICBpZiAoKHcgfCBoKSA8IDApIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG4gICAgLy8gTm90ZTogaWYgZWl0aGVyIGRpbWVuc2lvbiBpcyB6ZXJvLCB0ZXN0cyBiZWxvdyBtdXN0IHJldHVybiBmYWxzZVxyXG4gICAgaWYgKHB4IDwgeCB8fCBweSA8IHkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICB3ICs9IHg7XHJcbiAgICBoICs9IHk7XHJcbiAgICAvLyBvdmVyZmxvdyB8fCBpbnRlcnNlY3RcclxuICAgIHJldHVybiAoKHcgPCB4IHx8IHcgPiBweCkgJiYgKGggPCB5IHx8IGggPiBweSkpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHRpbGVzID0gZnVuY3Rpb24odGlsZVNpemUgPSBHVF9CQVNFKSB7XHJcbiAgICBsZXQgdGlsZXMgPSBbXTtcclxuICAgIGxldCBzdGFydCA9IHt4OiB4LCB5OiB5fTtcclxuICAgIGxldCBzaGlmdCA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlIChzdGFydC55IDwgeSArIGhlaWdodCkge1xyXG4gICAgICBsZXQgcmVjdGFuZ2xlID0ge3g6IHN0YXJ0LngsIHk6IHN0YXJ0LnksIHdpZHRoOiB0aWxlU2l6ZVswXSwgaGVpZ2h0OiB0aWxlU2l6ZVsxXX07XHJcbiAgICAgIHRpbGVzLnB1c2gocmVjdGFuZ2xlKTtcclxuXHJcbiAgICAgIHN0YXJ0LnggPSByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aDtcclxuXHJcbiAgICAgIGlmKHN0YXJ0LnggPj0geCArIHdpZHRoKSB7XHJcbiAgICAgICAgc2hpZnQgPSAhc2hpZnQ7XHJcbiAgICAgICAgc3RhcnQueSArPSB0aWxlU2l6ZVsxXTtcclxuICAgICAgICBzdGFydC54ID0gc2hpZnQgPyB4IC0gKHRpbGVTaXplWzBdIC8gMikgOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRpbGVzO1xyXG4gIH1cclxuXHJcbiAgbGV0IHJlbmRlciA9IGZ1bmN0aW9uKGNvbnRleHQsIHN0cm9rZVN0eWxlLCBmaWxsU3R5bGUpIHtcclxuICAgIGlmIChzdHJva2VTdHlsZSkge1xyXG4gICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XHJcbiAgICAgIGNvbnRleHQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGlmIChmaWxsU3R5bGUpIHtcclxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XHJcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBnZXRYLFxyXG4gICAgZ2V0WSxcclxuICAgIGdldFdpZHRoLFxyXG4gICAgZ2V0SGVpZ2h0LFxyXG4gICAgY2xlYXIsXHJcbiAgICB0aWxlcyxcclxuICAgIGNvbnRhaW5zUG9pbnQsXHJcbiAgICByZW5kZXJcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhlYXRtYXAoc3BlYyA9IHt0aWxlczogW119KSB7XHJcbiAgbGV0IHt0aWxlc30gPSBzcGVjO1xyXG4gIGxldCBjb3VudCA9IG5ldyBVaW50MTZBcnJheShuZXcgQXJyYXlCdWZmZXIodGlsZXMubGVuZ3RoKjIpKTtcclxuICBsZXQgY291bnRDbG9uZSA9IG5ldyBVaW50MTZBcnJheShuZXcgQXJyYXlCdWZmZXIodGlsZXMubGVuZ3RoKjIpKTtcclxuXHJcbiAgbGV0IGdldENvdW50ID0gZnVuY3Rpb24oaSkgeyByZXR1cm4gY291bnRbaV07IH1cclxuICBsZXQgc2V0Q291bnQgPSBmdW5jdGlvbihpLCBjKSB7IGNvdW50W2ldID0gYzsgfVxyXG4gIGxldCBnZXRDb3VudEFyciA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY291bnQ7IH1cclxuICBsZXQgc2V0Q291bnRBcnIgPSBmdW5jdGlvbihjKSB7IGNvdW50ID0gYzsgfVxyXG5cclxuICBsZXQgcmVzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvdW50ID0gbmV3IFVpbnQxNkFycmF5KG5ldyBBcnJheUJ1ZmZlcih0aWxlcy5sZW5ndGgqMikpO1xyXG4gICAgY291bnRDbG9uZSA9IG5ldyBVaW50MTZBcnJheShuZXcgQXJyYXlCdWZmZXIodGlsZXMubGVuZ3RoKjIpKTtcclxuICB9XHJcblxyXG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgICBsZXQgY291bnQyID0gY291bnQuYnVmZmVyLmJ5dGVMZW5ndGggIT09IDA/IGNvdW50IDogY291bnRDbG9uZTtcclxuICAgIGxldCBnbG9iYWxfbWF4ID0gTWF0aC5tYXgoLi4uY291bnQyKTtcclxuXHJcbiAgICBpZiAoZ2xvYmFsX21heCAhPT0gMCkge1xyXG4gICAgICB0aWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHRpbGUsIGkpIHtcclxuICAgICAgICBpZiAoY291bnQyW2ldKSB7XHJcbiAgICAgICAgICBsZXQgaCA9IGNvbG9yLmhlYXQoYWxnb3JpdGhtLnJlbGF0aXZlKDAsY291bnQyW2ldLGdsb2JhbF9tYXgpKTtcclxuICAgICAgICAgIHRpbGUucmVuZGVyKGNvbnRleHQsIHVuZGVmaW5lZCwgaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY291bnQuYnVmZmVyLmJ5dGVMZW5ndGggIT09IDApIHtcclxuICAgICAgY291bnRDbG9uZSA9IGNvdW50LnNsaWNlKDApO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGdldENvdW50LFxyXG4gICAgc2V0Q291bnQsXHJcbiAgICBnZXRDb3VudEFycixcclxuICAgIHNldENvdW50QXJyLFxyXG4gICAgcmVzZXQsXHJcbiAgICByZW5kZXJcclxuICB9KTtcclxufVxyXG5cclxuLyogQU5JTUFUSU9OICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFYXNlKHNwZWMgPSB7fSkge1xyXG4gIGxldCBsaW5lYXIgPSBmdW5jdGlvbih0LGIsZSxkKSB7XHJcbiAgICByZXR1cm4gKGUtYikqdC9kICsgYjtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGxpbmVhclxyXG4gIH0pO1xyXG59XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=