import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {IGetResponse, IProduct} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<IProduct>
  errorMessage = "";
  response: IGetResponse<IProduct>

  constructor(private productService: ProductService, private router:Router) {
  }

  ngOnInit(): void {
    this.fetchProducts({})
  }

  async fetchProducts({skip = 0, limit = 10}) {
    this.errorMessage = "";
    try {
      const result = await this.productService.getProducts({skip, limit})
      this.response = result;
      this.products = this.response.data
    } catch (e) {
      this.errorMessage = e.message
    }

  }

  refresh() {
    this.fetchProducts({})
  }

  navigate(product: IProduct): void {
    console.log("Prodc ", product)
    this.router.navigate(['/products',product._id])
  }

}
