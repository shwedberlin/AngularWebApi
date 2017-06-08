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
var action_menu_component_1 = require("./action-menu/action-menu.component");
//import { UserService } from './user/user.service';
var api_service_1 = require("./api.service");
//import { TestService } from './test.service';
//import { TestProviderService } from './test-provider.service';
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule // we use ngModel
        ],
        exports: [header_component_1.HeaderComponent, action_menu_component_1.ActionMenuComponent],
        declarations: [header_component_1.HeaderComponent, action_menu_component_1.ActionMenuComponent],
        providers: [api_service_1.ApiService]
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map