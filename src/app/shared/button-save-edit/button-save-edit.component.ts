import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'app-button-save-edit',
    templateUrl: './button-save-edit.component.html',
    styleUrls: ['./button-save-edit.component.css']
})
export class ButtonSaveEditComponent implements OnInit {

    @Input() label = 'Salvar';

    constructor() {
    }

    ngOnInit() {
    }

}
