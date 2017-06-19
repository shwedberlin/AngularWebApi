import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AffirmationComponent } from './affirmation/affirmation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApiService } from './api.service';
import { AffirmationProviderService } from './affirmation.provider.service';
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
        WelcomeComponent,
        AffirmationComponent
    ],
    declarations: [
        HeaderComponent,
        PageNotFoundComponent,
        WelcomeComponent,
        AffirmationComponent
    ],
    providers: [
        ApiService,
        TestService,
        UserService,
        LoggerService,
        AppStorage,
        AffirmationProviderService
    ]
})
export class CoreModule { }