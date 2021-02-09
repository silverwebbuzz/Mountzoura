import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentAddPageRoutingModule } from './student-add-routing.module';

import { StudentAddPage } from './student-add.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StudentAddPageRoutingModule
  ],
  declarations: [StudentAddPage]
})
export class StudentAddPageModule {}
