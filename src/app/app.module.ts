import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, HttpClientModule, IonicModule.forRoot({ mode: 'ios' }), TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }), AppRoutingModule],
  providers: [
    Firebase,
    Facebook,
    Keyboard,
    Deeplinks,
    OneSignal,
    FileOpener,
    InAppBrowser,
    FileTransfer,
    VideoPlayer,
    SocialSharing,
    Stripe,
    File,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
