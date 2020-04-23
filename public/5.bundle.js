(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@material/animation/util.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/animation/util.js ***!
  \**************************************************/
/*! exports provided: getCorrectPropertyName, getCorrectEventName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorrectPropertyName", function() { return getCorrectPropertyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorrectEventName", function() { return getCorrectEventName; });
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
var cssPropertyNameMap = {
  animation: {
    prefixed: '-webkit-animation',
    standard: 'animation'
  },
  transform: {
    prefixed: '-webkit-transform',
    standard: 'transform'
  },
  transition: {
    prefixed: '-webkit-transition',
    standard: 'transition'
  }
};
var jsEventTypeMap = {
  animationend: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationEnd',
    standard: 'animationend'
  },
  animationiteration: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationIteration',
    standard: 'animationiteration'
  },
  animationstart: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationStart',
    standard: 'animationstart'
  },
  transitionend: {
    cssProperty: 'transition',
    prefixed: 'webkitTransitionEnd',
    standard: 'transitionend'
  }
};

function isWindow(windowObj) {
  return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}

function getCorrectPropertyName(windowObj, cssProperty) {
  if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
    var el = windowObj.document.createElement('div');
    var _a = cssPropertyNameMap[cssProperty],
        standard = _a.standard,
        prefixed = _a.prefixed;
    var isStandard = (standard in el.style);
    return isStandard ? standard : prefixed;
  }

  return cssProperty;
}
function getCorrectEventName(windowObj, eventType) {
  if (isWindow(windowObj) && eventType in jsEventTypeMap) {
    var el = windowObj.document.createElement('div');
    var _a = jsEventTypeMap[eventType],
        standard = _a.standard,
        prefixed = _a.prefixed,
        cssProperty = _a.cssProperty;
    var isStandard = (cssProperty in el.style);
    return isStandard ? standard : prefixed;
  }

  return eventType;
}

/***/ }),

/***/ "./node_modules/@material/linear-progress/component.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/linear-progress/component.js ***!
  \*************************************************************/
/*! exports provided: MDCLinearProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLinearProgress", function() { return MDCLinearProgress; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/linear-progress/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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




var MDCLinearProgress =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLinearProgress, _super);

  function MDCLinearProgress() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCLinearProgress.attachTo = function (root) {
    return new MDCLinearProgress(root);
  };

  Object.defineProperty(MDCLinearProgress.prototype, "determinate", {
    set: function (value) {
      this.foundation_.setDeterminate(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress.prototype, "progress", {
    set: function (value) {
      this.foundation_.setProgress(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress.prototype, "buffer", {
    set: function (value) {
      this.foundation_.setBuffer(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress.prototype, "reverse", {
    set: function (value) {
      this.foundation_.setReverse(value);
    },
    enumerable: true,
    configurable: true
  });

  MDCLinearProgress.prototype.open = function () {
    this.foundation_.open();
  };

  MDCLinearProgress.prototype.close = function () {
    this.foundation_.close();
  };

  MDCLinearProgress.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      forceLayout: function () {
        return _this.root_.offsetWidth;
      },
      getBuffer: function () {
        return _this.root_.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCLinearProgressFoundation"].strings.BUFFER_SELECTOR);
      },
      getPrimaryBar: function () {
        return _this.root_.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCLinearProgressFoundation"].strings.PRIMARY_BAR_SELECTOR);
      },
      hasClass: function (className) {
        return _this.root_.classList.contains(className);
      },
      removeAttribute: function (attributeName) {
        _this.root_.removeAttribute(attributeName);
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      setAttribute: function (attributeName, value) {
        _this.root_.setAttribute(attributeName, value);
      },
      setStyle: function (el, styleProperty, value) {
        return el.style.setProperty(styleProperty, value);
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCLinearProgressFoundation"](adapter);
  };

  return MDCLinearProgress;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/linear-progress/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/linear-progress/constants.js ***!
  \*************************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2017 Google Inc.
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
  CLOSED_CLASS: 'mdc-linear-progress--closed',
  INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
  REVERSED_CLASS: 'mdc-linear-progress--reversed'
};
var strings = {
  ARIA_VALUENOW: 'aria-valuenow',
  BUFFER_SELECTOR: '.mdc-linear-progress__buffer',
  PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar'
};

/***/ }),

/***/ "./node_modules/@material/linear-progress/foundation.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/linear-progress/foundation.js ***!
  \**************************************************************/
/*! exports provided: MDCLinearProgressFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLinearProgressFoundation", function() { return MDCLinearProgressFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_animation_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/animation/util */ "./node_modules/@material/animation/util.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/linear-progress/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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





var MDCLinearProgressFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLinearProgressFoundation, _super);

  function MDCLinearProgressFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCLinearProgressFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCLinearProgressFoundation, "cssClasses", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgressFoundation, "strings", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_3__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgressFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        forceLayout: function () {
          return undefined;
        },
        getBuffer: function () {
          return null;
        },
        getPrimaryBar: function () {
          return null;
        },
        hasClass: function () {
          return false;
        },
        removeAttribute: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        setAttribute: function () {
          return undefined;
        },
        setStyle: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCLinearProgressFoundation.prototype.init = function () {
    this.isDeterminate_ = !this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].INDETERMINATE_CLASS);
    this.isReversed_ = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REVERSED_CLASS);
    this.progress_ = 0;
    this.buffer_ = 1;
  };

  MDCLinearProgressFoundation.prototype.setDeterminate = function (isDeterminate) {
    this.isDeterminate_ = isDeterminate;

    if (this.isDeterminate_) {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].INDETERMINATE_CLASS);
      this.adapter_.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_VALUENOW, this.progress_.toString());
      this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
      this.setScale_(this.adapter_.getBuffer(), this.buffer_);
    } else {
      if (this.isReversed_) {
        // Adding/removing REVERSED_CLASS starts a translate animation, while
        // adding INDETERMINATE_CLASS starts a scale animation. Here, we reset
        // the translate animation in order to keep it in sync with the new
        // scale animation that will start from adding INDETERMINATE_CLASS
        // below.
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REVERSED_CLASS);
        this.adapter_.forceLayout();
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REVERSED_CLASS);
      }

      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].INDETERMINATE_CLASS);
      this.adapter_.removeAttribute(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_VALUENOW);
      this.setScale_(this.adapter_.getPrimaryBar(), 1);
      this.setScale_(this.adapter_.getBuffer(), 1);
    }
  };

  MDCLinearProgressFoundation.prototype.setProgress = function (value) {
    this.progress_ = value;

    if (this.isDeterminate_) {
      this.setScale_(this.adapter_.getPrimaryBar(), value);
      this.adapter_.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_VALUENOW, value.toString());
    }
  };

  MDCLinearProgressFoundation.prototype.setBuffer = function (value) {
    this.buffer_ = value;

    if (this.isDeterminate_) {
      this.setScale_(this.adapter_.getBuffer(), value);
    }
  };

  MDCLinearProgressFoundation.prototype.setReverse = function (isReversed) {
    this.isReversed_ = isReversed;

    if (!this.isDeterminate_) {
      // Adding INDETERMINATE_CLASS starts a scale animation, while
      // adding/removing REVERSED_CLASS starts a translate animation. Here, we
      // reset the scale animation in order to keep it in sync with the new
      // translate animation that will start from adding/removing REVERSED_CLASS
      // below.
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].INDETERMINATE_CLASS);
      this.adapter_.forceLayout();
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].INDETERMINATE_CLASS);
    }

    if (this.isReversed_) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REVERSED_CLASS);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REVERSED_CLASS);
    }
  };

  MDCLinearProgressFoundation.prototype.open = function () {
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].CLOSED_CLASS);
  };

  MDCLinearProgressFoundation.prototype.close = function () {
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].CLOSED_CLASS);
  };

  MDCLinearProgressFoundation.prototype.setScale_ = function (el, scaleValue) {
    if (!el) {
      return;
    }

    var value = "scaleX(" + scaleValue + ")";
    this.adapter_.setStyle(el, Object(_material_animation_util__WEBPACK_IMPORTED_MODULE_1__["getCorrectPropertyName"])(window, 'transform'), value);
  };

  return MDCLinearProgressFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCLinearProgressFoundation);

/***/ }),

/***/ "./node_modules/@material/linear-progress/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/linear-progress/index.js ***!
  \*********************************************************/
/*! exports provided: MDCLinearProgress, cssClasses, strings, MDCLinearProgressFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/linear-progress/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCLinearProgress", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCLinearProgress"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/linear-progress/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/linear-progress/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCLinearProgressFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCLinearProgressFoundation"]; });

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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdXRpbC50cyIsIndlYnBhY2s6Ly8vY29tcG9uZW50LnRzIiwid2VicGFjazovLy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL2ZvdW5kYXRpb24udHMiLCJ3ZWJwYWNrOi8vL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSxJQUFNLGtCQUFrQixHQUF5QjtBQUMvQyxXQUFTLEVBQUU7QUFDVCxZQUFRLEVBQUUsbUJBREQ7QUFFVCxZQUFRLEVBQUU7QUFGRCxHQURvQztBQUsvQyxXQUFTLEVBQUU7QUFDVCxZQUFRLEVBQUUsbUJBREQ7QUFFVCxZQUFRLEVBQUU7QUFGRCxHQUxvQztBQVMvQyxZQUFVLEVBQUU7QUFDVixZQUFRLEVBQUUsb0JBREE7QUFFVixZQUFRLEVBQUU7QUFGQTtBQVRtQyxDQUFqRDtBQWVBLElBQU0sY0FBYyxHQUF3QjtBQUMxQyxjQUFZLEVBQUU7QUFDWixlQUFXLEVBQUUsV0FERDtBQUVaLFlBQVEsRUFBRSxvQkFGRTtBQUdaLFlBQVEsRUFBRTtBQUhFLEdBRDRCO0FBTTFDLG9CQUFrQixFQUFFO0FBQ2xCLGVBQVcsRUFBRSxXQURLO0FBRWxCLFlBQVEsRUFBRSwwQkFGUTtBQUdsQixZQUFRLEVBQUU7QUFIUSxHQU5zQjtBQVcxQyxnQkFBYyxFQUFFO0FBQ2QsZUFBVyxFQUFFLFdBREM7QUFFZCxZQUFRLEVBQUUsc0JBRkk7QUFHZCxZQUFRLEVBQUU7QUFISSxHQVgwQjtBQWdCMUMsZUFBYSxFQUFFO0FBQ2IsZUFBVyxFQUFFLFlBREE7QUFFYixZQUFRLEVBQUUscUJBRkc7QUFHYixZQUFRLEVBQUU7QUFIRztBQWhCMkIsQ0FBNUM7O0FBdUJBLFNBQVMsUUFBVCxDQUFrQixTQUFsQixFQUFtQztBQUNqQyxTQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBWCxDQUFQLElBQStCLE9BQU8sU0FBUyxD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dUZBQXNCLENBQUMsTUFBRCxFQUFTLFdBQVQsQ0FBakQsRUFBd0UsS0FBeEU7QUFDRCxHQU5POztBQU9WO0FBQUMsQ0F2SEQsQ0FDSSx1RUFESjs7Q0F5SEE7O0FBQ2UsMEZBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0EiLCJmaWxlIjoiNS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NQcm9wZXJ0eU5hbWVNYXAgPSB7XG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIHByZWZpeGVkOiAnLXdlYmtpdC1hbmltYXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbicsXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LXRyYW5zZm9ybScsXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNmb3JtJyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LXRyYW5zaXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zaXRpb24nLFxuICAgIH0sXG59O1xudmFyIGpzRXZlbnRUeXBlTWFwID0ge1xuICAgIGFuaW1hdGlvbmVuZDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAgICAgc3RhbmRhcmQ6ICdhbmltYXRpb25lbmQnLFxuICAgIH0sXG4gICAgYW5pbWF0aW9uaXRlcmF0aW9uOiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25JdGVyYXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgfSxcbiAgICBhbmltYXRpb25zdGFydDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb25lbmQ6IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICd0cmFuc2l0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzV2luZG93KHdpbmRvd09iaikge1xuICAgIHJldHVybiBCb29sZWFuKHdpbmRvd09iai5kb2N1bWVudCkgJiYgdHlwZW9mIHdpbmRvd09iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnJlY3RQcm9wZXJ0eU5hbWUod2luZG93T2JqLCBjc3NQcm9wZXJ0eSkge1xuICAgIGlmIChpc1dpbmRvdyh3aW5kb3dPYmopICYmIGNzc1Byb3BlcnR5IGluIGNzc1Byb3BlcnR5TmFtZU1hcCkge1xuICAgICAgICB2YXIgZWwgPSB3aW5kb3dPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBfYSA9IGNzc1Byb3BlcnR5TmFtZU1hcFtjc3NQcm9wZXJ0eV0sIHN0YW5kYXJkID0gX2Euc3RhbmRhcmQsIHByZWZpeGVkID0gX2EucHJlZml4ZWQ7XG4gICAgICAgIHZhciBpc1N0YW5kYXJkID0gc3RhbmRhcmQgaW4gZWwuc3R5bGU7XG4gICAgICAgIHJldHVybiBpc1N0YW5kYXJkID8gc3RhbmRhcmQgOiBwcmVmaXhlZDtcbiAgICB9XG4gICAgcmV0dXJuIGNzc1Byb3BlcnR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnJlY3RFdmVudE5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgICBpZiAoaXNXaW5kb3cod2luZG93T2JqKSAmJiBldmVudFR5cGUgaW4ganNFdmVudFR5cGVNYXApIHtcbiAgICAgICAgdmFyIGVsID0gd2luZG93T2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgX2EgPSBqc0V2ZW50VHlwZU1hcFtldmVudFR5cGVdLCBzdGFuZGFyZCA9IF9hLnN0YW5kYXJkLCBwcmVmaXhlZCA9IF9hLnByZWZpeGVkLCBjc3NQcm9wZXJ0eSA9IF9hLmNzc1Byb3BlcnR5O1xuICAgICAgICB2YXIgaXNTdGFuZGFyZCA9IGNzc1Byb3BlcnR5IGluIGVsLnN0eWxlO1xuICAgICAgICByZXR1cm4gaXNTdGFuZGFyZCA/IHN0YW5kYXJkIDogcHJlZml4ZWQ7XG4gICAgfVxuICAgIHJldHVybiBldmVudFR5cGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0xpbmVhclByb2dyZXNzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0xpbmVhclByb2dyZXNzLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0xpbmVhclByb2dyZXNzKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ0xpbmVhclByb2dyZXNzLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENMaW5lYXJQcm9ncmVzcyhyb290KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaW5lYXJQcm9ncmVzcy5wcm90b3R5cGUsIFwiZGV0ZXJtaW5hdGVcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXREZXRlcm1pbmF0ZSh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaW5lYXJQcm9ncmVzcy5wcm90b3R5cGUsIFwicHJvZ3Jlc3NcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRQcm9ncmVzcyh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaW5lYXJQcm9ncmVzcy5wcm90b3R5cGUsIFwiYnVmZmVyXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0QnVmZmVyKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpbmVhclByb2dyZXNzLnByb3RvdHlwZSwgXCJyZXZlcnNlXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0UmV2ZXJzZSh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0xpbmVhclByb2dyZXNzLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLm9wZW4oKTtcbiAgICB9O1xuICAgIE1EQ0xpbmVhclByb2dyZXNzLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5jbG9zZSgpO1xuICAgIH07XG4gICAgTURDTGluZWFyUHJvZ3Jlc3MucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGZvcmNlTGF5b3V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yb290Xy5vZmZzZXRXaWR0aDsgfSxcbiAgICAgICAgICAgIGdldEJ1ZmZlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24uc3RyaW5ncy5CVUZGRVJfU0VMRUNUT1IpOyB9LFxuICAgICAgICAgICAgZ2V0UHJpbWFyeUJhcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24uc3RyaW5ncy5QUklNQVJZX0JBUl9TRUxFQ1RPUik7IH0sXG4gICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVBdHRyaWJ1dGU6IGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8ucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0U3R5bGU6IGZ1bmN0aW9uIChlbCwgc3R5bGVQcm9wZXJ0eSwgdmFsdWUpIHsgcmV0dXJuIGVsLnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIHZhbHVlKTsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTGluZWFyUHJvZ3Jlc3M7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDTGluZWFyUHJvZ3Jlc3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBDTE9TRURfQ0xBU1M6ICdtZGMtbGluZWFyLXByb2dyZXNzLS1jbG9zZWQnLFxuICAgIElOREVURVJNSU5BVEVfQ0xBU1M6ICdtZGMtbGluZWFyLXByb2dyZXNzLS1pbmRldGVybWluYXRlJyxcbiAgICBSRVZFUlNFRF9DTEFTUzogJ21kYy1saW5lYXItcHJvZ3Jlc3MtLXJldmVyc2VkJyxcbn07XG5leHBvcnQgdmFyIHN0cmluZ3MgPSB7XG4gICAgQVJJQV9WQUxVRU5PVzogJ2FyaWEtdmFsdWVub3cnLFxuICAgIEJVRkZFUl9TRUxFQ1RPUjogJy5tZGMtbGluZWFyLXByb2dyZXNzX19idWZmZXInLFxuICAgIFBSSU1BUllfQkFSX1NFTEVDVE9SOiAnLm1kYy1saW5lYXItcHJvZ3Jlc3NfX3ByaW1hcnktYmFyJyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSB9IGZyb20gJ0BtYXRlcmlhbC9hbmltYXRpb24vdXRpbCc7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBmb3JjZUxheW91dDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldEJ1ZmZlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBnZXRQcmltYXJ5QmFyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVBdHRyaWJ1dGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFN0eWxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNEZXRlcm1pbmF0ZV8gPSAhdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLklOREVURVJNSU5BVEVfQ0xBU1MpO1xuICAgICAgICB0aGlzLmlzUmV2ZXJzZWRfID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlJFVkVSU0VEX0NMQVNTKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc18gPSAwO1xuICAgICAgICB0aGlzLmJ1ZmZlcl8gPSAxO1xuICAgIH07XG4gICAgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXREZXRlcm1pbmF0ZSA9IGZ1bmN0aW9uIChpc0RldGVybWluYXRlKSB7XG4gICAgICAgIHRoaXMuaXNEZXRlcm1pbmF0ZV8gPSBpc0RldGVybWluYXRlO1xuICAgICAgICBpZiAodGhpcy5pc0RldGVybWluYXRlXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLklOREVURVJNSU5BVEVfQ0xBU1MpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX1ZBTFVFTk9XLCB0aGlzLnByb2dyZXNzXy50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGVfKHRoaXMuYWRhcHRlcl8uZ2V0UHJpbWFyeUJhcigpLCB0aGlzLnByb2dyZXNzXyk7XG4gICAgICAgICAgICB0aGlzLnNldFNjYWxlXyh0aGlzLmFkYXB0ZXJfLmdldEJ1ZmZlcigpLCB0aGlzLmJ1ZmZlcl8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXZlcnNlZF8pIHtcbiAgICAgICAgICAgICAgICAvLyBBZGRpbmcvcmVtb3ZpbmcgUkVWRVJTRURfQ0xBU1Mgc3RhcnRzIGEgdHJhbnNsYXRlIGFuaW1hdGlvbiwgd2hpbGVcbiAgICAgICAgICAgICAgICAvLyBhZGRpbmcgSU5ERVRFUk1JTkFURV9DTEFTUyBzdGFydHMgYSBzY2FsZSBhbmltYXRpb24uIEhlcmUsIHdlIHJlc2V0XG4gICAgICAgICAgICAgICAgLy8gdGhlIHRyYW5zbGF0ZSBhbmltYXRpb24gaW4gb3JkZXIgdG8ga2VlcCBpdCBpbiBzeW5jIHdpdGggdGhlIG5ld1xuICAgICAgICAgICAgICAgIC8vIHNjYWxlIGFuaW1hdGlvbiB0aGF0IHdpbGwgc3RhcnQgZnJvbSBhZGRpbmcgSU5ERVRFUk1JTkFURV9DTEFTU1xuICAgICAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5SRVZFUlNFRF9DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mb3JjZUxheW91dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5SRVZFUlNFRF9DTEFTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuSU5ERVRFUk1JTkFURV9DTEFTUyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfVkFMVUVOT1cpO1xuICAgICAgICAgICAgdGhpcy5zZXRTY2FsZV8odGhpcy5hZGFwdGVyXy5nZXRQcmltYXJ5QmFyKCksIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRTY2FsZV8odGhpcy5hZGFwdGVyXy5nZXRCdWZmZXIoKSwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc18gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXRlcm1pbmF0ZV8pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGVfKHRoaXMuYWRhcHRlcl8uZ2V0UHJpbWFyeUJhcigpLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfVkFMVUVOT1csIHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLnNldEJ1ZmZlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmJ1ZmZlcl8gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXRlcm1pbmF0ZV8pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGVfKHRoaXMuYWRhcHRlcl8uZ2V0QnVmZmVyKCksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRSZXZlcnNlID0gZnVuY3Rpb24gKGlzUmV2ZXJzZWQpIHtcbiAgICAgICAgdGhpcy5pc1JldmVyc2VkXyA9IGlzUmV2ZXJzZWQ7XG4gICAgICAgIGlmICghdGhpcy5pc0RldGVybWluYXRlXykge1xuICAgICAgICAgICAgLy8gQWRkaW5nIElOREVURVJNSU5BVEVfQ0xBU1Mgc3RhcnRzIGEgc2NhbGUgYW5pbWF0aW9uLCB3aGlsZVxuICAgICAgICAgICAgLy8gYWRkaW5nL3JlbW92aW5nIFJFVkVSU0VEX0NMQVNTIHN0YXJ0cyBhIHRyYW5zbGF0ZSBhbmltYXRpb24uIEhlcmUsIHdlXG4gICAgICAgICAgICAvLyByZXNldCB0aGUgc2NhbGUgYW5pbWF0aW9uIGluIG9yZGVyIHRvIGtlZXAgaXQgaW4gc3luYyB3aXRoIHRoZSBuZXdcbiAgICAgICAgICAgIC8vIHRyYW5zbGF0ZSBhbmltYXRpb24gdGhhdCB3aWxsIHN0YXJ0IGZyb20gYWRkaW5nL3JlbW92aW5nIFJFVkVSU0VEX0NMQVNTXG4gICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5JTkRFVEVSTUlOQVRFX0NMQVNTKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZm9yY2VMYXlvdXQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5JTkRFVEVSTUlOQVRFX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1JldmVyc2VkXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlJFVkVSU0VEX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5SRVZFUlNFRF9DTEFTUyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkNMT1NFRF9DTEFTUyk7XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0xPU0VEX0NMQVNTKTtcbiAgICB9O1xuICAgIE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2NhbGVfID0gZnVuY3Rpb24gKGVsLCBzY2FsZVZhbHVlKSB7XG4gICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBcInNjYWxlWChcIiArIHNjYWxlVmFsdWUgKyBcIilcIjtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZShlbCwgZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSh3aW5kb3csICd0cmFuc2Zvcm0nKSwgdmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZm91bmRhdGlvbic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9