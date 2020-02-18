import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../product/models/Product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(@Inject('API') private API_BASE, private http:HttpClient) { }

  getCategories():Promise<ICategory[]>{
    let url =`${this.API_BASE}/api/category`;
    return this.http.get<ICategory[]>(url).toPromise();
  }
}
