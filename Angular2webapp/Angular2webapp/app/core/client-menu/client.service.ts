import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Client } from './client.model';
import { ApiService } from '../api.service';

@Injectable()
export class ClientService {

    constructor(private apiService: ApiService) {
    }

    getAllClients(): Observable<Client[]>  {
        return this.apiService.get('/Client/GetAll');
    }
}
