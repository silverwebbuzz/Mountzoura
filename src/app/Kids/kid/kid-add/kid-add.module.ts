import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidAddPageRoutingModule } from './kid-add-routing.module';

import { KidAddPage } from './kid-add.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    KidAddPageRoutingModule
  ],
  declarations: [KidAddPage]
})
export class KidAddPageModule {}
