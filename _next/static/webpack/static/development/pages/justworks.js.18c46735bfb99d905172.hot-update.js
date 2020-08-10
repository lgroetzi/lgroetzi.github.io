webpackHotUpdate("static/development/pages/justworks.js",{

/***/ "./components/project.js":
/*!*******************************!*\
  !*** ./components/project.js ***!
  \*******************************/
/*! exports provided: GlamourShot, Feat, Details, Chevron, Next */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlamourShot\", function() { return GlamourShot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Feat\", function() { return Feat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Details\", function() { return Details; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Chevron\", function() { return Chevron; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Next\", function() { return Next; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/media-query */ \"./lib/media-query.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject5() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 90px;\\n  background-color: #c0d9dd;\\n\\n  &.mobile {\\n    width: 100%;\\n    padding: 60px;\\n    background-color: #fae8d1;\\n  }\\n\\n  & a {\\n    font-family: Cabin;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 78px;\\n    line-height: 84px;\\n\\n    /* identical to box height, or 108% */\\n    letter-spacing: 1.3px;\\n    color: #08202A;\\n    text-decoration: none;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: inline-block;\\n  margin: 1% 0;\\n  float: right;\\n  border-right: 8px solid #08202a;\\n  border-bottom: 8px solid #08202a;\\n  width: 60px;\\n  height: 60px;\\n  transform: rotate(-45deg);\\n\\n  &.mobile {\\n    width: 30px;\\n    height: 30px;\\n    margin: 6% 0;\\n    border-right: 5px solid #08202a;\\n    border-bottom: 5px solid #08202a;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background: linear-gradient(90deg, #c0d9dd 50%, #f2f2f2 50%);\\n  padding-top: 290px;\\n  padding-bottom: 90px;\\n  width: 100%;\\n\\n  & .container {\\n    display: flex;\\n    flex-direction: row;\\n    width: 1100px;\\n    margin: auto;\\n  }\\n\\n  & .container > div {\\n    width: 550px;\\n    margin: 0 auto;\\n  }\\n  \\n  & .container > div:nth-child(2) {\\n    padding-left: 110px;\\n  }\\n\\n  &.mobile {\\n    display: block;\\n    padding: 70px 60px;\\n    background: #fff;\\n  }\\n\\n  &.mobile img {\\n    width: 100%;\\n  }\\n\\n  &.mobile > div {\\n    width: 100%;\\n    margin: 0;\\n  }\\n\\n  &.no-bg {\\n    background: white;\\n  }\\n\\n  & h1 {\\n    font-family: Cabin;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 35px;\\n    line-height: 40px;\\n    letter-spacing: 0.583333px; /* identical to box height, or 114% */\\n    color: #08202A;\\n    margin-top: 0;\\n  }\\n  \\n  & p {\\n    font-family: Open Sans;\\n    font-size: 20px;\\n    line-height: 36px; /* or 180% */\\n    color: #414141;\\n    padding-bottom: 50px;\\n  }\\n\\n  &.mobile p {\\n    padding: 0;\\n    margin: 0;\\n  }\\n\\n  &.mobile .bottom-spacing {\\n    margin-bottom: 60px;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background: #fae8d1;\\n  height: 546px;\\n  padding-top: 90px;\\n  width: 100%;\\n  \\n  &.blue {\\n    background: #c0d9dd;\\n  }\\n\\n  &.mobile {\\n    padding: 60px;\\n    height: auto;\\n  }\\n\\n  & img {\\n    display: block;\\n    margin: 0 auto;\\n    width: 1100px;\\n    z-index: 1;\\n    position: relative;\\n  }\\n  \\n  &.mobile img {\\n    width: 100%;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin-top: -105px;\\n  padding: 60px 0 90px 0;\\n  display: flex;\\n  flex-direction: row;\\n  background: linear-gradient(-90deg, #c0d9dd 70%, #f2f2f2 70%);\\n\\n  &.mobile {\\n    background: #fff;\\n    margin-top: 0px;\\n    height: 470px;\\n    display: table-cell;\\n    vertical-align: bottom;\\n  }\\n\\n  & h1 {\\n    font-family: Cabin;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 78px;\\n    line-height: 84px;\\n    width: 400px;\\n    letter-spacing: 1.3px;  /* or 108% */\\n    color: #08202A;\\n    padding: 185px 0 0 90px;\\n    margin-bottom: 20px;\\n  }\\n\\n  &.mobile h1 {\\n    font-size: 78px;\\n    padding: 0 0 0 60px;\\n  }\\n\\n  & div.project-subtitle {\\n    font-family: Cabin;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 20px;\\n    line-height: 20px;\\n    letter-spacing: 0.333333px; /* identical to box height, or 100% */\\n    color: #08202A;\\n    padding-left: 90px;\\n  }\\n\\n  &.mobile div.project-subtitle {\\n    padding-left: 60px;\\n  }\\n\\n  & div.project-subtitle strong {\\n    color: #3270df;\\n  }\\n\\n  & .img {\\n    width: 100%;\\n    text-align: center;\\n  }\\n\\n  & .img img {\\n    margin-top: 95px;\\n    height: 464px;\\n    max-width: 680px;\\n  }\\n\\n  &.mobile div.close {\\n    width: 100%;\\n    position: absolute;\\n    top: 60px;\\n    right: -60px;\\n    text-align: right;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nconst GlamourShotStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = GlamourShotStyled;\nfunction GlamourShot(_ref) {\n  let {\n    title,\n    role,\n    img\n  } = _ref;\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r);\n  return __jsx(GlamourShotStyled, {\n    className: className\n  }, r.isMobile && __jsx(\"div\", {\n    className: \"close\"\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\"\n  }, __jsx(\"a\", null, __jsx(\"img\", {\n    src: \"/img/x.svg\",\n    width: \"32px\",\n    height: \"32px\"\n  })))), __jsx(\"div\", null, __jsx(\"h1\", null, title), __jsx(\"div\", {\n    className: \"project-subtitle\"\n  }, \"My Role: \", __jsx(\"strong\", null, role))), !r.isMobile && __jsx(\"div\", {\n    className: \"img\"\n  }, __jsx(\"img\", {\n    src: img,\n    className: \"box-shadow\"\n  })));\n}\n_c2 = GlamourShot;\nconst FeatStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c3 = FeatStyled;\nfunction Feat(_ref2) {\n  let {\n    img,\n    style,\n    color\n  } = _ref2;\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = \"\".concat(Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r), \" \").concat(color || '');\n  return __jsx(FeatStyled, {\n    className: className,\n    style: style || {}\n  }, __jsx(\"img\", {\n    src: img,\n    className: \"box-shadow\"\n  }));\n}\n_c4 = Feat;\nconst DetailsStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c5 = DetailsStyled;\nfunction Details(props) {\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = \"\".concat(Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r), \" \").concat(props.className || '');\n  return __jsx(DetailsStyled, {\n    className: className,\n    style: props.style || {}\n  }, __jsx(\"div\", {\n    className: \"container\"\n  }, props.children));\n}\n_c6 = Details;\nconst Chevron = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n_c7 = Chevron;\nconst NextStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c8 = NextStyled;\nfunction Next(_ref3) {\n  let {\n    link\n  } = _ref3;\n  const r = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveness\"])();\n  const className = Object(_lib_media_query__WEBPACK_IMPORTED_MODULE_4__[\"responsiveClasses\"])(r);\n  return __jsx(NextStyled, {\n    className: className\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: link\n  }, __jsx(\"a\", null, r.isMobile ? \"next\" : \"View Next Project\", __jsx(Chevron, {\n    className: className\n  }))));\n}\n_c9 = Next;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"GlamourShotStyled\");\n$RefreshReg$(_c2, \"GlamourShot\");\n$RefreshReg$(_c3, \"FeatStyled\");\n$RefreshReg$(_c4, \"Feat\");\n$RefreshReg$(_c5, \"DetailsStyled\");\n$RefreshReg$(_c6, \"Details\");\n$RefreshReg$(_c7, \"Chevron\");\n$RefreshReg$(_c8, \"NextStyled\");\n$RefreshReg$(_c9, \"Next\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3QuanM/M2FlZCJdLCJuYW1lcyI6WyJHbGFtb3VyU2hvdFN0eWxlZCIsInN0eWxlZCIsImRpdiIsIkdsYW1vdXJTaG90IiwidGl0bGUiLCJyb2xlIiwiaW1nIiwiciIsImdldFJlc3BvbnNpdmVuZXNzIiwiY2xhc3NOYW1lIiwicmVzcG9uc2l2ZUNsYXNzZXMiLCJpc01vYmlsZSIsIkZlYXRTdHlsZWQiLCJGZWF0Iiwic3R5bGUiLCJjb2xvciIsIkRldGFpbHNTdHlsZWQiLCJEZXRhaWxzIiwicHJvcHMiLCJjaGlsZHJlbiIsIkNoZXZyb24iLCJOZXh0U3R5bGVkIiwiTmV4dCIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUEsaUJBQWlCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQXZCO0tBQU1GLGlCO0FBd0VDLFNBQVNHLFdBQVQsT0FBMkM7QUFBQSxNQUF0QjtBQUFFQyxTQUFGO0FBQVNDLFFBQVQ7QUFBZUM7QUFBZixHQUFzQjtBQUNoRCxRQUFNQyxDQUFDLEdBQUdDLDBFQUFpQixFQUEzQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsMEVBQWlCLENBQUNILENBQUQsQ0FBbkM7QUFDQSxTQUNFLE1BQUMsaUJBQUQ7QUFBbUIsYUFBUyxFQUFFRTtBQUE5QixLQUNHRixDQUFDLENBQUNJLFFBQUYsSUFDQTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQWUsaUJBQUc7QUFBSyxPQUFHLEVBQUMsWUFBVDtBQUFzQixTQUFLLEVBQUMsTUFBNUI7QUFBbUMsVUFBTSxFQUFDO0FBQTFDLElBQUgsQ0FBZixDQURGLENBRkgsRUFNRSxtQkFDRSxrQkFBS1AsS0FBTCxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDVyxzQkFBU0MsSUFBVCxDQURYLENBRkYsQ0FORixFQWFHLENBQUNFLENBQUMsQ0FBQ0ksUUFBSCxJQUNBO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLE9BQUcsRUFBRUwsR0FBVjtBQUFlLGFBQVMsRUFBQztBQUF6QixJQURGLENBZEgsQ0FERjtBQW9CRDtNQXZCZUgsVztBQXlCaEIsTUFBTVMsVUFBVSxHQUFHWCx5REFBTSxDQUFDQyxHQUFWLG9CQUFoQjtNQUFNVSxVO0FBNEJDLFNBQVNDLElBQVQsUUFBcUM7QUFBQSxNQUF2QjtBQUFFUCxPQUFGO0FBQU9RLFNBQVA7QUFBY0M7QUFBZCxHQUF1QjtBQUMxQyxRQUFNUixDQUFDLEdBQUdDLDBFQUFpQixFQUEzQjtBQUNBLFFBQU1DLFNBQVMsYUFBTUMsMEVBQWlCLENBQUNILENBQUQsQ0FBdkIsY0FBOEJRLEtBQUssSUFBSSxFQUF2QyxDQUFmO0FBQ0EsU0FDRSxNQUFDLFVBQUQ7QUFBWSxhQUFTLEVBQUVOLFNBQXZCO0FBQWtDLFNBQUssRUFBR0ssS0FBSyxJQUFJO0FBQW5ELEtBQ0U7QUFBSyxPQUFHLEVBQUVSLEdBQVY7QUFBZSxhQUFTLEVBQUM7QUFBekIsSUFERixDQURGO0FBS0Q7TUFSZU8sSTtBQVVoQixNQUFNRyxhQUFhLEdBQUdmLHlEQUFNLENBQUNDLEdBQVYsb0JBQW5CO01BQU1jLGE7QUFzRUMsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDN0IsUUFBTVgsQ0FBQyxHQUFHQywwRUFBaUIsRUFBM0I7QUFDQSxRQUFNQyxTQUFTLGFBQU1DLDBFQUFpQixDQUFDSCxDQUFELENBQXZCLGNBQThCVyxLQUFLLENBQUNULFNBQU4sSUFBbUIsRUFBakQsQ0FBZjtBQUNBLFNBQ0UsTUFBQyxhQUFEO0FBQWUsYUFBUyxFQUFFQSxTQUExQjtBQUFxQyxTQUFLLEVBQUdTLEtBQUssQ0FBQ0osS0FBTixJQUFlO0FBQTVELEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHSSxLQUFLLENBQUNDLFFBRFQsQ0FERixDQURGO0FBT0Q7TUFWZUYsTztBQVlULE1BQU1HLE9BQU8sR0FBR25CLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTWtCLE87QUFtQmIsTUFBTUMsVUFBVSxHQUFHcEIseURBQU0sQ0FBQ0MsR0FBVixvQkFBaEI7TUFBTW1CLFU7QUF3QkMsU0FBU0MsSUFBVCxRQUF3QjtBQUFBLE1BQVY7QUFBRUM7QUFBRixHQUFVO0FBQzdCLFFBQU1oQixDQUFDLEdBQUdDLDBFQUFpQixFQUEzQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsMEVBQWlCLENBQUNILENBQUQsQ0FBbkM7QUFDQSxTQUNFLE1BQUMsVUFBRDtBQUFZLGFBQVMsRUFBRUU7QUFBdkIsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFYztBQUFaLEtBQWtCLGlCQUNmaEIsQ0FBQyxDQUFDSSxRQUFGLEdBQWEsTUFBYixHQUFzQixtQkFEUCxFQUVoQixNQUFDLE9BQUQ7QUFBUyxhQUFTLEVBQUVGO0FBQXBCLElBRmdCLENBQWxCLENBREYsQ0FERjtBQVFEO01BWGVhLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgZ2V0UmVzcG9uc2l2ZW5lc3MsIHJlc3BvbnNpdmVDbGFzc2VzIH0gZnJvbSAnLi4vbGliL21lZGlhLXF1ZXJ5JztcblxuY29uc3QgR2xhbW91clNob3RTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAtMTA1cHg7XG4gIHBhZGRpbmc6IDYwcHggMCA5MHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNjMGQ5ZGQgNzAlLCAjZjJmMmYyIDcwJSk7XG5cbiAgJi5tb2JpbGUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGhlaWdodDogNDcwcHg7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICB9XG5cbiAgJiBoMSB7XG4gICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDc4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDg0cHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjNweDsgIC8qIG9yIDEwOCUgKi9cbiAgICBjb2xvcjogIzA4MjAyQTtcbiAgICBwYWRkaW5nOiAxODVweCAwIDAgOTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgJi5tb2JpbGUgaDEge1xuICAgIGZvbnQtc2l6ZTogNzhweDtcbiAgICBwYWRkaW5nOiAwIDAgMCA2MHB4O1xuICB9XG5cbiAgJiBkaXYucHJvamVjdC1zdWJ0aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMzMzMzMzcHg7IC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMDAlICovXG4gICAgY29sb3I6ICMwODIwMkE7XG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICB9XG5cbiAgJi5tb2JpbGUgZGl2LnByb2plY3Qtc3VidGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgfVxuXG4gICYgZGl2LnByb2plY3Qtc3VidGl0bGUgc3Ryb25nIHtcbiAgICBjb2xvcjogIzMyNzBkZjtcbiAgfVxuXG4gICYgLmltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJiAuaW1nIGltZyB7XG4gICAgbWFyZ2luLXRvcDogOTVweDtcbiAgICBoZWlnaHQ6IDQ2NHB4O1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gIH1cblxuICAmLm1vYmlsZSBkaXYuY2xvc2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG4gICAgcmlnaHQ6IC02MHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gR2xhbW91clNob3QoeyB0aXRsZSwgcm9sZSwgaW1nIH0pIHtcbiAgY29uc3QgciA9IGdldFJlc3BvbnNpdmVuZXNzKCk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IHJlc3BvbnNpdmVDbGFzc2VzKHIpO1xuICByZXR1cm4gKFxuICAgIDxHbGFtb3VyU2hvdFN0eWxlZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7ci5pc01vYmlsZSAmJlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VcIj5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+PGltZyBzcmM9XCIvaW1nL3guc3ZnXCIgd2lkdGg9XCIzMnB4XCIgaGVpZ2h0PVwiMzJweFwiIC8+PC9hPjwvTGluaz5cbiAgICAgICA8L2Rpdj59XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXN1YnRpdGxlXCI+XG4gICAgICAgICAgTXkgUm9sZTogPHN0cm9uZz57cm9sZX08L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgeyFyLmlzTW9iaWxlICYmXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cbiAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGNsYXNzTmFtZT1cImJveC1zaGFkb3dcIi8+XG4gICAgICAgPC9kaXY+fVxuICAgIDwvR2xhbW91clNob3RTdHlsZWQ+XG4gICk7XG59XG5cbmNvbnN0IEZlYXRTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjZmFlOGQxO1xuICBoZWlnaHQ6IDU0NnB4O1xuICBwYWRkaW5nLXRvcDogOTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuICAmLmJsdWUge1xuICAgIGJhY2tncm91bmQ6ICNjMGQ5ZGQ7XG4gIH1cblxuICAmLm1vYmlsZSB7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAmIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDExMDBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgJi5tb2JpbGUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIEZlYXQoeyBpbWcsIHN0eWxlLCBjb2xvciB9KSB7XG4gIGNvbnN0IHIgPSBnZXRSZXNwb25zaXZlbmVzcygpO1xuICBjb25zdCBjbGFzc05hbWUgPSBgJHtyZXNwb25zaXZlQ2xhc3NlcyhyKX0gJHtjb2xvciB8fCAnJ31gO1xuICByZXR1cm4gKFxuICAgIDxGZWF0U3R5bGVkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17IHN0eWxlIHx8IHt9IH0+XG4gICAgICA8aW1nIHNyYz17aW1nfSBjbGFzc05hbWU9XCJib3gtc2hhZG93XCIvPlxuICAgIDwvRmVhdFN0eWxlZD5cbiAgKTtcbn1cblxuY29uc3QgRGV0YWlsc1N0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2MwZDlkZCA1MCUsICNmMmYyZjIgNTAlKTtcbiAgcGFkZGluZy10b3A6IDI5MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOTBweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJiAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDExMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAmIC5jb250YWluZXIgPiBkaXYge1xuICAgIHdpZHRoOiA1NTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgJiAuY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMTBweDtcbiAgfVxuXG4gICYubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA3MHB4IDYwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuXG4gICYubW9iaWxlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmLm1vYmlsZSA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgJi5uby1iZyB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cblxuICAmIGgxIHtcbiAgICBmb250LWZhbWlseTogQ2FiaW47XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41ODMzMzNweDsgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDExNCUgKi9cbiAgICBjb2xvcjogIzA4MjAyQTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIFxuICAmIHAge1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4OyAvKiBvciAxODAlICovXG4gICAgY29sb3I6ICM0MTQxNDE7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIH1cblxuICAmLm1vYmlsZSBwIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICYubW9iaWxlIC5ib3R0b20tc3BhY2luZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIERldGFpbHMocHJvcHMpIHtcbiAgY29uc3QgciA9IGdldFJlc3BvbnNpdmVuZXNzKCk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGAke3Jlc3BvbnNpdmVDbGFzc2VzKHIpfSAke3Byb3BzLmNsYXNzTmFtZSB8fCAnJ31gO1xuICByZXR1cm4gKFxuICAgIDxEZXRhaWxzU3R5bGVkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17IHByb3BzLnN0eWxlIHx8IHt9IH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L0RldGFpbHNTdHlsZWQ+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBDaGV2cm9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDElIDA7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgIzA4MjAyYTtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICMwODIwMmE7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG5cbiAgJi5tb2JpbGUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDYlIDA7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzA4MjAyYTtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzA4MjAyYTtcbiAgfVxuYDtcblxuY29uc3QgTmV4dFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDkwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGQ5ZGQ7XG5cbiAgJi5tb2JpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZThkMTtcbiAgfVxuXG4gICYgYSB7XG4gICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDc4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDg0cHg7XG5cbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTA4JSAqL1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjNweDtcbiAgICBjb2xvcjogIzA4MjAyQTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBOZXh0KHsgbGluayB9KSB7XG4gIGNvbnN0IHIgPSBnZXRSZXNwb25zaXZlbmVzcygpO1xuICBjb25zdCBjbGFzc05hbWUgPSByZXNwb25zaXZlQ2xhc3NlcyhyKTtcbiAgcmV0dXJuIChcbiAgICA8TmV4dFN0eWxlZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGluayBocmVmPXtsaW5rfT48YT5cbiAgICAgICAge3IuaXNNb2JpbGUgPyBcIm5leHRcIiA6IFwiVmlldyBOZXh0IFByb2plY3RcIn1cbiAgICAgICAgPENoZXZyb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+XG4gICAgICA8L2E+PC9MaW5rPlxuICAgIDwvTmV4dFN0eWxlZD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/project.js\n");

/***/ })

})