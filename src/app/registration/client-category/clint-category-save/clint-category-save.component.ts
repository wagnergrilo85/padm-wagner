import {Component, OnInit, ViewChild} from "@angular/core";
import {ClientCategoryService} from "../../../services/client-category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../../../services/message.service";
import {InputComponent} from "../../../shared/input/input.component";
import {ClientCategory} from "../../../models/client-category.model";

@Component({
    selector: 'app-clint-category-save',
    templateUrl: 'clint-category-save.component.html',
    styleUrls: ['clint-category-save.component.css']
})
export class ClintCategorySaveComponent implements OnInit {

    arraySelectStatus = [
        {value: 1, label: 'Ativado'},
        {value: 0, label: 'Desativado'},
    ];

    clientCategory: ClientCategory = new ClientCategory();

    @ViewChild(InputComponent)
    input: InputComponent;

    constructor(private clientCategoryService: ClientCategoryService,
                private route: Router,
                private activatedRoute: ActivatedRoute,
                private messageService: MessageService) {
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

    saveOrEdit() {
        this.clientCategoryService.saveOrEdit(this.clientCategory).subscribe(resp => {

            if (this.clientCategory.id)
                this.messageService.message = `Categoria  ${this.clientCategory.name}  atualizada com sucesso!`;
            else
                this.messageService.message = `Categoria ${this.clientCategory.name} cadastrada com sucesso!`;

            this.messageService.color = "success";
            this.route.navigate(['client-category']);

        });
    }

}
