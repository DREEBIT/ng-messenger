import { PagingLoader } from "../src/classes/paging-loader";
import { Observable } from "rxjs";
describe('paging loader', function () {
    var loaderMock;
    beforeEach(function () {
        loaderMock = {
            performLoad: function (start, limit) {
                return Observable.create(function (observer) {
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
        var pagingLoader = new PagingLoader(loaderMock, 1);
        // expect(pagingLoader).to.be.true();
    });
});
//# sourceMappingURL=paging-loader.spec.js.map