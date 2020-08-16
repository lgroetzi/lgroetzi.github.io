webpackHotUpdate("static/development/pages/collabs.js",{

/***/ "./lib/media-query.js":
/*!****************************!*\
  !*** ./lib/media-query.js ***!
  \****************************/
/*! exports provided: getResponsiveness, responsiveClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getResponsiveness\", function() { return getResponsiveness; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"responsiveClasses\", function() { return responsiveClasses; });\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-responsive */ \"./node_modules/react-responsive/dist/react-responsive.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction getResponsiveness() {\n  _s();\n\n  const isDesktop = Object(react_responsive__WEBPACK_IMPORTED_MODULE_0__[\"useMediaQuery\"])({\n    minWidth: 992\n  });\n  const isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_0__[\"useMediaQuery\"])({\n    maxWidth: 991\n  });\n  return {\n    isDesktop,\n    isMobile\n  };\n}\n\n_s(getResponsiveness, \"8ftMNpTRK1SdsNh2XHw1AanMI2Q=\", false, function () {\n  return [react_responsive__WEBPACK_IMPORTED_MODULE_0__[\"useMediaQuery\"], react_responsive__WEBPACK_IMPORTED_MODULE_0__[\"useMediaQuery\"]];\n});\n\nfunction responsiveClasses(r) {\n  let classes = [];\n  if (r.isMobile) classes.push(\"mobile\");\n  return classes.join(\" \");\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbWVkaWEtcXVlcnkuanM/MzZjMSJdLCJuYW1lcyI6WyJnZXRSZXNwb25zaXZlbmVzcyIsImlzRGVza3RvcCIsInVzZU1lZGlhUXVlcnkiLCJtaW5XaWR0aCIsImlzTW9iaWxlIiwibWF4V2lkdGgiLCJyZXNwb25zaXZlQ2xhc3NlcyIsInIiLCJjbGFzc2VzIiwicHVzaCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNBLGlCQUFULEdBQTZCO0FBQUE7O0FBQ2xDLFFBQU1DLFNBQVMsR0FBR0Msc0VBQWEsQ0FBQztBQUFFQyxZQUFRLEVBQUU7QUFBWixHQUFELENBQS9CO0FBQ0EsUUFBTUMsUUFBUSxHQUFHRixzRUFBYSxDQUFDO0FBQUVHLFlBQVEsRUFBRTtBQUFaLEdBQUQsQ0FBOUI7QUFDQSxTQUFPO0FBQUVKLGFBQUY7QUFBYUc7QUFBYixHQUFQO0FBQ0Q7O0dBSmVKLGlCO1VBQ0lFLDhELEVBQ0RBLDhEOzs7QUFJWixTQUFTSSxpQkFBVCxDQUEyQkMsQ0FBM0IsRUFBOEI7QUFDbkMsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxNQUFJRCxDQUFDLENBQUNILFFBQU4sRUFDRUksT0FBTyxDQUFDQyxJQUFSLENBQWEsUUFBYjtBQUNGLFNBQU9ELE9BQU8sQ0FBQ0UsSUFBUixDQUFhLEdBQWIsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL21lZGlhLXF1ZXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzcG9uc2l2ZW5lc3MoKSB7XG4gIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoeyBtaW5XaWR0aDogOTkyIH0pO1xuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkoeyBtYXhXaWR0aDogOTkxIH0pO1xuICByZXR1cm4geyBpc0Rlc2t0b3AsIGlzTW9iaWxlIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNwb25zaXZlQ2xhc3NlcyhyKSB7XG4gIGxldCBjbGFzc2VzID0gW107XG4gIGlmIChyLmlzTW9iaWxlKVxuICAgIGNsYXNzZXMucHVzaChcIm1vYmlsZVwiKTtcbiAgcmV0dXJuIGNsYXNzZXMuam9pbihcIiBcIik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/media-query.js\n");

/***/ })

})