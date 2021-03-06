import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {API_PADM} from "../api/app.api";
import {City} from "../models/city.model";

@Injectable()
export class CityService {

    private url_api = API_PADM;
    private resource = "city";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(city: City): Observable<any> {
        return !city.id ? this.http.post(`${this.url_api}/${this.resource}`, city) : this.http.put(`${this.url_api}/${this.resource}/${city.id}`, city);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_PADM}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API_PADM}/${this.resource}/${id}`);
    }

}
