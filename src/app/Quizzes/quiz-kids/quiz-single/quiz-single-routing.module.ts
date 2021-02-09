import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizSinglePage } from './quiz-single.page';

const routes: Routes = [
  {
    path: '',
    component: QuizSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizSinglePageRoutingModule {}
