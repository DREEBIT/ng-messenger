"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ConversationListComponent = (function () {
    function ConversationListComponent() {
        this.emptyMessage = "There are no conversations yet";
        this.activeItemIdChange = new core_1.EventEmitter();
        this.onListItemClick = new core_1.EventEmitter();
        this.autoHighlight = true;
    }
    ConversationListComponent.prototype.ngOnInit = function () {
    };
    ConversationListComponent.prototype.onItemClick = function (item, event) {
        if (this.autoHighlight) {
            item.highlight = false;
            this.activeItemId = item.id;
            this.activeItemIdChange.emit(this.activeItemId);
        }
        this.onListItemClick.emit(item);
    };
    __decorate([
        core_1.Input()
    ], ConversationListComponent.prototype, "conversations");
    __decorate([
        core_1.Input()
    ], ConversationListComponent.prototype, "emptyMessage");
    __decorate([
        core_1.Input()
    ], ConversationListComponent.prototype, "activeItemId");
    __decorate([
        core_1.Output()
    ], ConversationListComponent.prototype, "activeItemIdChange");
    __decorate([
        core_1.Output()
    ], ConversationListComponent.prototype, "onListItemClick");
    __decorate([
        core_1.Input()
    ], ConversationListComponent.prototype, "autoHighlight");
    ConversationListComponent = __decorate([
        core_1.Component({
            selector: 'ngm-conversation-list',
            styleUrls: ['./conversation-list.component.scss'],
            template: require('./conversation-list.component.html')
        })
    ], ConversationListComponent);
    return ConversationListComponent;
}());
exports.ConversationListComponent = ConversationListComponent;
//# sourceMappingURL=conversation-list.component.js.map