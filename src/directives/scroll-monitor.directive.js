var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Output, EventEmitter, Input } from "@angular/core";
var scrollMonitor = require("scrollMonitor");
export var ScrollMonitorDirective = (function () {
    function ScrollMonitorDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.parentSelector = "div";
        this.onEnterViewport = new EventEmitter();
    }
    ScrollMonitorDirective.prototype.ngAfterViewInit = function () {
        var me = this;
        // let scrollMonitor = scrollMonitor;
        var parent = this.findParentBySelector(this.parentSelector);
        console.log('this._elementRef.nativeElement', this._elementRef.nativeElement);
        console.log('parent', parent);
        if (scrollMonitor && parent) {
            var containerMonitor = scrollMonitor.createContainer(parent);
            var elementWatcher = containerMonitor.create(this._elementRef.nativeElement);
            elementWatcher.fullyEnterViewport(function () {
                me.onEnterViewport.emit();
            });
        }
        else {
        }
    };
    ScrollMonitorDirective.prototype.collectionHas = function (a, b) {
        for (var i = 0, len = a.length; i < len; i++) {
            if (a[i] == b)
                return true;
        }
        return false;
    };
    ScrollMonitorDirective.prototype.findParentBySelector = function (selector) {
        var all = document.querySelectorAll(selector);
        var cur = this._elementRef.nativeElement.parentNode;
        while (cur && !this.collectionHas(all, cur)) {
            cur = cur.parentNode; //go up
        }
        return cur; //will return null if not found
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ScrollMonitorDirective.prototype, "parentSelector", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], ScrollMonitorDirective.prototype, "onEnterViewport", void 0);
    ScrollMonitorDirective = __decorate([
        Directive({
            selector: '[ngm-scroll-monitor]'
        }), 
        __metadata('design:paramtypes', [ElementRef])
    ], ScrollMonitorDirective);
    return ScrollMonitorDirective;
}());
//# sourceMappingURL=scroll-monitor.directive.js.map