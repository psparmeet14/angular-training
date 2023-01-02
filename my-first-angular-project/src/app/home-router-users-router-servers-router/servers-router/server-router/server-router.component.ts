import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersRouterService } from '../servers-router.service';

@Component({
  selector: 'app-server-router',
  templateUrl: './server-router.component.html',
  styleUrls: ['./server-router.component.css']
})
export class ServerRouterComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversRouterService: ServersRouterService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversRouterService.getServer(id);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversRouterService.getServer(+params['id']);
    // });
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}