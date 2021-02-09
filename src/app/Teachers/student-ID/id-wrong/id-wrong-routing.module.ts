import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdWrongPage } from './id-wrong.page';

const routes: Routes = [
  {
    path: '',
    component: IdWrongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdWrongPageRoutingModule {}
