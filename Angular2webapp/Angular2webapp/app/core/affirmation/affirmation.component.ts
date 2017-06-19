import { Component } from '@angular/core';

import { AffirmationProviderService, Affirmation, AffirmationResult } from '../affirmation.provider.service';

@Component({
    selector: 'affirm-component',
    templateUrl: './affirmation.component.html',
    styleUrls: ['./affirmation.component.less']
})
export class AffirmationComponent {
    public currentAffirmation: Affirmation;
    private captchaInput: string;
    private captchaProof = "confirm";

    constructor(private provider: AffirmationProviderService) {
        provider.affirmation$.subscribe(
            affirmationObject => {
                this.invokeNewAffirmation(affirmationObject);
            }
        );
    }

    private invokeNewAffirmation(affirmationObject: Affirmation) {
        this.currentAffirmation = affirmationObject;
    }

    public confirm() {
        if (this.currentAffirmation.withCaptcha && this.captchaInput !== this.captchaProof) return;

        this.currentAffirmation.close(AffirmationResult.Confirmed);
        this.currentAffirmation = null;
    }

    public decline() {
        this.currentAffirmation.close(AffirmationResult.Declined);
        this.currentAffirmation = null;
    }
}
