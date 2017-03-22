import {OnInit, Component, Output, EventEmitter, Input} from "@angular/core";

@Component({
  selector: 'ngm-message-textfield',
  styleUrls: ['./message-text-field.component.scss'],
  template: `
  <div class="flex">
    <textarea #textarea [(ngModel)]="text" class="flex-fill form-control animated" (keyup.enter)="onEnter(textarea.value)" placeholder="{{placeholder}}" ngm-autosize-textarea rows='1'></textarea>
    <a class="flex-right btn btn-primary btn-link" >{{sendText}}</a>
   </div>`
})
export class MessageTextfieldComponent implements OnInit {

  @Input()
  placeholder: string = 'Type here';

  @Input()
  sendText: string = 'Send';

  text: string;

  @Output()
  onPostText: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {

  }

  onEnter(value){

    this.onPostText.emit(this.text);
    this.text = '';

  }

}
