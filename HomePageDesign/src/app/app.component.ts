import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){
  }
  title = 'Online Shopping Cart';
  logout(){
    console.log("This is logout");
  }

  movePage(){
    console.log("This is account");
  }
  ngOnInit(){
 this.router.navigate(['']);
  }
  
}
