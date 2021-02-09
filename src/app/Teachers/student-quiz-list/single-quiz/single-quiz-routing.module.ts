import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleQuizPage } from './single-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: SingleQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleQuizPageRoutingModule {}
