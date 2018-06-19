import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-box-header-content',
    templateUrl: './box-header-content.component.html',
    styleUrls: ['./box-header-content.component.css']
})

export class BoxHeaderContentComponent implements OnInit {

    @Input() title: string = "";
    @Input() smallTitle: string = "";

    constructor() {
    }

    ngOnInit() {
    }

}
