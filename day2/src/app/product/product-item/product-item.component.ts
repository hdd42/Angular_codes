import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {IGetResponse, IProduct} from "../models/Product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  host: {
   'class': 'clr-col-4'
  }
})
export class ProductItemComponent implements OnInit {
  //@HostBinding('class.clr-col-4') colClass = true;
  isHover = false;
  toBeDeleted=false;
  @Output() deleteEmitter: EventEmitter<IProduct> = new EventEmitter();

  @Input('product') product :IProduct
  constructor() { }

  ngOnInit(): void {

  }

  deleteProduct(){
    this.toBeDeleted = true;
  }

  confirmDelete() {
    this.deleteEmitter.emit(this.product)
    this.toBeDeleted = false;
  }
}
