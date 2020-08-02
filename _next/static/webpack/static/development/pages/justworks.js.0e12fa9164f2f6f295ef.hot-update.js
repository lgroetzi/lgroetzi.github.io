webpackHotUpdate("static/development/pages/justworks.js",{

/***/ "./components/project.js":
/*!*******************************!*\
  !*** ./components/project.js ***!
  \*******************************/
/*! exports provided: GlamourShot, Feat, Details, Chevron, Next */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlamourShot\", function() { return GlamourShot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Feat\", function() { return Feat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Details\", function() { return Details; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Chevron\", function() { return Chevron; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Next\", function() { return Next; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 90px;\\n  background-color: #c0d9dd;\\n\\n  &.mobile {\\n    width: 100%;\\n    padding: 60px;\\n    background-color: #fae8d1;\\n  }\\n\\n  & a {\\n    font-family: Cabin;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 78px;\\n    line-height: 84px;\\n\\n    /* identical to box height, or 108% */\\n    letter-spacing: 1.3px;\\n    color: #08202A;\\n    text-decoration: none;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: inline-block;\\n  margin: 1% 0;\\n  float: right;\\n  border-right: 8px solid #08202a;\\n  border-bottom: 8px solid #08202a;\\n  width: 60px;\\n  height: 60px;\\n  transform: rotate(-45deg);\\n\\n  &.mobile {\\n    width: 30px;\\n    height: 30px;\\n    margin: 6% 0;\\n    border-right: 5px solid #08202a;\\n    border-bottom: 5px solid #08202a;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background: linear-gradient(90deg, #c0d9dd 50%, #f2f2f2 50%);\\n  padding-top: 290px;\\n  padding-bottom: 90px;\\n  width: 100%;\\n\\n  & .container {\\n    display: flex;\\n    flex-direction: row;\\n    width: 1100px;\\n    margin: auto;\\n  }\\n\\n  & .container > div {\\n    width: 550px;\\n    margin: 0 auto;\\n  }\\n  \\n  & .container > div:nth-child(2) {\\n    padding-left: 110px;\\n  }\\n\\n  &.mobile {\\n    display: block;\\n    padding: 60px;\\n    background: #fff;\\n  }\\n\\n  &.mobile img {\\n    width: 100%;\\n  }\\n\\n  &.mobile > div {\\n    width: 100%;\\n    margin: 0;\\n  }\\n\\n  &.no-bg {\\n    background: white;\\n  }\\n\\n  & h1 {\\n    font-family: Cabin;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 35px;\\n    line-height: 40px;\\n    letter-spacing: 0.583333px; /* identical to box height, or 114% */\\n    color: #08202A;\\n    margin-top: 0;\\n  }\\n  \\n  & p {\\n    font-family: Open Sans;\\n    font-size: 20px;\\n    line-height: 36px; /* or 180% */\\n    color: #414141;\\n    padding-bottom: 50px;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background: #fae8d1;\\n  height: 546px;\\n  padding-top: 90px;\\n  width: 100%;\\n  \\n  &.blue {\\n    background: #c0d9dd;\\n  }\\n\\n  &.mobile {\\n    padding: 60px;\\n    height: auto;\\n  }\\n\\n  & img {\\n    display: block;\\n    margin: 0 auto;\\n    width: 1100px;\\n    z-index: 1;\\n    position: relative;\\n  }\\n  \\n  &.mobile img {\\n    width: 100%;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin-top: -105px;\\n  padding: 60px 0 90px 0;\\n  display: flex;\\n  flex-direction: row;\\n  background: linear-gradient(-90deg, #c0d9dd 70%, #f2f2f2 70%);\\n\\n  &.mobile {\\n    background: #fff;\\n    margin-top: 0px;\\n    height: 480px;\\n    display: table-cell;\\n    vertical-align: bottom;\\n  }\\n\\n  & h1 {\\n    font-family: Cabin;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 78px;\\n    line-height: 84px;\\n    width: 400px;\\n    letter-spacing: 1.3px;  /* or 108% */\\n    color: #08202A;\\n    padding: 185px 0 0 90px;\\n    margin-bottom: 20px;\\n  }\\n\\n  &.mobile h1 {\\n    font-size: 78px;\\n    padding: 0 0 0 60px;\\n  }\\n\\n  & div.project-subtitle {\\n    font-family: Cabin;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 20px;\\n    line-height: 20px;\\n    letter-spacing: 0.333333px; /* identical to box height, or 100% */\\n    color: #08202A;\\n    padding-left: 90px;\\n  }\\n\\n  &.mobile div.project-subtitle {\\n    padding-left: 60px;\\n  }\\n\\n  & div.project-subtitle strong {\\n    color: #3270df;\\n  }\\n\\n  & .img {\\n    width: 100%;\\n    text-align: center;\\n  }\\n\\n  & img {\\n    margin-top: 95px;\\n    height: 464px;\\n    max-width: 680px;\\n  }\\n\\n  &.mobile div.close {\\n    width: 100%;\\n    position: absolute;\\n    top: 60px;\\n    right: -60px;\\n    text-align: right;\\n  }\\n  &.mobile div.close a {\\n    font-size: 70px;\\n    font-family: Open Sans ;\\n    font-weight: bold;\\n    font-style: normal;\\n    text-decoration: none;\\n    color: #c0d9dd;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nconst GlamourShotStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = GlamourShotStyled;\nfunction GlamourShot(_ref) {\n  let {\n    title,\n    role,\n    img\n  } = _ref;\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r);\n  return __jsx(GlamourShotStyled, {\n    className: className\n  }, r.isMobile && __jsx(\"div\", {\n    className: \"close\"\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\"\n  }, __jsx(\"a\", null, \"x\"))), __jsx(\"div\", null, __jsx(\"h1\", null, title), __jsx(\"div\", {\n    className: \"project-subtitle\"\n  }, \"My Role: \", __jsx(\"strong\", null, role))), !r.isMobile && __jsx(\"div\", {\n    className: \"img\"\n  }, __jsx(\"img\", {\n    src: img,\n    className: \"box-shadow\"\n  })));\n}\n_c2 = GlamourShot;\nconst FeatStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c3 = FeatStyled;\nfunction Feat(_ref2) {\n  let {\n    img,\n    style,\n    color\n  } = _ref2;\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = \"\".concat(Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r), \" \").concat(color || '');\n  return __jsx(FeatStyled, {\n    className: className,\n    style: style || {}\n  }, __jsx(\"img\", {\n    src: img,\n    className: \"box-shadow\"\n  }));\n}\n_c4 = Feat;\nconst DetailsStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c5 = DetailsStyled;\nfunction Details(props) {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = \"\".concat(Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r), \" \").concat(props.className || '');\n  return __jsx(DetailsStyled, {\n    className: className,\n    style: props.style || {}\n  }, __jsx(\"div\", {\n    className: \"container\"\n  }, props.children));\n}\n_c6 = Details;\nconst Chevron = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n_c7 = Chevron;\nconst NextStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c8 = NextStyled;\nfunction Next(_ref3) {\n  let {\n    link\n  } = _ref3;\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r);\n  return __jsx(NextStyled, {\n    className: className\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: link\n  }, __jsx(\"a\", null, r.isMobile ? \"next\" : \"View Next Project\", __jsx(Chevron, {\n    className: className\n  }))));\n}\n_c9 = Next;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"GlamourShotStyled\");\n$RefreshReg$(_c2, \"GlamourShot\");\n$RefreshReg$(_c3, \"FeatStyled\");\n$RefreshReg$(_c4, \"Feat\");\n$RefreshReg$(_c5, \"DetailsStyled\");\n$RefreshReg$(_c6, \"Details\");\n$RefreshReg$(_c7, \"Chevron\");\n$RefreshReg$(_c8, \"NextStyled\");\n$RefreshReg$(_c9, \"Next\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3QuanM/M2FlZCJdLCJuYW1lcyI6WyJHbGFtb3VyU2hvdFN0eWxlZCIsInN0eWxlZCIsImRpdiIsIkdsYW1vdXJTaG90IiwidGl0bGUiLCJyb2xlIiwiaW1nIiwiciIsImdldFJlc3BvbnNpdmVuZXNzIiwiY2xhc3NOYW1lIiwicmVzcG9uc2l2ZUNsYXNzZXMiLCJpc01vYmlsZSIsIkZlYXRTdHlsZWQiLCJGZWF0Iiwic3R5bGUiLCJjb2xvciIsIkRldGFpbHNTdHlsZWQiLCJEZXRhaWxzIiwicHJvcHMiLCJjaGlsZHJlbiIsIkNoZXZyb24iLCJOZXh0U3R5bGVkIiwiTmV4dCIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUEsaUJBQWlCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQXZCO0tBQU1GLGlCO0FBZ0ZDLFNBQVNHLFdBQVQsT0FBMkM7QUFBQSxNQUF0QjtBQUFFQyxTQUFGO0FBQVNDLFFBQVQ7QUFBZUM7QUFBZixHQUFzQjtBQUNoRCxRQUFNQyxDQUFDLEdBQUdDLDBFQUFpQixFQUEzQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsMEVBQWlCLENBQUNILENBQUQsQ0FBbkM7QUFDQSxTQUNFLE1BQUMsaUJBQUQ7QUFBbUIsYUFBUyxFQUFFRTtBQUE5QixLQUNHRixDQUFDLENBQUNJLFFBQUYsSUFDQTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQWUscUJBQWYsQ0FERixDQUZILEVBTUUsbUJBQ0Usa0JBQUtQLEtBQUwsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ1csc0JBQVNDLElBQVQsQ0FEWCxDQUZGLENBTkYsRUFhRyxDQUFDRSxDQUFDLENBQUNJLFFBQUgsSUFDQTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxPQUFHLEVBQUVMLEdBQVY7QUFBZSxhQUFTLEVBQUM7QUFBekIsSUFERixDQWRILENBREY7QUFvQkQ7TUF2QmVILFc7QUF5QmhCLE1BQU1TLFVBQVUsR0FBR1gseURBQU0sQ0FBQ0MsR0FBVixvQkFBaEI7TUFBTVUsVTtBQTRCQyxTQUFTQyxJQUFULFFBQXFDO0FBQUEsTUFBdkI7QUFBRVAsT0FBRjtBQUFPUSxTQUFQO0FBQWNDO0FBQWQsR0FBdUI7QUFDMUMsUUFBTVIsQ0FBQyxHQUFHQywwRUFBaUIsRUFBM0I7QUFDQSxRQUFNQyxTQUFTLGFBQU1DLDBFQUFpQixDQUFDSCxDQUFELENBQXZCLGNBQThCUSxLQUFLLElBQUksRUFBdkMsQ0FBZjtBQUNBLFNBQ0UsTUFBQyxVQUFEO0FBQVksYUFBUyxFQUFFTixTQUF2QjtBQUFrQyxTQUFLLEVBQUdLLEtBQUssSUFBSTtBQUFuRCxLQUNFO0FBQUssT0FBRyxFQUFFUixHQUFWO0FBQWUsYUFBUyxFQUFDO0FBQXpCLElBREYsQ0FERjtBQUtEO01BUmVPLEk7QUFVaEIsTUFBTUcsYUFBYSxHQUFHZix5REFBTSxDQUFDQyxHQUFWLG9CQUFuQjtNQUFNYyxhO0FBNkRDLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQzdCLFFBQU1YLENBQUMsR0FBR0MsMEVBQWlCLEVBQTNCO0FBQ0EsUUFBTUMsU0FBUyxhQUFNQywwRUFBaUIsQ0FBQ0gsQ0FBRCxDQUF2QixjQUE4QlcsS0FBSyxDQUFDVCxTQUFOLElBQW1CLEVBQWpELENBQWY7QUFDQSxTQUNFLE1BQUMsYUFBRDtBQUFlLGFBQVMsRUFBRUEsU0FBMUI7QUFBcUMsU0FBSyxFQUFHUyxLQUFLLENBQUNKLEtBQU4sSUFBZTtBQUE1RCxLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0ksS0FBSyxDQUFDQyxRQURULENBREYsQ0FERjtBQU9EO01BVmVGLE87QUFZVCxNQUFNRyxPQUFPLEdBQUduQix5REFBTSxDQUFDQyxHQUFWLG9CQUFiO01BQU1rQixPO0FBbUJiLE1BQU1DLFVBQVUsR0FBR3BCLHlEQUFNLENBQUNDLEdBQVYsb0JBQWhCO01BQU1tQixVO0FBd0JDLFNBQVNDLElBQVQsUUFBd0I7QUFBQSxNQUFWO0FBQUVDO0FBQUYsR0FBVTtBQUM3QixRQUFNaEIsQ0FBQyxHQUFHQywwRUFBaUIsRUFBM0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLDBFQUFpQixDQUFDSCxDQUFELENBQW5DO0FBQ0EsU0FDRSxNQUFDLFVBQUQ7QUFBWSxhQUFTLEVBQUVFO0FBQXZCLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRWM7QUFBWixLQUFrQixpQkFDZmhCLENBQUMsQ0FBQ0ksUUFBRixHQUFhLE1BQWIsR0FBc0IsbUJBRFAsRUFFaEIsTUFBQyxPQUFEO0FBQVMsYUFBUyxFQUFFRjtBQUFwQixJQUZnQixDQUFsQixDQURGLENBREY7QUFRRDtNQVhlYSxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9qZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGdldFJlc3BvbnNpdmVuZXNzLCByZXNwb25zaXZlQ2xhc3NlcyB9IGZyb20gJy4uL2xpYi9tZWRpYS1xdWVyeSc7XG5cbmNvbnN0IEdsYW1vdXJTaG90U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogLTEwNXB4O1xuICBwYWRkaW5nOiA2MHB4IDAgOTBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjYzBkOWRkIDcwJSwgI2YyZjJmMiA3MCUpO1xuXG4gICYubW9iaWxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBoZWlnaHQ6IDQ4MHB4O1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgfVxuXG4gICYgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBDYWJpbjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA3OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4NHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS4zcHg7ICAvKiBvciAxMDglICovXG4gICAgY29sb3I6ICMwODIwMkE7XG4gICAgcGFkZGluZzogMTg1cHggMCAwIDkwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gICYubW9iaWxlIGgxIHtcbiAgICBmb250LXNpemU6IDc4cHg7XG4gICAgcGFkZGluZzogMCAwIDAgNjBweDtcbiAgfVxuXG4gICYgZGl2LnByb2plY3Qtc3VidGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBDYWJpbjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjMzMzMzM3B4OyAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTAwJSAqL1xuICAgIGNvbG9yOiAjMDgyMDJBO1xuICAgIHBhZGRpbmctbGVmdDogOTBweDtcbiAgfVxuXG4gICYubW9iaWxlIGRpdi5wcm9qZWN0LXN1YnRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIH1cblxuICAmIGRpdi5wcm9qZWN0LXN1YnRpdGxlIHN0cm9uZyB7XG4gICAgY29sb3I6ICMzMjcwZGY7XG4gIH1cblxuICAmIC5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICYgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiA5NXB4O1xuICAgIGhlaWdodDogNDY0cHg7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgfVxuXG4gICYubW9iaWxlIGRpdi5jbG9zZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjBweDtcbiAgICByaWdodDogLTYwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgJi5tb2JpbGUgZGl2LmNsb3NlIGEge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjYzBkOWRkO1xuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gR2xhbW91clNob3QoeyB0aXRsZSwgcm9sZSwgaW1nIH0pIHtcbiAgY29uc3QgciA9IGdldFJlc3BvbnNpdmVuZXNzKCk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IHJlc3BvbnNpdmVDbGFzc2VzKHIpO1xuICByZXR1cm4gKFxuICAgIDxHbGFtb3VyU2hvdFN0eWxlZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7ci5pc01vYmlsZSAmJlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VcIj5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+eDwvYT48L0xpbms+XG4gICAgICAgPC9kaXY+fVxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1zdWJ0aXRsZVwiPlxuICAgICAgICAgIE15IFJvbGU6IDxzdHJvbmc+e3JvbGV9PC9zdHJvbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHshci5pc01vYmlsZSAmJlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XG4gICAgICAgICA8aW1nIHNyYz17aW1nfSBjbGFzc05hbWU9XCJib3gtc2hhZG93XCIvPlxuICAgICAgIDwvZGl2Pn1cbiAgICA8L0dsYW1vdXJTaG90U3R5bGVkPlxuICApO1xufVxuXG5jb25zdCBGZWF0U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogI2ZhZThkMTtcbiAgaGVpZ2h0OiA1NDZweDtcbiAgcGFkZGluZy10b3A6IDkwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBcbiAgJi5ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiAjYzBkOWRkO1xuICB9XG5cbiAgJi5tb2JpbGUge1xuICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgJiBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMTAwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICYubW9iaWxlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBGZWF0KHsgaW1nLCBzdHlsZSwgY29sb3IgfSkge1xuICBjb25zdCByID0gZ2V0UmVzcG9uc2l2ZW5lc3MoKTtcbiAgY29uc3QgY2xhc3NOYW1lID0gYCR7cmVzcG9uc2l2ZUNsYXNzZXMocil9ICR7Y29sb3IgfHwgJyd9YDtcbiAgcmV0dXJuIChcbiAgICA8RmVhdFN0eWxlZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9eyBzdHlsZSB8fCB7fSB9PlxuICAgICAgPGltZyBzcmM9e2ltZ30gY2xhc3NOYW1lPVwiYm94LXNoYWRvd1wiLz5cbiAgICA8L0ZlYXRTdHlsZWQ+XG4gICk7XG59XG5cbmNvbnN0IERldGFpbHNTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNjMGQ5ZGQgNTAlLCAjZjJmMmYyIDUwJSk7XG4gIHBhZGRpbmctdG9wOiAyOTBweDtcbiAgcGFkZGluZy1ib3R0b206IDkwcHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICYgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgJiAuY29udGFpbmVyID4gZGl2IHtcbiAgICB3aWR0aDogNTUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gICYgLmNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XG4gIH1cblxuICAmLm1vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG5cbiAgJi5tb2JpbGUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICYubW9iaWxlID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAmLm5vLWJnIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gICYgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBDYWJpbjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjU4MzMzM3B4OyAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTE0JSAqL1xuICAgIGNvbG9yOiAjMDgyMDJBO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgXG4gICYgcCB7XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7IC8qIG9yIDE4MCUgKi9cbiAgICBjb2xvcjogIzQxNDE0MTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIERldGFpbHMocHJvcHMpIHtcbiAgY29uc3QgciA9IGdldFJlc3BvbnNpdmVuZXNzKCk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGAke3Jlc3BvbnNpdmVDbGFzc2VzKHIpfSAke3Byb3BzLmNsYXNzTmFtZSB8fCAnJ31gO1xuICByZXR1cm4gKFxuICAgIDxEZXRhaWxzU3R5bGVkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17IHByb3BzLnN0eWxlIHx8IHt9IH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L0RldGFpbHNTdHlsZWQ+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBDaGV2cm9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDElIDA7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgIzA4MjAyYTtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICMwODIwMmE7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG5cbiAgJi5tb2JpbGUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDYlIDA7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzA4MjAyYTtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzA4MjAyYTtcbiAgfVxuYDtcblxuY29uc3QgTmV4dFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDkwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGQ5ZGQ7XG5cbiAgJi5tb2JpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZThkMTtcbiAgfVxuXG4gICYgYSB7XG4gICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDc4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDg0cHg7XG5cbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTA4JSAqL1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjNweDtcbiAgICBjb2xvcjogIzA4MjAyQTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBOZXh0KHsgbGluayB9KSB7XG4gIGNvbnN0IHIgPSBnZXRSZXNwb25zaXZlbmVzcygpO1xuICBjb25zdCBjbGFzc05hbWUgPSByZXNwb25zaXZlQ2xhc3NlcyhyKTtcbiAgcmV0dXJuIChcbiAgICA8TmV4dFN0eWxlZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGluayBocmVmPXtsaW5rfT48YT5cbiAgICAgICAge3IuaXNNb2JpbGUgPyBcIm5leHRcIiA6IFwiVmlldyBOZXh0IFByb2plY3RcIn1cbiAgICAgICAgPENoZXZyb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+XG4gICAgICA8L2E+PC9MaW5rPlxuICAgIDwvTmV4dFN0eWxlZD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/project.js\n");

/***/ })

})