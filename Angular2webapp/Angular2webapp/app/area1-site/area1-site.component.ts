import { Component } from '@angular/core';

@Component({
    selector: 'abc-area1',
    templateUrl: './area1-site.component.html'
})
export class Area1SiteComponent {
    title = "I'm Area1 site component. Absolutely dummy.";
    timestamp = new Date();
}