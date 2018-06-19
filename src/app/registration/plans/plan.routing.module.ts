import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PlansComponent} from "./plans.component";
import {PlanSaveComponent} from "./plan-save/plan-save.component";
import {PlanViewComponent} from "./plan-view/plan-view.component";


const planRoutes: Routes = [
    {path: 'plan', component: PlansComponent},
    {path: 'plan/new', component: PlanSaveComponent},
    {path: 'plan/:id/edit', component: PlanSaveComponent},
    {path: 'plan/:id/view', component: PlanViewComponent}
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(planRoutes)
    ],
    exports: [RouterModule],
    providers: []
})

export class PlanRoutingModule {
}