import { Component } from '@angular/core';

import { TreeElement, Member, TestService } from '../core/test.service';
import { LoggerService } from '../core/logger.service';
import { AffirmationProviderService, AffirmationResult } from '../core/affirmation.provider.service';

//import logoSrc from "../assets/proj.png";

@Component({
    templateUrl: './area1-site.component.html'
})
export class Area1SiteComponent {
    private loggerName: string = "NG_Area1";

    public heroImageUrl = require("../assets/proj.png");
    public smallImageUrl = require("../assets/small.png");

    title = "I'm Area1 site component";
    timestamp = new Date();
    tree: TreeElement[];
    selectedTreeElement: TreeElement
    members: Member[];
    selectedMember: Member;
    alreadySelectedMembers: Member[];

    constructor(private testService: TestService, private logger: LoggerService, private confirmProvider: AffirmationProviderService) {
        this.tree = testService.getCurrentTree();
        this.alreadySelectedMembers = new Array();

        this.logger.GetLogger(this.loggerName).info('Area 1 component initialized');
    }

    treeSelect(value: TreeElement) {
        this.members = this.testService.getMembers(value);
        this.logger.GetLogger(this.loggerName).info('TreeElement selected: ' + value.name);
    }
    memberSelect(value: Member) {
        this.affirmBase("Select this member?", false,
            () => {
                this.alreadySelectedMembers.push(value);
                this.logger.GetLogger(this.loggerName).info('Member selected: ' + value.name);
            },
            () => {
                this.logger.GetLogger(this.loggerName).info('Member selection cancelled: ' + value.name);
            });        
    }

    affirm(message: string) {
        this.affirmBase(message, false, () => alert("Bestätigt"), () => alert("Abgebrochen"));
    }

    affirmWCaptcha(message: string) {
        this.affirmBase(message, true, () => alert("Bestätigt"), () => alert("Abgebrochen"));
    }

    private affirmBase(message: string, useCaptcha: boolean, okFunc: () => void, errFunc: () => void) {
        this.confirmProvider.affirm(message, useCaptcha)
            .then((result) => {
                switch (result) {
                    case AffirmationResult.Confirmed:
                        okFunc();
                        break;
                    case AffirmationResult.Declined:
                        errFunc();
                        break;
                    default:
                        alert("Funkt nicht :(");
                        errFunc();
                        break;
                }
            });
    }
}