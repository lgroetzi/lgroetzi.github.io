webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyWork; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menus */ \"./components/menus.js\");\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head */ \"./components/head.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/project */ \"./components/project.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject8() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #08202A;\\n  text-decoration: none;\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  list-style: none;\\n  padding: 0;\\n  margin: 0;\\n\\n  font-family: Cabin;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 49px;\\n  line-height: 60px;\\n  letter-spacing: 2px; /* identical to box height, or 100% */\\n\\n  & li {\\n    padding: 40px;\\n  }\\n\\n  & li.reach-me {\\n    font-family: Open Sans;\\n    font-size: 15px;\\n    line-height: 30px;\\n    background-color: #08202a;\\n    letter-spacing: 1px;\\n  }\\n  & li.reach-me a {\\n    color: #FFFFFF;\\n  }\\n  & li.reach-me address {\\n    font-style: normal;\\n    color: #c0d9dd;\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 40px;\\n  width: calc(100% - 80px) !important;\\n\\n  font-family: Open Sans;\\n  font-style: normal;\\n  font-weight: bold;\\n  line-height: 140px;\\n\\n  background: url(/img/Landing-top@2x.png) no-repeat 130% 100%;\\n  background-size: 200px;\\n\\n  & .who {\\n    font-size: 14px;\\n    display: inline;\\n    border-bottom: 4px solid #b5f44b;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #ffffff;\\n  padding: 50px 50px 0 50px;\\n  font-family: Open Sans;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 14px;\\n  line-height: 40px;\\n  letter-spacing: 1px;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  max-height: 800px;\\n  text-align: center;\\n  overflow: hidden;\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: center;\\n  img {\\n    width: 438px;\\n    height: 477.5px\\n  }\\n\\n  &.mobile img {\\n    transform: scale(-1, 1);\\n    width: auto;\\n    height: auto;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  width: 100%;\\n  min-height: calc(100vh - 92px);\\n\\n  & > div {\\n    width: 50%;\\n    font-size: 80px;\\n    line-height: 110px;\\n  }\\n\\n  &.mobile {\\n    flex-direction: column;\\n    min-height: auto;\\n  }\\n\\n  &.mobile > div {\\n    width: 100%;\\n    font-size: 49px;\\n    line-height: 65px;\\n  }\\n\\n  &.mobile > div ul li {\\n    line-height: 70px;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: #08202a;\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  align-items: center;\\n\\n  &.mobile {\\n    display: block;\\n  }\\n  ul {\\n    list-style: none;\\n    margin: 0;\\n    padding: 0 50px 50px 50px;\\n  }\\n  & .reach-me-desktop {\\n    color: #fff;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-family: Cabin, Arial, Helvetica, Sans-Serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  letter-spacing: 0.833333px;  /* or 137% */\\n  text-decoration: none;\\n  cursor: pointer;\\n  color: #B5F44B;\\n\\n  &:hover {\\n    color: #ffffff;\\n    transition: 0.6s;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nconst MyWorkLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject());\n_c = MyWorkLink;\nconst MyWorkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = MyWorkContainer;\nconst MyWorkShell = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = MyWorkShell;\nconst PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c4 = PictureContainer;\nconst RecentProjects = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c5 = RecentProjects;\nconst MobileCover = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c6 = MobileCover;\nconst MobileLinks = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul(_templateObject7());\n_c7 = MobileLinks;\nconst MobileLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject8());\n_c8 = MobileLink;\nfunction MyWork() {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_7__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_7__[\"responsiveClasses\"])(r);\n  return __jsx(\"div\", null, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_5__[\"Head\"], {\n    title: \"Laura Groetzinger Portfolio\"\n  }), __jsx(_components_menus__WEBPACK_IMPORTED_MODULE_4__[\"DarkMenu\"], {\n    active: \"index\"\n  }), __jsx(MyWorkShell, {\n    className: className\n  }, !r.isMobile && __jsx(PictureContainer, null, __jsx(\"img\", {\n    src: \"/img/Landing-top@2x.png\"\n  })), r.isMobile && __jsx(MobileCover, null, __jsx(\"div\", {\n    className: \"who\"\n  }, \"Laura Groetzinger\"), __jsx(\"div\", {\n    className: \"what\"\n  }, \"Product Design\")), __jsx(MyWorkContainer, {\n    className: className\n  }, r.isMobile && __jsx(RecentProjects, null, \"Recent Projects\"), __jsx(\"ul\", null, __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/collabs\"\n  }, __jsx(MyWorkLink, null, \"collabs\"))), __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/justworks\"\n  }, __jsx(MyWorkLink, null, \"justworks\"))), __jsx(\"li\", null, __jsx(MyWorkLink, {\n    href: \"/selfmade1.0\"\n  }, \"selfmade1.0\")), __jsx(\"li\", null, __jsx(MyWorkLink, {\n    href: \"/selfmade2.0\"\n  }, \"selfmade2.0\"))), __jsx(\"div\", {\n    className: \"reach-me-desktop\"\n  }, \"Reach me at\", __jsx(\"address\", null, \"laura.groetzinger@gmail.com\")))), r.isMobile && __jsx(MobileLinks, null, __jsx(\"li\", {\n    style: {\n      backgroundColor: '#F2F2F2'\n    }\n  }, __jsx(MobileLink, {\n    href: \"https://www.linkedin.com/in/laura-groetzinger-b0857b21/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, __jsx(\"div\", null, \"linkedIn\", __jsx(_components_project__WEBPACK_IMPORTED_MODULE_6__[\"Chevron\"], {\n    className: className\n  })))), __jsx(\"li\", {\n    style: {\n      backgroundColor: '#C0D9DD'\n    }\n  }, __jsx(MobileLink, {\n    href: \"https://www.instagram.com/pinkandsalt/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, __jsx(\"div\", null, \"side gig\", __jsx(_components_project__WEBPACK_IMPORTED_MODULE_6__[\"Chevron\"], {\n    className: className\n  })))), __jsx(\"li\", {\n    className: \"reach-me\"\n  }, __jsx(MobileLink, {\n    href: \"mailto:laura.groetzinger@gmail.com\"\n  }, __jsx(\"div\", null, \"Reach me at\", __jsx(\"address\", null, \"laura.groetzinger@gmail.com\"))))));\n}\n_c9 = MyWork;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"MyWorkLink\");\n$RefreshReg$(_c2, \"MyWorkContainer\");\n$RefreshReg$(_c3, \"MyWorkShell\");\n$RefreshReg$(_c4, \"PictureContainer\");\n$RefreshReg$(_c5, \"RecentProjects\");\n$RefreshReg$(_c6, \"MobileCover\");\n$RefreshReg$(_c7, \"MobileLinks\");\n$RefreshReg$(_c8, \"MobileLink\");\n$RefreshReg$(_c9, \"MyWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk15V29ya0xpbmsiLCJzdHlsZWQiLCJhIiwiTXlXb3JrQ29udGFpbmVyIiwiZGl2IiwiTXlXb3JrU2hlbGwiLCJQaWN0dXJlQ29udGFpbmVyIiwiUmVjZW50UHJvamVjdHMiLCJNb2JpbGVDb3ZlciIsIk1vYmlsZUxpbmtzIiwidWwiLCJNb2JpbGVMaW5rIiwiTXlXb3JrIiwiciIsImdldFJlc3BvbnNpdmVuZXNzIiwiY2xhc3NOYW1lIiwicmVzcG9uc2l2ZUNsYXNzZXMiLCJpc01vYmlsZSIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLE1BQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVixtQkFBaEI7S0FBTUYsVTtBQWVOLE1BQU1HLGVBQWUsR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBckI7TUFBTUQsZTtBQW9CTixNQUFNRSxXQUFXLEdBQUdKLHlEQUFNLENBQUNHLEdBQVYsb0JBQWpCO01BQU1DLFc7QUE0Qk4sTUFBTUMsZ0JBQWdCLEdBQUdMLHlEQUFNLENBQUNHLEdBQVYsb0JBQXRCO01BQU1FLGdCO0FBbUJOLE1BQU1DLGNBQWMsR0FBR04seURBQU0sQ0FBQ0csR0FBVixvQkFBcEI7TUFBTUcsYztBQVdOLE1BQU1DLFdBQVcsR0FBR1AseURBQU0sQ0FBQ0csR0FBVixvQkFBakI7TUFBTUksVztBQW1CTixNQUFNQyxXQUFXLEdBQUdSLHlEQUFNLENBQUNTLEVBQVYsb0JBQWpCO01BQU1ELFc7QUFnQ04sTUFBTUUsVUFBVSxHQUFHVix5REFBTSxDQUFDQyxDQUFWLG9CQUFoQjtNQUFNUyxVO0FBS1MsU0FBU0MsTUFBVCxHQUFrQjtBQUMvQixRQUFNQyxDQUFDLEdBQUdDLDBFQUFpQixFQUEzQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsMEVBQWlCLENBQUNILENBQUQsQ0FBbkM7QUFFQSxTQUNFLG1CQUNFLE1BQUMscURBQUQ7QUFBTSxTQUFLLEVBQUM7QUFBWixJQURGLEVBRUUsTUFBQywwREFBRDtBQUFVLFVBQU0sRUFBQztBQUFqQixJQUZGLEVBR0UsTUFBQyxXQUFEO0FBQWEsYUFBUyxFQUFFRTtBQUF4QixLQUNHLENBQUNGLENBQUMsQ0FBQ0ksUUFBSCxJQUNBLE1BQUMsZ0JBQUQsUUFDRTtBQUFLLE9BQUcsRUFBQztBQUFULElBREYsQ0FGSCxFQU1HSixDQUFDLENBQUNJLFFBQUYsSUFDQSxNQUFDLFdBQUQsUUFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLHlCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixzQkFGRixDQVBILEVBWUUsTUFBQyxlQUFEO0FBQWlCLGFBQVMsRUFBRUY7QUFBNUIsS0FDR0YsQ0FBQyxDQUFDSSxRQUFGLElBQ0EsTUFBQyxjQUFELDBCQUZILEVBR0Usa0JBQ0Usa0JBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQyxVQUFELGtCQURGLENBREYsQ0FERixFQU1FLGtCQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsVUFBRCxvQkFERixDQURGLENBTkYsRUFXRSxrQkFBSSxNQUFDLFVBQUQ7QUFBWSxRQUFJLEVBQUM7QUFBakIsbUJBQUosQ0FYRixFQVlFLGtCQUFJLE1BQUMsVUFBRDtBQUFZLFFBQUksRUFBQztBQUFqQixtQkFBSixDQVpGLENBSEYsRUFpQkU7QUFBSyxhQUFTLEVBQUM7QUFBZixvQkFDSyxxREFETCxDQWpCRixDQVpGLENBSEYsRUFzQ0dKLENBQUMsQ0FBQ0ksUUFBRixJQUNBLE1BQUMsV0FBRCxRQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUU7QUFBbkI7QUFBWCxLQUNFLE1BQUMsVUFBRDtBQUNFLFFBQUksRUFBQyx5REFEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDO0FBSE4sS0FLRSwrQkFFRSxNQUFDLDJEQUFEO0FBQVMsYUFBUyxFQUFFSDtBQUFwQixJQUZGLENBTEYsQ0FERixDQURGLEVBYUU7QUFBSSxTQUFLLEVBQUU7QUFBRUcscUJBQWUsRUFBRTtBQUFuQjtBQUFYLEtBQ0UsTUFBQyxVQUFEO0FBQ0UsUUFBSSxFQUFDLHdDQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUM7QUFITixLQUtFLCtCQUVFLE1BQUMsMkRBQUQ7QUFBUyxhQUFTLEVBQUVIO0FBQXBCLElBRkYsQ0FMRixDQURGLENBYkYsRUF5QkU7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNFLE1BQUMsVUFBRDtBQUNFLFFBQUksRUFBQztBQURQLEtBR0Usa0NBRUUscURBRkYsQ0FIRixDQURGLENBekJGLENBdkNILENBREY7QUE4RUQ7TUFsRnVCSCxNIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgRGFya01lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL21lbnVzJztcbmltcG9ydCB7IEhlYWQgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWQnO1xuaW1wb3J0IHsgQ2hldnJvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdCc7XG5cbmltcG9ydCB7IGdldFJlc3BvbnNpdmVuZXNzLCByZXNwb25zaXZlQ2xhc3NlcyB9IGZyb20gJy4uL2xpYi9tZWRpYS1xdWVyeSc7XG5cblxuY29uc3QgTXlXb3JrTGluayA9IHN0eWxlZC5hYFxuICBmb250LWZhbWlseTogQ2FiaW4sIEFyaWFsLCBIZWx2ZXRpY2EsIFNhbnMtU2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjgzMzMzM3B4OyAgLyogb3IgMTM3JSAqL1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNCNUY0NEI7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdHJhbnNpdGlvbjogMC42cztcbiAgfVxuYDtcblxuY29uc3QgTXlXb3JrQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MjAyYTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCA1MHB4IDUwcHggNTBweDtcbiAgfVxuICAmIC5yZWFjaC1tZS1kZXNrdG9wIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuYDtcblxuY29uc3QgTXlXb3JrU2hlbGwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDkycHgpO1xuXG4gICYgPiBkaXYge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTBweDtcbiAgfVxuXG4gICYubW9iaWxlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cblxuICAmLm1vYmlsZSA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiA0OXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2NXB4O1xuICB9XG5cbiAgJi5tb2JpbGUgPiBkaXYgdWwgbGkge1xuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICB9XG5gO1xuXG5jb25zdCBQaWN0dXJlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LWhlaWdodDogODAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICB3aWR0aDogNDM4cHg7XG4gICAgaGVpZ2h0OiA0NzcuNXB4XG4gIH1cblxuICAmLm1vYmlsZSBpbWcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuYDtcblxuY29uc3QgUmVjZW50UHJvamVjdHMgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNTBweCA1MHB4IDAgNTBweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbmA7XG5cbmNvbnN0IE1vYmlsZUNvdmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpICFpbXBvcnRhbnQ7XG5cbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDE0MHB4O1xuXG4gIGJhY2tncm91bmQ6IHVybCgvaW1nL0xhbmRpbmctdG9wQDJ4LnBuZykgbm8tcmVwZWF0IDEzMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweDtcblxuICAmIC53aG8ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNiNWY0NGI7XG4gIH1cbmA7XG5cbmNvbnN0IE1vYmlsZUxpbmtzID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5cbiAgZm9udC1mYW1pbHk6IENhYmluO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ5cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4OyAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTAwJSAqL1xuXG4gICYgbGkge1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gIH1cblxuICAmIGxpLnJlYWNoLW1lIHtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgyMDJhO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbiAgJiBsaS5yZWFjaC1tZSBhIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuICAmIGxpLnJlYWNoLW1lIGFkZHJlc3Mge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBjb2xvcjogI2MwZDlkZDtcbiAgfVxuYDtcblxuY29uc3QgTW9iaWxlTGluayA9IHN0eWxlZC5hYFxuICBjb2xvcjogIzA4MjAyQTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlXb3JrKCkge1xuICBjb25zdCByID0gZ2V0UmVzcG9uc2l2ZW5lc3MoKTtcbiAgY29uc3QgY2xhc3NOYW1lID0gcmVzcG9uc2l2ZUNsYXNzZXMocik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQgdGl0bGU9XCJMYXVyYSBHcm9ldHppbmdlciBQb3J0Zm9saW9cIiAvPlxuICAgICAgPERhcmtNZW51IGFjdGl2ZT1cImluZGV4XCIgLz5cbiAgICAgIDxNeVdvcmtTaGVsbCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHshci5pc01vYmlsZSAmJlxuICAgICAgICAgPFBpY3R1cmVDb250YWluZXI+XG4gICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9MYW5kaW5nLXRvcEAyeC5wbmdcIiAvPlxuICAgICAgICAgPC9QaWN0dXJlQ29udGFpbmVyPn1cblxuICAgICAgICB7ci5pc01vYmlsZSAmJlxuICAgICAgICAgPE1vYmlsZUNvdmVyPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndob1wiPkxhdXJhIEdyb2V0emluZ2VyPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdFwiPlByb2R1Y3QgRGVzaWduPC9kaXY+XG4gICAgICAgICA8L01vYmlsZUNvdmVyPn1cblxuICAgICAgICA8TXlXb3JrQ29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICB7ci5pc01vYmlsZSAmJlxuICAgICAgICAgICA8UmVjZW50UHJvamVjdHM+UmVjZW50IFByb2plY3RzPC9SZWNlbnRQcm9qZWN0cz59XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbGxhYnNcIj5cbiAgICAgICAgICAgICAgICA8TXlXb3JrTGluaz5jb2xsYWJzPC9NeVdvcmtMaW5rPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2p1c3R3b3Jrc1wiPlxuICAgICAgICAgICAgICAgIDxNeVdvcmtMaW5rPmp1c3R3b3JrczwvTXlXb3JrTGluaz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT48TXlXb3JrTGluayBocmVmPVwiL3NlbGZtYWRlMS4wXCI+c2VsZm1hZGUxLjA8L015V29ya0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TXlXb3JrTGluayBocmVmPVwiL3NlbGZtYWRlMi4wXCI+c2VsZm1hZGUyLjA8L015V29ya0xpbms+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY2gtbWUtZGVza3RvcFwiPlJlYWNoIG1lIGF0XG4gICAgICAgICAgICAgICA8YWRkcmVzcz5sYXVyYS5ncm9ldHppbmdlckBnbWFpbC5jb208L2FkZHJlc3M+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTXlXb3JrQ29udGFpbmVyPlxuICAgICAgPC9NeVdvcmtTaGVsbD5cblxuICAgICAge3IuaXNNb2JpbGUgJiZcbiAgICAgICA8TW9iaWxlTGlua3M+XG4gICAgICAgICA8bGkgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI0YyRjJGMicgfX0+XG4gICAgICAgICAgIDxNb2JpbGVMaW5rXG4gICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9sYXVyYS1ncm9ldHppbmdlci1iMDg1N2IyMS9cIlxuICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgID5cbiAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgbGlua2VkSW5cbiAgICAgICAgICAgICAgIDxDaGV2cm9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L01vYmlsZUxpbms+XG4gICAgICAgICA8L2xpPlxuICAgICAgICAgPGxpIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNDMEQ5REQnIH19PlxuICAgICAgICAgICA8TW9iaWxlTGlua1xuICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3BpbmthbmRzYWx0L1wiXG4gICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgPlxuICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICBzaWRlIGdpZ1xuICAgICAgICAgICAgICAgPENoZXZyb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvTW9iaWxlTGluaz5cbiAgICAgICAgIDwvbGk+XG4gICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmVhY2gtbWVcIj5cbiAgICAgICAgICAgPE1vYmlsZUxpbmtcbiAgICAgICAgICAgICBocmVmPVwibWFpbHRvOmxhdXJhLmdyb2V0emluZ2VyQGdtYWlsLmNvbVwiXG4gICAgICAgICAgID5cbiAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgUmVhY2ggbWUgYXRcbiAgICAgICAgICAgICAgIDxhZGRyZXNzPmxhdXJhLmdyb2V0emluZ2VyQGdtYWlsLmNvbTwvYWRkcmVzcz5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9Nb2JpbGVMaW5rPlxuICAgICAgICAgPC9saT5cbiAgICAgICA8L01vYmlsZUxpbmtzPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})