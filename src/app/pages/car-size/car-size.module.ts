import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarSizePageRoutingModule } from './car-size-routing.module';

import { CarSizePage } from './car-size.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarSizePageRoutingModule
  ],
  declarations: [CarSizePage]
})
export class CarSizePageModule {}
