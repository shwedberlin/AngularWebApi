import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';
import { JL } from 'jsnlog';

/* App Root*/
import { AppComponent } from './app.component';

/* Routing Module*/
import { AppRoutingModule } from './app.routing.module';

/* Feature Modules*/
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ActionMenuComponent } from './core/action-menu/action-menu.component';
import { LoggerService } from './core/logger.service'
import { AppStorage } from './core/app.storage';

export class UncaughtExceptionHandler implements ErrorHandler {
    handleError(error: any) {
        JL().fatalException('Uncaught Exception', error);
    }
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        CommonModule,
        AppRoutingModule,
        SharedModule,
        CoreModule
    ],
    declarations: [ AppComponent, ActionMenuComponent ],
    bootstrap: [AppComponent],
    providers: [{ provide: ErrorHandler, useClass: UncaughtExceptionHandler }]
})
export class AppModule {
    private loggerName: string = "NG_App";

    constructor(private appStorage: AppStorage, private logger: LoggerService) {
        this.appStorage.setInstaceId(Guid.newGuid());
        this.logger.GetLogger(this.loggerName).info('App Modul initialized');        

        //this.testLogger();
    }

    private testLogger() {
        this.logger.GetLogger(this.loggerName).trace('App: Test LogLevel 1000');
        this.logger.GetLogger(this.loggerName).debug('App: Test LogLevel 2000');
        this.logger.GetLogger(this.loggerName).info('App: Test LogLevel 3000');
        this.logger.GetLogger(this.loggerName).warn('App: Test LogLevel 4000');
        this.logger.GetLogger(this.loggerName).error('App: Test LogLevel 5000');
        this.logger.GetLogger(this.loggerName).fatal('App: Test LogLevel 6000');
    }
}

//temporary solution at this place
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
