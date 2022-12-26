import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
    counterActiveToInactive: number = 0;
    counterInactiveToActive: number = 0;

    onActiveToInactive() {
        this.counterActiveToInactive++;
        console.log('Counter active to inactive ' + this.counterActiveToInactive);
    }

    onInactiveToActive() {
        this.counterInactiveToActive++;
        console.log('Counter inactive to active ' + this.counterInactiveToActive);
    }
}