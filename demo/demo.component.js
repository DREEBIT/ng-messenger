"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require("rxjs");
var _ = require('lodash');
var conversations = require("./demo.conversation.list.json");
var messages = require("./demo.messages.list.json");
var DemoComponent = (function () {
    function DemoComponent() {
        this.conversationListItems = [];
        this.user = {
            id: 'userA',
            name: 'userA'
        };
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tmp = conversations.slice(0, 50);
        this.conversationListItems = tmp.map(function (item) {
            return {
                id: item.id,
                title: item.title,
                subtitle: item.lastMessage,
                update: item.update,
                info: item.info,
                image: item.image
            };
        });
        this.loadPerformer = {
            total: -1,
            performLoad: function (start, limit) {
                return new rxjs_1.Observable(function (observer) {
                    _this.loadPerformer.total = messages.length;
                    var end = start + limit;
                    var page = messages.slice(start, end).map(function (item) {
                        return {
                            id: item.id,
                            text: item.text,
                            insert: item.insert,
                            update: item.update,
                            image: item.image,
                            read: item.read,
                            author: {
                                id: item.ownerId,
                                name: item.ownerId
                            }
                        };
                    });
                    setTimeout(function () {
                        observer.next(page);
                    }, 1000);
                    setTimeout(function () {
                        observer.complete();
                    }, 2000);
                });
            }
        };
        this.conversationDetailItem = this.conversationListItems[0];
        this.activeItemId = this.conversationDetailItem.id;
        this.conversationListItems[2].highlight = true;
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