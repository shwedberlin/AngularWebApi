import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSiteModule } from './home-site/home-site.module';
import { Area1SiteModule } from './area1-site/area1-site.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { WelcomeComponent } from './core/welcome/welcome.component';

const routes: Routes = [    
    { path: 'welcome', component: WelcomeComponent },
    { path: 'home', loadChildren: () => HomeSiteModule },
    { path: 'area1', loadChildren: () => Area1SiteModule },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }