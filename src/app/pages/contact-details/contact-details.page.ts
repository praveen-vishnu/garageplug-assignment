import { Component, OnInit } from "@angular/core";
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";

@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.page.html",
  styleUrls: ["./contact-details.page.scss"],
})
export class ContactDetailsPage implements OnInit {
  constructor(private pickerController: PickerController) {}
  hours: any = [];
  dates: any = [];
  months: any = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  hh: any;
  dd: any;
  mm: any;
  dd1: any;
  mm1: any;
  FirstName: any;
  LastName: any;
  Email: any;
  Mobile: any;

  paymethod = "cash";

  ngOnInit() {
    for (let index = 0; index <= 60; index++) {
      var formattedNumber = ("0" + index).slice(-2);
      this.hours.push(formattedNumber);
    }
    for (let index = 1; index <= 31; index++) {
      var formattedNumber = ("0" + index).slice(-2);
      this.dates.push(formattedNumber);
    }
  }

  async showPicker(key) {
    var columns = [];
    var name;
    switch (key) {
      case "hh":
        columns = this.getColumnOptions(this.hours);
        name = "hours";
        break;
      case "dd":
      case "dd1":
        columns = this.getColumnOptions(this.dates);
        name = "dates";
        break;
      case "mm":
      case "mm1":
        columns = this.getColumnOptions(this.months);
        name = "months";
        break;
    }

    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Ok",
          handler: (value: any) => {
            console.log(value);

            switch (key) {
              case "hh":
                this.hh = value[name].value;
                break;
              case "dd":
                this.dd = value[name].value;
                break;
              case "mm":
                this.mm = value[name].value;
                break;
              case "dd1":
                this.dd1 = value[name].value;
                break;
              case "mm1":
                this.mm1 = value[name].value;
                break;
            }
          },
        },
      ],
      columns: [
        {
          name: name,
          options: columns,
        },
      ],
    };

    let picker = await this.pickerController.create(options);
    picker.present();
  }
  getColumnOptions(arr) {
    let options = [];
    arr.forEach((x) => {
      options.push({ text: x, value: x });
    });
    return options;
  }
}
