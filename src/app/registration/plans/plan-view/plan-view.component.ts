import {Component, OnInit} from "@angular/core";
import {PlanService} from "../../../services/plan.service";
import {ActivatedRoute} from "@angular/router";
import {Plan} from "../../../models/plan.model";

@Component({
    selector: 'app-plan-view',
    templateUrl: 'plan-view.component.html',
    styleUrls: ['plan-view.component.css']
})
export class PlanViewComponent implements OnInit {

    plan: Plan = new Plan();

    constructor(private planService: PlanService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.planService.find(+params['id']).subscribe(data => {
                    this.plan = data;
                });
            }
        });
    }

}
