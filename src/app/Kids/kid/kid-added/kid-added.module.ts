import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidAddedPageRoutingModule } from './kid-added-routing.module';

import { KidAddedPage } from './kid-added.page';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,TranslateModule,
    IonicModule,
    KidAddedPageRoutingModule
  ],
  declarations: [KidAddedPage]
})
export class KidAddedPageModule {}
