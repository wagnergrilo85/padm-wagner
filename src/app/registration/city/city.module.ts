import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {CityComponent} from "./city.component";
import {CityRoutingModule} from "./city.routing.module";

@NgModule({
    declarations: [
        CityComponent,

    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        CityRoutingModule

    ],
    providers: [],
    bootstrap: []
})

export class CityModule{}