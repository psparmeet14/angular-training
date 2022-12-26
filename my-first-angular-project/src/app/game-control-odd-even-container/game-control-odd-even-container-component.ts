import { Component } from "@angular/core";

@Component({
    selector: 'app-game-control-odd-even-container',
    templateUrl: './game-control-odd-even-container.component.html'
})
export class GameControlOddEvenContainerComponent {
    oddNumbers: number[] = [];
    evenNumbers: number[] = [];

    onIntervalFired(firedNumber: number) {
        console.log(firedNumber);
        if (firedNumber % 2 == 0) 
          this.evenNumbers.push(firedNumber);
        else
          this.oddNumbers.push(firedNumber);
      }
}