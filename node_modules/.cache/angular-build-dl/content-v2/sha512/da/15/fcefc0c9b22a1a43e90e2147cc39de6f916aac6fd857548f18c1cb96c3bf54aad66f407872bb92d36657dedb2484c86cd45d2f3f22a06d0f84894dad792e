function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pdfs-pdf-pdf-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pdfs/pdf/pdf.page.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pdfs/pdf/pdf.page.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPdfsPdfPdfPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/directional.png\" slot =\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\"/>\n    <img src=\"../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img src=\"../../../assets/images/pdf3.jpg\" class=\"img_main_PDF\"/>\n\n  <ion-button expand=\"block\" size=\"large\" class=\"btn_all top\" (click)=\"pdf()\">{{'single.btn_download' | translate}}</ion-button>\n\n  <ion-label class=\"lbl_head_title\">\n    {{p_title}}\n  </ion-label>\n\n  <form [formGroup]=\"pdf_form\" autocomplete=\"off\" class=\"form_all\">\n\n    <ion-item lines=\"none\" class=\"input-item space\" *ngIf=\"roll_id == '4'\">\n      <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.select' | translate}}\"  formControlName=\"student\"\n        class=\"btn-select bg dropWidth\" mode=\"md\">\n        <ion-select-option  value=\"all\">{{'reusable.lbl_assign' | translate}}</ion-select-option>\n        <ion-select-option *ngFor=\"let opt of slist\" [value]=\"opt.kid_unique_id\">{{opt.kidName}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"pdf_form.controls.student.hasError('required') && pdf_form.controls.student.touched\">\n        <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n      </ion-item>\n\n</form>\n\n<ion-button expand=\"block\" size=\"large\" (click)=\"submit()\" class=\"btn_all\" *ngIf=\"roll_id == '4'\">{{'reusable.set' | translate}}</ion-button>\n\n  <ion-label class=\"lbl_latest lbl_all\">\n    {{'single.lbl_play_pdf' | translate}}\n  </ion-label>\n\n  <div class=\"isEmpty\" *ngIf=\"p_list?.length == 0 || p_list == null\">\n  <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n</div>\n\n<ng-container *ngFor=\"let opt of p_list | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"quiz_single(opt.id,opt.free_quiz)\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n      <img *ngIf=\"!opt.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n          <img *ngIf=\"opt.image\" src=\"{{imageUrl}}{{opt.image}}\" class=\"img_main img_all\" />\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\" >{{opt.title}}</ion-label>\n      <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.lessionTitle}} - {{opt.unitTitle}}</ion-label>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../assets/images/premium.png\" *ngIf = \"opt.free_quiz == 0\" class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n  </ng-container>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/Pdfs/pdf/pdf-routing.module.ts":
  /*!************************************************!*\
    !*** ./src/app/Pdfs/pdf/pdf-routing.module.ts ***!
    \************************************************/

  /*! exports provided: PdfPageRoutingModule */

  /***/
  function srcAppPdfsPdfPdfRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdfPageRoutingModule", function () {
      return PdfPageRoutingModule;
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


    var _pdf_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pdf.page */
    "./src/app/Pdfs/pdf/pdf.page.ts");

    var routes = [{
      path: '',
      component: _pdf_page__WEBPACK_IMPORTED_MODULE_3__["PdfPage"]
    }];

    var PdfPageRoutingModule = function PdfPageRoutingModule() {
      _classCallCheck(this, PdfPageRoutingModule);
    };

    PdfPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PdfPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pdfs/pdf/pdf.module.ts":
  /*!****************************************!*\
    !*** ./src/app/Pdfs/pdf/pdf.module.ts ***!
    \****************************************/

  /*! exports provided: PdfPageModule */

  /***/
  function srcAppPdfsPdfPdfModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdfPageModule", function () {
      return PdfPageModule;
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


    var _pdf_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pdf-routing.module */
    "./src/app/Pdfs/pdf/pdf-routing.module.ts");
    /* harmony import */


    var _pdf_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pdf.page */
    "./src/app/Pdfs/pdf/pdf.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var PdfPageModule = function PdfPageModule() {
      _classCallCheck(this, PdfPageModule);
    };

    PdfPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pdf_routing_module__WEBPACK_IMPORTED_MODULE_5__["PdfPageRoutingModule"]],
      declarations: [_pdf_page__WEBPACK_IMPORTED_MODULE_6__["PdfPage"]]
    })], PdfPageModule);
    /***/
  },

  /***/
  "./src/app/Pdfs/pdf/pdf.page.scss":
  /*!****************************************!*\
    !*** ./src/app/Pdfs/pdf/pdf.page.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPdfsPdfPdfPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  text-align: center;\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\n.bg .img_logo {\n  width: 75%;\n}\n.img_main_PDF {\n  width: 100%;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.lbl_head_title {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  width: 75%;\n  margin: 0 auto;\n  padding: 16px;\n}\n.lbl_mark {\n  display: block;\n  padding: 8px;\n  font-weight: bold;\n}\n.lbl_latest {\n  display: block;\n  padding: 8px;\n}\n.row_list .col_list .img_main {\n  height: 48px;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n.top {\n  margin-top: 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1BkZnMvcGRmL3BkZi5wYWdlLnNjc3MiLCJzcmMvYXBwL1BkZnMvcGRmL3BkZi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7QUNDUjtBRENJO0VBQ0ksVUFBQTtBQ0NSO0FETUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNIUjtBREtJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0ZOO0FESUk7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRE47QURHRTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDQU47QURJVTtFQUNJLFlBQUE7QUNEZDtBREdVO0VBQ0ksY0FBQTtBQ0RkO0FER1U7RUFDSSxjQUFBO0FDRGQ7QURHVTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDRGQ7QURHVTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDRGQ7QURLRTtFQUNFLDJCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9QZGZzL3BkZi9wZGYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgXG4gICAgLmltZ190b29se1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxuICAgIC5pbWdfbG9nb3tcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIH1cbi8vICAgLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgIH1cbiAgICAuaW1nX21haW5fUERGe1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5sYmxfaGVhZF90aXRsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICAgIC5sYmxfbWFya3tcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmxibF9sYXRlc3R7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICAucm93X2xpc3R7XG4gICAgICAuY29sX2xpc3R7XG4gICAgICAgICAgLmltZ19tYWlue1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYmxfcXVpel90aXRsZXtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYmxfdW5pdHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWdfcHJlbWl1bXtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZ19hcnJvd3tcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgLnRvcHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIH0iLCIuYmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbn1cbi5iZyAuaW1nX3Rvb2wge1xuICBoZWlnaHQ6IDMycHg7XG59XG4uYmcgLmltZ19sb2dvIHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmltZ19tYWluX1BERiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmxibF9oZWFkX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmxibF9tYXJrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sYmxfbGF0ZXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX21haW4ge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfcXVpel90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3VuaXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19hcnJvdyB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi50b3Age1xuICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Pdfs/pdf/pdf.page.ts":
  /*!**************************************!*\
    !*** ./src/app/Pdfs/pdf/pdf.page.ts ***!
    \**************************************/

  /*! exports provided: PdfPage */

  /***/
  function srcAppPdfsPdfPdfPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdfPage", function () {
      return PdfPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");

    var PdfPage = /*#__PURE__*/function () {
      function PdfPage(formBuilder, api, route, router, transfer, navCtrl, file, fileOpener, statusBar, iab) {
        _classCallCheck(this, PdfPage);

        this.formBuilder = formBuilder;
        this.api = api;
        this.route = route;
        this.router = router;
        this.transfer = transfer;
        this.navCtrl = navCtrl;
        this.file = file;
        this.fileOpener = fileOpener;
        this.statusBar = statusBar;
        this.iab = iab;
        this.limit = 10;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].image_url;
        this.pdf_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pdf_url;
        this.user_not_found_place_holder = 'assets/images/placeholder-s.png';
        this.pdf_fb();
      }

      _createClass(PdfPage, [{
        key: "ads",
        value: function ads() {
          this.iab.create('https://google.com/');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadData",
        value: function loadData(infiniteScroll) {
          var _this = this;

          setTimeout(function () {
            _this.limit += 10;
            infiniteScroll.target.complete();
          }, 500);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
          this.roll_id = localStorage.getItem("role_id");
          localStorage.removeItem("pdf_quize");
          localStorage.removeItem("pdf_id");
          localStorage.removeItem("video_quize");
          localStorage.removeItem("video_id");
          this.pdf_form.reset();
          localStorage.removeItem("len_val");
          this.package_status = localStorage.getItem("package_status");
          this.connect_student = localStorage.getItem("connect_student");
          var reqData = this.route.snapshot.queryParams;
          var body = {
            kid_unique_id: localStorage.getItem("kid_id")
          };
          this.api.pdfData(reqData.pdf_id, body).subscribe(function (resp) {
            _this2.pdfdata = resp;
            _this2.p_data = _this2.pdfdata.data.pdf;
            _this2.p_title = _this2.pdfdata.data.title;
          });
          this.api.connectStudentList().subscribe(function (resp) {
            _this2.students_list = resp;
            _this2.slist = _this2.students_list.data;
          });
          this.api.realtedPdfQuiz(reqData.pdf_id).subscribe(function (resp) {
            _this2.pdflist = resp;
            _this2.p_list = _this2.pdflist.data;
          });
        }
      }, {
        key: "pdf",
        value: function pdf() {
          var _this3 = this;

          var url = this.pdf_url + this.p_data;
          var fileType = 'application/pdf';
          var fileName = this.p_data;
          this.fileTransfer = this.transfer.create();
          this.fileTransfer.download(url, this.file.dataDirectory + fileName).then(function (entry) {
            // console.log("download complete: " + entry.toURL());
            _this3.fileOpener.open(entry.toURL(), fileType).then(function () {
              // console.log("File is opened"); 
              _this3.api.presentToastWithOptions('Το αρχείο ανοίγει.');
            })["catch"](function (e) {
              // console.log("Error opening file", e); 
              _this3.api.presentToastWithOptions('Το πρόγραμμα προβολής δεν βρέθηκε.');
            });
          });
        }
      }, {
        key: "pdf_fb",
        value: function pdf_fb() {
          this.pdf_form = this.formBuilder.group({
            student: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this4 = this;

          var reqData = this.route.snapshot.queryParams;

          for (var v in this.pdf_form.controls) {
            this.pdf_form.controls[v].markAsTouched();
          }

          if (this.pdf_form.valid) {
            this.api.presentLoading();
            this.quize_process = true;
            var body = {
              kid_unique_id: this.pdf_form.value.student,
              pdf_id: reqData.pdf_id
            };
            this.api.homework(body).subscribe(function (data) {
              _this4.quize_process = false;

              _this4.api.dismissLoading();

              if (data.status == 1) {
                // success part
                _this4.api.presentToastWithOptions(data['message']);

                _this4.router.navigate(['/tabs/home-teacher']);
              } else {
                _this4.api.presentToastWithOptions(data['message']);
              }
            }, function (err) {
              _this4.quize_process = false;

              _this4.api.dismissLoading();

              _this4.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
          }
        }
      }, {
        key: "quiz_single",
        value: function quiz_single(id, quize) {
          var reqData = this.route.snapshot.queryParams;
          localStorage.setItem("pdf_quize", "pdf_quize");
          localStorage.setItem("pdf_id", reqData.pdf_id);

          if (localStorage.getItem("role_id") === '2') {
            if (localStorage.getItem("kid_id")) {
              if (quize == 0 && this.package_status == 1) {
                this.router.navigate(['/tabs/quiz-single'], {
                  queryParams: {
                    id: id
                  }
                });
              } else if (quize == 1) {
                this.router.navigate(['/tabs/quiz-single'], {
                  queryParams: {
                    id: id
                  }
                });
              } else {
                this.router.navigate(["/tabs/quiz-premium"]);
              }
            } else {
              this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');
            }
          }

          if (localStorage.getItem("role_id") === '4') {
            if (quize == 1) {
              this.router.navigate(['/tabs/quiz-single'], {
                queryParams: {
                  id: id
                }
              });
            } else {
              if (this.package_status == 1) {
                this.router.navigate(['/tabs/quiz-single'], {
                  queryParams: {
                    id: id
                  }
                });
              } else {
                if (this.connect_student >= 6) {
                  this.router.navigate(['/tabs/quiz-single'], {
                    queryParams: {
                      id: id
                    }
                  });
                } else {
                  this.router.navigate(["/tabs/teacher-premium"]);
                }
              }
            }
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
          var reqData = this.route.snapshot.queryParams;

          if (reqData.l_id) {
            this.navCtrl.navigateBack(['/tabs/pdf-search'], {
              queryParams: {
                l_id: reqData.l_id,
                c_id: reqData.c_id
              }
            });
          } else if (localStorage.getItem("k_contain") || localStorage.getItem("t_contain")) {
            this.navCtrl.navigateBack(['/tabs/quiz-search']);
          } else if (localStorage.getItem("t_pdf_contant")) {
            this.navCtrl.navigateBack(['/tabs/home-teacher']);
          } else if (localStorage.getItem("k_pdf_contant")) {
            this.navCtrl.navigateBack(['/tabs/home']);
          } else if (localStorage.getItem("homework")) {
            this.navCtrl.navigateBack(['/tabs/kid-homework']);
          } else if (localStorage.getItem("notification_data")) {
            this.navCtrl.navigateBack(['/tabs/notifications']);
          } else {
            this.navCtrl.navigateBack(['/tabs/pdfs']);
          }
        }
      }]);

      return PdfPage;
    }();

    PdfPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]
      }, {
        type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], {
      "static": true
    })], PdfPage.prototype, "infiniteScroll", void 0);
    PdfPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pdf',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pdf.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pdfs/pdf/pdf.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pdf.page.scss */
      "./src/app/Pdfs/pdf/pdf.page.scss"))["default"]]
    })], PdfPage);
    /***/
  }
}]);
//# sourceMappingURL=Pdfs-pdf-pdf-module-es5.js.map