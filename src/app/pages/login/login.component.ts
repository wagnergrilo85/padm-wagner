///<reference path="../../../../node_modules/@types/node/index.d.ts"/>
///<reference path="../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, OnInit} from "@angular/core";
import {User} from "../../models/User.model";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import "rxjs/add/operator/map";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [require('./login.component.css').toString()]
})
export class LoginComponent implements OnInit {

    user: User = new User();

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
    }

    login() {
        // let token = "";
        // this.authService.login(this.user).subscribe(resp => {
        //     token = resp.access_token;
        //     if (token) {
        //         localStorage['user_token_padm'] = token;
        //         this.authService.setAccessToken(resp.access_token);
        //     }
        // });
    }


}
