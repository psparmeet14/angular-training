import { Component, OnInit } from '@angular/core';
import { ServersRouterService } from '../servers-router.service';

@Component({
  selector: 'app-edit-server-router',
  templateUrl: './edit-server-router.component.html',
  styleUrls: ['./edit-server-router.component.css']
})
export class EditServerRouterComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversRouterService: ServersRouterService) { }

  ngOnInit() {
    this.server = this.serversRouterService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversRouterService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
