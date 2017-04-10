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
var OnScrollListenerDirective = (function () {
    function OnScrollListenerDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.onScrollTop = new core_1.EventEmitter();
    }
    OnScrollListenerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var me = this;
        this._elementRef.nativeElement.addEventListener("scroll", function () {
            if (_this._elementRef.nativeElement.scrollTop === 0) {
                me.onScrollTop.emit();
            }
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], OnScrollListenerDirective.prototype, "onScrollTop", void 0);
    OnScrollListenerDirective = __decorate([
        core_1.Directive({
            selector: '[ngm-on-scroll-listener]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OnScrollListenerDirective);
    return OnScrollListenerDirective;
}());
exports.OnScrollListenerDirective = OnScrollListenerDirective;
//# sourceMappingURL=onScrollListener.directive.js.map