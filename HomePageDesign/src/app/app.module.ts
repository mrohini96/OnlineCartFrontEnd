import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { UserService } from './user.service';
import { AppComponent } from './app.component';

import { HomepageheaderComponent } from './homepageheader/homepageheader.component';

import { CategoriesComponent } from './categories/categories.component';


import { FilterPipe} from './filter.pipe';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule} from '@angular/http';
import { ProductFilterPipe } from './product-filter.pipe';
import { FooterComponent } from './footer/footer.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';


import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component'; 
import { Global } from './globaldata';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { RegisterService } from './register.service';
@NgModule({
  declarations: [
   AppComponent,
   HomepageheaderComponent,
   
   CategoriesComponent,
  
   FilterPipe,
   
   ProductFilterPipe,
   
   FooterComponent,
   
   ProductpageComponent,
   
   RegisterComponent,
   
   CartComponent,
   
   WishlistComponent,
   
   LoginComponent,
   
   AccountComponent
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [UserService,Global,CartService,ProductService,RegisterService],
  bootstrap: [AppComponent],
})
export class AppModule { }
