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
var test_service_1 = require("../../core/test.service");
var TreeComponent = (function () {
    function TreeComponent() {
        this.selectedChange = new core_1.EventEmitter();
    }
    return TreeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TreeComponent.prototype, "tree", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", test_service_1.TreeElement)
], TreeComponent.prototype, "selected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TreeComponent.prototype, "selectedChange", void 0);
TreeComponent = __decorate([
    core_1.Component({
        selector: 'tree-component',
        templateUrl: './tree.component.html'
    }),
    __metadata("design:paramtypes", [])
], TreeComponent);
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=tree.component.js.map