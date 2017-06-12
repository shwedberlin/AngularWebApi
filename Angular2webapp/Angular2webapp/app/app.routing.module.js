"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_site_module_1 = require("./home-site/home-site.module");
var area1_site_module_1 = require("./area1-site/area1-site.module");
var page_not_found_component_1 = require("./core/page-not-found/page-not-found.component");
var welcome_component_1 = require("./core/welcome/welcome.component");
var routes = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'home', loadChildren: function () { return home_site_module_1.HomeSiteModule; } },
    { path: 'area1', loadChildren: function () { return area1_site_module_1.Area1SiteModule; } },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.module.js.map