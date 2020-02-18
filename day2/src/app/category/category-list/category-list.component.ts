import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ICategory } from 'src/app/product/models/Product';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  categories:Array<ICategory>;

  ngOnInit(): void {
    this.categoryService.getCategories()
    .then(response => this.categories = response)
    .catch(err => console.log(err))
  }

}
