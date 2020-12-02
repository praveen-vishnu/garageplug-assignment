import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-price",
  templateUrl: "./price.page.html",
  styleUrls: ["./price.page.scss"],
})
export class PricePage implements OnInit {
  services: any = [];
  services_bck: any = [];
  cars: any = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public toastController: ToastController
  ) {
    this.services_bck = JSON.parse(
      this.route.snapshot.paramMap.get("services")
    );
    this.services_bck.forEach((element) => {
      if (element.selectStatus) {
        this.services.push(element);
      }
    });
    this.cars = JSON.parse(this.route.snapshot.paramMap.get("cars"));
  }
  ngOnInit() {}
  changeService() {
    this.router.navigate([
      "/services",
      {
        fromPricePage: true,
        services: JSON.stringify(this.services_bck),
        cars: JSON.stringify(this.cars),
      },
    ]);
  }

  continue() {
    this.router.navigate([
      "/contact-details",
      {
        cars: JSON.stringify(this.cars),
        services: JSON.stringify(this.services),
      },
    ]);
  }
}
