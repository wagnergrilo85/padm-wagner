import {NgModule} from "@angular/core";
import {ClientsComponent} from "./clients.component";
import {RouterModule, Routes} from "@angular/router";
import {ClintSaveComponent} from "./clint-save/clint-save.component";
import {ClientViewComponent} from "./client-view/client-view.component";


const clientRoutes: Routes = [
    {path: 'client', component: ClientsComponent},
    {path: 'client/new', component: ClintSaveComponent},
    {path: 'client/:id/edit', component: ClintSaveComponent},
    {path: 'client/:id/view', component: ClientViewComponent}
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(clientRoutes)
    ],
    exports: [RouterModule],
    providers: []
})

export class ClientRoutingModule {
}