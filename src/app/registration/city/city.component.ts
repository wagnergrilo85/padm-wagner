import {Component, OnInit} from "@angular/core";
import {API_PADM} from "../../api/app.api";
import {City} from "../../models/city.model";
import {HttpClient} from "@angular/common/http";
import {CityService} from "../../services/city.service";
import {MessageService} from "../../services/message.service";
import {DataTablesResponse} from "../../utils/datatables-response";
import {ReportService} from "../../services/report.service";
import * as FileSaver from "file-saver";

// Declaracao do jquery
declare var $;

@Component({
    selector: 'app-city',
    templateUrl: 'city.component.html',
    styleUrls: ['city.component.css']
})
export class CityComponent implements OnInit {

    // Declaracao de variaveis
    private url_api = API_PADM;
    messageAlert: string = '';
    colorAlert: string = "danger";
    dtOptions: DataTables.Settings = {};

    // Mudar estes campos
    cities: City[]; /// IMPORTANTE e tem que ser no plural


    constructor(private http: HttpClient,
                private cityService: CityService,
                private reportService: ReportService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
        this.messageService.message = "";
    }

    report_pdf() {

        let folder_tmp = 'cities_' + this.reportService.randomString();

        console.log('Grerando relatorio em pdf');
        this.reportService
            .downloadPDF('report-city', folder_tmp)
            .subscribe((res) => {

                    console.log(res);

                    // if you want to save it - you need file-saver for this : https://www.npmjs.com/package/file-saver
                    FileSaver.saveAs(res, "cidades.pdf");

                    // // let fileURL = URL.createObjectURL(res);
                    let filePdf = URL.createObjectURL(res);

                    window.open(filePdf); // if you want to open it in new tab

                    // Apagar arquivos no servidor
                    this.reportService.clearReport(folder_tmp);
                }
            );
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
                        `${this.url_api}/city-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp => {

                    that.cities = resp.data;

                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: []
                    });
                });
            },
            columns: [
                {data: 'id'},
                {data: 'code'},
                {data: 'city'},
                {data: 'uf'},
            ]
        };
    }


}
