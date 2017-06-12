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
var Area1SiteComponent = (function () {
    function Area1SiteComponent(testService) {
        this.testService = testService;
        this.title = "I'm Area1 site component. Absolutely dummy.";
        this.timestamp = new Date();
        this.tree = testService.getCurrentTree();
        this.alreadySelectedMembers = new Array();
    }
    Area1SiteComponent.prototype.treeSelect = function (value) {
        this.members = this.testService.getMembers(value);
    };
    Area1SiteComponent.prototype.memberSelect = function (value) {
        this.alreadySelectedMembers.push(value);
    };
    return Area1SiteComponent;
}());
Area1SiteComponent = __decorate([
    core_1.Component({
        templateUrl: './area1-site.component.html'
    }),
    __metadata("design:paramtypes", [test_service_1.TestService])
], Area1SiteComponent);
exports.Area1SiteComponent = Area1SiteComponent;
//# sourceMappingURL=area1-site.component.js.map