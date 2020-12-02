import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceNummberPageRoutingModule } from './service-nummber-routing.module';

import { ServiceNummberPage } from './service-nummber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceNummberPageRoutingModule
  ],
  declarations: [ServiceNummberPage]
})
export class ServiceNummberPageModule {}
