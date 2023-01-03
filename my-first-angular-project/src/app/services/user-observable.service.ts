import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserObservableService {

    activatedEmitter = new Subject<boolean>();
}