import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersQuizListPage } from './teachers-quiz-list.page';

const routes: Routes = [
  {
    path: '',
    component: TeachersQuizListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersQuizListPageRoutingModule {}
