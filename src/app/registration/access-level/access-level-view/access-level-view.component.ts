import {Component, OnInit} from '@angular/core';
import {AccessLevel} from "../../../models/access-level.model";
import {AccessLevelService} from "../../../services/access-level.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-access-level-view',
    templateUrl: 'access-level-view.component.html',
    styleUrls: ['access-level-view.component.css']
})
export class AccessLevelViewComponent implements OnInit {

    accessLevel: AccessLevel = new AccessLevel();

    constructor(private accessLevelService: AccessLevelService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.accessLevelService.find(+params['id']).subscribe(data => {
                    this.accessLevel = data;
                });
            }
        });
    }

}
