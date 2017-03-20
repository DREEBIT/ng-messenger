var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { PagingLoader } from "../../classes/paging-loader";
export var MessagesListComponent = (function () {
    function MessagesListComponent() {
        this.scrolledToTop = new EventEmitter();
        this.messages = [];
    }
    MessagesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var me = this;
        if (this.loadPerformer) {
            this.loader = new PagingLoader(this.loadPerformer);
            this.loader.onChange.subscribe(function (result) {
                _this.messages = _this.analyseItems(result).concat(_this.messages);
                if (me.lastTopElement) {
                    _this.scrollContainer.nativeElement.scrollTop = me.lastTopElement.getBoundingClientRect().top;
                }
                else {
                    setTimeout(function () {
                        me.scrollContainer.nativeElement.scrollTop = me.scrollContainer.nativeElement.scrollHeight;
                    });
                }
            });
            this.loader.loadMore(true);
        }
    };
    MessagesListComponent.prototype.analyseItems = function (items) {
        var _this = this;
        return items.map(function (item, index, array) {
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
        }).reverse();
    };
    MessagesListComponent.prototype.shouldShowArrow = function (message, pre, next) {
        if (!next || next.author.id !== message.author.id) {
            return true;
        }
        return false;
    };
    MessagesListComponent.prototype.onScrolledToMessage = function (message, index, element) {
        this.lastTopElement = this.itemList.nativeElement.firstElementChild;
        this.scrolledToTop.emit(message);
        this.loader.loadMore();
    };
    __decorate([
        ViewChild('itemList'), 
        __metadata('design:type', ElementRef)
    ], MessagesListComponent.prototype, "itemList", void 0);
    __decorate([
        ViewChild('scrollContainer'), 
        __metadata('design:type', ElementRef)
    ], MessagesListComponent.prototype, "scrollContainer", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MessagesListComponent.prototype, "loadPerformer", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MessagesListComponent.prototype, "author", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], MessagesListComponent.prototype, "scrolledToTop", void 0);
    MessagesListComponent = __decorate([
        Component({
            selector: 'ngm-messages-list',
            styleUrls: ['./messages-list.component.scss'],
            template: require('./messages-list.component.html')
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesListComponent);
    return MessagesListComponent;
}());
//# sourceMappingURL=messages-list.component.js.map