import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { emailValidator, matchingPasswords } from './validators';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  userregister={"firstname": "","lastname": "", "name":"", "password": "" };
  registrationForm: FormGroup;
  register :boolean=false;
  isExistingUser: boolean=false;
  userloggedin :boolean=false;
  validate:boolean = false;
  validateDetails:boolean = false; 
  data : any= {}
  status:any;
  message:any;
  resultRegister: any;

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
    console.log(value);
    console.log("Registration successful")
    this.register=true;
  }

  onSubmit() {
    console.log("in onSubmit() function of RegisterComp")
    console.log("First Name is="+this.userregister.firstname);
    this.registerObj.myApiCall(this.userregister).subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.resultRegister = res;
      this.status=this.resultRegister.status;
      this.message=this.resultRegister.message;
      console.log("status is: "+this.status+"message is : "+this.message);
      console.log("Inside subscribe status is ="+this.resultRegister.status);
      if (this.resultRegister.status=="true"){
        console.log("Inside subscribe True status is ="+this.resultRegister.status);
        this.register=true;
        console.log("Inside subscribe register status is ="+this.register);
      } else{
        console.log("Inside subscribe False status is ="+this.resultRegister.status);
        this.isExistingUser=true;
        console.log("Inside subscribe False register status is ="+this.register);
      }
    });
    console.log("Outside subscribe status is ="+this.resultRegister.status);
  }

  ngOnInit() {
   
  }

}

