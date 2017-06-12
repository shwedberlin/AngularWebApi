import { Component, Inject } from '@angular/core';

import { ApiService } from '../core/api.service'; // BIG Q: Why importing Service explicit if it is already imported and provided by CoreModule? 

@Component({
    templateUrl: './home-site.component.html'
})
export class HomeSiteComponent {
    title = "I'm home-site component with WebApi data fetching";
    public ctrlData: DummyData[];
    timestamp = (new Date()).toString();

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
