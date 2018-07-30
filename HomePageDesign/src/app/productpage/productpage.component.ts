import { Component, OnInit } from '@angular/core';

import {CATEGORIES1} from '../mock-categories1';
import {Categories1} from '../categories1';

import {PRODUCTS} from '../mockproduct';
@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
