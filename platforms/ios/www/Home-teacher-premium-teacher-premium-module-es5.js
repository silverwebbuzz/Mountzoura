function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home-teacher-premium-teacher-premium-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/teacher-premium/teacher-premium.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/teacher-premium/teacher-premium.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeTeacherPremiumTeacherPremiumPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/directional.png\" slot =\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\"/>\n    <img src=\"../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label class=\"lbl_premium\">\n    {{'reusable.lbl_premiums' | translate}}\n  </ion-label>\n \n  <div class=\"div_img\">\n  <img src=\"../../../assets/images/premium.png\" class=\"img_premium\"/>\n</div>\n\n  <ion-label class=\"lbl_\">\n    {{'reusable.lbl_home_teacher_access' | translate}}\n  </ion-label>\n\n  <div class=\"div_img_points\">\n    <img *ngIf=\"count == 0\" src=\"../../../assets/images/0-out-of-6.png\" class=\"img_points\"/>\n    <img *ngIf=\"count == 1\" src=\"../../../assets/images/1-out-of-6.png\" class=\"img_points\"/>\n    <img *ngIf=\"count == 2\" src=\"../../../assets/images/2-out-of-6.png\" class=\"img_points\"/>\n    <img *ngIf=\"count == 3\" src=\"../../../assets/images/3-out-of-6.png\" class=\"img_points\"/>\n    <img *ngIf=\"count == 4\" src=\"../../../assets/images/4-out-of-6.png\" class=\"img_points\"/>\n    <img *ngIf=\"count == 5\" src=\"../../../assets/images/5-out-of-6.png\" class=\"img_points\"/>\n    <img *ngIf=\"count >= 6\" src=\"../../../assets/images/6-out-of-6.png\" class=\"img_points\"/>\n  </div>\n\n  <ion-button class=\"btn_premium btn_all\" expand=\"block\" size=\"large\" (click)=\"add()\">\n    <img src=\"../../../assets/images/premium.png\" class=\"btn_img_premium\"/>\n    {{'reusable.btn_add' | translate}}\n  </ion-button>\n\n  <ion-label class=\"lbl_\">\n    {{'reusable.lbl_simple' | translate}}\n  </ion-label>\n\n  <ion-button class=\"btn_premium btn_all\" expand=\"block\" size=\"large\" (click)=\"payment()\">\n    <img src=\"../../../assets/images/premium.png\" class=\"btn_img_premium\" />\n    {{amount ? amount : '0.0'}} €/{{'reusable.lbl_month' | translate }}\n  </ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Home/teacher-premium/teacher-premium-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Home/teacher-premium/teacher-premium-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: TeacherPremiumPageRoutingModule */

  /***/
  function srcAppHomeTeacherPremiumTeacherPremiumRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherPremiumPageRoutingModule", function () {
      return TeacherPremiumPageRoutingModule;
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


    var _teacher_premium_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./teacher-premium.page */
    "./src/app/Home/teacher-premium/teacher-premium.page.ts");

    var routes = [{
      path: '',
      component: _teacher_premium_page__WEBPACK_IMPORTED_MODULE_3__["TeacherPremiumPage"]
    }];

    var TeacherPremiumPageRoutingModule = function TeacherPremiumPageRoutingModule() {
      _classCallCheck(this, TeacherPremiumPageRoutingModule);
    };

    TeacherPremiumPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TeacherPremiumPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Home/teacher-premium/teacher-premium.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Home/teacher-premium/teacher-premium.module.ts ***!
    \****************************************************************/

  /*! exports provided: TeacherPremiumPageModule */

  /***/
  function srcAppHomeTeacherPremiumTeacherPremiumModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherPremiumPageModule", function () {
      return TeacherPremiumPageModule;
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


    var _teacher_premium_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./teacher-premium-routing.module */
    "./src/app/Home/teacher-premium/teacher-premium-routing.module.ts");
    /* harmony import */


    var _teacher_premium_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./teacher-premium.page */
    "./src/app/Home/teacher-premium/teacher-premium.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var TeacherPremiumPageModule = function TeacherPremiumPageModule() {
      _classCallCheck(this, TeacherPremiumPageModule);
    };

    TeacherPremiumPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _teacher_premium_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeacherPremiumPageRoutingModule"]],
      declarations: [_teacher_premium_page__WEBPACK_IMPORTED_MODULE_6__["TeacherPremiumPage"]]
    })], TeacherPremiumPageModule);
    /***/
  },

  /***/
  "./src/app/Home/teacher-premium/teacher-premium.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/Home/teacher-premium/teacher-premium.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeTeacherPremiumTeacherPremiumPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .lbl_premium {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\nion-content .div_img {\n  text-align: center;\n}\nion-content .div_img .img_premium {\n  height: 75px;\n  width: 75px;\n}\nion-content .div_img_points {\n  text-align: center;\n}\nion-content .div_img_points .img_points {\n  width: 75%;\n}\nion-content .lbl_ {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\nion-content .btn_premium {\n  color: white;\n  width: 90%;\n  margin: 0 auto;\n}\nion-content .btn_premium .btn_img_premium {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL0hvbWUvdGVhY2hlci1wcmVtaXVtL3RlYWNoZXItcHJlbWl1bS5wYWdlLnNjc3MiLCJzcmMvYXBwL0hvbWUvdGVhY2hlci1wcmVtaXVtL3RlYWNoZXItcHJlbWl1bS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0FDRVI7QURLQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDRko7QURJSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7QUNIUjtBREtJO0VBQ0ksa0JBQUE7QUNIUjtBRElRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNGWjtBREtJO0VBQ0ksa0JBQUE7QUNIUjtBRElRO0VBQ0UsVUFBQTtBQ0ZWO0FES0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0FDSlI7QURNSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0pSO0FES1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQ0haIiwiZmlsZSI6InNyYy9hcHAvSG9tZS90ZWFjaGVyLXByZW1pdW0vdGVhY2hlci1wcmVtaXVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgLmltZ190b29se1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxufVxuLy8gLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgIH1cbmlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcblxuICAgIC5sYmxfcHJlbWl1bXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLy8gd2lkdGg6IDgwJTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG4gICAgLmRpdl9pbWd7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLmltZ19wcmVtaXVte1xuICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRpdl9pbWdfcG9pbnRze1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5pbWdfcG9pbnRze1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAubGJsX3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLy8gd2lkdGg6IDgwJTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG4gICAgLmJ0bl9wcmVtaXVte1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAuYnRuX2ltZ19wcmVtaXVte1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbn1cbi5iZyAuaW1nX3Rvb2wge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmxibF9wcmVtaXVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmRpdl9pbWcgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogNzVweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfaW1nX3BvaW50cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5kaXZfaW1nX3BvaW50cyAuaW1nX3BvaW50cyB7XG4gIHdpZHRoOiA3NSU7XG59XG5pb24tY29udGVudCAubGJsXyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5pb24tY29udGVudCAuYnRuX3ByZW1pdW0ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9wcmVtaXVtIC5idG5faW1nX3ByZW1pdW0ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Home/teacher-premium/teacher-premium.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Home/teacher-premium/teacher-premium.page.ts ***!
    \**************************************************************/

  /*! exports provided: TeacherPremiumPage */

  /***/
  function srcAppHomeTeacherPremiumTeacherPremiumPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherPremiumPage", function () {
      return TeacherPremiumPage;
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


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/stripe/ngx */
    "./node_modules/@ionic-native/stripe/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var TeacherPremiumPage = /*#__PURE__*/function () {
      function TeacherPremiumPage(statusBar, api, alertCtrl, stripe, router, navCtrl, route) {
        _classCallCheck(this, TeacherPremiumPage);

        this.statusBar = statusBar;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.stripe = stripe;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');
      }

      _createClass(TeacherPremiumPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
          this.amount = localStorage.getItem("amount");
          this.package_id = localStorage.getItem("package_id");
          this.role_id = localStorage.getItem("role_id");
          this.api.countConnectStudent().subscribe(function (resp) {
            _this.countdata = resp;
            _this.count = _this.countdata.count; // console.log("countdata", this.count)
          });
        }
      }, {
        key: "payment",
        value: function payment(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.catcherror = 1;
                    _context.next = 3;
                    return this.alertCtrl.create({
                      cssClass: 'my-custom-class',
                      header: 'Πληρωμή',
                      inputs: [{
                        name: 'number',
                        type: 'number',
                        placeholder: 'Αριθμός κάρτας'
                      }, {
                        name: 'month',
                        type: 'number',
                        placeholder: 'Μήνας'
                      }, {
                        name: 'year',
                        type: 'number',
                        placeholder: 'Έτος'
                      }, {
                        name: 'cvc',
                        type: 'number',
                        placeholder: 'CVC'
                      }],
                      buttons: [{
                        text: 'Ακύρωση',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {// console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Πληρωμή',
                        handler: function handler(input) {
                          // console.log('Confirm Cancel', input);
                          if (Number(input.number.length) > 16 || Number(input.number.length) < 16) {
                            _this2.api.showErrorToast('Πληκτρολογήστε 16ψηφία στο πεδίο της κάρτα.');

                            return false;
                          }

                          if (Number(input.month.length) > 2 || Number(input.month.length) < 1) {
                            _this2.api.showErrorToast('Πληκτρολογήστε 2 ψήφία!');

                            return false;
                          }

                          if (Number(input.year.length) > 4 || Number(input.year.length) < 4) {
                            _this2.api.showErrorToast('Πληκτρολογήστε 4 ψήφία!');

                            return false;
                          }

                          if (Number(input.cvc.length) > 4 || Number(input.cvc.length) < 3) {
                            _this2.api.showErrorToast('Πληκτρολογίστε τον 3ψήφιο κωδικό CVC από το πίσω μέρος της κάρτας.');

                            return false;
                          }

                          _this2.card = {
                            number: input.number,
                            expMonth: Number(input.month),
                            expYear: Number(input.year),
                            cvc: input.cvc
                          }; // console.log('Confirm Ok', this.card);

                          _this2.api.presentLoading();

                          _this2.kidd_process = true;

                          _this2.stripe.createCardToken(_this2.card).then(function (token) {
                            // console.log('stoken', token.id);
                            var body = {
                              amount: _this2.amount,
                              stripeToken: token.id,
                              role_id: _this2.role_id,
                              package_id: _this2.package_id,
                              packagePurchaseId: localStorage.getItem("packagePurchaseId")
                            };

                            _this2.api.teacherPackagePurchase(body).subscribe(function (data) {
                              _this2.kidd_process = false;

                              _this2.api.dismissLoading();

                              if (data.status == 1) {
                                // success part
                                localStorage.setItem("package_status", '1');

                                _this2.api.presentToastWithOptions(data['message']);

                                _this2.router.navigate(['/tabs/student-added']);
                              } else {
                                _this2.api.presentToastWithOptions(data['message']);
                              }
                            });
                          })["catch"](function (error) {
                            _this2.kidd_process = false;

                            _this2.api.dismissLoading();

                            _this2.api.presentToastWithOptions(error);
                          });
                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }, {
        key: "add",
        value: function add() {
          this.router.navigate(["/tabs/student-add"]);
        }
      }, {
        key: "back",
        value: function back() {
          var reqData = this.route.snapshot.queryParams;

          if (localStorage.getItem("pdf_quize") && localStorage.getItem("pdf_id")) {
            this.navCtrl.navigateBack(['/tabs/pdf'], {
              queryParams: {
                pdf_id: localStorage.getItem("pdf_id")
              }
            });
          } else if (localStorage.getItem("video_quize") && localStorage.getItem("video_id")) {
            this.navCtrl.navigateBack(['/tabs/video'], {
              queryParams: {
                video_id: localStorage.getItem("video_id")
              }
            });
          } else if (localStorage.getItem("t_search") || localStorage.getItem("t_contain") || localStorage.getItem("k_contain") || localStorage.getItem("k_search")) {
            this.navCtrl.navigateBack(['/tabs/quiz-search']);
          } else if (reqData.video) {
            this.router.navigate(['/tabs/videos']);
          } else if (reqData.pdf) {
            this.router.navigate(['/tabs/pdfs']);
          } else if (localStorage.getItem("t_quize_contant")) {
            this.navCtrl.navigateBack(['/tabs/home-teacher']);
          } else if (localStorage.getItem("t_quize_search")) {
            this.navCtrl.navigateBack(['/tabs/teachers-quiz-list']);
          } else if (localStorage.getItem("t_pdf_contant")) {
            this.navCtrl.navigateBack(['/tabs/home-teacher']);
          } else if (localStorage.getItem("t_video_contant")) {
            this.navCtrl.navigateBack(['/tabs/home-teacher']);
          } else if (reqData.l_id, reqData.c_id, reqData.pdf_search) {
            this.router.navigate(['/tabs/pdf-search'], {
              queryParams: {
                l_id: reqData.l_id,
                c_id: reqData.c_id
              }
            });
          } else if (reqData.l_id, reqData.c_id, reqData.g_id, reqData.pdf_search) {
            this.router.navigate(['/tabs/pdf-search'], {
              queryParams: {
                l_id: reqData.l_id,
                c_id: reqData.c_id,
                g_id: reqData.g_id
              }
            });
          } else if (reqData.l_id, reqData.c_id, reqData.video_search) {
            this.router.navigate(['/tabs/video-search'], {
              queryParams: {
                l_id: reqData.l_id,
                c_id: reqData.c_id
              }
            });
          } else if (reqData.l_id, reqData.c_id, reqData.g_id, reqData.video_search) {
            this.router.navigate(['/tabs/video-search'], {
              queryParams: {
                l_id: reqData.l_id,
                c_id: reqData.c_id,
                g_id: reqData.g_id
              }
            });
          } else if (localStorage.getItem("homework")) {
            this.navCtrl.navigateBack(['/tabs/kid-homework']);
          } else if (localStorage.getItem("notification_data")) {
            this.navCtrl.navigateBack(['/tabs/notifications']);
          } else {
            this.navCtrl.navigateBack(['/tabs/home-teacher']);
          } // this.navCtrl.navigateBack('/tabs/home-teacher');

        }
      }]);

      return TeacherPremiumPage;
    }();

    TeacherPremiumPage.ctorParameters = function () {
      return [{
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__["Stripe"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    TeacherPremiumPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teacher-premium',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./teacher-premium.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/teacher-premium/teacher-premium.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./teacher-premium.page.scss */
      "./src/app/Home/teacher-premium/teacher-premium.page.scss"))["default"]]
    })], TeacherPremiumPage);
    /***/
  }
}]);
//# sourceMappingURL=Home-teacher-premium-teacher-premium-module-es5.js.map