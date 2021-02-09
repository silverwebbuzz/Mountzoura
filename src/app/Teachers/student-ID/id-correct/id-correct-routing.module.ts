import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdCorrectPage } from './id-correct.page';

const routes: Routes = [
  {
    path: '',
    component: IdCorrectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdCorrectPageRoutingModule {}
