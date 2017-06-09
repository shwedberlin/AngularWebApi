import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { Area1SiteComponent } from './area1-site.component';
import { Area1SiteRoutingModule } from './area1-site.routing.module';

@NgModule({
    imports: [SharedModule, Area1SiteRoutingModule],
    exports: [Area1SiteComponent],
    declarations: [Area1SiteComponent],
    providers: [],
})
export class Area1SiteModule { }