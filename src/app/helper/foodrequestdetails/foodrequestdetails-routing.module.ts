import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodrequestdetailsPage } from './foodrequestdetails.page';

const routes: Routes = [
  {
    path: '',
    component: FoodrequestdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodrequestdetailsPageRoutingModule {}
