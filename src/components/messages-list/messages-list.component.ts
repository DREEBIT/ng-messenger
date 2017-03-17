import {OnInit, Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from "@angular/core";
import {Message} from "../../models/message.model";
import {Author} from "../../models/author.model";

@Component({
  selector: 'ngm-messages-list',
  styleUrls: ['./messages-list.component.scss'],
  template: require('./messages-list.component.html')
})
export class MessagesListComponent implements OnInit {

  /**
   * First Item is at the bottom of the list
   */
  @Input()
  messages: Message[];

  @Input()
  author: Author;

  ngOnInit(): void {

    this.messages = this.analyseItems(this.messages);

  }


  analyseItems(items:Message[]):Message[]{

    return items.reverse().map((item, index, array)=>{

      let message = item;
      let pre = null;
      let next = null;

      if (index > 0){
        pre = array[index-1];
      }

      if (index+1 < array.length){
        next = array[index+1];
      }

      item.hideAvatar = !this.shouldShowArrow(message, pre, next);

      return item;

    })

  }


  shouldShowArrow(message, pre, next){


    if (!next || next.author.id !== message.author.id){
      return true;
    }

    return false;
  }
}
