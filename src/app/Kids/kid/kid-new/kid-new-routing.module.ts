import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidNewPage } from './kid-new.page';

const routes: Routes = [
  {
    path: '',
    component: KidNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidNewPageRoutingModule {}
