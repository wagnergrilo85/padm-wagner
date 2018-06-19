import {Component, OnInit} from '@angular/core';
import {ClientGroup} from "../../../models/client-group.model";
import {ClientGroupService} from "../../../services/client-group.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-client-group-view',
    templateUrl: 'client-group-view.component.html',
    styleUrls: ['client-group-view.component.css']
})
export class ClientGroupViewComponent implements OnInit {

    clientGroup: ClientGroup = new ClientGroup();

    constructor(private clientGroupService: ClientGroupService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.clientGroupService.find(+params['id']).subscribe(data => {
                    this.clientGroup = data;
                });
            }
        });
    }
}
