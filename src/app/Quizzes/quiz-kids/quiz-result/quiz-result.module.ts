import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizResultPageRoutingModule } from './quiz-result-routing.module';

import { QuizResultPage } from './quiz-result.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    QuizResultPageRoutingModule
  ],
  declarations: [QuizResultPage]
})
export class QuizResultPageModule {}
