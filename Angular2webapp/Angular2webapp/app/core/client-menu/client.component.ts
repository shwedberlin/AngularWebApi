import { Component, Input, Output, EventEmitter } from '@angular/core';

import * as models from '../../model/models';

@Component({
    selector: 'client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.less']
})
export class ClientComponent {
    @Input() client: models.HauptOEinheit;
    @Input() isSelected: boolean;
    @Output() clientSelected: EventEmitter<models.HauptOEinheit> = new EventEmitter();

    constructor() {
    }
}
