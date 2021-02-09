import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterChildPageRoutingModule } from './register-child-routing.module';

import { RegisterChildPage } from './register-child.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterChildPageRoutingModule
  ],
  declarations: [RegisterChildPage]
})
export class RegisterChildPageModule {}
