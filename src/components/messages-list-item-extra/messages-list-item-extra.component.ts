import {Component, Input, OnInit} from "@angular/core";
import {Message} from "../../models/message.model";

export const REGULAR_EXPRESSION_IMAGE: RegExp = /(https?:\/\/.*?\.(?:png|jpe?g|gif))/ig;

@Component({
  selector: 'ngm-messages-list-item-extra',
  styleUrls: ['./messages-list-item-extra.component.scss'],
  templateUrl: './messages-list-item-extra.component.html'
})
export class MessagesListItemExtraComponent implements OnInit {

  @Input()
  message: Message;

  imageUrl: string = '';

  ngOnInit(): void {

    let images: string[] = String(this.message.text).match(REGULAR_EXPRESSION_IMAGE);
    if (images && images.length) {
      this.imageUrl = images[0];
    }


  }


  imageLoadError(event): void {
    this.imageUrl = '';
  }


}
