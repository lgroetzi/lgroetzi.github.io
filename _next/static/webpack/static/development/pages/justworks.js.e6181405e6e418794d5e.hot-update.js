webpackHotUpdate("static/development/pages/justworks.js",{

/***/ "./pages/justworks.js":
/*!****************************!*\
  !*** ./pages/justworks.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Justworks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/menus */ \"./components/menus.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/project */ \"./components/project.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\nfunction Justworks() {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r);\n  return __jsx(\"div\", {\n    className: \"project-page\"\n  }, !r.isMobile && __jsx(_components_menus__WEBPACK_IMPORTED_MODULE_2__[\"LightMenu\"], null), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"GlamourShot\"], {\n    title: \"Justworks\",\n    role: \"Product Designer\",\n    img: \"/img/JW-1@2x.png\"\n  }), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"Feat\"], {\n    color: r.isMobile ? \"blue\" : \"\",\n    img: \"/img/\".concat(r.isMobile ? \"Justworks-1_Mobile.png\" : \"JW-2@2x.png\")\n  }), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"Details\"], null, !r.isMobile && __jsx(\"div\", null, __jsx(\"img\", {\n    className: \"box-shadow\",\n    width: \"387px\",\n    src: \"/img/JW-3@2x.png\"\n  })), __jsx(\"div\", null, __jsx(\"h1\", null, \"The Business\"), __jsx(\"p\", null, \"Justworks provides simple software for payroll, benefits, HR, and compliance.\"), __jsx(\"h1\", null, \"The Challenge\"), __jsx(\"p\", null, \"Given higher churn with small companies, we needed to onboard them at a low cost. Justworks\\u2019 onboarding involves complex forms (e.g. employee censuses). Our challenge was to build a fully automated onboarding flow that would make onboarding small companies worthwhile.\"))), r.isMobile ? __jsx(\"img\", {\n    src: \"/img/Justworks-2_Mobile.png\",\n    style: {\n      maxWidth: \"calc(100% + 120px)\"\n    }\n  }) : __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"Feat\"], {\n    img: \"/img/JW-4@2x.png\",\n    style: {\n      height: \"788px\",\n      marginTop: \"-36px\",\n      paddingTop: \"126px\"\n    }\n  }), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"Details\"], null, !r.isMobile && __jsx(\"div\", null, __jsx(\"img\", {\n    className: \"box-shadow\",\n    width: \"572px\",\n    src: \"/img/JW-5@2x.png\"\n  }))));\n}\n/* \n *       <div\n *         className=\"project-details no-bg\"\n *         style={{ paddingBottom: \"90px\" }}\n *       >\n *         <div>\n *           <img\n *             className=\"box-shadow\"\n *             width=\"572px\"\n *             src=\"/img/JW-5@2x.png\" />\n *         </div>\n * \n *         <div style={{ marginRight: 0 }}>\n *           <h1>The Product</h1>\n *           <p>\n *             After redesigning the marketing page, we automated payroll setup and created online applications for healthcare quotes and workers’ comp.\n *           </p>\n * \n *           <h1>The Outcome</h1>\n *           <p>\n *           With the launch of our redesigned pricing page, we tripled the number of signups. With our streamlined, self-serve onboarding flow, we increased the setup completion rate of new users from 23% to 44%.\n *           </p>\n *         </div>\n *       </div>\n *       \n *       <div>\n *         <img\n *           className=\"box-shadow\"\n *           width=\"100%\"\n *           src=\"/img/JW-6@2x.png\" />\n *       </div>\n * \n *       <div\n *         style={{\n *           background: \"#f2f2f2\",\n *           padding: \"90px\",\n *           textAlign: \"center\",\n *         }}\n *       >\n *         <img\n *           className=\"box-shadow\"\n *           width=\"1100px\"\n *           src=\"/img/JW-7@2x.png\"\n *         />\n *       </div>\n * \n *       <div className=\"project-next\">\n *         <Link href=\"/collabs\"><a>View Next Project</a></Link>\n *       </div> */\n\n_c = Justworks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Justworks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9qdXN0d29ya3MuanM/MDJlNiJdLCJuYW1lcyI6WyJKdXN0d29ya3MiLCJyIiwiZ2V0UmVzcG9uc2l2ZW5lc3MiLCJjbGFzc05hbWUiLCJyZXNwb25zaXZlQ2xhc3NlcyIsImlzTW9iaWxlIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFDbEMsUUFBTUMsQ0FBQyxHQUFHQywwRUFBaUIsRUFBM0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLDBFQUFpQixDQUFDSCxDQUFELENBQW5DO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0csQ0FBQ0EsQ0FBQyxDQUFDSSxRQUFILElBQWUsTUFBQywyREFBRCxPQURsQixFQUdFLE1BQUMsK0RBQUQ7QUFDRSxTQUFLLEVBQUMsV0FEUjtBQUVFLFFBQUksRUFBQyxrQkFGUDtBQUdFLE9BQUcsRUFBQztBQUhOLElBSEYsRUFTRSxNQUFDLHdEQUFEO0FBQ0UsU0FBSyxFQUFFSixDQUFDLENBQUNJLFFBQUYsR0FBYSxNQUFiLEdBQXNCLEVBRC9CO0FBRUUsT0FBRyxpQkFBVUosQ0FBQyxDQUFDSSxRQUFGLEdBQWEsd0JBQWIsR0FBd0MsYUFBbEQ7QUFGTCxJQVRGLEVBYUUsTUFBQywyREFBRCxRQUNHLENBQUNKLENBQUMsQ0FBQ0ksUUFBSCxJQUNBLG1CQUNFO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLE9BQUcsRUFBQztBQUhOLElBREYsQ0FGSCxFQVNFLG1CQUNFLGlDQURGLEVBRUUsaUdBRkYsRUFNRSxrQ0FORixFQU9FLHFTQVBGLENBVEYsQ0FiRixFQW1DSUosQ0FBQyxDQUFDSSxRQUFGLEdBQ0U7QUFBSyxPQUFHLEVBQUMsNkJBQVQ7QUFBdUMsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaO0FBQTlDLElBREYsR0FFRSxNQUFDLHdEQUFEO0FBQU0sT0FBRyxFQUFDLGtCQUFWO0FBQTZCLFNBQUssRUFBRTtBQUNwQ0MsWUFBTSxFQUFFLE9BRDRCO0FBRXBDQyxlQUFTLEVBQUUsT0FGeUI7QUFHcENDLGdCQUFVLEVBQUU7QUFId0I7QUFBcEMsSUFyQ04sRUEyQ0UsTUFBQywyREFBRCxRQUNHLENBQUNSLENBQUMsQ0FBQ0ksUUFBSCxJQUNBLG1CQUNFO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLE9BQUcsRUFBQztBQUhOLElBREYsQ0FGSCxDQTNDRixDQURGO0FBd0REO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBOUR3QkwsUyIsImZpbGUiOiIuL3BhZ2VzL2p1c3R3b3Jrcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgTGlnaHRNZW51IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tZW51cyc7XG5pbXBvcnQgeyBHbGFtb3VyU2hvdCwgRmVhdCwgRGV0YWlscywgTmV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdCc7XG5cbmltcG9ydCB7IGdldFJlc3BvbnNpdmVuZXNzLCByZXNwb25zaXZlQ2xhc3NlcyB9IGZyb20gJy4uL2xpYi9tZWRpYS1xdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEp1c3R3b3JrcygpIHtcbiAgY29uc3QgciA9IGdldFJlc3BvbnNpdmVuZXNzKCk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IHJlc3BvbnNpdmVDbGFzc2VzKHIpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1wYWdlXCI+XG4gICAgICB7IXIuaXNNb2JpbGUgJiYgPExpZ2h0TWVudSAvPn1cblxuICAgICAgPEdsYW1vdXJTaG90XG4gICAgICAgIHRpdGxlPVwiSnVzdHdvcmtzXCJcbiAgICAgICAgcm9sZT1cIlByb2R1Y3QgRGVzaWduZXJcIlxuICAgICAgICBpbWc9XCIvaW1nL0pXLTFAMngucG5nXCJcbiAgICAgIC8+XG5cbiAgICAgIDxGZWF0XG4gICAgICAgIGNvbG9yPXtyLmlzTW9iaWxlID8gXCJibHVlXCIgOiBcIlwifVxuICAgICAgICBpbWc9e2AvaW1nLyR7ci5pc01vYmlsZSA/IFwiSnVzdHdvcmtzLTFfTW9iaWxlLnBuZ1wiIDogXCJKVy0yQDJ4LnBuZ1wifWAgfSAvPlxuXG4gICAgICA8RGV0YWlscz5cbiAgICAgICAgeyFyLmlzTW9iaWxlICYmXG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94LXNoYWRvd1wiXG4gICAgICAgICAgICAgd2lkdGg9XCIzODdweFwiXG4gICAgICAgICAgICAgc3JjPVwiL2ltZy9KVy0zQDJ4LnBuZ1wiIC8+XG4gICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+VGhlIEJ1c2luZXNzPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEp1c3R3b3JrcyBwcm92aWRlcyBzaW1wbGUgc29mdHdhcmUgZm9yIHBheXJvbGwsIGJlbmVmaXRzLCBIUiwgYW5kIGNvbXBsaWFuY2UuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGgxPlRoZSBDaGFsbGVuZ2U8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgR2l2ZW4gaGlnaGVyIGNodXJuIHdpdGggc21hbGwgY29tcGFuaWVzLCB3ZSBuZWVkZWQgdG8gb25ib2FyZCB0aGVtIGF0IGEgbG93IGNvc3QuIEp1c3R3b3Jrc+KAmSBvbmJvYXJkaW5nIGludm9sdmVzIGNvbXBsZXggZm9ybXMgKGUuZy4gZW1wbG95ZWUgY2Vuc3VzZXMpLiBPdXIgY2hhbGxlbmdlIHdhcyB0byBidWlsZCBhIGZ1bGx5IGF1dG9tYXRlZCBvbmJvYXJkaW5nIGZsb3cgdGhhdCB3b3VsZCBtYWtlIG9uYm9hcmRpbmcgc21hbGwgY29tcGFuaWVzIHdvcnRod2hpbGUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRGV0YWlscz5cblxuICAgICAgeyByLmlzTW9iaWxlXG4gICAgICAgID8gPGltZyBzcmM9XCIvaW1nL0p1c3R3b3Jrcy0yX01vYmlsZS5wbmdcIiBzdHlsZT17eyBtYXhXaWR0aDogXCJjYWxjKDEwMCUgKyAxMjBweClcIiB9fSAvPlxuICAgICAgICA6IDxGZWF0IGltZz1cIi9pbWcvSlctNEAyeC5wbmdcIiBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogXCI3ODhweFwiLFxuICAgICAgICAgIG1hcmdpblRvcDogXCItMzZweFwiLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTI2cHhcIixcbiAgICAgICAgfX0gLz4gfVxuXG4gICAgICA8RGV0YWlscz5cbiAgICAgICAgeyFyLmlzTW9iaWxlICYmXG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94LXNoYWRvd1wiXG4gICAgICAgICAgICAgd2lkdGg9XCI1NzJweFwiXG4gICAgICAgICAgICAgc3JjPVwiL2ltZy9KVy01QDJ4LnBuZ1wiIC8+XG4gICAgICAgICA8L2Rpdj59XG4gICAgICA8L0RldGFpbHM+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG4vKiBcbiAqICAgICAgIDxkaXZcbiAqICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdC1kZXRhaWxzIG5vLWJnXCJcbiAqICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCI5MHB4XCIgfX1cbiAqICAgICAgID5cbiAqICAgICAgICAgPGRpdj5cbiAqICAgICAgICAgICA8aW1nXG4gKiAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3gtc2hhZG93XCJcbiAqICAgICAgICAgICAgIHdpZHRoPVwiNTcycHhcIlxuICogICAgICAgICAgICAgc3JjPVwiL2ltZy9KVy01QDJ4LnBuZ1wiIC8+XG4gKiAgICAgICAgIDwvZGl2PlxuICogXG4gKiAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gKiAgICAgICAgICAgPGgxPlRoZSBQcm9kdWN0PC9oMT5cbiAqICAgICAgICAgICA8cD5cbiAqICAgICAgICAgICAgIEFmdGVyIHJlZGVzaWduaW5nIHRoZSBtYXJrZXRpbmcgcGFnZSwgd2UgYXV0b21hdGVkIHBheXJvbGwgc2V0dXAgYW5kIGNyZWF0ZWQgb25saW5lIGFwcGxpY2F0aW9ucyBmb3IgaGVhbHRoY2FyZSBxdW90ZXMgYW5kIHdvcmtlcnPigJkgY29tcC5cbiAqICAgICAgICAgICA8L3A+XG4gKiBcbiAqICAgICAgICAgICA8aDE+VGhlIE91dGNvbWU8L2gxPlxuICogICAgICAgICAgIDxwPlxuICogICAgICAgICAgIFdpdGggdGhlIGxhdW5jaCBvZiBvdXIgcmVkZXNpZ25lZCBwcmljaW5nIHBhZ2UsIHdlIHRyaXBsZWQgdGhlIG51bWJlciBvZiBzaWdudXBzLiBXaXRoIG91ciBzdHJlYW1saW5lZCwgc2VsZi1zZXJ2ZSBvbmJvYXJkaW5nIGZsb3csIHdlIGluY3JlYXNlZCB0aGUgc2V0dXAgY29tcGxldGlvbiByYXRlIG9mIG5ldyB1c2VycyBmcm9tIDIzJSB0byA0NCUuXG4gKiAgICAgICAgICAgPC9wPlxuICogICAgICAgICA8L2Rpdj5cbiAqICAgICAgIDwvZGl2PlxuICogICAgICAgXG4gKiAgICAgICA8ZGl2PlxuICogICAgICAgICA8aW1nXG4gKiAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94LXNoYWRvd1wiXG4gKiAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAqICAgICAgICAgICBzcmM9XCIvaW1nL0pXLTZAMngucG5nXCIgLz5cbiAqICAgICAgIDwvZGl2PlxuICogXG4gKiAgICAgICA8ZGl2XG4gKiAgICAgICAgIHN0eWxlPXt7XG4gKiAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZjJmMmYyXCIsXG4gKiAgICAgICAgICAgcGFkZGluZzogXCI5MHB4XCIsXG4gKiAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICogICAgICAgICB9fVxuICogICAgICAgPlxuICogICAgICAgICA8aW1nXG4gKiAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94LXNoYWRvd1wiXG4gKiAgICAgICAgICAgd2lkdGg9XCIxMTAwcHhcIlxuICogICAgICAgICAgIHNyYz1cIi9pbWcvSlctN0AyeC5wbmdcIlxuICogICAgICAgICAvPlxuICogICAgICAgPC9kaXY+XG4gKiBcbiAqICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1uZXh0XCI+XG4gKiAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29sbGFic1wiPjxhPlZpZXcgTmV4dCBQcm9qZWN0PC9hPjwvTGluaz5cbiAqICAgICAgIDwvZGl2PiAqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/justworks.js\n");

/***/ })

})