(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Quizzes-quiz-kids-quiz-play-quiz-play-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\" />\n    <img src=\"../../../../assets/images/logoWithoutIcon.png\" class=\"img_logo\" />\n    <img src=\"../../../../assets/images/gear.png\" slot=\"end\" class=\"img_tool_setting\" (click)=\"settings()\" />\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"isEmpty1\" *ngIf=\"qlist?.length == 0 || qlist == null\">\n    <ion-label class=\"lbl-empty\">{{'reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <div *ngFor=\"let opt of qlist \">\n\n    <ion-label class=\"lbl_title lbl_all spc\">{{quize_title}}</ion-label>\n\n    <ion-label class=\"lbl_img_title\">{{opt.question}}</ion-label>\n\n    <div class=\"div_img\" *ngIf=\"!opt.que_image == '' \">\n      <img src=\"{{imageUrl}}{{opt.que_image}}\" class=\"img_main img_quiz\" />\n    </div>\n\n    <form [formGroup]=\"quiz_play\" autocomplete=\"off\" class=\"form_all align\">\n      <div class=\"div_all\" *ngFor=\"let ans of opt.answer; let i = index\">\n        <div class=\"div_lbl\" *ngIf='ans.type == \"text\"'(click)=\"checkbox(1,ans.correct_answer,ans.quiz_question_id,ans.id,opt.question,opt.que_image,opt.count)\">\n          <ion-checkbox class=\"chk_lbl\" mode=\"md\" ></ion-checkbox>\n          <ion-label class=\"lbl\">{{ans.answer_text}}</ion-label>\n        </div>\n      </div>\n\n      <div class=\"div_all_img\" *ngFor=\"let ans of opt.answer; let i = index\">\n      <div class=\"div_imgs\" *ngIf='ans.type == \"image\"' (click)=\"checkbox(1,ans.correct_answer,ans.quiz_question_id,ans.id,opt.question,opt.que_image,opt.count)\">\n        <ion-checkbox class=\"chk_img\" mode=\"md\" ></ion-checkbox>\n        <img src=\"{{imageUrl}}{{ans.answer_image}}\" class=\"img_alls\" />\n      </div>\n      </div>\n    </form>\n  </div>\n\n  <ion-label class=\"lbl_indicator\" *ngIf=\"qlist?.length > 0\">{{len_val ? len_val : 0}}/{{len ? len : 0}}</ion-label>\n</ion-content>");

/***/ }),

/***/ "./src/app/Quizzes/quiz-kids/quiz-play/quiz-play-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Quizzes/quiz-kids/quiz-play/quiz-play-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: QuizPlayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPlayPageRoutingModule", function() { return QuizPlayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _quiz_play_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-play.page */ "./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.page.ts");




const routes = [
    {
        path: '',
        component: _quiz_play_page__WEBPACK_IMPORTED_MODULE_3__["QuizPlayPage"]
    }
];
let QuizPlayPageRoutingModule = class QuizPlayPageRoutingModule {
};
QuizPlayPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuizPlayPageRoutingModule);



/***/ }),

/***/ "./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.module.ts ***!
  \*****************************************************************/
/*! exports provided: QuizPlayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPlayPageModule", function() { return QuizPlayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _quiz_play_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz-play-routing.module */ "./src/app/Quizzes/quiz-kids/quiz-play/quiz-play-routing.module.ts");
/* harmony import */ var _quiz_play_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz-play.page */ "./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let QuizPlayPageModule = class QuizPlayPageModule {
};
QuizPlayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quiz_play_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizPlayPageRoutingModule"]
        ],
        declarations: [_quiz_play_page__WEBPACK_IMPORTED_MODULE_6__["QuizPlayPage"]]
    })
], QuizPlayPageModule);



/***/ }),

/***/ "./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  --background: #fdf8f1;\n}\n.bg .img_tool {\n  height: 32px;\n}\nion-content .lbl_title {\n  display: block;\n  text-align: center;\n  padding: 8px;\n}\nion-content .lbl_img_title {\n  display: block;\n  text-align: center;\n  padding: 16px;\n  font-weight: bold;\n  font-size: 18px;\n}\nion-content .div_img {\n  text-align: center;\n  margin: 16px 0px;\n}\nion-content .div_img .img_quiz {\n  height: 200px;\n}\nion-content .lbl_indicator {\n  display: block;\n  text-align: center;\n  padding: 16px;\n}\nion-content .spc {\n  margin-top: 0px !important;\n}\nion-content .align {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1F1aXp6ZXMvcXVpei1raWRzL3F1aXotcGxheS9xdWl6LXBsYXkucGFnZS5zY3NzIiwic3JjL2FwcC9RdWl6emVzL3F1aXota2lkcy9xdWl6LXBsYXkvcXVpei1wbGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBRE1JO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0hSO0FES0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSFI7QURLSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRElRO0VBQ0ksYUFBQTtBQ0ZaO0FETUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDSlI7QURNSTtFQUNJLDBCQUFBO0FDSlI7QURNSTtFQUNJLGtCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9RdWl6emVzL3F1aXota2lkcy9xdWl6LXBsYXkvcXVpei1wbGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY4ZjE7XG4gICAgLmltZ190b29se1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxufVxuLy8gLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAhaW1wb3J0YW50O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgIH1cbmlvbi1jb250ZW50e1xuICAgIC5sYmxfdGl0bGV7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICB9XG4gICAgLmxibF9pbWdfdGl0bGV7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC5kaXZfaW1ne1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgICAgIC5pbWdfcXVpentcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAvLyB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxibF9pbmRpY2F0b3J7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICAgIC5zcGN7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYWxpZ257XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59IiwiLmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRmOGYxO1xufVxuLmJnIC5pbWdfdG9vbCB7XG4gIGhlaWdodDogMzJweDtcbn1cblxuaW9uLWNvbnRlbnQgLmxibF90aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfaW1nX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE2cHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9pbWcgLmltZ19xdWl6IHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfaW5kaWNhdG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbn1cbmlvbi1jb250ZW50IC5zcGMge1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.page.ts ***!
  \***************************************************************/
/*! exports provided: QuizPlayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPlayPage", function() { return QuizPlayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");








let QuizPlayPage = class QuizPlayPage {
    constructor(formBuilder, route, api, router, navCtrl, statusBar) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.api = api;
        this.router = router;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.qlist = [];
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].image_url;
        this.user_not_found_place_holder = 'assets/image/placeholder-s.png';
        this.len_val = 1;
        this.quiz_play_fb();
    }
    ngOnInit() {
    }
    quiz_play_fb() {
        this.quiz_play = this.formBuilder.group({
            check0: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            check1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    checkbox(e, text, que_id, ans_id, question, que_image, count) {
        let reqData = this.route.snapshot.queryParams;
        localStorage.setItem("question", question);
        localStorage.setItem("que_image", que_image);
        var body = {
            user_id: localStorage.getItem("teacher_id"),
            kid_unique_id: localStorage.getItem("kid_id"),
            quiz_id: reqData.id,
            question_id: que_id,
            answer_id: ans_id,
        };
        this.api.presentLoading();
        this.play_process = true;
        this.api.submitAnswer(body).subscribe(val => {
            this.val = val;
            // this.play_process = false;
            // if (this.val['status'] == 1) {
            //   if (val.correct_answer.answer_image) {
            //     this.ans_img = val.correct_answer.answer_image
            //     this.play_process = false;
            //     this.api.dismissLoading();
            //   } else {
            //     this.play_process = false;
            //     this.api.dismissLoading();
            //   }
            // }
            if (this.val['status'] == 1 && this.val['message'] == 'Correct Answer.') {
                if (reqData.countdata) {
                    if (val.correct_answer.answer_image) {
                        var ans_img = val.correct_answer.answer_image;
                        this.play_process = false;
                        this.api.dismissLoading();
                    }
                    var num = 1;
                    var num1 = +reqData.countdata;
                    var res = 0;
                    res = num + num1;
                    this.router.navigate(['/tabs/quiz-ans-correct'], {
                        queryParams: {
                            countdata: res,
                            ans: val.correct_answer.answer_text,
                            ans_img: ans_img,
                            que: val.correct_answer.quiz_question_id,
                            quize_id: val.correct_answer.quiz_id,
                            count: count
                        }
                    });
                }
                else if (val.correct_answer.answer_image || val.correct_answer.answer_text) {
                    if (val.correct_answer.answer_image) {
                        var ans_img = val.correct_answer.answer_image;
                    }
                    this.info = 1;
                    this.router.navigate(['/tabs/quiz-ans-correct'], {
                        queryParams: {
                            countdata: this.info,
                            ans: val.correct_answer.answer_text,
                            ans_img: ans_img,
                            que: val.correct_answer.quiz_question_id,
                            quize_id: val.correct_answer.quiz_id,
                            count: count
                        }
                    });
                }
                else {
                    this.play_process = false;
                    this.api.dismissLoading();
                }
            }
            if (this.val['status'] == 1 && this.val['message'] == 'Wrong Answer.') {
                if (val.correct_answer.answer_image) {
                    var c_img = val.correct_answer.answer_image;
                }
                if (val.wrong_answer.answer_image) {
                    var ans_img = val.wrong_answer.answer_image;
                }
                let reqData = this.route.snapshot.queryParams;
                var res = +reqData.countdata;
                this.router.navigate(['/tabs/quiz-ans-wrong'], {
                    queryParams: {
                        countdata: res ? res : 0,
                        ans: val.wrong_answer.answer_text,
                        c_ans: val.correct_answer.answer_text,
                        ans_img: ans_img,
                        c_img: c_img,
                        que: val.wrong_answer.quiz_question_id,
                        quize_id: val.wrong_answer.quiz_id,
                        count: count
                    }
                });
            }
            else {
                this.play_process = false;
                this.api.dismissLoading();
            }
            if (this.val['status'] == 0) {
                this.api.presentToastWithOptions(this.val['message']);
            }
            else {
                this.play_process = false;
                this.api.dismissLoading();
            }
        }, err => {
            this.play_process = false;
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
        });
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#fdf8f1');
        let reqData = this.route.snapshot.queryParams;
        if (!reqData.countdata) {
            this.qlist = [];
            this.len_val = 1;
        }
        this.api.presentLoading();
        this.quize_process = true;
        var body = {
            kid_unique_id: localStorage.getItem("kid_id"),
        };
        this.api.quizQuestion(reqData.id, body).subscribe(resp => {
            this.quelist = resp;
            // console.log(" this.quelist" ,this.quelist.data)
            // this.quelist.data.forEach(element => {
            // });
            this.quize_title = this.quelist.quiz_title;
            if (reqData.que_id) {
                // console.log("inside", reqData)
                var num = 1;
                var num1 = +reqData.count;
                var res = 0;
                res = num + num1;
                // this.qlist = this.quelist.data.filter(x => x.id == this.qlist[0].id );
                let test = this.quelist.data.filter((x => x.count == res));
                // console.log("test",test );
                this.qlist = test.splice(0, 1);
                this.login_process = false;
                this.api.dismissLoading();
            }
            else {
                if (this.quelist.data.length !== 0) {
                    this.qlist.push(this.quelist.data[this.qlist.length === 0 ? 0 : this.qlist[0].id]);
                    if (this.qlist && this.qlist.length >= 2) {
                        this.qlist.splice(0, 1);
                        // console.log(this.qlist)
                    }
                }
            }
            // console.log("get_quesion_answer", this.qlist.id)
            let a = this.quelist.data.findIndex(e => e.id === this.qlist[0].id);
            this.len_val = a + 1;
            this.len = Number(this.len_val);
            localStorage.setItem("len_val", this.len);
            this.len = this.quelist.data.length;
        });
        this.login_process = false;
        this.api.dismissLoading();
    }
    right() {
        this.router.navigate(['/tabs/quiz-ans-correct']);
    }
    wrong() {
        this.router.navigate(['/tabs/quiz-ans-wrong']);
    }
    result() {
        let reqData = this.route.snapshot.queryParams;
        this.router.navigate(['/tabs/quiz-result'], { queryParams: { id: reqData.id } });
    }
    back() {
        let reqData = this.route.snapshot.queryParams;
        this.navCtrl.navigateBack(['/tabs/quiz-single'], { queryParams: { id: reqData.id } });
    }
    settings() {
        this.router.navigate(['/tabs/settings']);
    }
};
QuizPlayPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] }
];
QuizPlayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz-play',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./quiz-play.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./quiz-play.page.scss */ "./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.page.scss")).default]
    })
], QuizPlayPage);



/***/ })

}]);
//# sourceMappingURL=Quizzes-quiz-kids-quiz-play-quiz-play-module-es2015.js.map