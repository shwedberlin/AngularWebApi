import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from "angular-tree-component";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DatexPipe } from './datex.pipe';
import { TreeComponent } from './tree/tree.component';
import { MemberComponent } from './member/member.component';
import { BreadCrumbsComponent } from './breadcrumbs/bread-crumbs.component';



@NgModule({
    imports: [CommonModule, TreeModule, NgxDatatableModule],
    exports: [CommonModule, NgxDatatableModule, DatexPipe, TreeComponent, MemberComponent, BreadCrumbsComponent],
    declarations: [DatexPipe, TreeComponent, MemberComponent, BreadCrumbsComponent],
    providers: [],
})
export class SharedModule { }