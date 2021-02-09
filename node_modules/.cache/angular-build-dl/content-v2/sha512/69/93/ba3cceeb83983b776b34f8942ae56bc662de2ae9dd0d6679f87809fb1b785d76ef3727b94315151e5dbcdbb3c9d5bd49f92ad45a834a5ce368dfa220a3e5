(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos-video-search-video-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/videos/video-search/video-search.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videos/video-search/video-search.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"appBar2\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/icon.png\" slot=\"start\" class=\"img_tool_logo\" />\n    <ion-searchbar id=\"searchValue\" (ionChange)=\"searchBar($event.target.value)\" placeholder=\"{{'reusable.search' | translate}}\" searchIcon=\"none\" class=\"searchBox\"></ion-searchbar>\n    <img src=\"../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"isEmpty1\" *ngIf=\"v_list?.length == 0 || v_list == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <ng-container *ngFor=\"let opt of v_list | slice:0:limit;\">\n    <ion-row class=\"row_list row_all\" (click)=\"video(opt.id,opt.free_video)\">\n      <ion-col size=\"2\" class=\"col_list col_all\">\n        <img src=\"../../../assets/images/video.png\" class=\"img_main img_all\" />\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_list auto_all\">\n        <ion-label class=\"lbl_quiz_title lbl_title_all\">{{opt.title}}</ion-label>\n        <!-- <ion-label class=\"lbl_unit lbl_desc_all\">{{opt.title}}</ion-label> -->\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_premium_all\">\n        <img src=\"../../../assets/images/premium.png\" *ngIf='opt.free_video == 0' class=\"img_premium\"/>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_list col_all img_arrow_all\">\n        <img src=\"../../../assets/images/multimedia-option.png\" class=\"img_arrow\"/>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Παρακαλώ περιμένετε...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <div class=\"div_ads_empty\">\n    <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" (click)=\"ads()\" class=\"img_ads_empty spc_ads\"/>\n  </div>\n  \n</ion-content>\n\n<!-- <ion-footer>\n  <div class=\"div_ads_footer\">\n    <img *ngIf=\"add\" src=\"{{advertise_url}}{{add}}\" class=\"img_ads_footer\"/>\n  </div>\n</ion-footer> -->\n");

/***/ }),

/***/ "./src/app/videos/video-search/video-search-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/videos/video-search/video-search-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: VideoSearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSearchPageRoutingModule", function() { return VideoSearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _video_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-search.page */ "./src/app/videos/video-search/video-search.page.ts");




const routes = [
    {
        path: '',
        component: _video_search_page__WEBPACK_IMPORTED_MODULE_3__["VideoSearchPage"]
    }
];
let VideoSearchPageRoutingModule = class VideoSearchPageRoutingModule {
};
VideoSearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideoSearchPageRoutingModule);



/***/ }),

/***/ "./src/app/videos/video-search/video-search.module.ts":
/*!************************************************************!*\
  !*** ./src/app/videos/video-search/video-search.module.ts ***!
  \************************************************************/
/*! exports provided: VideoSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSearchPageModule", function() { return VideoSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _video_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-search-routing.module */ "./src/app/videos/video-search/video-search-routing.module.ts");
/* harmony import */ var _video_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-search.page */ "./src/app/videos/video-search/video-search.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let VideoSearchPageModule = class VideoSearchPageModule {
};
VideoSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoSearchPageRoutingModule"]
        ],
        declarations: [_video_search_page__WEBPACK_IMPORTED_MODULE_6__["VideoSearchPage"]]
    })
], VideoSearchPageModule);



/***/ }),

/***/ "./src/app/videos/video-search/video-search.page.scss":
/*!************************************************************!*\
  !*** ./src/app/videos/video-search/video-search.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\n.bg .searchBox {\n  --background: #fdf8f1;\n  border: 1px solid var(--ion-color-primary);\n  height: 34px;\n  width: 90%;\n  margin: 0 auto;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n  border-radius: 10px;\n}\n.row_list .col_list .img_main {\n  height: 48px;\n}\n.row_list .col_list .lbl_quiz_title {\n  display: block;\n}\n.row_list .col_list .lbl_unit {\n  display: block;\n}\n.row_list .col_list .img_premium {\n  height: 34px;\n  width: 34px;\n}\n.row_list .col_list .img_arrow {\n  height: 28px;\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL3ZpZGVvcy92aWRlby1zZWFyY2gvdmlkZW8tc2VhcmNoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlkZW9zL3ZpZGVvLXNlYXJjaC92aWRlby1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBREFJO0VBQ0UsWUFBQTtBQ0VOO0FEQUk7RUFDRSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFTjtBRFVNO0VBQ0UsWUFBQTtBQ1BSO0FEU007RUFDRSxjQUFBO0FDUFI7QURTTTtFQUNFLGNBQUE7QUNQUjtBRFNNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNQUjtBRFNNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNQUiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy92aWRlby1zZWFyY2gvdmlkZW8tc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAgIC5pbWdfdG9vbCB7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxuICAgIC5zZWFyY2hCb3gge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgfVxuICAvLyAuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAvLyAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4ICFpbXBvcnRhbnQ7XG4gIC8vICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLy8gfVxuICAvLyAuaW9uLXNlYXJjaGJhciA6OnBsYWNlaG9sZGVyIHtcbiAgLy8gICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLy8gfVxuICAucm93X2xpc3Qge1xuICAgIC5jb2xfbGlzdCB7XG4gICAgICAuaW1nX21haW4ge1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICB9XG4gICAgICAubGJsX3F1aXpfdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIC5sYmxfdW5pdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgLmltZ19wcmVtaXVtIHtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgIH1cbiAgICAgIC5pbWdfYXJyb3cge1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiLCIuYmcge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG59XG4uYmcgLmltZ190b29sIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLmJnIC5zZWFyY2hCb3gge1xuICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmltZ19tYWluIHtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLnJvd19saXN0IC5jb2xfbGlzdCAubGJsX3F1aXpfdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb3dfbGlzdCAuY29sX2xpc3QgLmxibF91bml0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfcHJlbWl1bSB7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDM0cHg7XG59XG4ucm93X2xpc3QgLmNvbF9saXN0IC5pbWdfYXJyb3cge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/videos/video-search/video-search.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/videos/video-search/video-search.page.ts ***!
  \**********************************************************/
/*! exports provided: VideoSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSearchPage", function() { return VideoSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");









let VideoSearchPage = class VideoSearchPage {
    constructor(api, route, router, iab, statusBar) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.iab = iab;
        this.statusBar = statusBar;
        this.limit = 10;
        this.advertise_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].advertise_url;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#fdf8f1');
        this.package_status = localStorage.getItem("package_status");
        this.connect_student = localStorage.getItem("connect_student");
        let reqData = this.route.snapshot.queryParams;
        if (!reqData.g_id) {
            // this.api.presentLoading();
            var body = {
                lession_id: reqData.l_id,
                course_id: reqData.c_id,
                grade_id: localStorage.getItem("grade_id")
            };
            this.api.studentVideo(body).subscribe(resp => {
                this.videolist = resp;
                this.v_list = this.videolist.data;
                // this.api.dismissLoading();
            });
        }
        if (reqData.g_id) {
            // this.api.presentLoading();
            var data = {
                lession_id: reqData.l_id,
                course_id: reqData.c_id,
                grade_id: reqData.g_id
            };
            this.api.studentVideo(data).subscribe(resp => {
                this.videolist = resp;
                this.v_list = this.videolist.data;
                // this.api.dismissLoading();
            });
        }
        this.api.searchPageAdd().subscribe(resp => {
            this.advertise = resp;
            this.add = this.advertise.data.image;
            this.add_url = this.advertise.data.url;
        });
    }
    ads() {
        this.iab.create(this.add_url, '_system', 'location=yes');
    }
    searchBar(value) {
        let searchList = this.v_list;
        if (value) {
            searchList = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](searchList, function (x) {
                if (x.title.toLowerCase().includes(value.toLowerCase())) {
                    return x.title.toLowerCase().includes(value.toLowerCase());
                }
            });
        }
        else {
            searchList = this.videolist.data;
        }
        this.v_list = searchList;
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 10;
            infiniteScroll.target.complete();
        }, 500);
    }
    video(id, quize) {
        let reqData = this.route.snapshot.queryParams;
        this.router.navigate(['/tabs/video'], { queryParams: { vedio_id: id, l_id: reqData.l_id, c_id: reqData.c_id } });
        if (localStorage.getItem("role_id") === '2') {
            if (quize == 0 && this.package_status == 1) {
                this.router.navigate(['/tabs/video'], { queryParams: { video_id: id, l_id: reqData.l_id, c_id: reqData.c_id } });
            }
            else if (quize == 1) {
                this.router.navigate(['/tabs/video'], { queryParams: { video_id: id, l_id: reqData.l_id, c_id: reqData.c_id } });
            }
            else {
                this.router.navigate(["/tabs/quiz-premium"], { queryParams: { l_id: reqData.l_id, c_id: reqData.c_id, video_search: "video_search" } });
            }
        }
        if (localStorage.getItem("role_id") === '4') {
            if (quize == 1) {
                this.router.navigate(['/tabs/video'], { queryParams: { video_id: id, l_id: reqData.l_id, c_id: reqData.c_id } });
            }
            else {
                if (this.package_status == 1) {
                    this.router.navigate(['/tabs/video'], { queryParams: { video_id: id, l_id: reqData.l_id, c_id: reqData.c_id } });
                }
                else {
                    if (this.connect_student >= 6) {
                        this.router.navigate(['/tabs/video'], { queryParams: { video_id: id, l_id: reqData.l_id, c_id: reqData.c_id } });
                    }
                    else {
                        this.router.navigate(["/tabs/teacher-premium"], {
                            queryParams: { l_id: reqData.l_id, c_id: reqData.c_id, g_id: reqData.g_id, video_search: "video_search" }
                        });
                    }
                }
            }
        }
    }
    settings() {
        this.router.navigate(['/tabs/settings']);
    }
};
VideoSearchPage.ctorParameters = () => [
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: true })
], VideoSearchPage.prototype, "infiniteScroll", void 0);
VideoSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./video-search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/videos/video-search/video-search.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./video-search.page.scss */ "./src/app/videos/video-search/video-search.page.scss")).default]
    })
], VideoSearchPage);



/***/ })

}]);
//# sourceMappingURL=videos-video-search-video-search-module-es2015.js.map