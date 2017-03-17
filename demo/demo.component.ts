import {Component, OnInit} from '@angular/core';
import {ConversationListItem} from "../src/models/conversation-list-item.model";
import {ConversationDetailItem} from "../src/models/conversation-detail.model";

const conversations = require("./demo.conversation.list.json");

@Component({
  selector: 'ngm-demo-app',
  template: require('./demo.component.html')
})
export class DemoComponent implements OnInit{

  conversationListItems: ConversationListItem[] = [];

  conversationDetailItem: ConversationDetailItem;

  activeItemId: string;

  ngOnInit(): void {

    let tmp = conversations.slice(0,50);
    this.conversationListItems = tmp.map((item)=>{
      return {
        id: item.id,
        title: item.title,
        subtitle: item.lastMessage,
        update: item.update,
        info: item.info,
        image: item.image
      }
    });

    this.conversationDetailItem = this.conversationListItems[0];
    this.activeItemId = this.conversationDetailItem.id;


    this.conversationListItems[2].highlight = true;

  }
}
