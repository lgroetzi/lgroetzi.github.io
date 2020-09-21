webpackHotUpdate("static/development/pages/aboutme.js",{

/***/ "./pages/aboutme.js":
/*!**************************!*\
  !*** ./pages/aboutme.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyWork; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menus */ \"./components/menus.js\");\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head */ \"./components/head.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/project */ \"./components/project.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject6() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  & > div {\\n    padding-bottom: 20px;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 60px;\\n  font-family: Open Sans;\\n  font-size: 16px;\\n  margin: 35px 50px 0 0;\\n  color: #ffffff;\\n  line-height: 32px;\\n  max-height: 100vh;\\n  overflow-y: scroll;\\n  \\n  & .haiku {\\n    border-left: solid 2px #5d5d62;\\n    padding: 0 0 0 20px;\\n  }\\n  \\n  & a {\\n    color: #b5f44b;\\n    text-decoration: none;\\n  }\\n  & a:hover {\\n    text-decoration: underline;\\n  }\\n  \\n  & p {\\n    margin-bottom: 30px;\\n  }\\n  \\n  &.mobile {\\n    margin: 0;\\n    padding: 30px;\\n  }\\n  &.mobile div.close {\\n    position: absolute;\\n    top: 30px;\\n    right: 30px;\\n  }\\n\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  max-height: 800px;\\n  text-align: center;\\n  overflow: hidden;\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: center;\\n  img {\\n    width: 438px;\\n    height: 477.5px\\n  }\\n\\n  &.mobile img {\\n    transform: scale(-1, 1);\\n    width: auto;\\n    height: auto;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  width: 100%;\\n  min-height: calc(100vh - 92px);\\n\\n  & > div {\\n    width: 50%;\\n    font-size: 80px;\\n    line-height: 110px;\\n  }\\n\\n  &.mobile {\\n    flex-direction: column;\\n    min-height: auto;\\n  }\\n\\n  &.mobile > div {\\n    width: 100%;\\n    font-size: 49px;\\n    line-height: 65px;\\n  }\\n\\n  &.mobile > div ul li {\\n    line-height: 70px;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: #08202a;\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  align-items: center;\\n\\n  &.mobile {\\n    display: block;\\n  }\\n  ul {\\n    list-style: none;\\n    margin: 0;\\n    padding: 0 50px 50px 50px;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-family: Cabin, Arial, Helvetica, Sans-Serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  letter-spacing: 0.833333px;  /* or 137% */\\n  text-decoration: none;\\n  cursor: pointer;\\n  color: #B5F44B;\\n\\n  &:hover {\\n    color: #ffffff;\\n    transition: 0.6s;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nconst MyWorkLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject());\nconst MyWorkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c = MyWorkContainer;\nconst MyWorkShell = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c2 = MyWorkShell;\nconst PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c3 = PictureContainer;\nconst AboutMe = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c4 = AboutMe;\nconst Override = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c5 = Override;\nfunction MyWork() {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_7__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_7__[\"responsiveClasses\"])(r);\n  return __jsx(\"div\", null, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_5__[\"Head\"], {\n    title: \"Laura Groetzinger Portfolio\"\n  }), !r.isMobile && __jsx(_components_menus__WEBPACK_IMPORTED_MODULE_4__[\"DarkMenu\"], {\n    active: \"aboutme\"\n  }), __jsx(MyWorkShell, {\n    className: className\n  }, r.isMobile && __jsx(Override, null, __jsx(_components_project__WEBPACK_IMPORTED_MODULE_6__[\"GlamourShot\"], {\n    title: \"About Me\"\n  })), !r.isMobile && __jsx(PictureContainer, null, __jsx(\"img\", {\n    src: \"/img/Landing-top@2x.png\"\n  })), __jsx(MyWorkContainer, {\n    className: className\n  }, __jsx(AboutMe, {\n    className: className\n  }, __jsx(\"p\", null, \"For those who find these bios boring, here\\u2019s a haiku...\"), __jsx(\"p\", {\n    className: \"haiku\"\n  }, \"Curious humans\", __jsx(\"br\", null), \"Trying to speak to machines\", __jsx(\"br\", null), \"And here, I enter\"), __jsx(\"p\", null, \"In the unlikely event that the poem didn\\u2019t tell you everything you need to know, here\\u2019s a bit more: I like making life simple through design. I\\u2019m a problem solver with strong intuition about what users need, based on a decade of experience. I have an analytical mind, a big heart and a passion for markdown. User happiness is at the forefront of my work, but I also get pretty freaking excited about design systems.\"), __jsx(\"p\", null, \"After working as the VP of Product at SelfMade, I was eager to focus my attention back towards product design. Today, I'm thrilled to be designing interfaces at Tremendous.com.\"), __jsx(\"p\", null, \"What\\u2019s next for me? I\\u2019m open to remote senior design roles and design leadership positions \\u2013 both full time and contract. Working on something wonderful? Let\\u2019s chat! Reach me at \", __jsx(\"a\", {\n    href: \"mailto:laura.groetzinger@gmail.com\"\n  }, \"laura.groetzinger@gmail.com\"))))));\n}\n_c6 = MyWork;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"MyWorkContainer\");\n$RefreshReg$(_c2, \"MyWorkShell\");\n$RefreshReg$(_c3, \"PictureContainer\");\n$RefreshReg$(_c4, \"AboutMe\");\n$RefreshReg$(_c5, \"Override\");\n$RefreshReg$(_c6, \"MyWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dG1lLmpzPzhmZWEiXSwibmFtZXMiOlsiTXlXb3JrTGluayIsInN0eWxlZCIsImEiLCJNeVdvcmtDb250YWluZXIiLCJkaXYiLCJNeVdvcmtTaGVsbCIsIlBpY3R1cmVDb250YWluZXIiLCJBYm91dE1lIiwiT3ZlcnJpZGUiLCJNeVdvcmsiLCJyIiwiZ2V0UmVzcG9uc2l2ZW5lc3MiLCJjbGFzc05hbWUiLCJyZXNwb25zaXZlQ2xhc3NlcyIsImlzTW9iaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLE1BQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVixtQkFBaEI7QUFlQSxNQUFNQyxlQUFlLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsb0JBQXJCO0tBQU1ELGU7QUFpQk4sTUFBTUUsV0FBVyxHQUFHSix5REFBTSxDQUFDRyxHQUFWLG9CQUFqQjtNQUFNQyxXO0FBNEJOLE1BQU1DLGdCQUFnQixHQUFHTCx5REFBTSxDQUFDRyxHQUFWLG9CQUF0QjtNQUFNRSxnQjtBQW1CTixNQUFNQyxPQUFPLEdBQUdOLHlEQUFNLENBQUNHLEdBQVYsb0JBQWI7TUFBTUcsTztBQXVDTixNQUFNQyxRQUFRLEdBQUdQLHlEQUFNLENBQUNHLEdBQVYsb0JBQWQ7TUFBTUksUTtBQU1TLFNBQVNDLE1BQVQsR0FBa0I7QUFDL0IsUUFBTUMsQ0FBQyxHQUFHQywwRUFBaUIsRUFBM0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLDBFQUFpQixDQUFDSCxDQUFELENBQW5DO0FBRUEsU0FDRSxtQkFDRSxNQUFDLHFEQUFEO0FBQU0sU0FBSyxFQUFDO0FBQVosSUFERixFQUVHLENBQUNBLENBQUMsQ0FBQ0ksUUFBSCxJQUFlLE1BQUMsMERBQUQ7QUFBVSxVQUFNLEVBQUM7QUFBakIsSUFGbEIsRUFJRSxNQUFDLFdBQUQ7QUFBYSxhQUFTLEVBQUVGO0FBQXhCLEtBQ0dGLENBQUMsQ0FBQ0ksUUFBRixJQUFjLE1BQUMsUUFBRCxRQUFVLE1BQUMsK0RBQUQ7QUFBYSxTQUFLLEVBQUM7QUFBbkIsSUFBVixDQURqQixFQUdHLENBQUNKLENBQUMsQ0FBQ0ksUUFBSCxJQUNBLE1BQUMsZ0JBQUQsUUFDRTtBQUFLLE9BQUcsRUFBQztBQUFULElBREYsQ0FKSCxFQVFFLE1BQUMsZUFBRDtBQUFpQixhQUFTLEVBQUVGO0FBQTVCLEtBQ0UsTUFBQyxPQUFEO0FBQVMsYUFBUyxFQUFFQTtBQUFwQixLQUNFLGdGQURGLEVBSUU7QUFBRyxhQUFTLEVBQUM7QUFBYix1QkFDZ0IsaUJBRGhCLGlDQUU2QixpQkFGN0Isc0JBSkYsRUFTRSxrY0FURixFQVlFLG9NQVpGLEVBZUUsMk5BQ29MO0FBQUcsUUFBSSxFQUFDO0FBQVIsbUNBRHBMLENBZkYsQ0FERixDQVJGLENBSkYsQ0FERjtBQXFDRDtNQXpDdUJILE0iLCJmaWxlIjoiLi9wYWdlcy9hYm91dG1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IERhcmtNZW51IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tZW51cyc7XG5pbXBvcnQgeyBIZWFkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJztcbmltcG9ydCB7IENoZXZyb24sIEdsYW1vdXJTaG90IH0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0JztcblxuaW1wb3J0IHsgZ2V0UmVzcG9uc2l2ZW5lc3MsIHJlc3BvbnNpdmVDbGFzc2VzIH0gZnJvbSAnLi4vbGliL21lZGlhLXF1ZXJ5JztcblxuXG5jb25zdCBNeVdvcmtMaW5rID0gc3R5bGVkLmFgXG4gIGZvbnQtZmFtaWx5OiBDYWJpbiwgQXJpYWwsIEhlbHZldGljYSwgU2Fucy1TZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuODMzMzMzcHg7ICAvKiBvciAxMzclICovXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0I1RjQ0QjtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xuICB9XG5gO1xuXG5jb25zdCBNeVdvcmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgyMDJhO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJi5tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDUwcHggNTBweCA1MHB4O1xuICB9XG5gO1xuXG5jb25zdCBNeVdvcmtTaGVsbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTJweCk7XG5cbiAgJiA+IGRpdiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgJi5tb2JpbGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuXG4gICYubW9iaWxlID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDQ5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDY1cHg7XG4gIH1cblxuICAmLm1vYmlsZSA+IGRpdiB1bCBsaSB7XG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFBpY3R1cmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiA0MzhweDtcbiAgICBoZWlnaHQ6IDQ3Ny41cHhcbiAgfVxuXG4gICYubW9iaWxlIGltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5gO1xuXG5jb25zdCBBYm91dE1lID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNjBweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDM1cHggNTBweCAwIDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgXG4gICYgLmhhaWt1IHtcbiAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICM1ZDVkNjI7XG4gICAgcGFkZGluZzogMCAwIDAgMjBweDtcbiAgfVxuICBcbiAgJiBhIHtcbiAgICBjb2xvcjogI2I1ZjQ0YjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgJiBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICBcbiAgJiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICAmLm1vYmlsZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIH1cbiAgJi5tb2JpbGUgZGl2LmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICB9XG5cbmA7XG5cbmNvbnN0IE92ZXJyaWRlID0gc3R5bGVkLmRpdmBcbiAgJiA+IGRpdiB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15V29yaygpIHtcbiAgY29uc3QgciA9IGdldFJlc3BvbnNpdmVuZXNzKCk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IHJlc3BvbnNpdmVDbGFzc2VzKHIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkIHRpdGxlPVwiTGF1cmEgR3JvZXR6aW5nZXIgUG9ydGZvbGlvXCIgLz5cbiAgICAgIHshci5pc01vYmlsZSAmJiA8RGFya01lbnUgYWN0aXZlPVwiYWJvdXRtZVwiIC8+fVxuXG4gICAgICA8TXlXb3JrU2hlbGwgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7ci5pc01vYmlsZSAmJiA8T3ZlcnJpZGU+PEdsYW1vdXJTaG90IHRpdGxlPVwiQWJvdXQgTWVcIiAvPjwvT3ZlcnJpZGU+fVxuXG4gICAgICAgIHshci5pc01vYmlsZSAmJlxuICAgICAgICAgPFBpY3R1cmVDb250YWluZXI+XG4gICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9MYW5kaW5nLXRvcEAyeC5wbmdcIiAvPlxuICAgICAgICAgPC9QaWN0dXJlQ29udGFpbmVyPn1cblxuICAgICAgICA8TXlXb3JrQ29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICA8QWJvdXRNZSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRm9yIHRob3NlIHdobyBmaW5kIHRoZXNlIGJpb3MgYm9yaW5nLCBoZXJl4oCZcyBhIGhhaWt1Li4uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoYWlrdVwiPlxuICAgICAgICAgICAgICBDdXJpb3VzIGh1bWFuczxiciAvPlxuICAgICAgICAgICAgICBUcnlpbmcgdG8gc3BlYWsgdG8gbWFjaGluZXM8YnIvPlxuICAgICAgICAgICAgICBBbmQgaGVyZSwgSSBlbnRlclxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEluIHRoZSB1bmxpa2VseSBldmVudCB0aGF0IHRoZSBwb2VtIGRpZG7igJl0IHRlbGwgeW91IGV2ZXJ5dGhpbmcgeW91IG5lZWQgdG8ga25vdywgaGVyZeKAmXMgYSBiaXQgbW9yZTogSSBsaWtlIG1ha2luZyBsaWZlIHNpbXBsZSB0aHJvdWdoIGRlc2lnbi4gSeKAmW0gYSBwcm9ibGVtIHNvbHZlciB3aXRoIHN0cm9uZyBpbnR1aXRpb24gYWJvdXQgd2hhdCB1c2VycyBuZWVkLCBiYXNlZCBvbiBhIGRlY2FkZSBvZiBleHBlcmllbmNlLiBJIGhhdmUgYW4gYW5hbHl0aWNhbCBtaW5kLCBhIGJpZyBoZWFydCBhbmQgYSBwYXNzaW9uIGZvciBtYXJrZG93bi4gVXNlciBoYXBwaW5lc3MgaXMgYXQgdGhlIGZvcmVmcm9udCBvZiBteSB3b3JrLCBidXQgSSBhbHNvIGdldCBwcmV0dHkgZnJlYWtpbmcgZXhjaXRlZCBhYm91dCBkZXNpZ24gc3lzdGVtcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBBZnRlciB3b3JraW5nIGFzIHRoZSBWUCBvZiBQcm9kdWN0IGF0IFNlbGZNYWRlLCBJIHdhcyBlYWdlciB0byBmb2N1cyBteSBhdHRlbnRpb24gYmFjayB0b3dhcmRzIHByb2R1Y3QgZGVzaWduLiBUb2RheSwgSSdtIHRocmlsbGVkIHRvIGJlIGRlc2lnbmluZyBpbnRlcmZhY2VzIGF0IFRyZW1lbmRvdXMuY29tLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFdoYXTigJlzIG5leHQgZm9yIG1lPyBJ4oCZbSBvcGVuIHRvIHJlbW90ZSBzZW5pb3IgZGVzaWduIHJvbGVzIGFuZCBkZXNpZ24gbGVhZGVyc2hpcCBwb3NpdGlvbnMg4oCTIGJvdGggZnVsbCB0aW1lIGFuZCBjb250cmFjdC4gV29ya2luZyBvbiBzb21ldGhpbmcgd29uZGVyZnVsPyBMZXTigJlzIGNoYXQhIFJlYWNoIG1lIGF0IDxhIGhyZWY9XCJtYWlsdG86bGF1cmEuZ3JvZXR6aW5nZXJAZ21haWwuY29tXCI+bGF1cmEuZ3JvZXR6aW5nZXJAZ21haWwuY29tPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvQWJvdXRNZT5cbiAgICAgICAgPC9NeVdvcmtDb250YWluZXI+XG4gICAgICA8L015V29ya1NoZWxsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/aboutme.js\n");

/***/ })

})