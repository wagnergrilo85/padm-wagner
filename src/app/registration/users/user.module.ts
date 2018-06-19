import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {UsersComponent} from "./users.component";
import {UserViewComponent} from "./user-view/user-view.component";
import {UserSaveComponent} from "./user-save/user-save.component";
import {UserRoutingModule} from "./user.routing.module";


@NgModule({
    declarations: [
        UsersComponent,
        UserViewComponent,
        UserSaveComponent,

    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        UserRoutingModule

    ],
    providers: [],
    bootstrap: []
})

export class UserModule{}