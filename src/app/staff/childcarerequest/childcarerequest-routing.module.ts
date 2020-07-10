import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildcarerequestPage } from './childcarerequest.page';

const routes: Routes = [
  {
    path: '',
    component: ChildcarerequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildcarerequestPageRoutingModule {}
