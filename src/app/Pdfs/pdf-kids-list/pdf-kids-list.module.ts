import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfKidsListPageRoutingModule } from './pdf-kids-list-routing.module';

import { PdfKidsListPage } from './pdf-kids-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PdfKidsListPageRoutingModule
  ],
  declarations: [PdfKidsListPage]
})
export class PdfKidsListPageModule {}
