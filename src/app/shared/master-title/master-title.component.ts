import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'app-master-title',
    templateUrl: './master-title.component.html'
})
export class MasterTitleComponent implements OnInit {


    @ViewChild('conentHeader')
    conentHeader: ElementRef;

    @Input() titutloH1: string = "";

    constructor() {
    }

    ngOnInit() {
    }

}
