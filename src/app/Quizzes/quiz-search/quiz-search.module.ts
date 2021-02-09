import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizSearchPageRoutingModule } from './quiz-search-routing.module';

import { QuizSearchPage } from './quiz-search.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    QuizSearchPageRoutingModule
  ],
  declarations: [QuizSearchPage]
})
export class QuizSearchPageModule {}
