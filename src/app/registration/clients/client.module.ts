import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {ClientsComponent} from "./clients.component";
import {ClintSaveComponent} from "./clint-save/clint-save.component";
import {ClientViewComponent} from "./client-view/client-view.component";
import {ClientRoutingModule} from "./client.routing.module";


@NgModule({
    declarations: [
        ClientsComponent,
        ClintSaveComponent,
        ClientViewComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        ClientRoutingModule

    ],
    providers: [],
    bootstrap: []
})

export class ClientModule{}