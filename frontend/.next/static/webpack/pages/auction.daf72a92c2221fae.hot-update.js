"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auction",{

/***/ "./pages/auction.js":
/*!**************************!*\
  !*** ./pages/auction.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Auction; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Auction_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Auction.module.css */ \"./styles/Auction.module.css\");\n/* harmony import */ var _styles_Auction_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Auction_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/logan/development/js/express/tea-app/frontend/pages/auction.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Auction() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      teas = _useState[0],\n      setTeas = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      userId = _useState2[0],\n      setUserId = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      userName = _useState3[0],\n      setUserName = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      error = _useState4[0],\n      setError = _useState4[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (!teas) {\n      axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:9090/teas/').then(function (_ref) {\n        var data = _ref.data;\n        return setTeas(data);\n      })[\"catch\"](function (err) {\n        return console.log(err.message);\n      });\n    }\n\n    if (!userId) {\n      setUserId(router.query.userId);\n    }\n  });\n\n  var buyTea = function buyTea(id) {\n    // axios.patch(\n    //     `http:localhost:9090/teas/${id}`,\n    //     {\n    //         buyer: userId\n    //     },\n    //     { headers: { 'Content-Type': 'application/json' }}\n    // )\n    var username;\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://localhost/users/\".concat(userId)).then(function (response) {\n      console.log(response.data);\n\n      if (!userName) {\n        setUserName(response.data['name']);\n      }\n    })[\"catch\"](function (err) {\n      console.log(err);\n      setError(err.message + 'slow network.');\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: \"Tea Auction\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: teas && teas.map(function (tea) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: (_styles_Auction_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Quantity: \", tea['quantity'], \" Kgs\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Report : \", tea['report'] ? tea['report'] : 'Pending', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Harvest Details : \", tea['harvestDetails'] ? tea['harvestDetails'] : 'Pending', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Type: \", tea['type'] ? tea['type'] : 'Not set']\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Buyer : \", tea['buyer'] ? userName : 'Not bought yet', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Price : \", tea['price'] ? tea['price'] : 'Not set', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 29\n          }, _this), tea['price'] && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n            className: (_styles_Auction_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n            onClick: function onClick(tea) {\n              return buyTea(tea['_id']);\n            },\n            children: \"Buy\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 33\n          }, _this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            className: (_styles_Auction_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n            children: error\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 42\n          }, _this)]\n        }, tea['_id'], true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Auction, \"F4Tj8/LA0STQISVrqXI1vbYR0po=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = Auction;\n\nvar _c;\n\n$RefreshReg$(_c, \"Auction\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU00sT0FBVCxHQUFvQjtFQUFBOztFQUFBOztFQUMvQixnQkFBd0JGLCtDQUFRLEVBQWhDO0VBQUEsSUFBT0csSUFBUDtFQUFBLElBQWFDLE9BQWI7O0VBQ0EsaUJBQTRCSiwrQ0FBUSxFQUFwQztFQUFBLElBQU9LLE1BQVA7RUFBQSxJQUFlQyxTQUFmOztFQUNBLGlCQUFnQ04sK0NBQVEsRUFBeEM7RUFBQSxJQUFPTyxRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUNBLGlCQUEwQlIsK0NBQVEsRUFBbEM7RUFBQSxJQUFPUyxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxJQUFNQyxNQUFNLEdBQUdiLHNEQUFTLEVBQXhCO0VBRUFDLGdEQUFTLENBQUUsWUFBTTtJQUNiLElBQUcsQ0FBQ0ksSUFBSixFQUFVO01BQ05QLGdEQUFBLENBQVUsNkJBQVYsRUFDQ2lCLElBREQsQ0FDTztRQUFBLElBQUVDLElBQUYsUUFBRUEsSUFBRjtRQUFBLE9BQVlWLE9BQU8sQ0FBQ1UsSUFBRCxDQUFuQjtNQUFBLENBRFAsV0FFUSxVQUFBQyxHQUFHO1FBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csT0FBaEIsQ0FBSjtNQUFBLENBRlg7SUFHSDs7SUFDRCxJQUFJLENBQUNiLE1BQUwsRUFBYTtNQUNUQyxTQUFTLENBQUNLLE1BQU0sQ0FBQ1EsS0FBUCxDQUFhZCxNQUFkLENBQVQ7SUFDSDtFQUNKLENBVFEsQ0FBVDs7RUFXQSxJQUFNZSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxFQUFELEVBQVE7SUFDbkI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJQyxRQUFKO0lBQ0ExQixnREFBQSxrQ0FDOEJTLE1BRDlCLEdBR0NRLElBSEQsQ0FHTyxVQUFBVSxRQUFRLEVBQUk7TUFDZlAsT0FBTyxDQUFDQyxHQUFSLENBQVlNLFFBQVEsQ0FBQ1QsSUFBckI7O01BQ0EsSUFBSSxDQUFDUCxRQUFMLEVBQWU7UUFBRUMsV0FBVyxDQUFDZSxRQUFRLENBQUNULElBQVQsQ0FBYyxNQUFkLENBQUQsQ0FBWDtNQUFvQztJQUN4RCxDQU5ELFdBT1EsVUFBQUMsR0FBRyxFQUFJO01BQ1hDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO01BQ0FMLFFBQVEsQ0FBQ0ssR0FBRyxDQUFDRyxPQUFKLEdBQWMsZUFBZixDQUFSO0lBQ0gsQ0FWRDtFQVdILENBcEJEOztFQXNCQSxvQkFDSTtJQUFBLHdCQUNJO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREosZUFFSTtNQUFBLFVBRVFmLElBQUksSUFDSkEsSUFBSSxDQUFDcUIsR0FBTCxDQUFVLFVBQUFDLEdBQUcsRUFBSTtRQUNiLG9CQUNBO1VBQXNCLFNBQVMsRUFBRXhCLHdFQUFqQztVQUFBLHdCQUNJO1lBQUEseUJBQWV3QixHQUFHLENBQUMsVUFBRCxDQUFsQjtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FESixlQUVJO1lBQUEsd0JBQWNBLEdBQUcsQ0FBQyxRQUFELENBQUgsR0FBZ0JBLEdBQUcsQ0FBQyxRQUFELENBQW5CLEdBQWdDLFNBQTlDO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQUZKLGVBR0k7WUFBQSxpQ0FBdUJBLEdBQUcsQ0FBQyxnQkFBRCxDQUFILEdBQXdCQSxHQUFHLENBQUMsZ0JBQUQsQ0FBM0IsR0FBZ0QsU0FBdkU7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBSEosZUFJSTtZQUFBLHFCQUFXQSxHQUFHLENBQUMsTUFBRCxDQUFILEdBQWNBLEdBQUcsQ0FBQyxNQUFELENBQWpCLEdBQTRCLFNBQXZDO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQUpKLGVBS0k7WUFBQSx1QkFBYUEsR0FBRyxDQUFDLE9BQUQsQ0FBSCxHQUFlbEIsUUFBZixHQUEwQixnQkFBdkM7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBTEosZUFNSTtZQUFBLHVCQUFha0IsR0FBRyxDQUFDLE9BQUQsQ0FBSCxHQUFlQSxHQUFHLENBQUMsT0FBRCxDQUFsQixHQUE4QixTQUEzQztVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FOSixFQVFRQSxHQUFHLENBQUMsT0FBRCxDQUFILGlCQUNBO1lBQVEsU0FBUyxFQUFFeEIsMEVBQW5CO1lBQWtDLE9BQU8sRUFBRyxpQkFBQ3dCLEdBQUQ7Y0FBQSxPQUFTTCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxLQUFELENBQUosQ0FBZjtZQUFBLENBQTVDO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBVFIsRUFZUWhCLEtBQUssaUJBQUk7WUFBRyxTQUFTLEVBQUVSLHlFQUFkO1lBQUEsVUFBOEJRO1VBQTlCO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FaakI7UUFBQSxHQUFVZ0IsR0FBRyxDQUFDLEtBQUQsQ0FBYjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREE7TUFpQkgsQ0FsQkQ7SUFIUjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRko7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUE2Qkg7O0dBckV1QnZCO1VBS0xKOzs7S0FMS0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXVjdGlvbi5qcz83NTg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BdWN0aW9uLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1Y3Rpb24gKCkge1xuICAgIGNvbnN0IFt0ZWFzLCBzZXRUZWFzXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgaWYoIXRlYXMpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo5MDkwL3RlYXMvJylcbiAgICAgICAgICAgIC50aGVuKCAoe2RhdGF9KSA9PiBzZXRUZWFzKGRhdGEpIClcbiAgICAgICAgICAgIC5jYXRjaCggZXJyID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHNldFVzZXJJZChyb3V0ZXIucXVlcnkudXNlcklkKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGJ1eVRlYSA9IChpZCkgPT4ge1xuICAgICAgICAvLyBheGlvcy5wYXRjaChcbiAgICAgICAgLy8gICAgIGBodHRwOmxvY2FsaG9zdDo5MDkwL3RlYXMvJHtpZH1gLFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGJ1eWVyOiB1c2VySWRcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICB7IGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9fVxuICAgICAgICAvLyApXG4gICAgICAgIGxldCB1c2VybmFtZVxuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdC91c2Vycy8ke3VzZXJJZH1gXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICBpZiAoIXVzZXJOYW1lKSB7IHNldFVzZXJOYW1lKHJlc3BvbnNlLmRhdGFbJ25hbWUnXSkgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goIGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSArICdzbG93IG5ldHdvcmsuJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoMT5UZWEgQXVjdGlvbjwvaDE+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGVhcyAmJlxuICAgICAgICAgICAgICAgICAgICB0ZWFzLm1hcCggdGVhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dGVhWydfaWQnXX0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlF1YW50aXR5OiB7IHRlYVsncXVhbnRpdHknXSB9IEtnczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SZXBvcnQgOiB7IHRlYVsncmVwb3J0J10gPyB0ZWFbJ3JlcG9ydCddIDogJ1BlbmRpbmcnIH0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhhcnZlc3QgRGV0YWlscyA6IHsgdGVhWydoYXJ2ZXN0RGV0YWlscyddID8gdGVhWydoYXJ2ZXN0RGV0YWlscyddIDogJ1BlbmRpbmcnIH0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlR5cGU6IHsgdGVhWyd0eXBlJ10gPyB0ZWFbJ3R5cGUnXSA6ICdOb3Qgc2V0JyB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJ1eWVyIDogeyB0ZWFbJ2J1eWVyJ10gPyB1c2VyTmFtZSA6ICdOb3QgYm91Z2h0IHlldCcgfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpY2UgOiB7IHRlYVsncHJpY2UnXSA/IHRlYVsncHJpY2UnXSA6ICdOb3Qgc2V0JyB9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYVsncHJpY2UnXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17ICh0ZWEpID0+IGJ1eVRlYSh0ZWFbJ19pZCddKSB9ID5CdXk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0gPntlcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJBdWN0aW9uIiwidGVhcyIsInNldFRlYXMiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsImdldCIsInRoZW4iLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJxdWVyeSIsImJ1eVRlYSIsImlkIiwidXNlcm5hbWUiLCJyZXNwb25zZSIsIm1hcCIsInRlYSIsImNhcmQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auction.js\n"));

/***/ })

});