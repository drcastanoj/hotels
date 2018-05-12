import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FilterUserComponent } from './filter-user/filter-user.component';
import { CardHotelComponent } from './card-hotel/card-hotel.component';


const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    HomeComponent,
    FilterUserComponent,
    CardHotelComponent
  ],
  providers: [
  ]
})
export class HomeModule { }