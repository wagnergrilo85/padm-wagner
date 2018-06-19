import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {API_PADM} from "../api/app.api";
import {AccessLevel} from "../models/access-level.model";

@Injectable()
export class AccessLevelService {

    private url_api = API_PADM;
    private resource = "access-level";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(accessLevel: AccessLevel): Observable<any> {
        return !accessLevel.id ? this.http.post(`${this.url_api}/${this.resource}`, accessLevel) : this.http.put(`${this.url_api}/${this.resource}/${accessLevel.id}`, accessLevel);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_PADM}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any>{
        return this.http.delete(`${API_PADM}/${this.resource}/${id}`);
    }

}
