import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-container',
  templateUrl: './pipes-container.component.html',
  styleUrls: ['./pipes-container.component.css']
})
export class PipesContainerComponent {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Stable');
    }, 2000)
  });
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(2022, 1, 17)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(2022, 1, 17)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(2022, 1, 17)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(2022, 1, 17)
    }
  ];
  filteredString: string = '';

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'My Server',
      status: 'stable',
      started: new Date(2022, 1, 17)
    });
  }
}
