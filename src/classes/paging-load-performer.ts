import {Observable} from "rxjs";

export interface PagingLoadPerformer<T> {
  total: number,
  performLoad(start: number, limit: number):Observable<T[]>
}
