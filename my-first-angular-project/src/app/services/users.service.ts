import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({providedIn: 'root'})
export class UsersService {
    activeUsers: string[] = ['Max', 'Anna'];
    inactiveUsers: string[] = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) { }

    setToInactive(i: number) {
        this.inactiveUsers.push(this.activeUsers[i]);
        this.activeUsers.splice(i, 1);
        this.counterService.onActiveToInactive();
    }
    
    setToActive(i: number) {
        this.activeUsers.push(this.inactiveUsers[i]);
        this.inactiveUsers.splice(i, 1);
        this.counterService.onInactiveToActive();
    }
}