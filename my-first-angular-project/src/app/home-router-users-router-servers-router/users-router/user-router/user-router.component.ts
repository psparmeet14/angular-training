import { Component } from '@angular/core';

@Component({
  selector: 'app-user-router',
  templateUrl: './user-router.component.html',
  styleUrls: ['./user-router.component.css']
})
export class UserRouterComponent {
  user: {id: number, name: string};
}
