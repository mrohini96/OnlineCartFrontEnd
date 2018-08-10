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
  // getProducts(): any {
  //   throw new Error("Method not implemented.");
  //}
  products = PRODUCTS;
  products2 :Products;
  storeItems: Products[] = [];

  validate:boolean = false;
  validateDetails:boolean = false; 
  switchPage = "page1";
  userloggedin :boolean=false;
  private url=" ";
  data : any= {}
  userResp:UserResponse;
  result: any;
  result2 : any;
  title: string;
  price : any;
  image: any;
  desc :any;
  pid:any;
  cid:any
  


  constructor (private http :Http, private productObj:ProductService,private user:UserService,private cartObj:CartService,private wishlistObj:WishlistService) { 
    console.log("hello this header's constructor");
   // this.onSubmit();
    
   /* console.log("before my api");
    let test = this.user.myApiCall();
    console.log("after my api");
    console.log(test);
    console.log("after test"  +this.userResp);
*/

  this.user.myApiCall().subscribe(res=>{
  console.log(JSON.stringify(res) +"test")
  this.result = res;
  this.result2=JSON.stringify(res)
  let status=this.result.status;
  let message=this.result.message;
  console.log("status is:"+status+"message is :"+message);
  
  }
);

  }


  getProducts():void{

    console.log("This is getProducts()");
    this.productObj.myApiCallProduct().subscribe(res=>{
    console.log(JSON.stringify(res) +"test")
    this.result = res;
    var status=this.result.status;
    var message=this.result.message
    console.log("status is="+status+"Message is="+message);
    var productJson=this.result.products;
    console.log(productJson);
    for(var i in productJson){
      console.log(productJson[i].productId);
      console.log(productJson[i].productName);
    }
    }
  );
  }
 /*
  myApiCall() : void{
    this.user.myApiCall()
             .subscribe(
                 data => this.userResp= data,
                error => console.log("Error :: " + error),
              
             )
   console.log("inside myApiCall homepageheader " +this.userResp);
  }
*/
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
   this.showLogin = true;
  }
  imagepage2(){
    this.switchPage= "page6";

  }
  productPage(products3 :Products){
    this.products2=products3;
    console.log("this is product title "+this.products2.title);
   // this.switchPage= "page7";
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

/*
onSubmit() {
   if (this.result.status=="true"){
     this.validate = true;
   }
   }
*/
getStoreItems(): void {
  this.storeItems = this.cartObj. getItemsForCart();
  this.storeItems=this.wishlistObj.getItemsForWishlist();
}

addToCart(id:number):void{
console.log("this is addtocart() in homepageheader");   
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
