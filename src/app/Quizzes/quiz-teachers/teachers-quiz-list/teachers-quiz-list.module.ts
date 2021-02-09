import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachersQuizListPageRoutingModule } from './teachers-quiz-list-routing.module';

import { TeachersQuizListPage } from './teachers-quiz-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TeachersQuizListPageRoutingModule
  ],
  declarations: [TeachersQuizListPage]
})
export class TeachersQuizListPageModule {}
