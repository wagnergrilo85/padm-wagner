import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {NavLeftComponent} from "./nav-left/nav-left.component";
import {NavRightComponent} from "./nav-right/nav-right.component";

@NgModule({
    declarations: [
        HeaderComponent,
        NavLeftComponent,
        NavRightComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        NavLeftComponent,
        NavRightComponent,
        FooterComponent,
    ],
    providers: []
})

export class LayoutsModule {

}