function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-forgots-forgot-correct-forgot-correct-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/forgots/forgot-correct/forgot-correct.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/forgots/forgot-correct/forgot-correct.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersForgotsForgotCorrectForgotCorrectPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"div_logo\">\n    <img src=\"../../assets/images/logoWithUpIcon.png\" class=\"img_logo\" />\n  </div>\n\n  <ion-label class=\"lbl_txt\">\n    {{'forgots.label1' | translate}}\n  </ion-label>\n\n  <div class=\"div_chk\">\n    <img src=\"../../assets/images/shapes.png\" class=\"img_check\" />\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" size=\"large\" class=\"btn_footer\" (click)=\"back()\"><< {{'forgots.back' | translate}}</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/Users/forgots/forgot-correct/forgot-correct-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/Users/forgots/forgot-correct/forgot-correct-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: ForgotCorrectPageRoutingModule */

  /***/
  function srcAppUsersForgotsForgotCorrectForgotCorrectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotCorrectPageRoutingModule", function () {
      return ForgotCorrectPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _forgot_correct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot-correct.page */
    "./src/app/Users/forgots/forgot-correct/forgot-correct.page.ts");

    var routes = [{
      path: '',
      component: _forgot_correct_page__WEBPACK_IMPORTED_MODULE_3__["ForgotCorrectPage"]
    }];

    var ForgotCorrectPageRoutingModule = function ForgotCorrectPageRoutingModule() {
      _classCallCheck(this, ForgotCorrectPageRoutingModule);
    };

    ForgotCorrectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgotCorrectPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Users/forgots/forgot-correct/forgot-correct.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Users/forgots/forgot-correct/forgot-correct.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ForgotCorrectPageModule */

  /***/
  function srcAppUsersForgotsForgotCorrectForgotCorrectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotCorrectPageModule", function () {
      return ForgotCorrectPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _forgot_correct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot-correct-routing.module */
    "./src/app/Users/forgots/forgot-correct/forgot-correct-routing.module.ts");
    /* harmony import */


    var _forgot_correct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot-correct.page */
    "./src/app/Users/forgots/forgot-correct/forgot-correct.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ForgotCorrectPageModule = function ForgotCorrectPageModule() {
      _classCallCheck(this, ForgotCorrectPageModule);
    };

    ForgotCorrectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_correct_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotCorrectPageRoutingModule"]],
      declarations: [_forgot_correct_page__WEBPACK_IMPORTED_MODULE_6__["ForgotCorrectPage"]]
    })], ForgotCorrectPageModule);
    /***/
  },

  /***/
  "./src/app/Users/forgots/forgot-correct/forgot-correct.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/Users/forgots/forgot-correct/forgot-correct.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersForgotsForgotCorrectForgotCorrectPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_logo {\n  text-align: center;\n  margin: 48px;\n}\n.div_logo .img_logo {\n  width: 200px;\n}\n.lbl_txt {\n  text-align: center;\n  display: block;\n  font-size: 18px;\n  line-height: 1.3;\n  width: 75%;\n  margin: 0 auto;\n  padding: 0px 0px 32px 0px;\n}\n.div_chk {\n  text-align: center;\n}\n.div_chk .img_check {\n  height: 125px;\n  width: 125px;\n}\n.btn_footer {\n  margin: 0px;\n  color: white;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL2ZvcmdvdHMvZm9yZ290LWNvcnJlY3QvZm9yZ290LWNvcnJlY3QucGFnZS5zY3NzIiwic3JjL2FwcC9Vc2Vycy9mb3Jnb3RzL2ZvcmdvdC1jb3JyZWN0L2ZvcmdvdC1jb3JyZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFDRSxZQUFBO0FDRU47QURDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNFSjtBREFFO0VBQ0ksa0JBQUE7QUNHTjtBREZJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNJUjtBRERFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvVXNlcnMvZm9yZ290cy9mb3Jnb3QtY29ycmVjdC9mb3Jnb3QtY29ycmVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2X2xvZ28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDQ4cHg7XG4gICAgLmltZ19sb2dvIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG4gIH1cbiAgLmxibF90eHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDBweCAwcHggMzJweCAwcHg7XG4gIH1cbiAgLmRpdl9jaGt7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLmltZ19jaGVjayB7XG4gICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgIH1cbiAgfVxuICAuYnRuX2Zvb3RlciB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9IiwiLmRpdl9sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDQ4cHg7XG59XG4uZGl2X2xvZ28gLmltZ19sb2dvIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ubGJsX3R4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDBweCAwcHggMzJweCAwcHg7XG59XG5cbi5kaXZfY2hrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdl9jaGsgLmltZ19jaGVjayB7XG4gIGhlaWdodDogMTI1cHg7XG4gIHdpZHRoOiAxMjVweDtcbn1cblxuLmJ0bl9mb290ZXIge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Users/forgots/forgot-correct/forgot-correct.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Users/forgots/forgot-correct/forgot-correct.page.ts ***!
    \*********************************************************************/

  /*! exports provided: ForgotCorrectPage */

  /***/
  function srcAppUsersForgotsForgotCorrectForgotCorrectPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotCorrectPage", function () {
      return ForgotCorrectPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

    var ForgotCorrectPage = /*#__PURE__*/function () {
      function ForgotCorrectPage(navCtrl, statusBar) {
        _classCallCheck(this, ForgotCorrectPage);

        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
      }

      _createClass(ForgotCorrectPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#FFFFFF');
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack('/login');
        }
      }]);

      return ForgotCorrectPage;
    }();

    ForgotCorrectPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
      }];
    };

    ForgotCorrectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-correct',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forgot-correct.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/forgots/forgot-correct/forgot-correct.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forgot-correct.page.scss */
      "./src/app/Users/forgots/forgot-correct/forgot-correct.page.scss"))["default"]]
    })], ForgotCorrectPage);
    /***/
  }
}]);
//# sourceMappingURL=Users-forgots-forgot-correct-forgot-correct-module-es5.js.map