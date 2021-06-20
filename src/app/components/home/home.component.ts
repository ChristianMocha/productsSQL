import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  nuevosProducts: any[] = [];

  constructor( private productsService: ProductsService, private router: Router ) { 
    
  }
  
  ngOnInit(): void {
    this.getProducts();
  }
  
  async getProducts(){
    await this.productsService.getProducts().subscribe(
      (res:any) => {
        this.nuevosProducts = res;
      }
    )
  }

  newProduct(){
    this.router.navigate(['createProducts']);
  }

}
