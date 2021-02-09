(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-intros-intro2-intro2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/intros/intro2/intro2.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/intros/intro2/intro2.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div class=\"div_logo\">\n    <img src=\"../../assets/images/logoWithUpIcon.png\" class=\"img_logo\"/>\n  </div>\n\n  <ion-row>\n    <ion-col size=\"6\" class=\"col_1\">\n      <ion-label class=\"lbl_\">\n       {{'intro2.lable1' | translate }}\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_2\">\n      <img src=\"../../assets/images/technology.png\" class=\"img_\"/>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"6\" class=\"col_1\">\n      <img src=\"../../assets/images/technology2.png\" class=\"img_\"/>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_2\">\n      <ion-label class=\"lbl_\">\n        {{'intro2.lable2' | translate }}\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"6\" class=\"col_1\">\n      <ion-label class=\"lbl_\">\n        {{'intro2.lable3' | translate }}\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_2\">\n      <img src=\"../../assets/images/paper.png\" class=\"img_\"/>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"div_empty\"></div>\n\n  <div class=\"footer_img\">\n  <img src=\"../../assets/images/logoWithoutIcon.png\" class=\"img_size\"/>\n</div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" size=\"large\" class=\"btn_footer\" (click)=\"next()\">{{'next' | translate }} >>\n    <span class=\"spn_indicator\">2/3</span>\n  </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/Users/intros/intro2/intro2-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Users/intros/intro2/intro2-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: Intro2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro2PageRoutingModule", function() { return Intro2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _intro2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro2.page */ "./src/app/Users/intros/intro2/intro2.page.ts");




const routes = [
    {
        path: '',
        component: _intro2_page__WEBPACK_IMPORTED_MODULE_3__["Intro2Page"]
    }
];
let Intro2PageRoutingModule = class Intro2PageRoutingModule {
};
Intro2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Intro2PageRoutingModule);



/***/ }),

/***/ "./src/app/Users/intros/intro2/intro2.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Users/intros/intro2/intro2.module.ts ***!
  \******************************************************/
/*! exports provided: Intro2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro2PageModule", function() { return Intro2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _intro2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro2-routing.module */ "./src/app/Users/intros/intro2/intro2-routing.module.ts");
/* harmony import */ var _intro2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro2.page */ "./src/app/Users/intros/intro2/intro2.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let Intro2PageModule = class Intro2PageModule {
};
Intro2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Intro2PageRoutingModule"]
        ],
        declarations: [_intro2_page__WEBPACK_IMPORTED_MODULE_6__["Intro2Page"]]
    })
], Intro2PageModule);



/***/ }),

/***/ "./src/app/Users/intros/intro2/intro2.page.scss":
/*!******************************************************!*\
  !*** ./src/app/Users/intros/intro2/intro2.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .div_logo {\n  text-align: center;\n  margin: 32px;\n}\nion-content .div_logo .img_logo {\n  width: 200px;\n}\nion-content .img_ {\n  height: 115px;\n  width: 115px;\n}\nion-content .lbl_ {\n  font-size: 18px;\n  display: block;\n  line-height: 1.3;\n  font-family: Comfortaa-SemiBold;\n}\nion-content .col_1 {\n  margin: auto;\n}\nion-content .col_2 {\n  margin: auto;\n  text-align: right;\n}\nion-content .div_empty {\n  height: 30px;\n}\nion-content .img_size {\n  width: 175px !important;\n}\nion-footer {\n  position: fixed;\n  bottom: 0;\n}\nion-footer .btn_footer {\n  margin: 0px;\n  color: white;\n  text-transform: none;\n}\nion-footer .btn_footer .spn_indicator {\n  position: absolute;\n  right: 0;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL2ludHJvcy9pbnRybzIvaW50cm8yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvVXNlcnMvaW50cm9zL2ludHJvMi9pbnRybzIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQ047QURBTTtFQUNFLFlBQUE7QUNFUjtBREVJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNBTjtBREVJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDQU47QURFSTtFQUNFLFlBQUE7QUNBTjtBREVJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQU47QURFSTtFQUNFLFlBQUE7QUNBTjtBREVJO0VBQ0UsdUJBQUE7QUNBTjtBREdFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUNBSjtBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NOO0FEQ007RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9Vc2Vycy9pbnRyb3MvaW50cm8yL2ludHJvMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBcbiAgICAuZGl2X2xvZ28ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAzMnB4O1xuICAgICAgLmltZ19sb2dvIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmltZ18ge1xuICAgICAgaGVpZ2h0OiAxMTVweDtcbiAgICAgIHdpZHRoOiAxMTVweDtcbiAgICB9XG4gICAgLmxibF8ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYS1TZW1pQm9sZDtcbiAgICB9XG4gICAgLmNvbF8xIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLmNvbF8yIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICAuZGl2X2VtcHR5IHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgLmltZ19zaXple1xuICAgICAgd2lkdGg6IDE3NXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIGlvbi1mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgLmJ0bl9mb290ZXIge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblxuICAgICAgLnNwbl9pbmRpY2F0b3J7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIiwiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5pb24tY29udGVudCAuZGl2X2xvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMzJweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfbG9nbyAuaW1nX2xvZ28ge1xuICB3aWR0aDogMjAwcHg7XG59XG5pb24tY29udGVudCAuaW1nXyB7XG4gIGhlaWdodDogMTE1cHg7XG4gIHdpZHRoOiAxMTVweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYS1TZW1pQm9sZDtcbn1cbmlvbi1jb250ZW50IC5jb2xfMSB7XG4gIG1hcmdpbjogYXV0bztcbn1cbmlvbi1jb250ZW50IC5jb2xfMiB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5pb24tY29udGVudCAuZGl2X2VtcHR5IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgLmltZ19zaXplIHtcbiAgd2lkdGg6IDE3NXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbn1cbmlvbi1mb290ZXIgLmJ0bl9mb290ZXIge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbmlvbi1mb290ZXIgLmJ0bl9mb290ZXIgLnNwbl9pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/Users/intros/intro2/intro2.page.ts":
/*!****************************************************!*\
  !*** ./src/app/Users/intros/intro2/intro2.page.ts ***!
  \****************************************************/
/*! exports provided: Intro2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro2Page", function() { return Intro2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");




let Intro2Page = class Intro2Page {
    constructor(router, statusBar) {
        this.router = router;
        this.statusBar = statusBar;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFFFFF');
    }
    next() {
        this.router.navigate(['/intro3']);
    }
};
Intro2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] }
];
Intro2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./intro2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/intros/intro2/intro2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./intro2.page.scss */ "./src/app/Users/intros/intro2/intro2.page.scss")).default]
    })
], Intro2Page);



/***/ })

}]);
//# sourceMappingURL=Users-intros-intro2-intro2-module-es2015.js.map