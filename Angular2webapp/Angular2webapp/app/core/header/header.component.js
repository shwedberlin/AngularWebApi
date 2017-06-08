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
var api_service_1 = require("../api.service");
var HeaderComponent = (function () {
    function HeaderComponent(apiService) {
        var _this = this;
        this.name = 'Angular 4 (webpack)';
        this.version = "n.a.";
        apiService.get('/Dummier/GetVersion').subscribe(function (result) {
            _this.version = result;
        });
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'hpc-header',
        templateUrl: './header.component.html'
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map