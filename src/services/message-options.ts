import {Injectable} from "@angular/core";
import {MessageOptionsModel} from "../models/message-options.model";
import {EmojiMapper} from "../pipes/text-interpreter.pipe";

@Injectable()
export class MessageOptions implements MessageOptionsModel {

  emojiMapping: EmojiMapper[] = [];

}
