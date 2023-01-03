import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserObservableService } from '../services/user-observable.service';

@Component({
  selector: 'app-home-user-observable-container',
  templateUrl: './home-user-observable-container.component.html',
  styleUrls: ['./home-user-observable-container.component.css']
})
export class HomeUserObservableContainerComponent implements OnInit, OnDestroy {
  userActivated: boolean = false;
  private activatedSub: Subscription;

  constructor(private userObservableService: UserObservableService) {}

  ngOnInit(): void {
    this.activatedSub = this.userObservableService.activatedEmitter.subscribe(
      didActivate => {
        this.userActivated = didActivate;
      }
    )
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
