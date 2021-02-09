import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoPageRoutingModule } from './video-routing.module';

import { VideoPage } from './video.page';
import { TranslateModule } from '@ngx-translate/core';
import { SafePipeModule } from 'safe-pipe';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,SafePipeModule,
    VideoPageRoutingModule
  ],
  declarations: [VideoPage]
})
export class VideoPageModule {}
