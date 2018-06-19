import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {API_PADM} from "../api/app.api";
import {Plan} from "../models/plan.model";

@Injectable()
export class PlanService {

    private url_api = API_PADM;
    private resource = "plan";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(plan: Plan): Observable<any> {
        return !plan.id ? this.http.post(`${this.url_api}/${this.resource}`, plan) : this.http.put(`${this.url_api}/${this.resource}/${plan.id}`, plan);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_PADM}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API_PADM}/${this.resource}/${id}`);
    }

}
