import {Component, OnInit} from '@angular/core';
import {ConversationListItem} from "../src/components/conversation-list/conversation-list-item.model";

const conversations = require("./demo.conversations.list.json");

@Component({
  selector: 'ngm-demo-app',
  template: require('./demo.component.html')
})
export class DemoComponent implements OnInit{

  conversationListItems: ConversationListItem[] = [];

  ngOnInit(): void {

    this.conversationListItems = conversations.map((item)=>{
      return {
        title: item.title,
        update: item.update,
        info: item.info
      }
    });

  }
}
