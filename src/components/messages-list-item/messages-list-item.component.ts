import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {Message} from "../../models/message.model";
import {Author} from "../../models/author.model";

@Component({
  selector: 'ngm-messages-list-item',
  styleUrls: ['./messages-list-item.component.scss'],
  templateUrl: './messages-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListItemComponent implements OnInit {

  @Input()
  message: Message;

  @Input()
  enableTooltip: boolean = true;

  @Input()
  author: Author;

  ngOnInit(): void {
  }


}
