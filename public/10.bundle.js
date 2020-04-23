(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var pixelmatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pixelmatch */ "./node_modules/pixelmatch/index.js");
/* harmony import */ var pixelmatch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pixelmatch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template.js */ "./app/js/replay/template.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











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
    Object(lit_html__WEBPACK_IMPORTED_MODULE_5__["render"])(Object(_template_js__WEBPACK_IMPORTED_MODULE_8__["template"])({ ...data,
      seekStyle: seekStyle()
    }), document.getElementById('view'));
  };

  let init = () => {
    _extends(spec, {
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
      spec.time = luxon__WEBPACK_IMPORTED_MODULE_7__["Duration"].fromMillis(0).toFormat("hh:mm:ss");
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

          spec.time = luxon__WEBPACK_IMPORTED_MODULE_7__["Duration"].fromMillis(frame.timestamp - firstTimestamp).toFormat("hh:mm:ss");
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
            spec.totalTime = luxon__WEBPACK_IMPORTED_MODULE_7__["Duration"].fromMillis(frames[spec.max - 1].timestamp - frames[0].timestamp).toFormat("hh:mm:ss");
            firstTimestamp = frames[0].timestamp;
          }

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
          <button @click="${data.play}" class="mdc-icon-button material-icons">${data.playing ? lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`stop` : lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`play_arrow`}</button>
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvcmVwbGF5L3JlcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvanMvcmVwbGF5L3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9waXhlbG1hdGNoL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlcGxheSIsInNwZWMiLCJzb2NrZXQiLCJ1bmRlZmluZWQiLCJsYXN0Rml4YXRlZEVsIiwibGFzdEltZyIsImdhemVIaXN0b3J5IiwiZGF0YVBvaW50cyIsImZpeGF0aW9uQ291bnQiLCJwcmV2Rml4YXRpb24iLCJzdG9yYWdlIiwiU3RvcmFnZSIsInN1cmZhY2UiLCJSZWN0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInRpbGVzIiwibWFwIiwidCIsImhlYXRtYXAiLCJIZWF0bWFwIiwiY29udGV4dCIsImZyYW1lcyIsImhlYXRtYXBWaXNpYmxlIiwic2hvd0hlYXRtYXAiLCJmaXJzdFRpbWVzdGFtcCIsInJlcXVlc3RJZCIsImZwcyIsIlJFUExBWV9GUFMiLCJub3ciLCJ0aGVuIiwiRGF0ZSIsImludGVydmFsIiwiZGVsdGEiLCJwbGF5IiwiY29uc29sZSIsImxvZyIsInBsYXlpbmciLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlcGxheSIsInJlbmRlciIsInNlZWtTdHlsZSIsInBvc2l0aW9uIiwibWF4IiwibGVuZ3RoIiwic2VlayIsInByZXZQb3NpdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInJlc2V0IiwibG9hZCIsImRpZmYiLCJBcnJheSIsImZpbGwiLCJmb3JFYWNoIiwic2hpZnQiLCJkYXRhIiwicmVuZGVyVG1wbCIsInRlbXBsYXRlIiwiaW5pdCIsInRpbWUiLCJ0b3RhbFRpbWUiLCJEdXJhdGlvbiIsImZyb21NaWxsaXMiLCJ0b0Zvcm1hdCIsImdldENvbnRleHQiLCJmcmFtZSIsImZpeGF0aW9uIiwiRml4YXRpb24iLCJjb3VudCIsImdldENvdW50QXJyIiwiZ2F6ZV9idWZmZXIiLCJBcnJheUJ1ZmZlciIsImdhemUiLCJGbG9hdDMyQXJyYXkiLCJnZXRYIiwiZ2V0WSIsImJ1ZmZlciIsIndvcmtlciIsInBvc3RNZXNzYWdlIiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJDaXJjbGUiLCJyIiwiRklYQVRJT05fQ09MT1IiLCJMaW5lIiwieDEiLCJ5MSIsIngyIiwieTIiLCJTQUNDQURFX0NPTE9SIiwidGltZXN0YW1wIiwic3JjIiwic3RhcnQiLCJnZXQiLCJ2IiwicHVzaCIsImNvbm5lY3QiLCJjYW52YXMiLCJjbGVhciIsIldvcmtlciIsIm9ubWVzc2FnZSIsImUiLCJzZXRDb3VudEFyciIsIm9uZXJyb3IiLCJnZXRLZXlzIiwia2V5cyIsImRpc2Nvbm5lY3QiLCJPYmplY3QiLCJmcmVlemUiLCJodG1sIiwiZnVsbHNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIiwibW9kdWxlIiwiZXhwb3J0cyIsInBpeGVsbWF0Y2giLCJkZWZhdWx0T3B0aW9ucyIsInRocmVzaG9sZCIsImluY2x1ZGVBQSIsImFscGhhIiwiYWFDb2xvciIsImRpZmZDb2xvciIsImRpZmZDb2xvckFsdCIsImRpZmZNYXNrIiwiaW1nMSIsImltZzIiLCJvdXRwdXQiLCJvcHRpb25zIiwiaXNQaXhlbERhdGEiLCJFcnJvciIsImxlbiIsImEzMiIsIlVpbnQzMkFycmF5IiwiYnl0ZU9mZnNldCIsImIzMiIsImlkZW50aWNhbCIsImkiLCJkcmF3R3JheVBpeGVsIiwibWF4RGVsdGEiLCJwb3MiLCJjb2xvckRlbHRhIiwiTWF0aCIsImFicyIsImFudGlhbGlhc2VkIiwiZHJhd1BpeGVsIiwiYXJyIiwiaXNWaWV3IiwiY29uc3RydWN0b3IiLCJCWVRFU19QRVJfRUxFTUVOVCIsIngwIiwieTAiLCJtaW4iLCJ6ZXJvZXMiLCJtaW5YIiwibWluWSIsIm1heFgiLCJtYXhZIiwiaGFzTWFueVNpYmxpbmdzIiwicG9zMiIsImsiLCJtIiwieU9ubHkiLCJyMSIsImcxIiwiYjEiLCJhMSIsInIyIiwiZzIiLCJiMiIsImEyIiwiYmxlbmQiLCJyZ2IyeSIsInJnYjJpIiwicSIsInJnYjJxIiwiZyIsImIiLCJjIiwiYSIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLFNBQVNBLE1BQVQsQ0FBZ0JDLElBQWhCLEVBQXNCO0FBQzNCLE1BQUlDLE1BQU0sR0FBR0MsU0FBYjtBQUVBLE1BQUlDLGFBQWEsR0FBR0QsU0FBcEI7QUFDQSxNQUFJRSxPQUFPLEdBQUdGLFNBQWQ7QUFDQSxNQUFJRyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxNQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxNQUFJQyxZQUFZLEdBQUdOLFNBQW5CO0FBQ0EsTUFBSU8sT0FBTyxHQUFHQywyREFBTyxDQUFDLEVBQUQsQ0FBckI7QUFDQSxNQUFJQyxPQUFPLEdBQUdDLG9EQUFJLENBQUM7QUFBQ0MsS0FBQyxFQUFFLENBQUo7QUFBT0MsS0FBQyxFQUFFLENBQVY7QUFBYUMsU0FBSyxFQUFFLElBQXBCO0FBQTBCQyxVQUFNLEVBQUU7QUFBbEMsR0FBRCxDQUFsQjtBQUNBLE1BQUlDLEtBQUssR0FBR04sT0FBTyxDQUFDTSxLQUFSLEdBQWdCQyxHQUFoQixDQUFvQkMsQ0FBQyxJQUFJUCxvREFBSSxDQUFDTyxDQUFELENBQTdCLENBQVo7QUFDQSxNQUFJQyxPQUFPLEdBQUdDLHVEQUFPLENBQUM7QUFBQ0osU0FBSyxFQUFFQTtBQUFSLEdBQUQsQ0FBckI7QUFDQSxNQUFJSyxPQUFKO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFFQSxNQUFJQyxjQUFjLEdBQUcsS0FBckI7O0FBRUEsTUFBSUMsV0FBVyxHQUFHLFlBQVc7QUFDM0JELGtCQUFjLEdBQUcsQ0FBQ0EsY0FBbEI7QUFDRCxH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QWpELFFBQU0sQ0FBQ2EsR0FBRyxHQUFHLENBQVAsQ0FBTixHQUFrQnFDLENBQWxCO0FBQ0FsRCxRQUFNLENBQUNhLEdBQUcsR0FBRyxDQUFQLENBQU4sR0FBa0IsR0FBbEI7QUFDSDs7QUFFRCxTQUFTRixhQUFULENBQXVCM0QsR0FBdkIsRUFBNEIwRCxDQUE1QixFQUErQmpCLEtBQS9CLEVBQXNDTyxNQUF0QyxFQUE4QztBQUMxQyxRQUFNM0MsQ0FBQyxHQUFHTCxHQUFHLENBQUMwRCxDQUFDLEdBQUcsQ0FBTCxDQUFiO0FBQ0EsUUFBTXVDLENBQUMsR0FBR2pHLEdBQUcsQ0FBQzBELENBQUMsR0FBRyxDQUFMLENBQWI7QUFDQSxRQUFNd0MsQ0FBQyxHQUFHbEcsR0FBRyxDQUFDMEQsQ0FBQyxHQUFHLENBQUwsQ0FBYjtBQUNBLFFBQU0yQyxHQUFHLEdBQUdULEtBQUssQ0FBQ0MsS0FBSyxDQUFDeEYsQ0FBRCxFQUFJNEYsQ0FBSixFQUFPQyxDQUFQLENBQU4sRUFBaUJ6RCxLQUFLLEdBQUd6QyxHQUFHLENBQUMwRCxDQUFDLEdBQUcsQ0FBTCxDQUFYLEdBQXFCLEdBQXRDLENBQWpCO0FBQ0FRLFdBQVMsQ0FBQ2xCLE1BQUQsRUFBU1UsQ0FBVCxFQUFZMkMsR0FBWixFQUFpQkEsR0FBakIsRUFBc0JBLEdBQXRCLENBQVQ7QUFDSCxDIiwiZmlsZSI6IjEwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcmFnZX0gZnJvbSAnLi4vc3RvcmFnZS5qcyc7XHJcbmltcG9ydCB7UG9pbnQsIFBvaW50cywgTGluZSwgQ2lyY2xlLCBSZWN0LCBIZWF0bWFwfSBmcm9tICcuLi9nZW8uanMnO1xyXG5pbXBvcnQge1JFUExBWV9GUFN9IGZyb20gJy4uL2V5ZS5qcyc7XHJcbmltcG9ydCB7Rml4YXRpb24sIEdhemVQb2ludCwgR2F6ZVdpbmRvd30gZnJvbSAnLi4vZXllLmpzJztcclxuaW1wb3J0IHtGSVhBVElPTl9DT0xPUiwgU0FDQ0FERV9DT0xPUn0gZnJvbSAnLi4vY29sb3IuanMnO1xyXG5cclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQge3JlbmRlciBhcyByZW5kZXJUbXBsfSBmcm9tICdsaXQtaHRtbCc7XHJcbmltcG9ydCB7cGl4ZWxtYXRjaH0gZnJvbSAncGl4ZWxtYXRjaCc7XHJcbmltcG9ydCB7RGF0ZVRpbWUsIER1cmF0aW9ufSBmcm9tICdsdXhvbic7XHJcblxyXG5pbXBvcnQge3RlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlcGxheShzcGVjKSB7XHJcbiAgbGV0IHNvY2tldCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgbGV0IGxhc3RGaXhhdGVkRWwgPSB1bmRlZmluZWQ7XHJcbiAgbGV0IGxhc3RJbWcgPSB1bmRlZmluZWQ7XHJcbiAgbGV0IGdhemVIaXN0b3J5ID0gW107XHJcbiAgbGV0IGRhdGFQb2ludHMgPSBbXTtcclxuICBsZXQgZml4YXRpb25Db3VudCA9IDA7XHJcbiAgbGV0IHByZXZGaXhhdGlvbiA9IHVuZGVmaW5lZDtcclxuICBsZXQgc3RvcmFnZSA9IFN0b3JhZ2Uoe30pO1xyXG4gIGxldCBzdXJmYWNlID0gUmVjdCh7eDogMCwgeTogMCwgd2lkdGg6IDEyODAsIGhlaWdodDogNzIwfSk7XHJcbiAgbGV0IHRpbGVzID0gc3VyZmFjZS50aWxlcygpLm1hcCh0ID0+IFJlY3QodCkpO1xyXG4gIGxldCBoZWF0bWFwID0gSGVhdG1hcCh7dGlsZXM6IHRpbGVzfSk7XHJcbiAgbGV0IGNvbnRleHQ7XHJcbiAgbGV0IGZyYW1lcyA9IFtdO1xyXG5cclxuICBsZXQgaGVhdG1hcFZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgbGV0IHNob3dIZWF0bWFwID0gZnVuY3Rpb24oKSB7XHJcbiAgICBoZWF0bWFwVmlzaWJsZSA9ICFoZWF0bWFwVmlzaWJsZTtcclxuICB9XHJcblxyXG4gIGxldCBmaXJzdFRpbWVzdGFtcCA9IHVuZGVmaW5lZDtcclxuICBsZXQgcmVxdWVzdElkID0gdW5kZWZpbmVkO1xyXG5cclxuICBsZXQgZnBzID0gUkVQTEFZX0ZQUztcclxuICBsZXQgbm93ID0gdW5kZWZpbmVkO1xyXG4gIGxldCB0aGVuID0gRGF0ZS5ub3coKTtcclxuICBsZXQgaW50ZXJ2YWwgPSAxMDAwL2ZwcztcclxuICBsZXQgZGVsdGEgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGxldCBwbGF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInBsYXlpbmdcIiwgc3BlYy5wbGF5aW5nKTtcclxuICAgIGlmIChzcGVjLnBsYXlpbmcpIHtcclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXBsYXkpO1xyXG4gICAgfVxyXG4gICAgc3BlYy5wbGF5aW5nID0gIXNwZWMucGxheWluZztcclxuICAgIHJlbmRlcihzcGVjKTtcclxuICB9XHJcblxyXG4gIGxldCBzZWVrU3R5bGUgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBcImJhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2I5MWYxZiBcIiArIHNwZWMucG9zaXRpb24vc3BlYy5tYXgqMTAwICsgXCIlLCAjYTVhNWE1IFwiICsgc3BlYy5wb3NpdGlvbi9zcGVjLm1heCoxMDAgKyBcIiUsICNhNWE1YTUgXCIgKyAoZnJhbWVzLmxlbmd0aCtzcGVjLnBvc2l0aW9uKS9zcGVjLm1heCoxMDAgKyBcIiUsICM3NTc1NzUgXCIgKyAoZnJhbWVzLmxlbmd0aCtzcGVjLnBvc2l0aW9uKS9zcGVjLm1heCoxMDAgKyBcIiUpXCI7XHJcbiAgfVxyXG5cclxuICBsZXQgc2VlayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHByZXZQb3NpdGlvbiA9IHNwZWMucG9zaXRpb247XHJcbiAgICBzcGVjLnBvc2l0aW9uID0gK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vla1wiKS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKHByZXZQb3NpdGlvbiwgc3BlYy5wb3NpdGlvbik7XHJcbiAgICBoZWF0bWFwLnJlc2V0KCk7XHJcbiAgICBpZiAoc3BlYy5wb3NpdGlvbiA8IHByZXZQb3NpdGlvbikge1xyXG4gICAgICBmcmFtZXMgPSBbXTtcclxuICAgICAgbG9hZChzcGVjLnBvc2l0aW9uKTtcclxuICAgIH0gZWxzZSBpZiAoc3BlYy5wb3NpdGlvbiA+IHByZXZQb3NpdGlvbil7XHJcbiAgICAgIGxldCBkaWZmID0gc3BlYy5wb3NpdGlvbiAtIHByZXZQb3NpdGlvbjtcclxuICAgICAgQXJyYXkoZGlmZikuZmlsbCgpLmZvckVhY2goZnVuY3Rpb24oKSB7IGZyYW1lcy5zaGlmdCgpOyB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcihzcGVjKTtcclxuICB9XHJcblxyXG4gIGxldCByZW5kZXIgPSBkYXRhID0+IHtcclxuICAgIHJlbmRlclRtcGwodGVtcGxhdGUoey4uLmRhdGEsIHNlZWtTdHlsZTogc2Vla1N0eWxlKCl9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXcnKSk7XHJcbiAgfVxyXG5cclxuICBsZXQgaW5pdCA9ICgpID0+IHtcclxuICAgIE9iamVjdC5hc3NpZ24oc3BlYywge1xyXG4gICAgICBwbGF5aW5nOiBmYWxzZSxcclxuICAgICAgcG9zaXRpb246IDAsXHJcbiAgICAgIHRpbWU6ICcwMDowMDowMCcsXHJcbiAgICAgIHRvdGFsVGltZTogJy0tOi0tOi0tJyxcclxuICAgICAgbWF4OiAxMDAwLFxyXG4gICAgICBwbGF5LFxyXG4gICAgICBzZWVrLFxyXG4gICAgICBzZWVrU3R5bGU6IHNlZWtTdHlsZSgpLFxyXG4gICAgICBzaG93SGVhdG1hcFxyXG4gICAgfSk7XHJcbiAgICByZW5kZXIoc3BlYyk7XHJcbiAgfVxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gIGxldCByZXBsYXkgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChzcGVjLnBvc2l0aW9uID09PSBzcGVjLm1heCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vIGZyYW1lXCIpO1xyXG4gICAgICBzcGVjLnBsYXlpbmcgPSAhc3BlYy5wbGF5aW5nO1xyXG4gICAgICBzcGVjLnBvc2l0aW9uID0gMDtcclxuICAgICAgbG9hZChzcGVjLnBvc2l0aW9uKTtcclxuICAgICAgc3BlYy50aW1lID0gRHVyYXRpb24uZnJvbU1pbGxpcygwKS50b0Zvcm1hdChcImhoOm1tOnNzXCIpO1xyXG4gICAgICByZW5kZXIoc3BlYyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgZGVsdGEgPSBub3cgLSB0aGVuO1xyXG4gICAgaWYgKGRlbHRhID4gaW50ZXJ2YWwpIHtcclxuICAgICAgdGhlbiA9IG5vdyAtIChkZWx0YSAlIGludGVydmFsKTtcclxuICAgICAgbGV0IGNvbnRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYScpLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICBsZXQgZnJhbWUgPSBmcmFtZXMuc2hpZnQoKTtcclxuXHJcbiAgICAgIGlmIChmcmFtZSkge1xyXG4gICAgICAgIGxldCBmaXhhdGlvbiA9IEZpeGF0aW9uKHt4OiBmcmFtZS54LCB5OiBmcmFtZS55fSk7XHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IGhlYXRtYXAuZ2V0Q291bnRBcnIoKTtcclxuICAgICAgICBsZXQgZ2F6ZV9idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoMio0KTtcclxuICAgICAgICBsZXQgZ2F6ZSA9IG5ldyBGbG9hdDMyQXJyYXkoZ2F6ZV9idWZmZXIpO1xyXG4gICAgICAgIGdhemVbMF0gPSBmaXhhdGlvbi5nZXRYKCk7XHJcbiAgICAgICAgZ2F6ZVsxXSA9IGZpeGF0aW9uLmdldFkoKTtcclxuXHJcbiAgICAgICAgaWYgKGhlYXRtYXAuZ2V0Q291bnRBcnIoKS5idWZmZXIubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe2NvdW50OiBjb3VudCwgZ2F6ZTogZ2F6ZV9idWZmZXJ9LCBbY291bnQuYnVmZmVyLCBnYXplX2J1ZmZlcl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwidmFsdWVcIiwgZnJhbWUpO1xyXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsMCwwLDEyODAsNzIwKTtcclxuXHJcbiAgICAgICAgICBDaXJjbGUoe3g6IGZpeGF0aW9uLmdldFgoKSwgeTogZml4YXRpb24uZ2V0WSgpLCByOiAyMH0pLnJlbmRlcihjb250ZXh0LCBGSVhBVElPTl9DT0xPUik7XHJcblxyXG4gICAgICAgICAgaWYgKHByZXZGaXhhdGlvbikge1xyXG4gICAgICAgICAgICBMaW5lKHt4MTogcHJldkZpeGF0aW9uLmdldFgoKSwgeTE6IHByZXZGaXhhdGlvbi5nZXRZKCksIHgyOiBmaXhhdGlvbi5nZXRYKCksIHkyOiBmaXhhdGlvbi5nZXRZKCl9KS5yZW5kZXIoY29udGV4dCwgU0FDQ0FERV9DT0xPUik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwcmV2Rml4YXRpb24gPSBmaXhhdGlvbjtcclxuXHJcbiAgICAgICAgICBpZiAoaGVhdG1hcFZpc2libGUpIHsgaGVhdG1hcC5yZW5kZXIoY29udGV4dCk7IH1cclxuICAgICAgICAgIHNwZWMudGltZSA9IER1cmF0aW9uLmZyb21NaWxsaXMoKGZyYW1lLnRpbWVzdGFtcCAtIGZpcnN0VGltZXN0YW1wKSkudG9Gb3JtYXQoXCJoaDptbTpzc1wiKTtcclxuICAgICAgICAgIHNwZWMucG9zaXRpb24rKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nLnNyYyA9IGZyYW1lLmltZztcclxuICAgICAgfVxyXG4gICAgICByZW5kZXIoc3BlYyk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVwbGF5KTtcclxuICB9XHJcblxyXG4gIGxldCBsb2FkID0gZnVuY3Rpb24oc3RhcnQpIHtcclxuICAgIGZvciAobGV0IGZyYW1lPXN0YXJ0OyBmcmFtZSA8PSBzcGVjLm1heDsgZnJhbWUrKykge1xyXG4gICAgICBzdG9yYWdlLmdldChmcmFtZSwgKHYpID0+IHtcclxuICAgICAgICBpZiAodikge1xyXG4gICAgICAgICAgZnJhbWVzLnB1c2godik7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGZyYW1lcy5sZW5ndGgpO1xyXG4gICAgICAgICAgaWYgKGZyYW1lcy5sZW5ndGggPT09IHNwZWMubWF4KSB7XHJcbiAgICAgICAgICAgIHNwZWMudG90YWxUaW1lID0gRHVyYXRpb24uZnJvbU1pbGxpcygoZnJhbWVzW3NwZWMubWF4LTFdLnRpbWVzdGFtcCAtIGZyYW1lc1swXS50aW1lc3RhbXApKS50b0Zvcm1hdChcImhoOm1tOnNzXCIpO1xyXG4gICAgICAgICAgICBmaXJzdFRpbWVzdGFtcCA9IGZyYW1lc1swXS50aW1lc3RhbXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZW5kZXIoc3BlYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCB3b3JrZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGxldCBjb25uZWN0ID0gZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICBSZWN0KHt4OiAwLCB5OiAwLCB3aWR0aDogY29udGV4dC5jYW52YXMud2lkdGgsIGhlaWdodDogY29udGV4dC5jYW52YXMuaGVpZ2h0fSkuY2xlYXIoY29udGV4dCk7XHJcblxyXG4gICAgd29ya2VyID0gbmV3IFdvcmtlcihcIi9oZWF0bWFwLmpzXCIpO1xyXG4gICAgd29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIm9ubWVzc2FnZVwiLCBlLmRhdGEpO1xyXG4gICAgICBoZWF0bWFwLnNldENvdW50QXJyKGUuZGF0YSk7XHJcbiAgICB9XHJcbiAgICB3b3JrZXIub25lcnJvciA9IGZ1bmN0aW9uKGUpIHsgY29uc29sZS5sb2coXCJvbmVycm9yXCIsIGUpOyB9XHJcblxyXG4gICAgc3RvcmFnZS5nZXRLZXlzKFwiZ2F6ZVwiLCAoa2V5cykgPT4ge1xyXG4gICAgICBzcGVjLm1heCA9IGtleXMubGVuZ3RoO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1heFwiLCBzcGVjLm1heCk7XHJcbiAgICAgIGxvYWQoMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2ZvciAobGV0IGk9MDsgaSA8IDIwMDsgaSsrKSB7XHJcbiAgICAgIC8vUmVjdCh7eDogMCwgeTogMCwgd2lkdGg6IGNvbnRleHQuY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuY2FudmFzLmhlaWdodH0pLmNsZWFyKGNvbnRleHQpO1xyXG4gICAgICAvL2xldCBwID0gUG9pbnQoe3g6IHZhbHVlLngsIHk6IHZhbHVlLnl9KTtcclxuICAgICAgLy9wLnJlbmRlcihjb250ZXh0LCAncmdiYSgyMDAsMCwwLDAuODUpJyk7XHJcblxyXG4gICAgICAvL2lmIChnYXplSGlzdG9yeS5sZW5ndGggPT09IDMwKSB7IGdhemVIaXN0b3J5LnNoaWZ0KCk7IH1cclxuICAgICAgLy9nYXplSGlzdG9yeS5wdXNoKHApO1xyXG5cclxuICAgICAgLy9SZWN0KHt4OiAwLCB5OiAwLCB3aWR0aDogY29udGV4dC5jYW52YXMud2lkdGgsIGhlaWdodDogY29udGV4dC5jYW52YXMuaGVpZ2h0fSkuY2xlYXIoY29udGV4dCk7XHJcbiAgICAgIC8vZml4YXRpb25Db3VudCA9IDA7XHJcbiAgICAgIC8vZml4YXRpb24gPSBmaXhhdGlvbi5nZXRGaXhhdGlvbigpO1xyXG4gICAgICAvL0NpcmNsZSh7eDogZml4YXRpb24ueCwgeTogZml4YXRpb24ueSwgcjogMjB9KS5yZW5kZXIoY29udGV4dCwgJ3JnYmEoMjU1LDI1NSwyNTUsMC44NSknKTtcclxuXHJcbiAgICAgIC8vaWYgKHByZXZGaXhhdGlvbikge1xyXG4gICAgICAvLyAgTGluZSh7eDE6IHByZXZGaXhhdGlvbi54LCB5MTogcHJldkZpeGF0aW9uLnksIHgyOiBmaXhhdGlvbi54LCB5MjogZml4YXRpb24ueX0pLnJlbmRlcihjb250ZXh0LCAncmdiYSgyNTUsMjU1LDI1NSwwLjg1KScpO1xyXG4gICAgICAvL31cclxuICAgICAgLy9wcmV2Rml4YXRpb24gPSBmaXhhdGlvbjtcclxuXHJcbiAgICAgIC8vZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyAgaWYgKHRpbGVzW2ldLmNvbnRhaW5zUG9pbnQoZml4YXRpb24ueCwgZml4YXRpb24ueSkpIHtcclxuICAgICAgLy8gICAgaGVhdG1hcC5zZXRDb3VudChpLCBoZWF0bWFwLmdldENvdW50KGkpKzEpO1xyXG4gICAgICAvLyAgfVxyXG4gICAgICAvL31cclxuXHJcbiAgICAgIC8vaGVhdG1hcC5yZW5kZXIoY29udGV4dCk7XHJcblxyXG4gICAgICAvL1BvaW50cyh7cG9pbnRzOiBnYXplSGlzdG9yeX0pLnJlbmRlcihjb250ZXh0LCAncmdiYSgyMDAsMCwwLDAuODUpJyk7XHJcbiAgICAgIC8vdGlsZXMuZm9yRWFjaCh0ID0+IHQucmVuZGVyKGNvbnRleHQsICdyZ2JhKDI1NSwyNTUsMjU1LDAuODUpJykpO1xyXG5cclxuICAgICAgLy9jb25zdCBjYW52YXMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIC8vY2FudmFzMi53aWR0aCA9IDEwMDtcclxuICAgICAgLy9jYW52YXMyLmhlaWdodCA9IDEwMDtcclxuICAgICAgLy9jb25zdCBjb250ZXh0MiA9IGNhbnZhczIuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgIC8vY29udGV4dDIuZHJhd0ltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKSwgMCwgMCwgY2FudmFzMi53aWR0aCwgY2FudmFzMi5oZWlnaHQpO1xyXG4gICAgICAvL2xldCBpbWcyID0gdW5kZWZpbmVkO1xyXG4gICAgICAvL2lmIChsYXN0SW1nKSB7XHJcbiAgICAgIC8vICBpbWcyID0gY29udGV4dDIuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhczIud2lkdGgsIGNhbnZhczIuaGVpZ2h0KTtcclxuICAgICAgICAvL3BpeGVsbWF0Y2gobGFzdEltZy5kYXRhLCBpbWcyLmRhdGEsIG51bGwsIGNhbnZhczIud2lkdGgsIGNhbnZhczIuaGVpZ2h0LCB7dGhyZXNob2xkOiAwLjF9KTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vbGFzdEltZyA9IGNvbnRleHQyLmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMyLndpZHRoLCBjYW52YXMyLmhlaWdodCk7XHJcbiAgICAvL31cclxuICB9XHJcblxyXG4gIGxldCBkaXNjb25uZWN0ID0gKCkgPT4ge307XHJcblxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcclxuICAgIGNvbm5lY3QsXHJcbiAgICBkaXNjb25uZWN0XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHtodG1sfSBmcm9tICdsaXQtaHRtbCc7XHJcblxyXG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSAoZGF0YSkgPT4gaHRtbGBcclxuICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkX19pbm5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkX19jZWxsLS1zcGFuLThcIj5cclxuICAgICAgICA8Y2FudmFzIEBjbGljaz1cIiR7ZnVsbHNjcmVlbn1cIiBpZD1cImFcIiB3aWR0aD1cIjEyODBcIiBoZWlnaHQ9XCI3MjBcIj48L2NhbnZhcz5cclxuICAgICAgICA8ZGl2IGlkPVwiY2FudmFzLWN0cmxcIj5cclxuICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiJHtkYXRhLnBsYXl9XCIgY2xhc3M9XCJtZGMtaWNvbi1idXR0b24gbWF0ZXJpYWwtaWNvbnNcIj4ke2RhdGEucGxheWluZz8gaHRtbGBzdG9wYDogaHRtbGBwbGF5X2Fycm93YH08L2J1dHRvbj5cclxuICAgICAgICAgIDxpbnB1dCBpZD1cInNlZWtcIiBAaW5wdXQ9XCIke2RhdGEuc2Vla31cIiAudmFsdWU9XCIke2RhdGEucG9zaXRpb259XCIgbWF4PVwiJHtkYXRhLm1heH1cIiB0eXBlPVwicmFuZ2VcIiBzdHlsZT1cIiR7ZGF0YS5zZWVrU3R5bGV9XCI+XHJcbiAgICAgICAgICA8c3BhbiBpZD1cInRpbWVcIj4ke2RhdGEudGltZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBpZD1cInRvdGFsLXRpbWVcIj4mbmJzcDsvICR7ZGF0YS50b3RhbFRpbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1sYXlvdXQtZ3JpZF9fY2VsbC0tc3Bhbi00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1zd2l0Y2hcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoX190cmFja1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoX190aHVtYlwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBAY2xpY2s9XCIke2RhdGEuc2hvd0hlYXRtYXB9XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJiYXNpYy1zd2l0Y2hcIiBjbGFzcz1cIm1kYy1zd2l0Y2hfX25hdGl2ZS1jb250cm9sXCIgcm9sZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJiYXNpYy1zd2l0Y2hcIj5TaG93IEhlYXRtYXA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxubGV0IGZ1bGxzY3JlZW4gPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBjb250ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2EnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIGNvbnRleHQuY2FudmFzLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKClcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcGl4ZWxtYXRjaDtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGhyZXNob2xkOiAwLjEsICAgICAgICAgLy8gbWF0Y2hpbmcgdGhyZXNob2xkICgwIHRvIDEpOyBzbWFsbGVyIGlzIG1vcmUgc2Vuc2l0aXZlXG4gICAgaW5jbHVkZUFBOiBmYWxzZSwgICAgICAgLy8gd2hldGhlciB0byBza2lwIGFudGktYWxpYXNpbmcgZGV0ZWN0aW9uXG4gICAgYWxwaGE6IDAuMSwgICAgICAgICAgICAgLy8gb3BhY2l0eSBvZiBvcmlnaW5hbCBpbWFnZSBpbiBkaWZmIG91cHV0XG4gICAgYWFDb2xvcjogWzI1NSwgMjU1LCAwXSwgLy8gY29sb3Igb2YgYW50aS1hbGlhc2VkIHBpeGVscyBpbiBkaWZmIG91dHB1dFxuICAgIGRpZmZDb2xvcjogWzI1NSwgMCwgMF0sIC8vIGNvbG9yIG9mIGRpZmZlcmVudCBwaXhlbHMgaW4gZGlmZiBvdXRwdXRcbiAgICBkaWZmQ29sb3JBbHQ6IG51bGwsICAgICAvLyB3aGV0aGVyIHRvIGRldGVjdCBkYXJrIG9uIGxpZ2h0IGRpZmZlcmVuY2VzIGJldHdlZW4gaW1nMSBhbmQgaW1nMiBhbmQgc2V0IGFuIGFsdGVybmF0aXZlIGNvbG9yIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiB0aGUgdHdvXG4gICAgZGlmZk1hc2s6IGZhbHNlICAgICAgICAgLy8gZHJhdyB0aGUgZGlmZiBvdmVyIGEgdHJhbnNwYXJlbnQgYmFja2dyb3VuZCAoYSBtYXNrKVxufTtcblxuZnVuY3Rpb24gcGl4ZWxtYXRjaChpbWcxLCBpbWcyLCBvdXRwdXQsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcblxuICAgIGlmICghaXNQaXhlbERhdGEoaW1nMSkgfHwgIWlzUGl4ZWxEYXRhKGltZzIpIHx8IChvdXRwdXQgJiYgIWlzUGl4ZWxEYXRhKG91dHB1dCkpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltYWdlIGRhdGE6IFVpbnQ4QXJyYXksIFVpbnQ4Q2xhbXBlZEFycmF5IG9yIEJ1ZmZlciBleHBlY3RlZC4nKTtcblxuICAgIGlmIChpbWcxLmxlbmd0aCAhPT0gaW1nMi5sZW5ndGggfHwgKG91dHB1dCAmJiBvdXRwdXQubGVuZ3RoICE9PSBpbWcxLmxlbmd0aCkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW1hZ2Ugc2l6ZXMgZG8gbm90IG1hdGNoLicpO1xuXG4gICAgaWYgKGltZzEubGVuZ3RoICE9PSB3aWR0aCAqIGhlaWdodCAqIDQpIHRocm93IG5ldyBFcnJvcignSW1hZ2UgZGF0YSBzaXplIGRvZXMgbm90IG1hdGNoIHdpZHRoL2hlaWdodC4nKTtcblxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAvLyBjaGVjayBpZiBpbWFnZXMgYXJlIGlkZW50aWNhbFxuICAgIGNvbnN0IGxlbiA9IHdpZHRoICogaGVpZ2h0O1xuICAgIGNvbnN0IGEzMiA9IG5ldyBVaW50MzJBcnJheShpbWcxLmJ1ZmZlciwgaW1nMS5ieXRlT2Zmc2V0LCBsZW4pO1xuICAgIGNvbnN0IGIzMiA9IG5ldyBVaW50MzJBcnJheShpbWcyLmJ1ZmZlciwgaW1nMi5ieXRlT2Zmc2V0LCBsZW4pO1xuICAgIGxldCBpZGVudGljYWwgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoYTMyW2ldICE9PSBiMzJbaV0pIHsgaWRlbnRpY2FsID0gZmFsc2U7IGJyZWFrOyB9XG4gICAgfVxuICAgIGlmIChpZGVudGljYWwpIHsgLy8gZmFzdCBwYXRoIGlmIGlkZW50aWNhbFxuICAgICAgICBpZiAob3V0cHV0ICYmICFvcHRpb25zLmRpZmZNYXNrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSBkcmF3R3JheVBpeGVsKGltZzEsIDQgKiBpLCBvcHRpb25zLmFscGhhLCBvdXRwdXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIG1heGltdW0gYWNjZXB0YWJsZSBzcXVhcmUgZGlzdGFuY2UgYmV0d2VlbiB0d28gY29sb3JzO1xuICAgIC8vIDM1MjE1IGlzIHRoZSBtYXhpbXVtIHBvc3NpYmxlIHZhbHVlIGZvciB0aGUgWUlRIGRpZmZlcmVuY2UgbWV0cmljXG4gICAgY29uc3QgbWF4RGVsdGEgPSAzNTIxNSAqIG9wdGlvbnMudGhyZXNob2xkICogb3B0aW9ucy50aHJlc2hvbGQ7XG4gICAgbGV0IGRpZmYgPSAwO1xuXG4gICAgLy8gY29tcGFyZSBlYWNoIHBpeGVsIG9mIG9uZSBpbWFnZSBhZ2FpbnN0IHRoZSBvdGhlciBvbmVcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuXG4gICAgICAgICAgICBjb25zdCBwb3MgPSAoeSAqIHdpZHRoICsgeCkgKiA0O1xuXG4gICAgICAgICAgICAvLyBzcXVhcmVkIFlVViBkaXN0YW5jZSBiZXR3ZWVuIGNvbG9ycyBhdCB0aGlzIHBpeGVsIHBvc2l0aW9uLCBuZWdhdGl2ZSBpZiB0aGUgaW1nMiBwaXhlbCBpcyBkYXJrZXJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY29sb3JEZWx0YShpbWcxLCBpbWcyLCBwb3MsIHBvcyk7XG5cbiAgICAgICAgICAgIC8vIHRoZSBjb2xvciBkaWZmZXJlbmNlIGlzIGFib3ZlIHRoZSB0aHJlc2hvbGRcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPiBtYXhEZWx0YSkge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGl0J3MgYSByZWFsIHJlbmRlcmluZyBkaWZmZXJlbmNlIG9yIGp1c3QgYW50aS1hbGlhc2luZ1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5pbmNsdWRlQUEgJiYgKGFudGlhbGlhc2VkKGltZzEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGltZzIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW50aWFsaWFzZWQoaW1nMiwgeCwgeSwgd2lkdGgsIGhlaWdodCwgaW1nMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uZSBvZiB0aGUgcGl4ZWxzIGlzIGFudGktYWxpYXNpbmc7IGRyYXcgYXMgeWVsbG93IGFuZCBkbyBub3QgY291bnQgYXMgZGlmZmVyZW5jZVxuICAgICAgICAgICAgICAgICAgICAvLyBub3RlIHRoYXQgd2UgZG8gbm90IGluY2x1ZGUgc3VjaCBwaXhlbHMgaW4gYSBtYXNrXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXQgJiYgIW9wdGlvbnMuZGlmZk1hc2spIGRyYXdQaXhlbChvdXRwdXQsIHBvcywgLi4ub3B0aW9ucy5hYUNvbG9yKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvdW5kIHN1YnN0YW50aWFsIGRpZmZlcmVuY2Ugbm90IGNhdXNlZCBieSBhbnRpLWFsaWFzaW5nOyBkcmF3IGl0IGFzIHN1Y2hcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhd1BpeGVsKG91dHB1dCwgcG9zLCAuLi4oZGVsdGEgPCAwICYmIG9wdGlvbnMuZGlmZkNvbG9yQWx0IHx8IG9wdGlvbnMuZGlmZkNvbG9yKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGlmZisrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAvLyBwaXhlbHMgYXJlIHNpbWlsYXI7IGRyYXcgYmFja2dyb3VuZCBhcyBncmF5c2NhbGUgaW1hZ2UgYmxlbmRlZCB3aXRoIHdoaXRlXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmRpZmZNYXNrKSBkcmF3R3JheVBpeGVsKGltZzEsIHBvcywgb3B0aW9ucy5hbHBoYSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVudCBwaXhlbHNcbiAgICByZXR1cm4gZGlmZjtcbn1cblxuZnVuY3Rpb24gaXNQaXhlbERhdGEoYXJyKSB7XG4gICAgLy8gd29yayBhcm91bmQgaW5zdGFuY2VvZiBVaW50OEFycmF5IG5vdCB3b3JraW5nIHByb3Blcmx5IGluIHNvbWUgSmVzdCBlbnZpcm9ubWVudHNcbiAgICByZXR1cm4gQXJyYXlCdWZmZXIuaXNWaWV3KGFycikgJiYgYXJyLmNvbnN0cnVjdG9yLkJZVEVTX1BFUl9FTEVNRU5UID09PSAxO1xufVxuXG4vLyBjaGVjayBpZiBhIHBpeGVsIGlzIGxpa2VseSBhIHBhcnQgb2YgYW50aS1hbGlhc2luZztcbi8vIGJhc2VkIG9uIFwiQW50aS1hbGlhc2VkIFBpeGVsIGFuZCBJbnRlbnNpdHkgU2xvcGUgRGV0ZWN0b3JcIiBwYXBlciBieSBWLiBWeXNuaWF1c2thcywgMjAwOVxuXG5mdW5jdGlvbiBhbnRpYWxpYXNlZChpbWcsIHgxLCB5MSwgd2lkdGgsIGhlaWdodCwgaW1nMikge1xuICAgIGNvbnN0IHgwID0gTWF0aC5tYXgoeDEgLSAxLCAwKTtcbiAgICBjb25zdCB5MCA9IE1hdGgubWF4KHkxIC0gMSwgMCk7XG4gICAgY29uc3QgeDIgPSBNYXRoLm1pbih4MSArIDEsIHdpZHRoIC0gMSk7XG4gICAgY29uc3QgeTIgPSBNYXRoLm1pbih5MSArIDEsIGhlaWdodCAtIDEpO1xuICAgIGNvbnN0IHBvcyA9ICh5MSAqIHdpZHRoICsgeDEpICogNDtcbiAgICBsZXQgemVyb2VzID0geDEgPT09IHgwIHx8IHgxID09PSB4MiB8fCB5MSA9PT0geTAgfHwgeTEgPT09IHkyID8gMSA6IDA7XG4gICAgbGV0IG1pbiA9IDA7XG4gICAgbGV0IG1heCA9IDA7XG4gICAgbGV0IG1pblgsIG1pblksIG1heFgsIG1heFk7XG5cbiAgICAvLyBnbyB0aHJvdWdoIDggYWRqYWNlbnQgcGl4ZWxzXG4gICAgZm9yIChsZXQgeCA9IHgwOyB4IDw9IHgyOyB4KyspIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IHkwOyB5IDw9IHkyOyB5KyspIHtcbiAgICAgICAgICAgIGlmICh4ID09PSB4MSAmJiB5ID09PSB5MSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGJyaWdodG5lc3MgZGVsdGEgYmV0d2VlbiB0aGUgY2VudGVyIHBpeGVsIGFuZCBhZGphY2VudCBvbmVcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY29sb3JEZWx0YShpbWcsIGltZywgcG9zLCAoeSAqIHdpZHRoICsgeCkgKiA0LCB0cnVlKTtcblxuICAgICAgICAgICAgLy8gY291bnQgdGhlIG51bWJlciBvZiBlcXVhbCwgZGFya2VyIGFuZCBicmlnaHRlciBhZGphY2VudCBwaXhlbHNcbiAgICAgICAgICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHplcm9lcysrO1xuICAgICAgICAgICAgICAgIC8vIGlmIGZvdW5kIG1vcmUgdGhhbiAyIGVxdWFsIHNpYmxpbmdzLCBpdCdzIGRlZmluaXRlbHkgbm90IGFudGktYWxpYXNpbmdcbiAgICAgICAgICAgICAgICBpZiAoemVyb2VzID4gMikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAvLyByZW1lbWJlciB0aGUgZGFya2VzdCBwaXhlbFxuICAgICAgICAgICAgfSBlbHNlIGlmIChkZWx0YSA8IG1pbikge1xuICAgICAgICAgICAgICAgIG1pbiA9IGRlbHRhO1xuICAgICAgICAgICAgICAgIG1pblggPSB4O1xuICAgICAgICAgICAgICAgIG1pblkgPSB5O1xuXG4gICAgICAgICAgICAvLyByZW1lbWJlciB0aGUgYnJpZ2h0ZXN0IHBpeGVsXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlbHRhID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gZGVsdGE7XG4gICAgICAgICAgICAgICAgbWF4WCA9IHg7XG4gICAgICAgICAgICAgICAgbWF4WSA9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSBhcmUgbm8gYm90aCBkYXJrZXIgYW5kIGJyaWdodGVyIHBpeGVscyBhbW9uZyBzaWJsaW5ncywgaXQncyBub3QgYW50aS1hbGlhc2luZ1xuICAgIGlmIChtaW4gPT09IDAgfHwgbWF4ID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBpZiBlaXRoZXIgdGhlIGRhcmtlc3Qgb3IgdGhlIGJyaWdodGVzdCBwaXhlbCBoYXMgMysgZXF1YWwgc2libGluZ3MgaW4gYm90aCBpbWFnZXNcbiAgICAvLyAoZGVmaW5pdGVseSBub3QgYW50aS1hbGlhc2VkKSwgdGhpcyBwaXhlbCBpcyBhbnRpLWFsaWFzZWRcbiAgICByZXR1cm4gKGhhc01hbnlTaWJsaW5ncyhpbWcsIG1pblgsIG1pblksIHdpZHRoLCBoZWlnaHQpICYmIGhhc01hbnlTaWJsaW5ncyhpbWcyLCBtaW5YLCBtaW5ZLCB3aWR0aCwgaGVpZ2h0KSkgfHxcbiAgICAgICAgICAgKGhhc01hbnlTaWJsaW5ncyhpbWcsIG1heFgsIG1heFksIHdpZHRoLCBoZWlnaHQpICYmIGhhc01hbnlTaWJsaW5ncyhpbWcyLCBtYXhYLCBtYXhZLCB3aWR0aCwgaGVpZ2h0KSk7XG59XG5cbi8vIGNoZWNrIGlmIGEgcGl4ZWwgaGFzIDMrIGFkamFjZW50IHBpeGVscyBvZiB0aGUgc2FtZSBjb2xvci5cbmZ1bmN0aW9uIGhhc01hbnlTaWJsaW5ncyhpbWcsIHgxLCB5MSwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHgwID0gTWF0aC5tYXgoeDEgLSAxLCAwKTtcbiAgICBjb25zdCB5MCA9IE1hdGgubWF4KHkxIC0gMSwgMCk7XG4gICAgY29uc3QgeDIgPSBNYXRoLm1pbih4MSArIDEsIHdpZHRoIC0gMSk7XG4gICAgY29uc3QgeTIgPSBNYXRoLm1pbih5MSArIDEsIGhlaWdodCAtIDEpO1xuICAgIGNvbnN0IHBvcyA9ICh5MSAqIHdpZHRoICsgeDEpICogNDtcbiAgICBsZXQgemVyb2VzID0geDEgPT09IHgwIHx8IHgxID09PSB4MiB8fCB5MSA9PT0geTAgfHwgeTEgPT09IHkyID8gMSA6IDA7XG5cbiAgICAvLyBnbyB0aHJvdWdoIDggYWRqYWNlbnQgcGl4ZWxzXG4gICAgZm9yIChsZXQgeCA9IHgwOyB4IDw9IHgyOyB4KyspIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IHkwOyB5IDw9IHkyOyB5KyspIHtcbiAgICAgICAgICAgIGlmICh4ID09PSB4MSAmJiB5ID09PSB5MSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHBvczIgPSAoeSAqIHdpZHRoICsgeCkgKiA0O1xuICAgICAgICAgICAgaWYgKGltZ1twb3NdID09PSBpbWdbcG9zMl0gJiZcbiAgICAgICAgICAgICAgICBpbWdbcG9zICsgMV0gPT09IGltZ1twb3MyICsgMV0gJiZcbiAgICAgICAgICAgICAgICBpbWdbcG9zICsgMl0gPT09IGltZ1twb3MyICsgMl0gJiZcbiAgICAgICAgICAgICAgICBpbWdbcG9zICsgM10gPT09IGltZ1twb3MyICsgM10pIHplcm9lcysrO1xuXG4gICAgICAgICAgICBpZiAoemVyb2VzID4gMikgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIGNhbGN1bGF0ZSBjb2xvciBkaWZmZXJlbmNlIGFjY29yZGluZyB0byB0aGUgcGFwZXIgXCJNZWFzdXJpbmcgcGVyY2VpdmVkIGNvbG9yIGRpZmZlcmVuY2Vcbi8vIHVzaW5nIFlJUSBOVFNDIHRyYW5zbWlzc2lvbiBjb2xvciBzcGFjZSBpbiBtb2JpbGUgYXBwbGljYXRpb25zXCIgYnkgWS4gS290c2FyZW5rbyBhbmQgRi4gUmFtb3NcblxuZnVuY3Rpb24gY29sb3JEZWx0YShpbWcxLCBpbWcyLCBrLCBtLCB5T25seSkge1xuICAgIGxldCByMSA9IGltZzFbayArIDBdO1xuICAgIGxldCBnMSA9IGltZzFbayArIDFdO1xuICAgIGxldCBiMSA9IGltZzFbayArIDJdO1xuICAgIGxldCBhMSA9IGltZzFbayArIDNdO1xuXG4gICAgbGV0IHIyID0gaW1nMlttICsgMF07XG4gICAgbGV0IGcyID0gaW1nMlttICsgMV07XG4gICAgbGV0IGIyID0gaW1nMlttICsgMl07XG4gICAgbGV0IGEyID0gaW1nMlttICsgM107XG5cbiAgICBpZiAoYTEgPT09IGEyICYmIHIxID09PSByMiAmJiBnMSA9PT0gZzIgJiYgYjEgPT09IGIyKSByZXR1cm4gMDtcblxuICAgIGlmIChhMSA8IDI1NSkge1xuICAgICAgICBhMSAvPSAyNTU7XG4gICAgICAgIHIxID0gYmxlbmQocjEsIGExKTtcbiAgICAgICAgZzEgPSBibGVuZChnMSwgYTEpO1xuICAgICAgICBiMSA9IGJsZW5kKGIxLCBhMSk7XG4gICAgfVxuXG4gICAgaWYgKGEyIDwgMjU1KSB7XG4gICAgICAgIGEyIC89IDI1NTtcbiAgICAgICAgcjIgPSBibGVuZChyMiwgYTIpO1xuICAgICAgICBnMiA9IGJsZW5kKGcyLCBhMik7XG4gICAgICAgIGIyID0gYmxlbmQoYjIsIGEyKTtcbiAgICB9XG5cbiAgICBjb25zdCB5MSA9IHJnYjJ5KHIxLCBnMSwgYjEpO1xuICAgIGNvbnN0IHkyID0gcmdiMnkocjIsIGcyLCBiMik7XG4gICAgY29uc3QgeSA9IHkxIC0geTI7XG5cbiAgICBpZiAoeU9ubHkpIHJldHVybiB5OyAvLyBicmlnaHRuZXNzIGRpZmZlcmVuY2Ugb25seVxuXG4gICAgY29uc3QgaSA9IHJnYjJpKHIxLCBnMSwgYjEpIC0gcmdiMmkocjIsIGcyLCBiMik7XG4gICAgY29uc3QgcSA9IHJnYjJxKHIxLCBnMSwgYjEpIC0gcmdiMnEocjIsIGcyLCBiMik7XG5cbiAgICBjb25zdCBkZWx0YSA9IDAuNTA1MyAqIHkgKiB5ICsgMC4yOTkgKiBpICogaSArIDAuMTk1NyAqIHEgKiBxO1xuXG4gICAgLy8gZW5jb2RlIHdoZXRoZXIgdGhlIHBpeGVsIGxpZ2h0ZW5zIG9yIGRhcmtlbnMgaW4gdGhlIHNpZ25cbiAgICByZXR1cm4geTEgPiB5MiA/IC1kZWx0YSA6IGRlbHRhO1xufVxuXG5mdW5jdGlvbiByZ2IyeShyLCBnLCBiKSB7IHJldHVybiByICogMC4yOTg4OTUzMSArIGcgKiAwLjU4NjYyMjQ3ICsgYiAqIDAuMTE0NDgyMjM7IH1cbmZ1bmN0aW9uIHJnYjJpKHIsIGcsIGIpIHsgcmV0dXJuIHIgKiAwLjU5NTk3Nzk5IC0gZyAqIDAuMjc0MTc2MTAgLSBiICogMC4zMjE4MDE4OTsgfVxuZnVuY3Rpb24gcmdiMnEociwgZywgYikgeyByZXR1cm4gciAqIDAuMjExNDcwMTcgLSBnICogMC41MjI2MTcxMSArIGIgKiAwLjMxMTE0Njk0OyB9XG5cbi8vIGJsZW5kIHNlbWktdHJhbnNwYXJlbnQgY29sb3Igd2l0aCB3aGl0ZVxuZnVuY3Rpb24gYmxlbmQoYywgYSkge1xuICAgIHJldHVybiAyNTUgKyAoYyAtIDI1NSkgKiBhO1xufVxuXG5mdW5jdGlvbiBkcmF3UGl4ZWwob3V0cHV0LCBwb3MsIHIsIGcsIGIpIHtcbiAgICBvdXRwdXRbcG9zICsgMF0gPSByO1xuICAgIG91dHB1dFtwb3MgKyAxXSA9IGc7XG4gICAgb3V0cHV0W3BvcyArIDJdID0gYjtcbiAgICBvdXRwdXRbcG9zICsgM10gPSAyNTU7XG59XG5cbmZ1bmN0aW9uIGRyYXdHcmF5UGl4ZWwoaW1nLCBpLCBhbHBoYSwgb3V0cHV0KSB7XG4gICAgY29uc3QgciA9IGltZ1tpICsgMF07XG4gICAgY29uc3QgZyA9IGltZ1tpICsgMV07XG4gICAgY29uc3QgYiA9IGltZ1tpICsgMl07XG4gICAgY29uc3QgdmFsID0gYmxlbmQocmdiMnkociwgZywgYiksIGFscGhhICogaW1nW2kgKyAzXSAvIDI1NSk7XG4gICAgZHJhd1BpeGVsKG91dHB1dCwgaSwgdmFsLCB2YWwsIHZhbCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9