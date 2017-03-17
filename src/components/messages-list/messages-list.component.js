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
const core_1 = require("@angular/core");
let MessagesListComponent = class MessagesListComponent {
    ngOnInit() {
        this.messages = this.analyseItems(this.messages);
    }
    analyseItems(items) {
        return items.reverse().map((item, index, array) => {
            let message = item;
            let pre = null;
            let next = null;
            if (index > 0) {
                pre = array[index - 1];
            }
            if (index + 1 < array.length) {
                next = array[index + 1];
            }
            item.hideAvatar = !this.shouldShowArrow(message, pre, next);
            return item;
        });
    }
    shouldShowArrow(message, pre, next) {
        if (!next || next.author.id !== message.author.id) {
            return true;
        }
        return false;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], MessagesListComponent.prototype, "messages", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], MessagesListComponent.prototype, "author", void 0);
MessagesListComponent = __decorate([
    core_1.Component({
        selector: 'ngm-messages-list',
        styleUrls: ['./messages-list.component.scss'],
        template: require('./messages-list.component.html')
    }), 
    __metadata('design:paramtypes', [])
], MessagesListComponent);
exports.MessagesListComponent = MessagesListComponent;
//# sourceMappingURL=messages-list.component.js.map