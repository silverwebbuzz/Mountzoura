import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidHomeworkPageRoutingModule } from './kid-homework-routing.module';

import { KidHomeworkPage } from './kid-homework.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    KidHomeworkPageRoutingModule
  ],
  declarations: [KidHomeworkPage]
})
export class KidHomeworkPageModule {}
