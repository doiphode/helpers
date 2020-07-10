import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GivefeedbackPageRoutingModule } from './givefeedback-routing.module';

import { GivefeedbackPage } from './givefeedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GivefeedbackPageRoutingModule
  ],
  declarations: [GivefeedbackPage]
})
export class GivefeedbackPageModule {}
