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
var forms_1 = require("@angular/forms");
var header_component_1 = require("./header/header.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var welcome_component_1 = require("./welcome/welcome.component");
var api_service_1 = require("./api.service");
var test_service_1 = require("./test.service");
var user_service_1 = require("./user.service");
var logger_service_1 = require("./logger.service");
var app_storage_1 = require("./app.storage");
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule //,  // we use ngModel
        ],
        exports: [header_component_1.HeaderComponent, page_not_found_component_1.PageNotFoundComponent, welcome_component_1.WelcomeComponent],
        declarations: [header_component_1.HeaderComponent, page_not_found_component_1.PageNotFoundComponent, welcome_component_1.WelcomeComponent],
        providers: [api_service_1.ApiService, test_service_1.TestService, user_service_1.UserService, logger_service_1.LoggerService, app_storage_1.AppStorage]
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map