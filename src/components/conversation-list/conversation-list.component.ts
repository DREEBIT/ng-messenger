
import {OnInit, Component, Input, Output, EventEmitter} from "@angular/core";
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

  @Input()
  activeItemId: string;

  @Output()
  activeItemIdChange: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onListItemClick: EventEmitter<ConversationListItem> = new EventEmitter<ConversationListItem>();

  @Input()
  autoHighlight: boolean = true;

  ngOnInit(): void {

  }

  private onItemClick(item, event){

    if (this.autoHighlight){
      item.highlight = false;
      this.activeItemId = item.id;
      this.activeItemIdChange.emit(this.activeItemId);
    }
    this.onListItemClick.emit(item);

  }

}
