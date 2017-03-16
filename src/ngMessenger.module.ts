import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConversationListComponent} from "./components/conversation-list/conversation-list.component";
import {HolderDirective} from "./directives/holder.directive";
import {MomentModule} from "angular2-moment";

@NgModule({
  declarations: [
    ConversationListComponent,
    HolderDirective
  ],
  imports: [
    CommonModule,
    MomentModule
  ],
  exports: [ConversationListComponent]
})
export class NgMessengerModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgMessengerModule
    };
  }

}
