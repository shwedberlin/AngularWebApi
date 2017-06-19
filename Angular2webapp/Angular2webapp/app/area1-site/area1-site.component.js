"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var test_service_1 = require("../core/test.service");
var logger_service_1 = require("../core/logger.service");
var affirmation_provider_service_1 = require("../core/affirmation.provider.service");
var Area1SiteComponent = (function () {
    function Area1SiteComponent(testService, logger, confirmProvider) {
        this.testService = testService;
        this.logger = logger;
        this.confirmProvider = confirmProvider;
        this.loggerName = "NG_Area1";
        this.title = "I'm Area1 site component";
        this.timestamp = new Date();
        this.tree = testService.getCurrentTree();
        this.alreadySelectedMembers = new Array();
        this.logger.GetLogger(this.loggerName).info('Area 1 component initialized');
    }
    Area1SiteComponent.prototype.treeSelect = function (value) {
        this.members = this.testService.getMembers(value);
        this.logger.GetLogger(this.loggerName).info('TreeElement selected: ' + value.name);
    };
    Area1SiteComponent.prototype.memberSelect = function (value) {
        var _this = this;
        this.affirmBase("Select this member?", false, function () {
            _this.alreadySelectedMembers.push(value);
            _this.logger.GetLogger(_this.loggerName).info('Member selected: ' + value.name);
        }, function () {
            _this.logger.GetLogger(_this.loggerName).info('Member selection cancelled: ' + value.name);
        });
    };
    Area1SiteComponent.prototype.affirm = function (message) {
        this.affirmBase(message, false, function () { return alert("Bestätigt"); }, function () { return alert("Abgebrochen"); });
    };
    Area1SiteComponent.prototype.affirmWCaptcha = function (message) {
        this.affirmBase(message, true, function () { return alert("Bestätigt"); }, function () { return alert("Abgebrochen"); });
    };
    Area1SiteComponent.prototype.affirmBase = function (message, useCaptcha, okFunc, errFunc) {
        this.confirmProvider.affirm(message, useCaptcha)
            .then(function (result) {
            switch (result) {
                case affirmation_provider_service_1.AffirmationResult.Confirmed:
                    okFunc();
                    break;
                case affirmation_provider_service_1.AffirmationResult.Declined:
                    errFunc();
                    break;
                default:
                    alert("Funkt nicht :(");
                    errFunc();
                    break;
            }
        });
    };
    return Area1SiteComponent;
}());
Area1SiteComponent = __decorate([
    core_1.Component({
        templateUrl: './area1-site.component.html'
    }),
    __metadata("design:paramtypes", [test_service_1.TestService, logger_service_1.LoggerService, affirmation_provider_service_1.AffirmationProviderService])
], Area1SiteComponent);
exports.Area1SiteComponent = Area1SiteComponent;
//# sourceMappingURL=area1-site.component.js.map