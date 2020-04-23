(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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
      connected: false
    });

    render(spec);
  };

  init();

  let connect = function (context) {
    let offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = 1280;
    offscreenCanvas.height = 720;
    let offscreenContext = offscreenCanvas.getContext('2d');
    let worker = new Worker("/storage.js");
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default.a.connect('http://localhost');
    socket.on('connect', function () {
      render(spec);
      console.log('eye connect');
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
            let pxls = offscreenContext.getImageData(0, 0, offscreenContext.canvas.width, offscreenContext.canvas.height); //console.log(pxls);
            //console.log(JSON.stringify({x: fixation.getX(), y: fixation.getY(), img: offscreenContext.canvas.toDataURL('image/webp', 0.5).length  }));
            //console.log("timestamp", fixation.getTimestamp());

            worker.postMessage({
              x: fixation.getX(),
              y: fixation.getY(),
              timestamp: fixation.getTimestamp(),
              pxls: pxls.data.buffer
            }, [pxls.data.buffer]); //storage.put(JSON.stringify({x: fixation.getX(), y: fixation.getY(), img: context.canvas.toDataURL('image/webp', 0.5)}));

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvcmVjb3JkL3JlY29yZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvanMvcmVjb3JkL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbInNuYWNrYmFyIiwiTURDU25hY2tiYXIiLCJhdHRhY2hUbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlJlY29yZCIsInNwZWMiLCJzb2NrZXQiLCJ1bmRlZmluZWQiLCJsYXN0Rml4YXRlZEVsIiwiZGF0YVBvaW50cyIsImZpeGF0aW9uQ291bnQiLCJwcmV2Rml4YXRpb24iLCJmaXhhdGlvbldpbmRvdyIsIklOSVRfRklYQVRJT05fV0lORE9XIiwic3RvcmFnZSIsIlN0b3JhZ2UiLCJzdGFydCIsInRvZ2dsZVJlY29yZCIsInJlY29yZGluZyIsIkRhdGVUaW1lIiwibG9jYWwiLCJlbGFwc2VkIiwiZGlmZiIsInRvRm9ybWF0IiwicmVuZGVyIiwiZGF0YSIsInJlbmRlclRtcGwiLCJ0ZW1wbGF0ZSIsImdldEVsZW1lbnRCeUlkIiwiaW5pdCIsImNvbm5lY3RlZCIsImNvbm5lY3QiLCJjb250ZXh0Iiwib2Zmc2NyZWVuQ2FudmFzIiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0Iiwib2Zmc2NyZWVuQ29udGV4dCIsImdldENvbnRleHQiLCJ3b3JrZXIiLCJXb3JrZXIiLCJpbyIsIm9uIiwiY29uc29sZSIsImxvZyIsIlgiLCJERVZJQ0VfV0lEVEgiLCJZIiwiREVWSUNFX0hFSUdIVCIsImdwIiwiR2F6ZVBvaW50IiwieCIsInkiLCJ0IiwiVGltZXN0YW1wIiwicHVzaCIsImxlbmd0aCIsImZpeGF0aW9uIiwiR2F6ZVdpbmRvdyIsInBvaW50cyIsImRldGVjdG9yIiwiZHJhd0ltYWdlIiwiY2FudmFzIiwicHhscyIsImdldEltYWdlRGF0YSIsInBvc3RNZXNzYWdlIiwiZ2V0WCIsImdldFkiLCJ0aW1lc3RhbXAiLCJnZXRUaW1lc3RhbXAiLCJidWZmZXIiLCJlcnIiLCJsYWJlbFRleHQiLCJvcGVuIiwiZGlzY29ubmVjdCIsIk9iamVjdCIsImZyZWV6ZSIsImh0bWwiLCJnZXRSZWNvcmRCdXR0b24iLCJmdWxsc2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNQSxRQUFRLEdBQUdDLDhEQUFXLENBQUNDLFFBQVosQ0FBcUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFyQixDQUFqQjtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRU8sU0FBU0MsTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0I7QUFDM0IsTUFBSUMsTUFBTSxHQUFHQyxTQUFiO0FBRUEsTUFBSUMsYUFBYSxHQUFHRCxTQUFwQjtBQUNBLE1BQUlFLFVBQVUsR0FBRyxFQUFqQjtBQUNBLE1BQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNBLE1BQUlDLFlBQVksR0FBR0osU0FBbkI7QUFDQSxNQUFJSyxjQUFjLEdBQUdDLDREQUFyQjtBQUNBLE1BQUlDLE9BQU8sR0FBR0MsMkRBQU8sQ0FBQyxFQUFELENBQXJCO0FBRUEsTUFBSUMsS0FBSyxHQUFHVCxTQUFaOztBQUVBLE1BQUlVLFlBQVksR0FBRyxZQUFXO0FBQzVCLFFBQUksQ0FBQ1osSUFBSSxDQUFDYSxTQUFWLEVBQXFCO0FBQ25CRixXQUFLLEdBQUdHLDhDQUFRLENBQUNDLEtBQVQsRUFBUjtBQUNELEtBRkQsTUFFTztBQUNMZixVQUFJLENBQUNnQixPQUFMLEdBQWVGLDhDQUFRLENBQUNDLEtBQVQsR0FBaUJFLElBQWpCLENBQXNCTixLQUF0QixFQUE2Qk8sUUFBN0IsQ0FBc0MsVUFBdEMsQ0FBZjtBQUNEOztBQUNEbEIsUUFBSSxDQUFDYSxTQUFMLEdBQWlCLENBQUNiLElBQUksQ0FBQ2EsU0FBdkI7QUFDQU0sVUFBTSxDQUFDbkIsSUFBRCxDQUFOO0FBQ0QsR0FSRDs7QUFVQSxNQUFJbUIsTUFBTSxHQUFHQyxJQUFJLElBQUk7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QUFVOzs7Z0JBRHJFO0FBS0QsR0FORCxNQU1PO0FBQ0wsV0FBTytDLDZDQUFLO3dCQUNRcEQsSUFBSSxDQUFDUixZQUFhOzs7O0tBRHRDO0FBTUQ7QUFDRixDQWhCRDs7QUFrQkEsSUFBSThELFVBQVUsR0FBRyxZQUFXO0FBQzFCLFFBQU0vQyxPQUFPLEdBQUc5QixRQUFRLENBQUMwQixjQUFULENBQXdCLEdBQXhCLEVBQTZCVSxVQUE3QixDQUF3QyxJQUF4QyxDQUFoQjtBQUNBTixTQUFPLENBQUM4QixNQUFSLENBQWVrQix1QkFBZjtBQUNELENBSEQsQyIsImZpbGUiOiIxMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0b3JhZ2V9IGZyb20gJy4uL3N0b3JhZ2UuanMnXHJcbmltcG9ydCB7REVWSUNFX1dJRFRILCBERVZJQ0VfSEVJR0hUfSBmcm9tICcuLi9nZW8uanMnO1xyXG5pbXBvcnQge0lOSVRfRklYQVRJT05fV0lORE9XfSBmcm9tICcuLi9leWUuanMnO1xyXG5pbXBvcnQge0ZpeGF0aW9uLCBHYXplUG9pbnQsIEdhemVXaW5kb3d9IGZyb20gJy4uL2V5ZS5qcydcclxuXHJcbmltcG9ydCB7TURDU25hY2tiYXJ9IGZyb20gJ0BtYXRlcmlhbC9zbmFja2Jhcic7XHJcblxyXG5jb25zdCBzbmFja2JhciA9IE1EQ1NuYWNrYmFyLmF0dGFjaFRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtc25hY2tiYXInKSk7XHJcblxyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcbmltcG9ydCB7cmVuZGVyIGFzIHJlbmRlclRtcGx9IGZyb20gJ2xpdC1odG1sJztcclxuaW1wb3J0IHtEYXRlVGltZSwgRHVyYXRpb259IGZyb20gJ2x1eG9uJztcclxuXHJcbmltcG9ydCB7dGVtcGxhdGV9IGZyb20gJy4vdGVtcGxhdGUuanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVjb3JkKHNwZWMpIHtcclxuICBsZXQgc29ja2V0ID0gdW5kZWZpbmVkO1xyXG5cclxuICBsZXQgbGFzdEZpeGF0ZWRFbCA9IHVuZGVmaW5lZDtcclxuICBsZXQgZGF0YVBvaW50cyA9IFtdO1xyXG4gIGxldCBmaXhhdGlvbkNvdW50ID0gMDtcclxuICBsZXQgcHJldkZpeGF0aW9uID0gdW5kZWZpbmVkO1xyXG4gIGxldCBmaXhhdGlvbldpbmRvdyA9IElOSVRfRklYQVRJT05fV0lORE9XO1xyXG4gIGxldCBzdG9yYWdlID0gU3RvcmFnZSh7fSk7XHJcblxyXG4gIGxldCBzdGFydCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgbGV0IHRvZ2dsZVJlY29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCFzcGVjLnJlY29yZGluZykge1xyXG4gICAgICBzdGFydCA9IERhdGVUaW1lLmxvY2FsKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzcGVjLmVsYXBzZWQgPSBEYXRlVGltZS5sb2NhbCgpLmRpZmYoc3RhcnQpLnRvRm9ybWF0KFwiaGg6bW06c3NcIik7XHJcbiAgICB9XHJcbiAgICBzcGVjLnJlY29yZGluZyA9ICFzcGVjLnJlY29yZGluZztcclxuICAgIHJlbmRlcihzcGVjKTtcclxuICB9XHJcblxyXG4gIGxldCByZW5kZXIgPSBkYXRhID0+IHtcclxuICAgIHJlbmRlclRtcGwodGVtcGxhdGUoZGF0YSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3JykpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBPYmplY3QuYXNzaWduKHNwZWMsIHtcclxuICAgICAgdG9nZ2xlUmVjb3JkLFxyXG4gICAgICByZWNvcmRpbmc6IGZhbHNlLFxyXG4gICAgICBjb25uZWN0ZWQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICByZW5kZXIoc3BlYyk7XHJcbiAgfVxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gIGxldCBjb25uZWN0ID0gZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgbGV0IG9mZnNjcmVlbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgb2Zmc2NyZWVuQ2FudmFzLndpZHRoID0gMTI4MDtcclxuICAgIG9mZnNjcmVlbkNhbnZhcy5oZWlnaHQgPSA3MjA7XHJcbiAgICBsZXQgb2Zmc2NyZWVuQ29udGV4dCA9IG9mZnNjcmVlbkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGxldCB3b3JrZXIgPSBuZXcgV29ya2VyKFwiL3N0b3JhZ2UuanNcIik7XHJcblxyXG4gICAgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cDovL2xvY2FsaG9zdCcpO1xyXG5cclxuICAgIHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZW5kZXIoc3BlYyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdleWUgY29ubmVjdCcpXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbignbmV3cycsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIGRhdGEuWCA9IGRhdGEuWCAvIERFVklDRV9XSURUSDtcclxuICAgICAgZGF0YS5ZID0gZGF0YS5ZIC8gREVWSUNFX0hFSUdIVDtcclxuICAgICAgaWYgKHNwZWMucmVjb3JkaW5nKSB7XHJcbiAgICAgICAgbGV0IGdwID0gR2F6ZVBvaW50KHt4OiBkYXRhLlgsIHk6IGRhdGEuWSwgdDogZGF0YS5UaW1lc3RhbXB9KTtcclxuICAgICAgICBkYXRhUG9pbnRzLnB1c2goZ3ApO1xyXG4gICAgICAgIGlmIChkYXRhUG9pbnRzLmxlbmd0aCA9PT0gZml4YXRpb25XaW5kb3cpIHtcclxuICAgICAgICAgIGxldCBmaXhhdGlvbiA9IEdhemVXaW5kb3coe3BvaW50czogZGF0YVBvaW50c30pLmRldGVjdG9yKCk7XHJcbiAgICAgICAgICBpZiAoZml4YXRpb24pIHtcclxuICAgICAgICAgICAgZml4YXRpb25Db3VudCArPSAxO1xyXG5cclxuICAgICAgICAgICAgb2Zmc2NyZWVuQ29udGV4dC5kcmF3SW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpLDAsMCxvZmZzY3JlZW5Db250ZXh0LmNhbnZhcy53aWR0aCxvZmZzY3JlZW5Db250ZXh0LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICBsZXQgcHhscyA9IG9mZnNjcmVlbkNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsMCxvZmZzY3JlZW5Db250ZXh0LmNhbnZhcy53aWR0aCxvZmZzY3JlZW5Db250ZXh0LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHB4bHMpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHt4OiBmaXhhdGlvbi5nZXRYKCksIHk6IGZpeGF0aW9uLmdldFkoKSwgaW1nOiBvZmZzY3JlZW5Db250ZXh0LmNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3dlYnAnLCAwLjUpLmxlbmd0aCAgfSkpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidGltZXN0YW1wXCIsIGZpeGF0aW9uLmdldFRpbWVzdGFtcCgpKTtcclxuICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHt4OiBmaXhhdGlvbi5nZXRYKCksIHk6IGZpeGF0aW9uLmdldFkoKSwgdGltZXN0YW1wOiBmaXhhdGlvbi5nZXRUaW1lc3RhbXAoKSwgcHhsczogcHhscy5kYXRhLmJ1ZmZlcn0sIFtweGxzLmRhdGEuYnVmZmVyXSk7XHJcbiAgICAgICAgICAgIC8vc3RvcmFnZS5wdXQoSlNPTi5zdHJpbmdpZnkoe3g6IGZpeGF0aW9uLmdldFgoKSwgeTogZml4YXRpb24uZ2V0WSgpLCBpbWc6IGNvbnRleHQuY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2Uvd2VicCcsIDAuNSl9KSk7XHJcbiAgICAgICAgICAgIGlmIChmaXhhdGlvbkNvdW50ID09PSAyMCkge1xyXG4gICAgICAgICAgICAgIGZpeGF0aW9uQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKmxldCBlbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChmaXhhdGlvbi5nZXRYKCksIGZpeGF0aW9uLmdldFkoKSk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgaWYgKGxhc3RGaXhhdGVkRWwpIHtcclxuICAgICAgICAgICAgICAgIGxhc3RGaXhhdGVkRWwuY2xhc3NMaXN0LnJlbW92ZShcImZpeGF0ZWRcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxhc3RGaXhhdGVkRWwgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgIGxhc3RGaXhhdGVkRWwuY2xhc3NMaXN0LmFkZChcImZpeGF0ZWRcIik7XHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICBkYXRhUG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIGZpeGF0aW9uV2luZG93ID0gSU5JVF9GSVhBVElPTl9XSU5ET1c7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaXhhdGlvbldpbmRvdysrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0X2Vycm9yJywgZXJyID0+IHtcclxuICAgICAgc25hY2tiYXIubGFiZWxUZXh0ID0gJ0NhblxcJ3QgY29ubmVjdCB0byBleWUgdHJhY2tlci4nO1xyXG4gICAgICBzbmFja2Jhci5vcGVuKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxldCBkaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJkaXNjb25uZWN0IGZyb20gcmVjb3JkXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xyXG4gICAgY29ubmVjdCxcclxuICAgIGRpc2Nvbm5lY3RcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQge2h0bWx9IGZyb20gJ2xpdC1odG1sJztcclxuXHJcbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IChkYXRhKSA9PiBodG1sYFxyXG4gIDxkaXYgY2xhc3M9XCJtZGMtbGF5b3V0LWdyaWRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZGMtbGF5b3V0LWdyaWRfX2lubmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtbGF5b3V0LWdyaWRfX2NlbGwtLXNwYW4tNFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkX19jZWxsLS1zcGFuLTRcIj5cclxuICAgICAgICA8dmlkZW8gaWQ9XCJwbGF5ZXJcIiBwbGF5c2lubGluZSBhdXRvcGxheSBsb29wIG11dGVkPjwvdmlkZW8+XHJcbiAgICAgICAgJHtnZXRSZWNvcmRCdXR0b24oZGF0YSl9XHJcbiAgICAgICAgJHtkYXRhLmVsYXBzZWR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkX19jZWxsLS1zcGFuLTRcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxubGV0IGdldFJlY29yZEJ1dHRvbiA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAvL2NvbnNvbGUubG9nKFwiaW5zcGVjdFwiLCBkYXRhLnJlY29yZGluZylcclxuICBpZiAoIWRhdGEucmVjb3JkaW5nKSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIke2RhdGEudG9nZ2xlUmVjb3JkfVwiID9kaXNhYmxlZD1cIiR7IWRhdGEuY29ubmVjdGVkfVwiIGNsYXNzPVwibWRjLWJ1dHRvbiBtZGMtYnV0dG9uLS11bmVsZXZhdGVkIHJlY29yZC1idXR0b25cIj5cclxuICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kYy1idXR0b25fX2ljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5maWJlcl9tYW51YWxfcmVjb3JkPC9pPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLWJ1dHRvbl9fbGFiZWxcIj5SZWNvcmQ8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPmBcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgIDxidXR0b24gQGNsaWNrPVwiJHtkYXRhLnRvZ2dsZVJlY29yZH1cIiBjbGFzcz1cIm1kYy1idXR0b24gbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZFwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbWRjLWJ1dHRvbl9faWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnN0b3A8L2k+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtYnV0dG9uX19sYWJlbFwiPlN0b3A8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgYFxyXG4gIH1cclxufVxyXG5cclxubGV0IGZ1bGxzY3JlZW4gPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBjb250ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2EnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIGNvbnRleHQuY2FudmFzLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9