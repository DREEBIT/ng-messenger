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
const core_1 = require('@angular/core');
const common_1 = require('@angular/common');
const conversation_list_component_1 = require("./components/conversation-list/conversation-list.component");
const conversation_detail_component_1 = require("./components/conversation-detail/conversation-detail.component");
const holder_directive_1 = require("./directives/holder.directive");
const angular2_moment_1 = require("angular2-moment");
const conversation_header_component_1 = require("./components/conversation-header/conversation-header.component");
const messages_list_component_1 = require("./components/messages-list/messages-list.component");
let NgMessengerModule_1 = class NgMessengerModule {
    static forRoot() {
        return {
            ngModule: NgMessengerModule_1
        };
    }
};
let NgMessengerModule = NgMessengerModule_1;
NgMessengerModule = NgMessengerModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            conversation_list_component_1.ConversationListComponent,
            conversation_detail_component_1.ConversationDetailComponent,
            conversation_header_component_1.ConversationHeaderComponent,
            messages_list_component_1.MessagesListComponent,
            holder_directive_1.HolderDirective
        ],
        imports: [
            common_1.CommonModule,
            angular2_moment_1.MomentModule
        ],
        exports: [
            conversation_list_component_1.ConversationListComponent,
            messages_list_component_1.MessagesListComponent,
            conversation_detail_component_1.ConversationDetailComponent
        ]
    }), 
    __metadata('design:paramtypes', [])
], NgMessengerModule);
exports.NgMessengerModule = NgMessengerModule;
//# sourceMappingURL=ngMessenger.module.js.map