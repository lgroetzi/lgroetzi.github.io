webpackHotUpdate("static/development/pages/justworks.js",{

/***/ "./components/project.js":
/*!*******************************!*\
  !*** ./components/project.js ***!
  \*******************************/
/*! exports provided: GlamourShot, Feat, Details, Chevron, Next */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlamourShot\", function() { return GlamourShot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Feat\", function() { return Feat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Details\", function() { return Details; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Chevron\", function() { return Chevron; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Next\", function() { return Next; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 90px;\\n  background-color: #c0d9dd;\\n  transition: 0.4s;\\n\\n  &:hover, &:active {\\n    background-color: #fae8d1;\\n  }\\n\\n  &.mobile {\\n    width: calc(100% - 120px);\\n    padding: 60px;\\n    background-color: #fae8d1;\\n  }\\n\\n  &.orange {\\n    background-color: #fae8d1;\\n  }\\n\\n  &.orange:hover, &:active {\\n    background-color: #F5DDBD;\\n  }\\n\\n  & a {\\n    font-family: Cabin;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 78px;\\n    line-height: 84px;\\n\\n    /* identical to box height, or 108% */\\n    letter-spacing: 1.3px;\\n    color: #08202A;\\n    text-decoration: none;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: inline-block;\\n  margin: 1% 0;\\n  float: right;\\n  border-right: 8px solid #08202a;\\n  border-bottom: 8px solid #08202a;\\n  width: 60px;\\n  height: 60px;\\n  transform: rotate(-45deg);\\n\\n  &.mobile {\\n    width: 30px;\\n    height: 30px;\\n    margin: 6% 0;\\n    border-right: 8px solid #08202a;\\n    border-bottom: 8px solid #08202a;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background: linear-gradient(90deg, #c0d9dd 50%, #f2f2f2 50%);\\n  padding-top: 290px;\\n  padding-bottom: 90px;\\n  width: 100%;\\n\\n  & .container {\\n    display: flex;\\n    flex-direction: row;\\n    width: 1100px;\\n    margin: auto;\\n  }\\n\\n  & .container > div {\\n    width: 550px;\\n    margin: 0 auto;\\n  }\\n  \\n  & .container > div:nth-child(2) {\\n    padding-left: 110px;\\n  }\\n\\n  &.mobile {\\n    display: block;\\n    padding: 60px;\\n    width: calc(100% - 120px);\\n    background: #fff;\\n  }\\n\\n  &.mobile img {\\n    width: 100%;\\n  }\\n\\n  &.mobile > div {\\n    width: 100%;\\n    margin: 0;\\n  }\\n\\n  &.no-bg {\\n    background: white;\\n  }\\n\\n  & h1 {\\n    font-family: Cabin;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 35px;\\n    line-height: 40px;\\n    letter-spacing: 0.583333px; /* identical to box height, or 114% */\\n    color: #08202A;\\n    margin-top: 0;\\n  }\\n  \\n  & p {\\n    font-family: Open Sans;\\n    font-size: 20px;\\n    line-height: 36px; /* or 180% */\\n    color: #414141;\\n    padding-bottom: 50px;\\n  }\\n\\n  &.mobile p {\\n    padding: 0;\\n    margin: 0;\\n  }\\n\\n  &.mobile .bottom-spacing {\\n    margin-bottom: 60px;\\n  }\\n\\n  &.mobile .special-case-spacing {\\n    margin: -20px 0 40px 0;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background: #fae8d1;\\n  height: 546px;\\n  padding-top: 90px;\\n  width: 100%;\\n  \\n  &.blue {\\n    background: #c0d9dd;\\n  }\\n\\n  &.mobile {\\n    width: calc(100% - 120px);\\n    padding: 60px;\\n    height: auto;\\n  }\\n\\n  & img {\\n    display: block;\\n    margin: 0 auto;\\n    width: 1100px;\\n    z-index: 1;\\n    position: relative;\\n  }\\n  \\n  &.mobile img {\\n    width: 100%;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin-top: -105px;\\n  padding: 60px 0 90px 0;\\n  display: flex;\\n  flex-direction: row;\\n  background: linear-gradient(-90deg, #c0d9dd 70%, #f2f2f2 70%);\\n\\n  &.mobile {\\n    background: #fff;\\n    margin-top: 0px;\\n    height: 470px;\\n    display: table-cell;\\n    vertical-align: bottom;\\n  }\\n\\n  & h1 {\\n    font-family: Cabin;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 78px;\\n    line-height: 84px;\\n    max-width: 400px;\\n    letter-spacing: 1.3px;  /* or 108% */\\n    color: #08202A;\\n    padding: 185px 0 0 90px;\\n    margin-bottom: 20px;\\n  }\\n\\n  &.mobile h1 {\\n    font-size: 78px;\\n    padding: 0 0 0 60px;\\n  }\\n\\n  & div.project-subtitle {\\n    font-family: Cabin;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 20px;\\n    line-height: 20px;\\n    letter-spacing: 0.333333px; /* identical to box height, or 100% */\\n    color: #08202A;\\n    padding-left: 90px;\\n  }\\n\\n  &.mobile div.project-subtitle {\\n    padding-left: 60px;\\n  }\\n\\n  & div.project-subtitle strong {\\n    color: #3270df;\\n  }\\n\\n  & .img {\\n    width: 100%;\\n    text-align: center;\\n  }\\n\\n  & .img img {\\n    margin-top: 95px;\\n    height: 464px;\\n    max-width: 680px;\\n  }\\n\\n  &.mobile div.close {\\n    position: absolute;\\n    top: 60px;\\n    right: 60px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nconst GlamourShotStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = GlamourShotStyled;\nfunction GlamourShot(_ref) {\n  let {\n    title,\n    role,\n    img\n  } = _ref;\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r);\n  return __jsx(GlamourShotStyled, {\n    className: className\n  }, r.isMobile && __jsx(\"div\", {\n    className: \"close\"\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\"\n  }, __jsx(\"a\", null, __jsx(\"img\", {\n    src: \"/img/x.svg\",\n    width: \"32px\",\n    height: \"32px\"\n  })))), __jsx(\"div\", null, __jsx(\"h1\", null, title), __jsx(\"div\", {\n    className: \"project-subtitle\"\n  }, \"My Role: \", __jsx(\"strong\", null, role))), !r.isMobile && __jsx(\"div\", {\n    className: \"img\"\n  }, __jsx(\"img\", {\n    src: img,\n    className: \"box-shadow\"\n  })));\n}\n_c2 = GlamourShot;\nconst FeatStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c3 = FeatStyled;\nfunction Feat(_ref2) {\n  let {\n    img,\n    style,\n    color\n  } = _ref2;\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = \"\".concat(Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r), \" \").concat(color || '');\n  return __jsx(FeatStyled, {\n    className: className,\n    style: style || {}\n  }, __jsx(\"img\", {\n    src: img,\n    className: \"box-shadow\"\n  }));\n}\n_c4 = Feat;\nconst DetailsStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c5 = DetailsStyled;\nfunction Details(props) {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = \"\".concat(Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r), \" \").concat(props.className || '');\n  return __jsx(DetailsStyled, {\n    className: className,\n    style: props.style || {}\n  }, __jsx(\"div\", {\n    className: \"container\"\n  }, props.children));\n}\n_c6 = Details;\nconst Chevron = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n_c7 = Chevron;\nconst NextStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c8 = NextStyled;\nfunction Next(_ref3) {\n  let {\n    link,\n    extraClass\n  } = _ref3;\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = \"\".concat(Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r), \" \").concat(extraClass);\n  return __jsx(NextStyled, {\n    className: className\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: link\n  }, __jsx(\"a\", null, __jsx(\"div\", null, r.isMobile ? \"next\" : \"View Next Project\", __jsx(Chevron, {\n    className: className\n  })))));\n}\n_c9 = Next;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"GlamourShotStyled\");\n$RefreshReg$(_c2, \"GlamourShot\");\n$RefreshReg$(_c3, \"FeatStyled\");\n$RefreshReg$(_c4, \"Feat\");\n$RefreshReg$(_c5, \"DetailsStyled\");\n$RefreshReg$(_c6, \"Details\");\n$RefreshReg$(_c7, \"Chevron\");\n$RefreshReg$(_c8, \"NextStyled\");\n$RefreshReg$(_c9, \"Next\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3QuanM/M2FlZCJdLCJuYW1lcyI6WyJHbGFtb3VyU2hvdFN0eWxlZCIsInN0eWxlZCIsImRpdiIsIkdsYW1vdXJTaG90IiwidGl0bGUiLCJyb2xlIiwiaW1nIiwiciIsImdldFJlc3BvbnNpdmVuZXNzIiwiY2xhc3NOYW1lIiwicmVzcG9uc2l2ZUNsYXNzZXMiLCJpc01vYmlsZSIsIkZlYXRTdHlsZWQiLCJGZWF0Iiwic3R5bGUiLCJjb2xvciIsIkRldGFpbHNTdHlsZWQiLCJEZXRhaWxzIiwicHJvcHMiLCJjaGlsZHJlbiIsIkNoZXZyb24iLCJOZXh0U3R5bGVkIiwiTmV4dCIsImxpbmsiLCJleHRyYUNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLGlCQUFpQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUF2QjtLQUFNRixpQjtBQXNFQyxTQUFTRyxXQUFULE9BQTJDO0FBQUEsTUFBdEI7QUFBRUMsU0FBRjtBQUFTQyxRQUFUO0FBQWVDO0FBQWYsR0FBc0I7QUFDaEQsUUFBTUMsQ0FBQyxHQUFHQywwRUFBaUIsRUFBM0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLDBFQUFpQixDQUFDSCxDQUFELENBQW5DO0FBQ0EsU0FDRSxNQUFDLGlCQUFEO0FBQW1CLGFBQVMsRUFBRUU7QUFBOUIsS0FDR0YsQ0FBQyxDQUFDSSxRQUFGLElBQ0E7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUFlLGlCQUFHO0FBQUssT0FBRyxFQUFDLFlBQVQ7QUFBc0IsU0FBSyxFQUFDLE1BQTVCO0FBQW1DLFVBQU0sRUFBQztBQUExQyxJQUFILENBQWYsQ0FERixDQUZILEVBTUUsbUJBQ0Usa0JBQUtQLEtBQUwsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ1csc0JBQVNDLElBQVQsQ0FEWCxDQUZGLENBTkYsRUFhRyxDQUFDRSxDQUFDLENBQUNJLFFBQUgsSUFDQTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxPQUFHLEVBQUVMLEdBQVY7QUFBZSxhQUFTLEVBQUM7QUFBekIsSUFERixDQWRILENBREY7QUFvQkQ7TUF2QmVILFc7QUF5QmhCLE1BQU1TLFVBQVUsR0FBR1gseURBQU0sQ0FBQ0MsR0FBVixvQkFBaEI7TUFBTVUsVTtBQTZCQyxTQUFTQyxJQUFULFFBQXFDO0FBQUEsTUFBdkI7QUFBRVAsT0FBRjtBQUFPUSxTQUFQO0FBQWNDO0FBQWQsR0FBdUI7QUFDMUMsUUFBTVIsQ0FBQyxHQUFHQywwRUFBaUIsRUFBM0I7QUFDQSxRQUFNQyxTQUFTLGFBQU1DLDBFQUFpQixDQUFDSCxDQUFELENBQXZCLGNBQThCUSxLQUFLLElBQUksRUFBdkMsQ0FBZjtBQUNBLFNBQ0UsTUFBQyxVQUFEO0FBQVksYUFBUyxFQUFFTixTQUF2QjtBQUFrQyxTQUFLLEVBQUdLLEtBQUssSUFBSTtBQUFuRCxLQUNFO0FBQUssT0FBRyxFQUFFUixHQUFWO0FBQWUsYUFBUyxFQUFDO0FBQXpCLElBREYsQ0FERjtBQUtEO01BUmVPLEk7QUFVaEIsTUFBTUcsYUFBYSxHQUFHZix5REFBTSxDQUFDQyxHQUFWLG9CQUFuQjtNQUFNYyxhO0FBMkVDLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQzdCLFFBQU1YLENBQUMsR0FBR0MsMEVBQWlCLEVBQTNCO0FBQ0EsUUFBTUMsU0FBUyxhQUFNQywwRUFBaUIsQ0FBQ0gsQ0FBRCxDQUF2QixjQUE4QlcsS0FBSyxDQUFDVCxTQUFOLElBQW1CLEVBQWpELENBQWY7QUFDQSxTQUNFLE1BQUMsYUFBRDtBQUFlLGFBQVMsRUFBRUEsU0FBMUI7QUFBcUMsU0FBSyxFQUFHUyxLQUFLLENBQUNKLEtBQU4sSUFBZTtBQUE1RCxLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0ksS0FBSyxDQUFDQyxRQURULENBREYsQ0FERjtBQU9EO01BVmVGLE87QUFZVCxNQUFNRyxPQUFPLEdBQUduQix5REFBTSxDQUFDQyxHQUFWLG9CQUFiO01BQU1rQixPO0FBbUJiLE1BQU1DLFVBQVUsR0FBR3BCLHlEQUFNLENBQUNDLEdBQVYsb0JBQWhCO01BQU1tQixVO0FBcUNDLFNBQVNDLElBQVQsUUFBb0M7QUFBQSxNQUF0QjtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsR0FBc0I7QUFDekMsUUFBTWpCLENBQUMsR0FBR0MsMEVBQWlCLEVBQTNCO0FBQ0EsUUFBTUMsU0FBUyxhQUFNQywwRUFBaUIsQ0FBQ0gsQ0FBRCxDQUF2QixjQUE4QmlCLFVBQTlCLENBQWY7QUFDQSxTQUNFLE1BQUMsVUFBRDtBQUFZLGFBQVMsRUFBRWY7QUFBdkIsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFYztBQUFaLEtBQ0UsaUJBQ0UsbUJBQ0doQixDQUFDLENBQUNJLFFBQUYsR0FBYSxNQUFiLEdBQXNCLG1CQUR6QixFQUVFLE1BQUMsT0FBRDtBQUFTLGFBQVMsRUFBRUY7QUFBcEIsSUFGRixDQURGLENBREYsQ0FERixDQURGO0FBWUQ7TUFmZWEsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvamVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBnZXRSZXNwb25zaXZlbmVzcywgcmVzcG9uc2l2ZUNsYXNzZXMgfSBmcm9tICcuLi9saWIvbWVkaWEtcXVlcnknO1xuXG5jb25zdCBHbGFtb3VyU2hvdFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IC0xMDVweDtcbiAgcGFkZGluZzogNjBweCAwIDkwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywgI2MwZDlkZCA3MCUsICNmMmYyZjIgNzAlKTtcblxuICAmLm1vYmlsZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiA0NzBweDtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIH1cblxuICAmIGgxIHtcbiAgICBmb250LWZhbWlseTogQ2FiaW47XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNzhweDtcbiAgICBsaW5lLWhlaWdodDogODRweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjNweDsgIC8qIG9yIDEwOCUgKi9cbiAgICBjb2xvcjogIzA4MjAyQTtcbiAgICBwYWRkaW5nOiAxODVweCAwIDAgOTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgJi5tb2JpbGUgaDEge1xuICAgIGZvbnQtc2l6ZTogNzhweDtcbiAgICBwYWRkaW5nOiAwIDAgMCA2MHB4O1xuICB9XG5cbiAgJiBkaXYucHJvamVjdC1zdWJ0aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMzMzMzMzcHg7IC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMDAlICovXG4gICAgY29sb3I6ICMwODIwMkE7XG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICB9XG5cbiAgJi5tb2JpbGUgZGl2LnByb2plY3Qtc3VidGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgfVxuXG4gICYgZGl2LnByb2plY3Qtc3VidGl0bGUgc3Ryb25nIHtcbiAgICBjb2xvcjogIzMyNzBkZjtcbiAgfVxuXG4gICYgLmltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJiAuaW1nIGltZyB7XG4gICAgbWFyZ2luLXRvcDogOTVweDtcbiAgICBoZWlnaHQ6IDQ2NHB4O1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gIH1cblxuICAmLm1vYmlsZSBkaXYuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG4gICAgcmlnaHQ6IDYwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBHbGFtb3VyU2hvdCh7IHRpdGxlLCByb2xlLCBpbWcgfSkge1xuICBjb25zdCByID0gZ2V0UmVzcG9uc2l2ZW5lc3MoKTtcbiAgY29uc3QgY2xhc3NOYW1lID0gcmVzcG9uc2l2ZUNsYXNzZXMocik7XG4gIHJldHVybiAoXG4gICAgPEdsYW1vdXJTaG90U3R5bGVkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtyLmlzTW9iaWxlICYmXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZVwiPlxuICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT48aW1nIHNyYz1cIi9pbWcveC5zdmdcIiB3aWR0aD1cIjMycHhcIiBoZWlnaHQ9XCIzMnB4XCIgLz48L2E+PC9MaW5rPlxuICAgICAgIDwvZGl2Pn1cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Qtc3VidGl0bGVcIj5cbiAgICAgICAgICBNeSBSb2xlOiA8c3Ryb25nPntyb2xlfTwvc3Ryb25nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7IXIuaXNNb2JpbGUgJiZcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxuICAgICAgICAgPGltZyBzcmM9e2ltZ30gY2xhc3NOYW1lPVwiYm94LXNoYWRvd1wiLz5cbiAgICAgICA8L2Rpdj59XG4gICAgPC9HbGFtb3VyU2hvdFN0eWxlZD5cbiAgKTtcbn1cblxuY29uc3QgRmVhdFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmYWU4ZDE7XG4gIGhlaWdodDogNTQ2cHg7XG4gIHBhZGRpbmctdG9wOiA5MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgXG4gICYuYmx1ZSB7XG4gICAgYmFja2dyb3VuZDogI2MwZDlkZDtcbiAgfVxuXG4gICYubW9iaWxlIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgJiBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMTAwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICYubW9iaWxlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBGZWF0KHsgaW1nLCBzdHlsZSwgY29sb3IgfSkge1xuICBjb25zdCByID0gZ2V0UmVzcG9uc2l2ZW5lc3MoKTtcbiAgY29uc3QgY2xhc3NOYW1lID0gYCR7cmVzcG9uc2l2ZUNsYXNzZXMocil9ICR7Y29sb3IgfHwgJyd9YDtcbiAgcmV0dXJuIChcbiAgICA8RmVhdFN0eWxlZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9eyBzdHlsZSB8fCB7fSB9PlxuICAgICAgPGltZyBzcmM9e2ltZ30gY2xhc3NOYW1lPVwiYm94LXNoYWRvd1wiLz5cbiAgICA8L0ZlYXRTdHlsZWQ+XG4gICk7XG59XG5cbmNvbnN0IERldGFpbHNTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNjMGQ5ZGQgNTAlLCAjZjJmMmYyIDUwJSk7XG4gIHBhZGRpbmctdG9wOiAyOTBweDtcbiAgcGFkZGluZy1ib3R0b206IDkwcHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICYgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgJiAuY29udGFpbmVyID4gZGl2IHtcbiAgICB3aWR0aDogNTUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gICYgLmNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XG4gIH1cblxuICAmLm1vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cblxuICAmLm1vYmlsZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJi5tb2JpbGUgPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICYubm8tYmcge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG5cbiAgJiBoMSB7XG4gICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNTgzMzMzcHg7IC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMTQlICovXG4gICAgY29sb3I6ICMwODIwMkE7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBcbiAgJiBwIHtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDsgLyogb3IgMTgwJSAqL1xuICAgIGNvbG9yOiAjNDE0MTQxO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgJi5tb2JpbGUgcCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAmLm1vYmlsZSAuYm90dG9tLXNwYWNpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIH1cblxuICAmLm1vYmlsZSAuc3BlY2lhbC1jYXNlLXNwYWNpbmcge1xuICAgIG1hcmdpbjogLTIwcHggMCA0MHB4IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBEZXRhaWxzKHByb3BzKSB7XG4gIGNvbnN0IHIgPSBnZXRSZXNwb25zaXZlbmVzcygpO1xuICBjb25zdCBjbGFzc05hbWUgPSBgJHtyZXNwb25zaXZlQ2xhc3NlcyhyKX0gJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YDtcbiAgcmV0dXJuIChcbiAgICA8RGV0YWlsc1N0eWxlZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9eyBwcm9wcy5zdHlsZSB8fCB7fSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9EZXRhaWxzU3R5bGVkPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgQ2hldnJvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxJSAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICMwODIwMmE7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjMDgyMDJhO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXG4gICYubW9iaWxlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiA2JSAwO1xuICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICMwODIwMmE7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICMwODIwMmE7XG4gIH1cbmA7XG5cbmNvbnN0IE5leHRTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBkOWRkO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuXG4gICY6aG92ZXIsICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlOGQxO1xuICB9XG5cbiAgJi5tb2JpbGUge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlOGQxO1xuICB9XG5cbiAgJi5vcmFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWU4ZDE7XG4gIH1cblxuICAmLm9yYW5nZTpob3ZlciwgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUREQkQ7XG4gIH1cblxuICAmIGEge1xuICAgIGZvbnQtZmFtaWx5OiBDYWJpbjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA3OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4NHB4O1xuXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDEwOCUgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMS4zcHg7XG4gICAgY29sb3I6ICMwODIwMkE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gTmV4dCh7IGxpbmssIGV4dHJhQ2xhc3MgfSkge1xuICBjb25zdCByID0gZ2V0UmVzcG9uc2l2ZW5lc3MoKTtcbiAgY29uc3QgY2xhc3NOYW1lID0gYCR7cmVzcG9uc2l2ZUNsYXNzZXMocil9ICR7ZXh0cmFDbGFzc31gO1xuICByZXR1cm4gKFxuICAgIDxOZXh0U3R5bGVkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxuICAgICAgICA8YT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3IuaXNNb2JpbGUgPyBcIm5leHRcIiA6IFwiVmlldyBOZXh0IFByb2plY3RcIn1cbiAgICAgICAgICAgIDxDaGV2cm9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9OZXh0U3R5bGVkPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/project.js\n");

/***/ })

})