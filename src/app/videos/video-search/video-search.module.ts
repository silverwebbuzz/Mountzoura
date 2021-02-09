import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoSearchPageRoutingModule } from './video-search-routing.module';

import { VideoSearchPage } from './video-search.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    VideoSearchPageRoutingModule
  ],
  declarations: [VideoSearchPage]
})
export class VideoSearchPageModule {}
