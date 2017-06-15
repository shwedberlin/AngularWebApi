import { Injectable } from '@angular/core';

import { JL } from 'jsnlog';


@Injectable()
export class LoggerService {
    private innerLogger: JL.JSNLog;

    constructor() {
        JL.setOptions({ "requestId": "ANGLR" });
        var ajaxAppender = JL.createAjaxAppender('ajaxAppender');
        var consoleAppender = JL.createConsoleAppender('consoleAppender');
        JL("AppLogger").setOptions({ "level": JL.getAllLevel(), "appenders": [ajaxAppender, consoleAppender] });
        this.innerLogger = JL;

        this.innerLogger("AppLogger").debug("Client Side Logger initialized");
    }

    info(message: string) {
        this.innerLogger("AppLogger").info("Client Side: "+message);
    }
    
}
