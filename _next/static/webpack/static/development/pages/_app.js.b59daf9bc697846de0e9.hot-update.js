webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive */ \"./node_modules/react-responsive/dist/react-responsive.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global.css */ \"./global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst theme = {};\nclass App extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {\n  componentDidMount() {\n    const jssStyles = document.querySelector('#jss-server-side');\n    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);\n    this.setState({\n      width: window.innerWidth\n    });\n  } //value={{ width: this.state.width }}\n\n\n  render() {\n    /* const { Component, pageProps } = this.props;\n     * console.log(this.state)\n     * console.log(window.width) */\n    try {\n      window;\n    } catch (e) {\n      return null;\n    }\n\n    return __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_3__[\"Context\"].Provider, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n      theme: theme\n    }, __jsx(Component, pageProps)));\n  }\n\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsidGhlbWUiLCJBcHAiLCJOZXh0QXBwIiwiY29tcG9uZW50RGlkTW91bnQiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzZXRTdGF0ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJlbmRlciIsImUiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNQSxLQUFLLEdBQUcsRUFBZDtBQUVlLE1BQU1DLEdBQU4sU0FBa0JDLCtDQUFsQixDQUEwQjtBQUN2Q0MsbUJBQWlCLEdBQUc7QUFDbEIsVUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCO0FBQ0EsUUFBSUYsU0FBUyxJQUFJQSxTQUFTLENBQUNHLFVBQTNCLEVBQ0VILFNBQVMsQ0FBQ0csVUFBVixDQUFxQkMsV0FBckIsQ0FBaUNKLFNBQWpDO0FBQ0YsU0FBS0ssUUFBTCxDQUFjO0FBQUVDLFdBQUssRUFBRUMsTUFBTSxDQUFDQztBQUFoQixLQUFkO0FBQ0QsR0FOc0MsQ0FRdkM7OztBQUNBQyxRQUFNLEdBQUc7QUFDUDs7O0FBR0EsUUFBSTtBQUNGRixZQUFNO0FBQ1AsS0FGRCxDQUVFLE9BQU9HLENBQVAsRUFBVTtBQUNWLGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQ0UsTUFBQyx3REFBRCxDQUFtQixRQUFuQixRQUNFLE1BQUMsK0RBQUQ7QUFBZSxXQUFLLEVBQUVkO0FBQXRCLE9BQ0UsTUFBQyxTQUFELEVBQWVlLFNBQWYsQ0FERixDQURGLENBREY7QUFPRDs7QUExQnNDIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV4dEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29udGV4dCBhcyBSZXNwb25zaXZlQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnXG5cbmltcG9ydCBcIi4uL2dsb2JhbC5jc3NcIlxuXG5jb25zdCB0aGVtZSA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIE5leHRBcHAge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4gICAgaWYgKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50Tm9kZSlcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KTtcbiAgfVxuXG4gIC8vdmFsdWU9e3sgd2lkdGg6IHRoaXMuc3RhdGUud2lkdGggfX1cbiAgcmVuZGVyKCkge1xuICAgIC8qIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICogY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICAgKiBjb25zb2xlLmxvZyh3aW5kb3cud2lkdGgpICovXG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVzcG9uc2l2ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L1Jlc3BvbnNpdmVDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})