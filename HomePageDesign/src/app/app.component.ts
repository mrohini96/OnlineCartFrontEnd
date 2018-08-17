import { Component, OnInit} from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { CartService } from './cart.service';
import { Global } from './globaldata';
import { cart } from './cart';
import { CartProductsArray } from './CartProducts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
 
  constructor(private router:Router,private userObj:UserService,private cartObj:CartService,private globalObj:Global){
  }
  title = 'Online Shopping Cart';
  ngOnInit(){
  this.router.navigate(['']);
  
  }
}