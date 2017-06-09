"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var shared_module_1 = require("../shared/shared.module");
var home_site_component_1 = require("./home-site.component");
var home_site_routing_module_1 = require("./home-site.routing.module");
var HomeSiteModule = (function () {
    function HomeSiteModule() {
    }
    return HomeSiteModule;
}());
HomeSiteModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, shared_module_1.SharedModule, home_site_routing_module_1.HomeSiteRoutingModule],
        exports: [home_site_component_1.HomeSiteComponent],
        declarations: [home_site_component_1.HomeSiteComponent],
        providers: [],
    })
], HomeSiteModule);
exports.HomeSiteModule = HomeSiteModule;
//# sourceMappingURL=home-site.module.js.map