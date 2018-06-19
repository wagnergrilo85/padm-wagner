import {Component, OnInit, ViewChild} from '@angular/core';
import {AccessLevel} from "../../../models/access-level.model";
import {InputComponent} from "../../../shared/input/input.component";
import {MessageService} from "../../../services/message.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AccessLevelService} from "../../../services/access-level.service";

@Component({
    selector: 'app-access-level-save',
    templateUrl: 'access-level-save.component.html',
    styleUrls: ['access-level-save.component.css']
})
export class AccessLevelSaveComponent implements OnInit {

    arraySelectStatus = [
        {value: 1, label: 'Ativado'},
        {value: 0, label: 'Desativado'},
    ];

    arrayModulesStatus = [
        {value: 1, label: 'Habilitado'},
        {value: 0, label: 'Desabilitado'},
    ];

    accessLevel: AccessLevel = new AccessLevel();

    @ViewChild(InputComponent)
    input: InputComponent;

    constructor(private accessLevelService: AccessLevelService,
                private route: Router,
                private activatedRoute: ActivatedRoute,
                private messageService: MessageService) {
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

    saveOrEdit() {

        this.accessLevelService.saveOrEdit(this.accessLevel).subscribe(resp => {

            console.log(resp);

            if (this.accessLevel.id)
                this.messageService.message = `Nível de Acesso  ${this.accessLevel.name}  atualizada com sucesso!`;
            else
                this.messageService.message = `Nível de Acessso ${this.accessLevel.name} cadastrada com sucesso!`;

            this.messageService.color = "success";
            this.route.navigate(['access-level']);

        });
    }




}
