import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {LoginComponent} from "../pages/login/login.component";
import {NotFoundComponent} from "../pages/not-found/not-found.component";

import {DashboardComponent} from "../registration/dashboard/dashboard.component";
import {ClientGroupModule} from "../registration/client-group/client.group.module";
import {PlanModule} from "../registration/plans/plan.module";
import {ProductModule} from "../registration/products/product.module";
import {StateModule} from "../registration/state/state.module";
import {UserModule} from "../registration/users/user.module";
import {ClientModule} from "../registration/clients/client.module";
import {CityModule} from "../registration/city/city.module";
import {AccessLevelModule} from "../registration/access-level/access.level.module";
import {ClientCategoryModule} from "../registration/client-category/client.category.module";
import {LoginModule} from "../pages/login/login.module";

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'not-found', component: NotFoundComponent},
];

@NgModule({
    declarations: [
        LoginComponent,
        NotFoundComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ClientCategoryModule,
        ClientGroupModule,
        PlanModule,
        ProductModule,
        StateModule,
        UserModule,
        ClientModule,
        CityModule,
        AccessLevelModule,
        LoginModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule {}