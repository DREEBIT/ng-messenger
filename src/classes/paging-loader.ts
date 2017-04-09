import {Observable, Subscription} from "rxjs";
import {EventEmitter} from "@angular/core";
import {PagingLoadPerformer} from "./paging-load-performer";


export class PagingLoader<T> {

  loading: boolean = false;
  total: number = -1;
  items: T[] = [];
  complete: boolean = false;
  currentSubscription: Subscription = null;
  lastResult: any;
  onChange: EventEmitter<T[]> = new EventEmitter();
  wasFirst: boolean = false;

  constructor(private _loadPerformer: PagingLoadPerformer<T>, public limit: number = 50, autoLoad: boolean = false){

    if (autoLoad){
      this.loadMore(true);
    }
  }

  loadMore(first: boolean = false){

    if ((!first && this.total > -1 && this.items.length >= this.total) || this.loading){
      this.complete = true;
      return;
    }

    this.complete = false;
    this.loading = true;

    if (first){
      this.items = [];
      this.total = -1;
    }

    let start = this.items.length;

    if (this.currentSubscription){
      this.currentSubscription.unsubscribe();
    }
    this.currentSubscription = this._loadPerformer.performLoad(start, this.limit).subscribe((result: any)=> {

      this.wasFirst = first;
      this.total = this._loadPerformer.total;
      this.loading = false;
      this.lastResult = result;

      if (Array.isArray(result)){
        if (!this.items){
          this.items = [];
        }
        this.items = this.items.concat(result);
      }else {
        console.warn('Result is not an array',result);
      }

      this.onChange.emit(result);

    }, (error) => {
      this.loading = false;
    });

    return this.currentSubscription;

  }

}
