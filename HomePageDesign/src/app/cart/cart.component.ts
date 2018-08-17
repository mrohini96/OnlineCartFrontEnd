import { Component, OnInit } from '@angular/core';

import {CartService} from '../cart.service';
import { PRODUCTS } from '../mockproduct';
import {Products} from '../products';
import { cart } from '../cart';
import { CartProductsArray } from '../CartProducts';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 //  productObj=PRODUCTS;
  cartItems: Products[] = [];
  public cartJsonArray = cart;
  public cartProductJsonArray= CartProductsArray;
  result:any;
  constructor(private cartObj:CartService) {}

    getItemsForCart(): void {
    console.log("this is before getItemsForCart()");
    this.cartItems = this.cartObj.getSelectedItems();
    console.log("this is after getItemsForCart()");
}

removeItemFromCart(id : number): void {
  console.log("this is before  removeItemFromCart()");
  this.cartObj.removeItem(id);
  console.log("this is after removeItemFromCart()");
}
  viewCart(){
  console.log("Inside view cart function::::")
  this.cartObj.myApiCallCartView().subscribe(res=>{
  console.log(JSON.stringify(res) +"test")
  this.result = res;
  console.log("Result status is"+this.result.status);
  status=this.result.status;
  var cartJson=this.result.cart;
  console.log(cartJson);
  console.log("status is:"+this.result.status+"message is :"+this.result.message);
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
      console.log("Product Name from CartProducts Is===="+this.cartProductJsonArray[i].productName);
      console.log("Product Description from CartProducts Is===="+this.cartProductJsonArray[i].productDesc);
      console.log("Product Price from CartProducts Is===="+this.cartProductJsonArray[i].productPrice);
      //getProductDetail(this.cartProductJsonArray[i].productId);
    } 
}
);
}

  ngOnInit(): void {
    this.viewCart();
    this.getItemsForCart();
  }
}
