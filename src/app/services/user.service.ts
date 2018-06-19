import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {API_PADM} from "../api/app.api";
import {User} from "../models/User.model";

@Injectable()
export class UserService {

    private url_api = API_PADM;
    private resource = "user";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(user: User): Observable<any> {
        return !user.id ? this.http.post(`${this.url_api}/${this.resource}`, user) : this.http.put(`${this.url_api}/${this.resource}/${user.id}`, user);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_PADM}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API_PADM}/${this.resource}/${id}`);
    }

}
