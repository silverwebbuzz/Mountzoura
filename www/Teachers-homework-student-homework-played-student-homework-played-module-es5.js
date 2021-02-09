function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Teachers-homework-student-homework-played-student-homework-played-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/homework/student-homework-played/student-homework-played.page.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/homework/student-homework-played/student-homework-played.page.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeachersHomeworkStudentHomeworkPlayedStudentHomeworkPlayedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <ion-title class=\"title_all\">{{'reusable.results' | translate}}</ion-title>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"isEmpty1\" *ngIf=\"quizedata?.length == 0 || quizedata == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <ng-container *ngFor=\"let opt of quizedata | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"more(opt.count)\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n      <img src=\"../../../../assets/images/paper.png\" class=\"img_main img_all\"/>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <!-- <ion-label class=\"lbl_quiz_title lbl_title_all\">Time played</ion-label> -->\n      <ion-label class=\"lbl_unit lbl_desc_all\">{{'single.lbl_score' | translate}} {{opt.score}}/{{opt.totalQuestion}}</ion-label>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <!-- <img src=\"../../../../assets/images/growth.png\" class=\"img_premium\"/> -->\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n  </ng-container>\n</ion-content>\n\n<ion-footer>\n  <ion-button size=\"large\" expand=\"block\" class=\"btn_dlt btn_all\" (click)=\"delete()\">{{'reusable.dlt' | translate}}</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/Teachers/homework/student-homework-played/student-homework-played-routing.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/Teachers/homework/student-homework-played/student-homework-played-routing.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: StudentHomeworkPlayedPageRoutingModule */

  /***/
  function srcAppTeachersHomeworkStudentHomeworkPlayedStudentHomeworkPlayedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentHomeworkPlayedPageRoutingModule", function () {
      return StudentHomeworkPlayedPageRoutingModule;
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


    var _student_homework_played_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-homework-played.page */
    "./src/app/Teachers/homework/student-homework-played/student-homework-played.page.ts");

    var routes = [{
      path: '',
      component: _student_homework_played_page__WEBPACK_IMPORTED_MODULE_3__["StudentHomeworkPlayedPage"]
    }];

    var StudentHomeworkPlayedPageRoutingModule = function StudentHomeworkPlayedPageRoutingModule() {
      _classCallCheck(this, StudentHomeworkPlayedPageRoutingModule);
    };

    StudentHomeworkPlayedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudentHomeworkPlayedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Teachers/homework/student-homework-played/student-homework-played.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/Teachers/homework/student-homework-played/student-homework-played.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: StudentHomeworkPlayedPageModule */

  /***/
  function srcAppTeachersHomeworkStudentHomeworkPlayedStudentHomeworkPlayedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentHomeworkPlayedPageModule", function () {
      return StudentHomeworkPlayedPageModule;
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


    var _student_homework_played_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-homework-played-routing.module */
    "./src/app/Teachers/homework/student-homework-played/student-homework-played-routing.module.ts");
    /* harmony import */


    var _student_homework_played_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-homework-played.page */
    "./src/app/Teachers/homework/student-homework-played/student-homework-played.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var StudentHomeworkPlayedPageModule = function StudentHomeworkPlayedPageModule() {
      _classCallCheck(this, StudentHomeworkPlayedPageModule);
    };

    StudentHomeworkPlayedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _student_homework_played_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentHomeworkPlayedPageRoutingModule"]],
      declarations: [_student_homework_played_page__WEBPACK_IMPORTED_MODULE_6__["StudentHomeworkPlayedPage"]]
    })], StudentHomeworkPlayedPageModule);
    /***/
  },

  /***/
  "./src/app/Teachers/homework/student-homework-played/student-homework-played.page.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/Teachers/homework/student-homework-played/student-homework-played.page.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeachersHomeworkStudentHomeworkPlayedStudentHomeworkPlayedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content .row_list .col_list .img_main {\n  height: 48px;\n}\nion-content .row_list .col_list .lbl_quiz_title {\n  display: block;\n}\nion-content .row_list .col_list .lbl_unit {\n  display: block;\n}\nion-content .row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\nion-content .row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\nion-content .btn_dlt {\n  color: white;\n  width: 90%;\n  margin: 0 auto;\n}\nion-footer {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1RlYWNoZXJzL2hvbWV3b3JrL3N0dWRlbnQtaG9tZXdvcmstcGxheWVkL3N0dWRlbnQtaG9tZXdvcmstcGxheWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvVGVhY2hlcnMvaG9tZXdvcmsvc3R1ZGVudC1ob21ld29yay1wbGF5ZWQvc3R1ZGVudC1ob21ld29yay1wbGF5ZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FEUVk7RUFDSSxZQUFBO0FDTGhCO0FET1k7RUFDSSxjQUFBO0FDTGhCO0FET1k7RUFDSSxjQUFBO0FDTGhCO0FET1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0xoQjtBRE9ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNMaEI7QURTSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ1BSO0FEVUE7RUFDSSxhQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9UZWFjaGVycy9ob21ld29yay9zdHVkZW50LWhvbWV3b3JrLXBsYXllZC9zdHVkZW50LWhvbWV3b3JrLXBsYXllZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAgIC5pbWdfdG9vbHtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgIH1cbn1cbi8vIC5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHggIWltcG9ydGFudDtcbi8vICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gICB9XG5pb24tY29udGVudHtcbiAgICAucm93X2xpc3R7XG4gICAgICAgIC5jb2xfbGlzdHtcbiAgICAgICAgICAgIC5pbWdfbWFpbntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGJsX3F1aXpfdGl0bGV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGJsX3VuaXR7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nX3ByZW1pdW17XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltZ19hcnJvd3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ0bl9kbHR7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufVxuaW9uLWZvb3RlcntcbiAgICBwYWRkaW5nOiAxNnB4O1xufSIsIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbn1cbi5iZyAuaW1nX3Rvb2wge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbmlvbi1jb250ZW50IC5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19tYWluIHtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuaW9uLWNvbnRlbnQgLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3F1aXpfdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1jb250ZW50IC5yb3dfbGlzdCAuY29sX2xpc3QgLmxibF91bml0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tY29udGVudCAucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfcHJlbWl1bSB7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDM0cHg7XG59XG5pb24tY29udGVudCAucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfYXJyb3cge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9kbHQge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZzogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Teachers/homework/student-homework-played/student-homework-played.page.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/Teachers/homework/student-homework-played/student-homework-played.page.ts ***!
    \*******************************************************************************************/

  /*! exports provided: StudentHomeworkPlayedPage */

  /***/
  function srcAppTeachersHomeworkStudentHomeworkPlayedStudentHomeworkPlayedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentHomeworkPlayedPage", function () {
      return StudentHomeworkPlayedPage;
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


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var StudentHomeworkPlayedPage = /*#__PURE__*/function () {
      function StudentHomeworkPlayedPage(router, api, navCtrl, route, alertCtrl, statusBar) {
        _classCallCheck(this, StudentHomeworkPlayedPage);

        this.router = router;
        this.api = api;
        this.navCtrl = navCtrl;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
      }

      _createClass(StudentHomeworkPlayedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1'); //   this.kidd_process = true
          // this.api.presentLoading();

          var reqData = this.route.snapshot.queryParams;
          var body = {
            quiz_id: reqData.quiz_id,
            kid_unique_id: reqData.kid_id
          };
          this.api.countQuizPlay(body).subscribe(function (resp) {
            _this.resp = resp;
            _this.quizedata = _this.resp.data; // this.kidd_process = false
            // this.api.dismissLoading();
          });
        } // delete(){
        //   let reqData = this.route.snapshot.queryParams;
        //   this.api.deleteHomework(reqData.id).subscribe(resp => {
        //     this.resp = resp
        //     this.api.presentToastWithOptions( this.resp['message']);
        //     this.router.navigate(['/tabs/student-homework'],{queryParams : {kid_id:reqData.kid_id}});
        //    })
        // }

      }, {
        key: "delete",
        value: function _delete() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Επιβεβαίωση',
                      message: 'Σίγουρα θέλεις να διαγράψεις το καθήκον;;',
                      buttons: [{
                        text: 'Ακύρωση',
                        role: 'cancel'
                      }, {
                        text: 'ΝΑΙ',
                        handler: function handler() {
                          var reqData = _this2.route.snapshot.queryParams;

                          _this2.api.deleteHomework(reqData.id).subscribe(function (resp) {
                            _this2.resp = resp;

                            _this2.api.presentToastWithOptions(_this2.resp['message']);

                            _this2.router.navigate(['/tabs/student-homework'], {
                              queryParams: {
                                kid_id: reqData.kid_id
                              }
                            });
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "more",
        value: function more(count) {
          var reqData = this.route.snapshot.queryParams;
          this.router.navigate(['/tabs/single-quiz'], {
            queryParams: {
              quiz_id: reqData.quiz_id,
              kid_id: reqData.kid_id,
              count: count
            }
          });
        }
      }, {
        key: "back",
        value: function back() {
          var reqData = this.route.snapshot.queryParams;
          this.navCtrl.navigateBack(['/tabs/student-homework'], {
            queryParams: {
              kid_id: reqData.kid_id
            }
          });
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }]);

      return StudentHomeworkPlayedPage;
    }();

    StudentHomeworkPlayedPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    StudentHomeworkPlayedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-homework-played',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./student-homework-played.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/homework/student-homework-played/student-homework-played.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./student-homework-played.page.scss */
      "./src/app/Teachers/homework/student-homework-played/student-homework-played.page.scss"))["default"]]
    })], StudentHomeworkPlayedPage);
    /***/
  }
}]);
//# sourceMappingURL=Teachers-homework-student-homework-played-student-homework-played-module-es5.js.map