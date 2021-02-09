(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos-kid-list-kid-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/videos/kid-list/kid-list.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videos/kid-list/kid-list.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"appBar2\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/icon.png\" slot=\"start\" class=\"img_tool_logo\" />\n    <ion-searchbar id=\"searchValue\" (ionChange)=\"searchBar($event.target.value)\" placeholder=\"{{'reusable.search' | translate}}\" searchIcon=\"none\" class=\"searchBox\"></ion-searchbar>\n    <img src=\"../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"role_id === '2'\">\n\n  <ion-label class=\"lbl_head_title\">\n    {{'reusable.search_title' | translate}}\n  </ion-label>\n  <form [formGroup]=\"video_list_form\" autocomplete=\"off\" class=\"form_all\">\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.lesson' | translate}}\"  formControlName=\"lesson\"\n        class=\"btn-select bg dropWidth\" mode=\"md\" (ionChange)=\"onChangePropertyType($event)\">\n        <ion-select-option *ngFor=\"let opt of llist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <div *ngIf=\"!g_id\">\n      <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"video_list_form.controls.lesson.hasError('required') && video_list_form.controls.lesson.touched\">\n        <p class=\"content add-error\">{{'reusable.err_select' | translate}}</p>\n      </ion-item>\n    </div>\n    <div *ngIf=\"g_id\">\n  <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"video_list_form.controls.lesson.hasError('required') && video_list_form.controls.lesson.touched\">\n      <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n    </ion-item>\n    </div>\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.course' | translate}}\" formControlName=\"course\"\n        class=\"btn-select bg dropWidth\" mode=\"md\">\n        <div *ngIf=\"lass_id\">\n        <ion-select-option *ngFor=\"let opt of clist\" [value]=\"opt.id\">{{opt.title}}</ion-select-option>\n      </div>\n        <!-- <ion-select-option *ngIf=\"!lass_id\"></ion-select-option> -->\n      </ion-select>\n    </ion-item>\n\n  <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"video_list_form.controls.course.hasError('required') && video_list_form.controls.course.touched\">\n      <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n    </ion-item>\n\n  </form>\n  <ion-button expand=\"block\" size=\"large\" (click)=\"submit()\" class=\"btn_all\">{{'videos_list.btn_search' | translate}}</ion-button>\n\n  <ion-label class=\"lbl_latest lbl_all\">\n    {{'videos_list.lable2' | translate}}\n  </ion-label>\n\n  <div class=\"isEmpty\" *ngIf=\"video_result?.length == 0 || video_result == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <ng-container  *ngFor=\"let opt of video_result | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"video(opt.id,opt.free_video)\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n        <img src=\"../../../assets/images/video.png\" class=\"img_main img_all\"/>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n      <!-- <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.title}}</ion-label> -->\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../assets/images/premium.png\" *ngIf = \"opt.free_video == 0\" class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n</ng-container>\n\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n<div class=\"div_ads\">\n  <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" (click)=\"ads()\" class=\"img_ads spc_ads\"/>\n</div>\n\n</ion-content>\n\n\n<ion-content *ngIf=\"role_id === '4'\">\n  <ion-label class=\"lbl_head_title\">\n    {{'reusable.search_title' | translate}}\n  </ion-label>\n<div >\n    <form [formGroup]=\"teacher_list_form\" autocomplete=\"off\" class=\"form_all\">\n  \n      <ion-item lines=\"none\" class=\"input-item space\">\n        <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.grade' | translate}}\"  formControlName=\"grade\"\n          class=\"btn-select bg dropWidth\" mode=\"md\" (ionChange)=\"teacherlessionList($event)\">\n          <ion-select-option *ngFor=\"let opt of glist\" [value]=\"opt.id\">{{opt.title}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    \n      <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"teacher_list_form.controls.grade.hasError('required') && teacher_list_form.controls.grade.touched\">\n          <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n        </ion-item>\n  \n      <ion-item lines=\"none\" class=\"input-item space\">\n        <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.lesson' | translate}}\"  formControlName=\"lesson\"\n          class=\"btn-select bg dropWidth\" mode=\"md\" (ionChange)=\"onChangecourseType($event)\">\n         <div *ngIf=\"course_id\">\n          <ion-select-option *ngFor=\"let opt of t_llist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n        </div>\n        <!-- <ion-select-option *ngIf=\"!course_id\"></ion-select-option> -->\n        </ion-select>\n      </ion-item>\n  \n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"teacher_list_form.controls.lesson.hasError('required') && teacher_list_form.controls.lesson.touched\">\n        <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n      </ion-item>\n  \n      <ion-item lines=\"none\" class=\"input-item space\">\n        <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.course' | translate}}\"  formControlName=\"course\"\n          class=\"btn-select bg dropWidth\" mode=\"md\">\n          <div *ngIf=\"ts_id\">\n          <ion-select-option *ngFor=\"let opt of tclist\" [value]=\"opt.id\">{{opt.title}}</ion-select-option>\n        </div>\n        <!-- <ion-select-option *ngIf=\"!ts_id\"></ion-select-option> -->\n        </ion-select>\n      </ion-item>\n  \n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"teacher_list_form.controls.course.hasError('required') && teacher_list_form.controls.course.touched\">\n        <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n      </ion-item>\n  \n    </form>\n</div>\n\n\n\n  <ion-button expand=\"block\" size=\"large\" (click)=\"teacher()\" class=\"btn_all\">{{'videos_list.btn_search' | translate}}</ion-button>\n\n  <ion-label class=\"lbl_latest lbl_all\">\n    {{'videos_list.lable2' | translate}}\n  </ion-label>\n\n  <div class=\"isEmpty\" *ngIf=\"video_result?.length == 0 || video_result == null \">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <ng-container  *ngFor=\"let opt of video_result | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"video(opt.id,opt.free_video)\">\n    <ion-col size=\"2\" class=\"col_list col_all\" (click)=\"start(opt.url)\">\n        <img src=\"../../../assets/images/video.png\" class=\"img_main img_all\"/>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n      <!-- <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.title}}</ion-label> -->\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../assets/images/premium.png\" *ngIf = \"opt.free_video == 0\" class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n</ng-container>\n\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n<div class=\"div_ads\">\n  <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" (click)=\"ads()\"class=\"img_ads spc_ads\"/>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/videos/kid-list/kid-list-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/videos/kid-list/kid-list-routing.module.ts ***!
  \************************************************************/
/*! exports provided: KidListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidListPageRoutingModule", function() { return KidListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _kid_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kid-list.page */ "./src/app/videos/kid-list/kid-list.page.ts");




const routes = [
    {
        path: '',
        component: _kid_list_page__WEBPACK_IMPORTED_MODULE_3__["KidListPage"]
    }
];
let KidListPageRoutingModule = class KidListPageRoutingModule {
};
KidListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KidListPageRoutingModule);



/***/ }),

/***/ "./src/app/videos/kid-list/kid-list.module.ts":
/*!****************************************************!*\
  !*** ./src/app/videos/kid-list/kid-list.module.ts ***!
  \****************************************************/
/*! exports provided: KidListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidListPageModule", function() { return KidListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _kid_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kid-list-routing.module */ "./src/app/videos/kid-list/kid-list-routing.module.ts");
/* harmony import */ var _kid_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kid-list.page */ "./src/app/videos/kid-list/kid-list.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let KidListPageModule = class KidListPageModule {
};
KidListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _kid_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["KidListPageRoutingModule"]
        ],
        declarations: [_kid_list_page__WEBPACK_IMPORTED_MODULE_6__["KidListPage"]]
    })
], KidListPageModule);



/***/ }),

/***/ "./src/app/videos/kid-list/kid-list.page.scss":
/*!****************************************************!*\
  !*** ./src/app/videos/kid-list/kid-list.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\n.bg .searchBox {\n  --background: #fdf8f1;\n  border: 1px solid var(--ion-color-primary);\n  height: 34px;\n  width: 90%;\n  margin: 0 auto;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n  border-radius: 10px;\n}\n.lbl_head_title {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  width: 75%;\n  margin: 0 auto;\n  padding: 16px;\n}\n.lbl_latest {\n  display: block;\n  padding: 8px;\n}\n.row_list .col_list .img_main {\n  height: 48px;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL3ZpZGVvcy9raWQtbGlzdC9raWQtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZGVvcy9raWQtbGlzdC9raWQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQUk7RUFDRSxZQUFBO0FDRU47QURBSTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7VUFBQSx5QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxtQkFBQTtBQ0VOO0FEUUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDTEo7QURhRTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDVk47QURlVTtFQUNJLFlBQUE7QUNaZDtBRGNVO0VBQ0ksY0FBQTtBQ1pkO0FEY1U7RUFDSSxjQUFBO0FDWmQ7QURjVTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDWmQ7QURjVTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDWmQiLCJmaWxlIjoic3JjL2FwcC92aWRlb3Mva2lkLWxpc3Qva2lkLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgLmltZ190b29sIHtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICB9XG4gICAgLnNlYXJjaEJveCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfSAgXG4gIH1cbi8vICAgLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgIH1cbi8vICAgLmlvbi1zZWFyY2hiYXIgOjpwbGFjZWhvbGRlcntcbi8vICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuLy8gICB9XG4gIC5sYmxfaGVhZF90aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgLy8gLnNlbGVjdC1pY29ue1xuICAvLyAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAvLyB9XG4gIC8vIC5zZWxlY3QtaWNvbi1pbm5lcntcbiAgLy8gICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgLy8gfVxuICAubGJsX2xhdGVzdHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogOHB4O1xuICB9XG4gIFxuICAucm93X2xpc3R7XG4gICAgICAuY29sX2xpc3R7XG4gICAgICAgICAgLmltZ19tYWlue1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYmxfcXVpel90aXRsZXtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYmxfdW5pdHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWdfcHJlbWl1bXtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZ19hcnJvd3tcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH0iLCIuYmcge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG59XG4uYmcgLmltZ190b29sIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLmJnIC5zZWFyY2hCb3gge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sYmxfaGVhZF90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5sYmxfbGF0ZXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX21haW4ge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfcXVpel90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3VuaXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19hcnJvdyB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/videos/kid-list/kid-list.page.ts":
/*!**************************************************!*\
  !*** ./src/app/videos/kid-list/kid-list.page.ts ***!
  \**************************************************/
/*! exports provided: KidListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidListPage", function() { return KidListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");










let KidListPage = class KidListPage {
    constructor(formBuilder, platform, router, iab, api, route, statusBar) {
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.router = router;
        this.iab = iab;
        this.api = api;
        this.route = route;
        this.statusBar = statusBar;
        this.lessionlist = [];
        this.courcelist = [];
        this.limit = 10;
        this.advertise_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].advertise_url;
        this.video_list_fb();
        this.teacher_list_fb();
    }
    ngOnInit() {
        this.video_list_form.reset();
        this.teacher_list_form.reset();
    }
    searchBar(value) {
        let searchList = this.video_result;
        if (value) {
            searchList = lodash__WEBPACK_IMPORTED_MODULE_7__["filter"](searchList, function (x) {
                if (x.title.toLowerCase().includes(value.toLowerCase())) {
                    return x.title.toLowerCase().includes(value.toLowerCase());
                }
            });
        }
        else {
            searchList = this.result.data;
        }
        this.video_result = searchList;
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 10;
            infiniteScroll.target.complete();
        }, 500);
    }
    teacherlessionList(e) {
        this.course_id = e.target.value;
        this.api.teacher_lessionlist(e.target.value).subscribe(data => {
            this.t_lessionlist = data;
            this.t_llist = this.t_lessionlist.data;
        });
    }
    onChangecourseType(e) {
        localStorage.setItem("l_id", e.target.value);
        this.ts_id = e.target.value;
        this.api.courselist(e.target.value).subscribe(data => {
            this.tcourcelist = data;
            this.tclist = this.tcourcelist.data;
        });
    }
    gradList() {
        this.api.gradeList().subscribe(data => {
            this.gradlist = data;
            this.glist = this.gradlist.data;
        });
    }
    teacher_list_fb() {
        this.teacher_list_form = this.formBuilder.group({
            grade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lesson: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            course: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    lessionList() {
        this.api.lessionlist().subscribe(data => {
            this.lessionlist = data;
            this.llist = this.lessionlist.data;
        });
    }
    onChangePropertyType(e) {
        localStorage.setItem("l_id", e.target.value);
        this.lass_id = e.target.value;
        this.api.courselist(e.target.value).subscribe(data => {
            this.courcelist = data;
            this.clist = this.courcelist.data;
        });
    }
    ionViewWillEnter() {
        this.video_list_form.reset();
        this.teacher_list_form.reset();
        this.lessionList();
        this.gradList();
        localStorage.removeItem("len_val");
        this.role_id = localStorage.getItem("role_id");
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
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#fdf8f1');
        if (this.role_id == '2') {
            this.api.parentPackageStatus().subscribe(resp => {
                this.kidstatus = resp;
                if (this.kidstatus.status == 1) {
                    localStorage.setItem("kid_id", this.kidstatus.data.kid_id);
                    localStorage.setItem("grade_id", this.kidstatus.data.grade_id);
                    localStorage.setItem("package_status", this.kidstatus.data.package_status);
                    localStorage.setItem("amount", this.kidstatus.data.price);
                    localStorage.setItem("package_id", this.kidstatus.data.id);
                    localStorage.setItem("packagePurchaseId", this.kidstatus.data.packagePurchaseId);
                }
            });
        }
        this.g_id = localStorage.getItem("grade_id");
        this.package_status = localStorage.getItem("package_status");
        this.connect_student = localStorage.getItem("connect_student");
        if (this.role_id == '4') {
            this.api.teacherPackageStatus().subscribe(resp => {
                this.connect = resp;
                localStorage.setItem("connect_student", this.connect.data.connect_student);
                localStorage.setItem("package_status", this.connect.data.package_status);
                localStorage.setItem("packagePurchaseId", this.connect.data.packagePurchaseId);
            });
        }
        // this.api.presentLoading();
        this.api.Videolist().subscribe(resp => {
            this.result = resp;
            this.video_result = this.result.data;
            // this.api.dismissLoading();
        });
        this.api.searchPageAdd().subscribe(resp => {
            this.advertise = resp;
            this.add = this.advertise.data.image;
            this.add_url = this.advertise.data.url;
        });
    }
    ads() {
        this.iab.create(this.add_url, '_system', 'location=yes');
    }
    video_list_fb() {
        this.video_list_form = this.formBuilder.group({
            lesson: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            course: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    submit() {
        for (let v in this.video_list_form.controls) {
            this.video_list_form.controls[v].markAsTouched();
        }
        if (this.video_list_form.valid) {
            this.api.presentLoading();
            this.video_process = true;
            var body = {
                lession_id: this.video_list_form.value.lesson,
                course_id: this.video_list_form.value.course,
                grade_id: localStorage.getItem("grade_id")
            };
            this.api.studentVideo(body).subscribe((data) => {
                this.video_process = false;
                this.api.dismissLoading();
                if (data.status == 1) {
                    // success part
                    this.api.presentToastWithOptions(data['message']);
                    this.router.navigate(["/tabs/video-search"], { queryParams: { l_id: body.lession_id, c_id: body.course_id } });
                }
                else {
                    this.api.presentToastWithOptions(data['message']);
                }
            }, err => {
                this.video_process = false;
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
        }
    }
    teacher() {
        for (let v in this.teacher_list_form.controls) {
            this.teacher_list_form.controls[v].markAsTouched();
        }
        if (this.teacher_list_form.valid) {
            this.api.presentLoading();
            this.video_process = true;
            var body = {
                lession_id: this.teacher_list_form.value.lesson,
                course_id: this.teacher_list_form.value.course,
                grade_id: this.teacher_list_form.value.grade,
            };
            this.api.studentVideo(body).subscribe((data) => {
                this.video_process = false;
                this.api.dismissLoading();
                if (data.status == 1) {
                    // success part
                    this.api.presentToastWithOptions(data['message']);
                    this.router.navigate(["/tabs/video-search"], {
                        queryParams: { l_id: body.lession_id, c_id: body.course_id, g_id: body.grade_id }
                    });
                }
                else {
                    this.api.presentToastWithOptions(data['message']);
                }
            }, err => {
                this.video_process = false;
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
        }
    }
    video(id, quize) {
        if (localStorage.getItem("role_id") === '2') {
            if (localStorage.getItem("kid_id")) {
                if (quize == 0 && this.package_status == 1) {
                    this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
                }
                else if (quize == 1) {
                    this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
                }
                else {
                    this.router.navigate(["/tabs/quiz-premium"], { queryParams: { video: "video" } });
                }
            }
            else {
                this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');
            }
        }
        if (localStorage.getItem("role_id") === '4') {
            if (quize == 1) {
                this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
            }
            else {
                if (this.package_status == 1) {
                    this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
                }
                else {
                    if (this.connect_student >= 6) {
                        this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
                    }
                    else {
                        this.router.navigate(["/tabs/teacher-premium"], { queryParams: { video: "video" } });
                    }
                }
            }
        }
    }
    settings() {
        this.router.navigate(['/tabs/settings']);
    }
};
KidListPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: true })
], KidListPage.prototype, "infiniteScroll", void 0);
KidListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kid-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./kid-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/videos/kid-list/kid-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./kid-list.page.scss */ "./src/app/videos/kid-list/kid-list.page.scss")).default]
    })
], KidListPage);



/***/ })

}]);
//# sourceMappingURL=videos-kid-list-kid-list-module-es2015.js.map