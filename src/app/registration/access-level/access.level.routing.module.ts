import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AccessLevelComponent} from "./access-level.component";
import {AccessLevelSaveComponent} from "./access-level-save/access-level-save.component";
import {AccessLevelViewComponent} from "./access-level-view/access-level-view.component";


const accessLevelRoutes: Routes = [
    {path: 'access-level', component: AccessLevelComponent},
    {path: 'access-level/new', component: AccessLevelSaveComponent},
    {path: 'access-level/:id/edit', component: AccessLevelSaveComponent},
    {path: 'access-level/:id/view', component: AccessLevelViewComponent}
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(accessLevelRoutes)
    ],
    exports: [RouterModule],
    providers: []
})

export class AccessLevelRoutingModule {
}