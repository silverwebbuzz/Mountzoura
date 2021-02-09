(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"],{

/***/ "./src/app/global/common_service.ts":
/*!******************************************!*\
  !*** ./src/app/global/common_service.ts ***!
  \******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin':'*',
        responseType: 'JSON'
    })
};
let CommonService = class CommonService {
    constructor(toastCtrl, loadingController, http, modal) {
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.modal = modal;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.isLoading = false;
        this.isModalOpen = false;
    }
    showErrorToast(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const test = yield this.toastCtrl.create({
                cssClass: 'err_pay',
                message: data,
                duration: 3000,
                position: 'top'
            });
            test.present();
        });
    }
    presentToastWithOptions(message, cssClass, position) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message ? message : null,
                duration: 3000,
                position: position ? position : 'bottom',
                cssClass: cssClass ? cssClass : 'dark-trans login-toster',
                buttons: [
                    {
                        text: 'Εντάξει',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                message: 'Παρακαλώ περιμένετε...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss();
                    }
                });
            });
        });
    }
    dismissLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss();
        });
    }
    presentModal(PageName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isModalOpen = true;
            return yield this.modal.create({
                component: PageName,
            }).then(a => {
                a.present().then(() => {
                    if (!this.isModalOpen) {
                        a.dismiss();
                    }
                });
            });
        });
    }
    dismissModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isModalOpen = false;
            return yield this.modal.dismiss();
        });
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
    // api call
    signin(body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'login', body);
    }
    teacher_signup(body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'TeacherRegistration', body);
    }
    parents_signup(body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'ParentRegistration', body);
    }
    arealist() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'areaList');
    }
    sub_area(area_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'subAreaList' + "/" + area_id);
    }
    lessionlist() {
        let g_id = localStorage.getItem("grade_id");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'LessionByGrade' + "/" + g_id);
        // return this.http.get(environment.base_url + 'LessionByGrade/2')
    }
    teacher_lessionlist(g_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'LessionByGrade' + "/" + g_id);
    }
    courselist(lessionId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'CourseByLession' + "/" + lessionId);
    }
    student_quiz_list(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'studentQuiz', data);
    }
    latest_quiz() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'latestQuiz');
    }
    get_quize_data(quizeId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'quizData' + "/" + quizeId);
    }
    quizQuestion(quizeId, data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'quizQuestion' + "/" + quizeId, data);
    }
    submitAnswer(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'submitAnswer', data);
    }
    realtedquiz(quizeId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'realtedQuiz' + "/" + quizeId);
    }
    Videolist() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'latestVideo');
    }
    studentVideo(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'studentVideo', data);
    }
    realtedVideosQuiz(videoId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'realtedVideosQuiz' + "/" + videoId);
    }
    videoData(videoId, data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'videoData' + "/" + videoId, data);
    }
    studentSearchContent(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'studentSearchContent', data);
    }
    recentContent() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'recentContent');
    }
    gradeList() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'gradeList');
    }
    Addkid(data) {
        var token = localStorage.getItem("token");
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'AddKid' + "/" + token, data);
    }
    KidList() {
        var token = localStorage.getItem("token");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'KidList' + "/" + token);
    }
    KidData(kidId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'KidData' + "/" + kidId);
    }
    connectStudent(data) {
        var token = localStorage.getItem("token");
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'connectStudent' + "/" + token, data);
    }
    getStudentHomeWork(data) {
        var token = localStorage.getItem("token");
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'getStudentHomeWork' + "/" + token, data);
    }
    countQuizPlay(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'countQuizPlay', data);
    }
    studentAnswer(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'studentAnswer', data);
    }
    studentAnswerShow(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'studentAnswerShow', data);
    }
    teacherSearchContent(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'teacherSearchContent', data);
    }
    countConnectStudent() {
        var token = localStorage.getItem("token");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'countConnectStudent' + "/" + token);
    }
    connectStudentList() {
        var token = localStorage.getItem("token");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'connectStudentList' + "/" + token);
    }
    homework(data) {
        var token = localStorage.getItem("token");
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'homework' + "/" + token, data);
    }
    deleteHomework(Id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'deleteHomework' + "/" + Id);
    }
    latestPdf() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'latestPdf');
    }
    studentPdf(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'studentPdf', data);
    }
    realtedPdfQuiz(videoId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'realtedPdfQuiz' + "/" + videoId);
    }
    pdfData(videoId, data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'pdfData' + "/" + videoId, data);
    }
    gradePrize(prizeid) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'gradePrize' + "/" + prizeid);
    }
    terms_condition() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'terms_condition');
    }
    privacy_policy() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'privacy_policy');
    }
    gdpr() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'gdpr');
    }
    getUserData() {
        var token = localStorage.getItem("token");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'getUserData' + "/" + token);
    }
    updateUser(data) {
        var token = localStorage.getItem("token");
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'updateUser' + "/" + token, data);
    }
    gradePurchase(data) {
        var token = localStorage.getItem("token");
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'gradePurchase' + "/" + token, data);
    }
    cancelSubscription(kidid) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancelSubscription' + "/" + kidid);
    }
    teacherPackagePurchase(data) {
        var token = localStorage.getItem("token");
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'teacherPackagePurchase' + "/" + token, data);
    }
    quizStartAdd() {
        var area_id = localStorage.getItem("area_id");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'quizStartAdd' + "/" + area_id);
    }
    quizEndAdd() {
        var area_id = localStorage.getItem("area_id");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'quizEndAdd' + "/" + area_id);
    }
    addParentAdvertisement() {
        var area_id = localStorage.getItem("area_id");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'addParentAdvertisement' + "/" + area_id);
    }
    addTeacherAdvertisement() {
        var area_id = localStorage.getItem("area_id");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'addTeacherAdvertisement' + "/" + area_id);
    }
    searchPageAdd() {
        var area_id = localStorage.getItem("area_id");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'searchPageAdd' + "/" + area_id);
    }
    KidHomework() {
        var kid_id = localStorage.getItem("kid_id");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'KidHomework' + "/" + kid_id);
    }
    forgot(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'forgetPassword', data);
    }
    parentRequestList() {
        var token = localStorage.getItem("token");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'parentRequestList' + "/" + token);
    }
    teacherRequestList() {
        var token = localStorage.getItem("token");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'teacherRequestList' + "/" + token);
    }
    kidConnectionStatus(id, data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'kidConnectionStatus' + "/" + id, data);
    }
    contentSevenDays() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'contentSevenDays');
    }
    teacherPackageStatus() {
        var token = localStorage.getItem("token");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'teacherPackageStatus' + "/" + token);
    }
    parentPackageStatus() {
        var token = localStorage.getItem("token");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'parentPackageStatus' + "/" + token);
    }
    parentRequestDetail(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'parentRequestDetail' + "/" + id);
    }
};
CommonService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ })

}]);
//# sourceMappingURL=default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2-es2015.js.map