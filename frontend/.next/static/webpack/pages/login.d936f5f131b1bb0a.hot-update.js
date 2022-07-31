"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var _home_logan_development_js_express_tea_app_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_logan_development_js_express_tea_app_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_logan_development_js_express_tea_app_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_logan_development_js_express_tea_app_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Login.module.css */ \"./styles/Login.module.css\");\n/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/logan/development/js/express/tea-app/frontend/pages/login.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Login() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = (0,_home_logan_development_js_express_tea_app_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_home_logan_development_js_express_tea_app_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      var handleClick;\n      return _home_logan_development_js_express_tea_app_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              setError('');\n              axios__WEBPACK_IMPORTED_MODULE_4___default().get('http://localhost:9090/users/').then(function (_ref2) {\n                var data = _ref2.data;\n                console.log(data);\n                data.forEach(function (item) {\n                  if (item['name'] === name) {\n                    if (item['password'] === password) {\n                      setError('');\n\n                      if (item['role'] == 'farmer') {\n                        router.push({\n                          pathname: '/',\n                          query: {\n                            userId: item['_id']\n                          }\n                        });\n                      } else if (item['role'] == 'admin') {\n                        router.push({\n                          pathname: '/admin',\n                          query: {\n                            userId: item['_id']\n                          }\n                        });\n                      } else if (item['role'] == 'buyer') {\n                        router.push({\n                          pathname: '/auction',\n                          query: {\n                            userId: item['_id']\n                          }\n                        });\n                      }\n                    } else {\n                      setError('wrong password');\n                    }\n                  } else {\n                    setError('username not found');\n                  }\n                });\n              });\n\n              handleClick = function handleClick() {\n                console.log('clicked');\n              }; // axios.get('http://localhost:9090/users')\n              // .then( response => {\n              //     let found = false\n              //     response.data.forEach( item => {\n              //         if (item.name === name) {\n              //             if (item.password === password) {\n              //                 router.push({\n              //                     pathname: '/',\n              //                     query: {userId: item['_id']}\n              //                 })\n              //             } else {\n              //                 setError('wrong password')\n              //             }\n              //         }\n              //     })\n              // })\n              // .catch( err => console.log(err.message) )\n\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n      className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttonGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().login),\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        onClick: handleClick,\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setName(e.target.value);\n        },\n        type: \"text\",\n        placeholder: \"username\",\n        value: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setPassword(e.target.value);\n        },\n        type: \"password\",\n        placeholder: \"password\",\n        value: password\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().complete),\n        type: \"submit\",\n        value: \"Submit\",\n        children: \"Log in\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n      className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().error),\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 26\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Login, \"DgtxddAXc/EOMQZqFifj/XS7GII=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQUEsUUFESixlQUVJO1FBQVEsT0FBTyxFQUFFd0IsV0FBakI7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGSjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFESixlQUtJO01BQU0sUUFBUSxFQUFFZCxZQUFoQjtNQUFBLHdCQUNJO1FBQU8sUUFBUSxFQUFHLGtCQUFDQyxDQUFEO1VBQUEsT0FBT04sT0FBTyxDQUFDTSxDQUFDLENBQUNpQixNQUFGLENBQVNDLEtBQVYsQ0FBZDtRQUFBLENBQWxCO1FBQWtELElBQUksRUFBQyxNQUF2RDtRQUE4RCxXQUFXLEVBQUMsVUFBMUU7UUFBcUYsS0FBSyxFQUFFekI7TUFBNUY7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURKLGVBRUk7UUFBTyxRQUFRLEVBQUcsa0JBQUNPLENBQUQ7VUFBQSxPQUFPSixXQUFXLENBQUNJLENBQUMsQ0FBQ2lCLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtRQUFBLENBQWxCO1FBQXNELElBQUksRUFBQyxVQUEzRDtRQUFzRSxXQUFXLEVBQUMsVUFBbEY7UUFBNkYsS0FBSyxFQUFFdkI7TUFBcEc7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZKLGVBR0k7UUFBUSxTQUFTLEVBQUVOLDBFQUFuQjtRQUFvQyxJQUFJLEVBQUMsUUFBekM7UUFBa0QsS0FBSyxFQUFDLFFBQXhEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSEo7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBTEosRUFXUVEsS0FBSyxpQkFBSTtNQUFHLFNBQVMsRUFBRVIsdUVBQWQ7TUFBQSxVQUE4QlE7SUFBOUI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVhqQjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQWdCSDs7R0FsRnVCTjtVQUNMSDs7O0tBREtHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTG9naW4ubW9kdWxlLmNzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4gKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKClcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRFcnJvcignJylcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjkwOTAvdXNlcnMvJylcbiAgICAgICAgLnRoZW4oICh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1bJ25hbWUnXSA9PT0gbmFtZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtWydwYXNzd29yZCddID09PSBwYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoJycpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVsncm9sZSddID09ICdmYXJtZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyB1c2VySWQ6IGl0ZW1bJ19pZCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaXRlbVsncm9sZSddID09ICdhZG1pbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2FkbWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgdXNlcklkOiBpdGVtWydfaWQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGl0ZW1bJ3JvbGUnXSA9PSAnYnV5ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9hdWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgdXNlcklkOiBpdGVtWydfaWQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoJ3dyb25nIHBhc3N3b3JkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCd1c2VybmFtZSBub3QgZm91bmQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgLy8gYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjkwOTAvdXNlcnMnKVxuICAgICAgICAvLyAudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICAgICAgLy8gICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoaXRlbS5wYXNzd29yZCA9PT0gcGFzc3dvcmQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy8nLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7dXNlcklkOiBpdGVtWydfaWQnXX1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzZXRFcnJvcignd3JvbmcgcGFzc3dvcmQnKVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gLmNhdGNoKCBlcnIgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpIClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkdyb3VwfSA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0gPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+U2lnbiBVcDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17IChlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J3VzZXJuYW1lJyB2YWx1ZT17bmFtZX0vPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17IChlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0ncGFzc3dvcmQnIHZhbHVlPXtwYXNzd29yZH0gLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBsZXRlfSB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTdWJtaXQnPkxvZyBpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVycm9yICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfSA+e2Vycm9yfTwvcD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInN0eWxlcyIsImF4aW9zIiwiTG9naW4iLCJyb3V0ZXIiLCJuYW1lIiwic2V0TmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInVzZXJJZCIsImhhbmRsZUNsaWNrIiwiY29udGFpbmVyIiwiYnV0dG9uR3JvdXAiLCJsb2dpbiIsInRhcmdldCIsInZhbHVlIiwiY29tcGxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});