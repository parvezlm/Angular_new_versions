import { Route } from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";

export const PRODUCT_ROUTES: Route[] = [
    { path: '', component: ProductListComponent, title: 'Products' },
    { path: 'product-details/:id', component: ProductDetailsComponent, title: 'Product Details' },
];
