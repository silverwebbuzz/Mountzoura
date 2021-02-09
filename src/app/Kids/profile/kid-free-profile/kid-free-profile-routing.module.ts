import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidFreeProfilePage } from './kid-free-profile.page';

const routes: Routes = [
  {
    path: '',
    component: KidFreeProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidFreeProfilePageRoutingModule {}
