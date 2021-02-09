import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentAddedPageRoutingModule } from './student-added-routing.module';

import { StudentAddedPage } from './student-added.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StudentAddedPageRoutingModule
  ],
  declarations: [StudentAddedPage]
})
export class StudentAddedPageModule {}
