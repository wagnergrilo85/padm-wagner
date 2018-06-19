import {Component, OnInit, Input} from '@angular/core';
import {CityService} from "../../../services/city.service";
import {City} from "../../../models/city.model";
import 'rxjs/operators/map';

declare var $;

@Component({
    selector: 'app-select-city',
    templateUrl: './select-city.component.html',
    styleUrls: ['./select-city.component.css']
})
export class SelectCityComponent implements OnInit {

    cities: City[];

    private valueSelect: number = 1;

    @Input() name: string = "city";
    @Input() label: string = "Cidade";
    @Input() valor: number;

    constructor(private cityService: CityService) {
    }

    ngOnInit() {

        if(this.valor)
            this.valueSelect = this.valor;

        this.cityService.listAll()
            .subscribe(data => {
                $('.select2').select2();
                this.cities = data;
            });
    }

}
