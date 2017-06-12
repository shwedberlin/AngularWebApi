import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatexPipe } from './datex.pipe';
import { TreeComponent } from './tree/tree.component';
import { MemberComponent } from './member/member.component';


@NgModule({
    imports: [CommonModule],
    exports: [CommonModule, DatexPipe, TreeComponent, MemberComponent],
    declarations: [DatexPipe, TreeComponent, MemberComponent],
    providers: [],
})
export class SharedModule { }