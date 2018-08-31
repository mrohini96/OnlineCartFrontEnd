import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { HomepageheaderComponent } from './homepageheader/homepageheader.component';

import { Product } from './product';
import { PRODUCTS } from './mockproduct';
import { Cart } from './cart';
import { CartProducts } from './CartProducts';
import { CARTPRODUCTS } from './mockcartproducts';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private http: HttpClient) { }

  private productService: ProductService;
  public productsJsonArray = PRODUCTS;
  public homeObj:HomepageheaderComponent;
  public cartJsonArray = Cart;
  public cartProductJsonArray= CARTPRODUCTS;
  resultProduct:any;

  getProducts():void{
    console.log("This is getProducts() in cart service");
    this.productService.myApiCallProduct().subscribe(res=>{
      console.log(JSON.stringify(res) +"test")
      this.resultProduct = res;
      var status=this.resultProduct.status;
      var message=this.resultProduct.message
      console.log("status of products is in cart service======"+status+"Message of products is in cart service====="+message);
      this.productsJsonArray=this.resultProduct.products;
      console.log("before for loop in cart service-----------");
      for(var i in this.productsJsonArray){
        console.log(this.productsJsonArray[i].productId);
        console.log(this.productsJsonArray[i].productName);
        this.productsJsonArray[i].productImage="assets/"+this.productsJsonArray[i].productImage;
        console.log(this.productsJsonArray[i].productImage);
        console.log("after for loop in cart service-----------");
      }
    });
  }

  getCartDetails(cartJson):any{ 
    console.log("Getting cart details-----");
    this.cartJsonArray=cartJson;
    console.log("Before getCartId() function");
    this.cartProductJsonArray=cartJson.cartProducts;
    console.log("cart Id is = " + this.cartJsonArray.cartId);
    console.log("User Id is = " + this.cartJsonArray.userId);
    console.log("Cart Product Count Is = " + this.cartJsonArray.cartProductCount);
    console.log("Cart Total Price Is = "+this.cartJsonArray.cartTotalPrice);
    for(var i in this.cartProductJsonArray){
      console.log("Cart ID from CartProducts Is = " + this.cartProductJsonArray[i].cartId);
      console.log("Product Id from CartProducts Is = "+ this.cartProductJsonArray[i].productId);
      console.log("Product Quantity from CartProducts Is = "+this.cartProductJsonArray[i].productQuantity);
    } 
    console.log("After getCartId() function");  
  }
    
  myApiCallCartView(userEmail:any) {
    console.log("Inside Login myapicall()" + userEmail);
    let header = new HttpHeaders({})
    let urlstart = environment.appBaseUrl + "/onlinecart/cart/view?";
    let url = urlstart + "name="+userEmail;
    console.log("Complete url is="+url);
    return this.http.get(url);
  }

  myApiCallUpdateProductQuantity(cartId: any, productId: any, productQuantity: any) {
    console.log("this is myApiCallUpdateProductQuantity() in CartService");
    console.log("cartId:"+cartId+", productId:"+productId+", productQuantity:"+productQuantity);
    let header= new HttpHeaders({})
    let urlstart = environment.appBaseUrl + "/onlinecart/cart/updateproductquantity?";
    let url = urlstart + "cartid="+cartId+"&productid="+productId+"&productquantity="+productQuantity;
    console.log("Complete url is = " + url);
    return this.http.get(url);
  }

  myApiCallAddProductToCart(cartId: any, productId: any) {
    console.log("this is myApiCallRemoveItem() in CartService");
    console.log("cartId:"+cartId+", productIds:"+productId);
    let header= new HttpHeaders({})
    let urlstart = environment.appBaseUrl + "/onlinecart/product/addtocart?";
    let url = urlstart + "cartid="+cartId+"&productid="+productId;
    console.log("Complete url is="+url);
    return this.http.get(url);
  }

  myApiCallRemoveItem(cartId: any, productId: any) {
    console.log("this is myApiCallRemoveItem() in CartService");
    console.log("cartId:"+cartId+", productIds:"+productId);
    let header= new HttpHeaders({})
    let urlstart = environment.appBaseUrl + "/onlinecart/cart/removeproducts?";
    let url = urlstart + "cartid="+cartId+"&productids="+productId;
    console.log("Complete url is="+url);
    return this.http.get(url);
  }

  myApiCallRemoveAllItems(cartId: any) {
    console.log("this is myApiCallRemoveAllItems() in CartService");
    console.log("cartId:"+cartId);
    let header= new HttpHeaders({})
    let urlstart = environment.appBaseUrl + "/onlinecart/cart/removeallproducts?";
    let url = urlstart + "cartid="+cartId;
    console.log("Complete url is="+url);
    return this.http.get(url);
  }

  myApiCallBuyItem(userId: any, cartId: any, productId: any, productQuantity: any) {
    console.log("this is myApiCallRemoveItem() in CartService");
    console.log("cartId:"+cartId+", productIds:"+productId);
    let header= new HttpHeaders({})
    let urlstart = environment.appBaseUrl + "/onlinecart/cart/createproductorder?";
    let url = urlstart + "userid="+userId+"&cartid="+cartId+"&productid="+productId+"&productquantity="+productQuantity;
    console.log("Complete url is="+url);
    return this.http.get(url);
  }

  myApiCallBuyAllItems(userId: any, cartId: any) {
    console.log("this is myApiCallRemoveAllItems() in CartService");
    console.log("cartId:"+cartId);
    let header= new HttpHeaders({})
    let urlstart = environment.appBaseUrl + "/onlinecart/cart/createorder?";
    let url = urlstart + "userid="+userId+"&cartid="+cartId;
    console.log("Complete url is="+url);
    return this.http.get(url);
  }
}

