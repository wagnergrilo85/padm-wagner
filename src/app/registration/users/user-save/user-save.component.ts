import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../models/User.model";
import {InputComponent} from "../../../shared/input/input.component";
import {UserService} from "../../../services/user.service";
import {Router, ActivatedRoute} from "@angular/router";
import {MessageService} from "../../../services/message.service";

@Component({
    selector: 'app-user-save',
    templateUrl: 'user-save.component.html',
    styleUrls: ['user-save.component.css']
})
export class UserSaveComponent implements OnInit {

    arraySelectStatus = [
        {value: 1, label: 'Ativado'},
        {value: 0, label: 'Desativado'},
    ];

    user: User = new User();

    @ViewChild(InputComponent)
    input: InputComponent;

    constructor(private userService: UserService,
                private route: Router,
                private activatedRoute: ActivatedRoute,
                private messageService: MessageService) {
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

    saveOrEdit() {
        this.userService.saveOrEdit(this.user).subscribe(resp => {

            if (this.user.id)
                this.messageService.message = `Usuários ${this.user.name}  atualizada com sucesso!`;
            else
                this.messageService.message = `Usuários ${this.user.name} cadastrada com sucesso!`;

            this.messageService.color = "success";
            this.route.navigate(['user']);

        });
    }


}
