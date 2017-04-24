import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMessengerModule } from '../src';
import { DemoComponent } from './demo.component';
import {MessageOptions} from "../src/services/message-options";
import {DemoMessageOptions} from "./demo.message-options.service";

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, NgMessengerModule.forRoot()],
  bootstrap: [DemoComponent],
  providers: [
    { provide: MessageOptions, useClass: DemoMessageOptions }
  ]
})
export class DemoModule {}
