import {Component, OnInit} from "@angular/core";
import {Client} from "../../../models/client.model";
import {ClientService} from "../../../services/client.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-client-view',
    templateUrl: 'client-view.component.html',
    styleUrls: ['client-view.component.css']
})
export class ClientViewComponent implements OnInit {

    client: Client = new Client();

    constructor(private clientService: ClientService,
                private activatedRoute: ActivatedRoute) {
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

}
