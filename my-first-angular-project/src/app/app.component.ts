import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: [`
  // h2 {
   //   color: dodgerblue;
 //   }
 // `]
})
export class AppComponent {
  title = 'my-first-angular-project';
  loadedFeature: string;
 
  showFeature(feature: string) {
    this.loadedFeature = feature;
  }

}
