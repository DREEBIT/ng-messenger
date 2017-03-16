"use strict";
const testing_1 = require('@angular/core/testing');
const src_1 = require('../src');
const conversation_list_component_1 = require("../src/components/conversation-list/conversation-list.component");
describe('ngm-conversation-list component', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({ imports: [src_1.NgMessengerModule.forRoot()] });
    });
    it('should say hello world', () => {
        const fixture = testing_1.TestBed.createComponent(conversation_list_component_1.ConversationListComponent);
        fixture.detectChanges();
    });
});
//# sourceMappingURL=conversation-list.component.spec.js.map