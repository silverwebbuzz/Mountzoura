function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Teachers-student-quiz-list-quiz-correct-quiz-correct-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeachersStudentQuizListQuizCorrectQuizCorrectPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\" />\n    <ion-title class=\"title_all\">{{'reusable.quiz_results' | translate}}</ion-title>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\" />\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"div_img\">\n    <img *ngIf=\"que_img\" src=\"{{imageUrl}}{{que_img}}\" class=\"img_\" />\n    <img src=\"../../../../assets/images/shapes.png\" class=\"img_ans\" />\n  </div>\n\n  <ion-label class=\"lbl_title\">\n    {{que}}\n  </ion-label>\n\n  <ion-label class=\"lbl_head\">\n    {{'reusable.ans_correct' | translate}}\n  </ion-label>\n\n  <div class=\"div_img\">\n    <img *ngIf=\"correct_img\" src=\"{{imageUrl}}{{correct_img}}\" class=\"img_\" />\n  </div>\n\n  <ion-label class=\"lbl_ans\" *ngIf=\"correct_img == null\">\n    {{correct_ans}}\n  </ion-label>\n\n  <ion-label class=\"lbl_head\">\n    {{'reusable.ans_wrong' | translate}}\n  </ion-label>\n  <ng-container *ngFor=\"let opt of wrong | slice:0:limit;\">\n    <ion-label class=\"lbl_ans\" *ngIf=\"opt.answer_image == null\">\n      {{opt.answer_text}}\n    </ion-label>\n    <div class=\"div_img\">\n      <img *ngIf=\"opt.answer_image\" src=\"{{imageUrl}}{{opt.answer_image}}\" class=\"img_\" />\n    </div>\n  </ng-container>\n\n\n  <ion-label class=\"lbl_head\">\n    {{'reusable.stud_choose' | translate}}\n  </ion-label>\n\n  <span *ngIf=\"choose_ans\">\n    <ion-label class=\"lbl_ans add_extra\" *ngIf=\"choos_img == null\">\n      {{choose_ans}}\n    </ion-label>\n  </span>\n\n  <div class=\"div_img\">\n    <img *ngIf=\"!choos_img == ''\" src=\"{{imageUrl}}{{choos_img}}\" class=\"img_\" />\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: QuizCorrectPageRoutingModule */

  /***/
  function srcAppTeachersStudentQuizListQuizCorrectQuizCorrectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizCorrectPageRoutingModule", function () {
      return QuizCorrectPageRoutingModule;
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


    var _quiz_correct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz-correct.page */
    "./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.page.ts");

    var routes = [{
      path: '',
      component: _quiz_correct_page__WEBPACK_IMPORTED_MODULE_3__["QuizCorrectPage"]
    }];

    var QuizCorrectPageRoutingModule = function QuizCorrectPageRoutingModule() {
      _classCallCheck(this, QuizCorrectPageRoutingModule);
    };

    QuizCorrectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuizCorrectPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.module.ts ***!
    \********************************************************************************/

  /*! exports provided: QuizCorrectPageModule */

  /***/
  function srcAppTeachersStudentQuizListQuizCorrectQuizCorrectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizCorrectPageModule", function () {
      return QuizCorrectPageModule;
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


    var _quiz_correct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quiz-correct-routing.module */
    "./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct-routing.module.ts");
    /* harmony import */


    var _quiz_correct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quiz-correct.page */
    "./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var QuizCorrectPageModule = function QuizCorrectPageModule() {
      _classCallCheck(this, QuizCorrectPageModule);
    };

    QuizCorrectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quiz_correct_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizCorrectPageRoutingModule"]],
      declarations: [_quiz_correct_page__WEBPACK_IMPORTED_MODULE_6__["QuizCorrectPage"]]
    })], QuizCorrectPageModule);
    /***/
  },

  /***/
  "./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeachersStudentQuizListQuizCorrectQuizCorrectPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .div_img {\n  text-align: center;\n}\nion-content .div_img .img_ {\n  height: 100px;\n}\nion-content .div_img .img_ans {\n  height: 30px;\n}\nion-content .lbl_title {\n  display: block;\n  font-size: 20px;\n  text-align: center;\n  padding: 16px;\n}\nion-content .lbl_head {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  font-weight: bold;\n  padding: 16px 0px;\n}\nion-content .lbl_ans {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n}\nion-content .add_extra {\n  border: 1px solid var(--ion-color-primary);\n  padding: 8px;\n  border-radius: 8px;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  font-size: 22px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1RlYWNoZXJzL3N0dWRlbnQtcXVpei1saXN0L3F1aXotY29ycmVjdC9xdWl6LWNvcnJlY3QucGFnZS5zY3NzIiwic3JjL2FwcC9UZWFjaGVycy9zdHVkZW50LXF1aXotbGlzdC9xdWl6LWNvcnJlY3QvcXVpei1jb3JyZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBREtBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNGSjtBRElJO0VBQ0ksa0JBQUE7QUNGUjtBREdRO0VBQ0ksYUFBQTtBQ0RaO0FER1E7RUFDSSxZQUFBO0FDRFo7QURJSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDRlI7QURJSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRlI7QURJSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNGUjtBRElJO0VBQ0ksMENBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvVGVhY2hlcnMvc3R1ZGVudC1xdWl6LWxpc3QvcXVpei1jb3JyZWN0L3F1aXotY29ycmVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAgIC5pbWdfdG9vbHtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgIH1cbn1cbi8vIC5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHggIWltcG9ydGFudDtcbi8vICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gICB9XG5pb24tY29udGVudHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG5cbiAgICAuZGl2X2ltZ3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAuaW1nX3tcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltZ19hbnN7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxibF90aXRsZXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbiAgICAubGJsX2hlYWR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xuICAgIH1cbiAgICAubGJsX2Fuc3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuYWRkX2V4dHJhe1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbn1cbi5iZyAuaW1nX3Rvb2wge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZGl2X2ltZyAuaW1nXyB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5pb24tY29udGVudCAuZGl2X2ltZyAuaW1nX2FucyB7XG4gIGhlaWdodDogMzBweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5pb24tY29udGVudCAubGJsX2hlYWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxNnB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfYW5zIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmFkZF9leHRyYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.page.ts ***!
    \******************************************************************************/

  /*! exports provided: QuizCorrectPage */

  /***/
  function srcAppTeachersStudentQuizListQuizCorrectQuizCorrectPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizCorrectPage", function () {
      return QuizCorrectPage;
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


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var QuizCorrectPage = /*#__PURE__*/function () {
      function QuizCorrectPage(api, route, statusBar, navCtrl, router) {
        _classCallCheck(this, QuizCorrectPage);

        this.api = api;
        this.route = route;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.router = router;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].image_url;
      }

      _createClass(QuizCorrectPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
          var reqData = this.route.snapshot.queryParams;
          var body = {
            question_id: reqData.que_id,
            kid_unique_id: reqData.kid_id,
            count: reqData.count
          };
          this.api.studentAnswerShow(body).subscribe(function (resp) {
            _this.resp = resp; //question

            _this.que = _this.resp.question.question;
            _this.que_img = _this.resp.question.que_image; //correct ans

            var correct_ans = _this.resp.question.answer.find(function (x) {
              return x.correct_answer == 1;
            });

            _this.correct_ans = correct_ans.answer_text;
            _this.correct_img = correct_ans.answer_image; //wrong ans

            _this.wrong = _this.resp.question.answer.filter(function (item) {
              return item.correct_answer == 0;
            }); //studentChoose

            _this.choose_ans = _this.resp.studentChoose.answer_text;
            _this.choos_img = _this.resp.studentChoose.answer_image; // this.kidd_process = false
          });
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }, {
        key: "back",
        value: function back() {
          var reqData = this.route.snapshot.queryParams;
          this.navCtrl.navigateBack(['/tabs/single-quiz'], {
            queryParams: {
              kid_id: reqData.kid_id,
              quiz_id: reqData.quiz_id,
              count: reqData.count
            }
          });
        }
      }]);

      return QuizCorrectPage;
    }();

    QuizCorrectPage.ctorParameters = function () {
      return [{
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    QuizCorrectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quiz-correct',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./quiz-correct.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./quiz-correct.page.scss */
      "./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.page.scss"))["default"]]
    })], QuizCorrectPage);
    /***/
  }
}]);
//# sourceMappingURL=Teachers-student-quiz-list-quiz-correct-quiz-correct-module-es5.js.map