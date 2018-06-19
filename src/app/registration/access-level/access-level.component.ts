import {Component, OnInit, ViewChild} from '@angular/core';
import {AccessLevel} from "../../models/access-level.model";
import {API_PADM} from "../../api/app.api";
import {ModalComponent} from "../../shared/modal/modal.component";
import {DataTablesResponse} from "../../utils/datatables-response";
import {MessageService} from "../../services/message.service";
import {HttpClient} from "@angular/common/http";
import {AccessLevelService} from "../../services/access-level.service";

//*** Declaracao do jquery
declare var $;

@Component({
    selector: 'app-access-level',
    templateUrl: 'access-level.component.html',
    styleUrls: ['access-level.component.css']
})
export class AccessLevelComponent implements OnInit {

    // Declaracao de variaveis
    private url_api = API_PADM;
    messageAlert: string = '';
    colorAlert: string = "danger";
    dtOptions: DataTables.Settings = {};

    // Mudar estes campos
    accessLeves: AccessLevel[]; /// IMPORTANTE e tem que ser no plural
    accessLevelModelToDelete = null;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    constructor(private http: HttpClient,
                private accessLevelService: AccessLevelService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
        this.messageService.message = "";
    }

    openModal(accessLevel: AccessLevel) {
        this.accessLevelModelToDelete = accessLevel;
        this.modal.open();
    }

    destroy() {

        this.accessLevelService
            .destroy(+this.accessLevelModelToDelete.id)
            .subscribe(() => {
                const indexTable = this.accessLeves.indexOf(this.accessLevelModelToDelete);
                this.accessLeves.splice(indexTable, 1);
                this.messageAlert = `Nível de Acesso ${this.accessLevelModelToDelete.name} apagado com sucesso!`;
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
                        `${this.url_api}/access-level-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp => {

                    that.accessLeves = resp.data;

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
                {data: 'access_type'},
                {data: 'status'},
                {data: 'created_at'},
            ]
        };
    }


}
