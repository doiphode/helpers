import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EssentialsrequestdetailsPage } from './essentialsrequestdetails.page';

const routes: Routes = [
  {
    path: '',
    component: EssentialsrequestdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssentialsrequestdetailsPageRoutingModule {}
