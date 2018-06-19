import {Component, OnInit, ViewChild} from '@angular/core';
import {Plan} from "../../../models/plan.model";
import {InputComponent} from "../../../shared/input/input.component";
import {PlanService} from "../../../services/plan.service";
import {Router, ActivatedRoute} from "@angular/router";
import {MessageService} from "../../../services/message.service";

@Component({
    selector: 'app-plan-save',
    templateUrl: 'plan-save.component.html',
    styleUrls: ['plan-save.component.css']
})
export class PlanSaveComponent implements OnInit {

    arraySelectStatus = [
        {value: 1, label: 'Ativado'},
        {value: 0, label: 'Desativado'},
    ];

    plan: Plan = new Plan();

    @ViewChild(InputComponent)
    input: InputComponent;

    constructor(private planService: PlanService,
                private route: Router,
                private activatedRoute: ActivatedRoute,
                private messageService: MessageService) {
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

    saveOrEdit() {
        this.planService.saveOrEdit(this.plan).subscribe(resp => {

            if (this.plan.id)
                this.messageService.message = `Planos  ${this.plan.name}  atualizada com sucesso!`;
            else
                this.messageService.message = `Planos ${this.plan.name} cadastrada com sucesso!`;

            this.messageService.color = "success";
            this.route.navigate(['plan']);

        });
    }


}
