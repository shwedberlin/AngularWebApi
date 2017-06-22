import { Component } from '@angular/core';

import { ClientService } from './client.service';
import { Client } from './client.model';

@Component({
    selector: 'client-menu',
    templateUrl: './client-menu.component.html',
    providers: [ClientService]
})
export class ClientmenuComponent {
    clientList: Client[];
    seelctedClient: Client;

    constructor(private service: ClientService) {
        this.clientList = new Array();

        service.getAllClients().subscribe(result => {
            this.clientList = result as Client[];
        });
    }
}
