function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Kids-subscribe-kid-premium-kid-premium-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/subscribe/kid-premium/kid-premium.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/subscribe/kid-premium/kid-premium.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKidsSubscribeKidPremiumKidPremiumPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot =\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\"/>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label class=\"lbl_premium\">\n    {{'kid_subscription.lbl_1' | translate }}\n  </ion-label>\n\n  <ion-label class=\"lbl_premium\">\n    {{'kid_subscription.lbl_6' | translate }}\n  </ion-label>\n\n  <!-- <ion-label class=\"lbl_premium\">\n    {{'kid_subscription.lbl_3' | translate }}\n  </ion-label> -->\n\n  <ion-label class=\"lbl_premium\">\n    {{'kid_subscription.lbl_4' | translate }}\n    <img src=\"../../../../assets/images/boy2.png\" class=\"img_boy\"/>\n  </ion-label>\n \n  <div class=\"div_img\">\n  <img src=\"../../../assets/images/premium.png\" class=\"img_premium\"/>\n</div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Kids/subscribe/kid-premium/kid-premium-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Kids/subscribe/kid-premium/kid-premium-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: KidPremiumPageRoutingModule */

  /***/
  function srcAppKidsSubscribeKidPremiumKidPremiumRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidPremiumPageRoutingModule", function () {
      return KidPremiumPageRoutingModule;
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


    var _kid_premium_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kid-premium.page */
    "./src/app/Kids/subscribe/kid-premium/kid-premium.page.ts");

    var routes = [{
      path: '',
      component: _kid_premium_page__WEBPACK_IMPORTED_MODULE_3__["KidPremiumPage"]
    }];

    var KidPremiumPageRoutingModule = function KidPremiumPageRoutingModule() {
      _classCallCheck(this, KidPremiumPageRoutingModule);
    };

    KidPremiumPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], KidPremiumPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Kids/subscribe/kid-premium/kid-premium.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Kids/subscribe/kid-premium/kid-premium.module.ts ***!
    \******************************************************************/

  /*! exports provided: KidPremiumPageModule */

  /***/
  function srcAppKidsSubscribeKidPremiumKidPremiumModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidPremiumPageModule", function () {
      return KidPremiumPageModule;
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


    var _kid_premium_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./kid-premium-routing.module */
    "./src/app/Kids/subscribe/kid-premium/kid-premium-routing.module.ts");
    /* harmony import */


    var _kid_premium_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./kid-premium.page */
    "./src/app/Kids/subscribe/kid-premium/kid-premium.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var KidPremiumPageModule = function KidPremiumPageModule() {
      _classCallCheck(this, KidPremiumPageModule);
    };

    KidPremiumPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _kid_premium_routing_module__WEBPACK_IMPORTED_MODULE_5__["KidPremiumPageRoutingModule"]],
      declarations: [_kid_premium_page__WEBPACK_IMPORTED_MODULE_6__["KidPremiumPage"]]
    })], KidPremiumPageModule);
    /***/
  },

  /***/
  "./src/app/Kids/subscribe/kid-premium/kid-premium.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/Kids/subscribe/kid-premium/kid-premium.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKidsSubscribeKidPremiumKidPremiumPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .lbl_premium {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\nion-content .lbl_premium .img_boy {\n  height: 24px;\n}\nion-content .div_img {\n  text-align: center;\n  padding: 16px 0px;\n}\nion-content .div_img .img_premium {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL0tpZHMvc3Vic2NyaWJlL2tpZC1wcmVtaXVtL2tpZC1wcmVtaXVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvS2lkcy9zdWJzY3JpYmUva2lkLXByZW1pdW0va2lkLXByZW1pdW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FES0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0ZKO0FESUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0FDSFI7QURLUTtFQUNJLFlBQUE7QUNIWjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0pSO0FES1E7RUFDSSxhQUFBO0FDSFoiLCJmaWxlIjoic3JjL2FwcC9LaWRzL3N1YnNjcmliZS9raWQtcHJlbWl1bS9raWQtcHJlbWl1bS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAgIC5pbWdfdG9vbHtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgIH1cbn1cbi8vIC5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHggIWltcG9ydGFudDtcbi8vICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gICB9XG5pb24tY29udGVudHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG5cbiAgICAubGJsX3ByZW1pdW17XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIHdpZHRoOiA4MCU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAgLmltZ19ib3l7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRpdl9pbWd7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG4gICAgICAgIC5pbWdfcHJlbWl1bXtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAvLyB3aWR0aDogNzVweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuYmcge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG59XG4uYmcgLmltZ190b29sIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfcHJlbWl1bSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5pb24tY29udGVudCAubGJsX3ByZW1pdW0gLmltZ19ib3kge1xuICBoZWlnaHQ6IDI0cHg7XG59XG5pb24tY29udGVudCAuZGl2X2ltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCAwcHg7XG59XG5pb24tY29udGVudCAuZGl2X2ltZyAuaW1nX3ByZW1pdW0ge1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Kids/subscribe/kid-premium/kid-premium.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Kids/subscribe/kid-premium/kid-premium.page.ts ***!
    \****************************************************************/

  /*! exports provided: KidPremiumPage */

  /***/
  function srcAppKidsSubscribeKidPremiumKidPremiumPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidPremiumPage", function () {
      return KidPremiumPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var KidPremiumPage = /*#__PURE__*/function () {
      function KidPremiumPage(statusBar, router, navCtrl) {
        _classCallCheck(this, KidPremiumPage);

        this.statusBar = statusBar;
        this.router = router;
        this.navCtrl = navCtrl;
      }

      _createClass(KidPremiumPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack('/tabs/kid-added');
        }
      }]);

      return KidPremiumPage;
    }();

    KidPremiumPage.ctorParameters = function () {
      return [{
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    KidPremiumPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-kid-premium',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./kid-premium.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/subscribe/kid-premium/kid-premium.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./kid-premium.page.scss */
      "./src/app/Kids/subscribe/kid-premium/kid-premium.page.scss"))["default"]]
    })], KidPremiumPage);
    /***/
  }
}]);
//# sourceMappingURL=Kids-subscribe-kid-premium-kid-premium-module-es5.js.map