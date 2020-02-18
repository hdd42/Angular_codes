import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import {ProductHomeComponent} from "./product/product-home/product-home.component";
import {ProductSearchComponent} from "./product/product-search/product-search.component";
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductOperationComponent } from './product/product-operation/product-operation.component';
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import { ProductHomeMetaComponent } from './product/product-home-meta/product-home-meta.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductFormComponent } from './product/product-form/product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    CategoryListComponent,
    ProductHomeComponent,
    ProductSearchComponent,
    ProductItemComponent,
    ProductOperationComponent,
    ProductHomeMetaComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:'API' , useValue:environment.API_BASE}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
