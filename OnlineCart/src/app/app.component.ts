import { Component,ViewChild,AfterViewInit, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { CartService } from './cart.service';
import { GlobalData } from './globaldata';
import { User } from './user';
import { USER } from './mockuser';
import { Product } from './product';
import { PRODUCTS } from './mockproduct';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  validateDetails:boolean = false;   
  isValidationFailure:boolean = false; 
  resultLogin:any;
  userJson = {"name": "", "password": "" };
  // public productsJsonArray = PRODUCTS;
  productsArray: Product;
  resultProduct: any;

  constructor(private router:Router,private userService:UserService,private cartService:CartService,private productService:ProductService,private globalData:GlobalData) {
  }
  
  title = 'Online Shopping Cart';

  onLogin():void { 
    console.log("First Name is = " + this.userJson.name);
    console.log("this is before myApiCallLogin()");
    this.userService.myApiCallLogin(this.userJson).subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.resultLogin = res;
      console.log("Result status is"+this.resultLogin.status);
      status=this.resultLogin.status;
      var cartJson=this.resultLogin.cart;
      console.log(cartJson);
      //this.cartService.getCartDetails(cartJson);
      console.log("status is:"+this.resultLogin.status+"message is :"+this.resultLogin.message);
      if (status=="true") {
        this.globalData.loginEnableFlag = true;
        this.globalData.userName = this.userJson.name;
        console.log("*********************GLOBAL DATA data = " + this.globalData.data);
        this.cartService.getCartDetails(cartJson);
        this.globalData.cartProductCount = this.resultLogin.cart.cartProductCount;
        console.log("*********************GLOBAL DATA cartProductCount = " + this.globalData.cartProductCount);
        // this.globalData.cartProductIds = [1,2,3,4];
        // console.log("cartProductIds = " + this.globalData.cartProductIds);
        for(var i in cartJson.cartProducts) {
          this.globalData.cartProductIds[i] = cartJson.cartProducts[i].productId;
          console.log("cartProductIds = " + this.globalData.cartProductIds[i]);
        }
        console.log("cartProductIds = " + this.globalData.cartProductIds);
        // this.router.navigate(['home']);
        this.getProducts();
      } else { 
        this.globalData.loginEnableFlag = false;
        this.isValidationFailure=true;
        this.validateDetails=true;
      }
    });
    console.log("this is after myApiCallLogin()");
  }

  onLogout() {
    console.log("This is logout");
    this.globalData.loginEnableFlag = false;
    this.globalData.cartProductCount = 0;
    this.globalData.cartProductIds = [];
    this.router.navigate(['home']);
    this.globalData.userName = null;
  }

  getProducts():void{
    console.log("This is getProducts()");
    this.productService.myApiCallProduct().subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.resultProduct = res;
      var status=this.resultProduct.status;
      var message=this.resultProduct.message
      console.log("status of products is======"+status+"Message of products is====="+message);
      this.globalData.productsJsonArray=this.resultProduct.products;
      for(var i in this.globalData.productsJsonArray) {
        console.log("before for loop productsJsonArray-----------"+i);
        console.log(this.globalData.productsJsonArray[i].productId);
        console.log(this.globalData.productsJsonArray[i].productName);
        this.globalData.productsJsonArray[i].productImage="assets/"+this.globalData.productsJsonArray[i].productImage;
        console.log(this.globalData.productsJsonArray[i].productImage);
        for (var j in this.globalData.cartProductIds) {
          console.log("before for loop globalData.cartProductIds-----------"+j);
          if(this.globalData.productsJsonArray[i].productId == this.globalData.cartProductIds[j]) {
            this.globalData.productsJsonArray[i].productCartEnableFlag = true;
            console.log("this.productsJsonArray[i].productCartEnableFlag = " + this.globalData.productsJsonArray[i].productId);
            break;
          }
          console.log("after for loop globalData.cartProductIds-----------"+j);
        }
        console.log("after for loop productsJsonArray-----------"+i);
      }
    });
  }
  getUrl()
  {
    return "url('assets/background-image.jpg')";
  }
  loginerr(){
     console.log("loginerr() method begin Validate details value =="+this.validateDetails);
     this.validateDetails=false;
     console.log("loginerr() method end Validate details value =="+this.validateDetails);
  }
  ngOnInit() {
    this.globalData.data = "ABC";
    console.log("Printing global data=="+ this.globalData.data);
    this.router.navigate(['']);
  }
  
}