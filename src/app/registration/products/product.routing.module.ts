import {NgModule} from "@angular/core";
import {ProductsComponent} from "./products.component";
import {RouterModule, Routes} from "@angular/router";
import {ProductSaveComponent} from "./product-save/product-save.component";
import {ProductViewComponent} from "./product-view/product-view.component";


const productRoutes: Routes = [
    {path: 'product', component: ProductsComponent},
    {path: 'product/new', component: ProductSaveComponent},
    {path: 'product/:id/edit', component: ProductSaveComponent},
    {path: 'product/:id/view', component: ProductViewComponent}
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [RouterModule],
    providers: []
})

export class ProductRoutingModule {
}