import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { AffirmationComponent } from './affirmation/affirmation.component';
//import { UserService } from './user/user.service';
//import { ApiService } from './api.service';
//import { TestService } from './test.service';
//import { TestProviderService } from './test-provider.service';

@NgModule({
    imports: [
        CommonModule, // we use ngFor & ngIf
        FormsModule   // we use ngModel
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class CoreModule { }