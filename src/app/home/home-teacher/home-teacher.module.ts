import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTeacherPageRoutingModule } from './home-teacher-routing.module';

import { HomeTeacherPage } from './home-teacher.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomeTeacherPageRoutingModule
  ],
  declarations: [HomeTeacherPage]
})
export class HomeTeacherPageModule {}
