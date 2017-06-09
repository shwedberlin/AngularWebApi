import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSiteComponent } from './home-site.component';

const routes: Routes = [
    { path: '', component: HomeSiteComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeSiteRoutingModule { }

export const routedComponents = [HomeSiteComponent]