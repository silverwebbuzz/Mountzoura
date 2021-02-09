import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherParentPageRoutingModule } from './teacher-parent-routing.module';

import { TeacherParentPage } from './teacher-parent.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    TeacherParentPageRoutingModule
  ],
  declarations: [TeacherParentPage]
})
export class TeacherParentPageModule {}
