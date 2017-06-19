import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class AffirmationProviderService {
    private _affirmation = new Subject<Affirmation>();
    affirmation$ = this._affirmation.asObservable();

    affirm(message: string, useCaptcha: boolean = false): Promise<AffirmationResult> {
        let affirmationObject: Affirmation = new Affirmation();
        affirmationObject.message = message;
        affirmationObject.withCaptcha = useCaptcha;

        this._affirmation.next(affirmationObject); // add new AffirmationObject to Observable Subject

        return new Promise((resolve, reject) => {
            affirmationObject.affirmationResult$
                .subscribe(res => {
                    if (res === AffirmationResult.Pending) return;
                    resolve(res);
                });
        });
    }

    message(message: string) {
        alert(message);
    }
}

export class Affirmation {
    id: number;
    title: string;
    message: string;
    withCaptcha: boolean;

    private _affirmationResult = new BehaviorSubject<AffirmationResult>(AffirmationResult.Pending);
    affirmationResult$ = this._affirmationResult.asObservable();
    close(result: AffirmationResult) {
        this._affirmationResult.next(result);
    }
}

export enum AffirmationResult {
    Pending,
    Confirmed,
    Declined
}