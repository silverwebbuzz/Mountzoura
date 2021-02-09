import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidAddedPage } from './kid-added.page';

const routes: Routes = [
  {
    path: '',
    component: KidAddedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidAddedPageRoutingModule {}
