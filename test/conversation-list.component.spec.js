import { TestBed } from '@angular/core/testing';
import { NgMessengerModule } from '../src';
import { ConversationListComponent } from "../src/components/conversation-list/conversation-list.component";
describe('ngm-conversation-list component', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({ imports: [NgMessengerModule.forRoot()] });
    });
    it('should say hello world', function () {
        var fixture = TestBed.createComponent(ConversationListComponent);
        fixture.detectChanges();
    });
});
//# sourceMappingURL=conversation-list.component.spec.js.map