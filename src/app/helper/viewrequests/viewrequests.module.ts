import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewrequestsPageRoutingModule } from './viewrequests-routing.module';

import { ViewrequestsPage } from './viewrequests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewrequestsPageRoutingModule
  ],
  declarations: [ViewrequestsPage]
})
export class ViewrequestsPageModule {}
