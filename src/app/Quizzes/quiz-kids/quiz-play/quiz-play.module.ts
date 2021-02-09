import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizPlayPageRoutingModule } from './quiz-play-routing.module';

import { QuizPlayPage } from './quiz-play.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    QuizPlayPageRoutingModule
  ],
  declarations: [QuizPlayPage]
})
export class QuizPlayPageModule {}
