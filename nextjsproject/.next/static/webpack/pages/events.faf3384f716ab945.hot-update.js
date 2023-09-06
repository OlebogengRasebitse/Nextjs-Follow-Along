"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events",{

/***/ "./pages/events/index.js":
/*!*******************************!*\
  !*** ./pages/events/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ \"./pages/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AllEvents() {\n    _s();\n    const events = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_1__.getAllEvents)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    function findEventHandler(year, month) {\n        const fullPath = \"/events/\".concat(year, \"/\").concat(month);\n        router.push(fullPath);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onSearch: findEventHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\events\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                items: events\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\events\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"All events\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\events\\\\index.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\events\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\events\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(AllEvents, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = AllEvents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllEvents);\nvar _c;\n$RefreshReg$(_c, \"AllEvents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ087QUFDekI7QUFDRztBQUNPO0FBRXhDLFNBQVNLOztJQUNMLE1BQU1DLFNBQVNOLHlEQUFZQTtJQUMzQixNQUFNTyxTQUFTSCxzREFBU0E7SUFFeEIsU0FBU0ksaUJBQWlCQyxJQUFJLEVBQUVDLEtBQUs7UUFDakMsTUFBTUMsV0FBVyxXQUFtQkQsT0FBUkQsTUFBSyxLQUFTLE9BQU5DO1FBQ3BDSCxPQUFPSyxJQUFJLENBQUNEO0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNSLDJDQUFRQTs7MEJBQ0wsOERBQUNELHlDQUFZQTtnQkFBQ1csVUFBVUw7Ozs7OzswQkFDeEIsOERBQUNQLHFFQUFTQTtnQkFBQ2EsT0FBT1I7Ozs7OzswQkFDbEIsOERBQUNTOzBCQUNHLDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEI7R0FsQlNYOztRQUVVRCxrREFBU0E7OztLQUZuQkM7QUFvQlQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL2luZGV4LmpzP2MxZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2R1bW15LWRhdGFcIjtcclxuaW1wb3J0IEV2ZW50TGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0XCI7XHJcbmltcG9ydCBFdmVudHNTZWFyY2ggZnJvbSBcIi4uL1wiXHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIEFsbEV2ZW50cygpIHtcclxuICAgIGNvbnN0IGV2ZW50cyA9IGdldEFsbEV2ZW50cygpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZEV2ZW50SGFuZGxlcih5ZWFyLCBtb250aCkge1xyXG4gICAgICAgIGNvbnN0IGZ1bGxQYXRoID0gYC9ldmVudHMvJHt5ZWFyfS8ke21vbnRofWA7XHJcbiAgICAgICAgcm91dGVyLnB1c2goZnVsbFBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8RXZlbnRzU2VhcmNoIG9uU2VhcmNoPXtmaW5kRXZlbnRIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtldmVudHN9IC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+QWxsIGV2ZW50czwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxFdmVudHM7XHJcbiJdLCJuYW1lcyI6WyJnZXRBbGxFdmVudHMiLCJFdmVudExpc3QiLCJFdmVudHNTZWFyY2giLCJGcmFnbWVudCIsInVzZVJvdXRlciIsIkFsbEV2ZW50cyIsImV2ZW50cyIsInJvdXRlciIsImZpbmRFdmVudEhhbmRsZXIiLCJ5ZWFyIiwibW9udGgiLCJmdWxsUGF0aCIsInB1c2giLCJvblNlYXJjaCIsIml0ZW1zIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/index.js\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dummy-data */ \"./dummy-data.js\");\n\n\n\nfunction Homepage() {\n    const futureEvents = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_2__.getFeaturedEvents)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                items: futureEvents\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Homepage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFDTDtBQUVqRCxTQUFTRTtJQUNQLE1BQU1DLGVBQWVGLDhEQUFpQkE7SUFFdEMscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0oscUVBQVNBO2dCQUFDSyxPQUFPRjs7Ozs7OzBCQUNsQiw4REFBQ0c7MEJBQUc7Ozs7Ozs7Ozs7OztBQUdWO0tBVFNKO0FBVVQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRMaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3RcIlxuaW1wb3J0IHsgZ2V0RmVhdHVyZWRFdmVudHMgfSBmcm9tIFwiLi4vZHVtbXktZGF0YVwiXG5cbmZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICBjb25zdCBmdXR1cmVFdmVudHMgPSBnZXRGZWF0dXJlZEV2ZW50cygpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEV2ZW50TGlzdCBpdGVtcz17ZnV0dXJlRXZlbnRzfSAvPlxuICAgICAgPGgxPkhvbWUgUGFnZTwvaDE+XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlIl0sIm5hbWVzIjpbIkV2ZW50TGlzdCIsImdldEZlYXR1cmVkRXZlbnRzIiwiSG9tZXBhZ2UiLCJmdXR1cmVFdmVudHMiLCJkaXYiLCJpdGVtcyIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});