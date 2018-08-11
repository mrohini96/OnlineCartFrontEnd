import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Http, Response } from '@angular/http';

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
  result2 : any;
  userJson={"name": "", "pswd": "" };

  constructor (private http :Http,private user:UserService) { 
    console.log("hello this header's constructor");

  }
  onSubmit():void{
  this.user.myApiCall().subscribe(res=>{
    console.log(JSON.stringify(res) +"test")
    this.result = res;
    this.result2=JSON.stringify(res)
    let status=this.result.status;
    let message=this.result.message;
    console.log("status is:"+status+"message is :"+message);
    console.log("status is:"+this.result.status);
    if (this.result.status=="true"){
    this.validate = true;
   }
    else{
     //this.validateDetails=true;
     this.validate = false;
   }
  }
);
}

  ngOnInit() {
  }

}
