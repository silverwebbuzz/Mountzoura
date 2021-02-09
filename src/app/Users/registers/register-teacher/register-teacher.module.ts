import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterTeacherPageRoutingModule } from './register-teacher-routing.module';

import { RegisterTeacherPage } from './register-teacher.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterTeacherPageRoutingModule
  ],
  declarations: [RegisterTeacherPage]
})
export class RegisterTeacherPageModule {}
