webpackHotUpdate("static/development/pages/collabs.js",{

/***/ "./components/menus.js":
/*!*****************************!*\
  !*** ./components/menus.js ***!
  \*****************************/
/*! exports provided: DarkMenu, LightMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DarkMenu\", function() { return DarkMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LightMenu\", function() { return LightMenu; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject7() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  list-style: none;\\n  justify-content: flex-end;\\n  padding: 0;\\n  margin: 35px 50px 0 0;\\n\\n  li {\\n    margin-left: 35px;\\n    height: 35px;\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-family: Open Sans, Arial, Helvetica, Sans-Serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 20px;\\n  text-align: right;\\n  text-decoration: none;\\n  padding-bottom: 8px;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-end;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 50%;\\n  margin: 35px 0 0 90px;\\n  z-index: 10;\\n  & img {\\n    transition-duration: .3s;\\n    transition-property: width;\\n    cursor: pointer;\\n  }\\n\\n  &:hover img {\\n    width: 65px;\\n    transition: 0.3s;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 71px;\\n  height: 60px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 50%;\\n  background-color: transparent;\\n  z-index: 10;\\n\\n  & a {\\n    color: #08202a;\\n    cursor: pointer;\\n  }\\n\\n  & a:hover {\\n    border-bottom: solid 4px #08202a;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 50%;\\n  background-color: #08202a;\\n\\n  & a {\\n    color: #fff;\\n    cursor: pointer;\\n  }\\n\\n  & a.active, & a:hover {\\n    border-bottom: solid 4px #b5f44b;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nconst DarkBGMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = DarkBGMenu;\nfunction DarkMenu(_ref) {\n  _s();\n\n  let {\n    active\n  } = _ref;\n  const logoRefCallback = react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"](node => {\n    if (node !== null) {\n      const svgData = {\n        [node.id]: {\n          \"strokepath\": [{\n            \"path\": \"M134.727,134.248L29.466,3.921c-1.907-2.622-2.536-3.367-4.447-3.367   H4.094C0.031,0.581-0.321,3.957,1.712,6.262l132.741,164.702c1.765,1.878,4.137,1.299,5.251-0.088l86.788-108.153   c1.914-2.708,0.706-5.357-3.043-5.365l-17.65-0.007c-3.834,0-4.693,0.187-5.509,1.126l-60.832,75.717   C137.419,136.232,135.409,135.097,134.727,134.248\",\n            \"duration\": 600\n          }, {\n            \"path\": \"M140.828,57.404c-3.376-0.039-3.692-0.841-3.755-3.307V40.993   c-0.057-2.208-0.102-3.63,2.832-3.642h49.719c3.354,0.014,4.338,3.129,2.793,5.072l-52.731,64.981   c-0.977,1.242-3.639,2.129-5.529,0L52.691,6.658c-2.522-2.965-0.89-6.256,2.674-6.108L220.737,0.5   c1.978-0.044,3.742,1.998,1.958,4.29l-10.874,13.283c-1.421,1.826-1.664,2.528-4.636,2.528L96.043,20.619   c-5.181-0.01-5.38,0.936-2.673,4.495l41.143,50.936c1.306,1.585,3.556,1.507,4.748,0.026l11.313-14.038   c1.502-2.186,3.28-4.988-2.359-4.634H140.828z\",\n            \"duration\": 1000\n          }],\n          \"dimensions\": {\n            \"width\": 228,\n            \"height\": 173\n          }\n        }\n      };\n\n      function fillPaths() {\n        const logoPaths = $('svg path', node);\n        $.each(logoPaths, function (index, value) {\n          $(value).animate({\n            'fill-opacity': '1'\n          }, 1000, function () {});\n        });\n      }\n\n      const $node = $(node);\n      $node.lazylinepainter({\n        'svgData': svgData,\n        'strokeWidth': 3,\n        'strokeColor': '#434343',\n        'delay': 300,\n        'speedMultiplier': 1.8,\n        'onComplete': fillPaths\n      });\n      $node.lazylinepainter('paint');\n    }\n  }, []);\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  return __jsx(TopBarContainer, null, __jsx(LogoContainer, {\n    id: \"logo-container\",\n    ref: logoRefCallback,\n    style: {\n      width: \"70px\",\n      height: \"70px\",\n      margin: \"35px auto 0 auto\",\n      textAlign: \"center\"\n    }\n  }), r.isMobile || __jsx(DarkBGMenu, null, __jsx(Menu, {\n    active: active\n  })));\n}\n\n_s(DarkMenu, \"6h6KTlHeBUt8hYKOQusr2mDYPtU=\");\n\n_c2 = DarkMenu;\nconst LightBGMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = LightBGMenu;\nfunction LightMenu(_ref2) {\n  let {\n    active\n  } = _ref2;\n  return __jsx(TopBarContainer, null, __jsx(LogoContainer, null, __jsx(Logo, null)), __jsx(LightBGMenu, null, __jsx(Menu, {\n    active: active\n  })));\n}\n_c4 = LightMenu;\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n/* <Link href=\"/\">\n *   <img src=\"/img/logo.svg\" width=\"71\" height=\"53\" />\n * </Link>\n */\n\n_c5 = Logo;\nconst LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c6 = LogoContainer;\nconst TopBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c7 = TopBarContainer;\nconst MenuLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject6());\n_c8 = MenuLink;\nconst MenuList = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul(_templateObject7());\n_c9 = MenuList;\n\nfunction Menu(_ref3) {\n  let {\n    active\n  } = _ref3;\n  return __jsx(MenuList, null, __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\"\n  }, __jsx(MenuLink, {\n    className: active == \"index\" ? \"active\" : null\n  }, \"my work\"))), __jsx(\"li\", null, __jsx(MenuLink, {\n    className: active == \"resume\" ? \"active\" : null,\n    href: \"https://www.linkedin.com/in/laura-groetzinger-b0857b21/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"my linkedIn\")), __jsx(\"li\", null, __jsx(MenuLink, {\n    className: active == \"sidegig\" ? \"active\" : null,\n    href: \"https://www.instagram.com/pinkandsalt/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"my side gig\")));\n}\n\n_c10 = Menu;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"DarkBGMenu\");\n$RefreshReg$(_c2, \"DarkMenu\");\n$RefreshReg$(_c3, \"LightBGMenu\");\n$RefreshReg$(_c4, \"LightMenu\");\n$RefreshReg$(_c5, \"Logo\");\n$RefreshReg$(_c6, \"LogoContainer\");\n$RefreshReg$(_c7, \"TopBarContainer\");\n$RefreshReg$(_c8, \"MenuLink\");\n$RefreshReg$(_c9, \"MenuList\");\n$RefreshReg$(_c10, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnVzLmpzP2Q3MGIiXSwibmFtZXMiOlsiRGFya0JHTWVudSIsInN0eWxlZCIsImRpdiIsIkRhcmtNZW51IiwiYWN0aXZlIiwibG9nb1JlZkNhbGxiYWNrIiwiUmVhY3QiLCJub2RlIiwic3ZnRGF0YSIsImlkIiwiZmlsbFBhdGhzIiwibG9nb1BhdGhzIiwiJCIsImVhY2giLCJpbmRleCIsInZhbHVlIiwiYW5pbWF0ZSIsIiRub2RlIiwibGF6eWxpbmVwYWludGVyIiwiciIsImdldFJlc3BvbnNpdmVuZXNzIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJpc01vYmlsZSIsIkxpZ2h0QkdNZW51IiwiTGlnaHRNZW51IiwiTG9nbyIsIkxvZ29Db250YWluZXIiLCJUb3BCYXJDb250YWluZXIiLCJNZW51TGluayIsImEiLCJNZW51TGlzdCIsInVsIiwiTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBaEI7S0FBTUYsVTtBQWNDLFNBQVNHLFFBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFaO0FBQUVDO0FBQUYsR0FBWTtBQUNuQyxRQUFNQyxlQUFlLEdBQUdDLGlEQUFBLENBQWtCQyxJQUFJLElBQUk7QUFDaEQsUUFBSUEsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsWUFBTUMsT0FBTyxHQUFHO0FBQ2QsU0FBQ0QsSUFBSSxDQUFDRSxFQUFOLEdBQVc7QUFDVCx3QkFBYyxDQUNaO0FBQ0Usb0JBQVEsMlVBRFY7QUFFRSx3QkFBWTtBQUZkLFdBRFksRUFLWjtBQUNFLG9CQUFRLDRmQURWO0FBRUUsd0JBQVk7QUFGZCxXQUxZLENBREw7QUFX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QkFDRSxNQUFDLFFBQUQ7QUFDRSxhQUFTLEVBQUVBLE1BQU0sSUFBSSxTQUFWLEdBQXNCLFFBQXRCLEdBQWlDLElBRDlDO0FBRUUsUUFBSSxFQUFDLHdDQUZQO0FBR0UsVUFBTSxFQUFDLFFBSFQ7QUFJRSxPQUFHLEVBQUM7QUFKTixtQkFERixDQWxCRixDQURGO0FBK0JEOztPQWhDUStCLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBnZXRSZXNwb25zaXZlbmVzcyB9IGZyb20gJy4uL2xpYi9tZWRpYS1xdWVyeSdcblxuY29uc3QgRGFya0JHTWVudSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODIwMmE7XG5cbiAgJiBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmIGEuYWN0aXZlLCAmIGE6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjYjVmNDRiO1xuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gRGFya01lbnUoeyBhY3RpdmUgfSkge1xuICBjb25zdCBsb2dvUmVmQ2FsbGJhY2sgPSBSZWFjdC51c2VDYWxsYmFjayhub2RlID0+IHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ZnRGF0YSA9IHtcbiAgICAgICAgW25vZGUuaWRdOiB7XG4gICAgICAgICAgXCJzdHJva2VwYXRoXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTTEzNC43MjcsMTM0LjI0OEwyOS40NjYsMy45MjFjLTEuOTA3LTIuNjIyLTIuNTM2LTMuMzY3LTQuNDQ3LTMuMzY3ICAgSDQuMDk0QzAuMDMxLDAuNTgxLTAuMzIxLDMuOTU3LDEuNzEyLDYuMjYybDEzMi43NDEsMTY0LjcwMmMxLjc2NSwxLjg3OCw0LjEzNywxLjI5OSw1LjI1MS0wLjA4OGw4Ni43ODgtMTA4LjE1MyAgIGMxLjkxNC0yLjcwOCwwLjcwNi01LjM1Ny0zLjA0My01LjM2NWwtMTcuNjUtMC4wMDdjLTMuODM0LDAtNC42OTMsMC4xODctNS41MDksMS4xMjZsLTYwLjgzMiw3NS43MTcgICBDMTM3LjQxOSwxMzYuMjMyLDEzNS40MDksMTM1LjA5NywxMzQuNzI3LDEzNC4yNDhcIixcbiAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiA2MDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInBhdGhcIjogXCJNMTQwLjgyOCw1Ny40MDRjLTMuMzc2LTAuMDM5LTMuNjkyLTAuODQxLTMuNzU1LTMuMzA3VjQwLjk5MyAgIGMtMC4wNTctMi4yMDgtMC4xMDItMy42MywyLjgzMi0zLjY0Mmg0OS43MTljMy4zNTQsMC4wMTQsNC4zMzgsMy4xMjksMi43OTMsNS4wNzJsLTUyLjczMSw2NC45ODEgICBjLTAuOTc3LDEuMjQyLTMuNjM5LDIuMTI5LTUuNTI5LDBMNTIuNjkxLDYuNjU4Yy0yLjUyMi0yLjk2NS0wLjg5LTYuMjU2LDIuNjc0LTYuMTA4TDIyMC43MzcsMC41ICAgYzEuOTc4LTAuMDQ0LDMuNzQyLDEuOTk4LDEuOTU4LDQuMjlsLTEwLjg3NCwxMy4yODNjLTEuNDIxLDEuODI2LTEuNjY0LDIuNTI4LTQuNjM2LDIuNTI4TDk2LjA0MywyMC42MTkgICBjLTUuMTgxLTAuMDEtNS4zOCwwLjkzNi0yLjY3Myw0LjQ5NWw0MS4xNDMsNTAuOTM2YzEuMzA2LDEuNTg1LDMuNTU2LDEuNTA3LDQuNzQ4LDAuMDI2bDExLjMxMy0xNC4wMzggICBjMS41MDItMi4xODYsMy4yOC00Ljk4OC0yLjM1OS00LjYzNEgxNDAuODI4elwiLFxuICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDEwMDAsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImRpbWVuc2lvbnNcIjoge1xuICAgICAgICAgICAgXCJ3aWR0aFwiOiAyMjgsXG4gICAgICAgICAgICBcImhlaWdodFwiOiAxNzMsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBmaWxsUGF0aHMoKSB7XG4gICAgICAgIGNvbnN0IGxvZ29QYXRocyA9ICQoJ3N2ZyBwYXRoJywgbm9kZSk7XG4gICAgICAgICQuZWFjaChsb2dvUGF0aHMsIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICQodmFsdWUpLmFuaW1hdGUoe1xuICAgICAgICAgICAgJ2ZpbGwtb3BhY2l0eSc6ICcxJ1xuICAgICAgICAgIH0sIDEwMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgJG5vZGUgPSAkKG5vZGUpO1xuXG4gICAgICAkbm9kZS5sYXp5bGluZXBhaW50ZXIoe1xuICAgICAgICAnc3ZnRGF0YSc6IHN2Z0RhdGEsXG4gICAgICAgICdzdHJva2VXaWR0aCc6IDMsXG4gICAgICAgICdzdHJva2VDb2xvcic6ICcjNDM0MzQzJyxcbiAgICAgICAgJ2RlbGF5JzogMzAwLFxuICAgICAgICAnc3BlZWRNdWx0aXBsaWVyJzogMS44LFxuICAgICAgICAnb25Db21wbGV0ZSc6IGZpbGxQYXRoc1xuICAgICAgfSk7XG4gICAgICAkbm9kZS5sYXp5bGluZXBhaW50ZXIoJ3BhaW50Jyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgciA9IGdldFJlc3BvbnNpdmVuZXNzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9wQmFyQ29udGFpbmVyPlxuICAgICAgPExvZ29Db250YWluZXJcbiAgICAgICAgaWQ9XCJsb2dvLWNvbnRhaW5lclwiXG4gICAgICAgIHJlZj17bG9nb1JlZkNhbGxiYWNrfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBcIjcwcHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiNzBweFwiLFxuICAgICAgICAgIG1hcmdpbjogXCIzNXB4IGF1dG8gMCBhdXRvXCIsXG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIHtyLmlzTW9iaWxlIHx8XG4gICAgICAgPERhcmtCR01lbnU+XG4gICAgICAgICA8TWVudSBhY3RpdmU9e2FjdGl2ZX0gLz5cbiAgICAgICA8L0RhcmtCR01lbnU+fVxuICAgIDwvVG9wQmFyQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBMaWdodEJHTWVudSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAxMDtcblxuICAmIGEge1xuICAgIGNvbG9yOiAjMDgyMDJhO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICYgYTpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICMwODIwMmE7XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBMaWdodE1lbnUoeyBhY3RpdmUgfSkge1xuICByZXR1cm4gKFxuICAgIDxUb3BCYXJDb250YWluZXI+XG4gICAgICA8TG9nb0NvbnRhaW5lcj5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgIDwvTG9nb0NvbnRhaW5lcj5cbiAgICAgIDxMaWdodEJHTWVudT5cbiAgICAgICAgPE1lbnUgYWN0aXZlPXthY3RpdmV9IC8+XG4gICAgICA8L0xpZ2h0QkdNZW51PlxuICAgIDwvVG9wQmFyQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDcxcHg7XG4gIGhlaWdodDogNjBweDtcbmA7XG5cbi8qIDxMaW5rIGhyZWY9XCIvXCI+XG4gKiAgIDxpbWcgc3JjPVwiL2ltZy9sb2dvLnN2Z1wiIHdpZHRoPVwiNzFcIiBoZWlnaHQ9XCI1M1wiIC8+XG4gKiA8L0xpbms+XG4gKi9cblxuY29uc3QgTG9nb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMzVweCAwIDAgOTBweDtcbiAgei1pbmRleDogMTA7XG4gICYgaW1nIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJjpob3ZlciBpbWcge1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbmA7XG5cbmNvbnN0IFRvcEJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZC5hYFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBBcmlhbCwgSGVsdmV0aWNhLCBTYW5zLVNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuYDtcblxuY29uc3QgTWVudUxpc3QgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMzVweCA1MHB4IDAgMDtcblxuICBsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG5gO1xuXG5mdW5jdGlvbiBNZW51KHsgYWN0aXZlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TWVudUxpc3Q+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPE1lbnVMaW5rIGNsYXNzTmFtZT17YWN0aXZlID09IFwiaW5kZXhcIiA/IFwiYWN0aXZlXCIgOiBudWxsfT5cbiAgICAgICAgICAgIG15IHdvcmtcbiAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8TWVudUxpbmtcbiAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZSA9PSBcInJlc3VtZVwiID8gXCJhY3RpdmVcIiA6IG51bGx9XG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9sYXVyYS1ncm9ldHppbmdlci1iMDg1N2IyMS9cIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBteSBsaW5rZWRJblxuICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPE1lbnVMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmUgPT0gXCJzaWRlZ2lnXCIgPyBcImFjdGl2ZVwiIDogbnVsbH1cbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9waW5rYW5kc2FsdC9cIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBteSBzaWRlIGdpZ1xuICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgPC9saT5cbiAgICA8L01lbnVMaXN0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/menus.js\n");

/***/ })

})