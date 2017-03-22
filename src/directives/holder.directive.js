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
var HolderDirective = (function () {
    function HolderDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.config = {};
    }
    HolderDirective.prototype.ngAfterViewInit = function () {
        if (!this.config)
            this.config = {};
        if (!this.config.theme)
            this.config.theme = "sky";
        if (!this.config.width)
            this.config.width = 50;
        if (!this.config.height)
            this.config.height = 50;
        if (window['Holder']) {
            var Holder = window['Holder'];
            var image = this._elementRef.nativeElement;
            image['src'] = "holder.js/" + this.config.width + "x" + this.config.height + "?" + this.getConfigAsString();
            Holder.run({
                images: image
            });
        }
    };
    HolderDirective.prototype.getConfigAsString = function () {
        var blacklist = ["width", "height"];
        var result = "";
        for (var _i = 0, _a = Object.keys(this.config); _i < _a.length; _i++) {
            var key = _a[_i];
            if (blacklist.indexOf(key) < 0 && this.config[key]) {
                if (result.length === 0) {
                    result = "?";
                }
                else {
                    result += "&";
                }
                result += key + "=" + this.config[key];
            }
        }
        return result;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HolderDirective.prototype, "config", void 0);
    HolderDirective = __decorate([
        core_1.Directive({
            selector: '[ngm-holder]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HolderDirective);
    return HolderDirective;
}());
exports.HolderDirective = HolderDirective;
//# sourceMappingURL=holder.directive.js.map