import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mockproduct';
import { Product } from '../Product';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit {

  wishlistItems: Product[] = [];
  constructor(private wishlistObj:WishlistService) {}

  getItemsForWishlist(): void {
    console.log("this is before getItemsForWishlist()");
    this.wishlistItems = this.wishlistObj.getSelectedItems();
    console.log("this is after getItemsForWishlist()");
  }

  ngOnInit(): void {
    this.getItemsForWishlist();
  }

  removeItemFromWishlist(id : number): void {
    console.log("this is before  removeItemFromWishlist()");
    this.wishlistObj.removeItem(id);
    console.log("this is after removeItemFromWishlist()");
  }

}
