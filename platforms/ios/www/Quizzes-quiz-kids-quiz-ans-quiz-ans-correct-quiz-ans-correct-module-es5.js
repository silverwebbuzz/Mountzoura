function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Quizzes-quiz-kids-quiz-ans-quiz-ans-correct-quiz-ans-correct-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.page.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.page.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuizzesQuizKidsQuizAnsQuizAnsCorrectQuizAnsCorrectPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <ion-label class=\"lbl_title\">{{'single.lbl_correct' | translate}}</ion-label>\n\n  <div class=\"div_img\" *ngIf=\"question\">\n    <span class=\"lbl_answer\"> {{question}}</span>\n  </div>\n\n<div class=\"div_img\" *ngIf=\"que_image != 'null'\">\n  <img *ngIf=\"que_image != 'null'\" src=\"{{imageUrl}}{{que_image}}\" class=\"img_quiz\" />\n</div>\n\n  <ion-label class=\"lbl_ans\">\n    <span class=\"lbl_head\">{{'reusable.lbl_ans_your' | translate}}</span><br><br>\n    <span class=\"lbl_answer\"> {{ans}}</span>\n    <img *ngIf='ans_img' src=\"{{imageUrl}}{{ans_img}}\" class=\"img_quiz\" />\n  </ion-label>\n\n  <ion-button class=\"btn_nxt\" size=\"large\" fill=\"clear\" expand=\"block\" (click)=\"next()\">{{'next' | translate}}</ion-button>\n\n  \n<div class=\"div_ads\">\n  <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" (click)=\"ads()\" class=\"img_ads\"/>\n</div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-label class=\"lbl_indicator\">{{len_val ? len_val : 1}}/{{totalq}}</ion-label>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct-routing.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct-routing.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: QuizAnsCorrectPageRoutingModule */

  /***/
  function srcAppQuizzesQuizKidsQuizAnsQuizAnsCorrectQuizAnsCorrectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizAnsCorrectPageRoutingModule", function () {
      return QuizAnsCorrectPageRoutingModule;
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


    var _quiz_ans_correct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz-ans-correct.page */
    "./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.page.ts");

    var routes = [{
      path: '',
      component: _quiz_ans_correct_page__WEBPACK_IMPORTED_MODULE_3__["QuizAnsCorrectPage"]
    }];

    var QuizAnsCorrectPageRoutingModule = function QuizAnsCorrectPageRoutingModule() {
      _classCallCheck(this, QuizAnsCorrectPageRoutingModule);
    };

    QuizAnsCorrectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuizAnsCorrectPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: QuizAnsCorrectPageModule */

  /***/
  function srcAppQuizzesQuizKidsQuizAnsQuizAnsCorrectQuizAnsCorrectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizAnsCorrectPageModule", function () {
      return QuizAnsCorrectPageModule;
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


    var _quiz_ans_correct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quiz-ans-correct-routing.module */
    "./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct-routing.module.ts");
    /* harmony import */


    var _quiz_ans_correct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quiz-ans-correct.page */
    "./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var QuizAnsCorrectPageModule = function QuizAnsCorrectPageModule() {
      _classCallCheck(this, QuizAnsCorrectPageModule);
    };

    QuizAnsCorrectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quiz_ans_correct_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizAnsCorrectPageRoutingModule"]],
      declarations: [_quiz_ans_correct_page__WEBPACK_IMPORTED_MODULE_6__["QuizAnsCorrectPage"]]
    })], QuizAnsCorrectPageModule);
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.page.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.page.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuizzesQuizKidsQuizAnsQuizAnsCorrectQuizAnsCorrectPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --background: var(--ion-color-success);\n}\nion-content .lbl_title {\n  display: block;\n  text-align: center;\n  font-weight: bold;\n  padding: 16px;\n  font-size: 18px;\n}\nion-content .div_img {\n  text-align: center;\n  padding: 16px 0px;\n}\nion-content .div_img .img_quiz {\n  height: 125px;\n}\nion-content .lbl_ans {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\nion-content .lbl_ans .lbl_head {\n  font-weight: bold;\n}\nion-content .lbl_ans .lbl_answer {\n  font-weight: normal;\n}\nion-content .btn_nxt {\n  width: 75%;\n  margin: 0 auto;\n  color: black;\n  border: 2px solid black;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.lbl_indicator {\n  padding: 8px;\n  display: block;\n  text-align: center;\n}\n.img_quiz {\n  height: 125px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1F1aXp6ZXMvcXVpei1raWRzL3F1aXotYW5zL3F1aXotYW5zLWNvcnJlY3QvcXVpei1hbnMtY29ycmVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL1F1aXp6ZXMvcXVpei1raWRzL3F1aXotYW5zL3F1aXotYW5zLWNvcnJlY3QvcXVpei1hbnMtY29ycmVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDUjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NSO0FEQVE7RUFDSSxhQUFBO0FDRVo7QURFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNBUjtBRENRO0VBQ0ksaUJBQUE7QUNDWjtBRENRO0VBQ0ksbUJBQUE7QUNDWjtBREVJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURHQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvUXVpenplcy9xdWl6LWtpZHMvcXVpei1hbnMvcXVpei1hbnMtY29ycmVjdC9xdWl6LWFucy1jb3JyZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG5cbiAgICAubGJsX3RpdGxle1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAuZGl2X2ltZ3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgICAgICAgLmltZ19xdWl6e1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubGJsX2Fuc3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgLmxibF9oZWFke1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9hbnN3ZXJ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5idG5fbnh0e1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG59XG4ubGJsX2luZGljYXRvcntcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmltZ19xdWl6e1xuICAgIGhlaWdodDogMTI1cHg7XG4gICAgLy8gd2lkdGg6IDE1MHB4O1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5pb24tY29udGVudCAubGJsX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfaW1nIC5pbWdfcXVpeiB7XG4gIGhlaWdodDogMTI1cHg7XG59XG5pb24tY29udGVudCAubGJsX2FucyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5pb24tY29udGVudCAubGJsX2FucyAubGJsX2hlYWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IC5sYmxfYW5zIC5sYmxfYW5zd2VyIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbmlvbi1jb250ZW50IC5idG5fbnh0IHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5sYmxfaW5kaWNhdG9yIHtcbiAgcGFkZGluZzogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nX3F1aXoge1xuICBoZWlnaHQ6IDEyNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.page.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.page.ts ***!
    \**************************************************************************************/

  /*! exports provided: QuizAnsCorrectPage */

  /***/
  function srcAppQuizzesQuizKidsQuizAnsQuizAnsCorrectQuizAnsCorrectPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizAnsCorrectPage", function () {
      return QuizAnsCorrectPage;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var QuizAnsCorrectPage = /*#__PURE__*/function () {
      function QuizAnsCorrectPage(route, router, iab, api, statusBar) {
        _classCallCheck(this, QuizAnsCorrectPage);

        this.route = route;
        this.router = router;
        this.iab = iab;
        this.api = api;
        this.statusBar = statusBar;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].image_url;
        this.user_not_found_place_holder = 'assets/images/placeholder-s.png';
        this.advertise_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].advertise_url;
      }

      _createClass(QuizAnsCorrectPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#abdc8c');
          this.len_val = localStorage.getItem("len_val");
          this.api.quizEndAdd().subscribe(function (resp) {
            _this.advertise = resp;
            _this.add = _this.advertise.data.image;
            _this.add_url = _this.advertise.data.url;
          });
          this.question = localStorage.getItem("question");
          this.que_image = localStorage.getItem("que_image");
          this.route.queryParams.subscribe(function (params) {
            _this.que = params.que;
            _this.quize_id = params.quize_id;
            _this.countdata = params.countdata;
            _this.ans = params.ans ? params.ans : ''; //this.c_ans = params.c_ans ? params.c_ans : '';

            _this.ans_img = params.ans_img ? params.ans_img : ''; //this.c_img = params.c_img ? params.c_img : '';

            var body = {
              kid_unique_id: localStorage.getItem("kid_id")
            };

            _this.api.quizQuestion(_this.quize_id, body).subscribe(function (resp) {
              _this.quelist = resp;
              _this.totalq = _this.quelist.data.length;
              _this.lan = _this.quelist.data[_this.quelist.data.length - 1];
            });
          });
        }
      }, {
        key: "ads",
        value: function ads() {
          this.iab.create(this.add_url, '_system', 'location=yes');
        }
      }, {
        key: "next",
        value: function next() {
          var reqData = this.route.snapshot.queryParams;

          if (this.lan.id == reqData.que) {
            this.router.navigate(['/tabs/quiz-result'], {
              queryParams: {
                id: reqData.quize_id,
                countdata: reqData.countdata,
                count: reqData.count,
                total_que: this.totalq
              }
            });
          } else {
            this.router.navigate(['/tabs/quiz-play'], {
              queryParams: {
                id: reqData.quize_id,
                que_id: reqData.que,
                count: reqData.count,
                countdata: reqData.countdata
              }
            });
          }
        }
      }]);

      return QuizAnsCorrectPage;
    }();

    QuizAnsCorrectPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }];
    };

    QuizAnsCorrectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quiz-ans-correct',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./quiz-ans-correct.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./quiz-ans-correct.page.scss */
      "./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.page.scss"))["default"]]
    })], QuizAnsCorrectPage);
    /***/
  }
}]);
//# sourceMappingURL=Quizzes-quiz-kids-quiz-ans-quiz-ans-correct-quiz-ans-correct-module-es5.js.map