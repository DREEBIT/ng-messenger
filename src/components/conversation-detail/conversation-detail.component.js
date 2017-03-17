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
let ConversationDetailComponent = class ConversationDetailComponent {
    ngOnInit() {
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ConversationDetailComponent.prototype, "conversationDetailItem", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], ConversationDetailComponent.prototype, "messages", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ConversationDetailComponent.prototype, "author", void 0);
ConversationDetailComponent = __decorate([
    core_1.Component({
        selector: 'ngm-conversation-detail',
        styleUrls: ['./conversation-detail.component.scss'],
        template: require('./conversation-detail.component.html')
    }), 
    __metadata('design:paramtypes', [])
], ConversationDetailComponent);
exports.ConversationDetailComponent = ConversationDetailComponent;
//# sourceMappingURL=conversation-detail.component.js.map