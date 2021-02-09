function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"], {
  /***/
  "./src/app/global/common_service.ts":
  /*!******************************************!*\
    !*** ./src/app/global/common_service.ts ***!
    \******************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppGlobalCommon_serviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin':'*',
        responseType: 'JSON'
      })
    };

    var CommonService = /*#__PURE__*/function () {
      function CommonService(toastCtrl, loadingController, http, modal) {
        _classCallCheck(this, CommonService);

        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.modal = modal;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.isLoading = false;
        this.isModalOpen = false;
      }

      _createClass(CommonService, [{
        key: "showErrorToast",
        value: function showErrorToast(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var test;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      cssClass: 'err_pay',
                      message: data,
                      duration: 3000,
                      position: 'top'
                    });

                  case 2:
                    test = _context.sent;
                    test.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentToastWithOptions",
        value: function presentToastWithOptions(message, cssClass, position) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: message ? message : null,
                      duration: 3000,
                      position: position ? position : 'bottom',
                      cssClass: cssClass ? cssClass : 'dark-trans login-toster',
                      buttons: [{
                        text: 'Εντάξει',
                        role: 'cancel',
                        handler: function handler() {}
                      }]
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.isLoading = true;
                    _context3.next = 3;
                    return this.loadingController.create({
                      message: 'Παρακαλώ περιμένετε...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this.isLoading) {
                          a.dismiss();
                        }
                      });
                    });

                  case 3:
                    return _context3.abrupt("return", _context3.sent);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.isLoading = false;
                    _context4.next = 3;
                    return this.loadingController.dismiss();

                  case 3:
                    return _context4.abrupt("return", _context4.sent);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentModal",
        value: function presentModal(PageName) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.isModalOpen = true;
                    _context5.next = 3;
                    return this.modal.create({
                      component: PageName
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this2.isModalOpen) {
                          a.dismiss();
                        }
                      });
                    });

                  case 3:
                    return _context5.abrupt("return", _context5.sent);

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.isModalOpen = false;
                    _context6.next = 3;
                    return this.modal.dismiss();

                  case 3:
                    return _context6.abrupt("return", _context6.sent);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authenticationState.value;
        } // api call

      }, {
        key: "signin",
        value: function signin(body) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'login', body);
        }
      }, {
        key: "teacher_signup",
        value: function teacher_signup(body) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'TeacherRegistration', body);
        }
      }, {
        key: "parents_signup",
        value: function parents_signup(body) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'ParentRegistration', body);
        }
      }, {
        key: "arealist",
        value: function arealist() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'areaList');
        }
      }, {
        key: "sub_area",
        value: function sub_area(area_id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'subAreaList' + "/" + area_id);
        }
      }, {
        key: "lessionlist",
        value: function lessionlist() {
          var g_id = localStorage.getItem("grade_id");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'LessionByGrade' + "/" + g_id); // return this.http.get(environment.base_url + 'LessionByGrade/2')
        }
      }, {
        key: "teacher_lessionlist",
        value: function teacher_lessionlist(g_id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'LessionByGrade' + "/" + g_id);
        }
      }, {
        key: "courselist",
        value: function courselist(lessionId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'CourseByLession' + "/" + lessionId);
        }
      }, {
        key: "student_quiz_list",
        value: function student_quiz_list(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'studentQuiz', data);
        }
      }, {
        key: "latest_quiz",
        value: function latest_quiz() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'latestQuiz');
        }
      }, {
        key: "get_quize_data",
        value: function get_quize_data(quizeId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'quizData' + "/" + quizeId);
        }
      }, {
        key: "quizQuestion",
        value: function quizQuestion(quizeId, data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'quizQuestion' + "/" + quizeId, data);
        }
      }, {
        key: "submitAnswer",
        value: function submitAnswer(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'submitAnswer', data);
        }
      }, {
        key: "realtedquiz",
        value: function realtedquiz(quizeId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'realtedQuiz' + "/" + quizeId);
        }
      }, {
        key: "Videolist",
        value: function Videolist() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'latestVideo');
        }
      }, {
        key: "studentVideo",
        value: function studentVideo(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'studentVideo', data);
        }
      }, {
        key: "realtedVideosQuiz",
        value: function realtedVideosQuiz(videoId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'realtedVideosQuiz' + "/" + videoId);
        }
      }, {
        key: "videoData",
        value: function videoData(videoId, data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'videoData' + "/" + videoId, data);
        }
      }, {
        key: "studentSearchContent",
        value: function studentSearchContent(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'studentSearchContent', data);
        }
      }, {
        key: "recentContent",
        value: function recentContent() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'recentContent');
        }
      }, {
        key: "gradeList",
        value: function gradeList() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'gradeList');
        }
      }, {
        key: "Addkid",
        value: function Addkid(data) {
          var token = localStorage.getItem("token");
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'AddKid' + "/" + token, data);
        }
      }, {
        key: "KidList",
        value: function KidList() {
          var token = localStorage.getItem("token");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'KidList' + "/" + token);
        }
      }, {
        key: "KidData",
        value: function KidData(kidId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'KidData' + "/" + kidId);
        }
      }, {
        key: "connectStudent",
        value: function connectStudent(data) {
          var token = localStorage.getItem("token");
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'connectStudent' + "/" + token, data);
        }
      }, {
        key: "getStudentHomeWork",
        value: function getStudentHomeWork(data) {
          var token = localStorage.getItem("token");
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'getStudentHomeWork' + "/" + token, data);
        }
      }, {
        key: "countQuizPlay",
        value: function countQuizPlay(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'countQuizPlay', data);
        }
      }, {
        key: "studentAnswer",
        value: function studentAnswer(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'studentAnswer', data);
        }
      }, {
        key: "studentAnswerShow",
        value: function studentAnswerShow(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'studentAnswerShow', data);
        }
      }, {
        key: "teacherSearchContent",
        value: function teacherSearchContent(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'teacherSearchContent', data);
        }
      }, {
        key: "countConnectStudent",
        value: function countConnectStudent() {
          var token = localStorage.getItem("token");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'countConnectStudent' + "/" + token);
        }
      }, {
        key: "connectStudentList",
        value: function connectStudentList() {
          var token = localStorage.getItem("token");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'connectStudentList' + "/" + token);
        }
      }, {
        key: "homework",
        value: function homework(data) {
          var token = localStorage.getItem("token");
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'homework' + "/" + token, data);
        }
      }, {
        key: "deleteHomework",
        value: function deleteHomework(Id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'deleteHomework' + "/" + Id);
        }
      }, {
        key: "latestPdf",
        value: function latestPdf() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'latestPdf');
        }
      }, {
        key: "studentPdf",
        value: function studentPdf(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'studentPdf', data);
        }
      }, {
        key: "realtedPdfQuiz",
        value: function realtedPdfQuiz(videoId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'realtedPdfQuiz' + "/" + videoId);
        }
      }, {
        key: "pdfData",
        value: function pdfData(videoId, data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'pdfData' + "/" + videoId, data);
        }
      }, {
        key: "gradePrize",
        value: function gradePrize(prizeid) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'gradePrize' + "/" + prizeid);
        }
      }, {
        key: "terms_condition",
        value: function terms_condition() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'terms_condition');
        }
      }, {
        key: "privacy_policy",
        value: function privacy_policy() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'privacy_policy');
        }
      }, {
        key: "gdpr",
        value: function gdpr() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'gdpr');
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var token = localStorage.getItem("token");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'getUserData' + "/" + token);
        }
      }, {
        key: "updateUser",
        value: function updateUser(data) {
          var token = localStorage.getItem("token");
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'updateUser' + "/" + token, data);
        }
      }, {
        key: "gradePurchase",
        value: function gradePurchase(data) {
          var token = localStorage.getItem("token");
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'gradePurchase' + "/" + token, data);
        }
      }, {
        key: "cancelSubscription",
        value: function cancelSubscription(kidid) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancelSubscription' + "/" + kidid);
        }
      }, {
        key: "teacherPackagePurchase",
        value: function teacherPackagePurchase(data) {
          var token = localStorage.getItem("token");
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'teacherPackagePurchase' + "/" + token, data);
        }
      }, {
        key: "quizStartAdd",
        value: function quizStartAdd() {
          var area_id = localStorage.getItem("area_id");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'quizStartAdd' + "/" + area_id);
        }
      }, {
        key: "quizEndAdd",
        value: function quizEndAdd() {
          var area_id = localStorage.getItem("area_id");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'quizEndAdd' + "/" + area_id);
        }
      }, {
        key: "addParentAdvertisement",
        value: function addParentAdvertisement() {
          var area_id = localStorage.getItem("area_id");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'addParentAdvertisement' + "/" + area_id);
        }
      }, {
        key: "addTeacherAdvertisement",
        value: function addTeacherAdvertisement() {
          var area_id = localStorage.getItem("area_id");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'addTeacherAdvertisement' + "/" + area_id);
        }
      }, {
        key: "searchPageAdd",
        value: function searchPageAdd() {
          var area_id = localStorage.getItem("area_id");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'searchPageAdd' + "/" + area_id);
        }
      }, {
        key: "KidHomework",
        value: function KidHomework() {
          var kid_id = localStorage.getItem("kid_id");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'KidHomework' + "/" + kid_id);
        }
      }, {
        key: "forgot",
        value: function forgot(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'forgetPassword', data);
        }
      }, {
        key: "parentRequestList",
        value: function parentRequestList() {
          var token = localStorage.getItem("token");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'parentRequestList' + "/" + token);
        }
      }, {
        key: "teacherRequestList",
        value: function teacherRequestList() {
          var token = localStorage.getItem("token");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'teacherRequestList' + "/" + token);
        }
      }, {
        key: "kidConnectionStatus",
        value: function kidConnectionStatus(id, data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'kidConnectionStatus' + "/" + id, data);
        }
      }, {
        key: "contentSevenDays",
        value: function contentSevenDays() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'contentSevenDays');
        }
      }, {
        key: "teacherPackageStatus",
        value: function teacherPackageStatus() {
          var token = localStorage.getItem("token");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'teacherPackageStatus' + "/" + token);
        }
      }, {
        key: "parentPackageStatus",
        value: function parentPackageStatus() {
          var token = localStorage.getItem("token");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'parentPackageStatus' + "/" + token);
        }
      }, {
        key: "parentRequestDetail",
        value: function parentRequestDetail(id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'parentRequestDetail' + "/" + id);
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  }
}]);
//# sourceMappingURL=default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2-es5.js.map