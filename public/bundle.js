/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/css/app.scss":
/*!**************************!*\
  !*** ./app/css/app.scss ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bundle.css");

/***/ }),

/***/ "./app/js/app.js":
/*!***********************!*\
  !*** ./app/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var pwa_helpers_router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pwa-helpers/router.js */ "./node_modules/pwa-helpers/router.js");
/* harmony import */ var _material_ripple_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple/index */ "./node_modules/@material/ripple/index.js");
/* harmony import */ var _material_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/drawer */ "./node_modules/@material/drawer/index.js");
/* harmony import */ var _material_top_app_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/top-app-bar */ "./node_modules/@material/top-app-bar/index.js");
/* harmony import */ var _material_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/switch */ "./node_modules/@material/switch/index.js");






const drawer = _material_drawer__WEBPACK_IMPORTED_MODULE_3__["MDCDrawer"].attachTo(document.querySelector('.mdc-drawer'));
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new _material_top_app_bar__WEBPACK_IMPORTED_MODULE_4__["MDCTopAppBar"](topAppBarElement);
topAppBar.setScrollTarget(document.getElementById('view'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});
const listEl = document.querySelector('.mdc-drawer .mdc-list');
listEl.addEventListener('click', event => {
  drawer.open = false;
});

const template = data => lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
  ${data.title}
`;

let toTitleCase = function (s) {
  return s[0].toUpperCase() + s.substr(1).toLowerCase();
};

let active = undefined;

let handleNavigation = function (location) {
  console.log("handle", location);

  if (active) {
    active.disconnect();
  }

  ;
  navigate(decodeURIComponent(location.pathname));
};

let navigate = function (path) {
  const page = path === '/' ? 'diagnosis' : path.slice(1);
  console.log("page", page);
  loadPage(page);
  Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["render"])(template({
    title: "Fixation - " + toTitleCase(page)
  }), document.getElementsByTagName("title")[0]);
  Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["render"])(template({
    title: toTitleCase(page)
  }), document.getElementsByClassName("mdc-top-app-bar__title")[0]);
};

const loadPage = async function (page) {
  switch (page) {
    case 'diagnosis':
      const {
        Diagnosis
      } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./diagnosis/diagnosis.js */ "./app/js/diagnosis/diagnosis.js"));
      let diagnosis = Diagnosis({});
      active = diagnosis;
      let modeControl = new _material_switch__WEBPACK_IMPORTED_MODULE_5__["MDCSwitch"](document.querySelector('.mdc-switch'));
      diagnosis.connect(document.getElementById('a').getContext('2d'));
      break;

    case 'record':
      const {
        Record
      } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./record/record.js */ "./app/js/record/record.js"));
      let record = Record({});
      active = record;
      record.connect();
      const player = document.getElementById('player');
      navigator.mediaDevices.getDisplayMedia({
        video: true
      }).then(stream => {
        player.srcObject = stream;
      }).catch(err => {
        console.log("Screen media:", err);
      });
      break;

    case 'replay':
      const {
        Replay
      } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./replay/replay.js */ "./app/js/replay/replay.js"));
      let replay = Replay({});
      active = replay;
      let heatmapControl = new _material_switch__WEBPACK_IMPORTED_MODULE_5__["MDCSwitch"](document.querySelector('.mdc-switch'));
      replay.connect(document.getElementById('a').getContext('2d'));
      break;

    case 'data':
      const {
        Data
      } = await Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./data/data.js */ "./app/js/data/data.js"));
      let data = Data({});
      active = data;
      data.connect();
      break;

    default:
      const {
        Lost
      } = await __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./lost/lost.js */ "./app/js/lost/lost.js"));
      page = 'view404';
      let lost = Lost({});
  }
};

Object(pwa_helpers_router_js__WEBPACK_IMPORTED_MODULE_1__["installRouter"])(location => handleNavigation(location));

/***/ }),

/***/ "./node_modules/@material/base/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/*! exports provided: MDCComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return MDCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root_.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root_.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCComponent);

/***/ }),

/***/ "./node_modules/@material/base/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/base/foundation.js ***!
  \***************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation =
/** @class */
function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }

    this.adapter_ = adapter;
  }

  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function () {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: true,
    configurable: true
  });

  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);

/***/ }),

/***/ "./node_modules/@material/dom/events.js":
/*!**********************************************!*\
  !*** ./node_modules/@material/dom/events.js ***!
  \**********************************************/
/*! exports provided: applyPassive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  return supportsPassiveOption(globalObj) ? {
    passive: true
  } : false;
}

function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  } // See
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


  var passiveSupported = false;

  try {
    var options = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        passiveSupported = true;
        return false;
      }

    };

    var handler = function () {};

    globalObj.document.addEventListener('test', handler, options);
    globalObj.document.removeEventListener('test', handler, options);
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
}

/***/ }),

/***/ "./node_modules/@material/dom/focus-trap.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/dom/focus-trap.js ***!
  \**************************************************/
/*! exports provided: FocusTrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';
/**
 * Utility to trap focus in a given root element, e.g. for modal components such
 * as dialogs. The root should have at least one focusable child element,
 * for setting initial focus when trapping focus.
 * Also tracks the previously focused element, and restores focus to that
 * element when releasing focus.
 */

var FocusTrap =
/** @class */
function () {
  function FocusTrap(root, options) {
    if (options === void 0) {
      options = {};
    }

    this.root = root;
    this.options = options; // Previously focused element before trapping focus.

    this.elFocusedBeforeTrapFocus = null;
  }
  /**
   * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
   * otherwises sets initial focus to the first focusable child element.
   */


  FocusTrap.prototype.trapFocus = function () {
    var focusableEls = this.getFocusableElements(this.root);

    if (focusableEls.length === 0) {
      throw new Error('FocusTrap: Element must have at least one focusable child.');
    }

    this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.wrapTabFocus(this.root, focusableEls);

    if (!this.options.skipInitialFocus) {
      this.focusInitialElement(focusableEls, this.options.initialFocusEl);
    }
  };
  /**
   * Releases focus from `root`. Also restores focus to the previously focused
   * element.
   */


  FocusTrap.prototype.releaseFocus = function () {
    [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS)).forEach(function (sentinelEl) {
      sentinelEl.parentElement.removeChild(sentinelEl);
    });

    if (this.elFocusedBeforeTrapFocus) {
      this.elFocusedBeforeTrapFocus.focus();
    }
  };
  /**
   * Wraps tab focus within `el` by adding two hidden sentinel divs which are
   * used to mark the beginning and the end of the tabbable region. When
   * focused, these sentinel elements redirect focus to the first/last
   * children elements of the tabbable region, ensuring that focus is trapped
   * within that region.
   */


  FocusTrap.prototype.wrapTabFocus = function (el, focusableEls) {
    var sentinelStart = this.createSentinel();
    var sentinelEnd = this.createSentinel();
    sentinelStart.addEventListener('focus', function () {
      if (focusableEls.length > 0) {
        focusableEls[focusableEls.length - 1].focus();
      }
    });
    sentinelEnd.addEventListener('focus', function () {
      if (focusableEls.length > 0) {
        focusableEls[0].focus();
      }
    });
    el.insertBefore(sentinelStart, el.children[0]);
    el.appendChild(sentinelEnd);
  };
  /**
   * Focuses on `initialFocusEl` if defined and a child of the root element.
   * Otherwise, focuses on the first focusable child element of the root.
   */


  FocusTrap.prototype.focusInitialElement = function (focusableEls, initialFocusEl) {
    var focusIndex = 0;

    if (initialFocusEl) {
      focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
    }

    focusableEls[focusIndex].focus();
  };

  FocusTrap.prototype.getFocusableElements = function (root) {
    var focusableEls = [].slice.call(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button'));
    return focusableEls.filter(function (el) {
      var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' || el.getAttribute('disabled') != null || el.getAttribute('hidden') != null || el.getAttribute('aria-hidden') === 'true';
      var isTabbableAndVisible = el.tabIndex >= 0 && el.getBoundingClientRect().width > 0 && !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
      var isProgrammaticallyHidden = false;

      if (isTabbableAndVisible) {
        var style = getComputedStyle(el);
        isProgrammaticallyHidden = style.display === 'none' || style.visibility === 'hidden';
      }

      return isTabbableAndVisible && !isProgrammaticallyHidden;
    });
  };

  FocusTrap.prototype.createSentinel = function () {
    var sentinel = document.createElement('div');
    sentinel.setAttribute('tabindex', '0'); // Don't announce in screen readers.

    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.classList.add(FOCUS_SENTINEL_CLASS);
    return sentinel;
  };

  return FocusTrap;
}();



/***/ }),

/***/ "./node_modules/@material/dom/ponyfill.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dom/ponyfill.js ***!
  \************************************************/
/*! exports provided: closest, matches, estimateScrollWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateScrollWidth", function() { return estimateScrollWidth; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */

function estimateScrollWidth(element) {
  // Check the offsetParent. If the element inherits display: none from any
  // parent, the offsetParent property will be null (see
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
  // This check ensures we only clone the node when necessary.
  var htmlEl = element;

  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }

  var clone = htmlEl.cloneNode(true);
  clone.style.setProperty('position', 'absolute');
  clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
  document.documentElement.appendChild(clone);
  var scrollWidth = clone.scrollWidth;
  document.documentElement.removeChild(clone);
  return scrollWidth;
}

/***/ }),

/***/ "./node_modules/@material/drawer/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/drawer/component.js ***!
  \****************************************************/
/*! exports provided: MDCDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDrawer", function() { return MDCDrawer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/focus-trap */ "./node_modules/@material/dom/focus-trap.js");
/* harmony import */ var _material_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/list/component */ "./node_modules/@material/list/component.js");
/* harmony import */ var _material_list_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/list/foundation */ "./node_modules/@material/list/foundation.js");
/* harmony import */ var _dismissible_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dismissible/foundation */ "./node_modules/@material/drawer/dismissible/foundation.js");
/* harmony import */ var _modal_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/foundation */ "./node_modules/@material/drawer/modal/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./node_modules/@material/drawer/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */








var cssClasses = _dismissible_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCDismissibleDrawerFoundation"].cssClasses,
    strings = _dismissible_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCDismissibleDrawerFoundation"].strings;
/**
 * @events `MDCDrawer:closed {}` Emits when the navigation drawer has closed.
 * @events `MDCDrawer:opened {}` Emits when the navigation drawer has opened.
 */

var MDCDrawer =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDrawer, _super);

  function MDCDrawer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCDrawer.attachTo = function (root) {
    return new MDCDrawer(root);
  };

  Object.defineProperty(MDCDrawer.prototype, "open", {
    /**
     * @return boolean Proxies to the foundation's `open`/`close` methods.
     * Also returns true if drawer is in the open position.
     */
    get: function () {
      return this.foundation_.isOpen();
    },

    /**
     * Toggles the drawer open and closed.
     */
    set: function (isOpen) {
      if (isOpen) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDrawer.prototype, "list", {
    get: function () {
      return this.list_;
    },
    enumerable: true,
    configurable: true
  });

  MDCDrawer.prototype.initialize = function (focusTrapFactory, listFactory) {
    if (focusTrapFactory === void 0) {
      focusTrapFactory = function (el) {
        return new _material_dom_focus_trap__WEBPACK_IMPORTED_MODULE_2__["FocusTrap"](el);
      };
    }

    if (listFactory === void 0) {
      listFactory = function (el) {
        return new _material_list_component__WEBPACK_IMPORTED_MODULE_3__["MDCList"](el);
      };
    }

    var listEl = this.root_.querySelector("." + _material_list_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCListFoundation"].cssClasses.ROOT);

    if (listEl) {
      this.list_ = listFactory(listEl);
      this.list_.wrapFocus = true;
    }

    this.focusTrapFactory_ = focusTrapFactory;
  };

  MDCDrawer.prototype.initialSyncWithDOM = function () {
    var _this = this;

    var MODAL = cssClasses.MODAL;
    var SCRIM_SELECTOR = strings.SCRIM_SELECTOR;
    this.scrim_ = this.root_.parentNode.querySelector(SCRIM_SELECTOR);

    if (this.scrim_ && this.root_.classList.contains(MODAL)) {
      this.handleScrimClick_ = function () {
        return _this.foundation_.handleScrimClick();
      };

      this.scrim_.addEventListener('click', this.handleScrimClick_);
      this.focusTrap_ = _util__WEBPACK_IMPORTED_MODULE_7__["createFocusTrapInstance"](this.root_, this.focusTrapFactory_);
    }

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    this.handleTransitionEnd_ = function (evt) {
      return _this.foundation_.handleTransitionEnd(evt);
    };

    this.listen('keydown', this.handleKeydown_);
    this.listen('transitionend', this.handleTransitionEnd_);
  };

  MDCDrawer.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten('transitionend', this.handleTransitionEnd_);

    if (this.list_) {
      this.list_.destroy();
    }

    var MODAL = cssClasses.MODAL;

    if (this.scrim_ && this.handleScrimClick_ && this.root_.classList.contains(MODAL)) {
      this.scrim_.removeEventListener('click', this.handleScrimClick_); // Ensure drawer is closed to hide scrim and release focus

      this.open = false;
    }
  };

  MDCDrawer.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function (className) {
        return _this.root_.classList.contains(className);
      },
      elementHasClass: function (element, className) {
        return element.classList.contains(className);
      },
      saveFocus: function () {
        return _this.previousFocus_ = document.activeElement;
      },
      restoreFocus: function () {
        var previousFocus = _this.previousFocus_;

        if (previousFocus && previousFocus.focus && _this.root_.contains(document.activeElement)) {
          previousFocus.focus();
        }
      },
      focusActiveNavigationItem: function () {
        var activeNavItemEl = _this.root_.querySelector("." + _material_list_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCListFoundation"].cssClasses.LIST_ITEM_ACTIVATED_CLASS);

        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: function () {
        return _this.emit(strings.CLOSE_EVENT, {}, true
        /* shouldBubble */
        );
      },
      notifyOpen: function () {
        return _this.emit(strings.OPEN_EVENT, {}, true
        /* shouldBubble */
        );
      },
      trapFocus: function () {
        return _this.focusTrap_.trapFocus();
      },
      releaseFocus: function () {
        return _this.focusTrap_.releaseFocus();
      }
    }; // tslint:enable:object-literal-sort-keys

    var DISMISSIBLE = cssClasses.DISMISSIBLE,
        MODAL = cssClasses.MODAL;

    if (this.root_.classList.contains(DISMISSIBLE)) {
      return new _dismissible_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCDismissibleDrawerFoundation"](adapter);
    } else if (this.root_.classList.contains(MODAL)) {
      return new _modal_foundation__WEBPACK_IMPORTED_MODULE_6__["MDCModalDrawerFoundation"](adapter);
    } else {
      throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
    }
  };

  return MDCDrawer;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/drawer/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/drawer/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ANIMATE: 'mdc-drawer--animate',
  CLOSING: 'mdc-drawer--closing',
  DISMISSIBLE: 'mdc-drawer--dismissible',
  MODAL: 'mdc-drawer--modal',
  OPEN: 'mdc-drawer--open',
  OPENING: 'mdc-drawer--opening',
  ROOT: 'mdc-drawer'
};
var strings = {
  APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
  CLOSE_EVENT: 'MDCDrawer:closed',
  OPEN_EVENT: 'MDCDrawer:opened',
  SCRIM_SELECTOR: '.mdc-drawer-scrim'
};


/***/ }),

/***/ "./node_modules/@material/drawer/dismissible/foundation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material/drawer/dismissible/foundation.js ***!
  \*****************************************************************/
/*! exports provided: MDCDismissibleDrawerFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDismissibleDrawerFoundation", function() { return MDCDismissibleDrawerFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/drawer/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCDismissibleDrawerFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDismissibleDrawerFoundation, _super);

  function MDCDismissibleDrawerFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCDismissibleDrawerFoundation.defaultAdapter, adapter)) || this;

    _this.animationFrame_ = 0;
    _this.animationTimer_ = 0;
    return _this;
  }

  Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        elementHasClass: function () {
          return false;
        },
        notifyClose: function () {
          return undefined;
        },
        notifyOpen: function () {
          return undefined;
        },
        saveFocus: function () {
          return undefined;
        },
        restoreFocus: function () {
          return undefined;
        },
        focusActiveNavigationItem: function () {
          return undefined;
        },
        trapFocus: function () {
          return undefined;
        },
        releaseFocus: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCDismissibleDrawerFoundation.prototype.destroy = function () {
    if (this.animationFrame_) {
      cancelAnimationFrame(this.animationFrame_);
    }

    if (this.animationTimer_) {
      clearTimeout(this.animationTimer_);
    }
  };
  /**
   * Opens the drawer from the closed state.
   */


  MDCDismissibleDrawerFoundation.prototype.open = function () {
    var _this = this;

    if (this.isOpen() || this.isOpening() || this.isClosing()) {
      return;
    }

    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ANIMATE); // Wait a frame once display is no longer "none", to establish basis for animation

    this.runNextAnimationFrame_(function () {
      _this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING);
    });
    this.adapter_.saveFocus();
  };
  /**
   * Closes the drawer from the open state.
   */


  MDCDismissibleDrawerFoundation.prototype.close = function () {
    if (!this.isOpen() || this.isOpening() || this.isClosing()) {
      return;
    }

    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
  };
  /**
   * Returns true if the drawer is in the open position.
   * @return true if drawer is in open state.
   */


  MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
    return this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);
  };
  /**
   * Returns true if the drawer is animating open.
   * @return true if drawer is animating open.
   */


  MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
    return this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING) || this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ANIMATE);
  };
  /**
   * Returns true if the drawer is animating closed.
   * @return true if drawer is animating closed.
   */


  MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
    return this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
  };
  /**
   * Keydown handler to close drawer when key is escape.
   */


  MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
    var keyCode = evt.keyCode,
        key = evt.key;
    var isEscape = key === 'Escape' || keyCode === 27;

    if (isEscape) {
      this.close();
    }
  };
  /**
   * Handles the `transitionend` event when the drawer finishes opening/closing.
   */


  MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
    var OPENING = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING,
        CLOSING = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING,
        OPEN = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN,
        ANIMATE = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ANIMATE,
        ROOT = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ROOT; // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.

    var isRootElement = this.isElement_(evt.target) && this.adapter_.elementHasClass(evt.target, ROOT);

    if (!isRootElement) {
      return;
    }

    if (this.isClosing()) {
      this.adapter_.removeClass(OPEN);
      this.closed_();
      this.adapter_.restoreFocus();
      this.adapter_.notifyClose();
    } else {
      this.adapter_.focusActiveNavigationItem();
      this.opened_();
      this.adapter_.notifyOpen();
    }

    this.adapter_.removeClass(ANIMATE);
    this.adapter_.removeClass(OPENING);
    this.adapter_.removeClass(CLOSING);
  };
  /**
   * Extension point for when drawer finishes open animation.
   */


  MDCDismissibleDrawerFoundation.prototype.opened_ = function () {}; // tslint:disable-line:no-empty

  /**
   * Extension point for when drawer finishes close animation.
   */


  MDCDismissibleDrawerFoundation.prototype.closed_ = function () {}; // tslint:disable-line:no-empty

  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */


  MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame_ = function (callback) {
    var _this = this;

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = requestAnimationFrame(function () {
      _this.animationFrame_ = 0;
      clearTimeout(_this.animationTimer_);
      _this.animationTimer_ = setTimeout(callback, 0);
    });
  };

  MDCDismissibleDrawerFoundation.prototype.isElement_ = function (element) {
    // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
    return Boolean(element.classList);
  };

  return MDCDismissibleDrawerFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCDismissibleDrawerFoundation);

/***/ }),

/***/ "./node_modules/@material/drawer/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/drawer/index.js ***!
  \************************************************/
/*! exports provided: util, MDCDrawer, cssClasses, strings, MDCDismissibleDrawerFoundation, MDCModalDrawerFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@material/drawer/util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/@material/drawer/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCDrawer", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["MDCDrawer"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/drawer/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/* harmony import */ var _dismissible_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dismissible/foundation */ "./node_modules/@material/drawer/dismissible/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCDismissibleDrawerFoundation", function() { return _dismissible_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCDismissibleDrawerFoundation"]; });

/* harmony import */ var _modal_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/foundation */ "./node_modules/@material/drawer/modal/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCModalDrawerFoundation", function() { return _modal_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCModalDrawerFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







/***/ }),

/***/ "./node_modules/@material/drawer/modal/foundation.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/drawer/modal/foundation.js ***!
  \***********************************************************/
/*! exports provided: MDCModalDrawerFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCModalDrawerFoundation", function() { return MDCModalDrawerFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dismissible_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dismissible/foundation */ "./node_modules/@material/drawer/dismissible/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* istanbul ignore next: subclass is not a branch statement */

var MDCModalDrawerFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCModalDrawerFoundation, _super);

  function MDCModalDrawerFoundation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * Handles click event on scrim.
   */


  MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
    this.close();
  };
  /**
   * Called when drawer finishes open animation.
   */


  MDCModalDrawerFoundation.prototype.opened_ = function () {
    this.adapter_.trapFocus();
  };
  /**
   * Called when drawer finishes close animation.
   */


  MDCModalDrawerFoundation.prototype.closed_ = function () {
    this.adapter_.releaseFocus();
  };

  return MDCModalDrawerFoundation;
}(_dismissible_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCDismissibleDrawerFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCModalDrawerFoundation);

/***/ }),

/***/ "./node_modules/@material/drawer/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/drawer/util.js ***!
  \***********************************************/
/*! exports provided: createFocusTrapInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusTrapInstance", function() { return createFocusTrapInstance; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function createFocusTrapInstance(surfaceEl, focusTrapFactory) {
  return focusTrapFactory(surfaceEl, {
    // Component handles focusing on active nav item.
    skipInitialFocus: true
  });
}

/***/ }),

/***/ "./node_modules/@material/list/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/list/component.js ***!
  \**************************************************/
/*! exports provided: MDCList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCList", function() { return MDCList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/list/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/list/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCList =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCList, _super);

  function MDCList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCList.prototype, "vertical", {
    set: function (value) {
      this.foundation_.setVerticalOrientation(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "listElements", {
    get: function () {
      return [].slice.call(this.root_.querySelectorAll("." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_CLASS));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "wrapFocus", {
    set: function (value) {
      this.foundation_.setWrapFocus(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "singleSelection", {
    set: function (isSingleSelectionList) {
      this.foundation_.setSingleSelection(isSingleSelectionList);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "selectedIndex", {
    get: function () {
      return this.foundation_.getSelectedIndex();
    },
    set: function (index) {
      this.foundation_.setSelectedIndex(index);
    },
    enumerable: true,
    configurable: true
  });

  MDCList.attachTo = function (root) {
    return new MDCList(root);
  };

  MDCList.prototype.initialSyncWithDOM = function () {
    this.handleClick_ = this.handleClickEvent_.bind(this);
    this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
    this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
    this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
    this.listen('keydown', this.handleKeydown_);
    this.listen('click', this.handleClick_);
    this.listen('focusin', this.focusInEventListener_);
    this.listen('focusout', this.focusOutEventListener_);
    this.layout();
    this.initializeListType();
  };

  MDCList.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten('click', this.handleClick_);
    this.unlisten('focusin', this.focusInEventListener_);
    this.unlisten('focusout', this.focusOutEventListener_);
  };

  MDCList.prototype.layout = function () {
    var direction = this.root_.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_ORIENTATION);
    this.vertical = direction !== _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_ORIENTATION_HORIZONTAL; // List items need to have at least tabindex=-1 to be focusable.

    [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (el) {
      el.setAttribute('tabindex', '-1');
    }); // Child button/a elements are not tabbable until the list item is focused.

    [].slice.call(this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].FOCUSABLE_CHILD_ELEMENTS)).forEach(function (el) {
      return el.setAttribute('tabindex', '-1');
    });
    this.foundation_.layout();
  };
  /**
   * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
   */


  MDCList.prototype.initializeListType = function () {
    var _this = this;

    var checkboxListItems = this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_ROLE_CHECKBOX_SELECTOR);
    var singleSelectedListItem = this.root_.querySelector("\n      ." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_SELECTED_CLASS + "\n    ");
    var radioSelectedListItem = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_CHECKED_RADIO_SELECTOR);

    if (checkboxListItems.length) {
      var preselectedItems = this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_CHECKED_CHECKBOX_SELECTOR);
      this.selectedIndex = [].map.call(preselectedItems, function (listItem) {
        return _this.listElements.indexOf(listItem);
      });
    } else if (singleSelectedListItem) {
      if (singleSelectedListItem.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_ACTIVATED_CLASS)) {
        this.foundation_.setUseActivatedClass(true);
      }

      this.singleSelection = true;
      this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
    } else if (radioSelectedListItem) {
      this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
    }
  };
  /**
   * Updates the list item at itemIndex to the desired isEnabled state.
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */


  MDCList.prototype.setEnabled = function (itemIndex, isEnabled) {
    this.foundation_.setEnabled(itemIndex, isEnabled);
  };

  MDCList.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClassForElementIndex: function (index, className) {
        var element = _this.listElements[index];

        if (element) {
          element.classList.add(className);
        }
      },
      focusItemAtIndex: function (index) {
        var element = _this.listElements[index];

        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: function (index, attr) {
        return _this.listElements[index].getAttribute(attr);
      },
      getFocusedElementIndex: function () {
        return _this.listElements.indexOf(document.activeElement);
      },
      getListItemCount: function () {
        return _this.listElements.length;
      },
      hasCheckboxAtIndex: function (index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function (index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function (index) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      isFocusInsideList: function () {
        return _this.root_.contains(document.activeElement);
      },
      isRootFocused: function () {
        return document.activeElement === _this.root_;
      },
      listItemAtIndexHasClass: function (index, className) {
        return _this.listElements[index].classList.contains(className);
      },
      notifyAction: function (index) {
        _this.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ACTION_EVENT, {
          index: index
        },
        /** shouldBubble */
        true);
      },
      removeClassForElementIndex: function (index, className) {
        var element = _this.listElements[index];

        if (element) {
          element.classList.remove(className);
        }
      },
      setAttributeForElementIndex: function (index, attr, value) {
        var element = _this.listElements[index];

        if (element) {
          element.setAttribute(attr, value);
        }
      },
      setCheckedCheckboxOrRadioAtIndex: function (index, isChecked) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKBOX_RADIO_SELECTOR);
        toggleEl.checked = isChecked;
        var event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: function (listItemIndex, tabIndexValue) {
        var element = _this.listElements[listItemIndex];
        var listItemChildren = [].slice.call(element.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
        listItemChildren.forEach(function (el) {
          return el.setAttribute('tabindex', tabIndexValue);
        });
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCListFoundation"](adapter);
  };
  /**
   * Used to figure out which list item this event is targetting. Or returns -1 if
   * there is no list item
   */


  MDCList.prototype.getListItemIndex_ = function (evt) {
    var eventTarget = evt.target;
    var nearestParent = Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["closest"])(eventTarget, "." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_CLASS + ", ." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].ROOT); // Get the index of the element if it is a list item.

    if (nearestParent && Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["matches"])(nearestParent, "." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_CLASS)) {
      return this.listElements.indexOf(nearestParent);
    }

    return -1;
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleFocusInEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation_.handleFocusIn(evt, index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleFocusOutEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation_.handleFocusOut(evt, index);
  };
  /**
   * Used to figure out which element was focused when keydown event occurred before sending the event to the
   * foundation.
   */


  MDCList.prototype.handleKeydownEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    var target = evt.target;
    this.foundation_.handleKeydown(evt, target.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_CLASS), index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleClickEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    var target = evt.target; // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

    var toggleCheckbox = !Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["matches"])(target, _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKBOX_RADIO_SELECTOR);
    this.foundation_.handleClick(index, toggleCheckbox);
  };

  return MDCList;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/list/constants.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/list/constants.js ***!
  \**************************************************/
/*! exports provided: strings, cssClasses, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
  LIST_ITEM_CLASS: 'mdc-list-item',
  LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
  LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
  ROOT: 'mdc-list'
};
var strings = {
  ACTION_EVENT: 'MDCList:action',
  ARIA_CHECKED: 'aria-checked',
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: 'aria-current',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: 'aria-selected',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a\n  ",
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
  RADIO_SELECTOR: 'input[type="radio"]'
};
var numbers = {
  UNSET_INDEX: -1
};


/***/ }),

/***/ "./node_modules/@material/list/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/list/foundation.js ***!
  \***************************************************/
/*! exports provided: MDCListFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCListFoundation", function() { return MDCListFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/list/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

function isNumberArray(selectedIndex) {
  return selectedIndex instanceof Array;
}

var MDCListFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCListFoundation, _super);

  function MDCListFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCListFoundation.defaultAdapter, adapter)) || this;

    _this.wrapFocus_ = false;
    _this.isVertical_ = true;
    _this.isSingleSelectionList_ = false;
    _this.selectedIndex_ = _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX;
    _this.focusedItemIndex_ = _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX;
    _this.useActivatedClass_ = false;
    _this.ariaCurrentAttrValue_ = null;
    _this.isCheckboxList_ = false;
    _this.isRadioList_ = false;
    return _this;
  }

  Object.defineProperty(MDCListFoundation, "strings", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "cssClasses", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "numbers", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClassForElementIndex: function () {
          return undefined;
        },
        focusItemAtIndex: function () {
          return undefined;
        },
        getAttributeForElementIndex: function () {
          return null;
        },
        getFocusedElementIndex: function () {
          return 0;
        },
        getListItemCount: function () {
          return 0;
        },
        hasCheckboxAtIndex: function () {
          return false;
        },
        hasRadioAtIndex: function () {
          return false;
        },
        isCheckboxCheckedAtIndex: function () {
          return false;
        },
        isFocusInsideList: function () {
          return false;
        },
        isRootFocused: function () {
          return false;
        },
        listItemAtIndexHasClass: function () {
          return false;
        },
        notifyAction: function () {
          return undefined;
        },
        removeClassForElementIndex: function () {
          return undefined;
        },
        setAttributeForElementIndex: function () {
          return undefined;
        },
        setCheckedCheckboxOrRadioAtIndex: function () {
          return undefined;
        },
        setTabIndexForListItemChildren: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCListFoundation.prototype.layout = function () {
    if (this.adapter_.getListItemCount() === 0) {
      return;
    }

    if (this.adapter_.hasCheckboxAtIndex(0)) {
      this.isCheckboxList_ = true;
    } else if (this.adapter_.hasRadioAtIndex(0)) {
      this.isRadioList_ = true;
    }
  };
  /**
   * Sets the private wrapFocus_ variable.
   */


  MDCListFoundation.prototype.setWrapFocus = function (value) {
    this.wrapFocus_ = value;
  };
  /**
   * Sets the isVertical_ private variable.
   */


  MDCListFoundation.prototype.setVerticalOrientation = function (value) {
    this.isVertical_ = value;
  };
  /**
   * Sets the isSingleSelectionList_ private variable.
   */


  MDCListFoundation.prototype.setSingleSelection = function (value) {
    this.isSingleSelectionList_ = value;
  };
  /**
   * Sets the useActivatedClass_ private variable.
   */


  MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
    this.useActivatedClass_ = useActivated;
  };

  MDCListFoundation.prototype.getSelectedIndex = function () {
    return this.selectedIndex_;
  };

  MDCListFoundation.prototype.setSelectedIndex = function (index) {
    if (!this.isIndexValid_(index)) {
      return;
    }

    if (this.isCheckboxList_) {
      this.setCheckboxAtIndex_(index);
    } else if (this.isRadioList_) {
      this.setRadioAtIndex_(index);
    } else {
      this.setSingleSelectionAtIndex_(index);
    }
  };
  /**
   * Focus in handler for the list items.
   */


  MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
    if (listItemIndex >= 0) {
      this.adapter_.setTabIndexForListItemChildren(listItemIndex, '0');
    }
  };
  /**
   * Focus out handler for the list items.
   */


  MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
    var _this = this;

    if (listItemIndex >= 0) {
      this.adapter_.setTabIndexForListItemChildren(listItemIndex, '-1');
    }
    /**
     * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
     * is moved to next element.
     */


    setTimeout(function () {
      if (!_this.adapter_.isFocusInsideList()) {
        _this.setTabindexToFirstSelectedItem_();
      }
    }, 0);
  };
  /**
   * Key handler for the list.
   */


  MDCListFoundation.prototype.handleKeydown = function (evt, isRootListItem, listItemIndex) {
    var isArrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
    var isArrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
    var isArrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
    var isArrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
    var isHome = evt.key === 'Home' || evt.keyCode === 36;
    var isEnd = evt.key === 'End' || evt.keyCode === 35;
    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
    var isSpace = evt.key === 'Space' || evt.keyCode === 32;

    if (this.adapter_.isRootFocused()) {
      if (isArrowUp || isEnd) {
        evt.preventDefault();
        this.focusLastElement();
      } else if (isArrowDown || isHome) {
        evt.preventDefault();
        this.focusFirstElement();
      }

      return;
    }

    var currentIndex = this.adapter_.getFocusedElementIndex();

    if (currentIndex === -1) {
      currentIndex = listItemIndex;

      if (currentIndex < 0) {
        // If this event doesn't have a mdc-list-item ancestor from the
        // current list (not from a sublist), return early.
        return;
      }
    }

    var nextIndex;

    if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusNextElement(currentIndex);
    } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusPrevElement(currentIndex);
    } else if (isHome) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusFirstElement();
    } else if (isEnd) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusLastElement();
    } else if (isEnter || isSpace) {
      if (isRootListItem) {
        // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
        var target = evt.target;

        if (target && target.tagName === 'A' && isEnter) {
          return;
        }

        this.preventDefaultEvent_(evt);

        if (this.isSelectableList_()) {
          this.setSelectedIndexOnAction_(currentIndex);
        }

        this.adapter_.notifyAction(currentIndex);
      }
    }

    this.focusedItemIndex_ = currentIndex;

    if (nextIndex !== undefined) {
      this.setTabindexAtIndex_(nextIndex);
      this.focusedItemIndex_ = nextIndex;
    }
  };
  /**
   * Click handler for the list.
   */


  MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
    if (index === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
      return;
    }

    if (this.isSelectableList_()) {
      this.setSelectedIndexOnAction_(index, toggleCheckbox);
    }

    this.adapter_.notifyAction(index);
    this.setTabindexAtIndex_(index);
    this.focusedItemIndex_ = index;
  };
  /**
   * Focuses the next element on the list.
   */


  MDCListFoundation.prototype.focusNextElement = function (index) {
    var count = this.adapter_.getListItemCount();
    var nextIndex = index + 1;

    if (nextIndex >= count) {
      if (this.wrapFocus_) {
        nextIndex = 0;
      } else {
        // Return early because last item is already focused.
        return index;
      }
    }

    this.adapter_.focusItemAtIndex(nextIndex);
    return nextIndex;
  };
  /**
   * Focuses the previous element on the list.
   */


  MDCListFoundation.prototype.focusPrevElement = function (index) {
    var prevIndex = index - 1;

    if (prevIndex < 0) {
      if (this.wrapFocus_) {
        prevIndex = this.adapter_.getListItemCount() - 1;
      } else {
        // Return early because first item is already focused.
        return index;
      }
    }

    this.adapter_.focusItemAtIndex(prevIndex);
    return prevIndex;
  };

  MDCListFoundation.prototype.focusFirstElement = function () {
    this.adapter_.focusItemAtIndex(0);
    return 0;
  };

  MDCListFoundation.prototype.focusLastElement = function () {
    var lastIndex = this.adapter_.getListItemCount() - 1;
    this.adapter_.focusItemAtIndex(lastIndex);
    return lastIndex;
  };
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */


  MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
    if (!this.isIndexValid_(itemIndex)) {
      return;
    }

    if (isEnabled) {
      this.adapter_.removeClassForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS);
      this.adapter_.setAttributeForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_DISABLED, 'false');
    } else {
      this.adapter_.addClassForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS);
      this.adapter_.setAttributeForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_DISABLED, 'true');
    }
  };
  /**
   * Ensures that preventDefault is only called if the containing element doesn't
   * consume the event, and it will cause an unintended scroll.
   */


  MDCListFoundation.prototype.preventDefaultEvent_ = function (evt) {
    var target = evt.target;
    var tagName = ("" + target.tagName).toLowerCase();

    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
      evt.preventDefault();
    }
  };

  MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
    if (this.selectedIndex_ === index) {
      return;
    }

    var selectedClassName = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_SELECTED_CLASS;

    if (this.useActivatedClass_) {
      selectedClassName = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_ACTIVATED_CLASS;
    }

    if (this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
      this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
    }

    this.adapter_.addClassForElementIndex(index, selectedClassName);
    this.setAriaForSingleSelectionAtIndex_(index);
    this.selectedIndex_ = index;
  };
  /**
   * Sets aria attribute for single selection at given index.
   */


  MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function (index) {
    // Detect the presence of aria-current and get the value only during list initialization when it is in unset state.
    if (this.selectedIndex_ === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
      this.ariaCurrentAttrValue_ = this.adapter_.getAttributeForElementIndex(index, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CURRENT);
    }

    var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
    var ariaAttribute = isAriaCurrent ? _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CURRENT : _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_SELECTED;

    if (this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
      this.adapter_.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
    }

    var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
    this.adapter_.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
  };
  /**
   * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
   */


  MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
    this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);

    if (this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
      this.adapter_.setAttributeForElementIndex(this.selectedIndex_, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED, 'false');
    }

    this.adapter_.setAttributeForElementIndex(index, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED, 'true');
    this.selectedIndex_ = index;
  };

  MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
    for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
      var isChecked = false;

      if (index.indexOf(i) >= 0) {
        isChecked = true;
      }

      this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
      this.adapter_.setAttributeForElementIndex(i, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED, isChecked ? 'true' : 'false');
    }

    this.selectedIndex_ = index;
  };

  MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
    if (this.focusedItemIndex_ === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX && index !== 0) {
      // If no list item was selected set first list item's tabindex to -1.
      // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
      this.adapter_.setAttributeForElementIndex(0, 'tabindex', '-1');
    } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
      this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', '-1');
    }

    this.adapter_.setAttributeForElementIndex(index, 'tabindex', '0');
  };
  /**
   * @return Return true if it is single selectin list, checkbox list or radio list.
   */


  MDCListFoundation.prototype.isSelectableList_ = function () {
    return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
  };

  MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function () {
    var targetIndex = 0;

    if (this.isSelectableList_()) {
      if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
        targetIndex = this.selectedIndex_;
      } else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
        targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) {
          return Math.min(currentIndex, minIndex);
        });
      }
    }

    this.setTabindexAtIndex_(targetIndex);
  };

  MDCListFoundation.prototype.isIndexValid_ = function (index) {
    var _this = this;

    if (index instanceof Array) {
      if (!this.isCheckboxList_) {
        throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
      }

      if (index.length === 0) {
        return true;
      } else {
        return index.some(function (i) {
          return _this.isIndexInRange_(i);
        });
      }
    } else if (typeof index === 'number') {
      if (this.isCheckboxList_) {
        throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
      }

      return this.isIndexInRange_(index);
    } else {
      return false;
    }
  };

  MDCListFoundation.prototype.isIndexInRange_ = function (index) {
    var listSize = this.adapter_.getListItemCount();
    return index >= 0 && index < listSize;
  };
  /**
   * Sets selected index on user action, toggles checkbox / radio based on toggleCheckbox value.
   * User interaction should not toggle list item(s) when disabled.
   */


  MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
    if (toggleCheckbox === void 0) {
      toggleCheckbox = true;
    }

    if (this.adapter_.listItemAtIndexHasClass(index, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS)) {
      return;
    }

    if (this.isCheckboxList_) {
      this.toggleCheckboxAtIndex_(index, toggleCheckbox);
    } else {
      this.setSelectedIndex(index);
    }
  };

  MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
    var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);

    if (toggleCheckbox) {
      isChecked = !isChecked;
      this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
    }

    this.adapter_.setAttributeForElementIndex(index, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED, isChecked ? 'true' : 'false'); // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.

    var selectedIndexes = this.selectedIndex_ === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX ? [] : this.selectedIndex_.slice();

    if (isChecked) {
      selectedIndexes.push(index);
    } else {
      selectedIndexes = selectedIndexes.filter(function (i) {
        return i !== index;
      });
    }

    this.selectedIndex_ = selectedIndexes;
  };

  return MDCListFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCListFoundation);

/***/ }),

/***/ "./node_modules/@material/ripple/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/component.js ***!
  \****************************************************/
/*! exports provided: MDCRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var MDCRipple =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function (className) {
        return instance.root_.classList.add(className);
      },
      browserSupportsCssVars: function () {
        return _util__WEBPACK_IMPORTED_MODULE_5__["supportsCssVariables"](window);
      },
      computeBoundingRect: function () {
        return instance.root_.getBoundingClientRect();
      },
      containsEventTarget: function (target) {
        return instance.root_.contains(target);
      },
      deregisterDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterResizeHandler: function (handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function () {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function () {
        return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"])(instance.root_, ':active');
      },
      isSurfaceDisabled: function () {
        return Boolean(instance.disabled);
      },
      isUnbounded: function () {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      registerInteractionHandler: function (evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      registerResizeHandler: function (handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function (className) {
        return instance.root_.classList.remove(className);
      },
      updateCssVariable: function (varName, value) {
        return instance.root_.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function () {
      return Boolean(this.unbounded_);
    },
    set: function (unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCRippleFoundation"](MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root_;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation_.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/ripple/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};

/***/ }),

/***/ "./node_modules/@material/ripple/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/ripple/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return MDCRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



 // Activation events registered on the root element of each instance for activation

var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

var activatedTargets = [];

var MDCRippleFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRippleFoundation, _super);

  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

    _this.activationAnimationHasEnded_ = false;
    _this.activationTimer_ = 0;
    _this.fgDeactivationRemovalTimer_ = 0;
    _this.fgScale_ = '0';
    _this.frame_ = {
      width: 0,
      height: 0
    };
    _this.initialSize_ = 0;
    _this.layoutFrame_ = 0;
    _this.maxRadius_ = 0;
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.activationState_ = _this.defaultActivationState_();

    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;

      _this.runDeactivationUXLogicIfReady_();
    };

    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  Object.defineProperty(MDCRippleFoundation, "cssClasses", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        browserSupportsCssVars: function () {
          return true;
        },
        computeBoundingRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function () {
          return true;
        },
        deregisterDocumentInteractionHandler: function () {
          return undefined;
        },
        deregisterInteractionHandler: function () {
          return undefined;
        },
        deregisterResizeHandler: function () {
          return undefined;
        },
        getWindowPageOffset: function () {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function () {
          return true;
        },
        isSurfaceDisabled: function () {
          return true;
        },
        isUnbounded: function () {
          return true;
        },
        registerDocumentInteractionHandler: function () {
          return undefined;
        },
        registerInteractionHandler: function () {
          return undefined;
        },
        registerResizeHandler: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        updateCssVariable: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCRippleFoundation.prototype.init = function () {
    var _this = this;

    var supportsPressRipple = this.supportsPressRipple_();
    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      var _a = MDCRippleFoundation.cssClasses,
          ROOT_1 = _a.ROOT,
          UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.addClass(ROOT_1);

        if (_this.adapter_.isUnbounded()) {
          _this.adapter_.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


          _this.layoutInternal_();
        }
      });
    }
  };

  MDCRippleFoundation.prototype.destroy = function () {
    var _this = this;

    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      var _a = MDCRippleFoundation.cssClasses,
          ROOT_2 = _a.ROOT,
          UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.removeClass(ROOT_2);

        _this.adapter_.removeClass(UNBOUNDED_2);

        _this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  };
  /**
   * @param evt Optional event containing position information.
   */


  MDCRippleFoundation.prototype.activate = function (evt) {
    this.activate_(evt);
  };

  MDCRippleFoundation.prototype.deactivate = function () {
    this.deactivate_();
  };

  MDCRippleFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };

  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  };

  MDCRippleFoundation.prototype.handleFocus = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  MDCRippleFoundation.prototype.handleBlur = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   */


  MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
    return this.adapter_.browserSupportsCssVars();
  };

  MDCRippleFoundation.prototype.defaultActivationState_ = function () {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */


  MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
    var _this = this;

    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
      });

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  };

  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
    var _this = this;

    if (evt.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    }
  };

  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
    var _this = this;

    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
    var _this = this;

    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
    });
  };

  MDCRippleFoundation.prototype.removeCssVars_ = function () {
    var _this = this;

    var rippleStrings = MDCRippleFoundation.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function (key) {
      if (key.indexOf('VAR_') === 0) {
        _this.adapter_.updateCssVariable(rippleStrings[key], null);
      }
    });
  };

  MDCRippleFoundation.prototype.activate_ = function (evt) {
    var _this = this;

    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;

    if (activationState.isActivated) {
      return;
    } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


    var previousActivationEvent = this.previousActivationEvent_;
    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this.adapter_.containsEventTarget(target);
    });

    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers_(evt);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

        if (activationState.wasElementMadeActive) {
          _this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this.activationState_ = _this.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
    return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
  };

  MDCRippleFoundation.prototype.animateActivation_ = function () {
    var _this = this;

    var _a = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation.cssClasses,
        FG_DEACTIVATION = _b.FG_DEACTIVATION,
        FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal_();
    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates_(),
          startPoint = _c.startPoint,
          endPoint = _c.endPoint;

      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
    var _a = this.activationState_,
        activationEvent = _a.activationEvent,
        wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;

    if (wasActivatedByPointer) {
      startPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getNormalizedEventCoords"])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    } // Center the element around the start point.


    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };
    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };
    return {
      startPoint: startPoint,
      endPoint: endPoint
    };
  };

  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
    var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.


    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState_,
        hasDeactivationUXRun = _a.hasDeactivationUXRun,
        isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(FG_DEACTIVATION);
      }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].FG_DEACTIVATION_MS);
    }
  };

  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  MDCRippleFoundation.prototype.resetActivationState_ = function () {
    var _this = this;

    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.

    setTimeout(function () {
      return _this.previousActivationEvent_ = undefined;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };

  MDCRippleFoundation.prototype.deactivate_ = function () {
    var _this = this;

    var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }

    var state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, activationState);

    if (activationState.isProgrammatic) {
      requestAnimationFrame(function () {
        return _this.animateDeactivation_(state);
      });
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(function () {
        _this.activationState_.hasDeactivationUXRun = true;

        _this.animateDeactivation_(state);

        _this.resetActivationState_();
      });
    }
  };

  MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer,
        wasElementMadeActive = _a.wasElementMadeActive;

    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.layoutInternal_ = function () {
    var _this = this;

    this.frame_ = this.adapter_.computeBoundingRect();
    var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.

    var getBoundedRadius = function () {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

    var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE); // Unbounded ripple size should always be even number to equally center align.

    if (this.adapter_.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize_ = initialSize - 1;
    } else {
      this.initialSize_ = initialSize;
    }

    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
    this.updateLayoutCssVars_();
  };

  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
    var _a = MDCRippleFoundation.strings,
        VAR_FG_SIZE = _a.VAR_FG_SIZE,
        VAR_LEFT = _a.VAR_LEFT,
        VAR_TOP = _a.VAR_TOP,
        VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };
      this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
      this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
    }
  };

  return MDCRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCRippleFoundation);

/***/ }),

/***/ "./node_modules/@material/ripple/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/ripple/index.js ***!
  \************************************************/
/*! exports provided: util, MDCRipple, cssClasses, strings, numbers, MDCRippleFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/@material/ripple/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["MDCRipple"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCRippleFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/***/ }),

/***/ "./node_modules/@material/ripple/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/ripple/util.js ***!
  \***********************************************/
/*! exports provided: supportsCssVariables, getNormalizedEventCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

  if (!supportsFunctionPresent) {
    return false;
  }

  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari

  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }

  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }

  var x = pageOffset.x,
      y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY; // Determine touch point relative to the ripple container.

  if (evt.type === 'touchstart') {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }

  return {
    x: normalizedX,
    y: normalizedY
  };
}

/***/ }),

/***/ "./node_modules/@material/switch/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/switch/component.js ***!
  \****************************************************/
/*! exports provided: MDCSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSwitch", function() { return MDCSwitch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/switch/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */








var MDCSwitch =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSwitch, _super);

  function MDCSwitch() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.ripple_ = _this.createRipple_();
    return _this;
  }

  MDCSwitch.attachTo = function (root) {
    return new MDCSwitch(root);
  };

  MDCSwitch.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.ripple_.destroy();
    this.nativeControl_.removeEventListener('change', this.changeHandler_);
  };

  MDCSwitch.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.changeHandler_ = function () {
      var _a;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return (_a = _this.foundation_).handleChange.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
    };

    this.nativeControl_.addEventListener('change', this.changeHandler_); // Sometimes the checked state of the input element is saved in the history.
    // The switch styling should match the checked state of the input element.
    // Do an initial sync between the native control and the foundation.

    this.checked = this.checked;
  };

  MDCSwitch.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      setNativeControlChecked: function (checked) {
        return _this.nativeControl_.checked = checked;
      },
      setNativeControlDisabled: function (disabled) {
        return _this.nativeControl_.disabled = disabled;
      },
      setNativeControlAttr: function (attr, value) {
        return _this.nativeControl_.setAttribute(attr, value);
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_6__["MDCSwitchFoundation"](adapter);
  };

  Object.defineProperty(MDCSwitch.prototype, "ripple", {
    get: function () {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitch.prototype, "checked", {
    get: function () {
      return this.nativeControl_.checked;
    },
    set: function (checked) {
      this.foundation_.setChecked(checked);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitch.prototype, "disabled", {
    get: function () {
      return this.nativeControl_.disabled;
    },
    set: function (disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });

  MDCSwitch.prototype.createRipple_ = function () {
    var _this = this;

    var RIPPLE_SURFACE_SELECTOR = _foundation__WEBPACK_IMPORTED_MODULE_6__["MDCSwitchFoundation"].strings.RIPPLE_SURFACE_SELECTOR;
    var rippleSurface = this.root_.querySelector(RIPPLE_SURFACE_SELECTOR); // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.

    var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_4__["MDCRipple"].createAdapter(this), {
      addClass: function (className) {
        return rippleSurface.classList.add(className);
      },
      computeBoundingRect: function () {
        return rippleSurface.getBoundingClientRect();
      },
      deregisterInteractionHandler: function (evtType, handler) {
        _this.nativeControl_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      isSurfaceActive: function () {
        return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"])(_this.nativeControl_, ':active');
      },
      isUnbounded: function () {
        return true;
      },
      registerInteractionHandler: function (evtType, handler) {
        _this.nativeControl_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      removeClass: function (className) {
        rippleSurface.classList.remove(className);
      },
      updateCssVariable: function (varName, value) {
        rippleSurface.style.setProperty(varName, value);
      }
    });

    return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_4__["MDCRipple"](this.root_, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCRippleFoundation"](adapter));
  };

  Object.defineProperty(MDCSwitch.prototype, "nativeControl_", {
    get: function () {
      var NATIVE_CONTROL_SELECTOR = _foundation__WEBPACK_IMPORTED_MODULE_6__["MDCSwitchFoundation"].strings.NATIVE_CONTROL_SELECTOR;
      return this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
    },
    enumerable: true,
    configurable: true
  });
  return MDCSwitch;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/switch/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/switch/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** CSS classes used by the switch. */
var cssClasses = {
  /** Class used for a switch that is in the "checked" (on) position. */
  CHECKED: 'mdc-switch--checked',

  /** Class used for a switch that is disabled. */
  DISABLED: 'mdc-switch--disabled'
};
/** String constants used by the switch. */

var strings = {
  /** Aria attribute for checked or unchecked state of switch */
  ARIA_CHECKED_ATTR: 'aria-checked',

  /** A CSS selector used to locate the native HTML control for the switch.  */
  NATIVE_CONTROL_SELECTOR: '.mdc-switch__native-control',

  /** A CSS selector used to locate the ripple surface element for the switch. */
  RIPPLE_SURFACE_SELECTOR: '.mdc-switch__thumb-underlay'
};


/***/ }),

/***/ "./node_modules/@material/switch/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/switch/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCSwitchFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSwitchFoundation", function() { return MDCSwitchFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/switch/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCSwitchFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSwitchFoundation, _super);

  function MDCSwitchFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCSwitchFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCSwitchFoundation, "strings", {
    /** The string constants used by the switch. */
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitchFoundation, "cssClasses", {
    /** The CSS classes used by the switch. */
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitchFoundation, "defaultAdapter", {
    /** The default Adapter for the switch. */
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        setNativeControlChecked: function () {
          return undefined;
        },
        setNativeControlDisabled: function () {
          return undefined;
        },
        setNativeControlAttr: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });
  /** Sets the checked state of the switch. */

  MDCSwitchFoundation.prototype.setChecked = function (checked) {
    this.adapter_.setNativeControlChecked(checked);
    this.updateAriaChecked_(checked);
    this.updateCheckedStyling_(checked);
  };
  /** Sets the disabled state of the switch. */


  MDCSwitchFoundation.prototype.setDisabled = function (disabled) {
    this.adapter_.setNativeControlDisabled(disabled);

    if (disabled) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
    }
  };
  /** Handles the change event for the switch native control. */


  MDCSwitchFoundation.prototype.handleChange = function (evt) {
    var nativeControl = evt.target;
    this.updateAriaChecked_(nativeControl.checked);
    this.updateCheckedStyling_(nativeControl.checked);
  };
  /** Updates the styling of the switch based on its checked state. */


  MDCSwitchFoundation.prototype.updateCheckedStyling_ = function (checked) {
    if (checked) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHECKED);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHECKED);
    }
  };

  MDCSwitchFoundation.prototype.updateAriaChecked_ = function (checked) {
    this.adapter_.setNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_ATTR, "" + !!checked);
  };

  return MDCSwitchFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCSwitchFoundation);

/***/ }),

/***/ "./node_modules/@material/switch/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/switch/index.js ***!
  \************************************************/
/*! exports provided: MDCSwitch, cssClasses, strings, MDCSwitchFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/switch/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSwitch", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCSwitch"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/switch/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/switch/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSwitchFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCSwitchFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




/***/ }),

/***/ "./node_modules/@material/top-app-bar/component.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/component.js ***!
  \*********************************************************/
/*! exports provided: MDCTopAppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBar", function() { return MDCTopAppBar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _fixed_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixed/foundation */ "./node_modules/@material/top-app-bar/fixed/foundation.js");
/* harmony import */ var _short_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./short/foundation */ "./node_modules/@material/top-app-bar/short/foundation.js");
/* harmony import */ var _standard_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./standard/foundation */ "./node_modules/@material/top-app-bar/standard/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */








var MDCTopAppBar =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTopAppBar, _super);

  function MDCTopAppBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTopAppBar.attachTo = function (root) {
    return new MDCTopAppBar(root);
  };

  MDCTopAppBar.prototype.initialize = function (rippleFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function (el) {
        return _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__["MDCRipple"].attachTo(el);
      };
    }

    this.navIcon_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].NAVIGATION_ICON_SELECTOR); // Get all icons in the toolbar and instantiate the ripples

    var icons = [].slice.call(this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ACTION_ITEM_SELECTOR));

    if (this.navIcon_) {
      icons.push(this.navIcon_);
    }

    this.iconRipples_ = icons.map(function (icon) {
      var ripple = rippleFactory(icon);
      ripple.unbounded = true;
      return ripple;
    });
    this.scrollTarget_ = window;
  };

  MDCTopAppBar.prototype.initialSyncWithDOM = function () {
    this.handleNavigationClick_ = this.foundation_.handleNavigationClick.bind(this.foundation_);
    this.handleWindowResize_ = this.foundation_.handleWindowResize.bind(this.foundation_);
    this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_);
    this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);

    if (this.navIcon_) {
      this.navIcon_.addEventListener('click', this.handleNavigationClick_);
    }

    var isFixed = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FIXED_CLASS);
    var isShort = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SHORT_CLASS);

    if (!isShort && !isFixed) {
      window.addEventListener('resize', this.handleWindowResize_);
    }
  };

  MDCTopAppBar.prototype.destroy = function () {
    this.iconRipples_.forEach(function (iconRipple) {
      return iconRipple.destroy();
    });
    this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);

    if (this.navIcon_) {
      this.navIcon_.removeEventListener('click', this.handleNavigationClick_);
    }

    var isFixed = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FIXED_CLASS);
    var isShort = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SHORT_CLASS);

    if (!isShort && !isFixed) {
      window.removeEventListener('resize', this.handleWindowResize_);
    }

    _super.prototype.destroy.call(this);
  };

  MDCTopAppBar.prototype.setScrollTarget = function (target) {
    // Remove scroll handler from the previous scroll target
    this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);
    this.scrollTarget_ = target; // Initialize scroll handler on the new scroll target

    this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_);
    this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);
  };

  MDCTopAppBar.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      hasClass: function (className) {
        return _this.root_.classList.contains(className);
      },
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      setStyle: function (property, value) {
        return _this.root_.style.setProperty(property, value);
      },
      getTopAppBarHeight: function () {
        return _this.root_.clientHeight;
      },
      notifyNavigationIconClicked: function () {
        return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].NAVIGATION_EVENT, {});
      },
      getViewportScrollY: function () {
        var win = _this.scrollTarget_;
        var el = _this.scrollTarget_;
        return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
      },
      getTotalActionItems: function () {
        return _this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ACTION_ITEM_SELECTOR).length;
      }
    }; // tslint:enable:object-literal-sort-keys

    var foundation;

    if (this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SHORT_CLASS)) {
      foundation = new _short_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCShortTopAppBarFoundation"](adapter);
    } else if (this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FIXED_CLASS)) {
      foundation = new _fixed_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCFixedTopAppBarFoundation"](adapter);
    } else {
      foundation = new _standard_foundation__WEBPACK_IMPORTED_MODULE_6__["MDCTopAppBarFoundation"](adapter);
    }

    return foundation;
  };

  return MDCTopAppBar;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/top-app-bar/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/constants.js ***!
  \*********************************************************/
/*! exports provided: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  FIXED_CLASS: 'mdc-top-app-bar--fixed',
  FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
  SHORT_CLASS: 'mdc-top-app-bar--short',
  SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
  SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item'
};
var numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};
var strings = {
  ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
  NAVIGATION_EVENT: 'MDCTopAppBar:nav',
  NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
  ROOT_SELECTOR: '.mdc-top-app-bar',
  TITLE_SELECTOR: '.mdc-top-app-bar__title'
};


/***/ }),

/***/ "./node_modules/@material/top-app-bar/fixed/foundation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/fixed/foundation.js ***!
  \****************************************************************/
/*! exports provided: MDCFixedTopAppBarFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFixedTopAppBarFoundation", function() { return MDCFixedTopAppBarFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _standard_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../standard/foundation */ "./node_modules/@material/top-app-bar/standard/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCFixedTopAppBarFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFixedTopAppBarFoundation, _super);

  function MDCFixedTopAppBarFoundation() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * State variable for the previous scroll iteration top app bar state
     */


    _this.wasScrolled_ = false;
    return _this;
  }
  /**
   * Scroll handler for applying/removing the modifier class on the fixed top app bar.
   * @override
   */


  MDCFixedTopAppBarFoundation.prototype.handleTargetScroll = function () {
    var currentScroll = this.adapter_.getViewportScrollY();

    if (currentScroll <= 0) {
      if (this.wasScrolled_) {
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].FIXED_SCROLLED_CLASS);
        this.wasScrolled_ = false;
      }
    } else {
      if (!this.wasScrolled_) {
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].FIXED_SCROLLED_CLASS);
        this.wasScrolled_ = true;
      }
    }
  };

  return MDCFixedTopAppBarFoundation;
}(_standard_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBarFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCFixedTopAppBarFoundation);

/***/ }),

/***/ "./node_modules/@material/top-app-bar/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/foundation.js ***!
  \**********************************************************/
/*! exports provided: MDCTopAppBarBaseFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarBaseFoundation", function() { return MDCTopAppBarBaseFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCTopAppBarBaseFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTopAppBarBaseFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */


  function MDCTopAppBarBaseFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTopAppBarBaseFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        setStyle: function () {
          return undefined;
        },
        getTopAppBarHeight: function () {
          return 0;
        },
        notifyNavigationIconClicked: function () {
          return undefined;
        },
        getViewportScrollY: function () {
          return 0;
        },
        getTotalActionItems: function () {
          return 0;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /** Other variants of TopAppBar foundation overrides this method */

  MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () {}; // tslint:disable-line:no-empty

  /** Other variants of TopAppBar foundation overrides this method */


  MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () {}; // tslint:disable-line:no-empty


  MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
    this.adapter_.notifyNavigationIconClicked();
  };

  return MDCTopAppBarBaseFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCTopAppBarBaseFoundation);

/***/ }),

/***/ "./node_modules/@material/top-app-bar/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/top-app-bar/index.js ***!
  \*****************************************************/
/*! exports provided: MDCTopAppBar, cssClasses, numbers, strings, MDCTopAppBarBaseFoundation, MDCFixedTopAppBarFoundation, MDCShortTopAppBarFoundation, MDCTopAppBarFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/top-app-bar/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBar", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTopAppBar"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/top-app-bar/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarBaseFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBarBaseFoundation"]; });

/* harmony import */ var _fixed_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixed/foundation */ "./node_modules/@material/top-app-bar/fixed/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCFixedTopAppBarFoundation", function() { return _fixed_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCFixedTopAppBarFoundation"]; });

/* harmony import */ var _short_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short/foundation */ "./node_modules/@material/top-app-bar/short/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCShortTopAppBarFoundation", function() { return _short_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCShortTopAppBarFoundation"]; });

/* harmony import */ var _standard_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./standard/foundation */ "./node_modules/@material/top-app-bar/standard/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarFoundation", function() { return _standard_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTopAppBarFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







/***/ }),

/***/ "./node_modules/@material/top-app-bar/short/foundation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/short/foundation.js ***!
  \****************************************************************/
/*! exports provided: MDCShortTopAppBarFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCShortTopAppBarFoundation", function() { return MDCShortTopAppBarFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foundation */ "./node_modules/@material/top-app-bar/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCShortTopAppBarFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCShortTopAppBarFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */


  function MDCShortTopAppBarFoundation(adapter) {
    var _this = _super.call(this, adapter) || this;

    _this.isCollapsed_ = false;
    _this.isAlwaysCollapsed_ = false;
    return _this;
  }

  Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
    // Public visibility for backward compatibility.
    get: function () {
      return this.isCollapsed_;
    },
    enumerable: true,
    configurable: true
  });

  MDCShortTopAppBarFoundation.prototype.init = function () {
    _super.prototype.init.call(this);

    if (this.adapter_.getTotalActionItems() > 0) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].SHORT_HAS_ACTION_ITEM_CLASS);
    } // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed


    this.setAlwaysCollapsed(this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].SHORT_COLLAPSED_CLASS));
  };
  /**
   * Set if the short top app bar should always be collapsed.
   *
   * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
   */


  MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function (value) {
    this.isAlwaysCollapsed_ = !!value;

    if (this.isAlwaysCollapsed_) {
      this.collapse_();
    } else {
      // let maybeCollapseBar_ determine if the bar should be collapsed
      this.maybeCollapseBar_();
    }
  };

  MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function () {
    return this.isAlwaysCollapsed_;
  };
  /**
   * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
   * @override
   */


  MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function () {
    this.maybeCollapseBar_();
  };

  MDCShortTopAppBarFoundation.prototype.maybeCollapseBar_ = function () {
    if (this.isAlwaysCollapsed_) {
      return;
    }

    var currentScroll = this.adapter_.getViewportScrollY();

    if (currentScroll <= 0) {
      if (this.isCollapsed_) {
        this.uncollapse_();
      }
    } else {
      if (!this.isCollapsed_) {
        this.collapse_();
      }
    }
  };

  MDCShortTopAppBarFoundation.prototype.uncollapse_ = function () {
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].SHORT_COLLAPSED_CLASS);
    this.isCollapsed_ = false;
  };

  MDCShortTopAppBarFoundation.prototype.collapse_ = function () {
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].SHORT_COLLAPSED_CLASS);
    this.isCollapsed_ = true;
  };

  return MDCShortTopAppBarFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBarBaseFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCShortTopAppBarFoundation);

/***/ }),

/***/ "./node_modules/@material/top-app-bar/standard/foundation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/standard/foundation.js ***!
  \*******************************************************************/
/*! exports provided: MDCTopAppBarFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarFoundation", function() { return MDCTopAppBarFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foundation */ "./node_modules/@material/top-app-bar/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var INITIAL_VALUE = 0;

var MDCTopAppBarFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTopAppBarFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */


  function MDCTopAppBarFoundation(adapter) {
    var _this = _super.call(this, adapter) || this;
    /**
     * Indicates if the top app bar was docked in the previous scroll handler iteration.
     */


    _this.wasDocked_ = true;
    /**
     * Indicates if the top app bar is docked in the fully shown position.
     */

    _this.isDockedShowing_ = true;
    /**
     * Variable for current scroll position of the top app bar
     */

    _this.currentAppBarOffsetTop_ = 0;
    /**
     * Used to prevent the top app bar from being scrolled out of view during resize events
     */

    _this.isCurrentlyBeingResized_ = false;
    /**
     * The timeout that's used to throttle the resize events
     */

    _this.resizeThrottleId_ = INITIAL_VALUE;
    /**
     * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
     */

    _this.resizeDebounceId_ = INITIAL_VALUE;
    _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();
    _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();
    return _this;
  }

  MDCTopAppBarFoundation.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.adapter_.setStyle('top', '');
  };
  /**
   * Scroll handler for the default scroll behavior of the top app bar.
   * @override
   */


  MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
    var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
    var diff = currentScrollPosition - this.lastScrollPosition_;
    this.lastScrollPosition_ = currentScrollPosition; // If the window is being resized the lastScrollPosition_ needs to be updated but the
    // current scroll of the top app bar should stay in the same position.

    if (!this.isCurrentlyBeingResized_) {
      this.currentAppBarOffsetTop_ -= diff;

      if (this.currentAppBarOffsetTop_ > 0) {
        this.currentAppBarOffsetTop_ = 0;
      } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
        this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
      }

      this.moveTopAppBar_();
    }
  };
  /**
   * Top app bar resize handler that throttle/debounce functions that execute updates.
   * @override
   */


  MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
    var _this = this; // Throttle resize events 10 p/s


    if (!this.resizeThrottleId_) {
      this.resizeThrottleId_ = setTimeout(function () {
        _this.resizeThrottleId_ = INITIAL_VALUE;

        _this.throttledResizeHandler_();
      }, _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }

    this.isCurrentlyBeingResized_ = true;

    if (this.resizeDebounceId_) {
      clearTimeout(this.resizeDebounceId_);
    }

    this.resizeDebounceId_ = setTimeout(function () {
      _this.handleTargetScroll();

      _this.isCurrentlyBeingResized_ = false;
      _this.resizeDebounceId_ = INITIAL_VALUE;
    }, _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
  };
  /**
   * Function to determine if the DOM needs to update.
   */


  MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
    var offscreenBoundaryTop = -this.topAppBarHeight_;
    var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
    var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
    var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen; // If it's partially showing, it can't be docked.

    if (partiallyShowing) {
      this.wasDocked_ = false;
    } else {
      // Not previously docked and not partially showing, it's now docked.
      if (!this.wasDocked_) {
        this.wasDocked_ = true;
        return true;
      } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
        this.isDockedShowing_ = hasAnyPixelsOnscreen;
        return true;
      }
    }

    return partiallyShowing;
  };
  /**
   * Function to move the top app bar if needed.
   */


  MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
    if (this.checkForUpdate_()) {
      // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
      // so the top app bar doesn't show if the window resizes and the new height > the old height.
      var offset = this.currentAppBarOffsetTop_;

      if (Math.abs(offset) >= this.topAppBarHeight_) {
        offset = -_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].MAX_TOP_APP_BAR_HEIGHT;
      }

      this.adapter_.setStyle('top', offset + 'px');
    }
  };
  /**
   * Throttled function that updates the top app bar scrolled values if the
   * top app bar height changes.
   */


  MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
    var currentHeight = this.adapter_.getTopAppBarHeight();

    if (this.topAppBarHeight_ !== currentHeight) {
      this.wasDocked_ = false; // Since the top app bar has a different height depending on the screen width, this
      // will ensure that the top app bar remains in the correct location if
      // completely hidden and a resize makes the top app bar a different height.

      this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
      this.topAppBarHeight_ = currentHeight;
    }

    this.handleTargetScroll();
  };

  return MDCTopAppBarFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBarBaseFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCTopAppBarFoundation);

/***/ }),

/***/ "./node_modules/lit-html/lib/default-template-processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lit-html/lib/default-template-processor.js ***!
  \*****************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */

class DefaultTemplateProcessor {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(element, name, strings, options) {
    const prefix = name[0];

    if (prefix === '.') {
      const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
      return committer.parts;
    }

    if (prefix === '@') {
      return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
    }

    if (prefix === '?') {
      return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
    }

    const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
    return committer.parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */


  handleTextExpression(options) {
    return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
  }

}
const defaultTemplateProcessor = new DefaultTemplateProcessor();

/***/ }),

/***/ "./node_modules/lit-html/lib/directive.js":
/*!************************************************!*\
  !*** ./node_modules/lit-html/lib/directive.js ***!
  \************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */

const directive = f => (...args) => {
  const d = f(...args);
  directives.set(d, true);
  return d;
};
const isDirective = o => {
  return typeof o === 'function' && directives.has(o);
};

/***/ }),

/***/ "./node_modules/lit-html/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/lit-html/lib/dom.js ***!
  \******************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */

const reparentNodes = (container, start, end = null, before = null) => {
  while (start !== end) {
    const n = start.nextSibling;
    container.insertBefore(start, before);
    start = n;
  }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */

const removeNodes = (container, start, end = null) => {
  while (start !== end) {
    const n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};

/***/ }),

/***/ "./node_modules/lit-html/lib/part.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lib/part.js ***!
  \*******************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

const nothing = {};

/***/ }),

/***/ "./node_modules/lit-html/lib/parts.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/parts.js ***!
  \********************************************/
/*! exports provided: isPrimitive, isIterable, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */






const isPrimitive = value => {
  return value === null || !(typeof value === 'object' || typeof value === 'function');
};
const isIterable = value => {
  return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */

class AttributeCommitter {
  constructor(element, name, strings) {
    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (let i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createPart() {
    return new AttributePart(this);
  }

  _getValue() {
    const strings = this.strings;
    const l = strings.length - 1;
    let text = '';

    for (let i = 0; i < l; i++) {
      text += strings[i];
      const part = this.parts[i];

      if (part !== undefined) {
        const v = part.value;

        if (isPrimitive(v) || !isIterable(v)) {
          text += typeof v === 'string' ? v : String(v);
        } else {
          for (const t of v) {
            text += typeof t === 'string' ? t : String(t);
          }
        }
      }
    }

    text += strings[l];
    return text;
  }

  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element.setAttribute(this.name, this._getValue());
    }
  }

}
/**
 * A Part that controls all or part of an attribute value.
 */

class AttributePart {
  constructor(committer) {
    this.value = undefined;
    this.committer = committer;
  }

  setValue(value) {
    if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
      this.value = value; // If the value is a not a directive, dirty the committer so that it'll
      // call setAttribute. If the value is a directive, it'll dirty the
      // committer if it calls setValue().

      if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
        this.committer.dirty = true;
      }
    }
  }

  commit() {
    while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
      const directive = this.value;
      this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
      directive(this);
    }

    if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
      return;
    }

    this.committer.commit();
  }

}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */

class NodePart {
  constructor(options) {
    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = options;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  appendInto(container) {
    this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  insertAfterNode(ref) {
    this.startNode = ref;
    this.endNode = ref.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  appendIntoPart(part) {
    part.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

    part.__insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  insertAfterPart(ref) {
    ref.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

    this.endNode = ref.endNode;
    ref.endNode = this.startNode;
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    if (this.startNode.parentNode === null) {
      return;
    }

    while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
      directive(this);
    }

    const value = this.__pendingValue;

    if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
      return;
    }

    if (isPrimitive(value)) {
      if (value !== this.value) {
        this.__commitText(value);
      }
    } else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
      this.__commitTemplateResult(value);
    } else if (value instanceof Node) {
      this.__commitNode(value);
    } else if (isIterable(value)) {
      this.__commitIterable(value);
    } else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
      this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
      this.clear();
    } else {
      // Fallback, will render the string representation
      this.__commitText(value);
    }
  }

  __insert(node) {
    this.endNode.parentNode.insertBefore(node, this.endNode);
  }

  __commitNode(value) {
    if (this.value === value) {
      return;
    }

    this.clear();

    this.__insert(value);

    this.value = value;
  }

  __commitText(value) {
    const node = this.startNode.nextSibling;
    value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
    // it can't be implicitly converted - i.e. it's a symbol.

    const valueAsString = typeof value === 'string' ? value : String(value);

    if (node === this.endNode.previousSibling && node.nodeType === 3
    /* Node.TEXT_NODE */
    ) {
        // If we only have a single text node between the markers, we can just
        // set its value, rather than replacing it.
        // TODO(justinfagnani): Can we just check if this.value is primitive?
        node.data = valueAsString;
      } else {
      this.__commitNode(document.createTextNode(valueAsString));
    }

    this.value = value;
  }

  __commitTemplateResult(value) {
    const template = this.options.templateFactory(value);

    if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] && this.value.template === template) {
      this.value.update(value.values);
    } else {
      // Make sure we propagate the template processor from the TemplateResult
      // so that we use its syntax extension, etc. The template factory comes
      // from the render function options so that it can control template
      // caching and preprocessing.
      const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);

      const fragment = instance._clone();

      instance.update(value.values);

      this.__commitNode(fragment);

      this.value = instance;
    }
  }

  __commitIterable(value) {
    // For an Iterable, we create a new InstancePart per item, then set its
    // value to the item. This is a little bit of overhead for every item in
    // an Iterable, but it lets us recurse easily and efficiently update Arrays
    // of TemplateResults that will be commonly returned from expressions like:
    // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
    // If _value is an array, then the previous render was of an
    // iterable and _value will contain the NodeParts from the previous
    // render. If _value is not an array, clear this part and make a new
    // array for NodeParts.
    if (!Array.isArray(this.value)) {
      this.value = [];
      this.clear();
    } // Lets us keep track of how many items we stamped so we can clear leftover
    // items from a previous render


    const itemParts = this.value;
    let partIndex = 0;
    let itemPart;

    for (const item of value) {
      // Try to reuse an existing part
      itemPart = itemParts[partIndex]; // If no existing part, create a new one

      if (itemPart === undefined) {
        itemPart = new NodePart(this.options);
        itemParts.push(itemPart);

        if (partIndex === 0) {
          itemPart.appendIntoPart(this);
        } else {
          itemPart.insertAfterPart(itemParts[partIndex - 1]);
        }
      }

      itemPart.setValue(item);
      itemPart.commit();
      partIndex++;
    }

    if (partIndex < itemParts.length) {
      // Truncate the parts array so _value reflects the current state
      itemParts.length = partIndex;
      this.clear(itemPart && itemPart.endNode);
    }
  }

  clear(startNode = this.startNode) {
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
  }

}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */

class BooleanAttributePart {
  constructor(element, name, strings) {
    this.value = undefined;
    this.__pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
      directive(this);
    }

    if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
      return;
    }

    const value = !!this.__pendingValue;

    if (this.value !== value) {
      if (value) {
        this.element.setAttribute(this.name, '');
      } else {
        this.element.removeAttribute(this.name);
      }

      this.value = value;
    }

    this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
  }

}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */

class PropertyCommitter extends AttributeCommitter {
  constructor(element, name, strings) {
    super(element, name, strings);
    this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
  }

  _createPart() {
    return new PropertyPart(this);
  }

  _getValue() {
    if (this.single) {
      return this.parts[0].value;
    }

    return super._getValue();
  }

  commit() {
    if (this.dirty) {
      this.dirty = false; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      this.element[this.name] = this._getValue();
    }
  }

}
class PropertyPart extends AttributePart {} // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.

let eventOptionsSupported = false; // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module

(() => {
  try {
    const options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }

    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.addEventListener('test', options, options); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.removeEventListener('test', options, options);
  } catch (_e) {// event options not supported
  }
})();

class EventPart {
  constructor(element, eventName, eventContext) {
    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this.__boundHandleEvent = e => this.handleEvent(e);
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
      directive(this);
    }

    if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
      return;
    }

    const newListener = this.__pendingValue;
    const oldListener = this.value;
    const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
    const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

    if (shouldRemoveListener) {
      this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }

    if (shouldAddListener) {
      this.__options = getOptions(newListener);
      this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }

    this.value = newListener;
    this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
  }

  handleEvent(event) {
    if (typeof this.value === 'function') {
      this.value.call(this.eventContext || this.element, event);
    } else {
      this.value.handleEvent(event);
    }
  }

} // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.

const getOptions = o => o && (eventOptionsSupported ? {
  capture: o.capture,
  passive: o.passive,
  once: o.once
} : o.capture);

/***/ }),

/***/ "./node_modules/lit-html/lib/render.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/render.js ***!
  \*********************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */



const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

const render = (result, container, options) => {
  let part = parts.get(container);

  if (part === undefined) {
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
    parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](_extends({
      templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"]
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

/***/ }),

/***/ "./node_modules/lit-html/lib/template-factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-factory.js ***!
  \*******************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */

function templateFactory(result) {
  let templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  let template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}
const templateCaches = new Map();

/***/ }),

/***/ "./node_modules/lit-html/lib/template-instance.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/lib/template-instance.js ***!
  \********************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */

class TemplateInstance {
  constructor(template, processor, options) {
    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  update(values) {
    let i = 0;

    for (const part of this.__parts) {
      if (part !== undefined) {
        part.setValue(values[i]);
      }

      i++;
    }

    for (const part of this.__parts) {
      if (part !== undefined) {
        part.commit();
      }
    }
  }

  _clone() {
    // There are a number of steps in the lifecycle of a template instance's
    // DOM fragment:
    //  1. Clone - create the instance fragment
    //  2. Adopt - adopt into the main document
    //  3. Process - find part markers and create parts
    //  4. Upgrade - upgrade custom elements
    //  5. Update - set node, attribute, property, etc., values
    //  6. Connect - connect to the document. Optional and outside of this
    //     method.
    //
    // We have a few constraints on the ordering of these steps:
    //  * We need to upgrade before updating, so that property values will pass
    //    through any property setters.
    //  * We would like to process before upgrading so that we're sure that the
    //    cloned fragment is inert and not disturbed by self-modifying DOM.
    //  * We want custom elements to upgrade even in disconnected fragments.
    //
    // Given these constraints, with full custom elements support we would
    // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
    //
    // But Safari does not implement CustomElementRegistry#upgrade, so we
    // can not implement that order and still have upgrade-before-update and
    // upgrade disconnected fragments. So we instead sacrifice the
    // process-before-upgrade constraint, since in Custom Elements v1 elements
    // must not modify their light DOM in the constructor. We still have issues
    // when co-existing with CEv0 elements like Polymer 1, and with polyfills
    // that don't strictly adhere to the no-modification rule because shadow
    // DOM, which may be created in the constructor, is emulated by being placed
    // in the light DOM.
    //
    // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
    // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
    // in one step.
    //
    // The Custom Elements v1 polyfill supports upgrade(), so the order when
    // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
    // Connect.
    const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
    const stack = [];
    const parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    const walker = document.createTreeWalker(fragment, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false);
    let partIndex = 0;
    let nodeIndex = 0;
    let part;
    let node = walker.nextNode(); // Loop through all the nodes and parts of a template

    while (partIndex < parts.length) {
      part = parts[partIndex];

      if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
        this.__parts.push(undefined);

        partIndex++;
        continue;
      } // Progress the tree walker until we find our next part's node.
      // Note that multiple parts may share the same node (attribute parts
      // on a single element), so this loop may not run at all.


      while (nodeIndex < part.index) {
        nodeIndex++;

        if (node.nodeName === 'TEMPLATE') {
          stack.push(node);
          walker.currentNode = node.content;
        }

        if ((node = walker.nextNode()) === null) {
          // We've exhausted the content inside a nested template element.
          // Because we still have parts (the outer for-loop), we know:
          // - There is a template in the stack
          // - The walker will find a nextNode outside the template
          walker.currentNode = stack.pop();
          node = walker.nextNode();
        }
      } // We've arrived at our part's node.


      if (part.type === 'node') {
        const part = this.processor.handleTextExpression(this.options);
        part.insertAfterNode(node.previousSibling);

        this.__parts.push(part);
      } else {
        this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
      }

      partIndex++;
    }

    if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
      document.adoptNode(fragment);
      customElements.upgrade(fragment);
    }

    return fragment;
  }

}

/***/ }),

/***/ "./node_modules/lit-html/lib/template-result.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-result.js ***!
  \******************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


const commentMarker = ` ${_template_js__WEBPACK_IMPORTED_MODULE_1__["marker"]} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

class TemplateResult {
  constructor(strings, values, type, processor) {
    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  getHTML() {
    const l = this.strings.length - 1;
    let html = '';
    let isCommentBinding = false;

    for (let i = 0; i < l; i++) {
      const s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
      // into the template source before it's parsed by the browser's HTML
      // parser. The marker type is based on whether the expression is in an
      // attribute, text, or comment position.
      //   * For node-position bindings we insert a comment with the marker
      //     sentinel as its text content, like <!--{{lit-guid}}-->.
      //   * For attribute bindings we insert just the marker sentinel for the
      //     first binding, so that we support unquoted attribute bindings.
      //     Subsequent bindings can use a comment marker because multi-binding
      //     attributes must be quoted.
      //   * For comment bindings we insert just the marker sentinel so we don't
      //     close the comment.
      //
      // The following code scans the template source, but is *not* an HTML
      // parser. We don't need to track the tree structure of the HTML, only
      // whether a binding is inside a comment, and if not, if it appears to be
      // the first binding in an attribute.

      const commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
      // comment close. Because <-- can appear in an attribute value there can
      // be false positives.

      isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceding the
      // expression. This can match "name=value" like structures in text,
      // comments, and attribute values, so there can be false-positives.

      const attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);

      if (attributeMatch === null) {
        // We're only in this branch if we don't have a attribute-like
        // preceding sequence. For comments, this guards against unusual
        // attribute values like <div foo="<!--${'bar'}">. Cases like
        // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
        // below.
        html += s + (isCommentBinding ? commentMarker : _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"]);
      } else {
        // For attributes we use just a marker sentinel, and also append a
        // $lit$ suffix to the name to opt-out of attribute-specific parsing
        // that IE and Edge do for style and certain SVG attributes.
        html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + attributeMatch[3] + _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
      }
    }

    html += this.strings[l];
    return html;
  }

  getTemplateElement() {
    const template = document.createElement('template');
    template.innerHTML = this.getHTML();
    return template;
  }

}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */

class SVGTemplateResult extends TemplateResult {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }

  getTemplateElement() {
    const template = super.getTemplateElement();
    const content = template.content;
    const svgElement = content.firstChild;
    content.removeChild(svgElement);
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
    return template;
  }

}

/***/ }),

/***/ "./node_modules/lit-html/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/lit-html/lib/template.js ***!
  \***********************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */

const boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */

class Template {
  constructor(result, element) {
    this.parts = [];
    this.element = element;
    const nodesToRemove = [];
    const stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    const walker = document.createTreeWalker(element.content, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false); // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.

    let lastPartIndex = 0;
    let index = -1;
    let partIndex = 0;
    const {
      strings,
      values: {
        length
      }
    } = result;

    while (partIndex < length) {
      const node = walker.nextNode();

      if (node === null) {
        // We've exhausted the content inside a nested template element.
        // Because we still have parts (the outer for-loop), we know:
        // - There is a template in the stack
        // - The walker will find a nextNode outside the template
        walker.currentNode = stack.pop();
        continue;
      }

      index++;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (node.hasAttributes()) {
            const attributes = node.attributes;
            const {
              length
            } = attributes; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondence between part index and attribute index.

            let count = 0;

            for (let i = 0; i < length; i++) {
              if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                count++;
              }
            }

            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              const stringForPart = strings[partIndex]; // Find the attribute name

              const name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.

              const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              const attributeValue = node.getAttribute(attributeLookupName);
              node.removeAttribute(attributeLookupName);
              const statics = attributeValue.split(markerRegex);
              this.parts.push({
                type: 'attribute',
                index,
                name,
                strings: statics
              });
              partIndex += statics.length - 1;
            }
          }

          if (node.tagName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          const data = node.data;

          if (data.indexOf(marker) >= 0) {
            const parent = node.parentNode;
            const strings = data.split(markerRegex);
            const lastIndex = strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts

            for (let i = 0; i < lastIndex; i++) {
              let insert;
              let s = strings[i];

              if (s === '') {
                insert = createMarker();
              } else {
                const match = lastAttributeNameRegex.exec(s);

                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                  s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                }

                insert = document.createTextNode(s);
              }

              parent.insertBefore(insert, node);
              this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.


            if (strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = strings[lastIndex];
            } // We have a part for each match found


            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      ) {
          if (node.data === marker) {
            const parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part

            if (node.previousSibling === null || index === lastPartIndex) {
              index++;
              parent.insertBefore(createMarker(), node);
            }

            lastPartIndex = index;
            this.parts.push({
              type: 'node',
              index
            }); // If we don't have a nextSibling, keep this node so we have an end.
            // Else, we can remove it to save future costs.

            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }

            partIndex++;
          } else {
            let i = -1;

            while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              this.parts.push({
                type: 'node',
                index: -1
              });
              partIndex++;
            }
          }
        }
    } // Remove text binding nodes after the walk to not disturb the TreeWalker


    for (const n of nodesToRemove) {
      n.parentNode.removeChild(n);
    }
  }

}

const endsWith = (str, suffix) => {
  const index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};

const isTemplatePartActive = part => part.index !== -1; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.

const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */

const lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isIterable, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "./node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */



 // TODO(justinfagnani): remove line when we get NodePart moving methods








 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time

if (typeof window !== 'undefined') {
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.2.1');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */


const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */

const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);

/***/ }),

/***/ "./node_modules/pwa-helpers/router.js":
/*!********************************************!*\
  !*** ./node_modules/pwa-helpers/router.js ***!
  \********************************************/
/*! exports provided: installRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installRouter", function() { return installRouter; });
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/**
  Basic router that calls a callback whenever the location is updated.

  Example:

      import { installRouter } from 'pwa-helpers/router.js';

      installRouter((location) => handleNavigation(location));

  For example, if you're using this router in a Redux-connected component,
  you could dispatch an action in the callback:

      import { installRouter } from 'pwa-helpers/router.js';
      import { navigate } from '../actions/app.js';

      installRouter((location) => store.dispatch(navigate(location)))

  If you need to force a navigation to a new location programmatically, you can
  do so by pushing a new state using the History API, and then manually
  calling the callback with the new location:

      window.history.pushState({}, '', '/new-route');
      handleNavigation(window.location);

  Optionally, you can use the second argument to read the event that caused the
  navigation. For example, you may want to scroll to top only after a link click.

      installRouter((location, event) => {
        // Only scroll to top on link clicks, not popstate events.
        if (event && event.type === 'click') {
          window.scrollTo(0, 0);
        }
        handleNavigation(location);
      });
*/
const installRouter = locationUpdatedCallback => {
  document.body.addEventListener('click', e => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const anchor = e.composedPath().filter(n => n.tagName === 'A')[0];
    if (!anchor || anchor.target || anchor.hasAttribute('download') || anchor.getAttribute('rel') === 'external') return;
    const href = anchor.href;
    if (!href || href.indexOf('mailto:') !== -1) return;
    const location = window.location;
    const origin = location.origin || location.protocol + '//' + location.host;
    if (href.indexOf(origin) !== 0) return;
    e.preventDefault();

    if (href !== location.href) {
      window.history.pushState({}, '', href);
      locationUpdatedCallback(location, e);
    }
  });
  window.addEventListener('popstate', e => locationUpdatedCallback(window.location, e));
  locationUpdatedCallback(window.location, null
  /* event */
  );
};

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}
;
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./app/css/app.scss ./app/js/app.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./app/css/app.scss */"./app/css/app.scss");
module.exports = __webpack_require__(/*! ./app/js/app.js */"./app/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvanMvYXBwLmpzIiwid2VicGFjazovLy9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2ZvdW5kYXRpb24udHMiLCJ3ZWJwYWNrOi8vL2V2ZW50cy50cyIsIndlYnBhY2s6Ly8vZm9jdXMtdHJhcC50cyIsIndlYnBhY2s6Ly8vcG9ueWZpbGwudHMiLCJ3ZWJwYWNrOi8vL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL2RvbS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9wYXJ0LnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3BhcnRzLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3JlbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi90ZW1wbGF0ZS1mYWN0b3J5LnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3RlbXBsYXRlLWluc3RhbmNlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3RlbXBsYXRlLXJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi90ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vc3JjL2xpdC1odG1sLnRzIiwid2VicGFjazovLy9zcmMvcm91dGVyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiXSwibmFtZXMiOlsiZHJhd2VyIiwiTURDRHJhd2VyIiwiYXR0YWNoVG8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b3BBcHBCYXJFbGVtZW50IiwidG9wQXBwQmFyIiwiTURDVG9wQXBwQmFyIiwic2V0U2Nyb2xsVGFyZ2V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJsaXN0ZW4iLCJvcGVuIiwibGlzdEVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGVtcGxhdGUiLCJkYXRhIiwiaHRtbCIsInRpdGxlIiwidG9UaXRsZUNhc2UiLCJzIiwidG9VcHBlckNhc2UiLCJzdWJzdHIiLCJ0b0xvd2VyQ2FzZSIsImFjdGl2ZSIsInVuZGVmaW5lZCIsImhhbmRsZU5hdmlnYXRpb24iLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXNjb25uZWN0IiwibmF2aWdhdGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXRobmFtZSIsInBhdGgiLCJwYWdlIiwic2xpY2UiLCJsb2FkUGFnZSIsInJlbmRlciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkRpYWdub3NpcyIsImRpYWdub3NpcyIsIm1vZGVDb250cm9sIiwiTURDU3dpdGNoIiwiY29ubmVjdCIsImdldENvbnRleHQiLCJSZWNvcmQiLCJyZWNvcmQiLCJwbGF5ZXIiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXREaXNwbGF5TWVkaWEiLCJ2aWRlbyIsInRoZW4iLCJzdHJlYW0iLCJzcmNPYmplY3QiLCJjYXRjaCIsImVyciIsIlJlcGxheSIsInJlcGxheSIsImhlYXRtYXBDb250cm9sIiwiRGF0YSIsIkxvc3QiLCJsb3N0IiwiaW5zdGFsbFJvdXRlciIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJfX2V4dGVuZHMiLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY3JlYXRlIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjYWxsIiwiYXBwbHkiLCJfX3Jlc3QiLCJlIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fcGFyYW0iLCJwYXJhbUluZGV4IiwiZGVjb3JhdG9yIiwiX19tZXRhZGF0YSIsIm1ldGFkYXRhS2V5IiwibWV0YWRhdGFWYWx1ZSIsIm1ldGFkYXRhIiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsImYiLCJ5IiwiZyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsIlR5cGVFcnJvciIsInBvcCIsInB1c2giLCJfX2V4cG9ydFN0YXIiLCJtIiwiZXhwb3J0cyIsIl9fdmFsdWVzIiwibyIsIl9fcmVhZCIsImFyIiwiZXJyb3IiLCJfX3NwcmVhZCIsImNvbmNhdCIsIl9fc3ByZWFkQXJyYXlzIiwiaWwiLCJrIiwiYSIsImoiLCJqbCIsIl9fYXdhaXQiLCJfX2FzeW5jR2VuZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsInEiLCJyZXN1bWUiLCJzZXR0bGUiLCJmdWxmaWxsIiwic2hpZnQiLCJfX2FzeW5jRGVsZWdhdG9yIiwiX19hc3luY1ZhbHVlcyIsIl9fbWFrZVRlbXBsYXRlT2JqZWN0IiwiY29va2VkIiwicmF3IiwiX19pbXBvcnRTdGFyIiwibW9kIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfX2ltcG9ydERlZmF1bHQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwicmVjZWl2ZXIiLCJwcml2YXRlTWFwIiwiaGFzIiwiZ2V0IiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldCIsInNldCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7OztRQUlBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQSxpQ0FBaUM7O1FBRWpDO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx3QkFBd0Isa0NBQWtDO1FBQzFELE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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Q0R1QyxZQUFVLENBQUNJLEdBQVgsQ0FBZUwsUUFBZixFQUF5Qi9ELEtBQXpCO0FBQ0EsU0FBT0EsS0FBUDtBQUNILEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5idW5kbGUuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJidW5kbGUuY3NzXCI7IiwiaW1wb3J0IHtodG1sLCByZW5kZXJ9IGZyb20gJ2xpdC1odG1sJztcclxuaW1wb3J0IHtpbnN0YWxsUm91dGVyfSBmcm9tICdwd2EtaGVscGVycy9yb3V0ZXIuanMnO1xyXG5cclxuaW1wb3J0IHtNRENSaXBwbGV9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnO1xyXG5pbXBvcnQge01EQ0RyYXdlcn0gZnJvbSBcIkBtYXRlcmlhbC9kcmF3ZXJcIjtcclxuaW1wb3J0IHtNRENUb3BBcHBCYXJ9IGZyb20gXCJAbWF0ZXJpYWwvdG9wLWFwcC1iYXJcIjtcclxuaW1wb3J0IHtNRENTd2l0Y2h9IGZyb20gJ0BtYXRlcmlhbC9zd2l0Y2gnO1xyXG5cclxuY29uc3QgZHJhd2VyID0gTURDRHJhd2VyLmF0dGFjaFRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtZHJhd2VyJykpO1xyXG5cclxuY29uc3QgdG9wQXBwQmFyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtdG9wLWFwcC1iYXInKTtcclxuY29uc3QgdG9wQXBwQmFyID0gbmV3IE1EQ1RvcEFwcEJhcih0b3BBcHBCYXJFbGVtZW50KTtcclxuXHJcbnRvcEFwcEJhci5zZXRTY3JvbGxUYXJnZXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXcnKSk7XHJcbnRvcEFwcEJhci5saXN0ZW4oJ01EQ1RvcEFwcEJhcjpuYXYnLCAoKSA9PiB7XHJcbiAgZHJhd2VyLm9wZW4gPSAhZHJhd2VyLm9wZW47XHJcbn0pO1xyXG5cclxuY29uc3QgbGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy1kcmF3ZXIgLm1kYy1saXN0Jyk7XHJcbmxpc3RFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gIGRyYXdlci5vcGVuID0gZmFsc2U7XHJcbn0pO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSAoZGF0YSkgPT4gaHRtbGBcclxuICAke2RhdGEudGl0bGV9XHJcbmBcclxuXHJcbmxldCB0b1RpdGxlQ2FzZSA9IGZ1bmN0aW9uKHMpIHtcclxuICByZXR1cm4gc1swXS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxubGV0IGFjdGl2ZSA9IHVuZGVmaW5lZDtcclxuXHJcbmxldCBoYW5kbGVOYXZpZ2F0aW9uID0gZnVuY3Rpb24obG9jYXRpb24pIHtcclxuICBjb25zb2xlLmxvZyhcImhhbmRsZVwiLCBsb2NhdGlvbik7XHJcbiAgaWYgKGFjdGl2ZSkgeyBhY3RpdmUuZGlzY29ubmVjdCgpIH07XHJcbiAgbmF2aWdhdGUoZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLnBhdGhuYW1lKSk7XHJcbn07XHJcblxyXG5sZXQgbmF2aWdhdGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgY29uc3QgcGFnZSA9IHBhdGggPT09ICcvJyA/ICdkaWFnbm9zaXMnIDogcGF0aC5zbGljZSgxKTtcclxuICBjb25zb2xlLmxvZyhcInBhZ2VcIiwgcGFnZSk7XHJcbiAgbG9hZFBhZ2UocGFnZSk7XHJcbiAgcmVuZGVyKHRlbXBsYXRlKHt0aXRsZTogXCJGaXhhdGlvbiAtIFwiICsgdG9UaXRsZUNhc2UocGFnZSl9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKVswXSk7XHJcbiAgcmVuZGVyKHRlbXBsYXRlKHt0aXRsZTogdG9UaXRsZUNhc2UocGFnZSl9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1kYy10b3AtYXBwLWJhcl9fdGl0bGVcIilbMF0pO1xyXG59XHJcblxyXG5jb25zdCBsb2FkUGFnZSA9IGFzeW5jIGZ1bmN0aW9uKHBhZ2UpIHtcclxuICBzd2l0Y2gocGFnZSkge1xyXG4gICAgY2FzZSAnZGlhZ25vc2lzJzpcclxuICAgICAgY29uc3Qge0RpYWdub3Npc30gPSBhd2FpdCBpbXBvcnQoJy4vZGlhZ25vc2lzL2RpYWdub3Npcy5qcycpO1xyXG4gICAgICBsZXQgZGlhZ25vc2lzID0gRGlhZ25vc2lzKHt9KTtcclxuICAgICAgYWN0aXZlID0gZGlhZ25vc2lzO1xyXG4gICAgICBsZXQgbW9kZUNvbnRyb2wgPSBuZXcgTURDU3dpdGNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtc3dpdGNoJykpO1xyXG4gICAgICBkaWFnbm9zaXMuY29ubmVjdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYScpLmdldENvbnRleHQoJzJkJykpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3JlY29yZCc6XHJcbiAgICAgIGNvbnN0IHtSZWNvcmR9ID0gYXdhaXQgaW1wb3J0KCcuL3JlY29yZC9yZWNvcmQuanMnKTtcclxuICAgICAgbGV0IHJlY29yZCA9IFJlY29yZCh7fSk7XHJcbiAgICAgIGFjdGl2ZSA9IHJlY29yZDtcclxuICAgICAgcmVjb3JkLmNvbm5lY3QoKTtcclxuXHJcbiAgICAgIGNvbnN0IHBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKTtcclxuXHJcbiAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhKHt2aWRlbzogdHJ1ZX0pXHJcbiAgICAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xyXG4gICAgICAgICAgcGxheWVyLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjcmVlbiBtZWRpYTpcIiwgZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdyZXBsYXknOlxyXG4gICAgICBjb25zdCB7UmVwbGF5fSA9IGF3YWl0IGltcG9ydCgnLi9yZXBsYXkvcmVwbGF5LmpzJyk7XHJcbiAgICAgIGxldCByZXBsYXkgPSBSZXBsYXkoe30pO1xyXG4gICAgICBhY3RpdmUgPSByZXBsYXk7XHJcbiAgICAgIGxldCBoZWF0bWFwQ29udHJvbCA9IG5ldyBNRENTd2l0Y2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy1zd2l0Y2gnKSk7XHJcbiAgICAgIHJlcGxheS5jb25uZWN0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhJykuZ2V0Q29udGV4dCgnMmQnKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnZGF0YSc6XHJcbiAgICAgIGNvbnN0IHtEYXRhfSA9IGF3YWl0IGltcG9ydCgnLi9kYXRhL2RhdGEuanMnKTtcclxuICAgICAgbGV0IGRhdGEgPSBEYXRhKHt9KTtcclxuICAgICAgYWN0aXZlID0gZGF0YTtcclxuICAgICAgZGF0YS5jb25uZWN0KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgY29uc3Qge0xvc3R9ID0gYXdhaXQgaW1wb3J0KCcuL2xvc3QvbG9zdC5qcycpO1xyXG4gICAgICBwYWdlID0gJ3ZpZXc0MDQnO1xyXG4gICAgICBsZXQgbG9zdCA9IExvc3Qoe30pO1xyXG4gIH1cclxufVxyXG5cclxuaW5zdGFsbFJvdXRlcigobG9jYXRpb24pID0+IGhhbmRsZU5hdmlnYXRpb24obG9jYXRpb24pKTtcclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1JpcHBsZSB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50JztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24gfSBmcm9tICcuL2ZpeGVkL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9zaG9ydC9mb3VuZGF0aW9uJztcbmltcG9ydCB7IE1EQ1RvcEFwcEJhckZvdW5kYXRpb24gfSBmcm9tICcuL3N0YW5kYXJkL2ZvdW5kYXRpb24nO1xudmFyIE1EQ1RvcEFwcEJhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUb3BBcHBCYXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVG9wQXBwQmFyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ1RvcEFwcEJhci5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDVG9wQXBwQmFyKHJvb3QpO1xuICAgIH07XG4gICAgTURDVG9wQXBwQmFyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHJpcHBsZUZhY3RvcnkpIHtcbiAgICAgICAgaWYgKHJpcHBsZUZhY3RvcnkgPT09IHZvaWQgMCkgeyByaXBwbGVGYWN0b3J5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBNRENSaXBwbGUuYXR0YWNoVG8oZWwpOyB9OyB9XG4gICAgICAgIHRoaXMubmF2SWNvbl8gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5OQVZJR0FUSU9OX0lDT05fU0VMRUNUT1IpO1xuICAgICAgICAvLyBHZXQgYWxsIGljb25zIGluIHRoZSB0b29sYmFyIGFuZCBpbnN0YW50aWF0ZSB0aGUgcmlwcGxlc1xuICAgICAgICB2YXIgaWNvbnMgPSBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkFDVElPTl9JVEVNX1NFTEVDVE9SKSk7XG4gICAgICAgIGlmICh0aGlzLm5hdkljb25fKSB7XG4gICAgICAgICAgICBpY29ucy5wdXNoKHRoaXMubmF2SWNvbl8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaWNvblJpcHBsZXNfID0gaWNvbnMubWFwKGZ1bmN0aW9uIChpY29uKSB7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gcmlwcGxlRmFjdG9yeShpY29uKTtcbiAgICAgICAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJpcHBsZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0XyA9IHdpbmRvdztcbiAgICB9O1xuICAgIE1EQ1RvcEFwcEJhci5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhbmRsZU5hdmlnYXRpb25DbGlja18gPSB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZU5hdmlnYXRpb25DbGljay5iaW5kKHRoaXMuZm91bmRhdGlvbl8pO1xuICAgICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZV8gPSB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZVdpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMuZm91bmRhdGlvbl8pO1xuICAgICAgICB0aGlzLmhhbmRsZVRhcmdldFNjcm9sbF8gPSB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZVRhcmdldFNjcm9sbC5iaW5kKHRoaXMuZm91bmRhdGlvbl8pO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGxfKTtcbiAgICAgICAgaWYgKHRoaXMubmF2SWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMubmF2SWNvbl8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU5hdmlnYXRpb25DbGlja18pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0ZpeGVkID0gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5GSVhFRF9DTEFTUyk7XG4gICAgICAgIHZhciBpc1Nob3J0ID0gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5TSE9SVF9DTEFTUyk7XG4gICAgICAgIGlmICghaXNTaG9ydCAmJiAhaXNGaXhlZCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93UmVzaXplXyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1RvcEFwcEJhci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pY29uUmlwcGxlc18uZm9yRWFjaChmdW5jdGlvbiAoaWNvblJpcHBsZSkgeyByZXR1cm4gaWNvblJpcHBsZS5kZXN0cm95KCk7IH0pO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGxfKTtcbiAgICAgICAgaWYgKHRoaXMubmF2SWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMubmF2SWNvbl8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU5hdmlnYXRpb25DbGlja18pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0ZpeGVkID0gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5GSVhFRF9DTEFTUyk7XG4gICAgICAgIHZhciBpc1Nob3J0ID0gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5TSE9SVF9DTEFTUyk7XG4gICAgICAgIGlmICghaXNTaG9ydCAmJiAhaXNGaXhlZCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93UmVzaXplXyk7XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBNRENUb3BBcHBCYXIucHJvdG90eXBlLnNldFNjcm9sbFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHNjcm9sbCBoYW5kbGVyIGZyb20gdGhlIHByZXZpb3VzIHNjcm9sbCB0YXJnZXRcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsXyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0XyA9IHRhcmdldDtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBzY3JvbGwgaGFuZGxlciBvbiB0aGUgbmV3IHNjcm9sbCB0YXJnZXRcbiAgICAgICAgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGxfID1cbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlVGFyZ2V0U2Nyb2xsLmJpbmQodGhpcy5mb3VuZGF0aW9uXyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Xy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVRhcmdldFNjcm9sbF8pO1xuICAgIH07XG4gICAgTURDVG9wQXBwQmFyLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgc2V0U3R5bGU6IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7IH0sXG4gICAgICAgICAgICBnZXRUb3BBcHBCYXJIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsaWVudEhlaWdodDsgfSxcbiAgICAgICAgICAgIG5vdGlmeU5hdmlnYXRpb25JY29uQ2xpY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZW1pdChzdHJpbmdzLk5BVklHQVRJT05fRVZFTlQsIHt9KTsgfSxcbiAgICAgICAgICAgIGdldFZpZXdwb3J0U2Nyb2xsWTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB3aW4gPSBfdGhpcy5zY3JvbGxUYXJnZXRfO1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IF90aGlzLnNjcm9sbFRhcmdldF87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbi5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkID8gd2luLnBhZ2VZT2Zmc2V0IDogZWwuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFRvdGFsQWN0aW9uSXRlbXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5BQ1RJT05fSVRFTV9TRUxFQ1RPUikubGVuZ3RoOyB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB2YXIgZm91bmRhdGlvbjtcbiAgICAgICAgaWYgKHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuU0hPUlRfQ0xBU1MpKSB7XG4gICAgICAgICAgICBmb3VuZGF0aW9uID0gbmV3IE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkZJWEVEX0NMQVNTKSkge1xuICAgICAgICAgICAgZm91bmRhdGlvbiA9IG5ldyBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3VuZGF0aW9uID0gbmV3IE1EQ1RvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kYXRpb247XG4gICAgfTtcbiAgICByZXR1cm4gTURDVG9wQXBwQmFyO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1RvcEFwcEJhciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG51bWJlcnMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24gfSBmcm9tICcuLi9mb3VuZGF0aW9uJztcbnZhciBJTklUSUFMX1ZBTFVFID0gMDtcbnZhciBNRENUb3BBcHBCYXJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RvcEFwcEJhckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IG9wdGlvbmFsIGFyZ3VtZW50IGlzIG5vdCBhIGJyYW5jaCBzdGF0ZW1lbnQgKi9cbiAgICBmdW5jdGlvbiBNRENUb3BBcHBCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYWRhcHRlcikgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyBpZiB0aGUgdG9wIGFwcCBiYXIgd2FzIGRvY2tlZCBpbiB0aGUgcHJldmlvdXMgc2Nyb2xsIGhhbmRsZXIgaXRlcmF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMud2FzRG9ja2VkXyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHRvcCBhcHAgYmFyIGlzIGRvY2tlZCBpbiB0aGUgZnVsbHkgc2hvd24gcG9zaXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5pc0RvY2tlZFNob3dpbmdfID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhcmlhYmxlIGZvciBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgdG9wIGFwcCBiYXJcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVzZWQgdG8gcHJldmVudCB0aGUgdG9wIGFwcCBiYXIgZnJvbSBiZWluZyBzY3JvbGxlZCBvdXQgb2YgdmlldyBkdXJpbmcgcmVzaXplIGV2ZW50c1xuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuaXNDdXJyZW50bHlCZWluZ1Jlc2l6ZWRfID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGltZW91dCB0aGF0J3MgdXNlZCB0byB0aHJvdHRsZSB0aGUgcmVzaXplIGV2ZW50c1xuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMucmVzaXplVGhyb3R0bGVJZF8gPSBJTklUSUFMX1ZBTFVFO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRpbWVvdXQgdGhhdCdzIHVzZWQgdG8gZGVib3VuY2UgdG9nZ2xpbmcgdGhlIGlzQ3VycmVudGx5QmVpbmdSZXNpemVkXyB2YXJpYWJsZSBhZnRlciBhIHJlc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMucmVzaXplRGVib3VuY2VJZF8gPSBJTklUSUFMX1ZBTFVFO1xuICAgICAgICBfdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb25fID0gX3RoaXMuYWRhcHRlcl8uZ2V0Vmlld3BvcnRTY3JvbGxZKCk7XG4gICAgICAgIF90aGlzLnRvcEFwcEJhckhlaWdodF8gPSBfdGhpcy5hZGFwdGVyXy5nZXRUb3BBcHBCYXJIZWlnaHQoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZSgndG9wJywgJycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGhhbmRsZXIgZm9yIHRoZSBkZWZhdWx0IHNjcm9sbCBiZWhhdmlvciBvZiB0aGUgdG9wIGFwcCBiYXIuXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgTURDVG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVGFyZ2V0U2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbFBvc2l0aW9uID0gTWF0aC5tYXgodGhpcy5hZGFwdGVyXy5nZXRWaWV3cG9ydFNjcm9sbFkoKSwgMCk7XG4gICAgICAgIHZhciBkaWZmID0gY3VycmVudFNjcm9sbFBvc2l0aW9uIC0gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb25fO1xuICAgICAgICB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbl8gPSBjdXJyZW50U2Nyb2xsUG9zaXRpb247XG4gICAgICAgIC8vIElmIHRoZSB3aW5kb3cgaXMgYmVpbmcgcmVzaXplZCB0aGUgbGFzdFNjcm9sbFBvc2l0aW9uXyBuZWVkcyB0byBiZSB1cGRhdGVkIGJ1dCB0aGVcbiAgICAgICAgLy8gY3VycmVudCBzY3JvbGwgb2YgdGhlIHRvcCBhcHAgYmFyIHNob3VsZCBzdGF5IGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICAgICAgICBpZiAoIXRoaXMuaXNDdXJyZW50bHlCZWluZ1Jlc2l6ZWRfKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfIC09IGRpZmY7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8pID4gdGhpcy50b3BBcHBCYXJIZWlnaHRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyA9IC10aGlzLnRvcEFwcEJhckhlaWdodF87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1vdmVUb3BBcHBCYXJfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRvcCBhcHAgYmFyIHJlc2l6ZSBoYW5kbGVyIHRoYXQgdGhyb3R0bGUvZGVib3VuY2UgZnVuY3Rpb25zIHRoYXQgZXhlY3V0ZSB1cGRhdGVzLlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVdpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gVGhyb3R0bGUgcmVzaXplIGV2ZW50cyAxMCBwL3NcbiAgICAgICAgaWYgKCF0aGlzLnJlc2l6ZVRocm90dGxlSWRfKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZVRocm90dGxlSWRfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzaXplVGhyb3R0bGVJZF8gPSBJTklUSUFMX1ZBTFVFO1xuICAgICAgICAgICAgICAgIF90aGlzLnRocm90dGxlZFJlc2l6ZUhhbmRsZXJfKCk7XG4gICAgICAgICAgICB9LCBudW1iZXJzLkRFQk9VTkNFX1RIUk9UVExFX1JFU0laRV9USU1FX01TKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQ3VycmVudGx5QmVpbmdSZXNpemVkXyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZURlYm91bmNlSWRfKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVEZWJvdW5jZUlkXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNpemVEZWJvdW5jZUlkXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsKCk7XG4gICAgICAgICAgICBfdGhpcy5pc0N1cnJlbnRseUJlaW5nUmVzaXplZF8gPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLnJlc2l6ZURlYm91bmNlSWRfID0gSU5JVElBTF9WQUxVRTtcbiAgICAgICAgfSwgbnVtYmVycy5ERUJPVU5DRV9USFJPVFRMRV9SRVNJWkVfVElNRV9NUyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgdGhlIERPTSBuZWVkcyB0byB1cGRhdGUuXG4gICAgICovXG4gICAgTURDVG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuY2hlY2tGb3JVcGRhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2Zmc2NyZWVuQm91bmRhcnlUb3AgPSAtdGhpcy50b3BBcHBCYXJIZWlnaHRfO1xuICAgICAgICB2YXIgaGFzQW55UGl4ZWxzT2Zmc2NyZWVuID0gdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyA8IDA7XG4gICAgICAgIHZhciBoYXNBbnlQaXhlbHNPbnNjcmVlbiA9IHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPiBvZmZzY3JlZW5Cb3VuZGFyeVRvcDtcbiAgICAgICAgdmFyIHBhcnRpYWxseVNob3dpbmcgPSBoYXNBbnlQaXhlbHNPZmZzY3JlZW4gJiYgaGFzQW55UGl4ZWxzT25zY3JlZW47XG4gICAgICAgIC8vIElmIGl0J3MgcGFydGlhbGx5IHNob3dpbmcsIGl0IGNhbid0IGJlIGRvY2tlZC5cbiAgICAgICAgaWYgKHBhcnRpYWxseVNob3dpbmcpIHtcbiAgICAgICAgICAgIHRoaXMud2FzRG9ja2VkXyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm90IHByZXZpb3VzbHkgZG9ja2VkIGFuZCBub3QgcGFydGlhbGx5IHNob3dpbmcsIGl0J3Mgbm93IGRvY2tlZC5cbiAgICAgICAgICAgIGlmICghdGhpcy53YXNEb2NrZWRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YXNEb2NrZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNEb2NrZWRTaG93aW5nXyAhPT0gaGFzQW55UGl4ZWxzT25zY3JlZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRG9ja2VkU2hvd2luZ18gPSBoYXNBbnlQaXhlbHNPbnNjcmVlbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFydGlhbGx5U2hvd2luZztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIG1vdmUgdGhlIHRvcCBhcHAgYmFyIGlmIG5lZWRlZC5cbiAgICAgKi9cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5tb3ZlVG9wQXBwQmFyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tGb3JVcGRhdGVfKCkpIHtcbiAgICAgICAgICAgIC8vIE9uY2UgdGhlIHRvcCBhcHAgYmFyIGlzIGZ1bGx5IGhpZGRlbiB3ZSB1c2UgdGhlIG1heCBwb3RlbnRpYWwgdG9wIGFwcCBiYXIgaGVpZ2h0IGFzIG91ciBvZmZzZXRcbiAgICAgICAgICAgIC8vIHNvIHRoZSB0b3AgYXBwIGJhciBkb2Vzbid0IHNob3cgaWYgdGhlIHdpbmRvdyByZXNpemVzIGFuZCB0aGUgbmV3IGhlaWdodCA+IHRoZSBvbGQgaGVpZ2h0LlxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF87XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMob2Zmc2V0KSA+PSB0aGlzLnRvcEFwcEJhckhlaWdodF8pIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAtbnVtYmVycy5NQVhfVE9QX0FQUF9CQVJfSEVJR0hUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZSgndG9wJywgb2Zmc2V0ICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRocm90dGxlZCBmdW5jdGlvbiB0aGF0IHVwZGF0ZXMgdGhlIHRvcCBhcHAgYmFyIHNjcm9sbGVkIHZhbHVlcyBpZiB0aGVcbiAgICAgKiB0b3AgYXBwIGJhciBoZWlnaHQgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS50aHJvdHRsZWRSZXNpemVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRIZWlnaHQgPSB0aGlzLmFkYXB0ZXJfLmdldFRvcEFwcEJhckhlaWdodCgpO1xuICAgICAgICBpZiAodGhpcy50b3BBcHBCYXJIZWlnaHRfICE9PSBjdXJyZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLndhc0RvY2tlZF8gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFNpbmNlIHRoZSB0b3AgYXBwIGJhciBoYXMgYSBkaWZmZXJlbnQgaGVpZ2h0IGRlcGVuZGluZyBvbiB0aGUgc2NyZWVuIHdpZHRoLCB0aGlzXG4gICAgICAgICAgICAvLyB3aWxsIGVuc3VyZSB0aGF0IHRoZSB0b3AgYXBwIGJhciByZW1haW5zIGluIHRoZSBjb3JyZWN0IGxvY2F0aW9uIGlmXG4gICAgICAgICAgICAvLyBjb21wbGV0ZWx5IGhpZGRlbiBhbmQgYSByZXNpemUgbWFrZXMgdGhlIHRvcCBhcHAgYmFyIGEgZGlmZmVyZW50IGhlaWdodC5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gLT0gdGhpcy50b3BBcHBCYXJIZWlnaHRfIC0gY3VycmVudEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMudG9wQXBwQmFySGVpZ2h0XyA9IGN1cnJlbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGwoKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUb3BBcHBCYXJGb3VuZGF0aW9uO1xufShNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVG9wQXBwQmFyRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RvcEFwcEJhckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmRcbiAqIGlmIHNvLCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmopIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbihnbG9iYWxPYmopID9cbiAgICAgICAgeyBwYXNzaXZlOiB0cnVlIH0gOlxuICAgICAgICBmYWxzZTtcbn1cbmZ1bmN0aW9uIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbihnbG9iYWxPYmopIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgLy8gU2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXJcbiAgICB2YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBicm93c2VyXG4gICAgICAgICAgICAvLyBhdHRlbXB0cyB0byBhY2Nlc3MgdGhlIHBhc3NpdmUgcHJvcGVydHkuXG4gICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgRk9DVVNfU0VOVElORUxfQ0xBU1MgPSAnbWRjLWRvbS1mb2N1cy1zZW50aW5lbCc7XG4vKipcbiAqIFV0aWxpdHkgdG8gdHJhcCBmb2N1cyBpbiBhIGdpdmVuIHJvb3QgZWxlbWVudCwgZS5nLiBmb3IgbW9kYWwgY29tcG9uZW50cyBzdWNoXG4gKiBhcyBkaWFsb2dzLiBUaGUgcm9vdCBzaG91bGQgaGF2ZSBhdCBsZWFzdCBvbmUgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQsXG4gKiBmb3Igc2V0dGluZyBpbml0aWFsIGZvY3VzIHdoZW4gdHJhcHBpbmcgZm9jdXMuXG4gKiBBbHNvIHRyYWNrcyB0aGUgcHJldmlvdXNseSBmb2N1c2VkIGVsZW1lbnQsIGFuZCByZXN0b3JlcyBmb2N1cyB0byB0aGF0XG4gKiBlbGVtZW50IHdoZW4gcmVsZWFzaW5nIGZvY3VzLlxuICovXG52YXIgRm9jdXNUcmFwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvY3VzVHJhcChyb290LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIC8vIFByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IGJlZm9yZSB0cmFwcGluZyBmb2N1cy5cbiAgICAgICAgdGhpcy5lbEZvY3VzZWRCZWZvcmVUcmFwRm9jdXMgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFwcyBmb2N1cyBpbiBgcm9vdGAuIEFsc28gZm9jdXNlcyBvbiBlaXRoZXIgYGluaXRpYWxGb2N1c0VsYCBpZiBzZXQ7XG4gICAgICogb3RoZXJ3aXNlcyBzZXRzIGluaXRpYWwgZm9jdXMgdG8gdGhlIGZpcnN0IGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50LlxuICAgICAqL1xuICAgIEZvY3VzVHJhcC5wcm90b3R5cGUudHJhcEZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZm9jdXNhYmxlRWxzID0gdGhpcy5nZXRGb2N1c2FibGVFbGVtZW50cyh0aGlzLnJvb3QpO1xuICAgICAgICBpZiAoZm9jdXNhYmxlRWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb2N1c1RyYXA6IEVsZW1lbnQgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgY2hpbGQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbEZvY3VzZWRCZWZvcmVUcmFwRm9jdXMgPVxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA6XG4gICAgICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgdGhpcy53cmFwVGFiRm9jdXModGhpcy5yb290LCBmb2N1c2FibGVFbHMpO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5za2lwSW5pdGlhbEZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzSW5pdGlhbEVsZW1lbnQoZm9jdXNhYmxlRWxzLCB0aGlzLm9wdGlvbnMuaW5pdGlhbEZvY3VzRWwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBmb2N1cyBmcm9tIGByb290YC4gQWxzbyByZXN0b3JlcyBmb2N1cyB0byB0aGUgcHJldmlvdXNseSBmb2N1c2VkXG4gICAgICogZWxlbWVudC5cbiAgICAgKi9cbiAgICBGb2N1c1RyYXAucHJvdG90eXBlLnJlbGVhc2VGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgW10uc2xpY2UuY2FsbCh0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIEZPQ1VTX1NFTlRJTkVMX0NMQVNTKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzZW50aW5lbEVsKSB7XG4gICAgICAgICAgICBzZW50aW5lbEVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2VudGluZWxFbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5lbEZvY3VzZWRCZWZvcmVUcmFwRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMuZWxGb2N1c2VkQmVmb3JlVHJhcEZvY3VzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdyYXBzIHRhYiBmb2N1cyB3aXRoaW4gYGVsYCBieSBhZGRpbmcgdHdvIGhpZGRlbiBzZW50aW5lbCBkaXZzIHdoaWNoIGFyZVxuICAgICAqIHVzZWQgdG8gbWFyayB0aGUgYmVnaW5uaW5nIGFuZCB0aGUgZW5kIG9mIHRoZSB0YWJiYWJsZSByZWdpb24uIFdoZW5cbiAgICAgKiBmb2N1c2VkLCB0aGVzZSBzZW50aW5lbCBlbGVtZW50cyByZWRpcmVjdCBmb2N1cyB0byB0aGUgZmlyc3QvbGFzdFxuICAgICAqIGNoaWxkcmVuIGVsZW1lbnRzIG9mIHRoZSB0YWJiYWJsZSByZWdpb24sIGVuc3VyaW5nIHRoYXQgZm9jdXMgaXMgdHJhcHBlZFxuICAgICAqIHdpdGhpbiB0aGF0IHJlZ2lvbi5cbiAgICAgKi9cbiAgICBGb2N1c1RyYXAucHJvdG90eXBlLndyYXBUYWJGb2N1cyA9IGZ1bmN0aW9uIChlbCwgZm9jdXNhYmxlRWxzKSB7XG4gICAgICAgIHZhciBzZW50aW5lbFN0YXJ0ID0gdGhpcy5jcmVhdGVTZW50aW5lbCgpO1xuICAgICAgICB2YXIgc2VudGluZWxFbmQgPSB0aGlzLmNyZWF0ZVNlbnRpbmVsKCk7XG4gICAgICAgIHNlbnRpbmVsU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZm9jdXNhYmxlRWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb2N1c2FibGVFbHNbZm9jdXNhYmxlRWxzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZW50aW5lbEVuZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChmb2N1c2FibGVFbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvY3VzYWJsZUVsc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZWwuaW5zZXJ0QmVmb3JlKHNlbnRpbmVsU3RhcnQsIGVsLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoc2VudGluZWxFbmQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9jdXNlcyBvbiBgaW5pdGlhbEZvY3VzRWxgIGlmIGRlZmluZWQgYW5kIGEgY2hpbGQgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICAgKiBPdGhlcndpc2UsIGZvY3VzZXMgb24gdGhlIGZpcnN0IGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50IG9mIHRoZSByb290LlxuICAgICAqL1xuICAgIEZvY3VzVHJhcC5wcm90b3R5cGUuZm9jdXNJbml0aWFsRWxlbWVudCA9IGZ1bmN0aW9uIChmb2N1c2FibGVFbHMsIGluaXRpYWxGb2N1c0VsKSB7XG4gICAgICAgIHZhciBmb2N1c0luZGV4ID0gMDtcbiAgICAgICAgaWYgKGluaXRpYWxGb2N1c0VsKSB7XG4gICAgICAgICAgICBmb2N1c0luZGV4ID0gTWF0aC5tYXgoZm9jdXNhYmxlRWxzLmluZGV4T2YoaW5pdGlhbEZvY3VzRWwpLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBmb2N1c2FibGVFbHNbZm9jdXNJbmRleF0uZm9jdXMoKTtcbiAgICB9O1xuICAgIEZvY3VzVHJhcC5wcm90b3R5cGUuZ2V0Rm9jdXNhYmxlRWxlbWVudHMgPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICB2YXIgZm9jdXNhYmxlRWxzID0gW10uc2xpY2UuY2FsbChyb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1thdXRvZm9jdXNdLCBbdGFiaW5kZXhdLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uJykpO1xuICAgICAgICByZXR1cm4gZm9jdXNhYmxlRWxzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHZhciBpc0Rpc2FibGVkT3JIaWRkZW4gPSBlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnIHx8XG4gICAgICAgICAgICAgICAgZWwuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9IG51bGwgfHxcbiAgICAgICAgICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoJ2hpZGRlbicpICE9IG51bGwgfHxcbiAgICAgICAgICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgPT09ICd0cnVlJztcbiAgICAgICAgICAgIHZhciBpc1RhYmJhYmxlQW5kVmlzaWJsZSA9IGVsLnRhYkluZGV4ID49IDAgJiZcbiAgICAgICAgICAgICAgICBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKEZPQ1VTX1NFTlRJTkVMX0NMQVNTKSAmJiAhaXNEaXNhYmxlZE9ySGlkZGVuO1xuICAgICAgICAgICAgdmFyIGlzUHJvZ3JhbW1hdGljYWxseUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGlzVGFiYmFibGVBbmRWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgICAgICAgICAgICAgaXNQcm9ncmFtbWF0aWNhbGx5SGlkZGVuID1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IHN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlzVGFiYmFibGVBbmRWaXNpYmxlICYmICFpc1Byb2dyYW1tYXRpY2FsbHlIaWRkZW47XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRm9jdXNUcmFwLnByb3RvdHlwZS5jcmVhdGVTZW50aW5lbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbnRpbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNlbnRpbmVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAvLyBEb24ndCBhbm5vdW5jZSBpbiBzY3JlZW4gcmVhZGVycy5cbiAgICAgICAgc2VudGluZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIHNlbnRpbmVsLmNsYXNzTGlzdC5hZGQoRk9DVVNfU0VOVElORUxfQ0xBU1MpO1xuICAgICAgICByZXR1cm4gc2VudGluZWw7XG4gICAgfTtcbiAgICByZXR1cm4gRm9jdXNUcmFwO1xufSgpKTtcbmV4cG9ydCB7IEZvY3VzVHJhcCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9jdXMtdHJhcC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBBIFwicG9ueWZpbGxcIiBpcyBhIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBtb2RpZnkgdGhlIGdsb2JhbCBwcm90b3R5cGUgY2hhaW4uXG4gKiBUaGlzIG1ha2VzIHBvbnlmaWxscyBzYWZlciB0aGFuIHRyYWRpdGlvbmFsIHBvbHlmaWxscywgZXNwZWNpYWxseSBmb3IgbGlicmFyaWVzIGxpa2UgTURDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBlbCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbmF0aXZlTWF0Y2hlcyA9IGVsZW1lbnQubWF0Y2hlc1xuICAgICAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuLyoqXG4gKiBVc2VkIHRvIGNvbXB1dGUgdGhlIGVzdGltYXRlZCBzY3JvbGwgd2lkdGggb2YgZWxlbWVudHMuIFdoZW4gYW4gZWxlbWVudCBpc1xuICogaGlkZGVuIGR1ZSB0byBkaXNwbGF5OiBub25lOyBiZWluZyBhcHBsaWVkIHRvIGEgcGFyZW50IGVsZW1lbnQsIHRoZSB3aWR0aCBpc1xuICogcmV0dXJuZWQgYXMgMC4gSG93ZXZlciwgdGhlIGVsZW1lbnQgd2lsbCBoYXZlIGEgdHJ1ZSB3aWR0aCBvbmNlIG5vIGxvbmdlclxuICogaW5zaWRlIGEgZGlzcGxheTogbm9uZSBjb250ZXh0LiBUaGlzIG1ldGhvZCBjb21wdXRlcyBhbiBlc3RpbWF0ZWQgd2lkdGggd2hlblxuICogdGhlIGVsZW1lbnQgaXMgaGlkZGVuIG9yIHJldHVybnMgdGhlIHRydWUgd2lkdGggd2hlbiB0aGUgZWxlbWVudCBpcyB2aXNibGUuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgdGhlIGVsZW1lbnQgd2hvc2Ugd2lkdGggdG8gZXN0aW1hdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzdGltYXRlU2Nyb2xsV2lkdGgoZWxlbWVudCkge1xuICAgIC8vIENoZWNrIHRoZSBvZmZzZXRQYXJlbnQuIElmIHRoZSBlbGVtZW50IGluaGVyaXRzIGRpc3BsYXk6IG5vbmUgZnJvbSBhbnlcbiAgICAvLyBwYXJlbnQsIHRoZSBvZmZzZXRQYXJlbnQgcHJvcGVydHkgd2lsbCBiZSBudWxsIChzZWVcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvb2Zmc2V0UGFyZW50KS5cbiAgICAvLyBUaGlzIGNoZWNrIGVuc3VyZXMgd2Ugb25seSBjbG9uZSB0aGUgbm9kZSB3aGVuIG5lY2Vzc2FyeS5cbiAgICB2YXIgaHRtbEVsID0gZWxlbWVudDtcbiAgICBpZiAoaHRtbEVsLm9mZnNldFBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gaHRtbEVsLnNjcm9sbFdpZHRoO1xuICAgIH1cbiAgICB2YXIgY2xvbmUgPSBodG1sRWwuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNsb25lLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgIGNsb25lLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKC05OTk5cHgsIC05OTk5cHgpJyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICB2YXIgc2Nyb2xsV2lkdGggPSBjbG9uZS5zY3JvbGxXaWR0aDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgIHJldHVybiBzY3JvbGxXaWR0aDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgRklYRURfQ0xBU1M6ICdtZGMtdG9wLWFwcC1iYXItLWZpeGVkJyxcbiAgICBGSVhFRF9TQ1JPTExFRF9DTEFTUzogJ21kYy10b3AtYXBwLWJhci0tZml4ZWQtc2Nyb2xsZWQnLFxuICAgIFNIT1JUX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1zaG9ydCcsXG4gICAgU0hPUlRfQ09MTEFQU0VEX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1zaG9ydC1jb2xsYXBzZWQnLFxuICAgIFNIT1JUX0hBU19BQ1RJT05fSVRFTV9DTEFTUzogJ21kYy10b3AtYXBwLWJhci0tc2hvcnQtaGFzLWFjdGlvbi1pdGVtJyxcbn07XG52YXIgbnVtYmVycyA9IHtcbiAgICBERUJPVU5DRV9USFJPVFRMRV9SRVNJWkVfVElNRV9NUzogMTAwLFxuICAgIE1BWF9UT1BfQVBQX0JBUl9IRUlHSFQ6IDEyOCxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBQ1RJT05fSVRFTV9TRUxFQ1RPUjogJy5tZGMtdG9wLWFwcC1iYXJfX2FjdGlvbi1pdGVtJyxcbiAgICBOQVZJR0FUSU9OX0VWRU5UOiAnTURDVG9wQXBwQmFyOm5hdicsXG4gICAgTkFWSUdBVElPTl9JQ09OX1NFTEVDVE9SOiAnLm1kYy10b3AtYXBwLWJhcl9fbmF2aWdhdGlvbi1pY29uJyxcbiAgICBST09UX1NFTEVDVE9SOiAnLm1kYy10b3AtYXBwLWJhcicsXG4gICAgVElUTEVfU0VMRUNUT1I6ICcubWRjLXRvcC1hcHAtYmFyX190aXRsZScsXG59O1xuZXhwb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZml4ZWQvZm91bmRhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3Nob3J0L2ZvdW5kYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zdGFuZGFyZC9mb3VuZGF0aW9uJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvXG4gKiBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICovXG52YXIgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XG4gICAgdmFyIENTUyA9IHdpbmRvd09iai5DU1M7XG4gICAgdmFyIHN1cHBvcnRzQ3NzVmFycyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICB9XG4gICAgdmFyIHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gQ1NTICYmIHR5cGVvZiBDU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gICAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAgIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gICAgdmFyIHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChDU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICAgICAgQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKSk7XG4gICAgc3VwcG9ydHNDc3NWYXJzID1cbiAgICAgICAgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXM7XG4gICAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJzO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldnQsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgICBpZiAoIWV2dCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIHZhciB4ID0gcGFnZU9mZnNldC54LCB5ID0gcGFnZU9mZnNldC55O1xuICAgIHZhciBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICAgIHZhciBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG4gICAgdmFyIG5vcm1hbGl6ZWRYO1xuICAgIHZhciBub3JtYWxpemVkWTtcbiAgICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gICAgaWYgKGV2dC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgdmFyIHRvdWNoRXZlbnQgPSBldnQ7XG4gICAgICAgIG5vcm1hbGl6ZWRYID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICAgICAgbm9ybWFsaXplZFkgPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBldnQ7XG4gICAgICAgIG5vcm1hbGl6ZWRYID0gbW91c2VFdmVudC5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICAgICAgbm9ybWFsaXplZFkgPSBtb3VzZUV2ZW50LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICAgIH1cbiAgICByZXR1cm4geyB4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFkgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQge0F0dHJpYnV0ZUNvbW1pdHRlciwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyfSBmcm9tICcuL3BhcnRzLmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBQYXJ0cyB3aGVuIGEgdGVtcGxhdGUgaXMgaW5zdGFudGlhdGVkLlxuICovXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yIGltcGxlbWVudHMgVGVtcGxhdGVQcm9jZXNzb3Ige1xuICAvKipcbiAgICogQ3JlYXRlIHBhcnRzIGZvciBhbiBhdHRyaWJ1dGUtcG9zaXRpb24gYmluZGluZywgZ2l2ZW4gdGhlIGV2ZW50LCBhdHRyaWJ1dGVcbiAgICogbmFtZSwgYW5kIHN0cmluZyBsaXRlcmFscy5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgYmluZGluZ1xuICAgKiBAcGFyYW0gbmFtZSAgVGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSBzdHJpbmdzIFRoZSBzdHJpbmcgbGl0ZXJhbHMuIFRoZXJlIGFyZSBhbHdheXMgYXQgbGVhc3QgdHdvIHN0cmluZ3MsXG4gICAqICAgZXZlbnQgZm9yIGZ1bGx5LWNvbnRyb2xsZWQgYmluZGluZ3Mgd2l0aCBhIHNpbmdsZSBleHByZXNzaW9uLlxuICAgKi9cbiAgaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMoXG4gICAgICBlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdLFxuICAgICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucyk6IFJlYWRvbmx5QXJyYXk8UGFydD4ge1xuICAgIGNvbnN0IHByZWZpeCA9IG5hbWVbMF07XG4gICAgaWYgKHByZWZpeCA9PT0gJy4nKSB7XG4gICAgICBjb25zdCBjb21taXR0ZXIgPSBuZXcgUHJvcGVydHlDb21taXR0ZXIoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyk7XG4gICAgICByZXR1cm4gY29tbWl0dGVyLnBhcnRzO1xuICAgIH1cbiAgICBpZiAocHJlZml4ID09PSAnQCcpIHtcbiAgICAgIHJldHVybiBbbmV3IEV2ZW50UGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBvcHRpb25zLmV2ZW50Q29udGV4dCldO1xuICAgIH1cbiAgICBpZiAocHJlZml4ID09PSAnPycpIHtcbiAgICAgIHJldHVybiBbbmV3IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpXTtcbiAgICB9XG4gICAgY29uc3QgY29tbWl0dGVyID0gbmV3IEF0dHJpYnV0ZUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICByZXR1cm4gY29tbWl0dGVyLnBhcnRzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgcGFydHMgZm9yIGEgdGV4dC1wb3NpdGlvbiBiaW5kaW5nLlxuICAgKiBAcGFyYW0gdGVtcGxhdGVGYWN0b3J5XG4gICAqL1xuICBoYW5kbGVUZXh0RXhwcmVzc2lvbihvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlUGFydChvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yID0gbmV3IERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvcigpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSBuZXcgV2Vha01hcDxvYmplY3QsIHRydWU+KCk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgdHlwZSBEaXJlY3RpdmVGYWN0b3J5ID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBvYmplY3Q7XG5cbmV4cG9ydCB0eXBlIERpcmVjdGl2ZUZuID0gKHBhcnQ6IFBhcnQpID0+IHZvaWQ7XG5cbi8qKlxuICogQnJhbmRzIGEgZnVuY3Rpb24gYXMgYSBkaXJlY3RpdmUgZmFjdG9yeSBmdW5jdGlvbiBzbyB0aGF0IGxpdC1odG1sIHdpbGwgY2FsbFxuICogdGhlIGZ1bmN0aW9uIGR1cmluZyB0ZW1wbGF0ZSByZW5kZXJpbmcsIHJhdGhlciB0aGFuIHBhc3NpbmcgYXMgYSB2YWx1ZS5cbiAqXG4gKiBBIF9kaXJlY3RpdmVfIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIFBhcnQgYXMgYW4gYXJndW1lbnQuIEl0IGhhcyB0aGVcbiAqIHNpZ25hdHVyZTogYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC5cbiAqXG4gKiBBIGRpcmVjdGl2ZSBfZmFjdG9yeV8gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFyZ3VtZW50cyBmb3IgZGF0YSBhbmRcbiAqIGNvbmZpZ3VyYXRpb24gYW5kIHJldHVybnMgYSBkaXJlY3RpdmUuIFVzZXJzIG9mIGRpcmVjdGl2ZSB1c3VhbGx5IHJlZmVyIHRvXG4gKiB0aGUgZGlyZWN0aXZlIGZhY3RvcnkgYXMgdGhlIGRpcmVjdGl2ZS4gRm9yIGV4YW1wbGUsIFwiVGhlIHJlcGVhdCBkaXJlY3RpdmVcIi5cbiAqXG4gKiBVc3VhbGx5IGEgdGVtcGxhdGUgYXV0aG9yIHdpbGwgaW52b2tlIGEgZGlyZWN0aXZlIGZhY3RvcnkgaW4gdGhlaXIgdGVtcGxhdGVcbiAqIHdpdGggcmVsZXZhbnQgYXJndW1lbnRzLCB3aGljaCB3aWxsIHRoZW4gcmV0dXJuIGEgZGlyZWN0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEhlcmUncyBhbiBleGFtcGxlIG9mIHVzaW5nIHRoZSBgcmVwZWF0KClgIGRpcmVjdGl2ZSBmYWN0b3J5IHRoYXQgdGFrZXMgYW5cbiAqIGFycmF5IGFuZCBhIGZ1bmN0aW9uIHRvIHJlbmRlciBhbiBpdGVtOlxuICpcbiAqIGBgYGpzXG4gKiBodG1sYDx1bD48JHtyZXBlYXQoaXRlbXMsIChpdGVtKSA9PiBodG1sYDxsaT4ke2l0ZW19PC9saT5gKX08L3VsPmBcbiAqIGBgYFxuICpcbiAqIFdoZW4gYHJlcGVhdGAgaXMgaW52b2tlZCwgaXQgcmV0dXJucyBhIGRpcmVjdGl2ZSBmdW5jdGlvbiB0aGF0IGNsb3NlcyBvdmVyXG4gKiBgaXRlbXNgIGFuZCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24uIFdoZW4gdGhlIG91dGVyIHRlbXBsYXRlIGlzIHJlbmRlcmVkLCB0aGVcbiAqIHJldHVybiBkaXJlY3RpdmUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIFBhcnQgZm9yIHRoZSBleHByZXNzaW9uLlxuICogYHJlcGVhdGAgdGhlbiBwZXJmb3JtcyBpdCdzIGN1c3RvbSBsb2dpYyB0byByZW5kZXIgbXVsdGlwbGUgaXRlbXMuXG4gKlxuICogQHBhcmFtIGYgVGhlIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uLiBNdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIGZ1bmN0aW9uIG9mIHRoZSBzaWduYXR1cmUgYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC4gVGhlIHJldHVybmVkIGZ1bmN0aW9uIHdpbGxcbiAqIGJlIGNhbGxlZCB3aXRoIHRoZSBwYXJ0IG9iamVjdC5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCB7ZGlyZWN0aXZlLCBodG1sfSBmcm9tICdsaXQtaHRtbCc7XG4gKlxuICogY29uc3QgaW1tdXRhYmxlID0gZGlyZWN0aXZlKCh2KSA9PiAocGFydCkgPT4ge1xuICogICBpZiAocGFydC52YWx1ZSAhPT0gdikge1xuICogICAgIHBhcnQuc2V0VmFsdWUodilcbiAqICAgfVxuICogfSk7XG4gKi9cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmUgPSA8RiBleHRlbmRzIERpcmVjdGl2ZUZhY3Rvcnk+KGY6IEYpOiBGID0+XG4gICAgKCguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgIGNvbnN0IGQgPSBmKC4uLmFyZ3MpO1xuICAgICAgZGlyZWN0aXZlcy5zZXQoZCwgdHJ1ZSk7XG4gICAgICByZXR1cm4gZDtcbiAgICB9KSBhcyBGO1xuXG5leHBvcnQgY29uc3QgaXNEaXJlY3RpdmUgPSAobzogdW5rbm93bik6IG8gaXMgRGlyZWN0aXZlRm4gPT4ge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdmdW5jdGlvbicgJiYgZGlyZWN0aXZlcy5oYXMobyk7XG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbnRlcmZhY2UgTWF5YmVQb2x5ZmlsbGVkQ2UgZXh0ZW5kcyBDdXN0b21FbGVtZW50UmVnaXN0cnkge1xuICByZWFkb25seSBwb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrPzogb2JqZWN0O1xufVxuXG4vKipcbiAqIFRydWUgaWYgdGhlIGN1c3RvbSBlbGVtZW50cyBwb2x5ZmlsbCBpcyBpbiB1c2UuXG4gKi9cbmV4cG9ydCBjb25zdCBpc0NFUG9seWZpbGwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cyAhPSBudWxsICYmXG4gICAgKHdpbmRvdy5jdXN0b21FbGVtZW50cyBhcyBNYXliZVBvbHlmaWxsZWRDZSkucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayAhPT1cbiAgICAgICAgdW5kZWZpbmVkO1xuXG4vKipcbiAqIFJlcGFyZW50cyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnRgIChpbmNsdXNpdmUpIHRvIGBlbmRgIChleGNsdXNpdmUpLFxuICogaW50byBhbm90aGVyIGNvbnRhaW5lciAoY291bGQgYmUgdGhlIHNhbWUgY29udGFpbmVyKSwgYmVmb3JlIGBiZWZvcmVgLiBJZlxuICogYGJlZm9yZWAgaXMgbnVsbCwgaXQgYXBwZW5kcyB0aGUgbm9kZXMgdG8gdGhlIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGFyZW50Tm9kZXMgPVxuICAgIChjb250YWluZXI6IE5vZGUsXG4gICAgIHN0YXJ0OiBOb2RlfG51bGwsXG4gICAgIGVuZDogTm9kZXxudWxsID0gbnVsbCxcbiAgICAgYmVmb3JlOiBOb2RlfG51bGwgPSBudWxsKTogdm9pZCA9PiB7XG4gICAgICB3aGlsZSAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gc3RhcnQhLm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHN0YXJ0ISwgYmVmb3JlKTtcbiAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgfVxuICAgIH07XG5cbi8qKlxuICogUmVtb3ZlcyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnRgIChpbmNsdXNpdmUpIHRvIGBlbmRgIChleGNsdXNpdmUpLCBmcm9tXG4gKiBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID1cbiAgICAoY29udGFpbmVyOiBOb2RlLCBzdGFydDogTm9kZXxudWxsLCBlbmQ6IE5vZGV8bnVsbCA9IG51bGwpOiB2b2lkID0+IHtcbiAgICAgIHdoaWxlIChzdGFydCAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBzdGFydCEubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzdGFydCEpO1xuICAgICAgICBzdGFydCA9IG47XG4gICAgICB9XG4gICAgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuLyoqXG4gKiBUaGUgUGFydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGR5bmFtaWMgcGFydCBvZiBhIHRlbXBsYXRlIGluc3RhbmNlIHJlbmRlcmVkXG4gKiBieSBsaXQtaHRtbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJ0IHtcbiAgcmVhZG9ubHkgdmFsdWU6IHVua25vd247XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgcGFydCB2YWx1ZSwgYnV0IGRvZXMgbm90IHdyaXRlIGl0IHRvIHRoZSBET00uXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCB3aWxsIGJlIGNvbW1pdHRlZC5cbiAgICovXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZDtcblxuICAvKipcbiAgICogQ29tbWl0cyB0aGUgY3VycmVudCBwYXJ0IHZhbHVlLCBjYXVzaW5nIGl0IHRvIGFjdHVhbGx5IGJlIHdyaXR0ZW4gdG8gdGhlXG4gICAqIERPTS5cbiAgICpcbiAgICogRGlyZWN0aXZlcyBhcmUgcnVuIGF0IHRoZSBzdGFydCBvZiBgY29tbWl0YCwgc28gdGhhdCBpZiB0aGV5IGNhbGxcbiAgICogYHBhcnQuc2V0VmFsdWUoLi4uKWAgc3luY2hyb25vdXNseSB0aGF0IHZhbHVlIHdpbGwgYmUgdXNlZCBpbiB0aGUgY3VycmVudFxuICAgKiBjb21taXQsIGFuZCB0aGVyZSdzIG5vIG5lZWQgdG8gY2FsbCBgcGFydC5jb21taXQoKWAgd2l0aGluIHRoZSBkaXJlY3RpdmUuXG4gICAqIElmIGRpcmVjdGl2ZXMgc2V0IGEgcGFydCB2YWx1ZSBhc3luY2hyb25vdXNseSwgdGhlbiB0aGV5IG11c3QgY2FsbFxuICAgKiBgcGFydC5jb21taXQoKWAgbWFudWFsbHkuXG4gICAqL1xuICBjb21taXQoKTogdm9pZDtcbn1cblxuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0ge307XG5cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgYSBOb2RlUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSB7fTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtpc0RpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtub0NoYW5nZSwgbm90aGluZywgUGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHtjcmVhdGVNYXJrZXJ9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10eXBlb2Ytb3BlcmF0b3JcbmV4cG9ydCB0eXBlIFByaW1pdGl2ZSA9IG51bGx8dW5kZWZpbmVkfGJvb2xlYW58bnVtYmVyfHN0cmluZ3xzeW1ib2x8YmlnaW50O1xuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgUHJpbWl0aXZlID0+IHtcbiAgcmV0dXJuIChcbiAgICAgIHZhbHVlID09PSBudWxsIHx8XG4gICAgICAhKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSk7XG59O1xuZXhwb3J0IGNvbnN0IGlzSXRlcmFibGUgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBJdGVyYWJsZTx1bmtub3duPiA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSB8fFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICEhKHZhbHVlICYmICh2YWx1ZSBhcyBhbnkpW1N5bWJvbC5pdGVyYXRvcl0pO1xufTtcblxuLyoqXG4gKiBXcml0ZXMgYXR0cmlidXRlIHZhbHVlcyB0byB0aGUgRE9NIGZvciBhIGdyb3VwIG9mIEF0dHJpYnV0ZVBhcnRzIGJvdW5kIHRvIGFcbiAqIHNpbmdsZSBhdHRyaWJ1dGUuIFRoZSB2YWx1ZSBpcyBvbmx5IHNldCBvbmNlIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzXG4gKiBmb3IgYW4gYXR0cmlidXRlLlxuICovXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgcmVhZG9ubHkgZWxlbWVudDogRWxlbWVudDtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIHJlYWRvbmx5IHBhcnRzOiBSZWFkb25seUFycmF5PEF0dHJpYnV0ZVBhcnQ+O1xuICBkaXJ0eSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz4pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB0aGlzLnBhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgKHRoaXMucGFydHMgYXMgQXR0cmlidXRlUGFydFtdKVtpXSA9IHRoaXMuX2NyZWF0ZVBhcnQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHNpbmdsZSBwYXJ0LiBPdmVycmlkZSB0aGlzIHRvIGNyZWF0ZSBhIGRpZmZlcm50IHR5cGUgb2YgcGFydC5cbiAgICovXG4gIHByb3RlY3RlZCBfY3JlYXRlUGFydCgpOiBBdHRyaWJ1dGVQYXJ0IHtcbiAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFZhbHVlKCk6IHVua25vd24ge1xuICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLnN0cmluZ3M7XG4gICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICBsZXQgdGV4dCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRleHQgKz0gc3RyaW5nc1tpXTtcbiAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2ldO1xuICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB2ID0gcGFydC52YWx1ZTtcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHYpIHx8ICFpc0l0ZXJhYmxlKHYpKSB7XG4gICAgICAgICAgdGV4dCArPSB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyB2IDogU3RyaW5nKHYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAoY29uc3QgdCBvZiB2KSB7XG4gICAgICAgICAgICB0ZXh0ICs9IHR5cGVvZiB0ID09PSAnc3RyaW5nJyA/IHQgOiBTdHJpbmcodCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGV4dCArPSBzdHJpbmdzW2xdO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgY29tbWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgdGhpcy5fZ2V0VmFsdWUoKSBhcyBzdHJpbmcpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEEgUGFydCB0aGF0IGNvbnRyb2xzIGFsbCBvciBwYXJ0IG9mIGFuIGF0dHJpYnV0ZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZVBhcnQgaW1wbGVtZW50cyBQYXJ0IHtcbiAgcmVhZG9ubHkgY29tbWl0dGVyOiBBdHRyaWJ1dGVDb21taXR0ZXI7XG4gIHZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGNvbW1pdHRlcjogQXR0cmlidXRlQ29tbWl0dGVyKSB7XG4gICAgdGhpcy5jb21taXR0ZXIgPSBjb21taXR0ZXI7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAhPT0gbm9DaGFuZ2UgJiYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHwgdmFsdWUgIT09IHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYSBub3QgYSBkaXJlY3RpdmUsIGRpcnR5IHRoZSBjb21taXR0ZXIgc28gdGhhdCBpdCdsbFxuICAgICAgLy8gY2FsbCBzZXRBdHRyaWJ1dGUuIElmIHRoZSB2YWx1ZSBpcyBhIGRpcmVjdGl2ZSwgaXQnbGwgZGlydHkgdGhlXG4gICAgICAvLyBjb21taXR0ZXIgaWYgaXQgY2FsbHMgc2V0VmFsdWUoKS5cbiAgICAgIGlmICghaXNEaXJlY3RpdmUodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY29tbWl0dGVyLmRpcnR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb21taXR0ZXIuY29tbWl0KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIFBhcnQgdGhhdCBjb250cm9scyBhIGxvY2F0aW9uIHdpdGhpbiBhIE5vZGUgdHJlZS4gTGlrZSBhIFJhbmdlLCBOb2RlUGFydFxuICogaGFzIHN0YXJ0IGFuZCBlbmQgbG9jYXRpb25zIGFuZCBjYW4gc2V0IGFuZCB1cGRhdGUgdGhlIE5vZGVzIGJldHdlZW4gdGhvc2VcbiAqIGxvY2F0aW9ucy5cbiAqXG4gKiBOb2RlUGFydHMgc3VwcG9ydCBzZXZlcmFsIHZhbHVlIHR5cGVzOiBwcmltaXRpdmVzLCBOb2RlcywgVGVtcGxhdGVSZXN1bHRzLFxuICogYXMgd2VsbCBhcyBhcnJheXMgYW5kIGl0ZXJhYmxlcyBvZiB0aG9zZSB0eXBlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIHJlYWRvbmx5IG9wdGlvbnM6IFJlbmRlck9wdGlvbnM7XG4gIHN0YXJ0Tm9kZSE6IE5vZGU7XG4gIGVuZE5vZGUhOiBOb2RlO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfX3BlbmRpbmdWYWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoaXMgcGFydCBpbnRvIGEgY29udGFpbmVyLlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGFwcGVuZEludG8oY29udGFpbmVyOiBOb2RlKSB7XG4gICAgdGhpcy5zdGFydE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICAgIHRoaXMuZW5kTm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYWZ0ZXIgdGhlIGByZWZgIG5vZGUgKGJldHdlZW4gYHJlZmAgYW5kIGByZWZgJ3MgbmV4dFxuICAgKiBzaWJsaW5nKS4gQm90aCBgcmVmYCBhbmQgaXRzIG5leHQgc2libGluZyBtdXN0IGJlIHN0YXRpYywgdW5jaGFuZ2luZyBub2Rlc1xuICAgKiBzdWNoIGFzIHRob3NlIHRoYXQgYXBwZWFyIGluIGEgbGl0ZXJhbCBzZWN0aW9uIG9mIGEgdGVtcGxhdGUuXG4gICAqXG4gICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgKi9cbiAgaW5zZXJ0QWZ0ZXJOb2RlKHJlZjogTm9kZSkge1xuICAgIHRoaXMuc3RhcnROb2RlID0gcmVmO1xuICAgIHRoaXMuZW5kTm9kZSA9IHJlZi5uZXh0U2libGluZyE7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIHBhcmVudCBwYXJ0LlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGFwcGVuZEludG9QYXJ0KHBhcnQ6IE5vZGVQYXJ0KSB7XG4gICAgcGFydC5fX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICBwYXJ0Ll9faW5zZXJ0KHRoaXMuZW5kTm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIHRoaXMgcGFydCBhZnRlciB0aGUgYHJlZmAgcGFydC5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBpbnNlcnRBZnRlclBhcnQocmVmOiBOb2RlUGFydCkge1xuICAgIHJlZi5fX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICB0aGlzLmVuZE5vZGUgPSByZWYuZW5kTm9kZTtcbiAgICByZWYuZW5kTm9kZSA9IHRoaXMuc3RhcnROb2RlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgaWYgKHRoaXMuc3RhcnROb2RlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5fX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgdGhpcy5fX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgdGhpcy5fX2NvbW1pdE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX19jb21taXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgdGhpcy52YWx1ZSA9IG5vdGhpbmc7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICB0aGlzLl9fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfX2luc2VydChub2RlOiBOb2RlKSB7XG4gICAgdGhpcy5lbmROb2RlLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmVuZE5vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfX2NvbW1pdE5vZGUodmFsdWU6IE5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuX19pbnNlcnQodmFsdWUpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX19jb21taXRUZXh0KHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhcnROb2RlLm5leHRTaWJsaW5nITtcbiAgICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIC8vIElmIGB2YWx1ZWAgaXNuJ3QgYWxyZWFkeSBhIHN0cmluZywgd2UgZXhwbGljaXRseSBjb252ZXJ0IGl0IGhlcmUgaW4gY2FzZVxuICAgIC8vIGl0IGNhbid0IGJlIGltcGxpY2l0bHkgY29udmVydGVkIC0gaS5lLiBpdCdzIGEgc3ltYm9sLlxuICAgIGNvbnN0IHZhbHVlQXNTdHJpbmc6IHN0cmluZyA9XG4gICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSk7XG4gICAgaWYgKG5vZGUgPT09IHRoaXMuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcgJiZcbiAgICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgLy8gSWYgd2Ugb25seSBoYXZlIGEgc2luZ2xlIHRleHQgbm9kZSBiZXR3ZWVuIHRoZSBtYXJrZXJzLCB3ZSBjYW4ganVzdFxuICAgICAgLy8gc2V0IGl0cyB2YWx1ZSwgcmF0aGVyIHRoYW4gcmVwbGFjaW5nIGl0LlxuICAgICAgLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogQ2FuIHdlIGp1c3QgY2hlY2sgaWYgdGhpcy52YWx1ZSBpcyBwcmltaXRpdmU/XG4gICAgICAobm9kZSBhcyBUZXh0KS5kYXRhID0gdmFsdWVBc1N0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fX2NvbW1pdE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWVBc1N0cmluZykpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWU6IFRlbXBsYXRlUmVzdWx0KTogdm9pZCB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMudGVtcGxhdGVGYWN0b3J5KHZhbHVlKTtcbiAgICBpZiAodGhpcy52YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlSW5zdGFuY2UgJiZcbiAgICAgICAgdGhpcy52YWx1ZS50ZW1wbGF0ZSA9PT0gdGVtcGxhdGUpIHtcbiAgICAgIHRoaXMudmFsdWUudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBwcm9wYWdhdGUgdGhlIHRlbXBsYXRlIHByb2Nlc3NvciBmcm9tIHRoZSBUZW1wbGF0ZVJlc3VsdFxuICAgICAgLy8gc28gdGhhdCB3ZSB1c2UgaXRzIHN5bnRheCBleHRlbnNpb24sIGV0Yy4gVGhlIHRlbXBsYXRlIGZhY3RvcnkgY29tZXNcbiAgICAgIC8vIGZyb20gdGhlIHJlbmRlciBmdW5jdGlvbiBvcHRpb25zIHNvIHRoYXQgaXQgY2FuIGNvbnRyb2wgdGVtcGxhdGVcbiAgICAgIC8vIGNhY2hpbmcgYW5kIHByZXByb2Nlc3NpbmcuXG4gICAgICBjb25zdCBpbnN0YW5jZSA9XG4gICAgICAgICAgbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHZhbHVlLnByb2Nlc3NvciwgdGhpcy5vcHRpb25zKTtcbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgICBpbnN0YW5jZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICAgIHRoaXMuX19jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgIHRoaXMudmFsdWUgPSBpbnN0YW5jZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9fY29tbWl0SXRlcmFibGUodmFsdWU6IEl0ZXJhYmxlPHVua25vd24+KTogdm9pZCB7XG4gICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuXG4gICAgLy8gSWYgX3ZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgLy8gaXRlcmFibGUgYW5kIF92YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIE5vZGVQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgIC8vIHJlbmRlci4gSWYgX3ZhbHVlIGlzIG5vdCBhbiBhcnJheSwgY2xlYXIgdGhpcyBwYXJ0IGFuZCBtYWtlIGEgbmV3XG4gICAgLy8gYXJyYXkgZm9yIE5vZGVQYXJ0cy5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy52YWx1ZSBhcyBOb2RlUGFydFtdO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGxldCBpdGVtUGFydDogTm9kZVBhcnR8dW5kZWZpbmVkO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAvLyBUcnkgdG8gcmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcblxuICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgaWYgKGl0ZW1QYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaXRlbVBhcnQgPSBuZXcgTm9kZVBhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgICAgaXRlbVBhcnRzLnB1c2goaXRlbVBhcnQpO1xuICAgICAgICBpZiAocGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgaXRlbVBhcnQuYXBwZW5kSW50b1BhcnQodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVBhcnQuaW5zZXJ0QWZ0ZXJQYXJ0KGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGl0ZW1QYXJ0LnNldFZhbHVlKGl0ZW0pO1xuICAgICAgaXRlbVBhcnQuY29tbWl0KCk7XG4gICAgICBwYXJ0SW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF92YWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgIHRoaXMuY2xlYXIoaXRlbVBhcnQgJiYgaXRlbVBhcnQuZW5kTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoc3RhcnROb2RlOiBOb2RlID0gdGhpcy5zdGFydE5vZGUpIHtcbiAgICByZW1vdmVOb2RlcyhcbiAgICAgICAgdGhpcy5zdGFydE5vZGUucGFyZW50Tm9kZSEsIHN0YXJ0Tm9kZS5uZXh0U2libGluZyEsIHRoaXMuZW5kTm9kZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICByZWFkb25seSBlbGVtZW50OiBFbGVtZW50O1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHN0cmluZ3M6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfX3BlbmRpbmdWYWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHJlYWRvbmx5IHN0cmluZ1tdKSB7XG4gICAgaWYgKHN0cmluZ3MubGVuZ3RoICE9PSAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0Jvb2xlYW4gYXR0cmlidXRlcyBjYW4gb25seSBjb250YWluIGEgc2luZ2xlIGV4cHJlc3Npb24nKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbW1pdCgpIHtcbiAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9ICEhdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIFByb3BlcnR5UGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIElmIGFuIGV4cHJlc3Npb24gY29udHJvbHMgdGhlIHdob2xlIHByb3BlcnR5IHZhbHVlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0eSB1bmRlciBjb250cm9sLiBJZiB0aGVyZSBhcmUgc3RyaW5nIGxpdGVyYWxzIG9yXG4gKiBtdWx0aXBsZSBleHByZXNzaW9ucywgdGhlbiB0aGUgc3RyaW5ncyBhcmUgZXhwcmVzc2lvbnMgYXJlIGludGVycG9sYXRlZCBpbnRvXG4gKiBhIHN0cmluZyBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q29tbWl0dGVyIGV4dGVuZHMgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgcmVhZG9ubHkgc2luZ2xlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogUmVhZG9ubHlBcnJheTxzdHJpbmc+KSB7XG4gICAgc3VwZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgdGhpcy5zaW5nbGUgPVxuICAgICAgICAoc3RyaW5ncy5sZW5ndGggPT09IDIgJiYgc3RyaW5nc1swXSA9PT0gJycgJiYgc3RyaW5nc1sxXSA9PT0gJycpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jcmVhdGVQYXJ0KCk6IFByb3BlcnR5UGFydCB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVBhcnQodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFZhbHVlKCkge1xuICAgIGlmICh0aGlzLnNpbmdsZSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFydHNbMF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIGNvbW1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICh0aGlzLmVsZW1lbnQgYXMgYW55KVt0aGlzLm5hbWVdID0gdGhpcy5fZ2V0VmFsdWUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge31cblxuLy8gRGV0ZWN0IGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgc3VwcG9ydC4gSWYgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eSBpcyByZWFkXG4vLyBmcm9tIHRoZSBvcHRpb25zIG9iamVjdCwgdGhlbiBvcHRpb25zIGFyZSBzdXBwb3J0ZWQuIElmIG5vdCwgdGhlbiB0aGUgdGhpcmRcbi8vIGFyZ3VtZW50IHRvIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyIGlzIGludGVycHJldGVkIGFzIHRoZSBib29sZWFuIGNhcHR1cmVcbi8vIHZhbHVlIHNvIHdlIHNob3VsZCBvbmx5IHBhc3MgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eS5cbmxldCBldmVudE9wdGlvbnNTdXBwb3J0ZWQgPSBmYWxzZTtcblxuLy8gV3JhcCBpbnRvIGFuIElJRkUgYmVjYXVzZSBNUyBFZGdlIDw9IHY0MSBkb2VzIG5vdCBzdXBwb3J0IGhhdmluZyB0cnkvY2F0Y2hcbi8vIGJsb2NrcyByaWdodCBpbnRvIHRoZSBib2R5IG9mIGEgbW9kdWxlXG4oKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBnZXQgY2FwdHVyZSgpIHtcbiAgICAgICAgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMgYXMgYW55LCBvcHRpb25zKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucyBhcyBhbnksIG9wdGlvbnMpO1xuICB9IGNhdGNoIChfZSkge1xuICAgIC8vIGV2ZW50IG9wdGlvbnMgbm90IHN1cHBvcnRlZFxuICB9XG59KSgpO1xuXG50eXBlIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zID1cbiAgICBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0JlBhcnRpYWw8QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM+O1xuZXhwb3J0IGNsYXNzIEV2ZW50UGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICByZWFkb25seSBlbGVtZW50OiBFbGVtZW50O1xuICByZWFkb25seSBldmVudE5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgZXZlbnRDb250ZXh0PzogRXZlbnRUYXJnZXQ7XG4gIHZhbHVlOiB1bmRlZmluZWR8RXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX19vcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM7XG4gIHByaXZhdGUgX19wZW5kaW5nVmFsdWU6IHVuZGVmaW5lZHxFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSByZWFkb25seSBfX2JvdW5kSGFuZGxlRXZlbnQ6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50Q29udGV4dD86IEV2ZW50VGFyZ2V0KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICB0aGlzLmV2ZW50Q29udGV4dCA9IGV2ZW50Q29udGV4dDtcbiAgICB0aGlzLl9fYm91bmRIYW5kbGVFdmVudCA9IChlKSA9PiB0aGlzLmhhbmRsZUV2ZW50KGUpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVuZGVmaW5lZHxFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbW1pdCgpIHtcbiAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2UgYXMgRXZlbnRIYW5kbGVyV2l0aE9wdGlvbnM7XG4gICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0xpc3RlbmVyID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICBjb25zdCBvbGRMaXN0ZW5lciA9IHRoaXMudmFsdWU7XG4gICAgY29uc3Qgc2hvdWxkUmVtb3ZlTGlzdGVuZXIgPSBuZXdMaXN0ZW5lciA9PSBudWxsIHx8XG4gICAgICAgIG9sZExpc3RlbmVyICE9IG51bGwgJiZcbiAgICAgICAgICAgIChuZXdMaXN0ZW5lci5jYXB0dXJlICE9PSBvbGRMaXN0ZW5lci5jYXB0dXJlIHx8XG4gICAgICAgICAgICAgbmV3TGlzdGVuZXIub25jZSAhPT0gb2xkTGlzdGVuZXIub25jZSB8fFxuICAgICAgICAgICAgIG5ld0xpc3RlbmVyLnBhc3NpdmUgIT09IG9sZExpc3RlbmVyLnBhc3NpdmUpO1xuICAgIGNvbnN0IHNob3VsZEFkZExpc3RlbmVyID1cbiAgICAgICAgbmV3TGlzdGVuZXIgIT0gbnVsbCAmJiAob2xkTGlzdGVuZXIgPT0gbnVsbCB8fCBzaG91bGRSZW1vdmVMaXN0ZW5lcik7XG5cbiAgICBpZiAoc2hvdWxkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIHRoaXMuZXZlbnROYW1lLCB0aGlzLl9fYm91bmRIYW5kbGVFdmVudCwgdGhpcy5fX29wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX19vcHRpb25zID0gZ2V0T3B0aW9ucyhuZXdMaXN0ZW5lcik7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICB0aGlzLmV2ZW50TmFtZSwgdGhpcy5fX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX19vcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZSBhcyBFdmVudEhhbmRsZXJXaXRoT3B0aW9ucztcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBFdmVudCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy52YWx1ZS5jYWxsKHRoaXMuZXZlbnRDb250ZXh0IHx8IHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAodGhpcy52YWx1ZSBhcyBFdmVudExpc3RlbmVyT2JqZWN0KS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFdlIGNvcHkgb3B0aW9ucyBiZWNhdXNlIG9mIHRoZSBpbmNvbnNpc3RlbnQgYmVoYXZpb3Igb2YgYnJvd3NlcnMgd2hlbiByZWFkaW5nXG4vLyB0aGUgdGhpcmQgYXJndW1lbnQgb2YgYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXIuIElFMTEgZG9lc24ndCBzdXBwb3J0IG9wdGlvbnNcbi8vIGF0IGFsbC4gQ2hyb21lIDQxIG9ubHkgcmVhZHMgYGNhcHR1cmVgIGlmIHRoZSBhcmd1bWVudCBpcyBhbiBvYmplY3QuXG5jb25zdCBnZXRPcHRpb25zID0gKG86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zfHVuZGVmaW5lZCkgPT4gbyAmJlxuICAgIChldmVudE9wdGlvbnNTdXBwb3J0ZWQgP1xuICAgICAgICAge2NhcHR1cmU6IG8uY2FwdHVyZSwgcGFzc2l2ZTogby5wYXNzaXZlLCBvbmNlOiBvLm9uY2V9IDpcbiAgICAgICAgIG8uY2FwdHVyZSBhcyBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7cmVtb3ZlTm9kZXN9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7Tm9kZVBhcnR9IGZyb20gJy4vcGFydHMuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7dGVtcGxhdGVGYWN0b3J5fSBmcm9tICcuL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuXG5leHBvcnQgY29uc3QgcGFydHMgPSBuZXcgV2Vha01hcDxOb2RlLCBOb2RlUGFydD4oKTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgdGVtcGxhdGUgcmVzdWx0IG9yIG90aGVyIHZhbHVlIHRvIGEgY29udGFpbmVyLlxuICpcbiAqIFRvIHVwZGF0ZSBhIGNvbnRhaW5lciB3aXRoIG5ldyB2YWx1ZXMsIHJlZXZhbHVhdGUgdGhlIHRlbXBsYXRlIGxpdGVyYWwgYW5kXG4gKiBjYWxsIGByZW5kZXJgIHdpdGggdGhlIG5ldyByZXN1bHQuXG4gKlxuICogQHBhcmFtIHJlc3VsdCBBbnkgdmFsdWUgcmVuZGVyYWJsZSBieSBOb2RlUGFydCAtIHR5cGljYWxseSBhIFRlbXBsYXRlUmVzdWx0XG4gKiAgICAgY3JlYXRlZCBieSBldmFsdWF0aW5nIGEgdGVtcGxhdGUgdGFnIGxpa2UgYGh0bWxgIG9yIGBzdmdgLlxuICogQHBhcmFtIGNvbnRhaW5lciBBIERPTSBwYXJlbnQgdG8gcmVuZGVyIHRvLiBUaGUgZW50aXJlIGNvbnRlbnRzIGFyZSBlaXRoZXJcbiAqICAgICByZXBsYWNlZCwgb3IgZWZmaWNpZW50bHkgdXBkYXRlZCBpZiB0aGUgc2FtZSByZXN1bHQgdHlwZSB3YXMgcHJldmlvdXNcbiAqICAgICByZW5kZXJlZCB0aGVyZS5cbiAqIEBwYXJhbSBvcHRpb25zIFJlbmRlck9wdGlvbnMgZm9yIHRoZSBlbnRpcmUgcmVuZGVyIHRyZWUgcmVuZGVyZWQgdG8gdGhpc1xuICogICAgIGNvbnRhaW5lci4gUmVuZGVyIG9wdGlvbnMgbXVzdCAqbm90KiBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzIHRvIHRoZSBzYW1lXG4gKiAgICAgY29udGFpbmVyLCBhcyB0aG9zZSBjaGFuZ2VzIHdpbGwgbm90IGVmZmVjdCBwcmV2aW91c2x5IHJlbmRlcmVkIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9XG4gICAgKHJlc3VsdDogdW5rbm93bixcbiAgICAgY29udGFpbmVyOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnQsXG4gICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFJlbmRlck9wdGlvbnM+KSA9PiB7XG4gICAgICBsZXQgcGFydCA9IHBhcnRzLmdldChjb250YWluZXIpO1xuICAgICAgaWYgKHBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgcGFydHMuc2V0KGNvbnRhaW5lciwgcGFydCA9IG5ldyBOb2RlUGFydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgcGFydC5hcHBlbmRJbnRvKGNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgICBwYXJ0LnNldFZhbHVlKHJlc3VsdCk7XG4gICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgIH07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcbmltcG9ydCB7bWFya2VyLCBUZW1wbGF0ZX0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0eXBlIHRoYXQgY3JlYXRlcyBhIFRlbXBsYXRlIGZyb20gYSBUZW1wbGF0ZVJlc3VsdC5cbiAqXG4gKiBUaGlzIGlzIGEgaG9vayBpbnRvIHRoZSB0ZW1wbGF0ZS1jcmVhdGlvbiBwcm9jZXNzIGZvciByZW5kZXJpbmcgdGhhdFxuICogcmVxdWlyZXMgc29tZSBtb2RpZmljYXRpb24gb2YgdGVtcGxhdGVzIGJlZm9yZSB0aGV5J3JlIHVzZWQsIGxpa2UgU2hhZHlDU1MsXG4gKiB3aGljaCBtdXN0IGFkZCBjbGFzc2VzIHRvIGVsZW1lbnRzIGFuZCByZW1vdmUgc3R5bGVzLlxuICpcbiAqIFRlbXBsYXRlcyBzaG91bGQgYmUgY2FjaGVkIGFzIGFnZ3Jlc3NpdmVseSBhcyBwb3NzaWJsZSwgc28gdGhhdCBtYW55XG4gKiBUZW1wbGF0ZVJlc3VsdHMgcHJvZHVjZWQgZnJvbSB0aGUgc2FtZSBleHByZXNzaW9uIG9ubHkgZG8gdGhlIHdvcmsgb2ZcbiAqIGNyZWF0aW5nIHRoZSBUZW1wbGF0ZSB0aGUgZmlyc3QgdGltZS5cbiAqXG4gKiBUZW1wbGF0ZXMgYXJlIHVzdWFsbHkgY2FjaGVkIGJ5IFRlbXBsYXRlUmVzdWx0LnN0cmluZ3MgYW5kXG4gKiBUZW1wbGF0ZVJlc3VsdC50eXBlLCBidXQgbWF5IGJlIGNhY2hlZCBieSBvdGhlciBrZXlzIGlmIHRoaXMgZnVuY3Rpb25cbiAqIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZS5cbiAqXG4gKiBOb3RlIHRoYXQgY3VycmVudGx5IFRlbXBsYXRlRmFjdG9yaWVzIG11c3Qgbm90IGFkZCwgcmVtb3ZlLCBvciByZW9yZGVyXG4gKiBleHByZXNzaW9ucywgYmVjYXVzZSB0aGVyZSBpcyBubyB3YXkgdG8gZGVzY3JpYmUgc3VjaCBhIG1vZGlmaWNhdGlvblxuICogdG8gcmVuZGVyKCkgc28gdGhhdCB2YWx1ZXMgYXJlIGludGVycG9sYXRlZCB0byB0aGUgY29ycmVjdCBwbGFjZSBpbiB0aGVcbiAqIHRlbXBsYXRlIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0IHR5cGUgVGVtcGxhdGVGYWN0b3J5ID0gKHJlc3VsdDogVGVtcGxhdGVSZXN1bHQpID0+IFRlbXBsYXRlO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IFRlbXBsYXRlRmFjdG9yeSB3aGljaCBjYWNoZXMgVGVtcGxhdGVzIGtleWVkIG9uXG4gKiByZXN1bHQudHlwZSBhbmQgcmVzdWx0LnN0cmluZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZUZhY3RvcnkocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkge1xuICBsZXQgdGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGVzLmdldChyZXN1bHQudHlwZSk7XG4gIGlmICh0ZW1wbGF0ZUNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICB0ZW1wbGF0ZUNhY2hlID0ge1xuICAgICAgc3RyaW5nc0FycmF5OiBuZXcgV2Vha01hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgVGVtcGxhdGU+KCksXG4gICAgICBrZXlTdHJpbmc6IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZT4oKVxuICAgIH07XG4gICAgdGVtcGxhdGVDYWNoZXMuc2V0KHJlc3VsdC50eXBlLCB0ZW1wbGF0ZUNhY2hlKTtcbiAgfVxuXG4gIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LmdldChyZXN1bHQuc3RyaW5ncyk7XG4gIGlmICh0ZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgLy8gSWYgdGhlIFRlbXBsYXRlU3RyaW5nc0FycmF5IGlzIG5ldywgZ2VuZXJhdGUgYSBrZXkgZnJvbSB0aGUgc3RyaW5nc1xuICAvLyBUaGlzIGtleSBpcyBzaGFyZWQgYmV0d2VlbiBhbGwgdGVtcGxhdGVzIHdpdGggaWRlbnRpY2FsIGNvbnRlbnRcbiAgY29uc3Qga2V5ID0gcmVzdWx0LnN0cmluZ3Muam9pbihtYXJrZXIpO1xuXG4gIC8vIENoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSBhIFRlbXBsYXRlIGZvciB0aGlzIGtleVxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLmdldChrZXkpO1xuICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIElmIHdlIGhhdmUgbm90IHNlZW4gdGhpcyBrZXkgYmVmb3JlLCBjcmVhdGUgYSBuZXcgVGVtcGxhdGVcbiAgICB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShyZXN1bHQsIHJlc3VsdC5nZXRUZW1wbGF0ZUVsZW1lbnQoKSk7XG4gICAgLy8gQ2FjaGUgdGhlIFRlbXBsYXRlIGZvciB0aGlzIGtleVxuICAgIHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLnNldChrZXksIHRlbXBsYXRlKTtcbiAgfVxuXG4gIC8vIENhY2hlIGFsbCBmdXR1cmUgcXVlcmllcyBmb3IgdGhpcyBUZW1wbGF0ZVN0cmluZ3NBcnJheVxuICB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5zZXQocmVzdWx0LnN0cmluZ3MsIHRlbXBsYXRlKTtcbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vKipcbiAqIFRoZSBmaXJzdCBhcmd1bWVudCB0byBKUyB0ZW1wbGF0ZSB0YWdzIHJldGFpbiBpZGVudGl0eSBhY3Jvc3MgbXVsdGlwbGVcbiAqIGNhbGxzIHRvIGEgdGFnIGZvciB0aGUgc2FtZSBsaXRlcmFsLCBzbyB3ZSBjYW4gY2FjaGUgd29yayBkb25lIHBlciBsaXRlcmFsXG4gKiBpbiBhIE1hcC5cbiAqXG4gKiBTYWZhcmkgY3VycmVudGx5IGhhcyBhIGJ1ZyB3aGljaCBvY2Nhc2lvbmFsbHkgYnJlYWtzIHRoaXMgYmVoYXZpb3IsIHNvIHdlXG4gKiBuZWVkIHRvIGNhY2hlIHRoZSBUZW1wbGF0ZSBhdCB0d28gbGV2ZWxzLiBXZSBmaXJzdCBjYWNoZSB0aGVcbiAqIFRlbXBsYXRlU3RyaW5nc0FycmF5LCBhbmQgaWYgdGhhdCBmYWlscywgd2UgY2FjaGUgYSBrZXkgY29uc3RydWN0ZWQgYnlcbiAqIGpvaW5pbmcgdGhlIHN0cmluZ3MgYXJyYXkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVDYWNoZSB7XG4gIHJlYWRvbmx5IHN0cmluZ3NBcnJheTogV2Vha01hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgVGVtcGxhdGU+O1xuICByZWFkb25seSBrZXlTdHJpbmc6IE1hcDxzdHJpbmcsIFRlbXBsYXRlPjtcbn1cblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlQ2FjaGVzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlQ2FjaGU+KCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7aXNDRVBvbHlmaWxsfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHtpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGUsIFRlbXBsYXRlUGFydH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYSBgVGVtcGxhdGVgIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBET00gYW5kIHVwZGF0ZWRcbiAqIHdpdGggbmV3IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9fcGFydHM6IEFycmF5PFBhcnR8dW5kZWZpbmVkPiA9IFtdO1xuICByZWFkb25seSBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yO1xuICByZWFkb25seSBvcHRpb25zOiBSZW5kZXJPcHRpb25zO1xuICByZWFkb25seSB0ZW1wbGF0ZTogVGVtcGxhdGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICB0ZW1wbGF0ZTogVGVtcGxhdGUsIHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3IsXG4gICAgICBvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICB1cGRhdGUodmFsdWVzOiByZWFkb25seSB1bmtub3duW10pIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX19wYXJ0cykge1xuICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9fcGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFydC5jb21taXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xvbmUoKTogRG9jdW1lbnRGcmFnbWVudCB7XG4gICAgLy8gVGhlcmUgYXJlIGEgbnVtYmVyIG9mIHN0ZXBzIGluIHRoZSBsaWZlY3ljbGUgb2YgYSB0ZW1wbGF0ZSBpbnN0YW5jZSdzXG4gICAgLy8gRE9NIGZyYWdtZW50OlxuICAgIC8vICAxLiBDbG9uZSAtIGNyZWF0ZSB0aGUgaW5zdGFuY2UgZnJhZ21lbnRcbiAgICAvLyAgMi4gQWRvcHQgLSBhZG9wdCBpbnRvIHRoZSBtYWluIGRvY3VtZW50XG4gICAgLy8gIDMuIFByb2Nlc3MgLSBmaW5kIHBhcnQgbWFya2VycyBhbmQgY3JlYXRlIHBhcnRzXG4gICAgLy8gIDQuIFVwZ3JhZGUgLSB1cGdyYWRlIGN1c3RvbSBlbGVtZW50c1xuICAgIC8vICA1LiBVcGRhdGUgLSBzZXQgbm9kZSwgYXR0cmlidXRlLCBwcm9wZXJ0eSwgZXRjLiwgdmFsdWVzXG4gICAgLy8gIDYuIENvbm5lY3QgLSBjb25uZWN0IHRvIHRoZSBkb2N1bWVudC4gT3B0aW9uYWwgYW5kIG91dHNpZGUgb2YgdGhpc1xuICAgIC8vICAgICBtZXRob2QuXG4gICAgLy9cbiAgICAvLyBXZSBoYXZlIGEgZmV3IGNvbnN0cmFpbnRzIG9uIHRoZSBvcmRlcmluZyBvZiB0aGVzZSBzdGVwczpcbiAgICAvLyAgKiBXZSBuZWVkIHRvIHVwZ3JhZGUgYmVmb3JlIHVwZGF0aW5nLCBzbyB0aGF0IHByb3BlcnR5IHZhbHVlcyB3aWxsIHBhc3NcbiAgICAvLyAgICB0aHJvdWdoIGFueSBwcm9wZXJ0eSBzZXR0ZXJzLlxuICAgIC8vICAqIFdlIHdvdWxkIGxpa2UgdG8gcHJvY2VzcyBiZWZvcmUgdXBncmFkaW5nIHNvIHRoYXQgd2UncmUgc3VyZSB0aGF0IHRoZVxuICAgIC8vICAgIGNsb25lZCBmcmFnbWVudCBpcyBpbmVydCBhbmQgbm90IGRpc3R1cmJlZCBieSBzZWxmLW1vZGlmeWluZyBET00uXG4gICAgLy8gICogV2Ugd2FudCBjdXN0b20gZWxlbWVudHMgdG8gdXBncmFkZSBldmVuIGluIGRpc2Nvbm5lY3RlZCBmcmFnbWVudHMuXG4gICAgLy9cbiAgICAvLyBHaXZlbiB0aGVzZSBjb25zdHJhaW50cywgd2l0aCBmdWxsIGN1c3RvbSBlbGVtZW50cyBzdXBwb3J0IHdlIHdvdWxkXG4gICAgLy8gcHJlZmVyIHRoZSBvcmRlcjogQ2xvbmUsIFByb2Nlc3MsIEFkb3B0LCBVcGdyYWRlLCBVcGRhdGUsIENvbm5lY3RcbiAgICAvL1xuICAgIC8vIEJ1dCBTYWZhcmkgZG9lcyBub3QgaW1wbGVtZW50IEN1c3RvbUVsZW1lbnRSZWdpc3RyeSN1cGdyYWRlLCBzbyB3ZVxuICAgIC8vIGNhbiBub3QgaW1wbGVtZW50IHRoYXQgb3JkZXIgYW5kIHN0aWxsIGhhdmUgdXBncmFkZS1iZWZvcmUtdXBkYXRlIGFuZFxuICAgIC8vIHVwZ3JhZGUgZGlzY29ubmVjdGVkIGZyYWdtZW50cy4gU28gd2UgaW5zdGVhZCBzYWNyaWZpY2UgdGhlXG4gICAgLy8gcHJvY2Vzcy1iZWZvcmUtdXBncmFkZSBjb25zdHJhaW50LCBzaW5jZSBpbiBDdXN0b20gRWxlbWVudHMgdjEgZWxlbWVudHNcbiAgICAvLyBtdXN0IG5vdCBtb2RpZnkgdGhlaXIgbGlnaHQgRE9NIGluIHRoZSBjb25zdHJ1Y3Rvci4gV2Ugc3RpbGwgaGF2ZSBpc3N1ZXNcbiAgICAvLyB3aGVuIGNvLWV4aXN0aW5nIHdpdGggQ0V2MCBlbGVtZW50cyBsaWtlIFBvbHltZXIgMSwgYW5kIHdpdGggcG9seWZpbGxzXG4gICAgLy8gdGhhdCBkb24ndCBzdHJpY3RseSBhZGhlcmUgdG8gdGhlIG5vLW1vZGlmaWNhdGlvbiBydWxlIGJlY2F1c2Ugc2hhZG93XG4gICAgLy8gRE9NLCB3aGljaCBtYXkgYmUgY3JlYXRlZCBpbiB0aGUgY29uc3RydWN0b3IsIGlzIGVtdWxhdGVkIGJ5IGJlaW5nIHBsYWNlZFxuICAgIC8vIGluIHRoZSBsaWdodCBET00uXG4gICAgLy9cbiAgICAvLyBUaGUgcmVzdWx0aW5nIG9yZGVyIGlzIG9uIG5hdGl2ZSBpczogQ2xvbmUsIEFkb3B0LCBVcGdyYWRlLCBQcm9jZXNzLFxuICAgIC8vIFVwZGF0ZSwgQ29ubmVjdC4gZG9jdW1lbnQuaW1wb3J0Tm9kZSgpIHBlcmZvcm1zIENsb25lLCBBZG9wdCwgYW5kIFVwZ3JhZGVcbiAgICAvLyBpbiBvbmUgc3RlcC5cbiAgICAvL1xuICAgIC8vIFRoZSBDdXN0b20gRWxlbWVudHMgdjEgcG9seWZpbGwgc3VwcG9ydHMgdXBncmFkZSgpLCBzbyB0aGUgb3JkZXIgd2hlblxuICAgIC8vIHBvbHlmaWxsZWQgaXMgdGhlIG1vcmUgaWRlYWw6IENsb25lLCBQcm9jZXNzLCBBZG9wdCwgVXBncmFkZSwgVXBkYXRlLFxuICAgIC8vIENvbm5lY3QuXG5cbiAgICBjb25zdCBmcmFnbWVudCA9IGlzQ0VQb2x5ZmlsbCA/XG4gICAgICAgIHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudEZyYWdtZW50IDpcbiAgICAgICAgZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudCwgdHJ1ZSk7XG5cbiAgICBjb25zdCBzdGFjazogTm9kZVtdID0gW107XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLnRlbXBsYXRlLnBhcnRzO1xuICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmUgbnVsbFxuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgIGZyYWdtZW50LFxuICAgICAgICAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi8sXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlKTtcbiAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICBsZXQgcGFydDogVGVtcGxhdGVQYXJ0O1xuICAgIGxldCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgbm9kZXMgYW5kIHBhcnRzIG9mIGEgdGVtcGxhdGVcbiAgICB3aGlsZSAocGFydEluZGV4IDwgcGFydHMubGVuZ3RoKSB7XG4gICAgICBwYXJ0ID0gcGFydHNbcGFydEluZGV4XTtcbiAgICAgIGlmICghaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCkpIHtcbiAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBQcm9ncmVzcyB0aGUgdHJlZSB3YWxrZXIgdW50aWwgd2UgZmluZCBvdXIgbmV4dCBwYXJ0J3Mgbm9kZS5cbiAgICAgIC8vIE5vdGUgdGhhdCBtdWx0aXBsZSBwYXJ0cyBtYXkgc2hhcmUgdGhlIHNhbWUgbm9kZSAoYXR0cmlidXRlIHBhcnRzXG4gICAgICAvLyBvbiBhIHNpbmdsZSBlbGVtZW50KSwgc28gdGhpcyBsb29wIG1heSBub3QgcnVuIGF0IGFsbC5cbiAgICAgIHdoaWxlIChub2RlSW5kZXggPCBwYXJ0LmluZGV4KSB7XG4gICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICBpZiAobm9kZSEubm9kZU5hbWUgPT09ICdURU1QTEFURScpIHtcbiAgICAgICAgICBzdGFjay5wdXNoKG5vZGUhKTtcbiAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSAobm9kZSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KS5jb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICgobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgICAvLyBCZWNhdXNlIHdlIHN0aWxsIGhhdmUgcGFydHMgKHRoZSBvdXRlciBmb3ItbG9vcCksIHdlIGtub3c6XG4gICAgICAgICAgLy8gLSBUaGVyZSBpcyBhIHRlbXBsYXRlIGluIHRoZSBzdGFja1xuICAgICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHN0YWNrLnBvcCgpITtcbiAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2UndmUgYXJyaXZlZCBhdCBvdXIgcGFydCdzIG5vZGUuXG4gICAgICBpZiAocGFydC50eXBlID09PSAnbm9kZScpIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucHJvY2Vzc29yLmhhbmRsZVRleHRFeHByZXNzaW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHBhcnQuaW5zZXJ0QWZ0ZXJOb2RlKG5vZGUhLnByZXZpb3VzU2libGluZyEpO1xuICAgICAgICB0aGlzLl9fcGFydHMucHVzaChwYXJ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKC4uLnRoaXMucHJvY2Vzc29yLmhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKFxuICAgICAgICAgICAgbm9kZSBhcyBFbGVtZW50LCBwYXJ0Lm5hbWUsIHBhcnQuc3RyaW5ncywgdGhpcy5vcHRpb25zKSk7XG4gICAgICB9XG4gICAgICBwYXJ0SW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAoaXNDRVBvbHlmaWxsKSB7XG4gICAgICBkb2N1bWVudC5hZG9wdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgY3VzdG9tRWxlbWVudHMudXBncmFkZShmcmFnbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge3JlcGFyZW50Tm9kZXN9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7Ym91bmRBdHRyaWJ1dGVTdWZmaXgsIGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXgsIG1hcmtlciwgbm9kZU1hcmtlcn0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbmNvbnN0IGNvbW1lbnRNYXJrZXIgPSBgICR7bWFya2VyfSBgO1xuXG4vKipcbiAqIFRoZSByZXR1cm4gdHlwZSBvZiBgaHRtbGAsIHdoaWNoIGhvbGRzIGEgVGVtcGxhdGUgYW5kIHRoZSB2YWx1ZXMgZnJvbVxuICogaW50ZXJwb2xhdGVkIGV4cHJlc3Npb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVSZXN1bHQge1xuICByZWFkb25seSBzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheTtcbiAgcmVhZG9ubHkgdmFsdWVzOiByZWFkb25seSB1bmtub3duW107XG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgcmVhZG9ubHkgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3NvcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCB2YWx1ZXM6IHJlYWRvbmx5IHVua25vd25bXSwgdHlwZTogc3RyaW5nLFxuICAgICAgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3Nvcikge1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIEhUTUwgdXNlZCB0byBjcmVhdGUgYSBgPHRlbXBsYXRlPmAgZWxlbWVudC5cbiAgICovXG4gIGdldEhUTUwoKTogc3RyaW5nIHtcbiAgICBjb25zdCBsID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgaXNDb21tZW50QmluZGluZyA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3NbaV07XG4gICAgICAvLyBGb3IgZWFjaCBiaW5kaW5nIHdlIHdhbnQgdG8gZGV0ZXJtaW5lIHRoZSBraW5kIG9mIG1hcmtlciB0byBpbnNlcnRcbiAgICAgIC8vIGludG8gdGhlIHRlbXBsYXRlIHNvdXJjZSBiZWZvcmUgaXQncyBwYXJzZWQgYnkgdGhlIGJyb3dzZXIncyBIVE1MXG4gICAgICAvLyBwYXJzZXIuIFRoZSBtYXJrZXIgdHlwZSBpcyBiYXNlZCBvbiB3aGV0aGVyIHRoZSBleHByZXNzaW9uIGlzIGluIGFuXG4gICAgICAvLyBhdHRyaWJ1dGUsIHRleHQsIG9yIGNvbW1lbnQgcG9zaXRpb24uXG4gICAgICAvLyAgICogRm9yIG5vZGUtcG9zaXRpb24gYmluZGluZ3Mgd2UgaW5zZXJ0IGEgY29tbWVudCB3aXRoIHRoZSBtYXJrZXJcbiAgICAgIC8vICAgICBzZW50aW5lbCBhcyBpdHMgdGV4dCBjb250ZW50LCBsaWtlIDwhLS17e2xpdC1ndWlkfX0tLT4uXG4gICAgICAvLyAgICogRm9yIGF0dHJpYnV0ZSBiaW5kaW5ncyB3ZSBpbnNlcnQganVzdCB0aGUgbWFya2VyIHNlbnRpbmVsIGZvciB0aGVcbiAgICAgIC8vICAgICBmaXJzdCBiaW5kaW5nLCBzbyB0aGF0IHdlIHN1cHBvcnQgdW5xdW90ZWQgYXR0cmlidXRlIGJpbmRpbmdzLlxuICAgICAgLy8gICAgIFN1YnNlcXVlbnQgYmluZGluZ3MgY2FuIHVzZSBhIGNvbW1lbnQgbWFya2VyIGJlY2F1c2UgbXVsdGktYmluZGluZ1xuICAgICAgLy8gICAgIGF0dHJpYnV0ZXMgbXVzdCBiZSBxdW90ZWQuXG4gICAgICAvLyAgICogRm9yIGNvbW1lbnQgYmluZGluZ3Mgd2UgaW5zZXJ0IGp1c3QgdGhlIG1hcmtlciBzZW50aW5lbCBzbyB3ZSBkb24ndFxuICAgICAgLy8gICAgIGNsb3NlIHRoZSBjb21tZW50LlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBzY2FucyB0aGUgdGVtcGxhdGUgc291cmNlLCBidXQgaXMgKm5vdCogYW4gSFRNTFxuICAgICAgLy8gcGFyc2VyLiBXZSBkb24ndCBuZWVkIHRvIHRyYWNrIHRoZSB0cmVlIHN0cnVjdHVyZSBvZiB0aGUgSFRNTCwgb25seVxuICAgICAgLy8gd2hldGhlciBhIGJpbmRpbmcgaXMgaW5zaWRlIGEgY29tbWVudCwgYW5kIGlmIG5vdCwgaWYgaXQgYXBwZWFycyB0byBiZVxuICAgICAgLy8gdGhlIGZpcnN0IGJpbmRpbmcgaW4gYW4gYXR0cmlidXRlLlxuICAgICAgY29uc3QgY29tbWVudE9wZW4gPSBzLmxhc3RJbmRleE9mKCc8IS0tJyk7XG4gICAgICAvLyBXZSdyZSBpbiBjb21tZW50IHBvc2l0aW9uIGlmIHdlIGhhdmUgYSBjb21tZW50IG9wZW4gd2l0aCBubyBmb2xsb3dpbmdcbiAgICAgIC8vIGNvbW1lbnQgY2xvc2UuIEJlY2F1c2UgPC0tIGNhbiBhcHBlYXIgaW4gYW4gYXR0cmlidXRlIHZhbHVlIHRoZXJlIGNhblxuICAgICAgLy8gYmUgZmFsc2UgcG9zaXRpdmVzLlxuICAgICAgaXNDb21tZW50QmluZGluZyA9IChjb21tZW50T3BlbiA+IC0xIHx8IGlzQ29tbWVudEJpbmRpbmcpICYmXG4gICAgICAgICAgcy5pbmRleE9mKCctLT4nLCBjb21tZW50T3BlbiArIDEpID09PSAtMTtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGFuIGF0dHJpYnV0ZS1saWtlIHNlcXVlbmNlIHByZWNlZGluZyB0aGVcbiAgICAgIC8vIGV4cHJlc3Npb24uIFRoaXMgY2FuIG1hdGNoIFwibmFtZT12YWx1ZVwiIGxpa2Ugc3RydWN0dXJlcyBpbiB0ZXh0LFxuICAgICAgLy8gY29tbWVudHMsIGFuZCBhdHRyaWJ1dGUgdmFsdWVzLCBzbyB0aGVyZSBjYW4gYmUgZmFsc2UtcG9zaXRpdmVzLlxuICAgICAgY29uc3QgYXR0cmlidXRlTWF0Y2ggPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMocyk7XG4gICAgICBpZiAoYXR0cmlidXRlTWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgLy8gV2UncmUgb25seSBpbiB0aGlzIGJyYW5jaCBpZiB3ZSBkb24ndCBoYXZlIGEgYXR0cmlidXRlLWxpa2VcbiAgICAgICAgLy8gcHJlY2VkaW5nIHNlcXVlbmNlLiBGb3IgY29tbWVudHMsIHRoaXMgZ3VhcmRzIGFnYWluc3QgdW51c3VhbFxuICAgICAgICAvLyBhdHRyaWJ1dGUgdmFsdWVzIGxpa2UgPGRpdiBmb289XCI8IS0tJHsnYmFyJ31cIj4uIENhc2VzIGxpa2VcbiAgICAgICAgLy8gPCEtLSBmb289JHsnYmFyJ30tLT4gYXJlIGhhbmRsZWQgY29ycmVjdGx5IGluIHRoZSBhdHRyaWJ1dGUgYnJhbmNoXG4gICAgICAgIC8vIGJlbG93LlxuICAgICAgICBodG1sICs9IHMgKyAoaXNDb21tZW50QmluZGluZyA/IGNvbW1lbnRNYXJrZXIgOiBub2RlTWFya2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBhdHRyaWJ1dGVzIHdlIHVzZSBqdXN0IGEgbWFya2VyIHNlbnRpbmVsLCBhbmQgYWxzbyBhcHBlbmQgYVxuICAgICAgICAvLyAkbGl0JCBzdWZmaXggdG8gdGhlIG5hbWUgdG8gb3B0LW91dCBvZiBhdHRyaWJ1dGUtc3BlY2lmaWMgcGFyc2luZ1xuICAgICAgICAvLyB0aGF0IElFIGFuZCBFZGdlIGRvIGZvciBzdHlsZSBhbmQgY2VydGFpbiBTVkcgYXR0cmlidXRlcy5cbiAgICAgICAgaHRtbCArPSBzLnN1YnN0cigwLCBhdHRyaWJ1dGVNYXRjaC5pbmRleCkgKyBhdHRyaWJ1dGVNYXRjaFsxXSArXG4gICAgICAgICAgICBhdHRyaWJ1dGVNYXRjaFsyXSArIGJvdW5kQXR0cmlidXRlU3VmZml4ICsgYXR0cmlidXRlTWF0Y2hbM10gK1xuICAgICAgICAgICAgbWFya2VyO1xuICAgICAgfVxuICAgIH1cbiAgICBodG1sICs9IHRoaXMuc3RyaW5nc1tsXTtcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFRlbXBsYXRlRWxlbWVudCgpOiBIVE1MVGVtcGxhdGVFbGVtZW50IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdGhpcy5nZXRIVE1MKCk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG5cbi8qKlxuICogQSBUZW1wbGF0ZVJlc3VsdCBmb3IgU1ZHIGZyYWdtZW50cy5cbiAqXG4gKiBUaGlzIGNsYXNzIHdyYXBzIEhUTUwgaW4gYW4gYDxzdmc+YCB0YWcgaW4gb3JkZXIgdG8gcGFyc2UgaXRzIGNvbnRlbnRzIGluIHRoZVxuICogU1ZHIG5hbWVzcGFjZSwgdGhlbiBtb2RpZmllcyB0aGUgdGVtcGxhdGUgdG8gcmVtb3ZlIHRoZSBgPHN2Zz5gIHRhZyBzbyB0aGF0XG4gKiBjbG9uZXMgb25seSBjb250YWluZXIgdGhlIG9yaWdpbmFsIGZyYWdtZW50LlxuICovXG5leHBvcnQgY2xhc3MgU1ZHVGVtcGxhdGVSZXN1bHQgZXh0ZW5kcyBUZW1wbGF0ZVJlc3VsdCB7XG4gIGdldEhUTUwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxzdmc+JHtzdXBlci5nZXRIVE1MKCl9PC9zdmc+YDtcbiAgfVxuXG4gIGdldFRlbXBsYXRlRWxlbWVudCgpOiBIVE1MVGVtcGxhdGVFbGVtZW50IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHN1cGVyLmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBjb250ZW50LmZpcnN0Q2hpbGQhO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoc3ZnRWxlbWVudCk7XG4gICAgcmVwYXJlbnROb2Rlcyhjb250ZW50LCBzdmdFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoXG4gKiBwb3NzaWJsZSB0ZXh0IGluIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcmtlciA9IGB7e2xpdC0ke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSgyKX19fWA7XG5cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgdXNlZCB0ZXh0LXBvc2l0aW9ucywgbXVsdGktYmluZGluZyBhdHRyaWJ1dGVzLCBhbmRcbiAqIGF0dHJpYnV0ZXMgd2l0aCBtYXJrdXAtbGlrZSB0ZXh0IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vZGVNYXJrZXIgPSBgPCEtLSR7bWFya2VyfS0tPmA7XG5cbmV4cG9ydCBjb25zdCBtYXJrZXJSZWdleCA9IG5ldyBSZWdFeHAoYCR7bWFya2VyfXwke25vZGVNYXJrZXJ9YCk7XG5cbi8qKlxuICogU3VmZml4IGFwcGVuZGVkIHRvIGFsbCBib3VuZCBhdHRyaWJ1dGUgbmFtZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG5cbi8qKlxuICogQW4gdXBkYXRhYmxlIFRlbXBsYXRlIHRoYXQgdHJhY2tzIHRoZSBsb2NhdGlvbiBvZiBkeW5hbWljIHBhcnRzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICByZWFkb25seSBwYXJ0czogVGVtcGxhdGVQYXJ0W10gPSBbXTtcbiAgcmVhZG9ubHkgZWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LCBlbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGNvbnN0IG5vZGVzVG9SZW1vdmU6IE5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IHN0YWNrOiBOb2RlW10gPSBbXTtcbiAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICBlbGVtZW50LmNvbnRlbnQsXG4gICAgICAgIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBsYXN0IGluZGV4IGFzc29jaWF0ZWQgd2l0aCBhIHBhcnQuIFdlIHRyeSB0byBkZWxldGVcbiAgICAvLyB1bm5lY2Vzc2FyeSBub2RlcywgYnV0IHdlIG5ldmVyIHdhbnQgdG8gYXNzb2NpYXRlIHR3byBkaWZmZXJlbnQgcGFydHNcbiAgICAvLyB0byB0aGUgc2FtZSBpbmRleC4gVGhleSBtdXN0IGhhdmUgYSBjb25zdGFudCBub2RlIGJldHdlZW4uXG4gICAgbGV0IGxhc3RQYXJ0SW5kZXggPSAwO1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGNvbnN0IHtzdHJpbmdzLCB2YWx1ZXM6IHtsZW5ndGh9fSA9IHJlc3VsdDtcbiAgICB3aGlsZSAocGFydEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgRWxlbWVudCB8IENvbW1lbnQgfCBUZXh0IHwgbnVsbDtcbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgLy8gQmVjYXVzZSB3ZSBzdGlsbCBoYXZlIHBhcnRzICh0aGUgb3V0ZXIgZm9yLWxvb3ApLCB3ZSBrbm93OlxuICAgICAgICAvLyAtIFRoZXJlIGlzIGEgdGVtcGxhdGUgaW4gdGhlIHN0YWNrXG4gICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzdGFjay5wb3AoKSE7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaW5kZXgrKztcblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pIHtcbiAgICAgICAgaWYgKChub2RlIGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSAobm9kZSBhcyBFbGVtZW50KS5hdHRyaWJ1dGVzO1xuICAgICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gYXR0cmlidXRlcztcbiAgICAgICAgICAvLyBQZXJcbiAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTmFtZWROb2RlTWFwLFxuICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIHJldHVybmVkIGluIGRvY3VtZW50IG9yZGVyLlxuICAgICAgICAgIC8vIEluIHBhcnRpY3VsYXIsIEVkZ2UvSUUgY2FuIHJldHVybiB0aGVtIG91dCBvZiBvcmRlciwgc28gd2UgY2Fubm90XG4gICAgICAgICAgLy8gYXNzdW1lIGEgY29ycmVzcG9uZGVuY2UgYmV0d2VlbiBwYXJ0IGluZGV4IGFuZCBhdHRyaWJ1dGUgaW5kZXguXG4gICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZW5kc1dpdGgoYXR0cmlidXRlc1tpXS5uYW1lLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRm9yUGFydCA9IHN0cmluZ3NbcGFydEluZGV4XTtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpIVsyXTtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBBbGwgYm91bmQgYXR0cmlidXRlcyBoYXZlIGhhZCBhIHN1ZmZpeCBhZGRlZCBpblxuICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBoYW5kbGluZy4gVG8gbG9vayB1cCB0aGUgYXR0cmlidXRlIHZhbHVlIHdlIGFsc28gbmVlZCB0byBhZGRcbiAgICAgICAgICAgIC8vIHRoZSBzdWZmaXguXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID1cbiAgICAgICAgICAgICAgICBuYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeDtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID1cbiAgICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSkhO1xuICAgICAgICAgICAgKG5vZGUgYXMgRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZUxvb2t1cE5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IGF0dHJpYnV0ZVZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4LCBuYW1lLCBzdHJpbmdzOiBzdGF0aWNzfSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXggKz0gc3RhdGljcy5sZW5ndGggLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKG5vZGUgYXMgRWxlbWVudCkudGFnTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gKG5vZGUgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCkuY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAobm9kZSBhcyBUZXh0KS5kYXRhO1xuICAgICAgICBpZiAoZGF0YS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZSE7XG4gICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IGRhdGEuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpbnNlcnQ6IE5vZGU7XG4gICAgICAgICAgICBsZXQgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICBpZiAocyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgaW5zZXJ0ID0gY3JlYXRlTWFya2VyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsICYmIGVuZHNXaXRoKG1hdGNoWzJdLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgICBzID0gcy5zbGljZSgwLCBtYXRjaC5pbmRleCkgKyBtYXRjaFsxXSArXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoWzJdLnNsaWNlKDAsIC1ib3VuZEF0dHJpYnV0ZVN1ZmZpeC5sZW5ndGgpICsgbWF0Y2hbM107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5zZXJ0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGluc2VydCwgbm9kZSk7XG4gICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goe3R5cGU6ICdub2RlJywgaW5kZXg6ICsraW5kZXh9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgdGhlcmUncyBubyB0ZXh0LCB3ZSBtdXN0IGluc2VydCBhIGNvbW1lbnQgdG8gbWFyayBvdXIgcGxhY2UuXG4gICAgICAgICAgLy8gRWxzZSwgd2UgY2FuIHRydXN0IGl0IHdpbGwgc3RpY2sgYXJvdW5kIGFmdGVyIGNsb25pbmcuXG4gICAgICAgICAgaWYgKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAobm9kZSBhcyBUZXh0KS5kYXRhID0gc3RyaW5nc1tsYXN0SW5kZXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXZSBoYXZlIGEgcGFydCBmb3IgZWFjaCBtYXRjaCBmb3VuZFxuICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOb2RlLkNPTU1FTlRfTk9ERSAqLykge1xuICAgICAgICBpZiAoKG5vZGUgYXMgQ29tbWVudCkuZGF0YSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlITtcbiAgICAgICAgICAvLyBBZGQgYSBuZXcgbWFya2VyIG5vZGUgdG8gYmUgdGhlIHN0YXJ0Tm9kZSBvZiB0aGUgUGFydCBpZiBhbnkgb2ZcbiAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgIC8vICAqIFdlIGRvbid0IGhhdmUgYSBwcmV2aW91c1NpYmxpbmdcbiAgICAgICAgICAvLyAgKiBUaGUgcHJldmlvdXNTaWJsaW5nIGlzIGFscmVhZHkgdGhlIHN0YXJ0IG9mIGEgcHJldmlvdXMgcGFydFxuICAgICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gbnVsbCB8fCBpbmRleCA9PT0gbGFzdFBhcnRJbmRleCkge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYXN0UGFydEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnbm9kZScsIGluZGV4fSk7XG4gICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHRTaWJsaW5nLCBrZWVwIHRoaXMgbm9kZSBzbyB3ZSBoYXZlIGFuIGVuZC5cbiAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gcmVtb3ZlIGl0IHRvIHNhdmUgZnV0dXJlIGNvc3RzLlxuICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAobm9kZSBhcyBDb21tZW50KS5kYXRhID0gJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgd2hpbGUgKChpID0gKG5vZGUgYXMgQ29tbWVudCkuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGNvbnNpZGVyIHdoZXRoZXIgaXQncyBldmVuIHdvcnRoIGl0IHRvXG4gICAgICAgICAgICAvLyBtYWtlIGJpbmRpbmdzIGluIGNvbW1lbnRzIHdvcmtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleDogLTF9KTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0ZXh0IGJpbmRpbmcgbm9kZXMgYWZ0ZXIgdGhlIHdhbGsgdG8gbm90IGRpc3R1cmIgdGhlIFRyZWVXYWxrZXJcbiAgICBmb3IgKGNvbnN0IG4gb2Ygbm9kZXNUb1JlbW92ZSkge1xuICAgICAgbi5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChuKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZW5kc1dpdGggPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGg7XG4gIHJldHVybiBpbmRleCA+PSAwICYmIHN0ci5zbGljZShpbmRleCkgPT09IHN1ZmZpeDtcbn07XG5cbi8qKlxuICogQSBwbGFjZWhvbGRlciBmb3IgYSBkeW5hbWljIGV4cHJlc3Npb24gaW4gYW4gSFRNTCB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIGJ1aWx0LWluIHBhcnQgdHlwZXM6IEF0dHJpYnV0ZVBhcnQgYW5kIE5vZGVQYXJ0LiBOb2RlUGFydHNcbiAqIGFsd2F5cyByZXByZXNlbnQgYSBzaW5nbGUgZHluYW1pYyBleHByZXNzaW9uLCB3aGlsZSBBdHRyaWJ1dGVQYXJ0cyBtYXlcbiAqIHJlcHJlc2VudCBhcyBtYW55IGV4cHJlc3Npb25zIGFyZSBjb250YWluZWQgaW4gdGhlIGF0dHJpYnV0ZS5cbiAqXG4gKiBBIFRlbXBsYXRlJ3MgcGFydHMgYXJlIG11dGFibGUsIHNvIHBhcnRzIGNhbiBiZSByZXBsYWNlZCBvciBtb2RpZmllZFxuICogKHBvc3NpYmx5IHRvIGltcGxlbWVudCBkaWZmZXJlbnQgdGVtcGxhdGUgc2VtYW50aWNzKS4gVGhlIGNvbnRyYWN0IGlzIHRoYXRcbiAqIHBhcnRzIGNhbiBvbmx5IGJlIHJlcGxhY2VkLCBub3QgcmVtb3ZlZCwgYWRkZWQgb3IgcmVvcmRlcmVkLCBhbmQgcGFydHMgbXVzdFxuICogYWx3YXlzIGNvbnN1bWUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHZhbHVlcyBpbiB0aGVpciBgdXBkYXRlKClgIG1ldGhvZC5cbiAqXG4gKiBUT0RPKGp1c3RpbmZhZ25hbmkpOiBUaGF0IHJlcXVpcmVtZW50IGlzIGEgbGl0dGxlIGZyYWdpbGUuIEFcbiAqIFRlbXBsYXRlSW5zdGFuY2UgY291bGQgaW5zdGVhZCBiZSBtb3JlIGNhcmVmdWwgYWJvdXQgd2hpY2ggdmFsdWVzIGl0IGdpdmVzXG4gKiB0byBQYXJ0LnVwZGF0ZSgpLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZVBhcnQgPSB7XG4gIHJlYWRvbmx5IHR5cGU6ICdub2RlJzsgaW5kZXg6IG51bWJlcjtcbn18e1xuICByZWFkb25seSB0eXBlOiAnYXR0cmlidXRlJztcbiAgaW5kZXg6IG51bWJlcjtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG59O1xuXG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydDogVGVtcGxhdGVQYXJ0KSA9PiBwYXJ0LmluZGV4ICE9PSAtMTtcblxuLy8gQWxsb3dzIGBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKWAgdG8gYmUgcmVuYW1lZCBmb3IgYVxuLy8gc21hbGwgbWFudWFsIHNpemUtc2F2aW5ncy5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXJrZXIgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuLyoqXG4gKiBUaGlzIHJlZ2V4IGV4dHJhY3RzIHRoZSBhdHRyaWJ1dGUgbmFtZSBwcmVjZWRpbmcgYW4gYXR0cmlidXRlLXBvc2l0aW9uXG4gKiBleHByZXNzaW9uLiBJdCBkb2VzIHRoaXMgYnkgbWF0Y2hpbmcgdGhlIHN5bnRheCBhbGxvd2VkIGZvciBhdHRyaWJ1dGVzXG4gKiBhZ2FpbnN0IHRoZSBzdHJpbmcgbGl0ZXJhbCBkaXJlY3RseSBwcmVjZWRpbmcgdGhlIGV4cHJlc3Npb24sIGFzc3VtaW5nIHRoYXRcbiAqIHRoZSBleHByZXNzaW9uIGlzIGluIGFuIGF0dHJpYnV0ZS12YWx1ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2VsZW1lbnRzLWF0dHJpYnV0ZXNcbiAqXG4gKiBcIiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzcGFjZS1jaGFyYWN0ZXJzXG4gKlxuICogXCJcXDAtXFx4MUZcXHg3Ri1cXHg5RlwiIGFyZSBVbmljb2RlIGNvbnRyb2wgY2hhcmFjdGVycywgd2hpY2ggaW5jbHVkZXMgZXZlcnlcbiAqIHNwYWNlIGNoYXJhY3RlciBleGNlcHQgXCIgXCIuXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgY29udHJvbCBjaGFyYWN0ZXIsIHNwYWNlIGNoYXJhY3RlciwgKCcpLFxuICogICAgKFwiKSwgXCI+XCIsIFwiPVwiLCBvciBcIi9cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuZXhwb3J0IGNvbnN0IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXggPVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICAgLyhbIFxceDA5XFx4MGFcXHgwY1xceDBkXSkoW15cXDAtXFx4MUZcXHg3Ri1cXHg5RiBcIic+PS9dKykoWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qPVsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKig/OlteIFxceDA5XFx4MGFcXHgwY1xceDBkXCInYDw+PV0qfFwiW15cIl0qfCdbXiddKikpJC87XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICpcbiAqIE1haW4gbGl0LWh0bWwgbW9kdWxlLlxuICpcbiAqIE1haW4gZXhwb3J0czpcbiAqXG4gKiAtICBbW2h0bWxdXVxuICogLSAgW1tzdmddXVxuICogLSAgW1tyZW5kZXJdXVxuICpcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKipcbiAqIERvIG5vdCByZW1vdmUgdGhpcyBjb21tZW50OyBpdCBrZWVwcyB0eXBlZG9jIGZyb20gbWlzcGxhY2luZyB0aGUgbW9kdWxlXG4gKiBkb2NzLlxuICovXG5pbXBvcnQge2RlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHtTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbmV4cG9ydCB7RGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7ZGlyZWN0aXZlLCBEaXJlY3RpdmVGbiwgaXNEaXJlY3RpdmV9IGZyb20gJy4vbGliL2RpcmVjdGl2ZS5qcyc7XG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiByZW1vdmUgbGluZSB3aGVuIHdlIGdldCBOb2RlUGFydCBtb3ZpbmcgbWV0aG9kc1xuZXhwb3J0IHtyZW1vdmVOb2RlcywgcmVwYXJlbnROb2Rlc30gZnJvbSAnLi9saWIvZG9tLmpzJztcbmV4cG9ydCB7bm9DaGFuZ2UsIG5vdGhpbmcsIFBhcnR9IGZyb20gJy4vbGliL3BhcnQuanMnO1xuZXhwb3J0IHtBdHRyaWJ1dGVDb21taXR0ZXIsIEF0dHJpYnV0ZVBhcnQsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIGlzSXRlcmFibGUsIGlzUHJpbWl0aXZlLCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIsIFByb3BlcnR5UGFydH0gZnJvbSAnLi9saWIvcGFydHMuanMnO1xuZXhwb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL2xpYi9yZW5kZXItb3B0aW9ucy5qcyc7XG5leHBvcnQge3BhcnRzLCByZW5kZXJ9IGZyb20gJy4vbGliL3JlbmRlci5qcyc7XG5leHBvcnQge3RlbXBsYXRlQ2FjaGVzLCB0ZW1wbGF0ZUZhY3Rvcnl9IGZyb20gJy4vbGliL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IHtUZW1wbGF0ZUluc3RhbmNlfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5leHBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuZXhwb3J0IHtTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQge2NyZWF0ZU1hcmtlciwgaXNUZW1wbGF0ZVBhcnRBY3RpdmUsIFRlbXBsYXRlfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgbGl0SHRtbFZlcnNpb25zOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIGxpdC1odG1sIHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAod2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSB8fCAod2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSA9IFtdKSkucHVzaCgnMS4yLjEnKTtcbn1cblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBIVE1MIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSAoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogdW5rbm93bltdKSA9PlxuICAgIG5ldyBUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdodG1sJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IHVua25vd25bXSkgPT5cbiAgICBuZXcgU1ZHVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnc3ZnJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbi8qKlxuICBCYXNpYyByb3V0ZXIgdGhhdCBjYWxscyBhIGNhbGxiYWNrIHdoZW5ldmVyIHRoZSBsb2NhdGlvbiBpcyB1cGRhdGVkLlxuXG4gIEV4YW1wbGU6XG5cbiAgICAgIGltcG9ydCB7IGluc3RhbGxSb3V0ZXIgfSBmcm9tICdwd2EtaGVscGVycy9yb3V0ZXIuanMnO1xuXG4gICAgICBpbnN0YWxsUm91dGVyKChsb2NhdGlvbikgPT4gaGFuZGxlTmF2aWdhdGlvbihsb2NhdGlvbikpO1xuXG4gIEZvciBleGFtcGxlLCBpZiB5b3UncmUgdXNpbmcgdGhpcyByb3V0ZXIgaW4gYSBSZWR1eC1jb25uZWN0ZWQgY29tcG9uZW50LFxuICB5b3UgY291bGQgZGlzcGF0Y2ggYW4gYWN0aW9uIGluIHRoZSBjYWxsYmFjazpcblxuICAgICAgaW1wb3J0IHsgaW5zdGFsbFJvdXRlciB9IGZyb20gJ3B3YS1oZWxwZXJzL3JvdXRlci5qcyc7XG4gICAgICBpbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJy4uL2FjdGlvbnMvYXBwLmpzJztcblxuICAgICAgaW5zdGFsbFJvdXRlcigobG9jYXRpb24pID0+IHN0b3JlLmRpc3BhdGNoKG5hdmlnYXRlKGxvY2F0aW9uKSkpXG5cbiAgSWYgeW91IG5lZWQgdG8gZm9yY2UgYSBuYXZpZ2F0aW9uIHRvIGEgbmV3IGxvY2F0aW9uIHByb2dyYW1tYXRpY2FsbHksIHlvdSBjYW5cbiAgZG8gc28gYnkgcHVzaGluZyBhIG5ldyBzdGF0ZSB1c2luZyB0aGUgSGlzdG9yeSBBUEksIGFuZCB0aGVuIG1hbnVhbGx5XG4gIGNhbGxpbmcgdGhlIGNhbGxiYWNrIHdpdGggdGhlIG5ldyBsb2NhdGlvbjpcblxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJy9uZXctcm91dGUnKTtcbiAgICAgIGhhbmRsZU5hdmlnYXRpb24od2luZG93LmxvY2F0aW9uKTtcblxuICBPcHRpb25hbGx5LCB5b3UgY2FuIHVzZSB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIHJlYWQgdGhlIGV2ZW50IHRoYXQgY2F1c2VkIHRoZVxuICBuYXZpZ2F0aW9uLiBGb3IgZXhhbXBsZSwgeW91IG1heSB3YW50IHRvIHNjcm9sbCB0byB0b3Agb25seSBhZnRlciBhIGxpbmsgY2xpY2suXG5cbiAgICAgIGluc3RhbGxSb3V0ZXIoKGxvY2F0aW9uLCBldmVudCkgPT4ge1xuICAgICAgICAvLyBPbmx5IHNjcm9sbCB0byB0b3Agb24gbGluayBjbGlja3MsIG5vdCBwb3BzdGF0ZSBldmVudHMuXG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZU5hdmlnYXRpb24obG9jYXRpb24pO1xuICAgICAgfSk7XG4qL1xuZXhwb3J0IGNvbnN0IGluc3RhbGxSb3V0ZXIgPSAobG9jYXRpb25VcGRhdGVkQ2FsbGJhY2s6IChsb2NhdGlvbjpMb2NhdGlvbiwgZXZlbnQ6IEV2ZW50fG51bGwpID0+IHZvaWQpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQgfHwgZS5idXR0b24gIT09IDAgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSByZXR1cm47XG5cbiAgICBjb25zdCBhbmNob3IgPSBlLmNvbXBvc2VkUGF0aCgpLmZpbHRlcihcbiAgICAgIG4gPT4gKG4gYXMgSFRNTEVsZW1lbnQpLnRhZ05hbWUgPT09ICdBJ1xuICAgIClbMF0gYXMgSFRNTEFuY2hvckVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgaWYgKCFhbmNob3IgfHwgYW5jaG9yLnRhcmdldCB8fFxuICAgICAgICBhbmNob3IuaGFzQXR0cmlidXRlKCdkb3dubG9hZCcpIHx8XG4gICAgICAgIGFuY2hvci5nZXRBdHRyaWJ1dGUoJ3JlbCcpID09PSAnZXh0ZXJuYWwnKSByZXR1cm47XG5cbiAgICBjb25zdCBocmVmID0gYW5jaG9yLmhyZWY7XG4gICAgaWYgKCFocmVmIHx8IGhyZWYuaW5kZXhPZignbWFpbHRvOicpICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gbG9jYXRpb24ub3JpZ2luIHx8IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3Q7XG4gICAgaWYgKGhyZWYuaW5kZXhPZihvcmlnaW4pICE9PSAwKSByZXR1cm47XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGhyZWYgIT09IGxvY2F0aW9uLmhyZWYpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIGhyZWYpO1xuICAgICAgbG9jYXRpb25VcGRhdGVkQ2FsbGJhY2sobG9jYXRpb24sIGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZSA9PiBsb2NhdGlvblVwZGF0ZWRDYWxsYmFjayh3aW5kb3cubG9jYXRpb24sIGUpKTtcbiAgbG9jYXRpb25VcGRhdGVkQ2FsbGJhY2sod2luZG93LmxvY2F0aW9uLCBudWxsIC8qIGV2ZW50ICovKTtcbn07XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9