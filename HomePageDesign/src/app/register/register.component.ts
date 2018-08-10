import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { emailValidator, matchingPasswords } from './validators';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  register :boolean=false;
  userloggedin :boolean=false;
  validate:boolean = false;
  validateDetails:boolean = false; 
  data : any= {}
  //userResp:UserResponse;
  result: any;
  result2 : any;

  constructor(public fb: FormBuilder,private registerObj:RegisterService) {
   
     // Example use of FormBuilder, FormGroups, and FormControls
     this.registrationForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required,  emailValidator])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
     
    }, {validator: matchingPasswords('password', 'confirmPassword')})

   }

   submitRegistration(value: Object): void {

    console.log("This is submitRegistration()");
    this.registerObj.myApiCall().subscribe(res=>{
    console.log(JSON.stringify(res) +"test")
    this.result = res;
    this.result2=JSON.stringify(res)
    let status=this.result.status;
    let message=this.result.message;
    console.log("status is:"+status+"message is :"+message);
    
    }
  );
  if (this.result.status=="true"){
    this.validate = true;
   }
   else{
     this.validateDetails=true;
   }
    console.log(value);
    console.log("Registration successful")
    this.register=true;
  }
  
  ngOnInit() {
  }

}

