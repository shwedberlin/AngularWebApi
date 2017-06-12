"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Area1SiteComponent = (function () {
    function Area1SiteComponent() {
        this.title = "I'm Area1 site component. Absolutely dummy.";
        this.timestamp = new Date();
    }
    return Area1SiteComponent;
}());
Area1SiteComponent = __decorate([
    core_1.Component({
        templateUrl: './area1-site.component.html'
    })
], Area1SiteComponent);
exports.Area1SiteComponent = Area1SiteComponent;
//# sourceMappingURL=area1-site.component.js.map