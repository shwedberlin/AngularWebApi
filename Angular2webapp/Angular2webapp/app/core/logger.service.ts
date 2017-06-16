import { Injectable } from '@angular/core';

import { JL } from 'jsnlog';

import { AppStorage } from './app.storage';


@Injectable()
export class LoggerService {
    private defaultName: string = "ANGLR";

    //JL Logger adapters
    private ajaxAppender = JL.createAjaxAppender('ajaxAppender');
    private consoleAppender = JL.createConsoleAppender('consoleAppender');

    //array of configured logger names
    private configuredLoggers: string[];

    constructor(private appStorage: AppStorage) {
        this.configuredLoggers = new Array();
        this.GetLogger(this.defaultName).info("Default Client Side Logger initialized");
    }

    //remove logger from array if exists.
    //next time this logger will be configured again
    ResetLogger(name: string): boolean {
        var logger = this.configuredLoggers.indexOf(name);
        if (logger > -1) {
            this.configuredLoggers.splice(logger, 1);
            return true;
        }
        return false;
    }

    //returns logger object
    GetLogger(name?: string): JL.JSNLogLogger {
        if (name === undefined) {
            name = this.defaultName;
        }

        var logger = this.configuredLoggers.indexOf(name);
        if (logger === -1) {
            this.ConfigureLogger(name);
        }

        return JL(name);
    }

    //all loggers configured with "All" level
    //further configuration is done at server side
    private ConfigureLogger(name: string) {
        JL.setOptions({ "requestId": this.appStorage.getInstanceId() });        
        JL(name).setOptions({ "level": JL.getAllLevel(), "appenders": [this.ajaxAppender, this.consoleAppender] });

        this.configuredLoggers.push(name);
    }
}
