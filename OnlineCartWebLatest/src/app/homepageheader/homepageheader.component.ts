import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../user.service';
import { Product } from '../product';
import { PRODUCTS } from '../mockproduct';
import { UserResponse } from '../user';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { GlobalData } from '../globaldata';

@Component({
  selector: 'app-homepageheader',
  templateUrl: './homepageheader.component.html',
  styleUrls: ['./homepageheader.component.css']
})

export class HomepageheaderComponent implements OnInit {
  // public productsJsonArray = PRODUCTS;
  productsArray: Product;
  storeItems: Product[] = [];
  public cartJSON: any;
  cartId: number;
  validate:boolean = false;
  validateDetails:boolean = false; 
  switchPage = "page1";
  userloggedin :boolean=false;
  private url=" ";
  data : any= {}
  userResp:UserResponse;
  resultProduct: any;
  resultAddProductToCart: any;
  showProductDetail:boolean = false; 
  constructor (private http:Http, private productService:ProductService, private userService:UserService, private cartService:CartService, private globalData:GlobalData) { 
    console.log("hello this header's constructor");
  }

  getProducts():void{
    console.log("This is getProducts()");
    this.productService.myApiCallProduct().subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.resultProduct = res;
      var status=this.resultProduct.status;
      var message=this.resultProduct.message
      console.log("status of products is======"+status+"Message of products is====="+message);
      this.globalData.productsJsonArray=this.resultProduct.products;
      console.log("before for loop productsJsonArray-----------" + this.globalData.cartProductIds);
      for(var i in this.globalData.productsJsonArray) {
        console.log(this.globalData.productsJsonArray[i].productId);
        console.log(this.globalData.productsJsonArray[i].productName);
        this.globalData.productsJsonArray[i].productImage="assets/"+this.globalData.productsJsonArray[i].productImage;
        console.log(this.globalData.productsJsonArray[i].productImage);
        console.log("before for loop this.globalData.cartProductIds-----------");
        for (var j in this.globalData.cartProductIds) {
          if(this.globalData.productsJsonArray[i].productId == this.globalData.cartProductIds[j]) {
            this.globalData.productsJsonArray[i].productCartEnableFlag = true;
            console.log("this.productsJsonArray[i].productId = " + this.globalData.productsJsonArray[i].productId);
            break;
          }
        }
        console.log("after for loop this.globalData.cartProductIds-----------");
      }
      console.log("after for loop productsJsonArray-----------");
    });
  }

  // HomePage - Post successful login get the Cart
  getCartItems(): void {
    console.log("this is before fetchItemsForCart()" + this.globalData.userName);
      this.cartService.myApiCallCartView(this.globalData.userName).subscribe(res=>{
        console.log(JSON.stringify(res) + "test" )
        this.cartJSON = res;
        if(this.cartJSON.status == "true") {
          this.cartId = this.cartJSON.cart.cartId;
          console.log("cartId-----------" + this.cartJSON.cart.cartId);
          console.log("cartProductCount-----------" + this.cartJSON.cart.cartProductCount);
         } else {

         }
      })
    }

  addProductToCart(productId:number):void {
    // this.getCartItems();
    this.cartService.myApiCallCartView(this.globalData.userName).subscribe(res=>{
        console.log(JSON.stringify(res) + "test" )
        this.cartJSON = res;
        if(this.cartJSON.status == "true") {
          this.cartId = this.cartJSON.cart.cartId;
          console.log("cartId-----------" + this.cartJSON.cart.cartId);
          console.log("cartProductCount-----------" + this.cartJSON.cart.cartProductCount);
          let cartId = this.cartId;
          console.log("cartId : " + cartId);   
          this.cartService.myApiCallAddProductToCart(cartId, productId).subscribe(res=>{
            console.log(JSON.stringify(res) + "myApiCallRemoveItem" )
            this.resultAddProductToCart = res;
            console.log("status is : " + this.resultAddProductToCart.status + ", message is : " + this.resultAddProductToCart.message);
            console.log("Inside subscribe status is = " + this.resultAddProductToCart.status);
            if (this.resultAddProductToCart.status=="true") {
              console.log("Inside subscribe True status is = " + this.resultAddProductToCart.status);
              // Reset cart
              this.getCartItems();
              for (var i in this.globalData.productsJsonArray) {
                if (this.globalData.productsJsonArray[i].productId == productId) {
                  console.log("this.productsJsonArray[i].productId = " + this.globalData.productsJsonArray[i].productId);
                  console.log("productId = " + productId);
                  this.globalData.cartProductIds.push(productId);
                  this.globalData.productsJsonArray[i].productCartEnableFlag = true;
                }
              }
              this.globalData.cartProductCount++;
            } else{
              console.log("Inside subscribe False status is ="+this.resultAddProductToCart.status);
            }
          });
         } else {
          console.log("Inside subscribe False status is ="+this.resultAddProductToCart.status);
         }
      })
    console.log("this is addProductToCart() in Homepageheader " + productId);   

    console.log("this is after addProductToCart()") ;

  }

  addProductToWishlist(productId:number):void {
    console.log("this is addtowishlist() in homepageheader" + productId);   
  }

  showLogin: boolean = false;
  userJson={"name": "", "pswd": "" };
  userList = [
    {
      "name": "Satya",
      "pswd": "hi",
      "email": "satya.g@gmail.com"
    },
    {
      "name": "Rohini",
      "pswd": "12345",
      "Email": "rohini@gmail.com"
    },
    {
      "name": "Nivedita",
      "pswd": "1234",
      "Email": "nivedita@gmail.com"
    }
  ];
  
  moveCart() {
    this.switchPage="page3"
  }

  moveWishList() {
    this.switchPage="page9"
  }
  
  movePage() {
    this.switchPage = "page2";
  }

  movecategories() {
    this.switchPage= "page4";
  }

  logout() {
    this.switchPage= "page5";
  }

  showUserDetails(){
    this.switchPage= "page10";
  }

  imagepage2(){
    this.showProductDetail = false;
    this.switchPage= "page6";
  }

  productPage(productsArrayObj :Product){
    this.showProductDetail = true;
    this.productsArray=productsArrayObj;
    console.log("this is product title "+this.productsArray.productName);
  }

  signUpPage(){
    this.switchPage= "page8";
  }

  goBack(){
    this.showProductDetail = false;
    this.switchPage= "page1";
  }

  onSubmit() {
    console.log("status is:"+this.resultProduct.status);
    if (this.resultProduct.status=="true"){
      this.validate = true;
    } else{
      this.validateDetails=true;
    }
  } 

  ngOnInit() {
    this.showProductDetail = false;
    this.getProducts();
  }

}
