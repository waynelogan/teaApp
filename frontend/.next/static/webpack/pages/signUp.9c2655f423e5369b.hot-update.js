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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/SignUp.module.css */ \"./styles/SignUp.module.css\");\n/* harmony import */ var _styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/logan/development/js/express/tea-app/frontend/pages/signUp.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction SignUp() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      role = _useState4[0],\n      setRole = _useState4[1];\n\n  var baseUrl = 'http://localhost:9090/users/';\n\n  var handleSubmit = function handleSubmit() {\n    axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"\".concat(baseUrl), {\n      name: name,\n      password: password,\n      role: role\n    }, {\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(function (response) {\n      return console.log(response);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n      className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3___default().login),\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setName(e.target.value);\n        },\n        type: \"text\",\n        placeholder: \"username\",\n        value: name,\n        required: \"required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setPassword(e.target.value);\n        },\n        type: \"password\",\n        placeholder: \"password\",\n        value: password\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setRole(e.target.value);\n        },\n        type: \"text\",\n        placeholder: \"role: farmer or buyer\",\n        value: role\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3___default().complete),\n        type: \"submit\",\n        value: \"Submit\",\n        children: \"Log in\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3___default().error),\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 26\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SignUp, \"77xI1bBhhpbyEiY5AcnIecZdDK8=\");\n\n_c = SignUp;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignUp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBQTtFQUFBLFFBREo7QUFpQkg7O0dBekN1Qkw7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ25VcC5qcz8zMmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9TaWduVXAubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwICgpIHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUoKVxuXG4gICAgY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjkwOTAvdXNlcnMvJ1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KFxuICAgICAgICAgICAgYCR7YmFzZVVybH1gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgICAgICB9ICxcbiAgICAgICAgICAgIHtoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgKVxuICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpIClcbiAgICAgICAgLmNhdGNoKCBlcnIgPT4gY29uc29sZS5sb2coZXJyKSApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkdyb3VwfSA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiA+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufSA+U2lnbiBVcDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17IChlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J3VzZXJuYW1lJyB2YWx1ZT17bmFtZX0gcmVxdWlyZWQ9J3JlcXVpcmVkJyAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17IChlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0ncGFzc3dvcmQnIHZhbHVlPXtwYXNzd29yZH0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyAoZSkgPT4gc2V0Um9sZShlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdyb2xlOiBmYXJtZXIgb3IgYnV5ZXInIHZhbHVlPXtyb2xlfSAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBsZXRlfSB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTdWJtaXQnPkxvZyBpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVycm9yICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfSA+e2Vycm9yfTwvcD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2lnblVwIiwibmFtZSIsInNldE5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvbGUiLCJzZXRSb2xlIiwiYmFzZVVybCIsImhhbmRsZVN1Ym1pdCIsInBvc3QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVyciIsImNvbnRhaW5lciIsImJ1dHRvbkdyb3VwIiwibG9naW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb21wbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signUp.js\n"));

/***/ })

});