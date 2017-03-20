import { expect } from 'chai';

import {PagingLoader} from "../src/classes/paging-loader";
import {Observable} from "rxjs";

describe('paging loader', () => {

  let loaderMock;

  beforeEach(() => {

    loaderMock = {
      performLoad: (start, limit)=> {
        return Observable.create((observer)=>{
          observer.onNext({
            total: 50,
            items: [{id: 'XXX'}]
          });
          observer.onCompleted();
        });
      }
    }

  });

  it('base test', () => {

    let pagingLoader = new PagingLoader(loaderMock, 1);
    // expect(pagingLoader).to.be.true();

  });

});
