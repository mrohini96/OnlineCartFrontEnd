import { Component, OnInit ,Input} from '@angular/core';
//import {Categories} from '../categories';
//import {CATEGORIES} from '../mock-categories';
import {CATEGORIES1} from '../mock-categories1';
import {Categories1} from '../categories1';
import {PRODUCTS} from '../mockproduct';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
   categories1 = CATEGORIES1;
   @Input() products =PRODUCTS;
   selectedcategory1: Categories1;

  switchPage = "page1";

  constructor() { }
  
  imagepage2(){
    this.switchPage= "page6";

  }
  productPage(){
    this.switchPage= "page7";
  }


  ngOnInit() {
  }

    onSelect(category1: Categories1): void {
    this.selectedcategory1 = category1;
  }
}
