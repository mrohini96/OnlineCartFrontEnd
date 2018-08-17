import { Component, OnInit } from '@angular/core';
import { Global } from '../globaldata';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private globalObj:Global) { }

  ngOnInit() {
  }

}
