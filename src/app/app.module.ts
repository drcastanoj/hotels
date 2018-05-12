import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {CoreModule} from './core/core.module';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModule,
    HomeModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
