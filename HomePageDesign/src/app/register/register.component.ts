import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';


import { emailValidator, matchingPasswords } from './validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  register :boolean=false;

  constructor(public fb: FormBuilder) {
   
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
    console.log(value);
    console.log("registration successful")
    this.register=true;
  }
  
  ngOnInit() {
  }

}

