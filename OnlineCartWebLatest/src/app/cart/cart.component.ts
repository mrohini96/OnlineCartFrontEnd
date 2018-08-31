import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CART } from '../mockcart';
import { Cart } from '../cart';
import { CartProducts } from '../CartProducts';
import { CARTPRODUCTS } from '../mockcartproducts';
import { CARTPRODUCT } from '../mockcartproduct';


import { PRODUCTS } from '../mockproduct';
import { Product } from '../product';
import { GlobalData } from '../globaldata';
import { OrderService } from '../order.service';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private cartService:CartService,private router:Router, public globalData: GlobalData, private orderService:OrderService, private userService:UserService) {}

  cartUserJson={"userEmail": "", "firstName": "", "lastName": "", "userAddress": "","userCity": "","userState": "", "userCountry": "","userZip": "","userPhone": ""};
  public cartJSON: any;
  cart: Cart = CART;
  cartProducts: CartProducts[] = CARTPRODUCTS;
  resultUpdateQuantity: any;
  resultRemoveItem: any;
  resultRemoveAllItem: any;
  buyFlag: boolean = false;
  resultBuyItem: any;
  resultBuyAllItem: any;
  orderCreationFlag: boolean = false;
  currentOrderTrackingNumber: any;
  currentOrderDate: any;
  currentOrderAmount: number;
  ordersJson: any = [];
  orderJson={"userId":0, "orderId":0, "orderAmount":0, "orderShipAddress":"", "orderCity":"", "orderState":"", "orderCountry":"", "orderZip":"", "orderEmail":"", "orderPhone":"", "orderDate":"", "orderTrackingNumber":"", "orderDetails":[]};
  ordersJsonArray: any = [];
  result:any;
  productQuantityInvalidFlag: boolean = false;
  buyInvalidCartProduct={"productName":"","productQuantity":0,"availableQuantity":0};
  buyInvalidCartProducts: any = [];

 
  ngOnInit(): void {
    this.getCartItems();
    this.checkUserAccount();
    this.orderCreationFlag = false;
    this.productQuantityInvalidFlag = false;
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
          console.log(this.cartProducts[i].availableQuantity);
          console.log("after for loop-----------");
        }
      }
    })
  }

  // CART Page - On changing product quantity in the dropdown updateProductQuantity
  updateProductQuantity(cartProduct: CartProducts): void {
    this.orderCreationFlag = false;
    this.productQuantityInvalidFlag = false;
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
    this.orderCreationFlag = false;
    this.productQuantityInvalidFlag = false;
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
    this.orderCreationFlag = false;
    this.productQuantityInvalidFlag = false;
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
    this.orderCreationFlag = false;
    this.resetInvalidCartProducts();
    this.productQuantityInvalidFlag = false;
    console.log("Inside buyItemFromCart : " + this.cartJSON.cart.userId);
    let userId = this.cartJSON.cart.userId;
    let cartId = cartProduct.cartId;
    let productId = cartProduct.productId;
    let productQuantity = cartProduct.productQuantity;
    let availableQuantity = cartProduct.availableQuantity;
    if(productQuantity > availableQuantity) {
      console.log("Before buying, Please update the product quantity based on available quantity for the product: " + cartProduct.productName + ".");
      console.log("Product available quantity: " + availableQuantity);
      console.log("Product Quantity validation failed, hence returning.");
      this.buyInvalidCartProduct.productName = cartProduct.productName;
      this.buyInvalidCartProduct.productQuantity = cartProduct.productQuantity;
      this.buyInvalidCartProduct.availableQuantity = cartProduct.availableQuantity;
      console.log("this.buyInvalidCartProduct.productName:"+ this.buyInvalidCartProduct.productName + ", this.buyInvalidCartProduct.availableQuantity:" + this.buyInvalidCartProduct.availableQuantity);
      this.buyInvalidCartProducts.push(this.buyInvalidCartProduct);
      this.productQuantityInvalidFlag = true;
      return;
    }
    console.log("Product Quantity validation passed");
    console.log("Calling buyOneItemFromCart()");
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
        this.orderCreationFlag = true;
        console.log("Inside subscribe True status is = " + this.resultBuyItem.status);
        this.currentOrderTrackingNumber = this.resultBuyItem.order.orderTrackingNumber;
        this.currentOrderDate = this.resultBuyItem.order.orderDate;
        this.currentOrderAmount = this.resultBuyItem.order.orderAmount;
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

  // CART Page - Buy All button click will create and order for all cart items and remove all the products from cart
  buyAllItemsFromCart(cartId: number): void {
    this.orderCreationFlag = false;
    this.resetInvalidCartProducts();
    this.productQuantityInvalidFlag = false;
    this.getCartItems();
    let count: number = 0;
    for(var i in this.cartProducts) {
      console.log(this.cartProducts[i].productId);
      console.log(this.cartProducts[i].productName);
      console.log(this.cartProducts[i].productQuantity);
      console.log(this.cartProducts[i].availableQuantity);
      if(this.cartProducts[i].productQuantity > this.cartProducts[i].availableQuantity) {
        console.log("Before buying, Please update the product quantity based on available quantity for the product: " + this.cartProducts[i].productName + ".");
        console.log("Product available quantity: " + this.cartProducts[i].availableQuantity);
        this.buyInvalidCartProduct.productName = this.cartProducts[i].productName;
        this.buyInvalidCartProduct.productQuantity = this.cartProducts[i].productQuantity;
        this.buyInvalidCartProduct.availableQuantity = this.cartProducts[i].availableQuantity;
        this.buyInvalidCartProducts.push(this.buyInvalidCartProduct);
        count++;
      }
      this.resetInvalidCartProduct();
    }
    if (count>0) {
      console.log("Product Quantity validation failed, hence returning.");
      this.productQuantityInvalidFlag = true;
      return;
    }
    console.log("Product Quantity validation passed.");
    console.log("Calling buyAllItemFromCart()");
    this.buyAllItemFromCart(cartId);
  }
  
  buyAllItemFromCart(cartId: number): void {
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
        this.orderCreationFlag = true;
        console.log("Inside subscribe True status is = " + this.resultBuyAllItem.status);
        this.currentOrderTrackingNumber = this.resultBuyAllItem.order.orderTrackingNumber;
        this.currentOrderDate = this.resultBuyAllItem.order.orderDate;
        this.currentOrderAmount = this.resultBuyAllItem.order.orderAmount;
        // Reset cart
        this.getCartItems();
      } else{
        console.log("Inside subscribe False status is ="+this.resultBuyAllItem.status);
      }
    });
   console.log("this is after buyAllItemsFromCart()");
  }

  updateUserAccountToBuy(){
    alert("Please provide address to create an order.");
    console.log("Please update your Account details before buying.");
    this.router.navigate(['account']);
  }

  checkUserAccount(): void {
    console.log("this is getUserDetail()");
    this.userService.myApiCallGetUserDetail().subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.result = res;
      console.log("Result status is"+this.result.status);
      status=this.result.status;
      console.log("status is:"+this.result.status+"message is :"+this.result.message);
      if (status=="true") {
        this.cartUserJson.userEmail = this.result.user.userEmail;
        this.cartUserJson.firstName = this.result.user.firstName;
        this.cartUserJson.lastName = this.result.user.lastName;
        if (this.result.user.userAddress == undefined) {
          console.log("this.result.user.userAddress is undefined");
          this.cartUserJson.userAddress = "";
        } else {
          this.cartUserJson.userAddress = this.result.user.userAddress;      
        }
        if (this.result.user.userCity == undefined) {
          console.log("this.result.user.userCity is undefined");
          this.cartUserJson.userCity = "";
        } else {
          this.cartUserJson.userCity = this.result.user.userCity;
        }
        if (this.result.user.userState == undefined) {
          console.log("this.result.user.userState is undefined");
          this.cartUserJson.userState = "";
        } else {
          this.cartUserJson.userState = this.result.user.userState;
        }
        if (this.result.user.userCountry == undefined) {
          console.log("this.result.user.userCountry is undefined");
          this.cartUserJson.userCountry = "";
        } else {
          this.cartUserJson.userCountry = this.result.user.userCountry;
        }
        if (this.result.user.userZip == undefined) {
          console.log("this.result.user.userZip is undefined");
          this.cartUserJson.userZip = "";
        } else {
          this.cartUserJson.userZip = this.result.user.userZip;
        }
        if (this.result.user.userPhone == undefined) {
          console.log("this.result.user.userPhone is undefined");
          this.cartUserJson.userPhone = "";
        } else {
          this.cartUserJson.userPhone = this.result.user.userPhone;
        }
        if(this.cartUserJson.userAddress.trim()=="" || this.cartUserJson.userCity.trim()=="" || 
           this.cartUserJson.userState.trim()=="" || this.cartUserJson.userCountry.trim()=="" || 
           this.cartUserJson.userZip.trim()=="" || this.cartUserJson.userPhone.trim()=="") {
          this.buyFlag = false;
        } else {
          this.buyFlag = true;
        }       
      } else {

      }
    });
  }

  resetInvalidCartProduct(): void {
    this.buyInvalidCartProduct = {"productName":"","productQuantity":0,"availableQuantity":0};
  }
  resetInvalidCartProducts(): void {
    this.buyInvalidCartProduct = {"productName":"","productQuantity":0,"availableQuantity":0};
    this.buyInvalidCartProducts = [];
  }

}