import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GdprPolicyPageRoutingModule } from './gdpr-policy-routing.module';

import { GdprPolicyPage } from './gdpr-policy.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    GdprPolicyPageRoutingModule
  ],
  declarations: [GdprPolicyPage]
})
export class GdprPolicyPageModule {}
