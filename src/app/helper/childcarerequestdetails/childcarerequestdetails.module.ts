import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildcarerequestdetailsPageRoutingModule } from './childcarerequestdetails-routing.module';

import { ChildcarerequestdetailsPage } from './childcarerequestdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildcarerequestdetailsPageRoutingModule
  ],
  declarations: [ChildcarerequestdetailsPage]
})
export class ChildcarerequestdetailsPageModule {}
