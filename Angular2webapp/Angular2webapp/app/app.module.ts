import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

/* App Root*/
import { AppComponent } from './app.component';

/* Feature Modules*/
import { CoreModule } from './core/core.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        CommonModule,
        CoreModule
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
