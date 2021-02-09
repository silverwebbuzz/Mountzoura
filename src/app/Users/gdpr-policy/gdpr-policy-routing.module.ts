import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GdprPolicyPage } from './gdpr-policy.page';

const routes: Routes = [
  {
    path: '',
    component: GdprPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GdprPolicyPageRoutingModule {}
