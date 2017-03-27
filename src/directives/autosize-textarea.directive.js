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
var AutosizeTextareaDirective = (function () {
    function AutosizeTextareaDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.initHeight = 0;
    }
    AutosizeTextareaDirective.prototype.ngAfterViewInit = function () {
        var el = this._elementRef.nativeElement;
        var autosize = window['autosize'];
        var jQuery = window['autosize'];
        if (autosize) {
            autosize(el);
        }
        this.initHeight = el.style.height;
    };
    AutosizeTextareaDirective.prototype.reset = function () {
        var el = this._elementRef.nativeElement;
        el.style.height = this.initHeight;
    };
    AutosizeTextareaDirective = __decorate([
        core_1.Directive({
            selector: '[ngm-autosize-textarea]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AutosizeTextareaDirective);
    return AutosizeTextareaDirective;
}());
exports.AutosizeTextareaDirective = AutosizeTextareaDirective;
//# sourceMappingURL=autosize-textarea.directive.js.map