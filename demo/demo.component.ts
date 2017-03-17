import {Component, OnInit} from '@angular/core';
import {ConversationListItem} from "../src/components/conversation-list/conversation-list-item.model";

const conversations = require("./demo.conversation.list.json");

@Component({
  selector: 'ngm-demo-app',
  template: require('./demo.component.html')
})
export class DemoComponent implements OnInit{

  conversationListItems: ConversationListItem[] = [];

  activeItemId: string;

  ngOnInit(): void {

    this.conversationListItems = conversations.map((item)=>{
      return {
        id: item.id,
        title: item.title,
        subtitle: item.lastMessage,
        update: item.update,
        info: item.info,
        image: item.image
      }
    });

    this.activeItemId = this.conversationListItems[0].id;

    this.conversationListItems[2].highlight = true;

  }
}
