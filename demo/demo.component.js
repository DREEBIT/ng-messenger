"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var conversations = require("./demo.conversations.list.json");
var DemoComponent = (function () {
    function DemoComponent() {
        this.conversationListItems = [];
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.conversationListItems = conversations.map(function (item) {
            return {
                title: item.title,
                update: item.update,
                info: item.info
            };
        });
    };
    DemoComponent = __decorate([
        core_1.Component({
            selector: 'ngm-demo-app',
            template: require('./demo.component.html')
        })
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map