import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestsChildPageRoutingModule } from './requests-child-routing.module';

import { RequestsChildPage } from './requests-child.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RequestsChildPageRoutingModule
  ],
  declarations: [RequestsChildPage]
})
export class RequestsChildPageModule {}
