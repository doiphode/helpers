import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GivefeedbackPage } from './givefeedback.page';

const routes: Routes = [
  {
    path: '',
    component: GivefeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GivefeedbackPageRoutingModule {}
