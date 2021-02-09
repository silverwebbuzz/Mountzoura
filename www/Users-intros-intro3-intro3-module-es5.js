function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-intros-intro3-intro3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/intros/intro3/intro3.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/intros/intro3/intro3.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersIntrosIntro3Intro3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"div_logo\">\n    <img src=\"../../assets/images/logoWithUpIcon.png\" class=\"img_logo\"/>\n  </div>\n\n  <ion-row>\n    <ion-col size=\"8\">\n      <ion-label class=\"lbl_\">\n        {{'intro3.lable1' | translate }}\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"4\">\n      <img src=\"../../assets/images/light.png\"/>\n    </ion-col>\n  </ion-row>\n\n  <ion-label class=\"lbl_\">\n    {{'intro3.lable2' | translate }}\n  </ion-label>\n\n  <div class=\"div_teacher\">\n    <img src=\"../../assets/images/teacher-2.png\" class=\"img_teacher\"/>\n    <img src=\"../../assets/images/teacher-1.png\" class=\"img_teacher\"/>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" size=\"large\" class=\"btn_footer\" (click)=\"next()\">{{'intro3.start' | translate }} >>\n    <span class=\"spn_indicator\">3/3</span>\n  </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/Users/intros/intro3/intro3-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Users/intros/intro3/intro3-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: Intro3PageRoutingModule */

  /***/
  function srcAppUsersIntrosIntro3Intro3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Intro3PageRoutingModule", function () {
      return Intro3PageRoutingModule;
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


    var _intro3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./intro3.page */
    "./src/app/Users/intros/intro3/intro3.page.ts");

    var routes = [{
      path: '',
      component: _intro3_page__WEBPACK_IMPORTED_MODULE_3__["Intro3Page"]
    }];

    var Intro3PageRoutingModule = function Intro3PageRoutingModule() {
      _classCallCheck(this, Intro3PageRoutingModule);
    };

    Intro3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Intro3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Users/intros/intro3/intro3.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/Users/intros/intro3/intro3.module.ts ***!
    \******************************************************/

  /*! exports provided: Intro3PageModule */

  /***/
  function srcAppUsersIntrosIntro3Intro3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Intro3PageModule", function () {
      return Intro3PageModule;
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


    var _intro3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./intro3-routing.module */
    "./src/app/Users/intros/intro3/intro3-routing.module.ts");
    /* harmony import */


    var _intro3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./intro3.page */
    "./src/app/Users/intros/intro3/intro3.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var Intro3PageModule = function Intro3PageModule() {
      _classCallCheck(this, Intro3PageModule);
    };

    Intro3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _intro3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Intro3PageRoutingModule"]],
      declarations: [_intro3_page__WEBPACK_IMPORTED_MODULE_6__["Intro3Page"]]
    })], Intro3PageModule);
    /***/
  },

  /***/
  "./src/app/Users/intros/intro3/intro3.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/Users/intros/intro3/intro3.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersIntrosIntro3Intro3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .div_logo {\n  text-align: center;\n  margin: 32px;\n}\nion-content .div_logo .img_logo {\n  width: 200px;\n}\nion-content .lbl_ {\n  font-size: 18px;\n  display: block;\n  text-align: center;\n  line-height: 1.3;\n  font-family: Comfortaa-SemiBold;\n}\nion-content .div_teacher {\n  position: absolute;\n  bottom: 46px;\n  width: 100%;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\nion-content .div_teacher .img_teacher {\n  height: 125px;\n}\nion-footer {\n  position: fixed;\n  bottom: 0;\n}\nion-footer .btn_footer {\n  margin: 0px;\n  color: white;\n  text-transform: none;\n}\nion-footer .btn_footer .spn_indicator {\n  position: absolute;\n  right: 0;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL2ludHJvcy9pbnRybzMvaW50cm8zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvVXNlcnMvaW50cm9zL2ludHJvMy9pbnRybzMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ1I7QURBUTtFQUNJLFlBQUE7QUNFWjtBREVJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNBUjtBREdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdRO0VBQ0ksYUFBQTtBQ0RaO0FES0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQ0ZKO0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDRFI7QURHUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL1VzZXJzL2ludHJvcy9pbnRybzMvaW50cm8zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcblxuICAgIC5kaXZfbG9nb3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDMycHg7XG4gICAgICAgIC5pbWdfbG9nb3tcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sYmxfe1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWEtU2VtaUJvbGQ7XG4gICAgfVxuXG4gICAgLmRpdl90ZWFjaGVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogNDZweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgICAgIC5pbWdfdGVhY2hlcntcbiAgICAgICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tZm9vdGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgLmJ0bl9mb290ZXJ7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuXG4gICAgICAgIC5zcG5faW5kaWNhdG9ye1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgIH1cbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDMycHg7XG59XG5pb24tY29udGVudCAuZGl2X2xvZ28gLmltZ19sb2dvIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuaW9uLWNvbnRlbnQgLmxibF8ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWEtU2VtaUJvbGQ7XG59XG5pb24tY29udGVudCAuZGl2X3RlYWNoZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZGl2X3RlYWNoZXIgLmltZ190ZWFjaGVyIHtcbiAgaGVpZ2h0OiAxMjVweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xufVxuaW9uLWZvb3RlciAuYnRuX2Zvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuaW9uLWZvb3RlciAuYnRuX2Zvb3RlciAuc3BuX2luZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Users/intros/intro3/intro3.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/Users/intros/intro3/intro3.page.ts ***!
    \****************************************************/

  /*! exports provided: Intro3Page */

  /***/
  function srcAppUsersIntrosIntro3Intro3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Intro3Page", function () {
      return Intro3Page;
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


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

    var Intro3Page = /*#__PURE__*/function () {
      function Intro3Page(router, statusBar) {
        _classCallCheck(this, Intro3Page);

        this.router = router;
        this.statusBar = statusBar;
      }

      _createClass(Intro3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#FFFFFF');
        }
      }, {
        key: "next",
        value: function next() {
          this.router.navigate(['/teacher-parent']);
        }
      }]);

      return Intro3Page;
    }();

    Intro3Page.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
      }];
    };

    Intro3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intro3',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./intro3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/intros/intro3/intro3.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./intro3.page.scss */
      "./src/app/Users/intros/intro3/intro3.page.scss"))["default"]]
    })], Intro3Page);
    /***/
  }
}]);
//# sourceMappingURL=Users-intros-intro3-intro3-module-es5.js.map