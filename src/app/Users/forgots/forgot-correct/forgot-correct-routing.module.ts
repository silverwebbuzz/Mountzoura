import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotCorrectPage } from './forgot-correct.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotCorrectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotCorrectPageRoutingModule {}
