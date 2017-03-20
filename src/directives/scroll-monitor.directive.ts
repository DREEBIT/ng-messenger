import {AfterViewInit, Directive, ElementRef, Output, EventEmitter, Input} from "@angular/core";
let scrollMonitor = require("scrollMonitor");

@Directive({
  selector: '[ngm-scroll-monitor]'
})
export class ScrollMonitorDirective implements AfterViewInit {

  @Input()
  parentSelector: string = "div";

  @Output()
  onEnterViewport: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    let me = this;


    // let scrollMonitor = scrollMonitor;
    let parent = this.findParentBySelector(this.parentSelector);

    console.log('this._elementRef.nativeElement',this._elementRef.nativeElement);
    console.log('parent',parent);


    if (scrollMonitor && parent){
      let containerMonitor = scrollMonitor.createContainer(parent);
      let elementWatcher = containerMonitor.create(this._elementRef.nativeElement);
      elementWatcher.fullyEnterViewport(function() {
        me.onEnterViewport.emit();
      });
    }else {

    }


  }

  collectionHas(a, b) {
    for(let i = 0, len = a.length; i < len; i ++) {
      if(a[i] == b) return true;
    }
    return false;
  }

  findParentBySelector(selector) {
    let all = document.querySelectorAll(selector);
    let cur = this._elementRef.nativeElement.parentNode;
    while(cur && !this.collectionHas(all, cur)) { //keep going up until you find a match
      cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
  }

}
