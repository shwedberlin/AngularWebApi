import { NgModule, ModuleWithProviders, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AffirmationComponent } from './affirmation/affirmation.component';
import { ClientmenuComponent } from './client-menu/client-menu.component';
import { AlertComponent } from './alert/alert.component';
import { AlertElementComponent } from './alert/alert.element.component';
import { ClientComponent } from './client-menu/client.component';
import { WelcomeComponent } from './welcome/welcome.component';
//Services
import { ApiService } from './api.service';
import { AffirmationProviderService } from './affirmation.provider.service';
import { AlertProviderService } from './alert.provider.service';
import { TestService } from './test.service';
import { UserService } from './user.service';
import { LoggerService } from './logger.service';
import { AppStorage } from './app.storage';
// App configuration
import { AppConfig } from '../app.config';

@NgModule({
    imports: [
        CommonModule, // we use ngFor & ngIf
        FormsModule//,  // we use ngModel
    ],
    exports: [
        HeaderComponent,
        PageNotFoundComponent,
        ClientmenuComponent,
        WelcomeComponent,
        AffirmationComponent,
        AlertComponent
    ],
    declarations: [
        HeaderComponent,
        PageNotFoundComponent,
        ClientmenuComponent,
        WelcomeComponent,
        AffirmationComponent,
        AlertComponent,
        AlertElementComponent,
        ClientComponent
    ],
    providers: [
        ApiService,
        TestService,
        UserService,
        LoggerService,
        AppStorage,
        AffirmationProviderService,
        AlertProviderService,
        AppConfig,        
        {
            provide: APP_INITIALIZER,
            useFactory: initFactory,
            deps: [AppConfig, LoggerService, AppStorage],
            multi: true
        }
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
        console.info("Core constructor called");
    }

    static forRoot(): ModuleWithProviders {
        console.info("Core forRoot() called");
        return {
            ngModule: CoreModule
        };
    }
}

export function initFactory(config: AppConfig, loggerSrvc: LoggerService, appStorage: AppStorage) {
    console.info("Config init factory called");
    appStorage.setInstaceId(Guid.newGuid());

    return () => config.load()
        .then(res => {
            loggerSrvc.Initialize();
                        
            loggerSrvc.GetLogger("NG_App").trace('App: Test LogLevel 1000');
            loggerSrvc.GetLogger("NG_App").debug('App: Test LogLevel 2000');
            loggerSrvc.GetLogger("NG_App").info('App: Test LogLevel 3000');
            loggerSrvc.GetLogger("NG_App").warn('App: Test LogLevel 4000');
            loggerSrvc.GetLogger("NG_App").error('App: Test LogLevel 5000');
            loggerSrvc.GetLogger("NG_App").fatal('App: Test LogLevel 6000');
        });
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