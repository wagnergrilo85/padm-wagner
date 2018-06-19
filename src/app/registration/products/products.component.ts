import {Component, OnInit, ViewChild} from '@angular/core';
import {API_PADM} from "../../api/app.api";
import {Product} from "../../models/product.model";
import {ModalComponent} from "../../shared/modal/modal.component";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {MessageService} from "../../services/message.service";
import {DataTablesResponse} from "../../utils/datatables-response";

//*** Declaracao do jquery
declare var $;

@Component({
    selector: 'app-products',
    templateUrl: 'products.component.html',
    styleUrls: ['products.component.css']
})
export class ProductsComponent implements OnInit {

    //*** Declaracao de variaveis
    private url_api = API_PADM;
    messageAlert: string = '';
    colorAlert: string = "danger";
    dtOptions: DataTables.Settings = {};

    //*** Mudar estes campos
    products: Product[]; /// IMPORTANTE e tem que ser no plural
    productModelToDelete = null;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    constructor(private http: HttpClient,
                private productService: ProductService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
        this.messageService.message = "";
    }

    openModal(product: Product) {
        this.productModelToDelete = product;
        this.modal.open();
    }

    destroy() {

        this.productService
            .destroy(+this.productModelToDelete.id)
            .subscribe(() => {
                const indexTable = this.products.indexOf(this.productModelToDelete);
                this.products.splice(indexTable, 1);
                this.messageAlert = `Produto ${this.productModelToDelete.name} apagado com sucesso!`;
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
                        `${this.url_api}/product-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp => {

                    that.products = resp.data;

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
            ]
        };
    }


}
