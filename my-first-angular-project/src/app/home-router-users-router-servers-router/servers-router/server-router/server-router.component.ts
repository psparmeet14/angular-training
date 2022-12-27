import { Component, OnInit } from '@angular/core';
import { ServersRouterService } from '../servers-router.service';

@Component({
  selector: 'app-server-router',
  templateUrl: './server-router.component.html',
  styleUrls: ['./server-router.component.css']
})
export class ServerRouterComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversRouterService: ServersRouterService) { }

  ngOnInit() {
    this.server = this.serversRouterService.getServer(1);
  }
}