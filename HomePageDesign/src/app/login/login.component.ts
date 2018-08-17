import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Http, Response } from '@angular/http';
import { CartService } from '../cart.service';
import { Global } from '../globaldata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validate:boolean = false;
  validateDetails:boolean = false; 
  result: any;
  status:any;s
  message:any;
  userJson={"name": "", "pswd": "" };
  cartJsonArray: any;

  constructor (private http :Http,private user:UserService,private cartObj:CartService,private globalObj:Global) { 
    console.log("hello this header's constructor");

  }
   onSubmit():void{
    console.log("First Name is="+this.userJson.name);
    console.log("this is before myapicall()");
    this.user.myApiCall(this.userJson).subscribe(res=>{
    console.log(JSON.stringify(res) +"test")
    this.result = res;
    console.log("Result status is"+this.result.status);
    status=this.result.status;
    var cartJson=this.result.cart;
    console.log(cartJson);
    this.cartObj.getCartDetails(cartJson)
    console.log("status is:"+this.result.status+"message is :"+this.result.message);
    if (status=="true"){
      this.validate = true;
      this.globalObj.userloggedin=true;
      console.log("UserLoggedIn value"+this.globalObj.userloggedin);
      
   }
    else{
      this.validateDetails=true;
      this.globalObj.userloggedin=false;
     //this.validate = false;
   }
  }
);
console.log("this is after myapicall()");
}
  ngOnInit() {
  }

}
