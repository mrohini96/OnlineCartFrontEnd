import { Component,ViewChild,AfterViewInit} from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { CartService } from './cart.service';
import { Global } from './globaldata';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  //userloggedin :boolean=false;

  showLogin:boolean=false;
  
  @ViewChild(LoginComponent) login;
  constructor(private router:Router,private userObj:UserService,private cartObj:CartService,private globalObj:Global){
  }
  title = 'Online Shopping Cart';
  logout(){
    console.log("This is logout");
    localStorage.removeItem('currentUser');
  }

  movePage(){
    console.log("This is account");
  }
  ngAfterViewInit() {
    this.showLogin = this.login.userloggedin;
  }
  ngOnInit(){
  console.log("Printing global data=="+this.globalObj.data);
  this.router.navigate(['']);
  var productCount=this.cartObj.getProductCount();
  console.log("printing product count ==="+productCount);
  }
}