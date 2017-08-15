import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppStorage } from './app.storage';
import * as models from '../model/models';

@Injectable()
export class RemoteApiService {
    private apiUrl: string;
    private requestId: string;

    constructor(private http: Http, private appStorgage: AppStorage) {
        this.apiUrl = "http://localhost:3278/api";
        this.requestId = appStorgage.getInstanceId();
    }

    private setHeaders(): Headers {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        headersConfig['RequestId'] = this.requestId;

        return new Headers(headersConfig);
    }

    private formatErrors(error: any) {
        return Observable.throw(error.json());
    }

    get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
        return this.http.get(`${this.apiUrl}${path}`, { headers: this.setHeaders(), search: params, withCredentials: true })
            .catch(this.formatErrors)
            .map((res: Response) => res.json());
    }

    public aDGetPage(page: models.Page, adPath: string, sort: string): Observable<models.PagedData<models.ADResource>> {
        let path = this.apiUrl + "/AD/Get";
        let queryParameters = new URLSearchParams();
        queryParameters.append("page", page.PageNumber.toString());
        queryParameters.append("pageSize", page.PageSize.toString());
        if (adPath !== null) {
            queryParameters.append("path", adPath);
        }
        if (sort !== null) {
            queryParameters.append("sort", sort);
        }
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: this.setHeaders(),
            search: queryParameters,
            withCredentials: true
        });

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    var pagedResult = new models.PagedData<models.ADResource>();
                    var responseJson = response.json();
                    pagedResult.data = responseJson;
                    pagedResult.page = JSON.parse(response.headers.get('X-Pagination'));
                    return pagedResult;
                }
            });
    }

    public aDGet(): Observable<Array<models.ADResource>> {
        let path = this.apiUrl + "/AD/Get";
        let queryParameters = new URLSearchParams();
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: this.setHeaders(),
            search: queryParameters,
            withCredentials: true
        });

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    public uploadFile(file: File): Observable<any> {
        let formData: FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let path = "/File/Upload";
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');*/
        let options = new RequestOptions({ headers: headers });
        return this.http.post(`${this.apiUrl}${path}`, formData)
            .map(res => res.json())
            .catch(error => Observable.throw(error));
    }
}
