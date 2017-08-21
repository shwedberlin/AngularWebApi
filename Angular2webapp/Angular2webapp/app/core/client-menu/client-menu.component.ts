import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { RemoteApiService } from '../../core/remoteapi.service';
import { AlertProviderService, AlertType } from '../alert.provider.service';

import * as models from '../../model/models';

declare var $: any;
declare var Sly: any;

@Component({
    selector: 'client-menu',
    templateUrl: './client-menu.component.html',
    styleUrls: ['./client-menu.component.less']//,
    //providers: [ClientService]
})
export class ClientmenuComponent {
    clientList: models.HauptOEinheit[];
    selectedClient: models.HauptOEinheit;
    private slyMenu: any;
    private currSlyItemsCount: number = 0;
    @ViewChildren('renderedClients') guiAddedClients: QueryList<any>;

    constructor(private service: RemoteApiService, private alertProvider: AlertProviderService) {
        this.clientList = new Array();        
    }

    ngOnInit() {
        this.slyMenu = new Sly($(".slyframe"), {
            slidee: $(".slyslidee"),
            horizontal: 1,
            itemNav: 'basic',
            mouseDragging: 1,
            touchDragging: 1,
            scrollBy: 1,
            dragHandle: 1,
            dynamicHandle: 0,
            clickBar: 1
        });
        this.slyMenu.init();

        this.service.getAllHOEs().subscribe(result => {
            this.clientList = result as models.HauptOEinheit[];
            console.log("Slymenu() clientList: " + this.clientList.length);
            console.log("Slymenu() after got clients: (slidee start: " + this.slyMenu.pos.start + ", end: " + this.slyMenu.pos.end + ", current: " + this.slyMenu.pos.cur + ")");
        });
    }
    
    ngAfterViewInit() {
        //subscribe to all changes on <ul> items
        this.guiAddedClients.changes.subscribe(t => {
            this.ngForRendred();
        })
    }

    ngForRendred() {
        //reload sly menu after changes on <ul> elements
        //causes recalculations on slidee
        this.slyMenu.reload();
        console.log("ngForRendred() clientList: " + this.clientList.length + ", lsy.items: " + this.slyMenu.items.length);
        console.log("ngForRendred() sizes: (slidee start: " + this.slyMenu.pos.start + ", end: " + this.slyMenu.pos.end + ", current: " + this.slyMenu.pos.cur + ")");
    }

    selectClient(client: models.HauptOEinheit) {
        this.selectedClient = client;
        this.alertProvider.alert(AlertType.Success, "Client selected: " + client.ShortName);
    }
}
