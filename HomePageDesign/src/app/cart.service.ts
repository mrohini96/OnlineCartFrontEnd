import { Injectable } from '@angular/core';

import {Products} from './products';
import {PRODUCTS} from './mockproduct';

import { CartComponent } from './cart/cart.component';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
   
    selectedItems:Products[] = [];
  

    getItemsForCart():Products[]  {
     return PRODUCTS;

    }

      getSelectedItems():Products[] {
      return this.selectedItems;
        }	
    

     addToCartService(id:number){
      console.log("inside addtocart service");
      let item = PRODUCTS.find(ob => ob.ProductId === id);
      if (this.selectedItems.indexOf(item) < 0) {	   
       this.selectedItems.push(item);
       
    }
     }


     removeItem(id:number): void {
      let item = this.selectedItems.find(ob => ob.ProductId === id);
      let itemIndex = this.selectedItems.indexOf(item);
        this.selectedItems.splice(itemIndex, 1);
         // this.productObj1.splice(0, 1);
      console.log("iTEM HAS been removed");
     }
    
  
}

