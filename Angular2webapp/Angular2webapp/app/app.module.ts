import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

/* App Root*/
import { AppComponent } from './app.component';

/* Routing Module*/
import { AppRoutingModule } from './app.routing.module';

/* Feature Modules*/
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ActionMenuComponent } from './core/action-menu/action-menu.component';
import { LoggerService } from './core/logger.service'

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
    bootstrap:    [ AppComponent ]
})
export class AppModule {
    constructor(private logger: LoggerService) {
        this.logger.info('App Modul initialized');
    }
}
