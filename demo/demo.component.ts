import {Component, OnInit} from '@angular/core';
import {ConversationListItem} from "../src/models/conversation-list-item.model";
import {ConversationDetailItem} from "../src/models/conversation-detail.model";
import {Message} from "../src/models/message.model";
import {Author} from "../src/models/author.model";
import {LoadPerformer} from "../src/classes/paging-loader";
import {Observable} from "rxjs";
const _ = require('lodash');

const conversations = require("./demo.conversation.list.json");
const messages = require("./demo.messages.list.json");

@Component({
  selector: 'ngm-demo-app',
  template: require('./demo.component.html')
})
export class DemoComponent implements OnInit{

  conversationListItems: ConversationListItem[] = [];

  conversationDetailItem: ConversationDetailItem;

  user: Author = {
    id: 'userA',
    name: 'userA'
  };

  loadPerformer: LoadPerformer<Message>;

  conversationLoader: LoadPerformer<ConversationListItem>;

  activeItemId: string;

  ngOnInit(): void {

    this.conversationLoader = {
      total: -1,
      performLoad: (start, limit) => {

        return new Observable((observer)=>{

          this.conversationLoader.total = conversations.length;
          let end = start + limit;
          let page = conversations.slice(start, end).map(function (item) {
            return {
              id: item.id,
              title: item.title,
              subtitle: item.lastMessage,
              update: item.update,
              info: item.info,
              image: item.image
            };
          });

          setTimeout(()=>{
            observer.next(page);
          },1000);

          setTimeout(() => {
            observer.complete();
          }, 2000);

        });

      }
    };



    this.loadPerformer = {
      total: -1,
      performLoad: (start, limit) => {

        return new Observable((observer)=>{

          this.loadPerformer.total = messages.length;
          let end = start + limit;
          let page = messages.slice(start, end).map(function (item) {
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
            };
          });

          setTimeout(()=>{
            observer.next(page);
          },1000);

          setTimeout(() => {
            observer.complete();
          }, 2000);

        });

      }
    };

    this.conversationDetailItem = conversations[0];
    this.activeItemId = this.conversationDetailItem.id;

  }
}
