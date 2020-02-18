import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductHomeComponent} from "./product/product-home/product-home.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {ProductOperationComponent} from "./product/product-operation/product-operation.component";


const routes: Routes = [
  {path: "", redirectTo: "product", pathMatch: "full"},
  {path: "product", component:ProductHomeComponent},
  {path: "product/:id", component:ProductOperationComponent},
  {path: "category", component:CategoryListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
