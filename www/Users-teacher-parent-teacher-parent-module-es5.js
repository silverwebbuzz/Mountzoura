function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-teacher-parent-teacher-parent-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/teacher-parent/teacher-parent.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/teacher-parent/teacher-parent.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersTeacherParentTeacherParentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"div_logo\">\n    <img src=\"../../assets/images/logoWithUpIcon.png\" class=\"img_logo\"/>\n  </div>\n\n  <ion-label class=\"lbl_ no_spc\">{{'screen1.lable1' | translate }}</ion-label>\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <div class=\"div_teacher\">\n        <img src=\"../../assets/images/teachers.png\" class=\"img_teacher\"/>\n      </div>\n      <ion-button expand=\"full\" class=\"btn_footer\" (click)=\"teacher('teacher')\">{{'screen1.teacher' | translate }}</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <div class=\"div_teacher\">\n        <img src=\"../../assets/images/romance.png\" class=\"img_teacher\"/>\n      </div>\n      <ion-button expand=\"full\" class=\"btn_footer\" (click)=\"parent('parent')\">{{'screen1.parent' | translate }}</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-label class=\"lbl_\">{{'screen1.lable2' | translate }}</ion-label>\n\n  <ion-label class=\"lbl_\">{{'screen1.lable3' | translate }}</ion-label>\n\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" size=\"large\" class=\"btn_footer\" (click)=\"next()\">{{'screen1.next step' | translate }} >></ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/Users/teacher-parent/teacher-parent-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Users/teacher-parent/teacher-parent-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: TeacherParentPageRoutingModule */

  /***/
  function srcAppUsersTeacherParentTeacherParentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherParentPageRoutingModule", function () {
      return TeacherParentPageRoutingModule;
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


    var _teacher_parent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./teacher-parent.page */
    "./src/app/Users/teacher-parent/teacher-parent.page.ts");

    var routes = [{
      path: '',
      component: _teacher_parent_page__WEBPACK_IMPORTED_MODULE_3__["TeacherParentPage"]
    }];

    var TeacherParentPageRoutingModule = function TeacherParentPageRoutingModule() {
      _classCallCheck(this, TeacherParentPageRoutingModule);
    };

    TeacherParentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TeacherParentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Users/teacher-parent/teacher-parent.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Users/teacher-parent/teacher-parent.module.ts ***!
    \***************************************************************/

  /*! exports provided: TeacherParentPageModule */

  /***/
  function srcAppUsersTeacherParentTeacherParentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherParentPageModule", function () {
      return TeacherParentPageModule;
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


    var _teacher_parent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./teacher-parent-routing.module */
    "./src/app/Users/teacher-parent/teacher-parent-routing.module.ts");
    /* harmony import */


    var _teacher_parent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./teacher-parent.page */
    "./src/app/Users/teacher-parent/teacher-parent.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var TeacherParentPageModule = function TeacherParentPageModule() {
      _classCallCheck(this, TeacherParentPageModule);
    };

    TeacherParentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _teacher_parent_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeacherParentPageRoutingModule"]],
      declarations: [_teacher_parent_page__WEBPACK_IMPORTED_MODULE_6__["TeacherParentPage"]]
    })], TeacherParentPageModule);
    /***/
  },

  /***/
  "./src/app/Users/teacher-parent/teacher-parent.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/Users/teacher-parent/teacher-parent.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersTeacherParentTeacherParentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .div_logo {\n  text-align: center;\n  margin: 32px;\n}\nion-content .div_logo .img_logo {\n  width: 200px;\n}\nion-content .lbl_ {\n  font-size: 18px;\n  display: block;\n  text-align: center;\n  line-height: 1.3;\n  font-family: Comfortaa-SemiBold;\n  padding: 16px;\n}\nion-content .no_spc {\n  padding: 0px !important;\n}\nion-content .div_teacher {\n  text-align: center;\n}\nion-content .div_teacher .img_teacher {\n  height: 115px;\n}\n.btn_footer {\n  margin: 0px;\n  color: white;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL3RlYWNoZXItcGFyZW50L3RlYWNoZXItcGFyZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvVXNlcnMvdGVhY2hlci1wYXJlbnQvdGVhY2hlci1wYXJlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ1I7QURBUTtFQUNJLFlBQUE7QUNFWjtBREVJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0FDQVI7QURFSTtFQUNJLHVCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0FDQVI7QURFUTtFQUNJLGFBQUE7QUNBWjtBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvVXNlcnMvdGVhY2hlci1wYXJlbnQvdGVhY2hlci1wYXJlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuXG4gICAgLmRpdl9sb2dve1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMzJweDtcbiAgICAgICAgLmltZ19sb2dve1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxibF97XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYS1TZW1pQm9sZDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG4gICAgLm5vX3NwY3tcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kaXZfdGVhY2hlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgICAgICAuaW1nX3RlYWNoZXJ7XG4gICAgICAgICAgICBoZWlnaHQ6IDExNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmJ0bl9mb290ZXJ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDMycHg7XG59XG5pb24tY29udGVudCAuZGl2X2xvZ28gLmltZ19sb2dvIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuaW9uLWNvbnRlbnQgLmxibF8ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWEtU2VtaUJvbGQ7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5pb24tY29udGVudCAubm9fc3BjIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuZGl2X3RlYWNoZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZGl2X3RlYWNoZXIgLmltZ190ZWFjaGVyIHtcbiAgaGVpZ2h0OiAxMTVweDtcbn1cblxuLmJ0bl9mb290ZXIge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Users/teacher-parent/teacher-parent.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Users/teacher-parent/teacher-parent.page.ts ***!
    \*************************************************************/

  /*! exports provided: TeacherParentPage */

  /***/
  function srcAppUsersTeacherParentTeacherParentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherParentPage", function () {
      return TeacherParentPage;
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

    var TeacherParentPage = /*#__PURE__*/function () {
      function TeacherParentPage(router, statusBar) {
        _classCallCheck(this, TeacherParentPage);

        this.router = router;
        this.statusBar = statusBar;
      }

      _createClass(TeacherParentPage, [{
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
          this.router.navigate(['/login']);
        }
      }, {
        key: "teacher",
        value: function teacher(_teacher) {
          this.router.navigate(['terms'], {
            queryParams: {
              teacher: _teacher
            }
          });
        }
      }, {
        key: "parent",
        value: function parent(_parent) {
          this.router.navigate(['terms'], {
            queryParams: {
              parent: _parent
            }
          });
        }
      }]);

      return TeacherParentPage;
    }();

    TeacherParentPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
      }];
    };

    TeacherParentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teacher-parent',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./teacher-parent.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/teacher-parent/teacher-parent.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./teacher-parent.page.scss */
      "./src/app/Users/teacher-parent/teacher-parent.page.scss"))["default"]]
    })], TeacherParentPage);
    /***/
  }
}]);
//# sourceMappingURL=Users-teacher-parent-teacher-parent-module-es5.js.map