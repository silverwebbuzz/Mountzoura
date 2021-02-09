import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidFreeProfilePageRoutingModule } from './kid-free-profile-routing.module';

import { KidFreeProfilePage } from './kid-free-profile.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    KidFreeProfilePageRoutingModule
  ],
  declarations: [KidFreeProfilePage]
})
export class KidFreeProfilePageModule {}
