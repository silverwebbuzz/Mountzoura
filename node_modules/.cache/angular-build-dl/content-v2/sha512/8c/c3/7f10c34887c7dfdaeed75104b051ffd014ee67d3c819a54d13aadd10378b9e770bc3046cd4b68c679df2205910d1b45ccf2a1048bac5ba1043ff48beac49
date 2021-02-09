(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Quizzes-quiz-premium-quiz-premium-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-premium/quiz-premium.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-premium/quiz-premium.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/directional.png\" slot =\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\"/>\n    <img src=\"../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"isEmpty\" *ngIf=\"listdata?.length == 0 || listdata == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n  \n<!-- <ng-container *ngFor=\"let opt of listdata | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"getkid_data(opt.id)\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n      <img *ngIf=\"opt.gender == 'boy'\" src=\"../../../../assets/images/profile.png\" class=\"img_main img_all\" />\n          <img *ngIf=\"opt.gender == 'girl'\" src=\"../../../../assets/images/girl.png\" class=\"img_main img_all\" />\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.name}} #{{opt.kid_id}}</ion-label>\n      <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.gradeName}}</ion-label>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../assets/images/premium.png\" *ngIf=\"opt.package_staus == 1\" class=\"img_premium\"/>\n    </ion-col>\n    \n  </ion-row>\n</ng-container>\n\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll> -->\n\n\n  <ion-label class=\"lbl_premium\">\n    {{'reusable.lbl_premiums' | translate}}\n  </ion-label>\n \n  <div class=\"div_img\">\n  <img src=\"../../../assets/images/premium.png\" class=\"img_premium\"/>\n</div>\n\n  <ion-label class=\"lbl_\">\n    {{'reusable.lbl_access' | translate}}\n  </ion-label>\n\n  <ion-button class=\"btn_premium btn_all\" expand=\"block\" size=\"large\" (click)=\"payment()\">\n    <img src=\"../../../assets/images/premium.png\" class=\"btn_img_premium\" />\n    {{amount ? amount : '0.0'}} €/{{'reusable.lbl_month' | translate }}\n  </ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Quizzes/quiz-premium/quiz-premium-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Quizzes/quiz-premium/quiz-premium-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: QuizPremiumPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPremiumPageRoutingModule", function() { return QuizPremiumPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _quiz_premium_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-premium.page */ "./src/app/Quizzes/quiz-premium/quiz-premium.page.ts");




const routes = [
    {
        path: '',
        component: _quiz_premium_page__WEBPACK_IMPORTED_MODULE_3__["QuizPremiumPage"]
    }
];
let QuizPremiumPageRoutingModule = class QuizPremiumPageRoutingModule {
};
QuizPremiumPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuizPremiumPageRoutingModule);



/***/ }),

/***/ "./src/app/Quizzes/quiz-premium/quiz-premium.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Quizzes/quiz-premium/quiz-premium.module.ts ***!
  \*************************************************************/
/*! exports provided: QuizPremiumPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPremiumPageModule", function() { return QuizPremiumPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _quiz_premium_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz-premium-routing.module */ "./src/app/Quizzes/quiz-premium/quiz-premium-routing.module.ts");
/* harmony import */ var _quiz_premium_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz-premium.page */ "./src/app/Quizzes/quiz-premium/quiz-premium.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let QuizPremiumPageModule = class QuizPremiumPageModule {
};
QuizPremiumPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quiz_premium_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizPremiumPageRoutingModule"]
        ],
        declarations: [_quiz_premium_page__WEBPACK_IMPORTED_MODULE_6__["QuizPremiumPage"]]
    })
], QuizPremiumPageModule);



/***/ }),

/***/ "./src/app/Quizzes/quiz-premium/quiz-premium.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/Quizzes/quiz-premium/quiz-premium.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 16px;\n}\nion-content .lbl_premium {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\nion-content .div_img {\n  text-align: center;\n  padding: 16px 0px;\n}\nion-content .div_img .img_premium {\n  height: 100px;\n}\nion-content .lbl_ {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\nion-content .btn_premium {\n  color: white;\n  width: 90%;\n  margin: 0 auto;\n}\nion-content .btn_premium .btn_img_premium {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  left: 0;\n}\n.row_list .col_list .img_main {\n  height: 48px;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1F1aXp6ZXMvcXVpei1wcmVtaXVtL3F1aXotcHJlbWl1bS5wYWdlLnNjc3MiLCJzcmMvYXBwL1F1aXp6ZXMvcXVpei1wcmVtaXVtL3F1aXotcHJlbWl1bS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0FDRVI7QURLQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDRko7QURJSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7QUNIUjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0hSO0FESVE7RUFDSSxhQUFBO0FDRlo7QURPSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7QUNOUjtBRFFJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDTlI7QURPUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDTFo7QURXUTtFQUNJLFlBQUE7QUNSWjtBRFVRO0VBQ0ksY0FBQTtBQ1JaO0FEVVE7RUFDSSxjQUFBO0FDUlo7QURVUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDUlo7QURVUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDUloiLCJmaWxlIjoic3JjL2FwcC9RdWl6emVzL3F1aXotcHJlbWl1bS9xdWl6LXByZW1pdW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xuICAgIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbiAgICAuaW1nX3Rvb2x7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICB9XG59XG4vLyAuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuLy8gICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vICAgfVxuaW9uLWNvbnRlbnR7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuXG4gICAgLmxibF9wcmVtaXVte1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvLyB3aWR0aDogODAlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbiAgICAuZGl2X2ltZ3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgICAgICAgLmltZ19wcmVtaXVte1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIC8vIHdpZHRoOiA3NXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5sYmxfe1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvLyB3aWR0aDogODAlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbiAgICAuYnRuX3ByZW1pdW17XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIC5idG5faW1nX3ByZW1pdW17XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4ucm93X2xpc3R7XG4gICAgLmNvbF9saXN0e1xuICAgICAgICAuaW1nX21haW57XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9xdWl6X3RpdGxle1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF91bml0e1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmltZ19wcmVtaXVte1xuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltZ19hcnJvd3tcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbn1cbi5iZyAuaW1nX3Rvb2wge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmxibF9wcmVtaXVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfaW1nIC5pbWdfcHJlbWl1bSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5pb24tY29udGVudCAubGJsXyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5pb24tY29udGVudCAuYnRuX3ByZW1pdW0ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9wcmVtaXVtIC5idG5faW1nX3ByZW1pdW0ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG59XG5cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19tYWluIHtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3F1aXpfdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmxibF91bml0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfcHJlbWl1bSB7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDM0cHg7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfYXJyb3cge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Quizzes/quiz-premium/quiz-premium.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/Quizzes/quiz-premium/quiz-premium.page.ts ***!
  \***********************************************************/
/*! exports provided: QuizPremiumPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPremiumPage", function() { return QuizPremiumPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let QuizPremiumPage = class QuizPremiumPage {
    constructor(statusBar, stripe, api, alertCtrl, router, navCtrl, route) {
        this.statusBar = statusBar;
        this.stripe = stripe;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.limit = 10;
        this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');
    }
    ngOnInit() {
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 10;
            infiniteScroll.target.complete();
        }, 500);
    }
    getkid_data(kid_id) {
        this.api.KidData(kid_id).subscribe(resp => {
            this.kiddata = resp;
            this.kidData = this.kiddata.data;
            localStorage.setItem("kid_id", this.kiddata.data.kid_id);
            localStorage.setItem("grade_id", this.kiddata.data.grade_id);
            localStorage.setItem("package_status", this.kiddata.package_status);
            localStorage.setItem("amount", this.kiddata.package_data.price);
            localStorage.setItem("package_id", this.kiddata.package_data.id);
            localStorage.setItem("packagePurchaseId", this.kiddata.packagePurchaseId);
            this.amount = this.kiddata.package_data.price;
        });
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#fdf8f1');
        localStorage.removeItem("len_val");
        // this.kidd_process = true
        // this.api.presentLoading();
        this.api.KidList().subscribe(resp => {
            this.kidlist = resp;
            this.listdata = this.kidlist.data;
            // this.kidd_process = false
            // this.api.dismissLoading()
        });
        this.getkid_data('');
        this.amount = localStorage.getItem("amount");
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
    settings() {
        this.router.navigate(['/tabs/settings']);
    }
    back() {
        let reqData = this.route.snapshot.queryParams;
        if (localStorage.getItem("pdf_quize") && localStorage.getItem("pdf_id")) {
            this.navCtrl.navigateBack(['/tabs/pdf'], { queryParams: { pdf_id: localStorage.getItem("pdf_id") } });
        }
        else if (localStorage.getItem("video_quize") && localStorage.getItem("video_id")) {
            this.navCtrl.navigateBack(['/tabs/video'], { queryParams: { video_id: localStorage.getItem("video_id") } });
        }
        else if (localStorage.getItem("t_search") ||
            localStorage.getItem("t_contain") ||
            localStorage.getItem("k_contain") ||
            localStorage.getItem("k_search")) {
            this.navCtrl.navigateBack(['/tabs/quiz-search']);
        }
        else if (reqData.video) {
            this.router.navigate(['/tabs/videos']);
        }
        else if (reqData.pdf) {
            this.router.navigate(['/tabs/pdfs']);
        }
        else if (localStorage.getItem("k_quize_contant")) {
            this.navCtrl.navigateBack(['/tabs/home']);
        }
        else if (localStorage.getItem("k_quize_search")) {
            this.navCtrl.navigateBack(['/tabs/kids-quiz-list']);
        }
        else if (localStorage.getItem("k_video_contant")) {
            this.navCtrl.navigateBack(['/tabs/home']);
        }
        else if (localStorage.getItem("k_pdf_contant")) {
            this.navCtrl.navigateBack(['/tabs/home']);
        }
        else if (reqData.l_id, reqData.c_id, reqData.pdf_search) {
            this.router.navigate(['/tabs/pdf-search'], { queryParams: { l_id: reqData.l_id, c_id: reqData.c_id } });
        }
        else if (reqData.l_id, reqData.c_id, reqData.g_id, reqData.pdf_search) {
            this.router.navigate(['/tabs/pdf-search'], {
                queryParams: { l_id: reqData.l_id, c_id: reqData.c_id, g_id: reqData.g_id }
            });
        }
        else if (reqData.l_id, reqData.c_id, reqData.video_search) {
            this.router.navigate(['/tabs/video-search'], { queryParams: { l_id: reqData.l_id, c_id: reqData.c_id } });
        }
        else if (reqData.l_id, reqData.c_id, reqData.g_id, reqData.video_search) {
            this.router.navigate(['/tabs/video-search'], {
                queryParams: { l_id: reqData.l_id, c_id: reqData.c_id, g_id: reqData.g_id }
            });
        }
        else if (localStorage.getItem("notification_data")) {
            this.navCtrl.navigateBack(['/tabs/notifications']);
        }
        else if (localStorage.getItem("homework")) {
            this.navCtrl.navigateBack(['/tabs/kid-homework']);
        }
        else {
            this.navCtrl.navigateBack(['/tabs/home']);
        }
        // this.navCtrl.navigateBack('/tabs/home');
    }
};
QuizPremiumPage.ctorParameters = () => [
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_4__["Stripe"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], { static: true })
], QuizPremiumPage.prototype, "infiniteScroll", void 0);
QuizPremiumPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz-premium',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./quiz-premium.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-premium/quiz-premium.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./quiz-premium.page.scss */ "./src/app/Quizzes/quiz-premium/quiz-premium.page.scss")).default]
    })
], QuizPremiumPage);



/***/ })

}]);
//# sourceMappingURL=Quizzes-quiz-premium-quiz-premium-module-es2015.js.map