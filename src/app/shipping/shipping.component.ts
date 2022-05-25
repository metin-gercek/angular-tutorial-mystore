import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts: any;

  constructor(private cartService: CartService) {
    this.shippingCosts = this.cartService.getShippingRates();
   }

  ngOnInit(): void {
  }

}
