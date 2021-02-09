function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Quizzes-quiz-teachers-teachers-quiz-list-teachers-quiz-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.page.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.page.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuizzesQuizTeachersTeachersQuizListTeachersQuizListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar2\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/icon.png\" slot=\"start\" class=\"img_tool_logo\" />\n    <ion-searchbar placeholder=\"{{'reusable.search' | translate}}\" (ionChange)=\"searchBar($event.target.value)\"\n      searchIcon=\"none\" class=\"searchBox\"></ion-searchbar>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\" />\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label class=\"lbl_head_title\">\n    {{'reusable.search_title' |  translate}}\n  </ion-label>\n\n  <form [formGroup]=\"teacher_quizzes_form\" autocomplete=\"off\" class=\"form_all\">\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.grade' | translate}}\" formControlName=\"grade\"\n        class=\"btn-select bg dropWidth\" mode=\"md\" (ionChange)=\"lessionList($event)\">\n        <ion-select-option *ngFor=\"let opt of glist\" [value]=\"opt.id\">{{opt.title}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"teacher_quizzes_form.controls.grade.hasError('required') && teacher_quizzes_form.controls.grade.touched\">\n      <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n        <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.lesson' | translate}}\"  formControlName=\"lesson\"\n          class=\"btn-select bg dropWidth\" mode=\"md\" (ionChange)=\"onChangePropertyType($event)\">\n         <div *ngIf=\"course_id\">\n          <ion-select-option *ngFor=\"let opt of llist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n        </div>\n        <!-- <ion-select-option *ngIf=\"!course_id\"></ion-select-option> -->\n\n        </ion-select>\n      </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"teacher_quizzes_form.controls.lesson.hasError('required') && teacher_quizzes_form.controls.lesson.touched\">\n      <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.course' | translate}}\" formControlName=\"course\"\n        class=\"btn-select bg dropWidth\" mode=\"md\">\n        <div *ngIf=\"lass_id\">\n        <ion-select-option *ngFor=\"let opt of clist\" [value]=\"opt.id\">{{opt.title}}</ion-select-option>\n      </div>\n        <!-- <ion-select-option *ngIf=\"!lass_id\"></ion-select-option> -->\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"teacher_quizzes_form.controls.course.hasError('required') && teacher_quizzes_form.controls.course.touched\">\n      <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n    </ion-item>\n\n  </form>\n\n  <ion-button expand=\"block\" size=\"large\" class=\"btn_all\" (click)=\"submit()\">{{'reusable.btn_search_quiz' | translate}}\n  </ion-button>\n\n  <ion-label class=\"lbl_latest lbl_all\">\n    {{'reusable.lbl_latest_quiz' | translate}}\n  </ion-label>\n\n  <div class=\"isEmpty\" *ngIf=\"quizelist?.length == 0 || quizelist == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <ng-container *ngFor=\"let opt of quizelist | slice:0:limit;\">\n    <ion-row class=\"row_list row_all\" (click)=\"quiz_single(opt.id,opt.free_quiz)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img *ngIf=\"!opt.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n        <img *ngIf=\"opt.image\" src=\"{{imageUrl}}{{opt.image}}\" class=\"img_main img_all\" />\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list auto_all\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.lessionTitle}} - {{opt.unitTitle}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='opt.free_quiz == 0' class=\"img_premium\" />\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\" />\n      </ion-col>\n    </ion-row>\n  </ng-container>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <div class=\"div_ads\">\n    <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" (click)=\"ads()\" class=\"img_ads spc_ads\" />\n  </div>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: TeachersQuizListPageRoutingModule */

  /***/
  function srcAppQuizzesQuizTeachersTeachersQuizListTeachersQuizListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeachersQuizListPageRoutingModule", function () {
      return TeachersQuizListPageRoutingModule;
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


    var _teachers_quiz_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./teachers-quiz-list.page */
    "./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.page.ts");

    var routes = [{
      path: '',
      component: _teachers_quiz_list_page__WEBPACK_IMPORTED_MODULE_3__["TeachersQuizListPage"]
    }];

    var TeachersQuizListPageRoutingModule = function TeachersQuizListPageRoutingModule() {
      _classCallCheck(this, TeachersQuizListPageRoutingModule);
    };

    TeachersQuizListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TeachersQuizListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: TeachersQuizListPageModule */

  /***/
  function srcAppQuizzesQuizTeachersTeachersQuizListTeachersQuizListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeachersQuizListPageModule", function () {
      return TeachersQuizListPageModule;
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


    var _teachers_quiz_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./teachers-quiz-list-routing.module */
    "./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list-routing.module.ts");
    /* harmony import */


    var _teachers_quiz_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./teachers-quiz-list.page */
    "./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var TeachersQuizListPageModule = function TeachersQuizListPageModule() {
      _classCallCheck(this, TeachersQuizListPageModule);
    };

    TeachersQuizListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _teachers_quiz_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeachersQuizListPageRoutingModule"]],
      declarations: [_teachers_quiz_list_page__WEBPACK_IMPORTED_MODULE_6__["TeachersQuizListPage"]]
    })], TeachersQuizListPageModule);
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.page.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.page.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuizzesQuizTeachersTeachersQuizListTeachersQuizListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\n.bg .searchBox {\n  --background: #fdf8f1;\n  border: 1px solid var(--ion-color-primary);\n  height: 34px;\n  width: 90%;\n  margin: 0 auto;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n  border-radius: 10px;\n}\n.lbl_head_title {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  width: 75%;\n  margin: 0 auto;\n  padding: 16px;\n}\n.lbl_latest {\n  display: block;\n  padding: 8px;\n}\n.row_list .col_list .img_main {\n  height: 48px;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1F1aXp6ZXMvcXVpei10ZWFjaGVycy90ZWFjaGVycy1xdWl6LWxpc3QvdGVhY2hlcnMtcXVpei1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvUXVpenplcy9xdWl6LXRlYWNoZXJzL3RlYWNoZXJzLXF1aXotbGlzdC90ZWFjaGVycy1xdWl6LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBREFJO0VBQ0UsWUFBQTtBQ0VOO0FEQUk7RUFDRSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFTjtBRFFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0xKO0FEYUU7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ1ZOO0FEZVU7RUFDSSxZQUFBO0FDWmQ7QURjVTtFQUNJLGNBQUE7QUNaZDtBRGNVO0VBQ0ksY0FBQTtBQ1pkO0FEY1U7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1pkO0FEY1U7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1pkIiwiZmlsZSI6InNyYy9hcHAvUXVpenplcy9xdWl6LXRlYWNoZXJzL3RlYWNoZXJzLXF1aXotbGlzdC90ZWFjaGVycy1xdWl6LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgLmltZ190b29sIHtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICB9XG4gICAgLnNlYXJjaEJveCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfSAgXG4gIH1cbi8vICAgLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgIH1cbi8vICAgLmlvbi1zZWFyY2hiYXIgOjpwbGFjZWhvbGRlcntcbi8vICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuLy8gICB9XG4gIC5sYmxfaGVhZF90aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgLy8gLnNlbGVjdC1pY29ue1xuICAvLyAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAvLyB9XG4gIC8vIC5zZWxlY3QtaWNvbi1pbm5lcntcbiAgLy8gICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgLy8gfVxuICAubGJsX2xhdGVzdHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogOHB4O1xuICB9XG4gIFxuICAucm93X2xpc3R7XG4gICAgICAuY29sX2xpc3R7XG4gICAgICAgICAgLmltZ19tYWlue1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYmxfcXVpel90aXRsZXtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYmxfdW5pdHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWdfcHJlbWl1bXtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZ19hcnJvd3tcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH0iLCIuYmcge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG59XG4uYmcgLmltZ190b29sIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLmJnIC5zZWFyY2hCb3gge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sYmxfaGVhZF90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5sYmxfbGF0ZXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX21haW4ge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfcXVpel90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3VuaXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19hcnJvdyB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.page.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.page.ts ***!
    \*************************************************************************************/

  /*! exports provided: TeachersQuizListPage */

  /***/
  function srcAppQuizzesQuizTeachersTeachersQuizListTeachersQuizListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeachersQuizListPage", function () {
      return TeachersQuizListPage;
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


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var TeachersQuizListPage = /*#__PURE__*/function () {
      function TeachersQuizListPage(formBuilder, api, router, iab, statusBar) {
        _classCallCheck(this, TeachersQuizListPage);

        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.iab = iab;
        this.statusBar = statusBar;
        this.limit = 10;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].image_url;
        this.user_not_found_place_holder = 'assets/images/placeholder-s.png';
        this.advertise_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].advertise_url;
        this.teacher_quizzes_fb();
      }

      _createClass(TeachersQuizListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.gradList();
        }
      }, {
        key: "searchBar",
        value: function searchBar(value) {
          var searchList = this.quizelist;

          if (value) {
            searchList = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](searchList, function (x) {
              if (x.title.toLowerCase().includes(value.toLowerCase())) {
                return x.title.toLowerCase().includes(value.toLowerCase());
              }
            });
          } else {
            searchList = this.resp.data;
          }

          this.quizelist = searchList;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.teacher_quizzes_form.reset();
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
          this.connect_student = localStorage.getItem("connect_student");
          this.package_status = localStorage.getItem("package_status");
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

          if (this.role_id == '4') {
            this.api.teacherPackageStatus().subscribe(function (resp) {
              _this.connect = resp;
              localStorage.setItem("connect_student", _this.connect.data.connect_student);
              localStorage.setItem("package_status", _this.connect.data.package_status);
              localStorage.setItem("packagePurchaseId", _this.connect.data.packagePurchaseId);
            });
          } // this.api.presentLoading();


          this.api.latest_quiz().subscribe(function (resp) {
            _this.resp = resp;
            _this.quizelist = _this.resp.data; // this.api.dismissLoading();
          });
          this.api.searchPageAdd().subscribe(function (resp) {
            _this.advertise = resp;
            _this.add = _this.advertise.data.image;
            _this.add_url = _this.advertise.data.url;
          });
        }
      }, {
        key: "ads",
        value: function ads() {
          this.iab.create(this.add_url, '_system', 'location=yes');
        }
      }, {
        key: "lessionList",
        value: function lessionList(e) {
          var _this2 = this;

          this.course_id = e.target.value;
          this.api.teacher_lessionlist(e.target.value).subscribe(function (data) {
            _this2.lessionlist = data;
            _this2.llist = _this2.lessionlist.data;
          });
        }
      }, {
        key: "loadData",
        value: function loadData(infiniteScroll) {
          var _this3 = this;

          setTimeout(function () {
            _this3.limit += 10;
            infiniteScroll.target.complete();
          }, 500);
        }
      }, {
        key: "onChangePropertyType",
        value: function onChangePropertyType(e) {
          var _this4 = this;

          localStorage.setItem("l_id", e.target.value);
          this.lass_id = e.target.value;
          this.api.courselist(e.target.value).subscribe(function (data) {
            _this4.courcelist = data;
            _this4.clist = _this4.courcelist.data;
          });
        }
      }, {
        key: "gradList",
        value: function gradList() {
          var _this5 = this;

          this.api.gradeList().subscribe(function (data) {
            _this5.gradlist = data;
            _this5.glist = _this5.gradlist.data;
          });
        }
      }, {
        key: "teacher_quizzes_fb",
        value: function teacher_quizzes_fb() {
          this.teacher_quizzes_form = this.formBuilder.group({
            grade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lesson: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            course: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this6 = this;

          for (var v in this.teacher_quizzes_form.controls) {
            this.teacher_quizzes_form.controls[v].markAsTouched();
          }

          if (this.teacher_quizzes_form.valid) {
            this.api.presentLoading();
            this.quize_process = true;
            var body = {
              grade_id: this.teacher_quizzes_form.value.grade,
              lession_id: this.teacher_quizzes_form.value.lesson,
              course_id: this.teacher_quizzes_form.value.course
            };
            this.api.teacherSearchContent(body).subscribe(function (data) {
              _this6.quize_process = false;

              _this6.api.dismissLoading();

              if (data.status == 1) {
                // success part
                _this6.api.presentToastWithOptions(data['message']);

                localStorage.setItem("g_id", body.grade_id);
                localStorage.setItem("l_id", body.lession_id);
                localStorage.setItem("c_id", body.course_id);
                localStorage.setItem("grade_id", body.grade_id);
                localStorage.setItem("lession_id", body.lession_id);
                localStorage.setItem("course_id", body.course_id);
                localStorage.setItem("t_search", "t_search");

                _this6.router.navigate(["/tabs/quiz-search"], {
                  queryParams: {
                    g_id: body.grade_id,
                    l_id: body.lession_id,
                    c_id: body.course_id
                  }
                });
              } else {
                _this6.api.presentToastWithOptions(data['message']);
              }
            }, function (err) {
              _this6.quize_process = false;

              _this6.api.dismissLoading();

              _this6.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
          }
        }
      }, {
        key: "quiz_single",
        value: function quiz_single(id, quize) {
          localStorage.setItem("k_quize_search", "k_quize_search");

          if (localStorage.getItem("role_id") === '4') {
            if (quize == 1) {
              this.router.navigate(['/tabs/quiz-single'], {
                queryParams: {
                  id: id
                }
              });
            } else {
              if (this.package_status == 1) {
                this.router.navigate(['/tabs/quiz-single'], {
                  queryParams: {
                    id: id
                  }
                });
              } else {
                if (this.connect_student >= 6) {
                  this.router.navigate(['/tabs/quiz-single'], {
                    queryParams: {
                      id: id
                    }
                  });
                } else {
                  this.router.navigate(["/tabs/teacher-premium"]);
                }
              }
            }
          }
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }]);

      return TeachersQuizListPage;
    }();

    TeachersQuizListPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], {
      "static": true
    })], TeachersQuizListPage.prototype, "infiniteScroll", void 0);
    TeachersQuizListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teachers-quiz-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./teachers-quiz-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./teachers-quiz-list.page.scss */
      "./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.page.scss"))["default"]]
    })], TeachersQuizListPage);
    /***/
  }
}]);
//# sourceMappingURL=Quizzes-quiz-teachers-teachers-quiz-list-teachers-quiz-list-module-es5.js.map