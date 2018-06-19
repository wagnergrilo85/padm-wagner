import {Component, OnInit} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public showAppLayout: boolean = false;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {

        // let token = this.authService.getAccessToken();
        // if (token) {
        //     this.showAppLayout = true;
        // } else {
        //     this.router.navigate(['login']);
        //     this.showAppLayout = false;
        // }

    }
}
