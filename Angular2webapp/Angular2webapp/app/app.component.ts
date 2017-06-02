import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css']
})
export class AppComponent {
        name = 'Angular 4 (webpack)';
        timestamp = 'dummy'; //(new Date()).toString();
}
