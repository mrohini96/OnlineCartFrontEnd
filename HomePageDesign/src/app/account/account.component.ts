import { Component, OnInit } from '@angular/core';
import { Global } from '../globaldata';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userJson={"name": "","city": "","state": "", "country": "","address1": "","address2": "","phone": ""};
  accountSetFlag:string
  myOrdersFlag:boolean=false;
  accountHelpFlag:boolean=false;
  result:any;
  validate:boolean=false;
  validateDetails:boolean=false;
  constructor(private globalObj:Global,private user:UserService) { }
  updateAccount(){
    console.log("City Name is="+this.userJson.city);
    console.log("this is before myapicall()");
    this.user.myApiCallAccount(this.userJson).subscribe(res=>{
    console.log(JSON.stringify(res) +"test")
    this.result = res;
    console.log("Result status is"+this.result.status);
    status=this.result.status;
    console.log("status is:"+this.result.status+"message is :"+this.result.message);
    if (status=="true"){
      this.validate=true;
    }
    else{
      this.validateDetails=false;
    }
  }
);
  }
  accountSetting(){
  
  this.accountSetFlag='account';
 
  }
  myOrders(){
    this.accountSetFlag='orders';
    
  }
  accountHelp(){
    this.accountSetFlag='help';
  }

  ngOnInit() {
  }

}
