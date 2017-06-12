import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Member, TreeElement } from '../../core/test.service';

@Component({
    selector: 'member-component',
    templateUrl: './member.component.html'
})
export class MemberComponent {
    @Input() members: Member[];
    @Input() treeElement: TreeElement;
    @Input() selected: Member;
    @Output() selectedChange: EventEmitter<Member> = new EventEmitter();

    constructor() {

    }
}