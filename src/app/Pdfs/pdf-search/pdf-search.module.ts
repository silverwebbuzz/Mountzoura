import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfSearchPageRoutingModule } from './pdf-search-routing.module';

import { PdfSearchPage } from './pdf-search.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    PdfSearchPageRoutingModule
  ],
  declarations: [PdfSearchPage]
})
export class PdfSearchPageModule {}
