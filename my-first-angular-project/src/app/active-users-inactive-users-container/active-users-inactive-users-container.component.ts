import { Component } from "@angular/core";
import { UsersService } from "../services/users.service";

@Component({
    selector: 'app-active-users-inactive-users-container',
    templateUrl: './active-users-inactive-users-container.component.html',
    providers: [UsersService]
})
export class ActiveUsersInactiveUsersContainerComponent {
 
}