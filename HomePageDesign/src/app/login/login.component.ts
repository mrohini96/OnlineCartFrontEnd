import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// someProperty:string = '';
 // form: FormGroup;
 //form = new FormGroup({
  //userName: new FormControl('Rohini'),
 // password: new FormControl('1234'),
//});
//get username(): any { return this.form.get('userName'); }
  constructor(private user:UserService) { }

  ngOnInit() {
     //this.someProperty = this.user.myData();
  }
  onSubmit() {
    // console.log(this.form.value);
  //  if (this.form.valid) {
  // this.user.myData(this.form.value);
   //alert("login successful");
   this.user.myData();
    }
}
