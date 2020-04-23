(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./app/js/data/data.js":
/*!*****************************!*\
  !*** ./app/js/data/data.js ***!
  \*****************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.js */ "./app/js/storage.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.js */ "./app/js/data/template.js");
/* harmony import */ var _material_linear_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/linear-progress */ "./node_modules/@material/linear-progress/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






let linearProgress;
function Data(spec) {
  let storage = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["Storage"])({});
  let frames = [];

  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {
      type: contentType
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  let exportData = function () {
    download(JSON.stringify(frames), 'experiment' + luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().toMillis() + '.json', 'text/json');
    console.log(frames);
  };

  let deleteData = function () {
    storage.clear("gaze", deleted => {
      console.log("cache deleted", deleted);
      render(spec);
    });
  };

  let load = function (start) {
    for (let frame = start; frame <= spec.max; frame++) {
      storage.get(frame, v => {
        if (v) {
          frames.push(v); //console.log(frames.length);

          if (frames.length === spec.max) {
            spec.totalTime = luxon__WEBPACK_IMPORTED_MODULE_2__["Duration"].fromMillis(frames[spec.max - 1].timestamp - frames[0].timestamp).toFormat("hh:mm:ss");
            render(spec);
            console.log("max reached");
          }
        }
      });
    }
  };

  let handleFileSelect = function (evt) {
    document.getElementById('drop').classList.remove('dragover');
    console.log("file dropped", evt);
    evt.stopPropagation();
    evt.preventDefault();
    let files = evt.dataTransfer.files; // FileList object.

    let file = files[0];
    spec.f = file;
    let reader = new FileReader();

    reader.onload = function (e) {
      console.log("file loaded", e);
      const data = JSON.parse(e.target.result);
      deleteData();
      data.forEach((document, id) => {
        caches.open('gaze').then(cache => {
          /*const options = {
            headers: {
              'Content-Type': 'application/json'
            }
          }*/
          cache.put('/gaze/' + id, new Response(JSON.stringify(document)));
        });
      });
    };

    reader.onprogress = function (e) {
      if (e.lengthComputable) {
        const percentLoaded = Math.round(e.loaded / e.total * 100);
        console.log(percentLoaded);
        spec.progress = percentLoaded;
        render(spec);
      }
    };

    reader.readAsText(file);
    render(spec);
  };

  let handleDragOver = function (evt) {
    document.getElementById('drop').classList.add('dragover');
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  };

  let handleDragLeave = function (evt) {
    document.getElementById('drop').classList.remove('dragover');
    evt.stopPropagation();
    evt.preventDefault();
  };

  let render = data => {
    Object(lit_html__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(_template_js__WEBPACK_IMPORTED_MODULE_3__["template"])(data), document.getElementById('view'));
  };

  let init = () => {
    _extends(spec, {
      max: 1000,
      totalTime: '--:--:--',
      exportData,
      deleteData
    });

    render(spec);
  };

  init();

  let connect = async function (context) {
    const usage = await storage.usage();
    console.log("usage", usage);
    spec.usage = usage;
    render(spec);
    linearProgress = _material_linear_progress__WEBPACK_IMPORTED_MODULE_4__["MDCLinearProgress"].attachTo(document.querySelector('.mdc-linear-progress'));
    linearProgress.progress = usage.usage / usage.quota;
    console.log(usage.usage / usage.quota);
    storage.getKeys("gaze", keys => {
      spec.max = keys.length;
      render(spec);
      console.log("max", spec.max);
      load(0);
    }); // Setup the dnd listeners.

    let dropZone = document.getElementById('drop');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('dragleave', handleDragLeave, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
  };

  let disconnect = function () {
    console.log("disconnect from data");
  };

  return Object.freeze({
    connect,
    disconnect
  });
}

/***/ }),

/***/ "./app/js/data/template.js":
/*!*********************************!*\
  !*** ./app/js/data/template.js ***!
  \*********************************/
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
        <div id="drop">Import data</div>
        <progress value="${data.progress}" max="100"></progress>
        ${getFileInfo(data)}
        <h2>Cache Content</h2>
        <div>Frames: ${data.max}</div>
        <div>Duration: ${data.totalTime}</div>
        <h2>Storage usage</h2>
        ${getUsage(data)}
      </div>
      <div class="mdc-layout-grid__cell--span-4">
        <button @click="${data.exportData}" class="mdc-button mdc-button--unelevated">
          <span class="mdc-button__label">Export JSON</span>
        </button>
        <button @click="${data.deleteData}" class="mdc-button mdc-button--unelevated">
          <i class="material-icons mdc-button__icon" aria-hidden="true">delete</i>
          <span class="mdc-button__label">Clear Cache</span>
        </button>
      </div>
    </div>
  </div>
`;

let getFileInfo = function (data) {
  if (!data.f) {
    return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]``;
  } else {
    return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div>Name: ${data.f.name}</div>
      <div>Type: ${data.f.type}</div>
    `;
  }
};

let getUsage = function (data) {
  console.log("getUsage", data);

  if (!data.usage) {
    return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]``;
  } else {
    const {
      quota,
      usage,
      usageDetails
    } = data.usage;
    const quotaInMib = Math.round(quota / (1024 * 1024));
    const usageInMib = Math.round(usage / (1024 * 1024));
    const percentUsed = Math.round(usage / quota * 100);
    return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div>Usage: ${usageInMib} Mib (${percentUsed}%)</div>
      <div role="progressbar" class="mdc-linear-progress" aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0">
        <div class="mdc-linear-progress__buffer"></div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>
      <div>Quota: ${quotaInMib} Mib</div>
    `;
  }
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvZGF0YS9kYXRhLmpzIiwid2VicGFjazovLy8uL2FwcC9qcy9kYXRhL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9qcy9zdG9yYWdlLmpzIl0sIm5hbWVzIjpbImxpbmVhclByb2dyZXNzIiwiRGF0YSIsInNwZWMiLCJzdG9yYWdlIiwiU3RvcmFnZSIsImZyYW1lcyIsImRvd25sb2FkIiwiY29udGVudCIsImZpbGVOYW1lIiwiY29udGVudFR5cGUiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZmlsZSIsIkJsb2IiLCJ0eXBlIiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNsaWNrIiwiZXhwb3J0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJEYXRlVGltZSIsImxvY2FsIiwidG9NaWxsaXMiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlRGF0YSIsImNsZWFyIiwiZGVsZXRlZCIsInJlbmRlciIsImxvYWQiLCJzdGFydCIsImZyYW1lIiwibWF4IiwiZ2V0IiwidiIsInB1c2giLCJsZW5ndGgiLCJ0b3RhbFRpbWUiLCJEdXJhdGlvbiIsImZyb21NaWxsaXMiLCJ0aW1lc3RhbXAiLCJ0b0Zvcm1hdCIsImhhbmRsZUZpbGVTZWxlY3QiLCJldnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiZmlsZXMiLCJkYXRhVHJhbnNmZXIiLCJmIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJkYXRhIiwicGFyc2UiLCJ0YXJnZXQiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaWQiLCJjYWNoZXMiLCJvcGVuIiwidGhlbiIsImNhY2hlIiwicHV0IiwiUmVzcG9uc2UiLCJvbnByb2dyZXNzIiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRMb2FkZWQiLCJNYXRoIiwicm91bmQiLCJsb2FkZWQiLCJ0b3RhbCIsInByb2dyZXNzIiwicmVhZEFzVGV4dCIsImhhbmRsZURyYWdPdmVyIiwiYWRkIiwiZHJvcEVmZmVjdCIsImhhbmRsZURyYWdMZWF2ZSIsInJlbmRlclRtcGwiLCJ0ZW1wbGF0ZSIsImluaXQiLCJjb25uZWN0IiwiY29udGV4dCIsInVzYWdlIiwiTURDTGluZWFyUHJvZ3Jlc3MiLCJhdHRhY2hUbyIsInF1ZXJ5U2VsZWN0b3IiLCJxdW90YSIsImdldEtleXMiLCJrZXlzIiwiZHJvcFpvbmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzY29ubmVjdCIsIk9iamVjdCIsImZyZWV6ZSIsImh0bWwiLCJnZXRGaWxlSW5mbyIsImdldFVzYWdlIiwibmFtZSIsInVzYWdlRGV0YWlscyIsInF1b3RhSW5NaWIiLCJ1c2FnZUluTWliIiwicGVyY2VudFVzZWQiLCJvcHRpb25zIiwiaGVhZGVycyIsImNhbGxiYWNrIiwicmVzcG9uc2UiLCJtYXRjaCIsIlJlcXVlc3QiLCJqc29uIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjYWNoZU5hbWUiLCJkZWxldGUiLCJuYXZpZ2F0b3IiLCJlc3RpbWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBSUEsY0FBSjtBQUVPLFNBQVNDLElBQVQsQ0FBY0MsSUFBZCxFQUFvQjtBQUN6QixNQUFJQyxPQUFPLEdBQUdDLDJEQUFPLENBQUMsRUFBRCxDQUFyQjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxFQUFiOztBQUVBLFdBQVNDLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTJCQyxRQUEzQixFQUFxQ0MsV0FBckMsRUFBa0Q7QUFDaEQsUUFBSUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVMsQ0FBQ1AsT0FBRCxDQUFULEVBQW9CO0FBQUNRLFVBQUksRUFBRU47QUFBUCxLQUFwQixDQUFYO0FBQ0FDLEtBQUMs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TixLQUFLLEdBQUcsVUFBU3NCLFFBQVQsRUFBbUI7QUFDN0IsV0FBT1MsU0FBUyxDQUFDckgsT0FBVixDQUFrQnNILFFBQWxCLEVBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU90QixNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNuQi9CLE9BRG1CO0FBRW5CakMsT0FGbUI7QUFHbkJQLFNBSG1CO0FBSW5CaUUsV0FKbUI7QUFLbkJMO0FBTG1CLEdBQWQsQ0FBUDtBQU9ELEMiLCJmaWxlIjoiNi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0b3JhZ2V9IGZyb20gJy4uL3N0b3JhZ2UuanMnO1xyXG5cclxuaW1wb3J0IHtyZW5kZXIgYXMgcmVuZGVyVG1wbH0gZnJvbSAnbGl0LWh0bWwnO1xyXG5pbXBvcnQge0RhdGVUaW1lLCBEdXJhdGlvbn0gZnJvbSAnbHV4b24nO1xyXG5cclxuaW1wb3J0IHt0ZW1wbGF0ZX0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XHJcblxyXG5pbXBvcnQgeyBNRENMaW5lYXJQcm9ncmVzcyB9IGZyb20gJ0BtYXRlcmlhbC9saW5lYXItcHJvZ3Jlc3MnO1xyXG5cclxubGV0IGxpbmVhclByb2dyZXNzO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERhdGEoc3BlYykge1xyXG4gIGxldCBzdG9yYWdlID0gU3RvcmFnZSh7fSk7XHJcbiAgbGV0IGZyYW1lcyA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiBkb3dubG9hZChjb250ZW50LCBmaWxlTmFtZSwgY29udGVudFR5cGUpIHtcclxuICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICB2YXIgZmlsZSA9IG5ldyBCbG9iKFtjb250ZW50XSwge3R5cGU6IGNvbnRlbnRUeXBlfSk7XHJcbiAgICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgYS5kb3dubG9hZCA9IGZpbGVOYW1lO1xyXG4gICAgYS5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGV4cG9ydERhdGEgPSBmdW5jdGlvbigpIHtcclxuICAgIGRvd25sb2FkKEpTT04uc3RyaW5naWZ5KGZyYW1lcyksICdleHBlcmltZW50JyArIERhdGVUaW1lLmxvY2FsKCkudG9NaWxsaXMoKSArICcuanNvbicsICd0ZXh0L2pzb24nKTtcclxuICAgIGNvbnNvbGUubG9nKGZyYW1lcyk7XHJcbiAgfVxyXG5cclxuICBsZXQgZGVsZXRlRGF0YSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgc3RvcmFnZS5jbGVhcihcImdhemVcIiwgKGRlbGV0ZWQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjYWNoZSBkZWxldGVkXCIsIGRlbGV0ZWQpO1xyXG4gICAgICByZW5kZXIoc3BlYyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxldCBsb2FkID0gZnVuY3Rpb24oc3RhcnQpIHtcclxuICAgIGZvciAobGV0IGZyYW1lPXN0YXJ0OyBmcmFtZSA8PSBzcGVjLm1heDsgZnJhbWUrKykge1xyXG4gICAgICBzdG9yYWdlLmdldChmcmFtZSwgKHYpID0+IHtcclxuICAgICAgICBpZiAodikge1xyXG4gICAgICAgICAgZnJhbWVzLnB1c2godik7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGZyYW1lcy5sZW5ndGgpO1xyXG4gICAgICAgICAgaWYgKGZyYW1lcy5sZW5ndGggPT09IHNwZWMubWF4KSB7XHJcbiAgICAgICAgICAgIHNwZWMudG90YWxUaW1lID0gRHVyYXRpb24uZnJvbU1pbGxpcygoZnJhbWVzW3NwZWMubWF4LTFdLnRpbWVzdGFtcCAtIGZyYW1lc1swXS50aW1lc3RhbXApKS50b0Zvcm1hdChcImhoOm1tOnNzXCIpO1xyXG4gICAgICAgICAgICByZW5kZXIoc3BlYyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWF4IHJlYWNoZWRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVGaWxlU2VsZWN0ID0gZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdvdmVyJyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpbGUgZHJvcHBlZFwiLCBldnQpO1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IGZpbGVzID0gZXZ0LmRhdGFUcmFuc2Zlci5maWxlczsgLy8gRmlsZUxpc3Qgb2JqZWN0LlxyXG4gICAgbGV0IGZpbGUgPSBmaWxlc1swXTtcclxuICAgIHNwZWMuZiA9IGZpbGU7XHJcblxyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJmaWxlIGxvYWRlZFwiLCBlKTtcclxuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgZGVsZXRlRGF0YSgpO1xyXG4gICAgICBkYXRhLmZvckVhY2goKGRvY3VtZW50LCBpZCkgPT4ge1xyXG4gICAgICAgIGNhY2hlcy5vcGVuKCdnYXplJykudGhlbigoY2FjaGUpID0+IHtcclxuICAgICAgICAgIC8qY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSovXHJcbiAgICAgICAgICBjYWNoZS5wdXQoJy9nYXplLycgKyBpZCwgbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGRvY3VtZW50KSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZWFkZXIub25wcm9ncmVzcyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgIGNvbnN0IHBlcmNlbnRMb2FkZWQgPSBNYXRoLnJvdW5kKChlLmxvYWRlZCAvIGUudG90YWwpICogMTAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwZXJjZW50TG9hZGVkKTtcclxuICAgICAgICBzcGVjLnByb2dyZXNzID0gcGVyY2VudExvYWRlZDtcclxuICAgICAgICByZW5kZXIoc3BlYyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgIHJlbmRlcihzcGVjKTtcclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVEcmFnT3ZlciA9IGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3AnKS5jbGFzc0xpc3QuYWRkKCdkcmFnb3ZlcicpO1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7IC8vIEV4cGxpY2l0bHkgc2hvdyB0aGlzIGlzIGEgY29weS5cclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVEcmFnTGVhdmUgPSBmdW5jdGlvbihldnQpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wJykuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ292ZXInKTtcclxuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHJlbmRlciA9IGRhdGEgPT4ge1xyXG4gICAgcmVuZGVyVG1wbCh0ZW1wbGF0ZShkYXRhKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXcnKSk7XHJcbiAgfVxyXG5cclxuICBsZXQgaW5pdCA9ICgpID0+IHtcclxuICAgIE9iamVjdC5hc3NpZ24oc3BlYywge1xyXG4gICAgICBtYXg6IDEwMDAsXHJcbiAgICAgIHRvdGFsVGltZTogJy0tOi0tOi0tJyxcclxuICAgICAgZXhwb3J0RGF0YSxcclxuICAgICAgZGVsZXRlRGF0YVxyXG4gICAgfSk7XHJcbiAgICByZW5kZXIoc3BlYyk7XHJcbiAgfVxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gIGxldCBjb25uZWN0ID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgY29uc3QgdXNhZ2UgPSBhd2FpdCBzdG9yYWdlLnVzYWdlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzYWdlXCIsIHVzYWdlKTtcclxuICAgIHNwZWMudXNhZ2UgPSB1c2FnZTtcclxuXHJcbiAgICByZW5kZXIoc3BlYyk7XHJcblxyXG4gICAgbGluZWFyUHJvZ3Jlc3MgPSBNRENMaW5lYXJQcm9ncmVzcy5hdHRhY2hUbyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLWxpbmVhci1wcm9ncmVzcycpKTtcclxuICAgIGxpbmVhclByb2dyZXNzLnByb2dyZXNzID0gdXNhZ2UudXNhZ2UgLyB1c2FnZS5xdW90YTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh1c2FnZS51c2FnZSAvIHVzYWdlLnF1b3RhKTtcclxuXHJcbiAgICBzdG9yYWdlLmdldEtleXMoXCJnYXplXCIsIChrZXlzKSA9PiB7XHJcbiAgICAgIHNwZWMubWF4ID0ga2V5cy5sZW5ndGg7XHJcbiAgICAgIHJlbmRlcihzcGVjKTtcclxuICAgICAgY29uc29sZS5sb2coXCJtYXhcIiwgc3BlYy5tYXgpO1xyXG4gICAgICBsb2FkKDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2V0dXAgdGhlIGRuZCBsaXN0ZW5lcnMuXHJcbiAgICBsZXQgZHJvcFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcCcpO1xyXG4gICAgZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBoYW5kbGVEcmFnT3ZlciwgZmFsc2UpO1xyXG4gICAgZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgaGFuZGxlRHJhZ0xlYXZlLCBmYWxzZSk7XHJcbiAgICBkcm9wWm9uZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlRmlsZVNlbGVjdCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGlzY29ubmVjdCBmcm9tIGRhdGFcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBjb25uZWN0LFxyXG4gICAgZGlzY29ubmVjdFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7aHRtbH0gZnJvbSAnbGl0LWh0bWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gKGRhdGEpID0+IGh0bWxgXHJcbiAgPGRpdiBjbGFzcz1cIm1kYy1sYXlvdXQtZ3JpZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1kYy1sYXlvdXQtZ3JpZF9faW5uZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1sYXlvdXQtZ3JpZF9fY2VsbC0tc3Bhbi04XCI+XHJcbiAgICAgICAgPGRpdiBpZD1cImRyb3BcIj5JbXBvcnQgZGF0YTwvZGl2PlxyXG4gICAgICAgIDxwcm9ncmVzcyB2YWx1ZT1cIiR7ZGF0YS5wcm9ncmVzc31cIiBtYXg9XCIxMDBcIj48L3Byb2dyZXNzPlxyXG4gICAgICAgICR7Z2V0RmlsZUluZm8oZGF0YSl9XHJcbiAgICAgICAgPGgyPkNhY2hlIENvbnRlbnQ8L2gyPlxyXG4gICAgICAgIDxkaXY+RnJhbWVzOiAke2RhdGEubWF4fTwvZGl2PlxyXG4gICAgICAgIDxkaXY+RHVyYXRpb246ICR7ZGF0YS50b3RhbFRpbWV9PC9kaXY+XHJcbiAgICAgICAgPGgyPlN0b3JhZ2UgdXNhZ2U8L2gyPlxyXG4gICAgICAgICR7Z2V0VXNhZ2UoZGF0YSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkX19jZWxsLS1zcGFuLTRcIj5cclxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cIiR7ZGF0YS5leHBvcnREYXRhfVwiIGNsYXNzPVwibWRjLWJ1dHRvbiBtZGMtYnV0dG9uLS11bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kYy1idXR0b25fX2xhYmVsXCI+RXhwb3J0IEpTT048L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIke2RhdGEuZGVsZXRlRGF0YX1cIiBjbGFzcz1cIm1kYy1idXR0b24gbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZFwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZGMtYnV0dG9uX19pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+ZGVsZXRlPC9pPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtYnV0dG9uX19sYWJlbFwiPkNsZWFyIENhY2hlPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxubGV0IGdldEZpbGVJbmZvID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gIGlmICghZGF0YS5mKSB7XHJcbiAgICByZXR1cm4gaHRtbGBgXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8ZGl2Pk5hbWU6ICR7ZGF0YS5mLm5hbWV9PC9kaXY+XHJcbiAgICAgIDxkaXY+VHlwZTogJHtkYXRhLmYudHlwZX08L2Rpdj5cclxuICAgIGBcclxuICB9XHJcbn1cclxuXHJcbmxldCBnZXRVc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICBjb25zb2xlLmxvZyhcImdldFVzYWdlXCIsIGRhdGEpO1xyXG5cclxuICBpZiAoIWRhdGEudXNhZ2UpIHtcclxuICAgIHJldHVybiBodG1sYGBcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBxdW90YSwgdXNhZ2UsIHVzYWdlRGV0YWlscyB9ID0gZGF0YS51c2FnZTtcclxuXHJcbiAgICBjb25zdCBxdW90YUluTWliID0gTWF0aC5yb3VuZChxdW90YSAvICgxMDI0ICogMTAyNCkpO1xyXG4gICAgY29uc3QgdXNhZ2VJbk1pYiA9IE1hdGgucm91bmQodXNhZ2UgLyAoMTAyNCAqIDEwMjQpKTtcclxuICAgIGNvbnN0IHBlcmNlbnRVc2VkID0gTWF0aC5yb3VuZCh1c2FnZSAvIHF1b3RhICogMTAwKTtcclxuXHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPGRpdj5Vc2FnZTogJHt1c2FnZUluTWlifSBNaWIgKCR7cGVyY2VudFVzZWR9JSk8L2Rpdj5cclxuICAgICAgPGRpdiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBQcm9ncmVzcyBCYXJcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxXCIgYXJpYS12YWx1ZW5vdz1cIjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWxpbmVhci1wcm9ncmVzc19fYnVmZmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NfX2JhciBtZGMtbGluZWFyLXByb2dyZXNzX19wcmltYXJ5LWJhclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtbGluZWFyLXByb2dyZXNzX19iYXItaW5uZXJcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NfX2JhciBtZGMtbGluZWFyLXByb2dyZXNzX19zZWNvbmRhcnktYmFyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NfX2Jhci1pbm5lclwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+UXVvdGE6ICR7cXVvdGFJbk1pYn0gTWliPC9kaXY+XHJcbiAgICBgXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBTdG9yYWdlKHNwZWMgPSB7fSkge1xyXG4gIGxldCBpZCA9IDA7XHJcblxyXG4gIGxldCBwdXQgPSBmdW5jdGlvbihkb2N1bWVudCkge1xyXG4gICAgY2FjaGVzLm9wZW4oJ2dhemUnKS50aGVuKChjYWNoZSkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2FjaGUucHV0KCcvZ2F6ZS8nICsgaWQsIG5ldyBSZXNwb25zZShkb2N1bWVudCkpO1xyXG4gICAgICBpZCA9IGlkICsgMTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgZ2V0ID0gYXN5bmMgZnVuY3Rpb24oaWQsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKCdnYXplJyk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhY2hlLm1hdGNoKG5ldyBSZXF1ZXN0KCcvZ2F6ZS8nICsgaWQpKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKHZhbHVlKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBjbGVhciA9IGFzeW5jIGZ1bmN0aW9uKGNhY2hlTmFtZSwgY2FsbGJhY2spIHtcclxuICAgIGNhY2hlcy5kZWxldGUoY2FjaGVOYW1lKS50aGVuKChkZWxldGVkKSA9PiBjYWxsYmFjayhkZWxldGVkKSk7XHJcbiAgfVxyXG5cclxuICBsZXQgZ2V0S2V5cyA9IGFzeW5jIGZ1bmN0aW9uKGNhY2hlTmFtZSwgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4oY2FjaGVOYW1lKTtcclxuICAgIGNhY2hlLmtleXMoKS50aGVuKChrZXlzKSA9PiBjYWxsYmFjayhrZXlzKSk7XHJcbiAgfVxyXG5cclxuICBsZXQgdXNhZ2UgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci5zdG9yYWdlLmVzdGltYXRlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBwdXQsXHJcbiAgICBnZXQsXHJcbiAgICBjbGVhcixcclxuICAgIGdldEtleXMsXHJcbiAgICB1c2FnZVxyXG4gIH0pXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==