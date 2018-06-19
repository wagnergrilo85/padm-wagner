import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {StateComponent} from "./state.component";


const stateRoutes: Routes = [
    { path: 'state', component: StateComponent},

];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(stateRoutes)
    ],
    exports: [RouterModule],
    providers: []
})

export class StateRoutingModule{}