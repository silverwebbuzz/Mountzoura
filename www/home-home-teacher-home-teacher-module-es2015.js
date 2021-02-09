(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-teacher-home-teacher-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-teacher/home-teacher.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-teacher/home-teacher.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/directional.png\" slot =\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\"/>\n    <img src=\"../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label class=\"lbl_head_title\">\n    {{'single.lbl_home_head' | translate}}\n  </ion-label>\n\n  <form [formGroup]=\"home_form\" autocomplete=\"off\" class=\"form_all\">\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.grade' | translate}}\"  formControlName=\"grade\"\n        class=\"btn-select bg dropWidth\" mode=\"md\" (ionChange)=\"lessionList($event)\">\n        <ion-select-option *ngFor=\"let opt of glist\" [value]=\"opt.id\">{{opt.title}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"home_form.controls.grade.hasError('required') && home_form.controls.grade.touched\">\n        <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"input-item space\">\n        <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.lesson' | translate}}\"  formControlName=\"lesson\"\n          class=\"btn-select bg dropWidth\" mode=\"md\" (ionChange)=\"onChangePropertyType($event)\">\n         <div *ngIf=\"course_id\">\n          <ion-select-option *ngFor=\"let opt of llist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n        </div>\n        <!-- <ion-select-option *ngIf=\"!course_id\"></ion-select-option> -->\n\n        </ion-select>\n      </ion-item>\n\n  <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"home_form.controls.lesson.hasError('required') && home_form.controls.lesson.touched\">\n      <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.course' | translate}}\" formControlName=\"course\"\n        class=\"btn-select bg dropWidth\" mode=\"md\">\n        <div *ngIf=\"lass_id\">\n        <ion-select-option *ngFor=\"let opt of clist\" [value]=\"opt.id\">{{opt.title}}</ion-select-option>\n      </div>\n        <!-- <ion-select-option *ngIf=\"!lass_id\"></ion-select-option> -->\n      </ion-select>\n    </ion-item>\n\n  <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"home_form.controls.course.hasError('required') && home_form.controls.course.touched\">\n      <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n    </ion-item>\n\n  </form>\n\n  <ion-button expand=\"block\" size=\"large\" (click)=\"submit()\" class=\"btn_all\">{{'reusable.btn_search' | translate}}</ion-button>\n\n  <ion-label class=\"lbl_latest lbl_all\">\n    {{'reusable.lbl_recent' | translate}}\n  </ion-label>\n\n  <div class=\"isEmpty\" *ngIf=\"quizedata?.length == 0 && pdf?.length == 0 && video?.length == 0\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n<ng-container *ngFor=\"let opt of quizedata | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"quiz_single(opt.id,opt.free_quiz)\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n      <img *ngIf=\"!opt.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n          <img *ngIf=\"opt.image\" src=\"{{imageUrl}}{{opt.image}}\" class=\"img_main img_all\" />\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n      <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.lessionTitle}} - {{opt.unitTitle}}</ion-label>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../assets/images/premium.png\" *ngIf='opt.free_quiz == 0' class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n</ng-container>\n\n<!-- <ng-container  *ngFor=\"let art of article | slice:0:limit\">\n  <ion-row class=\"row_list row_all\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n      <img *ngIf=\"!art.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n        <img *ngIf=\"art.image\" src=\"{{article_url}}{{art.image}}\" class=\"img_main img_all\" />\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{art.title}}</ion-label>\n      <ion-label class=\"lbl_unit lbl_desc_all\">{{art.lessionTitle}} - {{art.unitTitle}}</ion-label>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../assets/images/premium.png\" *ngIf='art.free_quiz == 0' class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n</ng-container> -->\n\n<ng-container  *ngFor=\"let pdf of pdf | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"quiz_pdf(pdf.id,pdf.free_pdf)\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n      <img src=\"../../../assets/images/paper.png\" class=\"img_main\"/>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{pdf.title}}</ion-label>\n      <ion-label class=\"lbl_unit lbl_desc_all\">{{pdf.lessionTitle}} - {{pdf.unitTitle}}</ion-label>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../assets/images/premium.png\" *ngIf='pdf.free_pdf == 0' class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n</ng-container>\n\n<ng-container  *ngFor=\"let vid of video | slice:0:limit\">\n  <ion-row class=\"row_list row_all\" (click)=\"quiz_video(vid.id,vid.free_video)\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n      <img src=\"../../../assets/images/video.png\" class=\"img_main\"/>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{vid.title}}</ion-label>\n      \n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../assets/images/premium.png\" *ngIf='vid.free_video == 0' class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n</ng-container>\n\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n<div *ngIf=\"package_status == 0 && connect_student < 6\">\n  <ion-label class=\"lbl_\">\n    {{'reusable.lbl_home_teacher_access' | translate}}\n  </ion-label>\n\n  <div class=\"div_img\">\n    <img *ngIf=\"count == 0\" src=\"../../../assets/images/0-out-of-6.png\" class=\"img_points\"/>\n    <img *ngIf=\"count == 1\" src=\"../../../assets/images/1-out-of-6.png\" class=\"img_points\"/>\n    <img *ngIf=\"count == 2\" src=\"../../../assets/images/2-out-of-6.png\" class=\"img_points\"/>\n    <img *ngIf=\"count == 3\" src=\"../../../assets/images/3-out-of-6.png\" class=\"img_points\"/>\n    <img *ngIf=\"count == 4\" src=\"../../../assets/images/4-out-of-6.png\" class=\"img_points\"/>\n    <img *ngIf=\"count == 5\" src=\"../../../assets/images/5-out-of-6.png\" class=\"img_points\"/>\n    <img *ngIf=\"count >= 6\" src=\"../../../assets/images/6-out-of-6.png\" class=\"img_points\"/>\n  </div>\n\n  <ion-button class=\"btn_premium btn_all\" expand=\"block\" size=\"large\" (click)=\"addd()\">\n    <img src=\"../../../assets/images/premium.png\" class=\"btn_img_premium\"/>\n    {{'reusable.btn_add' | translate}}\n  </ion-button>\n\n  <ion-label class=\"lbl_\">\n    {{'reusable.lbl_simple' | translate}}\n  </ion-label>\n\n  <ion-button class=\"btn_premium btn_all\" expand=\"block\" size=\"large\" (click)=\"payment()\">\n    <img src=\"../../../assets/images/premium.png\" class=\"btn_img_premium\"/>\n    {{amount ? amount : '0.0'}} €/{{'reusable.lbl_month' | translate }}\n  </ion-button>\n</div>\n\n<div class=\"div_ads\">\n  <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" (click)=\"ads()\" class=\"img_ads spc_ads\"/>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-teacher/home-teacher-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/home-teacher/home-teacher-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: HomeTeacherPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTeacherPageRoutingModule", function() { return HomeTeacherPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_teacher_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-teacher.page */ "./src/app/home/home-teacher/home-teacher.page.ts");




const routes = [
    {
        path: '',
        component: _home_teacher_page__WEBPACK_IMPORTED_MODULE_3__["HomeTeacherPage"]
    }
];
let HomeTeacherPageRoutingModule = class HomeTeacherPageRoutingModule {
};
HomeTeacherPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeTeacherPageRoutingModule);



/***/ }),

/***/ "./src/app/home/home-teacher/home-teacher.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/home-teacher/home-teacher.module.ts ***!
  \**********************************************************/
/*! exports provided: HomeTeacherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTeacherPageModule", function() { return HomeTeacherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_teacher_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-teacher-routing.module */ "./src/app/home/home-teacher/home-teacher-routing.module.ts");
/* harmony import */ var _home_teacher_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-teacher.page */ "./src/app/home/home-teacher/home-teacher.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let HomeTeacherPageModule = class HomeTeacherPageModule {
};
HomeTeacherPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_teacher_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeTeacherPageRoutingModule"]
        ],
        declarations: [_home_teacher_page__WEBPACK_IMPORTED_MODULE_6__["HomeTeacherPage"]]
    })
], HomeTeacherPageModule);



/***/ }),

/***/ "./src/app/home/home-teacher/home-teacher.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/home/home-teacher/home-teacher.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\n.bg .searchBox {\n  --background: #fdf8f1;\n  border: 1px solid var(--ion-color-primary);\n  height: 34px;\n  width: 90%;\n  margin: 0 auto;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n  border-radius: 10px;\n}\n.lbl_head_title {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  width: 75%;\n  margin: 0 auto;\n  padding: 16px;\n}\nion-content {\n  --padding-bottom: 16px;\n}\n.lbl_latest {\n  display: block;\n  padding: 8px;\n}\n.row_list .col_list .img_main {\n  height: 48px;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n.div_img {\n  text-align: center;\n}\n.div_img .img_points {\n  width: 75%;\n}\n.lbl_ {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\n.btn_premium {\n  color: white;\n  width: 90%;\n  margin: 0 auto;\n}\n.btn_premium .btn_img_premium {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL2hvbWUvaG9tZS10ZWFjaGVyL2hvbWUtdGVhY2hlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS10ZWFjaGVyL2hvbWUtdGVhY2hlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQUk7RUFDRSxZQUFBO0FDRU47QURBSTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7VUFBQSx5QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxtQkFBQTtBQ0VOO0FEUUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDTEo7QURjRTtFQUNFLHNCQUFBO0FDWEo7QURhRTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDVk47QURlVTtFQUNJLFlBQUE7QUNaZDtBRGNVO0VBQ0ksY0FBQTtBQ1pkO0FEY1U7RUFDSSxjQUFBO0FDWmQ7QURjVTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDWmQ7QURjVTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDWmQ7QURnQkU7RUFDRSxrQkFBQTtBQ2JKO0FEY0k7RUFDRSxVQUFBO0FDWk47QURlRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7QUNiSjtBRGVFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDWko7QURjSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDWlIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUtdGVhY2hlci9ob21lLXRlYWNoZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgLmltZ190b29sIHtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICB9XG4gICAgLnNlYXJjaEJveCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfSAgXG4gIH1cbiAgLy8gLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLy8gICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuICAvLyAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC8vIH1cbiAgLy8gLmlvbi1zZWFyY2hiYXIgOjpwbGFjZWhvbGRlcntcbiAgLy8gICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAvLyB9XG4gIC5sYmxfaGVhZF90aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgLy8gLnNlbGVjdC1pY29ue1xuICAvLyAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAvLyB9XG4gIC8vIC5zZWxlY3QtaWNvbi1pbm5lcntcbiAgLy8gICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgLy8gfVxuXG4gIGlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIH1cbiAgLmxibF9sYXRlc3R7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICBcbiAgLnJvd19saXN0e1xuICAgICAgLmNvbF9saXN0e1xuICAgICAgICAgIC5pbWdfbWFpbntcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGJsX3F1aXpfdGl0bGV7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGJsX3VuaXR7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nX3ByZW1pdW17XG4gICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWdfYXJyb3d7XG4gICAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIC5kaXZfaW1ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAuaW1nX3BvaW50c3tcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG4gIC5sYmxfe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyB3aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgLmJ0bl9wcmVtaXVte1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIFxuICAgIC5idG5faW1nX3ByZW1pdW17XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG4gIH0iLCIuYmcge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG59XG4uYmcgLmltZ190b29sIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLmJnIC5zZWFyY2hCb3gge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sYmxfaGVhZF90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLmxibF9sYXRlc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfbWFpbiB7XG4gIGhlaWdodDogNDhweDtcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmxibF9xdWl6X3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfdW5pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX3ByZW1pdW0ge1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAzNHB4O1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX2Fycm93IHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn1cblxuLmRpdl9pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2X2ltZyAuaW1nX3BvaW50cyB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5sYmxfIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmJ0bl9wcmVtaXVtIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5idG5fcHJlbWl1bSAuYnRuX2ltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home-teacher/home-teacher.page.ts":
/*!********************************************************!*\
  !*** ./src/app/home/home-teacher/home-teacher.page.ts ***!
  \********************************************************/
/*! exports provided: HomeTeacherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTeacherPage", function() { return HomeTeacherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");










let HomeTeacherPage = class HomeTeacherPage {
    constructor(statusBar, alertCtrl, stripe, api, iab, router, navCtrl, formBuilder) {
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.stripe = stripe;
        this.api = api;
        this.iab = iab;
        this.router = router;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.lessionlist = [];
        this.courcelist = [];
        this.limit = 10;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].image_url;
        this.article_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].article_url;
        this.user_not_found_place_holder = 'assets/images/paper.png';
        this.advertise_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].advertise_url;
        this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');
        this.home_fb();
    }
    ionViewWillEnter() {
        this.home_form.reset();
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#fdf8f1');
        localStorage.removeItem("len_val");
        this.package_status = localStorage.getItem("package_status");
        this.connect_student = localStorage.getItem("connect_student");
        this.amount = localStorage.getItem("amount");
        this.package_id = localStorage.getItem("package_id");
        this.role_id = localStorage.getItem("role_id");
        localStorage.removeItem("pdf_quize");
        localStorage.removeItem("pdf_id");
        localStorage.removeItem("video_quize");
        localStorage.removeItem("video_id");
        localStorage.removeItem("lession_id");
        localStorage.removeItem("course_id");
        localStorage.removeItem("t_search");
        localStorage.removeItem("t_contain");
        localStorage.removeItem("t_quize_contant");
        localStorage.removeItem("t_quize_search");
        localStorage.removeItem("t_video_contant");
        localStorage.removeItem("t_pdf_contant");
        localStorage.removeItem("notification_data");
        this.api.recentContent().subscribe(resp => {
            this.quizelist = resp;
            this.quizedata = this.quizelist.quiz;
            // this.article = this.quizelist.article;
            this.pdf = this.quizelist.pdf;
            this.video = this.quizelist.video;
        });
        if (this.role_id == '4') {
            this.api.teacherPackageStatus().subscribe(resp => {
                this.connect = resp;
                // console.log("testttt", resp)
                localStorage.setItem("connect_student", this.connect.data.connect_student);
                localStorage.setItem("package_status", this.connect.data.package_status);
                localStorage.setItem("packagePurchaseId", this.connect.data.packagePurchaseId);
            });
        }
        this.api.countConnectStudent().subscribe(resp => {
            this.countdata = resp;
            this.count = this.countdata.count;
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
    ngOnInit() {
        this.gradList();
        this.home_form.reset();
    }
    payment(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.catcherror = 1;
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Πληρωμή',
                inputs: [
                    {
                        name: 'number',
                        type: 'number',
                        placeholder: 'Αριθμός κάρτας'
                    },
                    {
                        name: 'month',
                        type: 'number',
                        placeholder: 'Μήνας'
                    },
                    {
                        name: 'year',
                        type: 'number',
                        placeholder: 'Έτος'
                    },
                    {
                        name: 'cvc',
                        type: 'number',
                        placeholder: 'CVC'
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
                                    amount: this.amount,
                                    stripeToken: token.id,
                                    role_id: this.role_id,
                                    package_id: this.package_id,
                                    packagePurchaseId: localStorage.getItem("packagePurchaseId")
                                };
                                this.api.teacherPackagePurchase(body).subscribe((data) => {
                                    this.kidd_process = false;
                                    this.api.dismissLoading();
                                    if (data.status == 1) {
                                        // success part
                                        localStorage.setItem("package_status", '1');
                                        this.api.presentToastWithOptions(data['message']);
                                        this.router.navigate(['/tabs/student-added']);
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
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 10;
            infiniteScroll.target.complete();
        }, 500);
    }
    lessionList(e) {
        this.course_id = e.target.value;
        this.api.teacher_lessionlist(e.target.value).subscribe(data => {
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
    gradList() {
        this.api.gradeList().subscribe(data => {
            this.gradlist = data;
            this.glist = this.gradlist.data;
        });
    }
    home_fb() {
        this.home_form = this.formBuilder.group({
            grade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lesson: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            course: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
                grade_id: this.home_form.value.grade,
                lession_id: this.home_form.value.lesson,
                course_id: this.home_form.value.course,
            };
            this.api.teacherSearchContent(body).subscribe((data) => {
                this.quize_process = false;
                this.api.dismissLoading();
                if (data.status == 1) {
                    // success part
                    localStorage.setItem("grade_id", body.grade_id);
                    localStorage.setItem("lession_id", body.lession_id);
                    localStorage.setItem("course_id", body.course_id);
                    localStorage.setItem("t_contain", "t_contain");
                    this.api.presentToastWithOptions(data['message']);
                    this.router.navigate(["/tabs/quiz-search"], {
                        queryParams: {
                            g_id: body.grade_id,
                            l_id: body.lession_id, c_id: body.course_id, t_contain: "t_contain"
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
    premium() {
        this.router.navigate(["/tabs/teacher-premium"]);
    }
    addd() {
        this.router.navigate(["/tabs/student-add"]);
    }
    quiz_single(id, quize) {
        localStorage.setItem("t_quize_contant", "t_quize_contant");
        if (quize == 1) {
            this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
        }
        else {
            if (this.package_status == 1) {
                this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
            }
            else {
                if (this.connect_student >= 6) {
                    this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
                }
                else {
                    this.router.navigate(["/tabs/teacher-premium"]);
                }
            }
        }
    }
    quiz_video(id, quize) {
        localStorage.setItem("t_video_contant", "t_video_contant");
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
                        this.router.navigate(["/tabs/teacher-premium"]);
                    }
                }
            }
        }
    }
    quiz_pdf(id, quize) {
        localStorage.setItem("t_pdf_contant", "t_video_contant");
        if (localStorage.getItem("role_id") === '4') {
            if (quize == 1) {
                this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id } });
            }
            else {
                if (this.package_status == 1) {
                    this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id } });
                }
                else {
                    if (this.connect_student >= 6) {
                        this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id } });
                    }
                    else {
                        this.router.navigate(["/tabs/teacher-premium"]);
                    }
                }
            }
        }
    }
    settings() {
        this.router.navigate(['/tabs/settings']);
    }
    back() {
        this.navCtrl.navigateBack('/tabs/student-added');
    }
};
HomeTeacherPage.ctorParameters = () => [
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_8__["Stripe"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], { static: true })
], HomeTeacherPage.prototype, "infiniteScroll", void 0);
HomeTeacherPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-teacher',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-teacher.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-teacher/home-teacher.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-teacher.page.scss */ "./src/app/home/home-teacher/home-teacher.page.scss")).default]
    })
], HomeTeacherPage);



/***/ })

}]);
//# sourceMappingURL=home-home-teacher-home-teacher-module-es2015.js.map