import {OnInit, Component, Input, Output, EventEmitter} from "@angular/core";
import {ConversationDetailItem} from "../../models/conversation-detail.model";
import {Message} from "../../models/message.model";
import {Author} from "../../models/author.model";

@Component({
  selector: 'ngm-conversation-detail',
  styleUrls: ['./conversation-detail.component.scss'],
  template: require('./conversation-detail.component.html')
})
export class ConversationDetailComponent implements OnInit {

  @Input()
  conversationDetailItem: ConversationDetailItem;

  @Input()
  messages: Message[];

  @Input()
  author: Author;

  ngOnInit(): void {

  }

}
