(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-intros-intro1-intro1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/intros/intro1/intro1.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/intros/intro1/intro1.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-label class=\"lbl_lang\" *ngIf=\"lan == 0\">\n  {{'intro1.select' | translate }}\n  <select #langSelect (change)=\"lanservice.changeLanguage(langSelect.value)\" class=\"option\">\n    <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">\n      {{ lang }}</option>\n  </select>\n</ion-label>\n\n<ion-content>\n\n  <div class=\"div_logo\">\n    <img src=\"../../assets/images/logoWithUpIcon.png\" class=\"img_logo\" />\n  </div>\n\n  <ion-label class=\"lbl_txt\">\n    {{'intro1.welcome' | translate }}\n  </ion-label>\n\n  <img src=\"../../assets/images/owlEdit.png\" class=\"img_owl\" />\n  \n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" size=\"large\" class=\"btn_footer\" (click)=\"next()\">{{'next' | translate }} >>\n    <span class=\"spn_indicator\">1/3</span>\n  </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/Users/intros/intro1/intro1-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Users/intros/intro1/intro1-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: Intro1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro1PageRoutingModule", function() { return Intro1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _intro1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro1.page */ "./src/app/Users/intros/intro1/intro1.page.ts");




const routes = [
    {
        path: '',
        component: _intro1_page__WEBPACK_IMPORTED_MODULE_3__["Intro1Page"]
    }
];
let Intro1PageRoutingModule = class Intro1PageRoutingModule {
};
Intro1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Intro1PageRoutingModule);



/***/ }),

/***/ "./src/app/Users/intros/intro1/intro1.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Users/intros/intro1/intro1.module.ts ***!
  \******************************************************/
/*! exports provided: Intro1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro1PageModule", function() { return Intro1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _intro1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro1-routing.module */ "./src/app/Users/intros/intro1/intro1-routing.module.ts");
/* harmony import */ var _intro1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro1.page */ "./src/app/Users/intros/intro1/intro1.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let Intro1PageModule = class Intro1PageModule {
};
Intro1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Intro1PageRoutingModule"]
        ],
        declarations: [_intro1_page__WEBPACK_IMPORTED_MODULE_6__["Intro1Page"]]
    })
], Intro1PageModule);



/***/ }),

/***/ "./src/app/Users/intros/intro1/intro1.page.scss":
/*!******************************************************!*\
  !*** ./src/app/Users/intros/intro1/intro1.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lbl_lang {\n  padding: 16px;\n  text-align: center;\n  font-size: 18px;\n}\n.lbl_lang .option {\n  margin-left: 10px;\n}\n.div_logo {\n  text-align: center;\n  margin: 48px;\n}\n.div_logo .img_logo {\n  width: 200px;\n}\n.lbl_txt {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: 0;\n  margin: 0 auto;\n  width: 50%;\n  text-align: center;\n  display: block;\n  font-size: 18px;\n  line-height: 1.3;\n  font-family: Comfortaa-SemiBold;\n}\n.img_owl {\n  height: 125px;\n  width: 125px;\n  position: absolute;\n  bottom: 36px;\n  z-index: 999;\n}\nion-footer {\n  position: fixed;\n  bottom: 0;\n}\nion-footer .btn_footer {\n  margin: 0px;\n  color: white;\n  text-transform: none;\n}\nion-footer .btn_footer .spn_indicator {\n  position: absolute;\n  right: 0;\n  font-size: 16px;\n}\n.language-area {\n  align-items: flex-end;\n}\n.bg-exchange {\n  background-color: #009688;\n}\n.language-area {\n  align-items: flex-end;\n  margin-bottom: 0px !important;\n  float: right;\n  text-align: right;\n  padding: 19px 15px;\n}\n.bg-exchange {\n  background-color: #009688;\n}\n.language-area select {\n  width: 115px;\n  padding: 8px;\n}\n.language-area select option {\n  padding: 10px;\n}\n.language-flag-dropdwn {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  padding: 30px 20px 34px 20px;\n  text-decoration: none;\n  color: #000;\n  text-transform: uppercase;\n  float: right;\n}\n.language-flag-dropdwn .language-img img {\n  margin-right: 0px;\n  width: 25px !important;\n  float: left;\n}\n.language-flag-dropdwn .language-img p {\n  display: inline-block;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  padding-left: 4px;\n  font-size: 16px !important;\n  line-height: 0px;\n}\n.language-flag-dropdwn .flag-dropdown {\n  position: absolute;\n  top: 70px;\n  background: #ffffff;\n  min-width: 130px;\n  transition: all 0.3s;\n  opacity: 0;\n  visibility: hidden;\n  z-index: 9999;\n  border: 1px solid #e5e5e5;\n}\n.language-flag-dropdwn ul {\n  overflow: hidden;\n  list-style: none;\n  margin: 0px;\n}\n.header .language-flag-dropdwn ul li {\n  list-style: none;\n  display: inline-block;\n}\n.language-flag-dropdwn ul li a {\n  font-size: 16px;\n  color: #222222;\n  display: block;\n  padding: 8px 8px;\n  text-align: left;\n  transition: all 0.3s;\n}\n.language-flag-dropdwn:hover .flag-dropdown {\n  top: 34px;\n  opacity: 1;\n  visibility: visible;\n  right: 0;\n  left: -40px;\n}\n.language-flag-dropdwn .flag-dropdown ul li img {\n  width: 25px;\n  height: 20px;\n  float: left;\n}\n.language-flag-dropdwn .flag-dropdown ul li p {\n  display: inline-block;\n  padding-left: 4px;\n  margin-bottom: 0px;\n  margin-top: 0px !important;\n  font-size: 16px;\n  line-height: 0px;\n}\n.language-flag-dropdwn:hover .flag-dropdown::after {\n  content: \"\";\n  position: absolute;\n  top: -10%;\n  left: 84%;\n  margin-left: -56px;\n  width: 0;\n  height: 0;\n  border-bottom: solid 12px #fff;\n  border-left: solid 12px transparent;\n  border-right: solid 12px transparent;\n}\n.language-flag-dropdwn .flag-dropdown ul li {\n  display: block;\n}\n.desktop_menu .language-flag-dropdwn-mobile-menu {\n  display: none;\n}\n@media (max-width: 1400px) {\n  .language-flag-dropdwn .language-img p {\n    font-size: 14px;\n  }\n\n  .language-flag-dropdwn {\n    padding: 8px;\n    width: 100%;\n  }\n}\n@media (max-width: 1200px) {\n  .language-flag-dropdwn .language-img img {\n    width: 21px;\n  }\n\n  .language-flag-dropdwn .language-img p {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL2ludHJvcy9pbnRybzEvaW50cm8xLnBhZ2Uuc2NzcyIsInNyYy9hcHAvVXNlcnMvaW50cm9zL2ludHJvMS9pbnRybzEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNFSjtBRERJO0VBQ0UsWUFBQTtBQ0dOO0FEQUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNHSjtBREFFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDR0o7QURERTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDSUo7QURISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNLTjtBREhNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0tSO0FETUU7RUFDRSxxQkFBQTtBQ0hKO0FETUU7RUFDRSx5QkFBQTtBQ0hKO0FES0U7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtFO0VBQ0UseUJBQUE7QUNGSjtBREtFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNGSjtBRElFO0VBQ0UsYUFBQTtBQ0RKO0FETUU7RUFDRSxxQkFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDSE47QURLRTtFQUNJLGlCQUFBO0VBQ0Ysc0JBQUE7RUFDRSxXQUFBO0FDRk47QURJRTtFQUNFLHFCQUFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDRE47QURHRTtFQUNJLGtCQUFBO0VBRUEsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0ROO0FER0U7RUFDRSxnQkFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0FOO0FERUU7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQkFBQTtBQ0VOO0FEQUU7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNGLG1CQUFBO0VBQ0UsUUFBQTtFQUNBLFdBQUE7QUNHTjtBRERFO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDR047QURERTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0YsZUFBQTtFQUNFLGdCQUFBO0FDSU47QURGRTtFQUNFLFdBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtBQ0tOO0FESEU7RUFDRSxjQUFBO0FDTUo7QURKRTtFQUNJLGFBQUE7QUNPTjtBREpFO0VBQ0k7SUFDSSxlQUFBO0VDT1I7O0VETEk7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQ1FSO0FBQ0Y7QURORTtFQUNJO0lBQ0ksV0FBQTtFQ1FSOztFRE5JO0lBQ0ksZUFBQTtFQ1NSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Vc2Vycy9pbnRyb3MvaW50cm8xL2ludHJvMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGJsX2xhbmd7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAub3B0aW9ue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4uZGl2X2xvZ28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDQ4cHg7XG4gICAgLmltZ19sb2dvIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG4gIH1cbiAgLmxibF90eHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWEtU2VtaUJvbGQ7XG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmltZ19vd2wge1xuICAgIGhlaWdodDogMTI1cHg7XG4gICAgd2lkdGg6IDEyNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDM2cHg7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG4gIGlvbi1mb290ZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICAuYnRuX2Zvb3RlciB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuXG4gICAgICAuc3BuX2luZGljYXRvcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcblxuXG5cblxuXG5cbiAgLmxhbmd1YWdlLWFyZWEge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuICBcbiAgLmJnLWV4Y2hhbmdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICB9XG4gIC5sYW5ndWFnZS1hcmVhIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDE5cHggMTVweDtcbiAgfVxuICBcbiAgLmJnLWV4Y2hhbmdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICB9XG4gIFxuICAubGFuZ3VhZ2UtYXJlYSBzZWxlY3R7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICAubGFuZ3VhZ2UtYXJlYSBzZWxlY3Qgb3B0aW9ue1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgXG4gIC8vIG1lbnUgY3NzIHN0YXJ0XG4gIFxuICAubGFuZ3VhZ2UtZmxhZy1kcm9wZHdue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDMwcHggMjBweCAzNHB4IDIwcHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLmxhbmd1YWdlLWZsYWctZHJvcGR3biAubGFuZ3VhZ2UtaW1nIGltZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmxhbmd1YWdlLWZsYWctZHJvcGR3biAubGFuZ3VhZ2UtaW1nIHB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIH1cbiAgLmxhbmd1YWdlLWZsYWctZHJvcGR3biAuZmxhZy1kcm9wZG93biB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAvLyByaWdodDogMDtcbiAgICAgIHRvcDogNzBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICB9XG4gIC5sYW5ndWFnZS1mbGFnLWRyb3Bkd24gdWwge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLmhlYWRlciAubGFuZ3VhZ2UtZmxhZy1kcm9wZHduIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAubGFuZ3VhZ2UtZmxhZy1kcm9wZHduIHVsIGxpIGEge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG4gIC5sYW5ndWFnZS1mbGFnLWRyb3Bkd246aG92ZXIgLmZsYWctZHJvcGRvd257XG4gICAgICB0b3A6IDM0cHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IC00MHB4O1xuICB9XG4gIC5sYW5ndWFnZS1mbGFnLWRyb3Bkd24gLmZsYWctZHJvcGRvd24gdWwgbGkgaW1ne1xuICAgICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAubGFuZ3VhZ2UtZmxhZy1kcm9wZHduIC5mbGFnLWRyb3Bkb3duIHVsIGxpIHB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgfVxuICAubGFuZ3VhZ2UtZmxhZy1kcm9wZHduOmhvdmVyIC5mbGFnLWRyb3Bkb3duOjphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMTAlO1xuICAgICAgbGVmdDogODQlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC01NnB4O1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxMnB4ICNmZmY7XG4gICAgICBib3JkZXItbGVmdDogc29saWQgMTJweCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMTJweCB0cmFuc3BhcmVudDtcbiAgfVxuICAubGFuZ3VhZ2UtZmxhZy1kcm9wZHduIC5mbGFnLWRyb3Bkb3duIHVsIGxpe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5kZXNrdG9wX21lbnUgLmxhbmd1YWdlLWZsYWctZHJvcGR3bi1tb2JpbGUtbWVudXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpe1xuICAgICAgLmxhbmd1YWdlLWZsYWctZHJvcGR3biAubGFuZ3VhZ2UtaW1nIHB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgLmxhbmd1YWdlLWZsYWctZHJvcGR3bntcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCl7XG4gICAgICAubGFuZ3VhZ2UtZmxhZy1kcm9wZHduIC5sYW5ndWFnZS1pbWcgaW1ne1xuICAgICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgfVxuICAgICAgLmxhbmd1YWdlLWZsYWctZHJvcGR3biAubGFuZ3VhZ2UtaW1nIHB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICB9IiwiLmxibF9sYW5nIHtcbiAgcGFkZGluZzogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubGJsX2xhbmcgLm9wdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGl2X2xvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNDhweDtcbn1cbi5kaXZfbG9nbyAuaW1nX2xvZ28ge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5sYmxfdHh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWEtU2VtaUJvbGQ7XG59XG5cbi5pbWdfb3dsIHtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgd2lkdGg6IDEyNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzZweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG59XG5pb24tZm9vdGVyIC5idG5fZm9vdGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5pb24tZm9vdGVyIC5idG5fZm9vdGVyIC5zcG5faW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubGFuZ3VhZ2UtYXJlYSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLmJnLWV4Y2hhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcbn1cblxuLmxhbmd1YWdlLWFyZWEge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAxOXB4IDE1cHg7XG59XG5cbi5iZy1leGNoYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XG59XG5cbi5sYW5ndWFnZS1hcmVhIHNlbGVjdCB7XG4gIHdpZHRoOiAxMTVweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ubGFuZ3VhZ2UtYXJlYSBzZWxlY3Qgb3B0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmxhbmd1YWdlLWZsYWctZHJvcGR3biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMjBweCAzNHB4IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmxhbmd1YWdlLWZsYWctZHJvcGR3biAubGFuZ3VhZ2UtaW1nIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxhbmd1YWdlLWZsYWctZHJvcGR3biAubGFuZ3VhZ2UtaW1nIHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbi5sYW5ndWFnZS1mbGFnLWRyb3Bkd24gLmZsYWctZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogOTk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbn1cblxuLmxhbmd1YWdlLWZsYWctZHJvcGR3biB1bCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaGVhZGVyIC5sYW5ndWFnZS1mbGFnLWRyb3Bkd24gdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5sYW5ndWFnZS1mbGFnLWRyb3Bkd24gdWwgbGkgYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmxhbmd1YWdlLWZsYWctZHJvcGR3bjpob3ZlciAuZmxhZy1kcm9wZG93biB7XG4gIHRvcDogMzRweDtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IC00MHB4O1xufVxuXG4ubGFuZ3VhZ2UtZmxhZy1kcm9wZHduIC5mbGFnLWRyb3Bkb3duIHVsIGxpIGltZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubGFuZ3VhZ2UtZmxhZy1kcm9wZHduIC5mbGFnLWRyb3Bkb3duIHVsIGxpIHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbi5sYW5ndWFnZS1mbGFnLWRyb3Bkd246aG92ZXIgLmZsYWctZHJvcGRvd246OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDg0JTtcbiAgbWFyZ2luLWxlZnQ6IC01NnB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxMnB4ICNmZmY7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxMnB4IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDEycHggdHJhbnNwYXJlbnQ7XG59XG5cbi5sYW5ndWFnZS1mbGFnLWRyb3Bkd24gLmZsYWctZHJvcGRvd24gdWwgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRlc2t0b3BfbWVudSAubGFuZ3VhZ2UtZmxhZy1kcm9wZHduLW1vYmlsZS1tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAubGFuZ3VhZ2UtZmxhZy1kcm9wZHduIC5sYW5ndWFnZS1pbWcgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmxhbmd1YWdlLWZsYWctZHJvcGR3biB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5sYW5ndWFnZS1mbGFnLWRyb3Bkd24gLmxhbmd1YWdlLWltZyBpbWcge1xuICAgIHdpZHRoOiAyMXB4O1xuICB9XG5cbiAgLmxhbmd1YWdlLWZsYWctZHJvcGR3biAubGFuZ3VhZ2UtaW1nIHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/Users/intros/intro1/intro1.page.ts":
/*!****************************************************!*\
  !*** ./src/app/Users/intros/intro1/intro1.page.ts ***!
  \****************************************************/
/*! exports provided: Intro1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro1Page", function() { return Intro1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_global_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/global/language.service */ "./src/app/global/language.service.ts");






let Intro1Page = class Intro1Page {
    constructor(router, statusBar, translate, lanservice) {
        this.router = router;
        this.statusBar = statusBar;
        this.translate = translate;
        this.lanservice = lanservice;
        this.name = 'Angular';
        this.lan = 1;
    }
    ngOnInit() {
        //   this.languages = [
        //     {
        //         abbreviation: 'en',
        //         name: 'English',
        //         gap: '',
        //         image: 'us-svg.png'
        //     },
        //     {
        //         abbreviation: 'gr',
        //         name: 'Greek',
        //         gap: 'ml-1',
        //         image : 'greec.png'
        //     }
        //     // {
        //     //     abbreviation: 'tr',
        //     //     name: 'Turkish',
        //     //     gap: 'ml-1 mr-1',
        //     // },
        // ];
        // console.log("this.languages",this.languages)
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFFFFF');
    }
    next() {
        this.router.navigate(['/intro2']);
    }
};
Intro1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: src_app_global_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }
];
Intro1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./intro1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/intros/intro1/intro1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./intro1.page.scss */ "./src/app/Users/intros/intro1/intro1.page.scss")).default]
    })
], Intro1Page);



/***/ })

}]);
//# sourceMappingURL=Users-intros-intro1-intro1-module-es2015.js.map