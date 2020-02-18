import { Component, OnInit } from '@angular/core';
import {IGetResponse, IProduct} from "../models/Product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  productsResponse:IGetResponse<IProduct[]>

  isLoading=false;
  selectedLimit=10;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.fetchProducts({limit:this.selectedLimit, skip:0})
  }

   fetchProducts({limit, skip, searchTerm=null}) {
    this.isLoading = true;
     this.productService.getProducts({limit, skip, searchTerm})
       .then(response=> {
         this.productsResponse = response;

         this.isLoading = false
       })
       .catch(err => {
         console.log(err)
         this.isLoading =false
       })
  }

  limitChange($event: number) {
    this.productsResponse.data =[];
    this.selectedLimit = $event
    this.fetchProducts({limit:$event, skip:0})
  }

  searchProducts($event: string) {
    console.log("new search", $event)
    this.fetchProducts({limit:this.selectedLimit, skip:0, searchTerm:$event})
  }

  deleteProduct($event: IProduct) {
    console.log("delete :", $event)
    this.productService.deleteProduct($event._id)
      .subscribe(result => {
        if (result){
          this.fetchProducts({limit:this.selectedLimit, skip:0})
        }
      },(err => console.log(err)))
  }
}
