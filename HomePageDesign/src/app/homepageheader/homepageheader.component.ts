import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../user.service';
//import { Observable } from 'rxjs';




@Component({
  selector: 'app-homepageheader',
  templateUrl: './homepageheader.component.html',
  styleUrls: ['./homepageheader.component.css']
})
export class HomepageheaderComponent implements OnInit {
  validate:boolean = false;
  switchPage = "page1";
  private url=" ";
  data : any= {};

  constructor (private http :Http, private user:UserService) { 
    console.log("hello this header's constructor");
    this.onSubmit();
    let test = this.user.myApiCall();
    console.log(test);
  }

  userJson={"name": "", "pswd": "" };
  userList = [
    {
      "name": "Satya",
      "pswd": "hi"
    },
    {
      "name": "Rohini",
      "pswd": "12345"
    },
    {
      "name": "Nivedita",
      "pswd": "1234"
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

  imagepage2(){
    this.switchPage= "page6";

  }

  onSubmit() {
   this.userList.forEach((user) => {
    if (this.userJson.name == user.name && this.userJson.pswd == user.pswd ){
      this.validate = true;
    }
   }) 
    }
 ngOnInit() {

  }
  
}