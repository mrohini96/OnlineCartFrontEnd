import { Injectable } from '@angular/core';

import {Products} from './products';
import {PRODUCTS} from './mockproduct';

import { CartComponent } from './cart/cart.component';
import {HomepageheaderComponent} from './homepageheader/homepageheader.component';
import { Observable, of } from 'rxjs';
import { cart } from './cart';
import {CART} from './mockcart';
import { CartProductsArray } from './CartProducts';
import { ProductService } from './product.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
    constructor(private http: HttpClient) { }
    public cartJsonArray = cart;
    public cartProductJsonArray= CartProductsArray;
    public homeObj:HomepageheaderComponent;
    selectedItems:Products[] = [];
    public productsJsonArray = PRODUCTS;
    private productObj:ProductService;
    result:any;



    getProducts():void{

      console.log("This is getProducts() in cart service");
      this.productObj.myApiCallProduct().subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.result = res;
      var status=this.result.status;
      var message=this.result.message
      console.log("status of products is in cart service======"+status+"Message of products is in cart service====="+message);
      this.productsJsonArray=this.result.products;
      console.log("before for loop in cart service-----------");
      for(var i in this.productsJsonArray){
        console.log(this.productsJsonArray[i].productId);
        console.log(this.productsJsonArray[i].productName);
        this.productsJsonArray[i].productImage="assets/"+this.productsJsonArray[i].productImage;
        console.log(this.productsJsonArray[i].productImage);
        console.log("after for loop in cart service-----------");
      }
      }
    );
    }

        getCartDetails(cartJson):any{
        console.log("-----Inside getCartDetails()---")
        console.log("Getting cart details-----");
        //this.cartJsonArray=cartJson.cart.cartProducts;
        this.cartJsonArray=cartJson;
        //console.log("Before getCartId() function");
        //this.homeObj.getCartId(cartJson);
        //console.log("After getCartId() function");
        this.cartProductJsonArray=cartJson.cartProducts;
        console.log("cart Id is ="+this.cartJsonArray.cartId);
        console.log("User Id is="+this.cartJsonArray.userId);
        console.log("Cart Product Count Is="+this.cartJsonArray.cartProductCount);
        console.log("Cart Total Price Is="+this.cartJsonArray.CartTotalPrice);
        
        for(var i in this.cartProductJsonArray){
          console.log("Cart ID from CartProducts Is===="+this.cartProductJsonArray[i].cartId);
          console.log("Product Id from CartProducts Is===="+this.cartProductJsonArray[i].productId);
          console.log("Product Quantity from CartProducts Is====="+this.cartProductJsonArray[i].productQuantity);

        }   
    }
    
    getProductCount():any{
      console.log("inside getProductCount() and product count for user ID"+this.cartJsonArray.userId+"is"+this.cartJsonArray.userId);
      return (this.cartJsonArray.cartProductCount);
    }
      getItems():Products[]  {
      console.log("getitemsforcart");
      return this.productsJsonArray;
      }

      getSelectedItems():Products[] {
      console.log("getSelectedItems()");
      return this.selectedItems;
      }	
    

      addToCartService(id:number){
      console.log("inside addtocart service");
      let item =this.productsJsonArray.find(ob => ob.productId === id);
      if (this.selectedItems.indexOf(item) < 0) {	   
      this.selectedItems.push(item);
       
    }
     }
     removeItem(id:number): void {
      let item = this.selectedItems.find(ob => ob.productId === id);
      let itemIndex = this.selectedItems.indexOf(item);
        this.selectedItems.splice(itemIndex, 1);
         // this.productObj1.splice(0, 1);
      console.log("iTEM HAS been removed");
     }
     myApiCallCartView(){
      console.log("this is myapi() in ProductService");
      let header= new HttpHeaders({})
      return this.http.get("http://localhost:8080/onlinecart-1.0/onlinecart/cart/view?name=Chinmaya@gmail.com")
     }
  
}

