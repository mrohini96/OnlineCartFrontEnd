import { Component, OnInit ,Input} from '@angular/core';
//import {Categories} from '../categories';
//import {CATEGORIES} from '../mock-categories';
import {CATEGORIES1} from '../mock-categories1';
import {Categories1} from '../categories1';
import {PRODUCTS} from '../mockproduct';
import { CategoryService } from '../category.service';

import { HttpClient } from '@angular/common/http';
import { Http } from '../../../node_modules/@angular/http';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
   //categories1 = CATEGORIES1;
   public categoriesJsonArray=CATEGORIES1;
  // @Input() products =PRODUCTS;
   selectedcategory1: Categories1;
   switchPage = "page1";
   result: any;
   public productsJsonArray = PRODUCTS;
  constructor(private http :Http,private categoryObj:CategoryService,private productObj:ProductService) { }

  getProducts():void{

    console.log("This is getProducts()");
    this.productObj.myApiCallProduct().subscribe(res=>{
    console.log(JSON.stringify(res) +"test")
    this.result = res;
    var status=this.result.status;
    var message=this.result.message
    console.log("status is="+status+"Message is="+message);
    var productJson=this.result.products;
    console.log(productJson);
    this.productsJsonArray=productJson;
    console.log("before for loop");
    for(var i in this.productsJsonArray){
      console.log(this.productsJsonArray[i].productId);
      console.log(this.productsJsonArray[i].productName);
      this.productsJsonArray[i].productImage="assets/"+this.productsJsonArray[i].productImage;
      console.log(this.productsJsonArray[i].productImage);
    }
    }
  );
  }


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
    this.getProducts();
    this.getCategories();
  }

}
