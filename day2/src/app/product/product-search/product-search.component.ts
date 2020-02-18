import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter , } from "rxjs/operators";

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter();
  search :FormControl;
  constructor() {
    this.search = new FormControl();
  }


  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        ///filter(val => !!val && val.length >2),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(val => {
      console.log("Val : ", val)
      this.searchEmitter.emit(val);
    })


  }

}
