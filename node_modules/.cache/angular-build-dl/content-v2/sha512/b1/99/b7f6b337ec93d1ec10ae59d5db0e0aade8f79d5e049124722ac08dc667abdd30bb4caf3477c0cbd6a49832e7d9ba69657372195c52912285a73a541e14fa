function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-requests-child-requests-child-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/requests-child/requests-child.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/requests-child/requests-child.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersRequestsChildRequestsChildPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\" />\n    <ion-title class=\"title_all\">{{'settings.request' | translate}}</ion-title>\n    <img src=\"../../../assets/images/icon.png\" slot=\"end\" class=\"img_tool_logo\" />\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div>\n    <ion-row class=\"row_list row_all\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img *ngIf=\"gender == 'boy'\" src=\"../../../assets/images/teacher-2.png\" class=\"img_main img_all\" />\n        <img *ngIf=\"gender == 'girl'\" src=\"../../../assets/images/teacher-1.png\" class=\"img_main img_all\" />\n      </ion-col>\n      <ion-col size=\"10\" class=\"col_list col_\">\n        <ion-label *ngIf=\"status == '0'\" class=\"lbl_quiz_title lbl_title_all\">\n          <!-- Teacher\n          {{teacherName}} {{teacherSurname}} wants to connect with your kid {{kidName}} to send him/her Quizzes,\n          videos and PDFs as homework. Is that OK with you? -->\n          Ο δάσκαλος {{teacherName}} {{teacherSurname}} θέλει να συνδεθεί με το παιδί {{kidName}} για να μπορεί να του στέλνει καθήκοντα κουίζ, βίντεο και φύλλα εργασίας. Το αποδέχεσαι;\n        </ion-label>\n\n        <ion-label *ngIf=\"status == '1'\" class=\"lbl_quiz_title lbl_title_all\">\n          <!-- You have given access\n          to teacher {{teacherName}} {{teacherSurname}} to connect with the kid {{kidName}} and the teacher\n          can send quizzes, videos, PDFs and see the results from your kid. -->\n          Έχεις δώσει πρόσβαση στον/στην δάσκαλο/α {{teacherName}} {{teacherSurname}} να συνδεθεί με το παιδί {{kidName}} και θα μπορεί να στέλνει σαν καθήκοντα κουίζ, βίντεο και φύλλα εργασίας, καθώς επίσης και να παρακολουθεί τα αποτελεσματα του παιδιού.\n        </ion-label>\n\n        <ion-row class=\"btn_row\" *ngIf=\"status == '0'\">\n          <ion-col size=\"6\" class=\"btn_col\">\n            <ion-button expand=\"block\" size=\"small\" class=\"btns_\" (click)=\"kidConnectionStatus(id,1)\">\n              {{'single.btn_approve' | translate}}\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\" class=\"btn_col\">\n            <ion-button class=\"lbl_red\" expand=\"block\" size=\"small\" color=\"medium\" class=\"btns_\"\n              (click)=\"kidConnectionStatus(id,2)\">\n              {{'single.btn_cancel' | translate}}\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"btn_row\" *ngIf=\"status == '1'\">\n        <ion-col class=\"btn_col\">\n          <ion-button expand=\"block\" size=\"small\" class=\"btn_\" (click)=\"kiddisConnectionStatus(id,3)\">\n            {{'single.btn_disconnect' | translate}}\n          </ion-button>\n        </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Users/requests-child/requests-child-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Users/requests-child/requests-child-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: RequestsChildPageRoutingModule */

  /***/
  function srcAppUsersRequestsChildRequestsChildRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsChildPageRoutingModule", function () {
      return RequestsChildPageRoutingModule;
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


    var _requests_child_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./requests-child.page */
    "./src/app/Users/requests-child/requests-child.page.ts");

    var routes = [{
      path: '',
      component: _requests_child_page__WEBPACK_IMPORTED_MODULE_3__["RequestsChildPage"]
    }];

    var RequestsChildPageRoutingModule = function RequestsChildPageRoutingModule() {
      _classCallCheck(this, RequestsChildPageRoutingModule);
    };

    RequestsChildPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RequestsChildPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Users/requests-child/requests-child.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Users/requests-child/requests-child.module.ts ***!
    \***************************************************************/

  /*! exports provided: RequestsChildPageModule */

  /***/
  function srcAppUsersRequestsChildRequestsChildModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsChildPageModule", function () {
      return RequestsChildPageModule;
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


    var _requests_child_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./requests-child-routing.module */
    "./src/app/Users/requests-child/requests-child-routing.module.ts");
    /* harmony import */


    var _requests_child_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./requests-child.page */
    "./src/app/Users/requests-child/requests-child.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var RequestsChildPageModule = function RequestsChildPageModule() {
      _classCallCheck(this, RequestsChildPageModule);
    };

    RequestsChildPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _requests_child_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestsChildPageRoutingModule"]],
      declarations: [_requests_child_page__WEBPACK_IMPORTED_MODULE_6__["RequestsChildPage"]]
    })], RequestsChildPageModule);
    /***/
  },

  /***/
  "./src/app/Users/requests-child/requests-child.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/Users/requests-child/requests-child.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersRequestsChildRequestsChildPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row_list .col_list .img_main {\n  height: 44px !important;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n  overflow: unset !important;\n  text-overflow: unset !important;\n  white-space: unset !important;\n  font-size: 16px !important;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n.col_ {\n  padding: 0px 0px 0px 8px !important;\n}\n.btn_row .btn_col {\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.btn_row .btn_col .btns_ {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  text-transform: none;\n  color: white;\n}\n.lbl_red {\n  display: block;\n  padding: 8px 8px 8px 8px;\n  color: white;\n  background: green;\n  width: 105px;\n  font-weight: bold;\n  text-align: left;\n  font-size: 14px;\n}\n.lbl_rejected {\n  display: block;\n  padding: 8px 8px 8px 8px;\n  color: white;\n  background: red;\n  width: 105px;\n  font-weight: bold;\n  text-align: left;\n  font-size: 14px;\n}\n.auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.right {\n  text-align: -webkit-right;\n}\n.btn_ {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  text-transform: none;\n  color: white;\n  --background: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL3JlcXVlc3RzLWNoaWxkL3JlcXVlc3RzLWNoaWxkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvVXNlcnMvcmVxdWVzdHMtY2hpbGQvcmVxdWVzdHMtY2hpbGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsdUJBQUE7QUNETjtBREdJO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDRE47QURHSTtFQUNFLGNBQUE7QUNETjtBREdJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNETjtBREdJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNETjtBREtBO0VBQ0UsbUNBQUE7QUNGRjtBREtFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FER0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRE47QURNQTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0hGO0FES0E7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZGO0FES0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDRkY7QURJQTtFQUNFLHlCQUFBO0FDREY7QURHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvVXNlcnMvcmVxdWVzdHMtY2hpbGQvcmVxdWVzdHMtY2hpbGQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd19saXN0IHtcbiAgLmNvbF9saXN0IHtcbiAgICAuaW1nX21haW4ge1xuICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sYmxfcXVpel90aXRsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgdGV4dC1vdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sYmxfdW5pdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmltZ19wcmVtaXVtIHtcbiAgICAgIGhlaWdodDogMzRweDtcbiAgICAgIHdpZHRoOiAzNHB4O1xuICAgIH1cbiAgICAuaW1nX2Fycm93IHtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgIH1cbiAgfVxufVxuLmNvbF8ge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCA4cHggIWltcG9ydGFudDtcbn1cbi5idG5fcm93IHtcbiAgLmJ0bl9jb2wge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLmJ0bnNfIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuLmxibF9yZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4IDhweCA4cHggOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICB3aWR0aDogMTA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubGJsX3JlamVjdGVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHdpZHRoOiAxMDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmF1dG8ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1yaWdodDtcbn1cbi5idG5fIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IHJlZDtcbn1cbiIsIi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19tYWluIHtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5sYmxfcXVpel90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3VuaXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19wcmVtaXVtIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19hcnJvdyB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi5jb2xfIHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fcm93IC5idG5fY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uYnRuX3JvdyAuYnRuX2NvbCAuYnRuc18ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sYmxfcmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgd2lkdGg6IDEwNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGJsX3JlamVjdGVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHdpZHRoOiAxMDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmF1dG8ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4ucmlnaHQge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LXJpZ2h0O1xufVxuXG4uYnRuXyB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Users/requests-child/requests-child.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Users/requests-child/requests-child.page.ts ***!
    \*************************************************************/

  /*! exports provided: RequestsChildPage */

  /***/
  function srcAppUsersRequestsChildRequestsChildPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsChildPage", function () {
      return RequestsChildPage;
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

    var RequestsChildPage = /*#__PURE__*/function () {
      function RequestsChildPage(navCtrl, route, api, router, alertCtrl) {
        _classCallCheck(this, RequestsChildPage);

        this.navCtrl = navCtrl;
        this.route = route;
        this.api = api;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.resp_list = [];
      }

      _createClass(RequestsChildPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.roll = localStorage.getItem("role_id");
          var reqData = this.route.snapshot.queryParams;
          this.api.presentLoading();
          this.quize_process = true;
          this.api.parentRequestDetail(reqData.id).subscribe(function (resp) {
            _this.quize_process = false;

            _this.api.dismissLoading();

            if (resp) {
              _this.resp = resp;
              _this.gender = _this.resp.data.gender;
              _this.kidName = _this.resp.data.kidName;
              _this.gradeName = _this.resp.data.gradeName;
              _this.teacherName = _this.resp.data.teacherName;
              _this.teacherSurname = _this.resp.data.teacherSurname;
              _this.id = _this.resp.data.id;
              _this.status = _this.resp.data.status;
            }
          }, function (err) {
            _this.quize_process = false;

            _this.api.dismissLoading(); // this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");

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

              _this2.router.navigate(["/tabs/requests"]);
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
        key: "kiddisConnectionStatus",
        value: function kiddisConnectionStatus(id, status) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Επιβεβαίωση',
                      message: 'Σίγουρα θέλεις να αποσυνδέσεις το παιδί από το δάσκαλο;',
                      buttons: [{
                        text: 'Ακύρωση',
                        role: 'cancel'
                      }, {
                        text: 'ΝΑΙ',
                        handler: function handler() {
                          var body = {
                            status: status
                          };

                          _this3.api.presentLoading();

                          _this3.quize_process = true;

                          _this3.api.kidConnectionStatus(id, body).subscribe(function (data) {
                            _this3.quize_process = false;

                            _this3.api.dismissLoading();

                            if (data.status == 1) {
                              // success part
                              _this3.api.presentToastWithOptions(data['message']);

                              _this3.router.navigate(["/tabs/requests"]);
                            } else {
                              _this3.api.presentToastWithOptions(data['message']);
                            }
                          }, function (err) {
                            _this3.quize_process = false;

                            _this3.api.dismissLoading();

                            _this3.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
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
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack('/tabs/requests');
        }
      }]);

      return RequestsChildPage;
    }();

    RequestsChildPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    RequestsChildPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-requests-child',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./requests-child.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/requests-child/requests-child.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./requests-child.page.scss */
      "./src/app/Users/requests-child/requests-child.page.scss"))["default"]]
    })], RequestsChildPage);
    /***/
  }
}]);
//# sourceMappingURL=Users-requests-child-requests-child-module-es5.js.map