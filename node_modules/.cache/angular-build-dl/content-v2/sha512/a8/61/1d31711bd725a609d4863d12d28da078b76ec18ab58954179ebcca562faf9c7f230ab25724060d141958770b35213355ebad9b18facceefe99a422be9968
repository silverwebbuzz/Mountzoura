function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Quizzes-quiz-search-quiz-search-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-search/quiz-search.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-search/quiz-search.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuizzesQuizSearchQuizSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar2\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/icon.png\" slot=\"start\" class=\"img_tool_logo\" />\n    <ion-searchbar id=\"searchValue\" (ionChange)=\"searchBar($event.target.value)\"\n      placeholder=\"{{'reusable.search' | translate}}\" searchIcon=\"none\" class=\"searchBox\"></ion-searchbar>\n    <img src=\"../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\" />\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"isEmpty1\"\n    *ngIf=\"(pdf?.length == 0 && quizedata?.length == 0  && video?.length == 0) || ((!t_contain || !k_contain) && quizedata?.length === 0)\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n  <div *ngIf=\"(!t_contain || !k_contain) && quizedata?.length >= 1\">\n    <div *ngFor=\"let opt of quizedata | slice:0:limit;\">\n      <ion-row class=\"row_list row_all\" (click)=\"quiz_single(opt.id,opt.free_quiz)\">\n        <ion-col size=\"2\" class=\"col_list col_all\">\n          <!-- <img src=\"../../../assets/images/paper.png\" class=\"img_main\"/> -->\n          <img *ngIf=\"!opt.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n          <img *ngIf=\"opt.image\" src=\"{{imageUrl}}{{opt.image}}\" class=\"img_main img_all\" />\n        </ion-col>\n        <ion-col size=\"6\" class=\"col_list auto_all\">\n          <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n          <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.lessionTitle}} - {{opt.unitTitle}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n          <img src=\"../../../assets/images/premium.png\" *ngIf='opt.free_quiz == 0' class=\"img_premium\" />\n        </ion-col>\n        <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n          <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\" />\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div *ngIf=\"t_contain || k_contain\">\n    <!-- <div *ngFor=\"let art of article | slice:0:limit;\">\n      <ion-row class=\"row_list row_all\" (click)=\"quiz_single(opt.id,opt.free_quiz)\">\n        <ion-col size=\"2\" class=\"col_list col_all\">\n          <img *ngIf=\"!art.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n          <img *ngIf=\"art.image\" src=\"{{article_url}}{{art.image}}\" class=\"img_main img_all\" />\n        </ion-col>\n        <ion-col size=\"6\" class=\"col_list auto_all\">\n          <ion-label class=\"lbl_quiz_title lbl_title_all\">{{art.title}}</ion-label>\n          <ion-label class=\"lbl_unit lbl_desc_all\">{{art.lessionTitle}} - {{art.unitTitle}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n          <img src=\"../../../assets/images/premium.png\" *ngIf='art.free_quiz == 0' class=\"img_premium\" />\n        </ion-col>\n        <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n          <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\" />\n        </ion-col>\n      </ion-row>\n    </div> -->\n\n    <ng-container *ngFor=\"let pdf of pdf | slice:0:limit;\">\n      <ion-row class=\"row_list row_all\" (click)=\"quiz_pdf(pdf.id,pdf.free_pdf)\">\n        <ion-col size=\"2\" class=\"col_list col_all\">\n          <img src=\"../../../assets/images/paper.png\" class=\"img_main\" />\n          <!-- <img *ngIf=\"!pdf.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n          <img *ngIf=\"pdf.image\" src=\"{{imageUrl}}{{pdf.image}}\" class=\"img_main img_all\" /> -->\n        </ion-col>\n        <ion-col size=\"6\" class=\"col_list auto_all\">\n          <ion-label class=\"lbl_quiz_title lbl_title_all\">{{pdf.title}}</ion-label>\n          <ion-label class=\"lbl_unit lbl_desc_all\">{{pdf.lessionTitle}} - {{pdf.unitTitle}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n          <img src=\"../../../assets/images/premium.png\" *ngIf='pdf.free_pdf == 0' class=\"img_premium\" />\n        </ion-col>\n        <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n          <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\" />\n        </ion-col>\n      </ion-row>\n    </ng-container>\n\n    <div *ngFor=\"let vid of video | slice:0:limit;\">\n      <ion-row class=\"row_list row_all\" (click)=\"quiz_video(vid.id,vid.free_video)\">\n        <ion-col size=\"2\" class=\"col_list col_all\">\n          <img src=\"../../../assets/images/video.png\" class=\"img_main img_all\" />\n        </ion-col>\n        <ion-col size=\"6\" class=\"col_list auto_all\">\n          <ion-label class=\"lbl_quiz_title lbl_title_all\">{{vid.title}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n          <img src=\"../../../assets/images/premium.png\" *ngIf='vid.free_video == 0' class=\"img_premium\" />\n        </ion-col>\n        <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n          <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\" />\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <div class=\"div_ads_empty\">\n    <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" (click)=\"ads()\" class=\"img_ads_empty spc_ads\" />\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-search/quiz-search-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Quizzes/quiz-search/quiz-search-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: QuizSearchPageRoutingModule */

  /***/
  function srcAppQuizzesQuizSearchQuizSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizSearchPageRoutingModule", function () {
      return QuizSearchPageRoutingModule;
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


    var _quiz_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz-search.page */
    "./src/app/Quizzes/quiz-search/quiz-search.page.ts");

    var routes = [{
      path: '',
      component: _quiz_search_page__WEBPACK_IMPORTED_MODULE_3__["QuizSearchPage"]
    }];

    var QuizSearchPageRoutingModule = function QuizSearchPageRoutingModule() {
      _classCallCheck(this, QuizSearchPageRoutingModule);
    };

    QuizSearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuizSearchPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-search/quiz-search.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Quizzes/quiz-search/quiz-search.module.ts ***!
    \***********************************************************/

  /*! exports provided: QuizSearchPageModule */

  /***/
  function srcAppQuizzesQuizSearchQuizSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizSearchPageModule", function () {
      return QuizSearchPageModule;
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


    var _quiz_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quiz-search-routing.module */
    "./src/app/Quizzes/quiz-search/quiz-search-routing.module.ts");
    /* harmony import */


    var _quiz_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quiz-search.page */
    "./src/app/Quizzes/quiz-search/quiz-search.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var QuizSearchPageModule = function QuizSearchPageModule() {
      _classCallCheck(this, QuizSearchPageModule);
    };

    QuizSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quiz_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizSearchPageRoutingModule"]],
      declarations: [_quiz_search_page__WEBPACK_IMPORTED_MODULE_6__["QuizSearchPage"]]
    })], QuizSearchPageModule);
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-search/quiz-search.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/Quizzes/quiz-search/quiz-search.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuizzesQuizSearchQuizSearchPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\n.bg .searchBox {\n  --background: #fdf8f1;\n  border: 1px solid var(--ion-color-primary);\n  height: 34px;\n  width: 90%;\n  margin: 0 auto;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n  border-radius: 10px;\n}\n.row_list .col_list .img_main {\n  height: 48px;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1F1aXp6ZXMvcXVpei1zZWFyY2gvcXVpei1zZWFyY2gucGFnZS5zY3NzIiwic3JjL2FwcC9RdWl6emVzL3F1aXotc2VhcmNoL3F1aXotc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7QURBSTtFQUNFLFlBQUE7QUNFTjtBREFJO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG1CQUFBO0FDRU47QURVTTtFQUNFLFlBQUE7QUNQUjtBRFNNO0VBQ0UsY0FBQTtBQ1BSO0FEU007RUFDRSxjQUFBO0FDUFI7QURTTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDUFI7QURTTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC9RdWl6emVzL3F1aXotc2VhcmNoL3F1aXotc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAgIC5pbWdfdG9vbCB7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxuICAgIC5zZWFyY2hCb3gge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgfVxuICAvLyAuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAvLyAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4ICFpbXBvcnRhbnQ7XG4gIC8vICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLy8gfVxuICAvLyAuaW9uLXNlYXJjaGJhciA6OnBsYWNlaG9sZGVyIHtcbiAgLy8gICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLy8gfVxuICAucm93X2xpc3Qge1xuICAgIC5jb2xfbGlzdCB7XG4gICAgICAuaW1nX21haW4ge1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICB9XG4gICAgICAubGJsX3F1aXpfdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIC5sYmxfdW5pdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgLmltZ19wcmVtaXVtIHtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgIH1cbiAgICAgIC5pbWdfYXJyb3cge1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiLCIuYmcge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG59XG4uYmcgLmltZ190b29sIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLmJnIC5zZWFyY2hCb3gge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19tYWluIHtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3F1aXpfdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmxibF91bml0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfcHJlbWl1bSB7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDM0cHg7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfYXJyb3cge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-search/quiz-search.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Quizzes/quiz-search/quiz-search.page.ts ***!
    \*********************************************************/

  /*! exports provided: QuizSearchPage */

  /***/
  function srcAppQuizzesQuizSearchQuizSearchPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizSearchPage", function () {
      return QuizSearchPage;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
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


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var QuizSearchPage = /*#__PURE__*/function () {
      function QuizSearchPage(api, route, router, statusBar, iab) {
        _classCallCheck(this, QuizSearchPage);

        this.api = api;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.iab = iab;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].image_url;
        this.article_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].article_url;
        this.user_not_found_place_holder = 'assets/images/paper.png';
        this.limit = 10;
        this.advertise_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].advertise_url;
      }

      _createClass(QuizSearchPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
          localStorage.removeItem("len_val");
          this.package_status = localStorage.getItem("package_status");
          this.connect_student = localStorage.getItem("connect_student");
          this.t_contain = localStorage.getItem("t_contain");
          this.k_contain = localStorage.getItem("k_contain");
          var reqData = this.route.snapshot.queryParams;

          if (localStorage.getItem("t_search") || localStorage.getItem("t_contain")) {
            var gradedata = {
              lession_id: localStorage.getItem("lession_id"),
              course_id: localStorage.getItem("course_id"),
              grade_id: localStorage.getItem("grade_id")
            };
            this.api.teacherSearchContent(gradedata).subscribe(function (resp) {
              _this.quizelist_data = resp;
              _this.quizedata = _this.quizelist_data.quiz; // if(reqData.t_contain){
              // this.article = this.quizelist_data.article;

              _this.pdf = _this.quizelist_data.pdf;
              _this.video = _this.quizelist_data.video; // }
            });
          } // this.api.presentLoading();


          if (localStorage.getItem("k_search") || localStorage.getItem("k_contain")) {
            var body = {
              lession_id: localStorage.getItem("lession_id"),
              course_id: localStorage.getItem("course_id"),
              grade_id: localStorage.getItem("grade_id")
            };
            this.api.studentSearchContent(body).subscribe(function (resp) {
              _this.quizelist_data = resp;
              _this.quizedata = _this.quizelist_data.quiz; // if(reqData.k_contain){
              // this.article = this.quizelist_data.article;

              _this.pdf = _this.quizelist_data.pdf;
              _this.video = _this.quizelist_data.video; //  this.api.dismissLoading();
              // }
            });
          }

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
        key: "searchBar",
        value: function searchBar(value) {
          var quizeList = this.quizedata; // let articleList = this.article;

          var pdfList = this.pdf;
          var videoList = this.video;

          if (value) {
            quizeList = lodash__WEBPACK_IMPORTED_MODULE_7__["filter"](quizeList, function (x) {
              if (x.title.toLowerCase().includes(value.toLowerCase())) {
                return x.title.toLowerCase().includes(value.toLowerCase());
              }
            }); // articleList = _.filter(articleList, function (x) {
            //   if (x.title.toLowerCase().indexOf(value.toLowerCase()) > -1) {
            //     return x.title ? x.title.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
            //   }
            // })

            pdfList = lodash__WEBPACK_IMPORTED_MODULE_7__["filter"](pdfList, function (x) {
              if (x.title.toLowerCase().includes(value.toLowerCase())) {
                return x.title.toLowerCase().includes(value.toLowerCase());
              }
            });
            videoList = lodash__WEBPACK_IMPORTED_MODULE_7__["filter"](videoList, function (x) {
              if (x.title.toLowerCase().includes(value.toLowerCase())) {
                return x.title.toLowerCase().includes(value.toLowerCase());
              }
            });
          } else {
            quizeList = this.quizelist_data.quiz; // articleList = this.quizelist_data.article;

            pdfList = this.quizelist_data.pdf;
            videoList = this.quizelist_data.video;
          }

          this.quizedata = quizeList; // this.article = articleList;

          this.pdf = pdfList;
          this.video = videoList;
        }
      }, {
        key: "loadData",
        value: function loadData(infiniteScroll) {
          var _this2 = this;

          setTimeout(function () {
            _this2.limit += 10;
            infiniteScroll.target.complete();
          }, 500);
        }
      }, {
        key: "quiz_single",
        value: function quiz_single(id, quize) {
          var reqData = this.route.snapshot.queryParams;

          if (localStorage.getItem("role_id") === '2') {
            if (localStorage.getItem("kid_id")) {
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
            } else {
              this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');
            }
          }

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
        key: "quiz_video",
        value: function quiz_video(id, quize) {
          if (localStorage.getItem("role_id") === '2') {
            if (localStorage.getItem("kid_id")) {
              if (quize == 0 && this.package_status == 1) {
                this.router.navigate(['/tabs/video'], {
                  queryParams: {
                    video_id: id
                  }
                });
              } else if (quize == 1) {
                this.router.navigate(['/tabs/video'], {
                  queryParams: {
                    video_id: id
                  }
                });
              } else {
                this.router.navigate(["/tabs/quiz-premium"]);
              }
            } else {
              this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');
            }
          }

          if (localStorage.getItem("role_id") === '4') {
            if (quize == 1) {
              this.router.navigate(['/tabs/video'], {
                queryParams: {
                  video_id: id
                }
              });
            } else {
              if (this.package_status == 1) {
                this.router.navigate(['/tabs/video'], {
                  queryParams: {
                    video_id: id
                  }
                });
              } else {
                if (this.connect_student >= 6) {
                  this.router.navigate(['/tabs/video'], {
                    queryParams: {
                      video_id: id
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
        key: "quiz_pdf",
        value: function quiz_pdf(id, quize) {
          if (localStorage.getItem("role_id") === '2') {
            if (localStorage.getItem("kid_id")) {
              if (quize == 0 && this.package_status == 1) {
                this.router.navigate(['/tabs/pdf'], {
                  queryParams: {
                    pdf_id: id
                  }
                });
              } else if (quize == 1) {
                this.router.navigate(['/tabs/pdf'], {
                  queryParams: {
                    pdf_id: id
                  }
                });
              } else {
                this.router.navigate(["/tabs/quiz-premium"]);
              }
            } else {
              this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');
            }
          }

          if (localStorage.getItem("role_id") === '4') {
            if (quize == 1) {
              this.router.navigate(['/tabs/pdf'], {
                queryParams: {
                  pdf_id: id
                }
              });
            } else {
              if (this.package_status == 1) {
                this.router.navigate(['/tabs/pdf'], {
                  queryParams: {
                    pdf_id: id
                  }
                });
              } else {
                if (this.connect_student >= 6) {
                  this.router.navigate(['/tabs/pdf'], {
                    queryParams: {
                      pdf_id: id
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

      return QuizSearchPage;
    }();

    QuizSearchPage.ctorParameters = function () {
      return [{
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], {
      "static": true
    })], QuizSearchPage.prototype, "infiniteScroll", void 0);
    QuizSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quiz-search',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./quiz-search.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-search/quiz-search.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./quiz-search.page.scss */
      "./src/app/Quizzes/quiz-search/quiz-search.page.scss"))["default"]]
    })], QuizSearchPage);
    /***/
  }
}]);
//# sourceMappingURL=Quizzes-quiz-search-quiz-search-module-es5.js.map