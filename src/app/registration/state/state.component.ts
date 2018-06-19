import {Component, OnInit, ViewChild} from "@angular/core";
import {API_PADM} from "../../api/app.api";
import {HttpClient} from "@angular/common/http";
import {ModalComponent} from "../../shared/modal/modal.component";
import {State} from "../../models/state.model";
import {MessageService} from "../../services/message.service";
import {DataTablesResponse} from "../../utils/datatables-response";

@Component({
    selector: 'app-state',
    templateUrl: 'state.component.html',
    styleUrls: ['state.component.css']
})
export class StateComponent implements OnInit {

    //*** Declaracao de variaveis
    private url_api = API_PADM;
    messageAlert: string = '';
    colorAlert: string = "danger";
    dtOptions: DataTables.Settings = {};

    //*** Mudar estes campos
    states: State[]; /// IMPORTANTE e tem que ser no plural

    constructor(private http: HttpClient,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
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
                        `${this.url_api}/state-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp => {

                    that.states = resp.data;

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
                {data: 'uf'},
            ]
        };
    }


}
