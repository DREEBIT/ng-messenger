import {OnInit, Component, Input, Output, EventEmitter} from "@angular/core";
import {ConversationDetailItem} from "../../models/conversation-detail.model";

@Component({
  selector: 'ngm-conversation-header',
  styleUrls: ['./conversation-header.component.scss'],
  templateUrl: './conversation-header.component.html'
})
export class ConversationHeaderComponent implements OnInit {

  @Input()
  conversationDetailItem: ConversationDetailItem;

  ngOnInit(): void {

  }

}
