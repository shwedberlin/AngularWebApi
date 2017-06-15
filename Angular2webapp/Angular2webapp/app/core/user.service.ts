import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';

@Injectable()
export class UserService {
 
    constructor(private apiService: ApiService) {
    }

    getUser(): Observable<User> {
        return this.apiService.get('/Dummier/GetAuthenticate');
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