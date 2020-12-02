import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarSizePage } from './car-size.page';

const routes: Routes = [
  {
    path: '',
    component: CarSizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarSizePageRoutingModule {}
