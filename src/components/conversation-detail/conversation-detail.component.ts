import {OnInit, Component, Input, Output, EventEmitter} from "@angular/core";
import {ConversationDetailItem} from "../../models/conversation-detail.model";

@Component({
  selector: 'ngm-conversation-detail',
  styleUrls: ['./conversation-detail.component.scss'],
  template: require('./conversation-detail.component.html')
})
export class ConversationDetailComponent implements OnInit {

  @Input()
  conversationDetailItem: ConversationDetailItem;

  ngOnInit(): void {

  }

}
