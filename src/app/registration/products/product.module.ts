import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {ProductsComponent} from "./products.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {ProductSaveComponent} from "./product-save/product-save.component";
import {ProductRoutingModule} from "./product.routing.module";




@NgModule({
    declarations: [
        ProductsComponent,
        ProductViewComponent,
        ProductSaveComponent,

    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        ProductRoutingModule

    ],
    providers: [],
    bootstrap: []
})

export class ProductModule{}