import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidPremiumProfilePage } from './kid-premium-profile.page';

const routes: Routes = [
  {
    path: '',
    component: KidPremiumProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidPremiumProfilePageRoutingModule {}
