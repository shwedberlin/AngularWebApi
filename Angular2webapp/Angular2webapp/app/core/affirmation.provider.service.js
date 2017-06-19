"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AffirmationProviderService = (function () {
    function AffirmationProviderService() {
        this._affirmation = new Subject_1.Subject();
        this.affirmation$ = this._affirmation.asObservable();
    }
    AffirmationProviderService.prototype.affirm = function (message, useCaptcha) {
        if (useCaptcha === void 0) { useCaptcha = false; }
        var affirmationObject = new Affirmation();
        affirmationObject.message = message;
        affirmationObject.withCaptcha = useCaptcha;
        this._affirmation.next(affirmationObject); // add new AffirmationObject to Observable Subject
        return new Promise(function (resolve, reject) {
            affirmationObject.affirmationResult$
                .subscribe(function (res) {
                if (res === AffirmationResult.Pending)
                    return;
                resolve(res);
            });
        });
    };
    AffirmationProviderService.prototype.message = function (message) {
        alert(message);
    };
    return AffirmationProviderService;
}());
AffirmationProviderService = __decorate([
    core_1.Injectable()
], AffirmationProviderService);
exports.AffirmationProviderService = AffirmationProviderService;
var Affirmation = (function () {
    function Affirmation() {
        this._affirmationResult = new BehaviorSubject_1.BehaviorSubject(AffirmationResult.Pending);
        this.affirmationResult$ = this._affirmationResult.asObservable();
    }
    Affirmation.prototype.close = function (result) {
        this._affirmationResult.next(result);
    };
    return Affirmation;
}());
exports.Affirmation = Affirmation;
var AffirmationResult;
(function (AffirmationResult) {
    AffirmationResult[AffirmationResult["Pending"] = 0] = "Pending";
    AffirmationResult[AffirmationResult["Confirmed"] = 1] = "Confirmed";
    AffirmationResult[AffirmationResult["Declined"] = 2] = "Declined";
})(AffirmationResult = exports.AffirmationResult || (exports.AffirmationResult = {}));
//# sourceMappingURL=affirmation.provider.service.js.map