import { Injectable } from '@angular/core';

import {Products} from './products';
import {PRODUCTS} from './mockproduct';

import { CartComponent } from './cart/cart.component';
import { Observable, of } from 'rxjs';
import { cart } from './cart';
import {CART} from './mockcart';
import { CartProductsArray } from './CartProducts';
@Injectable({
  providedIn: 'root'
})
export class CartService {
    public cartJsonArray = cart;
    public cartProductJsonArray= CartProductsArray;
    selectedItems:Products[] = [];
  
        getCartDetails(cartJson){
        console.log("Getting cart details-----");
        //this.cartJsonArray=cartJson.cart.cartProducts;
        this.cartJsonArray=cartJson;
        this.cartProductJsonArray=cartJson.cartProducts;
        console.log("cart Id is ="+this.cartJsonArray.cartId);
        console.log("User Id is="+this.cartJsonArray.userId);
        console.log("Cart Product Count Is="+this.cartJsonArray.cartProductCount);
        console.log("Cart Total Price Is="+this.cartJsonArray.CartTotalPrice);
        for(var i in this.cartProductJsonArray){
          console.log("Cart ID from CartProducts Is===="+this.cartProductJsonArray[i].cartId);
          console.log("Product Id from CartProducts Is===="+this.cartProductJsonArray[i].productId);
          console.log("Product Quantity from CartProducts Is====="+this.cartProductJsonArray[i].productQuantity);
        }
    }
    getItemsForCart():Products[]  {
     return PRODUCTS;

    }

      getSelectedItems():Products[] {
      return this.selectedItems;
        }	
    

     addToCartService(id:number){
      console.log("inside addtocart service");
      let item = PRODUCTS.find(ob => ob.productId === id);
      if (this.selectedItems.indexOf(item) < 0) {	   
       this.selectedItems.push(item);
       
    }
     }
     removeItem(id:number): void {
      let item = this.selectedItems.find(ob => ob.productId === id);
      let itemIndex = this.selectedItems.indexOf(item);
        this.selectedItems.splice(itemIndex, 1);
         // this.productObj1.splice(0, 1);
      console.log("iTEM HAS been removed");
     }
    
  
}

