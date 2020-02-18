import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-home-meta',
  templateUrl: './product-home-meta.component.html',
  styleUrls: ['./product-home-meta.component.css']
})
export class ProductHomeMetaComponent implements OnInit {

  @Output() limitEmitter: EventEmitter<number> = new EventEmitter();
  selectedLimit=10;
  isOpen=false
  constructor() { }

  ngOnInit(): void {
  }

  changeLimit(newLimit:number) {
    this.selectedLimit = newLimit
    this.isOpen = false;
    this.limitEmitter.emit(newLimit);
    console.log("Selected Limit :", this.selectedLimit)
  }
  toggleSelector(){
    this.isOpen = !this.isOpen
  }
}
