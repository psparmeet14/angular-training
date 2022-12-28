import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  allowEdit: boolean = false;

  constructor(private serversRouterService: ServersRouterService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1';
      }
    );
    this.route.fragment.subscribe();
    this.server = this.serversRouterService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversRouterService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
