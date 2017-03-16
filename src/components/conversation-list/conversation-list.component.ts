
import {OnInit, Component, Input} from "@angular/core";
import {ConversationListItem} from "./conversation-list-item.model";

@Component({
  selector: 'ngm-conversation-list',
  styleUrls: ['./conversation-list.component.scss'],
  template: require('./conversation-list.component.html')
})
export class ConversationListComponent implements OnInit {

  @Input()
  conversations: ConversationListItem[];

  @Input()
  emptyMessage: string = "There are no conversations yet";

  ngOnInit(): void {

  }


}
