import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ClientCategory} from "../models/client-category.model";
import {API_PADM} from "../api/app.api";

@Injectable()
export class ClientCategoryService {

    private url_api = API_PADM;
    private resource = "client-category";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(clientCategory: ClientCategory): Observable<any> {
        return !clientCategory.id ? this.http.post(`${this.url_api}/${this.resource}`, clientCategory) : this.http.put(`${this.url_api}/${this.resource}/${clientCategory.id}`, clientCategory);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_PADM}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any>{
        return this.http.delete(`${API_PADM}/${this.resource}/${id}`);
    }

}
