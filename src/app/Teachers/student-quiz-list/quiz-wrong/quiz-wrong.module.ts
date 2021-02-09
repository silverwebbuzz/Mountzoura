import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizWrongPageRoutingModule } from './quiz-wrong-routing.module';

import { QuizWrongPage } from './quiz-wrong.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    QuizWrongPageRoutingModule
  ],
  declarations: [QuizWrongPage]
})
export class QuizWrongPageModule {}
