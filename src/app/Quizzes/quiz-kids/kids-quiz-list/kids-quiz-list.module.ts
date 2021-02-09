import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidsQuizListPageRoutingModule } from './kids-quiz-list-routing.module';

import { KidsQuizListPage } from './kids-quiz-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    KidsQuizListPageRoutingModule
  ],
  declarations: [KidsQuizListPage]
})
export class KidsQuizListPageModule {}
