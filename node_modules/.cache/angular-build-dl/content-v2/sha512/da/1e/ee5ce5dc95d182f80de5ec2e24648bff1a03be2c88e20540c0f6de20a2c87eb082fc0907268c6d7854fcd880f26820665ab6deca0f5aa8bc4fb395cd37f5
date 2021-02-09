function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Quizzes-quiz-kids-quiz-result-quiz-result-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuizzesQuizKidsQuizResultQuizResultPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\" />\n    <img src=\"../../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\" />\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\" />\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label class=\"lbl_score lbl_all spc\">{{'single.lbl_score' | translate}} {{right_ans ? right_ans : 0}}\n    {{'single.lbl_out' | translate}} {{totalq}}</ion-label>\n\n  <ion-label class=\"lbl_title\" *ngIf=\"right_ans == 0 || right_ans == 1 || right_ans == 2\">\n    {{'quiz_result.title1' | translate}}</ion-label>\n\n  <ion-label class=\"lbl_title\" *ngIf=\"right_ans == 3 || right_ans == 4 || right_ans == 5\">\n    {{'quiz_result.title2' | translate}}</ion-label>\n\n  <ion-label class=\"lbl_title\" *ngIf=\"right_ans == 6 || right_ans == 7 || right_ans == 8\">\n    {{'quiz_result.title3' | translate}}</ion-label>\n\n  <ion-label class=\"lbl_title\" *ngIf=\"right_ans == 9 || right_ans == 10\">{{'quiz_result.title4' | translate}}\n  </ion-label>\n\n  <div class=\"div_img\">\n    <img *ngIf=\"right_ans == 0 || right_ans == 1 || right_ans == 2\" src=\"../../../assets/images/depression.png\"\n      class=\"img_result\" />\n    <img *ngIf=\"right_ans == 3 || right_ans == 4 || right_ans == 5\" src=\"../../../assets/images/hands.png\"\n      class=\"img_result\" />\n    <img *ngIf=\"right_ans == 6 || right_ans == 7 || right_ans == 8\" src=\"../../../assets/images/satisfied.png\"\n      class=\"img_result\" />\n    <img *ngIf=\"right_ans == 9 || right_ans == 10\" src=\"../../../assets/images/clap.png\" class=\"img_result\" />\n  </div>\n\n  <ion-label class=\"lbl_desc\" *ngIf=\"right_ans == 0 || right_ans == 1 || right_ans == 2\">\n    {{'quiz_result.desc1' | translate}}</ion-label>\n\n  <ion-label class=\"lbl_desc\" *ngIf=\"right_ans == 3 || right_ans == 4 || right_ans == 5\">\n    {{'quiz_result.desc2' | translate}}</ion-label>\n\n  <ion-label class=\"lbl_desc\" *ngIf=\"right_ans == 6 || right_ans == 7 || right_ans == 8\">\n    {{'quiz_result.desc3' | translate}}</ion-label>\n\n  <ion-label class=\"lbl_desc\" *ngIf=\"right_ans == 9 || right_ans == 10\">{{'quiz_result.desc4' | translate}}</ion-label>\n\n  <ion-label class=\"lbl_mark lbl_all\" *ngIf=\"roll_id\">{{'reusable.mark' | translate}}</ion-label>\n\n  <form [formGroup]=\"quiz_result_form\" autocomplete=\"off\" class=\"form_all\">\n\n    <ion-item lines=\"none\" class=\"input-item space\" *ngIf=\"roll_id\">\n      <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.select' | translate}}\" formControlName=\"student\"\n        class=\"btn-select bg dropWidth\" mode=\"md\">\n        <ion-select-option value=\"all\">{{'reusable.lbl_assign' | translate}}</ion-select-option>\n        <ion-select-option *ngFor=\"let opt of slist\" [value]=\"opt.kid_unique_id\">{{opt.kidName}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"quiz_result_form.controls.student.hasError('required') && quiz_result_form.controls.student.touched\">\n      <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n    </ion-item>\n\n  </form>\n\n  <ion-button *ngIf=\"roll_id\" expand=\"block\" size=\"large\" class=\"btn_set btn_all\"  (click)=\"submit()\">\n    {{'reusable.set' | translate}}\n  </ion-button>\n  <br>\n  <ion-button expand=\"block\" size=\"large\" class=\"btn_set btn_all\" (click)=\"replay()\">\n    {{'single.btn_replay' | translate}}\n  </ion-button>\n\n\n  <ion-label class=\"lbl_related lbl_all\">{{'single.lbl_related' | translate}}</ion-label>\n\n  <div class=\"isEmpty\" *ngIf=\"quize_result?.length == 0 || quize_result == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <div *ngFor=\"let opt of quize_result | slice:0:limit;\">\n    <ion-row class=\"row_list row_all\" (click)=\"quizstart(opt.id,opt.free_quiz)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img *ngIf=\"!opt.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n        <img *ngIf=\"opt.image\" src=\"{{imageUrl}}{{opt.image}}\" class=\"img_main img_all\" />\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list auto_all\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.lessionTitle}} - {{opt.unitTitle}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='opt.free_quiz == 0' class=\"img_premium\" />\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\" />\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-kids/quiz-result/quiz-result-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Quizzes/quiz-kids/quiz-result/quiz-result-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: QuizResultPageRoutingModule */

  /***/
  function srcAppQuizzesQuizKidsQuizResultQuizResultRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizResultPageRoutingModule", function () {
      return QuizResultPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _quiz_result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz-result.page */
    "./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.page.ts");

    var routes = [{
      path: '',
      component: _quiz_result_page__WEBPACK_IMPORTED_MODULE_3__["QuizResultPage"]
    }];

    var QuizResultPageRoutingModule = function QuizResultPageRoutingModule() {
      _classCallCheck(this, QuizResultPageRoutingModule);
    };

    QuizResultPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuizResultPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.module.ts ***!
    \*********************************************************************/

  /*! exports provided: QuizResultPageModule */

  /***/
  function srcAppQuizzesQuizKidsQuizResultQuizResultModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizResultPageModule", function () {
      return QuizResultPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _quiz_result_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quiz-result-routing.module */
    "./src/app/Quizzes/quiz-kids/quiz-result/quiz-result-routing.module.ts");
    /* harmony import */


    var _quiz_result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quiz-result.page */
    "./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var QuizResultPageModule = function QuizResultPageModule() {
      _classCallCheck(this, QuizResultPageModule);
    };

    QuizResultPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quiz_result_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizResultPageRoutingModule"]],
      declarations: [_quiz_result_page__WEBPACK_IMPORTED_MODULE_6__["QuizResultPage"]]
    })], QuizResultPageModule);
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuizzesQuizKidsQuizResultQuizResultPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\n.lbl_score {\n  display: block;\n  text-align: center;\n  padding: 8px;\n}\n.lbl_title {\n  display: block;\n  text-align: center;\n  padding: 16px;\n  font-weight: bold;\n  font-size: 18px;\n}\n.div_img {\n  text-align: center;\n}\n.div_img .img_result {\n  height: 200px;\n}\n.lbl_desc {\n  display: block;\n  text-align: center;\n  font-size: 16px;\n  padding: 16px;\n  font-weight: bold;\n}\n.lbl_mark {\n  display: block;\n  text-align: center;\n  font-weight: bold;\n  padding: 8px;\n  font-weight: bold;\n}\n.btn_set {\n  color: white;\n}\n.lbl_related {\n  display: block;\n  text-align: center;\n  padding: 8px;\n}\n.spc {\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n.row_list .col_list .img_main {\n  height: 48px;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1F1aXp6ZXMvcXVpei1raWRzL3F1aXotcmVzdWx0L3F1aXotcmVzdWx0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvUXVpenplcy9xdWl6LWtpZHMvcXVpei1yZXN1bHQvcXVpei1yZXN1bHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FES0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRko7QURJQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNESjtBREdBO0VBQ0ksa0JBQUE7QUNBSjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FER0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQUo7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDQTtFQUNJLFlBQUE7QUNFSjtBREFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEREE7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0FDSUo7QURBUTtFQUNJLFlBQUE7QUNHWjtBRERRO0VBQ0ksY0FBQTtBQ0daO0FERFE7RUFDSSxjQUFBO0FDR1o7QUREUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDR1o7QUREUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9RdWl6emVzL3F1aXota2lkcy9xdWl6LXJlc3VsdC9xdWl6LXJlc3VsdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAgIC5pbWdfdG9vbHtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgIH1cbn1cbi8vIC5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHggIWltcG9ydGFudDtcbi8vICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gICB9XG4ubGJsX3Njb3Jle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG4ubGJsX3RpdGxle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5kaXZfaW1ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAuaW1nX3Jlc3VsdHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgLy8gd2lkdGg6IDE1MHB4O1xuICAgIH1cbn1cbi5sYmxfZGVzY3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGJsX21hcmt7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5idG5fc2V0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5sYmxfcmVsYXRlZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xufVxuLnNwY3tcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5yb3dfbGlzdHtcbiAgICAuY29sX2xpc3R7XG4gICAgICAgIC5pbWdfbWFpbntcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgfVxuICAgICAgICAubGJsX3F1aXpfdGl0bGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAubGJsX3VuaXR7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuaW1nX3ByZW1pdW17XG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nX2Fycm93e1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xufVxuLmJnIC5pbWdfdG9vbCB7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLmxibF9zY29yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmxibF90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5kaXZfaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdl9pbWcgLmltZ19yZXN1bHQge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ubGJsX2Rlc2Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGJsX21hcmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ0bl9zZXQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sYmxfcmVsYXRlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnNwYyB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX21haW4ge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfcXVpel90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3VuaXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19hcnJvdyB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.page.ts ***!
    \*******************************************************************/

  /*! exports provided: QuizResultPage */

  /***/
  function srcAppQuizzesQuizKidsQuizResultQuizResultPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizResultPage", function () {
      return QuizResultPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

    var QuizResultPage = /*#__PURE__*/function () {
      function QuizResultPage(formBuilder, navCtrl, api, route, router, statusBar) {
        _classCallCheck(this, QuizResultPage);

        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.api = api;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].image_url;
        this.user_not_found_place_holder = 'assets/images/placeholder-s.png';
        this.limit = 10;
        this.quiz_result_fb();
      }

      _createClass(QuizResultPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadData",
        value: function loadData(infiniteScroll) {
          var _this = this;

          setTimeout(function () {
            _this.limit += 10;
            infiniteScroll.target.complete();
          }, 500);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
          localStorage.removeItem("len_val");
          this.roll_id = localStorage.getItem("role_id") === '4';
          this.package_status = localStorage.getItem("package_status");
          var reqData = this.route.snapshot.queryParams;
          this.totalq = this.route.snapshot.queryParams.total_que;
          this.right_ans = this.route.snapshot.queryParams.countdata;
          this.api.realtedquiz(reqData.id).subscribe(function (resp) {
            _this2.result = resp;
            _this2.quize_result = _this2.result.data;
          });
          this.api.connectStudentList().subscribe(function (resp) {
            _this2.students_list = resp;
            _this2.slist = _this2.students_list.data;
          });
        }
      }, {
        key: "quiz_result_fb",
        value: function quiz_result_fb() {
          this.quiz_result_form = this.formBuilder.group({
            student: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this3 = this;

          var reqData = this.route.snapshot.queryParams;

          for (var v in this.quiz_result_form.controls) {
            this.quiz_result_form.controls[v].markAsTouched();
          }

          if (this.quiz_result_form.valid) {
            this.api.presentLoading();
            this.quize_process = true;
            var body = {
              kid_unique_id: this.quiz_result_form.value.student,
              quiz_id: reqData.id
            };
            this.api.homework(body).subscribe(function (data) {
              _this3.quize_process = false;

              _this3.api.dismissLoading();

              if (data.status == 1) {
                // success part
                _this3.api.presentToastWithOptions(data['message']);

                var g_id = localStorage.getItem("g_id");
                var l_id = localStorage.getItem("l_id");
                var c_id = localStorage.getItem("c_id");

                _this3.router.navigate(['/tabs/home-teacher'], {
                  queryParams: {
                    g_id: g_id,
                    l_id: l_id,
                    c_id: c_id
                  }
                });
              } else {
                _this3.api.presentToastWithOptions(data['message']);
              }
            }, function (err) {
              _this3.quize_process = false;

              _this3.api.dismissLoading();

              _this3.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
          }
        }
      }, {
        key: "quizstart",
        value: function quizstart(id, quize) {
          if (quize == 0 && this.package_status == 1) {
            this.router.navigate(['/tabs/quiz-single'], {
              queryParams: {
                id: id
              }
            });
          } else if (quize == 1) {
            this.router.navigate(['/tabs/quiz-single'], {
              queryParams: {
                id: id
              }
            });
          } else {
            this.router.navigate(["/tabs/quiz-premium"]);
          }
        }
      }, {
        key: "replay",
        value: function replay() {
          var reqData = this.route.snapshot.queryParams;
          this.router.navigate(['/tabs/quiz-play'], {
            queryParams: {
              id: reqData.id
            }
          });
        }
      }, {
        key: "back",
        value: function back() {
          var reqData = this.route.snapshot.queryParams;
          this.navCtrl.navigateBack(['/tabs/quiz-play'], {
            queryParams: {
              id: reqData.id
            }
          });
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }]);

      return QuizResultPage;
    }();

    QuizResultPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], {
      "static": true
    })], QuizResultPage.prototype, "infiniteScroll", void 0);
    QuizResultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quiz-result',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./quiz-result.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./quiz-result.page.scss */
      "./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.page.scss"))["default"]]
    })], QuizResultPage);
    /***/
  }
}]);
//# sourceMappingURL=Quizzes-quiz-kids-quiz-result-quiz-result-module-es5.js.map