import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { HomepageheaderComponent } from './homepageheader/homepageheader.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomepageheaderComponent},
  { path: 'categories', component: CategoriesComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'account',component:AccountComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
