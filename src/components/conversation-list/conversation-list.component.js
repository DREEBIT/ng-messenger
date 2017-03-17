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
let ConversationListComponent = class ConversationListComponent {
    constructor() {
        this.emptyMessage = "There are no conversations yet";
        this.activeItemIdChange = new core_1.EventEmitter();
        this.onListItemClick = new core_1.EventEmitter();
        this.autoHighlight = true;
    }
    ngOnInit() {
    }
    onItemClick(item, event) {
        if (this.autoHighlight) {
            item.highlight = false;
            this.activeItemId = item.id;
            this.activeItemIdChange.emit(this.activeItemId);
        }
        this.onListItemClick.emit(item);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], ConversationListComponent.prototype, "conversations", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ConversationListComponent.prototype, "emptyMessage", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ConversationListComponent.prototype, "activeItemId", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], ConversationListComponent.prototype, "activeItemIdChange", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], ConversationListComponent.prototype, "onListItemClick", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], ConversationListComponent.prototype, "autoHighlight", void 0);
ConversationListComponent = __decorate([
    core_1.Component({
        selector: 'ngm-conversation-list',
        styleUrls: ['./conversation-list.component.scss'],
        template: require('./conversation-list.component.html')
    }), 
    __metadata('design:paramtypes', [])
], ConversationListComponent);
exports.ConversationListComponent = ConversationListComponent;
//# sourceMappingURL=conversation-list.component.js.map