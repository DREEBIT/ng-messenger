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
var core_1 = require("@angular/core");
var paging_loader_1 = require("../../classes/paging-loader");
var ConversationListComponent = (function () {
    function ConversationListComponent() {
        this.emptyMessage = "There are no conversations yet";
        this.activeItemIdChange = new core_1.EventEmitter();
        this.onListItemClick = new core_1.EventEmitter();
        this.autoHighlight = true;
    }
    ConversationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.conversations && this.loadPerformer) {
            this.loader = new paging_loader_1.PagingLoader(this.loadPerformer);
            this.loader.onChange.subscribe(function (result) {
                if (!_this.conversations) {
                    _this.conversations = [];
                }
                _this.conversations = _this.conversations.concat(result);
            });
            this.loader.loadMore(true);
        }
    };
    ConversationListComponent.prototype.onItemClick = function (item, event) {
        if (this.autoHighlight) {
            item.highlight = false;
            this.activeItemId = item.id;
            this.activeItemIdChange.emit(this.activeItemId);
        }
        this.onListItemClick.emit(item);
    };
    ConversationListComponent.prototype.loadMore = function (event) {
        if (event.end >= this.loader.items.length - 1) {
            console.log('Load more');
            this.loader.loadMore();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ConversationListComponent.prototype, "conversations", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ConversationListComponent.prototype, "loadPerformer", void 0);
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
            templateUrl: './conversation-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ConversationListComponent);
    return ConversationListComponent;
}());
exports.ConversationListComponent = ConversationListComponent;
//# sourceMappingURL=conversation-list.component.js.map