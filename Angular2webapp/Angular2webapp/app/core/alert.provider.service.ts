import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class AlertProviderService {
    private _alert = new Subject<Alert>();
    alert$ = this._alert.asObservable();

    alert(type: AlertType, message: string, ) {
        let alertObject: Alert = new Alert(type, type.toString(), message);
        
        this._alert.next(alertObject); // add new ALertObject to Observable Subject        
    }
}

export class Alert {
    id: number;
    type: AlertType;
    title: string;
    message: string;
    timeoutSeconds: number;

    constructor(type: AlertType, title: string, message: string) {
        this.type = type;
        this.title = title;
        this.message = message;

        switch (type) {
            case AlertType.Success:
            case AlertType.Information:
                this.timeoutSeconds = 3;
                break;
            case AlertType.Warning:
                this.timeoutSeconds = 6;
                break;
            case AlertType.Error:
            default:
                this.timeoutSeconds = 60;
                break;
        }
    }
}

export enum AlertType {
    Success,
    Information,
    Warning,
    Error
}