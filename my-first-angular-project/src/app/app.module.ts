import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './servers-server-container/server/server.component';
import { ServersComponent } from './servers-server-container/servers/servers.component';
import { CockpitComponent } from './server-element-cockpit-container/cockpit/cockpit.component';
import { ServerElementComponent } from './server-element-cockpit-container/server-element/server-element.component';
import { GameControlComponent } from './game-control-odd-even-container/game-control/game-control.component';
import { OddComponent } from './game-control-odd-even-container/odd/odd.component';
import { EvenComponent } from './game-control-odd-even-container/even/even.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { HeaderComponent } from './header/header.component';
import { ServerElementCockpitContainerComponent } from './server-element-cockpit-container/server-element-cockpit-container.component';
import { GameControlOddEvenContainerComponent } from './game-control-odd-even-container/game-control-odd-even-container-component';
import { ServersServerContainerComponent } from './servers-server-container/servers-server-container.component';
import { AccountNewAccountContainerComponent } from './account-new-account-container/account-new-account-container.component';
import { AccountComponent } from './account-new-account-container/account/account.component';
import { NewAccountComponent } from './account-new-account-container/new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerElementCockpitContainerComponent,
    GameControlOddEvenContainerComponent,
    ServersServerContainerComponent,
    AccountNewAccountContainerComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
