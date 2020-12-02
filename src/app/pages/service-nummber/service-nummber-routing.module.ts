import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceNummberPage } from './service-nummber.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceNummberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceNummberPageRoutingModule {}
