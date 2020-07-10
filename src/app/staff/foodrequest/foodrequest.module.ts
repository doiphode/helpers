import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodrequestPageRoutingModule } from './foodrequest-routing.module';

import { FoodrequestPage } from './foodrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodrequestPageRoutingModule
  ],
  declarations: [FoodrequestPage]
})
export class FoodrequestPageModule {}
