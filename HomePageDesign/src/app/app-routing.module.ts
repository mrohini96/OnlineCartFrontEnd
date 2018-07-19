import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { HomepageheaderComponent } from './homepageheader/homepageheader.component';

const routes: Routes = [
  { path: 'homepageheader', component: HomepageheaderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
