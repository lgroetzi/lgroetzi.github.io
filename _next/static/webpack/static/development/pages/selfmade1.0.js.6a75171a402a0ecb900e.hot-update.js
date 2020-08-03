webpackHotUpdate("static/development/pages/selfmade1.0.js",{

/***/ "./pages/selfmade1.0.js":
/*!******************************!*\
  !*** ./pages/selfmade1.0.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Justworks; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menus */ \"./components/menus.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/project */ \"./components/project.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: #c0d9dd;\\n  color: #666;\\n  width: 100%;\\n  padding: 130px 60px;\\n  text-align: center;\\n  font-family: Cabin;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 28px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nconst ComingSoon = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = ComingSoon;\nfunction Justworks() {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_6__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_6__[\"responsiveClasses\"])(r);\n  return __jsx(\"div\", {\n    className: \"project-page\",\n    style: {\n      width: \"100%\"\n    }\n  }, !r.isMobile && __jsx(_components_menus__WEBPACK_IMPORTED_MODULE_4__[\"LightMenu\"], null), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"GlamourShot\"], {\n    title: \"Coming Soon...\",\n    role: \"Lead Designer\",\n    img: \"/img/Selfmade-FILLER.png\"\n  }), __jsx(ComingSoon, null, \"Coming Soon...\"), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"Next\"], {\n    link: \"/collabs\"\n  }));\n}\n_c2 = Justworks;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ComingSoon\");\n$RefreshReg$(_c2, \"Justworks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWxmbWFkZTEuMC5qcz82ZWI2Il0sIm5hbWVzIjpbIkNvbWluZ1Nvb24iLCJzdHlsZWQiLCJkaXYiLCJKdXN0d29ya3MiLCJyIiwiZ2V0UmVzcG9uc2l2ZW5lc3MiLCJjbGFzc05hbWUiLCJyZXNwb25zaXZlQ2xhc3NlcyIsIndpZHRoIiwiaXNNb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBaEI7S0FBTUYsVTtBQVlTLFNBQVNHLFNBQVQsR0FBcUI7QUFDbEMsUUFBTUMsQ0FBQyxHQUFHQywwRUFBaUIsRUFBM0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLDBFQUFpQixDQUFDSCxDQUFELENBQW5DO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLFNBQUssRUFBRTtBQUFFSSxXQUFLLEVBQUU7QUFBVDtBQUFyQyxLQUNHLENBQUNKLENBQUMsQ0FBQ0ssUUFBSCxJQUFlLE1BQUMsMkRBQUQsT0FEbEIsRUFHRSxNQUFDLCtEQUFEO0FBQ0UsU0FBSyxFQUFDLGdCQURSO0FBRUUsUUFBSSxFQUFDLGVBRlA7QUFHRSxPQUFHLEVBQUM7QUFITixJQUhGLEVBU0UsTUFBQyxVQUFELHlCQVRGLEVBYUUsTUFBQyx3REFBRDtBQUFNLFFBQUksRUFBQztBQUFYLElBYkYsQ0FERjtBQWlCRDtNQXBCdUJOLFMiLCJmaWxlIjoiLi9wYWdlcy9zZWxmbWFkZTEuMC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBMaWdodE1lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL21lbnVzJztcbmltcG9ydCB7IEdsYW1vdXJTaG90LCBOZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0J1xuaW1wb3J0IHsgZ2V0UmVzcG9uc2l2ZW5lc3MsIHJlc3BvbnNpdmVDbGFzc2VzIH0gZnJvbSAnLi4vbGliL21lZGlhLXF1ZXJ5JztcblxuY29uc3QgQ29taW5nU29vbiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGQ5ZGQ7XG4gIGNvbG9yOiAjNjY2O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTMwcHggNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQ2FiaW47XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEp1c3R3b3JrcygpIHtcbiAgY29uc3QgciA9IGdldFJlc3BvbnNpdmVuZXNzKCk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IHJlc3BvbnNpdmVDbGFzc2VzKHIpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1wYWdlXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgeyFyLmlzTW9iaWxlICYmIDxMaWdodE1lbnUgLz59XG5cbiAgICAgIDxHbGFtb3VyU2hvdFxuICAgICAgICB0aXRsZT1cIkNvbWluZyBTb29uLi4uXCJcbiAgICAgICAgcm9sZT1cIkxlYWQgRGVzaWduZXJcIlxuICAgICAgICBpbWc9XCIvaW1nL1NlbGZtYWRlLUZJTExFUi5wbmdcIlxuICAgICAgLz5cblxuICAgICAgPENvbWluZ1Nvb24+XG4gICAgICAgIENvbWluZyBTb29uLi4uXG4gICAgICA8L0NvbWluZ1Nvb24+XG5cbiAgICAgIDxOZXh0IGxpbms9XCIvY29sbGFic1wiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/selfmade1.0.js\n");

/***/ })

})