import { Component, OnInit } from "@angular/core";
import { AccountsService } from "../services/accounts.service";

@Component({
    selector: 'app-account-new-account-container',
    templateUrl: './account-new-account-container.component.html'
})
export class AccountNewAccountContainerComponent implements OnInit {
    accounts: {name: string, status: string}[] = [];

    constructor(private accountsService: AccountsService) {}

    ngOnInit(): void {
        this.accounts = this.accountsService.accounts;
    }
}