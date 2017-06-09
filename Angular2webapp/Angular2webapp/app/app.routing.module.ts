import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSiteModule } from './home-site/home-site.module';
import { Area1SiteModule } from './area1-site/area1-site.module';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => HomeSiteModule },
    { path: 'area1', loadChildren: () => Area1SiteModule }//,
    //{ path: '**', redirectTo: 'home' } // <-- maybe use later to redirect to PageNotFoundComponent (with link to home)
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }