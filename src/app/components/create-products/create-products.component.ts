import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent implements OnInit {

  product: Product = <Product>{};


  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  async addProducts(){
    await this.productService.addProduct(this.product).subscribe(
      res => {
        this.router.navigate(['/home']);
      }
    )
  }

}
