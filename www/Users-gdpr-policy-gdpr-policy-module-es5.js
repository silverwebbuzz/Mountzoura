function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-gdpr-policy-gdpr-policy-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/gdpr-policy/gdpr-policy.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/gdpr-policy/gdpr-policy.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersGdprPolicyGdprPolicyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../assets/images/logoWithoutIcon.png\" class=\"img_head\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label color=\"primary\" class=\"lbl_title\">{{'GDPR.title' | translate}}</ion-label>\n\n  <ion-label class=\"lbl_\">\n    <h2 [innerHTML]=\"term ? term : '' \"></h2>\n  </ion-label>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Users/gdpr-policy/gdpr-policy-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Users/gdpr-policy/gdpr-policy-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: GdprPolicyPageRoutingModule */

  /***/
  function srcAppUsersGdprPolicyGdprPolicyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GdprPolicyPageRoutingModule", function () {
      return GdprPolicyPageRoutingModule;
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


    var _gdpr_policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./gdpr-policy.page */
    "./src/app/Users/gdpr-policy/gdpr-policy.page.ts");

    var routes = [{
      path: '',
      component: _gdpr_policy_page__WEBPACK_IMPORTED_MODULE_3__["GdprPolicyPage"]
    }];

    var GdprPolicyPageRoutingModule = function GdprPolicyPageRoutingModule() {
      _classCallCheck(this, GdprPolicyPageRoutingModule);
    };

    GdprPolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GdprPolicyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Users/gdpr-policy/gdpr-policy.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Users/gdpr-policy/gdpr-policy.module.ts ***!
    \*********************************************************/

  /*! exports provided: GdprPolicyPageModule */

  /***/
  function srcAppUsersGdprPolicyGdprPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GdprPolicyPageModule", function () {
      return GdprPolicyPageModule;
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


    var _gdpr_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gdpr-policy-routing.module */
    "./src/app/Users/gdpr-policy/gdpr-policy-routing.module.ts");
    /* harmony import */


    var _gdpr_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gdpr-policy.page */
    "./src/app/Users/gdpr-policy/gdpr-policy.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var GdprPolicyPageModule = function GdprPolicyPageModule() {
      _classCallCheck(this, GdprPolicyPageModule);
    };

    GdprPolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gdpr_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["GdprPolicyPageRoutingModule"]],
      declarations: [_gdpr_policy_page__WEBPACK_IMPORTED_MODULE_6__["GdprPolicyPage"]]
    })], GdprPolicyPageModule);
    /***/
  },

  /***/
  "./src/app/Users/gdpr-policy/gdpr-policy.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/Users/gdpr-policy/gdpr-policy.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersGdprPolicyGdprPolicyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #f1d6ad;\n  text-align: center;\n}\n.bg .img_tool_arrow {\n  height: 32px;\n  padding-left: 8px;\n}\n.bg .img_head {\n  width: 75%;\n}\nion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .lbl_title {\n  display: block;\n  font-size: 22px;\n  text-decoration: underline;\n  padding: 0px 0px 16px 0px;\n}\nion-content .lbl_ {\n  display: block;\n  font-size: 18px;\n  padding: 8px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL2dkcHItcG9saWN5L2dkcHItcG9saWN5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvVXNlcnMvZ2Rwci1wb2xpY3kvZ2Rwci1wb2xpY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNFTjtBREFJO0VBQ0UsVUFBQTtBQ0VOO0FERUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNDTjtBREVJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvVXNlcnMvZ2Rwci1wb2xpY3kvZ2Rwci1wb2xpY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWQ2YWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5pbWdfdG9vbF9hcnJvdyB7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICB9XG4gICAgLmltZ19oZWFkIHtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcblxuICAgIC5sYmxfdGl0bGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIHBhZGRpbmc6IDBweCAwcHggMTZweCAwcHg7XG4gICAgfVxuXG4gICAgLmxibF8ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9IiwiLmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFkNmFkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmcgLmltZ190b29sX2Fycm93IHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5iZyAuaW1nX2hlYWQge1xuICB3aWR0aDogNzUlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgcGFkZGluZzogMHB4IDBweCAxNnB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogOHB4IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Users/gdpr-policy/gdpr-policy.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Users/gdpr-policy/gdpr-policy.page.ts ***!
    \*******************************************************/

  /*! exports provided: GdprPolicyPage */

  /***/
  function srcAppUsersGdprPolicyGdprPolicyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GdprPolicyPage", function () {
      return GdprPolicyPage;
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


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var GdprPolicyPage = /*#__PURE__*/function () {
      function GdprPolicyPage(statusBar, api, navCtrl) {
        _classCallCheck(this, GdprPolicyPage);

        this.statusBar = statusBar;
        this.api = api;
        this.navCtrl = navCtrl;
      }

      _createClass(GdprPolicyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#f1d6ad');
          this.api.gdpr().subscribe(function (resp) {
            _this.termslist = resp;
            _this.term = _this.termslist.data.description;
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack('/tabs/settings');
        }
      }]);

      return GdprPolicyPage;
    }();

    GdprPolicyPage.ctorParameters = function () {
      return [{
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    GdprPolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gdpr-policy',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./gdpr-policy.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/gdpr-policy/gdpr-policy.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./gdpr-policy.page.scss */
      "./src/app/Users/gdpr-policy/gdpr-policy.page.scss"))["default"]]
    })], GdprPolicyPage);
    /***/
  }
}]);
//# sourceMappingURL=Users-gdpr-policy-gdpr-policy-module-es5.js.map