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
var api_service_1 = require("../core/api.service");
var HomeSiteComponent = (function () {
    //constructor(http: Http) {
    //    //http.get('/api/Dummier/Get').subscribe(result => {
    //    //    this.ctrlData = result.json() as DummyData[];
    //    //});
    //    http.get('/api/Dummier/Get').subscribe(value => {
    //        this.ctrlData = <DummyData[]>value.json();
    //    });
    //}
    function HomeSiteComponent(apiService) {
        var _this = this;
        this.title = "I'm home-site component with WebApi data fetching";
        this.timestamp = (new Date()).toString();
        apiService.get('/Dummier/Get').subscribe(function (result) {
            _this.ctrlData = result;
        });
    }
    return HomeSiteComponent;
}());
HomeSiteComponent = __decorate([
    core_1.Component({
        selector: 'abc-home',
        templateUrl: './home-site.component.html'
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], HomeSiteComponent);
exports.HomeSiteComponent = HomeSiteComponent;
//# sourceMappingURL=home-site.component.js.map