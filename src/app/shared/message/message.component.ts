import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';

declare let $;

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

    @Input()
    color: string = 'info';

    @Input()
    closeAlert: boolean = false;

    @Input()
    timeout: null;

    @ViewChild('divAlert')
    divAlert: ElementRef;

    constructor() {
    }

    ngOnInit() {
        if(this.timeout){
            setTimeout(() => {
                $(this.divAlert.nativeElement).alert('close');
            }, this.timeout);
        }
    }

}
