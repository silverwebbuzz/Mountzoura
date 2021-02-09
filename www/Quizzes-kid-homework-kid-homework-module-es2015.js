(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Quizzes-kid-homework-kid-homework-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/kid-homework/kid-homework.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/kid-homework/kid-homework.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"appBar2\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/icon.png\" slot=\"start\" class=\"img_tool_logo\" />\n    <ion-searchbar id=\"searchValue\" (ionChange)=\"searchBar($event.target.value)\"\n      placeholder=\"{{'reusable.search' | translate}}\" searchIcon=\"none\" class=\"searchBox\">\n    </ion-searchbar>\n    <img src=\"../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\" />\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <div class=\"isEmpty1\"\n    *ngIf=\"pdf?.length == 0 || pdf == null && quizedata?.length == 0 || quizedata == null && video?.length == 0 || video == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div> -->\n\n  <div class=\"isEmpty1\"\n    *ngIf=\"pdf?.length == 0 && quizedata?.length == 0 && video?.length == 0\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <div *ngFor=\"let opt of quizedata | slice:0:limit;\">\n    <ion-row class=\"row_list row_all\" (click)=\"quiz_single(opt.QuizId,opt.free_quiz)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <!-- <img src=\"../../../assets/images/paper.png\" class=\"img_main\"/> -->\n        <img *ngIf=\"!opt.QuizImage\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n        <img *ngIf=\"opt.QuizImage\" src=\"{{imageUrl}}{{opt.QuizImage}}\" class=\"img_main img_all\" />\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list auto_all\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.lessionTitle}} - {{opt.unitTitle}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='opt.free_quiz == 0' class=\"img_premium\" />\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\" />\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ng-container *ngFor=\"let pdf of pdf | slice:0:limit;\">\n    <ion-row class=\"row_list row_all\" (click)=\"quiz_pdf(pdf.pdf_id,pdf.free_pdf)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img src=\"../../../assets/images/paper.png\" class=\"img_main\" />\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list auto_all\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{pdf.title}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{pdf.lessionTitle}} - {{pdf.unitTitle}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='pdf.free_pdf == 0' class=\"img_premium\" />\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\" />\n      </ion-col>\n    </ion-row>\n  </ng-container>\n\n  <div *ngFor=\"let vid of video | slice:0:limit;\">\n    <ion-row class=\"row_list row_all\" (click)=\"quiz_video(vid.video_id,vid.free_video)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img src=\"../../../assets/images/video.png\" class=\"img_main img_all\" />\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list auto_all\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{vid.title}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='vid.free_video == 0' class=\"img_premium\" />\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\" />\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/Quizzes/kid-homework/kid-homework-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Quizzes/kid-homework/kid-homework-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: KidHomeworkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidHomeworkPageRoutingModule", function() { return KidHomeworkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _kid_homework_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kid-homework.page */ "./src/app/Quizzes/kid-homework/kid-homework.page.ts");




const routes = [
    {
        path: '',
        component: _kid_homework_page__WEBPACK_IMPORTED_MODULE_3__["KidHomeworkPage"]
    }
];
let KidHomeworkPageRoutingModule = class KidHomeworkPageRoutingModule {
};
KidHomeworkPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KidHomeworkPageRoutingModule);



/***/ }),

/***/ "./src/app/Quizzes/kid-homework/kid-homework.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Quizzes/kid-homework/kid-homework.module.ts ***!
  \*************************************************************/
/*! exports provided: KidHomeworkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidHomeworkPageModule", function() { return KidHomeworkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _kid_homework_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kid-homework-routing.module */ "./src/app/Quizzes/kid-homework/kid-homework-routing.module.ts");
/* harmony import */ var _kid_homework_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kid-homework.page */ "./src/app/Quizzes/kid-homework/kid-homework.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let KidHomeworkPageModule = class KidHomeworkPageModule {
};
KidHomeworkPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _kid_homework_routing_module__WEBPACK_IMPORTED_MODULE_5__["KidHomeworkPageRoutingModule"]
        ],
        declarations: [_kid_homework_page__WEBPACK_IMPORTED_MODULE_6__["KidHomeworkPage"]]
    })
], KidHomeworkPageModule);



/***/ }),

/***/ "./src/app/Quizzes/kid-homework/kid-homework.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/Quizzes/kid-homework/kid-homework.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\n.bg .searchBox {\n  --background: #fdf8f1;\n  border: 1px solid var(--ion-color-primary);\n  height: 34px;\n  width: 90%;\n  margin: 0 auto;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n  border-radius: 10px;\n}\n.row_list .col_list .img_main {\n  height: 48px;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1F1aXp6ZXMva2lkLWhvbWV3b3JrL2tpZC1ob21ld29yay5wYWdlLnNjc3MiLCJzcmMvYXBwL1F1aXp6ZXMva2lkLWhvbWV3b3JrL2tpZC1ob21ld29yay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0FDRUo7QURBRTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7VUFBQSx5QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEVUk7RUFDRSxZQUFBO0FDUE47QURTSTtFQUNFLGNBQUE7QUNQTjtBRFNJO0VBQ0UsY0FBQTtBQ1BOO0FEU0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ1BOO0FEU0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvUXVpenplcy9raWQtaG9tZXdvcmsva2lkLWhvbWV3b3JrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbiAgLmltZ190b29sIHtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cbiAgLnNlYXJjaEJveCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG59XG4vLyAuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuLy8gICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuLy8gICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gfVxuLy8gLmlvbi1zZWFyY2hiYXIgOjpwbGFjZWhvbGRlciB7XG4vLyAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuLy8gfVxuLnJvd19saXN0IHtcbiAgLmNvbF9saXN0IHtcbiAgICAuaW1nX21haW4ge1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgIH1cbiAgICAubGJsX3F1aXpfdGl0bGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5sYmxfdW5pdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmltZ19wcmVtaXVtIHtcbiAgICAgIGhlaWdodDogMzRweDtcbiAgICAgIHdpZHRoOiAzNHB4O1xuICAgIH1cbiAgICAuaW1nX2Fycm93IHtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xufVxuLmJnIC5pbWdfdG9vbCB7XG4gIGhlaWdodDogMzJweDtcbn1cbi5iZyAuc2VhcmNoQm94IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfbWFpbiB7XG4gIGhlaWdodDogNDhweDtcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmxibF9xdWl6X3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfdW5pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX3ByZW1pdW0ge1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAzNHB4O1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX2Fycm93IHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Quizzes/kid-homework/kid-homework.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/Quizzes/kid-homework/kid-homework.page.ts ***!
  \***********************************************************/
/*! exports provided: KidHomeworkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidHomeworkPage", function() { return KidHomeworkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let KidHomeworkPage = class KidHomeworkPage {
    constructor(router, api, statusBar) {
        this.router = router;
        this.api = api;
        this.statusBar = statusBar;
        this.quizedata = [];
        this.limit = 10;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].image_url;
        this.user_not_found_place_holder = 'assets/images/paper.png';
        this.pdf = [];
        this.video = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#fdf8f1');
        localStorage.removeItem("lession_id");
        localStorage.removeItem("course_id");
        this.package_status = localStorage.getItem("package_status");
        this.connect_student = localStorage.getItem("connect_student");
        // this.api.presentLoading();
        // this.quize_process = true;
        this.api.KidHomework().subscribe(resp => {
            this.resp = resp;
            this.quizedata = this.resp.quiz;
            this.pdf = this.resp.pdf;
            this.video = this.resp.video;
            // this.quize_process = false;
            //   this.api.dismissLoading();
            //  this.api.dismissLoading();
        });
    }
    searchBar(value) {
        let quizeList = this.quizedata;
        let pdfList = this.pdf;
        let videoList = this.video;
        if (value) {
            quizeList = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](quizeList, function (x) {
                if (x.title.toLowerCase().includes(value.toLowerCase())) {
                    return x.title.toLowerCase().includes(value.toLowerCase());
                }
            });
            pdfList = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](pdfList, function (x) {
                // console.log("quizelist", pdfList)
                if (x.title.toLowerCase().includes(value.toLowerCase())) {
                    return x.title.toLowerCase().includes(value.toLowerCase());
                }
            });
            videoList = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](videoList, function (x) {
                // console.log("quizelist", videoList)
                if (x.title.toLowerCase().includes(value.toLowerCase())) {
                    return x.title.toLowerCase().includes(value.toLowerCase());
                }
            });
        }
        else {
            quizeList = this.resp.quiz;
            pdfList = this.resp.pdf;
            videoList = this.resp.video;
        }
        this.quizedata = quizeList;
        this.pdf = pdfList;
        this.video = videoList;
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 10;
            infiniteScroll.target.complete();
        }, 500);
    }
    quiz_single(id, quize) {
        if (localStorage.getItem("role_id") === '2') {
            localStorage.setItem("homework", 'homework');
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
        if (localStorage.getItem("role_id") === '4') {
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
    }
    quiz_video(id, quize) {
        if (localStorage.getItem("role_id") === '2') {
            localStorage.setItem("homework", 'homework');
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
        if (localStorage.getItem("role_id") === '2') {
            localStorage.setItem("homework", 'homework');
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
};
KidHomeworkPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: true })
], KidHomeworkPage.prototype, "infiniteScroll", void 0);
KidHomeworkPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kid-homework',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./kid-homework.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/kid-homework/kid-homework.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./kid-homework.page.scss */ "./src/app/Quizzes/kid-homework/kid-homework.page.scss")).default]
    })
], KidHomeworkPage);



/***/ })

}]);
//# sourceMappingURL=Quizzes-kid-homework-kid-homework-module-es2015.js.map