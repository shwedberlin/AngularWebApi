"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestService = (function () {
    function TestService() {
        this.tree = new Array();
        this.tree.push(new TreeElement(1, "A", "first"));
        this.tree.push(new TreeElement(2, "B", "first"));
        this.tree.push(new TreeElement(3, "C", "first"));
        this.tree.push(new TreeElement(4, "D", "first"));
        this.tree.push(new TreeElement(5, "E", "first"));
        this.tree.push(new TreeElement(6, "F", "first"));
    }
    TestService.prototype.getCurrentTree = function () {
        return this.tree;
    };
    TestService.prototype.getMembers = function (treeElement) {
        var members = new Array();
        members.push(new Member(1, treeElement.name + ".Meber1", "first"));
        members.push(new Member(2, treeElement.name + ".Meber2", "first"));
        members.push(new Member(3, treeElement.name + ".Meber3", "first"));
        return members;
    };
    return TestService;
}());
TestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TestService);
exports.TestService = TestService;
var TreeElement = (function () {
    function TreeElement(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    return TreeElement;
}());
exports.TreeElement = TreeElement;
var Member = (function () {
    function Member(id, name, organisation) {
        this.id = id;
        this.name = name;
        this.organisation = organisation;
    }
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=test.service.js.map