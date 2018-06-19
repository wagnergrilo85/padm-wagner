import {Component, OnInit, ViewChild} from '@angular/core';
import {API_PADM} from "../../api/app.api";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../../services/message.service";
import {PlanService} from "../../services/plan.service";
import {ModalComponent} from "../../shared/modal/modal.component";
import {Plan} from "../../models/plan.model";
import {DataTablesResponse} from "../../utils/datatables-response";

//*** Declaracao do jquery
declare var $;

@Component({
    selector: 'app-plans',
    templateUrl: 'plans.component.html',
    styleUrls: ['plans.component.css']
})
export class PlansComponent implements OnInit {

    //*** Declaracao de variaveis
    private url_api = API_PADM;
    messageAlert: string = '';
    colorAlert: string = "danger";
    dtOptions: DataTables.Settings = {};

    //*** Mudar estes campos
    plans: Plan[]; /// IMPORTANTE e tem que ser no plural
    planModelToDelete = null;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    constructor(private http: HttpClient,
                private planService: PlanService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
        this.messageService.message = "";
    }

    openModal(plan: Plan) {
        this.planModelToDelete = plan;
        this.modal.open();
    }

    destroy() {

        this.planService
            .destroy(+this.planModelToDelete.id)
            .subscribe(() => {
                const indexTable = this.plans.indexOf(this.planModelToDelete);
                this.plans.splice(indexTable, 1);
                this.messageAlert = `Planos ${this.planModelToDelete.name} apagado com sucesso!`;
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
                        `${this.url_api}/plan-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp => {

                    that.plans = resp.data;

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
                {data: 'description'},
                {data: 'status'},
            ]
        };
    }


}
