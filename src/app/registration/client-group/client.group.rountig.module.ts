import {ClientGroupComponent} from "./client-group.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ClintGroupSaveComponent} from "./clint-group-save/clint-group-save.component";
import {ClientGroupViewComponent} from "./client-group-view/client-group-view.component";
import {FormsModule} from "@angular/forms";


const clientGroupRoutes: Routes = [
    {path: 'client-group', component: ClientGroupComponent},
    {path: 'client-group/new', component: ClintGroupSaveComponent},
    {path: 'client-group/:id/edit', component: ClintGroupSaveComponent},
    {path: 'client-group/:id/view', component: ClientGroupViewComponent}
];


@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        RouterModule.forChild(clientGroupRoutes)
    ],
    exports: [RouterModule],
    providers: []
})

export class ClientGroupRoutingModule {
}