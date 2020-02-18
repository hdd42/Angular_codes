import { Component, OnInit } from '@angular/core';
import {IUser} from "../user";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  user:IUser
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.user = this.productService.getUser()
    }, 700)

  }

}
