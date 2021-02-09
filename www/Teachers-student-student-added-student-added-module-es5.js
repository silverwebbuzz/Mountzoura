function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Teachers-student-student-added-student-added-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/student/student-added/student-added.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/student/student-added/student-added.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeachersStudentStudentAddedStudentAddedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot =\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\"/>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <div class=\"isEmpty\" *ngIf=\"listdata?.length == 0 || listdata == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div> -->\n\n  <ng-container *ngFor=\"let opt of listdata | slice:0:limit;\">\n  <ion-row class=\"row_list row_all\" (click)=\"homework(opt.kid_unique_id)\">\n    <ion-col size=\"2\" class=\"col_list col_all\">\n      <img *ngIf=\"opt.gender == 'boy'\" src=\"../../../../assets/images/profile.png\" class=\"img_main img_all\" />\n      <img *ngIf=\"opt.gender == 'girl'\" src=\"../../../../assets/images/girl.png\" class=\"img_main img_all\" />\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_list auto_all\">\n      <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.kidName}} #{{opt.kid_unique_id}}</ion-label>\n      <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.gradeName}}</ion-label>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n      <img src=\"../../../assets/images/premium.png\" *ngIf=\"opt.package_staus == 1\" class=\"img_premium\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n      <img src=\"../../../assets/images/multimedia-option.png\"  class=\"img_arrow\"/>\n    </ion-col>\n  </ion-row>\n</ng-container>\n\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n  <ion-label class=\"lbl_premium\">\n    {{'single.title' | translate}}\n  </ion-label>\n\n  <form [formGroup]=\"stud_add_form\" autocomplete=\"off\" class=\"form_all\">\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"text\" formControlName=\"studID\" placeholder=\"{{'reusable.plac_stud_id' | translate}}\" class=\"input-box\">\n      </ion-input>\n    </ion-item>\n  \n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"stud_add_form.controls.studID.hasError('required') && stud_add_form.controls.studID.touched\">\n      <p class=\"content add-error\">{{'reusable.err_stud_id' | translate}}</p>\n    </ion-item>\n  \n    </form>\n\n  <div class=\"div_img\">\n    <img src=\"../../../../assets/images/signs.png\" class=\"img_premium\" (click)=\"submit()\"/>\n  </div>\n\n  <div class=\"div_ads\">\n    <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" (click)=\"ads()\" class=\"img_ads spc_ads\"/>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Teachers/student/student-added/student-added-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/Teachers/student/student-added/student-added-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: StudentAddedPageRoutingModule */

  /***/
  function srcAppTeachersStudentStudentAddedStudentAddedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAddedPageRoutingModule", function () {
      return StudentAddedPageRoutingModule;
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


    var _student_added_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-added.page */
    "./src/app/Teachers/student/student-added/student-added.page.ts");

    var routes = [{
      path: '',
      component: _student_added_page__WEBPACK_IMPORTED_MODULE_3__["StudentAddedPage"]
    }];

    var StudentAddedPageRoutingModule = function StudentAddedPageRoutingModule() {
      _classCallCheck(this, StudentAddedPageRoutingModule);
    };

    StudentAddedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudentAddedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Teachers/student/student-added/student-added.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Teachers/student/student-added/student-added.module.ts ***!
    \************************************************************************/

  /*! exports provided: StudentAddedPageModule */

  /***/
  function srcAppTeachersStudentStudentAddedStudentAddedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAddedPageModule", function () {
      return StudentAddedPageModule;
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


    var _student_added_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-added-routing.module */
    "./src/app/Teachers/student/student-added/student-added-routing.module.ts");
    /* harmony import */


    var _student_added_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-added.page */
    "./src/app/Teachers/student/student-added/student-added.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var StudentAddedPageModule = function StudentAddedPageModule() {
      _classCallCheck(this, StudentAddedPageModule);
    };

    StudentAddedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _student_added_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentAddedPageRoutingModule"]],
      declarations: [_student_added_page__WEBPACK_IMPORTED_MODULE_6__["StudentAddedPage"]]
    })], StudentAddedPageModule);
    /***/
  },

  /***/
  "./src/app/Teachers/student/student-added/student-added.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/Teachers/student/student-added/student-added.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeachersStudentStudentAddedStudentAddedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content .row_list .col_list .img_main {\n  height: 48px;\n}\nion-content .row_list .col_list .lbl_quiz_title {\n  display: block;\n}\nion-content .row_list .col_list .lbl_unit {\n  display: block;\n}\nion-content .row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\nion-content .row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\nion-content .lbl_premium {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\nion-content .div_img {\n  text-align: center;\n}\nion-content .div_img .img_premium {\n  height: 75px;\n  width: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1RlYWNoZXJzL3N0dWRlbnQvc3R1ZGVudC1hZGRlZC9zdHVkZW50LWFkZGVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvVGVhY2hlcnMvc3R1ZGVudC9zdHVkZW50LWFkZGVkL3N0dWRlbnQtYWRkZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FEUVk7RUFDSSxZQUFBO0FDTGhCO0FET1k7RUFDSSxjQUFBO0FDTGhCO0FET1k7RUFDSSxjQUFBO0FDTGhCO0FET1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0xoQjtBRE9ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNMaEI7QURVSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7QUNUUjtBRFdJO0VBQ0ksa0JBQUE7QUNUUjtBRFVRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNSWiIsImZpbGUiOiJzcmMvYXBwL1RlYWNoZXJzL3N0dWRlbnQvc3R1ZGVudC1hZGRlZC9zdHVkZW50LWFkZGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgLmltZ190b29se1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxufVxuLy8gLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgIH1cbmlvbi1jb250ZW50e1xuICAgIC5yb3dfbGlzdHtcbiAgICAgICAgLmNvbF9saXN0e1xuICAgICAgICAgICAgLmltZ19tYWlue1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYmxfcXVpel90aXRsZXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYmxfdW5pdHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWdfcHJlbWl1bXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nX2Fycm93e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sYmxfcHJlbWl1bXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLy8gd2lkdGg6IDgwJTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG4gICAgLmRpdl9pbWd7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLmltZ19wcmVtaXVte1xuICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xufVxuLmJnIC5pbWdfdG9vbCB7XG4gIGhlaWdodDogMzJweDtcbn1cblxuaW9uLWNvbnRlbnQgLnJvd19saXN0IC5jb2xfbGlzdCAuaW1nX21haW4ge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5pb24tY29udGVudCAucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfcXVpel90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNvbnRlbnQgLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3VuaXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1jb250ZW50IC5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbn1cbmlvbi1jb250ZW50IC5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19hcnJvdyB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59XG5pb24tY29udGVudCAubGJsX3ByZW1pdW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZGl2X2ltZyAuaW1nX3ByZW1pdW0ge1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiA3NXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Teachers/student/student-added/student-added.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/Teachers/student/student-added/student-added.page.ts ***!
    \**********************************************************************/

  /*! exports provided: StudentAddedPage */

  /***/
  function srcAppTeachersStudentStudentAddedStudentAddedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAddedPage", function () {
      return StudentAddedPage;
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


    var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_global_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/global/language.service */
    "./src/app/global/language.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var StudentAddedPage = /*#__PURE__*/function () {
      function StudentAddedPage(formBuilder, api, navCtrl, router, iab, statusBar, lanservice) {
        _classCallCheck(this, StudentAddedPage);

        this.formBuilder = formBuilder;
        this.api = api;
        this.navCtrl = navCtrl;
        this.router = router;
        this.iab = iab;
        this.statusBar = statusBar;
        this.lanservice = lanservice;
        this.limit = 10;
        this.advertise_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].advertise_url;
        this.stud_add_fb();
      }

      _createClass(StudentAddedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.stud_add_form.reset();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.stud_add_form.reset();
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
          localStorage.removeItem("len_val");
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
          } // this.kidd_process = true


          this.api.connectStudentList().subscribe(function (resp) {
            _this.kidlist = resp;
            _this.listdata = _this.kidlist.data;

            if (_this.listdata) {
              _this.gender = _this.listdata.gender;
            } else {
              _this.gender = '';
            } // this.kidd_process = false

          });
          this.api.addTeacherAdvertisement().subscribe(function (resp) {
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
        key: "stud_add_fb",
        value: function stud_add_fb() {
          this.stud_add_form = this.formBuilder.group({
            studID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
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
        key: "submit",
        value: function submit() {
          var _this3 = this;

          for (var v in this.stud_add_form.controls) {
            this.stud_add_form.controls[v].markAsTouched();
          }

          if (this.stud_add_form.valid) {
            this.api.presentLoading();
            this.kid_process = true;
            var body = {
              kid_unique_id: this.stud_add_form.value.studID
            };
            this.api.connectStudent(body).subscribe(function (data) {
              _this3.kid_process = false;

              _this3.api.dismissLoading();

              if (data.status == 1) {
                // success part
                localStorage.setItem("connect_student", data.connect_student);

                _this3.api.presentToastWithOptions(data['message']);

                _this3.router.navigate(["/tabs/id-correct"]);
              }

              if (data.status == 0) {
                _this3.api.presentToastWithOptions(data['message']);

                _this3.router.navigate(["/tabs/id-wrong"]);
              }

              if (data.status == 2) {
                _this3.api.presentToastWithOptions(data['message']);
              }
            }, function (err) {
              _this3.kid_process = false;

              _this3.api.dismissLoading();

              _this3.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
          }
        }
      }, {
        key: "homework",
        value: function homework(kid_id) {
          this.router.navigate(['/tabs/student-homework'], {
            queryParams: {
              kid_id: kid_id
            }
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack('/tabs/student-add');
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }]);

      return StudentAddedPage;
    }();

    StudentAddedPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
      }, {
        type: src_app_global_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], {
      "static": true
    })], StudentAddedPage.prototype, "infiniteScroll", void 0);
    StudentAddedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-added',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./student-added.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/student/student-added/student-added.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./student-added.page.scss */
      "./src/app/Teachers/student/student-added/student-added.page.scss"))["default"]]
    })], StudentAddedPage);
    /***/
  }
}]);
//# sourceMappingURL=Teachers-student-student-added-student-added-module-es5.js.map