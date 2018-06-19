import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {API_PADM} from "../api/app.api";
import {ClientGroup} from "../models/client-group.model";

@Injectable()
export class ClientGroupService {

    private url_api = API_PADM;
    private resource = "client-group";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(clientGroup: ClientGroup): Observable<any> {
        console.log(clientGroup);
        return !clientGroup.id ? this.http.post(`${this.url_api}/${this.resource}`, clientGroup) : this.http.put(`${this.url_api}/${this.resource}/${clientGroup.id}`, clientGroup);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_PADM}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API_PADM}/${this.resource}/${id}`);
    }

}
