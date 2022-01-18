(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-favorites-favorites-module"],{

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_city_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/city.model */ "./src/app/models/city.model.ts");
/* harmony import */ var _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/city-forecast.actions */ "./src/app/actions/city-forecast.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_unit_sign_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/unit-sign.pipe */ "./src/app/pipes/unit-sign.pipe.ts");








function FavoritesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritesComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.showCity(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "unitSign");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.CityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, item_r1.Current.Temperature["Metric"]["Value"]));
} }
class FavoritesComponent {
    constructor(store) {
        this.store = store;
        this.favouritesSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        this.favouritesSub = this.store.select('cityWeatherReducer').subscribe(res => {
            this.items = res.favourites;
        });
    }
    showCity(cityWeatherCard) {
        const city = new _models_city_model__WEBPACK_IMPORTED_MODULE_2__["City"]();
        city.Key = cityWeatherCard.Key;
        city.LocalizedName = cityWeatherCard.CityName;
        this.store.dispatch(new _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_3__["FetchCityForecast"](city));
    }
    ngOnDestroy() {
        this.favouritesSub.unsubscribe();
    }
}
FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) { return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritesComponent, selectors: [["app-favorites"]], decls: 2, vars: 1, consts: [[1, "d-flex", "flex-wrap", "mt-3", "justify-content-lg-start", "justify-content-around"], ["class", "p-4 favourite-item m-3 pointer font-weight-bold text-center", 3, "click", 4, "ngFor", "ngForOf"], [1, "p-4", "favourite-item", "m-3", "pointer", "font-weight-bold", "text-center", 3, "click"]], template: function FavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoritesComponent_div_1_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_pipes_unit_sign_pipe__WEBPACK_IMPORTED_MODULE_6__["UnitSignPipe"]], styles: [".favourite-item[_ngcontent-%COMP%] {\n  width: 190px;\n  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvQzpcXFVzZXJzXFxhbG9uaFxcRGVza3RvcFxccHJvamVjdHNcXEhlcm9sby1Bc3NpZ25tZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxmYXZvcml0ZXNcXGZhdm9yaXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLDhFQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXZvdXJpdGUtaXRlbSB7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNnB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4iLCIuZmF2b3VyaXRlLWl0ZW0ge1xuICB3aWR0aDogMTkwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorites',
                templateUrl: './favorites.component.html',
                styleUrls: ['./favorites.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/favorites/favorites.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/favorites/favorites.module.ts ***!
  \**********************************************************/
/*! exports provided: FavoritesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesModule", function() { return FavoritesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/app-pipes.module */ "./src/app/pipes/app-pipes.module.ts");







const routes = [
    {
        path: '',
        component: _favorites_component__WEBPACK_IMPORTED_MODULE_2__["FavoritesComponent"]
    }
];
class FavoritesModule {
}
FavoritesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FavoritesModule });
FavoritesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FavoritesModule_Factory(t) { return new (t || FavoritesModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_4__["AppPipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FavoritesModule, { declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_2__["FavoritesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_4__["AppPipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _favorites_component__WEBPACK_IMPORTED_MODULE_2__["FavoritesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                    _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_4__["AppPipesModule"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/models/city.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/city.model.ts ***!
  \**************************************/
/*! exports provided: City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
class City {
}


/***/ })

}]);
//# sourceMappingURL=components-favorites-favorites-module-es2015.js.map