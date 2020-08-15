webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyWork; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menus */ \"./components/menus.js\");\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head */ \"./components/head.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/project */ \"./components/project.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject8() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #08202A;\\n  text-decoration: none;\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  list-style: none;\\n  padding: 0;\\n  margin: 0;\\n\\n  font-family: Cabin;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 49px;\\n  line-height: 60px;\\n  letter-spacing: 2px; /* identical to box height, or 100% */\\n\\n  & li {\\n    padding: 40px;\\n  }\\n\\n  & li.reach-me {\\n    font-family: Open Sans;\\n    font-size: 16px;\\n    line-height: 30px;\\n    background-color: #08202a;\\n    letter-spacing: 1.2;\\n  }\\n  & li.reach-me a {\\n    color: #FFFFFF;\\n  }\\n  & li.reach-me address {\\n    font-style: normal;\\n    color: #c0d9dd;\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 40px;\\n  width: calc(100% - 80px) !important;\\n\\n  font-family: Open Sans;\\n  font-style: normal;\\n  font-weight: bold;\\n  line-height: 140px;\\n\\n  background: url(/img/Landing-top@2x.png) no-repeat 130% 100%;\\n  background-size: 200px;\\n\\n  & .who {\\n    font-size: 14px;\\n    display: inline;\\n    border-bottom: 4px solid #b5f44b;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #ffffff;\\n  padding: 50px 50px 0 50px;\\n  font-family: Open Sans;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 14px;\\n  line-height: 40px;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  max-height: 800px;\\n  text-align: center;\\n  overflow: hidden;\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: center;\\n  img {\\n    width: 438px;\\n    height: 477.5px\\n  }\\n\\n  &.mobile img {\\n    transform: scale(-1, 1);\\n    width: auto;\\n    height: auto;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  width: 100%;\\n  min-height: calc(100vh - 92px);\\n\\n  & > div {\\n    width: 50%;\\n    font-size: 80px;\\n    line-height: 110px;\\n  }\\n\\n  &.mobile {\\n    flex-direction: column;\\n    min-height: auto;\\n  }\\n\\n  &.mobile > div {\\n    width: 100%;\\n    font-size: 49px;\\n    line-height: 65px;\\n  }\\n\\n  &.mobile > div ul li {\\n    line-height: 70px;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: #08202a;\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  align-items: center;\\n\\n  &.mobile {\\n    display: block;\\n  }\\n  ul {\\n    list-style: none;\\n    margin: 0;\\n    padding: 0 50px 50px 50px;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-family: Cabin, Arial, Helvetica, Sans-Serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  letter-spacing: 0.833333px;  /* or 137% */\\n  text-decoration: none;\\n  cursor: pointer;\\n  color: #B5F44B;\\n\\n  &:hover {\\n    color: #ffffff;\\n    transition: 0.6s;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nconst MyWorkLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject());\n_c = MyWorkLink;\nconst MyWorkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = MyWorkContainer;\nconst MyWorkShell = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = MyWorkShell;\nconst PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c4 = PictureContainer;\nconst RecentProjects = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c5 = RecentProjects;\nconst MobileCover = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c6 = MobileCover;\nconst MobileLinks = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul(_templateObject7());\n_c7 = MobileLinks;\nconst MobileLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject8());\n_c8 = MobileLink;\nfunction MyWork() {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_7__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_7__[\"responsiveClasses\"])(r);\n  return __jsx(\"div\", null, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_5__[\"Head\"], {\n    title: \"Laura Groetzinger Portfolio\"\n  }), __jsx(_components_menus__WEBPACK_IMPORTED_MODULE_4__[\"DarkMenu\"], {\n    active: \"index\"\n  }), __jsx(MyWorkShell, {\n    className: className\n  }, !r.isMobile && __jsx(PictureContainer, null, __jsx(\"img\", {\n    src: \"/img/Landing-top@2x.png\"\n  })), r.isMobile && __jsx(MobileCover, null, __jsx(\"div\", {\n    className: \"who\"\n  }, \"Laura Groetzinger\"), __jsx(\"div\", {\n    className: \"what\"\n  }, \"Product Design\")), __jsx(MyWorkContainer, {\n    className: className\n  }, r.isMobile && __jsx(RecentProjects, null, \"Recent Projects\"), __jsx(\"ul\", null, __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/collabs\"\n  }, __jsx(MyWorkLink, null, \"collabs\"))), __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/justworks\"\n  }, __jsx(MyWorkLink, null, \"justworks\"))), __jsx(\"li\", null, __jsx(MyWorkLink, {\n    href: \"/selfmade1.0\"\n  }, \"selfmade1.0\")), __jsx(\"li\", null, __jsx(MyWorkLink, {\n    href: \"/selfmade2.0\"\n  }, \"selfmade2.0\"))))), r.isMobile && __jsx(MobileLinks, null, __jsx(\"li\", {\n    style: {\n      backgroundColor: '#F2F2F2'\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/resume\"\n  }, __jsx(MobileLink, {\n    href: \"https://www.linkedin.com/in/laura-groetzinger-b0857b21/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"linkedIn\", __jsx(_components_project__WEBPACK_IMPORTED_MODULE_6__[\"Chevron\"], {\n    className: className\n  })))), __jsx(\"li\", {\n    style: {\n      backgroundColor: '#C0D9DD'\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/sidegig\"\n  }, __jsx(MobileLink, {\n    href: \"https://www.instagram.com/pinkandsalt/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"side gig\", __jsx(_components_project__WEBPACK_IMPORTED_MODULE_6__[\"Chevron\"], {\n    className: className\n  })))), __jsx(\"li\", {\n    className: \"reach-me\"\n  }, __jsx(MobileLink, {\n    href: \"mailto:laura.groetzinger@gmail.com\"\n  }, \"reach me at\", __jsx(\"address\", null, \"laura.groetzinger@gmail.com\")))));\n}\n_c9 = MyWork;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"MyWorkLink\");\n$RefreshReg$(_c2, \"MyWorkContainer\");\n$RefreshReg$(_c3, \"MyWorkShell\");\n$RefreshReg$(_c4, \"PictureContainer\");\n$RefreshReg$(_c5, \"RecentProjects\");\n$RefreshReg$(_c6, \"MobileCover\");\n$RefreshReg$(_c7, \"MobileLinks\");\n$RefreshReg$(_c8, \"MobileLink\");\n$RefreshReg$(_c9, \"MyWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk15V29ya0xpbmsiLCJzdHlsZWQiLCJhIiwiTXlXb3JrQ29udGFpbmVyIiwiZGl2IiwiTXlXb3JrU2hlbGwiLCJQaWN0dXJlQ29udGFpbmVyIiwiUmVjZW50UHJvamVjdHMiLCJNb2JpbGVDb3ZlciIsIk1vYmlsZUxpbmtzIiwidWwiLCJNb2JpbGVMaW5rIiwiTXlXb3JrIiwiciIsImdldFJlc3BvbnNpdmVuZXNzIiwiY2xhc3NOYW1lIiwicmVzcG9uc2l2ZUNsYXNzZXMiLCJpc01vYmlsZSIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLE1BQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVixtQkFBaEI7S0FBTUYsVTtBQWVOLE1BQU1HLGVBQWUsR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBckI7TUFBTUQsZTtBQWlCTixNQUFNRSxXQUFXLEdBQUdKLHlEQUFNLENBQUNHLEdBQVYsb0JBQWpCO01BQU1DLFc7QUE0Qk4sTUFBTUMsZ0JBQWdCLEdBQUdMLHlEQUFNLENBQUNHLEdBQVYsb0JBQXRCO01BQU1FLGdCO0FBbUJOLE1BQU1DLGNBQWMsR0FBR04seURBQU0sQ0FBQ0csR0FBVixvQkFBcEI7TUFBTUcsYztBQVVOLE1BQU1DLFdBQVcsR0FBR1AseURBQU0sQ0FBQ0csR0FBVixvQkFBakI7TUFBTUksVztBQW1CTixNQUFNQyxXQUFXLEdBQUdSLHlEQUFNLENBQUNTLEVBQVYsb0JBQWpCO01BQU1ELFc7QUFnQ04sTUFBTUUsVUFBVSxHQUFHVix5REFBTSxDQUFDQyxDQUFWLG9CQUFoQjtNQUFNUyxVO0FBS1MsU0FBU0MsTUFBVCxHQUFrQjtBQUMvQixRQUFNQyxDQUFDLEdBQUdDLDBFQUFpQixFQUEzQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsMEVBQWlCLENBQUNILENBQUQsQ0FBbkM7QUFFQSxTQUNFLG1CQUNFLE1BQUMscURBQUQ7QUFBTSxTQUFLLEVBQUM7QUFBWixJQURGLEVBRUUsTUFBQywwREFBRDtBQUFVLFVBQU0sRUFBQztBQUFqQixJQUZGLEVBR0UsTUFBQyxXQUFEO0FBQWEsYUFBUyxFQUFFRTtBQUF4QixLQUNHLENBQUNGLENBQUMsQ0FBQ0ksUUFBSCxJQUNBLE1BQUMsZ0JBQUQsUUFDRTtBQUFLLE9BQUcsRUFBQztBQUFULElBREYsQ0FGSCxFQU1HSixDQUFDLENBQUNJLFFBQUYsSUFDQSxNQUFDLFdBQUQsUUFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLHlCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixzQkFGRixDQVBILEVBWUUsTUFBQyxlQUFEO0FBQWlCLGFBQVMsRUFBRUY7QUFBNUIsS0FDR0YsQ0FBQyxDQUFDSSxRQUFGLElBQ0EsTUFBQyxjQUFELDBCQUZILEVBR0Usa0JBQ0Usa0JBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQyxVQUFELGtCQURGLENBREYsQ0FERixFQU1FLGtCQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsVUFBRCxvQkFERixDQURGLENBTkYsRUFXRSxrQkFBSSxNQUFDLFVBQUQ7QUFBWSxRQUFJLEVBQUM7QUFBakIsbUJBQUosQ0FYRixFQVlFLGtCQUFJLE1BQUMsVUFBRDtBQUFZLFFBQUksRUFBQztBQUFqQixtQkFBSixDQVpGLENBSEYsQ0FaRixDQUhGLEVBbUNHSixDQUFDLENBQUNJLFFBQUYsSUFDQSxNQUFDLFdBQUQsUUFDRTtBQUFJLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFO0FBQW5CO0FBQVgsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRSxNQUFDLFVBQUQ7QUFDRSxRQUFJLEVBQUMseURBRFA7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQztBQUhOLGlCQU1FLE1BQUMsMkRBQUQ7QUFBUyxhQUFTLEVBQUVIO0FBQXBCLElBTkYsQ0FERixDQURGLENBREYsRUFhRTtBQUFJLFNBQUssRUFBRTtBQUFFRyxxQkFBZSxFQUFFO0FBQW5CO0FBQVgsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRSxNQUFDLFVBQUQ7QUFDRSxRQUFJLEVBQUMsd0NBRFA7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQztBQUhOLGlCQU1FLE1BQUMsMkRBQUQ7QUFBUyxhQUFTLEVBQUVIO0FBQXBCLElBTkYsQ0FERixDQURGLENBYkYsRUF5QkU7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNFLE1BQUMsVUFBRDtBQUNFLFFBQUksRUFBQztBQURQLG9CQUlFLHFEQUpGLENBREYsQ0F6QkYsQ0FwQ0gsQ0FERjtBQXlFRDtNQTdFdUJILE0iLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBEYXJrTWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudXMnO1xuaW1wb3J0IHsgSGVhZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCc7XG5pbXBvcnQgeyBDaGV2cm9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0JztcblxuaW1wb3J0IHsgZ2V0UmVzcG9uc2l2ZW5lc3MsIHJlc3BvbnNpdmVDbGFzc2VzIH0gZnJvbSAnLi4vbGliL21lZGlhLXF1ZXJ5JztcblxuXG5jb25zdCBNeVdvcmtMaW5rID0gc3R5bGVkLmFgXG4gIGZvbnQtZmFtaWx5OiBDYWJpbiwgQXJpYWwsIEhlbHZldGljYSwgU2Fucy1TZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuODMzMzMzcHg7ICAvKiBvciAxMzclICovXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0I1RjQ0QjtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xuICB9XG5gO1xuXG5jb25zdCBNeVdvcmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgyMDJhO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJi5tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDUwcHggNTBweCA1MHB4O1xuICB9XG5gO1xuXG5jb25zdCBNeVdvcmtTaGVsbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTJweCk7XG5cbiAgJiA+IGRpdiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgJi5tb2JpbGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuXG4gICYubW9iaWxlID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDQ5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDY1cHg7XG4gIH1cblxuICAmLm1vYmlsZSA+IGRpdiB1bCBsaSB7XG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFBpY3R1cmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiA0MzhweDtcbiAgICBoZWlnaHQ6IDQ3Ny41cHhcbiAgfVxuXG4gICYubW9iaWxlIGltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5gO1xuXG5jb25zdCBSZWNlbnRQcm9qZWN0cyA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1MHB4IDUwcHggMCA1MHB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuYDtcblxuY29uc3QgTW9iaWxlQ292ZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA0MHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCkgIWltcG9ydGFudDtcblxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTQwcHg7XG5cbiAgYmFja2dyb3VuZDogdXJsKC9pbWcvTGFuZGluZy10b3BAMngucG5nKSBuby1yZXBlYXQgMTMwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xuXG4gICYgLndobyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2I1ZjQ0YjtcbiAgfVxuYDtcblxuY29uc3QgTW9iaWxlTGlua3MgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcblxuICBmb250LWZhbWlseTogQ2FiaW47XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDlweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7IC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMDAlICovXG5cbiAgJiBsaSB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxuXG4gICYgbGkucmVhY2gtbWUge1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODIwMmE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMjtcbiAgfVxuICAmIGxpLnJlYWNoLW1lIGEge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG4gICYgbGkucmVhY2gtbWUgYWRkcmVzcyB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGNvbG9yOiAjYzBkOWRkO1xuICB9XG5gO1xuXG5jb25zdCBNb2JpbGVMaW5rID0gc3R5bGVkLmFgXG4gIGNvbG9yOiAjMDgyMDJBO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVdvcmsoKSB7XG4gIGNvbnN0IHIgPSBnZXRSZXNwb25zaXZlbmVzcygpO1xuICBjb25zdCBjbGFzc05hbWUgPSByZXNwb25zaXZlQ2xhc3NlcyhyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZCB0aXRsZT1cIkxhdXJhIEdyb2V0emluZ2VyIFBvcnRmb2xpb1wiIC8+XG4gICAgICA8RGFya01lbnUgYWN0aXZlPVwiaW5kZXhcIiAvPlxuICAgICAgPE15V29ya1NoZWxsIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgeyFyLmlzTW9iaWxlICYmXG4gICAgICAgICA8UGljdHVyZUNvbnRhaW5lcj5cbiAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL0xhbmRpbmctdG9wQDJ4LnBuZ1wiIC8+XG4gICAgICAgICA8L1BpY3R1cmVDb250YWluZXI+fVxuXG4gICAgICAgIHtyLmlzTW9iaWxlICYmXG4gICAgICAgICA8TW9iaWxlQ292ZXI+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hvXCI+TGF1cmEgR3JvZXR6aW5nZXI8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGF0XCI+UHJvZHVjdCBEZXNpZ248L2Rpdj5cbiAgICAgICAgIDwvTW9iaWxlQ292ZXI+fVxuXG4gICAgICAgIDxNeVdvcmtDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIHtyLmlzTW9iaWxlICYmXG4gICAgICAgICAgIDxSZWNlbnRQcm9qZWN0cz5SZWNlbnQgUHJvamVjdHM8L1JlY2VudFByb2plY3RzPn1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29sbGFic1wiPlxuICAgICAgICAgICAgICAgIDxNeVdvcmtMaW5rPmNvbGxhYnM8L015V29ya0xpbms+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvanVzdHdvcmtzXCI+XG4gICAgICAgICAgICAgICAgPE15V29ya0xpbms+anVzdHdvcmtzPC9NeVdvcmtMaW5rPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPjxNeVdvcmtMaW5rIGhyZWY9XCIvc2VsZm1hZGUxLjBcIj5zZWxmbWFkZTEuMDwvTXlXb3JrTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxNeVdvcmtMaW5rIGhyZWY9XCIvc2VsZm1hZGUyLjBcIj5zZWxmbWFkZTIuMDwvTXlXb3JrTGluaz48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvTXlXb3JrQ29udGFpbmVyPlxuICAgICAgPC9NeVdvcmtTaGVsbD5cblxuICAgICAge3IuaXNNb2JpbGUgJiZcbiAgICAgICA8TW9iaWxlTGlua3M+XG4gICAgICAgICA8bGkgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI0YyRjJGMicgfX0+XG4gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzdW1lXCI+XG4gICAgICAgICAgICAgPE1vYmlsZUxpbmtcbiAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbGF1cmEtZ3JvZXR6aW5nZXItYjA4NTdiMjEvXCJcbiAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICBsaW5rZWRJblxuICAgICAgICAgICAgICAgPENoZXZyb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+XG4gICAgICAgICAgICAgPC9Nb2JpbGVMaW5rPlxuICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICA8L2xpPlxuICAgICAgICAgPGxpIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNDMEQ5REQnIH19PlxuICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZGVnaWdcIj5cbiAgICAgICAgICAgICA8TW9iaWxlTGlua1xuICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcGlua2FuZHNhbHQvXCJcbiAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICBzaWRlIGdpZ1xuICAgICAgICAgICAgICAgPENoZXZyb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+XG4gICAgICAgICAgICAgPC9Nb2JpbGVMaW5rPlxuICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICA8L2xpPlxuICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlYWNoLW1lXCI+XG4gICAgICAgICAgIDxNb2JpbGVMaW5rXG4gICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpsYXVyYS5ncm9ldHppbmdlckBnbWFpbC5jb21cIlxuICAgICAgICAgICA+XG4gICAgICAgICAgICAgcmVhY2ggbWUgYXRcbiAgICAgICAgICAgICA8YWRkcmVzcz5sYXVyYS5ncm9ldHppbmdlckBnbWFpbC5jb208L2FkZHJlc3M+XG4gICAgICAgICAgIDwvTW9iaWxlTGluaz5cbiAgICAgICAgIDwvbGk+XG4gICAgICAgPC9Nb2JpbGVMaW5rcz59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})