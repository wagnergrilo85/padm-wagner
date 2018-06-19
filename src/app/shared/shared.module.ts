import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {BoxHeaderContentComponent} from "./box-header-content/box-header-content.component";
import {BoxReportComponent} from "./box-report/box-report.component";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {ButtonSaveEditComponent} from "./button-save-edit/button-save-edit.component";
import {InputComponent} from "./input/input.component";
import {MasterTitleComponent} from "./master-title/master-title.component";
import {MessageComponent} from "./message/message.component";
import {ModalComponent} from "./modal/modal.component";
import {SelectComponent} from "./select/select.component";
import { SelectCityComponent } from './select-city/select-city/select-city.component';

@NgModule({
    declarations: [
        BoxHeaderContentComponent,
        BoxReportComponent,
        BreadcrumbComponent,
        ButtonSaveEditComponent,
        InputComponent,
        MasterTitleComponent,
        MessageComponent,
        ModalComponent,
        SelectComponent,
        SelectCityComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        BoxHeaderContentComponent,
        BoxReportComponent,
        BreadcrumbComponent,
        ButtonSaveEditComponent,
        InputComponent,
        MasterTitleComponent,
        MessageComponent,
        ModalComponent,
        SelectComponent,
        SelectCityComponent,
    ],
    providers: []
})

export class SharedModule{}