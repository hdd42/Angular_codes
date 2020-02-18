import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AddingThirdPartyLibrariesComponent} from './adding-third-party-libraries/adding-third-party-libraries.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ContentSelectorComponent} from './content-selector/content-selector.component';
import {HomeCardComponent} from './home-card/home-card.component';
import {RoutingComponent} from './routing/routing.component';
import {DirectiveComponent} from './directive/directive.component';
import {EventsComponent} from './events/events.component';
import {ProvidersComponent} from './providers/providers.component';
import {FormsComponent} from './forms/forms.component';
import {environment} from "../environments/environment";
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddingThirdPartyLibrariesComponent,
    NotFoundComponent,
    ContentSelectorComponent,
    HomeCardComponent,
    RoutingComponent,
    DirectiveComponent,
    EventsComponent,
    ProvidersComponent,
    FormsComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: "API_URL", useValue: environment.API_HOST}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
