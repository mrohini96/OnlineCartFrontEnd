import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Http, Response } from '@angular/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validate:boolean = false;
  validateDetails:boolean = false; 
  userloggedin :boolean=false;
  result: any;
  status:any;
  message:any;
  userJson={"name": "", "pswd": "" };
  cartJsonArray: any;

  constructor (private http :Http,private user:UserService,private cartObj:CartService) { 
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
    this.cartJsonArray=cartJson;
    console.log("Cart Id is====="+this.cartJsonArray.cartId);
    console.log("status is:"+this.result.status+"message is :"+this.result.message);
    if (status=="true"){
    this.validate = true;
   }
    else{
      this.validateDetails=true;
     //this.validate = false;
   }
  }
);

console.log("this is after myapicall()");
}
  ngOnInit() {
  }

}
