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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/SignUp.module.css */ \"./styles/SignUp.module.css\");\n/* harmony import */ var _styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/logan/development/js/express/tea-app/frontend/pages/signUp.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction SignUp() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      role = _useState4[0],\n      setRole = _useState4[1];\n\n  var baseUrl = 'http://localhost:9090/users/';\n\n  var handleSubmit = function handleSubmit() {\n    if (role === 'buyer' || role === 'seller') axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"\".concat(baseUrl), {\n      name: name,\n      password: password,\n      role: role\n    }, {\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(function (response) {\n      return console.log(response);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n      className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3___default().login),\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setName(e.target.value);\n        },\n        type: \"text\",\n        placeholder: \"username\",\n        value: name,\n        required: \"required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setPassword(e.target.value);\n        },\n        type: \"password\",\n        placeholder: \"password\",\n        value: password,\n        required: \"required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setRole(e.target.value);\n        },\n        type: \"text\",\n        placeholder: \"role: farmer or buyer\",\n        value: role,\n        required: \"required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3___default().complete),\n        type: \"submit\",\n        value: \"Submit\",\n        children: \"Log in\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_3___default().error),\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 26\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SignUp, \"77xI1bBhhpbyEiY5AcnIecZdDK8=\");\n\n_c = SignUp;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignUp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduVXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNHLE1BQVQsR0FBbUI7RUFBQTs7RUFDOUIsZ0JBQXdCRiwrQ0FBUSxFQUFoQztFQUFBLElBQU9HLElBQVA7RUFBQSxJQUFhQyxPQUFiOztFQUNBLGlCQUFnQ0osK0NBQVEsRUFBeEM7RUFBQSxJQUFPSyxRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUNBLGlCQUEwQk4sK0NBQVEsRUFBbEM7RUFBQSxJQUFPTyxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxpQkFBd0JSLCtDQUFRLEVBQWhDO0VBQUEsSUFBT1MsSUFBUDtFQUFBLElBQWFDLE9BQWI7O0VBRUEsSUFBTUMsT0FBTyxHQUFHLDhCQUFoQjs7RUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0lBQ3ZCLElBQUlILElBQUksS0FBSyxPQUFULElBQW9CQSxJQUFJLEtBQUssUUFBakMsRUFDQVYsaURBQUEsV0FDT1ksT0FEUCxHQUVJO01BQ0lSLElBQUksRUFBRUEsSUFEVjtNQUVJRSxRQUFRLEVBQUVBLFFBRmQ7TUFHSUksSUFBSSxFQUFFQTtJQUhWLENBRkosRUFPSTtNQUFDSyxPQUFPLEVBQUU7UUFDTixnQkFBZ0I7TUFEVjtJQUFWLENBUEosRUFXQ0MsSUFYRCxDQVdPLFVBQUFDLFFBQVE7TUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWixDQUFKO0lBQUEsQ0FYZixXQVlRLFVBQUFHLEdBQUc7TUFBQSxPQUFJRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixDQUFKO0lBQUEsQ0FaWDtFQWFILENBZkQ7O0VBaUJBLG9CQUNJO0lBQUssU0FBUyxFQUFFbEIsNEVBQWhCO0lBQUEsd0JBQ0k7TUFBUyxTQUFTLEVBQUVBLDhFQUFwQjtNQUFBLHdCQUNJO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREosZUFFSTtRQUFRLFNBQVMsRUFBRUEsd0VBQW5CO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRko7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREosZUFLSTtNQUFNLFFBQVEsRUFBRVcsWUFBaEI7TUFBQSx3QkFDSTtRQUFPLFFBQVEsRUFBRyxrQkFBQ1csQ0FBRDtVQUFBLE9BQU9uQixPQUFPLENBQUNtQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO1FBQUEsQ0FBbEI7UUFBa0QsSUFBSSxFQUFDLE1BQXZEO1FBQThELFdBQVcsRUFBQyxVQUExRTtRQUFxRixLQUFLLEVBQUV0QixJQUE1RjtRQUFrRyxRQUFRLEVBQUM7TUFBM0c7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURKLGVBRUk7UUFBTyxRQUFRLEVBQUcsa0JBQUNvQixDQUFEO1VBQUEsT0FBT2pCLFdBQVcsQ0FBQ2lCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWxCO1FBQUEsQ0FBbEI7UUFBc0QsSUFBSSxFQUFDLFVBQTNEO1FBQXNFLFdBQVcsRUFBQyxVQUFsRjtRQUE2RixLQUFLLEVBQUVwQixRQUFwRztRQUE4RyxRQUFRLEVBQUM7TUFBdkg7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZKLGVBR0k7UUFBTyxRQUFRLEVBQUcsa0JBQUNrQixDQUFEO1VBQUEsT0FBT2IsT0FBTyxDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO1FBQUEsQ0FBbEI7UUFBa0QsSUFBSSxFQUFDLE1BQXZEO1FBQThELFdBQVcsRUFBQyx1QkFBMUU7UUFBa0csS0FBSyxFQUFFaEIsSUFBekc7UUFBK0csUUFBUSxFQUFDO01BQXhIO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFISixlQUlJO1FBQVEsU0FBUyxFQUFFUiwyRUFBbkI7UUFBb0MsSUFBSSxFQUFDLFFBQXpDO1FBQWtELEtBQUssRUFBQyxRQUF4RDtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUpKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUxKLEVBWVFNLEtBQUssaUJBQUk7TUFBRyxTQUFTLEVBQUVOLHdFQUFkO01BQUEsVUFBOEJNO0lBQTlCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFaakI7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUFpQkg7O0dBMUN1Qkw7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ25VcC5qcz8zMmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9TaWduVXAubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwICgpIHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUoKVxuXG4gICAgY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjkwOTAvdXNlcnMvJ1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBpZiggcm9sZSA9PT0gJ2J1eWVyJyB8fCByb2xlID09PSAnc2VsbGVyJylcbiAgICAgICAgYXhpb3MucG9zdChcbiAgICAgICAgICAgIGAke2Jhc2VVcmx9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICByb2xlOiByb2xlLFxuICAgICAgICAgICAgfSAsXG4gICAgICAgICAgICB7aGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH19XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oIHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSApXG4gICAgICAgIC5jYXRjaCggZXJyID0+IGNvbnNvbGUubG9nKGVycikgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSA+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Hcm91cH0gPlxuICAgICAgICAgICAgICAgIDxidXR0b24gPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0gPlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9ID5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyAoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSd1c2VybmFtZScgdmFsdWU9e25hbWV9IHJlcXVpcmVkPSdyZXF1aXJlZCcgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyAoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J3Bhc3N3b3JkJyB2YWx1ZT17cGFzc3dvcmR9IHJlcXVpcmVkPSdyZXF1aXJlZCcgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyAoZSkgPT4gc2V0Um9sZShlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdyb2xlOiBmYXJtZXIgb3IgYnV5ZXInIHZhbHVlPXtyb2xlfSByZXF1aXJlZD0ncmVxdWlyZWQnIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wbGV0ZX0gdHlwZT0nc3VibWl0JyB2YWx1ZT0nU3VibWl0Jz5Mb2cgaW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlcnJvciAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0gPntlcnJvcn08L3A+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNpZ25VcCIsIm5hbWUiLCJzZXROYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJyb2xlIiwic2V0Um9sZSIsImJhc2VVcmwiLCJoYW5kbGVTdWJtaXQiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJjb250YWluZXIiLCJidXR0b25Hcm91cCIsImxvZ2luIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29tcGxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signUp.js\n"));

/***/ })

});