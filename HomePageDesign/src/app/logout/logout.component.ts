import { Component, OnInit } from '@angular/core';
import { Global } from '../globaldata';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private globalObj:Global,private router:Router) {}

  

  ngOnInit() {
    this.globalObj.userloggedin=false;
  }

}
