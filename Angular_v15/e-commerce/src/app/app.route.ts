import { Route } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ContactusComponent } from "./components/contactus/contactus.component";
import { HomeComponent } from "./components/home/home.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { ProductComponent } from "./components/products/product/product.component";

export const APP_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About us' },
  { path: 'contact-us', component: ContactusComponent, title: 'Contact us' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'products',
    component: ProductComponent,
    loadChildren: () => import('./components/products/product.route').then(r => r.PRODUCT_ROUTES)
  },
  { path: '**', component: NotfoundComponent, title: '404' },
]