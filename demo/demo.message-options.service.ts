import {Injectable} from "@angular/core";
import {MessageOptions} from "../src/services/message-options";
import {EmojiMapper} from "../src/pipes/text-interpreter.pipe";

@Injectable()
export class DemoMessageOptions extends MessageOptions {
  emojiMapping: EmojiMapper[] = [
    {
      regExp: /(\(wave\))/ig,
      char: "👋"
    }
  ]
}
