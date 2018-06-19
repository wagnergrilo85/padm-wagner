import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";

import {ClientCategoryComponent} from "./client-category.component";
import {ClintCategorySaveComponent} from "./clint-category-save/clint-category-save.component";
import {ClientCategoryViewComponent} from "./client-category-view/client-category-view.component";
import {SharedModule} from "../../shared/shared.module";
import {ClientCategoryRoutingModule} from "./client.category.routing.module";

@NgModule({
    declarations: [
        ClientCategoryComponent,
        ClintCategorySaveComponent,
        ClientCategoryViewComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        ClientCategoryRoutingModule
    ],
    providers: [],
    bootstrap: []
})

export class
ClientCategoryModule{}