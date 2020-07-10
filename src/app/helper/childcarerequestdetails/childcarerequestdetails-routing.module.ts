import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildcarerequestdetailsPage } from './childcarerequestdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ChildcarerequestdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildcarerequestdetailsPageRoutingModule {}
