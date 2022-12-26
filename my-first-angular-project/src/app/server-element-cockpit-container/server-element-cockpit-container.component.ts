import { Component } from "@angular/core";

@Component({
    selector: 'app-server-element-cockpit-container',
    templateUrl: './server-element-cockpit-container.component.html'
})
export class ServerElementCockpitContainerComponent {
    serverElements = [{type: 'server', name: 'Test server', content: 'Just a test!'}];

    onServerAdded(serverData: {serverName: string, serverContent: string}) {
        this.serverElements.push({
          type: 'server',
          name: serverData.serverName,
          content: serverData.serverContent
        });
      }

      onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
        this.serverElements.push({
          type: 'blueprint',
          name: blueprintData.serverName,
          content: blueprintData.serverContent
        });
      }

      onChangeFirst() {
        this.serverElements[0].name = 'Changed';
      }

      onDestroyFirst() {
        this.serverElements.splice(0, 1);
      }
}