(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Teachers-student-quiz-list-single-quiz-single-quiz-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\" />\n    <ion-title class=\"title_all\">{{'single.more_results' | translate}}</ion-title>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"isEmpty1\" *ngIf=\"resp_list?.length == 0 || resp_list == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <ng-container *ngFor=\"let opt of resp_list | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"right(opt.QuestionId,opt.correct_answer,opt.kid_unique_id)\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n      <img *ngIf=\"opt.que_image == null\" src=\"../../../../assets/images/casino.png\" class=\"img_main img_all\"/>\n      <img *ngIf=\"opt.que_image\" src=\"{{imageUrl}}{{opt.que_image}}\" class=\"img_main img_quiz\" />\n\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.question}}</ion-label>\n      <ion-label *ngIf=\"opt.answer_image == null\" class=\"lbl_unit lbl_desc_all\">απάντηση: {{opt.answer_text}}</ion-label>\n      <!-- <img *ngIf=\"!opt.answer_image == null\" src=\"{{imageUrl}}{{opt.answer_image}}\" class=\"img_all\" /> -->\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img *ngIf=\"opt.correct_answer == '1'\" src=\"../../../../assets/images/shapes.png\" class=\"img_premium\"/>\n      <img *ngIf=\"opt.correct_answer == '0'\" src=\"../../../../assets/images/wrong.png\" class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n</ng-container>\n\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Teachers/student-quiz-list/single-quiz/single-quiz-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Teachers/student-quiz-list/single-quiz/single-quiz-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: SingleQuizPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleQuizPageRoutingModule", function() { return SingleQuizPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _single_quiz_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-quiz.page */ "./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.page.ts");




const routes = [
    {
        path: '',
        component: _single_quiz_page__WEBPACK_IMPORTED_MODULE_3__["SingleQuizPage"]
    }
];
let SingleQuizPageRoutingModule = class SingleQuizPageRoutingModule {
};
SingleQuizPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingleQuizPageRoutingModule);



/***/ }),

/***/ "./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.module.ts ***!
  \******************************************************************************/
/*! exports provided: SingleQuizPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleQuizPageModule", function() { return SingleQuizPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _single_quiz_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-quiz-routing.module */ "./src/app/Teachers/student-quiz-list/single-quiz/single-quiz-routing.module.ts");
/* harmony import */ var _single_quiz_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-quiz.page */ "./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let SingleQuizPageModule = class SingleQuizPageModule {
};
SingleQuizPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _single_quiz_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingleQuizPageRoutingModule"]
        ],
        declarations: [_single_quiz_page__WEBPACK_IMPORTED_MODULE_6__["SingleQuizPage"]]
    })
], SingleQuizPageModule);



/***/ }),

/***/ "./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content .row_list .col_list .img_main {\n  height: 48px;\n}\nion-content .row_list .col_list .lbl_quiz_title {\n  display: block;\n}\nion-content .row_list .col_list .lbl_unit {\n  display: block;\n}\nion-content .row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\nion-content .row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1RlYWNoZXJzL3N0dWRlbnQtcXVpei1saXN0L3NpbmdsZS1xdWl6L3NpbmdsZS1xdWl6LnBhZ2Uuc2NzcyIsInNyYy9hcHAvVGVhY2hlcnMvc3R1ZGVudC1xdWl6LWxpc3Qvc2luZ2xlLXF1aXovc2luZ2xlLXF1aXoucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FEUVk7RUFDSSxZQUFBO0FDTGhCO0FET1k7RUFDSSxjQUFBO0FDTGhCO0FET1k7RUFDSSxjQUFBO0FDTGhCO0FET1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0xoQjtBRE9ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNMaEIiLCJmaWxlIjoic3JjL2FwcC9UZWFjaGVycy9zdHVkZW50LXF1aXotbGlzdC9zaW5nbGUtcXVpei9zaW5nbGUtcXVpei5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAgIC5pbWdfdG9vbHtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgIH1cbn1cbi8vIC5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHggIWltcG9ydGFudDtcbi8vICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gICB9XG5pb24tY29udGVudHtcbiAgICAucm93X2xpc3R7XG4gICAgICAgIC5jb2xfbGlzdHtcbiAgICAgICAgICAgIC5pbWdfbWFpbntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGJsX3F1aXpfdGl0bGV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGJsX3VuaXR7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nX3ByZW1pdW17XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltZ19hcnJvd3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xufVxuLmJnIC5pbWdfdG9vbCB7XG4gIGhlaWdodDogMzJweDtcbn1cblxuaW9uLWNvbnRlbnQgLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX21haW4ge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5pb24tY29udGVudCAucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfcXVpel90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNvbnRlbnQgLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3VuaXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1jb250ZW50IC5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbn1cbmlvbi1jb250ZW50IC5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19hcnJvdyB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.page.ts ***!
  \****************************************************************************/
/*! exports provided: SingleQuizPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleQuizPage", function() { return SingleQuizPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");







let SingleQuizPage = class SingleQuizPage {
    constructor(router, navCtrl, api, route, statusBar) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.api = api;
        this.route = route;
        this.statusBar = statusBar;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].image_url;
        this.limit = 10;
    }
    ngOnInit() {
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 10;
            infiniteScroll.target.complete();
        }, 500);
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#fdf8f1');
        let reqData = this.route.snapshot.queryParams;
        var body = {
            quiz_id: reqData.quiz_id,
            kid_unique_id: reqData.kid_id,
            count: reqData.count
        };
        this.api.studentAnswer(body).subscribe(resp => {
            this.resp = resp;
            this.resp_list = this.resp.data;
            // this.kidd_process = false
        });
    }
    right(que_id, ans, kid_id) {
        let reqData = this.route.snapshot.queryParams;
        if (ans == 1) {
            this.router.navigate(['/tabs/quiz-correct'], { queryParams: { que_id: que_id,
                    kid_id: kid_id, quiz_id: reqData.quiz_id, count: reqData.count } });
        }
        else {
            this.router.navigate(['/tabs/quiz-wrong'], { queryParams: { que_id: que_id,
                    kid_id: kid_id, quiz_id: reqData.quiz_id, count: reqData.count } });
        }
    }
    back() {
        let reqData = this.route.snapshot.queryParams;
        this.navCtrl.navigateBack(['/tabs/student-homework-played'], { queryParams: { kid_id: reqData.kid_id, quiz_id: reqData.quiz_id } });
    }
    settings() {
        this.router.navigate(['/tabs/settings']);
    }
};
SingleQuizPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: true })
], SingleQuizPage.prototype, "infiniteScroll", void 0);
SingleQuizPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-quiz',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./single-quiz.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./single-quiz.page.scss */ "./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.page.scss")).default]
    })
], SingleQuizPage);



/***/ })

}]);
//# sourceMappingURL=Teachers-student-quiz-list-single-quiz-single-quiz-module-es2015.js.map