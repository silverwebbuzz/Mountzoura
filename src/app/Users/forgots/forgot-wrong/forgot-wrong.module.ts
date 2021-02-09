import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotWrongPageRoutingModule } from './forgot-wrong-routing.module';

import { ForgotWrongPage } from './forgot-wrong.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    ForgotWrongPageRoutingModule
  ],
  declarations: [ForgotWrongPage]
})
export class ForgotWrongPageModule {}
