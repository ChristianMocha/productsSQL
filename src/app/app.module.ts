import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateProductsComponent,
    NavbarComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
