webpackHotUpdate("static/development/pages/justworks.js",{

/***/ "./pages/justworks.js":
/*!****************************!*\
  !*** ./pages/justworks.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Justworks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/menus */ \"./components/menus.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/project */ \"./components/project.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\nfunction Justworks() {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r);\n  return __jsx(\"div\", {\n    className: \"project-page\"\n  }, !r.isMobile && __jsx(_components_menus__WEBPACK_IMPORTED_MODULE_2__[\"LightMenu\"], null), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"GlamourShot\"], {\n    title: \"Justworks\",\n    role: \"Product Designer\",\n    img: \"/img/JW-1@2x.png\"\n  }), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"Feat\"], {\n    color: r.isMobile ? \"blue\" : \"\",\n    img: \"/img/\".concat(r.isMobile ? \"Justworks-1_Mobile.png\" : \"JW-2@2x.png\")\n  }), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"Details\"], null, !r.isMobile && __jsx(\"div\", null, __jsx(\"img\", {\n    className: \"box-shadow\",\n    width: \"387px\",\n    src: \"/img/JW-3@2x.png\"\n  })), __jsx(\"div\", null, __jsx(\"h1\", null, \"The Business\"), __jsx(\"p\", null, \"Justworks provides simple software for payroll, benefits, HR, and compliance.\"), __jsx(\"h1\", null, \"The Challenge\"), __jsx(\"p\", null, \"Given higher churn with small companies, we needed to onboard them at a low cost. Justworks\\u2019 onboarding involves complex forms (e.g. employee censuses). Our challenge was to build a fully automated onboarding flow that would make onboarding small companies worthwhile.\"))), r.isMobile ? __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"Feat\"], {\n    img: \"/img/Justworks-2_Mobile.png\"\n  }) : __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"Feat\"], {\n    img: \"/img/JW-4@2x.png\",\n    style: {\n      height: \"788px\",\n      marginTop: \"-36px\",\n      paddingTop: \"126px\"\n    }\n  }));\n}\n/* \n *       <div\n *         className=\"project-details no-bg\"\n *         style={{ paddingBottom: \"90px\" }}\n *       >\n *         <div>\n *           <img\n *             className=\"box-shadow\"\n *             width=\"572px\"\n *             src=\"/img/JW-5@2x.png\" />\n *         </div>\n * \n *         <div style={{ marginRight: 0 }}>\n *           <h1>The Product</h1>\n *           <p>\n *             After redesigning the marketing page, we automated payroll setup and created online applications for healthcare quotes and workers’ comp.\n *           </p>\n * \n *           <h1>The Outcome</h1>\n *           <p>\n *           With the launch of our redesigned pricing page, we tripled the number of signups. With our streamlined, self-serve onboarding flow, we increased the setup completion rate of new users from 23% to 44%.\n *           </p>\n *         </div>\n *       </div>\n *       \n *       <div>\n *         <img\n *           className=\"box-shadow\"\n *           width=\"100%\"\n *           src=\"/img/JW-6@2x.png\" />\n *       </div>\n * \n *       <div\n *         style={{\n *           background: \"#f2f2f2\",\n *           padding: \"90px\",\n *           textAlign: \"center\",\n *         }}\n *       >\n *         <img\n *           className=\"box-shadow\"\n *           width=\"1100px\"\n *           src=\"/img/JW-7@2x.png\"\n *         />\n *       </div>\n * \n *       <div className=\"project-next\">\n *         <Link href=\"/collabs\"><a>View Next Project</a></Link>\n *       </div> */\n\n_c = Justworks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Justworks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9qdXN0d29ya3MuanM/MDJlNiJdLCJuYW1lcyI6WyJKdXN0d29ya3MiLCJyIiwiZ2V0UmVzcG9uc2l2ZW5lc3MiLCJjbGFzc05hbWUiLCJyZXNwb25zaXZlQ2xhc3NlcyIsImlzTW9iaWxlIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQ2xDLFFBQU1DLENBQUMsR0FBR0MsMEVBQWlCLEVBQTNCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQywwRUFBaUIsQ0FBQ0gsQ0FBRCxDQUFuQztBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHLENBQUNBLENBQUMsQ0FBQ0ksUUFBSCxJQUFlLE1BQUMsMkRBQUQsT0FEbEIsRUFHRSxNQUFDLCtEQUFEO0FBQ0UsU0FBSyxFQUFDLFdBRFI7QUFFRSxRQUFJLEVBQUMsa0JBRlA7QUFHRSxPQUFHLEVBQUM7QUFITixJQUhGLEVBU0UsTUFBQyx3REFBRDtBQUNFLFNBQUssRUFBRUosQ0FBQyxDQUFDSSxRQUFGLEdBQWEsTUFBYixHQUFzQixFQUQvQjtBQUVFLE9BQUcsaUJBQVVKLENBQUMsQ0FBQ0ksUUFBRixHQUFhLHdCQUFiLEdBQXdDLGFBQWxEO0FBRkwsSUFURixFQWFFLE1BQUMsMkRBQUQsUUFDRyxDQUFDSixDQUFDLENBQUNJLFFBQUgsSUFDQSxtQkFDRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsU0FBSyxFQUFDLE9BRlI7QUFHRSxPQUFHLEVBQUM7QUFITixJQURGLENBRkgsRUFTRSxtQkFDRSxpQ0FERixFQUVFLGlHQUZGLEVBTUUsa0NBTkYsRUFPRSxxU0FQRixDQVRGLENBYkYsRUFtQ0lKLENBQUMsQ0FBQ0ksUUFBRixHQUNFLE1BQUMsd0RBQUQ7QUFBTSxPQUFHLEVBQUM7QUFBVixJQURGLEdBRUUsTUFBQyx3REFBRDtBQUFNLE9BQUcsRUFBQyxrQkFBVjtBQUE2QixTQUFLLEVBQUU7QUFDcENDLFlBQU0sRUFBRSxPQUQ0QjtBQUVwQ0MsZUFBUyxFQUFFLE9BRnlCO0FBR3BDQyxnQkFBVSxFQUFFO0FBSHdCO0FBQXBDLElBckNOLENBREY7QUE4Q0Q7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FwRHdCUixTIiwiZmlsZSI6Ii4vcGFnZXMvanVzdHdvcmtzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBMaWdodE1lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL21lbnVzJztcbmltcG9ydCB7IEdsYW1vdXJTaG90LCBGZWF0LCBEZXRhaWxzLCBOZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0JztcblxuaW1wb3J0IHsgZ2V0UmVzcG9uc2l2ZW5lc3MsIHJlc3BvbnNpdmVDbGFzc2VzIH0gZnJvbSAnLi4vbGliL21lZGlhLXF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSnVzdHdvcmtzKCkge1xuICBjb25zdCByID0gZ2V0UmVzcG9uc2l2ZW5lc3MoKTtcbiAgY29uc3QgY2xhc3NOYW1lID0gcmVzcG9uc2l2ZUNsYXNzZXMocik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXBhZ2VcIj5cbiAgICAgIHshci5pc01vYmlsZSAmJiA8TGlnaHRNZW51IC8+fVxuXG4gICAgICA8R2xhbW91clNob3RcbiAgICAgICAgdGl0bGU9XCJKdXN0d29ya3NcIlxuICAgICAgICByb2xlPVwiUHJvZHVjdCBEZXNpZ25lclwiXG4gICAgICAgIGltZz1cIi9pbWcvSlctMUAyeC5wbmdcIlxuICAgICAgLz5cblxuICAgICAgPEZlYXRcbiAgICAgICAgY29sb3I9e3IuaXNNb2JpbGUgPyBcImJsdWVcIiA6IFwiXCJ9XG4gICAgICAgIGltZz17YC9pbWcvJHtyLmlzTW9iaWxlID8gXCJKdXN0d29ya3MtMV9Nb2JpbGUucG5nXCIgOiBcIkpXLTJAMngucG5nXCJ9YCB9IC8+XG5cbiAgICAgIDxEZXRhaWxzPlxuICAgICAgICB7IXIuaXNNb2JpbGUgJiZcbiAgICAgICAgIDxkaXY+XG4gICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3gtc2hhZG93XCJcbiAgICAgICAgICAgICB3aWR0aD1cIjM4N3B4XCJcbiAgICAgICAgICAgICBzcmM9XCIvaW1nL0pXLTNAMngucG5nXCIgLz5cbiAgICAgICAgIDwvZGl2Pn1cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5UaGUgQnVzaW5lc3M8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSnVzdHdvcmtzIHByb3ZpZGVzIHNpbXBsZSBzb2Z0d2FyZSBmb3IgcGF5cm9sbCwgYmVuZWZpdHMsIEhSLCBhbmQgY29tcGxpYW5jZS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8aDE+VGhlIENoYWxsZW5nZTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHaXZlbiBoaWdoZXIgY2h1cm4gd2l0aCBzbWFsbCBjb21wYW5pZXMsIHdlIG5lZWRlZCB0byBvbmJvYXJkIHRoZW0gYXQgYSBsb3cgY29zdC4gSnVzdHdvcmtz4oCZIG9uYm9hcmRpbmcgaW52b2x2ZXMgY29tcGxleCBmb3JtcyAoZS5nLiBlbXBsb3llZSBjZW5zdXNlcykuIE91ciBjaGFsbGVuZ2Ugd2FzIHRvIGJ1aWxkIGEgZnVsbHkgYXV0b21hdGVkIG9uYm9hcmRpbmcgZmxvdyB0aGF0IHdvdWxkIG1ha2Ugb25ib2FyZGluZyBzbWFsbCBjb21wYW5pZXMgd29ydGh3aGlsZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EZXRhaWxzPlxuXG4gICAgICB7IHIuaXNNb2JpbGVcbiAgICAgICAgPyA8RmVhdCBpbWc9XCIvaW1nL0p1c3R3b3Jrcy0yX01vYmlsZS5wbmdcIiAvPlxuICAgICAgICA6IDxGZWF0IGltZz1cIi9pbWcvSlctNEAyeC5wbmdcIiBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogXCI3ODhweFwiLFxuICAgICAgICAgIG1hcmdpblRvcDogXCItMzZweFwiLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTI2cHhcIixcbiAgICAgICAgfX0gLz4gfVxuXG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuLyogXG4gKiAgICAgICA8ZGl2XG4gKiAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtZGV0YWlscyBuby1iZ1wiXG4gKiAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiOTBweFwiIH19XG4gKiAgICAgICA+XG4gKiAgICAgICAgIDxkaXY+XG4gKiAgICAgICAgICAgPGltZ1xuICogICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94LXNoYWRvd1wiXG4gKiAgICAgICAgICAgICB3aWR0aD1cIjU3MnB4XCJcbiAqICAgICAgICAgICAgIHNyYz1cIi9pbWcvSlctNUAyeC5wbmdcIiAvPlxuICogICAgICAgICA8L2Rpdj5cbiAqIFxuICogICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAwIH19PlxuICogICAgICAgICAgIDxoMT5UaGUgUHJvZHVjdDwvaDE+XG4gKiAgICAgICAgICAgPHA+XG4gKiAgICAgICAgICAgICBBZnRlciByZWRlc2lnbmluZyB0aGUgbWFya2V0aW5nIHBhZ2UsIHdlIGF1dG9tYXRlZCBwYXlyb2xsIHNldHVwIGFuZCBjcmVhdGVkIG9ubGluZSBhcHBsaWNhdGlvbnMgZm9yIGhlYWx0aGNhcmUgcXVvdGVzIGFuZCB3b3JrZXJz4oCZIGNvbXAuXG4gKiAgICAgICAgICAgPC9wPlxuICogXG4gKiAgICAgICAgICAgPGgxPlRoZSBPdXRjb21lPC9oMT5cbiAqICAgICAgICAgICA8cD5cbiAqICAgICAgICAgICBXaXRoIHRoZSBsYXVuY2ggb2Ygb3VyIHJlZGVzaWduZWQgcHJpY2luZyBwYWdlLCB3ZSB0cmlwbGVkIHRoZSBudW1iZXIgb2Ygc2lnbnVwcy4gV2l0aCBvdXIgc3RyZWFtbGluZWQsIHNlbGYtc2VydmUgb25ib2FyZGluZyBmbG93LCB3ZSBpbmNyZWFzZWQgdGhlIHNldHVwIGNvbXBsZXRpb24gcmF0ZSBvZiBuZXcgdXNlcnMgZnJvbSAyMyUgdG8gNDQlLlxuICogICAgICAgICAgIDwvcD5cbiAqICAgICAgICAgPC9kaXY+XG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICAgIFxuICogICAgICAgPGRpdj5cbiAqICAgICAgICAgPGltZ1xuICogICAgICAgICAgIGNsYXNzTmFtZT1cImJveC1zaGFkb3dcIlxuICogICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gKiAgICAgICAgICAgc3JjPVwiL2ltZy9KVy02QDJ4LnBuZ1wiIC8+XG4gKiAgICAgICA8L2Rpdj5cbiAqIFxuICogICAgICAgPGRpdlxuICogICAgICAgICBzdHlsZT17e1xuICogICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2YyZjJmMlwiLFxuICogICAgICAgICAgIHBhZGRpbmc6IFwiOTBweFwiLFxuICogICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAqICAgICAgICAgfX1cbiAqICAgICAgID5cbiAqICAgICAgICAgPGltZ1xuICogICAgICAgICAgIGNsYXNzTmFtZT1cImJveC1zaGFkb3dcIlxuICogICAgICAgICAgIHdpZHRoPVwiMTEwMHB4XCJcbiAqICAgICAgICAgICBzcmM9XCIvaW1nL0pXLTdAMngucG5nXCJcbiAqICAgICAgICAgLz5cbiAqICAgICAgIDwvZGl2PlxuICogXG4gKiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtbmV4dFwiPlxuICogICAgICAgICA8TGluayBocmVmPVwiL2NvbGxhYnNcIj48YT5WaWV3IE5leHQgUHJvamVjdDwvYT48L0xpbms+XG4gKiAgICAgICA8L2Rpdj4gKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/justworks.js\n");

/***/ })

})