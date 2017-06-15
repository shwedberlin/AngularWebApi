import { Component, Inject } from '@angular/core';

import { ApiService } from '../core/api.service'; // BIG Q: Why importing Service explicit if it is already imported and provided by CoreModule? 
import { UserService, User } from '../core/user.service';
import { LoggerService } from '../core/logger.service';

@Component({
    templateUrl: './home-site.component.html'
})
export class HomeSiteComponent {
    title = "I'm home-site component with WebApi data fetching";
    public ctrlData: DummyData[];
    timestamp = (new Date()).toString();
    public currUser: User = new User('undef','undef');

    constructor(apiService: ApiService, private userService: UserService, private logger: LoggerService) {
        apiService.get('/Dummier/Get').subscribe(result => {
            this.ctrlData = <DummyData[]>result;
        });

        userService.getUser().subscribe(result => {
            this.currUser = result as User;
        });
        
        this.logger.info("!!! CLIENT LOG !!! ---->  from HomeSiteComponent");
    }
}

interface DummyData {
    clientData: string;
    serverData: string;
}
