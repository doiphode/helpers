import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyhelplistPage } from './myhelplist.page';

const routes: Routes = [
  {
    path: '',
    component: MyhelplistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyhelplistPageRoutingModule {}
