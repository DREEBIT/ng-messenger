"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ConversationDetailComponent = (function () {
    function ConversationDetailComponent() {
    }
    ConversationDetailComponent.prototype.ngOnInit = function () {
    };
    ConversationDetailComponent.prototype.onPostText = function (value) {
        this.messagesList.addMessage({
            id: value + new Date(),
            text: value,
            author: this.author,
            update: new Date(),
            insert: new Date(),
            read: false
        });
    };
    __decorate([
        core_1.ViewChild('messagesList')
    ], ConversationDetailComponent.prototype, "messagesList");
    __decorate([
        core_1.Input()
    ], ConversationDetailComponent.prototype, "conversationDetailItem");
    __decorate([
        core_1.Input()
    ], ConversationDetailComponent.prototype, "loadPerformer");
    __decorate([
        core_1.Input()
    ], ConversationDetailComponent.prototype, "author");
    ConversationDetailComponent = __decorate([
        core_1.Component({
            selector: 'ngm-conversation-detail',
            styleUrls: ['./conversation-detail.component.scss'],
            templateUrl: './conversation-detail.component.html'
        })
    ], ConversationDetailComponent);
    return ConversationDetailComponent;
}());
exports.ConversationDetailComponent = ConversationDetailComponent;
//# sourceMappingURL=conversation-detail.component.js.map