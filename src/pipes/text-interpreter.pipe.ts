import {Pipe, PipeTransform} from "@angular/core";

export interface TextInterpreterOptions {
  url?: boolean
}

export const REGULAR_EXPRESSION_URL: RegExp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;


@Pipe({
  name: 'ngmTextInterpreter'
})
export class TextInterpreterPipe implements PipeTransform {

  defaultOptions: TextInterpreterOptions = {
    url: true
  };

  public transform(text: string, options?: TextInterpreterOptions): string {
    options = options || {};
    options = Object.assign(this.defaultOptions, options);

    if (!text) return '';

    if (options.url)
      text = this.urlify(text);

    return text;
  }

  private urlify(text: string): string {
    return String(text).replace(REGULAR_EXPRESSION_URL, '<a target="_blank" href="$1">$1</a>');
  }

}
