"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var conversation_list_component_1 = require("./components/conversation-list/conversation-list.component");
var conversation_detail_component_1 = require("./components/conversation-detail/conversation-detail.component");
var holder_directive_1 = require("./directives/holder.directive");
var angular2_moment_1 = require("angular2-moment");
var conversation_header_component_1 = require("./components/conversation-header/conversation-header.component");
var messages_list_component_1 = require("./components/messages-list/messages-list.component");
var scroll_down_directive_1 = require("./directives/scroll-down.directive");
var tooltip_directive_1 = require("./directives/tooltip.directive");
var NgMessengerModule = (function () {
    function NgMessengerModule() {
    }
    NgMessengerModule.forRoot = function () {
        return {
            ngModule: NgMessengerModule
        };
    };
    NgMessengerModule = __decorate([
        core_1.NgModule({
            declarations: [
                conversation_list_component_1.ConversationListComponent,
                conversation_detail_component_1.ConversationDetailComponent,
                conversation_header_component_1.ConversationHeaderComponent,
                messages_list_component_1.MessagesListComponent,
                holder_directive_1.HolderDirective,
                scroll_down_directive_1.ScrollDownDirective,
                tooltip_directive_1.TooltipDirective
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
        })
    ], NgMessengerModule);
    return NgMessengerModule;
}());
exports.NgMessengerModule = NgMessengerModule;
//# sourceMappingURL=ngMessenger.module.js.map