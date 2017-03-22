"use strict";
var testing_1 = require('@angular/core/testing');
var src_1 = require('../src');
var conversation_list_component_1 = require("../src/components/conversation-list/conversation-list.component");
describe('ngm-conversation-list component', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ imports: [src_1.NgMessengerModule.forRoot()] });
    });
    it('should say hello world', function () {
        var fixture = testing_1.TestBed.createComponent(conversation_list_component_1.ConversationListComponent);
        fixture.detectChanges();
    });
});
//# sourceMappingURL=conversation-list.component.spec.js.map