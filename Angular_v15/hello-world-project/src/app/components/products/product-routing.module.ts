import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductComponent } from "./products.component";

const routes: Routes = [
    { 
        path: '', component: ProductComponent, 
        children: [
            { path: '', component: ProductsListComponent },
            { path: 'product-details/:id', component: ProductDetailsComponent }
        ]
    }, 
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ] 
})
export class ProductRoutingModule { 

}