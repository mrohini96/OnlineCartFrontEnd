import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


/*
saveCart() {
      if (window.localStorage) {
        console.log("tfgb",this.cart);
        sessionStorage.setItem('cart',JSON.stringify(this.cart));        
      }
  }

*/