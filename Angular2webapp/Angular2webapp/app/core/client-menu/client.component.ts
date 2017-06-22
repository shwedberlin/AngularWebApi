import { Component } from '@angular/core';

@Component({
    selector: 'client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.less']
})
export class ClientComponent {
    name: string;

    constructor() {
        this.name = 'Sam';
    }
}
