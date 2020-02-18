import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IGetResponse, IProduct} from "./models/Product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(@Inject('API') private API_BASE , private http:HttpClient) {

  }

  getProducts({limit, skip,searchTerm}):Promise<IGetResponse<IProduct[]>>{
    console.log("searchTerm : ", searchTerm)
    const url = `${this.API_BASE}/api/products`;
    let params = new HttpParams()
      .set('limit',limit)
      .set('skip',skip)
      .set('searchTerm', searchTerm)

    return this.http.get<IGetResponse<IProduct[]>>(url,{params}).toPromise();
  }

  deleteProduct(productId:string):Observable<boolean>{
    const url = `${this.API_BASE}/api/products/${productId}`;
     return this.http.delete<boolean>(url);
  }

  addProduct(product:IProduct):Observable<IProduct>{
    const url = `${this.API_BASE}/api/products`;
    return this.http.post<IProduct>(url,product);
  }
}
