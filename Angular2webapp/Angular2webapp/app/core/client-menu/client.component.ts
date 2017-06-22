import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Client } from './client.model';

@Component({
    selector: 'client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.less']
})
export class ClientComponent {
    @Input() client: Client;
    @Input() isSelected: boolean;
    @Output() clientSelected: EventEmitter<Client> = new EventEmitter();

    constructor() {
    }
}
