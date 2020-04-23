(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./app/js/lost/lost.js":
/*!*****************************!*\
  !*** ./app/js/lost/lost.js ***!
  \*****************************/
/*! exports provided: Lost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lost", function() { return Lost; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./app/js/lost/template.js");


function Lost(spec) {
  let init = () => {
    Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["template"])(spec), document.getElementById("view"));
  };

  init();
  return Object.freeze({});
}

/***/ }),

/***/ "./app/js/lost/template.js":
/*!*********************************!*\
  !*** ./app/js/lost/template.js ***!
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
        <span>404: Not found</span>
      </div>
      <div class="mdc-layout-grid__cell--span-4">
      </div>
    </div>
  </div>
`;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvbG9zdC9sb3N0LmpzIiwid2VicGFjazovLy8uL2FwcC9qcy9sb3N0L3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbIkxvc3QiLCJzcGVjIiwiaW5pdCIsInJlbmRlciIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk9iamVjdCIsImZyZWV6ZSIsImRhdGEiLCJodG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRU8sU0FBU0EsSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ3pCLE1BQUlDLElBQUksR0FBRyxNQUFNO0FBQ2ZDLDJEQUFNLENBQUNDLDZEQUFRLENBQUNILElBQUQsQ0FBVCxFQUFpQkksUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWpCLENBQU47QUFDRCxHQUZEOztBQUlBSixNQUFJO0FBRUosU0FBT0ssTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDWkQ7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNSixRQUFRLEdBQUlLLElBQUQsSUFBVUMsNkNBQUs7Ozs7Ozs7Ozs7Q0FBaEMsQyIsImZpbGUiOiI4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVuZGVyfSBmcm9tICdsaXQtaHRtbCc7XHJcblxyXG5pbXBvcnQge3RlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvc3Qoc3BlYykge1xyXG4gIGxldCBpbml0ID0gKCkgPT4ge1xyXG4gICAgcmVuZGVyKHRlbXBsYXRlKHNwZWMpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXdcIikpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7fSk7XHJcbn1cclxuIiwiaW1wb3J0IHtodG1sfSBmcm9tICdsaXQtaHRtbCc7XHJcblxyXG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSAoZGF0YSkgPT4gaHRtbGBcclxuICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkX19pbm5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkX19jZWxsLS1zcGFuLThcIj5cclxuICAgICAgICA8c3Bhbj40MDQ6IE5vdCBmb3VuZDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtbGF5b3V0LWdyaWRfX2NlbGwtLXNwYW4tNFwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9