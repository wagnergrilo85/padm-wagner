import {Component, OnInit, ViewChild} from '@angular/core';
import {Client} from "../../models/client.model";
import {API_PADM} from "../../api/app.api";
import {ModalComponent} from "../../shared/modal/modal.component";
import {HttpClient} from "@angular/common/http";
import {ClientService} from "../../services/client.service";
import {MessageService} from "../../services/message.service";
import {DataTablesResponse} from "../../utils/datatables-response";

//*** Declaracao do jquery
declare var $;

@Component({
    selector: 'app-clients',
    templateUrl: 'clients.component.html',
    styleUrls: ['clients.component.css']
})

export class ClientsComponent implements OnInit {

    //*** Declaracao de variaveis
    private url_api = API_PADM;
    messageAlert: string = '';
    colorAlert: string = "danger";
    dtOptions: DataTables.Settings = {};

    //*** Mudar estes campos
    clients: Client[]; /// IMPORTANTE e tem que ser no plural
    clientModelToDelete = null;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    constructor(private http: HttpClient,
                private clientService: ClientService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
        this.messageService.message = "";
    }

    openModal(client: Client) {
        this.clientModelToDelete = client;
        this.modal.open();
    }

    destroy() {

        this.clientService
            .destroy(+this.clientModelToDelete.id)
            .subscribe(() => {
                const indexTable = this.clients.indexOf(this.clientModelToDelete);
                this.clients.splice(indexTable, 1);
                this.messageAlert = `Cliente ${this.clientModelToDelete.name} apagado com sucesso!`;
                this.colorAlert = "danger";
                this.modal.close();
                this.list_data_dt();
            });
    }

    list_data_dt() {
        const that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            "columnDefs": [{
                "targets": -1,
                "orderable": false
            }
            ],
            language: {
                "url": "https://cdn.datatables.net/plug-ins/1.10.12/i18n/Portuguese-Brasil.json"
            },
            ajax: (dataTablesParameters: any, callback) => {
                that.http
                    .post<DataTablesResponse>(
                        `${this.url_api}/client-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp => {

                    that.clients = resp.data;

                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: []
                    });
                });
            },
            columns: [
                {data: 'id'},
                {data: 'name'},
                {data: 'document_type'},
                {data: 'document'},
                {data: 'email'},
                {data: 'site'},
                {data: 'status'}
            ]
        };
    }


}
