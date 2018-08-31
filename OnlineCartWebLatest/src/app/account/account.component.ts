import { Component, OnInit } from '@angular/core';
import { GlobalData } from '../globaldata';
import { UserService } from '../user.service';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { OrderDetail } from '../orderDetail';
import { ORDER } from '../mockorder';
import { ORDERS } from '../mockorders';
import { ORDERDETAIL } from '../mockorderdetail';
import { ORDERDETAILS } from '../mockorderdetails';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  userJson={"userEmail": "", "firstName": "", "lastName": "", "userAddress": "","userCity": "","userState": "", "userCountry": "","userZip": "","userPhone": ""};
  accountSetFlag:string;
  myOrdersFlag:boolean=false;
  accountHelpFlag:boolean=false;
  result:any;
  validate:boolean=false;
  unvalidate:boolean=false;
  ordersJson:any=[];
  orderJson={"userId":0, "orderId":0, "orderAmount":0, "orderShipAddress":"", "orderCity":"", "orderState":"", "orderCountry":"", "orderZip":"", "orderEmail":"", "orderPhone":"", "orderDate":"", "orderTrackingNumber":"", "orderDetails":[]}
  ordersJsonArray:any=[];
  orderDetailJson={"orderId":0, "productId":0, "productQuantity":0, "productName":"", "productDesc":"", "productPrice":0, "availableQuantity":0}
  orderDetailJsonArray: OrderDetail[]=ORDERDETAILS;
  myOrderDetailJsonArray: any=[];
  resetInvalidFlag: boolean = false;
  resetInvalidItem: String = "";

  constructor(public globalData:GlobalData, private userService:UserService, private orderService:OrderService) { }
  
  updateAccount(): void{
    this.validate=false;
    this.unvalidate=false;
    this.resetInvalidFlag = false;
    this.resetInvalidItem = "";
    console.log("Address="+this.userJson.userAddress);
    console.log("City="+this.userJson.userCity);
    console.log("State="+this.userJson.userState);
    console.log("Country="+this.userJson.userCountry);
    console.log("Zip="+this.userJson.userZip);
    console.log("Phone="+this.userJson.userPhone);
    let resetAddress: String = this.userJson.userAddress;
    let resetCity: String = this.userJson.userCity;
    let resetState: String = this.userJson.userState;
    let resetCountry: String = this.userJson.userCountry;
    let resetZip: String = this.userJson.userZip;
    let resetPhone: String = this.userJson.userPhone;
    if(resetAddress==null || resetAddress.trim()=="") {
      this.resetInvalidFlag = true;
      this.resetInvalidItem = "Address";
      console.log("resetAddress is null or Empty");
      return;
    } else if(resetCity==null || resetCity.trim()=="") {
      this.resetInvalidFlag = true;
      this.resetInvalidItem = "City";
      console.log("resetCity is null or Empty");
      return;
    } else if(resetState==null || resetState.trim()=="") {
      this.resetInvalidFlag = true;
      this.resetInvalidItem = "State";
      console.log("resetState is null or Empty");
      return;
    } else if(resetCountry==null || resetCountry.trim()=="") {
      this.resetInvalidFlag = true;
      this.resetInvalidItem = "Country";
      console.log("resetCountry is null or Empty");
      return;
    } else if(resetZip==null || resetZip.trim()=="") {
      this.resetInvalidFlag = true;
      this.resetInvalidItem = "Zip";
      console.log("resetZip is null or Empty");
      return;
    } else if(resetPhone==null || resetPhone.trim()=="") {
      this.resetInvalidFlag = true;
      this.resetInvalidItem = "Phone";
      console.log("resetPhone is null or Empty");
      return;
    }

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
        this.unvalidate=false;
      }
    });
   
  }

  resetAccount(): void {
    this.validate=false;
    this.unvalidate=false;
  }
  //{"userId":1,"userEmail":"Chinmaya@gmail.com","password":"password","firstName":"Chinmaya",
  //"lastName":"Pradhan","userCity":"Bangalore","userState":"Karnataka","userCountry":"India",
  //"userAddress":"Sarvabhauma Nagar, BGRoad, NearIIM","userZip":"560076","userPhone":"8880675227"}}
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
      } else {

      }
    });
  }

  accountSetting(){
    this.accountSetFlag='account';
    this.ordersJsonArray=[];
    this.validate=false;
    this.getUserDetail();
  }

  myOrders(){
    this.orderService.myApiCallMyOrders().subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.result = res;
      console.log("Result status is"+this.result.status);
      status=this.result.status;
      this.ordersJsonArray=[];
      console.log("status is:"+this.result.status+"message is :"+this.result.message);
      if (status=="true") {
        this.ordersJson = this.result.orders;
        for(var i in this.ordersJson) {
          this.orderJson.orderId = this.ordersJson[i].orderId;
          this.orderJson.orderAmount = this.ordersJson[i].orderAmount;
          this.orderJson.orderShipAddress = this.ordersJson[i].orderShipAddress;
          this.orderJson.orderCity = this.ordersJson[i].orderCity;
          this.orderJson.orderState = this.ordersJson[i].orderState;
          this.orderJson.orderCountry = this.ordersJson[i].orderCountry;
          this.orderJson.orderZip = this.ordersJson[i].orderZip;
          this.orderJson.orderEmail = this.ordersJson[i].orderEmail;
          this.orderJson.orderPhone = this.ordersJson[i].orderPhone;
          this.orderJson.orderTrackingNumber = this.ordersJson[i].orderTrackingNumber;
          this.orderJson.orderDate=this.ordersJson[i].orderDate;
          this.orderDetailJsonArray = this.ordersJson[i].orderDetails;
          for (var j in this.orderDetailJsonArray) {
            this.orderDetailJson.orderId = this.orderDetailJsonArray[j].orderId;
            this.orderDetailJson.productId = this.orderDetailJsonArray[j].productId;
            this.orderDetailJson.productQuantity = this.orderDetailJsonArray[j].productQuantity;
            this.orderDetailJson.productName = this.orderDetailJsonArray[j].productName;
            this.orderDetailJson.productDesc = this.orderDetailJsonArray[j].productDesc;
            this.orderDetailJson.productPrice = this.orderDetailJsonArray[j].productPrice;
            this.orderDetailJson.availableQuantity = this.orderDetailJsonArray[j].availableQuantity;
            this.myOrderDetailJsonArray.push(this.orderDetailJson);
            this.cleanOrderDetailJson(this.orderDetailJson);
          }
          this.orderJson.orderDetails = this.myOrderDetailJsonArray;
          this.myOrderDetailJsonArray = [];
          this.ordersJsonArray.push(this.orderJson);
          this.cleanOrderJson(this.orderJson);
        }
        console.log("Array length="+this.ordersJsonArray.length);
        this.accountSetFlag='orders';   
      } else {
      }
    })
  }

  cleanOrderJson(OrderJson: any): void {
    this.orderJson={"userId":0, "orderId":0, "orderAmount":0, "orderShipAddress":"", "orderCity":"", "orderState":"", "orderCountry":"", "orderZip":"", "orderEmail":"", "orderPhone":"", "orderDate":"", "orderTrackingNumber":"", "orderDetails":[]};  
  }

  cleanOrderDetailJson(OrderDetailJson: any): void {
    this.orderDetailJson={"orderId":0, "productId":0, "productQuantity":0, "productName":"", "productDesc":"", "productPrice":0, "availableQuantity":0};
  }

  accountHelp(){
    this.accountSetFlag='help';
    this.ordersJsonArray=[];
    this.validate=false;
    this.getUserDetail();
  }

  ngOnInit() {
    this.getUserDetail();
    this.accountSetFlag='account';
    this.resetInvalidFlag = false;
    this.resetInvalidItem = "";
  }
}
