import { Component, Inject } from '@angular/core';

import { ApiService } from '../core/api.service'; // BIG Q: Why importing Service explicit if it is already imported and provided by CoreModule? 
import { UserService, User } from '../core/user.service';
import { LoggerService } from '../core/logger.service';
import { AlertProviderService, AlertType } from '../core/alert.provider.service';


@Component({
    templateUrl: './home-site.component.html'
})
export class HomeSiteComponent {
    private loggerName: string = "NG_Home";

    title = "I'm home-site component with WebApi data fetching";
    public ctrlData: DummyData[];
    timestamp = (new Date()).toString();
    public currUser: User = new User('undef','undef');

    constructor(apiService: ApiService, private userService: UserService, private logger: LoggerService, private alerProvider: AlertProviderService) {
        apiService.get('/Dummier/Get').subscribe(result => {
            this.ctrlData = <DummyData[]>result;
        });

        userService.getUser().subscribe(result => {
            this.currUser = result as User;
        });

        this.logger.GetLogger(this.loggerName).info("HomeSiteComponent");
    }

    alertSuccess(message: string) {
        this.alertBase(AlertType.Success, message);
    }

    alertInfo(message: string) {
        this.alertBase(AlertType.Information, message);
    }

    alertWarning(message: string) {
        this.alertBase(AlertType.Warning, message);
    }

    alertError(message: string) {
        this.alertBase(AlertType.Error, message);
    }

    private alertBase(type: AlertType, message: string) {
        this.alerProvider.alert(type, message);
    }
}

interface DummyData {
    clientData: string;
    serverData: string;
}
