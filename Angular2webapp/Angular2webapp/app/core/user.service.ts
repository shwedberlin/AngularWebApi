import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {
    private currUser: User;
    private loggerName: string = "NG_UserSrvc";

    constructor(private apiService: ApiService, private logger: LoggerService) {
    }

    getUser(): Observable<User> {
        if (this.currUser) {
            this.logger.GetLogger(this.loggerName).info("Returning earlier authenticated User.");
            return Observable.of(this.currUser);
        }

        this.logger.GetLogger(this.loggerName).info("User is not authenticated yet. Run api authentication.");
        var serviceObservable = this.apiService.get('/Dummier/GetAuthenticate');
        serviceObservable.subscribe(result => {
            this.currUser = result as User;            
        });

        // 2x subcribe() -> sends 2x api request :(
        //return Observable.of(this.currUser);
        return serviceObservable;
    }
}

export class User {
    name: string;
    role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }
}