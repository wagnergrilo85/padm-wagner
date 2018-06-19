import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientGroup} from "../../models/client-group.model";
import {API_PADM} from "../../api/app.api";
import {ModalComponent} from "../../shared/modal/modal.component";
import {HttpClient} from "@angular/common/http";
import {ClientGroupService} from "../../services/client-group.service";
import {MessageService} from "../../services/message.service";
import {DataTablesResponse} from "../../utils/datatables-response";

//*** Declaracao do jquery
declare var $;

@Component({
    selector: 'app-client-group',
    templateUrl: 'client-group.component.html',
    styleUrls: ['client-group.component.css']
})
export class ClientGroupComponent implements OnInit {

    //*** Declaracao de variaveis
    private url_api = API_PADM;
    messageAlert: string = '';
    colorAlert: string = "danger";
    dtOptions: DataTables.Settings = {};

    //*** Mudar estes campos
    clientGroups: ClientGroup[]; /// IMPORTANTE e tem que ser no plural
    clientGroupModelToDelete = null;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    constructor(private http: HttpClient,
                private clientGroupService: ClientGroupService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
        this.messageService.message = "";
    }

    openModal(clientGroup: ClientGroup) {
        this.clientGroupModelToDelete = clientGroup;
        this.modal.open();
    }

    destroy() {

        this.clientGroupService
            .destroy(+this.clientGroupModelToDelete.id)
            .subscribe(() => {
                const indexTable = this.clientGroups.indexOf(this.clientGroupModelToDelete);
                this.clientGroups.splice(indexTable, 1);
                this.messageAlert = `Grupo ${this.clientGroupModelToDelete.name} apagado com sucesso!`;
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
                        `${this.url_api}/client-group-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp => {

                        console.log(resp.data);
                    that.clientGroups = resp.data;

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
                {data: 'classification'},
                {data: 'created_at'},
                {data: 'status'},
            ]
        };
    }


}
