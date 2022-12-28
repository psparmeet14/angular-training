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
import { ActiveUsersComponent } from './active-users-inactive-users-container/active-users/active-users.component';
import { InactiveUsersComponent } from './active-users-inactive-users-container/inactive-users/inactive-users.component';
import { ActiveUsersInactiveUsersContainerComponent } from './active-users-inactive-users-container/active-users-inactive-users-container.component';
import { HomeRouterUsersRouterServersRouterComponent } from './home-router-users-router-servers-router/home-router-users-router-servers-router.component';
import { HomeRouterComponent } from './home-router-users-router-servers-router/home-router/home-router.component';
import { UsersRouterComponent } from './home-router-users-router-servers-router/users-router/users-router.component';
import { ServersRouterComponent } from './home-router-users-router-servers-router/servers-router/servers-router.component';
import { UserRouterComponent } from './home-router-users-router-servers-router/users-router/user-router/user-router.component';
import { EditServerRouterComponent } from './home-router-users-router-servers-router/servers-router/edit-server-router/edit-server-router.component';
import { ServerRouterComponent } from './home-router-users-router-servers-router/servers-router/server-router/server-router.component';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Route[] = [
  { path: '', component: HomeRouterComponent },
  { path: 'users', component: UsersRouterComponent, children: [
    { path: ':id/:name', component: UserRouterComponent }
  ] },
  { path: 'servers', component: ServersRouterComponent, children: [
    { path: ':id', component: ServerRouterComponent },
    { path: ':id/edit', component: EditServerRouterComponent }
  ] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerElementCockpitContainerComponent,
    GameControlOddEvenContainerComponent,
    ServersServerContainerComponent,
    AccountNewAccountContainerComponent,
    ActiveUsersInactiveUsersContainerComponent,
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
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeRouterUsersRouterServersRouterComponent,
    HomeRouterComponent,
    UsersRouterComponent,
    ServersRouterComponent,
    UserRouterComponent,
    EditServerRouterComponent,
    ServerRouterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
