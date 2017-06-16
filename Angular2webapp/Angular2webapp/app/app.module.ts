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
import { AppStorage } from './core/app.storage';

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
    constructor(private appStorage: AppStorage, private logger: LoggerService) {
        this.appStorage.setInstaceId(Guid.newGuid());
        this.logger.info('App Modul initialized');        
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
