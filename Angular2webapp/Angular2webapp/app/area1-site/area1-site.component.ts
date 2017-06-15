import { Component } from '@angular/core';

import { TreeElement, Member, TestService } from '../core/test.service';
import { LoggerService } from '../core/logger.service';

@Component({
    templateUrl: './area1-site.component.html'
})
export class Area1SiteComponent {
    title = "I'm Area1 site component. Absolutely dummy.";
    timestamp = new Date();
    tree: TreeElement[];
    selectedTreeElement: TreeElement
    members: Member[];
    selectedMember: Member;
    alreadySelectedMembers: Member[];

    constructor(private testService: TestService, private logger: LoggerService) {
        this.tree = testService.getCurrentTree();
        this.alreadySelectedMembers = new Array();

        logger.info('Area 1 component initialized');
    }

    treeSelect(value: TreeElement) {
        this.members = this.testService.getMembers(value);
        this.logger.info('TreeElement selected: ' + value.name);
    }
    memberSelect(value: Member) {
        this.alreadySelectedMembers.push(value)
        this.logger.info('Member selected: ' + value.name);
    }
}