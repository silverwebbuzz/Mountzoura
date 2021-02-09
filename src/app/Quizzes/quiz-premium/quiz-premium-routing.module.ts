import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizPremiumPage } from './quiz-premium.page';

const routes: Routes = [
  {
    path: '',
    component: QuizPremiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizPremiumPageRoutingModule {}
