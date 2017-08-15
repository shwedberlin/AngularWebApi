import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';

import { TreeElement } from '../../core/test.service';
import { TreeNode } from 'angular-tree-component';

@Component({
    selector: 'tree-component',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.less']
})
export class TreeComponent {
    @Input() tree: TreeElement[];
    @Input() selected: TreeElement
    @Output() selectedChange: EventEmitter<TreeElement> = new EventEmitter();

    nodesArr = this.initNodes();
    options: ITreeOptions = {
        nodeHeight: 30
    };

    constructor() {
    }

    initNodes(): MyTreeNode[] {
        var root: MyTreeNode[] = [
            {
                id: 100,
                name: 'root A',
                isExpanded: true,
                children: [
                    {
                        id: 101,
                        name: 'A child 1',
                        isExpanded: true,
                        children: []
                    },
                    {
                        id: 102,
                        name: 'A child 2',
                        isExpanded: true,
                        children: []
                    },
                    {
                        id: 103,
                        name: 'A child 3',
                        isExpanded: true,
                        children: []
                    }
                ]
            },
            {
                id: 200,
                name: 'root B',
                isExpanded: true,
                children: []
            },
            {
                id: 300,
                name: 'root C',
                isExpanded: true,
                children: [
                    {
                        id: 301,
                        name: 'C child 1',
                        isExpanded: true,
                        children: [
                            {
                                id: 311,
                                name: 'C1 child 1',
                                isExpanded: true,
                                children: []
                            },
                            {
                                id: 312,
                                name: 'C1 child 2',
                                isExpanded: true,
                                children: []
                            }
                        ]
                    },
                    {
                        id: 302,
                        name: 'C child 2',
                        isExpanded: true,
                        children: []
                    }
                ]
            }
        ];

        return root;
    }
}

export class MyTreeNode {
    id: number;
    name: string;
    isExpanded: boolean = true;
    children: MyTreeNode[];
}

export interface RootObject {
    treeNodes: MyTreeNode[];
}
