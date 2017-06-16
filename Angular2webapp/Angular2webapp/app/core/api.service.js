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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var app_storage_1 = require("./app.storage");
//TODO maybe add JwtService later
//import { JwtService } from './jwt.service';
var ApiService = (function () {
    function ApiService(http, appStorgage) {
        this.http = http;
        this.appStorgage = appStorgage;
        this.apiUrl = "/api";
        this.requestId = appStorgage.getInstanceId();
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        headersConfig['RequestId'] = this.requestId;
        //if (this.jwtService.getToken()) {
        //    headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
        //}
        return new http_1.Headers(headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        return Rx_1.Observable.throw(error.json());
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new http_1.URLSearchParams(); }
        return this.http.get("" + this.apiUrl + path, { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_storage_1.AppStorage])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map