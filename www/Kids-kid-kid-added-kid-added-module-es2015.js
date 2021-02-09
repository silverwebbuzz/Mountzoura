(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Kids-kid-kid-added-kid-added-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/kid/kid-added/kid-added.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/kid/kid-added/kid-added.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot =\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\"/>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <!-- <div class=\"isEmpty\" *ngIf=\"listdata?.length == 0 || listdata == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div> -->\n  \n<ng-container *ngFor=\"let opt of listdata | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"premium(opt.id,opt.package_staus)\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n      <!-- <img src=\"../../../../assets/images/profile.png\" class=\"img_main\"/> -->\n      <img *ngIf=\"opt.gender == 'boy'\" src=\"../../../../assets/images/profile.png\" class=\"img_main img_all\" />\n          <img *ngIf=\"opt.gender == 'girl'\" src=\"../../../../assets/images/girl.png\" class=\"img_main img_all\" />\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.name}} #{{opt.kid_id}}</ion-label>\n      <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.gradeName}}</ion-label>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../assets/images/premium.png\" *ngIf=\"opt.package_staus == 1\" class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n</ng-container>\n\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n<!-- <div class=\"isEmpty1\"> -->\n  <ion-label class=\"lbl_premium\">\n    {{'single.lbl_kid_added' | translate }}\n  </ion-label>\n\n  <div *ngIf=\"listdata?.length == 0\" class=\"div_img isEmpty1\">\n    <img src=\"../../../../assets/images/signs.png\" class=\"img_premium\" (click)=\"addKids()\"/>\n  </div>\n\n  <div class=\"div_img \">\n    <img src=\"../../../../assets/images/signs.png\" class=\"img_premium\" (click)=\"addKids()\"/>\n  </div>\n  <!-- </div> -->      \n  \n</ion-content>");

/***/ }),

/***/ "./src/app/Kids/kid/kid-added/kid-added-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Kids/kid/kid-added/kid-added-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: KidAddedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidAddedPageRoutingModule", function() { return KidAddedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _kid_added_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kid-added.page */ "./src/app/Kids/kid/kid-added/kid-added.page.ts");




const routes = [
    {
        path: '',
        component: _kid_added_page__WEBPACK_IMPORTED_MODULE_3__["KidAddedPage"]
    }
];
let KidAddedPageRoutingModule = class KidAddedPageRoutingModule {
};
KidAddedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KidAddedPageRoutingModule);



/***/ }),

/***/ "./src/app/Kids/kid/kid-added/kid-added.module.ts":
/*!********************************************************!*\
  !*** ./src/app/Kids/kid/kid-added/kid-added.module.ts ***!
  \********************************************************/
/*! exports provided: KidAddedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidAddedPageModule", function() { return KidAddedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _kid_added_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kid-added-routing.module */ "./src/app/Kids/kid/kid-added/kid-added-routing.module.ts");
/* harmony import */ var _kid_added_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kid-added.page */ "./src/app/Kids/kid/kid-added/kid-added.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let KidAddedPageModule = class KidAddedPageModule {
};
KidAddedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _kid_added_routing_module__WEBPACK_IMPORTED_MODULE_5__["KidAddedPageRoutingModule"]
        ],
        declarations: [_kid_added_page__WEBPACK_IMPORTED_MODULE_6__["KidAddedPage"]]
    })
], KidAddedPageModule);



/***/ }),

/***/ "./src/app/Kids/kid/kid-added/kid-added.page.scss":
/*!********************************************************!*\
  !*** ./src/app/Kids/kid/kid-added/kid-added.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content .row_list .col_list .img_main {\n  height: 48px;\n}\nion-content .row_list .col_list .lbl_quiz_title {\n  display: block;\n}\nion-content .row_list .col_list .lbl_unit {\n  display: block;\n}\nion-content .row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\nion-content .row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\nion-content .lbl_premium {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\nion-content .div_img {\n  padding: 16px;\n  text-align: center;\n}\nion-content .div_img .img_premium {\n  height: 75px;\n  width: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL0tpZHMva2lkL2tpZC1hZGRlZC9raWQtYWRkZWQucGFnZS5zY3NzIiwic3JjL2FwcC9LaWRzL2tpZC9raWQtYWRkZWQva2lkLWFkZGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBRFFZO0VBQ0ksWUFBQTtBQ0xoQjtBRE9ZO0VBQ0ksY0FBQTtBQ0xoQjtBRE9ZO0VBQ0ksY0FBQTtBQ0xoQjtBRE9ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNMaEI7QURPWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDTGhCO0FEVUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0FDVFI7QURXSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQ1RSO0FEVVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1JaIiwiZmlsZSI6InNyYy9hcHAvS2lkcy9raWQva2lkLWFkZGVkL2tpZC1hZGRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAgIC5pbWdfdG9vbHtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgIH1cbn1cbi8vIC5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHggIWltcG9ydGFudDtcbi8vICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gICB9XG5pb24tY29udGVudHtcbiAgICAucm93X2xpc3R7XG4gICAgICAgIC5jb2xfbGlzdHtcbiAgICAgICAgICAgIC5pbWdfbWFpbntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGJsX3F1aXpfdGl0bGV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGJsX3VuaXR7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nX3ByZW1pdW17XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltZ19hcnJvd3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubGJsX3ByZW1pdW17XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIHdpZHRoOiA4MCU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICAgIC5kaXZfaW1ne1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5pbWdfcHJlbWl1bXtcbiAgICAgICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbn1cbi5iZyAuaW1nX3Rvb2wge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbmlvbi1jb250ZW50IC5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19tYWluIHtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuaW9uLWNvbnRlbnQgLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3F1aXpfdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1jb250ZW50IC5yb3dfbGlzdCAuY29sX2xpc3QgLmxibF91bml0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tY29udGVudCAucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfcHJlbWl1bSB7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDM0cHg7XG59XG5pb24tY29udGVudCAucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfYXJyb3cge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuaW9uLWNvbnRlbnQgLmxibF9wcmVtaXVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfaW1nIHtcbiAgcGFkZGluZzogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmRpdl9pbWcgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogNzVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Kids/kid/kid-added/kid-added.page.ts":
/*!******************************************************!*\
  !*** ./src/app/Kids/kid/kid-added/kid-added.page.ts ***!
  \******************************************************/
/*! exports provided: KidAddedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidAddedPage", function() { return KidAddedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_global_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/global/language.service */ "./src/app/global/language.service.ts");







let KidAddedPage = class KidAddedPage {
    constructor(router, navCtrl, api, statusBar, lanservice) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.api = api;
        this.statusBar = statusBar;
        this.lanservice = lanservice;
        this.user_not_found_place_holder = 'assets/images/paper.png';
        this.limit = 10;
        this.hidden = 1;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#fdf8f1');
        this.role_id = localStorage.getItem("role_id");
        localStorage.removeItem("pdf_quize");
        localStorage.removeItem("pdf_id");
        localStorage.removeItem("video_quize");
        localStorage.removeItem("video_id");
        localStorage.removeItem("lession_id");
        localStorage.removeItem("course_id");
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
        this.api.presentLoading();
        this.kidd_process = true;
        this.api.KidList().subscribe(resp => {
            if (resp) {
                this.kidlist = resp;
                this.listdata = this.kidlist.data;
                this.kidd_process = false;
                this.api.dismissLoading();
            }
            else {
                this.kidd_process = false;
                this.api.dismissLoading();
            }
        });
        this.kidd_process = false;
        this.api.dismissLoading();
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 10;
            infiniteScroll.target.complete();
        }, 500);
    }
    premium(id, package_staus) {
        if (package_staus == 1) {
            this.router.navigate(['/tabs/kid-premium-profile'], { queryParams: { kid_id: id } });
        }
        else {
            this.router.navigate(['/tabs/kid-free-profile'], { queryParams: { kid_id: id } });
        }
    }
    back() {
        this.navCtrl.navigateBack(['/tabs/kid-new']);
    }
    addKids() {
        this.router.navigate(['/tabs/kid-new']);
    }
    settings() {
        this.router.navigate(['/tabs/settings']);
    }
};
KidAddedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: src_app_global_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: true })
], KidAddedPage.prototype, "infiniteScroll", void 0);
KidAddedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kid-added',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./kid-added.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Kids/kid/kid-added/kid-added.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./kid-added.page.scss */ "./src/app/Kids/kid/kid-added/kid-added.page.scss")).default]
    })
], KidAddedPage);



/***/ })

}]);
//# sourceMappingURL=Kids-kid-kid-added-kid-added-module-es2015.js.map