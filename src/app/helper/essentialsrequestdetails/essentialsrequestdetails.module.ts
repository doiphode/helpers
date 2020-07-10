import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EssentialsrequestdetailsPageRoutingModule } from './essentialsrequestdetails-routing.module';

import { EssentialsrequestdetailsPage } from './essentialsrequestdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EssentialsrequestdetailsPageRoutingModule
  ],
  declarations: [EssentialsrequestdetailsPage]
})
export class EssentialsrequestdetailsPageModule {}
