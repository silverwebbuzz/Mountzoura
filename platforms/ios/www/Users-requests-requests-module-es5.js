function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-requests-requests-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/requests/requests.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/requests/requests.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersRequestsRequestsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\" />\n    <ion-title class=\"title_all\">{{'settings.request' | translate}}</ion-title>\n    <img src=\"../../../assets/images/icon.png\" slot=\"end\" class=\"img_tool_logo\" />\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"roll == '2'\">\n\n  <div class=\"isEmpty1\" *ngIf=\"resp_list?.length == 0 || resp_list == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <div *ngFor=\"let opt of resp_list | slice:0:limit;\">\n    <ion-row class=\"row_list row_all\" (click)=\"child(opt.id)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img *ngIf=\"opt.gender == 'boy'\" src=\"../../../assets/images/profile.png\" class=\"img_main img_all\" />\n        <img *ngIf=\"opt.gender == 'girl'\" src=\"../../../assets/images/girl.png\" class=\"img_main img_all\" />\n      </ion-col>\n      <ion-col size=\"5\" class=\"col_list col_\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.kidName}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.gradeName}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.teacherName}} {{opt.teacherSurname}}</ion-label>\n      </ion-col>\n        <ion-col size=\"5\" class=\"auto right\">\n          <ion-label class=\"lbl_red\" *ngIf=\"opt.status == '1'\">{{opt.connectStatus}}</ion-label>\n          <ion-label class=\"lbl_rejected\" *ngIf=\"opt.status == '0'\">{{opt.connectStatus}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n\n<ion-content *ngIf=\"roll == '4'\">\n  <div class=\"isEmpty1\" *ngIf=\"teachresp_list?.length == 0 || teachresp_list == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <div *ngFor=\"let opt of teachresp_list | slice:0:limit;\">\n    <ion-row class=\"row_list row_all\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img *ngIf=\"opt.gender == 'boy'\" src=\"../../../assets/images/profile.png\" class=\"img_all\" />\n        <img *ngIf=\"opt.gender == 'girl'\" src=\"../../../assets/images/girl.png\" class=\"img_all\" />\n      </ion-col>\n      <ion-col size=\"5\" class=\"col_list col_ auto\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.kidName}}</ion-label>\n        <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.gradeName}}</ion-label>\n      </ion-col>\n      <ion-col size=\"5\" class=\"auto right\">\n        <ion-label class=\"lbl_red\" *ngIf=\"opt.connectStatus == 'Στάλθηκε αίτημα'\">{{opt.connectStatus}}</ion-label>\n        <ion-label class=\"lbl_rejected\" *ngIf=\"opt.connectStatus == 'Απόρριψη αιτήματος'\">{{opt.connectStatus}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Users/requests/requests-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Users/requests/requests-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RequestsPageRoutingModule */

  /***/
  function srcAppUsersRequestsRequestsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsPageRoutingModule", function () {
      return RequestsPageRoutingModule;
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


    var _requests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./requests.page */
    "./src/app/Users/requests/requests.page.ts");

    var routes = [{
      path: '',
      component: _requests_page__WEBPACK_IMPORTED_MODULE_3__["RequestsPage"]
    }];

    var RequestsPageRoutingModule = function RequestsPageRoutingModule() {
      _classCallCheck(this, RequestsPageRoutingModule);
    };

    RequestsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RequestsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Users/requests/requests.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/Users/requests/requests.module.ts ***!
    \***************************************************/

  /*! exports provided: RequestsPageModule */

  /***/
  function srcAppUsersRequestsRequestsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsPageModule", function () {
      return RequestsPageModule;
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


    var _requests_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./requests-routing.module */
    "./src/app/Users/requests/requests-routing.module.ts");
    /* harmony import */


    var _requests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./requests.page */
    "./src/app/Users/requests/requests.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var RequestsPageModule = function RequestsPageModule() {
      _classCallCheck(this, RequestsPageModule);
    };

    RequestsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _requests_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestsPageRoutingModule"]],
      declarations: [_requests_page__WEBPACK_IMPORTED_MODULE_6__["RequestsPage"]]
    })], RequestsPageModule);
    /***/
  },

  /***/
  "./src/app/Users/requests/requests.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/Users/requests/requests.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersRequestsRequestsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row_list .col_list .img_main {\n  height: 44px !important;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n.col_ {\n  padding: 0px 0px 0px 8px !important;\n}\n.btn_row .btn_col {\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.btn_row .btn_col .btns_ {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  text-transform: none;\n  color: white;\n}\n.lbl_red {\n  display: block;\n  padding: 8px 8px 8px 8px;\n  color: white;\n  background: var(--ion-color-primary);\n  width: 105px;\n  font-weight: bold;\n  text-align: left;\n  font-size: 14px;\n}\n.lbl_rejected {\n  display: block;\n  padding: 8px 8px 8px 8px;\n  color: white;\n  background: red;\n  width: 105px;\n  font-weight: bold;\n  text-align: left;\n  font-size: 14px;\n}\n.auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.right {\n  text-align: -webkit-right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL3JlcXVlc3RzL3JlcXVlc3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvVXNlcnMvcmVxdWVzdHMvcmVxdWVzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksdUJBQUE7QUNEWjtBREdRO0VBQ0ksY0FBQTtBQ0RaO0FER1E7RUFDSSxjQUFBO0FDRFo7QURHUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDRFo7QURHUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDRFo7QURLQTtFQUNJLG1DQUFBO0FDRko7QURLSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREdRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0RaO0FETUE7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNISjtBREtBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNGSjtBREtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FESUE7RUFDSSx5QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvVXNlcnMvcmVxdWVzdHMvcmVxdWVzdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd19saXN0e1xuICAgIC5jb2xfbGlzdHtcbiAgICAgICAgLmltZ19tYWlue1xuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9xdWl6X3RpdGxle1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF91bml0e1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmltZ19wcmVtaXVte1xuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltZ19hcnJvd3tcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmNvbF97XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggOHB4ICFpbXBvcnRhbnQ7XG59XG4uYnRuX3Jvd3tcbiAgICAuYnRuX2NvbHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgIC5idG5zX3tcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxibF9yZWR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgd2lkdGg6IDEwNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmxibF9yZWplY3RlZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB3aWR0aDogMTA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hdXRve1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5yaWdodHtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LXJpZ2h0O1xufSIsIi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19tYWluIHtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfcXVpel90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3VuaXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19hcnJvdyB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi5jb2xfIHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fcm93IC5idG5fY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uYnRuX3JvdyAuYnRuX2NvbCAuYnRuc18ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sYmxfcmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHdpZHRoOiAxMDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxibF9yZWplY3RlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHggOHB4IDhweCA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmVkO1xuICB3aWR0aDogMTA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1yaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Users/requests/requests.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/Users/requests/requests.page.ts ***!
    \*************************************************/

  /*! exports provided: RequestsPage */

  /***/
  function srcAppUsersRequestsRequestsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsPage", function () {
      return RequestsPage;
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

    var RequestsPage = /*#__PURE__*/function () {
      function RequestsPage(navCtrl, api, router) {
        _classCallCheck(this, RequestsPage);

        this.navCtrl = navCtrl;
        this.api = api;
        this.router = router;
      }

      _createClass(RequestsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.roll = localStorage.getItem("role_id"); // this.api.presentLoading();
          // this.quize_process = true;

          this.api.parentRequestList().subscribe(function (resp) {
            // this.quize_process = false;
            // this.api.dismissLoading();
            if (resp) {
              _this.resp = resp;
              _this.resp_list = _this.resp.data;
            }
          });
          this.api.teacherRequestList().subscribe(function (resp) {
            // this.quize_process = false;
            // this.api.dismissLoading();
            if (resp) {
              _this.teachresp = resp;
              _this.teachresp_list = _this.teachresp.data;
            }
          });
        }
      }, {
        key: "kidConnectionStatus",
        value: function kidConnectionStatus(id, status) {
          var _this2 = this;

          var body = {
            status: status
          };
          this.api.presentLoading();
          this.quize_process = true;
          this.api.kidConnectionStatus(id, body).subscribe(function (data) {
            _this2.quize_process = false;

            _this2.api.dismissLoading();

            if (data.status == 1) {
              // success part
              _this2.api.presentToastWithOptions(data['message']);

              _this2.router.navigate(["/tabs/settings"]);
            } else {
              _this2.api.presentToastWithOptions(data['message']);
            }
          }, function (err) {
            _this2.quize_process = false;

            _this2.api.dismissLoading();

            _this2.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack('/tabs/settings');
        }
      }, {
        key: "child",
        value: function child(id) {
          this.router.navigate(['/tabs/requests-child'], {
            queryParams: {
              id: id
            }
          });
        }
      }]);

      return RequestsPage;
    }();

    RequestsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RequestsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-requests',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./requests.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/requests/requests.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./requests.page.scss */
      "./src/app/Users/requests/requests.page.scss"))["default"]]
    })], RequestsPage);
    /***/
  }
}]);
//# sourceMappingURL=Users-requests-requests-module-es5.js.map