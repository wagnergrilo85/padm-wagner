import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CityComponent} from "./city.component";


const cityRoutes: Routes = [
    {path: 'city', component: CityComponent},

];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(cityRoutes)
    ],
    exports: [RouterModule],
    providers: []
})

export class CityRoutingModule {
}