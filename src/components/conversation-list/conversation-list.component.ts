import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from "@angular/core";
import {ConversationListItem} from "../../models/conversation-list-item.model";
import {PagingLoader} from "../../classes/paging-loader";
import {PagingLoadPerformer} from "../../classes/paging-load-performer";
import {VirtualScrollComponent} from "angular2-virtual-scroll";

@Component({
  selector: 'ngm-conversation-list',
  styleUrls: ['./conversation-list.component.scss'],
  templateUrl: './conversation-list.component.html'
})
export class ConversationListComponent implements OnInit {

  @ViewChild('virtualScrollContainer')
  virtualScrollContainer: VirtualScrollComponent;

  @Input()
  conversations: ConversationListItem[];

  @Input()
  loadPerformer: PagingLoadPerformer<ConversationListItem>;

  loader: PagingLoader<ConversationListItem>;

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

    if (this.loadPerformer){
      this.loader = new PagingLoader(this.loadPerformer);
      this.loader.onChange.subscribe((result)=>{
        if (!this.conversations){
          this.conversations = [];
        }
        this.conversations = this.conversations.concat(result);
      });

      if (!this.conversations){
        this.loader.loadMore(true);
      }

    }

  }

  private onItemClick(item, event){

    if (this.autoHighlight){
      item.highlight = false;
      this.activeItemId = item.id;
      this.activeItemIdChange.emit(this.activeItemId);
    }
    this.onListItemClick.emit(item);

  }

  loadMore(event){
    if (this.loader && event.end >= this.loader.items.length-1){
      this.loader.loadMore();
    }
  }

}
