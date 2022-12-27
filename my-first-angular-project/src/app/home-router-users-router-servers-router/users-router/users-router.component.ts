import { Component } from '@angular/core';

@Component({
  selector: 'app-users-router',
  templateUrl: './users-router.component.html',
  styleUrls: ['./users-router.component.css']
})
export class UsersRouterComponent {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
}
