import { Component, OnInit ,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { Categories } from '../Categories';
import { CATEGORIES } from '../mockcategories';
import { Product } from '../product';
import { PRODUCTS } from '../mockproduct';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { GlobalData } from '../globaldata';
import { CartService } from '../cart.service';
import { CartProducts } from '../CartProducts';
import { CARTPRODUCTS } from '../mockcartproducts';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  public categoriesJsonArray=CATEGORIES;
  selectedcategory: Categories;
  switchPage = "page1";
  resultProduct: any;
  resultCategory: any;
  public productsJsonArray: Product[] = PRODUCTS;
  public cartJSON: any;
  cartId: number;
  cartProductsJsonArray: CartProducts[] = CARTPRODUCTS;
  cartProductIds: number[] = [];
  resultAddProductToCart: any;

  constructor(private http:Http, private categoryService:CategoryService, private productService:ProductService, private cartService:CartService, private globalData:GlobalData) { }

  getProducts(): void {
    console.log("This is getProducts()");
    this.productService.myApiCallProduct().subscribe(res=>{
          console.log(JSON.stringify(res) +"test")
          this.resultProduct = res;
          var status=this.resultProduct.status;
          var message=this.resultProduct.message
          console.log("status is="+status+"Message is="+message);
          var productJson=this.resultProduct.products;
          console.log(productJson);
          this.productsJsonArray=productJson;
          console.log("before for loop");
          for(var i in this.productsJsonArray){
            console.log(this.productsJsonArray[i].productId);
            console.log(this.productsJsonArray[i].productName);
            this.productsJsonArray[i].productImage="assets/"+this.productsJsonArray[i].productImage;
            console.log(this.productsJsonArray[i].productImage); 
          }
    }); //myApiCallProduct subscribe call ends here
  }

  getCategories():void{
    console.log("This is getCategories()");
    this.categoryService.myApiCallCategory().subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.resultCategory = res;
      var categoryJson=this.resultCategory.categories;
      console.log(categoryJson);
      this.categoriesJsonArray=categoryJson;
      console.log("before for loop");
      for(var i in this.categoriesJsonArray){
        console.log(this.categoriesJsonArray[i]);
      }
    });
  }  
  
  getCartItems(): void {
    console.log("this is before fetchItemsForCart()" + this.globalData.userName);
    this.cartService.myApiCallCartView(this.globalData.userName).subscribe(res=>{
        console.log(JSON.stringify(res) + "test" )
        this.cartJSON = res;
        if(this.cartJSON.status == "true") {
          this.cartId = this.cartJSON.cart.cartId;
          console.log("cartId-----------" + this.cartJSON.cart.cartId);
          console.log("cartProductCount-----------" + this.cartJSON.cart.cartProductCount);
          this.cartProductsJsonArray = this.cartJSON.cart.cartProducts;
          for(var i in this.cartProductsJsonArray) {
            console.log("this.cartProductsJsonArray[i].productId" + this.cartProductsJsonArray[i].productId);
            this.cartProductIds[i] = this.cartProductsJsonArray[i].productId;
          }
        } else {

        }
    })
  }
  
  addProductToCart(productId:number):void {
    // this.getCartItems();
    this.cartService.myApiCallCartView(this.globalData.userName).subscribe(res=>{
        console.log(JSON.stringify(res) + "test" )
        this.cartJSON = res;
        if(this.cartJSON.status == "true") {
          this.cartId = this.cartJSON.cart.cartId;
          console.log("cartId-----------" + this.cartJSON.cart.cartId);
          console.log("cartProductCount-----------" + this.cartJSON.cart.cartProductCount);
          let cartId = this.cartId;
          console.log("cartId : " + cartId);   
          this.cartService.myApiCallAddProductToCart(cartId, productId).subscribe(res=>{
            console.log(JSON.stringify(res) + "myApiCallRemoveItem" )
            this.resultAddProductToCart = res;
            console.log("status is : " + this.resultAddProductToCart.status + ", message is : " + this.resultAddProductToCart.message);
            console.log("Inside subscribe status is = " + this.resultAddProductToCart.status);
            if (this.resultAddProductToCart.status=="true") {
              console.log("Inside subscribe True status is = " + this.resultAddProductToCart.status);
              // Reset cart
              this.getCartItems();
              for (var i in this.productsJsonArray) {
                if (this.productsJsonArray[i].productId == productId) {
                  console.log("this.productsJsonArray[i].productId = " + this.productsJsonArray[i].productId);
                  console.log("productId = " + productId);
                  this.globalData.cartProductIds.push(productId);
                  this.productsJsonArray[i].productCartEnableFlag = true;
                }
              }
              this.globalData.cartProductCount++;
            } else{
              console.log("Inside subscribe False status is ="+this.resultAddProductToCart.status);
            }
          });
         } else {
          console.log("Inside subscribe False status is ="+this.resultAddProductToCart.status);
         }
      })
    console.log("this is addProductToCart() in Homepageheader " + productId);   

    console.log("this is after addProductToCart()") ;

  }

  imagepage2(){
    this.switchPage= "page6";
  }

  productPage(){
    this.switchPage= "page7";
  }

  onSelectCategory(category:Categories): void {
    this.selectedcategory = category;
    for (var i in this.productsJsonArray) {
      for(var j in this.cartProductIds) {
        console.log("**************************************PRODUCT ka productId = " + this.productsJsonArray[i].productId);
        console.log("**************************************CART ka productId = " + this.cartProductIds[j]);
        if(this.productsJsonArray[i].productId == this.cartProductIds[j]) {
          this.productsJsonArray[i].productCartEnableFlag = true;
        }
      }
    }
  }

  ngOnInit() {
    this.getCartItems();
    this.getProducts();
    this.getCategories();
  }

}
