function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Kids-subscribe-kid-free-kid-free-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/subscribe/kid-free/kid-free.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/subscribe/kid-free/kid-free.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKidsSubscribeKidFreeKidFreePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot =\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\"/>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label class=\"lbl_premium\">\n    {{'kid_subscription.lbl_1' | translate }}\n  </ion-label>\n\n  <ion-label class=\"lbl_premium\">\n    {{'kid_subscription.lbl_2' | translate }}\n  </ion-label>\n\n  <!-- <ion-label class=\"lbl_premium\">\n    {{'kid_subscription.lbl_3' | translate }}\n  </ion-label> -->\n\n  <ion-label class=\"lbl_premium\">\n    {{'kid_subscription.lbl_4' | translate }}\n    <img src=\"../../../../assets/images/boy2.png\" class=\"img_boy\"/>\n  </ion-label>\n\n  <ion-label class=\"lbl_premium\">\n    {{'kid_subscription.lbl_5' | translate }}\n  </ion-label>\n \n  <ion-button class=\"btn_premium btn_all\" expand=\"block\" size=\"large\" (click)=\"payment()\">\n    <img src=\"../../../assets/images/premium.png\" class=\"btn_img_premium\"/>\n    {{amount ? amount : '0.0'}} €/{{'reusable.lbl_month' | translate }}\n  </ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Kids/subscribe/kid-free/kid-free-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Kids/subscribe/kid-free/kid-free-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: KidFreePageRoutingModule */

  /***/
  function srcAppKidsSubscribeKidFreeKidFreeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidFreePageRoutingModule", function () {
      return KidFreePageRoutingModule;
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


    var _kid_free_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kid-free.page */
    "./src/app/Kids/subscribe/kid-free/kid-free.page.ts");

    var routes = [{
      path: '',
      component: _kid_free_page__WEBPACK_IMPORTED_MODULE_3__["KidFreePage"]
    }];

    var KidFreePageRoutingModule = function KidFreePageRoutingModule() {
      _classCallCheck(this, KidFreePageRoutingModule);
    };

    KidFreePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], KidFreePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Kids/subscribe/kid-free/kid-free.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/Kids/subscribe/kid-free/kid-free.module.ts ***!
    \************************************************************/

  /*! exports provided: KidFreePageModule */

  /***/
  function srcAppKidsSubscribeKidFreeKidFreeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidFreePageModule", function () {
      return KidFreePageModule;
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


    var _kid_free_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./kid-free-routing.module */
    "./src/app/Kids/subscribe/kid-free/kid-free-routing.module.ts");
    /* harmony import */


    var _kid_free_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./kid-free.page */
    "./src/app/Kids/subscribe/kid-free/kid-free.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var KidFreePageModule = function KidFreePageModule() {
      _classCallCheck(this, KidFreePageModule);
    };

    KidFreePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _kid_free_routing_module__WEBPACK_IMPORTED_MODULE_5__["KidFreePageRoutingModule"]],
      declarations: [_kid_free_page__WEBPACK_IMPORTED_MODULE_6__["KidFreePage"]]
    })], KidFreePageModule);
    /***/
  },

  /***/
  "./src/app/Kids/subscribe/kid-free/kid-free.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/Kids/subscribe/kid-free/kid-free.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKidsSubscribeKidFreeKidFreePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .lbl_premium {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\nion-content .lbl_premium .img_boy {\n  height: 24px;\n}\nion-content .div_img {\n  text-align: center;\n}\nion-content .div_img .img_premium {\n  height: 75px;\n  width: 75px;\n}\nion-content .btn_premium {\n  color: white;\n  width: 90%;\n  margin: 0 auto;\n}\nion-content .btn_premium .btn_img_premium {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL0tpZHMvc3Vic2NyaWJlL2tpZC1mcmVlL2tpZC1mcmVlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvS2lkcy9zdWJzY3JpYmUva2lkLWZyZWUva2lkLWZyZWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtBQ0VKO0FES0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0ZGO0FESUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0FDSEo7QURLSTtFQUNFLFlBQUE7QUNITjtBRE1FO0VBQ0Usa0JBQUE7QUNKSjtBREtJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNITjtBRE1FO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDSko7QURLSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9LaWRzL3N1YnNjcmliZS9raWQtZnJlZS9raWQtZnJlZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gIC5pbWdfdG9vbCB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG59XG4vLyAuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuLy8gICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuLy8gICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gfVxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG5cbiAgLmxibF9wcmVtaXVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLmltZ19ib3kge1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgIH1cbiAgfVxuICAuZGl2X2ltZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5pbWdfcHJlbWl1bSB7XG4gICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICB3aWR0aDogNzVweDtcbiAgICB9XG4gIH1cbiAgLmJ0bl9wcmVtaXVtIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAuYnRuX2ltZ19wcmVtaXVtIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gIH1cbn1cbiIsIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbn1cbi5iZyAuaW1nX3Rvb2wge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmxibF9wcmVtaXVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfcHJlbWl1bSAuaW1nX2JveSB7XG4gIGhlaWdodDogMjRweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmRpdl9pbWcgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogNzVweDtcbn1cbmlvbi1jb250ZW50IC5idG5fcHJlbWl1bSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tY29udGVudCAuYnRuX3ByZW1pdW0gLmJ0bl9pbWdfcHJlbWl1bSB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Kids/subscribe/kid-free/kid-free.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Kids/subscribe/kid-free/kid-free.page.ts ***!
    \**********************************************************/

  /*! exports provided: KidFreePage */

  /***/
  function srcAppKidsSubscribeKidFreeKidFreePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidFreePage", function () {
      return KidFreePage;
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
    /* harmony import */


    var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/stripe/ngx */
    "./node_modules/@ionic-native/stripe/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");

    var KidFreePage = /*#__PURE__*/function () {
      function KidFreePage(statusBar, route, alertCtrl, router, stripe, api, navCtrl) {
        _classCallCheck(this, KidFreePage);

        this.statusBar = statusBar;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.stripe = stripe;
        this.api = api;
        this.navCtrl = navCtrl;
        this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');
      }

      _createClass(KidFreePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
          var reqData = this.route.snapshot.queryParams;
          this.price = reqData.price;
          this.kiddata = localStorage.getItem("addkid");
          this.pacdata = localStorage.getItem("pacdata");
          this.kid = JSON.parse(this.kiddata);
          this.pac = JSON.parse(this.pacdata);
          this.amount = this.pac.price;
        }
      }, {
        key: "payment",
        value: function payment(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

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
                        // id: 'name2-id',
                        // value: 'hello',
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
                            _this.api.showErrorToast('Πληκτρολογήστε 16ψηφία στο πεδίο της κάρτα.');

                            return false;
                          }

                          if (Number(input.month.length) > 2 || Number(input.month.length) < 1) {
                            _this.api.showErrorToast('Πληκτρολογήστε 2 ψήφία!');

                            return false;
                          }

                          if (Number(input.year.length) > 4 || Number(input.year.length) < 4) {
                            _this.api.showErrorToast('Πληκτρολογήστε 4 ψήφία!');

                            return false;
                          }

                          if (Number(input.cvc.length) > 4 || Number(input.cvc.length) < 3) {
                            _this.api.showErrorToast('Πληκτρολογίστε τον 3ψήφιο κωδικό CVC από το πίσω μέρος της κάρτας.');

                            return false;
                          }

                          _this.card = {
                            number: input.number,
                            expMonth: Number(input.month),
                            expYear: Number(input.year),
                            cvc: input.cvc
                          }; // console.log('Confirm Ok', this.card);

                          _this.api.presentLoading();

                          _this.kidd_process = true;

                          _this.stripe.createCardToken(_this.card).then(function (token) {
                            // console.log('stoken', token.id);
                            var body = {
                              kid_id: _this.kid.kid_id,
                              grade_id: _this.kid.grade_id,
                              amount: _this.pac.price,
                              stripeToken: token.id,
                              role_id: localStorage.getItem("role_id"),
                              package_id: _this.pac.id,
                              purchase: 0,
                              packagePurchaseId: localStorage.getItem("packagePurchaseId")
                            };

                            _this.api.gradePurchase(body).subscribe(function (data) {
                              _this.kidd_process = false;

                              _this.api.dismissLoading();

                              if (data.status == 1) {
                                // success part
                                localStorage.setItem("package_status", '1');

                                _this.api.presentToastWithOptions(data['message']);

                                _this.router.navigate(["/tabs/kid-added"]);
                              } else {
                                _this.api.presentToastWithOptions(data['message']);
                              }
                            });
                          })["catch"](function (error) {
                            _this.kidd_process = false;

                            _this.api.dismissLoading();

                            _this.api.presentToastWithOptions(error);
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
        key: "addkid",
        value: function addkid() {
          var _this2 = this;

          var body = {
            kid_id: this.kid.kid_id,
            grade_id: this.kid.grade_id,
            amount: this.pac.price,
            stripeToken: this.strip_token,
            role_id: localStorage.getItem("role_id"),
            package_id: this.pac.id,
            purchase: 1
          };
          this.api.gradePurchase(body).subscribe(function (data) {
            if (data.status == 1) {
              // success part
              _this2.api.presentToastWithOptions(data['message']);
            } else {
              _this2.api.presentToastWithOptions(data['message']);
            }
          }, function (err) {
            _this2.kid_process = false;

            _this2.api.dismissLoading();

            _this2.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack('/tabs/kid-added');
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }]);

      return KidFreePage;
    }();

    KidFreePage.ctorParameters = function () {
      return [{
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__["Stripe"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    KidFreePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-kid-free',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./kid-free.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/subscribe/kid-free/kid-free.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./kid-free.page.scss */
      "./src/app/Kids/subscribe/kid-free/kid-free.page.scss"))["default"]]
    })], KidFreePage);
    /***/
  }
}]);
//# sourceMappingURL=Kids-subscribe-kid-free-kid-free-module-es5.js.map