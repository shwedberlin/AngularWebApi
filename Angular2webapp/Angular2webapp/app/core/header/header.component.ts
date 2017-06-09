import { Component } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
    selector: 'abc-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    name = 'Angular 4 (webpack)';
    version = "n.a.";
    
    constructor(apiService: ApiService) {
            apiService.get('/Dummier/GetVersion').subscribe(result => {
                this.version = result;
            });
        }
}