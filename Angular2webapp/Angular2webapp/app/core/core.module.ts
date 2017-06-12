import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApiService } from './api.service';

@NgModule({
    imports: [
        CommonModule, // we use ngFor & ngIf
        FormsModule//,  // we use ngModel
    ],
    exports: [ HeaderComponent, PageNotFoundComponent, WelcomeComponent],
    declarations: [HeaderComponent, PageNotFoundComponent, WelcomeComponent],
    providers: [ApiService]
})
export class CoreModule { }