var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationListComponent } from "./components/conversation-list/conversation-list.component";
import { ConversationDetailComponent } from "./components/conversation-detail/conversation-detail.component";
import { HolderDirective } from "./directives/holder.directive";
import { MomentModule } from "angular2-moment";
import { ConversationHeaderComponent } from "./components/conversation-header/conversation-header.component";
import { MessagesListComponent } from "./components/messages-list/messages-list.component";
import { TooltipDirective } from "./directives/tooltip.directive";
import { ScrollMonitorDirective } from "./directives/scroll-monitor.directive";
import { ScrolledTopDirective } from "./directives/scrolled-top.directive";
export var NgMessengerModule = (function () {
    function NgMessengerModule() {
    }
    NgMessengerModule.forRoot = function () {
        return {
            ngModule: NgMessengerModule
        };
    };
    NgMessengerModule = __decorate([
        NgModule({
            declarations: [
                ConversationListComponent,
                ConversationDetailComponent,
                ConversationHeaderComponent,
                MessagesListComponent,
                HolderDirective,
                TooltipDirective,
                ScrollMonitorDirective,
                ScrolledTopDirective
            ],
            imports: [
                CommonModule,
                MomentModule
            ],
            exports: [
                ConversationListComponent,
                MessagesListComponent,
                ConversationDetailComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NgMessengerModule);
    return NgMessengerModule;
}());
//# sourceMappingURL=ngMessenger.module.js.map