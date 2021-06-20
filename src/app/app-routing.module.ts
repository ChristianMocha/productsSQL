import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';

const routes: Routes = [
  {  path: 'home', component: HomeComponent},
  {  path: 'createProducts', component: CreateProductsComponent},
  {  path: '', pathMatch: 'full', redirectTo: 'home'},
  {  path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
