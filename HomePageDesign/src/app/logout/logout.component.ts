import { Component, OnInit } from '@angular/core';
import { Global } from '../globaldata';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private globalObj:Global) { }

  

  ngOnInit() {
  this.globalObj.userloggedin=false;
  }

}
