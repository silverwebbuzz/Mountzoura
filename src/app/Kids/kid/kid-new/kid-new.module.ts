import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidNewPageRoutingModule } from './kid-new-routing.module';

import { KidNewPage } from './kid-new.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    KidNewPageRoutingModule
  ],
  declarations: [KidNewPage]
})
export class KidNewPageModule {}
