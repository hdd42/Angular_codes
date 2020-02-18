import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ContentSelectorComponent} from "./content-selector/content-selector.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";


const routes: Routes = [

  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  {path:'content/:topic' , component:ContentSelectorComponent, data:{title:'Learn Angular'} },
  {path:'products/:id' , component:ProductDetailComponent},

  //404 route, at the end
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
