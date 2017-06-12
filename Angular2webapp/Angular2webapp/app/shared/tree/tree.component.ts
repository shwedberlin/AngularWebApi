import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeElement } from '../../core/test.service';

@Component({
    selector: 'tree-component',
    templateUrl: './tree.component.html'
})
export class TreeComponent {
    @Input() tree: TreeElement[];
    @Input() selected: TreeElement
    @Output() selectedChange: EventEmitter<TreeElement> = new EventEmitter();

    constructor() {
    }
}