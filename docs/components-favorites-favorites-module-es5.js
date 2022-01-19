function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-favorites-favorites-module"], {
  /***/
  "./src/app/components/favorites/favorites.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/favorites/favorites.component.ts ***!
    \*************************************************************/

  /*! exports provided: FavoritesComponent */

  /***/
  function srcAppComponentsFavoritesFavoritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function () {
      return FavoritesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_city_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/city.model */
    "./src/app/models/city.model.ts");
    /* harmony import */


    var _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../actions/city-forecast.actions */
    "./src/app/actions/city-forecast.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_unit_sign_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/unit-sign.pipe */
    "./src/app/pipes/unit-sign.pipe.ts");
    /* harmony import */


    var _pipes_zero_pad_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipes/zero-pad.pipe */
    "./src/app/pipes/zero-pad.pipe.ts");

    function FavoritesComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritesComponent_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var item_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.showCity(item_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "unitSign");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "zeroPad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.CityName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, item_r2.Current.Temperature.Metric.Value));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://developer.accuweather.com/sites/default/files/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, item_r2.Current.WeatherIcon, 2), "-s.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function FavoritesComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No favourites yet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FavoritesComponent = /*#__PURE__*/function () {
      function FavoritesComponent(store) {
        _classCallCheck(this, FavoritesComponent);

        this.store = store;
        this.favouritesSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      }

      _createClass(FavoritesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.favouritesSub = this.store.select('cityWeatherReducer').subscribe(function (res) {
            _this.items = res.favourites;
          });
        }
      }, {
        key: "showCity",
        value: function showCity(cityWeatherCard) {
          var city = new _models_city_model__WEBPACK_IMPORTED_MODULE_2__["City"]();
          city.Key = cityWeatherCard.Key;
          city.LocalizedName = cityWeatherCard.CityName;
          this.store.dispatch(new _actions_city_forecast_actions__WEBPACK_IMPORTED_MODULE_3__["FetchCityForecast"](city));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.favouritesSub) {
            this.favouritesSub.unsubscribe();
          }
        }
      }]);

      return FavoritesComponent;
    }();

    FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) {
      return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
    };

    FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FavoritesComponent,
      selectors: [["app-favorites"]],
      decls: 3,
      vars: 2,
      consts: [[1, "d-flex", "flex-wrap", "mt-3", "justify-content-lg-start", "justify-content-around"], ["class", "p-4 favourite-item m-3 pointer font-weight-bold text-center", 3, "click", 4, "ngFor", "ngForOf"], ["class", "h4 text-center w-100", 4, "ngIf"], [1, "p-4", "favourite-item", "m-3", "pointer", "font-weight-bold", "text-center", 3, "click"], [3, "src"], [1, "h4", "text-center", "w-100"]],
      template: function FavoritesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoritesComponent_div_1_Template, 8, 8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavoritesComponent_p_2_Template, 2, 0, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length === 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      pipes: [_pipes_unit_sign_pipe__WEBPACK_IMPORTED_MODULE_6__["UnitSignPipe"], _pipes_zero_pad_pipe__WEBPACK_IMPORTED_MODULE_7__["ZeroPadPipe"]],
      styles: [".favourite-item[_ngcontent-%COMP%] {\n  width: 190px;\n  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxBbG9uXFxBbG9uLUhhbXVkb3QtMTktMDEtMjAyMi9zcmNcXGFwcFxcY29tcG9uZW50c1xcZmF2b3JpdGVzXFxmYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSw4RUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF2b3VyaXRlLWl0ZW0ge1xyXG4gIHdpZHRoOiAxOTBweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMTZweCAwIHJnYigwIDAgMCAvIDIwJSksIDAgNnB4IDIwcHggMCByZ2IoMCAwIDAgLyAxOSUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIiwiLmZhdm91cml0ZS1pdGVtIHtcbiAgd2lkdGg6IDE5MHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-favorites',
          templateUrl: './favorites.component.html',
          styleUrls: ['./favorites.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/favorites/favorites.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/favorites/favorites.module.ts ***!
    \**********************************************************/

  /*! exports provided: FavoritesModule */

  /***/
  function srcAppComponentsFavoritesFavoritesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesModule", function () {
      return FavoritesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _favorites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./favorites.component */
    "./src/app/components/favorites/favorites.component.ts");
    /* harmony import */


    var _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pipes/app-pipes.module */
    "./src/app/pipes/app-pipes.module.ts");

    var routes = [{
      path: '',
      component: _favorites_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesComponent"]
    }];

    var FavoritesModule = /*#__PURE__*/_createClass(function FavoritesModule() {
      _classCallCheck(this, FavoritesModule);
    });

    FavoritesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FavoritesModule
    });
    FavoritesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FavoritesModule_Factory(t) {
        return new (t || FavoritesModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_4__["AppPipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FavoritesModule, {
        declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_4__["AppPipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_4__["AppPipesModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/city.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/city.model.ts ***!
    \**************************************/

  /*! exports provided: City */

  /***/
  function srcAppModelsCityModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "City", function () {
      return City;
    });

    var City = /*#__PURE__*/_createClass(function City() {
      _classCallCheck(this, City);
    });
    /***/

  }
}]);
//# sourceMappingURL=components-favorites-favorites-module-es5.js.map