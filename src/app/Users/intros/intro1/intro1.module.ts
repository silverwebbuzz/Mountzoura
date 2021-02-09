import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Intro1PageRoutingModule } from './intro1-routing.module';

import { Intro1Page } from './intro1.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    Intro1PageRoutingModule
  ],
  declarations: [Intro1Page]
})
export class Intro1PageModule {}
