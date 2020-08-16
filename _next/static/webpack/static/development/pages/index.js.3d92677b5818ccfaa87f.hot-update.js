webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyWork; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menus */ \"./components/menus.js\");\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head */ \"./components/head.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/project */ \"./components/project.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject8() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #08202A;\\n  text-decoration: none;\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  list-style: none;\\n  padding: 0;\\n  margin: 0;\\n\\n  font-family: Cabin;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 49px;\\n  line-height: 60px;\\n  letter-spacing: 2px; /* identical to box height, or 100% */\\n\\n  & li {\\n    padding: 40px;\\n  }\\n\\n  & li.reach-me {\\n    font-family: Open Sans;\\n    font-size: 15px;\\n    line-height: 30px;\\n    background-color: #08202a;\\n    letter-spacing: 1px;\\n  }\\n  & li.reach-me a {\\n    color: #FFFFFF;\\n  }\\n  & li.reach-me address {\\n    font-style: normal;\\n    color: #c0d9dd;\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 40px;\\n  width: calc(100% - 80px) !important;\\n\\n  font-family: Open Sans;\\n  font-style: normal;\\n  font-weight: bold;\\n  line-height: 140px;\\n\\n  background: url(/img/Landing-top@2x.png) no-repeat;\\n  background-position: right +10% bottom;\\n  background-size: 200px;\\n\\n  & .who {\\n    font-size: 14px;\\n    display: inline;\\n    border-bottom: 4px solid #b5f44b;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #ffffff;\\n  padding: 50px 50px 0 50px;\\n  font-family: Open Sans;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 14px;\\n  line-height: 40px;\\n  letter-spacing: 1px;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  max-height: 800px;\\n  text-align: center;\\n  overflow: hidden;\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: center;\\n  img {\\n    width: 438px;\\n    height: 477.5px\\n  }\\n\\n  &.mobile img {\\n    transform: scale(-1, 1);\\n    width: auto;\\n    height: auto;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  width: 100%;\\n  min-height: calc(100vh - 92px);\\n\\n  & > div {\\n    width: 50%;\\n    font-size: 80px;\\n    line-height: 110px;\\n  }\\n\\n  &.mobile {\\n    flex-direction: column;\\n    min-height: auto;\\n  }\\n\\n  &.mobile > div {\\n    width: 100%;\\n    font-size: 49px;\\n    line-height: 65px;\\n  }\\n\\n  &.mobile > div ul li {\\n    line-height: 70px;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: #08202a;\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  align-items: center;\\n\\n  &.mobile {\\n    display: block;\\n  }\\n  ul {\\n    list-style: none;\\n    margin: 0;\\n    padding: 0 50px 50px 50px;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-family: Cabin, Arial, Helvetica, Sans-Serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  letter-spacing: 0.833333px;  /* or 137% */\\n  text-decoration: none;\\n  cursor: pointer;\\n  color: #B5F44B;\\n\\n  &:hover {\\n    color: #ffffff;\\n    transition: 0.6s;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nconst MyWorkLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject());\n_c = MyWorkLink;\nconst MyWorkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = MyWorkContainer;\nconst MyWorkShell = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = MyWorkShell;\nconst PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c4 = PictureContainer;\nconst RecentProjects = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c5 = RecentProjects;\nconst MobileCover = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c6 = MobileCover;\nconst MobileLinks = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul(_templateObject7());\n_c7 = MobileLinks;\nconst MobileLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject8());\n_c8 = MobileLink;\nfunction MyWork() {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_7__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_7__[\"responsiveClasses\"])(r);\n  return __jsx(\"div\", null, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_5__[\"Head\"], {\n    title: \"Laura Groetzinger Portfolio\"\n  }), __jsx(_components_menus__WEBPACK_IMPORTED_MODULE_4__[\"DarkMenu\"], {\n    active: \"index\"\n  }), __jsx(MyWorkShell, {\n    className: className\n  }, !r.isMobile && __jsx(PictureContainer, null, __jsx(\"img\", {\n    src: \"/img/Landing-top@2x.png\"\n  })), r.isMobile && __jsx(MobileCover, null, __jsx(\"div\", {\n    className: \"who\"\n  }, \"Laura Groetzinger\"), __jsx(\"div\", {\n    className: \"what\"\n  }, \"Product Design\")), __jsx(MyWorkContainer, {\n    className: className\n  }, r.isMobile && __jsx(RecentProjects, null, \"Recent Projects\"), __jsx(\"ul\", null, __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/collabs\"\n  }, __jsx(MyWorkLink, null, \"collabs\"))), __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/justworks\"\n  }, __jsx(MyWorkLink, null, \"justworks\"))), __jsx(\"li\", null, __jsx(MyWorkLink, {\n    href: \"/selfmade1.0\"\n  }, \"selfmade1.0\")), __jsx(\"li\", null, __jsx(MyWorkLink, {\n    href: \"/selfmade2.0\"\n  }, \"selfmade2.0\"))))), r.isMobile && __jsx(MobileLinks, null, __jsx(\"li\", {\n    style: {\n      backgroundColor: '#F2F2F2'\n    }\n  }, __jsx(MobileLink, {\n    href: \"https://www.linkedin.com/in/laura-groetzinger-b0857b21/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, __jsx(\"div\", null, \"linkedIn\", __jsx(_components_project__WEBPACK_IMPORTED_MODULE_6__[\"Chevron\"], {\n    className: className\n  })))), __jsx(\"li\", {\n    style: {\n      backgroundColor: '#C0D9DD'\n    }\n  }, __jsx(MobileLink, {\n    href: \"https://www.instagram.com/pinkandsalt/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, __jsx(\"div\", null, \"side gig\", __jsx(_components_project__WEBPACK_IMPORTED_MODULE_6__[\"Chevron\"], {\n    className: className\n  })))), __jsx(\"li\", {\n    className: \"reach-me\"\n  }, __jsx(MobileLink, {\n    href: \"mailto:laura.groetzinger@gmail.com\"\n  }, __jsx(\"div\", null, \"Reach me at\", __jsx(\"address\", null, \"laura.groetzinger@gmail.com\"))))));\n}\n_c9 = MyWork;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"MyWorkLink\");\n$RefreshReg$(_c2, \"MyWorkContainer\");\n$RefreshReg$(_c3, \"MyWorkShell\");\n$RefreshReg$(_c4, \"PictureContainer\");\n$RefreshReg$(_c5, \"RecentProjects\");\n$RefreshReg$(_c6, \"MobileCover\");\n$RefreshReg$(_c7, \"MobileLinks\");\n$RefreshReg$(_c8, \"MobileLink\");\n$RefreshReg$(_c9, \"MyWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk15V29ya0xpbmsiLCJzdHlsZWQiLCJhIiwiTXlXb3JrQ29udGFpbmVyIiwiZGl2IiwiTXlXb3JrU2hlbGwiLCJQaWN0dXJlQ29udGFpbmVyIiwiUmVjZW50UHJvamVjdHMiLCJNb2JpbGVDb3ZlciIsIk1vYmlsZUxpbmtzIiwidWwiLCJNb2JpbGVMaW5rIiwiTXlXb3JrIiwiciIsImdldFJlc3BvbnNpdmVuZXNzIiwiY2xhc3NOYW1lIiwicmVzcG9uc2l2ZUNsYXNzZXMiLCJpc01vYmlsZSIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLE1BQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVixtQkFBaEI7S0FBTUYsVTtBQWVOLE1BQU1HLGVBQWUsR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBckI7TUFBTUQsZTtBQWlCTixNQUFNRSxXQUFXLEdBQUdKLHlEQUFNLENBQUNHLEdBQVYsb0JBQWpCO01BQU1DLFc7QUE0Qk4sTUFBTUMsZ0JBQWdCLEdBQUdMLHlEQUFNLENBQUNHLEdBQVYsb0JBQXRCO01BQU1FLGdCO0FBbUJOLE1BQU1DLGNBQWMsR0FBR04seURBQU0sQ0FBQ0csR0FBVixvQkFBcEI7TUFBTUcsYztBQVdOLE1BQU1DLFdBQVcsR0FBR1AseURBQU0sQ0FBQ0csR0FBVixvQkFBakI7TUFBTUksVztBQW9CTixNQUFNQyxXQUFXLEdBQUdSLHlEQUFNLENBQUNTLEVBQVYsb0JBQWpCO01BQU1ELFc7QUFnQ04sTUFBTUUsVUFBVSxHQUFHVix5REFBTSxDQUFDQyxDQUFWLG9CQUFoQjtNQUFNUyxVO0FBS1MsU0FBU0MsTUFBVCxHQUFrQjtBQUMvQixRQUFNQyxDQUFDLEdBQUdDLDBFQUFpQixFQUEzQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsMEVBQWlCLENBQUNILENBQUQsQ0FBbkM7QUFFQSxTQUNFLG1CQUNFLE1BQUMscURBQUQ7QUFBTSxTQUFLLEVBQUM7QUFBWixJQURGLEVBRUUsTUFBQywwREFBRDtBQUFVLFVBQU0sRUFBQztBQUFqQixJQUZGLEVBR0UsTUFBQyxXQUFEO0FBQWEsYUFBUyxFQUFFRTtBQUF4QixLQUNHLENBQUNGLENBQUMsQ0FBQ0ksUUFBSCxJQUNBLE1BQUMsZ0JBQUQsUUFDRTtBQUFLLE9BQUcsRUFBQztBQUFULElBREYsQ0FGSCxFQU1HSixDQUFDLENBQUNJLFFBQUYsSUFDQSxNQUFDLFdBQUQsUUFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLHlCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixzQkFGRixDQVBILEVBWUUsTUFBQyxlQUFEO0FBQWlCLGFBQVMsRUFBRUY7QUFBNUIsS0FDR0YsQ0FBQyxDQUFDSSxRQUFGLElBQ0EsTUFBQyxjQUFELDBCQUZILEVBR0Usa0JBQ0Usa0JBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQyxVQUFELGtCQURGLENBREYsQ0FERixFQU1FLGtCQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsVUFBRCxvQkFERixDQURGLENBTkYsRUFXRSxrQkFBSSxNQUFDLFVBQUQ7QUFBWSxRQUFJLEVBQUM7QUFBakIsbUJBQUosQ0FYRixFQVlFLGtCQUFJLE1BQUMsVUFBRDtBQUFZLFFBQUksRUFBQztBQUFqQixtQkFBSixDQVpGLENBSEYsQ0FaRixDQUhGLEVBbUNHSixDQUFDLENBQUNJLFFBQUYsSUFDQSxNQUFDLFdBQUQsUUFDRTtBQUFJLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFO0FBQW5CO0FBQVgsS0FDRSxNQUFDLFVBQUQ7QUFDRSxRQUFJLEVBQUMseURBRFA7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQztBQUhOLEtBS0UsK0JBRUUsTUFBQywyREFBRDtBQUFTLGFBQVMsRUFBRUg7QUFBcEIsSUFGRixDQUxGLENBREYsQ0FERixFQWFFO0FBQUksU0FBSyxFQUFFO0FBQUVHLHFCQUFlLEVBQUU7QUFBbkI7QUFBWCxLQUNFLE1BQUMsVUFBRDtBQUNFLFFBQUksRUFBQyx3Q0FEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDO0FBSE4sS0FLRSwrQkFFRSxNQUFDLDJEQUFEO0FBQVMsYUFBUyxFQUFFSDtBQUFwQixJQUZGLENBTEYsQ0FERixDQWJGLEVBeUJFO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDRSxNQUFDLFVBQUQ7QUFDRSxRQUFJLEVBQUM7QUFEUCxLQUdFLGtDQUVFLHFEQUZGLENBSEYsQ0FERixDQXpCRixDQXBDSCxDQURGO0FBMkVEO01BL0V1QkgsTSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IERhcmtNZW51IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tZW51cyc7XG5pbXBvcnQgeyBIZWFkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJztcbmltcG9ydCB7IENoZXZyb24gfSBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3QnO1xuXG5pbXBvcnQgeyBnZXRSZXNwb25zaXZlbmVzcywgcmVzcG9uc2l2ZUNsYXNzZXMgfSBmcm9tICcuLi9saWIvbWVkaWEtcXVlcnknO1xuXG5cbmNvbnN0IE15V29ya0xpbmsgPSBzdHlsZWQuYWBcbiAgZm9udC1mYW1pbHk6IENhYmluLCBBcmlhbCwgSGVsdmV0aWNhLCBTYW5zLVNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC44MzMzMzNweDsgIC8qIG9yIDEzNyUgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjQjVGNDRCO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRyYW5zaXRpb246IDAuNnM7XG4gIH1cbmA7XG5cbmNvbnN0IE15V29ya0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODIwMmE7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmLm1vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgNTBweCA1MHB4IDUwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IE15V29ya1NoZWxsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA5MnB4KTtcblxuICAmID4gZGl2IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBsaW5lLWhlaWdodDogMTEwcHg7XG4gIH1cblxuICAmLm1vYmlsZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgJi5tb2JpbGUgPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogNDlweDtcbiAgICBsaW5lLWhlaWdodDogNjVweDtcbiAgfVxuXG4gICYubW9iaWxlID4gZGl2IHVsIGxpIHtcbiAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgfVxuYDtcblxuY29uc3QgUGljdHVyZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGltZyB7XG4gICAgd2lkdGg6IDQzOHB4O1xuICAgIGhlaWdodDogNDc3LjVweFxuICB9XG5cbiAgJi5tb2JpbGUgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbmA7XG5cbmNvbnN0IFJlY2VudFByb2plY3RzID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDUwcHggNTBweCAwIDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG5gO1xuXG5jb25zdCBNb2JpbGVDb3ZlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDQwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KSAhaW1wb3J0YW50O1xuXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxNDBweDtcblxuICBiYWNrZ3JvdW5kOiB1cmwoL2ltZy9MYW5kaW5nLXRvcEAyeC5wbmcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgKzEwJSBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwcHg7XG5cbiAgJiAud2hvIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjYjVmNDRiO1xuICB9XG5gO1xuXG5jb25zdCBNb2JpbGVMaW5rcyA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuXG4gIGZvbnQtZmFtaWx5OiBDYWJpbjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0OXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDsgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDEwMCUgKi9cblxuICAmIGxpIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICB9XG5cbiAgJiBsaS5yZWFjaC1tZSB7XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MjAyYTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG4gICYgbGkucmVhY2gtbWUgYSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgJiBsaS5yZWFjaC1tZSBhZGRyZXNzIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgY29sb3I6ICNjMGQ5ZGQ7XG4gIH1cbmA7XG5cbmNvbnN0IE1vYmlsZUxpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICMwODIwMkE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15V29yaygpIHtcbiAgY29uc3QgciA9IGdldFJlc3BvbnNpdmVuZXNzKCk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IHJlc3BvbnNpdmVDbGFzc2VzKHIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkIHRpdGxlPVwiTGF1cmEgR3JvZXR6aW5nZXIgUG9ydGZvbGlvXCIgLz5cbiAgICAgIDxEYXJrTWVudSBhY3RpdmU9XCJpbmRleFwiIC8+XG4gICAgICA8TXlXb3JrU2hlbGwgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7IXIuaXNNb2JpbGUgJiZcbiAgICAgICAgIDxQaWN0dXJlQ29udGFpbmVyPlxuICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvTGFuZGluZy10b3BAMngucG5nXCIgLz5cbiAgICAgICAgIDwvUGljdHVyZUNvbnRhaW5lcj59XG5cbiAgICAgICAge3IuaXNNb2JpbGUgJiZcbiAgICAgICAgIDxNb2JpbGVDb3Zlcj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aG9cIj5MYXVyYSBHcm9ldHppbmdlcjwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXRcIj5Qcm9kdWN0IERlc2lnbjwvZGl2PlxuICAgICAgICAgPC9Nb2JpbGVDb3Zlcj59XG5cbiAgICAgICAgPE15V29ya0NvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAge3IuaXNNb2JpbGUgJiZcbiAgICAgICAgICAgPFJlY2VudFByb2plY3RzPlJlY2VudCBQcm9qZWN0czwvUmVjZW50UHJvamVjdHM+fVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2xsYWJzXCI+XG4gICAgICAgICAgICAgICAgPE15V29ya0xpbms+Y29sbGFiczwvTXlXb3JrTGluaz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9qdXN0d29ya3NcIj5cbiAgICAgICAgICAgICAgICA8TXlXb3JrTGluaz5qdXN0d29ya3M8L015V29ya0xpbms+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+PE15V29ya0xpbmsgaHJlZj1cIi9zZWxmbWFkZTEuMFwiPnNlbGZtYWRlMS4wPC9NeVdvcmtMaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PE15V29ya0xpbmsgaHJlZj1cIi9zZWxmbWFkZTIuMFwiPnNlbGZtYWRlMi4wPC9NeVdvcmtMaW5rPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9NeVdvcmtDb250YWluZXI+XG4gICAgICA8L015V29ya1NoZWxsPlxuXG4gICAgICB7ci5pc01vYmlsZSAmJlxuICAgICAgIDxNb2JpbGVMaW5rcz5cbiAgICAgICAgIDxsaSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjJGMkYyJyB9fT5cbiAgICAgICAgICAgPE1vYmlsZUxpbmtcbiAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xhdXJhLWdyb2V0emluZ2VyLWIwODU3YjIxL1wiXG4gICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgPlxuICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICBsaW5rZWRJblxuICAgICAgICAgICAgICAgPENoZXZyb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvTW9iaWxlTGluaz5cbiAgICAgICAgIDwvbGk+XG4gICAgICAgICA8bGkgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI0MwRDlERCcgfX0+XG4gICAgICAgICAgIDxNb2JpbGVMaW5rXG4gICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcGlua2FuZHNhbHQvXCJcbiAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICA+XG4gICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIHNpZGUgZ2lnXG4gICAgICAgICAgICAgICA8Q2hldnJvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9Nb2JpbGVMaW5rPlxuICAgICAgICAgPC9saT5cbiAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJyZWFjaC1tZVwiPlxuICAgICAgICAgICA8TW9iaWxlTGlua1xuICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86bGF1cmEuZ3JvZXR6aW5nZXJAZ21haWwuY29tXCJcbiAgICAgICAgICAgPlxuICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICBSZWFjaCBtZSBhdFxuICAgICAgICAgICAgICAgPGFkZHJlc3M+bGF1cmEuZ3JvZXR6aW5nZXJAZ21haWwuY29tPC9hZGRyZXNzPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L01vYmlsZUxpbms+XG4gICAgICAgICA8L2xpPlxuICAgICAgIDwvTW9iaWxlTGlua3M+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})