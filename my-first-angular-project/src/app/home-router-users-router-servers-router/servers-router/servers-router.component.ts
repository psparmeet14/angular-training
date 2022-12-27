import { Component, OnInit } from '@angular/core';
import { ServersRouterService } from './servers-router.service';

@Component({
  selector: 'app-servers-router',
  templateUrl: './servers-router.component.html',
  styleUrls: ['./servers-router.component.css']
})
export class ServersRouterComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversRouterService: ServersRouterService) { }

  ngOnInit() {
    this.servers = this.serversRouterService.getServers();
  }

}
