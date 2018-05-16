import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { WhatsnewComponent } from '../whatsnew/whatsnew.component';
import { BreakfastComponent } from '../breakfast/breakfast.component';
import { LunchComponent } from '../lunch/lunch.component';
import { DinnerComponent } from '../dinner/dinner.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { SnacksComponent } from '../snacks/snacks.component';
import { BeveragesComponent } from '../beverages/beverages.component';
import { CartComponent } from '../cart/cart.component';
import { ItemdetailsComponent } from '../itemdetails/itemdetails.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: WhatsnewComponent },
  { path: 'whatsnew',     component: WhatsnewComponent },
  { path: 'lunch',     component: LunchComponent },
  { path: 'breakfast',     component: BreakfastComponent },
  { path: 'dinner',     component: DinnerComponent },
  { path: 'snacks',     component: SnacksComponent },
  { path: 'beverages',     component: BeveragesComponent },
  { path: 'cart',     component: CartComponent },
  { path: 'contactus',     component: ContactusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'item-detail/:id', component: ItemdetailsComponent }
];
