import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../user.service';
//import { Observable } from 'rxjs';
import {Products} from '../products';
import {PRODUCTS} from '../mockproduct';

import { UserResponse } from '../user';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-homepageheader',
  templateUrl: './homepageheader.component.html',
  styleUrls: ['./homepageheader.component.css']
})



export class HomepageheaderComponent implements OnInit {
  products = PRODUCTS;
  products2 :Products;

  validate:boolean = false;
  switchPage = "page1";
  userloggedin :boolean=false;
  private url=" ";
  data : Object;
  userResp:UserResponse;
 
  title: string;
  price : any;
  image: any;
  desc :any;
  pid:any;
  cid:any
  


  constructor (private http :Http, private user:UserService,private cartObj:CartService) { 
    console.log("hello this header's constructor");
    this.onSubmit();
    
   /* console.log("before my api");
    let test = this.user.myApiCall();
    console.log("after my api");
    console.log(test);
    console.log("after test"  +this.userResp);
*/
  }

 
  myApiCall() : void{
    this.user.myApiCall()
             .subscribe(
                 data => this.userResp= data,
                error => console.log("Error :: " + error),
              
             )
   console.log("inside myApiCall homepageheader " +this.userResp);
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

  productPage(){
    this.switchPage= "page7";
  }

signUpPage(){
  this.switchPage= "page8";
}

goBack(){
  this.switchPage= "page1";
}
  onSubmit() {
   this.userList.forEach((user) => {
    if (this.userJson.name == user.name && this.userJson.pswd == user.pswd ){
      this.validate = true;
      this.user.userDetails = user;
      this.userloggedin=true;
     
    }
   }) 
    }

   addToCart(productObj :Products):void{
    console.log("this is addtocart() in homepageheader");
 
    this.products2= productObj;
    console.log("this is using prodobj  "+this.products2.title);
   
    this.cartObj.addToCartService(this.products2);
  
    }

 ngOnInit() {
  
  console.log("Inside OnInit");
 // console.log("before MyApp call");
  let test = this.myApiCall();
  console.log("printing test data "+test);
  console.log(this.myApiCall());
 // console.log("After MyApp call " +this.userResp);
 
  }
  
}