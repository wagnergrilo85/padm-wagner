import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {ClientCategoryComponent} from "./client-category.component";
import {ClintCategorySaveComponent} from "./clint-category-save/clint-category-save.component";
import {ClientCategoryViewComponent} from "./client-category-view/client-category-view.component";

const userCategoryRoutes: Routes = [
    { path: 'client-category', component: ClientCategoryComponent},
    { path: 'client-category/new', component: ClintCategorySaveComponent},
    { path: 'client-category/:id/edit', component: ClintCategorySaveComponent},
    { path: 'client-category/:id/view', component: ClientCategoryViewComponent}
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(userCategoryRoutes)
    ],
    exports: [RouterModule],
    providers: []
})

export class ClientCategoryRoutingModule{}