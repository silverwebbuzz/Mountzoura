(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\" class=\"tab_bar\">\n    \n      <ion-tab-button tab=\"home\" *ngIf=\"roll == '2'\">\n        <img src=\"../../assets/images/buildings.png\" class=\"tab_icons\"/>\n        <ion-label class=\"tab_lbl\">{{'tabs.home' | translate}}</ion-label>\n      </ion-tab-button>\n     \n      <ion-tab-button tab=\"home-teacher\" *ngIf=\"roll == '4'\">\n        <img src=\"../../assets/images/buildings.png\" class=\"tab_icons\"/>\n        <ion-label class=\"tab_lbl\">{{'tabs.home' | translate}}</ion-label>\n      </ion-tab-button>\n\n    <ion-tab-button tab=\"kid-added\" *ngIf=\"roll == '2'\">\n      <!-- <ion-icon name=\"home\"></ion-icon> -->\n      <img src=\"../../assets/images/boy.png\" class=\"tab_icons\"/>\n      <ion-label class=\"tab_lbl\">{{'tabs.kids' | translate}}</ion-label>\n    </ion-tab-button>\n  \n    <ion-tab-button tab=\"student-added\" *ngIf=\"roll == '4'\">\n      <!-- <ion-icon name=\"home\"></ion-icon> -->\n      <img src=\"../../assets/images/boy.png\" class=\"tab_icons\"/>\n      <ion-label class=\"tab_lbl\">{{'tabs.students' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"kids-quiz-list\" *ngIf=\"roll == '2'\">\n      <img src=\"../../assets/images/fit.png\" class=\"tab_icons\"/>\n      <ion-label class=\"tab_lbl\">{{'tabs.quizzes' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"teachers-quiz-list\" *ngIf=\"roll == '4'\">\n      <img src=\"../../assets/images/fit.png\" class=\"tab_icons\"/>\n      <ion-label class=\"tab_lbl\">{{'tabs.quizzes' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"videos\">\n      <img src=\"../../assets/images/logotype.png\" class=\"tab_icons\"/>\n      <ion-label class=\"tab_lbl\">{{'tabs.video' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"pdfs\">\n      <img src=\"../../assets/images/business-and-finance.png\" class=\"tab_icons\"/>\n      <ion-label class=\"tab_lbl\">{{'tabs.pdf' | translate}}</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n  <app-kids-quiz-list></app-kids-quiz-list>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | Home-home-kid-home-kid-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Home-home-kid-home-kid-module")]).then(__webpack_require__.bind(null, /*! ../Home/home-kid/home-kid.module */ "./src/app/Home/home-kid/home-kid.module.ts")).then(m => m.HomeKidPageModule)
            },
            {
                path: 'home-teacher',
                loadChildren: () => Promise.all(/*! import() | home-home-teacher-home-teacher-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("home-home-teacher-home-teacher-module")]).then(__webpack_require__.bind(null, /*! ../home/home-teacher/home-teacher.module */ "./src/app/home/home-teacher/home-teacher.module.ts")).then(m => m.HomeTeacherPageModule)
            },
            {
                path: 'teacher-premium',
                loadChildren: () => Promise.all(/*! import() | Home-teacher-premium-teacher-premium-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Home-teacher-premium-teacher-premium-module")]).then(__webpack_require__.bind(null, /*! ../Home/teacher-premium/teacher-premium.module */ "./src/app/Home/teacher-premium/teacher-premium.module.ts")).then(m => m.TeacherPremiumPageModule)
            },
            {
                path: 'studentORKids',
                loadChildren: () => __webpack_require__.e(/*! import() | Kids-kid-kid-add-kid-add-module */ "Kids-kid-kid-add-kid-add-module").then(__webpack_require__.bind(null, /*! ../Kids/kid/kid-add/kid-add.module */ "./src/app/Kids/kid/kid-add/kid-add.module.ts")).then(m => m.KidAddPageModule)
            },
            {
                path: 'kid-add',
                loadChildren: () => __webpack_require__.e(/*! import() | Kids-kid-kid-add-kid-add-module */ "Kids-kid-kid-add-kid-add-module").then(__webpack_require__.bind(null, /*! ../Kids/kid/kid-add/kid-add.module */ "./src/app/Kids/kid/kid-add/kid-add.module.ts")).then(m => m.KidAddPageModule)
            },
            {
                path: 'kid-added',
                loadChildren: () => Promise.all(/*! import() | Kids-kid-kid-added-kid-added-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("common"), __webpack_require__.e("Kids-kid-kid-added-kid-added-module")]).then(__webpack_require__.bind(null, /*! ../Kids/kid/kid-added/kid-added.module */ "./src/app/Kids/kid/kid-added/kid-added.module.ts")).then(m => m.KidAddedPageModule)
            },
            {
                path: 'kid-new',
                loadChildren: () => Promise.all(/*! import() | Kids-kid-kid-new-kid-new-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Kids-kid-kid-new-kid-new-module")]).then(__webpack_require__.bind(null, /*! ../Kids/kid/kid-new/kid-new.module */ "./src/app/Kids/kid/kid-new/kid-new.module.ts")).then(m => m.KidNewPageModule)
            },
            {
                path: 'kid-premium',
                loadChildren: () => __webpack_require__.e(/*! import() | Kids-subscribe-kid-premium-kid-premium-module */ "Kids-subscribe-kid-premium-kid-premium-module").then(__webpack_require__.bind(null, /*! ../Kids/subscribe/kid-premium/kid-premium.module */ "./src/app/Kids/subscribe/kid-premium/kid-premium.module.ts")).then(m => m.KidPremiumPageModule)
            },
            {
                path: 'kid-free',
                loadChildren: () => Promise.all(/*! import() | Kids-subscribe-kid-free-kid-free-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Kids-subscribe-kid-free-kid-free-module")]).then(__webpack_require__.bind(null, /*! ../Kids/subscribe/kid-free/kid-free.module */ "./src/app/Kids/subscribe/kid-free/kid-free.module.ts")).then(m => m.KidFreePageModule)
            },
            {
                path: 'kid-premium-profile',
                loadChildren: () => Promise.all(/*! import() | Kids-profile-kid-premium-profile-kid-premium-profile-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Kids-profile-kid-premium-profile-kid-premium-profile-module")]).then(__webpack_require__.bind(null, /*! ../Kids/profile/kid-premium-profile/kid-premium-profile.module */ "./src/app/Kids/profile/kid-premium-profile/kid-premium-profile.module.ts")).then(m => m.KidPremiumProfilePageModule)
            },
            {
                path: 'kid-free-profile',
                loadChildren: () => Promise.all(/*! import() | Kids-profile-kid-free-profile-kid-free-profile-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Kids-profile-kid-free-profile-kid-free-profile-module")]).then(__webpack_require__.bind(null, /*! ../Kids/profile/kid-free-profile/kid-free-profile.module */ "./src/app/Kids/profile/kid-free-profile/kid-free-profile.module.ts")).then(m => m.KidFreeProfilePageModule)
            },
            {
                path: 'student-add',
                loadChildren: () => Promise.all(/*! import() | Teachers-student-student-add-student-add-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Teachers-student-student-add-student-add-module")]).then(__webpack_require__.bind(null, /*! ../Teachers/student/student-add/student-add.module */ "./src/app/Teachers/student/student-add/student-add.module.ts")).then(m => m.StudentAddPageModule)
            },
            {
                path: 'student-added',
                loadChildren: () => Promise.all(/*! import() | Teachers-student-student-added-student-added-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("common"), __webpack_require__.e("Teachers-student-student-added-student-added-module")]).then(__webpack_require__.bind(null, /*! ../Teachers/student/student-added/student-added.module */ "./src/app/Teachers/student/student-added/student-added.module.ts")).then(m => m.StudentAddedPageModule)
            },
            {
                path: 'id-correct',
                loadChildren: () => __webpack_require__.e(/*! import() | Teachers-student-ID-id-correct-id-correct-module */ "Teachers-student-ID-id-correct-id-correct-module").then(__webpack_require__.bind(null, /*! ../Teachers/student-ID/id-correct/id-correct.module */ "./src/app/Teachers/student-ID/id-correct/id-correct.module.ts")).then(m => m.IdCorrectPageModule)
            },
            {
                path: 'id-wrong',
                loadChildren: () => Promise.all(/*! import() | Teachers-student-ID-id-wrong-id-wrong-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Teachers-student-ID-id-wrong-id-wrong-module")]).then(__webpack_require__.bind(null, /*! ../Teachers/student-ID/id-wrong/id-wrong.module */ "./src/app/Teachers/student-ID/id-wrong/id-wrong.module.ts")).then(m => m.IdWrongPageModule)
            },
            {
                path: 'student-homework',
                loadChildren: () => Promise.all(/*! import() | Teachers-homework-student-homework-student-homework-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Teachers-homework-student-homework-student-homework-module")]).then(__webpack_require__.bind(null, /*! ../Teachers/homework/student-homework/student-homework.module */ "./src/app/Teachers/homework/student-homework/student-homework.module.ts")).then(m => m.StudentHomeworkPageModule)
            },
            {
                path: 'student-homework-played',
                loadChildren: () => Promise.all(/*! import() | Teachers-homework-student-homework-played-student-homework-played-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Teachers-homework-student-homework-played-student-homework-played-module")]).then(__webpack_require__.bind(null, /*! ../Teachers/homework/student-homework-played/student-homework-played.module */ "./src/app/Teachers/homework/student-homework-played/student-homework-played.module.ts")).then(m => m.StudentHomeworkPlayedPageModule)
            },
            {
                path: 'student-homework-not',
                loadChildren: () => Promise.all(/*! import() | Teachers-homework-student-homework-not-student-homework-not-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Teachers-homework-student-homework-not-student-homework-not-module")]).then(__webpack_require__.bind(null, /*! ../Teachers/homework/student-homework-not/student-homework-not.module */ "./src/app/Teachers/homework/student-homework-not/student-homework-not.module.ts")).then(m => m.StudentHomeworkNotPageModule)
            },
            {
                path: 'single-quiz',
                loadChildren: () => Promise.all(/*! import() | Teachers-student-quiz-list-single-quiz-single-quiz-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Teachers-student-quiz-list-single-quiz-single-quiz-module")]).then(__webpack_require__.bind(null, /*! ../Teachers/student-quiz-list/single-quiz/single-quiz.module */ "./src/app/Teachers/student-quiz-list/single-quiz/single-quiz.module.ts")).then(m => m.SingleQuizPageModule)
            },
            {
                path: 'quiz-correct',
                loadChildren: () => Promise.all(/*! import() | Teachers-student-quiz-list-quiz-correct-quiz-correct-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Teachers-student-quiz-list-quiz-correct-quiz-correct-module")]).then(__webpack_require__.bind(null, /*! ../Teachers/student-quiz-list/quiz-correct/quiz-correct.module */ "./src/app/Teachers/student-quiz-list/quiz-correct/quiz-correct.module.ts")).then(m => m.QuizCorrectPageModule)
            },
            {
                path: 'quiz-wrong',
                loadChildren: () => Promise.all(/*! import() | Teachers-student-quiz-list-quiz-wrong-quiz-wrong-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Teachers-student-quiz-list-quiz-wrong-quiz-wrong-module")]).then(__webpack_require__.bind(null, /*! ../Teachers/student-quiz-list/quiz-wrong/quiz-wrong.module */ "./src/app/Teachers/student-quiz-list/quiz-wrong/quiz-wrong.module.ts")).then(m => m.QuizWrongPageModule)
            },
            // {
            //   path: 'quiz',
            //   loadChildren: '../Quizzes/quiz-kids/kids-quiz-list/kids-quiz-list.module#KidsQuizListPageModule'
            // },
            {
                path: 'kids-quiz-list',
                loadChildren: () => Promise.all(/*! import() | Quizzes-quiz-kids-kids-quiz-list-kids-quiz-list-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("default~Pdfs-pdf-kids-list-pdf-kids-list-module~Pdfs-pdf-search-pdf-search-module~Quizzes-kid-homewo~8c33cf76"), __webpack_require__.e("Quizzes-quiz-kids-kids-quiz-list-kids-quiz-list-module")]).then(__webpack_require__.bind(null, /*! ../Quizzes/quiz-kids/kids-quiz-list/kids-quiz-list.module */ "./src/app/Quizzes/quiz-kids/kids-quiz-list/kids-quiz-list.module.ts")).then(m => m.KidsQuizListPageModule)
            },
            {
                path: 'quiz-single',
                loadChildren: () => Promise.all(/*! import() | Quizzes-quiz-kids-quiz-single-quiz-single-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Quizzes-quiz-kids-quiz-single-quiz-single-module")]).then(__webpack_require__.bind(null, /*! ../Quizzes/quiz-kids/quiz-single/quiz-single.module */ "./src/app/Quizzes/quiz-kids/quiz-single/quiz-single.module.ts")).then(m => m.QuizSinglePageModule)
            },
            {
                path: 'quiz-play',
                loadChildren: () => Promise.all(/*! import() | Quizzes-quiz-kids-quiz-play-quiz-play-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Quizzes-quiz-kids-quiz-play-quiz-play-module")]).then(__webpack_require__.bind(null, /*! ../Quizzes/quiz-kids/quiz-play/quiz-play.module */ "./src/app/Quizzes/quiz-kids/quiz-play/quiz-play.module.ts")).then(m => m.QuizPlayPageModule)
            },
            {
                path: 'quiz-ans-wrong',
                loadChildren: () => Promise.all(/*! import() | Quizzes-quiz-kids-quiz-ans-quiz-ans-wrong-quiz-ans-wrong-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Quizzes-quiz-kids-quiz-ans-quiz-ans-wrong-quiz-ans-wrong-module")]).then(__webpack_require__.bind(null, /*! ../Quizzes/quiz-kids/quiz-ans/quiz-ans-wrong/quiz-ans-wrong.module */ "./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-wrong/quiz-ans-wrong.module.ts")).then(m => m.QuizAnsWrongPageModule)
            },
            {
                path: 'quiz-ans-correct',
                loadChildren: () => Promise.all(/*! import() | Quizzes-quiz-kids-quiz-ans-quiz-ans-correct-quiz-ans-correct-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Quizzes-quiz-kids-quiz-ans-quiz-ans-correct-quiz-ans-correct-module")]).then(__webpack_require__.bind(null, /*! ../Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.module */ "./src/app/Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.module.ts")).then(m => m.QuizAnsCorrectPageModule)
            },
            {
                path: 'quiz-result',
                loadChildren: () => Promise.all(/*! import() | Quizzes-quiz-kids-quiz-result-quiz-result-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Quizzes-quiz-kids-quiz-result-quiz-result-module")]).then(__webpack_require__.bind(null, /*! ../Quizzes/quiz-kids/quiz-result/quiz-result.module */ "./src/app/Quizzes/quiz-kids/quiz-result/quiz-result.module.ts")).then(m => m.QuizResultPageModule)
            },
            {
                path: 'teachers-quiz-list',
                loadChildren: () => Promise.all(/*! import() | Quizzes-quiz-teachers-teachers-quiz-list-teachers-quiz-list-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("default~Pdfs-pdf-kids-list-pdf-kids-list-module~Pdfs-pdf-search-pdf-search-module~Quizzes-kid-homewo~8c33cf76"), __webpack_require__.e("Quizzes-quiz-teachers-teachers-quiz-list-teachers-quiz-list-module")]).then(__webpack_require__.bind(null, /*! ../Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.module */ "./src/app/Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.module.ts")).then(m => m.TeachersQuizListPageModule)
            },
            {
                path: 'quiz-search',
                loadChildren: () => Promise.all(/*! import() | Quizzes-quiz-search-quiz-search-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("default~Pdfs-pdf-kids-list-pdf-kids-list-module~Pdfs-pdf-search-pdf-search-module~Quizzes-kid-homewo~8c33cf76"), __webpack_require__.e("Quizzes-quiz-search-quiz-search-module")]).then(__webpack_require__.bind(null, /*! ../Quizzes/quiz-search/quiz-search.module */ "./src/app/Quizzes/quiz-search/quiz-search.module.ts")).then(m => m.QuizSearchPageModule)
            },
            {
                path: 'quiz-premium',
                loadChildren: () => Promise.all(/*! import() | Quizzes-quiz-premium-quiz-premium-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Quizzes-quiz-premium-quiz-premium-module")]).then(__webpack_require__.bind(null, /*! ../Quizzes/quiz-premium/quiz-premium.module */ "./src/app/Quizzes/quiz-premium/quiz-premium.module.ts")).then(m => m.QuizPremiumPageModule)
            },
            {
                path: 'kid-homework',
                loadChildren: () => Promise.all(/*! import() | Quizzes-kid-homework-kid-homework-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("default~Pdfs-pdf-kids-list-pdf-kids-list-module~Pdfs-pdf-search-pdf-search-module~Quizzes-kid-homewo~8c33cf76"), __webpack_require__.e("Quizzes-kid-homework-kid-homework-module")]).then(__webpack_require__.bind(null, /*! ../Quizzes/kid-homework/kid-homework.module */ "./src/app/Quizzes/kid-homework/kid-homework.module.ts")).then(m => m.KidHomeworkPageModule)
            },
            {
                path: 'videos',
                loadChildren: () => Promise.all(/*! import() | videos-kid-list-kid-list-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("default~Pdfs-pdf-kids-list-pdf-kids-list-module~Pdfs-pdf-search-pdf-search-module~Quizzes-kid-homewo~8c33cf76"), __webpack_require__.e("videos-kid-list-kid-list-module")]).then(__webpack_require__.bind(null, /*! ../videos/kid-list/kid-list.module */ "./src/app/videos/kid-list/kid-list.module.ts")).then(m => m.KidListPageModule)
            },
            {
                path: 'video-search',
                loadChildren: () => Promise.all(/*! import() | videos-video-search-video-search-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("default~Pdfs-pdf-kids-list-pdf-kids-list-module~Pdfs-pdf-search-pdf-search-module~Quizzes-kid-homewo~8c33cf76"), __webpack_require__.e("videos-video-search-video-search-module")]).then(__webpack_require__.bind(null, /*! ../videos/video-search/video-search.module */ "./src/app/videos/video-search/video-search.module.ts")).then(m => m.VideoSearchPageModule)
            },
            {
                path: 'video',
                loadChildren: () => Promise.all(/*! import() | videos-video-video-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("videos-video-video-module")]).then(__webpack_require__.bind(null, /*! ../videos/video/video.module */ "./src/app/videos/video/video.module.ts")).then(m => m.VideoPageModule)
            },
            {
                path: 'pdfs',
                loadChildren: () => Promise.all(/*! import() | Pdfs-pdf-kids-list-pdf-kids-list-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("default~Pdfs-pdf-kids-list-pdf-kids-list-module~Pdfs-pdf-search-pdf-search-module~Quizzes-kid-homewo~8c33cf76"), __webpack_require__.e("Pdfs-pdf-kids-list-pdf-kids-list-module")]).then(__webpack_require__.bind(null, /*! ../Pdfs/pdf-kids-list/pdf-kids-list.module */ "./src/app/Pdfs/pdf-kids-list/pdf-kids-list.module.ts")).then(m => m.PdfKidsListPageModule)
            },
            {
                path: 'pdf',
                loadChildren: () => Promise.all(/*! import() | Pdfs-pdf-pdf-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Pdfs-pdf-pdf-module")]).then(__webpack_require__.bind(null, /*! ../Pdfs/pdf/pdf.module */ "./src/app/Pdfs/pdf/pdf.module.ts")).then(m => m.PdfPageModule)
            },
            {
                path: 'pdf-search',
                loadChildren: () => Promise.all(/*! import() | Pdfs-pdf-search-pdf-search-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("default~Pdfs-pdf-kids-list-pdf-kids-list-module~Pdfs-pdf-search-pdf-search-module~Quizzes-kid-homewo~8c33cf76"), __webpack_require__.e("Pdfs-pdf-search-pdf-search-module")]).then(__webpack_require__.bind(null, /*! ../Pdfs/pdf-search/pdf-search.module */ "./src/app/Pdfs/pdf-search/pdf-search.module.ts")).then(m => m.PdfSearchPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => Promise.all(/*! import() | Users-settings-settings-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Users-settings-settings-module")]).then(__webpack_require__.bind(null, /*! ../Users/settings/settings.module */ "./src/app/Users/settings/settings.module.ts")).then(m => m.SettingsPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | Users-profile-profile-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Users-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../Users/profile/profile.module */ "./src/app/Users/profile/profile.module.ts")).then(m => m.ProfilePageModule)
            },
            {
                path: 'requests',
                loadChildren: () => Promise.all(/*! import() | Users-requests-requests-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Users-requests-requests-module")]).then(__webpack_require__.bind(null, /*! ../Users/requests/requests.module */ "./src/app/Users/requests/requests.module.ts")).then(m => m.RequestsPageModule)
            },
            {
                path: 'requests-child',
                loadChildren: () => Promise.all(/*! import() | Users-requests-child-requests-child-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Users-requests-child-requests-child-module")]).then(__webpack_require__.bind(null, /*! ../Users/requests-child/requests-child.module */ "./src/app/Users/requests-child/requests-child.module.ts")).then(m => m.RequestsChildPageModule)
            },
            {
                path: 'notifications',
                loadChildren: () => Promise.all(/*! import() | Users-notifications-notifications-module */[__webpack_require__.e("default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2"), __webpack_require__.e("Users-notifications-notifications-module")]).then(__webpack_require__.bind(null, /*! ../Users/notifications/notifications.module */ "./src/app/Users/notifications/notifications.module.ts")).then(m => m.NotificationsPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tab_bar {\n  --background: var(--ion-color-primary);\n  height: 56px;\n}\n.tab_bar .tab_icons {\n  height: 22px;\n}\n.tab_bar .tab_lbl {\n  padding-top: 6px;\n  font-size: 10px;\n  font-weight: bold;\n  color: var(--ion-color-secondary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtBQ0NSO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYl9iYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIFxuICAgIC50YWJfaWNvbnN7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICB9XG4gICAgLnRhYl9sYmx7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICB9XG59IiwiLnRhYl9iYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuLnRhYl9iYXIgLnRhYl9pY29ucyB7XG4gIGhlaWdodDogMjJweDtcbn1cbi50YWJfYmFyIC50YWJfbGJsIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");



let TabsPage = class TabsPage {
    constructor(statusBar) {
        this.statusBar = statusBar;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.roll = localStorage.getItem("role_id");
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFFFFF');
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map