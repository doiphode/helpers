import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchhospitalsPageRoutingModule } from './searchhospitals-routing.module';

import { SearchhospitalsPage } from './searchhospitals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchhospitalsPageRoutingModule
  ],
  declarations: [SearchhospitalsPage]
})
export class SearchhospitalsPageModule {}
