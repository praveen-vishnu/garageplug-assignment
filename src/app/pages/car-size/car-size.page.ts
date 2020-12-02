import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { CARS_DATA } from 'src/app/app.component';

@Component({
  selector: "app-car-size",
  templateUrl: "./car-size.page.html",
  styleUrls: ["./car-size.page.scss"],
})
export class CarSizePage implements OnInit {
  services: any;
  selectedcarIndex = -1;
  cars = CARS_DATA;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public toastController: ToastController
  ) {
    this.services = JSON.parse(this.route.snapshot.paramMap.get("services"));
  }
  

  ngOnInit() {}

  selectCars(i) {
    
    //removiming old car 
    var previousIndex = this.cars.map((el) => el.selectStatus).indexOf(true);
    if(previousIndex >= 0){
      this.cars[previousIndex].selectStatus = false;
    } 
    
    //selecting new Car
    this.cars[i].selectStatus = !this.cars[i].selectStatus;
  }
  continue() {
    let cars = [];
    let selectCars = false;
    this.cars.forEach((element) => {
      if (element.selectStatus) {
        cars.push(element);
        selectCars = true;
      }
    });
    if (selectCars) {
      this.router.navigate([
        "/price",
        { cars: JSON.stringify(cars), services: JSON.stringify(this.services) },
      ]);
    } else {
      this.presentToast("Please Select Car Size!");
    }
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      mode: "ios",
    });
    toast.present();
  }
}
