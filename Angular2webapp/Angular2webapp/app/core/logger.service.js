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
var jsnlog_1 = require("jsnlog");
var LoggerService = (function () {
    function LoggerService() {
        jsnlog_1.JL.setOptions({ "requestId": "ANGLR" });
        var ajaxAppender = jsnlog_1.JL.createAjaxAppender('ajaxAppender');
        var consoleAppender = jsnlog_1.JL.createConsoleAppender('consoleAppender');
        jsnlog_1.JL("AppLogger").setOptions({ "level": jsnlog_1.JL.getAllLevel(), "appenders": [ajaxAppender, consoleAppender] });
        this.innerLogger = jsnlog_1.JL;
        this.innerLogger("AppLogger").debug("Client Side Logger initialized");
    }
    LoggerService.prototype.info = function (message) {
        this.innerLogger("AppLogger").info("Client Side: " + message);
    };
    return LoggerService;
}());
LoggerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map