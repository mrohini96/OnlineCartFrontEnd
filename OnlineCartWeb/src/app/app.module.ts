import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { FilterPipe} from './filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ProductFilterPipe } from './product-filter.pipe';

import { AppComponent } from './app.component';
import { HomepageheaderComponent } from './homepageheader/homepageheader.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component'; 

import { GlobalData } from './globaldata';
import { UserService } from './user.service';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { RegisterService } from './register.service';

@NgModule({
  declarations: [
    FilterPipe,
    ProductFilterPipe,
    AppComponent,
    HomepageheaderComponent,
    CategoriesComponent,
    FooterComponent,
    AccountComponent,
    ProductpageComponent,
    RegisterComponent,
    CartComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GlobalData,UserService,CartService,ProductService,RegisterService],
  bootstrap: [AppComponent],
})

export class AppModule { }
