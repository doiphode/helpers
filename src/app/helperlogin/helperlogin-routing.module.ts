import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelperloginPage } from './helperlogin.page';

const routes: Routes = [
  {
    path: '',
    component: HelperloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelperloginPageRoutingModule {}
