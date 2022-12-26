import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private usersService: UsersService) {  }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(i: number) {
    this.usersService.setToInactive(i);
  }
}
