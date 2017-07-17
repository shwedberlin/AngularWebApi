import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule  } from '@angular/common';
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

export class UncaughtExceptionHandler implements ErrorHandler {
    handleError(error: any) {
        JL().fatalException('Uncaught Exception', error);
    }
}

/**
 * The bootstrapper module
 */
@NgModule({
    declarations: [ AppComponent, ActionMenuComponent ],
    bootstrap: [AppComponent],
    providers: [
        { provide: ErrorHandler, useClass: UncaughtExceptionHandler }
    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        CommonModule,
        AppRoutingModule,
        SharedModule,
        CoreModule.forRoot()
    ]
})
export class AppModule {

    constructor() {
        console.info("App constructor called");
    }
}