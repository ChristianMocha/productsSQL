import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlAPI = 'http://3.67.225.113:5555/api/products'

  constructor(private http: HttpClient) { 
  }

  getProducts(){
   return this.http.get(this.urlAPI);
  }

  addProduct(producto: Product){
    
    return this.http.post<Product>(this.urlAPI, producto)
  }
}
