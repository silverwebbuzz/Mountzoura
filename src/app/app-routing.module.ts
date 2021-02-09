import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro1',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'kid-list',
    loadChildren: () => import('./videos/kid-list/kid-list.module').then( m => m.KidListPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./videos/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'kid-add',
    loadChildren: () => import('./Kids/kid/kid-add/kid-add.module').then( m => m.KidAddPageModule)
  },
  {
    path: 'kid-added',
    loadChildren: () => import('./Kids/kid/kid-added/kid-added.module').then( m => m.KidAddedPageModule)
  },
  {
    path: 'kid-premium',
    loadChildren: () => import('./Kids/subscribe/kid-premium/kid-premium.module').then( m => m.KidPremiumPageModule)
  },
  {
    path: 'kid-free',
    loadChildren: () => import('./Kids/subscribe/kid-free/kid-free.module').then( m => m.KidFreePageModule)
  },
  {
    path: 'kid-premium-profile',
    loadChildren: () => import('./Kids/profile/kid-premium-profile/kid-premium-profile.module').then( m => m.KidPremiumProfilePageModule)
  },
  {
    path: 'kid-free-profile',
    loadChildren: () => import('./Kids/profile/kid-free-profile/kid-free-profile.module').then( m => m.KidFreeProfilePageModule)
  },
  {
    path: 'kid-new',
    loadChildren: () => import('./Kids/kid/kid-new/kid-new.module').then( m => m.KidNewPageModule)
  },
  {
    path: 'student-add',
    loadChildren: () => import('./Teachers/student/student-add/student-add.module').then( m => m.StudentAddPageModule)
  },
  {
    path: 'student-added',
    loadChildren: () => import('./Teachers/student/student-added/student-added.module').then( m => m.StudentAddedPageModule)
  },
  {
    path: 'id-correct',
    loadChildren: () => import('./Teachers/student-ID/id-correct/id-correct.module').then( m => m.IdCorrectPageModule)
  },
  {
    path: 'id-wrong',
    loadChildren: () => import('./Teachers/student-ID/id-wrong/id-wrong.module').then( m => m.IdWrongPageModule)
  },
  {
    path: 'student-homework',
    loadChildren: () => import('./Teachers/homework/student-homework/student-homework.module').then( m => m.StudentHomeworkPageModule)
  },
  {
    path: 'student-homework-played',
    loadChildren: () => import('./Teachers/homework/student-homework-played/student-homework-played.module').then( m => m.StudentHomeworkPlayedPageModule)
  },
  {
    path: 'student-homework-not',
    loadChildren: () => import('./Teachers/homework/student-homework-not/student-homework-not.module').then( m => m.StudentHomeworkNotPageModule)
  },
  {
    path: 'single-quiz',
    loadChildren: () => import('./Teachers/student-quiz-list/single-quiz/single-quiz.module').then( m => m.SingleQuizPageModule)
  },
  {
    path: 'quiz-correct',
    loadChildren: () => import('./Teachers/student-quiz-list/quiz-correct/quiz-correct.module').then( m => m.QuizCorrectPageModule)
  },
  {
    path: 'quiz-wrong',
    loadChildren: () => import('./Teachers/student-quiz-list/quiz-wrong/quiz-wrong.module').then( m => m.QuizWrongPageModule)
  },
  {
    path: 'intro1',
    loadChildren: () => import('./Users/intros/intro1/intro1.module').then( m => m.Intro1PageModule)
  },
  {
    path: 'intro2',
    loadChildren: () => import('./Users/intros/intro2/intro2.module').then( m => m.Intro2PageModule)
  },
  {
    path: 'intro3',
    loadChildren: () => import('./Users/intros/intro3/intro3.module').then( m => m.Intro3PageModule)
  },
  {
    path: 'register-child',
    loadChildren: () => import('./Users/registers/register-child/register-child.module').then( m => m.RegisterChildPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./Users/forgots/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'forgot-correct',
    loadChildren: () => import('./Users/forgots/forgot-correct/forgot-correct.module').then( m => m.ForgotCorrectPageModule)
  },
  {
    path: 'forgot-wrong',
    loadChildren: () => import('./Users/forgots/forgot-wrong/forgot-wrong.module').then( m => m.ForgotWrongPageModule)
  },
  {
    path: 'teacher-parent',
    loadChildren: () => import('./Users/teacher-parent/teacher-parent.module').then( m => m.TeacherParentPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./Users/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'kids-quiz-list',
    loadChildren: () => import('./Quizzes/quiz-kids/kids-quiz-list/kids-quiz-list.module').then( m => m.KidsQuizListPageModule)
  },
  {
    path: 'quiz-single',
    loadChildren: () => import('./Quizzes/quiz-kids/quiz-single/quiz-single.module').then( m => m.QuizSinglePageModule)
  },
  {
    path: 'quiz-play',
    loadChildren: () => import('./Quizzes/quiz-kids/quiz-play/quiz-play.module').then( m => m.QuizPlayPageModule)
  },
  {
    path: 'quiz-result',
    loadChildren: () => import('./Quizzes/quiz-kids/quiz-result/quiz-result.module').then( m => m.QuizResultPageModule)
  },
  {
    path: 'teachers-quiz-list',
    loadChildren: () => import('./Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.module').then( m => m.TeachersQuizListPageModule)
  },
  {
    path: 'quiz-search',
    loadChildren: () => import('./Quizzes/quiz-search/quiz-search.module').then( m => m.QuizSearchPageModule)
  },
  {
    path: 'quiz-premium',
    loadChildren: () => import('./Quizzes/quiz-premium/quiz-premium.module').then( m => m.QuizPremiumPageModule)
  },
  {
    path: 'register-teacher',
    loadChildren: () => import('./Users/registers/register-teacher/register-teacher.module').then( m => m.RegisterTeacherPageModule)
  },
  {
    path: 'quiz-ans-wrong',
    loadChildren: () => import('./Quizzes/quiz-kids/quiz-ans/quiz-ans-wrong/quiz-ans-wrong.module').then( m => m.QuizAnsWrongPageModule)
  },
  {
    path: 'quiz-ans-correct',
    loadChildren: () => import('./Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.module').then( m => m.QuizAnsCorrectPageModule)
  },
  {
    path: 'home-teacher',
    loadChildren: () => import('./home/home-teacher/home-teacher.module').then( m => m.HomeTeacherPageModule)
  },
  {
    path: 'home-kid',
    loadChildren: () => import('./Home/home-kid/home-kid.module').then( m => m.HomeKidPageModule)
  },
  {
    path: 'teacher-premium',
    loadChildren: () => import('./Home/teacher-premium/teacher-premium.module').then( m => m.TeacherPremiumPageModule)
  },
  {
    path: 'pdf-kids-list',
    loadChildren: () => import('./Pdfs/pdf-kids-list/pdf-kids-list.module').then( m => m.PdfKidsListPageModule)
  },
  {
    path: 'pdf',
    loadChildren: () => import('./Pdfs/pdf/pdf.module').then( m => m.PdfPageModule)
  },
  {
    path: 'video-search',
    loadChildren: () => import('./videos/video-search/video-search.module').then( m => m.VideoSearchPageModule)
  },
  {
    path: 'pdf-search',
    loadChildren: () => import('./Pdfs/pdf-search/pdf-search.module').then( m => m.PdfSearchPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./Users/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./Users/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'gdpr-policy',
    loadChildren: () => import('./Users/gdpr-policy/gdpr-policy.module').then( m => m.GdprPolicyPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Users/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'kid-homework',
    loadChildren: () => import('./Quizzes/kid-homework/kid-homework.module').then( m => m.KidHomeworkPageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./Users/requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./Users/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'requests-child',
    loadChildren: () => import('./Users/requests-child/requests-child.module').then( m => m.RequestsChildPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
