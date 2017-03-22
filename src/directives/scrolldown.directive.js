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
var ScrollDownDirective = (function () {
    function ScrollDownDirective(_elementRef) {
        this._elementRef = _elementRef;
    }
    ScrollDownDirective.prototype.ngAfterViewInit = function () {
        var element;
        if (this.scrollDownClass) {
            element = this.getChildElement(this.scrollDownClass);
        }
        if (!element) {
            element = this._elementRef.nativeElement;
        }
        setTimeout(function () {
            element.scrollTop = element.scrollHeight;
        }, 0);
    };
    ScrollDownDirective.prototype.getChildElement = function (classname) {
        var doc = this._elementRef.nativeElement;
        var el = null;
        for (var i = 0; i < doc.childNodes.length; i++) {
            if (doc.childNodes[i].className == classname) {
                el = doc.childNodes[i];
                break;
            }
        }
        return el;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ScrollDownDirective.prototype, "scrollDownClass", void 0);
    ScrollDownDirective = __decorate([
        core_1.Directive({
            selector: '[ngm-scroll-down]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ScrollDownDirective);
    return ScrollDownDirective;
}());
exports.ScrollDownDirective = ScrollDownDirective;
//# sourceMappingURL=scrolldown.directive.js.map