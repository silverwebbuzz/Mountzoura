function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-label class=\"lbl_lang\" *ngIf=\"lan == 0\" >\n  {{'intro1.select' | translate }}\n  <select #langSelect (change)=\"lanservice.changeLanguage(langSelect.value)\" class=\"option\">\n    <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">\n      {{ lang }}</option>\n  </select>\n</ion-label>\n\n<ion-content>\n\n  <div class=\"div_logo\">\n    <img src=\"../../assets/images/logoWithUpIcon.png\" class=\"img_logo\" />\n  </div>\n\n  <form [formGroup]=\"login_form\" autocomplete=\"off\" class=\"login_form\">\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"email\" formControlName=\"email\" placeholder=\"{{'login.place_email' | translate }}\"\n        class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"login_form.controls.email.hasError('required') && login_form.controls.email.touched\">\n      <p class=\"content add-error\">{{'login.err_email' | translate }}</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"login_form.controls.email.hasError('pattern') && login_form.controls.email.touched\">\n      <p class=\"content\">{{'register.email_valid' | translate}}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add\">\n      <ion-input type=\"password\" formControlName=\"password\" placeholder=\"{{'login.place_pass' | translate }}\"\n        class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"login_form.controls.password.hasError('required') && login_form.controls.password.touched\">\n      <p class=\"content add-error\">{{'login.err_pass' | translate }}</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"login_form.controls.password.hasError('incorrect') && login_form.controls.password.touched\">\n      <p class=\"content add-error\">{{'login.err_in_pass' | translate }}</p>\n    </ion-item>\n\n  </form>\n\n  <ion-button expand=\"block\" size=\"large\" class=\"btn_footer btn_login\" (click)=\"login()\">{{'login.login' | translate }}\n  </ion-button>\n\n  <!-- <div class=\"div_main_or\">\n    <div class=\"div_or\">\n      <span>\n        {{'login.or' | translate }}\n      </span>\n    </div>\n  </div> -->\n\n  <!-- <div class=\"div_social_btn\">\n    <ion-row class=\"row_fb\">\n      <ion-col size=\"2\" class=\"col_fb\">\n        <img src=\"../../assets/images/fb.png\" class=\"img_fb\" />\n      </ion-col>\n      <ion-col size=\"10\" class=\"col_fb\">\n        <ion-label class=\"lbl_fb\" (click)=\"loginWithFB()\">{{'login.facebook' | translate }}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row_google\">\n      <ion-col size=\"2\" class=\"col_google\">\n        <img src=\"../../assets/images/google.png\" class=\"img_google\" />\n      </ion-col>\n      <ion-col size=\"10\" class=\"col_google\">\n        <ion-label class=\"lbl_google\" (click)=\"loginUser()\">{{'login.google' | translate }}</ion-label>\n      </ion-col>\n    </ion-row>\n  </div> -->\n\n  <ion-label class=\"lbl_forgot\" (click)=\"forgot()\">{{'login.forgot_pass' | translate }}</ion-label>\n\n\n  <div class=\"div_empty\"></div>\n\n  <!-- <div class=\"footer_img\">\n    <img src=\"../../assets/images/profile.png\" class=\"img_profile_footer\">\n  </div> -->\n  <div class=\"boy_img\" *ngIf=\"isKeyboardHide\"> \n    <img src=\"../../assets/images/profile.png\" class=\"img_boy\">\n  </div>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" size=\"large\" class=\"btn_footer\" (click)=\"register()\">{{'login.new_account' | translate }}\n  </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/Users/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Users/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppUsersLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/Users/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Users/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/Users/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppUsersLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/Users/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/Users/login/login.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/Users/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/Users/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".lbl_lang {\n  padding: 16px;\n  text-align: center;\n  font-size: 18px;\n}\n.lbl_lang .option {\n  margin-left: 10px;\n}\nion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .div_logo {\n  text-align: center;\n  margin: 32px;\n}\nion-content .div_logo .img_logo {\n  width: 200px;\n}\nion-content .login_form {\n  margin-bottom: 14px;\n}\nion-content .btn_login {\n  margin: 0 auto !important;\n  width: 88%;\n  color: white;\n  text-transform: none;\n  --border-radius: 8px;\n}\nion-content .div_main_or {\n  overflow: hidden;\n  margin-bottom: 8px;\n  margin-top: 14px;\n  text-align: center;\n}\nion-content .div_or {\n  position: relative;\n  display: inline-block;\n}\nion-content .div_or span {\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n  border: 1.5px solid var(--ion-color-primary);\n  color: black;\n  display: inline-block;\n  z-index: 9;\n  vertical-align: middle;\n  line-height: 2.8;\n  font-size: 16px;\n}\nion-content .div_social_btn {\n  margin: 14px 0px;\n}\nion-content .div_social_btn .row_fb {\n  background: #1976d2;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n  width: 88%;\n  margin: auto;\n  border-bottom: 0.5px solid #fff;\n}\nion-content .div_social_btn .row_fb .col_fb {\n  margin: auto;\n}\nion-content .div_social_btn .row_fb .col_fb .img_fb {\n  height: 28px;\n}\nion-content .div_social_btn .row_fb .col_fb .lbl_fb {\n  color: white;\n  font-size: 16px;\n}\nion-content .div_social_btn .row_google {\n  background: #ed8551;\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  width: 88%;\n  margin: auto;\n  border-top: 0.5px solid #fff;\n}\nion-content .div_social_btn .row_google .col_google {\n  margin: auto;\n}\nion-content .div_social_btn .row_google .col_google .img_google {\n  height: 28px;\n}\nion-content .div_social_btn .row_google .col_google .lbl_google {\n  color: white;\n  font-size: 16px;\n}\nion-content .lbl_forgot {\n  display: block;\n  text-align: center;\n  font-size: 18px;\n  text-decoration: underline;\n  font-family: Comfortaa-SemiBold;\n  margin: 16px 0px;\n}\nion-content .div_empty {\n  height: 30px;\n}\nion-footer {\n  position: fixed;\n  bottom: 0;\n}\nion-footer .btn_footer {\n  margin: 0px;\n  color: white;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvVXNlcnMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FERUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNDTjtBREFNO0VBQ0UsWUFBQTtBQ0VSO0FEQ0k7RUFDRSxtQkFBQTtBQ0NOO0FEQ0k7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ0NOO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NOO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDQ047QURDSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NOO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FEQU07RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FDRVI7QUREUTtFQUNFLFlBQUE7QUNHVjtBREZVO0VBQ0UsWUFBQTtBQ0laO0FERlU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0laO0FEQU07RUFDRSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDRVI7QUREUTtFQUNFLFlBQUE7QUNHVjtBREZVO0VBQ0UsWUFBQTtBQ0laO0FERlU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0laO0FEQ0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ047QURDSTtFQUNFLFlBQUE7QUNDTjtBRFVFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUNQSjtBRFFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ05OIiwiZmlsZSI6InNyYy9hcHAvVXNlcnMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxibF9sYW5ne1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgLm9wdGlvbntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBcbiAgICAuZGl2X2xvZ28ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAzMnB4O1xuICAgICAgLmltZ19sb2dvIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubG9naW5fZm9ybSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIH1cbiAgICAuYnRuX2xvZ2luIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogODglO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG4gICAgLmRpdl9tYWluX29yIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuZGl2X29yIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmRpdl9vciBzcGFuIHtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB6LWluZGV4OiA5O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5kaXZfc29jaWFsX2J0biB7XG4gICAgICBtYXJnaW46IDE0cHggMHB4O1xuICAgICAgLnJvd19mYiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxOTc2ZDI7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnB4O1xuICAgICAgICB3aWR0aDogODglO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNmZmY7XG4gICAgICAgIC5jb2xfZmIge1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAuaW1nX2ZiIHtcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxibF9mYiB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucm93X2dvb2dsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZDg1NTE7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnB4O1xuICAgICAgICB3aWR0aDogODglO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICNmZmY7XG4gICAgICAgIC5jb2xfZ29vZ2xlIHtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgLmltZ19nb29nbGUge1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGJsX2dvb2dsZSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5sYmxfZm9yZ290IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBmb250LWZhbWlseTogQ29tZm9ydGFhLVNlbWlCb2xkO1xuICAgICAgbWFyZ2luOiAxNnB4IDBweDtcbiAgICB9XG4gICAgLmRpdl9lbXB0eSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gIC8vIC5pbWdfcHJvZmlsZV9mb290ZXJ7XG4gIC8vICAgaGVpZ2h0OiAxMjVweDtcbiAgLy8gICB3aWR0aDogMTI1cHg7XG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgIGJvdHRvbTogNDhweDtcbiAgLy8gICBsZWZ0OiA4cHg7XG4gIC8vICAgLy8gei1pbmRleDogOTk5O1xuICAvLyB9XG4gIGlvbi1mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgLmJ0bl9mb290ZXIge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH0iLCIubGJsX2xhbmcge1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5sYmxfbGFuZyAub3B0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDMycHg7XG59XG5pb24tY29udGVudCAuZGl2X2xvZ28gLmltZ19sb2dvIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuaW9uLWNvbnRlbnQgLmxvZ2luX2Zvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9sb2dpbiB7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4OCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9tYWluX29yIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZGl2X29yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tY29udGVudCAuZGl2X29yIHNwYW4ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgei1pbmRleDogOTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDIuODtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9zb2NpYWxfYnRuIHtcbiAgbWFyZ2luOiAxNHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfc29jaWFsX2J0biAucm93X2ZiIHtcbiAgYmFja2dyb3VuZDogIzE5NzZkMjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cHg7XG4gIHdpZHRoOiA4OCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2ZmZjtcbn1cbmlvbi1jb250ZW50IC5kaXZfc29jaWFsX2J0biAucm93X2ZiIC5jb2xfZmIge1xuICBtYXJnaW46IGF1dG87XG59XG5pb24tY29udGVudCAuZGl2X3NvY2lhbF9idG4gLnJvd19mYiAuY29sX2ZiIC5pbWdfZmIge1xuICBoZWlnaHQ6IDI4cHg7XG59XG5pb24tY29udGVudCAuZGl2X3NvY2lhbF9idG4gLnJvd19mYiAuY29sX2ZiIC5sYmxfZmIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfc29jaWFsX2J0biAucm93X2dvb2dsZSB7XG4gIGJhY2tncm91bmQ6ICNlZDg1NTE7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnB4O1xuICB3aWR0aDogODglO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICNmZmY7XG59XG5pb24tY29udGVudCAuZGl2X3NvY2lhbF9idG4gLnJvd19nb29nbGUgLmNvbF9nb29nbGUge1xuICBtYXJnaW46IGF1dG87XG59XG5pb24tY29udGVudCAuZGl2X3NvY2lhbF9idG4gLnJvd19nb29nbGUgLmNvbF9nb29nbGUgLmltZ19nb29nbGUge1xuICBoZWlnaHQ6IDI4cHg7XG59XG5pb24tY29udGVudCAuZGl2X3NvY2lhbF9idG4gLnJvd19nb29nbGUgLmNvbF9nb29nbGUgLmxibF9nb29nbGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfZm9yZ290IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYS1TZW1pQm9sZDtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfZW1wdHkge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmlvbi1mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbn1cbmlvbi1mb290ZXIgLmJ0bl9mb290ZXIge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Users/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/Users/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppUsersLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_global_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/global/language.service */
    "./src/app/global/language.service.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");

    var firebaseConfig = {
      apiKey: "AIzaSyC0PGqA6iLaDczJ6JqrQjvwUqohM9ubYg0",
      authDomain: "mountozoura-b2c8e.firebaseapp.com",
      databaseURL: "https://mountozoura-b2c8e.firebaseio.com",
      projectId: "mountozoura-b2c8e",
      storageBucket: "mountozoura-b2c8e.appspot.com",
      messagingSenderId: "492204006086",
      appId: "1:492204006086:web:5e452d553082a9a12c55c7",
      measurementId: "G-JN019F27KG"
    }; // Initialize Firebase

    firebase_app__WEBPACK_IMPORTED_MODULE_8__["initializeApp"](firebaseConfig);

    var LoginPage = /*#__PURE__*/function () {
      // public languagePreference: string = StorageService.getItem('prefered-language') || 'en';
      function LoginPage(facebook, formBuilder, api, router, fireAuth, statusBar, navCtrl, translate, lanservice, platform, oneSignal, splashScreen, alertCtrl, keyboard) {
        _classCallCheck(this, LoginPage);

        this.facebook = facebook;
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.fireAuth = fireAuth;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.lanservice = lanservice;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.keyboard = keyboard;
        this.userData = null;
        this.handler = null;
        this.lan = 1;
        this.isKeyboardHide = true;
        this.login_fb();
        platform.ready().then(function () {
          statusBar.styleDefault();
          splashScreen.hide(); // this.initializePush();
        });
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.login_form.reset();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.login_form.reset();
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#FFFFFF');
          this.keyboard.onKeyboardWillShow().subscribe(function () {
            _this.isKeyboardHide = false; // console.log('SHOWK');
          });
          this.keyboard.onKeyboardWillHide().subscribe(function () {
            _this.isKeyboardHide = true; //  console.log('HIDEK');
          });
        }
      }, {
        key: "login_fb",
        value: function login_fb() {
          this.login_form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "loginWithFB",
        value: function loginWithFB() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Select Role!',
                      inputs: [{
                        name: 'parent',
                        type: 'radio',
                        label: 'Parent',
                        value: 'parent',
                        checked: true
                      }, {
                        name: 'teacher',
                        type: 'radio',
                        label: 'Teacher',
                        value: 'teacher'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {// console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler(inputs) {// console.log('Confirm Ok', inputs);
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
        key: "login",
        value: function login() {
          var _this2 = this;

          for (var v in this.login_form.controls) {
            this.login_form.controls[v].markAsTouched();
          }

          if (this.login_form.valid) {
            this.api.presentLoading();
            this.login_process = true;
            var body = {
              email: this.login_form.value.email,
              password: this.login_form.value.password,
              device_token: localStorage.getItem('notification_id')
            };
            this.api.signin(body).subscribe(function (val) {
              _this2.val = val;
              _this2.login_process = false;

              _this2.api.dismissLoading();

              if (val['status'] == 1) {
                _this2.login_process = false;

                _this2.api.dismissLoading();

                if (_this2.val && _this2.val.data.token) {
                  localStorage.setItem("token", _this2.val.data.token);
                  localStorage.setItem("role_id", _this2.val.data.role_id);
                  localStorage.setItem("area_id", _this2.val.data.area_id);

                  if (_this2.val.data.role_id == 4) {
                    localStorage.setItem("teacher_id", _this2.val.data.id);
                    localStorage.setItem("connect_student", _this2.val.data.connect_student);
                    localStorage.setItem("amount", _this2.val.data.packageData.price);
                    localStorage.setItem("package_status", _this2.val.data.package_status);
                    localStorage.setItem("package_id", _this2.val.data.packageData.id);
                    localStorage.setItem("packagePurchaseId", _this2.val.data.packagePurchaseId);
                  }
                }

                if (_this2.val.data.role_id == 2) {
                  _this2.router.navigate(['/tabs/kid-added']);

                  _this2.api.presentToastWithOptions(_this2.val['message']); // this.navCtrl.navigateForward('/tabs/kid-added');

                }

                if (_this2.val.data.role_id == 4) {
                  _this2.router.navigate(['/tabs/student-added']); // this.navCtrl.navigateForward('/tabs/student-added');


                  _this2.api.presentToastWithOptions(_this2.val['message']);
                }
              } else {
                _this2.api.presentToastWithOptions(val['message']);
              }
            }, function (err) {
              _this2.login_process = false;

              _this2.api.dismissLoading();

              _this2.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
          }
        }
      }, {
        key: "forgot",
        value: function forgot() {
          this.router.navigate(['/forgot']);
        }
      }, {
        key: "register",
        value: function register() {
          // this.router.navigate(['/teacher-parent']);
          this.navCtrl.navigateBack('/teacher-parent');
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_13__["Facebook"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
      }, {
        type: src_app_global_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__["SplashScreen"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_14__["Keyboard"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/Users/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=Users-login-login-module-es5.js.map