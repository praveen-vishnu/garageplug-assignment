import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'car-size',
    loadChildren: () => import('./pages/car-size/car-size.module').then( m => m.CarSizePageModule)
  },
  {
    path: 'price',
    loadChildren: () => import('./pages/price/price.module').then( m => m.PricePageModule)
  },
  {
    path: 'contact-details',
    loadChildren: () => import('./pages/contact-details/contact-details.module').then( m => m.ContactDetailsPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'service-nummber',
    loadChildren: () => import('./pages/service-nummber/service-nummber.module').then( m => m.ServiceNummberPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
