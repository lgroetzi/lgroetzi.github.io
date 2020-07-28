webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyWork; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menus */ \"./components/menus.js\");\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head */ \"./components/head.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #ffffff;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  max-height: 800px;\\n  text-align: center;\\n  overflow: hidden;\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: center;\\n  img {\\n    width: 438px;\\n    height: 477.5px\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  width: 100%;\\n  min-height: calc(100vh - 92px);\\n\\n  & > div {\\n    width: 50%;\\n    font-size: 80px;\\n    line-height: 110px;\\n  }\\n\\n  &.mobile {\\n    flex-direction: column;\\n    min-height: auto;\\n  }\\n\\n  &.mobile > div {\\n    width: 100%;\\n    font-size: 50px;\\n    line-height: 65px;\\n  }\\n\\n  &.mobile img {\\n    height: 250px;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: #08202a;\\n  margin: 0;\\n  padding: 0;\\n  ul {\\n    list-style: none;\\n    padding: 50px;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-family: Cabin, Arial, Helvetica, Sans-Serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  letter-spacing: 0.833333px;  /* or 137% */\\n  text-decoration: none;\\n  cursor: pointer;\\n\\n  color: #B5F44B;\\n  & :hover {\\n    color: #ffffff;\\n    transition: 0.3s;\\n  }\\n\\n  &.white {\\n    color: #ffffff;\\n  }\\n  &.white :hover {\\n    color: #B5F44B;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nconst MyWorkLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject());\n_c = MyWorkLink;\nconst MyWorkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = MyWorkContainer;\nconst MyWorkShell = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = MyWorkShell;\nconst PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c4 = PictureContainer;\nconst RecentProjects = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c5 = RecentProjects;\nfunction MyWork() {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_6__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_6__[\"responsiveClasses\"])(r);\n  return __jsx(\"div\", null, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_5__[\"Head\"], {\n    title: \"Laura Groetzinger Portfolio\"\n  }), __jsx(_components_menus__WEBPACK_IMPORTED_MODULE_4__[\"DarkMenu\"], {\n    active: \"index\"\n  }), __jsx(MyWorkShell, {\n    className: className\n  }, __jsx(PictureContainer, null, __jsx(\"img\", {\n    src: \"/img/Landing-top@2x.png\"\n  })), __jsx(MyWorkContainer, null, r.isMobile && __jsx(RecentProjects, null, \"Recent Projects\"), __jsx(\"ul\", null, __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/collabs\"\n  }, __jsx(MyWorkLink, null, \"collabs\"))), __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/justworks\"\n  }, __jsx(MyWorkLink, null, \"justworks\"))), __jsx(\"li\", null, __jsx(MyWorkLink, {\n    href: \"/selfmade1.0\"\n  }, \"selfmade1.0\")), __jsx(\"li\", null, __jsx(MyWorkLink, {\n    href: \"/selfmade2.0\"\n  }, \"selfmade2.0\"))))));\n}\n_c6 = MyWork;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"MyWorkLink\");\n$RefreshReg$(_c2, \"MyWorkContainer\");\n$RefreshReg$(_c3, \"MyWorkShell\");\n$RefreshReg$(_c4, \"PictureContainer\");\n$RefreshReg$(_c5, \"RecentProjects\");\n$RefreshReg$(_c6, \"MyWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk15V29ya0xpbmsiLCJzdHlsZWQiLCJhIiwiTXlXb3JrQ29udGFpbmVyIiwiZGl2IiwiTXlXb3JrU2hlbGwiLCJQaWN0dXJlQ29udGFpbmVyIiwiUmVjZW50UHJvamVjdHMiLCJNeVdvcmsiLCJyIiwiZ2V0UmVzcG9uc2l2ZW5lc3MiLCJjbGFzc05hbWUiLCJyZXNwb25zaXZlQ2xhc3NlcyIsImlzTW9iaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0EsTUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxDQUFWLG1CQUFoQjtLQUFNRixVO0FBc0JOLE1BQU1HLGVBQWUsR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBckI7TUFBTUQsZTtBQVVOLE1BQU1FLFdBQVcsR0FBR0oseURBQU0sQ0FBQ0csR0FBVixvQkFBakI7TUFBTUMsVztBQTRCTixNQUFNQyxnQkFBZ0IsR0FBR0wseURBQU0sQ0FBQ0csR0FBVixvQkFBdEI7TUFBTUUsZ0I7QUFjTixNQUFNQyxjQUFjLEdBQUdOLHlEQUFNLENBQUNHLEdBQVYsb0JBQXBCO01BQU1HLGM7QUFJUyxTQUFTQyxNQUFULEdBQWtCO0FBQy9CLFFBQU1DLENBQUMsR0FBR0MsMEVBQWlCLEVBQTNCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQywwRUFBaUIsQ0FBQ0gsQ0FBRCxDQUFuQztBQUVBLFNBQ0UsbUJBQ0UsTUFBQyxxREFBRDtBQUFNLFNBQUssRUFBQztBQUFaLElBREYsRUFFRSxNQUFDLDBEQUFEO0FBQVUsVUFBTSxFQUFDO0FBQWpCLElBRkYsRUFHRSxNQUFDLFdBQUQ7QUFBYSxhQUFTLEVBQUVFO0FBQXhCLEtBQ0UsTUFBQyxnQkFBRCxRQUNFO0FBQUssT0FBRyxFQUFDO0FBQVQsSUFERixDQURGLEVBSUUsTUFBQyxlQUFELFFBQ0dGLENBQUMsQ0FBQ0ksUUFBRixJQUNBLE1BQUMsY0FBRCwwQkFGSCxFQUdFLGtCQUNFLGtCQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsVUFBRCxrQkFERixDQURGLENBREYsRUFNRSxrQkFDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRSxNQUFDLFVBQUQsb0JBREYsQ0FERixDQU5GLEVBV0Usa0JBQUksTUFBQyxVQUFEO0FBQVksUUFBSSxFQUFDO0FBQWpCLG1CQUFKLENBWEYsRUFZRSxrQkFBSSxNQUFDLFVBQUQ7QUFBWSxRQUFJLEVBQUM7QUFBakIsbUJBQUosQ0FaRixDQUhGLENBSkYsQ0FIRixDQURGO0FBNkJEO01BakN1QkwsTSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IERhcmtNZW51IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tZW51cyc7XG5pbXBvcnQgeyBIZWFkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJztcblxuaW1wb3J0IHsgZ2V0UmVzcG9uc2l2ZW5lc3MsIHJlc3BvbnNpdmVDbGFzc2VzIH0gZnJvbSAnLi4vbGliL21lZGlhLXF1ZXJ5JztcblxuXG5jb25zdCBNeVdvcmtMaW5rID0gc3R5bGVkLmFgXG4gIGZvbnQtZmFtaWx5OiBDYWJpbiwgQXJpYWwsIEhlbHZldGljYSwgU2Fucy1TZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuODMzMzMzcHg7ICAvKiBvciAxMzclICovXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGNvbG9yOiAjQjVGNDRCO1xuICAmIDpob3ZlciB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxuXG4gICYud2hpdGUge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gICYud2hpdGUgOmhvdmVyIHtcbiAgICBjb2xvcjogI0I1RjQ0QjtcbiAgfVxuYDtcblxuY29uc3QgTXlXb3JrQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MjAyYTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICB9XG5gO1xuXG5jb25zdCBNeVdvcmtTaGVsbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTJweCk7XG5cbiAgJiA+IGRpdiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgJi5tb2JpbGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuXG4gICYubW9iaWxlID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDY1cHg7XG4gIH1cblxuICAmLm1vYmlsZSBpbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFBpY3R1cmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiA0MzhweDtcbiAgICBoZWlnaHQ6IDQ3Ny41cHhcbiAgfVxuYDtcblxuXG5jb25zdCBSZWNlbnRQcm9qZWN0cyA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjZmZmZmZmO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlXb3JrKCkge1xuICBjb25zdCByID0gZ2V0UmVzcG9uc2l2ZW5lc3MoKTtcbiAgY29uc3QgY2xhc3NOYW1lID0gcmVzcG9uc2l2ZUNsYXNzZXMocik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQgdGl0bGU9XCJMYXVyYSBHcm9ldHppbmdlciBQb3J0Zm9saW9cIiAvPlxuICAgICAgPERhcmtNZW51IGFjdGl2ZT1cImluZGV4XCIgLz5cbiAgICAgIDxNeVdvcmtTaGVsbCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxQaWN0dXJlQ29udGFpbmVyPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9MYW5kaW5nLXRvcEAyeC5wbmdcIiAvPlxuICAgICAgICA8L1BpY3R1cmVDb250YWluZXI+XG4gICAgICAgIDxNeVdvcmtDb250YWluZXI+XG4gICAgICAgICAge3IuaXNNb2JpbGUgJiZcbiAgICAgICAgICAgPFJlY2VudFByb2plY3RzPlJlY2VudCBQcm9qZWN0czwvUmVjZW50UHJvamVjdHM+fVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2xsYWJzXCI+XG4gICAgICAgICAgICAgICAgPE15V29ya0xpbms+Y29sbGFiczwvTXlXb3JrTGluaz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9qdXN0d29ya3NcIj5cbiAgICAgICAgICAgICAgICA8TXlXb3JrTGluaz5qdXN0d29ya3M8L015V29ya0xpbms+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+PE15V29ya0xpbmsgaHJlZj1cIi9zZWxmbWFkZTEuMFwiPnNlbGZtYWRlMS4wPC9NeVdvcmtMaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PE15V29ya0xpbmsgaHJlZj1cIi9zZWxmbWFkZTIuMFwiPnNlbGZtYWRlMi4wPC9NeVdvcmtMaW5rPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9NeVdvcmtDb250YWluZXI+XG4gICAgICA8L015V29ya1NoZWxsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})