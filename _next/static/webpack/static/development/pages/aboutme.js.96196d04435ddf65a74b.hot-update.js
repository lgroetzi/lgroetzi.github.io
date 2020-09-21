webpackHotUpdate("static/development/pages/aboutme.js",{

/***/ "./pages/aboutme.js":
/*!**************************!*\
  !*** ./pages/aboutme.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyWork; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menus */ \"./components/menus.js\");\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head */ \"./components/head.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/project */ \"./components/project.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 60px;\\n  font-family: Open Sans;\\n  font-size: 20px;\\n  margin: 35px 50px 0 0;\\n  color: #ffffff;\\n  line-height: 36px;\\n  \\n  & .haiku {\\n    border-left: solid 4px white;\\n    padding-left: 20px;\\n  }\\n  \\n  & a {\\n    color: #b5f44b;\\n    text-decoration: none;\\n  }\\n  & a:hover {\\n    text-decoration: underline;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  max-height: 800px;\\n  text-align: center;\\n  overflow: hidden;\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: center;\\n  img {\\n    width: 438px;\\n    height: 477.5px\\n  }\\n\\n  &.mobile img {\\n    transform: scale(-1, 1);\\n    width: auto;\\n    height: auto;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  width: 100%;\\n  min-height: calc(100vh - 92px);\\n\\n  & > div {\\n    width: 50%;\\n    font-size: 80px;\\n    line-height: 110px;\\n  }\\n\\n  &.mobile {\\n    flex-direction: column;\\n    min-height: auto;\\n  }\\n\\n  &.mobile > div {\\n    width: 100%;\\n    font-size: 49px;\\n    line-height: 65px;\\n  }\\n\\n  &.mobile > div ul li {\\n    line-height: 70px;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: #08202a;\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  align-items: center;\\n\\n  &.mobile {\\n    display: block;\\n  }\\n  ul {\\n    list-style: none;\\n    margin: 0;\\n    padding: 0 50px 50px 50px;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-family: Cabin, Arial, Helvetica, Sans-Serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  letter-spacing: 0.833333px;  /* or 137% */\\n  text-decoration: none;\\n  cursor: pointer;\\n  color: #B5F44B;\\n\\n  &:hover {\\n    color: #ffffff;\\n    transition: 0.6s;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nconst MyWorkLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject());\nconst MyWorkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c = MyWorkContainer;\nconst MyWorkShell = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c2 = MyWorkShell;\nconst PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c3 = PictureContainer;\nconst AboutMe = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c4 = AboutMe;\n\nfunction MobileLink(props) {\n  const {\n    href,\n    target,\n    rel,\n    text\n  } = props;\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_7__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_7__[\"responsiveClasses\"])(r);\n  return __jsx(MobileLinkStyled, {\n    href: href,\n    target: target,\n    rel: rel\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\"\n    }\n  }, __jsx(\"div\", {\n    style: {\n      flexGrow: 1,\n      margin: \"auto\"\n    }\n  }, props.children), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_6__[\"Chevron\"], {\n    className: className\n  })));\n}\n\n_c5 = MobileLink;\nfunction MyWork() {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_7__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_7__[\"responsiveClasses\"])(r);\n  return __jsx(\"div\", null, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_5__[\"Head\"], {\n    title: \"Laura Groetzinger Portfolio\"\n  }), __jsx(_components_menus__WEBPACK_IMPORTED_MODULE_4__[\"DarkMenu\"], {\n    active: \"aboutme\"\n  }), __jsx(MyWorkShell, {\n    className: className\n  }, !r.isMobile && __jsx(PictureContainer, null, __jsx(\"img\", {\n    src: \"/img/Landing-top@2x.png\"\n  })), __jsx(MyWorkContainer, {\n    className: className\n  }, __jsx(AboutMe, null, __jsx(\"p\", null, \"For those who find \\u201CAbout Me\\u201D blurbs boring, here\\u2019s a haiku:\"), __jsx(\"p\", {\n    className: \"haiku\"\n  }, \"Curious humans\", __jsx(\"br\", null), \"Trying to speak to machines\", __jsx(\"br\", null), \"And here, I enter\"), __jsx(\"p\", null, \"In the unlikely event that the poem didn\\u2019t tell you all you need to know, here\\u2019s a bit more: I like making life simple through design. I\\u2019m a problem solver with strong intuition about what users need, based on a decade of experience. I have an analytical mind, a big heart and a passion for markdown. User happiness is at the forefront of my work, but I also get pretty freaking excited about design systems. After working as the VP of Product at SelfMade, I was eager to focus my attention back towards product design. Today, I'm thrilled to be designing interfaces at Tremendous.com. What\\u2019s next for me? I\\u2019m open to remote senior design roles and design leadership positions \\u2013 both full time and contract. Working on something wonderful? Let\\u2019s chat! Reach me at \", __jsx(\"a\", {\n    href: \"mailto:laura.groetzinger@gmail.com\"\n  }, \"laura.groetzinger@gmail.com\"))))));\n}\n_c6 = MyWork;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"MyWorkContainer\");\n$RefreshReg$(_c2, \"MyWorkShell\");\n$RefreshReg$(_c3, \"PictureContainer\");\n$RefreshReg$(_c4, \"AboutMe\");\n$RefreshReg$(_c5, \"MobileLink\");\n$RefreshReg$(_c6, \"MyWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dG1lLmpzPzhmZWEiXSwibmFtZXMiOlsiTXlXb3JrTGluayIsInN0eWxlZCIsImEiLCJNeVdvcmtDb250YWluZXIiLCJkaXYiLCJNeVdvcmtTaGVsbCIsIlBpY3R1cmVDb250YWluZXIiLCJBYm91dE1lIiwiTW9iaWxlTGluayIsInByb3BzIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInRleHQiLCJyIiwiZ2V0UmVzcG9uc2l2ZW5lc3MiLCJjbGFzc05hbWUiLCJyZXNwb25zaXZlQ2xhc3NlcyIsImRpc3BsYXkiLCJmbGV4R3JvdyIsIm1hcmdpbiIsImNoaWxkcmVuIiwiTXlXb3JrIiwiaXNNb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQSxNQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLENBQVYsbUJBQWhCO0FBZUEsTUFBTUMsZUFBZSxHQUFHRix5REFBTSxDQUFDRyxHQUFWLG9CQUFyQjtLQUFNRCxlO0FBaUJOLE1BQU1FLFdBQVcsR0FBR0oseURBQU0sQ0FBQ0csR0FBVixvQkFBakI7TUFBTUMsVztBQTRCTixNQUFNQyxnQkFBZ0IsR0FBR0wseURBQU0sQ0FBQ0csR0FBVixvQkFBdEI7TUFBTUUsZ0I7QUFtQk4sTUFBTUMsT0FBTyxHQUFHTix5REFBTSxDQUFDRyxHQUFWLG9CQUFiO01BQU1HLE87O0FBc0JOLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3pCLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxVQUFSO0FBQWdCQyxPQUFoQjtBQUFxQkM7QUFBckIsTUFBOEJKLEtBQXBDO0FBQ0EsUUFBTUssQ0FBQyxHQUFHQywwRUFBaUIsRUFBM0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLDBFQUFpQixDQUFDSCxDQUFELENBQW5DO0FBQ0EsU0FDRSxNQUFDLGdCQUFEO0FBQWtCLFFBQUksRUFBRUosSUFBeEI7QUFBOEIsVUFBTSxFQUFFQyxNQUF0QztBQUE4QyxPQUFHLEVBQUVDO0FBQW5ELEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRU0sYUFBTyxFQUFFO0FBQVg7QUFBWixLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxDQUFaO0FBQWVDLFlBQU0sRUFBRTtBQUF2QjtBQUFaLEtBQThDWCxLQUFLLENBQUNZLFFBQXBELENBREYsRUFFRSxNQUFDLDJEQUFEO0FBQVMsYUFBUyxFQUFFTDtBQUFwQixJQUZGLENBREYsQ0FERjtBQVFEOztNQVpRUixVO0FBY00sU0FBU2MsTUFBVCxHQUFrQjtBQUMvQixRQUFNUixDQUFDLEdBQUdDLDBFQUFpQixFQUEzQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsMEVBQWlCLENBQUNILENBQUQsQ0FBbkM7QUFFQSxTQUNFLG1CQUNFLE1BQUMscURBQUQ7QUFBTSxTQUFLLEVBQUM7QUFBWixJQURGLEVBRUUsTUFBQywwREFBRDtBQUFVLFVBQU0sRUFBQztBQUFqQixJQUZGLEVBR0UsTUFBQyxXQUFEO0FBQWEsYUFBUyxFQUFFRTtBQUF4QixLQUNHLENBQUNGLENBQUMsQ0FBQ1MsUUFBSCxJQUNBLE1BQUMsZ0JBQUQsUUFDRTtBQUFLLE9BQUcsRUFBQztBQUFULElBREYsQ0FGSCxFQUtFLE1BQUMsZUFBRDtBQUFpQixhQUFTLEVBQUVQO0FBQTVCLEtBQ0UsTUFBQyxPQUFELFFBQ0UsK0ZBREYsRUFJRTtBQUFHLGFBQVMsRUFBQztBQUFiLHVCQUNnQixpQkFEaEIsaUNBRTZCLGlCQUY3QixzQkFKRixFQVNFLG96QkFLb0w7QUFBRyxRQUFJLEVBQUM7QUFBUixtQ0FMcEwsQ0FURixDQURGLENBTEYsQ0FIRixDQURGO0FBK0JEO01BbkN1Qk0sTSIsImZpbGUiOiIuL3BhZ2VzL2Fib3V0bWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgRGFya01lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL21lbnVzJztcbmltcG9ydCB7IEhlYWQgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWQnO1xuaW1wb3J0IHsgQ2hldnJvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdCc7XG5cbmltcG9ydCB7IGdldFJlc3BvbnNpdmVuZXNzLCByZXNwb25zaXZlQ2xhc3NlcyB9IGZyb20gJy4uL2xpYi9tZWRpYS1xdWVyeSc7XG5cblxuY29uc3QgTXlXb3JrTGluayA9IHN0eWxlZC5hYFxuICBmb250LWZhbWlseTogQ2FiaW4sIEFyaWFsLCBIZWx2ZXRpY2EsIFNhbnMtU2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjgzMzMzM3B4OyAgLyogb3IgMTM3JSAqL1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNCNUY0NEI7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdHJhbnNpdGlvbjogMC42cztcbiAgfVxuYDtcblxuY29uc3QgTXlXb3JrQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MjAyYTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCA1MHB4IDUwcHggNTBweDtcbiAgfVxuYDtcblxuY29uc3QgTXlXb3JrU2hlbGwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDkycHgpO1xuXG4gICYgPiBkaXYge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTBweDtcbiAgfVxuXG4gICYubW9iaWxlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cblxuICAmLm1vYmlsZSA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiA0OXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2NXB4O1xuICB9XG5cbiAgJi5tb2JpbGUgPiBkaXYgdWwgbGkge1xuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICB9XG5gO1xuXG5jb25zdCBQaWN0dXJlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LWhlaWdodDogODAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICB3aWR0aDogNDM4cHg7XG4gICAgaGVpZ2h0OiA0NzcuNXB4XG4gIH1cblxuICAmLm1vYmlsZSBpbWcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuYDtcblxuY29uc3QgQWJvdXRNZSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDYwcHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAzNXB4IDUwcHggMCAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIFxuICAmIC5oYWlrdSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDRweCB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4gICYgYSB7XG4gICAgY29sb3I6ICNiNWY0NGI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gICYgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIE1vYmlsZUxpbmsocHJvcHMpIHtcbiAgY29uc3QgeyBocmVmLCB0YXJnZXQsIHJlbCwgdGV4dCB9ID0gcHJvcHM7XG4gIGNvbnN0IHIgPSBnZXRSZXNwb25zaXZlbmVzcygpO1xuICBjb25zdCBjbGFzc05hbWUgPSByZXNwb25zaXZlQ2xhc3NlcyhyKTtcbiAgcmV0dXJuIChcbiAgICA8TW9iaWxlTGlua1N0eWxlZCBocmVmPXtocmVmfSB0YXJnZXQ9e3RhcmdldH0gcmVsPXtyZWx9PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4R3JvdzogMSwgbWFyZ2luOiBcImF1dG9cIiB9fT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDxDaGV2cm9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Nb2JpbGVMaW5rU3R5bGVkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVdvcmsoKSB7XG4gIGNvbnN0IHIgPSBnZXRSZXNwb25zaXZlbmVzcygpO1xuICBjb25zdCBjbGFzc05hbWUgPSByZXNwb25zaXZlQ2xhc3NlcyhyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZCB0aXRsZT1cIkxhdXJhIEdyb2V0emluZ2VyIFBvcnRmb2xpb1wiIC8+XG4gICAgICA8RGFya01lbnUgYWN0aXZlPVwiYWJvdXRtZVwiIC8+XG4gICAgICA8TXlXb3JrU2hlbGwgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7IXIuaXNNb2JpbGUgJiZcbiAgICAgICAgIDxQaWN0dXJlQ29udGFpbmVyPlxuICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvTGFuZGluZy10b3BAMngucG5nXCIgLz5cbiAgICAgICAgIDwvUGljdHVyZUNvbnRhaW5lcj59XG4gICAgICAgIDxNeVdvcmtDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxBYm91dE1lPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEZvciB0aG9zZSB3aG8gZmluZCDigJxBYm91dCBNZeKAnSBibHVyYnMgYm9yaW5nLCBoZXJl4oCZcyBhIGhhaWt1OiBcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhhaWt1XCI+XG4gICAgICAgICAgICAgIEN1cmlvdXMgaHVtYW5zPGJyIC8+XG4gICAgICAgICAgICAgIFRyeWluZyB0byBzcGVhayB0byBtYWNoaW5lczxici8+XG4gICAgICAgICAgICAgIEFuZCBoZXJlLCBJIGVudGVyXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSW4gdGhlIHVubGlrZWx5IGV2ZW50IHRoYXQgdGhlIHBvZW0gZGlkbuKAmXQgdGVsbCB5b3UgYWxsIHlvdSBuZWVkIHRvIGtub3csIGhlcmXigJlzIGEgYml0IG1vcmU6IEkgbGlrZSBtYWtpbmcgbGlmZSBzaW1wbGUgdGhyb3VnaCBkZXNpZ24uIEnigJltIGEgcHJvYmxlbSBzb2x2ZXIgd2l0aCBzdHJvbmcgaW50dWl0aW9uIGFib3V0IHdoYXQgdXNlcnMgbmVlZCwgYmFzZWQgb24gYSBkZWNhZGUgb2YgZXhwZXJpZW5jZS4gSSBoYXZlIGFuIGFuYWx5dGljYWwgbWluZCwgYSBiaWcgaGVhcnQgYW5kIGEgcGFzc2lvbiBmb3IgbWFya2Rvd24uIFVzZXIgaGFwcGluZXNzIGlzIGF0IHRoZSBmb3JlZnJvbnQgb2YgbXkgd29yaywgYnV0IEkgYWxzbyBnZXQgcHJldHR5IGZyZWFraW5nIGV4Y2l0ZWQgYWJvdXQgZGVzaWduIHN5c3RlbXMuXG5cbiAgICAgICAgICAgICAgQWZ0ZXIgd29ya2luZyBhcyB0aGUgVlAgb2YgUHJvZHVjdCBhdCBTZWxmTWFkZSwgSSB3YXMgZWFnZXIgdG8gZm9jdXMgbXkgYXR0ZW50aW9uIGJhY2sgdG93YXJkcyBwcm9kdWN0IGRlc2lnbi4gVG9kYXksIEknbSB0aHJpbGxlZCB0byBiZSBkZXNpZ25pbmcgaW50ZXJmYWNlcyBhdCBUcmVtZW5kb3VzLmNvbS5cblxuICAgICAgICAgICAgICBXaGF04oCZcyBuZXh0IGZvciBtZT8gSeKAmW0gb3BlbiB0byByZW1vdGUgc2VuaW9yIGRlc2lnbiByb2xlcyBhbmQgZGVzaWduIGxlYWRlcnNoaXAgcG9zaXRpb25zIOKAkyBib3RoIGZ1bGwgdGltZSBhbmQgY29udHJhY3QuIFdvcmtpbmcgb24gc29tZXRoaW5nIHdvbmRlcmZ1bD8gTGV04oCZcyBjaGF0ISBSZWFjaCBtZSBhdCA8YSBocmVmPVwibWFpbHRvOmxhdXJhLmdyb2V0emluZ2VyQGdtYWlsLmNvbVwiPmxhdXJhLmdyb2V0emluZ2VyQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0Fib3V0TWU+XG4gICAgICAgIDwvTXlXb3JrQ29udGFpbmVyPlxuICAgICAgPC9NeVdvcmtTaGVsbD5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/aboutme.js\n");

/***/ })

})