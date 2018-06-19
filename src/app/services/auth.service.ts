import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../models/User.model";
import {API_PADM_ROOT} from "../api/app.api";

declare var $;

@Injectable()
export class AuthService {

    access_token: string = "";
    header = {};
    public userLogado = false;
    public showAppEmitter = new EventEmitter<boolean>();

    constructor(private http: HttpClient, private router: Router) {
        let token = localStorage['user_token_padm'] ? (JSON.parse(localStorage['user_token_padm'])) : {};
        if (this.access_token) {
            this.setAccessToken(this.access_token);
        }
    }

    login(user: User) {

        let headers = {
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "accept": "application/json",
                "cache-control": "no-cache",
            }
        };

        let data = {
            "grant_type": "password",
            "client_id": "6",
            "client_secret": "NUsoJGRFktjUA42z3yjcDxZjLb0YwOSrLcyuXf1s",
            "password": user.password,
            "username": user.email,
            "scope": "*"
        };

        // return this.http.post(`${API_PADM_ROOT}/oauth/token`, data, {headers: headers});
        return this.http.post(`${API_PADM_ROOT}/oauth/token`, data);
    }

    setAccessToken(token: string) {
        if (token) {
            this.access_token = token;
            this.header = new HttpHeaders({'Authorization': 'Bearer' + token});
            this.userLogado = true;
            this.router.navigate(['dashboard']);
        } else {
            this.userLogado = false;
            this.router.navigate(['login']);
        }
    }

    getAccessToken(token: string) {
        return localStorage['user_token_padm'];
    }


}
