import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {StateComponent} from "./state.component";
import {StateRoutingModule} from "./state.routing.module";



@NgModule({
    declarations: [
        StateComponent,


    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        StateRoutingModule

    ],
    providers: [],
    bootstrap: []
})

export class StateModule{}