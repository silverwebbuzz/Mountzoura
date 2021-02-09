import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizWrongPage } from './quiz-wrong.page';

const routes: Routes = [
  {
    path: '',
    component: QuizWrongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizWrongPageRoutingModule {}
