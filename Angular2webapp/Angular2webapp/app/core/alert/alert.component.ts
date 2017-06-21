import { Component } from '@angular/core';

import { AlertProviderService, Alert, AlertType } from '../alert.provider.service';

@Component({
    selector: 'alert-component',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.less']
})
export class AlertComponent {
    public alertList: Alert[];

    constructor(private provider: AlertProviderService) {
        this.alertList = new Array();
        provider.alert$.subscribe(
            alertObject => {
                this.alertList.push(alertObject);
            }
        );
    }

    removeAlert(value: Alert) {
        var index = this.alertList.indexOf(value, 0);
        if (index > -1) {
            this.alertList.splice(index, 1);
        }
    }
}
