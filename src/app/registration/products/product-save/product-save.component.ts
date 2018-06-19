import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../../models/product.model";
import {InputComponent} from "../../../shared/input/input.component";
import {ProductService} from "../../../services/product.service";
import {Router, ActivatedRoute} from "@angular/router";
import {MessageService} from "../../../services/message.service";

@Component({
    selector: 'app-product-save',
    templateUrl: 'product-save.component.html',
    styleUrls: ['product-save.component.css']
})
export class ProductSaveComponent implements OnInit {

    arraySelectStatus = [
        {value: 1, label: 'Ativado'},
        {value: 0, label: 'Desativado'},
    ];

    product: Product = new Product();

    @ViewChild(InputComponent)
    input: InputComponent;

    constructor(private productService: ProductService,
                private route: Router,
                private activatedRoute: ActivatedRoute,
                private messageService: MessageService) {
    }

    ngOnInit() {

        this.activatedRoute.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.productService.find(+params['id']).subscribe(data => {
                    this.product = data;
                });
            }
        });

    }

    saveOrEdit() {
        this.productService.saveOrEdit(this.product).subscribe(resp => {

            if (this.product.id)
                this.messageService.message = `Produtos  ${this.product.name}  atualizada com sucesso!`;
            else
                this.messageService.message = `Produtos ${this.product.name} cadastrada com sucesso!`;

            this.messageService.color = "success";
            this.route.navigate(['product']);

        });
    }


}
