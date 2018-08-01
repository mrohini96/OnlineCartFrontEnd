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
    selectedItems:Products[] = [];
    productObj1 : Products;

      getSelectedItems():Products[] {
      return this.selectedItems;
        }	
    

     addToCartService(productObj : Products){
      console.log("this is cart service");
      console.log("this is from Cart Service"+productObj.title);
      this.cartItem.push(productObj);
      console.log("Item is Pushed");
     // this.add(productObj);
     }


     removeItem(productObj : Products): void {
     console.log("in service removeItem()");
     console.log("Removing item from cart "+productObj.title);
     //this.selectedItems=productObj
     // let item = this.selectedItems.find(ob => ob.productObj1 === productObj);
     // let itemIndex = this.selectedItems.indexOf(item);
     // this.selectedItems.splice(itemIndex, 1);
      let itemIndex=productObj.ProductId;
     // this.productObj1.splice(0, 1);
      console.log("iTEM HAS been removed");
    }
  constructor() { 

  }
}

