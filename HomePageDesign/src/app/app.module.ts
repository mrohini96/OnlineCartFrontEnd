import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageheaderComponent } from './homepageheader/homepageheader.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutwebsiteComponent } from './aboutwebsite/aboutwebsite.component';

@NgModule({
  declarations: [
   AppComponent,
   HomepageheaderComponent,
   SearchproductComponent,
   CategoriesComponent,
   AboutwebsiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
