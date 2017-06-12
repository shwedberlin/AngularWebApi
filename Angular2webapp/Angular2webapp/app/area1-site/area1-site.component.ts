import { Component } from '@angular/core';

import { TreeElement, Member, TestService } from '../core/test.service';

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

    constructor(private testService: TestService) {
        this.tree = testService.getCurrentTree();
        this.alreadySelectedMembers = new Array();
    }

    treeSelect(value: TreeElement) {
        this.members = this.testService.getMembers(value);
    }
    memberSelect(value: Member) {
        this.alreadySelectedMembers.push(value)
    }

    //affirm(message: string) {
    //    this.affirmBase(message, false, () => alert("Bestätigt"), () => alert("Abgebrochen"));
    //}

    //affirmWCaptcha(message: string) {
    //    this.affirmBase(message, true, () => alert("Bestätigt"), () => alert("Abgebrochen"));
    //}

    //private affirmBase(message: string, useCaptcha: boolean, okFunc: () => void, errFunc: () => void) {
    //    this.confirmProvider.affirm(message, useCaptcha)
    //        .then((result) => {
    //            switch (result) {
    //                case AffirmationResult.Confirmed:
    //                    okFunc();
    //                    break;
    //                case AffirmationResult.Declined:
    //                    errFunc();
    //                    break;
    //                default:
    //                    alert("Funkt nicht :(");
    //                    errFunc();
    //                    break;
    //            }
    //        });
    //}
}