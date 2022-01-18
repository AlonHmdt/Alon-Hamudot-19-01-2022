(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/pipes/app-pipes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/app-pipes.module.ts ***!
  \*******************************************/
/*! exports provided: AppPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPipesModule", function() { return AppPipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _unit_sign_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-sign.pipe */ "./src/app/pipes/unit-sign.pipe.ts");
/* harmony import */ var _zero_pad_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zero-pad.pipe */ "./src/app/pipes/zero-pad.pipe.ts");




class AppPipesModule {
}
AppPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppPipesModule });
AppPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppPipesModule_Factory(t) { return new (t || AppPipesModule)(); }, providers: [], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppPipesModule, { declarations: [_unit_sign_pipe__WEBPACK_IMPORTED_MODULE_1__["UnitSignPipe"],
        _zero_pad_pipe__WEBPACK_IMPORTED_MODULE_2__["ZeroPadPipe"]], exports: [_unit_sign_pipe__WEBPACK_IMPORTED_MODULE_1__["UnitSignPipe"],
        _zero_pad_pipe__WEBPACK_IMPORTED_MODULE_2__["ZeroPadPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _unit_sign_pipe__WEBPACK_IMPORTED_MODULE_1__["UnitSignPipe"],
                    _zero_pad_pipe__WEBPACK_IMPORTED_MODULE_2__["ZeroPadPipe"]
                ],
                imports: [],
                providers: [],
                exports: [
                    _unit_sign_pipe__WEBPACK_IMPORTED_MODULE_1__["UnitSignPipe"],
                    _zero_pad_pipe__WEBPACK_IMPORTED_MODULE_2__["ZeroPadPipe"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/unit-sign.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/unit-sign.pipe.ts ***!
  \*****************************************/
/*! exports provided: UnitSignPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitSignPipe", function() { return UnitSignPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UnitSignPipe {
    transform(temperature) {
        return temperature + '°C';
    }
}
UnitSignPipe.ɵfac = function UnitSignPipe_Factory(t) { return new (t || UnitSignPipe)(); };
UnitSignPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "unitSign", type: UnitSignPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitSignPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'unitSign'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/zero-pad.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/zero-pad.pipe.ts ***!
  \****************************************/
/*! exports provided: ZeroPadPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZeroPadPipe", function() { return ZeroPadPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ZeroPadPipe {
    transform(num, size) {
        let s = num + '';
        while (s.length < size) {
            s = '0' + s;
            return s;
        }
        return s;
    }
}
ZeroPadPipe.ɵfac = function ZeroPadPipe_Factory(t) { return new (t || ZeroPadPipe)(); };
ZeroPadPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "zeroPad", type: ZeroPadPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZeroPadPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'zeroPad'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map