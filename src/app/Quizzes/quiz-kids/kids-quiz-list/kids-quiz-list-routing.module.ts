import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidsQuizListPage } from './kids-quiz-list.page';

const routes: Routes = [
  {
    path: '',
    component: KidsQuizListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidsQuizListPageRoutingModule {}
