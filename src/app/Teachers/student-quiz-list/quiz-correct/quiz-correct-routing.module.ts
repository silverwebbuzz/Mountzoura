import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizCorrectPage } from './quiz-correct.page';

const routes: Routes = [
  {
    path: '',
    component: QuizCorrectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizCorrectPageRoutingModule {}
