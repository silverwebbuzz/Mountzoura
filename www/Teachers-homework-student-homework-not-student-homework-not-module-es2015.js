(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Teachers-homework-student-homework-not-student-homework-not-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/homework/student-homework-not/student-homework-not.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/homework/student-homework-not/student-homework-not.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\" />\n    <ion-title class=\"title_all\">{{'reusable.results' | translate}}</ion-title>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\" />\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label class=\"lbl_\">\n    {{'single.kid_rest' | translate}}\n  </ion-label>\n\n  <div class=\"div_img\">\n    <img src=\"../../../../assets/images/time.png\" class=\"img_\" />\n  </div>\n\n  <!-- <ion-button size=\"large\" expand=\"block\" class=\"btn_dlt\" (click)=\"delete()\">Delete from H/W</ion-button> -->\n\n</ion-content>\n\n<ion-footer>\n  <ion-button size=\"large\" expand=\"block\" class=\"btn_dlt btn_all\" (click)=\"delete()\">{{'reusable.dlt' | translate}}\n  </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/Teachers/homework/student-homework-not/student-homework-not-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/Teachers/homework/student-homework-not/student-homework-not-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: StudentHomeworkNotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentHomeworkNotPageRoutingModule", function() { return StudentHomeworkNotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _student_homework_not_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-homework-not.page */ "./src/app/Teachers/homework/student-homework-not/student-homework-not.page.ts");




const routes = [
    {
        path: '',
        component: _student_homework_not_page__WEBPACK_IMPORTED_MODULE_3__["StudentHomeworkNotPage"]
    }
];
let StudentHomeworkNotPageRoutingModule = class StudentHomeworkNotPageRoutingModule {
};
StudentHomeworkNotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudentHomeworkNotPageRoutingModule);



/***/ }),

/***/ "./src/app/Teachers/homework/student-homework-not/student-homework-not.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/Teachers/homework/student-homework-not/student-homework-not.module.ts ***!
  \***************************************************************************************/
/*! exports provided: StudentHomeworkNotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentHomeworkNotPageModule", function() { return StudentHomeworkNotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _student_homework_not_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-homework-not-routing.module */ "./src/app/Teachers/homework/student-homework-not/student-homework-not-routing.module.ts");
/* harmony import */ var _student_homework_not_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-homework-not.page */ "./src/app/Teachers/homework/student-homework-not/student-homework-not.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let StudentHomeworkNotPageModule = class StudentHomeworkNotPageModule {
};
StudentHomeworkNotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _student_homework_not_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentHomeworkNotPageRoutingModule"]
        ],
        declarations: [_student_homework_not_page__WEBPACK_IMPORTED_MODULE_6__["StudentHomeworkNotPage"]]
    })
], StudentHomeworkNotPageModule);



/***/ }),

/***/ "./src/app/Teachers/homework/student-homework-not/student-homework-not.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/Teachers/homework/student-homework-not/student-homework-not.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .lbl_ {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  padding: 16px;\n}\nion-content .div_img {\n  text-align: center;\n  padding: 16px 0px;\n}\nion-content .div_img .img_ {\n  height: 125px;\n}\nion-content .btn_dlt {\n  color: white;\n  width: 90%;\n  margin: 0 auto;\n}\nion-footer {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1RlYWNoZXJzL2hvbWV3b3JrL3N0dWRlbnQtaG9tZXdvcmstbm90L3N0dWRlbnQtaG9tZXdvcmstbm90LnBhZ2Uuc2NzcyIsInNyYy9hcHAvVGVhY2hlcnMvaG9tZXdvcmsvc3R1ZGVudC1ob21ld29yay1ub3Qvc3R1ZGVudC1ob21ld29yay1ub3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FES0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0ZKO0FESUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0ZSO0FESUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDRlI7QURHUTtFQUNJLGFBQUE7QUNEWjtBRElJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDRlI7QURLQTtFQUNJLGFBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL1RlYWNoZXJzL2hvbWV3b3JrL3N0dWRlbnQtaG9tZXdvcmstbm90L3N0dWRlbnQtaG9tZXdvcmstbm90LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgLmltZ190b29se1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxufVxuLy8gLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgIH1cbmlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcblxuICAgIC5sYmxfe1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICAgIC5kaXZfaW1ne1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xuICAgICAgICAuaW1nX3tcbiAgICAgICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ0bl9kbHR7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufVxuaW9uLWZvb3RlcntcbiAgICBwYWRkaW5nOiAxNnB4O1xufSIsIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbn1cbi5iZyAuaW1nX3Rvb2wge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmxibF8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5pb24tY29udGVudCAuZGl2X2ltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCAwcHg7XG59XG5pb24tY29udGVudCAuZGl2X2ltZyAuaW1nXyB7XG4gIGhlaWdodDogMTI1cHg7XG59XG5pb24tY29udGVudCAuYnRuX2RsdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlvbi1mb290ZXIge1xuICBwYWRkaW5nOiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Teachers/homework/student-homework-not/student-homework-not.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Teachers/homework/student-homework-not/student-homework-not.page.ts ***!
  \*************************************************************************************/
/*! exports provided: StudentHomeworkNotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentHomeworkNotPage", function() { return StudentHomeworkNotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let StudentHomeworkNotPage = class StudentHomeworkNotPage {
    constructor(router, navCtrl, alertCtrl, api, route, statusBar) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.route = route;
        this.statusBar = statusBar;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#fdf8f1');
    }
    // delete(){
    //   let reqData = this.route.snapshot.queryParams;
    //   this.api.deleteHomework(reqData.id).subscribe(resp => {
    //     this.resp = resp
    //     this.api.presentToastWithOptions( this.resp['message']);
    //     this.router.navigate(['/tabs/student-homework'],{queryParams : {kid_id:reqData.kid_id}});
    //      this.kidd_process = false
    //    })
    // }
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Επιβεβαίωση',
                message: 'Σίγουρα θέλεις να διαγράψεις το καθήκον;;',
                buttons: [
                    {
                        text: 'Ακύρωση',
                        role: 'cancel',
                    }, {
                        text: 'ΝΑΙ',
                        handler: () => {
                            let reqData = this.route.snapshot.queryParams;
                            this.api.deleteHomework(reqData.id).subscribe(resp => {
                                this.resp = resp;
                                this.api.presentToastWithOptions(this.resp['message']);
                                this.router.navigate(['/tabs/student-homework'], { queryParams: { kid_id: reqData.kid_id } });
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
        this.navCtrl.navigateBack(['/tabs/student-homework'], { queryParams: { kid_id: reqData.kid_id } });
    }
};
StudentHomeworkNotPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] }
];
StudentHomeworkNotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-homework-not',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./student-homework-not.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/homework/student-homework-not/student-homework-not.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./student-homework-not.page.scss */ "./src/app/Teachers/homework/student-homework-not/student-homework-not.page.scss")).default]
    })
], StudentHomeworkNotPage);



/***/ })

}]);
//# sourceMappingURL=Teachers-homework-student-homework-not-student-homework-not-module-es2015.js.map