import {
  OnInit, Component, Output, EventEmitter, Input, ViewChild, ViewRef, ElementRef,
  ViewChildren, QueryList
} from "@angular/core";
import {AutosizeTextareaDirective} from "../../directives/autosize-textarea.directive";

@Component({
  selector: 'ngm-message-textfield',
  styleUrls: ['./message-text-field.component.scss'],
  template: `
  <div class="flex">
    <textarea #textarea [(ngModel)]="text" class="flex-fill form-control animated" (keydown.enter)="onEnter(textarea.value, $event);false" placeholder="{{placeholder}}" ngm-autosize-textarea rows='1'></textarea>
    <a class="flex-right btn btn-link text-primary" (click)="onEnter(sendText, $event)">{{sendText}}</a>
   </div>`
})
export class MessageTextfieldComponent implements OnInit {

  @Input()
  placeholder: string = 'Type here';

  @Input()
  sendText: string = 'Send';

  @ViewChildren(AutosizeTextareaDirective)
  textareas: QueryList<AutosizeTextareaDirective>;

  text: string;

  @Output()
  onPostText: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {

  }

  onEnter(value, event){
    if (!this.text) return;

    this.onPostText.emit(this.text);
    this.text = '';

    this.textareas.forEach((item)=>{
      item.reset();
    });
  }

}
