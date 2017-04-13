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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var conversation_list_component_1 = require("./components/conversation-list/conversation-list.component");
var conversation_detail_component_1 = require("./components/conversation-detail/conversation-detail.component");
var holder_directive_1 = require("./directives/holder.directive");
var angular2_moment_1 = require("angular2-moment");
var conversation_header_component_1 = require("./components/conversation-header/conversation-header.component");
var messages_list_component_1 = require("./components/messages-list/messages-list.component");
var tooltip_directive_1 = require("./directives/tooltip.directive");
var messages_list_item_component_1 = require("./components/messages-list-item/messages-list-item.component");
var autosize_textarea_directive_1 = require("./directives/autosize-textarea.directive");
var message_text_field_component_1 = require("./components/message-text-field/message-text-field.component");
var scrolldown_directive_1 = require("./directives/scrolldown.directive");
var onScrollListener_directive_1 = require("./directives/onScrollListener.directive");
var text_interpreter_pipe_1 = require("./pipes/text-interpreter.pipe");
var angular2_virtual_scroll_1 = require("angular2-virtual-scroll");
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
                messages_list_item_component_1.MessagesListItemComponent,
                message_text_field_component_1.MessageTextfieldComponent,
                scrolldown_directive_1.ScrollDownDirective,
                holder_directive_1.HolderDirective,
                tooltip_directive_1.TooltipDirective,
                autosize_textarea_directive_1.AutosizeTextareaDirective,
                onScrollListener_directive_1.OnScrollListenerDirective,
                text_interpreter_pipe_1.TextInterpreterPipe
            ],
            imports: [
                angular2_virtual_scroll_1.VirtualScrollModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                angular2_moment_1.MomentModule
            ],
            exports: [
                conversation_list_component_1.ConversationListComponent,
                messages_list_component_1.MessagesListComponent,
                conversation_detail_component_1.ConversationDetailComponent,
                message_text_field_component_1.MessageTextfieldComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NgMessengerModule);
    return NgMessengerModule;
}());
exports.NgMessengerModule = NgMessengerModule;
//# sourceMappingURL=ngMessenger.module.js.map