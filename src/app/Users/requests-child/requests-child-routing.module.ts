import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestsChildPage } from './requests-child.page';

const routes: Routes = [
  {
    path: '',
    component: RequestsChildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestsChildPageRoutingModule {}
