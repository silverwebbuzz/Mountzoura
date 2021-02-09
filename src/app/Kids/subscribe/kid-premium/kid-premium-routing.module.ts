import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidPremiumPage } from './kid-premium.page';

const routes: Routes = [
  {
    path: '',
    component: KidPremiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidPremiumPageRoutingModule {}
