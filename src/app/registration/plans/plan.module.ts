import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {PlansComponent} from "./plans.component";
import {PlanViewComponent} from "./plan-view/plan-view.component";
import {PlanSaveComponent} from "./plan-save/plan-save.component";
import {PlanRoutingModule} from "./plan.routing.module";


@NgModule({
    declarations: [
        PlansComponent,
        PlanViewComponent,
        PlanSaveComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        PlanRoutingModule

    ],
    providers: [],
    bootstrap: []
})

export class PlanModule{}