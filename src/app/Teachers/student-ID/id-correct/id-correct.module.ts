import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdCorrectPageRoutingModule } from './id-correct-routing.module';

import { IdCorrectPage } from './id-correct.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    IdCorrectPageRoutingModule
  ],
  declarations: [IdCorrectPage]
})
export class IdCorrectPageModule {}
