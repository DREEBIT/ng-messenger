import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMessengerModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, NgMessengerModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}