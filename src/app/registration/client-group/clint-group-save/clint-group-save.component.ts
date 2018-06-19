import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientGroup} from "../../../models/client-group.model";
import {InputComponent} from "../../../shared/input/input.component";
import {ClientGroupService} from "../../../services/client-group.service";
import {Router, ActivatedRoute} from "@angular/router";
import {MessageService} from "../../../services/message.service";

@Component({
    selector: 'app-clint-group-save',
    templateUrl: 'clint-group-save.component.html',
    styleUrls: ['clint-group-save.component.css']
})
export class ClintGroupSaveComponent implements OnInit {

    @ViewChild(InputComponent)
    elementDom: InputComponent;

    arraySelectStatus = [
        {value: 1, label: 'Ativado'},
        {value: 0, label: 'Desativado'},
    ];

    clientGroup: ClientGroup = new ClientGroup();


    constructor(private clientGroupService: ClientGroupService,
                private route: Router,
                private activatedRoute: ActivatedRoute,
                private messageService: MessageService) {
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

    saveOrEdit() {
        this.clientGroupService.saveOrEdit(this.clientGroup).subscribe(resp => {

            if (this.clientGroup.id)
                this.messageService.message = `Grupo de clientes  ${this.clientGroup.name}  atualizada com sucesso!`;
            else
                this.messageService.message = `Grupo de clientes  ${this.clientGroup.name} cadastrada com sucesso!`;

            this.messageService.color = "success";
            this.route.navigate(['client-group']);

        });
    }

}
