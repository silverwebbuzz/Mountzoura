function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-privacy-policy-privacy-policy-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/privacy-policy/privacy-policy.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/privacy-policy/privacy-policy.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersPrivacyPolicyPrivacyPolicyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../assets/images/logoWithoutIcon.png\" class=\"img_head\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label color=\"primary\" class=\"lbl_title\">{{'privacy.title' | translate}}</ion-label>\n\n  <ion-label class=\"lbl_\">\n    <h2 [innerHTML]=\"tepolicyrm ? tepolicyrm : '' \"></h2>\n  </ion-label>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Users/privacy-policy/privacy-policy-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Users/privacy-policy/privacy-policy-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: PrivacyPolicyPageRoutingModule */

  /***/
  function srcAppUsersPrivacyPolicyPrivacyPolicyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageRoutingModule", function () {
      return PrivacyPolicyPageRoutingModule;
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


    var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./privacy-policy.page */
    "./src/app/Users/privacy-policy/privacy-policy.page.ts");

    var routes = [{
      path: '',
      component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyPage"]
    }];

    var PrivacyPolicyPageRoutingModule = function PrivacyPolicyPageRoutingModule() {
      _classCallCheck(this, PrivacyPolicyPageRoutingModule);
    };

    PrivacyPolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrivacyPolicyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Users/privacy-policy/privacy-policy.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Users/privacy-policy/privacy-policy.module.ts ***!
    \***************************************************************/

  /*! exports provided: PrivacyPolicyPageModule */

  /***/
  function srcAppUsersPrivacyPolicyPrivacyPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function () {
      return PrivacyPolicyPageModule;
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


    var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./privacy-policy-routing.module */
    "./src/app/Users/privacy-policy/privacy-policy-routing.module.ts");
    /* harmony import */


    var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./privacy-policy.page */
    "./src/app/Users/privacy-policy/privacy-policy.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var PrivacyPolicyPageModule = function PrivacyPolicyPageModule() {
      _classCallCheck(this, PrivacyPolicyPageModule);
    };

    PrivacyPolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPageRoutingModule"]],
      declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]]
    })], PrivacyPolicyPageModule);
    /***/
  },

  /***/
  "./src/app/Users/privacy-policy/privacy-policy.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/Users/privacy-policy/privacy-policy.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersPrivacyPolicyPrivacyPolicyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #f1d6ad;\n  text-align: center;\n}\n.bg .img_tool_arrow {\n  height: 32px;\n  padding-left: 8px;\n}\n.bg .img_head {\n  width: 75%;\n}\nion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .lbl_title {\n  display: block;\n  font-size: 22px;\n  text-decoration: underline;\n  padding: 0px 0px 16px 0px;\n}\nion-content .lbl_ {\n  display: block;\n  font-size: 18px;\n  padding: 8px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvVXNlcnMvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNFTjtBREFJO0VBQ0UsVUFBQTtBQ0VOO0FERUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNDTjtBREVJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvVXNlcnMvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWQ2YWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5pbWdfdG9vbF9hcnJvdyB7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICB9XG4gICAgLmltZ19oZWFkIHtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcblxuICAgIC5sYmxfdGl0bGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIHBhZGRpbmc6IDBweCAwcHggMTZweCAwcHg7XG4gICAgfVxuXG4gICAgLmxibF8ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfSAgICBcbiAgfSIsIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2YxZDZhZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJnIC5pbWdfdG9vbF9hcnJvdyB7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uYmcgLmltZ19oZWFkIHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5pb24tY29udGVudCAubGJsX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmc6IDBweCAwcHggMTZweCAwcHg7XG59XG5pb24tY29udGVudCAubGJsXyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDhweCAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Users/privacy-policy/privacy-policy.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Users/privacy-policy/privacy-policy.page.ts ***!
    \*************************************************************/

  /*! exports provided: PrivacyPolicyPage */

  /***/
  function srcAppUsersPrivacyPolicyPrivacyPolicyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function () {
      return PrivacyPolicyPage;
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

    var PrivacyPolicyPage = /*#__PURE__*/function () {
      function PrivacyPolicyPage(statusBar, api, navCtrl) {
        _classCallCheck(this, PrivacyPolicyPage);

        this.statusBar = statusBar;
        this.api = api;
        this.navCtrl = navCtrl;
      }

      _createClass(PrivacyPolicyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#f1d6ad');
          this.api.privacy_policy().subscribe(function (resp) {
            _this.policylist = resp;
            _this.tepolicyrm = _this.policylist.data.description;
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack('/tabs/settings');
        }
      }]);

      return PrivacyPolicyPage;
    }();

    PrivacyPolicyPage.ctorParameters = function () {
      return [{
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    PrivacyPolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy-policy',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./privacy-policy.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/privacy-policy/privacy-policy.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./privacy-policy.page.scss */
      "./src/app/Users/privacy-policy/privacy-policy.page.scss"))["default"]]
    })], PrivacyPolicyPage);
    /***/
  }
}]);
//# sourceMappingURL=Users-privacy-policy-privacy-policy-module-es5.js.map