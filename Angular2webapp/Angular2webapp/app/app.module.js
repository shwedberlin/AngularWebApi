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
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
/* App Root*/
var app_component_1 = require("./app.component");
/* Routing Module*/
var app_routing_module_1 = require("./app.routing.module");
/* Feature Modules*/
var core_module_1 = require("./core/core.module");
var shared_module_1 = require("./shared/shared.module");
var action_menu_component_1 = require("./core/action-menu/action-menu.component");
var logger_service_1 = require("./core/logger.service");
var app_storage_1 = require("./core/app.storage");
var AppModule = (function () {
    function AppModule(appStorage, logger) {
        this.appStorage = appStorage;
        this.logger = logger;
        this.appStorage.setInstaceId(Guid.newGuid());
        this.logger.info('App Modul initialized');
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            common_1.CommonModule,
            app_routing_module_1.AppRoutingModule,
            shared_module_1.SharedModule,
            core_module_1.CoreModule
        ],
        declarations: [app_component_1.AppComponent, action_menu_component_1.ActionMenuComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [app_storage_1.AppStorage, logger_service_1.LoggerService])
], AppModule);
exports.AppModule = AppModule;
//temporary solution at this place
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
//# sourceMappingURL=app.module.js.map