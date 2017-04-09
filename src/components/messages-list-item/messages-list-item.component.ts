import {OnInit, Component, Input} from "@angular/core";
import {Message} from "../../models/message.model";
import {Author} from "../../models/author.model";

@Component({
  selector: 'ngm-messages-list-item',
  styleUrls: ['./messages-list-item.component.scss'],
  templateUrl: './messages-list-item.component.html'
})
export class MessagesListItemComponent implements OnInit {

  @Input()
  message: Message;

  @Input()
  author: Author;

  ngOnInit(): void {
  }


}
