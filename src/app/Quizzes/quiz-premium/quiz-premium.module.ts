import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizPremiumPageRoutingModule } from './quiz-premium-routing.module';

import { QuizPremiumPage } from './quiz-premium.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    QuizPremiumPageRoutingModule
  ],
  declarations: [QuizPremiumPage]
})
export class QuizPremiumPageModule {}
