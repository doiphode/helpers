import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyhelplistPageRoutingModule } from './myhelplist-routing.module';

import { MyhelplistPage } from './myhelplist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyhelplistPageRoutingModule
  ],
  declarations: [MyhelplistPage]
})
export class MyhelplistPageModule {}
