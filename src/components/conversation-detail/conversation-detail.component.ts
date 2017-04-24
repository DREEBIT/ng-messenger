import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {ConversationDetailItem} from "../../models/conversation-detail.model";
import {Message} from "../../models/message.model";
import {Author} from "../../models/author.model";
import {PagingLoadPerformer} from "../../classes/paging-load-performer";
import {MessagesListComponent} from "../messages-list/messages-list.component";

@Component({
  selector: 'ngm-conversation-detail',
  styleUrls: ['./conversation-detail.component.scss'],
  templateUrl: './conversation-detail.component.html'
})
export class ConversationDetailComponent implements OnInit {

  @ViewChild('messagesList')
  messagesList: MessagesListComponent;

  @Input()
  conversationDetailItem: ConversationDetailItem;

  @Input()
  loadPerformer: PagingLoadPerformer<Message>;

  @Input()
  author: Author;

  ngOnInit(): void {

  }

  onPostText(value){

    this.messagesList.addMessage({
      id: value+new Date(),
      text: value,
      author: this.author,
      update: new Date(),
      insert: new Date(),
      read: false
    })

  }

}
