import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotWrongPage } from './forgot-wrong.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotWrongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotWrongPageRoutingModule {}
