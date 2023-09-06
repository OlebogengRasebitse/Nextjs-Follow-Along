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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\nIM;\n\n\nfunction AllEvents() {\n    _s();\n    const events = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_1__.getAllEvents)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    function findEventHandler(year, month) {\n        const fullPath = \"/events/\".concat(year, \"/\").concat(month);\n        router.push(fullPath);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EventsSearch, {\n                onSearch: findEventHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\events\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                items: events\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\events\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"All events\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\events\\\\index.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\events\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SoftwareDeveloper38\\\\Documents\\\\Nextjs-Follow-Along\\\\nextjsproject\\\\pages\\\\events\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(AllEvents, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = AllEvents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllEvents);\nvar _c;\n$RefreshReg$(_c, \"AllEvents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDVztBQUN2REU7QUFDaUM7QUFDSTtBQUVyQyxTQUFTRzs7SUFDTCxNQUFNQyxTQUFTTix5REFBWUE7SUFDM0IsTUFBTU8sU0FBU0gsc0RBQVNBO0lBRXhCLFNBQVNJLGlCQUFpQkMsSUFBSSxFQUFFQyxLQUFLO1FBQ2pDLE1BQU1DLFdBQVcsV0FBbUJELE9BQVJELE1BQUssS0FBUyxPQUFOQztRQUNwQ0gsT0FBT0ssSUFBSSxDQUFDRDtJQUNoQjtJQUVBLHFCQUNJLDhEQUFDUiwyQ0FBUUE7OzBCQUNMLDhEQUFDVTtnQkFBYUMsVUFBVU47Ozs7OzswQkFDeEIsOERBQUNQLHFFQUFTQTtnQkFBQ2MsT0FBT1Q7Ozs7OzswQkFDbEIsOERBQUNVOzBCQUNHLDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEI7R0FsQlNaOztRQUVVRCxrREFBU0E7OztLQUZuQkM7QUFvQlQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL2luZGV4LmpzP2MxZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsRXZlbnRzIH0gZnJvbSBcIkAvZHVtbXktZGF0YVwiO1xyXG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3RcIjtcclxuSU1cclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gQWxsRXZlbnRzKCkge1xyXG4gICAgY29uc3QgZXZlbnRzID0gZ2V0QWxsRXZlbnRzKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kRXZlbnRIYW5kbGVyKHllYXIsIG1vbnRoKSB7XHJcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBgL2V2ZW50cy8ke3llYXJ9LyR7bW9udGh9YDtcclxuICAgICAgICByb3V0ZXIucHVzaChmdWxsUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxFdmVudHNTZWFyY2ggb25TZWFyY2g9e2ZpbmRFdmVudEhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgIDxFdmVudExpc3QgaXRlbXM9e2V2ZW50c30gLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5BbGwgZXZlbnRzPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbEV2ZW50czsiXSwibmFtZXMiOlsiZ2V0QWxsRXZlbnRzIiwiRXZlbnRMaXN0IiwiSU0iLCJGcmFnbWVudCIsInVzZVJvdXRlciIsIkFsbEV2ZW50cyIsImV2ZW50cyIsInJvdXRlciIsImZpbmRFdmVudEhhbmRsZXIiLCJ5ZWFyIiwibW9udGgiLCJmdWxsUGF0aCIsInB1c2giLCJFdmVudHNTZWFyY2giLCJvblNlYXJjaCIsIml0ZW1zIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/index.js\n"));

/***/ })

});