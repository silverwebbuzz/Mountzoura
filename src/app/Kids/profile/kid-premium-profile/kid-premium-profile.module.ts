import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidPremiumProfilePageRoutingModule } from './kid-premium-profile-routing.module';

import { KidPremiumProfilePage } from './kid-premium-profile.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    KidPremiumProfilePageRoutingModule
  ],
  declarations: [KidPremiumProfilePage]
})
export class KidPremiumProfilePageModule {}
