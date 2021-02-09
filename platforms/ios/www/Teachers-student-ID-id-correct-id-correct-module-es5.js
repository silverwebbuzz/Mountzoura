function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Teachers-student-ID-id-correct-id-correct-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/student-ID/id-correct/id-correct.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/student-ID/id-correct/id-correct.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeachersStudentIDIdCorrectIdCorrectPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot =\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <img src=\"../../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\"/>\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label class=\"lbl_txt\">\n    {{'single.stud_id_correct' | translate}}\n  </ion-label>\n\n  <div class=\"div_chk\">\n    <img src=\"../../../../assets/images/shapes.png\" class=\"img_check\" />\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Teachers/student-ID/id-correct/id-correct-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Teachers/student-ID/id-correct/id-correct-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: IdCorrectPageRoutingModule */

  /***/
  function srcAppTeachersStudentIDIdCorrectIdCorrectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdCorrectPageRoutingModule", function () {
      return IdCorrectPageRoutingModule;
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


    var _id_correct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./id-correct.page */
    "./src/app/Teachers/student-ID/id-correct/id-correct.page.ts");

    var routes = [{
      path: '',
      component: _id_correct_page__WEBPACK_IMPORTED_MODULE_3__["IdCorrectPage"]
    }];

    var IdCorrectPageRoutingModule = function IdCorrectPageRoutingModule() {
      _classCallCheck(this, IdCorrectPageRoutingModule);
    };

    IdCorrectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IdCorrectPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Teachers/student-ID/id-correct/id-correct.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Teachers/student-ID/id-correct/id-correct.module.ts ***!
    \*********************************************************************/

  /*! exports provided: IdCorrectPageModule */

  /***/
  function srcAppTeachersStudentIDIdCorrectIdCorrectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdCorrectPageModule", function () {
      return IdCorrectPageModule;
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


    var _id_correct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./id-correct-routing.module */
    "./src/app/Teachers/student-ID/id-correct/id-correct-routing.module.ts");
    /* harmony import */


    var _id_correct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./id-correct.page */
    "./src/app/Teachers/student-ID/id-correct/id-correct.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var IdCorrectPageModule = function IdCorrectPageModule() {
      _classCallCheck(this, IdCorrectPageModule);
    };

    IdCorrectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _id_correct_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdCorrectPageRoutingModule"]],
      declarations: [_id_correct_page__WEBPACK_IMPORTED_MODULE_6__["IdCorrectPage"]]
    })], IdCorrectPageModule);
    /***/
  },

  /***/
  "./src/app/Teachers/student-ID/id-correct/id-correct.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/Teachers/student-ID/id-correct/id-correct.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeachersStudentIDIdCorrectIdCorrectPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n.lbl_txt {\n  text-align: center;\n  display: block;\n  font-size: 18px;\n  line-height: 1.3;\n  width: 75%;\n  margin: 0 auto;\n  padding: 16px 0px 32px 0px;\n}\n.div_chk {\n  text-align: center;\n  padding: 16px 0px;\n}\n.div_chk .img_check {\n  height: 125px;\n  width: 125px;\n}\n.btn_footer {\n  margin: 0px;\n  color: white;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1RlYWNoZXJzL3N0dWRlbnQtSUQvaWQtY29ycmVjdC9pZC1jb3JyZWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvVGVhY2hlcnMvc3R1ZGVudC1JRC9pZC1jb3JyZWN0L2lkLWNvcnJlY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjtBREFFO0VBQ0ksWUFBQTtBQ0VOO0FES0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0ZGO0FESUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDREo7QURHRTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNBTjtBRENJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNDUjtBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvVGVhY2hlcnMvc3R1ZGVudC1JRC9pZC1jb3JyZWN0L2lkLWNvcnJlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gIC5pbWdfdG9vbHtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgfVxufVxuLy8gLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbi8vICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHggIWltcG9ydGFudDtcbi8vICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vIH1cbmlvbi1jb250ZW50e1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG4gIC5sYmxfdHh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4IDBweCAzMnB4IDBweDtcbiAgfVxuICAuZGl2X2Noa3tcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xuICAgIC5pbWdfY2hlY2sge1xuICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICB3aWR0aDogMTI1cHg7XG4gICAgICB9XG4gIH1cbiAgLmJ0bl9mb290ZXIge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfSIsIi5iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZkZjhmMTtcbn1cbi5iZyAuaW1nX3Rvb2wge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4ubGJsX3R4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE2cHggMHB4IDMycHggMHB4O1xufVxuXG4uZGl2X2NoayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCAwcHg7XG59XG4uZGl2X2NoayAuaW1nX2NoZWNrIHtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgd2lkdGg6IDEyNXB4O1xufVxuXG4uYnRuX2Zvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Teachers/student-ID/id-correct/id-correct.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Teachers/student-ID/id-correct/id-correct.page.ts ***!
    \*******************************************************************/

  /*! exports provided: IdCorrectPage */

  /***/
  function srcAppTeachersStudentIDIdCorrectIdCorrectPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdCorrectPage", function () {
      return IdCorrectPage;
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


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var IdCorrectPage = /*#__PURE__*/function () {
      function IdCorrectPage(statusBar, navCtrl, router) {
        _classCallCheck(this, IdCorrectPage);

        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.router = router;
      }

      _createClass(IdCorrectPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#fdf8f1');
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigate(['/tabs/settings']);
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack(['/tabs/student-added']);
        }
      }]);

      return IdCorrectPage;
    }();

    IdCorrectPage.ctorParameters = function () {
      return [{
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    IdCorrectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-id-correct',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./id-correct.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Teachers/student-ID/id-correct/id-correct.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./id-correct.page.scss */
      "./src/app/Teachers/student-ID/id-correct/id-correct.page.scss"))["default"]]
    })], IdCorrectPage);
    /***/
  }
}]);
//# sourceMappingURL=Teachers-student-ID-id-correct-id-correct-module-es5.js.map