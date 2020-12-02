import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { SERVICES_DATA } from 'src/app/app.component';
@Component({
  selector: "app-services",
  templateUrl: "./services.page.html",
  styleUrls: ["./services.page.scss"],
})
export class ServicesPage implements OnInit {
  services: any;
  cars: any;
  fromPricePage = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    public toastController: ToastController
  ) {
    this.fromPricePage = Boolean(
      this.route.snapshot.paramMap.get("fromPricePage")
    );
    console.log(this.fromPricePage);
    if (this.fromPricePage) {
      this.services = JSON.parse(this.route.snapshot.paramMap.get("services"));
      this.cars = JSON.parse(this.route.snapshot.paramMap.get("cars"));
    } else {
      this.services = SERVICES_DATA;
    }
  }

  ngOnInit() {}
  selectService(i) {
    this.services[i].selectStatus = !this.services[i].selectStatus;
  }
  continue() {
    //first checking the page where it came from
    if (this.fromPricePage) {
      this.router.navigate([
        "/price",
        {
          cars: JSON.stringify(this.cars),
          services: JSON.stringify(this.services),
        },
      ]);
    } else {
      let selectServices = false;
      this.services.forEach((element) => {
        if (element.selectStatus) {
          selectServices = true;
        }
      });
      if (selectServices) {
        this.router.navigate([
          "/car-size",
          { services: JSON.stringify(this.services) },
        ]);
      } else {
        this.presentToast("Please Select Service!");
      }
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
