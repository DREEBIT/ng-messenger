"use strict";
var paging_loader_1 = require("../src/classes/paging-loader");
var rxjs_1 = require("rxjs");
describe('paging loader', function () {
    var loaderMock;
    beforeEach(function () {
        loaderMock = {
            performLoad: function (start, limit) {
                return rxjs_1.Observable.create(function (observer) {
                    observer.onNext({
                        total: 50,
                        items: [{ id: 'XXX' }]
                    });
                    observer.onCompleted();
                });
            }
        };
    });
    it('base test', function () {
        var pagingLoader = new paging_loader_1.PagingLoader(loaderMock, 1);
        // expect(pagingLoader).to.be.true();
    });
});
//# sourceMappingURL=paging-loader.spec.js.map