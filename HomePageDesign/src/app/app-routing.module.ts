import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { HomepageheaderComponent } from './homepageheader/homepageheader.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: 'homepageheader', component: HomepageheaderComponent },
  { path: 'categories', component: CategoriesComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
