import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";


@Component({
    selector: 'app-product-details',
    standalone: false,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
    stringValue: string = 'true';
    boolValue!: boolean;
    policyNumber: string = '';

  ngOnInit() {
    this.policyNumber = '01SBMAXBH7Y';
    this.boolValue = JSON.parse(this.stringValue);
    // console.log(typeof this.boolValue);
    // this.policyNumValidate()
    // console.log(this.validateValue('09SBMAXBH7Yyt'))
    const pre = /^[a-zA-Z]{2}$/;
    console.log(pre.test('NY24LIA15740701'))
  }

}