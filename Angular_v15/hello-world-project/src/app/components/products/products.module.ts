import { NgModule } from "@angular/core";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductComponent } from "./products.component";
import { ProductRoutingModule } from "./product-routing.module";


@NgModule({
    declarations: [
        ProductsListComponent,
        ProductDetailsComponent,
        ProductComponent
    ],
    imports: [
        ProductRoutingModule,
    ],
    providers: [],
    exports: [
        ProductsListComponent,
        ProductDetailsComponent,
        ProductComponent
    ]
})
export class ProductsModule { }