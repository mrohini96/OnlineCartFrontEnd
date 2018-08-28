import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CART } from '../mockcart';
import { Cart } from '../cart';
import { CartProducts } from '../CartProducts';
import { CARTPRODUCTS } from '../mockcartproducts';

import { PRODUCTS } from '../mockproduct';
import { Product } from '../product';
import { GlobalData } from '../globaldata';
import { OrderService } from '../order.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private cartService:CartService,private router:Router, public globalData: GlobalData, private orderService:OrderService) {}

  public cartJSON: any;
  cart: Cart = CART;
  cartProducts: CartProducts[] = CARTPRODUCTS;
  resultUpdateQuantity: any;
  resultRemoveItem: any;
  resultRemoveAllItem: any;
  resultBuyItem: any;
  resultBuyAllItem: any;
  orderCreationFlag: boolean = false;
  currentOrderTrackingNumber: any;
  ordersJson:any=[];
  orderJson={"userId":0, "orderId":0, "orderAmount":0, "orderShipAddress":"", "orderCity":"", "orderState":"", "orderCountry":"", "orderZip":"", "orderEmail":"", "orderPhone":"", "orderDate":"", "orderTrackingNumber":"", "orderDetails":[]}
  ordersJsonArray:any=[];
  result:any;
 
  ngOnInit(): void {
    this.orderCreationFlag = false;
    this.getCartItems();
  }

  // CART Page - On loading the cart page load all the cart items and display
  getCartItems(): void {
    console.log("this is before fetchItemsForCart()" + this.globalData.userName);
    this.cartService.myApiCallCartView(this.globalData.userName).subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.cartJSON = res;
      if(this.cartJSON.status == "true") {
        this.cart = this.cartJSON.cart;
        this.cartProducts = this.cartJSON.cart.cartProducts;
        console.log("before for loop-----------" + this.cartProducts);
        for(var i in this.cartProducts) {
          console.log(this.cartProducts[i].cartId);
          console.log(this.cartProducts[i].productId);
          console.log(this.cartProducts[i].productQuantity);
          console.log(this.cartProducts[i].productName);
          console.log(this.cartProducts[i].productDesc);
          console.log(this.cartProducts[i].productPrice);
          console.log("after for loop-----------");
        }
      }
    })
  }

  // CART Page - On changing product quantity in the dropdown updateProductQuantity
  updateProductQuantity(cartProduct: CartProducts): void {
    let cartId = cartProduct.cartId;
    let productId = cartProduct.productId;
    let productQuantity = cartProduct.productQuantity;
    this.updateProductQuantityInCart(cartId, productId, productQuantity);
  }
  updateProductQuantityInCart(cartId: number, productId: number, productQuantity: number): void {
    console.log("this is before updateProductQuantityInCart()");
    this.cartService.myApiCallUpdateProductQuantity(cartId, productId, productQuantity).subscribe(res=>{
      console.log(JSON.stringify(res) + "myApiCallRemoveItem" )
      this.resultUpdateQuantity = res;
      console.log("status is : " + this.resultUpdateQuantity.status + ", message is : " + this.resultUpdateQuantity.message);
      console.log("Inside subscribe status is = " + this.resultUpdateQuantity.status);
      if (this.resultUpdateQuantity.status=="true") {
        console.log("Inside subscribe True status is = " + this.resultUpdateQuantity.status);
        // Reset cart
        this.getCartItems();
      } else{
        console.log("Inside subscribe False status is ="+this.resultUpdateQuantity.status);
      }
    });
    console.log("this is after updateProductQuantityInCart()") ;
  }

  // CART Page - Remove button click will remove specific product from cart
  removeItemFromCart(cartProduct: CartProducts): void {
    let cartId = cartProduct.cartId;
    let productId = cartProduct.productId;
    this.removeOneItemFromCart(cartId, productId);
  }
  removeOneItemFromCart(cartId: number, productId: number): void {
    console.log("this is before  removeItemFromCart()");
    this.cartService.myApiCallRemoveItem(cartId, productId).subscribe(res=>{
      console.log(JSON.stringify(res) + "myApiCallRemoveItem" )
      this.resultRemoveItem = res;
      console.log("status is : " + this.resultRemoveItem.status + ", message is : " + this.resultRemoveItem.message);
      console.log("Inside subscribe status is = " + this.resultRemoveItem.status);
      if (this.resultRemoveItem.status=="true") {
        this.globalData.cartProductCount -= 1;
        console.log("Inside subscribe True status is = " + this.resultRemoveItem.status);
        // Reset cart
        this.getCartItems();
        console.log("this.globalData.cartProductIds after delete = " + this.globalData.cartProductIds);
        let count: number = 0;
        for (var i in this.globalData.cartProductIds) {
          if (this.globalData.cartProductIds[i]==productId) {
            this.globalData.cartProductIds.splice(count,1);           
            break;
          }
          count++
        }
        console.log("this.globalData.cartProductIds after delete = " + this.globalData.cartProductIds);

      } else{
        console.log("Inside subscribe False status is ="+this.resultRemoveItem.status);
      }
    });
    console.log("this is after removeItemFromCart()");
  }

  // CART Page - Remove All button click will remove all the products from cart
  removeAllItemsFromCart(cartId: number): void {
    console.log("this is before  removeAllItemsFromCart()");
    this.cartService.myApiCallRemoveAllItems(cartId).subscribe(res=>{
      console.log(JSON.stringify(res) + "myApiCallRemoveItem" )
      this.resultRemoveAllItem = res;
      console.log("status is : " + this.resultRemoveAllItem.status + ", message is : " + this.resultRemoveAllItem.message);
      console.log("Inside subscribe status is = " + this.resultRemoveAllItem.status);
      if (this.resultRemoveAllItem.status=="true") {
        this.globalData.cartProductIds = [];
        this.globalData.cartProductCount = 0;
        console.log("Inside subscribe True status is = " + this.resultRemoveAllItem.status);
        // Reset cart
        this.getCartItems();
      } else{
        console.log("Inside subscribe False status is ="+this.resultRemoveAllItem.status);
      }
    });
   console.log("this is after removeAllItemsFromCart()");
  }


  // CART Page - Buy button click will buy specific cart item and remove the specific product from cart
  buyItemFromCart(cartProduct: CartProducts): void {
    console.log("Inside buyItemFromCart : " + this.cartJSON.cart.userId);
    let userId = this.cartJSON.cart.userId;
    let cartId = cartProduct.cartId;
    let productId = cartProduct.productId;
    let productQuantity = cartProduct.productQuantity;
    this.buyOneItemFromCart(userId, cartId, productId, productQuantity);
  }

  buyOneItemFromCart(userId: number, cartId: number, productId: number, productQuantity:number): void {
    console.log("this is before  buyOneItemFromCart()");
    this.cartService.myApiCallBuyItem(userId, cartId, productId, productQuantity).subscribe(res=>{
      console.log(JSON.stringify(res) + "myApiCallBuyItem" )
      this.resultBuyItem = res;
      console.log("status is : " + this.resultBuyItem.status + ", message is : " + this.resultBuyItem.message);
      console.log("Inside subscribe status is = " + this.resultBuyItem.status);
      if (this.resultBuyItem.status=="true") {
        this.globalData.cartProductCount -= 1;

        //this.currentOrderTrackingNumber=this.myOrders();
        //console.log("tracking number"+this.currentOrderTrackingNumber)

        //this.currentOrderTrackingNumber = this.resultBuyItem.order.orderTrackingNumber;
        this.orderCreationFlag = true;
        console.log("Inside subscribe True status is = " + this.resultBuyItem.status);
        // Reset cart
        this.getCartItems();
        let count: number = 0;
        for (var i in this.globalData.cartProductIds) {
          if (this.globalData.cartProductIds[i]==productId) {
            this.globalData.cartProductIds.splice(count,1); 
            break;
          }
          count++
        }

        

        console.log("this.globalData.cartProductIds after delete = " + this.globalData.cartProductIds);
      } else{
        console.log("Inside subscribe False status is ="+this.resultBuyItem.status);
      }
    });
    console.log("this is after buyOneItemFromCart()");
    
  }

  // CART Page - Buy All button click will craete and order for all cart items and remove all the products from cart
  buyAllItemsFromCart(cartId: number): void {
    console.log("this is before  buyAllItemsFromCart()");
    console.log("Inside buyItemFromCart : " + this.cartJSON.cart.userId);
    let userId = this.cartJSON.cart.userId;
    this.cartService.myApiCallBuyAllItems(userId, cartId).subscribe(res=>{
      console.log(JSON.stringify(res) + "myApiCallBuyAllItems" )
      this.resultBuyAllItem = res;
      console.log("status is : " + this.resultBuyAllItem.status + ", message is : " + this.resultBuyAllItem.message);
      console.log("Inside subscribe status is = " + this.resultBuyAllItem.status);
      if (this.resultBuyAllItem.status=="true") {
        this.globalData.cartProductIds = [];
        this.globalData.cartProductCount = 0;
        //this.currentOrderTrackingNumber = this.resultBuyAllItem.order.orderTrackingNumber;
        this.orderCreationFlag = true;
        console.log("Inside subscribe True status is = " + this.resultBuyAllItem.status);
        // Reset cart
        this.getCartItems();
      } else{
        console.log("Inside subscribe False status is ="+this.resultBuyAllItem.status);
      }
    });
   console.log("this is after buyAllItemsFromCart()");
  }

  
  /*myOrders():any{
    this.orderService.myApiCallMyOrders().subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.result = res;
      status=this.result.status;
      if (status=="true") {
        this.ordersJson = this.result.orders;
        for(var i in this.ordersJson) {
          this.orderJson.orderTrackingNumber = this.ordersJson[i].orderTrackingNumber;
          console.log("Tracking number========="+this.orderJson.orderTrackingNumber );
        }
      } else {
      }
    })
    return this.orderJson.orderTrackingNumber;
  }
*/
updateAddress(){
  alert("Please provide address to make an order");
  console.log("please set Account details");
  this.router.navigate(['account']);
}
}