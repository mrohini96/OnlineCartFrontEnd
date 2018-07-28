import { Component, OnInit } from '@angular/core';
//import {Categories} from '../categories';
//import {CATEGORIES} from '../mock-categories';
import {CATEGORIES1} from '../mock-categories1';
import {Categories1} from '../categories1';
import {Products} from '../products';
import {PRODUCTS} from '../mockproduct';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
   categories1 = CATEGORIES1;
   products = PRODUCTS;
  selectedcategory1: Categories1;
  constructor() { }

  ngOnInit() {
  }

    onSelect(category1: Categories1): void {
    this.selectedcategory1 = category1;
  }
}
