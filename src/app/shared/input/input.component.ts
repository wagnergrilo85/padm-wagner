import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

    @Input() name: string = "";
    @Input() label: string = "";
    @Input() placeholder: string = "";
    @Input() value: string = "";

    constructor() {
    }

    ngOnInit() {
    }

}
