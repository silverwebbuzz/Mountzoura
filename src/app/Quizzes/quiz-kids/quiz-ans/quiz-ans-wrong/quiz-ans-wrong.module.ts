import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizAnsWrongPageRoutingModule } from './quiz-ans-wrong-routing.module';

import { QuizAnsWrongPage } from './quiz-ans-wrong.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    QuizAnsWrongPageRoutingModule
  ],
  declarations: [QuizAnsWrongPage]
})
export class QuizAnsWrongPageModule {}
