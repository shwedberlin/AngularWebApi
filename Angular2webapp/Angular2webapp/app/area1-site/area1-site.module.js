"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var area1_site_component_1 = require("./area1-site.component");
var area1_site_routing_module_1 = require("./area1-site.routing.module");
var Area1SiteModule = (function () {
    function Area1SiteModule() {
    }
    return Area1SiteModule;
}());
Area1SiteModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, area1_site_routing_module_1.Area1SiteRoutingModule],
        exports: [area1_site_component_1.Area1SiteComponent],
        declarations: [area1_site_component_1.Area1SiteComponent],
        providers: [],
    })
], Area1SiteModule);
exports.Area1SiteModule = Area1SiteModule;
//# sourceMappingURL=area1-site.module.js.map