import { Component } from '@angular/core';

@Component({
  selector: 'ngm-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'ng-messenger';
}
