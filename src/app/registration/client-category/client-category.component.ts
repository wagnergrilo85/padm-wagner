import {Component, OnInit, ViewChild} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_PADM} from "../../api/app.api";
import {ClientCategory} from "../../models/client-category.model";
import {ModalComponent} from "../../shared/modal/modal.component";
import {ClientCategoryService} from "../../services/client-category.service";
import {MessageService} from "../../services/message.service";
import {DataTablesResponse} from "../../utils/datatables-response";

//*** Declaracao do jquery
declare var $;

@Component({
    selector: 'app-client-category',
    templateUrl: 'client-category.component.html',
    styleUrls: ['client-category.component.css']
})
export class ClientCategoryComponent implements OnInit {

    //*** Declaracao de variaveis
    messageAlert: string = '';
    colorAlert: string = "danger";
    clientCategoryModelToDelete = null;
    dtOptions: DataTables.Settings = {};
    clientCategories: ClientCategory[];
    private url_api = API_PADM;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    constructor(private http: HttpClient,
                private clientCategoryService: ClientCategoryService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
        this.messageService.message = "";
    }

    openModal(clientCategory: ClientCategory) {
        this.clientCategoryModelToDelete = clientCategory;
        this.modal.open();
    }

    listarDados() {
        this.clientCategoryService.listAll().subscribe( resposta => this.clientCategories = resposta );
    }

    destroy() {

        this.clientCategoryService
            .destroy(+this.clientCategoryModelToDelete.id)
            .subscribe(() => {
                const indexTable = this.clientCategories.indexOf(this.clientCategoryModelToDelete);
                this.clientCategories.splice(indexTable, 1);
                this.messageAlert = `Categoria ${this.clientCategoryModelToDelete.name} apagado com sucesso!`;
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
                        `${this.url_api}/client-category-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp => {

                    that.clientCategories = resp.data;

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
                {data: 'status'},
                {data: 'options'}
            ]
        };
    }

}
