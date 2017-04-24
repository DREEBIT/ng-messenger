import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ConversationListComponent} from "./components/conversation-list/conversation-list.component";
import {ConversationDetailComponent} from "./components/conversation-detail/conversation-detail.component";
import {HolderDirective} from "./directives/holder.directive";
import {MomentModule} from "angular2-moment";
import {ConversationHeaderComponent} from "./components/conversation-header/conversation-header.component";
import {MessagesListComponent} from "./components/messages-list/messages-list.component";
import {TooltipDirective} from "./directives/tooltip.directive";
import {MessagesListItemComponent} from "./components/messages-list-item/messages-list-item.component";
import {AutosizeTextareaDirective} from "./directives/autosize-textarea.directive";
import {MessageTextfieldComponent} from "./components/message-text-field/message-text-field.component";
import {ScrollDownDirective} from "./directives/scrolldown.directive";
import {OnScrollListenerDirective} from "./directives/onScrollListener.directive";
import {TextInterpreterPipe} from "./pipes/text-interpreter.pipe";
import {MessagesListItemExtraComponent} from "./components/messages-list-item-extra/messages-list-item-extra.component";
import {VirtualScrollModule} from "angular2-virtual-scroll";
import {VsFor} from "./directives/ng2-vs-for.directive";
import {MessageOptions} from "./services/message-options";

@NgModule({
  declarations: [
    ConversationListComponent,
    ConversationDetailComponent,
    ConversationHeaderComponent,
    MessagesListComponent,
    MessagesListItemComponent,
    MessagesListItemExtraComponent,
    MessageTextfieldComponent,
    ScrollDownDirective,
    HolderDirective,
    TooltipDirective,
    AutosizeTextareaDirective,
    OnScrollListenerDirective,
    TextInterpreterPipe,
    VsFor
  ],
  imports: [
    VirtualScrollModule,
    CommonModule,
    FormsModule,
    MomentModule
  ],
  exports: [
    ConversationListComponent,
    MessagesListComponent,
    ConversationDetailComponent,
    MessageTextfieldComponent
  ]
})
export class NgMessengerModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgMessengerModule,
      providers: [MessageOptions]
    };
  }

}
