import { Injectable } from '@angular/core';

import {Products} from './products';
import {PRODUCTS} from './mockproduct';

import { CartComponent } from './cart/cart.component';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
    CartObj:CartComponent;
    cartobj1:CartService;
    cartItem :Products[] = [];
    
     addToCartService(productObj : Products){
      console.log("this is cart service");
      console.log("this is from Cart Service"+productObj.title);
      this.cartItem.push(productObj);
      console.log("Item is Pushed");
     // this.add(productObj);
     }
     /*
 add(item:Products){
  console.log("this is add function");
  console.log("product title is"+item.title);
  this.cartItem.push(item);
 }
 */
  constructor() { 

  }
}

