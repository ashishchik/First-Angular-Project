import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pg1Component } from './pg1/pg1.component';
import { Pg2Component } from './pg2/pg2.component';
import { Pg3Component } from './pg3/pg3.component';
import { HomeComponent } from './home/home.component';
import { MobComponent } from './pg1/mob/mob.component';
import { TvComponent } from './pg1/tv/tv.component';
import { UseServComponent } from './use-serv/use-serv.component';
import { ProductsComponent } from './use-serv/products/products.component';
import { AddtocartComponent } from './use-serv/addtocart/addtocart.component';
import { CheckoutComponent } from './use-serv/checkout/checkout.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'brand', children:[
    {path:'', component: Pg1Component},
    {path:'mob', component: MobComponent},
    {path:'tv', component: TvComponent},
  ]},
  {path:'tour', component: Pg2Component},
  {path:'contact', component: Pg3Component},
  {path:'select products', children:[
    {path:'', component: UseServComponent},
    {path:'products', component: ProductsComponent},
    {path:'checkout', component: AddtocartComponent},
    {path:'add-to-cart', component: CheckoutComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
