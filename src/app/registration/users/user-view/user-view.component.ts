import {Component, OnInit} from "@angular/core";
import {User} from "../../../models/User.model";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-user-view',
    templateUrl: 'user-view.component.html',
    styleUrls: ['user-view.component.css']
})
export class UserViewComponent implements OnInit {

    user: User = new User();

    constructor(private userService: UserService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.userService.find(+params['id']).subscribe(data => {
                    this.user = data;
                });
            }
        });
    }

}
