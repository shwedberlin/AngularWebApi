import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomeSiteComponent } from './home-site.component';
import { HomeSiteRoutingModule } from './home-site.routing.module';

@NgModule({
    imports: [CommonModule, SharedModule, HomeSiteRoutingModule],
    exports: [HomeSiteComponent],
    declarations: [HomeSiteComponent],
    providers: [],
})
export class HomeSiteModule { }