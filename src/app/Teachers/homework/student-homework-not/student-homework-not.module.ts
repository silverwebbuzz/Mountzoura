import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentHomeworkNotPageRoutingModule } from './student-homework-not-routing.module';

import { StudentHomeworkNotPage } from './student-homework-not.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    StudentHomeworkNotPageRoutingModule
  ],
  declarations: [StudentHomeworkNotPage]
})
export class StudentHomeworkNotPageModule {}
