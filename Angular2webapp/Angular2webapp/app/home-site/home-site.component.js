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
var api_service_1 = require("../core/api.service"); // BIG Q: Why importing Service explicit if it is already imported and provided by CoreModule? 
var user_service_1 = require("../core/user.service");
var logger_service_1 = require("../core/logger.service");
var HomeSiteComponent = (function () {
    function HomeSiteComponent(apiService, userService, logger) {
        var _this = this;
        this.userService = userService;
        this.logger = logger;
        this.title = "I'm home-site component with WebApi data fetching";
        this.timestamp = (new Date()).toString();
        this.currUser = new user_service_1.User('undef', 'undef');
        apiService.get('/Dummier/Get').subscribe(function (result) {
            _this.ctrlData = result;
        });
        userService.getUser().subscribe(function (result) {
            _this.currUser = result;
        });
        this.logger.info("!!! CLIENT LOG !!! ---->  from HomeSiteComponent");
    }
    return HomeSiteComponent;
}());
HomeSiteComponent = __decorate([
    core_1.Component({
        templateUrl: './home-site.component.html'
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService, user_service_1.UserService, logger_service_1.LoggerService])
], HomeSiteComponent);
exports.HomeSiteComponent = HomeSiteComponent;
//# sourceMappingURL=home-site.component.js.map