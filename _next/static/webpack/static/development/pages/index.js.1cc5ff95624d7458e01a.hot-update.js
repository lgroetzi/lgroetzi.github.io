webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/menus.js":
/*!*****************************!*\
  !*** ./components/menus.js ***!
  \*****************************/
/*! exports provided: DarkMenu, LightMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DarkMenu\", function() { return DarkMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LightMenu\", function() { return LightMenu; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject6() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  list-style: none;\\n  justify-content: flex-end;\\n  padding: 0;\\n  margin: 35px 50px 0 0;\\n\\n  li {\\n    margin-left: 35px;\\n    height: 35px;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-family: Open Sans, Arial, Helvetica, Sans-Serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 20px;\\n  line-height: 20px;\\n  text-align: right;\\n  text-decoration: none;\\n  padding-bottom: 8px;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-end;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 50%;\\n  margin: 35px 0 0 90px;\\n  z-index: 10;\\n  & img {\\n    transition-duration: .3s;\\n    transition-property: width;\\n    cursor: pointer;\\n  }\\n\\n  &:hover img {\\n    width: 65px;\\n    transition: 0.3s;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 50%;\\n  background-color: transparent;\\n  z-index: 10;\\n\\n  & a {\\n    color: #08202a;\\n    cursor: pointer;\\n  }\\n\\n  & a:hover {\\n    border-bottom: solid 4px #08202a;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 50%;\\n  background-color: #08202a;\\n\\n  & a {\\n    color: #fff;\\n    cursor: pointer;\\n  }\\n\\n  & a.active, & a:hover {\\n    border-bottom: solid 4px #b5f44b;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nconst DarkBGMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = DarkBGMenu;\nfunction DarkMenu(_ref) {\n  _s();\n\n  let {\n    active\n  } = _ref;\n  const logoRefCallback = react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"](node => {\n    if (node !== null) {\n      const svgData = {\n        [node.id]: {\n          \"strokepath\": [{\n            \"path\": \"M134.727,134.248L29.466,3.921c-1.907-2.622-2.536-3.367-4.447-3.367   H4.094C0.031,0.581-0.321,3.957,1.712,6.262l132.741,164.702c1.765,1.878,4.137,1.299,5.251-0.088l86.788-108.153   c1.914-2.708,0.706-5.357-3.043-5.365l-17.65-0.007c-3.834,0-4.693,0.187-5.509,1.126l-60.832,75.717   C137.419,136.232,135.409,135.097,134.727,134.248\",\n            \"duration\": 600\n          }, {\n            \"path\": \"M140.828,57.404c-3.376-0.039-3.692-0.841-3.755-3.307V40.993   c-0.057-2.208-0.102-3.63,2.832-3.642h49.719c3.354,0.014,4.338,3.129,2.793,5.072l-52.731,64.981   c-0.977,1.242-3.639,2.129-5.529,0L52.691,6.658c-2.522-2.965-0.89-6.256,2.674-6.108L220.737,0.5   c1.978-0.044,3.742,1.998,1.958,4.29l-10.874,13.283c-1.421,1.826-1.664,2.528-4.636,2.528L96.043,20.619   c-5.181-0.01-5.38,0.936-2.673,4.495l41.143,50.936c1.306,1.585,3.556,1.507,4.748,0.026l11.313-14.038   c1.502-2.186,3.28-4.988-2.359-4.634H140.828z\",\n            \"duration\": 1000\n          }],\n          \"dimensions\": {\n            \"width\": 228,\n            \"height\": 173\n          }\n        }\n      };\n\n      function fillPaths() {\n        const logoPaths = $('svg path', node);\n        $.each(logoPaths, function (index, value) {\n          $(value).animate({\n            'fill-opacity': '1'\n          }, 1000, function () {});\n        });\n      }\n\n      const $node = $(node);\n      $node.lazylinepainter({\n        'svgData': svgData,\n        'strokeWidth': 3,\n        'strokeColor': '#434343',\n        'delay': 300,\n        'speedMultiplier': 1.8,\n        'onComplete': fillPaths\n      });\n      $node.lazylinepainter('paint');\n    }\n  }, []);\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  return __jsx(TopBarContainer, null, __jsx(Logo, {\n    id: \"logo-container\",\n    ref: logoRefCallback,\n    style: {\n      width: \"70px\",\n      height: \"70px\",\n      margin: \"35px auto 0 auto\",\n      textAlign: \"center\"\n    }\n  }), r.isMobile || __jsx(DarkBGMenu, null, __jsx(Menu, {\n    active: active\n  })));\n}\n\n_s(DarkMenu, \"6h6KTlHeBUt8hYKOQusr2mDYPtU=\");\n\n_c2 = DarkMenu;\nconst LightBGMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = LightBGMenu;\nfunction LightMenu(_ref2) {\n  let {\n    active\n  } = _ref2;\n  return __jsx(TopBarContainer, null, __jsx(Logo, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\"\n  }, __jsx(\"img\", {\n    src: \"/img/logo.svg\",\n    width: \"71\",\n    height: \"53\"\n  }))), __jsx(LightBGMenu, null, __jsx(Menu, {\n    active: active\n  })));\n}\n_c4 = LightMenu;\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c5 = Logo;\nconst TopBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c6 = TopBarContainer;\nconst MenuLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject5());\n_c7 = MenuLink;\nconst MenuList = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul(_templateObject6());\n_c8 = MenuList;\n\nfunction Menu(_ref3) {\n  let {\n    active\n  } = _ref3;\n  return __jsx(MenuList, null, __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\"\n  }, __jsx(MenuLink, {\n    className: active == \"index\" ? \"active\" : null\n  }, \"my work\"))), __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/resume\"\n  }, __jsx(MenuLink, {\n    className: active == \"resume\" ? \"active\" : null,\n    href: \"https://www.linkedin.com/in/laura-groetzinger-b0857b21/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"my linkedIn\"))), __jsx(\"li\", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/sidegig\"\n  }, __jsx(MenuLink, {\n    className: active == \"sidegig\" ? \"active\" : null,\n    href: \"https://www.instagram.com/pinkandsalt/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"my side gig\"))));\n}\n\n_c9 = Menu;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"DarkBGMenu\");\n$RefreshReg$(_c2, \"DarkMenu\");\n$RefreshReg$(_c3, \"LightBGMenu\");\n$RefreshReg$(_c4, \"LightMenu\");\n$RefreshReg$(_c5, \"Logo\");\n$RefreshReg$(_c6, \"TopBarContainer\");\n$RefreshReg$(_c7, \"MenuLink\");\n$RefreshReg$(_c8, \"MenuList\");\n$RefreshReg$(_c9, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnVzLmpzP2Q3MGIiXSwibmFtZXMiOlsiRGFya0JHTWVudSIsInN0eWxlZCIsImRpdiIsIkRhcmtNZW51IiwiYWN0aXZlIiwibG9nb1JlZkNhbGxiYWNrIiwiUmVhY3QiLCJub2RlIiwic3ZnRGF0YSIsImlkIiwiZmlsbFBhdGhzIiwibG9nb1BhdGhzIiwiJCIsImVhY2giLCJpbmRleCIsInZhbHVlIiwiYW5pbWF0ZSIsIiRub2RlIiwibGF6eWxpbmVwYWludGVyIiwiciIsImdldFJlc3BvbnNpdmVuZXNzIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJpc01vYmlsZSIsIkxpZ2h0QkdNZW51IiwiTGlnaHRNZW51IiwiTG9nbyIsIlRvcEJhckNvbnRhaW5lciIsIk1lbnVMaW5rIiwiYSIsIk1lbnVMaXN0IiwidWwiLCJNZW51Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWhCO0tBQU1GLFU7QUFjQyxTQUFTRyxRQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBWjtBQUFFQztBQUFGLEdBQVk7QUFDbkMsUUFBTUMsZUFBZSxHQUFHQyxpREFBQSxDQUFrQkMsSUFBSSxJQUFJO0FBQ2hELFFBQUlBLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1DLE9BQU8sR0FBRztBQUNkLFNBQUNELElBQUksQ0FBQ0UsRUFBTixHQUFXO0FBQ1Qsd0JBQWMsQ0FDWjtBQUNFLG9CQUFRLDJVQURWO0FBRUUsd0JBQVk7QUFGZCxXQURZLEVBS1o7QUFDRSxvQkFBUSw0ZkFEVjtBQUVFLHdCQUFZO0FBRmQsV0FMWSxDQURMO0FBV1Qsd0JBQWM7QUFDWixxQkFBUyxHQURHO0FB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VDtBQUlFLE9BQUcsRUFBQztBQUpOLG1CQURGLENBREYsQ0FSRixFQW9CRSxrQkFDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRSxNQUFDLFFBQUQ7QUFDRSxhQUFTLEVBQUVBLE1BQU0sSUFBSSxTQUFWLEdBQXNCLFFBQXRCLEdBQWlDLElBRDlDO0FBRUUsUUFBSSxFQUFDLHdDQUZQO0FBR0UsVUFBTSxFQUFDLFFBSFQ7QUFJRSxPQUFHLEVBQUM7QUFKTixtQkFERixDQURGLENBcEJGLENBREY7QUFtQ0Q7O01BcENROEIsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVudXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGdldFJlc3BvbnNpdmVuZXNzIH0gZnJvbSAnLi4vbGliL21lZGlhLXF1ZXJ5J1xuXG5jb25zdCBEYXJrQkdNZW51ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MjAyYTtcblxuICAmIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICYgYS5hY3RpdmUsICYgYTpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICNiNWY0NGI7XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBEYXJrTWVudSh7IGFjdGl2ZSB9KSB7XG4gIGNvbnN0IGxvZ29SZWZDYWxsYmFjayA9IFJlYWN0LnVzZUNhbGxiYWNrKG5vZGUgPT4ge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdmdEYXRhID0ge1xuICAgICAgICBbbm9kZS5pZF06IHtcbiAgICAgICAgICBcInN0cm9rZXBhdGhcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInBhdGhcIjogXCJNMTM0LjcyNywxMzQuMjQ4TDI5LjQ2NiwzLjkyMWMtMS45MDctMi42MjItMi41MzYtMy4zNjctNC40NDctMy4zNjcgICBINC4wOTRDMC4wMzEsMC41ODEtMC4zMjEsMy45NTcsMS43MTIsNi4yNjJsMTMyLjc0MSwxNjQuNzAyYzEuNzY1LDEuODc4LDQuMTM3LDEuMjk5LDUuMjUxLTAuMDg4bDg2Ljc4OC0xMDguMTUzICAgYzEuOTE0LTIuNzA4LDAuNzA2LTUuMzU3LTMuMDQzLTUuMzY1bC0xNy42NS0wLjAwN2MtMy44MzQsMC00LjY5MywwLjE4Ny01LjUwOSwxLjEyNmwtNjAuODMyLDc1LjcxNyAgIEMxMzcuNDE5LDEzNi4yMzIsMTM1LjQwOSwxMzUuMDk3LDEzNC43MjcsMTM0LjI0OFwiLFxuICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDYwMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGF0aFwiOiBcIk0xNDAuODI4LDU3LjQwNGMtMy4zNzYtMC4wMzktMy42OTItMC44NDEtMy43NTUtMy4zMDdWNDAuOTkzICAgYy0wLjA1Ny0yLjIwOC0wLjEwMi0zLjYzLDIuODMyLTMuNjQyaDQ5LjcxOWMzLjM1NCwwLjAxNCw0LjMzOCwzLjEyOSwyLjc5Myw1LjA3MmwtNTIuNzMxLDY0Ljk4MSAgIGMtMC45NzcsMS4yNDItMy42MzksMi4xMjktNS41MjksMEw1Mi42OTEsNi42NThjLTIuNTIyLTIuOTY1LTAuODktNi4yNTYsMi42NzQtNi4xMDhMMjIwLjczNywwLjUgICBjMS45NzgtMC4wNDQsMy43NDIsMS45OTgsMS45NTgsNC4yOWwtMTAuODc0LDEzLjI4M2MtMS40MjEsMS44MjYtMS42NjQsMi41MjgtNC42MzYsMi41MjhMOTYuMDQzLDIwLjYxOSAgIGMtNS4xODEtMC4wMS01LjM4LDAuOTM2LTIuNjczLDQuNDk1bDQxLjE0Myw1MC45MzZjMS4zMDYsMS41ODUsMy41NTYsMS41MDcsNC43NDgsMC4wMjZsMTEuMzEzLTE0LjAzOCAgIGMxLjUwMi0yLjE4NiwzLjI4LTQuOTg4LTIuMzU5LTQuNjM0SDE0MC44Mjh6XCIsXG4gICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMTAwMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZGltZW5zaW9uc1wiOiB7XG4gICAgICAgICAgICBcIndpZHRoXCI6IDIyOCxcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE3MyxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIGZpbGxQYXRocygpIHtcbiAgICAgICAgY29uc3QgbG9nb1BhdGhzID0gJCgnc3ZnIHBhdGgnLCBub2RlKTtcbiAgICAgICAgJC5lYWNoKGxvZ29QYXRocywgZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgJCh2YWx1ZSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAnZmlsbC1vcGFjaXR5JzogJzEnXG4gICAgICAgICAgfSwgMTAwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCAkbm9kZSA9ICQobm9kZSk7XG5cbiAgICAgICRub2RlLmxhenlsaW5lcGFpbnRlcih7XG4gICAgICAgICdzdmdEYXRhJzogc3ZnRGF0YSxcbiAgICAgICAgJ3N0cm9rZVdpZHRoJzogMyxcbiAgICAgICAgJ3N0cm9rZUNvbG9yJzogJyM0MzQzNDMnLFxuICAgICAgICAnZGVsYXknOiAzMDAsXG4gICAgICAgICdzcGVlZE11bHRpcGxpZXInOiAxLjgsXG4gICAgICAgICdvbkNvbXBsZXRlJzogZmlsbFBhdGhzXG4gICAgICB9KTtcbiAgICAgICRub2RlLmxhenlsaW5lcGFpbnRlcigncGFpbnQnKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCByID0gZ2V0UmVzcG9uc2l2ZW5lc3MoKTtcblxuICByZXR1cm4gKFxuICAgIDxUb3BCYXJDb250YWluZXI+XG4gICAgICA8TG9nb1xuICAgICAgICBpZD1cImxvZ28tY29udGFpbmVyXCJcbiAgICAgICAgcmVmPXtsb2dvUmVmQ2FsbGJhY2t9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiNzBweFwiLFxuICAgICAgICAgIGhlaWdodDogXCI3MHB4XCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjM1cHggYXV0byAwIGF1dG9cIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+ICAgICAgICBcbiAgICAgIDwvTG9nbz5cbiAgICAgIHtyLmlzTW9iaWxlIHx8XG4gICAgICAgPERhcmtCR01lbnU+XG4gICAgICAgICA8TWVudSBhY3RpdmU9e2FjdGl2ZX0gLz5cbiAgICAgICA8L0RhcmtCR01lbnU+fVxuICAgIDwvVG9wQmFyQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBMaWdodEJHTWVudSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAxMDtcblxuICAmIGEge1xuICAgIGNvbG9yOiAjMDgyMDJhO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICYgYTpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICMwODIwMmE7XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBMaWdodE1lbnUoeyBhY3RpdmUgfSkge1xuICByZXR1cm4gKFxuICAgIDxUb3BCYXJDb250YWluZXI+XG4gICAgICA8TG9nbz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbG9nby5zdmdcIiB3aWR0aD1cIjcxXCIgaGVpZ2h0PVwiNTNcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0xvZ28+XG4gICAgICA8TGlnaHRCR01lbnU+XG4gICAgICAgIDxNZW51IGFjdGl2ZT17YWN0aXZlfSAvPlxuICAgICAgPC9MaWdodEJHTWVudT5cbiAgICA8L1RvcEJhckNvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMzVweCAwIDAgOTBweDtcbiAgei1pbmRleDogMTA7XG4gICYgaW1nIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJjpob3ZlciBpbWcge1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbmA7XG5cbmNvbnN0IFRvcEJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZC5hYFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBBcmlhbCwgSGVsdmV0aWNhLCBTYW5zLVNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuYDtcblxuY29uc3QgTWVudUxpc3QgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMzVweCA1MHB4IDAgMDtcblxuICBsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG5gO1xuXG5mdW5jdGlvbiBNZW51KHsgYWN0aXZlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TWVudUxpc3Q+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPE1lbnVMaW5rIGNsYXNzTmFtZT17YWN0aXZlID09IFwiaW5kZXhcIiA/IFwiYWN0aXZlXCIgOiBudWxsfT5cbiAgICAgICAgICAgIG15IHdvcmtcbiAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluayBocmVmPVwiL3Jlc3VtZVwiPlxuICAgICAgICAgIDxNZW51TGlua1xuICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmUgPT0gXCJyZXN1bWVcIiA/IFwiYWN0aXZlXCIgOiBudWxsfVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9sYXVyYS1ncm9ldHppbmdlci1iMDg1N2IyMS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIG15IGxpbmtlZEluXG4gICAgICAgICAgPC9NZW51TGluaz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWRlZ2lnXCI+XG4gICAgICAgICAgPE1lbnVMaW5rXG4gICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZSA9PSBcInNpZGVnaWdcIiA/IFwiYWN0aXZlXCIgOiBudWxsfVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcGlua2FuZHNhbHQvXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAgbXkgc2lkZSBnaWdcbiAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvTWVudUxpc3Q+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menus.js\n");

/***/ })

})