(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/city-forecast.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/actions/city-forecast.actions.ts ***!
  \**************************************************/
/*! exports provided: FETCH_CITY_FORECAST, SHOW_CITY_FORECAST, FETCH_CITY_FORECAST_FAIL, ADD_CITY_TO_FAVOURITES, REMOVE_CITY_FROM_FAVOURITES, FetchCityForecast, ShowCityForecast, FetchCityForecastFail, AddCityToFavourites, RemoveCityToFavourites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CITY_FORECAST", function() { return FETCH_CITY_FORECAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_CITY_FORECAST", function() { return SHOW_CITY_FORECAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CITY_FORECAST_FAIL", function() { return FETCH_CITY_FORECAST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CITY_TO_FAVOURITES", function() { return ADD_CITY_TO_FAVOURITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CITY_FROM_FAVOURITES", function() { return REMOVE_CITY_FROM_FAVOURITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchCityForecast", function() { return FetchCityForecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCityForecast", function() { return ShowCityForecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchCityForecastFail", function() { return FetchCityForecastFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCityToFavourites", function() { return AddCityToFavourites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCityToFavourites", function() { return RemoveCityToFavourites; });
const FETCH_CITY_FORECAST = 'FETCH_CITY_FORECAST';
const SHOW_CITY_FORECAST = 'SHOW_CITY_FORECAST';
const FETCH_CITY_FORECAST_FAIL = 'FETCH_CITY_FORECAST_FAIL';
const ADD_CITY_TO_FAVOURITES = 'ADD_CITY_TO_FAVOURITES';
const REMOVE_CITY_FROM_FAVOURITES = 'REMOVE_CITY_FROM_FAVOURITES';
class FetchCityForecast {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_CITY_FORECAST;
    }
}
class ShowCityForecast {
    constructor(payload) {
        this.payload = payload;
        this.type = SHOW_CITY_FORECAST;
    }
}
class FetchCityForecastFail {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_CITY_FORECAST_FAIL;
    }
}
class AddCityToFavourites {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_CITY_TO_FAVOURITES;
    }
}
class RemoveCityToFavourites {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_CITY_FROM_FAVOURITES;
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: 'home', loadChildren: () => Promise.all(/*! import() | components-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("components-home-home-module")]).then(__webpack_require__.bind(null, /*! ./components/home/home.module */ "./src/app/components/home/home.module.ts")).then(m => m.HomeModule) },
    { path: 'favorites', loadChildren: () => Promise.all(/*! import() | components-favorites-favorites-module */[__webpack_require__.e("common"), __webpack_require__.e("components-favorites-favorites-module")]).then(__webpack_require__.bind(null, /*! ./components/favorites/favorites.module */ "./src/app/components/favorites/favorites.module.ts")).then(m => m.FavoritesModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', loadChildren: () => Promise.all(/*! import() | components-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("components-home-home-module")]).then(__webpack_require__.bind(null, /*! ./components/home/home.module */ "./src/app/components/home/home.module.ts")).then(m => m.HomeModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/city-forecast.actions */ "./src/app/actions/city-forecast.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");









function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "dark-theme": a0 }; };
class AppComponent {
    constructor(store, _snackBar) {
        this.store = store;
        this._snackBar = _snackBar;
        this.title = 'My Weather';
        this.isDark = false;
        this.isLoading = false;
        this.initialCity = {
            Key: 215854,
            LocalizedName: 'Tel Aviv',
        };
    }
    ngOnInit() {
        this.store.dispatch(new _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_1__["FetchCityForecast"](this.initialCity));
        this.store.select('cityWeatherReducer').subscribe(state => {
            this.isLoading = state.loading;
            if (state.fetchError) {
                this.showError(state.fetchError);
            }
        });
    }
    showError(message) {
        this._snackBar.open(message, 'close', {
            duration: 3000,
        });
    }
    themeToggled(isDark) {
        this.isDark = isDark;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 4, consts: [[1, "mat-typography", "app-frame", "mat-app-background", 3, "ngClass"], [3, "themeToggled"], ["class", "spinner", 4, "ngIf"], [1, "container"], [1, "spinner"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("themeToggled", function AppComponent_Template_app_navbar_themeToggled_1_listener($event) { return ctx.themeToggled($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isDark));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], app-root[_ngcontent-%COMP%], .app-frame[_ngcontent-%COMP%] {\n  overflow: auto;\n  margin: 0;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 89vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbG9uaFxcRGVza3RvcFxccHJvamVjdHNcXEhlcm9sby1Bc3NpZ25tZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGFwcC1yb290LCAuYXBwLWZyYW1lIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDg5dmg7XHJcbn1cclxuIiwiaHRtbCwgYm9keSwgYXBwLXJvb3QsIC5hcHAtZnJhbWUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogODl2aDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _reducers_city_weather_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers/city-weather.reducer */ "./src/app/reducers/city-weather.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _effects_city_weather_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./effects/city-weather.effects */ "./src/app/effects/city-weather.effects.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({ cityWeatherReducer: _reducers_city_weather_reducer__WEBPACK_IMPORTED_MODULE_9__["cityWeatherReducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_effects_city_weather_effects__WEBPACK_IMPORTED_MODULE_11__["CityWeatherEffects"]]),
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsRootModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({ cityWeatherReducer: _reducers_city_weather_reducer__WEBPACK_IMPORTED_MODULE_9__["cityWeatherReducer"] }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_effects_city_weather_effects__WEBPACK_IMPORTED_MODULE_11__["CityWeatherEffects"]]),
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");








const _c0 = function () { return ["active"]; };
class NavbarComponent {
    constructor() {
        this.toggleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.themeToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.toggleControl.valueChanges.subscribe(value => {
            this.themeToggled.emit(value);
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], outputs: { themeToggled: "themeToggled" }, decls: 15, vars: 5, consts: [["color", "primary", 1, "sticky-top"], ["routerLink", "/home", 1, "logo", "pointer"], [1, "spacer"], [1, "nav-item", "d-flex"], [1, "mx-2", 3, "formControl"], ["routerLink", "/home", 1, "nav-item", "pointer", 3, "routerLinkActive"], ["routerLink", "/favorites", 1, "nav-item", "pointer", 3, "routerLinkActive"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Weather");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "brightness_5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-slide-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "bedtime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.toggleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".logo[_ngcontent-%COMP%] {\r\n  text-shadow: 2px 2px #322b2b99;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  padding: 0 14px;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  background: #eca933;\r\n  border-radius: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggIzMyMmIyYjk5O1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWNhOTMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, { themeToggled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/effects/city-weather.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/effects/city-weather.effects.ts ***!
  \*************************************************/
/*! exports provided: CityWeatherEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityWeatherEffects", function() { return CityWeatherEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/city-forecast.actions */ "./src/app/actions/city-forecast.actions.ts");
/* harmony import */ var _services_accuweather_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/accuweather-http.service */ "./src/app/services/accuweather-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class CityWeatherEffects {
    constructor(actions$, accuweatherHttpService, router) {
        this.actions$ = actions$;
        this.accuweatherHttpService = accuweatherHttpService;
        this.router = router;
        this.cityForecastFetch$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_CITY_FORECAST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((cityData) => {
            return this.accuweatherHttpService.getCityWeatherCard(cityData);
        }));
        this.showCityForecast = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_4__["SHOW_CITY_FORECAST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.router.navigate(['home', 'forecast']);
        }));
    }
}
CityWeatherEffects.ɵfac = function CityWeatherEffects_Factory(t) { return new (t || CityWeatherEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_accuweather_http_service__WEBPACK_IMPORTED_MODULE_5__["AccuweatherHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
CityWeatherEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CityWeatherEffects, factory: CityWeatherEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], CityWeatherEffects.prototype, "cityForecastFetch$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], CityWeatherEffects.prototype, "showCityForecast", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CityWeatherEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_accuweather_http_service__WEBPACK_IMPORTED_MODULE_5__["AccuweatherHttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { cityForecastFetch$: [], showCityForecast: [] }); })();


/***/ }),

/***/ "./src/app/models/city-current-weather.model.ts":
/*!******************************************************!*\
  !*** ./src/app/models/city-current-weather.model.ts ***!
  \******************************************************/
/*! exports provided: CityCurrentWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityCurrentWeather", function() { return CityCurrentWeather; });
class CityCurrentWeather {
}


/***/ }),

/***/ "./src/app/models/city-forecast.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/city-forecast.model.ts ***!
  \***********************************************/
/*! exports provided: CityForecast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityForecast", function() { return CityForecast; });
class CityForecast {
}
class DailyCityForecast {
}


/***/ }),

/***/ "./src/app/models/city-weather-card.model.ts":
/*!***************************************************!*\
  !*** ./src/app/models/city-weather-card.model.ts ***!
  \***************************************************/
/*! exports provided: CityWeatherCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityWeatherCard", function() { return CityWeatherCard; });
class CityWeatherCard {
}


/***/ }),

/***/ "./src/app/reducers/city-weather.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/reducers/city-weather.reducer.ts ***!
  \**************************************************/
/*! exports provided: cityWeatherReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityWeatherReducer", function() { return cityWeatherReducer; });
/* harmony import */ var _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/city-forecast.actions */ "./src/app/actions/city-forecast.actions.ts");

const initialState = {
    favourites: [],
    cityWeatherCard: null,
    fetchError: null,
    loading: false,
    unit: 'metric'
};
function cityWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_0__["SHOW_CITY_FORECAST"]:
            return Object.assign(Object.assign({}, state), { cityWeatherCard: action.payload, fetchError: null, loading: false });
        case _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_CITY_FORECAST"]:
            return Object.assign(Object.assign({}, state), { fetchError: null, loading: true });
        case _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_CITY_FORECAST_FAIL"]:
            return Object.assign(Object.assign({}, state), { cityWeatherCard: null, fetchError: action.payload, loading: false });
        case _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_CITY_TO_FAVOURITES"]:
            return Object.assign(Object.assign({}, state), { favourites: [...state.favourites, action.payload] });
        case _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_CITY_FROM_FAVOURITES"]:
            const filtered = [...state.favourites].filter(item => item.Key !== action.payload);
            return Object.assign(Object.assign({}, state), { favourites: filtered });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/accuweather-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/accuweather-http.service.ts ***!
  \******************************************************/
/*! exports provided: AccuweatherHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccuweatherHttpService", function() { return AccuweatherHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_city_forecast_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/city-forecast.model */ "./src/app/models/city-forecast.model.ts");
/* harmony import */ var _models_city_current_weather_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/city-current-weather.model */ "./src/app/models/city-current-weather.model.ts");
/* harmony import */ var _models_city_weather_card_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/city-weather-card.model */ "./src/app/models/city-weather-card.model.ts");
/* harmony import */ var _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/city-forecast.actions */ "./src/app/actions/city-forecast.actions.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









class AccuweatherHttpService {
    constructor(http) {
        this.http = http;
        this.url = 'https://dataservice.accuweather.com';
        // readonly apiKey = 'kIAOQIguhCOciKN0htm5SlhS1TkCqlXA'; //first
        this.apiKey = 'aAzBLQb54i8UeWQIxdE6V0l0WhAeGlDG'; //second
    }
    search(keyword) {
        const params = {
            q: keyword,
            apikey: this.apiKey
        };
        return this.http.get(this.url + '/locations/v1/cities/autocomplete', { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            return response;
        }));
    }
    getCityCurrentWeather(cityCode) {
        const params = {
            apikey: this.apiKey
        };
        return this.http.get(this.url + '/currentconditions/v1/' + cityCode, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const cityCurrentWeather = new _models_city_current_weather_model__WEBPACK_IMPORTED_MODULE_4__["CityCurrentWeather"]();
            cityCurrentWeather.WeatherIcon = response[0].WeatherIcon;
            cityCurrentWeather.WeatherText = response[0].WeatherText;
            cityCurrentWeather.PrecipitationType = response[0].PrecipitationType;
            cityCurrentWeather.Temperature = response[0].Temperature;
            return cityCurrentWeather;
        }));
    }
    getCityForecast(cityCode) {
        const params = {
            apikey: this.apiKey,
            metric: 'true',
        };
        return this.http.get(this.url + '/forecasts/v1/daily/5day/' + cityCode, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const cityForecast = new _models_city_forecast_model__WEBPACK_IMPORTED_MODULE_3__["CityForecast"]();
            cityForecast.Headline = response.Headline;
            cityForecast.DailyForecasts = response.DailyForecasts;
            return response;
        }));
    }
    getCityWeatherCard(cityData) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            currentWeather: this.getCityCurrentWeather(cityData.payload.Key),
            forecastWeather: this.getCityForecast(cityData.payload.Key)
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            const cityForecast = new _models_city_weather_card_model__WEBPACK_IMPORTED_MODULE_5__["CityWeatherCard"]();
            cityForecast.CityName = cityData.payload.LocalizedName;
            cityForecast.Key = cityData.payload.Key;
            cityForecast.Current = res.currentWeather;
            cityForecast.Forecast = res.forecastWeather;
            return new _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_6__["ShowCityForecast"](cityForecast);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_6__["FetchCityForecastFail"]('Something went wrong'));
        }));
    }
}
AccuweatherHttpService.ɵfac = function AccuweatherHttpService_Factory(t) { return new (t || AccuweatherHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"])); };
AccuweatherHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccuweatherHttpService, factory: AccuweatherHttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccuweatherHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alonh\Desktop\projects\Herolo-Assignment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map