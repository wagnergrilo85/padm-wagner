import {Component, OnInit, ViewChild} from '@angular/core';
import {Client} from "../../../models/client.model";
import {InputComponent} from "../../../shared/input/input.component";
import {Router, ActivatedRoute} from "@angular/router";
import {MessageService} from "../../../services/message.service";
import {ClientService} from "../../../services/client.service";
import {City} from "../../../models/city.model";
import {CityService} from "../../../services/city.service";

@Component({
    selector: 'app-clint-save',
    templateUrl: 'clint-save.component.html',
    styleUrls: ['clint-save.component.css']
})
export class ClintSaveComponent implements OnInit {

    cities: City[];


    arraySelectStatus = [
        {value: 1, label: 'Ativado'},
        {value: 0, label: 'Desativado'},
    ];

    arrayDocumentType = [
        {value: 1, label: 'CPF'},
        {value: 2, label: 'CNPJ'},
    ];

    client: Client = new Client();

    @ViewChild(InputComponent)
    input: InputComponent;

    constructor(private clientService: ClientService,
                private route: Router,
                private activatedRoute: ActivatedRoute,
                private messageService: MessageService)
    {
    }

    ngOnInit() {

        this.activatedRoute.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.clientService.find(+params['id']).subscribe(data => {
                    this.client = data;
                });
            }
        });
    }

    saveOrEdit() {
        this.clientService.saveOrEdit(this.client).subscribe(resp => {

            if (this.client.id)
                this.messageService.message = `Cliente ${this.client.name}  atualizada com sucesso!`;
            else
                this.messageService.message = `Cliente ${this.client.name} cadastrada com sucesso!`;

            this.messageService.color = "success";
            this.route.navigate(['client']);

        });
    }


}
