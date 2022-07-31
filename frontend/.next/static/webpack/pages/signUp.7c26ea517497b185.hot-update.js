"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signUp",{

/***/ "./pages/signUp.js":
/*!*************************!*\
  !*** ./pages/signUp.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/SignUp.module.css */ \"./styles/SignUp.module.css\");\n/* harmony import */ var _styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/logan/development/js/express/tea-app/frontend/pages/signUp.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SignUp() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      role = _useState4[0],\n      setRole = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      id = _useState5[0],\n      setId = _useState5[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var baseUrl = 'http://localhost:9090/users/';\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n\n    if (role == 'farmer') {\n      router.push('/login');\n    } else if (role == 'buyer') {\n      router.push('/login');\n    } else {\n      setError('role must be farmer or buyer');\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n      className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().login),\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n      onSubmit: function onSubmit() {\n        return handleSubmit(e);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setName(e.target.value);\n        },\n        type: \"text\",\n        placeholder: \"username\",\n        value: name,\n        required: \"required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setPassword(e.target.value);\n        },\n        type: \"password\",\n        placeholder: \"password\",\n        value: password,\n        required: \"required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setRole(e.target.value);\n        },\n        type: \"text\",\n        placeholder: \"role: farmer or buyer\",\n        value: role,\n        required: \"required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().complete),\n        type: \"submit\",\n        value: \"Submit\",\n        children: \"Sign up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 26\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SignUp, \"S7ExxNg3Wy+AHlrcqdSdyCOBr8Q=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = SignUp;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignUp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7UUFBQTtNQUFBLFFBSko7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBTEosRUFZUU0sS0FBSyxpQkFBSTtNQUFHLFNBQVMsRUFBRU4sd0VBQWQ7TUFBQSxVQUE4Qk07SUFBOUI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVpqQjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQWlCSDs7R0F2Q3VCTDtVQU1MSDs7O0tBTktHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ25VcC5qcz8zMmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1NpZ25VcC5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAgKCkge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6OTA5MC91c2Vycy8nXG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKHJvbGUgPT0gJ2Zhcm1lcicpIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICAgICB9IGVsc2UgaWYgKHJvbGUgPT0gJ2J1eWVyJykge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldEVycm9yKCdyb2xlIG11c3QgYmUgZmFybWVyIG9yIGJ1eWVyJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSA+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Hcm91cH0gPlxuICAgICAgICAgICAgICAgIDxidXR0b24gPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0gPlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsgKCkgPT4gaGFuZGxlU3VibWl0KGUpIH0gPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17IChlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J3VzZXJuYW1lJyB2YWx1ZT17bmFtZX0gcmVxdWlyZWQ9J3JlcXVpcmVkJyAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17IChlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0ncGFzc3dvcmQnIHZhbHVlPXtwYXNzd29yZH0gcmVxdWlyZWQ9J3JlcXVpcmVkJyAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17IChlKSA9PiBzZXRSb2xlKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J3JvbGU6IGZhcm1lciBvciBidXllcicgdmFsdWU9e3JvbGV9IHJlcXVpcmVkPSdyZXF1aXJlZCcgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBsZXRlfSB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTdWJtaXQnPlNpZ24gdXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlcnJvciAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0gPntlcnJvcn08L3A+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNpZ25VcCIsIm5hbWUiLCJzZXROYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJyb2xlIiwic2V0Um9sZSIsImlkIiwic2V0SWQiLCJyb3V0ZXIiLCJiYXNlVXJsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImNvbnRhaW5lciIsImJ1dHRvbkdyb3VwIiwibG9naW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbXBsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signUp.js\n"));

/***/ })

});