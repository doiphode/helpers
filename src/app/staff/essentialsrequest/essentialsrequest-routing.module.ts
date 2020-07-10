import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EssentialsrequestPage } from './essentialsrequest.page';

const routes: Routes = [
  {
    path: '',
    component: EssentialsrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssentialsrequestPageRoutingModule {}
