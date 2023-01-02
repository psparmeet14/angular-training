import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeRouterComponent } from "./home-router-users-router-servers-router/home-router/home-router.component";
import { CanDeactivateGuard } from "./home-router-users-router-servers-router/servers-router/edit-server-router/can-deactivate-guard.service";
import { EditServerRouterComponent } from "./home-router-users-router-servers-router/servers-router/edit-server-router/edit-server-router.component";
import { ServerResolver } from "./home-router-users-router-servers-router/servers-router/server-router/server-resolver.service";
import { ServerRouterComponent } from "./home-router-users-router-servers-router/servers-router/server-router/server-router.component";
import { ServersRouterComponent } from "./home-router-users-router-servers-router/servers-router/servers-router.component";
import { UserRouterComponent } from "./home-router-users-router-servers-router/users-router/user-router/user-router.component";
import { UsersRouterComponent } from "./home-router-users-router-servers-router/users-router/users-router.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Route[] = [
    { 
      path: '',
      component: HomeRouterComponent 
    },
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