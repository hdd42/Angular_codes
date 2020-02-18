import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-operation',
  templateUrl: './product-operation.component.html',
  styleUrls: ['./product-operation.component.css']
})
export class ProductOperationComponent implements OnInit {
  mode =''
  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe(params =>{
        if (params.get('mode')){
          this.mode = params.get('mode')
          console.log(`Mode : ${this.mode}`)
        }
      })
  }

}
