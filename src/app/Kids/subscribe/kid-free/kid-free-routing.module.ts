import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidFreePage } from './kid-free.page';

const routes: Routes = [
  {
    path: '',
    component: KidFreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidFreePageRoutingModule {}
