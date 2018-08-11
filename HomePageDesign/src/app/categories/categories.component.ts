import { Component, OnInit ,Input} from '@angular/core';
//import {Categories} from '../categories';
//import {CATEGORIES} from '../mock-categories';
import {CATEGORIES1} from '../mock-categories1';
import {Categories1} from '../categories1';
import {PRODUCTS} from '../mockproduct';
import { CategoryService } from '../category.service';

import { HttpClient } from '@angular/common/http';
import { Http } from '../../../node_modules/@angular/http';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
   //categories1 = CATEGORIES1;
   public categoriesJsonArray=CATEGORIES1;
   @Input() products =PRODUCTS;
   selectedcategory1: Categories1;
   switchPage = "page1";
   result: any;
  constructor(private http :Http,private categoryObj:CategoryService) { }

  getCategories():void{
    console.log("This is getCategories()");
    this.categoryObj.myApiCallCategory().subscribe(res=>{
    console.log(JSON.stringify(res) +"test")
    this.result = res;
    var categoryJson=this.result.categories;
    console.log(categoryJson);
    this.categoriesJsonArray=categoryJson;
    console.log("before for loop");
    for(var i in this.categoriesJsonArray){
      console.log(this.categoriesJsonArray[i]);
    }
    }
  );
  }

  imagepage2(){
    this.switchPage= "page6";

  }
  productPage(){
    this.switchPage= "page7";
  }


  onSelect(category1:Categories1): void {
      this.selectedcategory1 = category1;
     }

  // onSelect(category1:categoriesJsonArray): void {
  //   this.selectedcategory1 = category1;
  // }

  ngOnInit() {
    this.getCategories();
  }

}
