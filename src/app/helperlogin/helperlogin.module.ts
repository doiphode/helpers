import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelperloginPageRoutingModule } from './helperlogin-routing.module';

import { HelperloginPage } from './helperlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelperloginPageRoutingModule
  ],
  declarations: [HelperloginPage]
})
export class HelperloginPageModule {}
