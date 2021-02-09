function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-forgots-forgot-forgot-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/forgots/forgot/forgot.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/forgots/forgot/forgot.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersForgotsForgotForgotPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"div_logo\">\n    <img src=\"../../assets/images/logoWithUpIcon.png\" class=\"img_logo\"/>\n  </div>\n\n  <ion-label class=\"lbl_\">\n    {{'forgot.label1' | translate}}\n  </ion-label>\n\n  <form [formGroup]=\"forgot_form\" autocomplete=\"off\" class=\"forgot_form\">\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"email\" formControlName=\"email\" placeholder=\"{{'forgot.place_email' | translate}}\" class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"forgot_form.controls.email.hasError('required') && forgot_form.controls.email.touched\">\n      <p class=\"content add-error\">{{'forgot.err_email' | translate}}</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"forgot_form.controls.email.hasError('incorrect') && forgot_form.controls.email.touched\">\n      <p class=\"content add-error\">Email Address Does Not Exists.</p>\n    </ion-item>\n\n    </form>\n\n    <ion-button expand=\"block\" size=\"large\" class=\"btn_footer btn_login\" (click)=\"submit()\">{{'forgot.submit' | translate}}</ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Users/forgots/forgot/forgot-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Users/forgots/forgot/forgot-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ForgotPageRoutingModule */

  /***/
  function srcAppUsersForgotsForgotForgotRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function () {
      return ForgotPageRoutingModule;
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


    var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot.page */
    "./src/app/Users/forgots/forgot/forgot.page.ts");

    var routes = [{
      path: '',
      component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }];

    var ForgotPageRoutingModule = function ForgotPageRoutingModule() {
      _classCallCheck(this, ForgotPageRoutingModule);
    };

    ForgotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgotPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Users/forgots/forgot/forgot.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Users/forgots/forgot/forgot.module.ts ***!
    \*******************************************************/

  /*! exports provided: ForgotPageModule */

  /***/
  function srcAppUsersForgotsForgotForgotModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function () {
      return ForgotPageModule;
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


    var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot-routing.module */
    "./src/app/Users/forgots/forgot/forgot-routing.module.ts");
    /* harmony import */


    var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot.page */
    "./src/app/Users/forgots/forgot/forgot.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ForgotPageModule = function ForgotPageModule() {
      _classCallCheck(this, ForgotPageModule);
    };

    ForgotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"]],
      declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })], ForgotPageModule);
    /***/
  },

  /***/
  "./src/app/Users/forgots/forgot/forgot.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/Users/forgots/forgot/forgot.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersForgotsForgotForgotPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .div_logo {\n  text-align: center;\n  margin: 48px;\n}\nion-content .div_logo .img_logo {\n  width: 200px;\n}\nion-content .lbl_ {\n  text-align: center;\n  display: block;\n  font-size: 18px;\n  line-height: 1.3;\n  width: 75%;\n  margin: 0 auto;\n  padding: 0px 0px 16px 0px;\n}\nion-content .forgot_form {\n  margin-bottom: 14px;\n}\nion-content .btn_login {\n  margin: 0 auto !important;\n  width: 88%;\n}\n.btn_footer {\n  margin: 0px;\n  color: white;\n  text-transform: none;\n  --border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL2ZvcmdvdHMvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiLCJzcmMvYXBwL1VzZXJzL2ZvcmdvdHMvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNDTjtBREFNO0VBQ0UsWUFBQTtBQ0VSO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQ047QURHSTtFQUNFLG1CQUFBO0FDRE47QURHSTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtBQ0ROO0FESUU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL1VzZXJzL2ZvcmdvdHMvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBcbiAgICAuZGl2X2xvZ28ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiA0OHB4O1xuICAgICAgLmltZ19sb2dvIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubGJsXyB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICB3aWR0aDogNzUlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAwcHggMHB4IDE2cHggMHB4O1xuICAgICAgLy8gZm9udC1mYW1pbHk6IENvbWZvcnRhYS1TZW1pQm9sZDtcbiAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZm9yZ290X2Zvcm0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICB9XG4gICAgLmJ0bl9sb2dpbiB7XG4gICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDg4JTtcbiAgICB9XG4gIH1cbiAgLmJ0bl9mb290ZXIge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbiAgIiwiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5pb24tY29udGVudCAuZGl2X2xvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNDhweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfbG9nbyAuaW1nX2xvZ28ge1xuICB3aWR0aDogMjAwcHg7XG59XG5pb24tY29udGVudCAubGJsXyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDBweCAwcHggMTZweCAwcHg7XG59XG5pb24tY29udGVudCAuZm9yZ290X2Zvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9sb2dpbiB7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5idG5fZm9vdGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Users/forgots/forgot/forgot.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Users/forgots/forgot/forgot.page.ts ***!
    \*****************************************************/

  /*! exports provided: ForgotPage */

  /***/
  function srcAppUsersForgotsForgotForgotPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPage", function () {
      return ForgotPage;
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


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");

    var ForgotPage = /*#__PURE__*/function () {
      function ForgotPage(formBuilder, api, router, statusBar) {
        _classCallCheck(this, ForgotPage);

        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.statusBar = statusBar;
        this.forgot_fb();
      }

      _createClass(ForgotPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.forgot_form.reset();
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#FFFFFF');
        }
      }, {
        key: "forgot_fb",
        value: function forgot_fb() {
          this.forgot_form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          for (var v in this.forgot_form.controls) {
            this.forgot_form.controls[v].markAsTouched();
          }

          if (this.forgot_form.valid) {
            this.api.presentLoading();
            this.forgot_process = true;
            var body = {
              email: this.forgot_form.value.email
            };
            this.api.forgot(body).subscribe(function (data) {
              _this.forgot_process = false;

              _this.api.dismissLoading();

              if (data.status == 1) {
                _this.api.presentToastWithOptions(data.message);

                _this.router.navigate(['/forgot-correct']);
              } else {
                _this.api.presentToastWithOptions(data.message);

                _this.router.navigate(['/forgot-wrong']);
              }
            }, function (err) {
              _this.forgot_process = false;

              _this.api.dismissLoading();

              _this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
          }
        }
      }]);

      return ForgotPage;
    }();

    ForgotPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    ForgotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forgot.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/forgots/forgot/forgot.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forgot.page.scss */
      "./src/app/Users/forgots/forgot/forgot.page.scss"))["default"]]
    })], ForgotPage);
    /***/
  }
}]);
//# sourceMappingURL=Users-forgots-forgot-forgot-module-es5.js.map