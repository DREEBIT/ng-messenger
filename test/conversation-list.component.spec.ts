import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';

import { NgMessengerModule } from '../src';
import {ConversationListComponent} from "../src/components/conversation-list/conversation-list.component";

describe('ngm-conversation-list component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [NgMessengerModule.forRoot()]});
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<ConversationListComponent> = TestBed.createComponent(ConversationListComponent);
    fixture.detectChanges();

  });

});
