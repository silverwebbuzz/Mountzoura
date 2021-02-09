import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidPremiumPageRoutingModule } from './kid-premium-routing.module';

import { KidPremiumPage } from './kid-premium.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,TranslateModule,
    IonicModule,
    KidPremiumPageRoutingModule
  ],
  declarations: [KidPremiumPage]
})
export class KidPremiumPageModule {}
