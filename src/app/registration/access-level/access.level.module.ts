import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {AccessLevelComponent} from "./access-level.component";
import {AccessLevelViewComponent} from "./access-level-view/access-level-view.component";
import {AccessLevelSaveComponent} from "./access-level-save/access-level-save.component";
import {AccessLevelRoutingModule} from "./access.level.routing.module";


@NgModule({
    declarations: [
        AccessLevelComponent,
        AccessLevelViewComponent,
        AccessLevelSaveComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        AccessLevelRoutingModule

    ],
    providers: [],
    bootstrap: []
})

export class AccessLevelModule{}