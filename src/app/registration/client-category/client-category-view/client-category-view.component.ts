import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ClientCategoryService} from "../../../services/client-category.service";
import {ClientCategory} from "../../../models/client-category.model";

@Component({
    selector: 'app-client-category-view',
    templateUrl: 'client-category-view.component.html',
    styleUrls: ['client-category-view.component.css']
})
export class ClientCategoryViewComponent implements OnInit {

    clientCategory: ClientCategory = new ClientCategory();

    constructor(private clientCategoryService: ClientCategoryService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.clientCategoryService.find(+params['id']).subscribe(data => {
                    this.clientCategory = data;
                });
            }
        });
    }

}
