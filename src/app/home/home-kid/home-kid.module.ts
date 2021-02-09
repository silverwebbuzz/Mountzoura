import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeKidPageRoutingModule } from './home-kid-routing.module';

import { HomeKidPage } from './home-kid.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomeKidPageRoutingModule
  ],
  declarations: [HomeKidPage]
})
export class HomeKidPageModule {}
