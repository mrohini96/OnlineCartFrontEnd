/*import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/add/operator/map';



@Component({
  selector: 'app-homepageheader',
  templateUrl: './homepageheader.component.html',
  styleUrls: ['./homepageheader.component.css']
})
export class HomepageheaderComponent implements OnInit {
  private url=" ";
  data : any= {};
  constructor (private http :Http, private user:UserService) { 
    console.log("hello this header's constructor");
    this.onSubmit();
    let test = this.user.myApiCall();
    console.log(test);
  }
  validate:boolean = false;
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


  ngOnInit() {
 
  }
  onSubmit() {
   this.userList.forEach((user) => {
    if (this.userJson.name == user.name && this.userJson.pswd == user.pswd ){
      this.validate = true;
    }
   }) 
  } 
 
  
} */


import { Component, OnInit } from '@angular/core';

//import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-homepageheader',
  templateUrl: './homepageheader.component.html',
  styleUrls: ['./homepageheader.component.css']
})
export class HomepageheaderComponent implements OnInit {
 
  constructor () { }
  validate:boolean = false;
  switchPage = "page1";
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