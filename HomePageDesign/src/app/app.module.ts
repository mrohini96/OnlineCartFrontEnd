import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { AppComponent } from './app.component';

import { HomepageheaderComponent } from './homepageheader/homepageheader.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutwebsiteComponent } from './aboutwebsite/aboutwebsite.component';

import { FilterPipe} from './filter.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpModule} from '@angular/http';
@NgModule({
  declarations: [
   AppComponent,
   HomepageheaderComponent,
   SearchproductComponent,
   CategoriesComponent,
   AboutwebsiteComponent,
   FilterPipe,
   LoginComponent
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
