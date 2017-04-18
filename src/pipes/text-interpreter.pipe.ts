import {Pipe, PipeTransform} from "@angular/core";

export interface EmojiMapper {
  regExp: RegExp,
  char: string
}
export interface TextInterpreterOptions {
  url?: boolean,
  emoji?: boolean,
  emojiMapping?: EmojiMapper[]
}

export const REGULAR_EXPRESSION_URL: RegExp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;


@Pipe({
  name: 'ngmTextInterpreter'
})
export class TextInterpreterPipe implements PipeTransform {

  defaultOptions: TextInterpreterOptions = {
    url: true,
    emoji: true,
    emojiMapping: [
      {
        regExp: /(:-?\)|\(smile\)|\(happy\))/ig,
        char: "😊"
      },
      {
        regExp: /(:-?\(|\(worried\)|\(concern\))/ig,
        char: "😟"
      },
      {
        regExp: /(:-?\/|\(confused\)|\(weird\))/ig,
        char: "😕"
      },
      {
        regExp: /(:-?8|\(cool\))/ig,
        char: "😎"
      },
      {
        regExp: /(:-?D)/ig,
        char: "😂"
      },
      {
        regExp: /(:-?\*|\(kiss\))/ig,
        char: "😘"
      },
      {
        regExp: /(<3|\(heart\))/ig,
        char: "❤️"
      },
      {
        regExp: /(\(penguin\)|\(peng\))/ig,
        char: "🐧️"
      },
      {
        regExp: /(\(facepalm\))/ig,
        char: "🤦️"
      },
      {
        regExp: /(\(y\)|\(thumbsup\)|\(yes\)|\(like\))/ig,
        char: "👍"
      },
      {
        regExp: /(\(n\)|\(thumbsdown\)|\(no\)|\(dislike\))/ig,
        char: "👎"
      },
      {
        regExp: /(\(ok\)|\(perfect\))/ig,
        char: "👌"
      },
      {
        regExp: /(\(unicorn\)|\(mystical\))/ig,
        char: "🦄"
      },
      {
        regExp: /(\(atom\))/ig,
        char: "⚛"
      }
    ]
  };

  // more mappings: https://github.com/muan/emojilib/blob/master/emojis.json

  public transform(text: string, options?: TextInterpreterOptions): string {
    options = options || {};
    options = Object.assign(this.defaultOptions, options);

    if (!text) return '';

    if (options.url)
      text = this.urlify(text);

    if (options.emoji)
      text = this.emojify(text, options.emojiMapping);

    return text;
  }

  private urlify(text: string): string {
    return String(text).replace(REGULAR_EXPRESSION_URL, '<a target="_blank" href="$1">$1</a>');
  }

  private emojify(text: string, emojiMapping: EmojiMapper[] = []): string {
    for (let emojiMapper of emojiMapping) {
      text = String(text).replace(emojiMapper.regExp, `<span title="$1">${emojiMapper.char}</span>`);
    }

    return String(text);
  }

}
