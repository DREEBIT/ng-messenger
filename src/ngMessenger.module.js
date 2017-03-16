"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var helloWorld_component_1 = require('./helloWorld.component');
var NgMessengerModule = (function () {
    function NgMessengerModule() {
    }
    NgMessengerModule.forRoot = function () {
        return {
            ngModule: NgMessengerModule
        };
    };
    NgMessengerModule = __decorate([
        core_1.NgModule({
            declarations: [
                helloWorld_component_1.HelloWorldComponent
            ],
            imports: [common_1.CommonModule],
            exports: [helloWorld_component_1.HelloWorldComponent]
        })
    ], NgMessengerModule);
    return NgMessengerModule;
}());
exports.NgMessengerModule = NgMessengerModule;
//# sourceMappingURL=ngMessenger.module.js.map