function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Quizzes-quiz-kids-quiz-single-quiz-single-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuizzesQuizKidsQuizSingleQuizSinglePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\" />\n    <img src=\"../../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\" />\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\" />\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"div_img\">\n    <img *ngIf=\"!quize_img\" src=\"{{user_not_found_place_holder}}\" class=\"img_casino\" />\n    <img *ngIf=\"quize_img\" src=\"{{imageUrl}}{{quize_img}}\" class=\"img_casino\" />\n  </div>\n\n  <ion-label class=\"lbl_title\">{{quize_title}}</ion-label>\n\n  <ion-button expand=\"block\" size=\"large\" class=\"btn_all\" (click)='play()'>{{'single.btn_play_quiz' | translate}}\n  </ion-button>\n\n  <form [formGroup]=\"quiz_start_form\" autocomplete=\"off\" class=\"form_all\">\n\n    <ion-item lines=\"none\" class=\"input-item space\" *ngIf=\"roll_id == 4\">\n      <ion-select interface=\"action-sheet\" placeholder=\"{{'reusable.select' | translate}}\" formControlName=\"student\"\n        class=\"btn-select bg dropWidth\" mode=\"md\">\n        <ion-select-option value=\"all\">{{'reusable.lbl_assign' | translate}}</ion-select-option>\n        <ion-select-option *ngFor=\"let opt of slist\" [value]=\"opt.kid_unique_id\">{{opt.kidName}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div *ngIf=\"roll_id == 4\">\n      <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"quiz_start_form.controls.student.hasError('required') && quiz_start_form.controls.student.touched\">\n        <p class=\"content add-error\">{{'reusable.err_option' | translate}}</p>\n      </ion-item>\n    </div>\n  </form>\n\n  <ion-button *ngIf=\"roll_id == 4\" expand=\"block\" size=\"large\" class=\"btn_set btn_all\" (click)=\"submit()\">\n    {{'reusable.set' | translate}}</ion-button>\n\n  <!-- <ion-button expand=\"block\" size=\"large\" class=\"btn_all\" *ngIf=\"roll_id == 2\" (click)='homework()'>{{'reusable.btn_work' | translate}}</ion-button> -->\n\n  <div class=\"div_ads\">\n    <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" (click)=\"ads()\" class=\"img_ads spc_ads\" />\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-kids/quiz-single/quiz-single-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Quizzes/quiz-kids/quiz-single/quiz-single-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: QuizSinglePageRoutingModule */

  /***/
  function srcAppQuizzesQuizKidsQuizSingleQuizSingleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizSinglePageRoutingModule", function () {
      return QuizSinglePageRoutingModule;
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


    var _quiz_single_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz-single.page */
    "./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.page.ts");

    var routes = [{
      path: '',
      component: _quiz_single_page__WEBPACK_IMPORTED_MODULE_3__["QuizSinglePage"]
    }];

    var QuizSinglePageRoutingModule = function QuizSinglePageRoutingModule() {
      _classCallCheck(this, QuizSinglePageRoutingModule);
    };

    QuizSinglePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuizSinglePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.module.ts ***!
    \*********************************************************************/

  /*! exports provided: QuizSinglePageModule */

  /***/
  function srcAppQuizzesQuizKidsQuizSingleQuizSingleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizSinglePageModule", function () {
      return QuizSinglePageModule;
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


    var _quiz_single_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quiz-single-routing.module */
    "./src/app/Quizzes/quiz-kids/quiz-single/quiz-single-routing.module.ts");
    /* harmony import */


    var _quiz_single_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quiz-single.page */
    "./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var QuizSinglePageModule = function QuizSinglePageModule() {
      _classCallCheck(this, QuizSinglePageModule);
    };

    QuizSinglePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quiz_single_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizSinglePageRoutingModule"]],
      declarations: [_quiz_single_page__WEBPACK_IMPORTED_MODULE_6__["QuizSinglePage"]]
    })], QuizSinglePageModule);
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuizzesQuizKidsQuizSingleQuizSinglePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content .div_img {\n  text-align: center;\n  padding: 16px;\n}\nion-content .div_img .img_casino {\n  height: 150px;\n}\nion-content .lbl_title {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\nion-content .btn_play {\n  color: white;\n}\nion-content .btn_set {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1F1aXp6ZXMvcXVpei1raWRzL3F1aXotc2luZ2xlL3F1aXotc2luZ2xlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUXVpenplcy9xdWl6LWtpZHMvcXVpei1zaW5nbGUvcXVpei1zaW5nbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FETUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNIUjtBRElRO0VBQ0ksYUFBQTtBQ0ZaO0FES0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDSFI7QURLSTtFQUNJLFlBQUE7QUNIUjtBREtJO0VBQ0ksWUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvUXVpenplcy9xdWl6LWtpZHMvcXVpei1zaW5nbGUvcXVpei1zaW5nbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xuICAgIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbiAgICAuaW1nX3Rvb2x7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICB9XG59XG4vLyAuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuLy8gICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vICAgfVxuaW9uLWNvbnRlbnR7XG4gICAgLmRpdl9pbWd7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgLmltZ19jYXNpbm97XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sYmxfdGl0bGV7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICAgIC5idG5fcGxheXtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuYnRuX3NldHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn0iLCIuYmcge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG59XG4uYmcgLmltZ190b29sIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG5pb24tY29udGVudCAuZGl2X2ltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfaW1nIC5pbWdfY2FzaW5vIHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9wbGF5IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9zZXQge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.page.ts ***!
    \*******************************************************************/

  /*! exports provided: QuizSinglePage */

  /***/
  function srcAppQuizzesQuizKidsQuizSingleQuizSinglePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizSinglePage", function () {
      return QuizSinglePage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];

    var QuizSinglePage = /*#__PURE__*/function () {
      function QuizSinglePage(formBuilder, router, iab, api, route, navCtrl, statusBar) {
        _classCallCheck(this, QuizSinglePage);

        this.formBuilder = formBuilder;
        this.router = router;
        this.iab = iab;
        this.api = api;
        this.route = route;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].image_url;
        this.user_not_found_place_holder = 'assets/images/placeholder-s.png';
        this.advertise_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].advertise_url;
        this.quiz_start_fb();
      }

      _createClass(QuizSinglePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          localStorage.removeItem("question");
          localStorage.removeItem("que_image");
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
          this.quiz_start_form.reset();
          this.roll_id = localStorage.getItem("role_id");
          localStorage.removeItem("len_val");
          var reqData = this.route.snapshot.queryParams;
          this.api.get_quize_data(reqData.id).subscribe(function (resp) {
            _this.quizelist = resp;
            _this.quize_title = _this.quizelist.data.title;
            _this.quize_img = _this.quizelist.data.image;
          });
          this.api.connectStudentList().subscribe(function (resp) {
            _this.students_list = resp;
            _this.slist = _this.students_list.data;
          });
          this.api.quizStartAdd().subscribe(function (resp) {
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
        key: "quiz_start_fb",
        value: function quiz_start_fb() {
          this.quiz_start_form = this.formBuilder.group({
            student: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          var reqData = this.route.snapshot.queryParams;

          for (var v in this.quiz_start_form.controls) {
            this.quiz_start_form.controls[v].markAsTouched();
          }

          if (this.quiz_start_form.valid) {
            this.api.presentLoading();
            this.quize_process = true;
            var body = {
              kid_unique_id: this.quiz_start_form.value.student,
              quiz_id: reqData.id
            };
            this.api.homework(body).subscribe(function (data) {
              _this2.quize_process = false;

              _this2.api.dismissLoading();

              if (data.status == 1) {
                // success part
                _this2.api.presentToastWithOptions(data['message']);

                _this2.router.navigate(['/tabs/home-teacher']);
              } else {
                _this2.api.presentToastWithOptions(data['message']);
              }
            }, function (err) {
              _this2.quize_process = false;

              _this2.api.dismissLoading();

              _this2.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
          }
        }
      }, {
        key: "play",
        value: function play() {
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
          if (localStorage.getItem("pdf_quize") && localStorage.getItem("pdf_id")) {
            this.navCtrl.navigateBack(['/tabs/pdf'], {
              queryParams: {
                pdf_id: localStorage.getItem("pdf_id")
              }
            });
          } else if (localStorage.getItem("video_quize") && localStorage.getItem("video_id")) {
            this.navCtrl.navigateBack(['/tabs/video'], {
              queryParams: {
                video_id: localStorage.getItem("video_id")
              }
            });
          } else if (localStorage.getItem("t_search") || localStorage.getItem("t_contain") || localStorage.getItem("k_contain") || localStorage.getItem("k_search")) {
            this.navCtrl.navigateBack(['/tabs/quiz-search']);
          } else if (localStorage.getItem("t_quize_contant")) {
            this.navCtrl.navigateBack(['/tabs/home-teacher']);
          } else if (localStorage.getItem("t_quize_search")) {
            this.navCtrl.navigateBack(['/tabs/teachers-quiz-list']);
          } else if (localStorage.getItem("k_quize_contant")) {
            this.navCtrl.navigateBack(['/tabs/home']);
          } else if (localStorage.getItem("notification_data")) {
            this.navCtrl.navigateBack(['/tabs/notifications']);
          } else if (localStorage.getItem("k_quize_search")) {
            this.navCtrl.navigateBack(['/tabs/kids-quiz-list']);
          } else if (localStorage.getItem("homework")) {
            this.navCtrl.navigateBack(['/tabs/kid-homework']);
          } else {
            if (this.roll_id == 2) {
              this.navCtrl.navigateBack(['/tabs/home']);
            }

            if (this.roll_id == 4) {
              this.navCtrl.navigateBack(['/tabs/home-teacher']);
            }
          }
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }, {
        key: "homework",
        value: function homework() {
          this.router.navigate(['/tabs/kid-homework']);
        }
      }]);

      return QuizSinglePage;
    }();

    QuizSinglePage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
      }];
    };

    QuizSinglePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quiz-single',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./quiz-single.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./quiz-single.page.scss */
      "./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.page.scss"))["default"]]
    })], QuizSinglePage);
    /***/
  }
}]);
//# sourceMappingURL=Quizzes-quiz-kids-quiz-single-quiz-single-module-es5.js.map