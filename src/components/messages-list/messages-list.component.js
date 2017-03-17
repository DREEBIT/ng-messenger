"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MessagesListComponent = (function () {
    function MessagesListComponent() {
    }
    MessagesListComponent.prototype.ngOnInit = function () {
        this.messages = this.analyseItems(this.messages);
    };
    MessagesListComponent.prototype.analyseItems = function (items) {
        var _this = this;
        return items.reverse().map(function (item, index, array) {
            var message = item;
            var pre = null;
            var next = null;
            if (index > 0) {
                pre = array[index - 1];
            }
            if (index + 1 < array.length) {
                next = array[index + 1];
            }
            item.hideAvatar = !_this.shouldShowArrow(message, pre, next);
            return item;
        });
    };
    MessagesListComponent.prototype.shouldShowArrow = function (message, pre, next) {
        if (!next || next.author.id !== message.author.id) {
            return true;
        }
        return false;
    };
    __decorate([
        core_1.Input()
    ], MessagesListComponent.prototype, "messages");
    __decorate([
        core_1.Input()
    ], MessagesListComponent.prototype, "author");
    MessagesListComponent = __decorate([
        core_1.Component({
            selector: 'ngm-messages-list',
            styleUrls: ['./messages-list.component.scss'],
            template: require('./messages-list.component.html')
        })
    ], MessagesListComponent);
    return MessagesListComponent;
}());
exports.MessagesListComponent = MessagesListComponent;
//# sourceMappingURL=messages-list.component.js.map