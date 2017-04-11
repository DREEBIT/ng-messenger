import {Pipe, PipeTransform} from "@angular/core";

export interface TextInterpreterOptions {}

export const REGULAR_EXPRESSION_URL: RegExp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

@Pipe({
  name: 'ngmTextInterpreter'
})
export class TextInterpreterPipe implements PipeTransform {
  public transform(text: string, options?: TextInterpreterOptions): string {

    if (!text) return '';

    return this.urlify(text);
  }


  private urlify(text: string): string {
    return String(text).replace(REGULAR_EXPRESSION_URL, '<a target="_blank" href="$1">$1</a>')
  }
}
