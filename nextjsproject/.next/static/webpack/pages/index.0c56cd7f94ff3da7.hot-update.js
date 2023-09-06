"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/events/event-item.js":
/*!*****************************************!*\
  !*** ./components/events/event-item.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-item.module.css */ \"./components/events/event-item.module.css\");\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_event_item_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n\n\n\n\nfunction EventItem(props) {\n    const { title, image, date, location, id } = props;\n    const humanReadableDate = new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"numeric\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n    const formatAddress = location.replace(\",\", \"\\n\");\n    const exploreLink = \"/events/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/\" + image,\n                alt: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\components\\\\events\\\\event-item.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_3___default().summaru),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\components\\\\events\\\\event-item.js\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_3___default().date),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_date_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\components\\\\events\\\\event-item.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                        children: \"humanReadableDate\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\components\\\\events\\\\event-item.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\components\\\\events\\\\event-item.js\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_3___default().address),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                                    children: formatAddress\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\components\\\\events\\\\event-item.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\components\\\\events\\\\event-item.js\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\components\\\\events\\\\event-item.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            link: exploreLink,\n                            children: \"Explore Event\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\components\\\\events\\\\event-item.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\components\\\\events\\\\event-item.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\components\\\\events\\\\event-item.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\components\\\\events\\\\event-item.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_c = EventItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);\nvar _c;\n$RefreshReg$(_c, \"EventItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ1g7QUFDUTtBQUUxQyxTQUFTRyxVQUFVQyxLQUFLO0lBQ3BCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxFQUFFLEVBQUUsR0FBR0w7SUFDN0MsTUFBTU0sb0JBQW9CLElBQUlDLEtBQUtKLE1BQU1LLGtCQUFrQixDQUFDLFNBQVM7UUFDakVDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxNQUFNO0lBQ1Y7SUFFQSxNQUFNQyxnQkFBZ0JSLFNBQVNTLE9BQU8sQ0FBQyxLQUFLO0lBQzVDLE1BQU1DLGNBQWMsV0FBYyxPQUFIVDtJQUUvQixxQkFDSSw4REFBQ1U7UUFBR0MsV0FBV3BCLG9FQUFZOzswQkFDdkIsOERBQUNzQjtnQkFBSUMsS0FBSyxNQUFNakI7Z0JBQU9rQixLQUFLbkI7Ozs7OzswQkFDNUIsOERBQUNvQjtnQkFBSUwsV0FBV3BCLHVFQUFlOztrQ0FDM0IsOERBQUN5Qjt3QkFBSUwsV0FBV3BCLHVFQUFlOzswQ0FFM0IsOERBQUM0QjswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDSDtnQ0FBSUwsV0FBV3BCLG9FQUFZOztrREFDeEIsOERBQUNFLHdEQUFRQTs7Ozs7a0RBQ1QsOERBQUMyQjtrREFBSzs7Ozs7Ozs7Ozs7OzBDQUVWLDhEQUFDSjtnQ0FBSUwsV0FBV3BCLHVFQUFlOzBDQUUzQiw0RUFBQzhCOzhDQUFTZDs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2xCLDhEQUFDUzt3QkFBSUwsV0FBV3BCLHVFQUFlO2tDQUMzQiw0RUFBQ0Msa0RBQU1BOzRCQUFDK0IsTUFBTWQ7c0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9DO0tBakNTZjtBQW1DVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtLmpzPzZmZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ldmVudC1pdGVtLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgRGF0ZUljb24gZnJvbSBcIi4uL2ljb25zL2RhdGUtaWNvblwiO1xyXG5cclxuZnVuY3Rpb24gRXZlbnRJdGVtKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBpbWFnZSwgZGF0ZSwgbG9jYXRpb24sIGlkIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGh1bWFuUmVhZGFibGVEYXRlID0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcclxuICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZm9ybWF0QWRkcmVzcyA9IGxvY2F0aW9uLnJlcGxhY2UoJywnLCAnXFxuJylcclxuICAgIGNvbnN0IGV4cGxvcmVMaW5rID0gYC9ldmVudHMvJHtpZH1gXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Jy8nICsgaW1hZ2V9IGFsdD17dGl0bGV9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3VtbWFydVxyXG4gICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+VGl0bGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWU+aHVtYW5SZWFkYWJsZURhdGU8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkcmVzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YWRkcmVzcz57Zm9ybWF0QWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbGluaz17ZXhwbG9yZUxpbmt9PkV4cGxvcmUgRXZlbnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRJdGVtOyJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiQnV0dG9uIiwiRGF0ZUljb24iLCJFdmVudEl0ZW0iLCJwcm9wcyIsInRpdGxlIiwiaW1hZ2UiLCJkYXRlIiwibG9jYXRpb24iLCJpZCIsImh1bWFuUmVhZGFibGVEYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsImZvcm1hdEFkZHJlc3MiLCJyZXBsYWNlIiwiZXhwbG9yZUxpbmsiLCJsaSIsImNsYXNzTmFtZSIsIml0ZW0iLCJpbWciLCJzcmMiLCJhbHQiLCJkaXYiLCJjb250ZW50Iiwic3VtbWFydSIsImgyIiwidGltZSIsImFkZHJlc3MiLCJhY3Rpb25zIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/events/event-item.js\n"));

/***/ })

});