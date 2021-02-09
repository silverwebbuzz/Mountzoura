(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home-home-kid-home-kid-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/home-kid/home-kid.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/home-kid/home-kid.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\" />\n    <img src=\"../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label class=\"lbl_head_title\">\n    {{'reusable.search_title' | translate}}\n  </ion-label>\n\n  <form [formGroup]=\"home_form\" autocomplete=\"off\" class=\"form_all\">\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.lesson' | translate}}\" formControlName=\"lesson\" class=\"btn-select bg dropWidth\"\n        mode=\"md\" (ionChange)=\"onChangePropertyType($event)\">\n        <ion-select-option *ngFor=\"let opt of llist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <div *ngIf=\"!g_id\">\n      <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"home_form.controls.lesson.hasError('required') && home_form.controls.lesson.touched\">\n        <p class=\"content add-error\">{{'reusable.err_select' | translate}}</p>\n      </ion-item>\n    </div>\n    <div *ngIf=\"g_id\">\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"home_form.controls.lesson.hasError('required') && home_form.controls.lesson.touched\">\n      <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n    </ion-item>\n  </div>\n\n  <ion-item lines=\"none\" class=\"input-item space\">\n    <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.course' | translate}}\" formControlName=\"course\"\n      class=\"btn-select bg dropWidth\" mode=\"md\">\n      <div *ngIf=\"lass_id\">\n      <ion-select-option *ngFor=\"let opt of clist\" [value]=\"opt.id\">{{opt.title}}</ion-select-option>\n    </div>\n      <!-- <ion-select-option *ngIf=\"!lass_id\"></ion-select-option> -->\n    </ion-select>\n  </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"home_form.controls.course.hasError('required') && home_form.controls.course.touched\">\n      <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n    </ion-item>\n  </form>\n\n  <ion-button expand=\"block\" size=\"large\" (click)=\"submit()\" class=\"btn_all\">{{'reusable.btn_search' | translate}}</ion-button>\n\n  <ion-label class=\"lbl_latest lbl_all\">\n    {{'reusable.lbl_recent' | translate}}\n  </ion-label>\n\n\n  <div class=\"isEmpty\"\n    *ngIf=\"quizedata?.length == 0 && pdf?.length == 0 &&  video?.length == 0\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  \n  <ng-container *ngFor=\"let opt of quizedata | slice:0:limit;\">\n    <ion-row class=\"row_list row_all\" (click)=\"quiz_single(opt.id,opt.free_quiz)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img *ngIf=\"!opt.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n            <img *ngIf=\"opt.image\" src=\"{{imageUrl}}{{opt.image}}\" class=\"img_main img_all\" />\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list auto_all\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.lessionTitle}} - {{opt.unitTitle}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='opt.free_quiz == 0' class=\"img_premium\"/>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  \n  <!-- <ng-container  *ngFor=\"let art of article | slice:0:limit\">\n    <ion-row class=\"row_list row_all\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img *ngIf=\"!art.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n          <img *ngIf=\"art.image\" src=\"{{article_url}}{{art.image}}\" class=\"img_main img_all\" />\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{art.title}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{art.lessionTitle}} - {{art.unitTitle}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='art.free_quiz == 0' class=\"img_premium\"/>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n      </ion-col>\n    </ion-row>\n  </ng-container> -->\n  \n  <ng-container  *ngFor=\"let pdf of pdf | slice:0:limit;\">\n    <ion-row class=\"row_list row_all\" (click)=\"quiz_pdf(pdf.id,pdf.free_pdf)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img src=\"../../../assets/images/paper.png\" class=\"img_main\"/>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list auto_all\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{pdf.title}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{pdf.lessionTitle}} - {{pdf.unitTitle}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='pdf.free_pdf == 0' class=\"img_premium\"/>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  \n  <ng-container *ngFor=\"let vid of video | slice:0:limit\">\n    <ion-row class=\"row_list row_all\" (click)=\"quiz_video(vid.id,vid.free_video)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img src=\"../../../assets/images/video.png\" class=\"img_main\"/>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list auto_all\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{vid.title}}</ion-label>\n        \n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='vid.free_video == 0' class=\"img_premium\"/>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n    \n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n  <div *ngIf=\"package_status == 0\">\n  <ion-label class=\"lbl_\">\n    {{'reusable.lbl_access' | translate}}\n  </ion-label>\n\n  \n  <ion-button class=\"btn_premium btn_all\" expand=\"block\" size=\"large\" (click)=\"payment()\">\n    <img src=\"../../../assets/images/premium.png\" class=\"btn_img_premium\"/>\n    {{amount ? amount : '0.0'}} €/{{'reusable.lbl_month' | translate }}\n  </ion-button>\n</div>\n\n<div class=\"div_ads\">\n  <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" (click)=\"ads()\" class=\"img_ads spc_ads\"/>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/Home/home-kid/home-kid-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/Home/home-kid/home-kid-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: HomeKidPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeKidPageRoutingModule", function() { return HomeKidPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_kid_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-kid.page */ "./src/app/Home/home-kid/home-kid.page.ts");




const routes = [
    {
        path: '',
        component: _home_kid_page__WEBPACK_IMPORTED_MODULE_3__["HomeKidPage"]
    }
];
let HomeKidPageRoutingModule = class HomeKidPageRoutingModule {
};
HomeKidPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeKidPageRoutingModule);



/***/ }),

/***/ "./src/app/Home/home-kid/home-kid.module.ts":
/*!**************************************************!*\
  !*** ./src/app/Home/home-kid/home-kid.module.ts ***!
  \**************************************************/
/*! exports provided: HomeKidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeKidPageModule", function() { return HomeKidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_kid_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-kid-routing.module */ "./src/app/Home/home-kid/home-kid-routing.module.ts");
/* harmony import */ var _home_kid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-kid.page */ "./src/app/Home/home-kid/home-kid.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let HomeKidPageModule = class HomeKidPageModule {
};
HomeKidPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_kid_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeKidPageRoutingModule"]
        ],
        declarations: [_home_kid_page__WEBPACK_IMPORTED_MODULE_6__["HomeKidPage"]]
    })
], HomeKidPageModule);



/***/ }),

/***/ "./src/app/Home/home-kid/home-kid.page.scss":
/*!**************************************************!*\
  !*** ./src/app/Home/home-kid/home-kid.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\n.bg .searchBox {\n  --background: #fdf8f1;\n  border: 1px solid var(--ion-color-primary);\n  height: 34px;\n  width: 90%;\n  margin: 0 auto;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n  border-radius: 10px;\n}\n.lbl_head_title {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  width: 75%;\n  margin: 0 auto;\n  padding: 16px;\n}\nion-content {\n  --padding-bottom: 16px;\n}\n.lbl_latest {\n  display: block;\n  padding: 8px;\n}\n.row_list .col_list .img_main {\n  height: 48px;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n.lbl_ {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\n.btn_premium {\n  color: white;\n  width: 90%;\n  margin: 0 auto;\n  text-transform: none;\n  --border-radius: 8px;\n}\n.btn_premium .btn_img_premium {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL0hvbWUvaG9tZS1raWQvaG9tZS1raWQucGFnZS5zY3NzIiwic3JjL2FwcC9Ib21lL2hvbWUta2lkL2hvbWUta2lkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7QUNFSjtBREFFO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG1CQUFBO0FDRUo7QURRQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNMRjtBRGFBO0VBQ0Usc0JBQUE7QUNWRjtBRFlBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNURjtBRGNJO0VBQ0UsWUFBQTtBQ1hOO0FEYUk7RUFDRSxjQUFBO0FDWE47QURhSTtFQUNFLGNBQUE7QUNYTjtBRGFJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNYTjtBRGFJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNYTjtBRGdCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7QUNkRjtBRGdCQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUNiRjtBRGVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvaG9tZS1raWQvaG9tZS1raWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAuaW1nX3Rvb2wge1xuICAgIGhlaWdodDogMzJweDtcbiAgfVxuICAuc2VhcmNoQm94IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGhlaWdodDogMzRweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cbi8vIC5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4vLyAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4ICFpbXBvcnRhbnQ7XG4vLyAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyB9XG4vLyAuaW9uLXNlYXJjaGJhciA6OnBsYWNlaG9sZGVye1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuLy8gfVxuLmxibF9oZWFkX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTZweDtcbn1cbi8vIC5zZWxlY3QtaWNvbntcbi8vICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAuc2VsZWN0LWljb24taW5uZXJ7XG4vLyAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuLy8gfVxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLmxibF9sYXRlc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ucm93X2xpc3Qge1xuICAuY29sX2xpc3Qge1xuICAgIC5pbWdfbWFpbiB7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgfVxuICAgIC5sYmxfcXVpel90aXRsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmxibF91bml0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaW1nX3ByZW1pdW0ge1xuICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgd2lkdGg6IDM0cHg7XG4gICAgfVxuICAgIC5pbWdfYXJyb3cge1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgd2lkdGg6IDI4cHg7XG4gICAgfVxuICB9XG59XG5cbi5sYmxfIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5idG5fcHJlbWl1bSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcblxuICAuYnRuX2ltZ19wcmVtaXVtIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbiIsIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbn1cbi5iZyAuaW1nX3Rvb2wge1xuICBoZWlnaHQ6IDMycHg7XG59XG4uYmcgLnNlYXJjaEJveCB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxibF9oZWFkX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTZweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4ubGJsX2xhdGVzdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19tYWluIHtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3F1aXpfdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmxibF91bml0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfcHJlbWl1bSB7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDM0cHg7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfYXJyb3cge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4ubGJsXyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5idG5fcHJlbWl1bSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5idG5fcHJlbWl1bSAuYnRuX2ltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Home/home-kid/home-kid.page.ts":
/*!************************************************!*\
  !*** ./src/app/Home/home-kid/home-kid.page.ts ***!
  \************************************************/
/*! exports provided: HomeKidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeKidPage", function() { return HomeKidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");










let HomeKidPage = class HomeKidPage {
    constructor(statusBar, stripe, alertCtrl, api, navCtrl, formBuilder, iab, router) {
        this.statusBar = statusBar;
        this.stripe = stripe;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.iab = iab;
        this.router = router;
        this.lessionlist = [];
        this.courcelist = [];
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].image_url;
        this.article_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].article_url;
        this.user_not_found_place_holder = 'assets/images/paper.png';
        this.limit = 10;
        this.advertise_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].advertise_url;
        this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');
        this.home_fb();
    }
    ngOnInit() {
        this.home_form.reset();
    }
    payment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.catcherror = 1;
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Πληρωμή',
                inputs: [
                    {
                        name: 'number',
                        type: 'number',
                        placeholder: 'Αριθμός κάρτας',
                    },
                    {
                        name: 'month',
                        type: 'number',
                        placeholder: 'Μήνας',
                    },
                    {
                        name: 'year',
                        type: 'number',
                        placeholder: 'Έτος',
                    },
                    {
                        name: 'cvc',
                        type: 'number',
                        placeholder: 'CVC',
                    },
                ],
                buttons: [
                    {
                        text: 'Ακύρωση',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            // console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Πληρωμή',
                        handler: (input) => {
                            // console.log('Confirm Cancel', input);
                            if (Number(input.number.length) > 16 || Number(input.number.length) < 16) {
                                this.api.showErrorToast('Πληκτρολογήστε 16ψηφία στο πεδίο της κάρτα.');
                                return false;
                            }
                            if (Number(input.month.length) > 2 || Number(input.month.length) < 1) {
                                this.api.showErrorToast('Πληκτρολογήστε 2 ψήφία!');
                                return false;
                            }
                            if (Number(input.year.length) > 4 || Number(input.year.length) < 4) {
                                this.api.showErrorToast('Πληκτρολογήστε 4 ψήφία!');
                                return false;
                            }
                            if (Number(input.cvc.length) > 4 || Number(input.cvc.length) < 3) {
                                this.api.showErrorToast('Πληκτρολογίστε τον 3ψήφιο κωδικό CVC από το πίσω μέρος της κάρτας.');
                                return false;
                            }
                            this.card = {
                                number: input.number,
                                expMonth: Number(input.month),
                                expYear: Number(input.year),
                                cvc: input.cvc
                            };
                            // console.log('Confirm Ok', this.card);
                            this.api.presentLoading();
                            this.kidd_process = true;
                            this.stripe.createCardToken(this.card)
                                .then(token => {
                                // console.log('stoken', token.id);
                                var body = {
                                    kid_id: localStorage.getItem("kid_id"),
                                    grade_id: localStorage.getItem("grade_id"),
                                    amount: localStorage.getItem("amount"),
                                    stripeToken: token.id,
                                    role_id: localStorage.getItem("role_id"),
                                    package_id: localStorage.getItem("package_id"),
                                    purchase: 0,
                                    packagePurchaseId: localStorage.getItem("packagePurchaseId")
                                };
                                this.api.gradePurchase(body).subscribe((data) => {
                                    this.kidd_process = false;
                                    this.api.dismissLoading();
                                    if (data.status == 1) {
                                        // success part
                                        localStorage.setItem("package_status", '1');
                                        this.api.presentToastWithOptions(data['message']);
                                        this.router.navigate(['/tabs/kid-added']);
                                    }
                                    else {
                                        this.api.presentToastWithOptions(data['message']);
                                    }
                                });
                            })
                                .catch(error => {
                                this.kidd_process = false;
                                this.api.dismissLoading();
                                this.api.presentToastWithOptions(error);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    lessionList() {
        this.api.lessionlist().subscribe(data => {
            this.lessionlist = data;
            this.llist = this.lessionlist.data;
        });
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 10;
            infiniteScroll.target.complete();
        }, 500);
    }
    ionViewWillEnter() {
        localStorage.removeItem("len_val");
        this.lessionList();
        this.home_form.reset();
        this.package_status = localStorage.getItem("package_status");
        this.connect_student = localStorage.getItem("connect_student");
        this.amount = localStorage.getItem("amount");
        this.g_id = localStorage.getItem("grade_id");
        this.role_id = localStorage.getItem("role_id");
        localStorage.removeItem("pdf_quize");
        localStorage.removeItem("pdf_id");
        localStorage.removeItem("video_quize");
        localStorage.removeItem("video_id");
        localStorage.removeItem("lession_id");
        localStorage.removeItem("course_id");
        localStorage.removeItem("k_quize_contant");
        localStorage.removeItem("k_search");
        localStorage.removeItem("k_contain");
        localStorage.removeItem("k_quize_contant");
        localStorage.removeItem("k_quize_search");
        localStorage.removeItem("k_video_contant");
        localStorage.removeItem("k_pdf_contant");
        localStorage.removeItem("notification_data");
        localStorage.removeItem("homework");
        if (this.role_id == '2') {
            this.api.parentPackageStatus().subscribe(resp => {
                this.kidstatus = resp;
                // console.log("testttt", resp)
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
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#fdf8f1');
        // this.api.presentLoading();
        // this.quize_process = true;
        this.api.recentContent().subscribe(resp => {
            this.quizelist = resp;
            this.quizedata = this.quizelist.quiz;
            // this.article = this.quizelist.article;
            this.pdf = this.quizelist.pdf;
            this.video = this.quizelist.video;
            // this.quize_process = false;
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
    home_fb() {
        this.home_form = this.formBuilder.group({
            lesson: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            course: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
    submit() {
        for (let v in this.home_form.controls) {
            this.home_form.controls[v].markAsTouched();
        }
        if (this.home_form.valid) {
            this.api.presentLoading();
            this.quize_process = true;
            var body = {
                lession_id: this.home_form.value.lesson,
                course_id: this.home_form.value.course,
                grade_id: localStorage.getItem("grade_id")
            };
            this.api.studentSearchContent(body).subscribe((data) => {
                this.quize_process = false;
                this.api.dismissLoading();
                if (data.status == 1) {
                    localStorage.setItem("lession_id", body.lession_id);
                    localStorage.setItem("course_id", body.course_id);
                    localStorage.setItem("k_contain", "k_contain");
                    // success part
                    this.api.presentToastWithOptions(data['message']);
                    this.router.navigate(["/tabs/quiz-search"], {
                        queryParams: {
                            l_id: body.lession_id,
                            c_id: body.course_id, k_contain: "k_contain"
                        }
                    });
                }
                else {
                    this.api.presentToastWithOptions(data['message']);
                }
            }, err => {
                this.quize_process = false;
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
        }
    }
    quiz_single(id, quize) {
        localStorage.setItem("k_quize_contant", "k_quize_contant");
        if (localStorage.getItem("kid_id")) {
            if (localStorage.getItem("role_id") === '2') {
                if (quize == 0 && this.package_status == 1) {
                    this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
                }
                else if (quize == 1) {
                    this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
                }
                else {
                    this.router.navigate(["/tabs/quiz-premium"]);
                }
            }
        }
        else {
            this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');
        }
    }
    quiz_video(id, quize) {
        localStorage.setItem("k_video_contant", "k_video_contant");
        if (localStorage.getItem("kid_id")) {
            if (localStorage.getItem("role_id") === '2') {
                if (quize == 0 && this.package_status == 1) {
                    this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
                }
                else if (quize == 1) {
                    this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
                }
                else {
                    this.router.navigate(["/tabs/quiz-premium"]);
                }
            }
        }
        else {
            this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');
        }
    }
    quiz_pdf(id, quize) {
        localStorage.setItem("k_pdf_contant", "k_video_contant");
        if (localStorage.getItem("kid_id")) {
            if (localStorage.getItem("role_id") === '2') {
                if (quize == 0 && this.package_status == 1) {
                    this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id } });
                }
                else if (quize == 1) {
                    this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id } });
                }
                else {
                    this.router.navigate(["/tabs/quiz-premium"]);
                }
            }
        }
        else {
            this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');
        }
    }
    back() {
        this.navCtrl.navigateBack('/tabs/kid-added');
    }
    settings() {
        this.router.navigate(['/tabs/settings']);
    }
};
HomeKidPage.ctorParameters = () => [
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_8__["Stripe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"], { static: true })
], HomeKidPage.prototype, "infiniteScroll", void 0);
HomeKidPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-kid',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-kid.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/home-kid/home-kid.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-kid.page.scss */ "./src/app/Home/home-kid/home-kid.page.scss")).default]
    })
], HomeKidPage);



/***/ })

}]);
//# sourceMappingURL=Home-home-kid-home-kid-module-es2015.js.map