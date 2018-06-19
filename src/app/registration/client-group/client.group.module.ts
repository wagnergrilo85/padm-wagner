import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {ClientGroupComponent} from "./client-group.component";
import {ClintGroupSaveComponent} from "./clint-group-save/clint-group-save.component";
import {ClientGroupViewComponent} from "./client-group-view/client-group-view.component";
import {ClientGroupRoutingModule} from "./client.group.rountig.module";



@NgModule({
    declarations: [
        ClientGroupComponent,
        ClintGroupSaveComponent,
        ClientGroupViewComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        ClientGroupRoutingModule,

    ],
    providers: [],
    bootstrap: []
})

export class ClientGroupModule{}