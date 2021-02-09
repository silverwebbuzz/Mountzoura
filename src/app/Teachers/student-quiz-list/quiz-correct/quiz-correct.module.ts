import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizCorrectPageRoutingModule } from './quiz-correct-routing.module';

import { QuizCorrectPage } from './quiz-correct.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    QuizCorrectPageRoutingModule
  ],
  declarations: [QuizCorrectPage]
})
export class QuizCorrectPageModule {}
