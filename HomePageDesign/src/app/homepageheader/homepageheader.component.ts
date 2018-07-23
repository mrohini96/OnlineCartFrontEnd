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