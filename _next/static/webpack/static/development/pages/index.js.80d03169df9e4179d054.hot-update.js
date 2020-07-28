webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyWork; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menus */ \"./components/menus.js\");\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head */ \"./components/head.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject9() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #08202A;\\n  text-decoration: none;\\n\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: inline-block;\\n  border-right: 4px solid black;\\n  border-bottom: 4px solid black;\\n  width: 50px;\\n  height: 50px;\\n  transform: rotate(-45deg);\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  list-style: none;\\n  padding: 0;\\n  margin: 0;\\n\\n  font-family: Cabin;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 50px;\\n  line-height: 60px;\\n  letter-spacing: 2px; /* identical to box height, or 100% */\\n\\n  & li {\\n    padding: 40px;\\n  }\\n\\n  & li.reach-me {\\n    font-family: Open Sans;\\n    font-size: 16px;\\n    line-height: 30px;\\n    background-color: #08202a;\\n  }\\n  & li.reach-me a {\\n    color: #FFFFFF;\\n  }\\n  & li.reach-me address {\\n    font-style: normal;\\n    color: #c0d9dd;\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 40px;\\n  width: calc(100% - 80px) !important;\\n\\n  font-family: Open Sans;\\n  font-style: normal;\\n  font-weight: bold;\\n  line-height: 140px;\\n\\n  background: url(/img/Landing-top@2x.png) no-repeat 130% 100%;\\n  background-size: 200px;\\n\\n  & .who {\\n    font-size: 14px;\\n    display: inline;\\n    border-bottom: 4px solid #b5f44b;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #ffffff;\\n  padding: 50px 50px 0 50px;\\n  font-family: Open Sans;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 14px;\\n  line-height: 40px;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  max-height: 800px;\\n  text-align: center;\\n  overflow: hidden;\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: center;\\n  img {\\n    width: 438px;\\n    height: 477.5px\\n  }\\n\\n  &.mobile img {\\n    transform: scale(-1, 1);\\n    width: auto;\\n    height: auto;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  width: 100%;\\n  min-height: calc(100vh - 92px);\\n\\n  & > div {\\n    width: 50%;\\n    font-size: 80px;\\n    line-height: 110px;\\n  }\\n\\n  &.mobile {\\n    flex-direction: column;\\n    min-height: auto;\\n  }\\n\\n  &.mobile > div {\\n    width: 100%;\\n    font-size: 50px;\\n    line-height: 65px;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: #08202a;\\n  margin: 0;\\n  padding: 0;\\n  ul {\\n    list-style: none;\\n    margin: 0;\\n    padding: 0 50px 50px 50px;\\n    line-height: 70px;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-family: Cabin, Arial, Helvetica, Sans-Serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  letter-spacing: 0.833333px;  /* or 137% */\\n  text-decoration: none;\\n  cursor: pointer;\\n\\n  color: #B5F44B;\\n  & :hover {\\n    color: #ffffff;\\n    transition: 0.3s;\\n  }\\n\\n  &.white {\\n    color: #ffffff;\\n  }\\n  &.white :hover {\\n    color: #B5F44B;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nconst MyWorkLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject());\n_c = MyWorkLink;\nconst MyWorkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = MyWorkContainer;\nconst MyWorkShell = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = MyWorkShell;\nconst PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c4 = PictureContainer;\nconst RecentProjects = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c5 = RecentProjects;\nconst MobileCover = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c6 = MobileCover;\nconst MobileLinks = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul(_templateObject7());\n_c7 = MobileLinks;\nconst Chevron = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject8());\n_c8 = Chevron;\nconst MobileLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject9());\n_c9 = MobileLink;\nfunction MyWork() {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_6__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_6__[\"responsiveClasses\"])(r);\n  return __jsx(\"div\", null, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_5__[\"Head\"], {\n    title: \"Laura Groetzinger Portfolio\"\n  }), __jsx(_components_menus__WEBPACK_IMPORTED_MODULE_4__[\"DarkMenu\"], {\n    active: \"index\"\n  }), __jsx(MyWorkShell, {\n    className: className\n  }, !r.isMobile && __jsx(PictureContainer, null, __jsx(\"img\", {\n    src: \"/img/Landing-top@2x.png\"\n  })), r.isMobile && __jsx(MobileCover, null, __jsx(\"div\", {\n    class: \"who\"\n  }, \"Laura Groetzinegr\"), __jsx(\"div\", {\n    class: \"what\"\n  }, \"Product Design\")), __jsx(MyWorkContainer, null, r.isMobile && __jsx(RecentProjects, null, \"Recent Projects\"), __jsx(\"ul\", null, __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/collabs\"\n  }, __jsx(MyWorkLink, null, \"collabs\"))), __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/justworks\"\n  }, __jsx(MyWorkLink, null, \"justworks\"))), __jsx(\"li\", null, __jsx(MyWorkLink, {\n    href: \"/selfmade1.0\"\n  }, \"selfmade1.0\")), __jsx(\"li\", null, __jsx(MyWorkLink, {\n    href: \"/selfmade2.0\"\n  }, \"selfmade2.0\"))))), r.isMobile && __jsx(MobileLinks, null, __jsx(\"li\", {\n    style: {\n      backgroundColor: '#F2F2F2'\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/resume\"\n  }, __jsx(MobileLink, {\n    href: \"https://www.linkedin.com/in/laura-groetzinger-b0857b21/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"linkedIn\", __jsx(Chevron, null)))), __jsx(\"li\", {\n    style: {\n      backgroundColor: '#C0D9DD'\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/sidegig\"\n  }, __jsx(MobileLink, {\n    href: \"https://www.instagram.com/pinkandsalt/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"side gig\", __jsx(Chevron, null)))), __jsx(\"li\", {\n    className: \"reach-me\"\n  }, __jsx(MobileLink, {\n    href: \"mailto:laura.groetzinger@gmail.com\"\n  }, \"reach me at\", __jsx(\"address\", null, \"laura.groetzinger@gmail.com\")))));\n}\n_c10 = MyWork;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"MyWorkLink\");\n$RefreshReg$(_c2, \"MyWorkContainer\");\n$RefreshReg$(_c3, \"MyWorkShell\");\n$RefreshReg$(_c4, \"PictureContainer\");\n$RefreshReg$(_c5, \"RecentProjects\");\n$RefreshReg$(_c6, \"MobileCover\");\n$RefreshReg$(_c7, \"MobileLinks\");\n$RefreshReg$(_c8, \"Chevron\");\n$RefreshReg$(_c9, \"MobileLink\");\n$RefreshReg$(_c10, \"MyWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk15V29ya0xpbmsiLCJzdHlsZWQiLCJhIiwiTXlXb3JrQ29udGFpbmVyIiwiZGl2IiwiTXlXb3JrU2hlbGwiLCJQaWN0dXJlQ29udGFpbmVyIiwiUmVjZW50UHJvamVjdHMiLCJNb2JpbGVDb3ZlciIsIk1vYmlsZUxpbmtzIiwidWwiLCJDaGV2cm9uIiwiTW9iaWxlTGluayIsIk15V29yayIsInIiLCJnZXRSZXNwb25zaXZlbmVzcyIsImNsYXNzTmFtZSIsInJlc3BvbnNpdmVDbGFzc2VzIiwiaXNNb2JpbGUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0EsTUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxDQUFWLG1CQUFoQjtLQUFNRixVO0FBc0JOLE1BQU1HLGVBQWUsR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBckI7TUFBTUQsZTtBQVlOLE1BQU1FLFdBQVcsR0FBR0oseURBQU0sQ0FBQ0csR0FBVixvQkFBakI7TUFBTUMsVztBQXdCTixNQUFNQyxnQkFBZ0IsR0FBR0wseURBQU0sQ0FBQ0csR0FBVixvQkFBdEI7TUFBTUUsZ0I7QUFtQk4sTUFBTUMsY0FBYyxHQUFHTix5REFBTSxDQUFDRyxHQUFWLG9CQUFwQjtNQUFNRyxjO0FBVU4sTUFBTUMsV0FBVyxHQUFHUCx5REFBTSxDQUFDRyxHQUFWLG9CQUFqQjtNQUFNSSxXO0FBbUJOLE1BQU1DLFdBQVcsR0FBR1IseURBQU0sQ0FBQ1MsRUFBVixvQkFBakI7TUFBTUQsVztBQStCTixNQUFNRSxPQUFPLEdBQUdWLHlEQUFNLENBQUNHLEdBQVYsb0JBQWI7TUFBTU8sTztBQVNOLE1BQU1DLFVBQVUsR0FBR1gseURBQU0sQ0FBQ0MsQ0FBVixvQkFBaEI7TUFBTVUsVTtBQUtTLFNBQVNDLE1BQVQsR0FBa0I7QUFDL0IsUUFBTUMsQ0FBQyxHQUFHQywwRUFBaUIsRUFBM0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLDBFQUFpQixDQUFDSCxDQUFELENBQW5DO0FBRUEsU0FDRSxtQkFDRSxNQUFDLHFEQUFEO0FBQU0sU0FBSyxFQUFDO0FBQVosSUFERixFQUVFLE1BQUMsMERBQUQ7QUFBVSxVQUFNLEVBQUM7QUFBakIsSUFGRixFQUdFLE1BQUMsV0FBRDtBQUFhLGFBQVMsRUFBRUU7QUFBeEIsS0FDRyxDQUFDRixDQUFDLENBQUNJLFFBQUgsSUFDQSxNQUFDLGdCQUFELFFBQ0U7QUFBSyxPQUFHLEVBQUM7QUFBVCxJQURGLENBRkgsRUFNR0osQ0FBQyxDQUFDSSxRQUFGLElBQ0EsTUFBQyxXQUFELFFBQ0U7QUFBSyxTQUFLLEVBQUM7QUFBWCx5QkFERixFQUVFO0FBQUssU0FBSyxFQUFDO0FBQVgsc0JBRkYsQ0FQSCxFQVlFLE1BQUMsZUFBRCxRQUNHSixDQUFDLENBQUNJLFFBQUYsSUFDQSxNQUFDLGNBQUQsMEJBRkgsRUFHRSxrQkFDRSxrQkFDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRSxNQUFDLFVBQUQsa0JBREYsQ0FERixDQURGLEVBTUUsa0JBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQyxVQUFELG9CQURGLENBREYsQ0FORixFQVdFLGtCQUFJLE1BQUMsVUFBRDtBQUFZLFFBQUksRUFBQztBQUFqQixtQkFBSixDQVhGLEVBWUUsa0JBQUksTUFBQyxVQUFEO0FBQVksUUFBSSxFQUFDO0FBQWpCLG1CQUFKLENBWkYsQ0FIRixDQVpGLENBSEYsRUFtQ0dKLENBQUMsQ0FBQ0ksUUFBRixJQUNBLE1BQUMsV0FBRCxRQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUU7QUFBbkI7QUFBWCxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsVUFBRDtBQUNFLFFBQUksRUFBQyx5REFEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDO0FBSE4saUJBTUUsTUFBQyxPQUFELE9BTkYsQ0FERixDQURGLENBREYsRUFhRTtBQUFJLFNBQUssRUFBRTtBQUFFQSxxQkFBZSxFQUFFO0FBQW5CO0FBQVgsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRSxNQUFDLFVBQUQ7QUFDRSxRQUFJLEVBQUMsd0NBRFA7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQztBQUhOLGlCQU1FLE1BQUMsT0FBRCxPQU5GLENBREYsQ0FERixDQWJGLEVBeUJFO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDRSxNQUFDLFVBQUQ7QUFDRSxRQUFJLEVBQUM7QUFEUCxvQkFJRSxxREFKRixDQURGLENBekJGLENBcENILENBREY7QUF5RUQ7T0E3RXVCTixNIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgRGFya01lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL21lbnVzJztcbmltcG9ydCB7IEhlYWQgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWQnO1xuXG5pbXBvcnQgeyBnZXRSZXNwb25zaXZlbmVzcywgcmVzcG9uc2l2ZUNsYXNzZXMgfSBmcm9tICcuLi9saWIvbWVkaWEtcXVlcnknO1xuXG5cbmNvbnN0IE15V29ya0xpbmsgPSBzdHlsZWQuYWBcbiAgZm9udC1mYW1pbHk6IENhYmluLCBBcmlhbCwgSGVsdmV0aWNhLCBTYW5zLVNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC44MzMzMzNweDsgIC8qIG9yIDEzNyUgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgY29sb3I6ICNCNUY0NEI7XG4gICYgOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG5cbiAgJi53aGl0ZSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgJi53aGl0ZSA6aG92ZXIge1xuICAgIGNvbG9yOiAjQjVGNDRCO1xuICB9XG5gO1xuXG5jb25zdCBNeVdvcmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgyMDJhO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDUwcHggNTBweCA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICB9XG5gO1xuXG5jb25zdCBNeVdvcmtTaGVsbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTJweCk7XG5cbiAgJiA+IGRpdiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgJi5tb2JpbGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuXG4gICYubW9iaWxlID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDY1cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFBpY3R1cmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiA0MzhweDtcbiAgICBoZWlnaHQ6IDQ3Ny41cHhcbiAgfVxuXG4gICYubW9iaWxlIGltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5gO1xuXG5jb25zdCBSZWNlbnRQcm9qZWN0cyA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1MHB4IDUwcHggMCA1MHB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuYDtcblxuY29uc3QgTW9iaWxlQ292ZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA0MHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCkgIWltcG9ydGFudDtcblxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTQwcHg7XG5cbiAgYmFja2dyb3VuZDogdXJsKC9pbWcvTGFuZGluZy10b3BAMngucG5nKSBuby1yZXBlYXQgMTMwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xuXG4gICYgLndobyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2I1ZjQ0YjtcbiAgfVxuYDtcblxuY29uc3QgTW9iaWxlTGlua3MgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcblxuICBmb250LWZhbWlseTogQ2FiaW47XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7IC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMDAlICovXG5cbiAgJiBsaSB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxuXG4gICYgbGkucmVhY2gtbWUge1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODIwMmE7XG4gIH1cbiAgJiBsaS5yZWFjaC1tZSBhIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuICAmIGxpLnJlYWNoLW1lIGFkZHJlc3Mge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBjb2xvcjogI2MwZDlkZDtcbiAgfVxuYDtcblxuY29uc3QgQ2hldnJvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbmA7XG5cbmNvbnN0IE1vYmlsZUxpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICMwODIwMkE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15V29yaygpIHtcbiAgY29uc3QgciA9IGdldFJlc3BvbnNpdmVuZXNzKCk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IHJlc3BvbnNpdmVDbGFzc2VzKHIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkIHRpdGxlPVwiTGF1cmEgR3JvZXR6aW5nZXIgUG9ydGZvbGlvXCIgLz5cbiAgICAgIDxEYXJrTWVudSBhY3RpdmU9XCJpbmRleFwiIC8+XG4gICAgICA8TXlXb3JrU2hlbGwgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7IXIuaXNNb2JpbGUgJiZcbiAgICAgICAgIDxQaWN0dXJlQ29udGFpbmVyPlxuICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvTGFuZGluZy10b3BAMngucG5nXCIgLz5cbiAgICAgICAgIDwvUGljdHVyZUNvbnRhaW5lcj59XG5cbiAgICAgICAge3IuaXNNb2JpbGUgJiZcbiAgICAgICAgIDxNb2JpbGVDb3Zlcj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob1wiPkxhdXJhIEdyb2V0emluZWdyPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aGF0XCI+UHJvZHVjdCBEZXNpZ248L2Rpdj5cbiAgICAgICAgIDwvTW9iaWxlQ292ZXI+fVxuXG4gICAgICAgIDxNeVdvcmtDb250YWluZXI+XG4gICAgICAgICAge3IuaXNNb2JpbGUgJiZcbiAgICAgICAgICAgPFJlY2VudFByb2plY3RzPlJlY2VudCBQcm9qZWN0czwvUmVjZW50UHJvamVjdHM+fVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2xsYWJzXCI+XG4gICAgICAgICAgICAgICAgPE15V29ya0xpbms+Y29sbGFiczwvTXlXb3JrTGluaz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9qdXN0d29ya3NcIj5cbiAgICAgICAgICAgICAgICA8TXlXb3JrTGluaz5qdXN0d29ya3M8L015V29ya0xpbms+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+PE15V29ya0xpbmsgaHJlZj1cIi9zZWxmbWFkZTEuMFwiPnNlbGZtYWRlMS4wPC9NeVdvcmtMaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PE15V29ya0xpbmsgaHJlZj1cIi9zZWxmbWFkZTIuMFwiPnNlbGZtYWRlMi4wPC9NeVdvcmtMaW5rPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9NeVdvcmtDb250YWluZXI+XG4gICAgICA8L015V29ya1NoZWxsPlxuXG4gICAgICB7ci5pc01vYmlsZSAmJlxuICAgICAgIDxNb2JpbGVMaW5rcz5cbiAgICAgICAgIDxsaSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjJGMkYyJyB9fT5cbiAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bWVcIj5cbiAgICAgICAgICAgICA8TW9iaWxlTGlua1xuICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9sYXVyYS1ncm9ldHppbmdlci1iMDg1N2IyMS9cIlxuICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgIGxpbmtlZEluXG4gICAgICAgICAgICAgICA8Q2hldnJvbiAvPlxuICAgICAgICAgICAgIDwvTW9iaWxlTGluaz5cbiAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgPC9saT5cbiAgICAgICAgIDxsaSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjQzBEOUREJyB9fT5cbiAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWRlZ2lnXCI+XG4gICAgICAgICAgICAgPE1vYmlsZUxpbmtcbiAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3BpbmthbmRzYWx0L1wiXG4gICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgc2lkZSBnaWdcbiAgICAgICAgICAgICAgIDxDaGV2cm9uIC8+XG4gICAgICAgICAgICAgPC9Nb2JpbGVMaW5rPlxuICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICA8L2xpPlxuICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlYWNoLW1lXCI+XG4gICAgICAgICAgIDxNb2JpbGVMaW5rXG4gICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpsYXVyYS5ncm9ldHppbmdlckBnbWFpbC5jb21cIlxuICAgICAgICAgICA+XG4gICAgICAgICAgICAgcmVhY2ggbWUgYXRcbiAgICAgICAgICAgICA8YWRkcmVzcz5sYXVyYS5ncm9ldHppbmdlckBnbWFpbC5jb208L2FkZHJlc3M+XG4gICAgICAgICAgIDwvTW9iaWxlTGluaz5cbiAgICAgICAgIDwvbGk+XG4gICAgICAgPC9Nb2JpbGVMaW5rcz59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})