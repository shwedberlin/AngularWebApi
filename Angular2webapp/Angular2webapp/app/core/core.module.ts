import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
        AlertProviderService
    ]
})
export class CoreModule { }