function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Teachers-homework-student-homework-student-homework-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/homework/student-homework/student-homework.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/homework/student-homework/student-homework.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeachersHomeworkStudentHomeworkStudentHomeworkPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\" />\n    <ion-title class=\"title_all\">{{'reusable.btn_work' | translate}}</ion-title>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"isEmpty1\" *ngIf=\"quizedata?.length == 0 || quizedata == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <ng-container *ngFor=\"let opt of quizedata | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"played(opt.quiz_id,opt.kid_unique_id,opt.id)\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n      <img *ngIf=\"!opt.QuizImage\" src=\"../../../../assets/images/paper.png\" class=\"img_main img_all\"/>\n      <img *ngIf=\"opt.QuizImage\" src=\"{{imageUrl}}{{opt.QuizImage}}\" class=\"img_main img_all\" />\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n      <!-- <ion-label class=\"lbl_unit lbl_desc_all\">Quiz Page</ion-label> -->\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../../assets/images/growth.png\" class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n</ng-container>\n\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Teachers/homework/student-homework/student-homework-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/Teachers/homework/student-homework/student-homework-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: StudentHomeworkPageRoutingModule */

  /***/
  function srcAppTeachersHomeworkStudentHomeworkStudentHomeworkRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentHomeworkPageRoutingModule", function () {
      return StudentHomeworkPageRoutingModule;
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


    var _student_homework_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-homework.page */
    "./src/app/Teachers/homework/student-homework/student-homework.page.ts");

    var routes = [{
      path: '',
      component: _student_homework_page__WEBPACK_IMPORTED_MODULE_3__["StudentHomeworkPage"]
    }];

    var StudentHomeworkPageRoutingModule = function StudentHomeworkPageRoutingModule() {
      _classCallCheck(this, StudentHomeworkPageRoutingModule);
    };

    StudentHomeworkPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudentHomeworkPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Teachers/homework/student-homework/student-homework.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/Teachers/homework/student-homework/student-homework.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: StudentHomeworkPageModule */

  /***/
  function srcAppTeachersHomeworkStudentHomeworkStudentHomeworkModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentHomeworkPageModule", function () {
      return StudentHomeworkPageModule;
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


    var _student_homework_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-homework-routing.module */
    "./src/app/Teachers/homework/student-homework/student-homework-routing.module.ts");
    /* harmony import */


    var _student_homework_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-homework.page */
    "./src/app/Teachers/homework/student-homework/student-homework.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var StudentHomeworkPageModule = function StudentHomeworkPageModule() {
      _classCallCheck(this, StudentHomeworkPageModule);
    };

    StudentHomeworkPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _student_homework_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentHomeworkPageRoutingModule"]],
      declarations: [_student_homework_page__WEBPACK_IMPORTED_MODULE_6__["StudentHomeworkPage"]]
    })], StudentHomeworkPageModule);
    /***/
  },

  /***/
  "./src/app/Teachers/homework/student-homework/student-homework.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/Teachers/homework/student-homework/student-homework.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeachersHomeworkStudentHomeworkStudentHomeworkPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content .row_list .col_list .img_main {\n  height: 48px;\n}\nion-content .row_list .col_list .lbl_quiz_title {\n  display: block;\n}\nion-content .row_list .col_list .lbl_unit {\n  display: block;\n}\nion-content .row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\nion-content .row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1RlYWNoZXJzL2hvbWV3b3JrL3N0dWRlbnQtaG9tZXdvcmsvc3R1ZGVudC1ob21ld29yay5wYWdlLnNjc3MiLCJzcmMvYXBwL1RlYWNoZXJzL2hvbWV3b3JrL3N0dWRlbnQtaG9tZXdvcmsvc3R1ZGVudC1ob21ld29yay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0FDRVI7QURRWTtFQUNJLFlBQUE7QUNMaEI7QURPWTtFQUNJLGNBQUE7QUNMaEI7QURPWTtFQUNJLGNBQUE7QUNMaEI7QURPWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDTGhCO0FET1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0xoQiIsImZpbGUiOiJzcmMvYXBwL1RlYWNoZXJzL2hvbWV3b3JrL3N0dWRlbnQtaG9tZXdvcmsvc3R1ZGVudC1ob21ld29yay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAgIC5pbWdfdG9vbHtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgIH1cbn1cbi8vIC5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHggIWltcG9ydGFudDtcbi8vICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gICB9XG5pb24tY29udGVudHtcbiAgICAucm93X2xpc3R7XG4gICAgICAgIC5jb2xfbGlzdHtcbiAgICAgICAgICAgIC5pbWdfbWFpbntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGJsX3F1aXpfdGl0bGV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGJsX3VuaXR7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nX3ByZW1pdW17XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltZ19hcnJvd3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xufVxuLmJnIC5pbWdfdG9vbCB7XG4gIGhlaWdodDogMzJweDtcbn1cblxuaW9uLWNvbnRlbnQgLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX21haW4ge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5pb24tY29udGVudCAucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfcXVpel90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNvbnRlbnQgLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3VuaXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1jb250ZW50IC5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbn1cbmlvbi1jb250ZW50IC5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19hcnJvdyB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Teachers/homework/student-homework/student-homework.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Teachers/homework/student-homework/student-homework.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: StudentHomeworkPage */

  /***/
  function srcAppTeachersHomeworkStudentHomeworkStudentHomeworkPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentHomeworkPage", function () {
      return StudentHomeworkPage;
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


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

    var StudentHomeworkPage = /*#__PURE__*/function () {
      function StudentHomeworkPage(router, api, route, navCtrl, statusBar) {
        _classCallCheck(this, StudentHomeworkPage);

        this.router = router;
        this.api = api;
        this.route = route;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.listdata = [];
        this.quizedata = [];
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].image_url;
        this.limit = 10;
      }

      _createClass(StudentHomeworkPage, [{
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
          var reqData = this.route.snapshot.queryParams; // this.kidd_process = true
          // this.api.presentLoading();

          var body = {
            kid_unique_id: reqData.kid_id
          };
          this.api.getStudentHomeWork(body).subscribe(function (resp) {
            _this2.kidlist = resp;
            _this2.quizedata = _this2.kidlist.data; // this.kidd_process = false
            //  this.api.dismissLoading();
          });
        }
      }, {
        key: "played",
        value: function played(quiz_id, kid_id, id) {
          var _this3 = this;

          var body = {
            quiz_id: quiz_id,
            kid_unique_id: kid_id
          };
          this.api.countQuizPlay(body).subscribe(function (resp) {
            _this3.resp = resp; //  this.kidd_process = true
            //  this.api.dismissLoading();

            if (_this3.resp.status == 1) {
              // this.kidd_process = false
              // this.api.dismissLoading();
              // success part
              _this3.api.presentToastWithOptions(_this3.resp['message']);

              _this3.router.navigate(['/tabs/student-homework-played'], {
                queryParams: {
                  quiz_id: quiz_id,
                  kid_id: kid_id,
                  id: id
                }
              });
            } else {
              _this3.api.presentToastWithOptions(_this3.resp['message']);

              _this3.router.navigate(['/tabs/student-homework-not'], {
                queryParams: {
                  quiz_id: quiz_id,
                  kid_id: kid_id,
                  id: id
                }
              });
            }
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack(['/tabs/student-added']);
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }]);

      return StudentHomeworkPage;
    }();

    StudentHomeworkPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], {
      "static": true
    })], StudentHomeworkPage.prototype, "infiniteScroll", void 0);
    StudentHomeworkPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-homework',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./student-homework.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/homework/student-homework/student-homework.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./student-homework.page.scss */
      "./src/app/Teachers/homework/student-homework/student-homework.page.scss"))["default"]]
    })], StudentHomeworkPage);
    /***/
  }
}]);
//# sourceMappingURL=Teachers-homework-student-homework-student-homework-module-es5.js.map