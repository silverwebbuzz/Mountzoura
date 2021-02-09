import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleQuizPageRoutingModule } from './single-quiz-routing.module';

import { SingleQuizPage } from './single-quiz.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    SingleQuizPageRoutingModule
  ],
  declarations: [SingleQuizPage]
})
export class SingleQuizPageModule {}
