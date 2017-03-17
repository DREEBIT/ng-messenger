"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ScrollDownDirective = (function () {
    function ScrollDownDirective(_elementRef) {
        this._elementRef = _elementRef;
    }
    ScrollDownDirective.prototype.ngAfterViewInit = function () {
        var container = this._elementRef.nativeElement;
        container.scrollTop = container.scrollHeight;
        setTimeout(function () {
        }, 0);
    };
    ScrollDownDirective = __decorate([
        core_1.Directive({
            selector: '[ngm-scroll-down]'
        })
    ], ScrollDownDirective);
    return ScrollDownDirective;
}());
exports.ScrollDownDirective = ScrollDownDirective;
//# sourceMappingURL=scroll-down.directive.js.map