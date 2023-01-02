import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersRouterService } from "../servers-router.service";

interface ServerModel {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<ServerModel> {

    constructor(private serversRouterService: ServersRouterService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<ServerModel> | Promise<ServerModel> | ServerModel {
        return this.serversRouterService.getServer(+route.params['id']);
    }
}