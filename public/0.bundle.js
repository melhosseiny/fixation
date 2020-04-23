(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@material/snackbar/component.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/snackbar/component.js ***!
  \******************************************************/
/*! exports provided: MDCSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSnackbar", function() { return MDCSnackbar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/snackbar/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/snackbar/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@material/snackbar/util.js");
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






var SURFACE_SELECTOR = _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].SURFACE_SELECTOR,
    LABEL_SELECTOR = _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].LABEL_SELECTOR,
    ACTION_SELECTOR = _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ACTION_SELECTOR,
    DISMISS_SELECTOR = _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].DISMISS_SELECTOR,
    OPENING_EVENT = _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].OPENING_EVENT,
    OPENED_EVENT = _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].OPENED_EVENT,
    CLOSING_EVENT = _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CLOSING_EVENT,
    CLOSED_EVENT = _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CLOSED_EVENT;

var MDCSnackbar =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSnackbar, _super);

  function MDCSnackbar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSnackbar.attachTo = function (root) {
    return new MDCSnackbar(root);
  };

  MDCSnackbar.prototype.initialize = function (announcerFactory) {
    if (announcerFactory === void 0) {
      announcerFactory = function () {
        return _util__WEBPACK_IMPORTED_MODULE_5__["announce"];
      };
    }

    this.announce_ = announcerFactory();
  };

  MDCSnackbar.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.surfaceEl_ = this.root_.querySelector(SURFACE_SELECTOR);
    this.labelEl_ = this.root_.querySelector(LABEL_SELECTOR);
    this.actionEl_ = this.root_.querySelector(ACTION_SELECTOR);

    this.handleKeyDown_ = function (evt) {
      return _this.foundation_.handleKeyDown(evt);
    };

    this.handleSurfaceClick_ = function (evt) {
      var target = evt.target;

      if (_this.isActionButton_(target)) {
        _this.foundation_.handleActionButtonClick(evt);
      } else if (_this.isActionIcon_(target)) {
        _this.foundation_.handleActionIconClick(evt);
      }
    };

    this.registerKeyDownHandler_(this.handleKeyDown_);
    this.registerSurfaceClickHandler_(this.handleSurfaceClick_);
  };

  MDCSnackbar.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.deregisterKeyDownHandler_(this.handleKeyDown_);
    this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_);
  };

  MDCSnackbar.prototype.open = function () {
    this.foundation_.open();
  };
  /**
   * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
   *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
   *     client-specific values may also be used if desired.
   */


  MDCSnackbar.prototype.close = function (reason) {
    if (reason === void 0) {
      reason = '';
    }

    this.foundation_.close(reason);
  };

  MDCSnackbar.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      announce: function () {
        return _this.announce_(_this.labelEl_);
      },
      notifyClosed: function (reason) {
        return _this.emit(CLOSED_EVENT, reason ? {
          reason: reason
        } : {});
      },
      notifyClosing: function (reason) {
        return _this.emit(CLOSING_EVENT, reason ? {
          reason: reason
        } : {});
      },
      notifyOpened: function () {
        return _this.emit(OPENED_EVENT, {});
      },
      notifyOpening: function () {
        return _this.emit(OPENING_EVENT, {});
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCSnackbarFoundation"](adapter);
  };

  Object.defineProperty(MDCSnackbar.prototype, "timeoutMs", {
    get: function () {
      return this.foundation_.getTimeoutMs();
    },
    set: function (timeoutMs) {
      this.foundation_.setTimeoutMs(timeoutMs);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "closeOnEscape", {
    get: function () {
      return this.foundation_.getCloseOnEscape();
    },
    set: function (closeOnEscape) {
      this.foundation_.setCloseOnEscape(closeOnEscape);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "isOpen", {
    get: function () {
      return this.foundation_.isOpen();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "labelText", {
    get: function () {
      // This property only returns null if the node is a document, DOCTYPE, or notation.
      // On Element nodes, it always returns a string.
      return this.labelEl_.textContent;
    },
    set: function (labelText) {
      this.labelEl_.textContent = labelText;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "actionButtonText", {
    get: function () {
      return this.actionEl_.textContent;
    },
    set: function (actionButtonText) {
      this.actionEl_.textContent = actionButtonText;
    },
    enumerable: true,
    configurable: true
  });

  MDCSnackbar.prototype.registerKeyDownHandler_ = function (handler) {
    this.listen('keydown', handler);
  };

  MDCSnackbar.prototype.deregisterKeyDownHandler_ = function (handler) {
    this.unlisten('keydown', handler);
  };

  MDCSnackbar.prototype.registerSurfaceClickHandler_ = function (handler) {
    this.surfaceEl_.addEventListener('click', handler);
  };

  MDCSnackbar.prototype.deregisterSurfaceClickHandler_ = function (handler) {
    this.surfaceEl_.removeEventListener('click', handler);
  };

  MDCSnackbar.prototype.isActionButton_ = function (target) {
    return Boolean(Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["closest"])(target, ACTION_SELECTOR));
  };

  MDCSnackbar.prototype.isActionIcon_ = function (target) {
    return Boolean(Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["closest"])(target, DISMISS_SELECTOR));
  };

  return MDCSnackbar;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/snackbar/constants.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/snackbar/constants.js ***!
  \******************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
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
  CLOSING: 'mdc-snackbar--closing',
  OPEN: 'mdc-snackbar--open',
  OPENING: 'mdc-snackbar--opening'
};
var strings = {
  ACTION_SELECTOR: '.mdc-snackbar__action',
  ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text',
  CLOSED_EVENT: 'MDCSnackbar:closed',
  CLOSING_EVENT: 'MDCSnackbar:closing',
  DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
  LABEL_SELECTOR: '.mdc-snackbar__label',
  OPENED_EVENT: 'MDCSnackbar:opened',
  OPENING_EVENT: 'MDCSnackbar:opening',
  REASON_ACTION: 'action',
  REASON_DISMISS: 'dismiss',
  SURFACE_SELECTOR: '.mdc-snackbar__surface'
};
var numbers = {
  DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,
  INDETERMINATE: -1,
  MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
  MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
  // These variables need to be kept in sync with the values in _variables.scss.
  SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
  SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,

  /**
   * Number of milliseconds to wait between temporarily clearing the label text
   * in the DOM and subsequently restoring it. This is necessary to force IE 11
   * to pick up the `aria-live` content change and announce it to the user.
   */
  ARIA_LIVE_DELAY_MS: 1000
};


/***/ }),

/***/ "./node_modules/@material/snackbar/foundation.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/snackbar/foundation.js ***!
  \*******************************************************/
/*! exports provided: MDCSnackbarFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSnackbarFoundation", function() { return MDCSnackbarFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/snackbar/constants.js");
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



var OPENING = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING,
    OPEN = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN,
    CLOSING = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING;
var REASON_ACTION = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].REASON_ACTION,
    REASON_DISMISS = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].REASON_DISMISS;

var MDCSnackbarFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSnackbarFoundation, _super);

  function MDCSnackbarFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCSnackbarFoundation.defaultAdapter, adapter)) || this;

    _this.isOpen_ = false;
    _this.animationFrame_ = 0;
    _this.animationTimer_ = 0;
    _this.autoDismissTimer_ = 0;
    _this.autoDismissTimeoutMs_ = _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
    _this.closeOnEscape_ = true;
    return _this;
  }

  Object.defineProperty(MDCSnackbarFoundation, "cssClasses", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation, "strings", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation, "numbers", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        announce: function () {
          return undefined;
        },
        notifyClosed: function () {
          return undefined;
        },
        notifyClosing: function () {
          return undefined;
        },
        notifyOpened: function () {
          return undefined;
        },
        notifyOpening: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCSnackbarFoundation.prototype.destroy = function () {
    this.clearAutoDismissTimer_();
    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = 0;
    clearTimeout(this.animationTimer_);
    this.animationTimer_ = 0;
    this.adapter_.removeClass(OPENING);
    this.adapter_.removeClass(OPEN);
    this.adapter_.removeClass(CLOSING);
  };

  MDCSnackbarFoundation.prototype.open = function () {
    var _this = this;

    this.clearAutoDismissTimer_();
    this.isOpen_ = true;
    this.adapter_.notifyOpening();
    this.adapter_.removeClass(CLOSING);
    this.adapter_.addClass(OPENING);
    this.adapter_.announce(); // Wait a frame once display is no longer "none", to establish basis for animation

    this.runNextAnimationFrame_(function () {
      _this.adapter_.addClass(OPEN);

      _this.animationTimer_ = setTimeout(function () {
        var timeoutMs = _this.getTimeoutMs();

        _this.handleAnimationTimerEnd_();

        _this.adapter_.notifyOpened();

        if (timeoutMs !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].INDETERMINATE) {
          _this.autoDismissTimer_ = setTimeout(function () {
            _this.close(REASON_DISMISS);
          }, timeoutMs);
        }
      }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].SNACKBAR_ANIMATION_OPEN_TIME_MS);
    });
  };
  /**
   * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
   *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
   *     client-specific values may also be used if desired.
   */


  MDCSnackbarFoundation.prototype.close = function (reason) {
    var _this = this;

    if (reason === void 0) {
      reason = '';
    }

    if (!this.isOpen_) {
      // Avoid redundant close calls (and events), e.g. repeated interactions as the snackbar is animating closed
      return;
    }

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = 0;
    this.clearAutoDismissTimer_();
    this.isOpen_ = false;
    this.adapter_.notifyClosing(reason);
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING);
    clearTimeout(this.animationTimer_);
    this.animationTimer_ = setTimeout(function () {
      _this.handleAnimationTimerEnd_();

      _this.adapter_.notifyClosed(reason);
    }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].SNACKBAR_ANIMATION_CLOSE_TIME_MS);
  };

  MDCSnackbarFoundation.prototype.isOpen = function () {
    return this.isOpen_;
  };

  MDCSnackbarFoundation.prototype.getTimeoutMs = function () {
    return this.autoDismissTimeoutMs_;
  };

  MDCSnackbarFoundation.prototype.setTimeoutMs = function (timeoutMs) {
    // Use shorter variable names to make the code more readable
    var minValue = _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].MIN_AUTO_DISMISS_TIMEOUT_MS;
    var maxValue = _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].MAX_AUTO_DISMISS_TIMEOUT_MS;
    var indeterminateValue = _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].INDETERMINATE;

    if (timeoutMs === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].INDETERMINATE || timeoutMs <= maxValue && timeoutMs >= minValue) {
      this.autoDismissTimeoutMs_ = timeoutMs;
    } else {
      throw new Error("\n        timeoutMs must be an integer in the range " + minValue + "\u2013" + maxValue + "\n        (or " + indeterminateValue + " to disable), but got '" + timeoutMs + "'");
    }
  };

  MDCSnackbarFoundation.prototype.getCloseOnEscape = function () {
    return this.closeOnEscape_;
  };

  MDCSnackbarFoundation.prototype.setCloseOnEscape = function (closeOnEscape) {
    this.closeOnEscape_ = closeOnEscape;
  };

  MDCSnackbarFoundation.prototype.handleKeyDown = function (evt) {
    var isEscapeKey = evt.key === 'Escape' || evt.keyCode === 27;

    if (isEscapeKey && this.getCloseOnEscape()) {
      this.close(REASON_DISMISS);
    }
  };

  MDCSnackbarFoundation.prototype.handleActionButtonClick = function (_evt) {
    this.close(REASON_ACTION);
  };

  MDCSnackbarFoundation.prototype.handleActionIconClick = function (_evt) {
    this.close(REASON_DISMISS);
  };

  MDCSnackbarFoundation.prototype.clearAutoDismissTimer_ = function () {
    clearTimeout(this.autoDismissTimer_);
    this.autoDismissTimer_ = 0;
  };

  MDCSnackbarFoundation.prototype.handleAnimationTimerEnd_ = function () {
    this.animationTimer_ = 0;
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING);
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
  };
  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */


  MDCSnackbarFoundation.prototype.runNextAnimationFrame_ = function (callback) {
    var _this = this;

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = requestAnimationFrame(function () {
      _this.animationFrame_ = 0;
      clearTimeout(_this.animationTimer_);
      _this.animationTimer_ = setTimeout(callback, 0);
    });
  };

  return MDCSnackbarFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCSnackbarFoundation);

/***/ }),

/***/ "./node_modules/@material/snackbar/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/snackbar/index.js ***!
  \**************************************************/
/*! exports provided: util, MDCSnackbar, cssClasses, strings, numbers, MDCSnackbarFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@material/snackbar/util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/@material/snackbar/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSnackbar", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["MDCSnackbar"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/snackbar/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/snackbar/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSnackbarFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCSnackbarFoundation"]; });

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

/***/ "./node_modules/@material/snackbar/util.js":
/*!*************************************************!*\
  !*** ./node_modules/@material/snackbar/util.js ***!
  \*************************************************/
/*! exports provided: announce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "announce", function() { return announce; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/snackbar/constants.js");
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

var ARIA_LIVE_DELAY_MS = _constants__WEBPACK_IMPORTED_MODULE_0__["numbers"].ARIA_LIVE_DELAY_MS;
var ARIA_LIVE_LABEL_TEXT_ATTR = _constants__WEBPACK_IMPORTED_MODULE_0__["strings"].ARIA_LIVE_LABEL_TEXT_ATTR;

function announce(ariaEl, labelEl) {
  if (labelEl === void 0) {
    labelEl = ariaEl;
  }

  var priority = ariaEl.getAttribute('aria-live'); // Trim text to ignore `&nbsp;` (see below).
  // textContent is only null if the node is a document, DOCTYPE, or notation.

  var labelText = labelEl.textContent.trim();

  if (!labelText || !priority) {
    return;
  } // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing the message twice.


  ariaEl.setAttribute('aria-live', 'off'); // Temporarily clear `textContent` to force a DOM mutation event that will be detected by screen readers.
  // `aria-live` elements are only announced when the element's `textContent` *changes*, so snackbars
  // sent to the browser in the initial HTML response won't be read unless we clear the element's `textContent` first.
  // Similarly, displaying the same snackbar message twice in a row doesn't trigger a DOM mutation event,
  // so screen readers won't announce the second message unless we first clear `textContent`.
  //
  // We have to clear the label text two different ways to make it work in all browsers and screen readers:
  //
  //   1. `textContent = ''` is required for IE11 + JAWS
  //   2. `innerHTML = '&nbsp;'` is required for Chrome + JAWS and NVDA
  //
  // All other browser/screen reader combinations support both methods.
  //
  // The wrapper `<span>` visually hides the space character so that it doesn't cause jank when added/removed.
  // N.B.: Setting `position: absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting the DOM change.
  //
  // This technique has been tested in:
  //
  //   * JAWS 2019:
  //       - Chrome 70
  //       - Firefox 60 (ESR)
  //       - IE 11
  //   * NVDA 2018:
  //       - Chrome 70
  //       - Firefox 60 (ESR)
  //       - IE 11
  //   * ChromeVox 53

  labelEl.textContent = '';
  labelEl.innerHTML = '<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>'; // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
  // CSS generated content is normally announced by screen readers
  // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
  // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.

  labelEl.setAttribute(ARIA_LIVE_LABEL_TEXT_ATTR, labelText);
  setTimeout(function () {
    // Allow screen readers to announce changes to the DOM again.
    ariaEl.setAttribute('aria-live', priority); // Remove the message from the ::before pseudo-element.

    labelEl.removeAttribute(ARIA_LIVE_LABEL_TEXT_ATTR); // Restore the original label text, which will be announced by screen readers.

    labelEl.textContent = labelText;
  }, ARIA_LIVE_DELAY_MS);
}



/***/ }),

/***/ "./node_modules/after/index.js":
/*!*************************************!*\
  !*** ./node_modules/after/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = after;

function after(count, callback, err_cb) {
  var bail = false;
  err_cb = err_cb || noop;
  proxy.count = count;
  return count === 0 ? callback() : proxy;

  function proxy(err, result) {
    if (proxy.count <= 0) {
      throw new Error('after called too many times');
    }

    --proxy.count; // after first error, rest are passed to err_cb

    if (err) {
      bail = true;
      callback(err); // future error callbacks will go to error handler

      callback = err_cb;
    } else if (proxy.count === 0 && !bail) {
      callback(null, result);
    }
  }
}

function noop() {}

/***/ }),

/***/ "./node_modules/arraybuffer.slice/index.js":
/*!*************************************************!*\
  !*** ./node_modules/arraybuffer.slice/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */
module.exports = function (arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) {
    return arraybuffer.slice(start, end);
  }

  if (start < 0) {
    start += bytes;
  }

  if (end < 0) {
    end += bytes;
  }

  if (end > bytes) {
    end = bytes;
  }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);

  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }

  return result.buffer;
};

/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `Backoff`.
 */
module.exports = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */


Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */


Backoff.prototype.reset = function () {
  this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */


Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */


Backoff.prototype.setMax = function (max) {
  this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */


Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function () {
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; // Use a lookup table to find the index.

  var lookup = new Uint8Array(256);

  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;

      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i + 1)];
      encoded3 = lookup[base64.charCodeAt(i + 2)];
      encoded4 = lookup[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})();

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),

/***/ "./node_modules/blob/index.js":
/*!************************************!*\
  !*** ./node_modules/blob/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Create a blob builder even when vendor prefixes exist
 */
var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : false;
/**
 * Check if Blob constructor is supported
 */

var blobSupported = function () {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch (e) {
    return false;
  }
}();
/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */


var blobSupportsArrayBufferView = blobSupported && function () {
  try {
    var b = new Blob([new Uint8Array([1, 2])]);
    return b.size === 2;
  } catch (e) {
    return false;
  }
}();
/**
 * Check if BlobBuilder is supported
 */


var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function (chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer; // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer

      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};
  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function (part) {
    bb.append(part);
  });
  return options.type ? bb.getBlob(options.type) : bb.getBlob();
}

;

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
}

;

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = function () {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
}();

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");

var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");

var isArray = __webpack_require__(/*! isarray */ "./node_modules/buffer/node_modules/isarray/index.js");

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/buffer/node_modules/isarray/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/buffer/node_modules/isarray/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/component-bind/index.js":
/*!**********************************************!*\
  !*** ./node_modules/component-bind/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Slice reference.
 */
var slice = [].slice;
/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function (obj, fn) {
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function () {
    return fn.apply(obj, args.concat(slice.call(arguments)));
  };
};

/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Expose `Emitter`.
 */
if (true) {
  module.exports = Emitter;
}
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */


function Emitter(obj) {
  if (obj) return mixin(obj);
}

;
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */


Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ "./node_modules/component-inherit/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-inherit/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (a, b) {
  var fn = function () {};

  fn.prototype = b.prototype;
  a.prototype = new fn();
  a.prototype.constructor = a;
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/globalThis.browser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/globalThis.browser.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else {
    return Function('return this')(); // eslint-disable-line no-new-func
  }
}();

/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");
/**
 * Exports parser
 *
 * @api public
 *
 */

module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:socket');

var index = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
/**
 * Module exports.
 */


module.exports = Socket;
/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);
  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure : typeof location !== 'undefined' && 'https:' === location.protocol;

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname || (typeof location !== 'undefined' ? location.hostname : 'localhost');
  this.port = opts.port || (typeof location !== 'undefined' && location.port ? location.port : this.secure ? 443 : 80);
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.withCredentials = false !== opts.withCredentials;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;
  if (true === this.perMessageDeflate) this.perMessageDeflate = {};

  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  } // SSL options for Node.js client


  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode; // detect ReactNative environment

  this.isReactNative = typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative'; // other options for Node.js or ReactNative client

  if (typeof self === 'undefined' || this.isReactNative) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  } // set on handshake


  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null; // set on heartbeat

  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;
  this.open();
}

Socket.priorWebsocketSuccess = false;
/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);
/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
Socket.transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
Socket.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query); // append engine.io protocol identifier

  query.EIO = parser.protocol; // transport name

  query.transport = name; // per-transport options

  var options = this.transportOptions[name] || {}; // session id if we already have one

  if (this.id) query.sid = this.id;
  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    withCredentials: options.withCredentials || this.withCredentials,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void 0,
    isReactNative: this.isReactNative
  });
  return transport;
};

function clone(obj) {
  var o = {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }

  return o;
}
/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */


Socket.prototype.open = function () {
  var transport;

  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }

  this.readyState = 'opening'; // Retry with the next transport if the transport is disabled (jsonp: false)

  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};
/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */


Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  } // set up transport


  this.transport = transport; // set up transport listeners

  transport.on('drain', function () {
    self.onDrain();
  }).on('packet', function (packet) {
    self.onPacket(packet);
  }).on('error', function (e) {
    self.onError(e);
  }).on('close', function () {
    self.onClose('transport close');
  });
};
/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */


Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, {
    probe: 1
  });
  var failed = false;
  var self = this;
  Socket.priorWebsocketSuccess = false;

  function onTransportOpen() {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }

    if (failed) return;
    debug('probe transport "%s" opened', name);
    transport.send([{
      type: 'ping',
      data: 'probe'
    }]);
    transport.once('packet', function (msg) {
      if (failed) return;

      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;
        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');
          cleanup();
          self.setTransport(transport);
          transport.send([{
            type: 'upgrade'
          }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport() {
    if (failed) return; // Any callback called by transport should be ignored since now

    failed = true;
    cleanup();
    transport.close();
    transport = null;
  } // Handle any error that happens while probing


  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;
    freezeTransport();
    debug('probe transport "%s" failed because of error: %s', name, err);
    self.emit('upgradeError', error);
  }

  function onTransportClose() {
    onerror('transport closed');
  } // When the socket is closed while we're probing


  function onclose() {
    onerror('socket closed');
  } // When the socket is upgraded while we're probing


  function onupgrade(to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  } // Remove all listeners on the transport and on self


  function cleanup() {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);
  this.once('close', onclose);
  this.once('upgrading', onupgrade);
  transport.open();
};
/**
 * Called when connection is deemed open.
 *
 * @api public
 */


Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush(); // we check for `readyState` in case an `open`
  // listener already closed the socket

  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');

    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};
/**
 * Handles a packet.
 *
 * @api private
 */


Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
    this.emit('packet', packet); // Socket is live - any packet counts

    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};
/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */


Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen(); // In case open handler closes socket

  if ('closed' === this.readyState) return;
  this.setPing(); // Prolong liveness of socket on heartbeat

  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};
/**
 * Resets ping timeout.
 *
 * @api private
 */


Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || self.pingInterval + self.pingTimeout);
};
/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */


Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};
/**
* Sends a ping packet.
*
* @api private
*/


Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};
/**
 * Called on `drain` event
 *
 * @api private
 */


Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`

  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};
/**
 * Flush write buffers.
 *
 * @api private
 */


Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`

    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};
/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */


Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};
/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */


Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;
  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};
/**
 * Closes the connection.
 *
 * @api private
 */


Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';
    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close() {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose() {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade() {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};
/**
 * Called upon transport error
 *
 * @api private
 */


Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};
/**
 * Called upon transport close.
 *
 * @api private
 */


Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this; // clear timers

    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer); // stop event from firing again for transport

    this.transport.removeAllListeners('close'); // ensure transport won't stay open

    this.transport.close(); // ignore further transport communication

    this.transport.removeAllListeners(); // set ready state

    this.readyState = 'closed'; // clear session id

    this.id = null; // emit close event

    this.emit('close', reason, desc); // clean buffers after, so users can still
    // grab the buffers on `close` event

    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};
/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */


Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];

  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }

  return filteredUpgrades;
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
/**
 * Module exports.
 */


module.exports = Transport;
/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport(opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;
  this.withCredentials = opts.withCredentials; // SSL options for Node.js client

  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode; // results of ReactNative environment detection

  this.isReactNative = opts.isReactNative; // other options for Node.js client

  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}
/**
 * Mix in `Emitter`.
 */


Emitter(Transport.prototype);
/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};
/**
 * Opens the transport.
 *
 * @api public
 */


Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};
/**
 * Closes the transport.
 *
 * @api private
 */


Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};
/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */


Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};
/**
 * Called upon open
 *
 * @api private
 */


Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};
/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */


Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};
/**
 * Called with a decoded packet.
 */


Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};
/**
 * Called upon close.
 *
 * @api private
 */


Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */
var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");

var XHR = __webpack_require__(/*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js");

var JSONP = __webpack_require__(/*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js");

var websocket = __webpack_require__(/*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");
/**
 * Export transports.
 */


exports.polling = polling;
exports.websocket = websocket;
/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module requirements.
 */
var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");

var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

var globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");
/**
 * Module exports.
 */


module.exports = JSONPPolling;
/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;
/**
 * Global JSONP callbacks.
 */

var callbacks;
/**
 * Noop.
 */

function empty() {}
/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */


function JSONPPolling(opts) {
  Polling.call(this, opts);
  this.query = this.query || {}; // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution

  if (!callbacks) {
    // we need to consider multiple engines in the same page
    callbacks = globalThis.___eio = globalThis.___eio || [];
  } // callback identifier


  this.index = callbacks.length; // add callback to jsonp global

  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  }); // append to query string

  this.query.j = this.index; // prevent spurious errors from being emitted when the window is unloaded

  if (typeof addEventListener === 'function') {
    addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}
/**
 * Inherits from Polling.
 */


inherit(JSONPPolling, Polling);
/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;
/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};
/**
 * Starts a poll cycle.
 *
 * @api private
 */


JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();

  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];

  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }

  this.script = script;
  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};
/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */


JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;
    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);
    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete() {
    initIframe();
    fn();
  }

  function initIframe() {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;
    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe(); // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side

  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global attachEvent */

/**
 * Module requirements.
 */
var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");

var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:polling-xhr');

var globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");
/**
 * Module exports.
 */


module.exports = XHR;
module.exports.Request = Request;
/**
 * Empty function
 */

function empty() {}
/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */


function XHR(opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = typeof location !== 'undefined' && opts.hostname !== location.hostname || port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}
/**
 * Inherits from Polling.
 */


inherit(XHR, Polling);
/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;
/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;
  opts.withCredentials = this.withCredentials; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout; // other options for Node.js client

  opts.extraHeaders = this.extraHeaders;
  return new Request(opts);
};
/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */


XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({
    method: 'POST',
    data: data,
    isBinary: isBinary
  });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};
/**
 * Starts a poll cycle.
 *
 * @api private
 */


XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};
/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */


function Request(opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.withCredentials = opts.withCredentials;
  this.requestTimeout = opts.requestTimeout; // SSL options for Node.js client

  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized; // other options for Node.js client

  this.extraHeaders = opts.extraHeaders;
  this.create();
}
/**
 * Mix in `Emitter`.
 */


Emitter(Request.prototype);
/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = {
    agent: this.agent,
    xdomain: this.xd,
    xscheme: this.xs,
    enablesXDR: this.enablesXDR
  }; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);

    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {} // ie6 check


    if ('withCredentials' in xhr) {
      xhr.withCredentials = this.withCredentials;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };

      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');

            if (self.supportsBinary && contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }

        if (4 !== xhr.readyState) return;

        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(typeof xhr.status === 'number' ? xhr.status : 0);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (typeof document !== 'undefined') {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};
/**
 * Called upon successful response.
 *
 * @api private
 */


Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};
/**
 * Called if we have data.
 *
 * @api private
 */


Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};
/**
 * Called upon error.
 *
 * @api private
 */


Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};
/**
 * Cleans up house.
 *
 * @api private
 */


Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  } // xmlhttprequest


  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (typeof document !== 'undefined') {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};
/**
 * Called upon load.
 *
 * @api private
 */


Request.prototype.onLoad = function () {
  var data;

  try {
    var contentType;

    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}

    if (contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }

  if (null != data) {
    this.onData(data);
  }
};
/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */


Request.prototype.hasXDR = function () {
  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
};
/**
 * Aborts the request.
 *
 * @api public
 */


Request.prototype.abort = function () {
  this.cleanup();
};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */


Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== 'undefined') {
  if (typeof attachEvent === 'function') {
    attachEvent('onunload', unloadHandler);
  } else if (typeof addEventListener === 'function') {
    var terminationEvent = 'onpagehide' in globalThis ? 'pagehide' : 'unload';
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:polling');
/**
 * Module exports.
 */


module.exports = Polling;
/**
 * Is XHR2 supported?
 */

var hasXHR2 = function () {
  var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");

  var xhr = new XMLHttpRequest({
    xdomain: false
  });
  return null != xhr.responseType;
}();
/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */


function Polling(opts) {
  var forceBase64 = opts && opts.forceBase64;

  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }

  Transport.call(this, opts);
}
/**
 * Inherits from Transport.
 */


inherit(Polling, Transport);
/**
 * Transport name.
 */

Polling.prototype.name = 'polling';
/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};
/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */


Polling.prototype.pause = function (onPause) {
  var self = this;
  this.readyState = 'pausing';

  function pause() {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};
/**
 * Starts polling cycle.
 *
 * @api public
 */


Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};
/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */


Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);

  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    } // if its a close packet, we close the ongoing requests


    if ('close' === packet.type) {
      self.onClose();
      return false;
    } // otherwise bypass onData and handle the message


    self.onPacket(packet);
  }; // decode payload


  parser.decodePayload(data, this.socket.binaryType, callback); // if an event did not trigger closing

  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};
/**
 * For polling, send a close packet.
 *
 * @api private
 */


Polling.prototype.doClose = function () {
  var self = this;

  function close() {
    debug('writing close packet');
    self.write([{
      type: 'close'
    }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};
/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */


Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};
/**
 * Generates uri for connection.
 *
 * @api private
 */


Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = ''; // cache busting is forced

  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query); // avoid port if default for schema

  if (this.port && ('https' === schema && Number(this.port) !== 443 || 'http' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  } // prepend ? to query


  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Module dependencies.
 */
var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:websocket');

var BrowserWebSocket, NodeWebSocket;

if (typeof WebSocket !== 'undefined') {
  BrowserWebSocket = WebSocket;
} else if (typeof self !== 'undefined') {
  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
}

if (typeof window === 'undefined') {
  try {
    NodeWebSocket = __webpack_require__(/*! ws */ 1);
  } catch (e) {}
}
/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */


var WebSocketImpl = BrowserWebSocket || NodeWebSocket;
/**
 * Module exports.
 */

module.exports = WS;
/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts) {
  var forceBase64 = opts && opts.forceBase64;

  if (forceBase64) {
    this.supportsBinary = false;
  }

  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;

  if (!this.usingBrowserWebSocket) {
    WebSocketImpl = NodeWebSocket;
  }

  Transport.call(this, opts);
}
/**
 * Inherits from Transport.
 */


inherit(WS, Transport);
/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';
/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;
/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  }; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }

  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? protocols ? new WebSocketImpl(uri, protocols) : new WebSocketImpl(uri) : new WebSocketImpl(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};
/**
 * Adds event listeners to the socket
 *
 * @api private
 */


WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };

  this.ws.onclose = function () {
    self.onClose();
  };

  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };

  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};
/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */


WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false; // encodePacket efficient as it uses WS framing
  // no need for encodePayload

  var total = packets.length;

  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};

          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;

            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        } // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error


        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done() {
    self.emit('flush'); // fake drain
    // defer to next tick to allow Socket to clear writeBuffer

    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};
/**
 * Called upon close
 *
 * @api private
 */


WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};
/**
 * Closes socket.
 *
 * @api private
 */


WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};
/**
 * Generates uri for connection.
 *
 * @api private
 */


WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = ''; // avoid port if default for schema

  if (this.port && ('wss' === schema && Number(this.port) !== 443 || 'ws' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  } // append timestamp to URI


  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  } // communicate binary support capabilities


  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query); // prepend ? to query

  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};
/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */


WS.prototype.check = function () {
  return !!WebSocketImpl && !('__initialize' in WebSocketImpl && this.name === WS.prototype.name);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/xmlhttprequest.js":
/*!*************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// browser shim for xmlhttprequest module
var hasCORS = __webpack_require__(/*! has-cors */ "./node_modules/has-cors/index.js");

var globalThis = __webpack_require__(/*! ./globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

module.exports = function (opts) {
  var xdomain = opts.xdomain; // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx

  var xscheme = opts.xscheme; // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217

  var enablesXDR = opts.enablesXDR; // XMLHttpRequest can be disabled on IE

  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {} // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example


  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new globalThis[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) {}
  }
};

/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  const c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  let index = 0;
  let lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, match => {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log(...args) {
  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return typeof console === 'object' && console.log && console.log(...args);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  let r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/engine.io-client/node_modules/debug/src/common.js")(exports);
const {
  formatters
} = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/common.js":
/*!************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/common.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/engine.io-client/node_modules/ms/index.js");
  Object.keys(env).forEach(key => {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    let hash = 0;

    for (let i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    let prevTime;

    function debug(...args) {
      // Disabled?
      if (!debug.enabled) {
        return;
      }

      const self = debug; // Set `diff` timestamp

      const curr = Number(new Date());
      const ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      let index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        const formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          const val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      const logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    const index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    let i;
    const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    const len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      const instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    const namespaces = [...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)].join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    let i;
    let len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;

/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/ms/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/ms/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }

  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }

  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }

  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/browser.js":
/*!******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var keys = __webpack_require__(/*! ./keys */ "./node_modules/engine.io-parser/lib/keys.js");

var hasBinary = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");

var sliceBuffer = __webpack_require__(/*! arraybuffer.slice */ "./node_modules/arraybuffer.slice/index.js");

var after = __webpack_require__(/*! after */ "./node_modules/after/index.js");

var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/engine.io-parser/lib/utf8.js");

var base64encoder;

if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}
/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */


var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */

var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */

var dontSendBlobs = isAndroid || isPhantomJS;
/**
 * Current protocol version.
 */

exports.protocol = 3;
/**
 * Packet types.
 */

var packets = exports.packets = {
  open: 0 // non-ws
  ,
  close: 1 // non-ws
  ,
  ping: 2,
  pong: 3,
  message: 4,
  upgrade: 5,
  noop: 6
};
var packetslist = keys(packets);
/**
 * Premade error packet.
 */

var err = {
  type: 'error',
  data: 'parser error'
};
/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(/*! blob */ "./node_modules/blob/index.js");
/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */


exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  } // might be an object with { base64: true, data: dataAsBase64String }


  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  } // Sending data as a utf-8 string


  var encoded = packets[packet.type]; // data fragment is optional

  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), {
      strict: false
    }) : String(packet.data);
  }

  return callback('' + encoded);
};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}
/**
 * Encode packet helpers for binary types
 */


function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);
  resultBuffer[0] = packets[packet.type];

  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i + 1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();

  fr.onload = function () {
    exports.encodePacket({
      type: packet.type,
      data: fr.result
    }, supportsBinary, true, callback);
  };

  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);
  return callback(blob);
}
/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */


exports.encodeBase64Packet = function (packet, callback) {
  var message = 'b' + exports.packets[packet.type];

  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();

    fr.onload = function () {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };

    return fr.readAsDataURL(packet.data);
  }

  var b64data;

  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);

    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }

    b64data = String.fromCharCode.apply(null, basic);
  }

  message += btoa(b64data);
  return callback(message);
};
/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */


exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  } // String data


  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);

      if (data === false) {
        return err;
      }
    }

    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return {
        type: packetslist[type],
        data: data.substring(1)
      };
    } else {
      return {
        type: packetslist[type]
      };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);

  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }

  return {
    type: packetslist[type],
    data: rest
  };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, {
      strict: false
    });
  } catch (e) {
    return false;
  }

  return data;
}
/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */


exports.decodeBase64Packet = function (msg, binaryType) {
  var type = packetslist[msg.charAt(0)];

  if (!base64encoder) {
    return {
      type: type,
      data: {
        base64: true,
        data: msg.substr(1)
      }
    };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return {
    type: type,
    data: data
  };
};
/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */


exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function (message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function (err, results) {
    return callback(results.join(''));
  });
};
/**
 * Async array map using after
 */


function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function (i, el, cb) {
    each(el, function (error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}
/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */


exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;

  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '',
      n,
      msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || length != (n = Number(length))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    } // advance cursor


    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }
};
/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */


exports.encodePayloadAsArrayBuffer = function (packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function (data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function (err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function (acc, p) {
      var len;

      if (typeof p === 'string') {
        len = p.length;
      } else {
        len = p.byteLength;
      }

      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);
    var resultArray = new Uint8Array(totalLength);
    var bufferIndex = 0;
    encodedPackets.forEach(function (p) {
      var isString = typeof p === 'string';
      var ab = p;

      if (isString) {
        var view = new Uint8Array(p.length);

        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }

        ab = view.buffer;
      }

      if (isString) {
        // not true binary
        resultArray[bufferIndex++] = 0;
      } else {
        // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();

      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }

      resultArray[bufferIndex++] = 255;
      var view = new Uint8Array(ab);

      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });
    return callback(resultArray.buffer);
  });
};
/**
 * Encode as Blob
 */


exports.encodePayloadAsBlob = function (packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function (encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;

      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);

        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }

        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;
      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);

      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }

      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function (err, results) {
    return callback(new Blob(results));
  });
};
/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */


exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1;; i++) {
      if (tailArray[i] === 255) break; // 310 = char length of Number.MAX_VALUE

      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);
    var msg = sliceBuffer(bufferTail, 0, msgLength);

    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';

        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function (buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/keys.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */
module.exports = Object.keys || function keys(obj) {
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }

  return arr;
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/utf8.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/utf8.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! https://mths.be/utf8js v2.1.2 by @mathias */
var stringFromCharCode = String.fromCharCode; // Taken from https://mths.be/punycode

function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  var value;
  var extra;

  while (counter < length) {
    value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // high surrogate, and there is a next character
      extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // low surrogate
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // unmatched surrogate; only append this code unit, in case the next
        // code unit is the high surrogate of a surrogate pair
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
} // Taken from https://mths.be/punycode


function ucs2encode(array) {
  var length = array.length;
  var index = -1;
  var value;
  var output = '';

  while (++index < length) {
    value = array[index];

    if (value > 0xFFFF) {
      value -= 0x10000;
      output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
      value = 0xDC00 | value & 0x3FF;
    }

    output += stringFromCharCode(value);
  }

  return output;
}

function checkScalarValue(codePoint, strict) {
  if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
    if (strict) {
      throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
    }

    return false;
  }

  return true;
}
/*--------------------------------------------------------------------------*/


function createByte(codePoint, shift) {
  return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
}

function encodeCodePoint(codePoint, strict) {
  if ((codePoint & 0xFFFFFF80) == 0) {
    // 1-byte sequence
    return stringFromCharCode(codePoint);
  }

  var symbol = '';

  if ((codePoint & 0xFFFFF800) == 0) {
    // 2-byte sequence
    symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
  } else if ((codePoint & 0xFFFF0000) == 0) {
    // 3-byte sequence
    if (!checkScalarValue(codePoint, strict)) {
      codePoint = 0xFFFD;
    }

    symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
    symbol += createByte(codePoint, 6);
  } else if ((codePoint & 0xFFE00000) == 0) {
    // 4-byte sequence
    symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
    symbol += createByte(codePoint, 12);
    symbol += createByte(codePoint, 6);
  }

  symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
  return symbol;
}

function utf8encode(string, opts) {
  opts = opts || {};
  var strict = false !== opts.strict;
  var codePoints = ucs2decode(string);
  var length = codePoints.length;
  var index = -1;
  var codePoint;
  var byteString = '';

  while (++index < length) {
    codePoint = codePoints[index];
    byteString += encodeCodePoint(codePoint, strict);
  }

  return byteString;
}
/*--------------------------------------------------------------------------*/


function readContinuationByte() {
  if (byteIndex >= byteCount) {
    throw Error('Invalid byte index');
  }

  var continuationByte = byteArray[byteIndex] & 0xFF;
  byteIndex++;

  if ((continuationByte & 0xC0) == 0x80) {
    return continuationByte & 0x3F;
  } // If we end up here, it’s not a continuation byte


  throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
  var byte1;
  var byte2;
  var byte3;
  var byte4;
  var codePoint;

  if (byteIndex > byteCount) {
    throw Error('Invalid byte index');
  }

  if (byteIndex == byteCount) {
    return false;
  } // Read first byte


  byte1 = byteArray[byteIndex] & 0xFF;
  byteIndex++; // 1-byte sequence (no continuation bytes)

  if ((byte1 & 0x80) == 0) {
    return byte1;
  } // 2-byte sequence


  if ((byte1 & 0xE0) == 0xC0) {
    byte2 = readContinuationByte();
    codePoint = (byte1 & 0x1F) << 6 | byte2;

    if (codePoint >= 0x80) {
      return codePoint;
    } else {
      throw Error('Invalid continuation byte');
    }
  } // 3-byte sequence (may include unpaired surrogates)


  if ((byte1 & 0xF0) == 0xE0) {
    byte2 = readContinuationByte();
    byte3 = readContinuationByte();
    codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;

    if (codePoint >= 0x0800) {
      return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
    } else {
      throw Error('Invalid continuation byte');
    }
  } // 4-byte sequence


  if ((byte1 & 0xF8) == 0xF0) {
    byte2 = readContinuationByte();
    byte3 = readContinuationByte();
    byte4 = readContinuationByte();
    codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;

    if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
      return codePoint;
    }
  }

  throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;

function utf8decode(byteString, opts) {
  opts = opts || {};
  var strict = false !== opts.strict;
  byteArray = ucs2decode(byteString);
  byteCount = byteArray.length;
  byteIndex = 0;
  var codePoints = [];
  var tmp;

  while ((tmp = decodeSymbol(strict)) !== false) {
    codePoints.push(tmp);
  }

  return ucs2encode(codePoints);
}

module.exports = {
  version: '2.1.2',
  encode: utf8encode,
  decode: utf8decode
};

/***/ }),

/***/ "./node_modules/has-binary2/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-binary2/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/* global Blob File */

/*
 * Module requirements.
 */
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
/**
 * Module exports.
 */

module.exports = hasBinary;
/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }

    return false;
  }

  if (typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj) || typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
    return true;
  } // see: https://github.com/Automattic/has-binary/pull/4


  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */
try {
  module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var indexOf = [].indexOf;

module.exports = function (arr, obj) {
  if (indexOf) return arr.indexOf(obj);

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }

  return -1;
};

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, n, name) {
  if (ms < n) {
    return;
  }

  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }

  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */


exports.decode = function (qs) {
  var qry = {};
  var pairs = qs.split('&');

  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
};

/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

module.exports = function parseuri(str) {
  var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');

  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }

  var m = re.exec(str || ''),
      uri = {},
      i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  return uri;
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/socket.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var url = __webpack_require__(/*! ./url */ "./node_modules/socket.io-client/lib/url.js");

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");

var Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client');
/**
 * Module exports.
 */


module.exports = exports = lookup;
/**
 * Managers cache.
 */

var cache = exports.managers = {};
/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;
  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }

    io = cache[id];
  }

  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }

  return io.socket(parsed.path, opts);
}
/**
 * Protocol version.
 *
 * @api public
 */


exports.protocol = parser.protocol;
/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;
/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
exports.Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");

/***/ }),

/***/ "./node_modules/socket.io-client/lib/manager.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-client/lib/manager.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var eio = __webpack_require__(/*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js");

var Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");

var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");

var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:manager');

var indexOf = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");

var Backoff = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");
/**
 * IE6+ hasOwnProperty
 */


var has = Object.prototype.hasOwnProperty;
/**
 * Module exports
 */

module.exports = Manager;
/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];

  var _parser = opts.parser || parser;

  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}
/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */


Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);

  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};
/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */


Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};
/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */


Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : nsp + '#') + this.engine.id;
};
/**
 * Mix in `Emitter`.
 */


Emitter(Manager.prototype);
/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};
/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};
/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};
/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};
/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};
/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */


Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};
/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */


Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;
  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false; // emit `open`

  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  }); // emit `connect_error`

  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);

    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  }); // emit `connect_timeout`

  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout); // set timer

    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);
    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);
  return this;
};
/**
 * Called upon transport open.
 *
 * @api private
 */


Manager.prototype.onopen = function () {
  debug('open'); // clear old subs

  this.cleanup(); // mark as open

  this.readyState = 'open';
  this.emit('open'); // add new subs

  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};
/**
 * Called upon a ping.
 *
 * @api private
 */


Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};
/**
 * Called upon a packet.
 *
 * @api private
 */


Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};
/**
 * Called with data.
 *
 * @api private
 */


Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};
/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */


Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};
/**
 * Called upon socket error.
 *
 * @api private
 */


Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};
/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */


Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];

  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting() {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};
/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */


Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;
  this.close();
};
/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */


Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }

      self.encoding = false;
      self.processPacketQueue();
    });
  } else {
    // add packet to the queue
    self.packetBuffer.push(packet);
  }
};
/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */


Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};
/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */


Manager.prototype.cleanup = function () {
  debug('cleanup');
  var subsLength = this.subs.length;

  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;
  this.decoder.destroy();
};
/**
 * Close the current socket.
 *
 * @api private
 */


Manager.prototype.close = Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;

  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }

  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};
/**
 * Called upon engine close.
 *
 * @api private
 */


Manager.prototype.onclose = function (reason) {
  debug('onclose');
  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};
/**
 * Attempt a reconnection.
 *
 * @api private
 */


Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;
  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);
    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;
      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts); // check again for the case socket closed in above events

      if (self.skipReconnect) return;
      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);
    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};
/**
 * Called upon successful reconnect.
 *
 * @api private
 */


Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

/***/ }),

/***/ "./node_modules/socket.io-client/lib/on.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-client/lib/on.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Module exports.
 */
module.exports = on;
/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}

/***/ }),

/***/ "./node_modules/socket.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var toArray = __webpack_require__(/*! to-array */ "./node_modules/to-array/index.js");

var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");

var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:socket');

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var hasBin = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");
/**
 * Module exports.
 */


module.exports = exports = Socket;
/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};
/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;
/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat

  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};

  if (opts && opts.query) {
    this.query = opts.query;
  }

  if (this.io.autoConnect) this.open();
}
/**
 * Mix in `Emitter`.
 */


Emitter(Socket.prototype);
/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;
  var io = this.io;
  this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
};
/**
 * "Opens" the socket.
 *
 * @api public
 */


Socket.prototype.open = Socket.prototype.connect = function () {
  if (this.connected) return this;
  this.subEvents();
  this.io.open(); // ensure open

  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};
/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */


Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};
/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */


Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };
  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress; // event ack callback

  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};
  return this;
};
/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};
/**
 * Called upon engine `open`.
 *
 * @api private
 */


Socket.prototype.onopen = function () {
  debug('transport is open - connecting'); // write connect packet if necessary

  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({
        type: parser.CONNECT,
        query: query
      });
    } else {
      this.packet({
        type: parser.CONNECT
      });
    }
  }
};
/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */


Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};
/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';
  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};
/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};
/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */


Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);
    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};
/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];

  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};
/**
 * Called upon server connect.
 *
 * @api private
 */


Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};
/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */


Socket.prototype.emitBuffered = function () {
  var i;

  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }

  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }

  this.sendBuffer = [];
};
/**
 * Called upon server disconnect.
 *
 * @api private
 */


Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};
/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */


Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }

    this.subs = null;
  }

  this.io.destroy(this);
};
/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */


Socket.prototype.close = Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({
      type: parser.DISCONNECT
    });
  } // remove socket from pool


  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }

  return this;
};
/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */


Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};
/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */


Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};

/***/ }),

/***/ "./node_modules/socket.io-client/lib/url.js":
/*!**************************************************!*\
  !*** ./node_modules/socket.io-client/lib/url.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:url');
/**
 * Module exports.
 */


module.exports = url;
/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc) {
  var obj = uri; // default to window.location

  loc = loc || typeof location !== 'undefined' && location;
  if (null == uri) uri = loc.protocol + '//' + loc.host; // relative path support

  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);

      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    } // parse


    debug('parse %s', uri);
    obj = parseuri(uri);
  } // make sure we treat `localhost:80` and `localhost` equally


  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';
  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host; // define unique id

  obj.id = obj.protocol + '://' + host + ':' + obj.port; // define href

  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);
  return obj;
}

/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  const c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  let index = 0;
  let lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, match => {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log(...args) {
  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return typeof console === 'object' && console.log && console.log(...args);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  let r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/socket.io-client/node_modules/debug/src/common.js")(exports);
const {
  formatters
} = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/common.js":
/*!************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/common.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/socket.io-client/node_modules/ms/index.js");
  Object.keys(env).forEach(key => {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    let hash = 0;

    for (let i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    let prevTime;

    function debug(...args) {
      // Disabled?
      if (!debug.enabled) {
        return;
      }

      const self = debug; // Set `diff` timestamp

      const curr = Number(new Date());
      const ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      let index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        const formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          const val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      const logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    const index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    let i;
    const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    const len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      const instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    const namespaces = [...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)].join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    let i;
    let len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;

/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/ms/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/ms/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }

  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }

  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }

  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),

/***/ "./node_modules/socket.io-parser/binary.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-parser/binary.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global Blob,File*/

/**
 * Module requirements
 */
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function (packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'

  return {
    packet: pack,
    buffers: buffers
  };
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);

    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }

    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};

    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }

    return newData;
  }

  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */


exports.reconstructPacket = function (packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful

  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}
/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */


exports.removeBlobs = function (data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj; // convert any blob

    if (withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
      pendingBlobs++; // async filereader

      var fileReader = new FileReader();

      fileReader.onload = function () {
        // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        } else {
          bloblessData = this.result;
        } // if nothing pending its callback time


        if (! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) {
      // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) {
      // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;

  _removeBlobs(bloblessData);

  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

/***/ }),

/***/ "./node_modules/socket.io-parser/index.js":
/*!************************************************!*\
  !*** ./node_modules/socket.io-parser/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-parser/node_modules/debug/src/browser.js")('socket.io-parser');

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var binary = __webpack_require__(/*! ./binary */ "./node_modules/socket.io-parser/binary.js");

var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");
/**
 * Protocol version.
 *
 * @api public
 */


exports.protocol = 4;
/**
 * Packet types.
 *
 * @api public
 */

exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];
/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;
/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;
/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;
/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;
/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;
/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;
/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;
/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;
/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;
/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';
/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function (obj, callback) {
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};
/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */


function encodeAsString(obj) {
  // first is type
  var str = '' + obj.type; // attachments if we have them

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  } // if we have a namespace other than `/`
  // we append it followed by a comma `,`


  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  } // immediately followed by the id


  if (null != obj.id) {
    str += obj.id;
  } // json data


  if (null != obj.data) {
    var payload = tryStringify(obj.data);

    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch (e) {
    return false;
  }
}
/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */


function encodeAsBinary(obj, callback) {
  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;
    buffers.unshift(pack); // add packet info to beginning of data list

    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */


function Decoder() {
  this.reconstructor = null;
}
/**
 * Mix in `Emitter` with Decoder.
 */


Emitter(Decoder.prototype);
/**
 * Decodes an encoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function (obj) {
  var packet;

  if (typeof obj === 'string') {
    packet = decodeString(obj);

    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) {
      // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else {
      // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) {
    // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);

      if (packet) {
        // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};
/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */


function decodeString(str) {
  var i = 0; // look up type

  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  } // look up attachments if type binary


  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';

    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }

    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }

    p.attachments = Number(buf);
  } // look up namespace (if any)


  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';

    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  } // look up id


  var next = str.charAt(i + 1);

  if ('' !== next && Number(next) == next) {
    p.id = '';

    while (++i) {
      var c = str.charAt(i);

      if (null == c || Number(c) != c) {
        --i;
        break;
      }

      p.id += str.charAt(i);
      if (i === str.length) break;
    }

    p.id = Number(p.id);
  } // look up json data


  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));

    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}
/**
 * Deallocates a parser's resources
 *
 * @api public
 */


Decoder.prototype.destroy = function () {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */


function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}
/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */


BinaryReconstructor.prototype.takeBinaryData = function (binData) {
  this.buffers.push(binData);

  if (this.buffers.length === this.reconPack.attachments) {
    // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }

  return null;
};
/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */


BinaryReconstructor.prototype.finishedReconstruction = function () {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}

/***/ }),

/***/ "./node_modules/socket.io-parser/is-buffer.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-parser/is-buffer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = isBuf;
var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function (obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */


function isBuf(obj) {
  return withNativeBuffer && Buffer.isBuffer(obj) || withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/socket.io-parser/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/socket.io-parser/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/socket.io-parser/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/socket.io-parser/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/socket.io-parser/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
/**
 * Active `debug` instances.
 */

exports.instances = [];
/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */


function createDebug(namespace) {
  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;
    var self = debug; // set `diff` timestamp

    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr; // turn the `arguments` into a proper Array

    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    } // apply any `formatters` transformations


    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];

      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

        args.splice(index, 1);
        index--;
      }

      return match;
    }); // apply env-specific formatting (colors, etc.)

    exports.formatArgs.call(self, args);
    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy; // env-specific initialization logic for debug instances

  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);
  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);

  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */


function enable(namespaces) {
  exports.save(namespaces);
  exports.names = [];
  exports.skips = [];
  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings

    namespaces = split[i].replace(/\*/g, '.*?');

    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}
/**
 * Disable debug output.
 *
 * @api public
 */


function disable() {
  exports.enable('');
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */


function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }

  var i, len;

  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }

  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }

  return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */


function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "./node_modules/to-array/index.js":
/*!****************************************!*\
  !*** ./node_modules/to-array/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = toArray;

function toArray(list, index) {
  var array = [];
  index = index || 0;

  for (var i = index || 0; i < list.length; i++) {
    array[i - index] = list[i];
  }

  return array;
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    length = 64,
    map = {},
    seed = 0,
    i = 0,
    prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */

function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */


function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */


function yeast() {
  var now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
} //
// Map each character to its index.
//


for (; i < length; i++) map[alphabet[i]] = i; //
// Expose the `yeast`, `encode` and `decode` functions.
//


yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50LnRzIiwid2VicGFjazovLy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL2ZvdW5kYXRpb24udHMiLCJ3ZWJwYWNrOi8vL2luZGV4LnRzIiwid2VicGFjazovLy91dGlsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJyYXlidWZmZXIuc2xpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhY2tvMi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmxvYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1iaW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWluaGVyaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL2dsb2JhbFRoaXMuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmctanNvbnAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy14aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3htbGh0dHByZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL3V0ZjguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhcy1iaW5hcnkyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXMtY29ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5kZXhvZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcnNlcXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcnNldXJpL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2xpYi9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2xpYi9vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvc29ja2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2xpYi91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvaXMtYnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90by1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95ZWFzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiYWZ0ZXIiLCJjb3VudCIsImNhbGxiYWNrIiwiZXJyX2NiIiwiYmFpbCIsIm5vb3AiLCJwcm94eSIsImVyciIsInJlc3VsdCIsIkVycm9yIiwiYXJyYXlidWZmZXIiLCJzdGFydCIsImVuZCIsImJ5dGVzIiwiYnl0ZUxlbmd0aCIsInNsaWNlIiwiQXJyYXlCdWZmZXIiLCJhYnYiLCJVaW50OEFycmF5IiwiaSIsImlpIiwiYnVmZmVyIiwiQmFja29mZiIsIm9wdHMiLCJtcyIsIm1pbiIsIm1heCIsImZhY3RvciIsImppdHRlciIsImF0dGVtcHRzIiwicHJvdG90eXBlIiwiZHVyYXRpb24iLCJNYXRoIiwicG93IiwicmFuZCIsInJhbmRvbSIsImRldmlhdGlvbiIsImZsb29yIiwicmVzZXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJzZXRKaXR0ZXIiLCJjaGFycyIsImxvb2t1cCIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJlbmNvZGUiLCJsZW4iLCJiYXNlNjQiLCJzdWJzdHJpbmciLCJkZWNvZGUiLCJidWZmZXJMZW5ndGgiLCJwIiwiZW5jb2RlZDEiLCJlbmNvZGVkMiIsImVuY29kZWQzIiwiZW5jb2RlZDQiLCJ0b0J5dGVBcnJheSIsImZyb21CeXRlQXJyYXkiLCJyZXZMb29rdXAiLCJBcnIiLCJBcnJheSIsImNvZGUiLCJnZXRMZW5zIiwiYjY0IiwidmFsaWRMZW4iLCJpbmRleE9mIiwicGxhY2VIb2xkZXJzTGVuIiwibGVucyIsIl9ieXRlTGVuZ3RoIiwidG1wIiwiYXJyIiwiY3VyQnl0ZSIsInRyaXBsZXRUb0Jhc2U2NCIsIm51bSIsImVuY29kZUNodW5rIiwidWludDgiLCJvdXRwdXQiLCJwdXNoIiwiam9pbiIsImV4dHJhQnl0ZXMiLCJwYXJ0cyIsIm1heENodW5rTGVuZ3RoIiwibGVuMiIsIkJsb2JCdWlsZGVyIiwiV2ViS2l0QmxvYkJ1aWxkZXIiLCJNU0Jsb2JCdWlsZGVyIiwiTW96QmxvYkJ1aWxkZXIiLCJibG9iU3VwcG9ydGVkIiwiYSIsIkJsb2IiLCJzaXplIiwiZSIsImJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyIsImIiLCJibG9iQnVpbGRlclN1cHBvcnRlZCIsImFwcGVuZCIsImdldEJsb2IiLCJtYXBBcnJheUJ1ZmZlclZpZXdzIiwiYXJ5IiwibWFwIiwiY2h1bmsiLCJidWYiLCJjb3B5Iiwic2V0IiwiYnl0ZU9mZnNldCIsIkJsb2JCdWlsZGVyQ29uc3RydWN0b3IiLCJvcHRpb25zIiwiYmIiLCJmb3JFYWNoIiwicGFydCIsInR5cGUiLCJCbG9iQ29uc3RydWN0b3IiLCJ1bmRlZmluZWQiLCJyZXF1aXJlIiwiaWVlZTc1NCIsImlzQXJyYXkiLCJCdWZmZXIiLCJTbG93QnVmZmVyIiwiSU5TUEVDVF9NQVhfQllURVMiLCJUWVBFRF9BUlJBWV9TVVBQT1JUIiwiZ2xvYmFsIiwidHlwZWRBcnJheVN1cHBvcnQiLCJrTWF4TGVuZ3RoIiwiX19wcm90b19fIiwiZm9vIiwic3ViYXJyYXkiLCJjcmVhdGVCdWZmZXIiLCJ0aGF0IiwiUmFuZ2VFcnJvciIsImFyZyIsImVuY29kaW5nT3JPZmZzZXQiLCJhbGxvY1Vuc2FmZSIsImZyb20iLCJwb29sU2l6ZSIsIl9hdWdtZW50IiwidmFsdWUiLCJUeXBlRXJyb3IiLCJmcm9tQXJyYXlCdWZmZXIiLCJmcm9tU3RyaW5nIiwiZnJvbU9iamVjdCIsIlN5bWJvbCIsInNwZWNpZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImFzc2VydFNpemUiLCJhbGxvYyIsImZpbGwiLCJlbmNvZGluZyIsImNoZWNrZWQiLCJhbGxvY1Vuc2FmZVNsb3ciLCJzdHJpbmciLCJpc0VuY29kaW5nIiwiYWN0dWFsIiwid3JpdGUiLCJmcm9tQXJyYXlMaWtlIiwiYXJyYXkiLCJvYmoiLCJpc0J1ZmZlciIsImlzbmFuIiwiZGF0YSIsInRvU3RyaW5nIiwiX2lzQnVmZmVyIiwiY29tcGFyZSIsIngiLCJ5IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJjb25jYXQiLCJsaXN0IiwicG9zIiwiaXNWaWV3IiwibG93ZXJlZENhc2UiLCJ1dGY4VG9CeXRlcyIsImJhc2U2NFRvQnl0ZXMiLCJzbG93VG9TdHJpbmciLCJoZXhTbGljZSIsInV0ZjhTbGljZSIsImFzY2lpU2xpY2UiLCJsYXRpbjFTbGljZSIsImJhc2U2NFNsaWNlIiwidXRmMTZsZVNsaWNlIiwic3dhcCIsIm4iLCJtIiwic3dhcDE2Iiwic3dhcDMyIiwic3dhcDY0IiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcXVhbHMiLCJpbnNwZWN0Iiwic3RyIiwibWF0Y2giLCJ0YXJnZXQiLCJ0aGlzU3RhcnQiLCJ0aGlzRW5kIiwidGhpc0NvcHkiLCJ0YXJnZXRDb3B5IiwiYmlkaXJlY3Rpb25hbEluZGV4T2YiLCJ2YWwiLCJkaXIiLCJpc05hTiIsImFycmF5SW5kZXhPZiIsImNhbGwiLCJsYXN0SW5kZXhPZiIsImluZGV4U2l6ZSIsImFyckxlbmd0aCIsInZhbExlbmd0aCIsInJlYWQiLCJyZWFkVUludDE2QkUiLCJmb3VuZEluZGV4IiwiZm91bmQiLCJqIiwiaW5jbHVkZXMiLCJoZXhXcml0ZSIsIm9mZnNldCIsIk51bWJlciIsInJlbWFpbmluZyIsInN0ckxlbiIsInBhcnNlZCIsInBhcnNlSW50Iiwic3Vic3RyIiwidXRmOFdyaXRlIiwiYmxpdEJ1ZmZlciIsImFzY2lpV3JpdGUiLCJhc2NpaVRvQnl0ZXMiLCJsYXRpbjFXcml0ZSIsImJhc2U2NFdyaXRlIiwidWNzMldyaXRlIiwidXRmMTZsZVRvQnl0ZXMiLCJpc0Zpbml0ZSIsInRvSlNPTiIsIl9hcnIiLCJyZXMiLCJmaXJzdEJ5dGUiLCJjb2RlUG9pbnQiLCJieXRlc1BlclNlcXVlbmNlIiwic2Vjb25kQnl0ZSIsInRoaXJkQnl0ZSIsImZvdXJ0aEJ5dGUiLCJ0ZW1wQ29kZVBvaW50IiwiZGVjb2RlQ29kZVBvaW50c0FycmF5IiwiTUFYX0FSR1VNRU5UU19MRU5HVEgiLCJjb2RlUG9pbnRzIiwiZnJvbUNoYXJDb2RlIiwicmV0Iiwib3V0IiwidG9IZXgiLCJuZXdCdWYiLCJzbGljZUxlbiIsImNoZWNrT2Zmc2V0IiwiZXh0IiwicmVhZFVJbnRMRSIsIm5vQXNzZXJ0IiwibXVsIiwicmVhZFVJbnRCRSIsInJlYWRVSW50OCIsInJlYWRVSW50MTZMRSIsInJlYWRVSW50MzJMRSIsInJlYWRVSW50MzJCRSIsInJlYWRJbnRMRSIsInJlYWRJbnRCRSIsInJlYWRJbnQ4IiwicmVhZEludDE2TEUiLCJyZWFkSW50MTZCRSIsInJlYWRJbnQzMkxFIiwicmVhZEludDMyQkUiLCJyZWFkRmxvYXRMRSIsInJlYWRGbG9hdEJFIiwicmVhZERvdWJsZUxFIiwicmVhZERvdWJsZUJFIiwiY2hlY2tJbnQiLCJ3cml0ZVVJbnRMRSIsIm1heEJ5dGVzIiwid3JpdGVVSW50QkUiLCJ3cml0ZVVJbnQ4Iiwib2JqZWN0V3JpdGVVSW50MTYiLCJsaXR0bGVFbmRpYW4iLCJ3cml0ZVVJbnQxNkxFIiwid3JpdGVVSW50MTZCRSIsIm9iamVjdFdyaXRlVUludDMyIiwid3JpdGVVSW50MzJMRSIsIndyaXRlVUludDMyQkUiLCJ3cml0ZUludExFIiwibGltaXQiLCJzdWIiLCJ3cml0ZUludEJFIiwid3JpdGVJbnQ4Iiwid3JpdGVJbnQxNkxFIiwid3JpdGVJbnQxNkJFIiwid3JpdGVJbnQzMkxFIiwid3JpdGVJbnQzMkJFIiwiY2hlY2tJRUVFNzU0Iiwid3JpdGVGbG9hdCIsIndyaXRlRmxvYXRMRSIsIndyaXRlRmxvYXRCRSIsIndyaXRlRG91YmxlIiwid3JpdGVEb3VibGVMRSIsIndyaXRlRG91YmxlQkUiLCJ0YXJnZXRTdGFydCIsIklOVkFMSURfQkFTRTY0X1JFIiwiYmFzZTY0Y2xlYW4iLCJzdHJpbmd0cmltIiwicmVwbGFjZSIsInRyaW0iLCJ1bml0cyIsIkluZmluaXR5IiwibGVhZFN1cnJvZ2F0ZSIsImJ5dGVBcnJheSIsImMiLCJoaSIsImxvIiwic3JjIiwiZHN0IiwiZm4iLCJhcmdzIiwiRW1pdHRlciIsIm1peGluIiwia2V5Iiwib24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJfY2FsbGJhY2tzIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrcyIsImNiIiwic3BsaWNlIiwiZW1pdCIsImxpc3RlbmVycyIsImhhc0xpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwicGFyc2VyIiwidHJhbnNwb3J0cyIsImRlYnVnIiwiaW5kZXgiLCJwYXJzZXVyaSIsInBhcnNlcXMiLCJTb2NrZXQiLCJ1cmkiLCJob3N0bmFtZSIsImhvc3QiLCJzZWN1cmUiLCJwcm90b2NvbCIsInBvcnQiLCJxdWVyeSIsImxvY2F0aW9uIiwiYWdlbnQiLCJ1cGdyYWRlIiwicGF0aCIsImZvcmNlSlNPTlAiLCJqc29ucCIsImZvcmNlQmFzZTY0IiwiZW5hYmxlc1hEUiIsIndpdGhDcmVkZW50aWFscyIsInRpbWVzdGFtcFBhcmFtIiwidGltZXN0YW1wUmVxdWVzdHMiLCJ0cmFuc3BvcnRPcHRpb25zIiwicmVhZHlTdGF0ZSIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsInBvbGljeVBvcnQiLCJyZW1lbWJlclVwZ3JhZGUiLCJiaW5hcnlUeXBlIiwib25seUJpbmFyeVVwZ3JhZGVzIiwicGVyTWVzc2FnZURlZmxhdGUiLCJ0aHJlc2hvbGQiLCJwZngiLCJwYXNzcGhyYXNlIiwiY2VydCIsImNhIiwiY2lwaGVycyIsInJlamVjdFVuYXV0aG9yaXplZCIsImZvcmNlTm9kZSIsImlzUmVhY3ROYXRpdmUiLCJuYXZpZ2F0b3IiLCJwcm9kdWN0IiwiZXh0cmFIZWFkZXJzIiwia2V5cyIsImxvY2FsQWRkcmVzcyIsImlkIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdJbnRlcnZhbFRpbWVyIiwicGluZ1RpbWVvdXRUaW1lciIsIm9wZW4iLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJUcmFuc3BvcnQiLCJjcmVhdGVUcmFuc3BvcnQiLCJuYW1lIiwiY2xvbmUiLCJFSU8iLCJ0cmFuc3BvcnQiLCJzaWQiLCJzb2NrZXQiLCJyZXF1ZXN0VGltZW91dCIsInByb3RvY29scyIsIm8iLCJoYXNPd25Qcm9wZXJ0eSIsInNldFRpbWVvdXQiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJwYWNrZXQiLCJvblBhY2tldCIsIm9uRXJyb3IiLCJvbkNsb3NlIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJ1cGdyYWRlTG9zZXNCaW5hcnkiLCJzdXBwb3J0c0JpbmFyeSIsInNlbmQiLCJtc2ciLCJ1cGdyYWRpbmciLCJwYXVzZSIsImNsZWFudXAiLCJmbHVzaCIsImZyZWV6ZVRyYW5zcG9ydCIsImNsb3NlIiwib25lcnJvciIsImVycm9yIiwib25UcmFuc3BvcnRDbG9zZSIsIm9uY2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsIm9uT3BlbiIsImwiLCJvbkhhbmRzaGFrZSIsIkpTT04iLCJwYXJzZSIsInNldFBpbmciLCJmaWx0ZXJVcGdyYWRlcyIsIm9uSGVhcnRiZWF0IiwidGltZW91dCIsImNsZWFyVGltZW91dCIsInBpbmciLCJzZW5kUGFja2V0Iiwid3JpdGFibGUiLCJjb21wcmVzcyIsIndhaXRGb3JVcGdyYWRlIiwiY2xlYW51cEFuZENsb3NlIiwicmVhc29uIiwiZGVzYyIsImZpbHRlcmVkVXBncmFkZXMiLCJkZXNjcmlwdGlvbiIsImRvT3BlbiIsImRvQ2xvc2UiLCJwYWNrZXRzIiwib25EYXRhIiwiZGVjb2RlUGFja2V0IiwiWE1MSHR0cFJlcXVlc3QiLCJYSFIiLCJKU09OUCIsIndlYnNvY2tldCIsInBvbGxpbmciLCJ4aHIiLCJ4ZCIsInhzIiwiaXNTU0wiLCJ4ZG9tYWluIiwieHNjaGVtZSIsIlBvbGxpbmciLCJpbmhlcml0IiwiZ2xvYmFsVGhpcyIsIkpTT05QUG9sbGluZyIsInJOZXdsaW5lIiwickVzY2FwZWROZXdsaW5lIiwiZW1wdHkiLCJfX19laW8iLCJzY3JpcHQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJmb3JtIiwiaWZyYW1lIiwiZG9Qb2xsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJpbnNlcnRBdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5zZXJ0QmVmb3JlIiwiaGVhZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImlzVUFnZWNrbyIsInRlc3QiLCJ1c2VyQWdlbnQiLCJkb1dyaXRlIiwiYXJlYSIsImlmcmFtZUlkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJtZXRob2QiLCJzZXRBdHRyaWJ1dGUiLCJhY3Rpb24iLCJjb21wbGV0ZSIsImluaXRJZnJhbWUiLCJodG1sIiwic3VibWl0IiwiYXR0YWNoRXZlbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJvbmxvYWQiLCJSZXF1ZXN0IiwicmVxdWVzdCIsImlzQmluYXJ5IiwicmVxIiwic2VuZFhociIsInBvbGxYaHIiLCJjcmVhdGUiLCJzZXREaXNhYmxlSGVhZGVyQ2hlY2siLCJzZXRSZXF1ZXN0SGVhZGVyIiwiaGFzWERSIiwib25Mb2FkIiwicmVzcG9uc2VUZXh0IiwiY29udGVudFR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsInJlc3BvbnNlVHlwZSIsInN0YXR1cyIsInJlcXVlc3RzQ291bnQiLCJyZXF1ZXN0cyIsIm9uU3VjY2VzcyIsImZyb21FcnJvciIsImFib3J0IiwicmVzcG9uc2UiLCJYRG9tYWluUmVxdWVzdCIsInVubG9hZEhhbmRsZXIiLCJ0ZXJtaW5hdGlvbkV2ZW50IiwieWVhc3QiLCJoYXNYSFIyIiwicG9sbCIsIm9uUGF1c2UiLCJ0b3RhbCIsImRlY29kZVBheWxvYWQiLCJjYWxsYmFja2ZuIiwiZW5jb2RlUGF5bG9hZCIsInNjaGVtYSIsImlwdjYiLCJCcm93c2VyV2ViU29ja2V0IiwiTm9kZVdlYlNvY2tldCIsIldlYlNvY2tldCIsIk1veldlYlNvY2tldCIsIldlYlNvY2tldEltcGwiLCJXUyIsInVzaW5nQnJvd3NlcldlYlNvY2tldCIsImNoZWNrIiwiaGVhZGVycyIsIndzIiwic3VwcG9ydHMiLCJiaW5hcnkiLCJhZGRFdmVudExpc3RlbmVycyIsIm9ub3BlbiIsIm9ubWVzc2FnZSIsImV2IiwiZW5jb2RlUGFja2V0IiwiZG9uZSIsImhhc0NPUlMiLCJsb2ciLCJmb3JtYXRBcmdzIiwic2F2ZSIsImxvYWQiLCJ1c2VDb2xvcnMiLCJzdG9yYWdlIiwibG9jYWxzdG9yYWdlIiwiY29sb3JzIiwicHJvY2VzcyIsIl9fbndqcyIsImRvY3VtZW50RWxlbWVudCIsIldlYmtpdEFwcGVhcmFuY2UiLCJjb25zb2xlIiwiZmlyZWJ1ZyIsImV4Y2VwdGlvbiIsInRhYmxlIiwiUmVnRXhwIiwiJDEiLCJuYW1lc3BhY2UiLCJodW1hbml6ZSIsImRpZmYiLCJjb2xvciIsImxhc3RDIiwibmFtZXNwYWNlcyIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiciIsImdldEl0ZW0iLCJlbnYiLCJERUJVRyIsImxvY2FsU3RvcmFnZSIsImZvcm1hdHRlcnMiLCJ2Iiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInNldHVwIiwiY3JlYXRlRGVidWciLCJkZWZhdWx0IiwiY29lcmNlIiwiZGlzYWJsZSIsImVuYWJsZSIsImVuYWJsZWQiLCJpbnN0YW5jZXMiLCJuYW1lcyIsInNraXBzIiwic2VsZWN0Q29sb3IiLCJoYXNoIiwiYWJzIiwicHJldlRpbWUiLCJjdXJyIiwiRGF0ZSIsInByZXYiLCJ1bnNoaWZ0IiwiZm9ybWF0IiwiZm9ybWF0dGVyIiwibG9nRm4iLCJkZXN0cm95IiwiZXh0ZW5kIiwiaW5pdCIsImRlbGltaXRlciIsIm5ld0RlYnVnIiwic3BsaXQiLCJpbnN0YW5jZSIsInRvTmFtZXNwYWNlIiwicmVnZXhwIiwic3RhY2siLCJzIiwiaCIsImQiLCJ3IiwibG9uZyIsImZtdExvbmciLCJmbXRTaG9ydCIsImV4ZWMiLCJwYXJzZUZsb2F0IiwibXNBYnMiLCJyb3VuZCIsInBsdXJhbCIsImlzUGx1cmFsIiwiaGFzQmluYXJ5Iiwic2xpY2VCdWZmZXIiLCJ1dGY4IiwiYmFzZTY0ZW5jb2RlciIsImlzQW5kcm9pZCIsImlzUGhhbnRvbUpTIiwiZG9udFNlbmRCbG9icyIsInBvbmciLCJwYWNrZXRzbGlzdCIsInV0ZjhlbmNvZGUiLCJlbmNvZGVBcnJheUJ1ZmZlciIsImVuY29kZUJsb2IiLCJlbmNvZGVCYXNlNjRPYmplY3QiLCJlbmNvZGVkIiwic3RyaWN0IiwiZW5jb2RlQmFzZTY0UGFja2V0IiwiY29udGVudEFycmF5IiwicmVzdWx0QnVmZmVyIiwiZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIiLCJmciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImJsb2IiLCJyZWFkQXNEYXRhVVJMIiwiYjY0ZGF0YSIsInR5cGVkIiwiYmFzaWMiLCJidG9hIiwidXRmOGRlY29kZSIsImNoYXJBdCIsImRlY29kZUJhc2U2NFBhY2tldCIsInRyeURlY29kZSIsImFzQXJyYXkiLCJyZXN0IiwiZW5jb2RlUGF5bG9hZEFzQmxvYiIsImVuY29kZVBheWxvYWRBc0FycmF5QnVmZmVyIiwic2V0TGVuZ3RoSGVhZGVyIiwiZW5jb2RlT25lIiwiZG9uZUNhbGxiYWNrIiwicmVzdWx0cyIsImVhY2giLCJuZXh0IiwiZWFjaFdpdGhJbmRleCIsImVsIiwiZGVjb2RlUGF5bG9hZEFzQmluYXJ5IiwiY2hyIiwiZW5jb2RlZFBhY2tldHMiLCJ0b3RhbExlbmd0aCIsInJlZHVjZSIsImFjYyIsInJlc3VsdEFycmF5IiwiYnVmZmVySW5kZXgiLCJpc1N0cmluZyIsImFiIiwidmlldyIsImxlblN0ciIsImJpbmFyeUlkZW50aWZpZXIiLCJsZW5ndGhBcnkiLCJidWZmZXJUYWlsIiwiYnVmZmVycyIsInRhaWxBcnJheSIsIm1zZ0xlbmd0aCIsImhhcyIsInN0cmluZ0Zyb21DaGFyQ29kZSIsInVjczJkZWNvZGUiLCJjb3VudGVyIiwiZXh0cmEiLCJ1Y3MyZW5jb2RlIiwiY2hlY2tTY2FsYXJWYWx1ZSIsInRvVXBwZXJDYXNlIiwiY3JlYXRlQnl0ZSIsImVuY29kZUNvZGVQb2ludCIsInN5bWJvbCIsImJ5dGVTdHJpbmciLCJyZWFkQ29udGludWF0aW9uQnl0ZSIsImJ5dGVJbmRleCIsImJ5dGVDb3VudCIsImNvbnRpbnVhdGlvbkJ5dGUiLCJkZWNvZGVTeW1ib2wiLCJieXRlMSIsImJ5dGUyIiwiYnl0ZTMiLCJieXRlNCIsInZlcnNpb24iLCJ3aXRoTmF0aXZlQmxvYiIsIndpdGhOYXRpdmVGaWxlIiwiRmlsZSIsImlzTEUiLCJtTGVuIiwibkJ5dGVzIiwiZUxlbiIsImVNYXgiLCJlQmlhcyIsIm5CaXRzIiwiTmFOIiwicnQiLCJMTjIiLCJjZWlsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicXMiLCJxcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZSIsInNvdXJjZSIsImF1dGhvcml0eSIsImlwdjZ1cmkiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJkcmFpblF1ZXVlIiwicnVuIiwibmV4dFRpY2siLCJJdGVtIiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb25zIiwiYWRkTGlzdGVuZXIiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwidW1hc2siLCJ1cmwiLCJNYW5hZ2VyIiwiY2FjaGUiLCJtYW5hZ2VycyIsInNhbWVOYW1lc3BhY2UiLCJuc3BzIiwibmV3Q29ubmVjdGlvbiIsImZvcmNlTmV3IiwibXVsdGlwbGV4IiwiaW8iLCJjb25uZWN0IiwiZWlvIiwiYmluZCIsInN1YnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsInJlY29ubmVjdGlvbkRlbGF5IiwicmVjb25uZWN0aW9uRGVsYXlNYXgiLCJyYW5kb21pemF0aW9uRmFjdG9yIiwiYmFja29mZiIsImNvbm5lY3RpbmciLCJsYXN0UGluZyIsInBhY2tldEJ1ZmZlciIsIl9wYXJzZXIiLCJlbmNvZGVyIiwiRW5jb2RlciIsImRlY29kZXIiLCJEZWNvZGVyIiwiYXV0b0Nvbm5lY3QiLCJlbWl0QWxsIiwibnNwIiwidXBkYXRlU29ja2V0SWRzIiwiZ2VuZXJhdGVJZCIsImVuZ2luZSIsIl9yZWNvbm5lY3Rpb24iLCJfcmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJyZWNvbm5lY3RpbmciLCJyZWNvbm5lY3QiLCJza2lwUmVjb25uZWN0Iiwib3BlblN1YiIsImVycm9yU3ViIiwidGltZXIiLCJvbnBpbmciLCJvbnBvbmciLCJvbmRhdGEiLCJhZGQiLCJvbmRlY29kZWQiLCJvbkNvbm5lY3RpbmciLCJwcm9jZXNzUGFja2V0UXVldWUiLCJwYWNrIiwic3Vic0xlbmd0aCIsImRpc2Nvbm5lY3QiLCJkZWxheSIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsInRvQXJyYXkiLCJoYXNCaW4iLCJldmVudHMiLCJjb25uZWN0X2Vycm9yIiwiY29ubmVjdF90aW1lb3V0IiwicmVjb25uZWN0X2F0dGVtcHQiLCJyZWNvbm5lY3RfZmFpbGVkIiwicmVjb25uZWN0X2Vycm9yIiwianNvbiIsImlkcyIsImFja3MiLCJyZWNlaXZlQnVmZmVyIiwic2VuZEJ1ZmZlciIsImNvbm5lY3RlZCIsImRpc2Nvbm5lY3RlZCIsImZsYWdzIiwic3ViRXZlbnRzIiwiQklOQVJZX0VWRU5UIiwiRVZFTlQiLCJwb3AiLCJDT05ORUNUIiwib25wYWNrZXQiLCJyb290TmFtZXNwYWNlRXJyb3IiLCJFUlJPUiIsIm9uY29ubmVjdCIsIm9uZXZlbnQiLCJBQ0siLCJvbmFjayIsIkJJTkFSWV9BQ0siLCJESVNDT05ORUNUIiwib25kaXNjb25uZWN0IiwiYWNrIiwic2VudCIsImVtaXRCdWZmZXJlZCIsImxvYyIsImhyZWYiLCJpc0J1ZiIsImRlY29uc3RydWN0UGFja2V0IiwicGFja2V0RGF0YSIsIl9kZWNvbnN0cnVjdFBhY2tldCIsImF0dGFjaG1lbnRzIiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJuZXdEYXRhIiwicmVjb25zdHJ1Y3RQYWNrZXQiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJyZW1vdmVCbG9icyIsIl9yZW1vdmVCbG9icyIsImN1cktleSIsImNvbnRhaW5pbmdPYmplY3QiLCJwZW5kaW5nQmxvYnMiLCJmaWxlUmVhZGVyIiwiYmxvYmxlc3NEYXRhIiwidHlwZXMiLCJFUlJPUl9QQUNLRVQiLCJlbmNvZGVBc0JpbmFyeSIsImVuY29kZUFzU3RyaW5nIiwicGF5bG9hZCIsInRyeVN0cmluZ2lmeSIsIndyaXRlRW5jb2RpbmciLCJkZWNvbnN0cnVjdGlvbiIsInJlY29uc3RydWN0b3IiLCJkZWNvZGVTdHJpbmciLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwicmVjb25QYWNrIiwidGFrZUJpbmFyeURhdGEiLCJ0cnlQYXJzZSIsImlzUGF5bG9hZFZhbGlkIiwiZmluaXNoZWRSZWNvbnN0cnVjdGlvbiIsImJpbkRhdGEiLCJ3aXRoTmF0aXZlQnVmZmVyIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiY2hyb21lIiwibG9jYWwiLCJnIiwiYWxwaGFiZXQiLCJzZWVkIiwiZGVjb2RlZCIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUdFO0FBQUEsSUFBa0Isa0ZBQWxCO0FBQUEsSUFBa0Msb0ZBQWxDO0FBQUEsSUFBbUQsc0ZBQW5EO0FBQUEsSUFDQSxnRkFEQTtBQUFBLElBQ2UsOEVBRGY7QUFBQSxJQUM2QixnRkFEN0I7QUFBQSxJQUM0Qyw4RUFENUM7O0FBSUY7QUFBQTtBQUFBO0FBQWlDOztBQUFqQzs7QUFvSUM7O0FBbklRLHlCQUFQLFVBQWdCLElBQWhCLEVBQTZCO0FBQzNCLFdBQU8sSUFBSSxXQUFKLENBQWdCLElBQWhCLENBQVA7QUFDRCxHQUZNOztBQWFQLCtDQUFXLGdCQUFYLEVBQThFO0FBQW5FO0FBQUE7QUFBc0Q7QUFBYSxPQUFuRTtBQUFtRTs7QUFDNUUsU0FBSyxTQUFMLEdBQWlCLGdCQUFnQixFQUFqQztBQUNELEdBRkQ7O0FBSUE7QUFBQTs7QUFDRSxTQUFLLFVBQUwsR0FBa0IsS0FBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixnQkFBekIsQ0FBbEI7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsS0FBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixjQUF6QixDQUFoQjtBQUNBLFNBQUssU0FBTCxHQUFp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R0FBRyxDQUFDckosTUFBcEIsRUFBNEJ6QixDQUFDLEVBQTdCLEVBQWlDO0FBQy9CczRCLFdBQU8sR0FBR0EsT0FBTyxHQUFHNzJCLE1BQVYsR0FBbUJ3RCxHQUFHLENBQUM2RixHQUFHLENBQUNvZSxNQUFKLENBQVdscEIsQ0FBWCxDQUFELENBQWhDO0FBQ0Q7O0FBRUQsU0FBT3M0QixPQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNQSxTQUFTN1gsS0FBVCxHQUFpQjtBQUNmLE1BQUk4WCxHQUFHLEdBQUc1MkIsTUFBTSxDQUFDLENBQUMsSUFBSTZqQixJQUFKLEVBQUYsQ0FBaEI7QUFFQSxNQUFJK1MsR0FBRyxLQUFLOVMsSUFBWixFQUFrQixPQUFPNFMsSUFBSSxHQUFHLENBQVAsRUFBVTVTLElBQUksR0FBRzhTLEdBQXhCO0FBQ2xCLFNBQU9BLEdBQUcsR0FBRSxHQUFMLEdBQVU1MkIsTUFBTSxDQUFDMDJCLElBQUksRUFBTCxDQUF2QjtBQUNELEMsQ0FFRDtBQUNBO0FBQ0E7OztBQUNBLE9BQU9yNEIsQ0FBQyxHQUFHeUIsTUFBWCxFQUFtQnpCLENBQUMsRUFBcEIsRUFBd0JpRixHQUFHLENBQUNtekIsUUFBUSxDQUFDcDRCLENBQUQsQ0FBVCxDQUFILEdBQW1CQSxDQUFuQixDLENBRXhCO0FBQ0E7QUFDQTs7O0FBQ0F5Z0IsS0FBSyxDQUFDOWUsTUFBTixHQUFlQSxNQUFmO0FBQ0E4ZSxLQUFLLENBQUMxZSxNQUFOLEdBQWVBLE1BQWY7QUFDQXBELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjZoQixLQUFqQixDIiwiZmlsZSI6IjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGNsb3Nlc3QgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7IHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENTbmFja2JhckZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xudmFyIFNVUkZBQ0VfU0VMRUNUT1IgPSBzdHJpbmdzLlNVUkZBQ0VfU0VMRUNUT1IsIExBQkVMX1NFTEVDVE9SID0gc3RyaW5ncy5MQUJFTF9TRUxFQ1RPUiwgQUNUSU9OX1NFTEVDVE9SID0gc3RyaW5ncy5BQ1RJT05fU0VMRUNUT1IsIERJU01JU1NfU0VMRUNUT1IgPSBzdHJpbmdzLkRJU01JU1NfU0VMRUNUT1IsIE9QRU5JTkdfRVZFTlQgPSBzdHJpbmdzLk9QRU5JTkdfRVZFTlQsIE9QRU5FRF9FVkVOVCA9IHN0cmluZ3MuT1BFTkVEX0VWRU5ULCBDTE9TSU5HX0VWRU5UID0gc3RyaW5ncy5DTE9TSU5HX0VWRU5ULCBDTE9TRURfRVZFTlQgPSBzdHJpbmdzLkNMT1NFRF9FVkVOVDtcbnZhciBNRENTbmFja2JhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENTbmFja2JhciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENTbmFja2JhcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENTbmFja2Jhci5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDU25hY2tiYXIocm9vdCk7XG4gICAgfTtcbiAgICBNRENTbmFja2Jhci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChhbm5vdW5jZXJGYWN0b3J5KSB7XG4gICAgICAgIGlmIChhbm5vdW5jZXJGYWN0b3J5ID09PSB2b2lkIDApIHsgYW5ub3VuY2VyRmFjdG9yeSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0aWwuYW5ub3VuY2U7IH07IH1cbiAgICAgICAgdGhpcy5hbm5vdW5jZV8gPSBhbm5vdW5jZXJGYWN0b3J5KCk7XG4gICAgfTtcbiAgICBNRENTbmFja2Jhci5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN1cmZhY2VFbF8gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoU1VSRkFDRV9TRUxFQ1RPUik7XG4gICAgICAgIHRoaXMubGFiZWxFbF8gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoTEFCRUxfU0VMRUNUT1IpO1xuICAgICAgICB0aGlzLmFjdGlvbkVsXyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihBQ1RJT05fU0VMRUNUT1IpO1xuICAgICAgICB0aGlzLmhhbmRsZUtleURvd25fID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlS2V5RG93bihldnQpOyB9O1xuICAgICAgICB0aGlzLmhhbmRsZVN1cmZhY2VDbGlja18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgICAgIGlmIChfdGhpcy5pc0FjdGlvbkJ1dHRvbl8odGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZUFjdGlvbkJ1dHRvbkNsaWNrKGV2dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfdGhpcy5pc0FjdGlvbkljb25fKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVBY3Rpb25JY29uQ2xpY2soZXZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZWdpc3RlcktleURvd25IYW5kbGVyXyh0aGlzLmhhbmRsZUtleURvd25fKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclN1cmZhY2VDbGlja0hhbmRsZXJfKHRoaXMuaGFuZGxlU3VyZmFjZUNsaWNrXyk7XG4gICAgfTtcbiAgICBNRENTbmFja2Jhci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlcktleURvd25IYW5kbGVyXyh0aGlzLmhhbmRsZUtleURvd25fKTtcbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyU3VyZmFjZUNsaWNrSGFuZGxlcl8odGhpcy5oYW5kbGVTdXJmYWNlQ2xpY2tfKTtcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLm9wZW4oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSByZWFzb24gV2h5IHRoZSBzbmFja2JhciB3YXMgY2xvc2VkLiBWYWx1ZSB3aWxsIGJlIHBhc3NlZCB0byBDTE9TSU5HX0VWRU5UIGFuZCBDTE9TRURfRVZFTlQgdmlhIHRoZVxuICAgICAqICAgICBgZXZlbnQuZGV0YWlsLnJlYXNvbmAgcHJvcGVydHkuIFN0YW5kYXJkIHZhbHVlcyBhcmUgUkVBU09OX0FDVElPTiBhbmQgUkVBU09OX0RJU01JU1MsIGJ1dCBjdXN0b21cbiAgICAgKiAgICAgY2xpZW50LXNwZWNpZmljIHZhbHVlcyBtYXkgYWxzbyBiZSB1c2VkIGlmIGRlc2lyZWQuXG4gICAgICovXG4gICAgTURDU25hY2tiYXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICBpZiAocmVhc29uID09PSB2b2lkIDApIHsgcmVhc29uID0gJyc7IH1cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5jbG9zZShyZWFzb24pO1xuICAgIH07XG4gICAgTURDU25hY2tiYXIucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGFubm91bmNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hbm5vdW5jZV8oX3RoaXMubGFiZWxFbF8pOyB9LFxuICAgICAgICAgICAgbm90aWZ5Q2xvc2VkOiBmdW5jdGlvbiAocmVhc29uKSB7IHJldHVybiBfdGhpcy5lbWl0KENMT1NFRF9FVkVOVCwgcmVhc29uID8geyByZWFzb246IHJlYXNvbiB9IDoge30pOyB9LFxuICAgICAgICAgICAgbm90aWZ5Q2xvc2luZzogZnVuY3Rpb24gKHJlYXNvbikgeyByZXR1cm4gX3RoaXMuZW1pdChDTE9TSU5HX0VWRU5ULCByZWFzb24gPyB7IHJlYXNvbjogcmVhc29uIH0gOiB7fSk7IH0sXG4gICAgICAgICAgICBub3RpZnlPcGVuZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmVtaXQoT1BFTkVEX0VWRU5ULCB7fSk7IH0sXG4gICAgICAgICAgICBub3RpZnlPcGVuaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5lbWl0KE9QRU5JTkdfRVZFTlQsIHt9KTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgTURDU25hY2tiYXJGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1NuYWNrYmFyLnByb3RvdHlwZSwgXCJ0aW1lb3V0TXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmdldFRpbWVvdXRNcygpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0aW1lb3V0TXMpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VGltZW91dE1zKHRpbWVvdXRNcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTbmFja2Jhci5wcm90b3R5cGUsIFwiY2xvc2VPbkVzY2FwZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uZ2V0Q2xvc2VPbkVzY2FwZSgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldENsb3NlT25Fc2NhcGUoY2xvc2VPbkVzY2FwZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTbmFja2Jhci5wcm90b3R5cGUsIFwiaXNPcGVuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5pc09wZW4oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1NuYWNrYmFyLnByb3RvdHlwZSwgXCJsYWJlbFRleHRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgcHJvcGVydHkgb25seSByZXR1cm5zIG51bGwgaWYgdGhlIG5vZGUgaXMgYSBkb2N1bWVudCwgRE9DVFlQRSwgb3Igbm90YXRpb24uXG4gICAgICAgICAgICAvLyBPbiBFbGVtZW50IG5vZGVzLCBpdCBhbHdheXMgcmV0dXJucyBhIHN0cmluZy5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxhYmVsRWxfLnRleHRDb250ZW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChsYWJlbFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWxFbF8udGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTbmFja2Jhci5wcm90b3R5cGUsIFwiYWN0aW9uQnV0dG9uVGV4dFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uRWxfLnRleHRDb250ZW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhY3Rpb25CdXR0b25UZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkVsXy50ZXh0Q29udGVudCA9IGFjdGlvbkJ1dHRvblRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1NuYWNrYmFyLnByb3RvdHlwZS5yZWdpc3RlcktleURvd25IYW5kbGVyXyA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMubGlzdGVuKCdrZXlkb3duJywgaGFuZGxlcik7XG4gICAgfTtcbiAgICBNRENTbmFja2Jhci5wcm90b3R5cGUuZGVyZWdpc3RlcktleURvd25IYW5kbGVyXyA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oJ2tleWRvd24nLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyLnByb3RvdHlwZS5yZWdpc3RlclN1cmZhY2VDbGlja0hhbmRsZXJfID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5zdXJmYWNlRWxfLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG4gICAgfTtcbiAgICBNRENTbmFja2Jhci5wcm90b3R5cGUuZGVyZWdpc3RlclN1cmZhY2VDbGlja0hhbmRsZXJfID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5zdXJmYWNlRWxfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG4gICAgfTtcbiAgICBNRENTbmFja2Jhci5wcm90b3R5cGUuaXNBY3Rpb25CdXR0b25fID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihjbG9zZXN0KHRhcmdldCwgQUNUSU9OX1NFTEVDVE9SKSk7XG4gICAgfTtcbiAgICBNRENTbmFja2Jhci5wcm90b3R5cGUuaXNBY3Rpb25JY29uXyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oY2xvc2VzdCh0YXJnZXQsIERJU01JU1NfU0VMRUNUT1IpKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENTbmFja2Jhcjtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENTbmFja2JhciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQ0xPU0lORzogJ21kYy1zbmFja2Jhci0tY2xvc2luZycsXG4gICAgT1BFTjogJ21kYy1zbmFja2Jhci0tb3BlbicsXG4gICAgT1BFTklORzogJ21kYy1zbmFja2Jhci0tb3BlbmluZycsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQUNUSU9OX1NFTEVDVE9SOiAnLm1kYy1zbmFja2Jhcl9fYWN0aW9uJyxcbiAgICBBUklBX0xJVkVfTEFCRUxfVEVYVF9BVFRSOiAnZGF0YS1tZGMtc25hY2tiYXItbGFiZWwtdGV4dCcsXG4gICAgQ0xPU0VEX0VWRU5UOiAnTURDU25hY2tiYXI6Y2xvc2VkJyxcbiAgICBDTE9TSU5HX0VWRU5UOiAnTURDU25hY2tiYXI6Y2xvc2luZycsXG4gICAgRElTTUlTU19TRUxFQ1RPUjogJy5tZGMtc25hY2tiYXJfX2Rpc21pc3MnLFxuICAgIExBQkVMX1NFTEVDVE9SOiAnLm1kYy1zbmFja2Jhcl9fbGFiZWwnLFxuICAgIE9QRU5FRF9FVkVOVDogJ01EQ1NuYWNrYmFyOm9wZW5lZCcsXG4gICAgT1BFTklOR19FVkVOVDogJ01EQ1NuYWNrYmFyOm9wZW5pbmcnLFxuICAgIFJFQVNPTl9BQ1RJT046ICdhY3Rpb24nLFxuICAgIFJFQVNPTl9ESVNNSVNTOiAnZGlzbWlzcycsXG4gICAgU1VSRkFDRV9TRUxFQ1RPUjogJy5tZGMtc25hY2tiYXJfX3N1cmZhY2UnLFxufTtcbnZhciBudW1iZXJzID0ge1xuICAgIERFRkFVTFRfQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM6IDUwMDAsXG4gICAgSU5ERVRFUk1JTkFURTogLTEsXG4gICAgTUFYX0FVVE9fRElTTUlTU19USU1FT1VUX01TOiAxMDAwMCxcbiAgICBNSU5fQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM6IDQwMDAsXG4gICAgLy8gVGhlc2UgdmFyaWFibGVzIG5lZWQgdG8gYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIHZhbHVlcyBpbiBfdmFyaWFibGVzLnNjc3MuXG4gICAgU05BQ0tCQVJfQU5JTUFUSU9OX0NMT1NFX1RJTUVfTVM6IDc1LFxuICAgIFNOQUNLQkFSX0FOSU1BVElPTl9PUEVOX1RJTUVfTVM6IDE1MCxcbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmV0d2VlbiB0ZW1wb3JhcmlseSBjbGVhcmluZyB0aGUgbGFiZWwgdGV4dFxuICAgICAqIGluIHRoZSBET00gYW5kIHN1YnNlcXVlbnRseSByZXN0b3JpbmcgaXQuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGZvcmNlIElFIDExXG4gICAgICogdG8gcGljayB1cCB0aGUgYGFyaWEtbGl2ZWAgY29udGVudCBjaGFuZ2UgYW5kIGFubm91bmNlIGl0IHRvIHRoZSB1c2VyLlxuICAgICAqL1xuICAgIEFSSUFfTElWRV9ERUxBWV9NUzogMTAwMCxcbn07XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBPUEVOSU5HID0gY3NzQ2xhc3Nlcy5PUEVOSU5HLCBPUEVOID0gY3NzQ2xhc3Nlcy5PUEVOLCBDTE9TSU5HID0gY3NzQ2xhc3Nlcy5DTE9TSU5HO1xudmFyIFJFQVNPTl9BQ1RJT04gPSBzdHJpbmdzLlJFQVNPTl9BQ1RJT04sIFJFQVNPTl9ESVNNSVNTID0gc3RyaW5ncy5SRUFTT05fRElTTUlTUztcbnZhciBNRENTbmFja2JhckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDU25hY2tiYXJGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1NuYWNrYmFyRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuYXV0b0Rpc21pc3NUaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5hdXRvRGlzbWlzc1RpbWVvdXRNc18gPSBudW1iZXJzLkRFRkFVTFRfQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM7XG4gICAgICAgIF90aGlzLmNsb3NlT25Fc2NhcGVfID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU25hY2tiYXJGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU25hY2tiYXJGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU25hY2tiYXJGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU25hY2tiYXJGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYW5ub3VuY2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbmVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbmluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENTbmFja2JhckZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJBdXRvRGlzbWlzc1RpbWVyXygpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lXyk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE9QRU5JTkcpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE9QRU4pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKENMT1NJTkcpO1xuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyQXV0b0Rpc21pc3NUaW1lcl8oKTtcbiAgICAgICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuaW5nKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoQ0xPU0lORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoT1BFTklORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYW5ub3VuY2UoKTtcbiAgICAgICAgLy8gV2FpdCBhIGZyYW1lIG9uY2UgZGlzcGxheSBpcyBubyBsb25nZXIgXCJub25lXCIsIHRvIGVzdGFibGlzaCBiYXNpcyBmb3IgYW5pbWF0aW9uXG4gICAgICAgIHRoaXMucnVuTmV4dEFuaW1hdGlvbkZyYW1lXyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhPUEVOKTtcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0TXMgPSBfdGhpcy5nZXRUaW1lb3V0TXMoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVBbmltYXRpb25UaW1lckVuZF8oKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuZWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dE1zICE9PSBudW1iZXJzLklOREVURVJNSU5BVEUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXV0b0Rpc21pc3NUaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlKFJFQVNPTl9ESVNNSVNTKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdGltZW91dE1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBudW1iZXJzLlNOQUNLQkFSX0FOSU1BVElPTl9PUEVOX1RJTUVfTVMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSByZWFzb24gV2h5IHRoZSBzbmFja2JhciB3YXMgY2xvc2VkLiBWYWx1ZSB3aWxsIGJlIHBhc3NlZCB0byBDTE9TSU5HX0VWRU5UIGFuZCBDTE9TRURfRVZFTlQgdmlhIHRoZVxuICAgICAqICAgICBgZXZlbnQuZGV0YWlsLnJlYXNvbmAgcHJvcGVydHkuIFN0YW5kYXJkIHZhbHVlcyBhcmUgUkVBU09OX0FDVElPTiBhbmQgUkVBU09OX0RJU01JU1MsIGJ1dCBjdXN0b21cbiAgICAgKiAgICAgY2xpZW50LXNwZWNpZmljIHZhbHVlcyBtYXkgYWxzbyBiZSB1c2VkIGlmIGRlc2lyZWQuXG4gICAgICovXG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHJlYXNvbiA9PT0gdm9pZCAwKSB7IHJlYXNvbiA9ICcnOyB9XG4gICAgICAgIGlmICghdGhpcy5pc09wZW5fKSB7XG4gICAgICAgICAgICAvLyBBdm9pZCByZWR1bmRhbnQgY2xvc2UgY2FsbHMgKGFuZCBldmVudHMpLCBlLmcuIHJlcGVhdGVkIGludGVyYWN0aW9ucyBhcyB0aGUgc25hY2tiYXIgaXMgYW5pbWF0aW5nIGNsb3NlZFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgICB0aGlzLmNsZWFyQXV0b0Rpc21pc3NUaW1lcl8oKTtcbiAgICAgICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2luZyhyZWFzb24pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0xPU0lORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLk9QRU5JTkcpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zZWQocmVhc29uKTtcbiAgICAgICAgfSwgbnVtYmVycy5TTkFDS0JBUl9BTklNQVRJT05fQ0xPU0VfVElNRV9NUyk7XG4gICAgfTtcbiAgICBNRENTbmFja2JhckZvdW5kYXRpb24ucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcGVuXztcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0VGltZW91dE1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRvRGlzbWlzc1RpbWVvdXRNc187XG4gICAgfTtcbiAgICBNRENTbmFja2JhckZvdW5kYXRpb24ucHJvdG90eXBlLnNldFRpbWVvdXRNcyA9IGZ1bmN0aW9uICh0aW1lb3V0TXMpIHtcbiAgICAgICAgLy8gVXNlIHNob3J0ZXIgdmFyaWFibGUgbmFtZXMgdG8gbWFrZSB0aGUgY29kZSBtb3JlIHJlYWRhYmxlXG4gICAgICAgIHZhciBtaW5WYWx1ZSA9IG51bWJlcnMuTUlOX0FVVE9fRElTTUlTU19USU1FT1VUX01TO1xuICAgICAgICB2YXIgbWF4VmFsdWUgPSBudW1iZXJzLk1BWF9BVVRPX0RJU01JU1NfVElNRU9VVF9NUztcbiAgICAgICAgdmFyIGluZGV0ZXJtaW5hdGVWYWx1ZSA9IG51bWJlcnMuSU5ERVRFUk1JTkFURTtcbiAgICAgICAgaWYgKHRpbWVvdXRNcyA9PT0gbnVtYmVycy5JTkRFVEVSTUlOQVRFIHx8ICh0aW1lb3V0TXMgPD0gbWF4VmFsdWUgJiYgdGltZW91dE1zID49IG1pblZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5hdXRvRGlzbWlzc1RpbWVvdXRNc18gPSB0aW1lb3V0TXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICAgIHRpbWVvdXRNcyBtdXN0IGJlIGFuIGludGVnZXIgaW4gdGhlIHJhbmdlIFwiICsgbWluVmFsdWUgKyBcIlxcdTIwMTNcIiArIG1heFZhbHVlICsgXCJcXG4gICAgICAgIChvciBcIiArIGluZGV0ZXJtaW5hdGVWYWx1ZSArIFwiIHRvIGRpc2FibGUpLCBidXQgZ290ICdcIiArIHRpbWVvdXRNcyArIFwiJ1wiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRDbG9zZU9uRXNjYXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZU9uRXNjYXBlXztcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Q2xvc2VPbkVzY2FwZSA9IGZ1bmN0aW9uIChjbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIHRoaXMuY2xvc2VPbkVzY2FwZV8gPSBjbG9zZU9uRXNjYXBlO1xuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaXNFc2NhcGVLZXkgPSBldnQua2V5ID09PSAnRXNjYXBlJyB8fCBldnQua2V5Q29kZSA9PT0gMjc7XG4gICAgICAgIGlmIChpc0VzY2FwZUtleSAmJiB0aGlzLmdldENsb3NlT25Fc2NhcGUoKSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZShSRUFTT05fRElTTUlTUyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQWN0aW9uQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoX2V2dCkge1xuICAgICAgICB0aGlzLmNsb3NlKFJFQVNPTl9BQ1RJT04pO1xuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVBY3Rpb25JY29uQ2xpY2sgPSBmdW5jdGlvbiAoX2V2dCkge1xuICAgICAgICB0aGlzLmNsb3NlKFJFQVNPTl9ESVNNSVNTKTtcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuY2xlYXJBdXRvRGlzbWlzc1RpbWVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXV0b0Rpc21pc3NUaW1lcl8pO1xuICAgICAgICB0aGlzLmF1dG9EaXNtaXNzVGltZXJfID0gMDtcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUnVucyB0aGUgZ2l2ZW4gbG9naWMgb24gdGhlIG5leHQgYW5pbWF0aW9uIGZyYW1lLCB1c2luZyBzZXRUaW1lb3V0IHRvIGZhY3RvciBpbiBGaXJlZm94IHJlZmxvdyBiZWhhdmlvci5cbiAgICAgKi9cbiAgICBNRENTbmFja2JhckZvdW5kYXRpb24ucHJvdG90eXBlLnJ1bk5leHRBbmltYXRpb25GcmFtZV8gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDU25hY2tiYXJGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENTbmFja2JhckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENTbmFja2JhckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IHsgdXRpbCB9O1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBBUklBX0xJVkVfREVMQVlfTVMgPSBudW1iZXJzLkFSSUFfTElWRV9ERUxBWV9NUztcbnZhciBBUklBX0xJVkVfTEFCRUxfVEVYVF9BVFRSID0gc3RyaW5ncy5BUklBX0xJVkVfTEFCRUxfVEVYVF9BVFRSO1xuZnVuY3Rpb24gYW5ub3VuY2UoYXJpYUVsLCBsYWJlbEVsKSB7XG4gICAgaWYgKGxhYmVsRWwgPT09IHZvaWQgMCkgeyBsYWJlbEVsID0gYXJpYUVsOyB9XG4gICAgdmFyIHByaW9yaXR5ID0gYXJpYUVsLmdldEF0dHJpYnV0ZSgnYXJpYS1saXZlJyk7XG4gICAgLy8gVHJpbSB0ZXh0IHRvIGlnbm9yZSBgJm5ic3A7YCAoc2VlIGJlbG93KS5cbiAgICAvLyB0ZXh0Q29udGVudCBpcyBvbmx5IG51bGwgaWYgdGhlIG5vZGUgaXMgYSBkb2N1bWVudCwgRE9DVFlQRSwgb3Igbm90YXRpb24uXG4gICAgdmFyIGxhYmVsVGV4dCA9IGxhYmVsRWwudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIGlmICghbGFiZWxUZXh0IHx8ICFwcmlvcml0eSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRlbXBvcmFyaWx5IGRpc2FibGUgYGFyaWEtbGl2ZWAgdG8gcHJldmVudCBKQVdTK0ZpcmVmb3ggZnJvbSBhbm5vdW5jaW5nIHRoZSBtZXNzYWdlIHR3aWNlLlxuICAgIGFyaWFFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdvZmYnKTtcbiAgICAvLyBUZW1wb3JhcmlseSBjbGVhciBgdGV4dENvbnRlbnRgIHRvIGZvcmNlIGEgRE9NIG11dGF0aW9uIGV2ZW50IHRoYXQgd2lsbCBiZSBkZXRlY3RlZCBieSBzY3JlZW4gcmVhZGVycy5cbiAgICAvLyBgYXJpYS1saXZlYCBlbGVtZW50cyBhcmUgb25seSBhbm5vdW5jZWQgd2hlbiB0aGUgZWxlbWVudCdzIGB0ZXh0Q29udGVudGAgKmNoYW5nZXMqLCBzbyBzbmFja2JhcnNcbiAgICAvLyBzZW50IHRvIHRoZSBicm93c2VyIGluIHRoZSBpbml0aWFsIEhUTUwgcmVzcG9uc2Ugd29uJ3QgYmUgcmVhZCB1bmxlc3Mgd2UgY2xlYXIgdGhlIGVsZW1lbnQncyBgdGV4dENvbnRlbnRgIGZpcnN0LlxuICAgIC8vIFNpbWlsYXJseSwgZGlzcGxheWluZyB0aGUgc2FtZSBzbmFja2JhciBtZXNzYWdlIHR3aWNlIGluIGEgcm93IGRvZXNuJ3QgdHJpZ2dlciBhIERPTSBtdXRhdGlvbiBldmVudCxcbiAgICAvLyBzbyBzY3JlZW4gcmVhZGVycyB3b24ndCBhbm5vdW5jZSB0aGUgc2Vjb25kIG1lc3NhZ2UgdW5sZXNzIHdlIGZpcnN0IGNsZWFyIGB0ZXh0Q29udGVudGAuXG4gICAgLy9cbiAgICAvLyBXZSBoYXZlIHRvIGNsZWFyIHRoZSBsYWJlbCB0ZXh0IHR3byBkaWZmZXJlbnQgd2F5cyB0byBtYWtlIGl0IHdvcmsgaW4gYWxsIGJyb3dzZXJzIGFuZCBzY3JlZW4gcmVhZGVyczpcbiAgICAvL1xuICAgIC8vICAgMS4gYHRleHRDb250ZW50ID0gJydgIGlzIHJlcXVpcmVkIGZvciBJRTExICsgSkFXU1xuICAgIC8vICAgMi4gYGlubmVySFRNTCA9ICcmbmJzcDsnYCBpcyByZXF1aXJlZCBmb3IgQ2hyb21lICsgSkFXUyBhbmQgTlZEQVxuICAgIC8vXG4gICAgLy8gQWxsIG90aGVyIGJyb3dzZXIvc2NyZWVuIHJlYWRlciBjb21iaW5hdGlvbnMgc3VwcG9ydCBib3RoIG1ldGhvZHMuXG4gICAgLy9cbiAgICAvLyBUaGUgd3JhcHBlciBgPHNwYW4+YCB2aXN1YWxseSBoaWRlcyB0aGUgc3BhY2UgY2hhcmFjdGVyIHNvIHRoYXQgaXQgZG9lc24ndCBjYXVzZSBqYW5rIHdoZW4gYWRkZWQvcmVtb3ZlZC5cbiAgICAvLyBOLkIuOiBTZXR0aW5nIGBwb3NpdGlvbjogYWJzb2x1dGVgLCBgb3BhY2l0eTogMGAsIG9yIGBoZWlnaHQ6IDBgIHByZXZlbnRzIENocm9tZSBmcm9tIGRldGVjdGluZyB0aGUgRE9NIGNoYW5nZS5cbiAgICAvL1xuICAgIC8vIFRoaXMgdGVjaG5pcXVlIGhhcyBiZWVuIHRlc3RlZCBpbjpcbiAgICAvL1xuICAgIC8vICAgKiBKQVdTIDIwMTk6XG4gICAgLy8gICAgICAgLSBDaHJvbWUgNzBcbiAgICAvLyAgICAgICAtIEZpcmVmb3ggNjAgKEVTUilcbiAgICAvLyAgICAgICAtIElFIDExXG4gICAgLy8gICAqIE5WREEgMjAxODpcbiAgICAvLyAgICAgICAtIENocm9tZSA3MFxuICAgIC8vICAgICAgIC0gRmlyZWZveCA2MCAoRVNSKVxuICAgIC8vICAgICAgIC0gSUUgMTFcbiAgICAvLyAgICogQ2hyb21lVm94IDUzXG4gICAgbGFiZWxFbC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGxhYmVsRWwuaW5uZXJIVE1MID0gJzxzcGFuIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMDsgaGVpZ2h0OiAxcHg7XCI+Jm5ic3A7PC9zcGFuPic7XG4gICAgLy8gUHJldmVudCB2aXN1YWwgamFuayBieSB0ZW1wb3JhcmlseSBkaXNwbGF5aW5nIHRoZSBsYWJlbCB0ZXh0IGluIHRoZSA6OmJlZm9yZSBwc2V1ZG8tZWxlbWVudC5cbiAgICAvLyBDU1MgZ2VuZXJhdGVkIGNvbnRlbnQgaXMgbm9ybWFsbHkgYW5ub3VuY2VkIGJ5IHNjcmVlbiByZWFkZXJzXG4gICAgLy8gKGV4Y2VwdCBpbiBJRSAxMTsgc2VlIGh0dHBzOi8vdGluay51ay9hY2Nlc3NpYmlsaXR5LXN1cHBvcnQtZm9yLWNzcy1nZW5lcmF0ZWQtY29udGVudC8pO1xuICAgIC8vIGhvd2V2ZXIsIGBhcmlhLWxpdmVgIGlzIHR1cm5lZCBvZmYsIHNvIHRoaXMgRE9NIHVwZGF0ZSB3aWxsIGJlIGlnbm9yZWQgYnkgc2NyZWVuIHJlYWRlcnMuXG4gICAgbGFiZWxFbC5zZXRBdHRyaWJ1dGUoQVJJQV9MSVZFX0xBQkVMX1RFWFRfQVRUUiwgbGFiZWxUZXh0KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQWxsb3cgc2NyZWVuIHJlYWRlcnMgdG8gYW5ub3VuY2UgY2hhbmdlcyB0byB0aGUgRE9NIGFnYWluLlxuICAgICAgICBhcmlhRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBwcmlvcml0eSk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbWVzc2FnZSBmcm9tIHRoZSA6OmJlZm9yZSBwc2V1ZG8tZWxlbWVudC5cbiAgICAgICAgbGFiZWxFbC5yZW1vdmVBdHRyaWJ1dGUoQVJJQV9MSVZFX0xBQkVMX1RFWFRfQVRUUik7XG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIGxhYmVsIHRleHQsIHdoaWNoIHdpbGwgYmUgYW5ub3VuY2VkIGJ5IHNjcmVlbiByZWFkZXJzLlxuICAgICAgICBsYWJlbEVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICAgIH0sIEFSSUFfTElWRV9ERUxBWV9NUyk7XG59XG5leHBvcnQgeyBhbm5vdW5jZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IGFmdGVyXG5cbmZ1bmN0aW9uIGFmdGVyKGNvdW50LCBjYWxsYmFjaywgZXJyX2NiKSB7XG4gICAgdmFyIGJhaWwgPSBmYWxzZVxuICAgIGVycl9jYiA9IGVycl9jYiB8fCBub29wXG4gICAgcHJveHkuY291bnQgPSBjb3VudFxuXG4gICAgcmV0dXJuIChjb3VudCA9PT0gMCkgPyBjYWxsYmFjaygpIDogcHJveHlcblxuICAgIGZ1bmN0aW9uIHByb3h5KGVyciwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChwcm94eS5jb3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FmdGVyIGNhbGxlZCB0b28gbWFueSB0aW1lcycpXG4gICAgICAgIH1cbiAgICAgICAgLS1wcm94eS5jb3VudFxuXG4gICAgICAgIC8vIGFmdGVyIGZpcnN0IGVycm9yLCByZXN0IGFyZSBwYXNzZWQgdG8gZXJyX2NiXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGJhaWwgPSB0cnVlXG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpXG4gICAgICAgICAgICAvLyBmdXR1cmUgZXJyb3IgY2FsbGJhY2tzIHdpbGwgZ28gdG8gZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBlcnJfY2JcbiAgICAgICAgfSBlbHNlIGlmIChwcm94eS5jb3VudCA9PT0gMCAmJiAhYmFpbCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub29wKCkge31cbiIsIi8qKlxuICogQW4gYWJzdHJhY3Rpb24gZm9yIHNsaWNpbmcgYW4gYXJyYXlidWZmZXIgZXZlbiB3aGVuXG4gKiBBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgaXMgbm90IHN1cHBvcnRlZFxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnJheWJ1ZmZlciwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBhcnJheWJ1ZmZlci5ieXRlTGVuZ3RoO1xuICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gIGVuZCA9IGVuZCB8fCBieXRlcztcblxuICBpZiAoYXJyYXlidWZmZXIuc2xpY2UpIHsgcmV0dXJuIGFycmF5YnVmZmVyLnNsaWNlKHN0YXJ0LCBlbmQpOyB9XG5cbiAgaWYgKHN0YXJ0IDwgMCkgeyBzdGFydCArPSBieXRlczsgfVxuICBpZiAoZW5kIDwgMCkgeyBlbmQgKz0gYnl0ZXM7IH1cbiAgaWYgKGVuZCA+IGJ5dGVzKSB7IGVuZCA9IGJ5dGVzOyB9XG5cbiAgaWYgKHN0YXJ0ID49IGJ5dGVzIHx8IHN0YXJ0ID49IGVuZCB8fCBieXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gIH1cblxuICB2YXIgYWJ2ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuICB2YXIgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoZW5kIC0gc3RhcnQpO1xuICBmb3IgKHZhciBpID0gc3RhcnQsIGlpID0gMDsgaSA8IGVuZDsgaSsrLCBpaSsrKSB7XG4gICAgcmVzdWx0W2lpXSA9IGFidltpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0LmJ1ZmZlcjtcbn07XG4iLCJcbi8qKlxuICogRXhwb3NlIGBCYWNrb2ZmYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tvZmY7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBiYWNrb2ZmIHRpbWVyIHdpdGggYG9wdHNgLlxuICpcbiAqIC0gYG1pbmAgaW5pdGlhbCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBbMTAwXVxuICogLSBgbWF4YCBtYXggdGltZW91dCBbMTAwMDBdXG4gKiAtIGBqaXR0ZXJgIFswXVxuICogLSBgZmFjdG9yYCBbMl1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBCYWNrb2ZmKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIHRoaXMubXMgPSBvcHRzLm1pbiB8fCAxMDA7XG4gIHRoaXMubWF4ID0gb3B0cy5tYXggfHwgMTAwMDA7XG4gIHRoaXMuZmFjdG9yID0gb3B0cy5mYWN0b3IgfHwgMjtcbiAgdGhpcy5qaXR0ZXIgPSBvcHRzLmppdHRlciA+IDAgJiYgb3B0cy5qaXR0ZXIgPD0gMSA/IG9wdHMuaml0dGVyIDogMDtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBiYWNrb2ZmIGR1cmF0aW9uLlxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbigpe1xuICB2YXIgbXMgPSB0aGlzLm1zICogTWF0aC5wb3codGhpcy5mYWN0b3IsIHRoaXMuYXR0ZW1wdHMrKyk7XG4gIGlmICh0aGlzLmppdHRlcikge1xuICAgIHZhciByYW5kID0gIE1hdGgucmFuZG9tKCk7XG4gICAgdmFyIGRldmlhdGlvbiA9IE1hdGguZmxvb3IocmFuZCAqIHRoaXMuaml0dGVyICogbXMpO1xuICAgIG1zID0gKE1hdGguZmxvb3IocmFuZCAqIDEwKSAmIDEpID09IDAgID8gbXMgLSBkZXZpYXRpb24gOiBtcyArIGRldmlhdGlvbjtcbiAgfVxuICByZXR1cm4gTWF0aC5taW4obXMsIHRoaXMubWF4KSB8IDA7XG59O1xuXG4vKipcbiAqIFJlc2V0IHRoZSBudW1iZXIgb2YgYXR0ZW1wdHMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1pbmltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1pbiA9IGZ1bmN0aW9uKG1pbil7XG4gIHRoaXMubXMgPSBtaW47XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWF4aW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWF4ID0gZnVuY3Rpb24obWF4KXtcbiAgdGhpcy5tYXggPSBtYXg7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgaml0dGVyXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRKaXR0ZXIgPSBmdW5jdGlvbihqaXR0ZXIpe1xuICB0aGlzLmppdHRlciA9IGppdHRlcjtcbn07XG5cbiIsIi8qXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgY2hhcnMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcblxuICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguXG4gIHZhciBsb29rdXAgPSBuZXcgVWludDhBcnJheSgyNTYpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgbG9va3VwW2NoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcbiAgfVxuXG4gIGV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlciksXG4gICAgaSwgbGVuID0gYnl0ZXMubGVuZ3RoLCBiYXNlNjQgPSBcIlwiO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9Mykge1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2ldID4+IDJdO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaV0gJiAzKSA8PCA0KSB8IChieXRlc1tpICsgMV0gPj4gNCldO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgIH1cblxuICAgIGlmICgobGVuICUgMykgPT09IDIpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgXCI9XCI7XG4gICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAyKSArIFwiPT1cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0O1xuICB9O1xuXG4gIGV4cG9ydHMuZGVjb2RlID0gIGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBiYXNlNjQubGVuZ3RoICogMC43NSxcbiAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLCBpLCBwID0gMCxcbiAgICBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDFdID09PSBcIj1cIikge1xuICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAyXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFycmF5YnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCksXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz00KSB7XG4gICAgICBlbmNvZGVkMSA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKV07XG4gICAgICBlbmNvZGVkMiA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKzEpXTtcbiAgICAgIGVuY29kZWQzID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkrMildO1xuICAgICAgZW5jb2RlZDQgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSszKV07XG5cbiAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDEgPDwgMikgfCAoZW5jb2RlZDIgPj4gNCk7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMiAmIDE1KSA8PCA0KSB8IChlbmNvZGVkMyA+PiAyKTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICB9O1xufSkoKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIHZhciBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayhcbiAgICAgIHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aClcbiAgICApKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKipcclxuICogQ3JlYXRlIGEgYmxvYiBidWlsZGVyIGV2ZW4gd2hlbiB2ZW5kb3IgcHJlZml4ZXMgZXhpc3RcclxuICovXHJcblxyXG52YXIgQmxvYkJ1aWxkZXIgPSB0eXBlb2YgQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gQmxvYkJ1aWxkZXIgOlxyXG4gIHR5cGVvZiBXZWJLaXRCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBXZWJLaXRCbG9iQnVpbGRlciA6XHJcbiAgdHlwZW9mIE1TQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTVNCbG9iQnVpbGRlciA6XHJcbiAgdHlwZW9mIE1vekJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IE1vekJsb2JCdWlsZGVyIDogXHJcbiAgZmFsc2U7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgQmxvYiBjb25zdHJ1Y3RvciBpcyBzdXBwb3J0ZWRcclxuICovXHJcblxyXG52YXIgYmxvYlN1cHBvcnRlZCA9IChmdW5jdGlvbigpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIGEgPSBuZXcgQmxvYihbJ2hpJ10pO1xyXG4gICAgcmV0dXJuIGEuc2l6ZSA9PT0gMjtcclxuICB9IGNhdGNoKGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn0pKCk7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgQmxvYiBjb25zdHJ1Y3RvciBzdXBwb3J0cyBBcnJheUJ1ZmZlclZpZXdzXHJcbiAqIEZhaWxzIGluIFNhZmFyaSA2LCBzbyB3ZSBuZWVkIHRvIG1hcCB0byBBcnJheUJ1ZmZlcnMgdGhlcmUuXHJcbiAqL1xyXG5cclxudmFyIGJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyA9IGJsb2JTdXBwb3J0ZWQgJiYgKGZ1bmN0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgYiA9IG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShbMSwyXSldKTtcclxuICAgIHJldHVybiBiLnNpemUgPT09IDI7XHJcbiAgfSBjYXRjaChlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIEJsb2JCdWlsZGVyIGlzIHN1cHBvcnRlZFxyXG4gKi9cclxuXHJcbnZhciBibG9iQnVpbGRlclN1cHBvcnRlZCA9IEJsb2JCdWlsZGVyXHJcbiAgJiYgQmxvYkJ1aWxkZXIucHJvdG90eXBlLmFwcGVuZFxyXG4gICYmIEJsb2JCdWlsZGVyLnByb3RvdHlwZS5nZXRCbG9iO1xyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IG1hcHMgQXJyYXlCdWZmZXJWaWV3cyB0byBBcnJheUJ1ZmZlcnNcclxuICogVXNlZCBieSBCbG9iQnVpbGRlciBjb25zdHJ1Y3RvciBhbmQgb2xkIGJyb3dzZXJzIHRoYXQgZGlkbid0XHJcbiAqIHN1cHBvcnQgaXQgaW4gdGhlIEJsb2IgY29uc3RydWN0b3IuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWFwQXJyYXlCdWZmZXJWaWV3cyhhcnkpIHtcclxuICByZXR1cm4gYXJ5Lm1hcChmdW5jdGlvbihjaHVuaykge1xyXG4gICAgaWYgKGNodW5rLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgIHZhciBidWYgPSBjaHVuay5idWZmZXI7XHJcblxyXG4gICAgICAvLyBpZiB0aGlzIGlzIGEgc3ViYXJyYXksIG1ha2UgYSBjb3B5IHNvIHdlIG9ubHlcclxuICAgICAgLy8gaW5jbHVkZSB0aGUgc3ViYXJyYXkgcmVnaW9uIGZyb20gdGhlIHVuZGVybHlpbmcgYnVmZmVyXHJcbiAgICAgIGlmIChjaHVuay5ieXRlTGVuZ3RoICE9PSBidWYuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjb3B5ID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmsuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgY29weS5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmLCBjaHVuay5ieXRlT2Zmc2V0LCBjaHVuay5ieXRlTGVuZ3RoKSk7XHJcbiAgICAgICAgYnVmID0gY29weS5idWZmZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBidWY7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNodW5rO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCbG9iQnVpbGRlckNvbnN0cnVjdG9yKGFyeSwgb3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICB2YXIgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcclxuICBtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSkuZm9yRWFjaChmdW5jdGlvbihwYXJ0KSB7XHJcbiAgICBiYi5hcHBlbmQocGFydCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAob3B0aW9ucy50eXBlKSA/IGJiLmdldEJsb2Iob3B0aW9ucy50eXBlKSA6IGJiLmdldEJsb2IoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEJsb2JDb25zdHJ1Y3RvcihhcnksIG9wdGlvbnMpIHtcclxuICByZXR1cm4gbmV3IEJsb2IobWFwQXJyYXlCdWZmZXJWaWV3cyhhcnkpLCBvcHRpb25zIHx8IHt9KTtcclxufTtcclxuXHJcbmlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBCbG9iQnVpbGRlckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IEJsb2IucHJvdG90eXBlO1xyXG4gIEJsb2JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBCbG9iLnByb3RvdHlwZTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgaWYgKGJsb2JTdXBwb3J0ZWQpIHtcclxuICAgIHJldHVybiBibG9iU3VwcG9ydHNBcnJheUJ1ZmZlclZpZXcgPyBCbG9iIDogQmxvYkNvbnN0cnVjdG9yO1xyXG4gIH0gZWxzZSBpZiAoYmxvYkJ1aWxkZXJTdXBwb3J0ZWQpIHtcclxuICAgIHJldHVybiBCbG9iQnVpbGRlckNvbnN0cnVjdG9yO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufSkoKTtcclxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLyoqXG4gKiBTbGljZSByZWZlcmVuY2UuXG4gKi9cblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG5cbi8qKlxuICogQmluZCBgb2JqYCB0byBgZm5gLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBmbiBvciBzdHJpbmdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgZm4pe1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGZuKSBmbiA9IG9ialtmbl07XG4gIGlmICgnZnVuY3Rpb24nICE9IHR5cGVvZiBmbikgdGhyb3cgbmV3IEVycm9yKCdiaW5kKCkgcmVxdWlyZXMgYSBmdW5jdGlvbicpO1xuICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG9iaiwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gIH1cbn07XG4iLCJcclxuLyoqXHJcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXHJcbiAqXHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcclxuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXHJcbiAgICAucHVzaChmbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXHJcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcclxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBvbi5mbiA9IGZuO1xyXG4gIHRoaXMub24oZXZlbnQsIG9uKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIC8vIGFsbFxyXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWZpYyBldmVudFxyXG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xyXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxyXG4gIHZhciBjYjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2IgPSBjYWxsYmFja3NbaV07XHJcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge01peGVkfSAuLi5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxyXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG5cclxuICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xyXG59O1xyXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYSwgYil7XG4gIHZhciBmbiA9IGZ1bmN0aW9uKCl7fTtcbiAgZm4ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gIGEucHJvdG90eXBlID0gbmV3IGZuO1xuICBhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGE7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBzZWxmO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctZnVuY1xuICB9XG59KSgpO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc29ja2V0Jyk7XG5cbi8qKlxuICogRXhwb3J0cyBwYXJzZXJcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICpcbiAqL1xubW9kdWxlLmV4cG9ydHMucGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB0cmFuc3BvcnRzID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzL2luZGV4Jyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OnNvY2tldCcpO1xudmFyIGluZGV4ID0gcmVxdWlyZSgnaW5kZXhvZicpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBwYXJzZXVyaSA9IHJlcXVpcmUoJ3BhcnNldXJpJyk7XG52YXIgcGFyc2VxcyA9IHJlcXVpcmUoJ3BhcnNlcXMnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNvY2tldDtcblxuLyoqXG4gKiBTb2NrZXQgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1cmkgb3Igb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gU29ja2V0ICh1cmksIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNvY2tldCkpIHJldHVybiBuZXcgU29ja2V0KHVyaSwgb3B0cyk7XG5cbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgaWYgKHVyaSAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIHVyaSkge1xuICAgIG9wdHMgPSB1cmk7XG4gICAgdXJpID0gbnVsbDtcbiAgfVxuXG4gIGlmICh1cmkpIHtcbiAgICB1cmkgPSBwYXJzZXVyaSh1cmkpO1xuICAgIG9wdHMuaG9zdG5hbWUgPSB1cmkuaG9zdDtcbiAgICBvcHRzLnNlY3VyZSA9IHVyaS5wcm90b2NvbCA9PT0gJ2h0dHBzJyB8fCB1cmkucHJvdG9jb2wgPT09ICd3c3MnO1xuICAgIG9wdHMucG9ydCA9IHVyaS5wb3J0O1xuICAgIGlmICh1cmkucXVlcnkpIG9wdHMucXVlcnkgPSB1cmkucXVlcnk7XG4gIH0gZWxzZSBpZiAob3B0cy5ob3N0KSB7XG4gICAgb3B0cy5ob3N0bmFtZSA9IHBhcnNldXJpKG9wdHMuaG9zdCkuaG9zdDtcbiAgfVxuXG4gIHRoaXMuc2VjdXJlID0gbnVsbCAhPSBvcHRzLnNlY3VyZSA/IG9wdHMuc2VjdXJlXG4gICAgOiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiAnaHR0cHM6JyA9PT0gbG9jYXRpb24ucHJvdG9jb2wpO1xuXG4gIGlmIChvcHRzLmhvc3RuYW1lICYmICFvcHRzLnBvcnQpIHtcbiAgICAvLyBpZiBubyBwb3J0IGlzIHNwZWNpZmllZCBtYW51YWxseSwgdXNlIHRoZSBwcm90b2NvbCBkZWZhdWx0XG4gICAgb3B0cy5wb3J0ID0gdGhpcy5zZWN1cmUgPyAnNDQzJyA6ICc4MCc7XG4gIH1cblxuICB0aGlzLmFnZW50ID0gb3B0cy5hZ2VudCB8fCBmYWxzZTtcbiAgdGhpcy5ob3N0bmFtZSA9IG9wdHMuaG9zdG5hbWUgfHxcbiAgICAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xuICB0aGlzLnBvcnQgPSBvcHRzLnBvcnQgfHwgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYXRpb24ucG9ydFxuICAgICAgPyBsb2NhdGlvbi5wb3J0XG4gICAgICA6ICh0aGlzLnNlY3VyZSA/IDQ0MyA6IDgwKSk7XG4gIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5IHx8IHt9O1xuICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB0aGlzLnF1ZXJ5KSB0aGlzLnF1ZXJ5ID0gcGFyc2Vxcy5kZWNvZGUodGhpcy5xdWVyeSk7XG4gIHRoaXMudXBncmFkZSA9IGZhbHNlICE9PSBvcHRzLnVwZ3JhZGU7XG4gIHRoaXMucGF0aCA9IChvcHRzLnBhdGggfHwgJy9lbmdpbmUuaW8nKS5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nO1xuICB0aGlzLmZvcmNlSlNPTlAgPSAhIW9wdHMuZm9yY2VKU09OUDtcbiAgdGhpcy5qc29ucCA9IGZhbHNlICE9PSBvcHRzLmpzb25wO1xuICB0aGlzLmZvcmNlQmFzZTY0ID0gISFvcHRzLmZvcmNlQmFzZTY0O1xuICB0aGlzLmVuYWJsZXNYRFIgPSAhIW9wdHMuZW5hYmxlc1hEUjtcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZSAhPT0gb3B0cy53aXRoQ3JlZGVudGlhbHM7XG4gIHRoaXMudGltZXN0YW1wUGFyYW0gPSBvcHRzLnRpbWVzdGFtcFBhcmFtIHx8ICd0JztcbiAgdGhpcy50aW1lc3RhbXBSZXF1ZXN0cyA9IG9wdHMudGltZXN0YW1wUmVxdWVzdHM7XG4gIHRoaXMudHJhbnNwb3J0cyA9IG9wdHMudHJhbnNwb3J0cyB8fCBbJ3BvbGxpbmcnLCAnd2Vic29ja2V0J107XG4gIHRoaXMudHJhbnNwb3J0T3B0aW9ucyA9IG9wdHMudHJhbnNwb3J0T3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJyc7XG4gIHRoaXMud3JpdGVCdWZmZXIgPSBbXTtcbiAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcbiAgdGhpcy5wb2xpY3lQb3J0ID0gb3B0cy5wb2xpY3lQb3J0IHx8IDg0MztcbiAgdGhpcy5yZW1lbWJlclVwZ3JhZGUgPSBvcHRzLnJlbWVtYmVyVXBncmFkZSB8fCBmYWxzZTtcbiAgdGhpcy5iaW5hcnlUeXBlID0gbnVsbDtcbiAgdGhpcy5vbmx5QmluYXJ5VXBncmFkZXMgPSBvcHRzLm9ubHlCaW5hcnlVcGdyYWRlcztcbiAgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSA9IGZhbHNlICE9PSBvcHRzLnBlck1lc3NhZ2VEZWZsYXRlID8gKG9wdHMucGVyTWVzc2FnZURlZmxhdGUgfHwge30pIDogZmFsc2U7XG5cbiAgaWYgKHRydWUgPT09IHRoaXMucGVyTWVzc2FnZURlZmxhdGUpIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSB7fTtcbiAgaWYgKHRoaXMucGVyTWVzc2FnZURlZmxhdGUgJiYgbnVsbCA9PSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgIHRoaXMucGVyTWVzc2FnZURlZmxhdGUudGhyZXNob2xkID0gMTAyNDtcbiAgfVxuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLnBmeCA9IG9wdHMucGZ4IHx8IG51bGw7XG4gIHRoaXMua2V5ID0gb3B0cy5rZXkgfHwgbnVsbDtcbiAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlIHx8IG51bGw7XG4gIHRoaXMuY2VydCA9IG9wdHMuY2VydCB8fCBudWxsO1xuICB0aGlzLmNhID0gb3B0cy5jYSB8fCBudWxsO1xuICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnMgfHwgbnVsbDtcbiAgdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQgPSBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdHMucmVqZWN0VW5hdXRob3JpemVkO1xuICB0aGlzLmZvcmNlTm9kZSA9ICEhb3B0cy5mb3JjZU5vZGU7XG5cbiAgLy8gZGV0ZWN0IFJlYWN0TmF0aXZlIGVudmlyb25tZW50XG4gIHRoaXMuaXNSZWFjdE5hdGl2ZSA9ICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdzdHJpbmcnICYmIG5hdmlnYXRvci5wcm9kdWN0LnRvTG93ZXJDYXNlKCkgPT09ICdyZWFjdG5hdGl2ZScpO1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgb3IgUmVhY3ROYXRpdmUgY2xpZW50XG4gIGlmICh0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5pc1JlYWN0TmF0aXZlKSB7XG4gICAgaWYgKG9wdHMuZXh0cmFIZWFkZXJzICYmIE9iamVjdC5rZXlzKG9wdHMuZXh0cmFIZWFkZXJzKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmxvY2FsQWRkcmVzcykge1xuICAgICAgdGhpcy5sb2NhbEFkZHJlc3MgPSBvcHRzLmxvY2FsQWRkcmVzcztcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgb24gaGFuZHNoYWtlXG4gIHRoaXMuaWQgPSBudWxsO1xuICB0aGlzLnVwZ3JhZGVzID0gbnVsbDtcbiAgdGhpcy5waW5nSW50ZXJ2YWwgPSBudWxsO1xuICB0aGlzLnBpbmdUaW1lb3V0ID0gbnVsbDtcblxuICAvLyBzZXQgb24gaGVhcnRiZWF0XG4gIHRoaXMucGluZ0ludGVydmFsVGltZXIgPSBudWxsO1xuICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBudWxsO1xuXG4gIHRoaXMub3BlbigpO1xufVxuXG5Tb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFNvY2tldC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2w7IC8vIHRoaXMgaXMgYW4gaW50XG5cbi8qKlxuICogRXhwb3NlIGRlcHMgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5XG4gKiBhbmQgc3RhbmRhbG9uZSBicm93c2VyIGFjY2Vzcy5cbiAqL1xuXG5Tb2NrZXQuU29ja2V0ID0gU29ja2V0O1xuU29ja2V0LlRyYW5zcG9ydCA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0Jyk7XG5Tb2NrZXQudHJhbnNwb3J0cyA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0cy9pbmRleCcpO1xuU29ja2V0LnBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIHRyYW5zcG9ydCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAqIEByZXR1cm4ge1RyYW5zcG9ydH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuY3JlYXRlVHJhbnNwb3J0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVidWcoJ2NyZWF0aW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgdmFyIHF1ZXJ5ID0gY2xvbmUodGhpcy5xdWVyeSk7XG5cbiAgLy8gYXBwZW5kIGVuZ2luZS5pbyBwcm90b2NvbCBpZGVudGlmaWVyXG4gIHF1ZXJ5LkVJTyA9IHBhcnNlci5wcm90b2NvbDtcblxuICAvLyB0cmFuc3BvcnQgbmFtZVxuICBxdWVyeS50cmFuc3BvcnQgPSBuYW1lO1xuXG4gIC8vIHBlci10cmFuc3BvcnQgb3B0aW9uc1xuICB2YXIgb3B0aW9ucyA9IHRoaXMudHJhbnNwb3J0T3B0aW9uc1tuYW1lXSB8fCB7fTtcblxuICAvLyBzZXNzaW9uIGlkIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcbiAgaWYgKHRoaXMuaWQpIHF1ZXJ5LnNpZCA9IHRoaXMuaWQ7XG5cbiAgdmFyIHRyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzW25hbWVdKHtcbiAgICBxdWVyeTogcXVlcnksXG4gICAgc29ja2V0OiB0aGlzLFxuICAgIGFnZW50OiBvcHRpb25zLmFnZW50IHx8IHRoaXMuYWdlbnQsXG4gICAgaG9zdG5hbWU6IG9wdGlvbnMuaG9zdG5hbWUgfHwgdGhpcy5ob3N0bmFtZSxcbiAgICBwb3J0OiBvcHRpb25zLnBvcnQgfHwgdGhpcy5wb3J0LFxuICAgIHNlY3VyZTogb3B0aW9ucy5zZWN1cmUgfHwgdGhpcy5zZWN1cmUsXG4gICAgcGF0aDogb3B0aW9ucy5wYXRoIHx8IHRoaXMucGF0aCxcbiAgICBmb3JjZUpTT05QOiBvcHRpb25zLmZvcmNlSlNPTlAgfHwgdGhpcy5mb3JjZUpTT05QLFxuICAgIGpzb25wOiBvcHRpb25zLmpzb25wIHx8IHRoaXMuanNvbnAsXG4gICAgZm9yY2VCYXNlNjQ6IG9wdGlvbnMuZm9yY2VCYXNlNjQgfHwgdGhpcy5mb3JjZUJhc2U2NCxcbiAgICBlbmFibGVzWERSOiBvcHRpb25zLmVuYWJsZXNYRFIgfHwgdGhpcy5lbmFibGVzWERSLFxuICAgIHdpdGhDcmVkZW50aWFsczogb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgfHwgdGhpcy53aXRoQ3JlZGVudGlhbHMsXG4gICAgdGltZXN0YW1wUmVxdWVzdHM6IG9wdGlvbnMudGltZXN0YW1wUmVxdWVzdHMgfHwgdGhpcy50aW1lc3RhbXBSZXF1ZXN0cyxcbiAgICB0aW1lc3RhbXBQYXJhbTogb3B0aW9ucy50aW1lc3RhbXBQYXJhbSB8fCB0aGlzLnRpbWVzdGFtcFBhcmFtLFxuICAgIHBvbGljeVBvcnQ6IG9wdGlvbnMucG9saWN5UG9ydCB8fCB0aGlzLnBvbGljeVBvcnQsXG4gICAgcGZ4OiBvcHRpb25zLnBmeCB8fCB0aGlzLnBmeCxcbiAgICBrZXk6IG9wdGlvbnMua2V5IHx8IHRoaXMua2V5LFxuICAgIHBhc3NwaHJhc2U6IG9wdGlvbnMucGFzc3BocmFzZSB8fCB0aGlzLnBhc3NwaHJhc2UsXG4gICAgY2VydDogb3B0aW9ucy5jZXJ0IHx8IHRoaXMuY2VydCxcbiAgICBjYTogb3B0aW9ucy5jYSB8fCB0aGlzLmNhLFxuICAgIGNpcGhlcnM6IG9wdGlvbnMuY2lwaGVycyB8fCB0aGlzLmNpcGhlcnMsXG4gICAgcmVqZWN0VW5hdXRob3JpemVkOiBvcHRpb25zLnJlamVjdFVuYXV0aG9yaXplZCB8fCB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCxcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZTogb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSB8fCB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLFxuICAgIGV4dHJhSGVhZGVyczogb3B0aW9ucy5leHRyYUhlYWRlcnMgfHwgdGhpcy5leHRyYUhlYWRlcnMsXG4gICAgZm9yY2VOb2RlOiBvcHRpb25zLmZvcmNlTm9kZSB8fCB0aGlzLmZvcmNlTm9kZSxcbiAgICBsb2NhbEFkZHJlc3M6IG9wdGlvbnMubG9jYWxBZGRyZXNzIHx8IHRoaXMubG9jYWxBZGRyZXNzLFxuICAgIHJlcXVlc3RUaW1lb3V0OiBvcHRpb25zLnJlcXVlc3RUaW1lb3V0IHx8IHRoaXMucmVxdWVzdFRpbWVvdXQsXG4gICAgcHJvdG9jb2xzOiBvcHRpb25zLnByb3RvY29scyB8fCB2b2lkICgwKSxcbiAgICBpc1JlYWN0TmF0aXZlOiB0aGlzLmlzUmVhY3ROYXRpdmVcbiAgfSk7XG5cbiAgcmV0dXJuIHRyYW5zcG9ydDtcbn07XG5cbmZ1bmN0aW9uIGNsb25lIChvYmopIHtcbiAgdmFyIG8gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBvW2ldID0gb2JqW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyB0cmFuc3BvcnQgdG8gdXNlIGFuZCBzdGFydHMgcHJvYmUuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblNvY2tldC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRyYW5zcG9ydDtcbiAgaWYgKHRoaXMucmVtZW1iZXJVcGdyYWRlICYmIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgJiYgdGhpcy50cmFuc3BvcnRzLmluZGV4T2YoJ3dlYnNvY2tldCcpICE9PSAtMSkge1xuICAgIHRyYW5zcG9ydCA9ICd3ZWJzb2NrZXQnO1xuICB9IGVsc2UgaWYgKDAgPT09IHRoaXMudHJhbnNwb3J0cy5sZW5ndGgpIHtcbiAgICAvLyBFbWl0IGVycm9yIG9uIG5leHQgdGljayBzbyBpdCBjYW4gYmUgbGlzdGVuZWQgdG9cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywgJ05vIHRyYW5zcG9ydHMgYXZhaWxhYmxlJyk7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1swXTtcbiAgfVxuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3BlbmluZyc7XG5cbiAgLy8gUmV0cnkgd2l0aCB0aGUgbmV4dCB0cmFuc3BvcnQgaWYgdGhlIHRyYW5zcG9ydCBpcyBkaXNhYmxlZCAoanNvbnA6IGZhbHNlKVxuICB0cnkge1xuICAgIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLnRyYW5zcG9ydHMuc2hpZnQoKTtcbiAgICB0aGlzLm9wZW4oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cmFuc3BvcnQub3BlbigpO1xuICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydC4gRGlzYWJsZXMgdGhlIGV4aXN0aW5nIG9uZSAoaWYgYW55KS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNldFRyYW5zcG9ydCA9IGZ1bmN0aW9uICh0cmFuc3BvcnQpIHtcbiAgZGVidWcoJ3NldHRpbmcgdHJhbnNwb3J0ICVzJywgdHJhbnNwb3J0Lm5hbWUpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgZGVidWcoJ2NsZWFyaW5nIGV4aXN0aW5nIHRyYW5zcG9ydCAlcycsIHRoaXMudHJhbnNwb3J0Lm5hbWUpO1xuICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICB9XG5cbiAgLy8gc2V0IHVwIHRyYW5zcG9ydFxuICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcblxuICAvLyBzZXQgdXAgdHJhbnNwb3J0IGxpc3RlbmVyc1xuICB0cmFuc3BvcnRcbiAgLm9uKCdkcmFpbicsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9uRHJhaW4oKTtcbiAgfSlcbiAgLm9uKCdwYWNrZXQnLCBmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgc2VsZi5vblBhY2tldChwYWNrZXQpO1xuICB9KVxuICAub24oJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICBzZWxmLm9uRXJyb3IoZSk7XG4gIH0pXG4gIC5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbkNsb3NlKCd0cmFuc3BvcnQgY2xvc2UnKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFByb2JlcyBhIHRyYW5zcG9ydC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUucHJvYmUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWJ1ZygncHJvYmluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gIHZhciB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydChuYW1lLCB7IHByb2JlOiAxIH0pO1xuICB2YXIgZmFpbGVkID0gZmFsc2U7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gb25UcmFuc3BvcnRPcGVuICgpIHtcbiAgICBpZiAoc2VsZi5vbmx5QmluYXJ5VXBncmFkZXMpIHtcbiAgICAgIHZhciB1cGdyYWRlTG9zZXNCaW5hcnkgPSAhdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiBzZWxmLnRyYW5zcG9ydC5zdXBwb3J0c0JpbmFyeTtcbiAgICAgIGZhaWxlZCA9IGZhaWxlZCB8fCB1cGdyYWRlTG9zZXNCaW5hcnk7XG4gICAgfVxuICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIG9wZW5lZCcsIG5hbWUpO1xuICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6ICdwaW5nJywgZGF0YTogJ3Byb2JlJyB9XSk7XG4gICAgdHJhbnNwb3J0Lm9uY2UoJ3BhY2tldCcsIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgIGlmICgncG9uZycgPT09IG1zZy50eXBlICYmICdwcm9iZScgPT09IG1zZy5kYXRhKSB7XG4gICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIHBvbmcnLCBuYW1lKTtcbiAgICAgICAgc2VsZi51cGdyYWRpbmcgPSB0cnVlO1xuICAgICAgICBzZWxmLmVtaXQoJ3VwZ3JhZGluZycsIHRyYW5zcG9ydCk7XG4gICAgICAgIGlmICghdHJhbnNwb3J0KSByZXR1cm47XG4gICAgICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSAnd2Vic29ja2V0JyA9PT0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgICAgZGVidWcoJ3BhdXNpbmcgY3VycmVudCB0cmFuc3BvcnQgXCIlc1wiJywgc2VsZi50cmFuc3BvcnQubmFtZSk7XG4gICAgICAgIHNlbGYudHJhbnNwb3J0LnBhdXNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgICAgaWYgKCdjbG9zZWQnID09PSBzZWxmLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICBkZWJ1ZygnY2hhbmdpbmcgdHJhbnNwb3J0IGFuZCBzZW5kaW5nIHVwZ3JhZGUgcGFja2V0Jyk7XG5cbiAgICAgICAgICBjbGVhbnVwKCk7XG5cbiAgICAgICAgICBzZWxmLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgICAgICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6ICd1cGdyYWRlJyB9XSk7XG4gICAgICAgICAgc2VsZi5lbWl0KCd1cGdyYWRlJywgdHJhbnNwb3J0KTtcbiAgICAgICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgIHNlbGYudXBncmFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5mbHVzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCcsIG5hbWUpO1xuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdwcm9iZSBlcnJvcicpO1xuICAgICAgICBlcnIudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG4gICAgICAgIHNlbGYuZW1pdCgndXBncmFkZUVycm9yJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZyZWV6ZVRyYW5zcG9ydCAoKSB7XG4gICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgLy8gQW55IGNhbGxiYWNrIGNhbGxlZCBieSB0cmFuc3BvcnQgc2hvdWxkIGJlIGlnbm9yZWQgc2luY2Ugbm93XG4gICAgZmFpbGVkID0gdHJ1ZTtcblxuICAgIGNsZWFudXAoKTtcblxuICAgIHRyYW5zcG9ydC5jbG9zZSgpO1xuICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gIH1cblxuICAvLyBIYW5kbGUgYW55IGVycm9yIHRoYXQgaGFwcGVucyB3aGlsZSBwcm9iaW5nXG4gIGZ1bmN0aW9uIG9uZXJyb3IgKGVycikge1xuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcigncHJvYmUgZXJyb3I6ICcgKyBlcnIpO1xuICAgIGVycm9yLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgZnJlZXplVHJhbnNwb3J0KCk7XG5cbiAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQgYmVjYXVzZSBvZiBlcnJvcjogJXMnLCBuYW1lLCBlcnIpO1xuXG4gICAgc2VsZi5lbWl0KCd1cGdyYWRlRXJyb3InLCBlcnJvcik7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zcG9ydENsb3NlICgpIHtcbiAgICBvbmVycm9yKCd0cmFuc3BvcnQgY2xvc2VkJyk7XG4gIH1cblxuICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgY2xvc2VkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgZnVuY3Rpb24gb25jbG9zZSAoKSB7XG4gICAgb25lcnJvcignc29ja2V0IGNsb3NlZCcpO1xuICB9XG5cbiAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIHVwZ3JhZGVkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgZnVuY3Rpb24gb251cGdyYWRlICh0bykge1xuICAgIGlmICh0cmFuc3BvcnQgJiYgdG8ubmFtZSAhPT0gdHJhbnNwb3J0Lm5hbWUpIHtcbiAgICAgIGRlYnVnKCdcIiVzXCIgd29ya3MgLSBhYm9ydGluZyBcIiVzXCInLCB0by5uYW1lLCB0cmFuc3BvcnQubmFtZSk7XG4gICAgICBmcmVlemVUcmFuc3BvcnQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycyBvbiB0aGUgdHJhbnNwb3J0IGFuZCBvbiBzZWxmXG4gIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcignb3BlbicsIG9uVHJhbnNwb3J0T3Blbik7XG4gICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvblRyYW5zcG9ydENsb3NlKTtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uY2xvc2UpO1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ3VwZ3JhZGluZycsIG9udXBncmFkZSk7XG4gIH1cblxuICB0cmFuc3BvcnQub25jZSgnb3BlbicsIG9uVHJhbnNwb3J0T3Blbik7XG4gIHRyYW5zcG9ydC5vbmNlKCdlcnJvcicsIG9uZXJyb3IpO1xuICB0cmFuc3BvcnQub25jZSgnY2xvc2UnLCBvblRyYW5zcG9ydENsb3NlKTtcblxuICB0aGlzLm9uY2UoJ2Nsb3NlJywgb25jbG9zZSk7XG4gIHRoaXMub25jZSgndXBncmFkaW5nJywgb251cGdyYWRlKTtcblxuICB0cmFuc3BvcnQub3BlbigpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2hlbiBjb25uZWN0aW9uIGlzIGRlZW1lZCBvcGVuLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdzb2NrZXQgb3BlbicpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3Blbic7XG4gIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSAnd2Vic29ja2V0JyA9PT0gdGhpcy50cmFuc3BvcnQubmFtZTtcbiAgdGhpcy5lbWl0KCdvcGVuJyk7XG4gIHRoaXMuZmx1c2goKTtcblxuICAvLyB3ZSBjaGVjayBmb3IgYHJlYWR5U3RhdGVgIGluIGNhc2UgYW4gYG9wZW5gXG4gIC8vIGxpc3RlbmVyIGFscmVhZHkgY2xvc2VkIHRoZSBzb2NrZXRcbiAgaWYgKCdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlICYmIHRoaXMudXBncmFkZSAmJiB0aGlzLnRyYW5zcG9ydC5wYXVzZSkge1xuICAgIGRlYnVnKCdzdGFydGluZyB1cGdyYWRlIHByb2JlcycpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy51cGdyYWRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMucHJvYmUodGhpcy51cGdyYWRlc1tpXSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEhhbmRsZXMgYSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vblBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICAnY2xvc2luZycgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIGRlYnVnKCdzb2NrZXQgcmVjZWl2ZTogdHlwZSBcIiVzXCIsIGRhdGEgXCIlc1wiJywgcGFja2V0LnR5cGUsIHBhY2tldC5kYXRhKTtcblxuICAgIHRoaXMuZW1pdCgncGFja2V0JywgcGFja2V0KTtcblxuICAgIC8vIFNvY2tldCBpcyBsaXZlIC0gYW55IHBhY2tldCBjb3VudHNcbiAgICB0aGlzLmVtaXQoJ2hlYXJ0YmVhdCcpO1xuXG4gICAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgICAgY2FzZSAnb3Blbic6XG4gICAgICAgIHRoaXMub25IYW5kc2hha2UoSlNPTi5wYXJzZShwYWNrZXQuZGF0YSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9uZyc6XG4gICAgICAgIHRoaXMuc2V0UGluZygpO1xuICAgICAgICB0aGlzLmVtaXQoJ3BvbmcnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignc2VydmVyIGVycm9yJyk7XG4gICAgICAgIGVyci5jb2RlID0gcGFja2V0LmRhdGE7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgIHRoaXMuZW1pdCgnZGF0YScsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgcGFja2V0LmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGVidWcoJ3BhY2tldCByZWNlaXZlZCB3aXRoIHNvY2tldCByZWFkeVN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gaGFuZHNoYWtlIGNvbXBsZXRpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhhbmRzaGFrZSBvYmpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25IYW5kc2hha2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0aGlzLmVtaXQoJ2hhbmRzaGFrZScsIGRhdGEpO1xuICB0aGlzLmlkID0gZGF0YS5zaWQ7XG4gIHRoaXMudHJhbnNwb3J0LnF1ZXJ5LnNpZCA9IGRhdGEuc2lkO1xuICB0aGlzLnVwZ3JhZGVzID0gdGhpcy5maWx0ZXJVcGdyYWRlcyhkYXRhLnVwZ3JhZGVzKTtcbiAgdGhpcy5waW5nSW50ZXJ2YWwgPSBkYXRhLnBpbmdJbnRlcnZhbDtcbiAgdGhpcy5waW5nVGltZW91dCA9IGRhdGEucGluZ1RpbWVvdXQ7XG4gIHRoaXMub25PcGVuKCk7XG4gIC8vIEluIGNhc2Ugb3BlbiBoYW5kbGVyIGNsb3NlcyBzb2NrZXRcbiAgaWYgKCdjbG9zZWQnID09PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgdGhpcy5zZXRQaW5nKCk7XG5cbiAgLy8gUHJvbG9uZyBsaXZlbmVzcyBvZiBzb2NrZXQgb24gaGVhcnRiZWF0XG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2hlYXJ0YmVhdCcsIHRoaXMub25IZWFydGJlYXQpO1xuICB0aGlzLm9uKCdoZWFydGJlYXQnLCB0aGlzLm9uSGVhcnRiZWF0KTtcbn07XG5cbi8qKlxuICogUmVzZXRzIHBpbmcgdGltZW91dC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uSGVhcnRiZWF0ID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5waW5nVGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCdjbG9zZWQnID09PSBzZWxmLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICBzZWxmLm9uQ2xvc2UoJ3BpbmcgdGltZW91dCcpO1xuICB9LCB0aW1lb3V0IHx8IChzZWxmLnBpbmdJbnRlcnZhbCArIHNlbGYucGluZ1RpbWVvdXQpKTtcbn07XG5cbi8qKlxuICogUGluZ3Mgc2VydmVyIGV2ZXJ5IGB0aGlzLnBpbmdJbnRlcnZhbGAgYW5kIGV4cGVjdHMgcmVzcG9uc2VcbiAqIHdpdGhpbiBgdGhpcy5waW5nVGltZW91dGAgb3IgY2xvc2VzIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zZXRQaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGNsZWFyVGltZW91dChzZWxmLnBpbmdJbnRlcnZhbFRpbWVyKTtcbiAgc2VsZi5waW5nSW50ZXJ2YWxUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGRlYnVnKCd3cml0aW5nIHBpbmcgcGFja2V0IC0gZXhwZWN0aW5nIHBvbmcgd2l0aGluICVzbXMnLCBzZWxmLnBpbmdUaW1lb3V0KTtcbiAgICBzZWxmLnBpbmcoKTtcbiAgICBzZWxmLm9uSGVhcnRiZWF0KHNlbGYucGluZ1RpbWVvdXQpO1xuICB9LCBzZWxmLnBpbmdJbnRlcnZhbCk7XG59O1xuXG4vKipcbiogU2VuZHMgYSBwaW5nIHBhY2tldC5cbipcbiogQGFwaSBwcml2YXRlXG4qL1xuXG5Tb2NrZXQucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5zZW5kUGFja2V0KCdwaW5nJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuZW1pdCgncGluZycpO1xuICB9KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIG9uIGBkcmFpbmAgZXZlbnRcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMud3JpdGVCdWZmZXIuc3BsaWNlKDAsIHRoaXMucHJldkJ1ZmZlckxlbik7XG5cbiAgLy8gc2V0dGluZyBwcmV2QnVmZmVyTGVuID0gMCBpcyB2ZXJ5IGltcG9ydGFudFxuICAvLyBmb3IgZXhhbXBsZSwgd2hlbiB1cGdyYWRpbmcsIHVwZ3JhZGUgcGFja2V0IGlzIHNlbnQgb3ZlcixcbiAgLy8gYW5kIGEgbm9uemVybyBwcmV2QnVmZmVyTGVuIGNvdWxkIGNhdXNlIHByb2JsZW1zIG9uIGBkcmFpbmBcbiAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICBpZiAoMCA9PT0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICB0aGlzLmVtaXQoJ2RyYWluJyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5mbHVzaCgpO1xuICB9XG59O1xuXG4vKipcbiAqIEZsdXNoIHdyaXRlIGJ1ZmZlcnMuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCdjbG9zZWQnICE9PSB0aGlzLnJlYWR5U3RhdGUgJiYgdGhpcy50cmFuc3BvcnQud3JpdGFibGUgJiZcbiAgICAhdGhpcy51cGdyYWRpbmcgJiYgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICBkZWJ1ZygnZmx1c2hpbmcgJWQgcGFja2V0cyBpbiBzb2NrZXQnLCB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCk7XG4gICAgdGhpcy50cmFuc3BvcnQuc2VuZCh0aGlzLndyaXRlQnVmZmVyKTtcbiAgICAvLyBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgbGVuZ3RoIG9mIHdyaXRlQnVmZmVyXG4gICAgLy8gc3BsaWNlIHdyaXRlQnVmZmVyIGFuZCBjYWxsYmFja0J1ZmZlciBvbiBgZHJhaW5gXG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGg7XG4gICAgdGhpcy5lbWl0KCdmbHVzaCcpO1xuICB9XG59O1xuXG4vKipcbiAqIFNlbmRzIGEgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gKiBAcmV0dXJuIHtTb2NrZXR9IGZvciBjaGFpbmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS53cml0ZSA9XG5Tb2NrZXQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAobXNnLCBvcHRpb25zLCBmbikge1xuICB0aGlzLnNlbmRQYWNrZXQoJ21lc3NhZ2UnLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmRzIGEgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYWNrZXQgdHlwZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuc2VuZFBhY2tldCA9IGZ1bmN0aW9uICh0eXBlLCBkYXRhLCBvcHRpb25zLCBmbikge1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGRhdGEpIHtcbiAgICBmbiA9IGRhdGE7XG4gICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2Ygb3B0aW9ucykge1xuICAgIGZuID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGlmICgnY2xvc2luZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnY2xvc2VkJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuY29tcHJlc3MgPSBmYWxzZSAhPT0gb3B0aW9ucy5jb21wcmVzcztcblxuICB2YXIgcGFja2V0ID0ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgZGF0YTogZGF0YSxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH07XG4gIHRoaXMuZW1pdCgncGFja2V0Q3JlYXRlJywgcGFja2V0KTtcbiAgdGhpcy53cml0ZUJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gIGlmIChmbikgdGhpcy5vbmNlKCdmbHVzaCcsIGZuKTtcbiAgdGhpcy5mbHVzaCgpO1xufTtcblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NpbmcnO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLm9uY2UoJ2RyYWluJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2UgKCkge1xuICAgIHNlbGYub25DbG9zZSgnZm9yY2VkIGNsb3NlJyk7XG4gICAgZGVidWcoJ3NvY2tldCBjbG9zaW5nIC0gdGVsbGluZyB0cmFuc3BvcnQgdG8gY2xvc2UnKTtcbiAgICBzZWxmLnRyYW5zcG9ydC5jbG9zZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cEFuZENsb3NlICgpIHtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRlJywgY2xlYW51cEFuZENsb3NlKTtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRlRXJyb3InLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIGNsb3NlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB3YWl0Rm9yVXBncmFkZSAoKSB7XG4gICAgLy8gd2FpdCBmb3IgdXBncmFkZSB0byBmaW5pc2ggc2luY2Ugd2UgY2FuJ3Qgc2VuZCBwYWNrZXRzIHdoaWxlIHBhdXNpbmcgYSB0cmFuc3BvcnRcbiAgICBzZWxmLm9uY2UoJ3VwZ3JhZGUnLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIHNlbGYub25jZSgndXBncmFkZUVycm9yJywgY2xlYW51cEFuZENsb3NlKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgZXJyb3JcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gIGRlYnVnKCdzb2NrZXQgZXJyb3IgJWonLCBlcnIpO1xuICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB0aGlzLm9uQ2xvc2UoJ3RyYW5zcG9ydCBlcnJvcicsIGVycik7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBjbG9zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAocmVhc29uLCBkZXNjKSB7XG4gIGlmICgnb3BlbmluZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnY2xvc2luZycgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIGRlYnVnKCdzb2NrZXQgY2xvc2Ugd2l0aCByZWFzb246IFwiJXNcIicsIHJlYXNvbik7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gY2xlYXIgdGltZXJzXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ0ludGVydmFsVGltZXIpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuXG4gICAgLy8gc3RvcCBldmVudCBmcm9tIGZpcmluZyBhZ2FpbiBmb3IgdHJhbnNwb3J0XG4gICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCdjbG9zZScpO1xuXG4gICAgLy8gZW5zdXJlIHRyYW5zcG9ydCB3b24ndCBzdGF5IG9wZW5cbiAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuXG4gICAgLy8gaWdub3JlIGZ1cnRoZXIgdHJhbnNwb3J0IGNvbW11bmljYXRpb25cbiAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblxuICAgIC8vIHNldCByZWFkeSBzdGF0ZVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuXG4gICAgLy8gY2xlYXIgc2Vzc2lvbiBpZFxuICAgIHRoaXMuaWQgPSBudWxsO1xuXG4gICAgLy8gZW1pdCBjbG9zZSBldmVudFxuICAgIHRoaXMuZW1pdCgnY2xvc2UnLCByZWFzb24sIGRlc2MpO1xuXG4gICAgLy8gY2xlYW4gYnVmZmVycyBhZnRlciwgc28gdXNlcnMgY2FuIHN0aWxsXG4gICAgLy8gZ3JhYiB0aGUgYnVmZmVycyBvbiBgY2xvc2VgIGV2ZW50XG4gICAgc2VsZi53cml0ZUJ1ZmZlciA9IFtdO1xuICAgIHNlbGYucHJldkJ1ZmZlckxlbiA9IDA7XG4gIH1cbn07XG5cbi8qKlxuICogRmlsdGVycyB1cGdyYWRlcywgcmV0dXJuaW5nIG9ubHkgdGhvc2UgbWF0Y2hpbmcgY2xpZW50IHRyYW5zcG9ydHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2VydmVyIHVwZ3JhZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5maWx0ZXJVcGdyYWRlcyA9IGZ1bmN0aW9uICh1cGdyYWRlcykge1xuICB2YXIgZmlsdGVyZWRVcGdyYWRlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgaiA9IHVwZ3JhZGVzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgIGlmICh+aW5kZXgodGhpcy50cmFuc3BvcnRzLCB1cGdyYWRlc1tpXSkpIGZpbHRlcmVkVXBncmFkZXMucHVzaCh1cGdyYWRlc1tpXSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkVXBncmFkZXM7XG59O1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBwYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BvcnQ7XG5cbi8qKlxuICogVHJhbnNwb3J0IGFic3RyYWN0IGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gVHJhbnNwb3J0IChvcHRzKSB7XG4gIHRoaXMucGF0aCA9IG9wdHMucGF0aDtcbiAgdGhpcy5ob3N0bmFtZSA9IG9wdHMuaG9zdG5hbWU7XG4gIHRoaXMucG9ydCA9IG9wdHMucG9ydDtcbiAgdGhpcy5zZWN1cmUgPSBvcHRzLnNlY3VyZTtcbiAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XG4gIHRoaXMudGltZXN0YW1wUGFyYW0gPSBvcHRzLnRpbWVzdGFtcFBhcmFtO1xuICB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzID0gb3B0cy50aW1lc3RhbXBSZXF1ZXN0cztcbiAgdGhpcy5yZWFkeVN0YXRlID0gJyc7XG4gIHRoaXMuYWdlbnQgPSBvcHRzLmFnZW50IHx8IGZhbHNlO1xuICB0aGlzLnNvY2tldCA9IG9wdHMuc29ja2V0O1xuICB0aGlzLmVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gb3B0cy53aXRoQ3JlZGVudGlhbHM7XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMucGZ4ID0gb3B0cy5wZng7XG4gIHRoaXMua2V5ID0gb3B0cy5rZXk7XG4gIHRoaXMucGFzc3BocmFzZSA9IG9wdHMucGFzc3BocmFzZTtcbiAgdGhpcy5jZXJ0ID0gb3B0cy5jZXJ0O1xuICB0aGlzLmNhID0gb3B0cy5jYTtcbiAgdGhpcy5jaXBoZXJzID0gb3B0cy5jaXBoZXJzO1xuICB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCA9IG9wdHMucmVqZWN0VW5hdXRob3JpemVkO1xuICB0aGlzLmZvcmNlTm9kZSA9IG9wdHMuZm9yY2VOb2RlO1xuXG4gIC8vIHJlc3VsdHMgb2YgUmVhY3ROYXRpdmUgZW52aXJvbm1lbnQgZGV0ZWN0aW9uXG4gIHRoaXMuaXNSZWFjdE5hdGl2ZSA9IG9wdHMuaXNSZWFjdE5hdGl2ZTtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuICB0aGlzLmxvY2FsQWRkcmVzcyA9IG9wdHMubG9jYWxBZGRyZXNzO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihUcmFuc3BvcnQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBFbWl0cyBhbiBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtUcmFuc3BvcnR9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAobXNnLCBkZXNjKSB7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnR5cGUgPSAnVHJhbnNwb3J0RXJyb3InO1xuICBlcnIuZGVzY3JpcHRpb24gPSBkZXNjO1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE9wZW5zIHRoZSB0cmFuc3BvcnQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICgnY2xvc2VkJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICcnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSAnb3BlbmluZyc7XG4gICAgdGhpcy5kb09wZW4oKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDbG9zZXMgdGhlIHRyYW5zcG9ydC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kcyBtdWx0aXBsZSBwYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChwYWNrZXRzKSB7XG4gIGlmICgnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHRoaXMud3JpdGUocGFja2V0cyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUcmFuc3BvcnQgbm90IG9wZW4nKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBvcGVuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuJztcbiAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gIHRoaXMuZW1pdCgnb3BlbicpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2l0aCBkYXRhLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBwYWNrZXQgPSBwYXJzZXIuZGVjb2RlUGFja2V0KGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpO1xuICB0aGlzLm9uUGFja2V0KHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIGEgZGVjb2RlZCBwYWNrZXQuXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vblBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdGhpcy5lbWl0KCdwYWNrZXQnLCBwYWNrZXQpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBjbG9zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG59O1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgneG1saHR0cHJlcXVlc3Qtc3NsJyk7XG52YXIgWEhSID0gcmVxdWlyZSgnLi9wb2xsaW5nLXhocicpO1xudmFyIEpTT05QID0gcmVxdWlyZSgnLi9wb2xsaW5nLWpzb25wJyk7XG52YXIgd2Vic29ja2V0ID0gcmVxdWlyZSgnLi93ZWJzb2NrZXQnKTtcblxuLyoqXG4gKiBFeHBvcnQgdHJhbnNwb3J0cy5cbiAqL1xuXG5leHBvcnRzLnBvbGxpbmcgPSBwb2xsaW5nO1xuZXhwb3J0cy53ZWJzb2NrZXQgPSB3ZWJzb2NrZXQ7XG5cbi8qKlxuICogUG9sbGluZyB0cmFuc3BvcnQgcG9seW1vcnBoaWMgY29uc3RydWN0b3IuXG4gKiBEZWNpZGVzIG9uIHhociB2cyBqc29ucCBiYXNlZCBvbiBmZWF0dXJlIGRldGVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb2xsaW5nIChvcHRzKSB7XG4gIHZhciB4aHI7XG4gIHZhciB4ZCA9IGZhbHNlO1xuICB2YXIgeHMgPSBmYWxzZTtcbiAgdmFyIGpzb25wID0gZmFsc2UgIT09IG9wdHMuanNvbnA7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgaXNTU0wgPSAnaHR0cHM6JyA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgdmFyIHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgIGlmICghcG9ydCkge1xuICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgfVxuXG4gICAgeGQgPSBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSB8fCBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgeHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gIH1cblxuICBvcHRzLnhkb21haW4gPSB4ZDtcbiAgb3B0cy54c2NoZW1lID0geHM7XG4gIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKTtcblxuICBpZiAoJ29wZW4nIGluIHhociAmJiAhb3B0cy5mb3JjZUpTT05QKSB7XG4gICAgcmV0dXJuIG5ldyBYSFIob3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFqc29ucCkgdGhyb3cgbmV3IEVycm9yKCdKU09OUCBkaXNhYmxlZCcpO1xuICAgIHJldHVybiBuZXcgSlNPTlAob3B0cyk7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kdWxlIHJlcXVpcmVtZW50cy5cbiAqL1xuXG52YXIgUG9sbGluZyA9IHJlcXVpcmUoJy4vcG9sbGluZycpO1xudmFyIGluaGVyaXQgPSByZXF1aXJlKCdjb21wb25lbnQtaW5oZXJpdCcpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9nbG9iYWxUaGlzJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBKU09OUFBvbGxpbmc7XG5cbi8qKlxuICogQ2FjaGVkIHJlZ3VsYXIgZXhwcmVzc2lvbnMuXG4gKi9cblxudmFyIHJOZXdsaW5lID0gL1xcbi9nO1xudmFyIHJFc2NhcGVkTmV3bGluZSA9IC9cXFxcbi9nO1xuXG4vKipcbiAqIEdsb2JhbCBKU09OUCBjYWxsYmFja3MuXG4gKi9cblxudmFyIGNhbGxiYWNrcztcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIGVtcHR5ICgpIHsgfVxuXG4vKipcbiAqIEpTT05QIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEpTT05QUG9sbGluZyAob3B0cykge1xuICBQb2xsaW5nLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG5cbiAgLy8gZGVmaW5lIGdsb2JhbCBjYWxsYmFja3MgYXJyYXkgaWYgbm90IHByZXNlbnRcbiAgLy8gd2UgZG8gdGhpcyBoZXJlIChsYXppbHkpIHRvIGF2b2lkIHVubmVlZGVkIGdsb2JhbCBwb2xsdXRpb25cbiAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAvLyB3ZSBuZWVkIHRvIGNvbnNpZGVyIG11bHRpcGxlIGVuZ2luZXMgaW4gdGhlIHNhbWUgcGFnZVxuICAgIGNhbGxiYWNrcyA9IGdsb2JhbFRoaXMuX19fZWlvID0gKGdsb2JhbFRoaXMuX19fZWlvIHx8IFtdKTtcbiAgfVxuXG4gIC8vIGNhbGxiYWNrIGlkZW50aWZpZXJcbiAgdGhpcy5pbmRleCA9IGNhbGxiYWNrcy5sZW5ndGg7XG5cbiAgLy8gYWRkIGNhbGxiYWNrIHRvIGpzb25wIGdsb2JhbFxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uIChtc2cpIHtcbiAgICBzZWxmLm9uRGF0YShtc2cpO1xuICB9KTtcblxuICAvLyBhcHBlbmQgdG8gcXVlcnkgc3RyaW5nXG4gIHRoaXMucXVlcnkuaiA9IHRoaXMuaW5kZXg7XG5cbiAgLy8gcHJldmVudCBzcHVyaW91cyBlcnJvcnMgZnJvbSBiZWluZyBlbWl0dGVkIHdoZW4gdGhlIHdpbmRvdyBpcyB1bmxvYWRlZFxuICBpZiAodHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBhZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5zY3JpcHQpIHNlbGYuc2NyaXB0Lm9uZXJyb3IgPSBlbXB0eTtcbiAgICB9LCBmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbmhlcml0cyBmcm9tIFBvbGxpbmcuXG4gKi9cblxuaW5oZXJpdChKU09OUFBvbGxpbmcsIFBvbGxpbmcpO1xuXG4vKlxuICogSlNPTlAgb25seSBzdXBwb3J0cyBiaW5hcnkgYXMgYmFzZTY0IGVuY29kZWQgc3RyaW5nc1xuICovXG5cbkpTT05QUG9sbGluZy5wcm90b3R5cGUuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcblxuLyoqXG4gKiBDbG9zZXMgdGhlIHNvY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLmRvQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnNjcmlwdCkge1xuICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLmZvcm0pIHtcbiAgICB0aGlzLmZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZvcm0pO1xuICAgIHRoaXMuZm9ybSA9IG51bGw7XG4gICAgdGhpcy5pZnJhbWUgPSBudWxsO1xuICB9XG5cbiAgUG9sbGluZy5wcm90b3R5cGUuZG9DbG9zZS5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkpTT05QUG9sbGluZy5wcm90b3R5cGUuZG9Qb2xsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gIH1cblxuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICBzY3JpcHQuc3JjID0gdGhpcy51cmkoKTtcbiAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIHNlbGYub25FcnJvcignanNvbnAgcG9sbCBlcnJvcicsIGUpO1xuICB9O1xuXG4gIHZhciBpbnNlcnRBdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgaWYgKGluc2VydEF0KSB7XG4gICAgaW5zZXJ0QXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCBpbnNlcnRBdCk7XG4gIH0gZWxzZSB7XG4gICAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuICB0aGlzLnNjcmlwdCA9IHNjcmlwdDtcblxuICB2YXIgaXNVQWdlY2tvID0gJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBuYXZpZ2F0b3IgJiYgL2dlY2tvL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICBpZiAoaXNVQWdlY2tvKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgfSwgMTAwKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXcml0ZXMgd2l0aCBhIGhpZGRlbiBpZnJhbWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLmRvV3JpdGUgPSBmdW5jdGlvbiAoZGF0YSwgZm4pIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICghdGhpcy5mb3JtKSB7XG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdmFyIGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHZhciBpZCA9IHRoaXMuaWZyYW1lSWQgPSAnZWlvX2lmcmFtZV8nICsgdGhpcy5pbmRleDtcbiAgICB2YXIgaWZyYW1lO1xuXG4gICAgZm9ybS5jbGFzc05hbWUgPSAnc29ja2V0aW8nO1xuICAgIGZvcm0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGZvcm0uc3R5bGUudG9wID0gJy0xMDAwcHgnO1xuICAgIGZvcm0uc3R5bGUubGVmdCA9ICctMTAwMHB4JztcbiAgICBmb3JtLnRhcmdldCA9IGlkO1xuICAgIGZvcm0ubWV0aG9kID0gJ1BPU1QnO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY2NlcHQtY2hhcnNldCcsICd1dGYtOCcpO1xuICAgIGFyZWEubmFtZSA9ICdkJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFyZWEpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIHRoaXMuYXJlYSA9IGFyZWE7XG4gIH1cblxuICB0aGlzLmZvcm0uYWN0aW9uID0gdGhpcy51cmkoKTtcblxuICBmdW5jdGlvbiBjb21wbGV0ZSAoKSB7XG4gICAgaW5pdElmcmFtZSgpO1xuICAgIGZuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0SWZyYW1lICgpIHtcbiAgICBpZiAoc2VsZi5pZnJhbWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNlbGYuZm9ybS5yZW1vdmVDaGlsZChzZWxmLmlmcmFtZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNlbGYub25FcnJvcignanNvbnAgcG9sbGluZyBpZnJhbWUgcmVtb3ZhbCBlcnJvcicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyBpZTYgZHluYW1pYyBpZnJhbWVzIHdpdGggdGFyZ2V0PVwiXCIgc3VwcG9ydCAodGhhbmtzIENocmlzIExhbWJhY2hlcilcbiAgICAgIHZhciBodG1sID0gJzxpZnJhbWUgc3JjPVwiamF2YXNjcmlwdDowXCIgbmFtZT1cIicgKyBzZWxmLmlmcmFtZUlkICsgJ1wiPic7XG4gICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGh0bWwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgaWZyYW1lLm5hbWUgPSBzZWxmLmlmcmFtZUlkO1xuICAgICAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0OjAnO1xuICAgIH1cblxuICAgIGlmcmFtZS5pZCA9IHNlbGYuaWZyYW1lSWQ7XG5cbiAgICBzZWxmLmZvcm0uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICBzZWxmLmlmcmFtZSA9IGlmcmFtZTtcbiAgfVxuXG4gIGluaXRJZnJhbWUoKTtcblxuICAvLyBlc2NhcGUgXFxuIHRvIHByZXZlbnQgaXQgZnJvbSBiZWluZyBjb252ZXJ0ZWQgaW50byBcXHJcXG4gYnkgc29tZSBVQXNcbiAgLy8gZG91YmxlIGVzY2FwaW5nIGlzIHJlcXVpcmVkIGZvciBlc2NhcGVkIG5ldyBsaW5lcyBiZWNhdXNlIHVuZXNjYXBpbmcgb2YgbmV3IGxpbmVzIGNhbiBiZSBkb25lIHNhZmVseSBvbiBzZXJ2ZXItc2lkZVxuICBkYXRhID0gZGF0YS5yZXBsYWNlKHJFc2NhcGVkTmV3bGluZSwgJ1xcXFxcXG4nKTtcbiAgdGhpcy5hcmVhLnZhbHVlID0gZGF0YS5yZXBsYWNlKHJOZXdsaW5lLCAnXFxcXG4nKTtcblxuICB0cnkge1xuICAgIHRoaXMuZm9ybS5zdWJtaXQoKTtcbiAgfSBjYXRjaCAoZSkge31cblxuICBpZiAodGhpcy5pZnJhbWUuYXR0YWNoRXZlbnQpIHtcbiAgICB0aGlzLmlmcmFtZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5pZnJhbWUucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pZnJhbWUub25sb2FkID0gY29tcGxldGU7XG4gIH1cbn07XG4iLCIvKiBnbG9iYWwgYXR0YWNoRXZlbnQgKi9cblxuLyoqXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICovXG5cbnZhciBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoJ3htbGh0dHByZXF1ZXN0LXNzbCcpO1xudmFyIFBvbGxpbmcgPSByZXF1aXJlKCcuL3BvbGxpbmcnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnY29tcG9uZW50LWluaGVyaXQnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6cG9sbGluZy14aHInKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vZ2xvYmFsVGhpcycpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gWEhSO1xubW9kdWxlLmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogRW1wdHkgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBlbXB0eSAoKSB7fVxuXG4vKipcbiAqIFhIUiBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFhIUiAob3B0cykge1xuICBQb2xsaW5nLmNhbGwodGhpcywgb3B0cyk7XG4gIHRoaXMucmVxdWVzdFRpbWVvdXQgPSBvcHRzLnJlcXVlc3RUaW1lb3V0O1xuICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGlzU1NMID0gJ2h0dHBzOicgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgIHZhciBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgIC8vIHNvbWUgdXNlciBhZ2VudHMgaGF2ZSBlbXB0eSBgbG9jYXRpb24ucG9ydGBcbiAgICBpZiAoIXBvcnQpIHtcbiAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgIH1cblxuICAgIHRoaXMueGQgPSAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSkgfHxcbiAgICAgIHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICB0aGlzLnhzID0gb3B0cy5zZWN1cmUgIT09IGlzU1NMO1xuICB9XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBQb2xsaW5nLlxuICovXG5cbmluaGVyaXQoWEhSLCBQb2xsaW5nKTtcblxuLyoqXG4gKiBYSFIgc3VwcG9ydHMgYmluYXJ5XG4gKi9cblxuWEhSLnByb3RvdHlwZS5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuWEhSLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIG9wdHMudXJpID0gdGhpcy51cmkoKTtcbiAgb3B0cy54ZCA9IHRoaXMueGQ7XG4gIG9wdHMueHMgPSB0aGlzLnhzO1xuICBvcHRzLmFnZW50ID0gdGhpcy5hZ2VudCB8fCBmYWxzZTtcbiAgb3B0cy5zdXBwb3J0c0JpbmFyeSA9IHRoaXMuc3VwcG9ydHNCaW5hcnk7XG4gIG9wdHMuZW5hYmxlc1hEUiA9IHRoaXMuZW5hYmxlc1hEUjtcbiAgb3B0cy53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLndpdGhDcmVkZW50aWFscztcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5wZnggPSB0aGlzLnBmeDtcbiAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgb3B0cy5wYXNzcGhyYXNlID0gdGhpcy5wYXNzcGhyYXNlO1xuICBvcHRzLmNlcnQgPSB0aGlzLmNlcnQ7XG4gIG9wdHMuY2EgPSB0aGlzLmNhO1xuICBvcHRzLmNpcGhlcnMgPSB0aGlzLmNpcGhlcnM7XG4gIG9wdHMucmVqZWN0VW5hdXRob3JpemVkID0gdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQ7XG4gIG9wdHMucmVxdWVzdFRpbWVvdXQgPSB0aGlzLnJlcXVlc3RUaW1lb3V0O1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIG9wdHMuZXh0cmFIZWFkZXJzID0gdGhpcy5leHRyYUhlYWRlcnM7XG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KG9wdHMpO1xufTtcblxuLyoqXG4gKiBTZW5kcyBkYXRhLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblhIUi5wcm90b3R5cGUuZG9Xcml0ZSA9IGZ1bmN0aW9uIChkYXRhLCBmbikge1xuICB2YXIgaXNCaW5hcnkgPSB0eXBlb2YgZGF0YSAhPT0gJ3N0cmluZycgJiYgZGF0YSAhPT0gdW5kZWZpbmVkO1xuICB2YXIgcmVxID0gdGhpcy5yZXF1ZXN0KHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEsIGlzQmluYXJ5OiBpc0JpbmFyeSB9KTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXEub24oJ3N1Y2Nlc3MnLCBmbik7XG4gIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgc2VsZi5vbkVycm9yKCd4aHIgcG9zdCBlcnJvcicsIGVycik7XG4gIH0pO1xuICB0aGlzLnNlbmRYaHIgPSByZXE7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuWEhSLnByb3RvdHlwZS5kb1BvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCd4aHIgcG9sbCcpO1xuICB2YXIgcmVxID0gdGhpcy5yZXF1ZXN0KCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmVxLm9uKCdkYXRhJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBzZWxmLm9uRGF0YShkYXRhKTtcbiAgfSk7XG4gIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgc2VsZi5vbkVycm9yKCd4aHIgcG9sbCBlcnJvcicsIGVycik7XG4gIH0pO1xuICB0aGlzLnBvbGxYaHIgPSByZXE7XG59O1xuXG4vKipcbiAqIFJlcXVlc3QgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0IChvcHRzKSB7XG4gIHRoaXMubWV0aG9kID0gb3B0cy5tZXRob2QgfHwgJ0dFVCc7XG4gIHRoaXMudXJpID0gb3B0cy51cmk7XG4gIHRoaXMueGQgPSAhIW9wdHMueGQ7XG4gIHRoaXMueHMgPSAhIW9wdHMueHM7XG4gIHRoaXMuYXN5bmMgPSBmYWxzZSAhPT0gb3B0cy5hc3luYztcbiAgdGhpcy5kYXRhID0gdW5kZWZpbmVkICE9PSBvcHRzLmRhdGEgPyBvcHRzLmRhdGEgOiBudWxsO1xuICB0aGlzLmFnZW50ID0gb3B0cy5hZ2VudDtcbiAgdGhpcy5pc0JpbmFyeSA9IG9wdHMuaXNCaW5hcnk7XG4gIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBvcHRzLnN1cHBvcnRzQmluYXJ5O1xuICB0aGlzLmVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gb3B0cy53aXRoQ3JlZGVudGlhbHM7XG4gIHRoaXMucmVxdWVzdFRpbWVvdXQgPSBvcHRzLnJlcXVlc3RUaW1lb3V0O1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLnBmeCA9IG9wdHMucGZ4O1xuICB0aGlzLmtleSA9IG9wdHMua2V5O1xuICB0aGlzLnBhc3NwaHJhc2UgPSBvcHRzLnBhc3NwaHJhc2U7XG4gIHRoaXMuY2VydCA9IG9wdHMuY2VydDtcbiAgdGhpcy5jYSA9IG9wdHMuY2E7XG4gIHRoaXMuY2lwaGVycyA9IG9wdHMuY2lwaGVycztcbiAgdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQgPSBvcHRzLnJlamVjdFVuYXV0aG9yaXplZDtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuXG4gIHRoaXMuY3JlYXRlKCk7XG59XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBYSFIgb2JqZWN0IGFuZCBzZW5kcyB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvcHRzID0geyBhZ2VudDogdGhpcy5hZ2VudCwgeGRvbWFpbjogdGhpcy54ZCwgeHNjaGVtZTogdGhpcy54cywgZW5hYmxlc1hEUjogdGhpcy5lbmFibGVzWERSIH07XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIG9wdHMucGZ4ID0gdGhpcy5wZng7XG4gIG9wdHMua2V5ID0gdGhpcy5rZXk7XG4gIG9wdHMucGFzc3BocmFzZSA9IHRoaXMucGFzc3BocmFzZTtcbiAgb3B0cy5jZXJ0ID0gdGhpcy5jZXJ0O1xuICBvcHRzLmNhID0gdGhpcy5jYTtcbiAgb3B0cy5jaXBoZXJzID0gdGhpcy5jaXBoZXJzO1xuICBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9IHRoaXMucmVqZWN0VW5hdXRob3JpemVkO1xuXG4gIHZhciB4aHIgPSB0aGlzLnhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHRyeSB7XG4gICAgZGVidWcoJ3hociBvcGVuICVzOiAlcycsIHRoaXMubWV0aG9kLCB0aGlzLnVyaSk7XG4gICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJpLCB0aGlzLmFzeW5jKTtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sgJiYgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayh0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgIGlmICh0aGlzLmV4dHJhSGVhZGVycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5leHRyYUhlYWRlcnNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICBpZiAoJ1BPU1QnID09PSB0aGlzLm1ldGhvZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMuaXNCaW5hcnkpIHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnKi8qJyk7XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIC8vIGllNiBjaGVja1xuICAgIGlmICgnd2l0aENyZWRlbnRpYWxzJyBpbiB4aHIpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZXF1ZXN0VGltZW91dCkge1xuICAgICAgeGhyLnRpbWVvdXQgPSB0aGlzLnJlcXVlc3RUaW1lb3V0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLm9uTG9hZCgpO1xuICAgICAgfTtcbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLm9uRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnN1cHBvcnRzQmluYXJ5ICYmIGNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyB8fCBjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTsgY2hhcnNldD1VVEYtOCcpIHtcbiAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgICBpZiAoNCAhPT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgaWYgKDIwMCA9PT0geGhyLnN0YXR1cyB8fCAxMjIzID09PSB4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGBlcnJvcmAgZXZlbnQgaGFuZGxlciB0aGF0J3MgdXNlci1zZXRcbiAgICAgICAgICAvLyBkb2VzIG5vdCB0aHJvdyBpbiB0aGUgc2FtZSB0aWNrIGFuZCBnZXRzIGNhdWdodCBoZXJlXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IodHlwZW9mIHhoci5zdGF0dXMgPT09ICdudW1iZXInID8geGhyLnN0YXR1cyA6IDApO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlYnVnKCd4aHIgZGF0YSAlcycsIHRoaXMuZGF0YSk7XG4gICAgeGhyLnNlbmQodGhpcy5kYXRhKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIE5lZWQgdG8gZGVmZXIgc2luY2UgLmNyZWF0ZSgpIGlzIGNhbGxlZCBkaXJlY3RseSBmaHJvbSB0aGUgY29uc3RydWN0b3JcbiAgICAvLyBhbmQgdGh1cyB0aGUgJ2Vycm9yJyBldmVudCBjYW4gb25seSBiZSBvbmx5IGJvdW5kICphZnRlciogdGhpcyBleGNlcHRpb25cbiAgICAvLyBvY2N1cnMuICBUaGVyZWZvcmUsIGFsc28sIHdlIGNhbm5vdCB0aHJvdyBoZXJlIGF0IGFsbC5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYub25FcnJvcihlKTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuaW5kZXggPSBSZXF1ZXN0LnJlcXVlc3RzQ291bnQrKztcbiAgICBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdID0gdGhpcztcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlc3BvbnNlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLm9uU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbWl0KCdzdWNjZXNzJyk7XG4gIHRoaXMuY2xlYW51cCgpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgaWYgd2UgaGF2ZSBkYXRhLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRoaXMuZW1pdCgnZGF0YScsIGRhdGEpO1xuICB0aGlzLm9uU3VjY2VzcygpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgdGhpcy5jbGVhbnVwKHRydWUpO1xufTtcblxuLyoqXG4gKiBDbGVhbnMgdXAgaG91c2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uIChmcm9tRXJyb3IpIHtcbiAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgdGhpcy54aHIgfHwgbnVsbCA9PT0gdGhpcy54aHIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8geG1saHR0cHJlcXVlc3RcbiAgaWYgKHRoaXMuaGFzWERSKCkpIHtcbiAgICB0aGlzLnhoci5vbmxvYWQgPSB0aGlzLnhoci5vbmVycm9yID0gZW1wdHk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy54aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZW1wdHk7XG4gIH1cblxuICBpZiAoZnJvbUVycm9yKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMueGhyLmFib3J0KCk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGVsZXRlIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF07XG4gIH1cblxuICB0aGlzLnhociA9IG51bGw7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGxvYWQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZGF0YTtcbiAgdHJ5IHtcbiAgICB2YXIgY29udGVudFR5cGU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnRlbnRUeXBlID0gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgaWYgKGNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyB8fCBjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTsgY2hhcnNldD1VVEYtOCcpIHtcbiAgICAgIGRhdGEgPSB0aGlzLnhoci5yZXNwb25zZSB8fCB0aGlzLnhoci5yZXNwb25zZVRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB0aGlzLnhoci5yZXNwb25zZVRleHQ7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy5vbkVycm9yKGUpO1xuICB9XG4gIGlmIChudWxsICE9IGRhdGEpIHtcbiAgICB0aGlzLm9uRGF0YShkYXRhKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayBpZiBpdCBoYXMgWERvbWFpblJlcXVlc3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuaGFzWERSID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy54cyAmJiB0aGlzLmVuYWJsZXNYRFI7XG59O1xuXG4vKipcbiAqIEFib3J0cyB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNsZWFudXAoKTtcbn07XG5cbi8qKlxuICogQWJvcnRzIHBlbmRpbmcgcmVxdWVzdHMgd2hlbiB1bmxvYWRpbmcgdGhlIHdpbmRvdy4gVGhpcyBpcyBuZWVkZWQgdG8gcHJldmVudFxuICogbWVtb3J5IGxlYWtzIChlLmcuIHdoZW4gdXNpbmcgSUUpIGFuZCB0byBlbnN1cmUgdGhhdCBubyBzcHVyaW91cyBlcnJvciBpc1xuICogZW1pdHRlZC5cbiAqL1xuXG5SZXF1ZXN0LnJlcXVlc3RzQ291bnQgPSAwO1xuUmVxdWVzdC5yZXF1ZXN0cyA9IHt9O1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBpZiAodHlwZW9mIGF0dGFjaEV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgYXR0YWNoRXZlbnQoJ29udW5sb2FkJywgdW5sb2FkSGFuZGxlcik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgdGVybWluYXRpb25FdmVudCA9ICdvbnBhZ2VoaWRlJyBpbiBnbG9iYWxUaGlzID8gJ3BhZ2VoaWRlJyA6ICd1bmxvYWQnO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIodGVybWluYXRpb25FdmVudCwgdW5sb2FkSGFuZGxlciwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVubG9hZEhhbmRsZXIgKCkge1xuICBmb3IgKHZhciBpIGluIFJlcXVlc3QucmVxdWVzdHMpIHtcbiAgICBpZiAoUmVxdWVzdC5yZXF1ZXN0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgUmVxdWVzdC5yZXF1ZXN0c1tpXS5hYm9ydCgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBUcmFuc3BvcnQgPSByZXF1aXJlKCcuLi90cmFuc3BvcnQnKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnY29tcG9uZW50LWluaGVyaXQnKTtcbnZhciB5ZWFzdCA9IHJlcXVpcmUoJ3llYXN0Jyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvbGxpbmc7XG5cbi8qKlxuICogSXMgWEhSMiBzdXBwb3J0ZWQ/XG4gKi9cblxudmFyIGhhc1hIUjIgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCh7IHhkb21haW46IGZhbHNlIH0pO1xuICByZXR1cm4gbnVsbCAhPSB4aHIucmVzcG9uc2VUeXBlO1xufSkoKTtcblxuLyoqXG4gKiBQb2xsaW5nIGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUG9sbGluZyAob3B0cykge1xuICB2YXIgZm9yY2VCYXNlNjQgPSAob3B0cyAmJiBvcHRzLmZvcmNlQmFzZTY0KTtcbiAgaWYgKCFoYXNYSFIyIHx8IGZvcmNlQmFzZTY0KSB7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICB9XG4gIFRyYW5zcG9ydC5jYWxsKHRoaXMsIG9wdHMpO1xufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gVHJhbnNwb3J0LlxuICovXG5cbmluaGVyaXQoUG9sbGluZywgVHJhbnNwb3J0KTtcblxuLyoqXG4gKiBUcmFuc3BvcnQgbmFtZS5cbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5uYW1lID0gJ3BvbGxpbmcnO1xuXG4vKipcbiAqIE9wZW5zIHRoZSBzb2NrZXQgKHRyaWdnZXJzIHBvbGxpbmcpLiBXZSB3cml0ZSBhIFBJTkcgbWVzc2FnZSB0byBkZXRlcm1pbmVcbiAqIHdoZW4gdGhlIHRyYW5zcG9ydCBpcyBvcGVuLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLmRvT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wb2xsKCk7XG59O1xuXG4vKipcbiAqIFBhdXNlcyBwb2xsaW5nLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHVwb24gYnVmZmVycyBhcmUgZmx1c2hlZCBhbmQgdHJhbnNwb3J0IGlzIHBhdXNlZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAob25QYXVzZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdGhpcy5yZWFkeVN0YXRlID0gJ3BhdXNpbmcnO1xuXG4gIGZ1bmN0aW9uIHBhdXNlICgpIHtcbiAgICBkZWJ1ZygncGF1c2VkJyk7XG4gICAgc2VsZi5yZWFkeVN0YXRlID0gJ3BhdXNlZCc7XG4gICAgb25QYXVzZSgpO1xuICB9XG5cbiAgaWYgKHRoaXMucG9sbGluZyB8fCAhdGhpcy53cml0YWJsZSkge1xuICAgIHZhciB0b3RhbCA9IDA7XG5cbiAgICBpZiAodGhpcy5wb2xsaW5nKSB7XG4gICAgICBkZWJ1Zygnd2UgYXJlIGN1cnJlbnRseSBwb2xsaW5nIC0gd2FpdGluZyB0byBwYXVzZScpO1xuICAgICAgdG90YWwrKztcbiAgICAgIHRoaXMub25jZSgncG9sbENvbXBsZXRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWJ1ZygncHJlLXBhdXNlIHBvbGxpbmcgY29tcGxldGUnKTtcbiAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLndyaXRhYmxlKSB7XG4gICAgICBkZWJ1Zygnd2UgYXJlIGN1cnJlbnRseSB3cml0aW5nIC0gd2FpdGluZyB0byBwYXVzZScpO1xuICAgICAgdG90YWwrKztcbiAgICAgIHRoaXMub25jZSgnZHJhaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlYnVnKCdwcmUtcGF1c2Ugd3JpdGluZyBjb21wbGV0ZScpO1xuICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGF1c2UoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdGFydHMgcG9sbGluZyBjeWNsZS5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblBvbGxpbmcucHJvdG90eXBlLnBvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdwb2xsaW5nJyk7XG4gIHRoaXMucG9sbGluZyA9IHRydWU7XG4gIHRoaXMuZG9Qb2xsKCk7XG4gIHRoaXMuZW1pdCgncG9sbCcpO1xufTtcblxuLyoqXG4gKiBPdmVybG9hZHMgb25EYXRhIHRvIGRldGVjdCBwYXlsb2Fkcy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGRlYnVnKCdwb2xsaW5nIGdvdCBkYXRhICVzJywgZGF0YSk7XG4gIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIChwYWNrZXQsIGluZGV4LCB0b3RhbCkge1xuICAgIC8vIGlmIGl0cyB0aGUgZmlyc3QgbWVzc2FnZSB3ZSBjb25zaWRlciB0aGUgdHJhbnNwb3J0IG9wZW5cbiAgICBpZiAoJ29wZW5pbmcnID09PSBzZWxmLnJlYWR5U3RhdGUpIHtcbiAgICAgIHNlbGYub25PcGVuKCk7XG4gICAgfVxuXG4gICAgLy8gaWYgaXRzIGEgY2xvc2UgcGFja2V0LCB3ZSBjbG9zZSB0aGUgb25nb2luZyByZXF1ZXN0c1xuICAgIGlmICgnY2xvc2UnID09PSBwYWNrZXQudHlwZSkge1xuICAgICAgc2VsZi5vbkNsb3NlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gb3RoZXJ3aXNlIGJ5cGFzcyBvbkRhdGEgYW5kIGhhbmRsZSB0aGUgbWVzc2FnZVxuICAgIHNlbGYub25QYWNrZXQocGFja2V0KTtcbiAgfTtcblxuICAvLyBkZWNvZGUgcGF5bG9hZFxuICBwYXJzZXIuZGVjb2RlUGF5bG9hZChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlLCBjYWxsYmFjayk7XG5cbiAgLy8gaWYgYW4gZXZlbnQgZGlkIG5vdCB0cmlnZ2VyIGNsb3NpbmdcbiAgaWYgKCdjbG9zZWQnICE9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAvLyBpZiB3ZSBnb3QgZGF0YSB3ZSdyZSBub3QgcG9sbGluZ1xuICAgIHRoaXMucG9sbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdCgncG9sbENvbXBsZXRlJyk7XG5cbiAgICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucG9sbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZygnaWdub3JpbmcgcG9sbCAtIHRyYW5zcG9ydCBzdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBGb3IgcG9sbGluZywgc2VuZCBhIGNsb3NlIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gY2xvc2UgKCkge1xuICAgIGRlYnVnKCd3cml0aW5nIGNsb3NlIHBhY2tldCcpO1xuICAgIHNlbGYud3JpdGUoW3sgdHlwZTogJ2Nsb3NlJyB9XSk7XG4gIH1cblxuICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICBkZWJ1ZygndHJhbnNwb3J0IG9wZW4gLSBjbG9zaW5nJyk7XG4gICAgY2xvc2UoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpbiBjYXNlIHdlJ3JlIHRyeWluZyB0byBjbG9zZSB3aGlsZVxuICAgIC8vIGhhbmRzaGFraW5nIGlzIGluIHByb2dyZXNzIChHSC0xNjQpXG4gICAgZGVidWcoJ3RyYW5zcG9ydCBub3Qgb3BlbiAtIGRlZmVycmluZyBjbG9zZScpO1xuICAgIHRoaXMub25jZSgnb3BlbicsIGNsb3NlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXcml0ZXMgYSBwYWNrZXRzIHBheWxvYWQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZGF0YSBwYWNrZXRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkcmFpbiBjYWxsYmFja1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAocGFja2V0cykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcbiAgdmFyIGNhbGxiYWNrZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi53cml0YWJsZSA9IHRydWU7XG4gICAgc2VsZi5lbWl0KCdkcmFpbicpO1xuICB9O1xuXG4gIHBhcnNlci5lbmNvZGVQYXlsb2FkKHBhY2tldHMsIHRoaXMuc3VwcG9ydHNCaW5hcnksIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgc2VsZi5kb1dyaXRlKGRhdGEsIGNhbGxiYWNrZm4pO1xuICB9KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS51cmkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gIHZhciBzY2hlbWEgPSB0aGlzLnNlY3VyZSA/ICdodHRwcycgOiAnaHR0cCc7XG4gIHZhciBwb3J0ID0gJyc7XG5cbiAgLy8gY2FjaGUgYnVzdGluZyBpcyBmb3JjZWRcbiAgaWYgKGZhbHNlICE9PSB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgcXVlcnlbdGhpcy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICB9XG5cbiAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5ICYmICFxdWVyeS5zaWQpIHtcbiAgICBxdWVyeS5iNjQgPSAxO1xuICB9XG5cbiAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgaWYgKHRoaXMucG9ydCAmJiAoKCdodHRwcycgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICAoJ2h0dHAnID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMucG9ydCkgIT09IDgwKSkpIHtcbiAgICBwb3J0ID0gJzonICsgdGhpcy5wb3J0O1xuICB9XG5cbiAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9ICc/JyArIHF1ZXJ5O1xuICB9XG5cbiAgdmFyIGlwdjYgPSB0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHJldHVybiBzY2hlbWEgKyAnOi8vJyArIChpcHY2ID8gJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyA6IHRoaXMuaG9zdG5hbWUpICsgcG9ydCArIHRoaXMucGF0aCArIHF1ZXJ5O1xufTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgVHJhbnNwb3J0ID0gcmVxdWlyZSgnLi4vdHJhbnNwb3J0Jyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xudmFyIHBhcnNlcXMgPSByZXF1aXJlKCdwYXJzZXFzJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgeWVhc3QgPSByZXF1aXJlKCd5ZWFzdCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDp3ZWJzb2NrZXQnKTtcblxudmFyIEJyb3dzZXJXZWJTb2NrZXQsIE5vZGVXZWJTb2NrZXQ7XG5cbmlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICBCcm93c2VyV2ViU29ja2V0ID0gV2ViU29ja2V0O1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgQnJvd3NlcldlYlNvY2tldCA9IHNlbGYuV2ViU29ja2V0IHx8IHNlbGYuTW96V2ViU29ja2V0O1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgdHJ5IHtcbiAgICBOb2RlV2ViU29ja2V0ID0gcmVxdWlyZSgnd3MnKTtcbiAgfSBjYXRjaCAoZSkgeyB9XG59XG5cbi8qKlxuICogR2V0IGVpdGhlciB0aGUgYFdlYlNvY2tldGAgb3IgYE1veldlYlNvY2tldGAgZ2xvYmFsc1xuICogaW4gdGhlIGJyb3dzZXIgb3IgdHJ5IHRvIHJlc29sdmUgV2ViU29ja2V0LWNvbXBhdGlibGVcbiAqIGludGVyZmFjZSBleHBvc2VkIGJ5IGB3c2AgZm9yIE5vZGUtbGlrZSBlbnZpcm9ubWVudC5cbiAqL1xuXG52YXIgV2ViU29ja2V0SW1wbCA9IEJyb3dzZXJXZWJTb2NrZXQgfHwgTm9kZVdlYlNvY2tldDtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdTO1xuXG4vKipcbiAqIFdlYlNvY2tldCB0cmFuc3BvcnQgY29uc3RydWN0b3IuXG4gKlxuICogQGFwaSB7T2JqZWN0fSBjb25uZWN0aW9uIG9wdGlvbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gV1MgKG9wdHMpIHtcbiAgdmFyIGZvcmNlQmFzZTY0ID0gKG9wdHMgJiYgb3B0cy5mb3JjZUJhc2U2NCk7XG4gIGlmIChmb3JjZUJhc2U2NCkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuICB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlID0gb3B0cy5wZXJNZXNzYWdlRGVmbGF0ZTtcbiAgdGhpcy51c2luZ0Jyb3dzZXJXZWJTb2NrZXQgPSBCcm93c2VyV2ViU29ja2V0ICYmICFvcHRzLmZvcmNlTm9kZTtcbiAgdGhpcy5wcm90b2NvbHMgPSBvcHRzLnByb3RvY29scztcbiAgaWYgKCF0aGlzLnVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgIFdlYlNvY2tldEltcGwgPSBOb2RlV2ViU29ja2V0O1xuICB9XG4gIFRyYW5zcG9ydC5jYWxsKHRoaXMsIG9wdHMpO1xufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gVHJhbnNwb3J0LlxuICovXG5cbmluaGVyaXQoV1MsIFRyYW5zcG9ydCk7XG5cbi8qKlxuICogVHJhbnNwb3J0IG5hbWUuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5XUy5wcm90b3R5cGUubmFtZSA9ICd3ZWJzb2NrZXQnO1xuXG4vKlxuICogV2ViU29ja2V0cyBzdXBwb3J0IGJpbmFyeVxuICovXG5cbldTLnByb3RvdHlwZS5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG5cbi8qKlxuICogT3BlbnMgc29ja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5kb09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5jaGVjaygpKSB7XG4gICAgLy8gbGV0IHByb2JlIHRpbWVvdXRcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdXJpID0gdGhpcy51cmkoKTtcbiAgdmFyIHByb3RvY29scyA9IHRoaXMucHJvdG9jb2xzO1xuICB2YXIgb3B0cyA9IHtcbiAgICBhZ2VudDogdGhpcy5hZ2VudCxcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZTogdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZVxuICB9O1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICBvcHRzLnBmeCA9IHRoaXMucGZ4O1xuICBvcHRzLmtleSA9IHRoaXMua2V5O1xuICBvcHRzLnBhc3NwaHJhc2UgPSB0aGlzLnBhc3NwaHJhc2U7XG4gIG9wdHMuY2VydCA9IHRoaXMuY2VydDtcbiAgb3B0cy5jYSA9IHRoaXMuY2E7XG4gIG9wdHMuY2lwaGVycyA9IHRoaXMuY2lwaGVycztcbiAgb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPSB0aGlzLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgaWYgKHRoaXMuZXh0cmFIZWFkZXJzKSB7XG4gICAgb3B0cy5oZWFkZXJzID0gdGhpcy5leHRyYUhlYWRlcnM7XG4gIH1cbiAgaWYgKHRoaXMubG9jYWxBZGRyZXNzKSB7XG4gICAgb3B0cy5sb2NhbEFkZHJlc3MgPSB0aGlzLmxvY2FsQWRkcmVzcztcbiAgfVxuXG4gIHRyeSB7XG4gICAgdGhpcy53cyA9XG4gICAgICB0aGlzLnVzaW5nQnJvd3NlcldlYlNvY2tldCAmJiAhdGhpcy5pc1JlYWN0TmF0aXZlXG4gICAgICAgID8gcHJvdG9jb2xzXG4gICAgICAgICAgPyBuZXcgV2ViU29ja2V0SW1wbCh1cmksIHByb3RvY29scylcbiAgICAgICAgICA6IG5ldyBXZWJTb2NrZXRJbXBsKHVyaSlcbiAgICAgICAgOiBuZXcgV2ViU29ja2V0SW1wbCh1cmksIHByb3RvY29scywgb3B0cyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgfVxuXG4gIGlmICh0aGlzLndzLmJpbmFyeVR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLndzLnN1cHBvcnRzICYmIHRoaXMud3Muc3VwcG9ydHMuYmluYXJ5KSB7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG4gICAgdGhpcy53cy5iaW5hcnlUeXBlID0gJ25vZGVidWZmZXInO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gIH1cblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG59O1xuXG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzb2NrZXRcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB0aGlzLndzLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9uT3BlbigpO1xuICB9O1xuICB0aGlzLndzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbkNsb3NlKCk7XG4gIH07XG4gIHRoaXMud3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgc2VsZi5vbkRhdGEoZXYuZGF0YSk7XG4gIH07XG4gIHRoaXMud3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgc2VsZi5vbkVycm9yKCd3ZWJzb2NrZXQgZXJyb3InLCBlKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JpdGVzIGRhdGEgdG8gc29ja2V0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IG9mIHBhY2tldHMuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAocGFja2V0cykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAvLyBlbmNvZGVQYWNrZXQgZWZmaWNpZW50IGFzIGl0IHVzZXMgV1MgZnJhbWluZ1xuICAvLyBubyBuZWVkIGZvciBlbmNvZGVQYXlsb2FkXG4gIHZhciB0b3RhbCA9IHBhY2tldHMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHRvdGFsOyBpIDwgbDsgaSsrKSB7XG4gICAgKGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICAgIHBhcnNlci5lbmNvZGVQYWNrZXQocGFja2V0LCBzZWxmLnN1cHBvcnRzQmluYXJ5LCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoIXNlbGYudXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgLy8gYWx3YXlzIGNyZWF0ZSBhIG5ldyBvYmplY3QgKEdILTQzNylcbiAgICAgICAgICB2YXIgb3B0cyA9IHt9O1xuICAgICAgICAgIGlmIChwYWNrZXQub3B0aW9ucykge1xuICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IHBhY2tldC5vcHRpb25zLmNvbXByZXNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxmLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgICAgICAgICB2YXIgbGVuID0gJ3N0cmluZycgPT09IHR5cGVvZiBkYXRhID8gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSkgOiBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZW4gPCBzZWxmLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29tZXRpbWVzIHRoZSB3ZWJzb2NrZXQgaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQgYnV0IHRoZSBicm93c2VyIGRpZG4ndFxuICAgICAgICAvLyBoYXZlIGEgY2hhbmNlIG9mIGluZm9ybWluZyB1cyBhYm91dCBpdCB5ZXQsIGluIHRoYXQgY2FzZSBzZW5kIHdpbGxcbiAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoc2VsZi51c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgIC8vIFR5cGVFcnJvciBpcyB0aHJvd24gd2hlbiBwYXNzaW5nIHRoZSBzZWNvbmQgYXJndW1lbnQgb24gU2FmYXJpXG4gICAgICAgICAgICBzZWxmLndzLnNlbmQoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYud3Muc2VuZChkYXRhLCBvcHRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBkZWJ1Zygnd2Vic29ja2V0IGNsb3NlZCBiZWZvcmUgb25jbG9zZSBldmVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLS10b3RhbCB8fCBkb25lKCk7XG4gICAgICB9KTtcbiAgICB9KShwYWNrZXRzW2ldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUgKCkge1xuICAgIHNlbGYuZW1pdCgnZmx1c2gnKTtcblxuICAgIC8vIGZha2UgZHJhaW5cbiAgICAvLyBkZWZlciB0byBuZXh0IHRpY2sgdG8gYWxsb3cgU29ja2V0IHRvIGNsZWFyIHdyaXRlQnVmZmVyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIHNlbGYuZW1pdCgnZHJhaW4nKTtcbiAgICB9LCAwKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBjbG9zZVxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBUcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogQ2xvc2VzIHNvY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLndzICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS51cmkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gIHZhciBzY2hlbWEgPSB0aGlzLnNlY3VyZSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHBvcnQgPSAnJztcblxuICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICBpZiAodGhpcy5wb3J0ICYmICgoJ3dzcycgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICgnd3MnID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMucG9ydCkgIT09IDgwKSkpIHtcbiAgICBwb3J0ID0gJzonICsgdGhpcy5wb3J0O1xuICB9XG5cbiAgLy8gYXBwZW5kIHRpbWVzdGFtcCB0byBVUklcbiAgaWYgKHRoaXMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICBxdWVyeVt0aGlzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gIH1cblxuICAvLyBjb21tdW5pY2F0ZSBiaW5hcnkgc3VwcG9ydCBjYXBhYmlsaXRpZXNcbiAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcXVlcnkuYjY0ID0gMTtcbiAgfVxuXG4gIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgcXVlcnkgPSAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIHZhciBpcHY2ID0gdGhpcy5ob3N0bmFtZS5pbmRleE9mKCc6JykgIT09IC0xO1xuICByZXR1cm4gc2NoZW1hICsgJzovLycgKyAoaXB2NiA/ICdbJyArIHRoaXMuaG9zdG5hbWUgKyAnXScgOiB0aGlzLmhvc3RuYW1lKSArIHBvcnQgKyB0aGlzLnBhdGggKyBxdWVyeTtcbn07XG5cbi8qKlxuICogRmVhdHVyZSBkZXRlY3Rpb24gZm9yIFdlYlNvY2tldC5cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufSB3aGV0aGVyIHRoaXMgdHJhbnNwb3J0IGlzIGF2YWlsYWJsZS5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuV1MucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISFXZWJTb2NrZXRJbXBsICYmICEoJ19faW5pdGlhbGl6ZScgaW4gV2ViU29ja2V0SW1wbCAmJiB0aGlzLm5hbWUgPT09IFdTLnByb3RvdHlwZS5uYW1lKTtcbn07XG4iLCIvLyBicm93c2VyIHNoaW0gZm9yIHhtbGh0dHByZXF1ZXN0IG1vZHVsZVxuXG52YXIgaGFzQ09SUyA9IHJlcXVpcmUoJ2hhcy1jb3JzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4vZ2xvYmFsVGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHZhciB4ZG9tYWluID0gb3B0cy54ZG9tYWluO1xuXG4gIC8vIHNjaGVtZSBtdXN0IGJlIHNhbWUgd2hlbiB1c2lnbiBYRG9tYWluUmVxdWVzdFxuICAvLyBodHRwOi8vYmxvZ3MubXNkbi5jb20vYi9pZWludGVybmFscy9hcmNoaXZlLzIwMTAvMDUvMTMveGRvbWFpbnJlcXVlc3QtcmVzdHJpY3Rpb25zLWxpbWl0YXRpb25zLWFuZC13b3JrYXJvdW5kcy5hc3B4XG4gIHZhciB4c2NoZW1lID0gb3B0cy54c2NoZW1lO1xuXG4gIC8vIFhEb21haW5SZXF1ZXN0IGhhcyBhIGZsb3cgb2Ygbm90IHNlbmRpbmcgY29va2llLCB0aGVyZWZvcmUgaXQgc2hvdWxkIGJlIGRpc2FibGVkIGFzIGEgZGVmYXVsdC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvZW5naW5lLmlvLWNsaWVudC9wdWxsLzIxN1xuICB2YXIgZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAvLyBYTUxIdHRwUmVxdWVzdCBjYW4gYmUgZGlzYWJsZWQgb24gSUVcbiAgdHJ5IHtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAmJiAoIXhkb21haW4gfHwgaGFzQ09SUykpIHtcbiAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHsgfVxuXG4gIC8vIFVzZSBYRG9tYWluUmVxdWVzdCBmb3IgSUU4IGlmIGVuYWJsZXNYRFIgaXMgdHJ1ZVxuICAvLyBiZWNhdXNlIGxvYWRpbmcgYmFyIGtlZXBzIGZsYXNoaW5nIHdoZW4gdXNpbmcganNvbnAtcG9sbGluZ1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20veXVqaW9zYWthL3NvY2tlLmlvLWllOC1sb2FkaW5nLWV4YW1wbGVcbiAgdHJ5IHtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBYRG9tYWluUmVxdWVzdCAmJiAheHNjaGVtZSAmJiBlbmFibGVzWERSKSB7XG4gICAgICByZXR1cm4gbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7IH1cblxuICBpZiAoIXhkb21haW4pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG5ldyBnbG9iYWxUaGlzW1snQWN0aXZlJ10uY29uY2F0KCdPYmplY3QnKS5qb2luKCdYJyldKCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICB9XG59O1xuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcblx0Ly8gVGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcblx0Ly8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcblx0cmV0dXJuIHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0JyAmJlxuXHRcdGNvbnNvbGUubG9nICYmXG5cdFx0Y29uc29sZS5sb2coLi4uYXJncyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cblxuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG5cdGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuXHRjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcblx0Y3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMgPSBbXTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYXJnc1tpbmRleF07XG5cdFx0XHRcdFx0bWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG5cdFx0XHRcdFx0Ly8gTm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuXHRcdFx0XHRcdGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXHRcdFx0Y3JlYXRlRGVidWcuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG5cdFx0XHRjb25zdCBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcblx0XHRcdGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHRkZWJ1Zy5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0Ly8gRGVidWcuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5cdFx0Ly8gZGVidWcucmF3TG9nID0gcmF3TG9nO1xuXG5cdFx0Ly8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdGNyZWF0ZURlYnVnLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgY3JlYXRlRGVidWcuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZSA9IGNyZWF0ZURlYnVnLmluc3RhbmNlc1tpXTtcblx0XHRcdGluc3RhbmNlLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xudmFyIGhhc0JpbmFyeSA9IHJlcXVpcmUoJ2hhcy1iaW5hcnkyJyk7XG52YXIgc2xpY2VCdWZmZXIgPSByZXF1aXJlKCdhcnJheWJ1ZmZlci5zbGljZScpO1xudmFyIGFmdGVyID0gcmVxdWlyZSgnYWZ0ZXInKTtcbnZhciB1dGY4ID0gcmVxdWlyZSgnLi91dGY4Jyk7XG5cbnZhciBiYXNlNjRlbmNvZGVyO1xuaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgYmFzZTY0ZW5jb2RlciA9IHJlcXVpcmUoJ2Jhc2U2NC1hcnJheWJ1ZmZlcicpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHdlIGFyZSBydW5uaW5nIGFuIGFuZHJvaWQgYnJvd3Nlci4gVGhhdCByZXF1aXJlcyB1cyB0byB1c2VcbiAqIEFycmF5QnVmZmVyIHdpdGggcG9sbGluZyB0cmFuc3BvcnRzLi4uXG4gKlxuICogaHR0cDovL2doaW5kYS5uZXQvanBlZy1ibG9iLWFqYXgtYW5kcm9pZC9cbiAqL1xuXG52YXIgaXNBbmRyb2lkID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL0FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIENoZWNrIGlmIHdlIGFyZSBydW5uaW5nIGluIFBoYW50b21KUy5cbiAqIFVwbG9hZGluZyBhIEJsb2Igd2l0aCBQaGFudG9tSlMgZG9lcyBub3Qgd29yayBjb3JyZWN0bHksIGFzIHJlcG9ydGVkIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYXJpeWEvcGhhbnRvbWpzL2lzc3Vlcy8xMTM5NVxuICogQHR5cGUgYm9vbGVhblxuICovXG52YXIgaXNQaGFudG9tSlMgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvUGhhbnRvbUpTL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBXaGVuIHRydWUsIGF2b2lkcyB1c2luZyBCbG9icyB0byBlbmNvZGUgcGF5bG9hZHMuXG4gKiBAdHlwZSBib29sZWFuXG4gKi9cbnZhciBkb250U2VuZEJsb2JzID0gaXNBbmRyb2lkIHx8IGlzUGhhbnRvbUpTO1xuXG4vKipcbiAqIEN1cnJlbnQgcHJvdG9jb2wgdmVyc2lvbi5cbiAqL1xuXG5leHBvcnRzLnByb3RvY29sID0gMztcblxuLyoqXG4gKiBQYWNrZXQgdHlwZXMuXG4gKi9cblxudmFyIHBhY2tldHMgPSBleHBvcnRzLnBhY2tldHMgPSB7XG4gICAgb3BlbjogICAgIDAgICAgLy8gbm9uLXdzXG4gICwgY2xvc2U6ICAgIDEgICAgLy8gbm9uLXdzXG4gICwgcGluZzogICAgIDJcbiAgLCBwb25nOiAgICAgM1xuICAsIG1lc3NhZ2U6ICA0XG4gICwgdXBncmFkZTogIDVcbiAgLCBub29wOiAgICAgNlxufTtcblxudmFyIHBhY2tldHNsaXN0ID0ga2V5cyhwYWNrZXRzKTtcblxuLyoqXG4gKiBQcmVtYWRlIGVycm9yIHBhY2tldC5cbiAqL1xuXG52YXIgZXJyID0geyB0eXBlOiAnZXJyb3InLCBkYXRhOiAncGFyc2VyIGVycm9yJyB9O1xuXG4vKipcbiAqIENyZWF0ZSBhIGJsb2IgYXBpIGV2ZW4gZm9yIGJsb2IgYnVpbGRlciB3aGVuIHZlbmRvciBwcmVmaXhlcyBleGlzdFxuICovXG5cbnZhciBCbG9iID0gcmVxdWlyZSgnYmxvYicpO1xuXG4vKipcbiAqIEVuY29kZXMgYSBwYWNrZXQuXG4gKlxuICogICAgIDxwYWNrZXQgdHlwZSBpZD4gWyA8ZGF0YT4gXVxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIDVoZWxsbyB3b3JsZFxuICogICAgIDNcbiAqICAgICA0XG4gKlxuICogQmluYXJ5IGlzIGVuY29kZWQgaW4gYW4gaWRlbnRpY2FsIHByaW5jaXBsZVxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIHV0ZjhlbmNvZGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNCaW5hcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IHN1cHBvcnRzQmluYXJ5O1xuICAgIHN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIHV0ZjhlbmNvZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IHV0ZjhlbmNvZGU7XG4gICAgdXRmOGVuY29kZSA9IG51bGw7XG4gIH1cblxuICB2YXIgZGF0YSA9IChwYWNrZXQuZGF0YSA9PT0gdW5kZWZpbmVkKVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiBwYWNrZXQuZGF0YS5idWZmZXIgfHwgcGFja2V0LmRhdGE7XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGVuY29kZUFycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICByZXR1cm4gZW5jb2RlQmxvYihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjayk7XG4gIH1cblxuICAvLyBtaWdodCBiZSBhbiBvYmplY3Qgd2l0aCB7IGJhc2U2NDogdHJ1ZSwgZGF0YTogZGF0YUFzQmFzZTY0U3RyaW5nIH1cbiAgaWYgKGRhdGEgJiYgZGF0YS5iYXNlNjQpIHtcbiAgICByZXR1cm4gZW5jb2RlQmFzZTY0T2JqZWN0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgLy8gU2VuZGluZyBkYXRhIGFzIGEgdXRmLTggc3RyaW5nXG4gIHZhciBlbmNvZGVkID0gcGFja2V0c1twYWNrZXQudHlwZV07XG5cbiAgLy8gZGF0YSBmcmFnbWVudCBpcyBvcHRpb25hbFxuICBpZiAodW5kZWZpbmVkICE9PSBwYWNrZXQuZGF0YSkge1xuICAgIGVuY29kZWQgKz0gdXRmOGVuY29kZSA/IHV0ZjguZW5jb2RlKFN0cmluZyhwYWNrZXQuZGF0YSksIHsgc3RyaWN0OiBmYWxzZSB9KSA6IFN0cmluZyhwYWNrZXQuZGF0YSk7XG4gIH1cblxuICByZXR1cm4gY2FsbGJhY2soJycgKyBlbmNvZGVkKTtcblxufTtcblxuZnVuY3Rpb24gZW5jb2RlQmFzZTY0T2JqZWN0KHBhY2tldCwgY2FsbGJhY2spIHtcbiAgLy8gcGFja2V0IGRhdGEgaXMgYW4gb2JqZWN0IHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBkYXRhQXNCYXNlNjRTdHJpbmcgfVxuICB2YXIgbWVzc2FnZSA9ICdiJyArIGV4cG9ydHMucGFja2V0c1twYWNrZXQudHlwZV0gKyBwYWNrZXQuZGF0YS5kYXRhO1xuICByZXR1cm4gY2FsbGJhY2sobWVzc2FnZSk7XG59XG5cbi8qKlxuICogRW5jb2RlIHBhY2tldCBoZWxwZXJzIGZvciBiaW5hcnkgdHlwZXNcbiAqL1xuXG5mdW5jdGlvbiBlbmNvZGVBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICBpZiAoIXN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIGRhdGEgPSBwYWNrZXQuZGF0YTtcbiAgdmFyIGNvbnRlbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICB2YXIgcmVzdWx0QnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoMSArIGRhdGEuYnl0ZUxlbmd0aCk7XG5cbiAgcmVzdWx0QnVmZmVyWzBdID0gcGFja2V0c1twYWNrZXQudHlwZV07XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGVudEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0QnVmZmVyW2krMV0gPSBjb250ZW50QXJyYXlbaV07XG4gIH1cblxuICByZXR1cm4gY2FsbGJhY2socmVzdWx0QnVmZmVyLmJ1ZmZlcik7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUJsb2JBc0FycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gIGlmICghc3VwcG9ydHNCaW5hcnkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBmci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBleHBvcnRzLmVuY29kZVBhY2tldCh7IHR5cGU6IHBhY2tldC50eXBlLCBkYXRhOiBmci5yZXN1bHQgfSwgc3VwcG9ydHNCaW5hcnksIHRydWUsIGNhbGxiYWNrKTtcbiAgfTtcbiAgcmV0dXJuIGZyLnJlYWRBc0FycmF5QnVmZmVyKHBhY2tldC5kYXRhKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlQmxvYihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICBpZiAoIXN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKGRvbnRTZW5kQmxvYnMpIHtcbiAgICByZXR1cm4gZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICBsZW5ndGhbMF0gPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcbiAgdmFyIGJsb2IgPSBuZXcgQmxvYihbbGVuZ3RoLmJ1ZmZlciwgcGFja2V0LmRhdGFdKTtcblxuICByZXR1cm4gY2FsbGJhY2soYmxvYik7XG59XG5cbi8qKlxuICogRW5jb2RlcyBhIHBhY2tldCB3aXRoIGJpbmFyeSBkYXRhIGluIGEgYmFzZTY0IHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQsIGhhcyBgdHlwZWAgYW5kIGBkYXRhYFxuICogQHJldHVybiB7U3RyaW5nfSBiYXNlNjQgZW5jb2RlZCBtZXNzYWdlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQsIGNhbGxiYWNrKSB7XG4gIHZhciBtZXNzYWdlID0gJ2InICsgZXhwb3J0cy5wYWNrZXRzW3BhY2tldC50eXBlXTtcbiAgaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBwYWNrZXQuZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGZyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGI2NCA9IGZyLnJlc3VsdC5zcGxpdCgnLCcpWzFdO1xuICAgICAgY2FsbGJhY2sobWVzc2FnZSArIGI2NCk7XG4gICAgfTtcbiAgICByZXR1cm4gZnIucmVhZEFzRGF0YVVSTChwYWNrZXQuZGF0YSk7XG4gIH1cblxuICB2YXIgYjY0ZGF0YTtcbiAgdHJ5IHtcbiAgICBiNjRkYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShwYWNrZXQuZGF0YSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gaVBob25lIFNhZmFyaSBkb2Vzbid0IGxldCB5b3UgYXBwbHkgd2l0aCB0eXBlZCBhcnJheXNcbiAgICB2YXIgdHlwZWQgPSBuZXcgVWludDhBcnJheShwYWNrZXQuZGF0YSk7XG4gICAgdmFyIGJhc2ljID0gbmV3IEFycmF5KHR5cGVkLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlZC5sZW5ndGg7IGkrKykge1xuICAgICAgYmFzaWNbaV0gPSB0eXBlZFtpXTtcbiAgICB9XG4gICAgYjY0ZGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgYmFzaWMpO1xuICB9XG4gIG1lc3NhZ2UgKz0gYnRvYShiNjRkYXRhKTtcbiAgcmV0dXJuIGNhbGxiYWNrKG1lc3NhZ2UpO1xufTtcblxuLyoqXG4gKiBEZWNvZGVzIGEgcGFja2V0LiBDaGFuZ2VzIGZvcm1hdCB0byBCbG9iIGlmIHJlcXVlc3RlZC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggYHR5cGVgIGFuZCBgZGF0YWAgKGlmIGFueSlcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZGVjb2RlUGFja2V0ID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIHV0ZjhkZWNvZGUpIHtcbiAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlcnI7XG4gIH1cbiAgLy8gU3RyaW5nIGRhdGFcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIGlmIChkYXRhLmNoYXJBdCgwKSA9PT0gJ2InKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZWNvZGVCYXNlNjRQYWNrZXQoZGF0YS5zdWJzdHIoMSksIGJpbmFyeVR5cGUpO1xuICAgIH1cblxuICAgIGlmICh1dGY4ZGVjb2RlKSB7XG4gICAgICBkYXRhID0gdHJ5RGVjb2RlKGRhdGEpO1xuICAgICAgaWYgKGRhdGEgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB0eXBlID0gZGF0YS5jaGFyQXQoMCk7XG5cbiAgICBpZiAoTnVtYmVyKHR5cGUpICE9IHR5cGUgfHwgIXBhY2tldHNsaXN0W3R5cGVdKSB7XG4gICAgICByZXR1cm4gZXJyO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IHBhY2tldHNsaXN0W3R5cGVdLCBkYXRhOiBkYXRhLnN1YnN0cmluZygxKSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYWNrZXRzbGlzdFt0eXBlXSB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBhc0FycmF5ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gIHZhciB0eXBlID0gYXNBcnJheVswXTtcbiAgdmFyIHJlc3QgPSBzbGljZUJ1ZmZlcihkYXRhLCAxKTtcbiAgaWYgKEJsb2IgJiYgYmluYXJ5VHlwZSA9PT0gJ2Jsb2InKSB7XG4gICAgcmVzdCA9IG5ldyBCbG9iKFtyZXN0XSk7XG4gIH1cbiAgcmV0dXJuIHsgdHlwZTogcGFja2V0c2xpc3RbdHlwZV0sIGRhdGE6IHJlc3QgfTtcbn07XG5cbmZ1bmN0aW9uIHRyeURlY29kZShkYXRhKSB7XG4gIHRyeSB7XG4gICAgZGF0YSA9IHV0ZjguZGVjb2RlKGRhdGEsIHsgc3RyaWN0OiBmYWxzZSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBEZWNvZGVzIGEgcGFja2V0IGVuY29kZWQgaW4gYSBiYXNlNjQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGJhc2U2NCBlbmNvZGVkIG1lc3NhZ2VcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBgdHlwZWAgYW5kIGBkYXRhYCAoaWYgYW55KVxuICovXG5cbmV4cG9ydHMuZGVjb2RlQmFzZTY0UGFja2V0ID0gZnVuY3Rpb24obXNnLCBiaW5hcnlUeXBlKSB7XG4gIHZhciB0eXBlID0gcGFja2V0c2xpc3RbbXNnLmNoYXJBdCgwKV07XG4gIGlmICghYmFzZTY0ZW5jb2Rlcikge1xuICAgIHJldHVybiB7IHR5cGU6IHR5cGUsIGRhdGE6IHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBtc2cuc3Vic3RyKDEpIH0gfTtcbiAgfVxuXG4gIHZhciBkYXRhID0gYmFzZTY0ZW5jb2Rlci5kZWNvZGUobXNnLnN1YnN0cigxKSk7XG5cbiAgaWYgKGJpbmFyeVR5cGUgPT09ICdibG9iJyAmJiBCbG9iKSB7XG4gICAgZGF0YSA9IG5ldyBCbG9iKFtkYXRhXSk7XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiB0eXBlLCBkYXRhOiBkYXRhIH07XG59O1xuXG4vKipcbiAqIEVuY29kZXMgbXVsdGlwbGUgbWVzc2FnZXMgKHBheWxvYWQpLlxuICpcbiAqICAgICA8bGVuZ3RoPjpkYXRhXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgMTE6aGVsbG8gd29ybGQyOmhpXG4gKlxuICogSWYgYW55IGNvbnRlbnRzIGFyZSBiaW5hcnksIHRoZXkgd2lsbCBiZSBlbmNvZGVkIGFzIGJhc2U2NCBzdHJpbmdzLiBCYXNlNjRcbiAqIGVuY29kZWQgc3RyaW5ncyBhcmUgbWFya2VkIHdpdGggYSBiIGJlZm9yZSB0aGUgbGVuZ3RoIHNwZWNpZmllclxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGF5bG9hZCA9IGZ1bmN0aW9uIChwYWNrZXRzLCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0JpbmFyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gc3VwcG9ydHNCaW5hcnk7XG4gICAgc3VwcG9ydHNCaW5hcnkgPSBudWxsO1xuICB9XG5cbiAgdmFyIGlzQmluYXJ5ID0gaGFzQmluYXJ5KHBhY2tldHMpO1xuXG4gIGlmIChzdXBwb3J0c0JpbmFyeSAmJiBpc0JpbmFyeSkge1xuICAgIGlmIChCbG9iICYmICFkb250U2VuZEJsb2JzKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNCbG9iKHBhY2tldHMsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNBcnJheUJ1ZmZlcihwYWNrZXRzLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAoIXBhY2tldHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCcwOicpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TGVuZ3RoSGVhZGVyKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gbWVzc2FnZS5sZW5ndGggKyAnOicgKyBtZXNzYWdlO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCAhaXNCaW5hcnkgPyBmYWxzZSA6IHN1cHBvcnRzQmluYXJ5LCBmYWxzZSwgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgZG9uZUNhbGxiYWNrKG51bGwsIHNldExlbmd0aEhlYWRlcihtZXNzYWdlKSk7XG4gICAgfSk7XG4gIH1cblxuICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0cy5qb2luKCcnKSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBBc3luYyBhcnJheSBtYXAgdXNpbmcgYWZ0ZXJcbiAqL1xuXG5mdW5jdGlvbiBtYXAoYXJ5LCBlYWNoLCBkb25lKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoYXJ5Lmxlbmd0aCk7XG4gIHZhciBuZXh0ID0gYWZ0ZXIoYXJ5Lmxlbmd0aCwgZG9uZSk7XG5cbiAgdmFyIGVhY2hXaXRoSW5kZXggPSBmdW5jdGlvbihpLCBlbCwgY2IpIHtcbiAgICBlYWNoKGVsLCBmdW5jdGlvbihlcnJvciwgbXNnKSB7XG4gICAgICByZXN1bHRbaV0gPSBtc2c7XG4gICAgICBjYihlcnJvciwgcmVzdWx0KTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeS5sZW5ndGg7IGkrKykge1xuICAgIGVhY2hXaXRoSW5kZXgoaSwgYXJ5W2ldLCBuZXh0KTtcbiAgfVxufVxuXG4vKlxuICogRGVjb2RlcyBkYXRhIHdoZW4gYSBwYXlsb2FkIGlzIG1heWJlIGV4cGVjdGVkLiBQb3NzaWJsZSBiaW5hcnkgY29udGVudHMgYXJlXG4gKiBkZWNvZGVkIGZyb20gdGhlaXIgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEsIGNhbGxiYWNrIG1ldGhvZFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmRlY29kZVBheWxvYWQgPSBmdW5jdGlvbiAoZGF0YSwgYmluYXJ5VHlwZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBleHBvcnRzLmRlY29kZVBheWxvYWRBc0JpbmFyeShkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAodHlwZW9mIGJpbmFyeVR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGJpbmFyeVR5cGU7XG4gICAgYmluYXJ5VHlwZSA9IG51bGw7XG4gIH1cblxuICB2YXIgcGFja2V0O1xuICBpZiAoZGF0YSA9PT0gJycpIHtcbiAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gJycsIG4sIG1zZztcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNociA9IGRhdGEuY2hhckF0KGkpO1xuXG4gICAgaWYgKGNociAhPT0gJzonKSB7XG4gICAgICBsZW5ndGggKz0gY2hyO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGxlbmd0aCA9PT0gJycgfHwgKGxlbmd0aCAhPSAobiA9IE51bWJlcihsZW5ndGgpKSkpIHtcbiAgICAgIC8vIHBhcnNlciBlcnJvciAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgIH1cblxuICAgIG1zZyA9IGRhdGEuc3Vic3RyKGkgKyAxLCBuKTtcblxuICAgIGlmIChsZW5ndGggIT0gbXNnLmxlbmd0aCkge1xuICAgICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKG1zZy5sZW5ndGgpIHtcbiAgICAgIHBhY2tldCA9IGV4cG9ydHMuZGVjb2RlUGFja2V0KG1zZywgYmluYXJ5VHlwZSwgZmFsc2UpO1xuXG4gICAgICBpZiAoZXJyLnR5cGUgPT09IHBhY2tldC50eXBlICYmIGVyci5kYXRhID09PSBwYWNrZXQuZGF0YSkge1xuICAgICAgICAvLyBwYXJzZXIgZXJyb3IgaW4gaW5kaXZpZHVhbCBwYWNrZXQgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmV0ID0gY2FsbGJhY2socGFja2V0LCBpICsgbiwgbCk7XG4gICAgICBpZiAoZmFsc2UgPT09IHJldCkgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFkdmFuY2UgY3Vyc29yXG4gICAgaSArPSBuO1xuICAgIGxlbmd0aCA9ICcnO1xuICB9XG5cbiAgaWYgKGxlbmd0aCAhPT0gJycpIHtcbiAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gIH1cblxufTtcblxuLyoqXG4gKiBFbmNvZGVzIG11bHRpcGxlIG1lc3NhZ2VzIChwYXlsb2FkKSBhcyBiaW5hcnkuXG4gKlxuICogPDEgPSBiaW5hcnksIDAgPSBzdHJpbmc+PG51bWJlciBmcm9tIDAtOT48bnVtYmVyIGZyb20gMC05PlsuLi5dPG51bWJlclxuICogMjU1PjxkYXRhPlxuICpcbiAqIEV4YW1wbGU6XG4gKiAxIDMgMjU1IDEgMiAzLCBpZiB0aGUgYmluYXJ5IGNvbnRlbnRzIGFyZSBpbnRlcnByZXRlZCBhcyA4IGJpdCBpbnRlZ2Vyc1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBlbmNvZGVkIHBheWxvYWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQXJyYXlCdWZmZXIgPSBmdW5jdGlvbihwYWNrZXRzLCBjYWxsYmFjaykge1xuICBpZiAoIXBhY2tldHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBBcnJheUJ1ZmZlcigwKSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmNvZGVPbmUocGFja2V0LCBkb25lQ2FsbGJhY2spIHtcbiAgICBleHBvcnRzLmVuY29kZVBhY2tldChwYWNrZXQsIHRydWUsIHRydWUsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiBkb25lQ2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbihlcnIsIGVuY29kZWRQYWNrZXRzKSB7XG4gICAgdmFyIHRvdGFsTGVuZ3RoID0gZW5jb2RlZFBhY2tldHMucmVkdWNlKGZ1bmN0aW9uKGFjYywgcCkge1xuICAgICAgdmFyIGxlbjtcbiAgICAgIGlmICh0eXBlb2YgcCA9PT0gJ3N0cmluZycpe1xuICAgICAgICBsZW4gPSBwLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IHAuYnl0ZUxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2MgKyBsZW4udG9TdHJpbmcoKS5sZW5ndGggKyBsZW4gKyAyOyAvLyBzdHJpbmcvYmluYXJ5IGlkZW50aWZpZXIgKyBzZXBhcmF0b3IgPSAyXG4gICAgfSwgMCk7XG5cbiAgICB2YXIgcmVzdWx0QXJyYXkgPSBuZXcgVWludDhBcnJheSh0b3RhbExlbmd0aCk7XG5cbiAgICB2YXIgYnVmZmVySW5kZXggPSAwO1xuICAgIGVuY29kZWRQYWNrZXRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIHAgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIGFiID0gcDtcbiAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KHAubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmlld1tpXSA9IHAuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBhYiA9IHZpZXcuYnVmZmVyO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdHJpbmcpIHsgLy8gbm90IHRydWUgYmluYXJ5XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMDtcbiAgICAgIH0gZWxzZSB7IC8vIHRydWUgYmluYXJ5XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlblN0ciA9IGFiLmJ5dGVMZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuU3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gcGFyc2VJbnQobGVuU3RyW2ldKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMjU1O1xuXG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGFiKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IHZpZXdbaV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0QXJyYXkuYnVmZmVyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBhcyBCbG9iXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNCbG9iID0gZnVuY3Rpb24ocGFja2V0cywgY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCB0cnVlLCB0cnVlLCBmdW5jdGlvbihlbmNvZGVkKSB7XG4gICAgICB2YXIgYmluYXJ5SWRlbnRpZmllciA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgICAgYmluYXJ5SWRlbnRpZmllclswXSA9IDE7XG4gICAgICBpZiAodHlwZW9mIGVuY29kZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZC5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2aWV3W2ldID0gZW5jb2RlZC5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGVuY29kZWQgPSB2aWV3LmJ1ZmZlcjtcbiAgICAgICAgYmluYXJ5SWRlbnRpZmllclswXSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW4gPSAoZW5jb2RlZCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKVxuICAgICAgICA/IGVuY29kZWQuYnl0ZUxlbmd0aFxuICAgICAgICA6IGVuY29kZWQuc2l6ZTtcblxuICAgICAgdmFyIGxlblN0ciA9IGxlbi50b1N0cmluZygpO1xuICAgICAgdmFyIGxlbmd0aEFyeSA9IG5ldyBVaW50OEFycmF5KGxlblN0ci5sZW5ndGggKyAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuU3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxlbmd0aEFyeVtpXSA9IHBhcnNlSW50KGxlblN0cltpXSk7XG4gICAgICB9XG4gICAgICBsZW5ndGhBcnlbbGVuU3RyLmxlbmd0aF0gPSAyNTU7XG5cbiAgICAgIGlmIChCbG9iKSB7XG4gICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2JpbmFyeUlkZW50aWZpZXIuYnVmZmVyLCBsZW5ndGhBcnkuYnVmZmVyLCBlbmNvZGVkXSk7XG4gICAgICAgIGRvbmVDYWxsYmFjayhudWxsLCBibG9iKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG1hcChwYWNrZXRzLCBlbmNvZGVPbmUsIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgQmxvYihyZXN1bHRzKSk7XG4gIH0pO1xufTtcblxuLypcbiAqIERlY29kZXMgZGF0YSB3aGVuIGEgcGF5bG9hZCBpcyBtYXliZSBleHBlY3RlZC4gU3RyaW5ncyBhcmUgZGVjb2RlZCBieVxuICogaW50ZXJwcmV0aW5nIGVhY2ggYnl0ZSBhcyBhIGtleSBjb2RlIGZvciBlbnRyaWVzIG1hcmtlZCB0byBzdGFydCB3aXRoIDAuIFNlZVxuICogZGVzY3JpcHRpb24gb2YgZW5jb2RlUGF5bG9hZEFzQmluYXJ5XG4gKlxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gZGF0YSwgY2FsbGJhY2sgbWV0aG9kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuZGVjb2RlUGF5bG9hZEFzQmluYXJ5ID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgYmluYXJ5VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gYmluYXJ5VHlwZTtcbiAgICBiaW5hcnlUeXBlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBidWZmZXJUYWlsID0gZGF0YTtcbiAgdmFyIGJ1ZmZlcnMgPSBbXTtcblxuICB3aGlsZSAoYnVmZmVyVGFpbC5ieXRlTGVuZ3RoID4gMCkge1xuICAgIHZhciB0YWlsQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJUYWlsKTtcbiAgICB2YXIgaXNTdHJpbmcgPSB0YWlsQXJyYXlbMF0gPT09IDA7XG4gICAgdmFyIG1zZ0xlbmd0aCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IDsgaSsrKSB7XG4gICAgICBpZiAodGFpbEFycmF5W2ldID09PSAyNTUpIGJyZWFrO1xuXG4gICAgICAvLyAzMTAgPSBjaGFyIGxlbmd0aCBvZiBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICBpZiAobXNnTGVuZ3RoLmxlbmd0aCA+IDMxMCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICAgIH1cblxuICAgICAgbXNnTGVuZ3RoICs9IHRhaWxBcnJheVtpXTtcbiAgICB9XG5cbiAgICBidWZmZXJUYWlsID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgMiArIG1zZ0xlbmd0aC5sZW5ndGgpO1xuICAgIG1zZ0xlbmd0aCA9IHBhcnNlSW50KG1zZ0xlbmd0aCk7XG5cbiAgICB2YXIgbXNnID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgMCwgbXNnTGVuZ3RoKTtcbiAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1zZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkobXNnKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlQaG9uZSBTYWZhcmkgZG9lc24ndCBsZXQgeW91IGFwcGx5IHRvIHR5cGVkIGFycmF5c1xuICAgICAgICB2YXIgdHlwZWQgPSBuZXcgVWludDhBcnJheShtc2cpO1xuICAgICAgICBtc2cgPSAnJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG1zZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHR5cGVkW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGJ1ZmZlcnMucHVzaChtc2cpO1xuICAgIGJ1ZmZlclRhaWwgPSBzbGljZUJ1ZmZlcihidWZmZXJUYWlsLCBtc2dMZW5ndGgpO1xuICB9XG5cbiAgdmFyIHRvdGFsID0gYnVmZmVycy5sZW5ndGg7XG4gIGJ1ZmZlcnMuZm9yRWFjaChmdW5jdGlvbihidWZmZXIsIGkpIHtcbiAgICBjYWxsYmFjayhleHBvcnRzLmRlY29kZVBhY2tldChidWZmZXIsIGJpbmFyeVR5cGUsIHRydWUpLCBpLCB0b3RhbCk7XG4gIH0pO1xufTtcbiIsIlxuLyoqXG4gKiBHZXRzIHRoZSBrZXlzIGZvciBhbiBvYmplY3QuXG4gKlxuICogQHJldHVybiB7QXJyYXl9IGtleXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyAob2JqKXtcbiAgdmFyIGFyciA9IFtdO1xuICB2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChoYXMuY2FsbChvYmosIGkpKSB7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG4iLCIvKiEgaHR0cHM6Ly9tdGhzLmJlL3V0ZjhqcyB2Mi4xLjIgYnkgQG1hdGhpYXMgKi9cblxudmFyIHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbi8vIFRha2VuIGZyb20gaHR0cHM6Ly9tdGhzLmJlL3B1bnljb2RlXG5mdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuXHR2YXIgb3V0cHV0ID0gW107XG5cdHZhciBjb3VudGVyID0gMDtcblx0dmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cdHZhciB2YWx1ZTtcblx0dmFyIGV4dHJhO1xuXHR3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuXHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRpZiAodmFsdWUgPj0gMHhEODAwICYmIHZhbHVlIDw9IDB4REJGRiAmJiBjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0XHQvLyBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXJcblx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkgeyAvLyBsb3cgc3Vycm9nYXRlXG5cdFx0XHRcdG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGUgbmV4dFxuXHRcdFx0XHQvLyBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXJcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRjb3VudGVyLS07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG91dHB1dDtcbn1cblxuLy8gVGFrZW4gZnJvbSBodHRwczovL210aHMuYmUvcHVueWNvZGVcbmZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcblx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0dmFyIGluZGV4ID0gLTE7XG5cdHZhciB2YWx1ZTtcblx0dmFyIG91dHB1dCA9ICcnO1xuXHR3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHRcdHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuXHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0dmFsdWUgLT0gMHgxMDAwMDtcblx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdH1cblx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSB7XG5cdGlmIChjb2RlUG9pbnQgPj0gMHhEODAwICYmIGNvZGVQb2ludCA8PSAweERGRkYpIHtcblx0XHRpZiAoc3RyaWN0KSB7XG5cdFx0XHR0aHJvdyBFcnJvcihcblx0XHRcdFx0J0xvbmUgc3Vycm9nYXRlIFUrJyArIGNvZGVQb2ludC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArXG5cdFx0XHRcdCcgaXMgbm90IGEgc2NhbGFyIHZhbHVlJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ5dGUoY29kZVBvaW50LCBzaGlmdCkge1xuXHRyZXR1cm4gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IHNoaWZ0KSAmIDB4M0YpIHwgMHg4MCk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUNvZGVQb2ludChjb2RlUG9pbnQsIHN0cmljdCkge1xuXHRpZiAoKGNvZGVQb2ludCAmIDB4RkZGRkZGODApID09IDApIHsgLy8gMS1ieXRlIHNlcXVlbmNlXG5cdFx0cmV0dXJuIHN0cmluZ0Zyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuXHR9XG5cdHZhciBzeW1ib2wgPSAnJztcblx0aWYgKChjb2RlUG9pbnQgJiAweEZGRkZGODAwKSA9PSAwKSB7IC8vIDItYnl0ZSBzZXF1ZW5jZVxuXHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiA2KSAmIDB4MUYpIHwgMHhDMCk7XG5cdH1cblx0ZWxzZSBpZiAoKGNvZGVQb2ludCAmIDB4RkZGRjAwMDApID09IDApIHsgLy8gMy1ieXRlIHNlcXVlbmNlXG5cdFx0aWYgKCFjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSkge1xuXHRcdFx0Y29kZVBvaW50ID0gMHhGRkZEO1xuXHRcdH1cblx0XHRzeW1ib2wgPSBzdHJpbmdGcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gMTIpICYgMHgwRikgfCAweEUwKTtcblx0XHRzeW1ib2wgKz0gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIDYpO1xuXHR9XG5cdGVsc2UgaWYgKChjb2RlUG9pbnQgJiAweEZGRTAwMDAwKSA9PSAwKSB7IC8vIDQtYnl0ZSBzZXF1ZW5jZVxuXHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiAxOCkgJiAweDA3KSB8IDB4RjApO1xuXHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgMTIpO1xuXHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgNik7XG5cdH1cblx0c3ltYm9sICs9IHN0cmluZ0Zyb21DaGFyQ29kZSgoY29kZVBvaW50ICYgMHgzRikgfCAweDgwKTtcblx0cmV0dXJuIHN5bWJvbDtcbn1cblxuZnVuY3Rpb24gdXRmOGVuY29kZShzdHJpbmcsIG9wdHMpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cdHZhciBzdHJpY3QgPSBmYWxzZSAhPT0gb3B0cy5zdHJpY3Q7XG5cblx0dmFyIGNvZGVQb2ludHMgPSB1Y3MyZGVjb2RlKHN0cmluZyk7XG5cdHZhciBsZW5ndGggPSBjb2RlUG9pbnRzLmxlbmd0aDtcblx0dmFyIGluZGV4ID0gLTE7XG5cdHZhciBjb2RlUG9pbnQ7XG5cdHZhciBieXRlU3RyaW5nID0gJyc7XG5cdHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdFx0Y29kZVBvaW50ID0gY29kZVBvaW50c1tpbmRleF07XG5cdFx0Ynl0ZVN0cmluZyArPSBlbmNvZGVDb2RlUG9pbnQoY29kZVBvaW50LCBzdHJpY3QpO1xuXHR9XG5cdHJldHVybiBieXRlU3RyaW5nO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZnVuY3Rpb24gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKSB7XG5cdGlmIChieXRlSW5kZXggPj0gYnl0ZUNvdW50KSB7XG5cdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgYnl0ZSBpbmRleCcpO1xuXHR9XG5cblx0dmFyIGNvbnRpbnVhdGlvbkJ5dGUgPSBieXRlQXJyYXlbYnl0ZUluZGV4XSAmIDB4RkY7XG5cdGJ5dGVJbmRleCsrO1xuXG5cdGlmICgoY29udGludWF0aW9uQnl0ZSAmIDB4QzApID09IDB4ODApIHtcblx0XHRyZXR1cm4gY29udGludWF0aW9uQnl0ZSAmIDB4M0Y7XG5cdH1cblxuXHQvLyBJZiB3ZSBlbmQgdXAgaGVyZSwgaXTigJlzIG5vdCBhIGNvbnRpbnVhdGlvbiBieXRlXG5cdHRocm93IEVycm9yKCdJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZVN5bWJvbChzdHJpY3QpIHtcblx0dmFyIGJ5dGUxO1xuXHR2YXIgYnl0ZTI7XG5cdHZhciBieXRlMztcblx0dmFyIGJ5dGU0O1xuXHR2YXIgY29kZVBvaW50O1xuXG5cdGlmIChieXRlSW5kZXggPiBieXRlQ291bnQpIHtcblx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBieXRlIGluZGV4Jyk7XG5cdH1cblxuXHRpZiAoYnl0ZUluZGV4ID09IGJ5dGVDb3VudCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIFJlYWQgZmlyc3QgYnl0ZVxuXHRieXRlMSA9IGJ5dGVBcnJheVtieXRlSW5kZXhdICYgMHhGRjtcblx0Ynl0ZUluZGV4Kys7XG5cblx0Ly8gMS1ieXRlIHNlcXVlbmNlIChubyBjb250aW51YXRpb24gYnl0ZXMpXG5cdGlmICgoYnl0ZTEgJiAweDgwKSA9PSAwKSB7XG5cdFx0cmV0dXJuIGJ5dGUxO1xuXHR9XG5cblx0Ly8gMi1ieXRlIHNlcXVlbmNlXG5cdGlmICgoYnl0ZTEgJiAweEUwKSA9PSAweEMwKSB7XG5cdFx0Ynl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDFGKSA8PCA2KSB8IGJ5dGUyO1xuXHRcdGlmIChjb2RlUG9pbnQgPj0gMHg4MCkge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcblx0XHR9XG5cdH1cblxuXHQvLyAzLWJ5dGUgc2VxdWVuY2UgKG1heSBpbmNsdWRlIHVucGFpcmVkIHN1cnJvZ2F0ZXMpXG5cdGlmICgoYnl0ZTEgJiAweEYwKSA9PSAweEUwKSB7XG5cdFx0Ynl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGJ5dGUzID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRjb2RlUG9pbnQgPSAoKGJ5dGUxICYgMHgwRikgPDwgMTIpIHwgKGJ5dGUyIDw8IDYpIHwgYnl0ZTM7XG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweDA4MDApIHtcblx0XHRcdHJldHVybiBjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSA/IGNvZGVQb2ludCA6IDB4RkZGRDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcblx0XHR9XG5cdH1cblxuXHQvLyA0LWJ5dGUgc2VxdWVuY2Vcblx0aWYgKChieXRlMSAmIDB4RjgpID09IDB4RjApIHtcblx0XHRieXRlMiA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0Ynl0ZTMgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGJ5dGU0ID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRjb2RlUG9pbnQgPSAoKGJ5dGUxICYgMHgwNykgPDwgMHgxMikgfCAoYnl0ZTIgPDwgMHgwQykgfFxuXHRcdFx0KGJ5dGUzIDw8IDB4MDYpIHwgYnl0ZTQ7XG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweDAxMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgxMEZGRkYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQ7XG5cdFx0fVxuXHR9XG5cblx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgVVRGLTggZGV0ZWN0ZWQnKTtcbn1cblxudmFyIGJ5dGVBcnJheTtcbnZhciBieXRlQ291bnQ7XG52YXIgYnl0ZUluZGV4O1xuZnVuY3Rpb24gdXRmOGRlY29kZShieXRlU3RyaW5nLCBvcHRzKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHR2YXIgc3RyaWN0ID0gZmFsc2UgIT09IG9wdHMuc3RyaWN0O1xuXG5cdGJ5dGVBcnJheSA9IHVjczJkZWNvZGUoYnl0ZVN0cmluZyk7XG5cdGJ5dGVDb3VudCA9IGJ5dGVBcnJheS5sZW5ndGg7XG5cdGJ5dGVJbmRleCA9IDA7XG5cdHZhciBjb2RlUG9pbnRzID0gW107XG5cdHZhciB0bXA7XG5cdHdoaWxlICgodG1wID0gZGVjb2RlU3ltYm9sKHN0cmljdCkpICE9PSBmYWxzZSkge1xuXHRcdGNvZGVQb2ludHMucHVzaCh0bXApO1xuXHR9XG5cdHJldHVybiB1Y3MyZW5jb2RlKGNvZGVQb2ludHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0dmVyc2lvbjogJzIuMS4yJyxcblx0ZW5jb2RlOiB1dGY4ZW5jb2RlLFxuXHRkZWNvZGU6IHV0ZjhkZWNvZGVcbn07XG4iLCIvKiBnbG9iYWwgQmxvYiBGaWxlICovXG5cbi8qXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICovXG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHdpdGhOYXRpdmVCbG9iID0gdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEJsb2IpID09PSAnW29iamVjdCBCbG9iQ29uc3RydWN0b3JdJztcbnZhciB3aXRoTmF0aXZlRmlsZSA9IHR5cGVvZiBGaWxlID09PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgRmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdG9TdHJpbmcuY2FsbChGaWxlKSA9PT0gJ1tvYmplY3QgRmlsZUNvbnN0cnVjdG9yXSc7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNCaW5hcnk7XG5cbi8qKlxuICogQ2hlY2tzIGZvciBiaW5hcnkgZGF0YS5cbiAqXG4gKiBTdXBwb3J0cyBCdWZmZXIsIEFycmF5QnVmZmVyLCBCbG9iIGFuZCBGaWxlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbnl0aGluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBoYXNCaW5hcnkgKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChoYXNCaW5hcnkob2JqW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCh0eXBlb2YgQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIEJ1ZmZlci5pc0J1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIob2JqKSkgfHxcbiAgICAodHlwZW9mIEFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fFxuICAgICh3aXRoTmF0aXZlQmxvYiAmJiBvYmogaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvaGFzLWJpbmFyeS9wdWxsLzRcbiAgaWYgKG9iai50b0pTT04gJiYgdHlwZW9mIG9iai50b0pTT04gPT09ICdmdW5jdGlvbicgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBoYXNCaW5hcnkob2JqLnRvSlNPTigpLCB0cnVlKTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSAmJiBoYXNCaW5hcnkob2JqW2tleV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iLCJcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKlxuICogTG9naWMgYm9ycm93ZWQgZnJvbSBNb2Rlcm5penI6XG4gKlxuICogICAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9jb3JzLmpzXG4gKi9cblxudHJ5IHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmXG4gICAgJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG59IGNhdGNoIChlcnIpIHtcbiAgLy8gaWYgWE1MSHR0cCBzdXBwb3J0IGlzIGRpc2FibGVkIGluIElFIHRoZW4gaXQgd2lsbCB0aHJvd1xuICAvLyB3aGVuIHRyeWluZyB0byBjcmVhdGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbn1cbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsIlxudmFyIGluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgb2JqKXtcbiAgaWYgKGluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHxcbiAgICBwbHVyYWwobXMsIGgsICdob3VyJykgfHxcbiAgICBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fFxuICAgIHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8XG4gICAgbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXMgPCBuICogMS41KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobXMgLyBuKSArICcgJyArIG5hbWU7XG4gIH1cbiAgcmV0dXJuIE1hdGguY2VpbChtcyAvIG4pICsgJyAnICsgbmFtZSArICdzJztcbn1cbiIsIi8qKlxyXG4gKiBDb21waWxlcyBhIHF1ZXJ5c3RyaW5nXHJcbiAqIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gIHZhciBzdHIgPSAnJztcclxuXHJcbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcclxuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgaWYgKHN0ci5sZW5ndGgpIHN0ciArPSAnJic7XHJcbiAgICAgIHN0ciArPSBlbmNvZGVVUklDb21wb25lbnQoaSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzdHI7XHJcbn07XHJcblxyXG4vKipcclxuICogUGFyc2VzIGEgc2ltcGxlIHF1ZXJ5c3RyaW5nIGludG8gYW4gb2JqZWN0XHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBxc1xyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uKHFzKXtcclxuICB2YXIgcXJ5ID0ge307XHJcbiAgdmFyIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcclxuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xyXG4gICAgcXJ5W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XHJcbiAgfVxyXG4gIHJldHVybiBxcnk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBQYXJzZXMgYW4gVVJJXHJcbiAqXHJcbiAqIEBhdXRob3IgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+IChNSVQgbGljZW5zZSlcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxudmFyIHJlID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoaHR0cHxodHRwc3x3c3x3c3MpOlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oKD86W2EtZjAtOV17MCw0fTopezIsN31bYS1mMC05XXswLDR9fFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XHJcblxyXG52YXIgcGFydHMgPSBbXHJcbiAgICAnc291cmNlJywgJ3Byb3RvY29sJywgJ2F1dGhvcml0eScsICd1c2VySW5mbycsICd1c2VyJywgJ3Bhc3N3b3JkJywgJ2hvc3QnLCAncG9ydCcsICdyZWxhdGl2ZScsICdwYXRoJywgJ2RpcmVjdG9yeScsICdmaWxlJywgJ3F1ZXJ5JywgJ2FuY2hvcidcclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2V1cmkoc3RyKSB7XHJcbiAgICB2YXIgc3JjID0gc3RyLFxyXG4gICAgICAgIGIgPSBzdHIuaW5kZXhPZignWycpLFxyXG4gICAgICAgIGUgPSBzdHIuaW5kZXhPZignXScpO1xyXG5cclxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcclxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGIpICsgc3RyLnN1YnN0cmluZyhiLCBlKS5yZXBsYWNlKC86L2csICc7JykgKyBzdHIuc3Vic3RyaW5nKGUsIHN0ci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtID0gcmUuZXhlYyhzdHIgfHwgJycpLFxyXG4gICAgICAgIHVyaSA9IHt9LFxyXG4gICAgICAgIGkgPSAxNDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgdXJpW3BhcnRzW2ldXSA9IG1baV0gfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xyXG4gICAgICAgIHVyaS5zb3VyY2UgPSBzcmM7XHJcbiAgICAgICAgdXJpLmhvc3QgPSB1cmkuaG9zdC5zdWJzdHJpbmcoMSwgdXJpLmhvc3QubGVuZ3RoIC0gMSkucmVwbGFjZSgvOy9nLCAnOicpO1xyXG4gICAgICAgIHVyaS5hdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKS5yZXBsYWNlKC87L2csICc6Jyk7XHJcbiAgICAgICAgdXJpLmlwdjZ1cmkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cmk7XHJcbn07XHJcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgdXJsID0gcmVxdWlyZSgnLi91cmwnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG52YXIgTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudCcpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGxvb2t1cDtcblxuLyoqXG4gKiBNYW5hZ2VycyBjYWNoZS5cbiAqL1xuXG52YXIgY2FjaGUgPSBleHBvcnRzLm1hbmFnZXJzID0ge307XG5cbi8qKlxuICogTG9va3MgdXAgYW4gZXhpc3RpbmcgYE1hbmFnZXJgIGZvciBtdWx0aXBsZXhpbmcuXG4gKiBJZiB0aGUgdXNlciBzdW1tb25zOlxuICpcbiAqICAgYGlvKCdodHRwOi8vbG9jYWxob3N0L2EnKTtgXG4gKiAgIGBpbygnaHR0cDovL2xvY2FsaG9zdC9iJyk7YFxuICpcbiAqIFdlIHJldXNlIHRoZSBleGlzdGluZyBpbnN0YW5jZSBiYXNlZCBvbiBzYW1lIHNjaGVtZS9wb3J0L2hvc3QsXG4gKiBhbmQgd2UgaW5pdGlhbGl6ZSBzb2NrZXRzIGZvciBlYWNoIG5hbWVzcGFjZS5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvb2t1cCAodXJpLCBvcHRzKSB7XG4gIGlmICh0eXBlb2YgdXJpID09PSAnb2JqZWN0Jykge1xuICAgIG9wdHMgPSB1cmk7XG4gICAgdXJpID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgdmFyIHBhcnNlZCA9IHVybCh1cmkpO1xuICB2YXIgc291cmNlID0gcGFyc2VkLnNvdXJjZTtcbiAgdmFyIGlkID0gcGFyc2VkLmlkO1xuICB2YXIgcGF0aCA9IHBhcnNlZC5wYXRoO1xuICB2YXIgc2FtZU5hbWVzcGFjZSA9IGNhY2hlW2lkXSAmJiBwYXRoIGluIGNhY2hlW2lkXS5uc3BzO1xuICB2YXIgbmV3Q29ubmVjdGlvbiA9IG9wdHMuZm9yY2VOZXcgfHwgb3B0c1snZm9yY2UgbmV3IGNvbm5lY3Rpb24nXSB8fFxuICAgICAgICAgICAgICAgICAgICAgIGZhbHNlID09PSBvcHRzLm11bHRpcGxleCB8fCBzYW1lTmFtZXNwYWNlO1xuXG4gIHZhciBpbztcblxuICBpZiAobmV3Q29ubmVjdGlvbikge1xuICAgIGRlYnVnKCdpZ25vcmluZyBzb2NrZXQgY2FjaGUgZm9yICVzJywgc291cmNlKTtcbiAgICBpbyA9IE1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWNhY2hlW2lkXSkge1xuICAgICAgZGVidWcoJ25ldyBpbyBpbnN0YW5jZSBmb3IgJXMnLCBzb3VyY2UpO1xuICAgICAgY2FjaGVbaWRdID0gTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgIH1cbiAgICBpbyA9IGNhY2hlW2lkXTtcbiAgfVxuICBpZiAocGFyc2VkLnF1ZXJ5ICYmICFvcHRzLnF1ZXJ5KSB7XG4gICAgb3B0cy5xdWVyeSA9IHBhcnNlZC5xdWVyeTtcbiAgfVxuICByZXR1cm4gaW8uc29ja2V0KHBhcnNlZC5wYXRoLCBvcHRzKTtcbn1cblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDtcblxuLyoqXG4gKiBgY29ubmVjdGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVyaVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmNvbm5lY3QgPSBsb29rdXA7XG5cbi8qKlxuICogRXhwb3NlIGNvbnN0cnVjdG9ycyBmb3Igc3RhbmRhbG9uZSBidWlsZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xuZXhwb3J0cy5Tb2NrZXQgPSByZXF1aXJlKCcuL3NvY2tldCcpO1xuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGVpbyA9IHJlcXVpcmUoJ2VuZ2luZS5pby1jbGllbnQnKTtcbnZhciBTb2NrZXQgPSByZXF1aXJlKCcuL3NvY2tldCcpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ3NvY2tldC5pby1wYXJzZXInKTtcbnZhciBvbiA9IHJlcXVpcmUoJy4vb24nKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnY29tcG9uZW50LWJpbmQnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQ6bWFuYWdlcicpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCdpbmRleG9mJyk7XG52YXIgQmFja29mZiA9IHJlcXVpcmUoJ2JhY2tvMicpO1xuXG4vKipcbiAqIElFNisgaGFzT3duUHJvcGVydHlcbiAqL1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0c1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gTWFuYWdlcjtcblxuLyoqXG4gKiBgTWFuYWdlcmAgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGVuZ2luZSBpbnN0YW5jZSBvciBlbmdpbmUgdXJpL29wdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIE1hbmFnZXIgKHVyaSwgb3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFuYWdlcikpIHJldHVybiBuZXcgTWFuYWdlcih1cmksIG9wdHMpO1xuICBpZiAodXJpICYmICgnb2JqZWN0JyA9PT0gdHlwZW9mIHVyaSkpIHtcbiAgICBvcHRzID0gdXJpO1xuICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgfVxuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICBvcHRzLnBhdGggPSBvcHRzLnBhdGggfHwgJy9zb2NrZXQuaW8nO1xuICB0aGlzLm5zcHMgPSB7fTtcbiAgdGhpcy5zdWJzID0gW107XG4gIHRoaXMub3B0cyA9IG9wdHM7XG4gIHRoaXMucmVjb25uZWN0aW9uKG9wdHMucmVjb25uZWN0aW9uICE9PSBmYWxzZSk7XG4gIHRoaXMucmVjb25uZWN0aW9uQXR0ZW1wdHMob3B0cy5yZWNvbm5lY3Rpb25BdHRlbXB0cyB8fCBJbmZpbml0eSk7XG4gIHRoaXMucmVjb25uZWN0aW9uRGVsYXkob3B0cy5yZWNvbm5lY3Rpb25EZWxheSB8fCAxMDAwKTtcbiAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heChvcHRzLnJlY29ubmVjdGlvbkRlbGF5TWF4IHx8IDUwMDApO1xuICB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3Iob3B0cy5yYW5kb21pemF0aW9uRmFjdG9yIHx8IDAuNSk7XG4gIHRoaXMuYmFja29mZiA9IG5ldyBCYWNrb2ZmKHtcbiAgICBtaW46IHRoaXMucmVjb25uZWN0aW9uRGVsYXkoKSxcbiAgICBtYXg6IHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgoKSxcbiAgICBqaXR0ZXI6IHRoaXMucmFuZG9taXphdGlvbkZhY3RvcigpXG4gIH0pO1xuICB0aGlzLnRpbWVvdXQobnVsbCA9PSBvcHRzLnRpbWVvdXQgPyAyMDAwMCA6IG9wdHMudGltZW91dCk7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICB0aGlzLnVyaSA9IHVyaTtcbiAgdGhpcy5jb25uZWN0aW5nID0gW107XG4gIHRoaXMubGFzdFBpbmcgPSBudWxsO1xuICB0aGlzLmVuY29kaW5nID0gZmFsc2U7XG4gIHRoaXMucGFja2V0QnVmZmVyID0gW107XG4gIHZhciBfcGFyc2VyID0gb3B0cy5wYXJzZXIgfHwgcGFyc2VyO1xuICB0aGlzLmVuY29kZXIgPSBuZXcgX3BhcnNlci5FbmNvZGVyKCk7XG4gIHRoaXMuZGVjb2RlciA9IG5ldyBfcGFyc2VyLkRlY29kZXIoKTtcbiAgdGhpcy5hdXRvQ29ubmVjdCA9IG9wdHMuYXV0b0Nvbm5lY3QgIT09IGZhbHNlO1xuICBpZiAodGhpcy5hdXRvQ29ubmVjdCkgdGhpcy5vcGVuKCk7XG59XG5cbi8qKlxuICogUHJvcGFnYXRlIGdpdmVuIGV2ZW50IHRvIHNvY2tldHMgYW5kIGVtaXQgb24gYHRoaXNgXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuZW1pdEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIG5zcCBpbiB0aGlzLm5zcHMpIHtcbiAgICBpZiAoaGFzLmNhbGwodGhpcy5uc3BzLCBuc3ApKSB7XG4gICAgICB0aGlzLm5zcHNbbnNwXS5lbWl0LmFwcGx5KHRoaXMubnNwc1tuc3BdLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBVcGRhdGUgYHNvY2tldC5pZGAgb2YgYWxsIHNvY2tldHNcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTb2NrZXRJZHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIG5zcCBpbiB0aGlzLm5zcHMpIHtcbiAgICBpZiAoaGFzLmNhbGwodGhpcy5uc3BzLCBuc3ApKSB7XG4gICAgICB0aGlzLm5zcHNbbnNwXS5pZCA9IHRoaXMuZ2VuZXJhdGVJZChuc3ApO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBnZW5lcmF0ZSBgc29ja2V0LmlkYCBmb3IgdGhlIGdpdmVuIGBuc3BgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5zcFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIChuc3ApIHtcbiAgcmV0dXJuIChuc3AgPT09ICcvJyA/ICcnIDogKG5zcCArICcjJykpICsgdGhpcy5lbmdpbmUuaWQ7XG59O1xuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihNYW5hZ2VyLnByb3RvdHlwZSk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHJlY29ubmVjdGlvbmAgY29uZmlnLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdHJ1ZS9mYWxzZSBpZiBpdCBzaG91bGQgYXV0b21hdGljYWxseSByZWNvbm5lY3RcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uO1xuICB0aGlzLl9yZWNvbm5lY3Rpb24gPSAhIXY7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSByZWNvbm5lY3Rpb24gYXR0ZW1wdHMgY29uZmlnLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXggcmVjb25uZWN0aW9uIGF0dGVtcHRzIGJlZm9yZSBnaXZpbmcgdXBcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uQXR0ZW1wdHMgPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMgPSB2O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgZGVsYXkgYmV0d2VlbiByZWNvbm5lY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheVxuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3Rpb25EZWxheSA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5O1xuICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheSA9IHY7XG4gIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0TWluKHYpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbk1hbmFnZXIucHJvdG90eXBlLnJhbmRvbWl6YXRpb25GYWN0b3IgPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yO1xuICB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yID0gdjtcbiAgdGhpcy5iYWNrb2ZmICYmIHRoaXMuYmFja29mZi5zZXRKaXR0ZXIodik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXhpbXVtIGRlbGF5IGJldHdlZW4gcmVjb25uZWN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXlcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uRGVsYXlNYXggPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heDtcbiAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXggPSB2O1xuICB0aGlzLmJhY2tvZmYgJiYgdGhpcy5iYWNrb2ZmLnNldE1heCh2KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGNvbm5lY3Rpb24gdGltZW91dC4gYGZhbHNlYCB0byBkaXNhYmxlXG4gKlxuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fdGltZW91dDtcbiAgdGhpcy5fdGltZW91dCA9IHY7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTdGFydHMgdHJ5aW5nIHRvIHJlY29ubmVjdCBpZiByZWNvbm5lY3Rpb24gaXMgZW5hYmxlZCBhbmQgd2UgaGF2ZSBub3RcbiAqIHN0YXJ0ZWQgcmVjb25uZWN0aW5nIHlldFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm1heWJlUmVjb25uZWN0T25PcGVuID0gZnVuY3Rpb24gKCkge1xuICAvLyBPbmx5IHRyeSB0byByZWNvbm5lY3QgaWYgaXQncyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0aW5nXG4gIGlmICghdGhpcy5yZWNvbm5lY3RpbmcgJiYgdGhpcy5fcmVjb25uZWN0aW9uICYmIHRoaXMuYmFja29mZi5hdHRlbXB0cyA9PT0gMCkge1xuICAgIC8vIGtlZXBzIHJlY29ubmVjdGlvbiBmcm9tIGZpcmluZyB0d2ljZSBmb3IgdGhlIHNhbWUgcmVjb25uZWN0aW9uIGxvb3BcbiAgICB0aGlzLnJlY29ubmVjdCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0IGBzb2NrZXRgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbmFsLCBjYWxsYmFja1xuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vcGVuID1cbk1hbmFnZXIucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoZm4sIG9wdHMpIHtcbiAgZGVidWcoJ3JlYWR5U3RhdGUgJXMnLCB0aGlzLnJlYWR5U3RhdGUpO1xuICBpZiAofnRoaXMucmVhZHlTdGF0ZS5pbmRleE9mKCdvcGVuJykpIHJldHVybiB0aGlzO1xuXG4gIGRlYnVnKCdvcGVuaW5nICVzJywgdGhpcy51cmkpO1xuICB0aGlzLmVuZ2luZSA9IGVpbyh0aGlzLnVyaSwgdGhpcy5vcHRzKTtcbiAgdmFyIHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuaW5nJztcbiAgdGhpcy5za2lwUmVjb25uZWN0ID0gZmFsc2U7XG5cbiAgLy8gZW1pdCBgb3BlbmBcbiAgdmFyIG9wZW5TdWIgPSBvbihzb2NrZXQsICdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25vcGVuKCk7XG4gICAgZm4gJiYgZm4oKTtcbiAgfSk7XG5cbiAgLy8gZW1pdCBgY29ubmVjdF9lcnJvcmBcbiAgdmFyIGVycm9yU3ViID0gb24oc29ja2V0LCAnZXJyb3InLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRlYnVnKCdjb25uZWN0X2Vycm9yJyk7XG4gICAgc2VsZi5jbGVhbnVwKCk7XG4gICAgc2VsZi5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gICAgc2VsZi5lbWl0QWxsKCdjb25uZWN0X2Vycm9yJywgZGF0YSk7XG4gICAgaWYgKGZuKSB7XG4gICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdDb25uZWN0aW9uIGVycm9yJyk7XG4gICAgICBlcnIuZGF0YSA9IGRhdGE7XG4gICAgICBmbihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPbmx5IGRvIHRoaXMgaWYgdGhlcmUgaXMgbm8gZm4gdG8gaGFuZGxlIHRoZSBlcnJvclxuICAgICAgc2VsZi5tYXliZVJlY29ubmVjdE9uT3BlbigpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gZW1pdCBgY29ubmVjdF90aW1lb3V0YFxuICBpZiAoZmFsc2UgIT09IHRoaXMuX3RpbWVvdXQpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgZGVidWcoJ2Nvbm5lY3QgYXR0ZW1wdCB3aWxsIHRpbWVvdXQgYWZ0ZXIgJWQnLCB0aW1lb3V0KTtcblxuICAgIC8vIHNldCB0aW1lclxuICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZGVidWcoJ2Nvbm5lY3QgYXR0ZW1wdCB0aW1lZCBvdXQgYWZ0ZXIgJWQnLCB0aW1lb3V0KTtcbiAgICAgIG9wZW5TdWIuZGVzdHJveSgpO1xuICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICBzb2NrZXQuZW1pdCgnZXJyb3InLCAndGltZW91dCcpO1xuICAgICAgc2VsZi5lbWl0QWxsKCdjb25uZWN0X3RpbWVvdXQnLCB0aW1lb3V0KTtcbiAgICB9LCB0aW1lb3V0KTtcblxuICAgIHRoaXMuc3Vicy5wdXNoKHtcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMuc3Vicy5wdXNoKG9wZW5TdWIpO1xuICB0aGlzLnN1YnMucHVzaChlcnJvclN1Yik7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBvcGVuLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ29wZW4nKTtcblxuICAvLyBjbGVhciBvbGQgc3Vic1xuICB0aGlzLmNsZWFudXAoKTtcblxuICAvLyBtYXJrIGFzIG9wZW5cbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW4nO1xuICB0aGlzLmVtaXQoJ29wZW4nKTtcblxuICAvLyBhZGQgbmV3IHN1YnNcbiAgdmFyIHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdkYXRhJywgYmluZCh0aGlzLCAnb25kYXRhJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAncGluZycsIGJpbmQodGhpcywgJ29ucGluZycpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ3BvbmcnLCBiaW5kKHRoaXMsICdvbnBvbmcnKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdlcnJvcicsIGJpbmQodGhpcywgJ29uZXJyb3InKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdjbG9zZScsIGJpbmQodGhpcywgJ29uY2xvc2UnKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbih0aGlzLmRlY29kZXIsICdkZWNvZGVkJywgYmluZCh0aGlzLCAnb25kZWNvZGVkJykpKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBwaW5nLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9ucGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5sYXN0UGluZyA9IG5ldyBEYXRlKCk7XG4gIHRoaXMuZW1pdEFsbCgncGluZycpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbnBvbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdEFsbCgncG9uZycsIG5ldyBEYXRlKCkgLSB0aGlzLmxhc3RQaW5nKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggZGF0YS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbmRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0aGlzLmRlY29kZXIuYWRkKGRhdGEpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2hlbiBwYXJzZXIgZnVsbHkgZGVjb2RlcyBhIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbmRlY29kZWQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHRoaXMuZW1pdCgncGFja2V0JywgcGFja2V0KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc29ja2V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gIGRlYnVnKCdlcnJvcicsIGVycik7XG4gIHRoaXMuZW1pdEFsbCgnZXJyb3InLCBlcnIpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHNvY2tldCBmb3IgdGhlIGdpdmVuIGBuc3BgLlxuICpcbiAqIEByZXR1cm4ge1NvY2tldH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuc29ja2V0ID0gZnVuY3Rpb24gKG5zcCwgb3B0cykge1xuICB2YXIgc29ja2V0ID0gdGhpcy5uc3BzW25zcF07XG4gIGlmICghc29ja2V0KSB7XG4gICAgc29ja2V0ID0gbmV3IFNvY2tldCh0aGlzLCBuc3AsIG9wdHMpO1xuICAgIHRoaXMubnNwc1tuc3BdID0gc29ja2V0O1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3RpbmcnLCBvbkNvbm5lY3RpbmcpO1xuICAgIHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNvY2tldC5pZCA9IHNlbGYuZ2VuZXJhdGVJZChuc3ApO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuYXV0b0Nvbm5lY3QpIHtcbiAgICAgIC8vIG1hbnVhbGx5IGNhbGwgaGVyZSBzaW5jZSBjb25uZWN0aW5nIGV2ZW50IGlzIGZpcmVkIGJlZm9yZSBsaXN0ZW5pbmdcbiAgICAgIG9uQ29ubmVjdGluZygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdGluZyAoKSB7XG4gICAgaWYgKCF+aW5kZXhPZihzZWxmLmNvbm5lY3RpbmcsIHNvY2tldCkpIHtcbiAgICAgIHNlbGYuY29ubmVjdGluZy5wdXNoKHNvY2tldCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNvY2tldDtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBzb2NrZXQgY2xvc2UuXG4gKlxuICogQHBhcmFtIHtTb2NrZXR9IHNvY2tldFxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoc29ja2V0KSB7XG4gIHZhciBpbmRleCA9IGluZGV4T2YodGhpcy5jb25uZWN0aW5nLCBzb2NrZXQpO1xuICBpZiAofmluZGV4KSB0aGlzLmNvbm5lY3Rpbmcuc3BsaWNlKGluZGV4LCAxKTtcbiAgaWYgKHRoaXMuY29ubmVjdGluZy5sZW5ndGgpIHJldHVybjtcblxuICB0aGlzLmNsb3NlKCk7XG59O1xuXG4vKipcbiAqIFdyaXRlcyBhIHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5wYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIGRlYnVnKCd3cml0aW5nIHBhY2tldCAlaicsIHBhY2tldCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKHBhY2tldC5xdWVyeSAmJiBwYWNrZXQudHlwZSA9PT0gMCkgcGFja2V0Lm5zcCArPSAnPycgKyBwYWNrZXQucXVlcnk7XG5cbiAgaWYgKCFzZWxmLmVuY29kaW5nKSB7XG4gICAgLy8gZW5jb2RlLCB0aGVuIHdyaXRlIHRvIGVuZ2luZSB3aXRoIHJlc3VsdFxuICAgIHNlbGYuZW5jb2RpbmcgPSB0cnVlO1xuICAgIHRoaXMuZW5jb2Rlci5lbmNvZGUocGFja2V0LCBmdW5jdGlvbiAoZW5jb2RlZFBhY2tldHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2VsZi5lbmdpbmUud3JpdGUoZW5jb2RlZFBhY2tldHNbaV0sIHBhY2tldC5vcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHNlbGYuZW5jb2RpbmcgPSBmYWxzZTtcbiAgICAgIHNlbGYucHJvY2Vzc1BhY2tldFF1ZXVlKCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7IC8vIGFkZCBwYWNrZXQgdG8gdGhlIHF1ZXVlXG4gICAgc2VsZi5wYWNrZXRCdWZmZXIucHVzaChwYWNrZXQpO1xuICB9XG59O1xuXG4vKipcbiAqIElmIHBhY2tldCBidWZmZXIgaXMgbm9uLWVtcHR5LCBiZWdpbnMgZW5jb2RpbmcgdGhlXG4gKiBuZXh0IHBhY2tldCBpbiBsaW5lLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnByb2Nlc3NQYWNrZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucGFja2V0QnVmZmVyLmxlbmd0aCA+IDAgJiYgIXRoaXMuZW5jb2RpbmcpIHtcbiAgICB2YXIgcGFjayA9IHRoaXMucGFja2V0QnVmZmVyLnNoaWZ0KCk7XG4gICAgdGhpcy5wYWNrZXQocGFjayk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2xlYW4gdXAgdHJhbnNwb3J0IHN1YnNjcmlwdGlvbnMgYW5kIHBhY2tldCBidWZmZXIuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ2NsZWFudXAnKTtcblxuICB2YXIgc3Vic0xlbmd0aCA9IHRoaXMuc3Vicy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHN1YiA9IHRoaXMuc3Vicy5zaGlmdCgpO1xuICAgIHN1Yi5kZXN0cm95KCk7XG4gIH1cblxuICB0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xuICB0aGlzLmVuY29kaW5nID0gZmFsc2U7XG4gIHRoaXMubGFzdFBpbmcgPSBudWxsO1xuXG4gIHRoaXMuZGVjb2Rlci5kZXN0cm95KCk7XG59O1xuXG4vKipcbiAqIENsb3NlIHRoZSBjdXJyZW50IHNvY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5jbG9zZSA9XG5NYW5hZ2VyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygnZGlzY29ubmVjdCcpO1xuICB0aGlzLnNraXBSZWNvbm5lY3QgPSB0cnVlO1xuICB0aGlzLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAvLyBgb25jbG9zZWAgd2lsbCBub3QgZmlyZSBiZWNhdXNlXG4gICAgLy8gYW4gb3BlbiBldmVudCBuZXZlciBoYXBwZW5lZFxuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG4gIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgaWYgKHRoaXMuZW5naW5lKSB0aGlzLmVuZ2luZS5jbG9zZSgpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlbmdpbmUgY2xvc2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgZGVidWcoJ29uY2xvc2UnKTtcblxuICB0aGlzLmNsZWFudXAoKTtcbiAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICB0aGlzLmVtaXQoJ2Nsb3NlJywgcmVhc29uKTtcblxuICBpZiAodGhpcy5fcmVjb25uZWN0aW9uICYmICF0aGlzLnNraXBSZWNvbm5lY3QpIHtcbiAgICB0aGlzLnJlY29ubmVjdCgpO1xuICB9XG59O1xuXG4vKipcbiAqIEF0dGVtcHQgYSByZWNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5yZWNvbm5lY3RpbmcgfHwgdGhpcy5za2lwUmVjb25uZWN0KSByZXR1cm4gdGhpcztcblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHRoaXMuYmFja29mZi5hdHRlbXB0cyA+PSB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgIGRlYnVnKCdyZWNvbm5lY3QgZmFpbGVkJyk7XG4gICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgdGhpcy5lbWl0QWxsKCdyZWNvbm5lY3RfZmFpbGVkJyk7XG4gICAgdGhpcy5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGVsYXkgPSB0aGlzLmJhY2tvZmYuZHVyYXRpb24oKTtcbiAgICBkZWJ1Zygnd2lsbCB3YWl0ICVkbXMgYmVmb3JlIHJlY29ubmVjdCBhdHRlbXB0JywgZGVsYXkpO1xuXG4gICAgdGhpcy5yZWNvbm5lY3RpbmcgPSB0cnVlO1xuICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdCkgcmV0dXJuO1xuXG4gICAgICBkZWJ1ZygnYXR0ZW1wdGluZyByZWNvbm5lY3QnKTtcbiAgICAgIHNlbGYuZW1pdEFsbCgncmVjb25uZWN0X2F0dGVtcHQnLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuICAgICAgc2VsZi5lbWl0QWxsKCdyZWNvbm5lY3RpbmcnLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuXG4gICAgICAvLyBjaGVjayBhZ2FpbiBmb3IgdGhlIGNhc2Ugc29ja2V0IGNsb3NlZCBpbiBhYm92ZSBldmVudHNcbiAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpIHJldHVybjtcblxuICAgICAgc2VsZi5vcGVuKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGRlYnVnKCdyZWNvbm5lY3QgYXR0ZW1wdCBlcnJvcicpO1xuICAgICAgICAgIHNlbGYucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5yZWNvbm5lY3QoKTtcbiAgICAgICAgICBzZWxmLmVtaXRBbGwoJ3JlY29ubmVjdF9lcnJvcicsIGVyci5kYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWJ1ZygncmVjb25uZWN0IHN1Y2Nlc3MnKTtcbiAgICAgICAgICBzZWxmLm9ucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRlbGF5KTtcblxuICAgIHRoaXMuc3Vicy5wdXNoKHtcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlY29ubmVjdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbnJlY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGF0dGVtcHQgPSB0aGlzLmJhY2tvZmYuYXR0ZW1wdHM7XG4gIHRoaXMucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICB0aGlzLnVwZGF0ZVNvY2tldElkcygpO1xuICB0aGlzLmVtaXRBbGwoJ3JlY29ubmVjdCcsIGF0dGVtcHQpO1xufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9uO1xuXG4vKipcbiAqIEhlbHBlciBmb3Igc3Vic2NyaXB0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxFdmVudEVtaXR0ZXJ9IG9iaiB3aXRoIGBFbWl0dGVyYCBtaXhpbiBvciBgRXZlbnRFbWl0dGVyYFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIG9uIChvYmosIGV2LCBmbikge1xuICBvYmoub24oZXYsIGZuKTtcbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICBvYmoucmVtb3ZlTGlzdGVuZXIoZXYsIGZuKTtcbiAgICB9XG4gIH07XG59XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcGFyc2VyID0gcmVxdWlyZSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIHRvQXJyYXkgPSByZXF1aXJlKCd0by1hcnJheScpO1xudmFyIG9uID0gcmVxdWlyZSgnLi9vbicpO1xudmFyIGJpbmQgPSByZXF1aXJlKCdjb21wb25lbnQtYmluZCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDpzb2NrZXQnKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xudmFyIGhhc0JpbiA9IHJlcXVpcmUoJ2hhcy1iaW5hcnkyJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gU29ja2V0O1xuXG4vKipcbiAqIEludGVybmFsIGV2ZW50cyAoYmxhY2tsaXN0ZWQpLlxuICogVGhlc2UgZXZlbnRzIGNhbid0IGJlIGVtaXR0ZWQgYnkgdGhlIHVzZXIuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIGV2ZW50cyA9IHtcbiAgY29ubmVjdDogMSxcbiAgY29ubmVjdF9lcnJvcjogMSxcbiAgY29ubmVjdF90aW1lb3V0OiAxLFxuICBjb25uZWN0aW5nOiAxLFxuICBkaXNjb25uZWN0OiAxLFxuICBlcnJvcjogMSxcbiAgcmVjb25uZWN0OiAxLFxuICByZWNvbm5lY3RfYXR0ZW1wdDogMSxcbiAgcmVjb25uZWN0X2ZhaWxlZDogMSxcbiAgcmVjb25uZWN0X2Vycm9yOiAxLFxuICByZWNvbm5lY3Rpbmc6IDEsXG4gIHBpbmc6IDEsXG4gIHBvbmc6IDFcbn07XG5cbi8qKlxuICogU2hvcnRjdXQgdG8gYEVtaXR0ZXIjZW1pdGAuXG4gKi9cblxudmFyIGVtaXQgPSBFbWl0dGVyLnByb3RvdHlwZS5lbWl0O1xuXG4vKipcbiAqIGBTb2NrZXRgIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gU29ja2V0IChpbywgbnNwLCBvcHRzKSB7XG4gIHRoaXMuaW8gPSBpbztcbiAgdGhpcy5uc3AgPSBuc3A7XG4gIHRoaXMuanNvbiA9IHRoaXM7IC8vIGNvbXBhdFxuICB0aGlzLmlkcyA9IDA7XG4gIHRoaXMuYWNrcyA9IHt9O1xuICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgdGhpcy5mbGFncyA9IHt9O1xuICBpZiAob3B0cyAmJiBvcHRzLnF1ZXJ5KSB7XG4gICAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XG4gIH1cbiAgaWYgKHRoaXMuaW8uYXV0b0Nvbm5lY3QpIHRoaXMub3BlbigpO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihTb2NrZXQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBTdWJzY3JpYmUgdG8gb3BlbiwgY2xvc2UgYW5kIHBhY2tldCBldmVudHNcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnN1YkV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc3VicykgcmV0dXJuO1xuXG4gIHZhciBpbyA9IHRoaXMuaW87XG4gIHRoaXMuc3VicyA9IFtcbiAgICBvbihpbywgJ29wZW4nLCBiaW5kKHRoaXMsICdvbm9wZW4nKSksXG4gICAgb24oaW8sICdwYWNrZXQnLCBiaW5kKHRoaXMsICdvbnBhY2tldCcpKSxcbiAgICBvbihpbywgJ2Nsb3NlJywgYmluZCh0aGlzLCAnb25jbG9zZScpKVxuICBdO1xufTtcblxuLyoqXG4gKiBcIk9wZW5zXCIgdGhlIHNvY2tldC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUub3BlbiA9XG5Tb2NrZXQucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNvbm5lY3RlZCkgcmV0dXJuIHRoaXM7XG5cbiAgdGhpcy5zdWJFdmVudHMoKTtcbiAgdGhpcy5pby5vcGVuKCk7IC8vIGVuc3VyZSBvcGVuXG4gIGlmICgnb3BlbicgPT09IHRoaXMuaW8ucmVhZHlTdGF0ZSkgdGhpcy5vbm9wZW4oKTtcbiAgdGhpcy5lbWl0KCdjb25uZWN0aW5nJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kcyBhIGBtZXNzYWdlYCBldmVudC5cbiAqXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgYXJncy51bnNoaWZ0KCdtZXNzYWdlJyk7XG4gIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE92ZXJyaWRlIGBlbWl0YC5cbiAqIElmIHRoZSBldmVudCBpcyBpbiBgZXZlbnRzYCwgaXQncyBlbWl0dGVkIG5vcm1hbGx5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBuYW1lXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2KSB7XG4gIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoZXYpKSB7XG4gICAgZW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gIHZhciBwYWNrZXQgPSB7XG4gICAgdHlwZTogKHRoaXMuZmxhZ3MuYmluYXJ5ICE9PSB1bmRlZmluZWQgPyB0aGlzLmZsYWdzLmJpbmFyeSA6IGhhc0JpbihhcmdzKSkgPyBwYXJzZXIuQklOQVJZX0VWRU5UIDogcGFyc2VyLkVWRU5ULFxuICAgIGRhdGE6IGFyZ3NcbiAgfTtcblxuICBwYWNrZXQub3B0aW9ucyA9IHt9O1xuICBwYWNrZXQub3B0aW9ucy5jb21wcmVzcyA9ICF0aGlzLmZsYWdzIHx8IGZhbHNlICE9PSB0aGlzLmZsYWdzLmNvbXByZXNzO1xuXG4gIC8vIGV2ZW50IGFjayBjYWxsYmFja1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSkge1xuICAgIGRlYnVnKCdlbWl0dGluZyBwYWNrZXQgd2l0aCBhY2sgaWQgJWQnLCB0aGlzLmlkcyk7XG4gICAgdGhpcy5hY2tzW3RoaXMuaWRzXSA9IGFyZ3MucG9wKCk7XG4gICAgcGFja2V0LmlkID0gdGhpcy5pZHMrKztcbiAgfVxuXG4gIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgIHRoaXMucGFja2V0KHBhY2tldCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZW5kQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgfVxuXG4gIHRoaXMuZmxhZ3MgPSB7fTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZHMgYSBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5wYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHBhY2tldC5uc3AgPSB0aGlzLm5zcDtcbiAgdGhpcy5pby5wYWNrZXQocGFja2V0KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZW5naW5lIGBvcGVuYC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3RyYW5zcG9ydCBpcyBvcGVuIC0gY29ubmVjdGluZycpO1xuXG4gIC8vIHdyaXRlIGNvbm5lY3QgcGFja2V0IGlmIG5lY2Vzc2FyeVxuICBpZiAoJy8nICE9PSB0aGlzLm5zcCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5KSB7XG4gICAgICB2YXIgcXVlcnkgPSB0eXBlb2YgdGhpcy5xdWVyeSA9PT0gJ29iamVjdCcgPyBwYXJzZXFzLmVuY29kZSh0aGlzLnF1ZXJ5KSA6IHRoaXMucXVlcnk7XG4gICAgICBkZWJ1Zygnc2VuZGluZyBjb25uZWN0IHBhY2tldCB3aXRoIHF1ZXJ5ICVzJywgcXVlcnkpO1xuICAgICAgdGhpcy5wYWNrZXQoe3R5cGU6IHBhcnNlci5DT05ORUNULCBxdWVyeTogcXVlcnl9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYWNrZXQoe3R5cGU6IHBhcnNlci5DT05ORUNUfSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGVuZ2luZSBgY2xvc2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByZWFzb25cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgZGVidWcoJ2Nsb3NlICglcyknLCByZWFzb24pO1xuICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gIGRlbGV0ZSB0aGlzLmlkO1xuICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnLCByZWFzb24pO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2l0aCBzb2NrZXQgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25wYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHZhciBzYW1lTmFtZXNwYWNlID0gcGFja2V0Lm5zcCA9PT0gdGhpcy5uc3A7XG4gIHZhciByb290TmFtZXNwYWNlRXJyb3IgPSBwYWNrZXQudHlwZSA9PT0gcGFyc2VyLkVSUk9SICYmIHBhY2tldC5uc3AgPT09ICcvJztcblxuICBpZiAoIXNhbWVOYW1lc3BhY2UgJiYgIXJvb3ROYW1lc3BhY2VFcnJvcikgcmV0dXJuO1xuXG4gIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICBjYXNlIHBhcnNlci5DT05ORUNUOlxuICAgICAgdGhpcy5vbmNvbm5lY3QoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuRVZFTlQ6XG4gICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuQklOQVJZX0VWRU5UOlxuICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkFDSzpcbiAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuQklOQVJZX0FDSzpcbiAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuRElTQ09OTkVDVDpcbiAgICAgIHRoaXMub25kaXNjb25uZWN0KCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkVSUk9SOlxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHBhY2tldC5kYXRhKTtcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25ldmVudCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdmFyIGFyZ3MgPSBwYWNrZXQuZGF0YSB8fCBbXTtcbiAgZGVidWcoJ2VtaXR0aW5nIGV2ZW50ICVqJywgYXJncyk7XG5cbiAgaWYgKG51bGwgIT0gcGFja2V0LmlkKSB7XG4gICAgZGVidWcoJ2F0dGFjaGluZyBhY2sgY2FsbGJhY2sgdG8gZXZlbnQnKTtcbiAgICBhcmdzLnB1c2godGhpcy5hY2socGFja2V0LmlkKSk7XG4gIH1cblxuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICBlbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5wdXNoKGFyZ3MpO1xuICB9XG59O1xuXG4vKipcbiAqIFByb2R1Y2VzIGFuIGFjayBjYWxsYmFjayB0byBlbWl0IHdpdGggYW4gZXZlbnQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5hY2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgc2VudCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIC8vIHByZXZlbnQgZG91YmxlIGNhbGxiYWNrc1xuICAgIGlmIChzZW50KSByZXR1cm47XG4gICAgc2VudCA9IHRydWU7XG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gICAgZGVidWcoJ3NlbmRpbmcgYWNrICVqJywgYXJncyk7XG5cbiAgICBzZWxmLnBhY2tldCh7XG4gICAgICB0eXBlOiBoYXNCaW4oYXJncykgPyBwYXJzZXIuQklOQVJZX0FDSyA6IHBhcnNlci5BQ0ssXG4gICAgICBpZDogaWQsXG4gICAgICBkYXRhOiBhcmdzXG4gICAgfSk7XG4gIH07XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGFja25vd2xlZ2VtZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25hY2sgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHZhciBhY2sgPSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBhY2spIHtcbiAgICBkZWJ1ZygnY2FsbGluZyBhY2sgJXMgd2l0aCAlaicsIHBhY2tldC5pZCwgcGFja2V0LmRhdGEpO1xuICAgIGFjay5hcHBseSh0aGlzLCBwYWNrZXQuZGF0YSk7XG4gICAgZGVsZXRlIHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICB9IGVsc2Uge1xuICAgIGRlYnVnKCdiYWQgYWNrICVzJywgcGFja2V0LmlkKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgY29ubmVjdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuICB0aGlzLmRpc2Nvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmVtaXQoJ2Nvbm5lY3QnKTtcbiAgdGhpcy5lbWl0QnVmZmVyZWQoKTtcbn07XG5cbi8qKlxuICogRW1pdCBidWZmZXJlZCBldmVudHMgKHJlY2VpdmVkIGFuZCBlbWl0dGVkKS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmVtaXRCdWZmZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLnJlY2VpdmVCdWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICBlbWl0LmFwcGx5KHRoaXMsIHRoaXMucmVjZWl2ZUJ1ZmZlcltpXSk7XG4gIH1cbiAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuc2VuZEJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucGFja2V0KHRoaXMuc2VuZEJ1ZmZlcltpXSk7XG4gIH1cbiAgdGhpcy5zZW5kQnVmZmVyID0gW107XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHNlcnZlciBkaXNjb25uZWN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1Zygnc2VydmVyIGRpc2Nvbm5lY3QgKCVzKScsIHRoaXMubnNwKTtcbiAgdGhpcy5kZXN0cm95KCk7XG4gIHRoaXMub25jbG9zZSgnaW8gc2VydmVyIGRpc2Nvbm5lY3QnKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZm9yY2VkIGNsaWVudC9zZXJ2ZXIgc2lkZSBkaXNjb25uZWN0aW9ucyxcbiAqIHRoaXMgbWV0aG9kIGVuc3VyZXMgdGhlIG1hbmFnZXIgc3RvcHMgdHJhY2tpbmcgdXMgYW5kXG4gKiB0aGF0IHJlY29ubmVjdGlvbnMgZG9uJ3QgZ2V0IHRyaWdnZXJlZCBmb3IgdGhpcy5cbiAqXG4gKiBAYXBpIHByaXZhdGUuXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zdWJzKSB7XG4gICAgLy8gY2xlYW4gc3Vic2NyaXB0aW9ucyB0byBhdm9pZCByZWNvbm5lY3Rpb25zXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc3Vic1tpXS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuc3VicyA9IG51bGw7XG4gIH1cblxuICB0aGlzLmlvLmRlc3Ryb3kodGhpcyk7XG59O1xuXG4vKipcbiAqIERpc2Nvbm5lY3RzIHRoZSBzb2NrZXQgbWFudWFsbHkuXG4gKlxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuY2xvc2UgPVxuU29ja2V0LnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICBkZWJ1ZygncGVyZm9ybWluZyBkaXNjb25uZWN0ICglcyknLCB0aGlzLm5zcCk7XG4gICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBwYXJzZXIuRElTQ09OTkVDVCB9KTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBzb2NrZXQgZnJvbSBwb29sXG4gIHRoaXMuZGVzdHJveSgpO1xuXG4gIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgIC8vIGZpcmUgZXZlbnRzXG4gICAgdGhpcy5vbmNsb3NlKCdpbyBjbGllbnQgZGlzY29ubmVjdCcpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjb21wcmVzcyBmbGFnLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaWYgYHRydWVgLCBjb21wcmVzc2VzIHRoZSBzZW5kaW5nIGRhdGFcbiAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNvbXByZXNzID0gZnVuY3Rpb24gKGNvbXByZXNzKSB7XG4gIHRoaXMuZmxhZ3MuY29tcHJlc3MgPSBjb21wcmVzcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGJpbmFyeSBmbGFnXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSB3aGV0aGVyIHRoZSBlbWl0dGVkIGRhdGEgY29udGFpbnMgYmluYXJ5XG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5iaW5hcnkgPSBmdW5jdGlvbiAoYmluYXJ5KSB7XG4gIHRoaXMuZmxhZ3MuYmluYXJ5ID0gYmluYXJ5O1xuICByZXR1cm4gdGhpcztcbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcGFyc2V1cmkgPSByZXF1aXJlKCdwYXJzZXVyaScpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDp1cmwnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVybDtcblxuLyoqXG4gKiBVUkwgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBBbiBvYmplY3QgbWVhbnQgdG8gbWltaWMgd2luZG93LmxvY2F0aW9uLlxuICogICAgICAgICAgICAgICAgIERlZmF1bHRzIHRvIHdpbmRvdy5sb2NhdGlvbi5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gdXJsICh1cmksIGxvYykge1xuICB2YXIgb2JqID0gdXJpO1xuXG4gIC8vIGRlZmF1bHQgdG8gd2luZG93LmxvY2F0aW9uXG4gIGxvYyA9IGxvYyB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhdGlvbik7XG4gIGlmIChudWxsID09IHVyaSkgdXJpID0gbG9jLnByb3RvY29sICsgJy8vJyArIGxvYy5ob3N0O1xuXG4gIC8vIHJlbGF0aXZlIHBhdGggc3VwcG9ydFxuICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB1cmkpIHtcbiAgICBpZiAoJy8nID09PSB1cmkuY2hhckF0KDApKSB7XG4gICAgICBpZiAoJy8nID09PSB1cmkuY2hhckF0KDEpKSB7XG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIHVyaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVyaSA9IGxvYy5ob3N0ICsgdXJpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghL14oaHR0cHM/fHdzcz8pOlxcL1xcLy8udGVzdCh1cmkpKSB7XG4gICAgICBkZWJ1ZygncHJvdG9jb2wtbGVzcyB1cmwgJXMnLCB1cmkpO1xuICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbG9jKSB7XG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArICcvLycgKyB1cmk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmkgPSAnaHR0cHM6Ly8nICsgdXJpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHBhcnNlXG4gICAgZGVidWcoJ3BhcnNlICVzJywgdXJpKTtcbiAgICBvYmogPSBwYXJzZXVyaSh1cmkpO1xuICB9XG5cbiAgLy8gbWFrZSBzdXJlIHdlIHRyZWF0IGBsb2NhbGhvc3Q6ODBgIGFuZCBgbG9jYWxob3N0YCBlcXVhbGx5XG4gIGlmICghb2JqLnBvcnQpIHtcbiAgICBpZiAoL14oaHR0cHx3cykkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgIG9iai5wb3J0ID0gJzgwJztcbiAgICB9IGVsc2UgaWYgKC9eKGh0dHB8d3MpcyQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgb2JqLnBvcnQgPSAnNDQzJztcbiAgICB9XG4gIH1cblxuICBvYmoucGF0aCA9IG9iai5wYXRoIHx8ICcvJztcblxuICB2YXIgaXB2NiA9IG9iai5ob3N0LmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHZhciBob3N0ID0gaXB2NiA/ICdbJyArIG9iai5ob3N0ICsgJ10nIDogb2JqLmhvc3Q7XG5cbiAgLy8gZGVmaW5lIHVuaXF1ZSBpZFxuICBvYmouaWQgPSBvYmoucHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAnOicgKyBvYmoucG9ydDtcbiAgLy8gZGVmaW5lIGhyZWZcbiAgb2JqLmhyZWYgPSBvYmoucHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAobG9jICYmIGxvYy5wb3J0ID09PSBvYmoucG9ydCA/ICcnIDogKCc6JyArIG9iai5wb3J0KSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cbiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGxvZyguLi5hcmdzKSB7XG5cdC8vIFRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG5cdC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG5cdHJldHVybiB0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiZcblx0XHRjb25zb2xlLmxvZyAmJlxuXHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuXHRPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goa2V5ID0+IHtcblx0XHRjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG5cdH0pO1xuXG5cdC8qKlxuXHQqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cblx0Ki9cblx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzID0gW107XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcuZW5hYmxlZCA9IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcblx0XHRkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cdFx0ZGVidWcuZXh0ZW5kID0gZXh0ZW5kO1xuXHRcdC8vIERlYnVnLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuXHRcdC8vIGRlYnVnLnJhd0xvZyA9IHJhd0xvZztcblxuXHRcdC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnN0IGluZGV4ID0gY3JlYXRlRGVidWcuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGNyZWF0ZURlYnVnLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXNbaV07XG5cdFx0XHRpbnN0YW5jZS5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCIvKmdsb2JhbCBCbG9iLEZpbGUqL1xuXG4vKipcbiAqIE1vZHVsZSByZXF1aXJlbWVudHNcbiAqL1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbnZhciBpc0J1ZiA9IHJlcXVpcmUoJy4vaXMtYnVmZmVyJyk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHdpdGhOYXRpdmVCbG9iID0gdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEJsb2IpID09PSAnW29iamVjdCBCbG9iQ29uc3RydWN0b3JdJyk7XG52YXIgd2l0aE5hdGl2ZUZpbGUgPSB0eXBlb2YgRmlsZSA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIEZpbGUgIT09ICd1bmRlZmluZWQnICYmIHRvU3RyaW5nLmNhbGwoRmlsZSkgPT09ICdbb2JqZWN0IEZpbGVDb25zdHJ1Y3Rvcl0nKTtcblxuLyoqXG4gKiBSZXBsYWNlcyBldmVyeSBCdWZmZXIgfCBBcnJheUJ1ZmZlciBpbiBwYWNrZXQgd2l0aCBhIG51bWJlcmVkIHBsYWNlaG9sZGVyLlxuICogQW55dGhpbmcgd2l0aCBibG9icyBvciBmaWxlcyBzaG91bGQgYmUgZmVkIHRocm91Z2ggcmVtb3ZlQmxvYnMgYmVmb3JlIGNvbWluZ1xuICogaGVyZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gc29ja2V0LmlvIGV2ZW50IHBhY2tldFxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGRlY29uc3RydWN0ZWQgcGFja2V0IGFuZCBsaXN0IG9mIGJ1ZmZlcnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCkge1xuICB2YXIgYnVmZmVycyA9IFtdO1xuICB2YXIgcGFja2V0RGF0YSA9IHBhY2tldC5kYXRhO1xuICB2YXIgcGFjayA9IHBhY2tldDtcbiAgcGFjay5kYXRhID0gX2RlY29uc3RydWN0UGFja2V0KHBhY2tldERhdGEsIGJ1ZmZlcnMpO1xuICBwYWNrLmF0dGFjaG1lbnRzID0gYnVmZmVycy5sZW5ndGg7IC8vIG51bWJlciBvZiBiaW5hcnkgJ2F0dGFjaG1lbnRzJ1xuICByZXR1cm4ge3BhY2tldDogcGFjaywgYnVmZmVyczogYnVmZmVyc307XG59O1xuXG5mdW5jdGlvbiBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICBpZiAoIWRhdGEpIHJldHVybiBkYXRhO1xuXG4gIGlmIChpc0J1ZihkYXRhKSkge1xuICAgIHZhciBwbGFjZWhvbGRlciA9IHsgX3BsYWNlaG9sZGVyOiB0cnVlLCBudW06IGJ1ZmZlcnMubGVuZ3RoIH07XG4gICAgYnVmZmVycy5wdXNoKGRhdGEpO1xuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgfSBlbHNlIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgdmFyIG5ld0RhdGEgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbmV3RGF0YVtpXSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICYmICEoZGF0YSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgdmFyIG5ld0RhdGEgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgbmV3RGF0YVtrZXldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdEYXRhO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFJlY29uc3RydWN0cyBhIGJpbmFyeSBwYWNrZXQgZnJvbSBpdHMgcGxhY2Vob2xkZXIgcGFja2V0IGFuZCBidWZmZXJzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIGV2ZW50IHBhY2tldCB3aXRoIHBsYWNlaG9sZGVyc1xuICogQHBhcmFtIHtBcnJheX0gYnVmZmVycyAtIGJpbmFyeSBidWZmZXJzIHRvIHB1dCBpbiBwbGFjZWhvbGRlciBwb3NpdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjb25zdHJ1Y3RlZCBwYWNrZXRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5yZWNvbnN0cnVjdFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCwgYnVmZmVycykge1xuICBwYWNrZXQuZGF0YSA9IF9yZWNvbnN0cnVjdFBhY2tldChwYWNrZXQuZGF0YSwgYnVmZmVycyk7XG4gIHBhY2tldC5hdHRhY2htZW50cyA9IHVuZGVmaW5lZDsgLy8gbm8gbG9uZ2VyIHVzZWZ1bFxuICByZXR1cm4gcGFja2V0O1xufTtcblxuZnVuY3Rpb24gX3JlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgaWYgKCFkYXRhKSByZXR1cm4gZGF0YTtcblxuICBpZiAoZGF0YSAmJiBkYXRhLl9wbGFjZWhvbGRlcikge1xuICAgIHJldHVybiBidWZmZXJzW2RhdGEubnVtXTsgLy8gYXBwcm9wcmlhdGUgYnVmZmVyIChzaG91bGQgYmUgbmF0dXJhbCBvcmRlciBhbnl3YXkpXG4gIH0gZWxzZSBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgZGF0YVtpXSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIGRhdGFba2V5XSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IHJlbW92ZXMgQmxvYnMgb3IgRmlsZXMgZnJvbSBkYXRhIHZpYVxuICogRmlsZVJlYWRlcidzIHJlYWRBc0FycmF5QnVmZmVyIG1ldGhvZC4gVXNlZCBiZWZvcmUgZW5jb2RpbmdcbiAqIGRhdGEgYXMgbXNncGFjay4gQ2FsbHMgY2FsbGJhY2sgd2l0aCB0aGUgYmxvYmxlc3MgZGF0YS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmVtb3ZlQmxvYnMgPSBmdW5jdGlvbihkYXRhLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiBfcmVtb3ZlQmxvYnMob2JqLCBjdXJLZXksIGNvbnRhaW5pbmdPYmplY3QpIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIG9iajtcblxuICAgIC8vIGNvbnZlcnQgYW55IGJsb2JcbiAgICBpZiAoKHdpdGhOYXRpdmVCbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKSkge1xuICAgICAgcGVuZGluZ0Jsb2JzKys7XG5cbiAgICAgIC8vIGFzeW5jIGZpbGVyZWFkZXJcbiAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7IC8vIHRoaXMucmVzdWx0ID09IGFycmF5YnVmZmVyXG4gICAgICAgIGlmIChjb250YWluaW5nT2JqZWN0KSB7XG4gICAgICAgICAgY29udGFpbmluZ09iamVjdFtjdXJLZXldID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYmxvYmxlc3NEYXRhID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub3RoaW5nIHBlbmRpbmcgaXRzIGNhbGxiYWNrIHRpbWVcbiAgICAgICAgaWYoISAtLXBlbmRpbmdCbG9icykge1xuICAgICAgICAgIGNhbGxiYWNrKGJsb2JsZXNzRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIob2JqKTsgLy8gYmxvYiAtPiBhcnJheWJ1ZmZlclxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7IC8vIGhhbmRsZSBhcnJheVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX3JlbW92ZUJsb2JzKG9ialtpXSwgaSwgb2JqKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICFpc0J1ZihvYmopKSB7IC8vIGFuZCBvYmplY3RcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgX3JlbW92ZUJsb2JzKG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHBlbmRpbmdCbG9icyA9IDA7XG4gIHZhciBibG9ibGVzc0RhdGEgPSBkYXRhO1xuICBfcmVtb3ZlQmxvYnMoYmxvYmxlc3NEYXRhKTtcbiAgaWYgKCFwZW5kaW5nQmxvYnMpIHtcbiAgICBjYWxsYmFjayhibG9ibGVzc0RhdGEpO1xuICB9XG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIGJpbmFyeSA9IHJlcXVpcmUoJy4vYmluYXJ5Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbnZhciBpc0J1ZiA9IHJlcXVpcmUoJy4vaXMtYnVmZmVyJyk7XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMucHJvdG9jb2wgPSA0O1xuXG4vKipcbiAqIFBhY2tldCB0eXBlcy5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMudHlwZXMgPSBbXG4gICdDT05ORUNUJyxcbiAgJ0RJU0NPTk5FQ1QnLFxuICAnRVZFTlQnLFxuICAnQUNLJyxcbiAgJ0VSUk9SJyxcbiAgJ0JJTkFSWV9FVkVOVCcsXG4gICdCSU5BUllfQUNLJ1xuXTtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgY29ubmVjdGAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkNPTk5FQ1QgPSAwO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBkaXNjb25uZWN0YC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRElTQ09OTkVDVCA9IDE7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGV2ZW50YC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRVZFTlQgPSAyO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBhY2tgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5BQ0sgPSAzO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBlcnJvcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkVSUk9SID0gNDtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSAnYmluYXJ5IGV2ZW50J1xuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5CSU5BUllfRVZFTlQgPSA1O1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBiaW5hcnkgYWNrYC4gRm9yIGFja3Mgd2l0aCBiaW5hcnkgYXJndW1lbnRzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5CSU5BUllfQUNLID0gNjtcblxuLyoqXG4gKiBFbmNvZGVyIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5FbmNvZGVyID0gRW5jb2RlcjtcblxuLyoqXG4gKiBEZWNvZGVyIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5EZWNvZGVyID0gRGVjb2RlcjtcblxuLyoqXG4gKiBBIHNvY2tldC5pbyBFbmNvZGVyIGluc3RhbmNlXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbmNvZGVyKCkge31cblxudmFyIEVSUk9SX1BBQ0tFVCA9IGV4cG9ydHMuRVJST1IgKyAnXCJlbmNvZGUgZXJyb3JcIic7XG5cbi8qKlxuICogRW5jb2RlIGEgcGFja2V0IGFzIGEgc2luZ2xlIHN0cmluZyBpZiBub24tYmluYXJ5LCBvciBhcyBhXG4gKiBidWZmZXIgc2VxdWVuY2UsIGRlcGVuZGluZyBvbiBwYWNrZXQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gcGFja2V0IG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBoYW5kbGUgZW5jb2RpbmdzIChsaWtlbHkgZW5naW5lLndyaXRlKVxuICogQHJldHVybiBDYWxscyBjYWxsYmFjayB3aXRoIEFycmF5IG9mIGVuY29kaW5nc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbmNvZGVyLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbihvYmosIGNhbGxiYWNrKXtcbiAgZGVidWcoJ2VuY29kaW5nIHBhY2tldCAlaicsIG9iaik7XG5cbiAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09PSBvYmoudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT09IG9iai50eXBlKSB7XG4gICAgZW5jb2RlQXNCaW5hcnkob2JqLCBjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGVuY29kaW5nID0gZW5jb2RlQXNTdHJpbmcob2JqKTtcbiAgICBjYWxsYmFjayhbZW5jb2RpbmddKTtcbiAgfVxufTtcblxuLyoqXG4gKiBFbmNvZGUgcGFja2V0IGFzIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGVuY29kZWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGVuY29kZUFzU3RyaW5nKG9iaikge1xuXG4gIC8vIGZpcnN0IGlzIHR5cGVcbiAgdmFyIHN0ciA9ICcnICsgb2JqLnR5cGU7XG5cbiAgLy8gYXR0YWNobWVudHMgaWYgd2UgaGF2ZSB0aGVtXG4gIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PT0gb2JqLnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09PSBvYmoudHlwZSkge1xuICAgIHN0ciArPSBvYmouYXR0YWNobWVudHMgKyAnLSc7XG4gIH1cblxuICAvLyBpZiB3ZSBoYXZlIGEgbmFtZXNwYWNlIG90aGVyIHRoYW4gYC9gXG4gIC8vIHdlIGFwcGVuZCBpdCBmb2xsb3dlZCBieSBhIGNvbW1hIGAsYFxuICBpZiAob2JqLm5zcCAmJiAnLycgIT09IG9iai5uc3ApIHtcbiAgICBzdHIgKz0gb2JqLm5zcCArICcsJztcbiAgfVxuXG4gIC8vIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IHRoZSBpZFxuICBpZiAobnVsbCAhPSBvYmouaWQpIHtcbiAgICBzdHIgKz0gb2JqLmlkO1xuICB9XG5cbiAgLy8ganNvbiBkYXRhXG4gIGlmIChudWxsICE9IG9iai5kYXRhKSB7XG4gICAgdmFyIHBheWxvYWQgPSB0cnlTdHJpbmdpZnkob2JqLmRhdGEpO1xuICAgIGlmIChwYXlsb2FkICE9PSBmYWxzZSkge1xuICAgICAgc3RyICs9IHBheWxvYWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBFUlJPUl9QQUNLRVQ7XG4gICAgfVxuICB9XG5cbiAgZGVidWcoJ2VuY29kZWQgJWogYXMgJXMnLCBvYmosIHN0cik7XG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIHRyeVN0cmluZ2lmeShzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3RyKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmNvZGUgcGFja2V0IGFzICdidWZmZXIgc2VxdWVuY2UnIGJ5IHJlbW92aW5nIGJsb2JzLCBhbmRcbiAqIGRlY29uc3RydWN0aW5nIHBhY2tldCBpbnRvIG9iamVjdCB3aXRoIHBsYWNlaG9sZGVycyBhbmRcbiAqIGEgbGlzdCBvZiBidWZmZXJzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEByZXR1cm4ge0J1ZmZlcn0gZW5jb2RlZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZW5jb2RlQXNCaW5hcnkob2JqLCBjYWxsYmFjaykge1xuXG4gIGZ1bmN0aW9uIHdyaXRlRW5jb2RpbmcoYmxvYmxlc3NEYXRhKSB7XG4gICAgdmFyIGRlY29uc3RydWN0aW9uID0gYmluYXJ5LmRlY29uc3RydWN0UGFja2V0KGJsb2JsZXNzRGF0YSk7XG4gICAgdmFyIHBhY2sgPSBlbmNvZGVBc1N0cmluZyhkZWNvbnN0cnVjdGlvbi5wYWNrZXQpO1xuICAgIHZhciBidWZmZXJzID0gZGVjb25zdHJ1Y3Rpb24uYnVmZmVycztcblxuICAgIGJ1ZmZlcnMudW5zaGlmdChwYWNrKTsgLy8gYWRkIHBhY2tldCBpbmZvIHRvIGJlZ2lubmluZyBvZiBkYXRhIGxpc3RcbiAgICBjYWxsYmFjayhidWZmZXJzKTsgLy8gd3JpdGUgYWxsIHRoZSBidWZmZXJzXG4gIH1cblxuICBiaW5hcnkucmVtb3ZlQmxvYnMob2JqLCB3cml0ZUVuY29kaW5nKTtcbn1cblxuLyoqXG4gKiBBIHNvY2tldC5pbyBEZWNvZGVyIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBkZWNvZGVyXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIERlY29kZXIoKSB7XG4gIHRoaXMucmVjb25zdHJ1Y3RvciA9IG51bGw7XG59XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYCB3aXRoIERlY29kZXIuXG4gKi9cblxuRW1pdHRlcihEZWNvZGVyLnByb3RvdHlwZSk7XG5cbi8qKlxuICogRGVjb2RlcyBhbiBlbmNvZGVkIHBhY2tldCBzdHJpbmcgaW50byBwYWNrZXQgSlNPTi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqIC0gZW5jb2RlZCBwYWNrZXRcbiAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkRlY29kZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG9iaikge1xuICB2YXIgcGFja2V0O1xuICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcbiAgICBwYWNrZXQgPSBkZWNvZGVTdHJpbmcob2JqKTtcbiAgICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT09IHBhY2tldC50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PT0gcGFja2V0LnR5cGUpIHsgLy8gYmluYXJ5IHBhY2tldCdzIGpzb25cbiAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG5ldyBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCk7XG5cbiAgICAgIC8vIG5vIGF0dGFjaG1lbnRzLCBsYWJlbGVkIGJpbmFyeSBidXQgbm8gYmluYXJ5IGRhdGEgdG8gZm9sbG93XG4gICAgICBpZiAodGhpcy5yZWNvbnN0cnVjdG9yLnJlY29uUGFjay5hdHRhY2htZW50cyA9PT0gMCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG5vbi1iaW5hcnkgZnVsbCBwYWNrZXRcbiAgICAgIHRoaXMuZW1pdCgnZGVjb2RlZCcsIHBhY2tldCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzQnVmKG9iaikgfHwgb2JqLmJhc2U2NCkgeyAvLyByYXcgYmluYXJ5IGRhdGFcbiAgICBpZiAoIXRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnb3QgYmluYXJ5IGRhdGEgd2hlbiBub3QgcmVjb25zdHJ1Y3RpbmcgYSBwYWNrZXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFja2V0ID0gdGhpcy5yZWNvbnN0cnVjdG9yLnRha2VCaW5hcnlEYXRhKG9iaik7XG4gICAgICBpZiAocGFja2V0KSB7IC8vIHJlY2VpdmVkIGZpbmFsIGJ1ZmZlclxuICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdHlwZTogJyArIG9iaik7XG4gIH1cbn07XG5cbi8qKlxuICogRGVjb2RlIGEgcGFja2V0IFN0cmluZyAoSlNPTiBkYXRhKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBkZWNvZGVTdHJpbmcoc3RyKSB7XG4gIHZhciBpID0gMDtcbiAgLy8gbG9vayB1cCB0eXBlXG4gIHZhciBwID0ge1xuICAgIHR5cGU6IE51bWJlcihzdHIuY2hhckF0KDApKVxuICB9O1xuXG4gIGlmIChudWxsID09IGV4cG9ydHMudHlwZXNbcC50eXBlXSkge1xuICAgIHJldHVybiBlcnJvcigndW5rbm93biBwYWNrZXQgdHlwZSAnICsgcC50eXBlKTtcbiAgfVxuXG4gIC8vIGxvb2sgdXAgYXR0YWNobWVudHMgaWYgdHlwZSBiaW5hcnlcbiAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09PSBwLnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09PSBwLnR5cGUpIHtcbiAgICB2YXIgYnVmID0gJyc7XG4gICAgd2hpbGUgKHN0ci5jaGFyQXQoKytpKSAhPT0gJy0nKSB7XG4gICAgICBidWYgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgIGlmIChpID09IHN0ci5sZW5ndGgpIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoYnVmICE9IE51bWJlcihidWYpIHx8IHN0ci5jaGFyQXQoaSkgIT09ICctJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGF0dGFjaG1lbnRzJyk7XG4gICAgfVxuICAgIHAuYXR0YWNobWVudHMgPSBOdW1iZXIoYnVmKTtcbiAgfVxuXG4gIC8vIGxvb2sgdXAgbmFtZXNwYWNlIChpZiBhbnkpXG4gIGlmICgnLycgPT09IHN0ci5jaGFyQXQoaSArIDEpKSB7XG4gICAgcC5uc3AgPSAnJztcbiAgICB3aGlsZSAoKytpKSB7XG4gICAgICB2YXIgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICBpZiAoJywnID09PSBjKSBicmVhaztcbiAgICAgIHAubnNwICs9IGM7XG4gICAgICBpZiAoaSA9PT0gc3RyLmxlbmd0aCkgYnJlYWs7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHAubnNwID0gJy8nO1xuICB9XG5cbiAgLy8gbG9vayB1cCBpZFxuICB2YXIgbmV4dCA9IHN0ci5jaGFyQXQoaSArIDEpO1xuICBpZiAoJycgIT09IG5leHQgJiYgTnVtYmVyKG5leHQpID09IG5leHQpIHtcbiAgICBwLmlkID0gJyc7XG4gICAgd2hpbGUgKCsraSkge1xuICAgICAgdmFyIGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgaWYgKG51bGwgPT0gYyB8fCBOdW1iZXIoYykgIT0gYykge1xuICAgICAgICAtLWk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcC5pZCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpIGJyZWFrO1xuICAgIH1cbiAgICBwLmlkID0gTnVtYmVyKHAuaWQpO1xuICB9XG5cbiAgLy8gbG9vayB1cCBqc29uIGRhdGFcbiAgaWYgKHN0ci5jaGFyQXQoKytpKSkge1xuICAgIHZhciBwYXlsb2FkID0gdHJ5UGFyc2Uoc3RyLnN1YnN0cihpKSk7XG4gICAgdmFyIGlzUGF5bG9hZFZhbGlkID0gcGF5bG9hZCAhPT0gZmFsc2UgJiYgKHAudHlwZSA9PT0gZXhwb3J0cy5FUlJPUiB8fCBpc0FycmF5KHBheWxvYWQpKTtcbiAgICBpZiAoaXNQYXlsb2FkVmFsaWQpIHtcbiAgICAgIHAuZGF0YSA9IHBheWxvYWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlcnJvcignaW52YWxpZCBwYXlsb2FkJyk7XG4gICAgfVxuICB9XG5cbiAgZGVidWcoJ2RlY29kZWQgJXMgYXMgJWonLCBzdHIsIHApO1xuICByZXR1cm4gcDtcbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2Uoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWFsbG9jYXRlcyBhIHBhcnNlcidzIHJlc291cmNlc1xuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRGVjb2Rlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5yZWNvbnN0cnVjdG9yLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBIG1hbmFnZXIgb2YgYSBiaW5hcnkgZXZlbnQncyAnYnVmZmVyIHNlcXVlbmNlJy4gU2hvdWxkXG4gKiBiZSBjb25zdHJ1Y3RlZCB3aGVuZXZlciBhIHBhY2tldCBvZiB0eXBlIEJJTkFSWV9FVkVOVCBpc1xuICogZGVjb2RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtCaW5hcnlSZWNvbnN0cnVjdG9yfSBpbml0aWFsaXplZCByZWNvbnN0cnVjdG9yXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCkge1xuICB0aGlzLnJlY29uUGFjayA9IHBhY2tldDtcbiAgdGhpcy5idWZmZXJzID0gW107XG59XG5cbi8qKlxuICogTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGJpbmFyeSBkYXRhIHJlY2VpdmVkIGZyb20gY29ubmVjdGlvblxuICogYWZ0ZXIgYSBCSU5BUllfRVZFTlQgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyIHwgQXJyYXlCdWZmZXJ9IGJpbkRhdGEgLSB0aGUgcmF3IGJpbmFyeSBkYXRhIHJlY2VpdmVkXG4gKiBAcmV0dXJuIHtudWxsIHwgT2JqZWN0fSByZXR1cm5zIG51bGwgaWYgbW9yZSBiaW5hcnkgZGF0YSBpcyBleHBlY3RlZCBvclxuICogICBhIHJlY29uc3RydWN0ZWQgcGFja2V0IG9iamVjdCBpZiBhbGwgYnVmZmVycyBoYXZlIGJlZW4gcmVjZWl2ZWQuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5CaW5hcnlSZWNvbnN0cnVjdG9yLnByb3RvdHlwZS50YWtlQmluYXJ5RGF0YSA9IGZ1bmN0aW9uKGJpbkRhdGEpIHtcbiAgdGhpcy5idWZmZXJzLnB1c2goYmluRGF0YSk7XG4gIGlmICh0aGlzLmJ1ZmZlcnMubGVuZ3RoID09PSB0aGlzLnJlY29uUGFjay5hdHRhY2htZW50cykgeyAvLyBkb25lIHdpdGggYnVmZmVyIGxpc3RcbiAgICB2YXIgcGFja2V0ID0gYmluYXJ5LnJlY29uc3RydWN0UGFja2V0KHRoaXMucmVjb25QYWNrLCB0aGlzLmJ1ZmZlcnMpO1xuICAgIHRoaXMuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgIHJldHVybiBwYWNrZXQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIENsZWFucyB1cCBiaW5hcnkgcGFja2V0IHJlY29uc3RydWN0aW9uIHZhcmlhYmxlcy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5CaW5hcnlSZWNvbnN0cnVjdG9yLnByb3RvdHlwZS5maW5pc2hlZFJlY29uc3RydWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVjb25QYWNrID0gbnVsbDtcbiAgdGhpcy5idWZmZXJzID0gW107XG59O1xuXG5mdW5jdGlvbiBlcnJvcihtc2cpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBleHBvcnRzLkVSUk9SLFxuICAgIGRhdGE6ICdwYXJzZXIgZXJyb3I6ICcgKyBtc2dcbiAgfTtcbn1cbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZjtcblxudmFyIHdpdGhOYXRpdmVCdWZmZXIgPSB0eXBlb2YgQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBCdWZmZXIuaXNCdWZmZXIgPT09ICdmdW5jdGlvbic7XG52YXIgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nO1xuXG52YXIgaXNWaWV3ID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyA/IEFycmF5QnVmZmVyLmlzVmlldyhvYmopIDogKG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBvYmogaXMgYSBidWZmZXIgb3IgYW4gYXJyYXlidWZmZXIuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNCdWYob2JqKSB7XG4gIHJldHVybiAod2l0aE5hdGl2ZUJ1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIob2JqKSkgfHxcbiAgICAgICAgICAod2l0aE5hdGl2ZUFycmF5QnVmZmVyICYmIChvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcob2JqKSkpO1xufVxuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnIzAwMDBDQycsICcjMDAwMEZGJywgJyMwMDMzQ0MnLCAnIzAwMzNGRicsICcjMDA2NkNDJywgJyMwMDY2RkYnLCAnIzAwOTlDQycsXG4gICcjMDA5OUZGJywgJyMwMENDMDAnLCAnIzAwQ0MzMycsICcjMDBDQzY2JywgJyMwMENDOTknLCAnIzAwQ0NDQycsICcjMDBDQ0ZGJyxcbiAgJyMzMzAwQ0MnLCAnIzMzMDBGRicsICcjMzMzM0NDJywgJyMzMzMzRkYnLCAnIzMzNjZDQycsICcjMzM2NkZGJywgJyMzMzk5Q0MnLFxuICAnIzMzOTlGRicsICcjMzNDQzAwJywgJyMzM0NDMzMnLCAnIzMzQ0M2NicsICcjMzNDQzk5JywgJyMzM0NDQ0MnLCAnIzMzQ0NGRicsXG4gICcjNjYwMENDJywgJyM2NjAwRkYnLCAnIzY2MzNDQycsICcjNjYzM0ZGJywgJyM2NkNDMDAnLCAnIzY2Q0MzMycsICcjOTkwMENDJyxcbiAgJyM5OTAwRkYnLCAnIzk5MzNDQycsICcjOTkzM0ZGJywgJyM5OUNDMDAnLCAnIzk5Q0MzMycsICcjQ0MwMDAwJywgJyNDQzAwMzMnLFxuICAnI0NDMDA2NicsICcjQ0MwMDk5JywgJyNDQzAwQ0MnLCAnI0NDMDBGRicsICcjQ0MzMzAwJywgJyNDQzMzMzMnLCAnI0NDMzM2NicsXG4gICcjQ0MzMzk5JywgJyNDQzMzQ0MnLCAnI0NDMzNGRicsICcjQ0M2NjAwJywgJyNDQzY2MzMnLCAnI0NDOTkwMCcsICcjQ0M5OTMzJyxcbiAgJyNDQ0NDMDAnLCAnI0NDQ0MzMycsICcjRkYwMDAwJywgJyNGRjAwMzMnLCAnI0ZGMDA2NicsICcjRkYwMDk5JywgJyNGRjAwQ0MnLFxuICAnI0ZGMDBGRicsICcjRkYzMzAwJywgJyNGRjMzMzMnLCAnI0ZGMzM2NicsICcjRkYzMzk5JywgJyNGRjMzQ0MnLCAnI0ZGMzNGRicsXG4gICcjRkY2NjAwJywgJyNGRjY2MzMnLCAnI0ZGOTkwMCcsICcjRkY5OTMzJywgJyNGRkNDMDAnLCAnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0cy5pbnN0YW5jZXMgPSBbXTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuLyoqXG4gKiBTZWxlY3QgYSBjb2xvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICB2YXIgaGFzaCA9IDAsIGk7XG5cbiAgZm9yIChpIGluIG5hbWVzcGFjZSkge1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgdmFyIHByZXZUaW1lO1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuICBkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICBleHBvcnRzLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuICByZXR1cm4gZGVidWc7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB2YXIgaW5kZXggPSBleHBvcnRzLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgZXhwb3J0cy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgaTtcbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4cG9ydHMuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGluc3RhbmNlID0gZXhwb3J0cy5pbnN0YW5jZXNbaV07XG4gICAgaW5zdGFuY2UuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgaWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdG9BcnJheVxuXG5mdW5jdGlvbiB0b0FycmF5KGxpc3QsIGluZGV4KSB7XG4gICAgdmFyIGFycmF5ID0gW11cblxuICAgIGluZGV4ID0gaW5kZXggfHwgMFxuXG4gICAgZm9yICh2YXIgaSA9IGluZGV4IHx8IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5W2kgLSBpbmRleF0gPSBsaXN0W2ldXG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ei1fJy5zcGxpdCgnJylcbiAgLCBsZW5ndGggPSA2NFxuICAsIG1hcCA9IHt9XG4gICwgc2VlZCA9IDBcbiAgLCBpID0gMFxuICAsIHByZXY7XG5cbi8qKlxuICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtIFRoZSBudW1iZXIgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShudW0pIHtcbiAgdmFyIGVuY29kZWQgPSAnJztcblxuICBkbyB7XG4gICAgZW5jb2RlZCA9IGFscGhhYmV0W251bSAlIGxlbmd0aF0gKyBlbmNvZGVkO1xuICAgIG51bSA9IE1hdGguZmxvb3IobnVtIC8gbGVuZ3RoKTtcbiAgfSB3aGlsZSAobnVtID4gMCk7XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbnRlZ2VyIHZhbHVlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge051bWJlcn0gVGhlIGludGVnZXIgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgdmFyIGRlY29kZWQgPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBkZWNvZGVkID0gZGVjb2RlZCAqIGxlbmd0aCArIG1hcFtzdHIuY2hhckF0KGkpXTtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVkO1xufVxuXG4vKipcbiAqIFllYXN0OiBBIHRpbnkgZ3Jvd2luZyBpZCBnZW5lcmF0b3IuXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gQSB1bmlxdWUgaWQuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiB5ZWFzdCgpIHtcbiAgdmFyIG5vdyA9IGVuY29kZSgrbmV3IERhdGUoKSk7XG5cbiAgaWYgKG5vdyAhPT0gcHJldikgcmV0dXJuIHNlZWQgPSAwLCBwcmV2ID0gbm93O1xuICByZXR1cm4gbm93ICsnLicrIGVuY29kZShzZWVkKyspO1xufVxuXG4vL1xuLy8gTWFwIGVhY2ggY2hhcmFjdGVyIHRvIGl0cyBpbmRleC5cbi8vXG5mb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBtYXBbYWxwaGFiZXRbaV1dID0gaTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgYHllYXN0YCwgYGVuY29kZWAgYW5kIGBkZWNvZGVgIGZ1bmN0aW9ucy5cbi8vXG55ZWFzdC5lbmNvZGUgPSBlbmNvZGU7XG55ZWFzdC5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cyA9IHllYXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==