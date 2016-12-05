import { Component, OnInit } from '@angular/core';
import { CompanyService, Company } from './company.service';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <ul>
    <li *ngFor="let company of companies">
    <strong>{{company.name}}</strong><br>
    from: {{company.industry}}<br>
    date of birth: {{company.fiscalYear | date: 'dd/MM/yyyy'}}
    </li>
    </ul>
    `,
    providers: [
        CompanyService
    ]
})
export class AppComponent extends OnInit {

    constructor(private _service: CompanyService) {
        super();
    }

    ngOnInit() {
        this._service.loadData().then(data => {
            this.companies = data;
        })
    }

    companies: Company[] = [];
}

