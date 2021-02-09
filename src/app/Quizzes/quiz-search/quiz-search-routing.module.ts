import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizSearchPage } from './quiz-search.page';

const routes: Routes = [
  {
    path: '',
    component: QuizSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizSearchPageRoutingModule {}
