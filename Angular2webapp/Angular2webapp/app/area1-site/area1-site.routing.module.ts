import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Area1SiteComponent } from './area1-site.component';

const routes: Routes = [
    { path: '', component: Area1SiteComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Area1SiteRoutingModule { }

export const routedComponents = [Area1SiteComponent]