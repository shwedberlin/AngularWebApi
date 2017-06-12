import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
    public tree: TreeElement[];

    constructor() {
        this.tree = new Array();
        this.tree.push(new TreeElement(1, "A", "first"));
        this.tree.push(new TreeElement(2, "B", "first"));
        this.tree.push(new TreeElement(3, "C", "first"));
        this.tree.push(new TreeElement(4, "D", "first"));
        this.tree.push(new TreeElement(5, "E", "first"));
        this.tree.push(new TreeElement(6, "F", "first"));
    }

    getCurrentTree(): TreeElement[] {
        return this.tree;
    }

    getMembers(treeElement: TreeElement): Member[] {
        let members: Member[] = new Array();
        members.push(new Member(1, treeElement.name + ".Meber1", "first"));
        members.push(new Member(2, treeElement.name + ".Meber2", "first"));
        members.push(new Member(3, treeElement.name + ".Meber3", "first"));

        return members;
    }
}

export class TreeElement {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

export class Member {
    id: number;
    name: string;
    organisation: string;

    constructor(id: number, name: string, organisation: string) {
        this.id = id;
        this.name = name;
        this.organisation = organisation;
    }
}