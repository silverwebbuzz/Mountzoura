function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Kids-profile-kid-premium-profile-kid-premium-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKidsProfileKidPremiumProfileKidPremiumProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot =\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\"/>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"div_img\">\n    <img  *ngIf=\"gender == 'boy'\" src=\"../../../../assets/images/profile-premium.png\" class=\"img_person\"/>\n    <img  *ngIf=\"gender == 'girl'\" src=\"../../../../assets/images/girl-premium.png\" class=\"img_person\"/>\n    <!-- <img src=\"../../../../assets/images/premium.png\" class=\"img_prem\"/> -->\n  </div>\n\n  <form [formGroup]=\"profile_form\" autocomplete=\"off\" class=\"form_all\">\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"text\" formControlName=\"name\" placeholder=\"{{'reusable.place_name' | translate }}\" class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.name.hasError('required') && profile_form.controls.name.touched\">\n      <p class=\"content add-error\">{{'reusable.err_name' | translate}}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"text\" formControlName=\"grade\" placeholder=\"A` {{'reusable.grade' | translate }}\" class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.grade.hasError('required') && profile_form.controls.grade.touched\">\n      <p class=\"content add-error\">{{'reusable.err_grade' | translate }}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"text\" formControlName=\"id\" placeholder=\"#000100\" class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.id.hasError('required') && profile_form.controls.id.touched\">\n      <p class=\"content add-error\">{{'reusable.err_kid_profile_id' | translate }}</p>\n    </ion-item>\n\n    </form>\n\n    <ion-button expand=\"block\" size=\"large\" class=\"btn_play btn_all\" (click)=\"home_kid()\">{{'single.btn_play' | translate }}</ion-button>\n   <br>\n    <ion-button expand=\"block\" size=\"large\" class=\"btn_play btn_all\" (click)='homework()'>{{'reusable.btn_work' | translate}}</ion-button>\n\n    <ion-label class=\"lbl_cancel\" (click)=\"subscription()\">{{'single.lbl_cancel' | translate }}</ion-label>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Kids/profile/kid-premium-profile/kid-premium-profile-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/Kids/profile/kid-premium-profile/kid-premium-profile-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: KidPremiumProfilePageRoutingModule */

  /***/
  function srcAppKidsProfileKidPremiumProfileKidPremiumProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidPremiumProfilePageRoutingModule", function () {
      return KidPremiumProfilePageRoutingModule;
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


    var _kid_premium_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kid-premium-profile.page */
    "./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.page.ts");

    var routes = [{
      path: '',
      component: _kid_premium_profile_page__WEBPACK_IMPORTED_MODULE_3__["KidPremiumProfilePage"]
    }];

    var KidPremiumProfilePageRoutingModule = function KidPremiumProfilePageRoutingModule() {
      _classCallCheck(this, KidPremiumProfilePageRoutingModule);
    };

    KidPremiumProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], KidPremiumProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.module.ts ***!
    \********************************************************************************/

  /*! exports provided: KidPremiumProfilePageModule */

  /***/
  function srcAppKidsProfileKidPremiumProfileKidPremiumProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidPremiumProfilePageModule", function () {
      return KidPremiumProfilePageModule;
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


    var _kid_premium_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./kid-premium-profile-routing.module */
    "./src/app/Kids/profile/kid-premium-profile/kid-premium-profile-routing.module.ts");
    /* harmony import */


    var _kid_premium_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./kid-premium-profile.page */
    "./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var KidPremiumProfilePageModule = function KidPremiumProfilePageModule() {
      _classCallCheck(this, KidPremiumProfilePageModule);
    };

    KidPremiumProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _kid_premium_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["KidPremiumProfilePageRoutingModule"]],
      declarations: [_kid_premium_profile_page__WEBPACK_IMPORTED_MODULE_6__["KidPremiumProfilePage"]]
    })], KidPremiumProfilePageModule);
    /***/
  },

  /***/
  "./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKidsProfileKidPremiumProfileKidPremiumProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .div_img {\n  text-align: center;\n}\nion-content .div_img .img_person {\n  height: 100px;\n}\nion-content .div_img .img_prem {\n  height: 38px;\n}\nion-content .btn_play {\n  color: white;\n  margin-left: 16px;\n  margin-right: 16px;\n}\nion-content .lbl_cancel {\n  display: block;\n  font-size: 16px;\n  text-decoration: underline;\n  text-align: center;\n  padding: 32px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL0tpZHMvcHJvZmlsZS9raWQtcHJlbWl1bS1wcm9maWxlL2tpZC1wcmVtaXVtLXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9LaWRzL3Byb2ZpbGUva2lkLXByZW1pdW0tcHJvZmlsZS9raWQtcHJlbWl1bS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBREtBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNGSjtBRElJO0VBQ0ksa0JBQUE7QUNGUjtBREdRO0VBQ0ksYUFBQTtBQ0RaO0FER1E7RUFDSSxZQUFBO0FDRFo7QURLSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSFI7QURLSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9LaWRzL3Byb2ZpbGUva2lkLXByZW1pdW0tcHJvZmlsZS9raWQtcHJlbWl1bS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgLmltZ190b29se1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxufVxuLy8gLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgIH1cbmlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcblxuICAgIC5kaXZfaW1ne1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5pbWdfcGVyc29ue1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nX3ByZW17XG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJ0bl9wbGF5e1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIC5sYmxfY2FuY2Vse1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAzMnB4IDE2cHg7XG4gICAgfVxufSIsIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbn1cbi5iZyAuaW1nX3Rvb2wge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZGl2X2ltZyAuaW1nX3BlcnNvbiB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5pb24tY29udGVudCAuZGl2X2ltZyAuaW1nX3ByZW0ge1xuICBoZWlnaHQ6IDM4cHg7XG59XG5pb24tY29udGVudCAuYnRuX3BsYXkge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5pb24tY29udGVudCAubGJsX2NhbmNlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMycHggMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.page.ts ***!
    \******************************************************************************/

  /*! exports provided: KidPremiumProfilePage */

  /***/
  function srcAppKidsProfileKidPremiumProfileKidPremiumProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidPremiumProfilePage", function () {
      return KidPremiumProfilePage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var KidPremiumProfilePage = /*#__PURE__*/function () {
      function KidPremiumProfilePage(formBuilder, router, navCtrl, route, api, alertCtrl, statusBar) {
        _classCallCheck(this, KidPremiumProfilePage);

        this.formBuilder = formBuilder;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.profile_fb();
      }

      _createClass(KidPremiumProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
          var reqData = this.route.snapshot.queryParams;
          this.api.KidData(reqData.kid_id).subscribe(function (resp) {
            _this.kiddata = resp;
            _this.kidData = _this.kiddata.data;
            _this.gender = _this.kiddata.data.gender;
            localStorage.setItem("kid_id", _this.kiddata.data.kid_id);
            localStorage.setItem("grade_id", _this.kiddata.data.grade_id);
            localStorage.setItem("package_status", _this.kiddata.package_status);
            localStorage.setItem("amount", _this.kiddata.package_data.price);
            localStorage.setItem("package_id", _this.kiddata.package_data.id);
            localStorage.setItem("packagePurchaseId", _this.kiddata.packagePurchaseId);

            _this.profile_form.patchValue({
              name: _this.kidData.name,
              grade: _this.kidData.gradeName,
              id: _this.kidData.kid_id
            });
          });
        }
      }, {
        key: "profile_fb",
        value: function profile_fb() {
          this.profile_form = this.formBuilder.group({
            name: [{
              value: '',
              disabled: true
            }],
            grade: [{
              value: '',
              disabled: true
            }],
            id: [{
              value: '',
              disabled: true
            }]
          });
        } // subscription(){
        //   this.api.presentLoading();
        //     this.kid_process = true;
        //     let reqData = this.route.snapshot.queryParams;
        //     this.api.cancelSubscription(reqData.kid_id).subscribe(
        //       (data: any) => {
        //         this.kid_process = false;
        //         this.api.dismissLoading();
        //         if (data.status == 1) {
        //           // success part
        //           this.api.presentToastWithOptions(data['message']);
        //           this.navCtrl.navigateBack(['/tabs/kid-added']);
        //         } else {
        //           this.api.presentToastWithOptions(data['message']);
        //         }
        //       },
        //       err => {
        //         this.kid_process = false;
        //         this.api.dismissLoading();
        //         this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
        //       }
        //     );
        // }

      }, {
        key: "subscription",
        value: function subscription() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Επιβεβαίωση',
                      message: 'Είστε βέβαιοι ότι θέλετε να ακυρώσετε την συνδρομή;',
                      buttons: [{
                        text: 'Ακύρωση',
                        role: 'cancel'
                      }, {
                        text: 'ΝΑΙ',
                        handler: function handler() {
                          var reqData = _this2.route.snapshot.queryParams;

                          _this2.api.cancelSubscription(reqData.kid_id).subscribe(function (data) {
                            _this2.kid_process = false;

                            _this2.api.dismissLoading();

                            if (data.status == 1) {
                              // success part
                              localStorage.setItem("package_status", '0');

                              _this2.api.presentToastWithOptions(data['message']);

                              _this2.navCtrl.navigateBack(['/tabs/kid-added']);
                            } else {
                              _this2.api.presentToastWithOptions(data['message']);
                            }
                          }, function (err) {
                            _this2.kid_process = false;

                            _this2.api.dismissLoading();

                            _this2.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "submit",
        value: function submit() {
          for (var v in this.profile_form.controls) {
            this.profile_form.controls[v].markAsTouched();
          }

          if (this.profile_form.valid) {
            var body = {
              name: this.profile_form.value.name,
              grade: this.profile_form.value.grade,
              id: this.profile_form.value.id
            };
          }
        }
      }, {
        key: "home_kid",
        value: function home_kid() {
          this.router.navigate(["/tabs/home"]);
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack(['/tabs/kid-added']);
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }, {
        key: "homework",
        value: function homework() {
          this.router.navigate(['/tabs/kid-homework']);
        }
      }]);

      return KidPremiumProfilePage;
    }();

    KidPremiumProfilePage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }];
    };

    KidPremiumProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-kid-premium-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./kid-premium-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./kid-premium-profile.page.scss */
      "./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.page.scss"))["default"]]
    })], KidPremiumProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=Kids-profile-kid-premium-profile-kid-premium-profile-module-es5.js.map