import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSiteModule } from './home-site/home-site.module';
import { Area1SiteModule } from './area1-site/area1-site.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { WelcomeComponent } from './core/welcome/welcome.component';

const routes: Routes = [    
    { path: 'welcome', component: WelcomeComponent },       //Component w/o Menu item
    { path: 'home', loadChildren: () => HomeSiteModule },   //Feature Modul with own Routing
    { path: 'area1', loadChildren: () => Area1SiteModule }, //Feature Modul with own Routing
    { path: '', redirectTo: 'home', pathMatch: 'full' },    //Empty Route
    { path: '**', component: PageNotFoundComponent }        //"404" Route
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }