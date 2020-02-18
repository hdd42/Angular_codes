import {Inject, Injectable} from '@angular/core';
import {IGetResponse, IProduct, IUser} from "./user";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  user:IUser

  constructor(@Inject('API_URL') private API, private http:HttpClient, private router:Router) {
    console.log("This.API" , this.API)
    this.user ={email:"user.email.com" , name:'Ali' , id:"12346"}
  }

  getUser() :IUser {
  return this.user;
  }

  setUser(_user : IUser){
    this.user = _user
  }

  getProducts({limit=10, skip=0}): Promise<IGetResponse<IProduct>>{
    let url = `${this.API}/products`;
    return this.http.get<IGetResponse<IProduct>>(url).toPromise()
  }



}
