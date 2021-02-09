import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotCorrectPageRoutingModule } from './forgot-correct-routing.module';

import { ForgotCorrectPage } from './forgot-correct.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    ForgotCorrectPageRoutingModule
  ],
  declarations: [ForgotCorrectPage]
})
export class ForgotCorrectPageModule {}
