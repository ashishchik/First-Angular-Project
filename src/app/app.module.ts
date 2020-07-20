import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Pg1Component } from './pg1/pg1.component';
import { Pg2Component } from './pg2/pg2.component';
import { Pg3Component } from './pg3/pg3.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { MobComponent } from './pg1/mob/mob.component';
import { TvComponent } from './pg1/tv/tv.component';
import { FirstService } from './services/first.service';
import { UseServComponent } from './use-serv/use-serv.component';
import { ProductsComponent } from './use-serv/products/products.component';
import { AddtocartComponent } from './use-serv/addtocart/addtocart.component';
import { CheckoutComponent } from './use-serv/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Pg1Component,
    Pg2Component,
    Pg3Component,
    HomeComponent,
    ChildComponent,
    MobComponent,
    TvComponent,
    UseServComponent,
    ProductsComponent,
    AddtocartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
