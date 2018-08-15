import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../user.service';
//import { Observable } from 'rxjs';
import {Products} from '../products';
import {PRODUCTS} from '../mockproduct';

import { UserResponse } from '../user';

import { CartService } from '../cart.service';
import {WishlistService} from '../wishlist.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-homepageheader',
  templateUrl: './homepageheader.component.html',
  styleUrls: ['./homepageheader.component.css']
})



export class HomepageheaderComponent implements OnInit {
  public productsJsonArray = PRODUCTS;
  productsArray :Products;
  storeItems: Products[] = [];
  validate:boolean = false;
  validateDetails:boolean = false; 
  switchPage = "page1";
  userloggedin :boolean=false;
  private url=" ";
  data : any= {}
  userResp:UserResponse;
  result: any;
  constructor (private http :Http, private productObj:ProductService,private user:UserService,private cartObj:CartService,private wishlistObj:WishlistService) { 
  console.log("hello this header's constructor");
  }

  getProducts():void{

    console.log("This is getProducts()");
    this.productObj.myApiCallProduct().subscribe(res=>{
    console.log(JSON.stringify(res) +"test")
    this.result = res;
    var status=this.result.status;
    var message=this.result.message
    console.log("status of products is======"+status+"Message of products is====="+message);
    this.productsJsonArray=this.result.products;
    console.log("before for loop-----------");
    for(var i in this.productsJsonArray){
      console.log(this.productsJsonArray[i].productId);
      console.log(this.productsJsonArray[i].productName);
      this.productsJsonArray[i].productImage="assets/"+this.productsJsonArray[i].productImage;
      console.log(this.productsJsonArray[i].productImage);
      console.log("after for loop-----------");
    }
    }
  );
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
  
  moveCart(){

  this.switchPage="page3"

  }

  // getCartId(cartJsonArray):void{
  // console.log("cart ID in HomePageheader is ====="+cartJsonArray.cartId)
  // }
  moveWishList(){

    this.switchPage="page9"
  
    }
  
  movePage(){
    this.switchPage = "page2";
  }


  movecategories(){
    this.switchPage= "page4";
  }

  logout(){
    this.switchPage= "page5";

  }

  showUserDetails(){
   //this.showLogin = true;
   this.switchPage= "page10";
  }
  imagepage2(){
    this.switchPage= "page6";

  }
  productPage(productsArrayObj :Products){
    this.productsArray=productsArrayObj;
    console.log("this is product title "+this.productsArray.productName
  );
  //this.switchPage= "page7";
  }
 /* productPage(){
    this.switchPage= "page7";
  }
*/
signUpPage(){
  this.switchPage= "page8";
}

goBack(){
  this.switchPage= "page1";
}

onSubmit() {
  console.log("status is:"+this.result.status);
  //this.userList.forEach((user) => {
 //  if (this.userJson.name == user.name && this.userJson.pswd == user.pswd && this.result.status=="true"){
  //   this.validate = true;
   //  this.user.userDetails = user;
  // }
 // }) 
 if (this.result.status=="true"){
  this.validate = true;
 }
 else{
   this.validateDetails=true;
 }
   } 

getStoreItems(): void {
  this.storeItems = this.cartObj.getItems();
  this.storeItems=this.wishlistObj.getItemsForWishlist();
}

addToCart(id:number):void{
var Id=id;
console.log("this is addtocart() in Homepageheader "+Id);   
this.cartObj.addToCartService(id);

}
addToWishlist(id:number):void{
  console.log("this is addtowishlist() in homepageheader");   
  this.wishlistObj.addToWishlistService(id);
  
  }

 ngOnInit() {
  this.getProducts();
  this.getStoreItems();
 
  }
}
