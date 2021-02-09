(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Kids-profile-kid-free-profile-kid-free-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/profile/kid-free-profile/kid-free-profile.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/profile/kid-free-profile/kid-free-profile.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot =\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\"/>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"div_img\">\n    <img  *ngIf=\"gender == 'boy'\" src=\"../../../../assets/images/profile.png\" class=\"img_person\"/>\n    <img  *ngIf=\"gender == 'girl'\" src=\"../../../../assets/images/girl.png\" class=\"img_person\"/>\n    <!-- <img src=\"../../../../assets/images/premium.png\" class=\"img_prem\"/> -->\n  </div>\n\n  <form [formGroup]=\"profile_form\" autocomplete=\"off\" class=\"form_all\">\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"text\" formControlName=\"name\" placeholder=\"{{'reusable.place_name' | translate }} #2\" class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.name.hasError('required') && profile_form.controls.name.touched\">\n      <p class=\"content add-error\">{{'reusable.err_name' | translate }}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"text\" formControlName=\"grade\" placeholder=\"B` {{'reusable.grade' | translate }}\" class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.grade.hasError('required') && profile_form.controls.grade.touched\">\n      <p class=\"content add-error\">{{'reusable.err_grade' | translate }}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"text\" formControlName=\"id\" placeholder=\"#000106\" class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.id.hasError('required') && profile_form.controls.id.touched\">\n      <p class=\"content add-error\">{{'reusable.err_kid_profile_id' | translate }}</p>\n    </ion-item>\n\n    </form>\n\n    <ion-button expand=\"block\" size=\"large\" class=\"btn_play btn_all\" (click)=\"home_kid()\">{{'single.btn_play' | translate }}</ion-button>\n    <br>\n    <ion-button expand=\"block\" size=\"large\" class=\"btn_play btn_all\" (click)='homework()'>{{'reusable.btn_work' | translate}}</ion-button>\n\n    <ion-label class=\"lbl_cancel\">\n      {{'single.lbl_kid_profile' | translate }}\n        </ion-label>\n\n    <ion-button class=\"btn_premium btn_all\" expand=\"block\" size=\"large\" (click)=\"payment()\">\n      <img src=\"../../../assets/images/premium.png\" class=\"btn_img_premium\"/>\n      {{amount ? amount : '0.0'}} €/{{'reusable.lbl_month' | translate }}\n    </ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Kids/profile/kid-free-profile/kid-free-profile-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Kids/profile/kid-free-profile/kid-free-profile-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: KidFreeProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidFreeProfilePageRoutingModule", function() { return KidFreeProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _kid_free_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kid-free-profile.page */ "./src/app/Kids/profile/kid-free-profile/kid-free-profile.page.ts");




const routes = [
    {
        path: '',
        component: _kid_free_profile_page__WEBPACK_IMPORTED_MODULE_3__["KidFreeProfilePage"]
    }
];
let KidFreeProfilePageRoutingModule = class KidFreeProfilePageRoutingModule {
};
KidFreeProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KidFreeProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/Kids/profile/kid-free-profile/kid-free-profile.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Kids/profile/kid-free-profile/kid-free-profile.module.ts ***!
  \**************************************************************************/
/*! exports provided: KidFreeProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidFreeProfilePageModule", function() { return KidFreeProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _kid_free_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kid-free-profile-routing.module */ "./src/app/Kids/profile/kid-free-profile/kid-free-profile-routing.module.ts");
/* harmony import */ var _kid_free_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kid-free-profile.page */ "./src/app/Kids/profile/kid-free-profile/kid-free-profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let KidFreeProfilePageModule = class KidFreeProfilePageModule {
};
KidFreeProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _kid_free_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["KidFreeProfilePageRoutingModule"]
        ],
        declarations: [_kid_free_profile_page__WEBPACK_IMPORTED_MODULE_6__["KidFreeProfilePage"]]
    })
], KidFreeProfilePageModule);



/***/ }),

/***/ "./src/app/Kids/profile/kid-free-profile/kid-free-profile.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/Kids/profile/kid-free-profile/kid-free-profile.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .div_img {\n  text-align: center;\n}\nion-content .div_img .img_person {\n  height: 100px;\n}\nion-content .div_img .img_prem {\n  height: 38px;\n}\nion-content .btn_play {\n  color: white;\n  margin-right: 16px;\n  margin-left: 16px;\n}\nion-content .lbl_cancel {\n  display: block;\n  font-size: 16px;\n  text-decoration: underline;\n  text-align: center;\n  padding: 16px;\n}\nion-content .btn_premium {\n  color: white;\n  width: 90%;\n  margin: 0 auto;\n}\nion-content .btn_premium .btn_img_premium {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL0tpZHMvcHJvZmlsZS9raWQtZnJlZS1wcm9maWxlL2tpZC1mcmVlLXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9LaWRzL3Byb2ZpbGUva2lkLWZyZWUtcHJvZmlsZS9raWQtZnJlZS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBREtBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNGSjtBRElJO0VBQ0ksa0JBQUE7QUNGUjtBREdRO0VBQ0ksYUFBQTtBQ0RaO0FER1E7RUFDSSxZQUFBO0FDRFo7QURLSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSFI7QURLSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNIUjtBREtJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDSFI7QURJUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDRlYiLCJmaWxlIjoic3JjL2FwcC9LaWRzL3Byb2ZpbGUva2lkLWZyZWUtcHJvZmlsZS9raWQtZnJlZS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgLmltZ190b29se1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxufVxuLy8gLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgIH1cbmlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcblxuICAgIC5kaXZfaW1ne1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5pbWdfcGVyc29ue1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nX3ByZW17XG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJ0bl9wbGF5e1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuICAgIC5sYmxfY2FuY2Vse1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbiAgICAuYnRuX3ByZW1pdW0ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAuYnRuX2ltZ19wcmVtaXVtIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbn0iLCIuYmcge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG59XG4uYmcgLmltZ190b29sIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmRpdl9pbWcgLmltZ19wZXJzb24ge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9pbWcgLmltZ19wcmVtIHtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9wbGF5IHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmxibF9jYW5jZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9wcmVtaXVtIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi1jb250ZW50IC5idG5fcHJlbWl1bSAuYnRuX2ltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Kids/profile/kid-free-profile/kid-free-profile.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/Kids/profile/kid-free-profile/kid-free-profile.page.ts ***!
  \************************************************************************/
/*! exports provided: KidFreeProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidFreeProfilePage", function() { return KidFreeProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/__ivy_ngcc__/ngx/index.js");








let KidFreeProfilePage = class KidFreeProfilePage {
    constructor(formBuilder, alertCtrl, router, navCtrl, stripe, route, api, statusBar) {
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.stripe = stripe;
        this.route = route;
        this.api = api;
        this.statusBar = statusBar;
        this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');
        this.profile_fb();
    }
    ngOnInit() {
    }
    profile_fb() {
        this.profile_form = this.formBuilder.group({
            name: [{ value: '', disabled: true }],
            grade: [{ value: '', disabled: true }],
            id: [{ value: '', disabled: true }],
        });
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#fdf8f1');
        let reqData = this.route.snapshot.queryParams;
        this.api.KidData(reqData.kid_id).subscribe(resp => {
            this.kiddata = resp;
            this.kidData = this.kiddata.data;
            this.gender = this.kiddata.data.gender;
            localStorage.setItem("kid_id", this.kiddata.data.kid_id);
            localStorage.setItem("grade_id", this.kiddata.data.grade_id);
            localStorage.setItem("package_status", this.kiddata.package_status);
            localStorage.setItem("amount", this.kiddata.package_data.price);
            localStorage.setItem("package_id", this.kiddata.package_data.id);
            localStorage.setItem("packagePurchaseId", this.kiddata.packagePurchaseId);
            this.amount = this.kiddata.package_data.price;
            this.profile_form.patchValue({
                name: this.kidData.name,
                grade: this.kidData.gradeName,
                id: this.kidData.kid_id
            });
        });
    }
    submit() {
        for (let v in this.profile_form.controls) {
            this.profile_form.controls[v].markAsTouched();
        }
        if (this.profile_form.valid) {
            var body = {
                name: this.profile_form.value.name,
                grade: this.profile_form.value.grade,
                id: this.profile_form.value.id,
            };
        }
    }
    payment(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                                this.api.showErrorToast('Εισαγάγετε τον αριθμό κάρτας 16 ψηφίων!');
                                return false;
                            }
                            if (Number(input.month.length) > 2 || Number(input.month.length) < 1) {
                                this.api.showErrorToast('Εισαγάγετε 2 ψηφία!');
                                return false;
                            }
                            if (Number(input.year.length) > 4 || Number(input.year.length) < 4) {
                                this.api.showErrorToast('Εισαγάγετε 4 ψηφία!');
                                return false;
                            }
                            if (Number(input.cvc.length) > 4 || Number(input.cvc.length) < 3) {
                                this.api.showErrorToast('Εισαγάγετε 3-4 ψηφία CVC Number!');
                                return false;
                            }
                            this.card = {
                                number: input.number,
                                expMonth: Number(input.month),
                                expYear: Number(input.year),
                                cvc: input.cvc,
                            };
                            // console.log('Confirm Ok', this.card);
                            this.api.presentLoading();
                            this.kidd_process = true;
                            this.stripe.createCardToken(this.card)
                                .then(token => {
                                // console.log('stoken', token.id);
                                var body = {
                                    kid_id: this.kiddata.data.kid_id,
                                    grade_id: this.kiddata.data.grade_id,
                                    amount: this.kiddata.package_data.price,
                                    stripeToken: token.id,
                                    role_id: localStorage.getItem("role_id"),
                                    package_id: this.kiddata.package_data.id,
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
                            }).catch(error => {
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
    home_kid() {
        this.router.navigate(["/tabs/home"]);
    }
    back() {
        this.navCtrl.navigateBack(['/tabs/kid-added']);
    }
    settings() {
        this.router.navigate(['/tabs/settings']);
    }
    homework() {
        this.router.navigate(['/tabs/kid-homework']);
    }
};
KidFreeProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_7__["Stripe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
];
KidFreeProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kid-free-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./kid-free-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/profile/kid-free-profile/kid-free-profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./kid-free-profile.page.scss */ "./src/app/Kids/profile/kid-free-profile/kid-free-profile.page.scss")).default]
    })
], KidFreeProfilePage);



/***/ })

}]);
//# sourceMappingURL=Kids-profile-kid-free-profile-kid-free-profile-module-es2015.js.map