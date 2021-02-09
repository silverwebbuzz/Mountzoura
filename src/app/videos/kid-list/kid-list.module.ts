import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidListPageRoutingModule } from './kid-list-routing.module';

import { KidListPage } from './kid-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    KidListPageRoutingModule
  ],
  declarations: [KidListPage]
})
export class KidListPageModule {}
