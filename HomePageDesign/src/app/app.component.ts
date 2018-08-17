import { Component, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit{
  
 
  constructor(private router:Router,private globalObj:Global){
  }
  title = 'Online Shopping Cart';
  logout():any{
    this.globalObj.userloggedin=false;
    this.router.navigate(['home']);
  }
  ngOnInit(){
  this.router.navigate(['']);
  }
}