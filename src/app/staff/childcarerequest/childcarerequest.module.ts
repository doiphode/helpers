import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildcarerequestPageRoutingModule } from './childcarerequest-routing.module';

import { ChildcarerequestPage } from './childcarerequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildcarerequestPageRoutingModule
  ],
  declarations: [ChildcarerequestPage]
})
export class ChildcarerequestPageModule {}
