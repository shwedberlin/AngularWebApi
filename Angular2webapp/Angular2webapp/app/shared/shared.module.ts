import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatexPipe } from './datex.pipe';

@NgModule({
    imports: [CommonModule],
    exports: [CommonModule, DatexPipe],
    declarations: [DatexPipe],
    providers: [],
})
export class SharedModule { }