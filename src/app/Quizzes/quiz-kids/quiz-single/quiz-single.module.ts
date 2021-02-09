import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizSinglePageRoutingModule } from './quiz-single-routing.module';

import { QuizSinglePage } from './quiz-single.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    QuizSinglePageRoutingModule
  ],
  declarations: [QuizSinglePage]
})
export class QuizSinglePageModule {}
