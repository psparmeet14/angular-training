import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created'
  serverName: string = 'Testserver';
  username: string = '';
  serverCreated: boolean = false;
  servers: string[] = ['Testserver', 'Testserver 2'];
  log: Date[] = [];
  showSecret: boolean = false;
  oddNumbers: number[] = [1, 3, 5];
  evenNumbers: number[] = [2, 4, 6];
  onlyOdd: boolean = false;
  value: number = 100;
 
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleDetails(): void {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
