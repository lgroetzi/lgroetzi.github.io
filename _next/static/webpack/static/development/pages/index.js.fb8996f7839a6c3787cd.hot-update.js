webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyWork; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menus */ \"./components/menus.js\");\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head */ \"./components/head.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject6() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 40px;\\n  width: calc(100% - 80px) !important;\\n\\n  font-family: Open Sans;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 14px;\\n  line-height: 140px;\\n\\n  background: url(/img/Landing-top@2x.png) no-repeat 0 0;\\n\\n  & .who {\\n    font-size: 14px;\\n    display: inline;\\n    border-bottom: 4px solid #b5f44b;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #ffffff;\\n  padding: 50px 50px 0 50px;\\n  font-family: Open Sans;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 14px;\\n  line-height: 40px;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  max-height: 800px;\\n  text-align: center;\\n  overflow: hidden;\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: center;\\n  img {\\n    width: 438px;\\n    height: 477.5px\\n  }\\n\\n  &.mobile img {\\n    transform: scale(-1, 1);\\n    width: auto;\\n    height: auto;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  width: 100%;\\n  min-height: calc(100vh - 92px);\\n\\n  & > div {\\n    width: 50%;\\n    font-size: 80px;\\n    line-height: 110px;\\n  }\\n\\n  &.mobile {\\n    flex-direction: column;\\n    min-height: auto;\\n  }\\n\\n  &.mobile > div {\\n    width: 100%;\\n    font-size: 50px;\\n    line-height: 65px;\\n  }\\n\\n  &.mobile img {\\n    height: 250px;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: #08202a;\\n  margin: 0;\\n  padding: 0;\\n  ul {\\n    list-style: none;\\n    margin: 0;\\n    padding: 0 50px 50px 50px;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-family: Cabin, Arial, Helvetica, Sans-Serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  letter-spacing: 0.833333px;  /* or 137% */\\n  text-decoration: none;\\n  cursor: pointer;\\n\\n  color: #B5F44B;\\n  & :hover {\\n    color: #ffffff;\\n    transition: 0.3s;\\n  }\\n\\n  &.white {\\n    color: #ffffff;\\n  }\\n  &.white :hover {\\n    color: #B5F44B;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nconst MyWorkLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject());\n_c = MyWorkLink;\nconst MyWorkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = MyWorkContainer;\nconst MyWorkShell = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = MyWorkShell;\nconst PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c4 = PictureContainer;\nconst RecentProjects = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c5 = RecentProjects;\nconst MobileCover = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c6 = MobileCover;\nfunction MyWork() {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_6__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_6__[\"responsiveClasses\"])(r);\n  return __jsx(\"div\", null, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_5__[\"Head\"], {\n    title: \"Laura Groetzinger Portfolio\"\n  }), __jsx(_components_menus__WEBPACK_IMPORTED_MODULE_4__[\"DarkMenu\"], {\n    active: \"index\"\n  }), __jsx(MyWorkShell, {\n    className: className\n  }, !r.isMobile && __jsx(PictureContainer, null, __jsx(\"img\", {\n    src: \"/img/Landing-top@2x.png\"\n  })), r.isMobile && __jsx(MobileCover, null, __jsx(\"div\", {\n    class: \"who\"\n  }, \"Laura Groetzinegr\"), __jsx(\"div\", {\n    class: \"what\"\n  }, \"Product Design\")), __jsx(MyWorkContainer, null, r.isMobile && __jsx(RecentProjects, null, \"Recent Projects\"), __jsx(\"ul\", null, __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/collabs\"\n  }, __jsx(MyWorkLink, null, \"collabs\"))), __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/justworks\"\n  }, __jsx(MyWorkLink, null, \"justworks\"))), __jsx(\"li\", null, __jsx(MyWorkLink, {\n    href: \"/selfmade1.0\"\n  }, \"selfmade1.0\")), __jsx(\"li\", null, __jsx(MyWorkLink, {\n    href: \"/selfmade2.0\"\n  }, \"selfmade2.0\"))))));\n}\n_c7 = MyWork;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"MyWorkLink\");\n$RefreshReg$(_c2, \"MyWorkContainer\");\n$RefreshReg$(_c3, \"MyWorkShell\");\n$RefreshReg$(_c4, \"PictureContainer\");\n$RefreshReg$(_c5, \"RecentProjects\");\n$RefreshReg$(_c6, \"MobileCover\");\n$RefreshReg$(_c7, \"MyWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk15V29ya0xpbmsiLCJzdHlsZWQiLCJhIiwiTXlXb3JrQ29udGFpbmVyIiwiZGl2IiwiTXlXb3JrU2hlbGwiLCJQaWN0dXJlQ29udGFpbmVyIiwiUmVjZW50UHJvamVjdHMiLCJNb2JpbGVDb3ZlciIsIk15V29yayIsInIiLCJnZXRSZXNwb25zaXZlbmVzcyIsImNsYXNzTmFtZSIsInJlc3BvbnNpdmVDbGFzc2VzIiwiaXNNb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0EsTUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxDQUFWLG1CQUFoQjtLQUFNRixVO0FBc0JOLE1BQU1HLGVBQWUsR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBckI7TUFBTUQsZTtBQVdOLE1BQU1FLFdBQVcsR0FBR0oseURBQU0sQ0FBQ0csR0FBVixvQkFBakI7TUFBTUMsVztBQTRCTixNQUFNQyxnQkFBZ0IsR0FBR0wseURBQU0sQ0FBQ0csR0FBVixvQkFBdEI7TUFBTUUsZ0I7QUFvQk4sTUFBTUMsY0FBYyxHQUFHTix5REFBTSxDQUFDRyxHQUFWLG9CQUFwQjtNQUFNRyxjO0FBVU4sTUFBTUMsV0FBVyxHQUFHUCx5REFBTSxDQUFDRyxHQUFWLG9CQUFqQjtNQUFNSSxXO0FBbUJTLFNBQVNDLE1BQVQsR0FBa0I7QUFDL0IsUUFBTUMsQ0FBQyxHQUFHQywwRUFBaUIsRUFBM0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLDBFQUFpQixDQUFDSCxDQUFELENBQW5DO0FBRUEsU0FDRSxtQkFDRSxNQUFDLHFEQUFEO0FBQU0sU0FBSyxFQUFDO0FBQVosSUFERixFQUVFLE1BQUMsMERBQUQ7QUFBVSxVQUFNLEVBQUM7QUFBakIsSUFGRixFQUdFLE1BQUMsV0FBRDtBQUFhLGFBQVMsRUFBRUU7QUFBeEIsS0FDRyxDQUFDRixDQUFDLENBQUNJLFFBQUgsSUFDQSxNQUFDLGdCQUFELFFBQ0U7QUFBSyxPQUFHLEVBQUM7QUFBVCxJQURGLENBRkgsRUFNR0osQ0FBQyxDQUFDSSxRQUFGLElBQ0EsTUFBQyxXQUFELFFBQ0U7QUFBSyxTQUFLLEVBQUM7QUFBWCx5QkFERixFQUVFO0FBQUssU0FBSyxFQUFDO0FBQVgsc0JBRkYsQ0FQSCxFQVlFLE1BQUMsZUFBRCxRQUNHSixDQUFDLENBQUNJLFFBQUYsSUFDQSxNQUFDLGNBQUQsMEJBRkgsRUFHRSxrQkFDRSxrQkFDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRSxNQUFDLFVBQUQsa0JBREYsQ0FERixDQURGLEVBTUUsa0JBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQyxVQUFELG9CQURGLENBREYsQ0FORixFQVdFLGtCQUFJLE1BQUMsVUFBRDtBQUFZLFFBQUksRUFBQztBQUFqQixtQkFBSixDQVhGLEVBWUUsa0JBQUksTUFBQyxVQUFEO0FBQVksUUFBSSxFQUFDO0FBQWpCLG1CQUFKLENBWkYsQ0FIRixDQVpGLENBSEYsQ0FERjtBQXFDRDtNQXpDdUJMLE0iLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBEYXJrTWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudXMnO1xuaW1wb3J0IHsgSGVhZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCc7XG5cbmltcG9ydCB7IGdldFJlc3BvbnNpdmVuZXNzLCByZXNwb25zaXZlQ2xhc3NlcyB9IGZyb20gJy4uL2xpYi9tZWRpYS1xdWVyeSc7XG5cblxuY29uc3QgTXlXb3JrTGluayA9IHN0eWxlZC5hYFxuICBmb250LWZhbWlseTogQ2FiaW4sIEFyaWFsLCBIZWx2ZXRpY2EsIFNhbnMtU2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjgzMzMzM3B4OyAgLyogb3IgMTM3JSAqL1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBjb2xvcjogI0I1RjQ0QjtcbiAgJiA6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cblxuICAmLndoaXRlIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAmLndoaXRlIDpob3ZlciB7XG4gICAgY29sb3I6ICNCNUY0NEI7XG4gIH1cbmA7XG5cbmNvbnN0IE15V29ya0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODIwMmE7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgNTBweCA1MHB4IDUwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IE15V29ya1NoZWxsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA5MnB4KTtcblxuICAmID4gZGl2IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBsaW5lLWhlaWdodDogMTEwcHg7XG4gIH1cblxuICAmLm1vYmlsZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgJi5tb2JpbGUgPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNjVweDtcbiAgfVxuXG4gICYubW9iaWxlIGltZyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuYDtcblxuY29uc3QgUGljdHVyZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGltZyB7XG4gICAgd2lkdGg6IDQzOHB4O1xuICAgIGhlaWdodDogNDc3LjVweFxuICB9XG5cbiAgJi5tb2JpbGUgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbmA7XG5cblxuY29uc3QgUmVjZW50UHJvamVjdHMgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNTBweCA1MHB4IDAgNTBweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbmA7XG5cbmNvbnN0IE1vYmlsZUNvdmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpICFpbXBvcnRhbnQ7XG5cbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTQwcHg7XG5cbiAgYmFja2dyb3VuZDogdXJsKC9pbWcvTGFuZGluZy10b3BAMngucG5nKSBuby1yZXBlYXQgMCAwO1xuXG4gICYgLndobyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2I1ZjQ0YjtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlXb3JrKCkge1xuICBjb25zdCByID0gZ2V0UmVzcG9uc2l2ZW5lc3MoKTtcbiAgY29uc3QgY2xhc3NOYW1lID0gcmVzcG9uc2l2ZUNsYXNzZXMocik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQgdGl0bGU9XCJMYXVyYSBHcm9ldHppbmdlciBQb3J0Zm9saW9cIiAvPlxuICAgICAgPERhcmtNZW51IGFjdGl2ZT1cImluZGV4XCIgLz5cbiAgICAgIDxNeVdvcmtTaGVsbCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHshci5pc01vYmlsZSAmJlxuICAgICAgICAgPFBpY3R1cmVDb250YWluZXI+XG4gICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9MYW5kaW5nLXRvcEAyeC5wbmdcIiAvPlxuICAgICAgICAgPC9QaWN0dXJlQ29udGFpbmVyPn1cblxuICAgICAgICB7ci5pc01vYmlsZSAmJlxuICAgICAgICAgPE1vYmlsZUNvdmVyPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvXCI+TGF1cmEgR3JvZXR6aW5lZ3I8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIndoYXRcIj5Qcm9kdWN0IERlc2lnbjwvZGl2PlxuICAgICAgICAgPC9Nb2JpbGVDb3Zlcj59XG5cbiAgICAgICAgPE15V29ya0NvbnRhaW5lcj5cbiAgICAgICAgICB7ci5pc01vYmlsZSAmJlxuICAgICAgICAgICA8UmVjZW50UHJvamVjdHM+UmVjZW50IFByb2plY3RzPC9SZWNlbnRQcm9qZWN0cz59XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbGxhYnNcIj5cbiAgICAgICAgICAgICAgICA8TXlXb3JrTGluaz5jb2xsYWJzPC9NeVdvcmtMaW5rPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2p1c3R3b3Jrc1wiPlxuICAgICAgICAgICAgICAgIDxNeVdvcmtMaW5rPmp1c3R3b3JrczwvTXlXb3JrTGluaz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT48TXlXb3JrTGluayBocmVmPVwiL3NlbGZtYWRlMS4wXCI+c2VsZm1hZGUxLjA8L015V29ya0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TXlXb3JrTGluayBocmVmPVwiL3NlbGZtYWRlMi4wXCI+c2VsZm1hZGUyLjA8L015V29ya0xpbms+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L015V29ya0NvbnRhaW5lcj5cbiAgICAgIDwvTXlXb3JrU2hlbGw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})