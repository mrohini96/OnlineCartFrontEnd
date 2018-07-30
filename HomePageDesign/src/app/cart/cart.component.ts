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
 addToCart(id, catagoryId, fullName, catTitle){
    var currentUserObj = <any>{};
    var self = this;
    var sum;
    currentUserObj[id] = {};    
    currentUserObj[id].participantid = id;
    currentUserObj[id].participantName = fullName;

   // console.log(fullName)
    this.cart.cartItems[id] = {};


saveCart() {
      if (window.localStorage) {
        console.log("tfgb",this.cart);
        sessionStorage.setItem('cart',JSON.stringify(this.cart));        
      }
  }

*/