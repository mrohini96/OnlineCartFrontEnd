import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../user.service';
//import { Observable } from 'rxjs';
import {Products} from '../products';
import {PRODUCTS} from '../mockproduct';


@Component({
  selector: 'app-homepageheader',
  templateUrl: './homepageheader.component.html',
  styleUrls: ['./homepageheader.component.css']
})
export class HomepageheaderComponent implements OnInit {
  products = PRODUCTS;
  validate:boolean = false;
  switchPage = "page1";
  private url=" ";
  data : any= {};

  constructor (private http :Http, private user:UserService) { 
    console.log("hello this header's constructor");
    this.onSubmit();
    
    console.log("before my api");
    let test = this.user.myApiCall();
    console.log("after my api");

    console.log(test);
    console.log("after test");

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
    this.showLogin = !this.showLogin;


  }
  imagepage2(){
    this.switchPage= "page6";

  }

  onSubmit() {
   this.userList.forEach((user) => {
    if (this.userJson.name == user.name && this.userJson.pswd == user.pswd ){
      this.validate = true;
      this.user.userDetails = user;
    }
   }) 
    }
 ngOnInit() {

  }
  
}