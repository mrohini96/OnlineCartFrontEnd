import {Injectable} from '@angular/core';
import {Product} from './Product';
import {PRODUCTS} from './mockproduct';

@Injectable({
  providedIn: 'root'
})

export class WishlistService {
  
  selectedItems:Product[] = [];
  
  getItemsForWishlist():Product[]  {
    return PRODUCTS;
  }

  getSelectedItems():Product[] {
    return this.selectedItems;
  }	
  
  addToWishlistService(id:number){
    console.log("inside addtowishlist service");
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
