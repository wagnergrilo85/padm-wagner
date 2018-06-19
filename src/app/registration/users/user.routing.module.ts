import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {UsersComponent} from "./users.component";
import {UserSaveComponent} from "./user-save/user-save.component";
import {UserViewComponent} from "./user-view/user-view.component";


const userRoutes: Routes = [
    { path: 'user', component:UsersComponent },
    { path: 'user/new', component:UserSaveComponent },
    { path: 'user/:id/edit', component: UserSaveComponent},
    { path: 'user/:id/view', component:UserViewComponent }
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [RouterModule],
    providers: []
})

export class UserRoutingModule{}