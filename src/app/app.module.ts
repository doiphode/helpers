import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { GlobalService } from './global.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import {SocialSharing} from '@ionic-native/social-sharing/ngx';

import { FCM } from '@ionic-native/fcm/ngx';
//import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { SMS } from '@ionic-native/sms/ngx';

import { Badge } from '@ionic-native/badge/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalService,
    Geolocation,
    SocialSharing,
    FCM,
    AndroidPermissions,
    SMS,
   // PayPal,
    NativeStorage,
    Badge,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
