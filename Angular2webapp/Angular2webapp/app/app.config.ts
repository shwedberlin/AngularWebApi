import { Inject, Injectable  } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

/**
 * Solution taken from:
 * https://gist.github.com/fernandohu/122e88c3bcd210bbe41c608c36306db9
 * Simplified here. Division to dev & prod configuration can be added if you need
 */

@Injectable()
export class AppConfig {

    private _config: Object = null;    

    constructor(private http: Http) {        
    }

    public getConfig(key: any) {
        //commented to get error throw if smth goes wrong

        //if (this._config) {
            return this._config[key];
        //}
        //else {
        //    console.error('Configuration is not finished!');
        //}
    }

    public load(): Promise<boolean> {        
        return new Promise<boolean>((resolve) => {
            this.http.get('config.development.json')
                .map(res => res.json())
                .catch((error: any) => {
                    console.error('Error reading configuration file');
                    resolve(error);
                    return Observable.throw(error.json().error || 'Server error');
                })
                .subscribe((responseData) => {
                    console.log('Got configuration response from server');
                    this._config = responseData;
                    resolve(true);
                });
        });
    }
}