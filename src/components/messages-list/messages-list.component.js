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
var angular2_virtual_scroll_1 = require("angular2-virtual-scroll");
var MessagesListComponent = (function () {
    function MessagesListComponent() {
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
                        var index = _this.loader.limit + 1;
                        _this.scrollTo(index);
                    }
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
        var _this = this;
        if (top === void 0) { top = true; }
        requestAnimationFrame(function () {
            var element = _this.scrollContainer['element']['nativeElement'];
            var d = _this.scrollContainer['calculateDimensions']();
            var height = Math.floor(index / d.itemsPerRow) *
                d.childHeight - Math.max(0, (d.itemsPerCol - 1)) * d.childHeight;
            if (top) {
                var positionInfo = element.getBoundingClientRect();
                height += (positionInfo.height);
            }
            element.scrollTop = height;
        });
    };
    MessagesListComponent.prototype.scrollDown = function () {
        var _this = this;
        requestAnimationFrame(function () {
            var element = _this.scrollContainer['element']['nativeElement'];
            if (_this.messages.length > 0) {
                _this.scrollContainer.refresh();
                //@Todo: Einen besseren weg finden für async scroll
                setTimeout(function () {
                    dom_utils_1.DomUtils.scrollDown(element);
                    setTimeout(function () {
                        dom_utils_1.DomUtils.scrollDown(element);
                    }, 100);
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
    MessagesListComponent.prototype.addMessage = function (message) {
        var _this = this;
        var array = this.messages.concat([message]);
        this.messages = this.analyseItems(array);
        this.scrollContainer.scrollInto(message);
        requestAnimationFrame(function () {
            _this.scrollDown();
        });
    };
    __decorate([
        core_1.ViewChild('scrollContainer'), 
        __metadata('design:type', angular2_virtual_scroll_1.VirtualScrollComponent)
    ], MessagesListComponent.prototype, "scrollContainer", void 0);
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
        __metadata('design:paramtypes', [])
    ], MessagesListComponent);
    return MessagesListComponent;
}());
exports.MessagesListComponent = MessagesListComponent;
//# sourceMappingURL=messages-list.component.js.map