import {Component, OnInit} from '@angular/core';
import {ConversationListItem} from "../src/models/conversation-list-item.model";
import {ConversationDetailItem} from "../src/models/conversation-detail.model";
import {Message} from "../src/models/message.model";
import {Author} from "../src/models/author.model";
const _ = require('lodash');

const conversations = require("./demo.conversation.list.json");
const messages = require("./demo.messages.list.json");

@Component({
  selector: 'ngm-demo-app',
  template: require('./demo.component.html')
})
export class DemoComponent implements OnInit{

  conversationListItems: ConversationListItem[] = [];

  messages: Message[] = [];

  conversationDetailItem: ConversationDetailItem;

  user: Author = {
    id: 'userA',
    name: 'userA'
  };

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


    this.messages = _.orderBy(messages,['insert'],['desc']).slice(0,50).map((item)=>{
      return {
        id: item.id,
        text: item.text,
        insert: item.insert,
        update: item.update,
        image: item.image,
        read: item.read,
        author: {
          id: item.ownerId,
          name: item.ownerId
        }
      }
    });

    this.conversationDetailItem = this.conversationListItems[0];
    this.activeItemId = this.conversationDetailItem.id;


    this.conversationListItems[2].highlight = true;

  }
}
