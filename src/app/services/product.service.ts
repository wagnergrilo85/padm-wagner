import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {API_PADM} from "../api/app.api";
import {Product} from "../models/product.model";

@Injectable()
export class ProductService {

    private url_api = API_PADM;
    private resource = "product";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(product: Product): Observable<any> {
        return !product.id ? this.http.post(`${this.url_api}/${this.resource}`, product) : this.http.put(`${this.url_api}/${this.resource}/${product.id}`, product);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_PADM}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API_PADM}/${this.resource}/${id}`);
    }

}
