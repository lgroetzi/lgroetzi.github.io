webpackHotUpdate("static/development/pages/justworks.js",{

/***/ "./pages/justworks.js":
/*!****************************!*\
  !*** ./pages/justworks.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Justworks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/menus */ \"./components/menus.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/project */ \"./components/project.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\nfunction Justworks() {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r);\n  return __jsx(\"div\", {\n    className: \"project-page\"\n  }, !r.isMobile && __jsx(_components_menus__WEBPACK_IMPORTED_MODULE_2__[\"LightMenu\"], null), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"GlamourShot\"], {\n    title: \"Justworks\",\n    role: \"Product Designer\",\n    img: \"/img/JW-1@2x.png\"\n  }), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"Feat\"], {\n    color: r.isMobile ? \"blue\" : \"\",\n    img: \"/img/\".concat(r.isMobile ? \"Justworks-1_Mobile.png\" : \"JW-2@2x.png\")\n  }), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"Details\"], null, !r.isMobile && __jsx(\"div\", null, __jsx(\"img\", {\n    className: \"box-shadow\",\n    width: \"387px\",\n    src: \"/img/JW-3@2x.png\"\n  })), __jsx(\"div\", null, __jsx(\"h1\", null, \"The Business\"), __jsx(\"p\", null, \"Justworks provides simple software for payroll, benefits, HR, and compliance.\"), __jsx(\"h1\", null, \"The Challenge\"), __jsx(\"p\", null, \"Given higher churn with small companies, we needed to onboard them at a low cost. Justworks\\u2019 onboarding involves complex forms (e.g. employee censuses). Our challenge was to build a fully automated onboarding flow that would make onboarding small companies worthwhile.\"))), r.isMobile ? __jsx(\"img\", {\n    src: \"/img/Justworks-2_Mobile.png\",\n    style: {\n      maxWidth: \"calc(100% + 120px)\"\n    }\n  }) : __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"Feat\"], {\n    img: \"/img/JW-4@2x.png\",\n    style: {\n      marginTop: \"-92px\",\n      paddingTop: \"126px\"\n    }\n  }), __jsx(_components_project__WEBPACK_IMPORTED_MODULE_3__[\"Details\"], {\n    className: \"no-bg\"\n  }, !r.isMobile && __jsx(\"div\", null, __jsx(\"img\", {\n    className: \"box-shadow\",\n    width: \"572px\",\n    src: \"/img/JW-5@2x.png\"\n  })), __jsx(\"div\", null, __jsx(\"h1\", null, \"The Product\"), __jsx(\"p\", null, \"After redesigning the marketing page, we automated payroll setup and created online applications for healthcare quotes and workers\\u2019 comp.\"), __jsx(\"h1\", null, \"The Outcome\"), __jsx(\"p\", null, \"With the launch of our redesigned pricing page, we tripled the number of signups. With our streamlined, self-serve onboarding flow, we increased the setup completion rate of new users from 23% to 44%.\"))), !r.isMobile && __jsx(\"div\", null, __jsx(\"div\", null, __jsx(\"img\", {\n    className: \"box-shadow\",\n    width: \"100%\",\n    src: \"/img/JW-6@2x.png\"\n  })), __jsx(\"div\", {\n    style: {\n      background: \"#f2f2f2\",\n      padding: \"90px\",\n      textAlign: \"center\"\n    }\n  }, __jsx(\"img\", {\n    className: \"box-shadow\",\n    width: \"1100px\",\n    src: \"/img/JW-7@2x.png\"\n  }))));\n}\n/* \n *       <div\n *         className=\"project-details no-bg\"\n *         style={{ paddingBottom: \"90px\" }}\n *       >\n *         <div>\n *           <img\n *             className=\"box-shadow\"\n *             width=\"572px\"\n *             src=\"/img/JW-5@2x.png\" />\n *         </div>\n * \n *         <div style={{ marginRight: 0 }}>\n *           <h1>The Product</h1>\n *           <p>\n *             After redesigning the marketing page, we automated payroll setup and created online applications for healthcare quotes and workers’ comp.\n *           </p>\n * \n *           <h1>The Outcome</h1>\n *           <p>\n *           With the launch of our redesigned pricing page, we tripled the number of signups. With our streamlined, self-serve onboarding flow, we increased the setup completion rate of new users from 23% to 44%.\n *           </p>\n *         </div>\n *       </div>\n *       \n *       <div>\n *         <img\n *           className=\"box-shadow\"\n *           width=\"100%\"\n *           src=\"/img/JW-6@2x.png\" />\n *       </div>\n * \n *       <div\n *         style={{\n *           background: \"#f2f2f2\",\n *           padding: \"90px\",\n *           textAlign: \"center\",\n *         }}\n *       >\n *         <img\n *           className=\"box-shadow\"\n *           width=\"1100px\"\n *           src=\"/img/JW-7@2x.png\"\n *         />\n *       </div>\n * \n *       <div className=\"project-next\">\n *         <Link href=\"/collabs\"><a>View Next Project</a></Link>\n *       </div> */\n\n_c = Justworks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Justworks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9qdXN0d29ya3MuanM/MDJlNiJdLCJuYW1lcyI6WyJKdXN0d29ya3MiLCJyIiwiZ2V0UmVzcG9uc2l2ZW5lc3MiLCJjbGFzc05hbWUiLCJyZXNwb25zaXZlQ2xhc3NlcyIsImlzTW9iaWxlIiwibWF4V2lkdGgiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nVG9wIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUNsQyxRQUFNQyxDQUFDLEdBQUdDLDBFQUFpQixFQUEzQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsMEVBQWlCLENBQUNILENBQUQsQ0FBbkM7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRyxDQUFDQSxDQUFDLENBQUNJLFFBQUgsSUFBZSxNQUFDLDJEQUFELE9BRGxCLEVBR0UsTUFBQywrREFBRDtBQUNFLFNBQUssRUFBQyxXQURSO0FBRUUsUUFBSSxFQUFDLGtCQUZQO0FBR0UsT0FBRyxFQUFDO0FBSE4sSUFIRixFQVNFLE1BQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUVKLENBQUMsQ0FBQ0ksUUFBRixHQUFhLE1BQWIsR0FBc0IsRUFEL0I7QUFFRSxPQUFHLGlCQUFVSixDQUFDLENBQUNJLFFBQUYsR0FBYSx3QkFBYixHQUF3QyxhQUFsRDtBQUZMLElBVEYsRUFhRSxNQUFDLDJEQUFELFFBQ0csQ0FBQ0osQ0FBQyxDQUFDSSxRQUFILElBQ0EsbUJBQ0U7QUFDRSxhQUFTLEVBQUMsWUFEWjtBQUVFLFNBQUssRUFBQyxPQUZSO0FBR0UsT0FBRyxFQUFDO0FBSE4sSUFERixDQUZILEVBU0UsbUJBQ0UsaUNBREYsRUFFRSxpR0FGRixFQU1FLGtDQU5GLEVBT0UscVNBUEYsQ0FURixDQWJGLEVBbUNJSixDQUFDLENBQUNJLFFBQUYsR0FDRTtBQUFLLE9BQUcsRUFBQyw2QkFBVDtBQUF1QyxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVo7QUFBOUMsSUFERixHQUVFLE1BQUMsd0RBQUQ7QUFBTSxPQUFHLEVBQUMsa0JBQVY7QUFBNkIsU0FBSyxFQUFFO0FBQ3BDQyxlQUFTLEVBQUUsT0FEeUI7QUFFcENDLGdCQUFVLEVBQUU7QUFGd0I7QUFBcEMsSUFyQ04sRUEwQ0UsTUFBQywyREFBRDtBQUFTLGFBQVMsRUFBQztBQUFuQixLQUNHLENBQUNQLENBQUMsQ0FBQ0ksUUFBSCxJQUNBLG1CQUNFO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLE9BQUcsRUFBQztBQUhOLElBREYsQ0FGSCxFQVNFLG1CQUNFLGdDQURGLEVBRUUsa0tBRkYsRUFNRSxnQ0FORixFQU9FLDROQVBGLENBVEYsQ0ExQ0YsRUFnRUcsQ0FBQ0osQ0FBQyxDQUFDSSxRQUFILElBQ0EsbUJBQ0UsbUJBQ0U7QUFDRSxhQUFTLEVBQUMsWUFEWjtBQUVFLFNBQUssRUFBQyxNQUZSO0FBR0UsT0FBRyxFQUFDO0FBSE4sSUFERixDQURGLEVBT0U7QUFDRSxTQUFLLEVBQUU7QUFDTEksZ0JBQVUsRUFBRSxTQURQO0FBRUxDLGFBQU8sRUFBRSxNQUZKO0FBR0xDLGVBQVMsRUFBRTtBQUhOO0FBRFQsS0FPRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsU0FBSyxFQUFDLFFBRlI7QUFHRSxPQUFHLEVBQUM7QUFITixJQVBGLENBUEYsQ0FqRUgsQ0FERjtBQTZGRDtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW5Hd0JYLFMiLCJmaWxlIjoiLi9wYWdlcy9qdXN0d29ya3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IExpZ2h0TWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudXMnO1xuaW1wb3J0IHsgR2xhbW91clNob3QsIEZlYXQsIERldGFpbHMsIE5leHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3QnO1xuXG5pbXBvcnQgeyBnZXRSZXNwb25zaXZlbmVzcywgcmVzcG9uc2l2ZUNsYXNzZXMgfSBmcm9tICcuLi9saWIvbWVkaWEtcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKdXN0d29ya3MoKSB7XG4gIGNvbnN0IHIgPSBnZXRSZXNwb25zaXZlbmVzcygpO1xuICBjb25zdCBjbGFzc05hbWUgPSByZXNwb25zaXZlQ2xhc3NlcyhyKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtcGFnZVwiPlxuICAgICAgeyFyLmlzTW9iaWxlICYmIDxMaWdodE1lbnUgLz59XG5cbiAgICAgIDxHbGFtb3VyU2hvdFxuICAgICAgICB0aXRsZT1cIkp1c3R3b3Jrc1wiXG4gICAgICAgIHJvbGU9XCJQcm9kdWN0IERlc2lnbmVyXCJcbiAgICAgICAgaW1nPVwiL2ltZy9KVy0xQDJ4LnBuZ1wiXG4gICAgICAvPlxuXG4gICAgICA8RmVhdFxuICAgICAgICBjb2xvcj17ci5pc01vYmlsZSA/IFwiYmx1ZVwiIDogXCJcIn1cbiAgICAgICAgaW1nPXtgL2ltZy8ke3IuaXNNb2JpbGUgPyBcIkp1c3R3b3Jrcy0xX01vYmlsZS5wbmdcIiA6IFwiSlctMkAyeC5wbmdcIn1gIH0gLz5cblxuICAgICAgPERldGFpbHM+XG4gICAgICAgIHshci5pc01vYmlsZSAmJlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveC1zaGFkb3dcIlxuICAgICAgICAgICAgIHdpZHRoPVwiMzg3cHhcIlxuICAgICAgICAgICAgIHNyYz1cIi9pbWcvSlctM0AyeC5wbmdcIiAvPlxuICAgICAgICAgPC9kaXY+fVxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlRoZSBCdXNpbmVzczwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBKdXN0d29ya3MgcHJvdmlkZXMgc2ltcGxlIHNvZnR3YXJlIGZvciBwYXlyb2xsLCBiZW5lZml0cywgSFIsIGFuZCBjb21wbGlhbmNlLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxoMT5UaGUgQ2hhbGxlbmdlPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEdpdmVuIGhpZ2hlciBjaHVybiB3aXRoIHNtYWxsIGNvbXBhbmllcywgd2UgbmVlZGVkIHRvIG9uYm9hcmQgdGhlbSBhdCBhIGxvdyBjb3N0LiBKdXN0d29ya3PigJkgb25ib2FyZGluZyBpbnZvbHZlcyBjb21wbGV4IGZvcm1zIChlLmcuIGVtcGxveWVlIGNlbnN1c2VzKS4gT3VyIGNoYWxsZW5nZSB3YXMgdG8gYnVpbGQgYSBmdWxseSBhdXRvbWF0ZWQgb25ib2FyZGluZyBmbG93IHRoYXQgd291bGQgbWFrZSBvbmJvYXJkaW5nIHNtYWxsIGNvbXBhbmllcyB3b3J0aHdoaWxlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RldGFpbHM+XG5cbiAgICAgIHsgci5pc01vYmlsZVxuICAgICAgICA/IDxpbWcgc3JjPVwiL2ltZy9KdXN0d29ya3MtMl9Nb2JpbGUucG5nXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiY2FsYygxMDAlICsgMTIwcHgpXCIgfX0gLz5cbiAgICAgICAgOiA8RmVhdCBpbWc9XCIvaW1nL0pXLTRAMngucG5nXCIgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTkycHhcIixcbiAgICAgICAgICBwYWRkaW5nVG9wOiBcIjEyNnB4XCIsXG4gICAgICAgIH19IC8+IH1cblxuICAgICAgPERldGFpbHMgY2xhc3NOYW1lPVwibm8tYmdcIj5cbiAgICAgICAgeyFyLmlzTW9iaWxlICYmXG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94LXNoYWRvd1wiXG4gICAgICAgICAgICAgd2lkdGg9XCI1NzJweFwiXG4gICAgICAgICAgICAgc3JjPVwiL2ltZy9KVy01QDJ4LnBuZ1wiIC8+XG4gICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+VGhlIFByb2R1Y3Q8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQWZ0ZXIgcmVkZXNpZ25pbmcgdGhlIG1hcmtldGluZyBwYWdlLCB3ZSBhdXRvbWF0ZWQgcGF5cm9sbCBzZXR1cCBhbmQgY3JlYXRlZCBvbmxpbmUgYXBwbGljYXRpb25zIGZvciBoZWFsdGhjYXJlIHF1b3RlcyBhbmQgd29ya2Vyc+KAmSBjb21wLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICBcbiAgICAgICAgICA8aDE+VGhlIE91dGNvbWU8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2l0aCB0aGUgbGF1bmNoIG9mIG91ciByZWRlc2lnbmVkIHByaWNpbmcgcGFnZSwgd2UgdHJpcGxlZCB0aGUgbnVtYmVyIG9mIHNpZ251cHMuIFdpdGggb3VyIHN0cmVhbWxpbmVkLCBzZWxmLXNlcnZlIG9uYm9hcmRpbmcgZmxvdywgd2UgaW5jcmVhc2VkIHRoZSBzZXR1cCBjb21wbGV0aW9uIHJhdGUgb2YgbmV3IHVzZXJzIGZyb20gMjMlIHRvIDQ0JS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EZXRhaWxzPlxuXG4gICAgICB7IXIuaXNNb2JpbGUgJiZcbiAgICAgICA8ZGl2PlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveC1zaGFkb3dcIlxuICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgc3JjPVwiL2ltZy9KVy02QDJ4LnBuZ1wiIC8+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXZcbiAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmMmYyZjJcIixcbiAgICAgICAgICAgICBwYWRkaW5nOiBcIjkwcHhcIixcbiAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgIH19XG4gICAgICAgICA+XG4gICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3gtc2hhZG93XCJcbiAgICAgICAgICAgICB3aWR0aD1cIjExMDBweFwiXG4gICAgICAgICAgICAgc3JjPVwiL2ltZy9KVy03QDJ4LnBuZ1wiXG4gICAgICAgICAgIC8+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgXG5cblxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbi8qIFxuICogICAgICAgPGRpdlxuICogICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWRldGFpbHMgbm8tYmdcIlxuICogICAgICAgICBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjkwcHhcIiB9fVxuICogICAgICAgPlxuICogICAgICAgICA8ZGl2PlxuICogICAgICAgICAgIDxpbWdcbiAqICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveC1zaGFkb3dcIlxuICogICAgICAgICAgICAgd2lkdGg9XCI1NzJweFwiXG4gKiAgICAgICAgICAgICBzcmM9XCIvaW1nL0pXLTVAMngucG5nXCIgLz5cbiAqICAgICAgICAgPC9kaXY+XG4gKiBcbiAqICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogMCB9fT5cbiAqICAgICAgICAgICA8aDE+VGhlIFByb2R1Y3Q8L2gxPlxuICogICAgICAgICAgIDxwPlxuICogICAgICAgICAgICAgQWZ0ZXIgcmVkZXNpZ25pbmcgdGhlIG1hcmtldGluZyBwYWdlLCB3ZSBhdXRvbWF0ZWQgcGF5cm9sbCBzZXR1cCBhbmQgY3JlYXRlZCBvbmxpbmUgYXBwbGljYXRpb25zIGZvciBoZWFsdGhjYXJlIHF1b3RlcyBhbmQgd29ya2Vyc+KAmSBjb21wLlxuICogICAgICAgICAgIDwvcD5cbiAqIFxuICogICAgICAgICAgIDxoMT5UaGUgT3V0Y29tZTwvaDE+XG4gKiAgICAgICAgICAgPHA+XG4gKiAgICAgICAgICAgV2l0aCB0aGUgbGF1bmNoIG9mIG91ciByZWRlc2lnbmVkIHByaWNpbmcgcGFnZSwgd2UgdHJpcGxlZCB0aGUgbnVtYmVyIG9mIHNpZ251cHMuIFdpdGggb3VyIHN0cmVhbWxpbmVkLCBzZWxmLXNlcnZlIG9uYm9hcmRpbmcgZmxvdywgd2UgaW5jcmVhc2VkIHRoZSBzZXR1cCBjb21wbGV0aW9uIHJhdGUgb2YgbmV3IHVzZXJzIGZyb20gMjMlIHRvIDQ0JS5cbiAqICAgICAgICAgICA8L3A+XG4gKiAgICAgICAgIDwvZGl2PlxuICogICAgICAgPC9kaXY+XG4gKiAgICAgICBcbiAqICAgICAgIDxkaXY+XG4gKiAgICAgICAgIDxpbWdcbiAqICAgICAgICAgICBjbGFzc05hbWU9XCJib3gtc2hhZG93XCJcbiAqICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICogICAgICAgICAgIHNyYz1cIi9pbWcvSlctNkAyeC5wbmdcIiAvPlxuICogICAgICAgPC9kaXY+XG4gKiBcbiAqICAgICAgIDxkaXZcbiAqICAgICAgICAgc3R5bGU9e3tcbiAqICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmMmYyZjJcIixcbiAqICAgICAgICAgICBwYWRkaW5nOiBcIjkwcHhcIixcbiAqICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gKiAgICAgICAgIH19XG4gKiAgICAgICA+XG4gKiAgICAgICAgIDxpbWdcbiAqICAgICAgICAgICBjbGFzc05hbWU9XCJib3gtc2hhZG93XCJcbiAqICAgICAgICAgICB3aWR0aD1cIjExMDBweFwiXG4gKiAgICAgICAgICAgc3JjPVwiL2ltZy9KVy03QDJ4LnBuZ1wiXG4gKiAgICAgICAgIC8+XG4gKiAgICAgICA8L2Rpdj5cbiAqIFxuICogICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LW5leHRcIj5cbiAqICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2xsYWJzXCI+PGE+VmlldyBOZXh0IFByb2plY3Q8L2E+PC9MaW5rPlxuICogICAgICAgPC9kaXY+ICovXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/justworks.js\n");

/***/ })

})