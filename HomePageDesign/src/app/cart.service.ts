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
    public cartJsonArray = CART;
    public cartProductJsonArray= CartProductsArray;
    selectedItems:Products[] = [];
  
        getCartDetails(cartJson){
        console.log("Getting cart details-----");
        this.cartJsonArray=cartJson.cart.cartProducts;
       // this.cartProductJsonArray=cartJson.cart.cartProducts;
        //this.cartJsonArray=cartJson.cart;
        console.log("cart Id is ="+cartJson.cartId);
        console.log("User Id is="+cartJson.userId);
        console.log("Cart Product Count Is="+cartJson.cartProductCount);
        console.log("Cart Total Price Is="+cartJson.CartTotalPrice);
     //   console.log("Cart Id in CartProduct Is="+this.cartJsonArray.cartProducts.cartId);

     // console.log("status is:"+this.result.status+"message is :"+this.result.message);
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

