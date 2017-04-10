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
var dom_utils_1 = require("../../classes/dom.utils");
var MessagesListComponent = (function () {
    function MessagesListComponent(_elementRef) {
        this._elementRef = _elementRef;
        this.hideAuthorName = false;
        this.scrolledToTop = new core_1.EventEmitter();
        this.messages = [];
    }
    MessagesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var me = this;
        if (this.loadPerformer) {
            this.loader = new paging_loader_1.PagingLoader(this.loadPerformer);
            this.loader.onChange.subscribe(function (result) {
                var first = _this.loader.wasFirst;
                if (first) {
                    _this.messages = _this.analyseItems(result.reverse());
                }
                else {
                    _this.messages = _this.analyseItems(result.reverse().concat(_this.messages));
                }
                if (first) {
                    if (_this.messages.length > 0) {
                        _this.scrollDown();
                    }
                }
                else {
                    if (result.length > 0) {
                        //let index = this.loader.limit+1;
                        _this.scrollTo(5);
                    }
                }
            });
            this.loader.loadMore(true);
        }
    };
    MessagesListComponent.prototype.getSize = function (item, index) {
        var min = 50;
        var ghostContainer = this['element'].nativeElement.parentElement.children[1].children[0];
        ghostContainer.innerHTML = item.text;
        var positionInfo = ghostContainer.getBoundingClientRect();
        return positionInfo.height > min ? positionInfo.height : min;
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
            item.hideName = true;
            if (!_this.hideAuthorName && item.author.id !== _this.author.id) {
                item.hideName = item.hideAvatar;
            }
            return item;
        });
    };
    MessagesListComponent.prototype.shouldShowArrow = function (message, pre, next) {
        if (!next || next.author.id !== message.author.id) {
            return true;
        }
        return false;
    };
    MessagesListComponent.prototype.onScrolledToMessage = function (message, index, element) {
        this.scrolledToTop.emit(message);
        this.loader.loadMore();
    };
    MessagesListComponent.prototype.scrollTo = function (index, top) {
        if (top === void 0) { top = true; }
        var items = this.scrollContainer['nativeElement'].childNodes;
        var element = items[index];
        element.scrollIntoView();
    };
    MessagesListComponent.prototype.scrollDown = function () {
        var _this = this;
        requestAnimationFrame(function () {
            var element = _this.scrollContainer['nativeElement'];
            if (_this.messages.length > 0) {
                setTimeout(function () {
                    dom_utils_1.DomUtils.scrollDown(element);
                }, 0);
            }
        });
    };
    MessagesListComponent.prototype.onEnd = function (event) {
    };
    MessagesListComponent.prototype.reload = function () {
        this.messages = [];
        this.loader.loadMore(true);
    };
    MessagesListComponent.prototype.loadMore = function (event) {
        if (this.messages && event.start == 0 && this.messages.length > 1) {
            this.loader.loadMore();
        }
    };
    MessagesListComponent.prototype.getHeight = function () {
        return 50;
    };
    MessagesListComponent.prototype.addMessage = function (message) {
        var _this = this;
        var found = this.messages.find(function (item) {
            return item.id === message.id;
        });
        var array;
        if (!found) {
            array = this.messages.concat([message]);
        }
        else {
            var index = this.messages.indexOf(found);
            if (index !== -1) {
                this.messages[index] = message;
            }
            array = this.messages;
        }
        this.messages = this.analyseItems(array);
        requestAnimationFrame(function () {
            _this.scrollDown();
        });
    };
    __decorate([
        core_1.ViewChild('scrollContainer'), 
        __metadata('design:type', core_1.ViewChild)
    ], MessagesListComponent.prototype, "scrollContainer", void 0);
    __decorate([
        core_1.ViewChild('ghostTextContainer'), 
        __metadata('design:type', core_1.ElementRef)
    ], MessagesListComponent.prototype, "ghostTextContainer", void 0);
    __decorate([
        core_1.ViewChild('messageListContainer'), 
        __metadata('design:type', core_1.ElementRef)
    ], MessagesListComponent.prototype, "messageListContainer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MessagesListComponent.prototype, "loadPerformer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MessagesListComponent.prototype, "author", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MessagesListComponent.prototype, "hideAuthorName", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MessagesListComponent.prototype, "scrolledToTop", void 0);
    MessagesListComponent = __decorate([
        core_1.Component({
            selector: 'ngm-messages-list',
            styleUrls: ['./messages-list.component.scss'],
            templateUrl: './messages-list.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MessagesListComponent);
    return MessagesListComponent;
}());
exports.MessagesListComponent = MessagesListComponent;
//# sourceMappingURL=messages-list.component.js.map