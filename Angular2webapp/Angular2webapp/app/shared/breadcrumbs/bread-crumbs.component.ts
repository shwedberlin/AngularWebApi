import { Component, Input, Output, EventEmitter } from '@angular/core';

import * as models from '../../model/models';

@Component({
    selector: 'bread-crumbs',
    templateUrl: './bread-crumbs.component.html',
    styleUrls: ['./bread-crumbs.component.less']
})
export class BreadCrumbsComponent { 
    @Output() selectedChange: EventEmitter<models.BreadCrumb<string>> = new EventEmitter();

    private breadCrumbs: Array<models.BreadCrumb<string>> = new Array<models.BreadCrumb<string>>();
    private activeCrumb: models.BreadCrumb<string>;

    constructor() {
    }

    private selectCrumb(crumb: models.BreadCrumb<string>) {
        let crumbIndex = this.breadCrumbs.indexOf(crumb, 0);
        this.activeCrumb = crumb;
        this.breadCrumbs = this.breadCrumbs.slice(0, crumbIndex+1);
        this.selectedChange.next(crumb);
    }

    public addNewCrumb(crumb: models.BreadCrumb<string>) {
        this.breadCrumbs.push(crumb);
        this.activeCrumb = crumb;
    }
}