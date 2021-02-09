import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidFreePageRoutingModule } from './kid-free-routing.module';

import { KidFreePage } from './kid-free.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    IonicModule,
    KidFreePageRoutingModule
  ],
  declarations: [KidFreePage]
})
export class KidFreePageModule {}
