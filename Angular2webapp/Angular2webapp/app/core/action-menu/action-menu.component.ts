import { Component } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
    selector: 'hpc-actionmenu',
    templateUrl: './action-menu.component.html'
})
export class ActionMenuComponent {
    currentHOE = 'CurrentHOE';
    
    constructor(apiService: ApiService) {

    }
}