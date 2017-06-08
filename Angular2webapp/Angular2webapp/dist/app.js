webpackJsonp([1],{

/***/ 110:
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n    <div class=\"jumbotron\">\r\n        <h1>Hello {{name}}</h1>\r\n        <p>...</p>\r\n    </div>\r\n    <div class=\"container\">\r\n        <article>\r\n            This template holds the TypeScript source code of the angular.io quickstart\r\n        </article>\r\n        <br />\r\n\r\n\r\n      \r\n        <br />\r\n        <p *ngIf=\"!ctrlData\"><em>Fetching WebApi...</em></p>\r\n        <table class='table' *ngIf=\"ctrlData\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Client</th>\r\n                    <th>Server</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let dummydata of ctrlData\">\r\n                    <td>{{ dummydata.clientData }}</td>\r\n                    <td>{{ dummydata.serverData }}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <br />\r\n        <p>{{timestamp}}</p>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-size: 300%;\r\n    color: #34495e;\r\n}\r\n"

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(11);
var platform_browser_1 = __webpack_require__(18);
var http_1 = __webpack_require__(37);
var common_1 = __webpack_require__(17);
var app_component_1 = __webpack_require__(94);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            common_1.CommonModule
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(11);
var http_1 = __webpack_require__(37);
var AppComponent = (function () {
    function AppComponent(http) {
        //http.get('/api/Dummier/Get').subscribe(result => {
        //    this.ctrlData = result.json() as DummyData[];
        //});
        var _this = this;
        this.name = 'Angular 4 (webpack)';
        this.timestamp = 'dummy'; //(new Date()).toString();
        http.get('/api/Dummier/Get').subscribe(function (value) {
            _this.ctrlData = value.json();
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: __webpack_require__(110),
        styles: [__webpack_require__(112)]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(38);
__webpack_require__(39);
var app_module_1 = __webpack_require__(89);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ })

},[95]);
//# sourceMappingURL=app.js.map