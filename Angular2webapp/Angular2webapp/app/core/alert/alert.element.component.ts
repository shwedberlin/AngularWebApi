import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Alert, AlertType } from '../alert.provider.service';

@Component({
    selector: 'alert-element',
    templateUrl: './alert.element.component.html',
    styleUrls: ['./alert.element.component.less']
})
export class AlertElementComponent {
    @Input() alert: Alert;
    @Output() alertClosing: EventEmitter<Alert> = new EventEmitter();

    alertStyle: string;

    constructor() {
        this.alertStyle = 'alert-info';        
    }

    ngOnInit() {
        switch (this.alert.type) {
            case AlertType.Success:
                this.alertStyle = '-success';
                break;
            case AlertType.Information:
                this.alertStyle = '-info';
                break;
            case AlertType.Warning:
                this.alertStyle = '-warning';
                break;
            case AlertType.Error:
                this.alertStyle = '-danger';
                break;
            default:
                this.alertStyle = '-info';
                break;
        }

        let timer = Observable.timer(this.alert.timeoutSeconds * 1000); /**convert to ms*/
        timer.subscribe(() => this.alertClosing.next(this.alert));
    }
}