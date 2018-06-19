import {Component, OnInit, ViewChild} from '@angular/core';
import {API_PADM} from "../../api/app.api";
import {User} from "../../models/User.model";
import {ModalComponent} from "../../shared/modal/modal.component";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {MessageService} from "../../services/message.service";
import {DataTablesResponse} from "../../utils/datatables-response";

//*** Declaracao do jquery
declare var $;

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {
    //*** Declaracao de variaveis
    private url_api = API_PADM;
    messageAlert: string = '';
    colorAlert: string = "danger";
    dtOptions: DataTables.Settings = {};

    //*** Mudar estes campos
    users: User[]; /// IMPORTANTE e tem que ser no plural
    userModelToDelete = null;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    constructor(private http: HttpClient,
                private userService: UserService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
        this.messageService.message = "";
    }

    openModal(user: User) {
        this.userModelToDelete = user;
        this.modal.open();
    }

    destroy() {

        this.userService
            .destroy(+this.userModelToDelete.id)
            .subscribe(() => {
                const indexTable = this.users.indexOf(this.userModelToDelete);
                this.users.splice(indexTable, 1);
                this.messageAlert = `Usuários ${this.userModelToDelete.name} apagado com sucesso!`;
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
                        `${this.url_api}/user-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp => {

                    that.users = resp.data;

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
                {data: 'email'},
                {data: 'password'},
            ]
        };
    }


}
