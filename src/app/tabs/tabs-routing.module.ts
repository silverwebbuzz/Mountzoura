import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../Home/home-kid/home-kid.module').then( m => m.HomeKidPageModule)
      },
      {
        path: 'home-teacher',
        loadChildren: () => import('../home/home-teacher/home-teacher.module').then( m => m.HomeTeacherPageModule)
      },
      {
        path: 'teacher-premium',
        loadChildren: () => import('../Home/teacher-premium/teacher-premium.module').then( m => m.TeacherPremiumPageModule)
      },
      {
        path: 'studentORKids',
        loadChildren: () => import('../Kids/kid/kid-add/kid-add.module').then( m => m.KidAddPageModule)
      },
      {
        path: 'kid-add',
        loadChildren: () => import('../Kids/kid/kid-add/kid-add.module').then( m => m.KidAddPageModule)
      },
      {
        path: 'kid-added',
        loadChildren: () => import('../Kids/kid/kid-added/kid-added.module').then( m => m.KidAddedPageModule)
      },
      {
        path: 'kid-new',
        loadChildren: () => import('../Kids/kid/kid-new/kid-new.module').then( m => m.KidNewPageModule)
      },
      {
        path: 'kid-premium',
        loadChildren: () => import('../Kids/subscribe/kid-premium/kid-premium.module').then( m => m.KidPremiumPageModule)
      },
      {
        path: 'kid-free',
        loadChildren: () => import('../Kids/subscribe/kid-free/kid-free.module').then( m => m.KidFreePageModule)
      },
      {
        path: 'kid-premium-profile',
        loadChildren: () => import('../Kids/profile/kid-premium-profile/kid-premium-profile.module').then( m => m.KidPremiumProfilePageModule)
      },
      {
        path: 'kid-free-profile',
        loadChildren: () => import('../Kids/profile/kid-free-profile/kid-free-profile.module').then( m => m.KidFreeProfilePageModule)
      },
      {
        path: 'student-add',
        loadChildren: () => import('../Teachers/student/student-add/student-add.module').then( m => m.StudentAddPageModule)
      },
      {
        path: 'student-added',
        loadChildren: () => import('../Teachers/student/student-added/student-added.module').then( m => m.StudentAddedPageModule)
      },
      {
        path: 'id-correct',
        loadChildren: () => import('../Teachers/student-ID/id-correct/id-correct.module').then( m => m.IdCorrectPageModule)
      },
      {
        path: 'id-wrong',
        loadChildren: () => import('../Teachers/student-ID/id-wrong/id-wrong.module').then( m => m.IdWrongPageModule)
      },
      {
        path: 'student-homework',
        loadChildren: () => import('../Teachers/homework/student-homework/student-homework.module').then( m => m.StudentHomeworkPageModule)
      },
      {
        path: 'student-homework-played',
        loadChildren: () => import('../Teachers/homework/student-homework-played/student-homework-played.module').then( m => m.StudentHomeworkPlayedPageModule)
      },
      {
        path: 'student-homework-not',
        loadChildren: () => import('../Teachers/homework/student-homework-not/student-homework-not.module').then( m => m.StudentHomeworkNotPageModule)
      },
      {
        path: 'single-quiz',
        loadChildren: () => import('../Teachers/student-quiz-list/single-quiz/single-quiz.module').then( m => m.SingleQuizPageModule)
      },
      {
        path: 'quiz-correct',
        loadChildren: () => import('../Teachers/student-quiz-list/quiz-correct/quiz-correct.module').then( m => m.QuizCorrectPageModule)
      },
      {
        path: 'quiz-wrong',
        loadChildren: () => import('../Teachers/student-quiz-list/quiz-wrong/quiz-wrong.module').then( m => m.QuizWrongPageModule)
      },
      // {
      //   path: 'quiz',
      //   loadChildren: '../Quizzes/quiz-kids/kids-quiz-list/kids-quiz-list.module#KidsQuizListPageModule'
      // },
      {
        path: 'kids-quiz-list',
        loadChildren: () => import('../Quizzes/quiz-kids/kids-quiz-list/kids-quiz-list.module').then( m => m.KidsQuizListPageModule)
      },
      {
        path: 'quiz-single',
        loadChildren: () => import('../Quizzes/quiz-kids/quiz-single/quiz-single.module').then( m => m.QuizSinglePageModule)
      },
      {
        path: 'quiz-play',
        loadChildren: () => import('../Quizzes/quiz-kids/quiz-play/quiz-play.module').then( m => m.QuizPlayPageModule)
      },
      {
        path: 'quiz-ans-wrong',
        loadChildren: () => import('../Quizzes/quiz-kids/quiz-ans/quiz-ans-wrong/quiz-ans-wrong.module').then( m => m.QuizAnsWrongPageModule)
      },
      {
        path: 'quiz-ans-correct',
        loadChildren: () => import('../Quizzes/quiz-kids/quiz-ans/quiz-ans-correct/quiz-ans-correct.module').then( m => m.QuizAnsCorrectPageModule)
      },
      {
        path: 'quiz-result',
        loadChildren: () => import('../Quizzes/quiz-kids/quiz-result/quiz-result.module').then( m => m.QuizResultPageModule)
      },
      {
        path: 'teachers-quiz-list',
        loadChildren: () => import('../Quizzes/quiz-teachers/teachers-quiz-list/teachers-quiz-list.module').then( m => m.TeachersQuizListPageModule)
      },
      {
        path: 'quiz-search',
        loadChildren: () => import('../Quizzes/quiz-search/quiz-search.module').then( m => m.QuizSearchPageModule)
      },
      {
        path: 'quiz-premium',
        loadChildren: () => import('../Quizzes/quiz-premium/quiz-premium.module').then( m => m.QuizPremiumPageModule)
      },
      {
        path: 'kid-homework',
        loadChildren: () => import('../Quizzes/kid-homework/kid-homework.module').then( m => m.KidHomeworkPageModule)
      },
      {
        path: 'videos',
        loadChildren: () => import('../videos/kid-list/kid-list.module').then( m => m.KidListPageModule)
      },
      {
        path: 'video-search',
        loadChildren: () => import('../videos/video-search/video-search.module').then( m => m.VideoSearchPageModule)
      },
      {
        path: 'video',
        loadChildren: () => import('../videos/video/video.module').then( m => m.VideoPageModule)
      },
      {
        path: 'pdfs',
        loadChildren: () => import('../Pdfs/pdf-kids-list/pdf-kids-list.module').then( m => m.PdfKidsListPageModule)
      },
      {
        path: 'pdf',
        loadChildren: () => import('../Pdfs/pdf/pdf.module').then( m => m.PdfPageModule)
      },
      {
        path: 'pdf-search',
        loadChildren: () => import('../Pdfs/pdf-search/pdf-search.module').then( m => m.PdfSearchPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../Users/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../Users/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'requests',
        loadChildren: () => import('../Users/requests/requests.module').then( m => m.RequestsPageModule)
      },
      {
        path: 'requests-child',
        loadChildren: () => import('../Users/requests-child/requests-child.module').then( m => m.RequestsChildPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../Users/notifications/notifications.module').then( m => m.NotificationsPageModule)
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
