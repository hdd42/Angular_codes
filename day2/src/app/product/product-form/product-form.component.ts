import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input('mode') mode = 'add'
  pageTitle = ''
  productForm: FormGroup;

  constructor(private productService:ProductService, private router:Router) {

    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl(0, [Validators.required, Validators.min(1)]),
      description: new FormControl(''),
      imgUrl: new FormControl('')
    })
  }

  ngOnInit(): void {
    if (this.mode === 'add') {
      this.pageTitle = 'Add a new Product'
    }else{
      this.pageTitle ='Edit Product'
    }
    //this.productForm.get('name').valueChanges.subscribe(val => console.log('val : ',val))
  }

  onSubmit(){
    console.log(this.productForm.value)
    if (this.mode ==='add'){
      this.addProduct()
    }
  }

  addProduct(){
    console.log("Form : ", this.productForm.value)
    this.productService.addProduct(this.productForm.value)
      .subscribe(resp =>{
        this.router.navigate(['/product'])
      }, (err =>{
        console.log("err : ", err);
        this.productForm.reset();
      }))
  }

}
