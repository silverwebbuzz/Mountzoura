function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pdfs-pdf-kids-list-pdf-kids-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pdfs/pdf-kids-list/pdf-kids-list.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pdfs/pdf-kids-list/pdf-kids-list.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPdfsPdfKidsListPdfKidsListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar2\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/icon.png\" slot=\"start\" class=\"img_tool_logo\" />\n    <ion-searchbar id=\"searchValue\" (ionChange)=\"searchBar($event.target.value)\" placeholder=\"{{'reusable.search' | translate}}\" searchIcon=\"none\" class=\"searchBox\"></ion-searchbar>\n    <img src=\"../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\" />\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"role_id === '2'\">\n\n  <ion-label class=\"lbl_head_title\">\n    {{'reusable.search_title' | translate}}\n  </ion-label>\n\n  <form [formGroup]=\"pdf_list_form\" autocomplete=\"off\" class=\"form_all\">\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.lesson' | translate}}\"  formControlName=\"lesson\"\n        class=\"btn-select bg dropWidth\" mode=\"md\" (ionChange)=\"onChangePropertyType($event)\">\n        <ion-select-option *ngFor=\"let opt of llist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div *ngIf=\"!g_id\">\n      <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"pdf_list_form.controls.lesson.hasError('required') && pdf_list_form.controls.lesson.touched\">\n        <p class=\"content add-error\">{{'reusable.err_select' | translate}}</p>\n      </ion-item>\n    </div>\n    <div *ngIf=\"g_id\">\n\n  <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"pdf_list_form.controls.lesson.hasError('required') && pdf_list_form.controls.lesson.touched\">\n      <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n    </ion-item>\n</div>\n<ion-item lines=\"none\" class=\"input-item space\">\n  <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.course' | translate}}\" formControlName=\"course\"\n    class=\"btn-select bg dropWidth\" mode=\"md\">\n    <div *ngIf=\"lass_id\">\n    <ion-select-option *ngFor=\"let opt of clist\" [value]=\"opt.id\">{{opt.title}}</ion-select-option>\n  </div>\n    <!-- <ion-select-option *ngIf=\"!lass_id\"></ion-select-option> -->\n  </ion-select>\n</ion-item>\n\n  <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"pdf_list_form.controls.course.hasError('required') && pdf_list_form.controls.course.touched\">\n      <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n    </ion-item>\n\n  </form>\n\n  <ion-button expand=\"block\" size=\"large\" (click)=\"submit()\" class=\"btn_all\">{{'single.btn_search_pdf' | translate}}</ion-button>\n\n  <ion-label class=\"lbl_latest lbl_all\">\n    {{'single.lbl_latest_pdf' | translate}}\n  </ion-label>\n\n  <div class=\"isEmpty\" *ngIf=\"pdf_result?.length == 0 || pdf_result == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <ng-container  *ngFor=\"let opt of pdf_result | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"search(opt.id,opt.free_pdf)\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n      <img src=\"../../../assets/images/paper.png\" class=\"img_main img_all\" />\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n      <!-- <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.title}}</ion-label> -->\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../assets/images/premium.png\" *ngIf = \"opt.free_pdf == 0 \" class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n</ng-container>\n\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n<div class=\"div_ads\">\n  <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\"  (click)=\"ads()\" class=\"img_ads spc_ads\" />\n</div>\n\n</ion-content>\n\n\n<ion-content *ngIf=\"role_id === '4'\">\n  <ion-label class=\"lbl_head_title\">\n    {{'reusable.search_title' | translate}}\n  </ion-label>\n<div >\n    <form [formGroup]=\"teacher_list_form\" autocomplete=\"off\" class=\"form_all\">\n  \n      <ion-item lines=\"none\" class=\"input-item space\">\n        <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.grade' | translate}}\"  formControlName=\"grade\"\n          class=\"btn-select bg dropWidth\" mode=\"md\" (ionChange)=\"teacherlessionList($event)\">\n          <ion-select-option *ngFor=\"let opt of glist\" [value]=\"opt.id\">{{opt.title}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    \n      <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"teacher_list_form.controls.grade.hasError('required') && teacher_list_form.controls.grade.touched\">\n          <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n        </ion-item>\n  \n        <ion-item lines=\"none\" class=\"input-item space\">\n          <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.lesson' | translate}}\"  formControlName=\"lesson\"\n            class=\"btn-select bg dropWidth\" mode=\"md\" (ionChange)=\"onChangecourseType($event)\">\n           <div *ngIf=\"course_id\">\n            <ion-select-option *ngFor=\"let opt of t_llist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n          </div>\n          <!-- <ion-select-option *ngIf=\"!course_id\"></ion-select-option> -->\n          </ion-select>\n        </ion-item>\n  \n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"teacher_list_form.controls.lesson.hasError('required') && teacher_list_form.controls.lesson.touched\">\n        <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n      </ion-item>\n  \n      <ion-item lines=\"none\" class=\"input-item space\">\n        <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.course' | translate}}\"  formControlName=\"course\"\n          class=\"btn-select bg dropWidth\" mode=\"md\">\n          <div *ngIf=\"ts_id\">\n          <ion-select-option *ngFor=\"let opt of tclist\" [value]=\"opt.id\">{{opt.title}}</ion-select-option>\n        </div>\n        <!-- <ion-select-option *ngIf=\"!ts_id\"></ion-select-option> -->\n        </ion-select>\n      </ion-item>\n  \n  \n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"teacher_list_form.controls.course.hasError('required') && teacher_list_form.controls.course.touched\">\n        <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n      </ion-item>\n  \n    </form>\n</div>\n\n\n\n  <ion-button expand=\"block\" size=\"large\" (click)=\"teacher()\" class=\"btn_all\">{{'single.btn_search_pdf' | translate}}</ion-button>\n\n  <ion-label class=\"lbl_latest lbl_all\">\n    {{'single.lbl_latest_pdf' | translate}}\n  </ion-label>\n\n  <div class=\"isEmpty\" *ngIf=\"pdf_result?.length == 0 || pdf_result == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <ng-container  *ngFor=\"let opt of pdf_result | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"search(opt.id,opt.free_pdf)\">\n    <ion-col size=\"2\" class=\"col_list col_all\" (click)=\"start(opt.url)\">\n        <img src=\"../../../assets/images/paper.png\" class=\"img_main img_all\"/>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n      <!-- <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.title}}</ion-label> -->\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../assets/images/premium.png\" *ngIf = \"opt.free_pdf == 0\" class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n</ng-container>\n\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n<div class=\"div_ads\">\n  <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" (click)=\"ads()\" class=\"img_ads spc_ads\"/>\n</div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Pdfs/pdf-kids-list/pdf-kids-list-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Pdfs/pdf-kids-list/pdf-kids-list-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: PdfKidsListPageRoutingModule */

  /***/
  function srcAppPdfsPdfKidsListPdfKidsListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdfKidsListPageRoutingModule", function () {
      return PdfKidsListPageRoutingModule;
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


    var _pdf_kids_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pdf-kids-list.page */
    "./src/app/Pdfs/pdf-kids-list/pdf-kids-list.page.ts");

    var routes = [{
      path: '',
      component: _pdf_kids_list_page__WEBPACK_IMPORTED_MODULE_3__["PdfKidsListPage"]
    }];

    var PdfKidsListPageRoutingModule = function PdfKidsListPageRoutingModule() {
      _classCallCheck(this, PdfKidsListPageRoutingModule);
    };

    PdfKidsListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PdfKidsListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pdfs/pdf-kids-list/pdf-kids-list.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/Pdfs/pdf-kids-list/pdf-kids-list.module.ts ***!
    \************************************************************/

  /*! exports provided: PdfKidsListPageModule */

  /***/
  function srcAppPdfsPdfKidsListPdfKidsListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdfKidsListPageModule", function () {
      return PdfKidsListPageModule;
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


    var _pdf_kids_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pdf-kids-list-routing.module */
    "./src/app/Pdfs/pdf-kids-list/pdf-kids-list-routing.module.ts");
    /* harmony import */


    var _pdf_kids_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pdf-kids-list.page */
    "./src/app/Pdfs/pdf-kids-list/pdf-kids-list.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var PdfKidsListPageModule = function PdfKidsListPageModule() {
      _classCallCheck(this, PdfKidsListPageModule);
    };

    PdfKidsListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pdf_kids_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["PdfKidsListPageRoutingModule"]],
      declarations: [_pdf_kids_list_page__WEBPACK_IMPORTED_MODULE_6__["PdfKidsListPage"]]
    })], PdfKidsListPageModule);
    /***/
  },

  /***/
  "./src/app/Pdfs/pdf-kids-list/pdf-kids-list.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/Pdfs/pdf-kids-list/pdf-kids-list.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPdfsPdfKidsListPdfKidsListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\n.bg .searchBox {\n  --background: #fdf8f1;\n  border: 1px solid var(--ion-color-primary);\n  height: 34px;\n  width: 90%;\n  margin: 0 auto;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n  border-radius: 10px;\n}\n.lbl_head_title {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  width: 75%;\n  margin: 0 auto;\n  padding: 16px;\n}\n.lbl_latest {\n  display: block;\n  padding: 8px;\n}\n.row_list .col_list .img_main {\n  height: 48px;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1BkZnMvcGRmLWtpZHMtbGlzdC9wZGYta2lkcy1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGRmcy9wZGYta2lkcy1saXN0L3BkZi1raWRzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBREFJO0VBQ0UsWUFBQTtBQ0VOO0FEQUk7RUFDRSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFTjtBREtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0ZKO0FEVUU7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ1BOO0FEWVU7RUFDSSxZQUFBO0FDVGQ7QURXVTtFQUNJLGNBQUE7QUNUZDtBRFdVO0VBQ0ksY0FBQTtBQ1RkO0FEV1U7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1RkO0FEV1U7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1RkIiwiZmlsZSI6InNyYy9hcHAvUGRmcy9wZGYta2lkcy1saXN0L3BkZi1raWRzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgLmltZ190b29sIHtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICB9XG4gICAgLnNlYXJjaEJveCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfSAgXG4gIH1cbiAgLy8gLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLy8gICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuICAvLyAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC8vIH1cbiAgLmxibF9oZWFkX3RpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICAvLyAuc2VsZWN0LWljb257XG4gIC8vICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIC8vIH1cbiAgLy8gLnNlbGVjdC1pY29uLWlubmVye1xuICAvLyAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAvLyB9XG4gIC5sYmxfbGF0ZXN0e1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgXG4gIC5yb3dfbGlzdHtcbiAgICAgIC5jb2xfbGlzdHtcbiAgICAgICAgICAuaW1nX21haW57XG4gICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxibF9xdWl6X3RpdGxle1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxibF91bml0e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZ19wcmVtaXVte1xuICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nX2Fycm93e1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfSIsIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbn1cbi5iZyAuaW1nX3Rvb2wge1xuICBoZWlnaHQ6IDMycHg7XG59XG4uYmcgLnNlYXJjaEJveCB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxibF9oZWFkX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmxibF9sYXRlc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfbWFpbiB7XG4gIGhlaWdodDogNDhweDtcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmxibF9xdWl6X3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfdW5pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX3ByZW1pdW0ge1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAzNHB4O1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX2Fycm93IHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Pdfs/pdf-kids-list/pdf-kids-list.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Pdfs/pdf-kids-list/pdf-kids-list.page.ts ***!
    \**********************************************************/

  /*! exports provided: PdfKidsListPage */

  /***/
  function srcAppPdfsPdfKidsListPdfKidsListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdfKidsListPage", function () {
      return PdfKidsListPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var PdfKidsListPage = /*#__PURE__*/function () {
      function PdfKidsListPage(formBuilder, api, router, statusBar, transfer, iab, file) {
        _classCallCheck(this, PdfKidsListPage);

        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.statusBar = statusBar;
        this.transfer = transfer;
        this.iab = iab;
        this.file = file;
        this.limit = 10;
        this.lessionlist = [];
        this.courcelist = [];
        this.advertise_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].advertise_url;
        this.pdf_list_fb();
        this.teacher_list_fb();
      }

      _createClass(PdfKidsListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pdf_list_form.reset();
          this.teacher_list_form.reset();
        }
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
        key: "lessionList",
        value: function lessionList() {
          var _this2 = this;

          this.api.lessionlist().subscribe(function (data) {
            _this2.lessionlist = data;
            _this2.llist = _this2.lessionlist.data;
          });
        }
      }, {
        key: "onChangePropertyType",
        value: function onChangePropertyType(e) {
          var _this3 = this;

          localStorage.setItem("l_id", e.target.value);
          this.lass_id = e.target.value;
          this.api.courselist(e.target.value).subscribe(function (data) {
            _this3.courcelist = data;
            _this3.clist = _this3.courcelist.data;
          });
        }
      }, {
        key: "teacherlessionList",
        value: function teacherlessionList(e) {
          var _this4 = this;

          this.course_id = e.target.value;
          this.api.teacher_lessionlist(e.target.value).subscribe(function (data) {
            _this4.t_lessionlist = data;
            _this4.t_llist = _this4.t_lessionlist.data;
          });
        }
      }, {
        key: "onChangecourseType",
        value: function onChangecourseType(e) {
          var _this5 = this;

          this.ts_id = e.target.value;
          localStorage.setItem("l_id", e.target.value);
          this.api.courselist(e.target.value).subscribe(function (data) {
            _this5.tcourcelist = data;
            _this5.tclist = _this5.tcourcelist.data;
          });
        }
      }, {
        key: "gradList",
        value: function gradList() {
          var _this6 = this;

          this.api.gradeList().subscribe(function (data) {
            _this6.gradlist = data;
            _this6.glist = _this6.gradlist.data;
          });
        }
      }, {
        key: "teacher_list_fb",
        value: function teacher_list_fb() {
          this.teacher_list_form = this.formBuilder.group({
            grade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lesson: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            course: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this7 = this;

          this.pdf_list_form.reset();
          this.teacher_list_form.reset();
          localStorage.removeItem("len_val");
          this.gradList();
          this.role_id = localStorage.getItem("role_id");
          this.lessionList();
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
          this.package_status = localStorage.getItem("package_status");
          this.connect_student = localStorage.getItem("connect_student");
          this.g_id = localStorage.getItem("grade_id");
          localStorage.removeItem("pdf_quize");
          localStorage.removeItem("pdf_id");
          localStorage.removeItem("video_quize");
          localStorage.removeItem("video_id");
          localStorage.removeItem("lession_id");
          localStorage.removeItem("course_id");
          localStorage.removeItem("t_search");
          localStorage.removeItem("t_contain");
          localStorage.removeItem("k_search");
          localStorage.removeItem("k_contain");
          localStorage.removeItem("t_quize_contant");
          localStorage.removeItem("t_quize_search");
          localStorage.removeItem("t_video_contant");
          localStorage.removeItem("t_pdf_contant");
          localStorage.removeItem("t_quize_contant");
          localStorage.removeItem("t_quize_search");
          localStorage.removeItem("t_video_contant");
          localStorage.removeItem("t_pdf_contant");
          localStorage.removeItem("notification_data");
          localStorage.removeItem("homework");

          if (this.role_id == '2') {
            this.api.parentPackageStatus().subscribe(function (resp) {
              _this7.kidstatus = resp;

              if (_this7.kidstatus.status == 1) {
                localStorage.setItem("kid_id", _this7.kidstatus.data.kid_id);
                localStorage.setItem("grade_id", _this7.kidstatus.data.grade_id);
                localStorage.setItem("package_status", _this7.kidstatus.data.package_status);
                localStorage.setItem("amount", _this7.kidstatus.data.price);
                localStorage.setItem("package_id", _this7.kidstatus.data.id);
                localStorage.setItem("packagePurchaseId", _this7.kidstatus.data.packagePurchaseId);
              }
            });
          }

          if (this.role_id == '4') {
            this.api.teacherPackageStatus().subscribe(function (resp) {
              _this7.connect = resp;
              localStorage.setItem("connect_student", _this7.connect.data.connect_student);
              localStorage.setItem("package_status", _this7.connect.data.package_status);
              localStorage.setItem("packagePurchaseId", _this7.connect.data.packagePurchaseId);
            });
          } // this.api.presentLoading();
          // this.pdf_process = true;


          this.api.latestPdf().subscribe(function (resp) {
            _this7.result = resp;
            _this7.pdf_result = _this7.result.data; // this.pdf_process = false;
            //   this.api.dismissLoading();
          });
          this.api.searchPageAdd().subscribe(function (resp) {
            _this7.advertise = resp;
            _this7.add = _this7.advertise.data.image;
            _this7.add_url = _this7.advertise.data.url;
          });
        }
      }, {
        key: "ads",
        value: function ads() {
          this.iab.create(this.add_url, '_system', 'location=yes');
        }
      }, {
        key: "searchBar",
        value: function searchBar(value) {
          var searchList = this.pdf_result;

          if (value) {
            searchList = lodash__WEBPACK_IMPORTED_MODULE_7__["filter"](searchList, function (x) {
              if (x.title.toLowerCase().includes(value.toLowerCase())) {
                return x.title.toLowerCase().includes(value.toLowerCase());
              }
            });
          } else {
            searchList = this.result.data;
          }

          this.pdf_result = searchList;
        }
      }, {
        key: "pdf_list_fb",
        value: function pdf_list_fb() {
          this.pdf_list_form = this.formBuilder.group({
            lesson: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            course: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this8 = this;

          for (var v in this.pdf_list_form.controls) {
            this.pdf_list_form.controls[v].markAsTouched();
          }

          if (this.pdf_list_form.valid) {
            this.api.presentLoading();
            this.pdf_process = true;
            var body = {
              lession_id: this.pdf_list_form.value.lesson,
              course_id: this.pdf_list_form.value.course,
              grade_id: localStorage.getItem("grade_id")
            };
            this.api.studentPdf(body).subscribe(function (data) {
              _this8.pdf_process = false;

              _this8.api.dismissLoading();

              if (data.status == 1) {
                // success part
                _this8.api.presentToastWithOptions(data['message']);

                _this8.router.navigate(["/tabs/pdf-search"], {
                  queryParams: {
                    l_id: body.lession_id,
                    c_id: body.course_id
                  }
                });
              } else {
                _this8.api.presentToastWithOptions(data['message']);
              }
            }, function (err) {
              _this8.pdf_process = false;

              _this8.api.dismissLoading();

              _this8.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
          }
        }
      }, {
        key: "teacher",
        value: function teacher() {
          var _this9 = this;

          for (var v in this.teacher_list_form.controls) {
            this.teacher_list_form.controls[v].markAsTouched();
          }

          if (this.teacher_list_form.valid) {
            this.api.presentLoading();
            this.pdf_process = true;
            var body = {
              lession_id: this.teacher_list_form.value.lesson,
              course_id: this.teacher_list_form.value.course,
              grade_id: this.teacher_list_form.value.grade
            };
            this.api.studentPdf(body).subscribe(function (data) {
              _this9.pdf_process = false;

              _this9.api.dismissLoading();

              if (data.status == 1) {
                // success part
                _this9.api.presentToastWithOptions(data['message']);

                _this9.router.navigate(["/tabs/pdf-search"], {
                  queryParams: {
                    l_id: body.lession_id,
                    c_id: body.course_id,
                    g_id: body.grade_id
                  }
                });
              } else {
                _this9.api.presentToastWithOptions(data['message']);
              }
            }, function (err) {
              _this9.pdf_process = false;

              _this9.api.dismissLoading();

              _this9.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
          }
        }
      }, {
        key: "search",
        value: function search(id, quize) {
          if (localStorage.getItem("role_id") === '2') {
            if (localStorage.getItem("kid_id")) {
              if (quize == 0 && this.package_status == 1) {
                this.router.navigate(['/tabs/pdf'], {
                  queryParams: {
                    pdf_id: id
                  }
                });
              } else if (quize == 1) {
                this.router.navigate(['/tabs/pdf'], {
                  queryParams: {
                    pdf_id: id
                  }
                });
              } else {
                this.router.navigate(["/tabs/quiz-premium"], {
                  queryParams: {
                    pdf: "pdf"
                  }
                });
              }
            } else {
              this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');
            }
          }

          if (localStorage.getItem("role_id") === '4') {
            if (quize == 1) {
              this.router.navigate(['/tabs/pdf'], {
                queryParams: {
                  pdf_id: id
                }
              });
            } else {
              if (this.package_status == 1) {
                this.router.navigate(['/tabs/pdf'], {
                  queryParams: {
                    pdf_id: id
                  }
                });
              } else {
                if (this.connect_student >= 6) {
                  this.router.navigate(['/tabs/pdf'], {
                    queryParams: {
                      pdf_id: id
                    }
                  });
                } else {
                  this.router.navigate(["/tabs/teacher-premium"], {
                    queryParams: {
                      pdf: "pdf"
                    }
                  });
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
      }]);

      return PdfKidsListPage;
    }();

    PdfKidsListPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], {
      "static": true
    })], PdfKidsListPage.prototype, "infiniteScroll", void 0);
    PdfKidsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pdf-kids-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pdf-kids-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pdfs/pdf-kids-list/pdf-kids-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pdf-kids-list.page.scss */
      "./src/app/Pdfs/pdf-kids-list/pdf-kids-list.page.scss"))["default"]]
    })], PdfKidsListPage);
    /***/
  }
}]);
//# sourceMappingURL=Pdfs-pdf-kids-list-pdf-kids-list-module-es5.js.map