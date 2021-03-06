function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-registers-register-child-register-child-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/registers/register-child/register-child.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/registers/register-child/register-child.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersRegistersRegisterChildRegisterChildPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"div_profile\">\n    <img src=\"../../assets/images/interface.png\" class=\"img_profile\" />\n  </div>\n\n  <form [formGroup]=\"register_form\" autocomplete=\"off\" class=\"reg_form\">\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"email\" formControlName=\"email\" placeholder=\"{{'register.place_email' | translate }}\"\n        class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"register_form.controls.email.hasError('required') && register_form.controls.email.touched\">\n      <p class=\"content add-error\">{{'register.err_email' | translate }}</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"register_form.controls.email.hasError('incorrect') && register_form.controls.email.touched\">\n      <p class=\"content\">{{'register.email_exits' | translate}}</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"register_form.controls.email.hasError('pattern') && register_form.controls.email.touched\">\n      <p class=\"content\">{{'register.email_valid' | translate}}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"text\" formControlName=\"name\" placeholder=\"{{'register.place_name' | translate }}\"\n        class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"register_form.controls.name.hasError('required') && register_form.controls.name.touched\">\n      <p class=\"content add-error\">{{'register.err_name' | translate }}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"text\" formControlName=\"surname\" placeholder=\"{{'register.place_sname' | translate }}\"\n        class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"register_form.controls.surname.hasError('required') && register_form.controls.surname.touched\">\n      <p class=\"content add-error\">{{'register.err_sname' | translate }}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" formControlName=\"area\" placeholder=\"{{ 'register.area' | translate }}\"\n        class=\"btn-select bg dropWidth\" mode=\"md\" (ionChange)=\"onChangePropertyType($event)\">\n        <ion-select-option *ngFor=\"let opt of alist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"register_form.controls.area.hasError('required') && register_form.controls.area.touched\">\n      <p class=\"content\">{{ 'register.err_area' | translate }}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" formControlName=\"sub_area\" placeholder=\"{{ 'reusable.place_sub_area' | translate }}\"\n        class=\"btn-select bg dropWidth\" mode=\"md\">\n        <ion-select-option *ngFor=\"let opt of sublist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n    *ngIf=\"register_form.controls.sub_area.hasError('required') && register_form.controls.sub_area.touched\">\n    <p class=\"content\">{{ 'reusable.err_sub_area' | translate }}</p>\n  </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add\">\n      <ion-input type=\"password\" formControlName=\"password\" placeholder=\"{{'register.place_pass' | translate }}\"\n        class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"register_form.controls.password.hasError('required') && register_form.controls.password.touched\">\n      <p class=\"content add-error\">{{'register.err_pass' | translate }}</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"register_form.controls.password.hasError('incorrect') && register_form.controls.password.touched\">\n      <p class=\"content add-error\">Invalid password.</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add\">\n      <ion-input type=\"password\" formControlName=\"confirmPassword\" placeholder=\"{{'register.repeat_pass' | translate }}\"\n        class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"register_form.controls.confirmPassword.hasError('required') && register_form.controls.confirmPassword.touched\">\n      <p class=\"content add-error\">{{'register.err_rpt_pass' | translate }}</p>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"register_form.controls.confirmPassword.touched && register_form.hasError('MatchPassword','confirmPassword')\">\n      <p class=\"content add-error\"> {{'register.not_match_pass' | translate }}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"number\" formControlName=\"code\" placeholder=\"{{'register.place_code' | translate }}\"\n        class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n  </form>\n\n  <div class=\"div_empty\"></div>\n\n  <div class=\"dhingla_img\">\n    <img src=\"../../../../assets/images/child.png\" class=\"img_dhingla\" />\n  </div>\n\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" size=\"large\" class=\"btn_footer\" (click)=\"register()\">{{'register.register' | translate }} >>\n  </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/Users/registers/register-child/register-child-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/Users/registers/register-child/register-child-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: RegisterChildPageRoutingModule */

  /***/
  function srcAppUsersRegistersRegisterChildRegisterChildRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterChildPageRoutingModule", function () {
      return RegisterChildPageRoutingModule;
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


    var _register_child_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register-child.page */
    "./src/app/Users/registers/register-child/register-child.page.ts");

    var routes = [{
      path: '',
      component: _register_child_page__WEBPACK_IMPORTED_MODULE_3__["RegisterChildPage"]
    }];

    var RegisterChildPageRoutingModule = function RegisterChildPageRoutingModule() {
      _classCallCheck(this, RegisterChildPageRoutingModule);
    };

    RegisterChildPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterChildPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Users/registers/register-child/register-child.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Users/registers/register-child/register-child.module.ts ***!
    \*************************************************************************/

  /*! exports provided: RegisterChildPageModule */

  /***/
  function srcAppUsersRegistersRegisterChildRegisterChildModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterChildPageModule", function () {
      return RegisterChildPageModule;
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


    var _register_child_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-child-routing.module */
    "./src/app/Users/registers/register-child/register-child-routing.module.ts");
    /* harmony import */


    var _register_child_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register-child.page */
    "./src/app/Users/registers/register-child/register-child.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var RegisterChildPageModule = function RegisterChildPageModule() {
      _classCallCheck(this, RegisterChildPageModule);
    };

    RegisterChildPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_child_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterChildPageRoutingModule"]],
      declarations: [_register_child_page__WEBPACK_IMPORTED_MODULE_6__["RegisterChildPage"]]
    })], RegisterChildPageModule);
    /***/
  },

  /***/
  "./src/app/Users/registers/register-child/register-child.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/Users/registers/register-child/register-child.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersRegistersRegisterChildRegisterChildPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .div_profile {\n  margin-top: 16px;\n  text-align: center;\n}\nion-content .div_profile .img_profile {\n  height: 100px;\n}\nion-content .div_empty1 {\n  height: 60px;\n}\nion-content .img_footer {\n  height: 150px !important;\n  width: 150px !important;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n}\nion-content .row_chk {\n  margin: 28px 0px 8px 22px;\n}\nion-content .row_chk .chk_terms {\n  margin-right: 8px;\n  --checkmark-color: var(--ion-color-light);\n}\nion-content .row_chk .lbl_terms {\n  font-size: 16px;\n  text-decoration: underline;\n}\nion-content .reg_form {\n  margin-bottom: 75px;\n}\nion-footer {\n  position: fixed;\n  bottom: 0;\n}\nion-footer .btn_footer {\n  margin: 0px;\n  color: white;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL3JlZ2lzdGVycy9yZWdpc3Rlci1jaGlsZC9yZWdpc3Rlci1jaGlsZC5wYWdlLnNjc3MiLCJzcmMvYXBwL1VzZXJzL3JlZ2lzdGVycy9yZWdpc3Rlci1jaGlsZC9yZWdpc3Rlci1jaGlsZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDRU47QURETTtFQUNFLGFBQUE7QUNHUjtBREFJO0VBQ0UsWUFBQTtBQ0VOO0FEQUk7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDRU47QURBSTtFQUVFLHlCQUFBO0FDQ047QURDTTtFQUNFLGlCQUFBO0VBQ0EseUNBQUE7QUNDUjtBREdNO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FDRFI7QURLSTtFQUNFLG1CQUFBO0FDSE47QURNRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDSEo7QURJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL1VzZXJzL3JlZ2lzdGVycy9yZWdpc3Rlci1jaGlsZC9yZWdpc3Rlci1jaGlsZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIC5kaXZfcHJvZmlsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLmltZ19wcm9maWxlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmRpdl9lbXB0eTEge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIH1cbiAgICAuaW1nX2Zvb3RlciB7XG4gICAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICAucm93X2NoayB7XG4gICAgICAvLyBmbG9hdDogbGVmdDtcbiAgICAgIG1hcmdpbjogMjhweCAwcHggOHB4IDIycHg7XG4gICAgXG4gICAgICAuY2hrX3Rlcm1zIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIC0tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAvLyBoZWlnaHQ6IDIycHg7XG4gICAgICAgIC8vIHdpZHRoOiAyMnB4O1xuICAgICAgfVxuICAgICAgLmxibF90ZXJtcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnJlZ19mb3Jte1xuICAgICAgbWFyZ2luLWJvdHRvbTogNzVweDtcbiAgICB9XG4gIH1cbiAgaW9uLWZvb3RlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIC5idG5fZm9vdGVyIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG4gICIsImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9wcm9maWxlIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmRpdl9wcm9maWxlIC5pbWdfcHJvZmlsZSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5pb24tY29udGVudCAuZGl2X2VtcHR5MSB7XG4gIGhlaWdodDogNjBweDtcbn1cbmlvbi1jb250ZW50IC5pbWdfZm9vdGVyIHtcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuaW9uLWNvbnRlbnQgLnJvd19jaGsge1xuICBtYXJnaW46IDI4cHggMHB4IDhweCAyMnB4O1xufVxuaW9uLWNvbnRlbnQgLnJvd19jaGsgLmNoa190ZXJtcyB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IC5yb3dfY2hrIC5sYmxfdGVybXMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuaW9uLWNvbnRlbnQgLnJlZ19mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogNzVweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xufVxuaW9uLWZvb3RlciAuYnRuX2Zvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Users/registers/register-child/register-child.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Users/registers/register-child/register-child.page.ts ***!
    \***********************************************************************/

  /*! exports provided: RegisterChildPage */

  /***/
  function srcAppUsersRegistersRegisterChildRegisterChildPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterChildPage", function () {
      return RegisterChildPage;
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
    /* harmony import */


    var src_app_global_password_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/global/password_validation */
    "./src/app/global/password_validation.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var RegisterChildPage = /*#__PURE__*/function () {
      function RegisterChildPage(formBuilder, router, api, statusBar, modalCtrl) {
        _classCallCheck(this, RegisterChildPage);

        this.formBuilder = formBuilder;
        this.router = router;
        this.api = api;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.arealist = [];
        this.register_fb();
      }

      _createClass(RegisterChildPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.register_form.reset();
          this.areaList();
        }
      }, {
        key: "areaList",
        value: function areaList() {
          var _this = this;

          this.api.arealist().subscribe(function (data) {
            _this.arealist = data;
            _this.alist = _this.arealist.data;
          });
        }
      }, {
        key: "onChangePropertyType",
        value: function onChangePropertyType(e) {
          var _this2 = this;

          localStorage.setItem("l_id", e.target.value);
          this.api.sub_area(e.target.value).subscribe(function (data) {
            _this2.slist = data;
            _this2.sublist = _this2.slist.data;
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.register_form.reset();
          this.areaList();
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#FFFFFF');
        }
      }, {
        key: "register_fb",
        value: function register_fb() {
          this.register_form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            area: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sub_area: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            code: [null]
          }, {
            validator: src_app_global_password_validation__WEBPACK_IMPORTED_MODULE_6__["PasswordValidation"].MatchPassword // your custom validation method  

          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this3 = this;

          for (var v in this.register_form.controls) {
            this.register_form.controls[v].markAsTouched();
          }

          if (this.register_form.valid) {
            this.api.presentLoading();
            this.reg_process = true;
            var body = {
              email: this.register_form.value.email,
              name: this.register_form.value.name,
              surname: this.register_form.value.surname,
              area_id: this.register_form.value.area,
              sub_area_id: this.register_form.value.sub_area,
              password: this.register_form.value.password,
              confirmPassword: this.register_form.value.confirmPassword,
              referral_code: this.register_form.value.code,
              terms_and_condition: 1
            };
            this.api.parents_signup(body).subscribe(function (data) {
              _this3.reg_process = false;

              _this3.api.dismissLoading();

              if (data.status == 1) {
                // success part
                _this3.api.presentToastWithOptions(data['message']);

                _this3.router.navigate(["/login"]);
              } else if (data.email) {
                if (data.email) {
                  _this3.register_form.controls['email'].setErrors({
                    'incorrect': true
                  });

                  _this3.register_form.controls['email'].markAsTouched();
                } else {
                  _this3.register_form.controls['email'].setErrors({
                    'incorrect': true
                  });

                  _this3.register_form.controls['email'].markAsTouched();
                }
              } else {
                _this3.api.presentToastWithOptions(data['message']);
              }
            }, function (err) {
              _this3.reg_process = false;

              _this3.api.dismissLoading();

              _this3.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
          }
        }
      }]);

      return RegisterChildPage;
    }();

    RegisterChildPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }];
    };

    RegisterChildPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-child',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register-child.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/registers/register-child/register-child.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register-child.page.scss */
      "./src/app/Users/registers/register-child/register-child.page.scss"))["default"]]
    })], RegisterChildPage);
    /***/
  }
}]);
//# sourceMappingURL=Users-registers-register-child-register-child-module-es5.js.map