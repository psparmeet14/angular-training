import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { CanDeactivateGuard } from "./home-router-users-router-servers-router/servers-router/edit-server-router/can-deactivate-guard.service";
import { EditServerRouterComponent } from "./home-router-users-router-servers-router/servers-router/edit-server-router/edit-server-router.component";
import { ServerResolver } from "./home-router-users-router-servers-router/servers-router/server-router/server-resolver.service";
import { ServerRouterComponent } from "./home-router-users-router-servers-router/servers-router/server-router/server-router.component";
import { ServersRouterComponent } from "./home-router-users-router-servers-router/servers-router/servers-router.component";
import { UserRouterComponent } from "./home-router-users-router-servers-router/users-router/user-router/user-router.component";
import { UsersRouterComponent } from "./home-router-users-router-servers-router/users-router/users-router.component";
import { HomeComponent } from "./home-user-observable-container/home/home.component";
import { UserComponent } from "./home-user-observable-container/user/user.component";

const appRoutes: Route[] = [
    {
      path: '',
      component: HomeComponent
    },
    // {  ENABLE THIS FOR home-users-servers router example
    //   path: '',
    //   component: HomeRouterComponent 
    // },
    { 
      path: 'users',
      component: UsersRouterComponent,
      children:
      [
        { 
          path: ':id/:name',
          component: UserRouterComponent 
        }
      ] 
    },
    { 
      path: 'servers',
      component: ServersRouterComponent,
      canActivateChild: [AuthGuard],
      children: 
      [
        { 
          path: ':id', 
          component: ServerRouterComponent,
          resolve: {server: ServerResolver}
        },
        { 
          path: ':id/edit', 
          component: EditServerRouterComponent,
          canDeactivate: [CanDeactivateGuard]
        }
      ] 
    },
    {
      path: 'user/:id',
      component: UserComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    { 
      path: 'not-found',
      component: ErrorPageComponent,
      data: { message: 'Page not found!' }
    },
    { 
      path: '**', 
      redirectTo: '/not-found'
    }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}