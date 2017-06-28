import { Injectable, OnInit } from '@angular/core';

import { JL } from 'jsnlog';

import { AppStorage } from './app.storage';
import { AppConfig } from '../app.config';


@Injectable()
export class LoggerService {
    private defaultName: string = "NG_Client";
    private internalName: string = "NG_LoggerSrvc";
    private internalLogger: JL.JSNLogLogger;

    //JL Logger appenders
    private ajaxAppender = JL.createAjaxAppender('ajaxAppender');
    private consoleAppender = JL.createConsoleAppender('consoleAppender');

    //array of configured logger names
    private configuredLoggers: string[];

    constructor(private config: AppConfig, private appStorage: AppStorage) {
        this.configuredLoggers = new Array();
    }

    Initialize() {
        this.internalLogger = this.GetLogger(this.internalName);
    }

    //remove logger from array if exists.
    //next time this logger will be configured again
    ResetLogger(name: string): boolean {
        var logger = this.configuredLoggers.indexOf(name);
        if (logger > -1) {                    
            this.configuredLoggers.splice(logger, 1);
            this.WriteInternalLog("Logger [" + name + "] resetted.");    
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

    // Loggers configured on server will be configured with both: ajax- and console appenders
    // Others only with console appender
    private ConfigureLogger(name: string) {
        var configuredLogger: any = this.GetServerConfiguration(name);

        if (configuredLogger) {
            this.ajaxAppender.setOptions({ "level": this.ConvertLogLevel(configuredLogger.level) });
            JL(name).setOptions({ "level": JL.getAllLevel(), "appenders": [this.ajaxAppender, this.consoleAppender] });
        }
        else {
            JL(name).setOptions({ "level": JL.getAllLevel(), "appenders": [this.consoleAppender] });
        }

        JL.setOptions({ "requestId": this.appStorage.getInstanceId() });
        this.WriteInternalLog("New logger [" + name + "] configured.");        

        this.configuredLoggers.push(name);
    }

    private GetServerConfiguration(loggerName: string): any {
        var allLoggers = this.config.getConfig("loggers");
        if (allLoggers) {
            for (let logger of allLoggers) {
                if (logger.name === loggerName) {
                    return logger;
                }
            }
            this.WriteInternalLog("No server configuration for [" + loggerName + "] found.");
        } else {
            this.WriteInternalLog("No logger configuration from server found.");
        }
        return null;
    }

    private ConvertLogLevel(configuredLevel: string): number {
        var returnLevel: number;
        switch (configuredLevel) {
            case "VERBOSE":
                returnLevel = JL.getTraceLevel();
                break;
            case "DEBUG":
                returnLevel = JL.getDebugLevel();
                break;
            case "INFO":
                returnLevel = JL.getInfoLevel();
                break;
            case "WARNING":
                returnLevel = JL.getWarnLevel();
                break;
            case "ERROR":
                returnLevel = JL.getErrorLevel();
                break;
            default:
                returnLevel = JL.getOffLevel();
                break;
        }

        return returnLevel;
    }

    private WriteInternalLog(logMessage: string) {
        if (this.internalLogger) {
            this.internalLogger.info(logMessage);
        }
    }
}
