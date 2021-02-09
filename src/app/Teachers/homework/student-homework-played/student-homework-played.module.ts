import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentHomeworkPlayedPageRoutingModule } from './student-homework-played-routing.module';

import { StudentHomeworkPlayedPage } from './student-homework-played.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    StudentHomeworkPlayedPageRoutingModule
  ],
  declarations: [StudentHomeworkPlayedPage]
})
export class StudentHomeworkPlayedPageModule {}
