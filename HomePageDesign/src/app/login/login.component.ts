import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:UserService) { }
  validate:boolean = false;
  userJson={"name": "", "pswd": "" };
  ngOnInit() {
     //this.someProperty = this.user.myData();
  }

}
