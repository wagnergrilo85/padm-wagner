import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {API_PADM} from "../api/app.api";
import {Client} from "../models/client.model";

@Injectable()
export class ClientService {

    private url_api = API_PADM;
    private resource = "client";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(client: Client): Observable<any> {
        return !client.id ? this.http.post(`${this.url_api}/${this.resource}`, client) : this.http.put(`${this.url_api}/${this.resource}/${client.id}`, client);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_PADM}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API_PADM}/${this.resource}/${id}`);
    }

}
