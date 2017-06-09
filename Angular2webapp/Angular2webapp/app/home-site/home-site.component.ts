import { Component, Inject } from '@angular/core';

import { ApiService } from '../core/api.service'; // BIG Q: Why importing Service explicit if it i already imported and provided by CoreModule? 

@Component({
    selector: 'abc-home',
    templateUrl: './home-site.component.html'
})
export class HomeSiteComponent {
    title = "I'm home-site component with WebApi data fetching";
    public ctrlData: DummyData[];
    timestamp = (new Date()).toString();

    //constructor(http: Http) {
    //    //http.get('/api/Dummier/Get').subscribe(result => {
    //    //    this.ctrlData = result.json() as DummyData[];
    //    //});

    //    http.get('/api/Dummier/Get').subscribe(value => {
    //        this.ctrlData = <DummyData[]>value.json();
    //    });
    //}

    constructor(apiService: ApiService) {
        apiService.get('/Dummier/Get').subscribe(result => {
            this.ctrlData = <DummyData[]>result;
        });
    }
}

interface DummyData {
    clientData: string;
    serverData: string;
}
