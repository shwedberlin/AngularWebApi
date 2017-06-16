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
var app_storage_1 = require("./app.storage");
var LoggerService = (function () {
    function LoggerService(appStorage) {
        this.appStorage = appStorage;
        this.defaultName = "ANGLR";
        //JL Logger adapters
        this.ajaxAppender = jsnlog_1.JL.createAjaxAppender('ajaxAppender');
        this.consoleAppender = jsnlog_1.JL.createConsoleAppender('consoleAppender');
        this.configuredLoggers = new Array();
        this.GetLogger(this.defaultName).info("Default Client Side Logger initialized");
    }
    //remove logger from array if exists.
    //next time this logger will be configured again
    LoggerService.prototype.ResetLogger = function (name) {
        var logger = this.configuredLoggers.indexOf(name);
        if (logger > -1) {
            this.configuredLoggers.splice(logger, 1);
            return true;
        }
        return false;
    };
    //returns logger object
    LoggerService.prototype.GetLogger = function (name) {
        if (name === undefined) {
            name = this.defaultName;
        }
        var logger = this.configuredLoggers.indexOf(name);
        if (logger === -1) {
            this.ConfigureLogger(name);
        }
        return jsnlog_1.JL(name);
    };
    //all loggers configured with "All" level
    //further configuration is done at server side
    LoggerService.prototype.ConfigureLogger = function (name) {
        jsnlog_1.JL.setOptions({ "requestId": this.appStorage.getInstanceId() });
        jsnlog_1.JL(name).setOptions({ "level": jsnlog_1.JL.getAllLevel(), "appenders": [this.ajaxAppender, this.consoleAppender] });
        this.configuredLoggers.push(name);
    };
    return LoggerService;
}());
LoggerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_storage_1.AppStorage])
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map