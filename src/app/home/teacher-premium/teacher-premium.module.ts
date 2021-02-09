import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherPremiumPageRoutingModule } from './teacher-premium-routing.module';

import { TeacherPremiumPage } from './teacher-premium.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    TeacherPremiumPageRoutingModule
  ],
  declarations: [TeacherPremiumPage]
})
export class TeacherPremiumPageModule {}
