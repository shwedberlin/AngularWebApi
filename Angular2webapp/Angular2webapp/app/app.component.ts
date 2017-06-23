import { Component } from '@angular/core';
import { Http } from '@angular/http';

declare var moment: any;

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    name = 'Angular 4 (webpack)';
    timestamp: number = Date.now();

    momenttest: string;
    momentlocale: string;
    momentlocales: string[];

    constructor() {
        this.momentlocale = moment.locale('de');
        this.momenttest = moment().format('DD MMMM YYYY');
        this.momentlocale = moment.locale('en');
        this.momentlocale = moment.locale('kr');
        this.momentlocales = moment.locales();
    }
}