import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchhospitalsPage } from './searchhospitals.page';

const routes: Routes = [
  {
    path: '',
    component: SearchhospitalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchhospitalsPageRoutingModule {}
