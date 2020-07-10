import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodrequestdetailsPageRoutingModule } from './foodrequestdetails-routing.module';

import { FoodrequestdetailsPage } from './foodrequestdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodrequestdetailsPageRoutingModule
  ],
  declarations: [FoodrequestdetailsPage]
})
export class FoodrequestdetailsPageModule {}
