import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizAnsCorrectPage } from './quiz-ans-correct.page';

const routes: Routes = [
  {
    path: '',
    component: QuizAnsCorrectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizAnsCorrectPageRoutingModule {}
