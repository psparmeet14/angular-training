import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home-router',
  templateUrl: './home-router.component.html',
  styleUrls: ['./home-router.component.css']
})
export class HomeRouterComponent {

  constructor(private router: Router, private authService: AuthService) {}

  onLoadServers() {
    // complex calculations
    this.router.navigate(['/servers']);
  }

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'],
     {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
