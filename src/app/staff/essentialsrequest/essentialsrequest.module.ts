import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EssentialsrequestPageRoutingModule } from './essentialsrequest-routing.module';

import { EssentialsrequestPage } from './essentialsrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EssentialsrequestPageRoutingModule
  ],
  declarations: [EssentialsrequestPage]
})
export class EssentialsrequestPageModule {}
