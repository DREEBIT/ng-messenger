
import {Author} from "./author.model";
export interface Message {
  //Message is written by one's self
  author: Author;
  text: string;
  id: string;
  read: boolean;
  insert: Date;
  update: Date;
  hideAvatar?: boolean;
  hideName?:boolean;
  cssClass?: string;
}
