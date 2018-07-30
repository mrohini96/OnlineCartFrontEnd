import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
@NgModule({
  declarations: [
   AppComponent,
   HomepageheaderComponent,
   
   CategoriesComponent,
  
   FilterPipe,
   
   ProductFilterPipe,
   
   FooterComponent,
   
   ProductpageComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
