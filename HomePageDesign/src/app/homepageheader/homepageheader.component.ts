import { Component, OnInit } from '@angular/core';

//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-homepageheader',
  templateUrl: './homepageheader.component.html',
  styleUrls: ['./homepageheader.component.css']
})
export class HomepageheaderComponent implements OnInit {
  //someProperty:string = '';
 // form: FormGroup;

  constructor(private user:UserService) { }
  ngOnInit() {
  // this.someProperty = this.user.myData();
  }
  onSubmit() {
   
 //  if (this.form.valid) {
  //this.user.myData(this.form.value);
  alert("login successful");
   }
 } 

