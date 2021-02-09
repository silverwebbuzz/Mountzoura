import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdWrongPageRoutingModule } from './id-wrong-routing.module';

import { IdWrongPage } from './id-wrong.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IdWrongPageRoutingModule
  ],
  declarations: [IdWrongPage]
})
export class IdWrongPageModule {}
