function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Kids-kid-kid-new-kid-new-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/kid/kid-new/kid-new.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/kid/kid-new/kid-new.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKidsKidKidNewKidNewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot =\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\"/>\n    <img src=\"../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <ion-row class=\"row_select\">\n    \n    <ion-col size=\"5\" class=\"col_select\" [ngClass]=\"{'border':gender_value === 'boy' || gen==0 }\" (click)=\"gender('boy')\">\n      <img src=\"../../../../assets/images/profile.png\" class=\"img_select\"/>\n      <ion-label class=\"lbl_select\">{{'single.lbl_boy' | translate }}</ion-label>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_select lbl_or\">\n      <ion-label class=\"lbl_select\">{{'single.lbl_or' | translate }}</ion-label>\n    </ion-col>\n    <ion-col size=\"5\" class=\"col_select\" [ngClass]=\"{'border':gender_value === 'girl' }\" (click)=\"gender('girl')\">\n      <img src=\"../../../../assets/images/girl.png\" class=\"img_select\"/>\n      <ion-label class=\"lbl_select\">{{'single.lbl_girl' | translate }}</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <form [formGroup]=\"new_kid_form\" autocomplete=\"off\" class=\"form_all\">\n   \n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"text\" formControlName=\"name\" placeholder=\"{{'reusable.place_name' | translate }}\" class=\"input-box\">\n      </ion-input>\n    </ion-item>\n  \n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"new_kid_form.controls.name.hasError('required') && new_kid_form.controls.name.touched\">\n        <p class=\"content add-error\">{{'reusable.err_name' | translate }}</p>\n      </ion-item>\n  \n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.grade' | translate }}\"  formControlName=\"grade\"\n        class=\"btn-select bg dropWidth\" mode=\"md\" (ionChange)=\"gradeprize($event)\">\n        <ion-select-option *ngFor=\"let opt of glist\" [value]=\"opt.id\">{{opt.title}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"new_kid_form.controls.grade.hasError('required') && new_kid_form.controls.grade.touched\">\n        <p class=\"content add-error\">{{'reusable.err_option' | translate }}</p>\n      </ion-item>\n  \n    </form>   \n\n  <ion-label class=\"lbl_\">\n    {{'single.lbl_kid_new_access' | translate }}  </ion-label>\n\n  <ion-button class=\"btn_premium btn_all\" expand=\"block\" size=\"large\" (click)=\"submit()\">\n    <img src=\"../../../assets/images/premium.png\" class=\"btn_img_premium\"/>\n    {{prilist ? prilist : '0.0'}} €/{{'reusable.lbl_month' | translate }}\n  </ion-button>\n\n  <ion-label class=\"lbl_ lbl_no\" (click)=\"free()\">\n    {{'single.lbl_kid_new_no' | translate }}  </ion-label>\n\n    <div class=\"div_ads\">\n      <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" (click)=\"ads()\"class=\"img_ads\"/>\n    </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Kids/kid/kid-new/kid-new-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/Kids/kid/kid-new/kid-new-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: KidNewPageRoutingModule */

  /***/
  function srcAppKidsKidKidNewKidNewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidNewPageRoutingModule", function () {
      return KidNewPageRoutingModule;
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


    var _kid_new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kid-new.page */
    "./src/app/Kids/kid/kid-new/kid-new.page.ts");

    var routes = [{
      path: '',
      component: _kid_new_page__WEBPACK_IMPORTED_MODULE_3__["KidNewPage"]
    }];

    var KidNewPageRoutingModule = function KidNewPageRoutingModule() {
      _classCallCheck(this, KidNewPageRoutingModule);
    };

    KidNewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], KidNewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Kids/kid/kid-new/kid-new.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/Kids/kid/kid-new/kid-new.module.ts ***!
    \****************************************************/

  /*! exports provided: KidNewPageModule */

  /***/
  function srcAppKidsKidKidNewKidNewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidNewPageModule", function () {
      return KidNewPageModule;
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


    var _kid_new_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./kid-new-routing.module */
    "./src/app/Kids/kid/kid-new/kid-new-routing.module.ts");
    /* harmony import */


    var _kid_new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./kid-new.page */
    "./src/app/Kids/kid/kid-new/kid-new.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var KidNewPageModule = function KidNewPageModule() {
      _classCallCheck(this, KidNewPageModule);
    };

    KidNewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _kid_new_routing_module__WEBPACK_IMPORTED_MODULE_5__["KidNewPageRoutingModule"]],
      declarations: [_kid_new_page__WEBPACK_IMPORTED_MODULE_6__["KidNewPage"]]
    })], KidNewPageModule);
    /***/
  },

  /***/
  "./src/app/Kids/kid/kid-new/kid-new.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/Kids/kid/kid-new/kid-new.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKidsKidKidNewKidNewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .row_select .col_select {\n  text-align: center;\n}\nion-content .row_select .col_select .img_select {\n  height: 100px;\n}\nion-content .row_select .col_select .lbl_select {\n  display: block;\n  text-align: center;\n  font-size: 16px;\n}\nion-content .lbl_or {\n  line-height: 7;\n}\nion-content .lbl_ {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\nion-content .lbl_no {\n  text-decoration: underline;\n}\nion-content .btn_premium {\n  color: white;\n  width: 90%;\n  margin: 0 auto;\n}\nion-content .btn_premium .btn_img_premium {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  left: 0;\n}\n.border {\n  border: 2px solid var(--ion-color-primary);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL0tpZHMva2lkL2tpZC1uZXcva2lkLW5ldy5wYWdlLnNjc3MiLCJzcmMvYXBwL0tpZHMva2lkL2tpZC1uZXcva2lkLW5ldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0FDRVI7QURLQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDRko7QURLUTtFQUNJLGtCQUFBO0FDSFo7QURJWTtFQUNJLGFBQUE7QUNGaEI7QURJWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGaEI7QURNSTtFQUNJLGNBQUE7QUNKUjtBRE1JO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtBQ0xSO0FET0k7RUFDSSwwQkFBQTtBQ0xSO0FET0k7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNMUjtBRE1RO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUNKWjtBRFFBO0VBQ0ksMENBQUE7RUFDSixrQkFBQTtBQ0xBIiwiZmlsZSI6InNyYy9hcHAvS2lkcy9raWQva2lkLW5ldy9raWQtbmV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgLmltZ190b29se1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxufVxuLy8gLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgIH1cbmlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG5cbiAgICAucm93X3NlbGVjdHtcbiAgICAgICAgLmNvbF9zZWxlY3R7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAuaW1nX3NlbGVjdHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxibF9zZWxlY3R7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubGJsX29ye1xuICAgICAgICBsaW5lLWhlaWdodDogNztcbiAgICB9XG4gICAgLmxibF97XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIHdpZHRoOiA4MCU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICAgIC5sYmxfbm97XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgICAuYnRuX3ByZW1pdW17XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIC5idG5faW1nX3ByZW1pdW17XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4uYm9yZGVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5ib3JkZXItcmFkaXVzOiA4cHg7IFxufVxuXG4vLyBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyBib3JkZXItcmFkaXVzOiA4cHg7IiwiLmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xufVxuLmJnIC5pbWdfdG9vbCB7XG4gIGhlaWdodDogMzJweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnJvd19zZWxlY3QgLmNvbF9zZWxlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAucm93X3NlbGVjdCAuY29sX3NlbGVjdCAuaW1nX3NlbGVjdCB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5pb24tY29udGVudCAucm93X3NlbGVjdCAuY29sX3NlbGVjdCAubGJsX3NlbGVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfb3Ige1xuICBsaW5lLWhlaWdodDogNztcbn1cbmlvbi1jb250ZW50IC5sYmxfIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfbm8ge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmlvbi1jb250ZW50IC5idG5fcHJlbWl1bSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tY29udGVudCAuYnRuX3ByZW1pdW0gLmJ0bl9pbWdfcHJlbWl1bSB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Kids/kid/kid-new/kid-new.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/Kids/kid/kid-new/kid-new.page.ts ***!
    \**************************************************/

  /*! exports provided: KidNewPage */

  /***/
  function srcAppKidsKidKidNewKidNewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidNewPage", function () {
      return KidNewPage;
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
    /* harmony import */


    var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/stripe/ngx */
    "./node_modules/@ionic-native/stripe/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var KidNewPage = /*#__PURE__*/function () {
      function KidNewPage(formBuilder, stripe, api, route, router, statusBar, alertCtrl) {
        _classCallCheck(this, KidNewPage);

        this.formBuilder = formBuilder;
        this.stripe = stripe;
        this.api = api;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.advertise_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].advertise_url;
        this.number = 16;
        this.gen = 0;
        this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');
        this.new_kid_fb();
      }

      _createClass(KidNewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.gradList();
          this.new_kid_form.reset();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.gender_value = 'boy';
          this.new_kid_form.reset();
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
          this.api.addParentAdvertisement().subscribe(function (resp) {
            _this.advertise = resp;
            _this.add = _this.advertise.data.image;
          });
        }
      }, {
        key: "gender",
        value: function gender(e) {
          this.gender_value = e;
          this.gen = 1; // console.log("dataa", this.gender_value)
        }
      }, {
        key: "gradList",
        value: function gradList() {
          var _this2 = this;

          this.api.gradeList().subscribe(function (data) {
            _this2.gradlist = data;
            _this2.glist = _this2.gradlist.data;
          });
        }
      }, {
        key: "new_kid_fb",
        value: function new_kid_fb() {
          this.new_kid_form = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            grade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "payment",
        value: function payment(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

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
                            _this3.api.showErrorToast('Εισαγάγετε τον αριθμό κάρτας 16 ψηφίων!');

                            return false;
                          }

                          if (Number(input.month.length) > 2 || Number(input.month.length) < 1) {
                            _this3.api.showErrorToast('Εισαγάγετε 2 ψηφία!');

                            return false;
                          }

                          if (Number(input.year.length) > 4 || Number(input.year.length) < 4) {
                            _this3.api.showErrorToast('Εισαγάγετε 4 ψηφία!');

                            return false;
                          }

                          if (Number(input.cvc.length) > 4 || Number(input.cvc.length) < 3) {
                            _this3.api.showErrorToast('Εισαγάγετε 3-4 ψηφία CVC Number!');

                            return false;
                          }

                          _this3.card = {
                            number: input.number,
                            expMonth: Number(input.month),
                            expYear: Number(input.year),
                            cvc: input.cvc
                          }; // console.log('Confirm Ok', this.card);

                          _this3.api.presentLoading();

                          _this3.kidd_process = true;

                          _this3.stripe.createCardToken(_this3.card).then(function (token) {
                            // console.log('stoken', token.id);
                            var body = {
                              name: data.name,
                              grade_id: data.grade_id,
                              gender: data.gender,
                              package_id: data.package_id,
                              amount: data.amount,
                              purchase: data.purchase,
                              role_id: data.role_id,
                              stripeToken: token.id
                            };

                            _this3.api.Addkid(body).subscribe(function (data) {
                              _this3.kidd_process = false;

                              _this3.api.dismissLoading();

                              if (data.status == 1) {
                                // success part
                                _this3.api.presentToastWithOptions(data['message']);

                                _this3.router.navigate(["/tabs/kid-premium"]);
                              } else {
                                _this3.api.presentToastWithOptions(data['message']);
                              }
                            });
                          })["catch"](function (error) {
                            _this3.kidd_process = false;

                            _this3.api.dismissLoading();

                            _this3.api.presentToastWithOptions(error);
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
        key: "showError",
        value: function showError(arg0) {
          throw new Error("Method not implemented.");
        }
      }, {
        key: "gradeprize",
        value: function gradeprize(e) {
          var _this4 = this;

          this.pid = e.detail.value;
          this.api.gradePrize(this.pid).subscribe(function (data) {
            _this4.plist = data;
            _this4.prilist = _this4.plist.data.price;
            _this4.pricedata = _this4.plist.data;
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          for (var v in this.new_kid_form.controls) {
            this.new_kid_form.controls[v].markAsTouched();
          }

          if (this.new_kid_form.valid) {
            var body = {
              name: this.new_kid_form.value.name,
              grade_id: this.new_kid_form.value.grade,
              gender: this.gender_value ? this.gender_value : 'boy',
              package_id: this.pricedata.id,
              amount: this.pricedata.price,
              purchase: 1,
              role_id: localStorage.getItem("role_id")
            };
            this.payment(body);
          }
        }
      }, {
        key: "premium",
        value: function premium() {
          this.router.navigate(['/tabs/kid-premium']);
        }
      }, {
        key: "free",
        value: function free() {
          var _this5 = this;

          for (var v in this.new_kid_form.controls) {
            this.new_kid_form.controls[v].markAsTouched();
          }

          if (this.new_kid_form.valid) {
            this.api.presentLoading();
            this.kid_process = true;
            var body = {
              name: this.new_kid_form.value.name,
              grade_id: this.new_kid_form.value.grade,
              gender: this.gender_value ? this.gender_value : 'boy',
              package_id: this.pricedata.id,
              amount: this.pricedata.price,
              purchase: 0,
              role_id: localStorage.getItem("role_id"),
              packagePurchaseId: 0
            };
            this.api.Addkid(body).subscribe(function (data) {
              _this5.kiddata = JSON.stringify(data.data);
              _this5.pacdata = JSON.stringify(data.packageData);
              localStorage.setItem("pacdata", _this5.pacdata);
              localStorage.setItem("addkid", _this5.kiddata);
              _this5.kid_process = false;

              _this5.api.dismissLoading();

              if (data.status == 1) {
                // success part
                _this5.api.presentToastWithOptions(data['message']);

                _this5.router.navigate(["/tabs/kid-free"]);
              } else {
                _this5.api.presentToastWithOptions(data['message']);
              }
            }, function (err) {
              _this5.kid_process = false;

              _this5.api.dismissLoading();

              _this5.api.presentToastWithOptions("Σφάλμα εσωτερικού διακομιστή Δοκιμάστε ξανά μετά από λίγο.");
            });
          }
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/tabs/kid-add']);
        }
      }]);

      return KidNewPage;
    }();

    KidNewPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_7__["Stripe"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('new_kid_form')], KidNewPage.prototype, "formValues", void 0);
    KidNewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-kid-new',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./kid-new.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/kid/kid-new/kid-new.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./kid-new.page.scss */
      "./src/app/Kids/kid/kid-new/kid-new.page.scss"))["default"]]
    })], KidNewPage);
    /***/
  }
}]);
//# sourceMappingURL=Kids-kid-kid-new-kid-new-module-es5.js.map