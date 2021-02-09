import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidAddPage } from './kid-add.page';

const routes: Routes = [
  {
    path: '',
    component: KidAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidAddPageRoutingModule {}
