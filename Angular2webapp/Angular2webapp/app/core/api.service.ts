import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppStorage } from './app.storage';
//TODO maybe add JwtService later
//import { JwtService } from './jwt.service';

@Injectable()
export class ApiService {
    private apiUrl: string;
    private requestId: string;

    constructor(private http: Http, private appStorgage: AppStorage) {
        this.apiUrl = "/api";
        this.requestId = appStorgage.getInstanceId();
    }

    private setHeaders(): Headers {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        headersConfig['RequestId'] = this.requestId;

        //if (this.jwtService.getToken()) {
        //    headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
        //}
        return new Headers(headersConfig);
    }

    private formatErrors(error: any) {
        return Observable.throw(error.json());
    }

    get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
        return this.http.get(`${this.apiUrl}${path}`, { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map((res: Response) => res.json());
    }

    //put(path: string, body: Object = {}): Observable<any> {
    //    return this.http.put(
    //        `${this.apiUrl}${path}`,
    //        JSON.stringify(body),
    //        { headers: this.setHeaders() }
    //    )
    //        .catch(this.formatErrors)
    //        .map((res: Response) => res.json());
    //}

    //post(path: string, body: Object = {}): Observable<any> {
    //    return this.http.post(
    //        `${this.apiUrl}${path}`,
    //        JSON.stringify(body),
    //        { headers: this.setHeaders() }
    //    )
    //        .catch(this.formatErrors)
    //        .map((res: Response) => res.json());
    //}

    //delete(path): Observable<any> {
    //    return this.http.delete(
    //        `${this.apiUrl}${path}`,
    //        { headers: this.setHeaders() }
    //    )
    //        .catch(this.formatErrors)
    //        .map((res: Response) => res.json());
    //}
}
