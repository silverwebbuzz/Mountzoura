function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-notifications-notifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/notifications/notifications.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/notifications/notifications.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\" />\n    <ion-title class=\"title_all\">{{'settings.notify' | translate}}</ion-title>\n    <img src=\"../../../assets/images/icon.png\" slot=\"end\" class=\"img_tool_logo\" />\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"isEmpty1\"\n    *ngIf=\"quizedata?.length == 0 && pdf?.length == 0 &&  video?.length == 0\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <ng-container *ngFor=\"let opt of quizedata | slice:0:limit;\">\n    <ion-row class=\"row_list row_all\" (click)=\"quiz_single(opt.id,opt.free_quiz)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <!-- <img src=\"../../../assets/images/paper.png\" class=\"img_main img_all\" /> -->\n        <img *ngIf=\"!opt.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n        <img *ngIf=\"opt.image\" src=\"{{imageUrl}}{{opt.image}}\" class=\"img_main img_all\" />      </ion-col>\n      <ion-col size=\"6\" class=\"col_list auto_all\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.lessionTitle}} - {{opt.unitTitle}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='opt.free_quiz == 0' class=\"img_premium\"/>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n\n  <!-- <ng-container  *ngFor=\"let art of article | slice:0:limit\">\n    <ion-row class=\"row_list row_all\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img *ngIf=\"!art.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main img_all\" />\n          <img *ngIf=\"art.image\" src=\"{{article_url}}{{art.image}}\" class=\"img_main img_all\" />\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{art.title}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{art.lessionTitle}} - {{art.unitTitle}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='art.free_quiz == 0' class=\"img_premium\"/>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n      </ion-col>\n    </ion-row>\n  </ng-container> -->\n  \n  <ng-container  *ngFor=\"let pdf of pdf | slice:0:limit;\">\n    <ion-row class=\"row_list row_all\" (click)=\"quiz_pdf(pdf.id,pdf.free_pdf)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img src=\"../../../assets/images/paper.png\" class=\"img_main\"/>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list auto_all\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{pdf.title}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{pdf.lessionTitle}} - {{pdf.unitTitle}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='pdf.free_pdf == 0' class=\"img_premium\"/>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  \n  <ng-container *ngFor=\"let vid of video | slice:0:limit\">\n    <ion-row class=\"row_list row_all\" (click)=\"quiz_video(vid.id,vid.free_video)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img src=\"../../../assets/images/video.png\" class=\"img_main\"/>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list auto_all\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{vid.title}}</ion-label>\n        \n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='vid.free_video == 0' class=\"img_premium\"/>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n    \n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Users/notifications/notifications-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Users/notifications/notifications-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: NotificationsPageRoutingModule */

  /***/
  function srcAppUsersNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
      return NotificationsPageRoutingModule;
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


    var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/Users/notifications/notifications.page.ts");

    var routes = [{
      path: '',
      component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }];

    var NotificationsPageRoutingModule = function NotificationsPageRoutingModule() {
      _classCallCheck(this, NotificationsPageRoutingModule);
    };

    NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Users/notifications/notifications.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Users/notifications/notifications.module.ts ***!
    \*************************************************************/

  /*! exports provided: NotificationsPageModule */

  /***/
  function srcAppUsersNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
      return NotificationsPageModule;
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


    var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notifications-routing.module */
    "./src/app/Users/notifications/notifications-routing.module.ts");
    /* harmony import */


    var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/Users/notifications/notifications.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var NotificationsPageModule = function NotificationsPageModule() {
      _classCallCheck(this, NotificationsPageModule);
    };

    NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]],
      declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })], NotificationsPageModule);
    /***/
  },

  /***/
  "./src/app/Users/notifications/notifications.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/Users/notifications/notifications.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row_list .col_list .img_main {\n  height: 48px;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL1VzZXJzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxZQUFBO0FDRFo7QURHUTtFQUNJLGNBQUE7QUNEWjtBREdRO0VBQ0ksY0FBQTtBQ0RaO0FER1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0RaO0FER1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvVXNlcnMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dfbGlzdHtcbiAgICAuY29sX2xpc3R7XG4gICAgICAgIC5pbWdfbWFpbntcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgfVxuICAgICAgICAubGJsX3F1aXpfdGl0bGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAubGJsX3VuaXR7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuaW1nX3ByZW1pdW17XG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nX2Fycm93e1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX21haW4ge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfcXVpel90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3VuaXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19hcnJvdyB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Users/notifications/notifications.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Users/notifications/notifications.page.ts ***!
    \***********************************************************/

  /*! exports provided: NotificationsPage */

  /***/
  function srcAppUsersNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
      return NotificationsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var NotificationsPage = /*#__PURE__*/function () {
      function NotificationsPage(navCtrl, api, router) {
        _classCallCheck(this, NotificationsPage);

        this.navCtrl = navCtrl;
        this.api = api;
        this.router = router;
        this.quizedata = [];
        this.article = [];
        this.pdf = [];
        this.video = [];
        this.limit = 10;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].image_url;
        this.article_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].article_url;
        this.user_not_found_place_holder = 'assets/images/paper.png';
      }

      _createClass(NotificationsPage, [{
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

          this.package_status = localStorage.getItem("package_status");
          this.connect_student = localStorage.getItem("connect_student"); // this.api.presentLoading();
          // this.quize_process = true;

          this.api.contentSevenDays().subscribe(function (resp) {
            _this2.quizelist = resp;
            _this2.quizedata = _this2.quizelist.quiz; // this.article = this.quizelist.article;

            _this2.pdf = _this2.quizelist.pdf;
            _this2.video = _this2.quizelist.video; // this.quize_process = false;
            // this.api.dismissLoading();
          });
        }
      }, {
        key: "quiz_single",
        value: function quiz_single(id, quize) {
          localStorage.setItem("notification_data", "notification_data");

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
          localStorage.setItem("notification_data", "notification_data");

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
          localStorage.setItem("notification_data", "notification_data");

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
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack('/tabs/settings');
        }
      }]);

      return NotificationsPage;
    }();

    NotificationsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      "static": true
    })], NotificationsPage.prototype, "infiniteScroll", void 0);
    NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notifications.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/notifications/notifications.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notifications.page.scss */
      "./src/app/Users/notifications/notifications.page.scss"))["default"]]
    })], NotificationsPage);
    /***/
  }
}]);
//# sourceMappingURL=Users-notifications-notifications-module-es5.js.map