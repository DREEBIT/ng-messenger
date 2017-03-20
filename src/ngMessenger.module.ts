import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConversationListComponent} from "./components/conversation-list/conversation-list.component";
import {ConversationDetailComponent} from "./components/conversation-detail/conversation-detail.component";
import {HolderDirective} from "./directives/holder.directive";
import {MomentModule} from "angular2-moment";
import {ConversationHeaderComponent} from "./components/conversation-header/conversation-header.component";
import {MessagesListComponent} from "./components/messages-list/messages-list.component";
import {TooltipDirective} from "./directives/tooltip.directive";
import {ScrollMonitorDirective} from "./directives/scroll-monitor.directive";
import {ScrolledTopDirective} from "./directives/scrolled-top.directive";


@NgModule({
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
})
export class NgMessengerModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgMessengerModule
    };
  }

}
