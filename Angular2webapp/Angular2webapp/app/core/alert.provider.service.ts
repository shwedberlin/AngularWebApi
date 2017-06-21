import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class AlertProviderService {
    private _alert = new Subject<Alert>();
    alert$ = this._alert.asObservable();

    alert(type: AlertType, message: string, ) {
        let alertObject: Alert = new Alert();
        alertObject.type = type;
        alertObject.title = type.toString();
        alertObject.message = message;
        alertObject.timeoutSeconds = 10;

        switch (type) {
            case AlertType.Success:
            case AlertType.Information:
                alertObject.timeoutSeconds = 3;
                break;
            case AlertType.Warning:
                alertObject.timeoutSeconds = 6;
                break;
            case AlertType.Error:
                alertObject.timeoutSeconds = 60;
                break;
            default:
                alertObject.timeoutSeconds = 60;
                break;
        }

        this._alert.next(alertObject); // add new ALertObject to Observable Subject        
    }
}

export class Alert {
    id: number;
    type: AlertType;
    title: string;
    message: string;
    timeoutSeconds: number;
}

export enum AlertType {
    Success,
    Information,
    Warning,
    Error
}