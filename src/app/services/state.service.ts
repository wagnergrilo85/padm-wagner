import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {API_PADM} from "../api/app.api";
import {State} from "../models/state.model";

@Injectable()
export class StateService {

    private url_api = API_PADM;
    private resource = "state";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(state: State): Observable<any> {
        return !state.id ? this.http.post(`${this.url_api}/${this.resource}`, state) : this.http.put(`${this.url_api}/${this.resource}/${state.id}`, state);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_PADM}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API_PADM}/${this.resource}/${id}`);
    }

}
