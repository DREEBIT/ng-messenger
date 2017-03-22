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
var MessageTextfieldComponent = (function () {
    function MessageTextfieldComponent() {
        this.placeholder = 'Type here';
        this.sendText = 'Send';
        this.onPostText = new core_1.EventEmitter();
    }
    MessageTextfieldComponent.prototype.ngOnInit = function () {
    };
    MessageTextfieldComponent.prototype.onEnter = function (value) {
        this.onPostText.emit(this.text);
        this.text = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MessageTextfieldComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MessageTextfieldComponent.prototype, "sendText", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MessageTextfieldComponent.prototype, "onPostText", void 0);
    MessageTextfieldComponent = __decorate([
        core_1.Component({
            selector: 'ngm-message-textfield',
            styleUrls: ['./message-text-field.component.scss'],
            template: "\n  <div class=\"flex\">\n    <textarea #textarea [(ngModel)]=\"text\" class=\"flex-fill form-control animated\" (keyup.enter)=\"onEnter(textarea.value)\" placeholder=\"{{placeholder}}\" ngm-autosize-textarea rows='1'></textarea>\n    <a class=\"flex-right btn btn-primary btn-link\" >{{sendText}}</a>\n   </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], MessageTextfieldComponent);
    return MessageTextfieldComponent;
}());
exports.MessageTextfieldComponent = MessageTextfieldComponent;
//# sourceMappingURL=message-text-field.component.js.map