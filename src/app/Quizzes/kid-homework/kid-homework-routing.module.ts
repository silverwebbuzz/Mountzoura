import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidHomeworkPage } from './kid-homework.page';

const routes: Routes = [
  {
    path: '',
    component: KidHomeworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidHomeworkPageRoutingModule {}
