import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { CartComponent } from '../cart/cart.component';
import { ItemdetailsComponent } from '../itemdetails/itemdetails.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu/:type',     component: MenuComponent },
  { path: 'cart',     component: CartComponent },
  { path: 'contactus',     component: ContactusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'item-detail/:id', component: ItemdetailsComponent }
];
