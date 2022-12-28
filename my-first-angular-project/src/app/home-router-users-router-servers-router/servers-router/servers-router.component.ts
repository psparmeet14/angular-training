import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersRouterService } from './servers-router.service';

@Component({
  selector: 'app-servers-router',
  templateUrl: './servers-router.component.html',
  styleUrls: ['./servers-router.component.css']
})
export class ServersRouterComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversRouterService: ServersRouterService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversRouterService.getServers();
  }

  onReload() {
    //this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
