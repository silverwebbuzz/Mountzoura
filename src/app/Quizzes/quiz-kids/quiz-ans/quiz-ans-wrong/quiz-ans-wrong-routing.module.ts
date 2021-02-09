import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizAnsWrongPage } from './quiz-ans-wrong.page';

const routes: Routes = [
  {
    path: '',
    component: QuizAnsWrongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizAnsWrongPageRoutingModule {}
