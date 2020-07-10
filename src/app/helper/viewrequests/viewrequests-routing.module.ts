import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewrequestsPage } from './viewrequests.page';

const routes: Routes = [
  {
    path: '',
    component: ViewrequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewrequestsPageRoutingModule {}
