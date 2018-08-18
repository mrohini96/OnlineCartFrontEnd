import { Component, OnInit } from '@angular/core';
import { GlobalData } from '../globaldata';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  userJson={"userEmail": "", "firstName": "", "lastName": "", "userAddress": "","userCity": "","userState": "", "userCountry": "","userZip": "","userPhone": ""};
  accountSetFlag:string
  myOrdersFlag:boolean=false;
  accountHelpFlag:boolean=false;
  result:any;
  validate:boolean=false;
  validateDetails:boolean=false;
  
  constructor(private globalData:GlobalData,private userService:UserService) { }
  
  updateAccount(): void{
    console.log("City Name is="+this.userJson.userCity);
    console.log("this is before myapicall()");
    this.userService.myApiCallAccount(this.userJson).subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.result = res;
      console.log("Result status is"+this.result.status);
      status=this.result.status;
      console.log("status is:"+this.result.status+"message is :"+this.result.message);
      if (status=="true") {
        this.validate=true;
      } else{
        this.validateDetails=false;
      }
    });
  }
  //{"userId":1,"userEmail":"Chinmaya@gmail.com","password":"password","firstName":"Chinmaya",
  //"lastName":"Pradhan","userCity":"Bangalore","userState":"Karnataka","userCountry":"India",
  //"userAddress":"SarvabhaumaNagar,BGRoad,NearIIM","userZip":"560076","userPhone":"8880675227"}}
  getUserDetail(): void {
    console.log("this is getUserDetail()");
    this.userService.myApiCallGetUserDetail().subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.result = res;
      console.log("Result status is"+this.result.status);
      status=this.result.status;
      console.log("status is:"+this.result.status+"message is :"+this.result.message);
      if (status=="true") {
        this.userJson.userEmail = this.result.user.userEmail;
        this.userJson.firstName = this.result.user.firstName;
        this.userJson.lastName = this.result.user.lastName;
        this.userJson.userAddress = this.result.user.userAddress;
        this.userJson.userCity = this.result.user.userCity;
        this.userJson.userState = this.result.user.userState;
        this.userJson.userCountry = this.result.user.userCountry;
        this.userJson.userZip = this.result.user.userZip;
        this.userJson.userPhone = this.result.user.userPhone;
      } else{
      }
    });
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
    this.getUserDetail();
  }

}
