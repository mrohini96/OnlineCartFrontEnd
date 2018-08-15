import { Component, OnInit } from '@angular/core';

import {CartService} from '../cart.service';
import { PRODUCTS } from '../mockproduct';
import {Products} from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 //  productObj=PRODUCTS;
 
  cartItems: Products[] = [];

  constructor(private cartObj:CartService) {}

    getItemsForCart(): void {
    console.log("this is before getItemsForCart()");
    this.cartItems = this.cartObj.getSelectedItems();
    console.log("this is after getItemsForCart()");
}

  ngOnInit(): void {
    this.getItemsForCart();
  }

  removeItemFromCart(id : number): void {
  console.log("this is before  removeItemFromCart()");
  this.cartObj.removeItem(id);
  console.log("this is after removeItemFromCart()");
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