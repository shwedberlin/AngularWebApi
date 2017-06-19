import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.less']
})
export class AppComponent {
        name = 'Angular 4 (webpack)';
        timestamp: number = Date.now();
}