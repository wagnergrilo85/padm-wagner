import {Component, OnInit} from "@angular/core";
import {Product} from "../../../models/product.model";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-product-view',
    templateUrl: 'product-view.component.html',
    styleUrls: ['product-view.component.css']
})
export class ProductViewComponent implements OnInit {

    product: Product = new Product();

    constructor(private productService: ProductService,
                private activatedRoute: ActivatedRoute) {
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

}
