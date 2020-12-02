import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
}
export const SERVICES_DATA = [
  {
    name: "Diagnosis",
    selectStatus: false,
    icon: "assets/img/svg/057-car-4.svg",
  },
  {
    name: "Wheel",
    selectStatus: false,
    icon: "assets/img/svg/002-wheel.svg",
  },
  {
    name: "Wash",
    selectStatus: false,
    icon: "assets/img/svg/060-car-wash-2.svg",
  },
  {
    name: "Towing",
    selectStatus: false,
    icon: "assets/img/svg/038-crane.svg",
  },
  {
    name: "E-charge",
    selectStatus: false,
    icon: "assets/img/svg/025-electric-car-3.svg",
  },
  {
    name: "Insurance",
    selectStatus: false,
    icon: "assets/img/svg/042-insurance-4.svg",
  },
  {
    name: "Battery",
    selectStatus: false,
    icon: "assets/img/svg/072-battery.svg",
  },
  {
    name: "General",
    selectStatus: false,
    icon: "assets/img/svg/040-car-repair-9.svg",
  },
  {
    name: "Drive Test",
    selectStatus: false,
    icon: "assets/img/svg/027-driving-test.svg",
  },
];


export const CARS_DATA = [
  {
    name: "small",
    selectStatus: false,
    icon: "assets/img/cars/car.svg",
  },
  {
    name: "sedan",
    selectStatus: false,
    icon: "assets/img/cars/sedan-car-model.svg",
  },
  {
    name: "hatchback",
    selectStatus: false,
    icon: "assets/img/cars/car-of-hatchback-model.svg",
  },
  {
    name: "minivan",
    selectStatus: false,
    icon: "assets/img/cars/minivan-car.svg",
  },
  {
    name: "supercar",
    selectStatus: false,
    icon: "assets/img/cars/supercar.svg",
  },
  {
    name: "cuv",
    selectStatus: false,
    icon: "assets/img/cars/car-city-model.svg",
  },
  {
    name: "pickup truck",
    selectStatus: false,
    icon: "assets/img/cars/pick-up.svg",
  },
  {
    name: "van",
    selectStatus: false,
    icon:
      "assets/img/cars/van-black-transport-side-view-pointing-to-left.svg",
  },
  {
    name: "suv",
    selectStatus: false,
    icon: "assets/img/cars/car-suv.svg",
  },
];