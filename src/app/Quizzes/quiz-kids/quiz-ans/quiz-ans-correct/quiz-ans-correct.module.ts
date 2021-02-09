import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizAnsCorrectPageRoutingModule } from './quiz-ans-correct-routing.module';

import { QuizAnsCorrectPage } from './quiz-ans-correct.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    QuizAnsCorrectPageRoutingModule
  ],
  declarations: [QuizAnsCorrectPage]
})
export class QuizAnsCorrectPageModule {}
